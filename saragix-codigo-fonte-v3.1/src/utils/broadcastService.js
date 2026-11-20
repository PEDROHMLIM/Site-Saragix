import { Chess } from 'chess.js';

// Lista de fallback caso a rede do usuário esteja offline ou a API demore a responder
const FALLBACK_BROADCASTS = [
  {
    tour: {
      id: '6PTzCQFL',
      name: 'Total Chess World Championship Tour Pilot 2026 | Finals',
      slug: 'total-chess-world-championship-tour-pilot-2026-finals',
      info: {
        format: '6x 4-player Knockout',
        location: 'Budapest, Hungary',
        players: 'Carlsen, Caruana, Abdusattorov, So, Praggnanandhaa, Keymer, Firouzja, Giri',
        website: 'https://www.totalchess.com/tournaments/budapest-2026',
      },
      image: 'https://image.lichess.org/display?fmt=webp&h=400&op=thumbnail&path=jWkPUSVnnT9p.webp&w=800&sig=0a3ed4d93fe61b2646da0f79e5b8e2f039582e66',
      url: 'https://lichess.org/broadcast/total-chess-world-championship-tour-pilot-2026-finals/6PTzCQFL',
    },
    rounds: [
      {
        id: '7nz7m7pM',
        name: 'Game 1 | Blitz',
        startsAt: Date.now() - 3600000,
        ongoing: true,
        finished: false,
      },
      {
        id: '3ZezyGLU',
        name: 'Game 2 | Blitz',
        startsAt: Date.now() + 7200000,
        ongoing: false,
        finished: false,
      },
    ],
  },
  {
    tour: {
      id: 'VAvN8M7d',
      name: 'Total Chess World Championship Tour Pilot 2026 | Group Stage',
      slug: 'total-chess-world-championship-tour-pilot-2026-group-stage',
      info: {
        format: 'Round Robin',
        location: 'Budapest, Hungary',
        players: 'Carlsen, Nepomniachtchi, Abdusattorov, Hong, Caruana',
        website: 'https://www.totalchess.com',
      },
      image: 'https://image.lichess.org/display?fmt=webp&h=400&op=thumbnail&path=jWkPUSVnnT9p.webp&w=800&sig=0a3ed4d93fe61b2646da0f79e5b8e2f039582e66',
      url: 'https://lichess.org/broadcast/total-chess-world-championship-tour-pilot-2026-group-stage-combined/VAvN8M7d',
    },
    rounds: [
      {
        id: 'VAvN8M7d',
        name: 'Rodada 9',
        startsAt: Date.now() - 86400000,
        ongoing: false,
        finished: true,
      },
    ],
  },
];

/**
 * Normaliza objetos retornados por diferentes endpoints da API do Lichess
 * (/api/broadcast, /api/broadcast/top, /api/broadcast/search e /api/broadcast/{id})
 */
export function normalizeBroadcastItem(item) {
  if (!item) return null;

  // Formato com chave .tour (ex: /api/broadcast, /api/broadcast/top, /api/broadcast/{id})
  if (item.tour) {
    const t = item.tour;
    const rounds = item.rounds || (item.round ? [item.round] : []);
    return {
      tour: {
        id: t.id,
        name: t.name || 'Torneio Oficial',
        slug: t.slug || t.id,
        image: t.image || t.patch || null,
        info: {
          format: t.info?.format || (t.tier ? `Tier ${t.tier}` : ''),
          location: t.info?.location || t.location || '',
          players: t.info?.players || t.description || t.markup || '',
          website: t.info?.website || t.url || '',
        },
        url: t.url || `https://lichess.org/broadcast/${t.slug || 'tour'}/${t.id}`,
      },
      rounds,
    };
  }

  // Formato direto de Tour (ex: /api/broadcast/search onde o item é o próprio tour)
  if (item.id && item.name) {
    return {
      tour: {
        id: item.id,
        name: item.name,
        slug: item.slug || item.id,
        image: item.image || item.patch || null,
        info: {
          format: item.tier ? `Tier ${item.tier}` : '',
          location: item.location || '',
          players: item.description || item.markup || '',
          website: item.url || '',
        },
        url: item.url || `https://lichess.org/broadcast/${item.slug || 'tour'}/${item.id}`,
      },
      rounds: item.rounds || [],
    };
  }

  return null;
}

/**
 * Extrai o ID de transmissão a partir de uma URL do Lichess ou string pura
 */
