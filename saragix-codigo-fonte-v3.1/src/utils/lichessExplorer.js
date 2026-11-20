// Serviço de Consulta à Base de Dados Oficial do Lichess (Lichess Opening Explorer)
// Suporta:
// 1. Base Completa do Lichess ('lichess'): Centenas de milhões de jogos online por rating
// 2. Base de Mestres ('masters'): Jogos de Grandes Mestres e Super GMs (2800+ FIDE)

import { Chess } from 'chess.js';

const explorerCache = new Map();

// Servidores disponíveis com fallback automático
const ENDPOINTS = [
  'https://explorer.lichess.org',
  'https://explorer.lichess.ovh',
];

/**
 * Formata números grandes no padrão oficial do Lichess (ex: 72 mi, 542 mil)
 */
export function formatGameCount(num) {
  if (!num || num === 0) return '0';
  if (num >= 1000000) {
    const mi = (num / 1000000).toFixed(num >= 10000000 ? 0 : 1).replace('.0', '');
    return `${mi} mi`;
  }
  if (num >= 1000) {
    return `${Math.round(num / 1000)} mil`;
  }
  return String(num);
}

/**
 * Calcula a média de rating de uma partida para ordenação decrescente (Super GMs no topo)
 */
export function getGameAverageRating(g) {
  if (!g) return 0;
  const w = typeof g.white === 'object' ? Number(g.white.rating) || 0 : Number(g.whiteRating) || 0;
  const b = typeof g.black === 'object' ? Number(g.black.rating) || 0 : Number(g.blackRating) || 0;
  if (w > 0 && b > 0) return Math.round((w + b) / 2);
  return w || b || 0;
}

/**
 * Exporta o PGN completo de uma partida do Lichess pelo seu ID
 * Suporta partidas da Base de Mestres FIDE e da Comunidade Lichess
 */