export function extractLichessBroadcastId(input) {
  if (!input || typeof input !== 'string') return null;
  const str = input.trim();

  const urlMatch = str.match(/lichess\.org\/broadcast\/[^/]+(?:\/[^/]+)*\/([a-zA-Z0-9_-]{6,12})/);
  if (urlMatch) return urlMatch[1];

  const apiMatch = str.match(/lichess\.org\/api\/broadcast\/(?:round\/)?([a-zA-Z0-9_-]{6,12})/);
  if (apiMatch) return apiMatch[1];

  if (/^[a-zA-Z0-9_-]{6,12}$/.test(str)) {
    return str;
  }

  return null;
}

/**
 * Resolve um link completo do Lichess ou ID de torneio/rodada diretamente
 */
export async function fetchBroadcastByUrlOrId(input) {
  const extractedId = extractLichessBroadcastId(input);
  if (!extractedId) return null;

  // 1. Tenta carregar como ID de torneio
  try {
    const tourData = await fetchTournamentDetails(extractedId);
    if (tourData && tourData.tour) {
      return normalizeBroadcastItem(tourData);
    }
  } catch {}

  // 2. Se não encontrou como torneio, tenta carregar como ID de rodada
  try {
    const roundRes = await fetch(`https://lichess.org/api/broadcast/round/${extractedId}`);
    if (roundRes.ok) {
      const roundData = await roundRes.json();
      if (roundData && roundData.tour?.id) {
        const fullTour = await fetchTournamentDetails(roundData.tour.id);
        if (fullTour && fullTour.tour) {
          return normalizeBroadcastItem(fullTour);
        }
      }
      if (roundData && roundData.tour) {
        return normalizeBroadcastItem(roundData);
      }
    }
  } catch {}

  return null;
}

/**
 * Busca transmissões em todo o arquivo histórico do Lichess (/api/broadcast/search)
 * Permite encontrar torneios passados como "Floripa Chess 2023", "Tata Steel 2022", etc.
 */
export async function searchBroadcasts(query, page = 1) {
  if (!query || !query.trim()) return [];
  const clean = query.trim();

  // Verifica se o termo digitado é um link direto ou ID
  const directMatch = await fetchBroadcastByUrlOrId(clean);
  if (directMatch) {
    return [directMatch];
  }

  try {
    const res = await fetch(`https://lichess.org/api/broadcast/search?q=${encodeURIComponent(clean)}&page=${page}`);
    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status}`);
    }
    const data = await res.json();
    const list = data?.currentPageResults || (Array.isArray(data) ? data : []);
    return list.map(normalizeBroadcastItem).filter(Boolean);
  } catch (err) {
    console.warn(`Falha na busca de transmissões passadas por "${clean}":`, err);
    return [];
  }
}

/**
 * Busca torneios passados / histórico paginado do Lichess (/api/broadcast/top)
 */
export async function fetchPastBroadcasts(page = 1) {
  try {
    const res = await fetch(`https://lichess.org/api/broadcast/top?page=${page}`);
    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status}`);
    }
    const data = await res.json();
    const list = data?.currentPageResults || (Array.isArray(data) ? data : []);
    return {
      results: list.map(normalizeBroadcastItem).filter(Boolean),
      nbPages: data?.nbPages || 1,
      currentPage: data?.currentPage || page,
    };
  } catch (err) {
    console.warn(`Falha ao buscar transmissões passadas (página ${page}):`, err);
    return { results: [], nbPages: 1, currentPage: page };
  }
}

/**
 * Busca a lista de torneios e transmissões oficiais do Lichess
 */
export async function fetchOfficialBroadcasts(limit = 40) {
  try {
    const res = await fetch(`https://lichess.org/api/broadcast?nb=${limit}`, {
      headers: {
        Accept: 'application/x-ndjson',
      },
    });

    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status} ao carregar transmissões do Lichess.`);
    }

    const text = await res.text();
    const lines = text.trim().split('\n').filter(Boolean);
    const parsed = lines
      .map((line) => {
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      })
      .filter((item) => item && item.tour)
      .map(normalizeBroadcastItem)
      .filter(Boolean);

    if (parsed.length > 0) {
      return parsed;
    }
    return FALLBACK_BROADCASTS.map(normalizeBroadcastItem);
  } catch (err) {
    console.warn('Falha ao buscar transmissões ao vivo do Lichess, usando dados locais de fallback:', err);
    return FALLBACK_BROADCASTS.map(normalizeBroadcastItem);
  }
}

/**
 * Busca detalhes e rodadas de um torneio específico
 */
export async function fetchTournamentDetails(tourId) {
  try {
    const res = await fetch(`https://lichess.org/api/broadcast/${tourId}`);
    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn(`Falha ao buscar detalhes do torneio ${tourId}:`, err);
    return null;
  }
}