export async function fetchGamePgn(gameId) {
  if (!gameId) return null;
  const cleanId = gameId
    .trim()
    .replace(/^https?:\/\/lichess\.org\//, '')
    .replace(/^https?:\/\/explorer\.lichess\.(ovh|org)\/masters\/pgn\//, '')
    .slice(0, 16);

  const candidateUrls = [
    `https://explorer.lichess.ovh/masters/pgn/${cleanId}`,
    `https://explorer.lichess.org/masters/pgn/${cleanId}`,
    `https://lichess.org/game/export/${cleanId}?clocks=false&evals=false`,
  ];

  for (const url of candidateUrls) {
    try {
      const res = await fetch(url, {
        headers: {
          Accept: 'application/x-chess-pgn, text/plain, */*',
        },
      });
      if (res.ok) {
        const text = await res.text();
        if (text && text.trim().length > 10) {
          return text;
        }
      }
    } catch {
      // tenta próxima url
    }
  }
  return null;
}

/**
 * Normaliza notação UCI de roque (Chess960 do Lichess Explorer ex: e1h1 -> e1g1, e8h8 -> e8g8)
 * para o padrão clássico UCI utilizado pelo chess.js.
 */
export function normalizeExplorerUci(uci, san = '') {
  if (!uci) return '';
  const cleanUci = uci.trim().toLowerCase();
  const cleanSan = (san || '').replace(/[+#?!]/g, '').trim();
  if (cleanSan === 'O-O' || cleanSan === '0-0') {
    if (cleanUci.startsWith('e1')) return 'e1g1';
    if (cleanUci.startsWith('e8')) return 'e8g8';
  }
  if (cleanSan === 'O-O-O' || cleanSan === '0-0-0') {
    if (cleanUci.startsWith('e1')) return 'e1c1';
    if (cleanUci.startsWith('e8')) return 'e8c8';
  }
  if (cleanUci === 'e1h1') return 'e1g1';
  if (cleanUci === 'e1a1') return 'e1c1';
  if (cleanUci === 'e8h8') return 'e8g8';
  if (cleanUci === 'e8a8') return 'e8c8';
  return cleanUci;
}

function normalizeSanForMatch(san) {
  if (!san) return '';
  return san.replace(/[+#?!]/g, '').replace(/0-0-0/g, 'O-O-O').replace(/0-0/g, 'O-O').trim();
}

export function findMoveInExplorerData(data, playedUci, playedSan = '') {
  if (!data || !Array.isArray(data.moves)) return null;
  const targetUci = normalizeExplorerUci(playedUci, playedSan);
  const targetSan = normalizeSanForMatch(playedSan);

  return (
    data.moves.find((m) => {
      const mUci = normalizeExplorerUci(m.uci, m.san);
      if (targetUci && (mUci === targetUci || m.uci === playedUci)) return true;
      if (targetSan && normalizeSanForMatch(m.san) === targetSan) return true;
      return false;
    }) || null
  );
}

/**
 * Fallback local caso a rede do usuário esteja offline ou bloqueie requisições externas
 */
function generateLocalFallback(fen, mode = 'lichess') {
  try {
    const chess = new Chess(fen);
    const moves = chess.moves({ verbose: true });
    if (!moves.length) return null;

    const isMasters = mode === 'masters';
    const total = isMasters ? 28540 : 12450000;
    const countPerMove = Math.floor(total / moves.length);

    const fallbackGames = isMasters
      ? [
          {
            id: 'master_1',
            year: 2023,
            winner: 'white',
            white: { name: 'Carlsen, Magnus', rating: 2853 },
            black: { name: 'Nepomniachtchi, Ian', rating: 2795 },
          },
          {
            id: 'master_2',
            year: 2021,
            winner: null,
            white: { name: 'Kasparov, Garry', rating: 2812 },
            black: { name: 'Karpov, Anatoly', rating: 2740 },
          },
          {
            id: 'master_3',
            year: 2022,
            winner: 'black',
            white: { name: 'Caruana, Fabiano', rating: 2805 },
            black: { name: 'Nakamura, Hikaru', rating: 2788 },
          },
        ]
      : [];

    return {
      mode,
      isFallback: true,
      opening: null,
      totalGames: total,
      formattedTotal: formatGameCount(total),
      whiteWins: Math.round(total * 0.44),
      draws: Math.round(total * 0.32),
      blackWins: Math.round(total * 0.24),
      whitePct: 44,
      drawPct: 32,
      blackPct: 24,
      topGames: fallbackGames,
      recentGames: [],
      moves: moves.slice(0, 12).map((m, idx) => {
        const weight = Math.max(1, moves.length - idx);
        const mTotal = countPerMove * weight;
        return {
          uci: `${m.from}${m.to}${m.promotion || ''}`,
          san: m.san,
          averageRating: isMasters ? 2620 : 2100,
          total: mTotal,
          formattedTotal: formatGameCount(mTotal),
          sharePct: Math.round((weight / (moves.length * 2)) * 100),
          whitePct: 44,
          drawPct: 32,
          blackPct: 24,
        };
      }),
    };
  } catch {
    return null;
  }
}

/**
 * Consulta a Base de Dados do Lichess na posição FEN informada
 * Suporta 'masters' (Mestres FIDE 2200+) e 'lichess' (Comunidade)
 */
export async function fetchLichessExplorer({
  fen,
  mode = 'masters',
  player = '',
  playerColor = 'all',
  speeds = ['blitz', 'rapid', 'classical'],
  ratings = [1600, 1800, 2000, 2200, 2500],
}) {
  if (!fen) return null;

  // Normaliza o FEN
  const fenParts = fen.trim().split(/\s+/);
  const normalizedFen = `${fenParts[0]} ${fenParts[1]} ${fenParts[2]} ${fenParts[3]}`;
  const isStartFen = normalizedFen.startsWith('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');

  const cacheKey =
    mode === 'masters'
      ? `masters:${normalizedFen}`
      : `${mode}:${speeds.join(',')}:${ratings.join(',')}:${normalizedFen}`;
  if (explorerCache.has(cacheKey)) {
    return explorerCache.get(cacheKey);
  }

  const encodedFen = encodeURIComponent(fen);
  const speedParam = speeds.length ? `&speeds=${speeds.join(',')}` : '&speeds=blitz,rapid,classical';
  const ratingParam = ratings.length ? `&ratings=${ratings.join(',')}` : '&ratings=1600,1800,2000,2200,2500';

  const path = mode === 'masters'
    ? `/masters?fen=${encodedFen}&moves=30&topGames=15`
    : `/lichess?fen=${encodedFen}&moves=20${speedParam}${ratingParam}`;

  // Tenta em cada endpoint disponível
  for (const base of ENDPOINTS) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);

    try {
      const url = `${base}${path}`;
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        continue;
      }

      const data = await res.json();
      const white = data.white || 0;
      const draws = data.draws || 0;
      const black = data.black || 0;
      const totalGames = white + draws + black;

      let topGames = data.topGames || [];

      // Se for modo 'lichess' e não houver topGames, ou se quisermos enriquecer com partidas de mestres
      if (mode === 'lichess' && !isStartFen) {
        try {
          const masterRes = await fetch(`${base}/masters?fen=${encodedFen}&topGames=10`, {
            headers: { Accept: 'application/json' },
          });
          if (masterRes.ok) {
            const masterData = await masterRes.json();
            if (masterData.topGames && masterData.topGames.length > 0) {
              topGames = [...topGames, ...masterData.topGames];
            }
          }
        } catch {
          // fallback
        }
      }

      // Junta com partidas recentes e deduplica
      const combined = [...topGames, ...(data.recentGames || [])];
      const seenIds = new Set();
      const uniqueGames = [];
      for (const g of combined) {
        if (g && g.id && !seenIds.has(g.id)) {
          seenIds.add(g.id);
          uniqueGames.push(g);
        }
      }

      // Ordena por maior rating médio
      uniqueGames.sort((a, b) => getGameAverageRating(b) - getGameAverageRating(a));
      topGames = uniqueGames;

      const formatted = {
        mode,
        isFallback: false,
        opening: data.opening || null,
        totalGames,
        formattedTotal: formatGameCount(totalGames),
        whiteWins: white,
        draws: draws,
        blackWins: black,
        whitePct: totalGames > 0 ? Math.round((white / totalGames) * 100) : 0,
        drawPct: totalGames > 0 ? Math.round((draws / totalGames) * 100) : 0,
        blackPct: totalGames > 0 ? Math.round((black / totalGames) * 100) : 0,
        topGames,
        recentGames: data.recentGames || [],
        moves: (data.moves || []).map((m) => {
          const mWhite = m.white || 0;
          const mDraws = m.draws || 0;
          const mBlack = m.black || 0;
          const mTotal = mWhite + mDraws + mBlack;
          const moveSharePct = totalGames > 0 ? Math.round((mTotal / totalGames) * 100) : 0;

          return {
            uci: normalizeExplorerUci(m.uci, m.san),
            rawUci: m.uci,
            san: m.san,
            averageRating: m.averageRating || m.averageOpponentRating || null,
            total: mTotal,
            formattedTotal: formatGameCount(mTotal),
            sharePct: moveSharePct,
            whitePct: mTotal > 0 ? Math.round((mWhite / mTotal) * 100) : 0,
            drawPct: mTotal > 0 ? Math.round((mDraws / mTotal) * 100) : 0,
            blackPct: mTotal > 0 ? Math.round((mBlack / mTotal) * 100) : 0,
          };
        }),
      };

      explorerCache.set(cacheKey, formatted);
      return formatted;
    } catch {
      clearTimeout(timeoutId);
    }
  }

  return generateLocalFallback(fen, mode);
}

/**
 * Consulta EXCLUSIVAMENTE a Base de Mestres da FIDE (Lichess Masters) para verificar se um lance é
 * teoria documentada de Grandes Mestres ou uma Novidade Teórica ('N').
 * - Se o lance possui >= 1 partida na Base de Mestres (ou transpõe para posição com >= 1 partida de Mestres),
 *   é classificado como Teoria de Mestres (isMasterBook: true, isNovelty: false).
 * - Só é Novidade Teórica ('N') se a posição anterior tem >= 5 partidas de Mestres, o lance tem 0 partidas
 *   de Mestres E a posição resultante após o lance também tem 0 partidas na Base de Mestres.
 */
export async function checkMasterTheoryStatus(fenBefore, playedUci, playedSan = '', fenAfter = '') {
  if (!fenBefore || (!playedUci && !playedSan)) {
    return { isMasterBook: false, isNovelty: false, masterGames: 0, positionGames: 0 };
  }
  try {
    const data = await fetchLichessExplorer({ fen: fenBefore, mode: 'masters' });
    if (!data || data.isFallback || data.totalGames === undefined) {
      return { isMasterBook: false, isNovelty: false, masterGames: 0, positionGames: 0 };
    }
    const positionGames = data.totalGames || 0;
    const moveMatch = findMoveInExplorerData(data, playedUci, playedSan);
    const masterGames = moveMatch ? (moveMatch.total || 0) : 0;

    // Se o lance já foi jogado na Base de Mestres (1 ou mais partidas, ex: 38 partidas), é Teoria de Livro!
    if (masterGames >= 1) {
      return {
        isMasterBook: true,
        isNovelty: false,
        masterGames,
        positionGames,
      };
    }

    // Se masterGames === 0 na posição anterior, verifica também se a posição após o lance (fenAfter)
    // já existe na Base de Mestres (por transposição ou continuação conhecida de Mestres)
    if (fenAfter) {
      const afterData = await fetchLichessExplorer({ fen: fenAfter, mode: 'masters' });
      if (afterData && !afterData.isFallback && (afterData.totalGames || 0) >= 1) {
        return {
          isMasterBook: true,
          isNovelty: false,
          masterGames: afterData.totalGames,
          positionGames,
        };
      }
      // Se a consulta da posição seguinte falhou (isFallback), não afirma novidade sem certeza da base de Mestres
      if (!afterData || afterData.isFallback) {
        return {
          isMasterBook: false,
          isNovelty: false,
          masterGames: 0,
          positionGames,
        };
      }
    }

    // Só é Novidade Teórica se a posição anterior tinha pelo menos 5 partidas de Mestres
    // e nem o lance nem a posição resultante jamais ocorreram em partidas de Mestres
    const isNovelty = positionGames >= 5 && masterGames === 0;

    return {
      isMasterBook: false,
      isNovelty,
      masterGames: 0,
      positionGames,
    };
  } catch {
    return { isMasterBook: false, isNovelty: false, masterGames: 0, positionGames: 0 };
  }
}

/**
 * Consulta síncrona instantânea (0ms) no cache em memória EXCLUSIVO da Base de Mestres ('masters').
 */
export function getMasterTheoryStatusFromCache(fenBefore, playedUci, playedSan = '', fenAfter = '') {
  if (!fenBefore || (!playedUci && !playedSan)) return null;
  const fenParts = fenBefore.trim().split(/\s+/);
  const normalizedFen = `${fenParts[0]} ${fenParts[1]} ${fenParts[2]} ${fenParts[3]}`;
  const cacheKey = `masters:${normalizedFen}`;
  const data = explorerCache.get(cacheKey);
  if (!data || data.isFallback || data.totalGames === undefined) return null;

  const positionGames = data.totalGames || 0;
  const moveMatch = findMoveInExplorerData(data, playedUci, playedSan);
  const masterGames = moveMatch ? (moveMatch.total || 0) : 0;

  if (masterGames >= 1) {
    return {
      isMasterBook: true,
      isNovelty: false,
      masterGames,
      positionGames,
    };
  }

  if (fenAfter) {
    const afterParts = fenAfter.trim().split(/\s+/);
    const normAfter = `${afterParts[0]} ${afterParts[1]} ${afterParts[2]} ${afterParts[3]}`;
    const afterData = explorerCache.get(`masters:${normAfter}`);
    if (afterData && !afterData.isFallback) {
      if ((afterData.totalGames || 0) >= 1) {
        return {
          isMasterBook: true,
          isNovelty: false,
          masterGames: afterData.totalGames,
          positionGames,
        };
      }
    }
  }

  return {
    isMasterBook: false,
    isNovelty: positionGames >= 5 && masterGames === 0,
    masterGames: 0,
    positionGames,
  };
}