/**
 * Constrói pares de lances (Brancas e Pretas) com relógio e lance SAN para a tabela de notação ao vivo
 */
export function buildMovePairsFromHistory(historyVerbose, rawPgn) {
  if (!historyVerbose || historyVerbose.length === 0) return [];

  // Extrai relógios das anotações %clk do PGN de forma sequencial (par = brancas, ímpar = pretas)
  const allClks = [...rawPgn.matchAll(/\{[^}]*?%clk\s+([0-9:.]+)/g)].map((m) => m[1]);
  const whiteClks = [];
  const blackClks = [];
  allClks.forEach((clk, idx) => {
    if (idx % 2 === 0) whiteClks.push(clk);
    else blackClks.push(clk);
  });

  const pairs = [];
  for (let i = 0; i < historyVerbose.length; i += 2) {
    const moveIndex = Math.floor(i / 2);
    const whiteMove = historyVerbose[i];
    const blackMove = historyVerbose[i + 1] || null;

    pairs.push({
      moveNumber: moveIndex + 1,
      whiteHalfIndex: i + 1,
      whiteSan: whiteMove ? whiteMove.san : '',
      whiteFrom: whiteMove ? whiteMove.from : '',
      whiteTo: whiteMove ? whiteMove.to : '',
      whiteClk: whiteClks[moveIndex] || '',
      blackHalfIndex: blackMove ? i + 2 : null,
      blackSan: blackMove ? blackMove.san : '',
      blackFrom: blackMove ? blackMove.from : '',
      blackTo: blackMove ? blackMove.to : '',
      blackClk: blackClks[moveIndex] || '',
    });
  }

  return pairs;
}

/**
 * Converte string de relógio ("H:MM:SS" ou "MM:SS") em total de segundos
 */
export function clockToSeconds(str) {
  if (!str || typeof str !== 'string') return 0;
  const parts = str.trim().split(':').map(Number);
  if (parts.length === 3) {
    return (parts[0] || 0) * 3600 + (parts[1] || 0) * 60 + (parts[2] || 0);
  }
  if (parts.length === 2) {
    return (parts[0] || 0) * 60 + (parts[1] || 0);
  }
  if (parts.length === 1 && !isNaN(parts[0])) {
    return parts[0];
  }
  return 0;
}

/**
 * Converte total de segundos em string formatada ("H:MM:SS" ou "MM:SS")
 * No apuro de tempo (< 20s), exibe décimos de segundo (ex: "00:04.8")
 */
export function secondsToClock(totalSeconds, showTenths = false) {
  if (isNaN(totalSeconds) || totalSeconds < 0) totalSeconds = 0;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const tenths = Math.floor(Math.abs((totalSeconds % 1) * 10)) % 10;

  const pad = (n) => String(n).padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  }

  // Em partidas de blitz/bullet com menos de 20 segundos, exibe décimos
  if (showTenths || (totalSeconds < 20 && totalSeconds > 0)) {
    return `${pad(minutes)}:${pad(seconds)}.${tenths}`;
  }

  return `${pad(minutes)}:${pad(seconds)}`;
}

/**
 * Faz o parse de um único PGN de partida de forma ultra-otimizada
 */
export function parseSingleGamePgn(gamePgn, roundId = '', index = 0) {
  if (!gamePgn || typeof gamePgn !== 'string') return null;

  const getTag = (name) => {
    const match = gamePgn.match(new RegExp(`\\[${name}\\s+"([^"]*)"\\]`));
    return match ? match[1] : '';
  };

  const white = getTag('White') || 'Brancas';
  const black = getTag('Black') || 'Pretas';
  const whiteElo = getTag('WhiteElo');
  const blackElo = getTag('BlackElo');
  const whiteTitle = getTag('WhiteTitle');
  const blackTitle = getTag('BlackTitle');
  const whiteFideId = getTag('WhiteFideId') || getTag('WhiteFIDEID') || getTag('FideIdWhite') || '';
  const blackFideId = getTag('BlackFideId') || getTag('BlackFIDEID') || getTag('FideIdBlack') || '';
  const whiteFed = getTag('WhiteCountry') || getTag('WhiteFed') || '';
  const blackFed = getTag('BlackCountry') || getTag('BlackFed') || '';
  const result = getTag('Result') || '*';
  const board = getTag('Board') || String(index + 1);
  const eco = getTag('ECO');
  const opening = getTag('Opening');
  const timeControl = getTag('TimeControl');
  const round = getTag('Round');

  // Extrai os relógios de forma sequencial exata (par = brancas, ímpar = pretas)
  const allClks = [...gamePgn.matchAll(/\{[^}]*?%clk\s+([0-9:.]+)/g)].map((m) => m[1]);
  const whiteClks = [];
  const blackClks = [];
  allClks.forEach((clk, idx) => {
    if (idx % 2 === 0) whiteClks.push(clk);
    else blackClks.push(clk);
  });
  const lastWhiteClk = whiteClks.length > 0 ? whiteClks[whiteClks.length - 1] : '';
  const lastBlackClk = blackClks.length > 0 ? blackClks[blackClks.length - 1] : '';
  const whiteSeconds = clockToSeconds(lastWhiteClk);
  const blackSeconds = clockToSeconds(lastBlackClk);

  // Extrai o último lance jogado, histórico e estado do tabuleiro
  let lastMoveSan = '';
  let lastMoveSquares = [];
  let currentFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  let moveCount = 0;
  let turn = 'w';
  let isCheck = false;
  let isGameOver = false;
  let movePairs = [];
  let historyFens = ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'];
  let historySquares = [null];
  let historySans = [''];

  const buildHistoryPositions = (history) => {
    if (!history || history.length === 0) {
      return {
        fens: ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'],
        squares: [null],
        sans: [''],
      };
    }
    const replay = new Chess();
    const fens = [replay.fen()];
    const squares = [null];
    const sans = [''];
    for (const m of history) {
      try {
        replay.move(m);
        fens.push(replay.fen());
        squares.push([m.from, m.to]);
        sans.push(m.san);
      } catch {
        break;
      }
    }
    return { fens, squares, sans };
  };

  const hasMoveTokens = /\b1\.\s/.test(gamePgn);
  let parseSuccessful = false;

  try {
    const chess = new Chess();
    // Sanitiza chaves consecutivas { ... } { ... } presentes em transmissões anotadas do Lichess que quebram o parser
    const sanitizedPgn = gamePgn.replace(/(\}\s*\{)/g, ' ');
    chess.loadPgn(sanitizedPgn);
    currentFen = chess.fen();
    turn = chess.turn();
    isCheck = chess.inCheck();
    isGameOver = chess.isGameOver() || result !== '*';

    const verboseHistory = chess.history({ verbose: true });
    moveCount = verboseHistory.length;

    if (verboseHistory.length > 0) {
      const lastMove = verboseHistory[verboseHistory.length - 1];
      const moveNumber = Math.ceil(verboseHistory.length / 2);
      const isWhite = verboseHistory.length % 2 === 1;
      lastMoveSan = `${moveNumber}${isWhite ? '.' : '...'} ${lastMove.san}`;
      lastMoveSquares = [lastMove.from, lastMove.to];
      const histPos = buildHistoryPositions(verboseHistory);
      historyFens = histPos.fens;
      historySquares = histPos.squares;
      historySans = histPos.sans;
    }

    movePairs = buildMovePairsFromHistory(verboseHistory, gamePgn);
    parseSuccessful = true;
  } catch {
    // Fallback robusto 1: se houver anotação atípica que quebre o chess.js, remove comentários e carrega os lances puros
    try {
      const stripped = gamePgn.replace(/\{[^}]*\}/g, '').replace(/\([^)]*\)/g, '');
      const chess = new Chess();
      chess.loadPgn(stripped);
      currentFen = chess.fen();
      turn = chess.turn();
      isCheck = chess.inCheck();
      isGameOver = chess.isGameOver() || result !== '*';

      const verboseHistory = chess.history({ verbose: true });
      moveCount = verboseHistory.length;

      if (verboseHistory.length > 0) {
        const lastMove = verboseHistory[verboseHistory.length - 1];
        const moveNumber = Math.ceil(verboseHistory.length / 2);
        const isWhite = verboseHistory.length % 2 === 1;
        lastMoveSan = `${moveNumber}${isWhite ? '.' : '...'} ${lastMove.san}`;
        lastMoveSquares = [lastMove.from, lastMove.to];
        const histPos = buildHistoryPositions(verboseHistory);
        historyFens = histPos.fens;
        historySquares = histPos.squares;
        historySans = histPos.sans;
      }

      movePairs = buildMovePairsFromHistory(verboseHistory, gamePgn);
      parseSuccessful = true;
    } catch {
      // Fallback robusto 2: se o chunk cortou no meio de um lance (ex: "24. N"), remove o último token truncado
      if (hasMoveTokens) {
        try {
          const stripped = gamePgn.replace(/\{[^}]*\}/g, '').replace(/\([^)]*\)/g, '');
          const trimmed = stripped.replace(/\s+[^\s]+$/, '');
          const chess = new Chess();
          chess.loadPgn(trimmed);
          currentFen = chess.fen();
          turn = chess.turn();
          isCheck = chess.inCheck();
          isGameOver = chess.isGameOver() || result !== '*';

          const verboseHistory = chess.history({ verbose: true });
          moveCount = verboseHistory.length;

          if (verboseHistory.length > 0) {
            const lastMove = verboseHistory[verboseHistory.length - 1];
            const moveNumber = Math.ceil(verboseHistory.length / 2);
            const isWhite = verboseHistory.length % 2 === 1;
            lastMoveSan = `${moveNumber}${isWhite ? '.' : '...'} ${lastMove.san}`;
            lastMoveSquares = [lastMove.from, lastMove.to];
            const histPos = buildHistoryPositions(verboseHistory);
            historyFens = histPos.fens;
            historySquares = histPos.squares;
            historySans = histPos.sans;
          }

          movePairs = buildMovePairsFromHistory(verboseHistory, gamePgn);
          parseSuccessful = true;
        } catch {}
      }
    }
  }

  // Se o PGN continha lances iniciados ("1.") mas o parse resultou em 0 lances devido a chunk incompleto,
  // não retorna a partida com posição inicial falsa, evitando que o tabuleiro volte para o início.
  if (hasMoveTokens && moveCount === 0 && !parseSuccessful) {
    return null;
  }

  const uniqueId = `${roundId ? `${roundId}_` : ''}b${board}_${white}_${black}`.replace(/[^a-zA-Z0-9_-]/g, '_');

  return {
    id: uniqueId,
    boardNumber: Number(board) || index + 1,
    board,
    white,
    black,
    whiteElo,
    blackElo,
    whiteTitle,
    blackTitle,
    whiteFideId,
    blackFideId,
    whiteFed,
    blackFed,
    result,
    eco,
    opening,
    timeControl,
    round,
    lastWhiteClk,
    lastBlackClk,
    whiteSeconds,
    blackSeconds,
    receivedAt: Date.now(),
    lastMoveSan,
    lastMoveSquares,
    currentFen,
    historyFens,
    historySquares,
    historySans,
    moveCount,
    turn,
    isCheck,
    isGameOver,
    movePairs,
    rawPgn: gamePgn,
  };
}

/**
 * Faz o parse de um multi-PGN retornado pelo endpoint de rodada do Lichess
 */
export function parseMultiGamePgn(pgnText, roundId = '') {
  if (!pgnText || !pgnText.trim()) return [];

  const rawGames = pgnText
    .split(/(?:\r?\n)+(?=\[Event[\s"])/i)
    .map((g) => g.trim())
    .filter((g) => g.length > 0 && /\[Event[\s"]/i.test(g));

  return rawGames.map((gamePgn, index) => parseSingleGamePgn(gamePgn, roundId, index)).filter(Boolean);
}

/**
 * Busca todas as partidas de uma rodada em formato PGN e converte em objetos prontos para visualização.
 * Utiliza cache-busting via query param (?_t=...) sem headers customizados que quebrem CORS no navegador.
 */
export async function fetchRoundGames(roundId) {
  try {
    const cacheBuster = Date.now();
    const res = await fetch(`https://lichess.org/api/broadcast/round/${roundId}.pgn?_t=${cacheBuster}`);
    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status} ao carregar PGN da rodada.`);
    }
    const pgnText = await res.text();
    return parseMultiGamePgn(pgnText, roundId);
  } catch (err) {
    console.warn(`Falha ao carregar PGN da rodada ${roundId}:`, err);
    // Fallback: tenta buscar diretamente sem query parameter se houver bloqueio de proxy
    try {
      const fallbackRes = await fetch(`https://lichess.org/api/broadcast/round/${roundId}.pgn`);
      if (fallbackRes.ok) {
        const txt = await fallbackRes.text();
        return parseMultiGamePgn(txt, roundId);
      }
    } catch {}
    return [];
  }
}

/**
 * Inicia a leitura do stream em tempo real da rodada no Lichess (GET /api/stream/broadcast/round/{roundId}.pgn).
 * Ultra-rápido para blitz: processa apenas blocos novos ou atualizados sem re-parsear partidas anteriores.
 * Retorna uma função de limpeza para abortar o stream quando o componente for desmontado ou a rodada mudar.
 */
export function streamRoundGames(roundId, onGamesUpdated, onError) {
  const controller = new AbortController();
  let buffer = '';
  let active = true;
  const lastPgnByBoard = new Map();

  async function startStreaming() {
    try {
      const res = await fetch(`https://lichess.org/api/stream/broadcast/round/${roundId}.pgn`, {
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        throw new Error(`HTTP ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (active) {
        const { value, done } = await reader.read();
        if (done) break;
        if (!value) continue;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        // Procura limites de eventos [Event ...]
        const eventIndices = [];
        const regex = /\[Event[\s"]/gi;
        let match;
        while ((match = regex.exec(buffer)) !== null) {
          eventIndices.push(match.index);
        }

        if (eventIndices.length === 0) {
          continue;
        }

        const updatedGames = [];

        // Para cada evento intermediário completo (onde já conhecemos o início do próximo)
        for (let i = 0; i < eventIndices.length - 1; i++) {
          const gameText = buffer.slice(eventIndices[i], eventIndices[i + 1]).trim();
          if (gameText) {
            const parsed = parseSingleGamePgn(gameText, roundId, i);
            if (parsed && parsed.board) {
              const prevPgn = lastPgnByBoard.get(String(parsed.board));
              if (prevPgn !== gameText) {
                lastPgnByBoard.set(String(parsed.board), gameText);
                updatedGames.push(parsed);
              }
            }
          }
        }

        // Para o último evento no buffer:
        const lastIndex = eventIndices[eventIndices.length - 1];
        const tailText = buffer.slice(lastIndex);

        // Se o tail termina com quebras duplas ou resultado final, está completo
        const isTailComplete =
          /(?:\r?\n){2,}$/.test(tailText) ||
          /(?:1-0|0-1|1\/2-1\/2|\*)\s*$/m.test(tailText.trim());

        if (isTailComplete) {
          const trimmedTail = tailText.trim();
          if (trimmedTail) {
            const parsed = parseSingleGamePgn(trimmedTail, roundId, eventIndices.length - 1);
            if (parsed && parsed.board) {
              const prevPgn = lastPgnByBoard.get(String(parsed.board));
              if (prevPgn !== trimmedTail) {
                lastPgnByBoard.set(String(parsed.board), trimmedTail);
                updatedGames.push(parsed);
              }
            }
          }
          buffer = '';
        } else {
          // Mantém o tail no buffer para o próximo chunk completar
          buffer = tailText;

          // Parse otimista se já tiver lances jogados (evita esperar próximo chunk em blitz acelerado)
          if (tailText.includes('1.')) {
            const trimmed = tailText.trim();
            const parsed = parseSingleGamePgn(trimmed, roundId, eventIndices.length - 1);
            if (parsed && parsed.board && parsed.moveCount > 0) {
              const prevPgn = lastPgnByBoard.get(String(parsed.board));
              if (prevPgn !== trimmed) {
                lastPgnByBoard.set(String(parsed.board), trimmed);
                updatedGames.push(parsed);
              }
            }
          }
        }

        // Dispara atualização imediata apenas para as mesas que tiveram novos lances
        if (updatedGames.length > 0 && active) {
          onGamesUpdated(updatedGames);
        }

        // Previne vazamento de memória em transmissões de maratona
        if (buffer.length > 100000) {
          const lastEventPos = buffer.lastIndexOf('[Event ');
          if (lastEventPos > 0) {
            buffer = buffer.slice(lastEventPos);
          }
        }
      }
    } catch (err) {
      if (err.name !== 'AbortError' && active) {
        console.warn('Stream de transmissão fechado ou erro:', err.message);
        onError?.(err);
      }
    }
  }

  startStreaming();

  return () => {
    active = false;
    try {
      controller.abort();
    } catch {}
  };
}
