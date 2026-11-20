import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Chessboard } from 'react-chessboard';
import {
  Search,
  RotateCcw,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  SlidersHorizontal,
  Clock,
  Radio,
  Cpu,
  Trophy,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Eye,
  Link2,
  Check,
  History,
  Sparkles,
  X,
} from 'lucide-react';
import {
  fetchOfficialBroadcasts,
  fetchTournamentDetails,
  fetchRoundGames,
  streamRoundGames,
  searchBroadcasts,
  fetchPastBroadcasts,
  clockToSeconds,
  secondsToClock,
} from '../utils/broadcastService';
import { parseRoute, updateRoute, copyToClipboard } from '../utils/urlRouter';
import { LiveEngine } from '../utils/liveEngine';
import { cpToWinPercent } from '../utils/chessAnalysis';
import { formatPvLineWithGlyphs } from '../utils/pvFormatter';
import { useTranslation } from '../i18n';
import PlayerBroadcastBar from './PlayerBroadcastBar';
import TitleBadge from './TitleBadge';
import TablebaseCard from './TablebaseCard';

const STORAGE_KEY_LIVE_CLOCKS = 'saragix_broadcast_live_clocks_v2';

/**
 * Localiza com segurança o registro de relógio de uma partida usando múltiplos índices de fallback:
 * 1. ID único completo (ex: "tour_round_b1_Brancas_Pretas")
 * 2. Mesa associada à rodada atual (ex: "roundId_b1")
 * 3. Número puro da mesa (ex: "b1")
 */
export function getClockRecord(clocks, game, roundId = null) {
  if (!clocks || !game) return null;
  if (game.id && clocks[game.id]) return clocks[game.id];
  const rId = roundId || (typeof game.id === 'string' ? game.id.split('_b')[0] : '');
  if (rId && game.board && clocks[`${rId}_b${game.board}`]) {
    return clocks[`${rId}_b${game.board}`];
  }
  return null;
}

/**
 * Carrega os relógios persistidos no localStorage, descontando exatamente os segundos
 * transcorridos enquanto o usuário recarregava a página (F5) ou transitava entre abas
 * através da âncora de relógio real (turnStartedAt + initialTurnSec).
 */
function loadPersistedClocks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LIVE_CLOCKS);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const now = Date.now();
    const result = {};

    Object.keys(parsed).forEach((id) => {
      // Descarta chaves legadas e ambíguas sem escopo de rodada (ex: 'b1', 'b2')
      if (/^b\d+$/i.test(id)) return;

      const item = parsed[id];
      if (!item) return;

      // Descarta registros com mais de 24 horas para não acumular dados obsoletos
      const age = item.updatedAt || item.turnStartedAt || 0;
      if (age && now - age > 24 * 3600 * 1000) {
        return;
      }

      // Se a partida estiver concluída, preserva intactos os tempos finais congelados
      if (item.isFinished || (item.result && item.result !== '*')) {
        result[id] = item;
        return;
      }

      // Para partida em andamento (*), calcula o tempo exato decorrido com base no relógio real
      let whiteSec = Number(item.whiteSec) || 0;
      let blackSec = Number(item.blackSec) || 0;

      if (item.turnStartedAt && item.initialTurnSec !== undefined) {
        const elapsedSec = Math.max(0, (now - item.turnStartedAt) / 1000);
        const remainingTurnSec = Math.max(0, item.initialTurnSec - elapsedSec);
        if (item.turn === 'w') {
          whiteSec = remainingTurnSec;
        } else if (item.turn === 'b') {
          blackSec = remainingTurnSec;
        }
      } else if (item.updatedAt) {
        const elapsedSec = Math.max(0, (now - item.updatedAt) / 1000);
        if (item.turn === 'w') {
          whiteSec = Math.max(0, whiteSec - elapsedSec);
        } else if (item.turn === 'b') {
          blackSec = Math.max(0, blackSec - elapsedSec);
        }
      }

      result[id] = {
        ...item,
        whiteSec,
        blackSec,
        updatedAt: now,
      };
    });

    return result;
  } catch {
    return {};
  }
}

function persistClocks(clocks) {
  try {
    localStorage.setItem(STORAGE_KEY_LIVE_CLOCKS, JSON.stringify(clocks));
  } catch {}
}

export default function Broadcasts({
  initialRoute,
  onLoadGameIntoAnalysis,
  customPieces,
  darkSquareStyle,
  lightSquareStyle,
}) {
  const { t, language } = useTranslation();
  const [broadcasts, setBroadcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'live' | 'finished' | 'past'

  // Transmissões passadas / Arquivo Histórico do Lichess
  const [pastBroadcasts, setPastBroadcasts] = useState([]);
  const [pastPage, setPastPage] = useState(1);
  const [pastTotalPages, setPastTotalPages] = useState(1);
  const [loadingPast, setLoadingPast] = useState(false);

  // Busca remota em todo o arquivo histórico do Lichess
  const [remoteSearchResults, setRemoteSearchResults] = useState([]);
  const [isSearchingRemote, setIsSearchingRemote] = useState(false);

  // Torneio e rodada selecionados
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [selectedRound, setSelectedRound] = useState(null);
  const [roundGames, setRoundGames] = useState([]);
  const [loadingGames, setLoadingGames] = useState(false);
  const [lastRefreshedAt, setLastRefreshedAt] = useState(null);

  // Modo Assistir Partida Ampliada ao Vivo
  const [watchingGameId, setWatchingGameId] = useState(null);
  const [watchingBoard, setWatchingBoard] = useState(null);
  const [boardFlipped, setBoardFlipped] = useState(false);
  const [viewingHalfMove, setViewingHalfMove] = useState(null);
  const [liveEngineOn, setLiveEngineOn] = useState(false);
  const [liveDepth, setLiveDepth] = useState(14);
  const [liveMultiPv, setLiveMultiPv] = useState(2);
  const [showEngineSettings, setShowEngineSettings] = useState(false);
  const [liveEval, setLiveEval] = useState(null);
  const liveEngineRef = useRef(null);

  // Estado dos relógios em tempo real (persistido no localStorage para manter a contagem após F5 e recargas)
  const [liveClocks, setLiveClocks] = useState(() => loadPersistedClocks());
  const liveClocksRef = useRef(liveClocks);
  const roundGamesCacheRef = useRef(new Map());

  useEffect(() => {
    liveClocksRef.current = liveClocks;
  }, [liveClocks]);

  // Toast de feedback ao copiar link
  const [copyToast, setCopyToast] = useState('');

  // Referência para rolagem automática da lista de lances
  const movesContainerRef = useRef(null);

  // Carrega a lista inicial de transmissões oficiais / ativas
  const loadBroadcastsList = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchOfficialBroadcasts(50);
      setBroadcasts(data);
      return data;
    } catch {
      setError('Não foi possível carregar as transmissões ao vivo.');
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Carrega torneios passados / histórico do Lichess
  const loadPastBroadcasts = async (page = 1, append = false) => {
    setLoadingPast(true);
    try {
      const data = await fetchPastBroadcasts(page);
      if (append) {
        setPastBroadcasts((prev) => {
          const map = new Map();
          prev.forEach((t) => map.set(t.tour.id, t));
          data.results.forEach((t) => map.set(t.tour.id, t));
          return Array.from(map.values());
        });
      } else {
        setPastBroadcasts(data.results);
      }
      setPastPage(data.currentPage);
      setPastTotalPages(data.nbPages);
    } catch {
      // continua com o estado atual
    } finally {
      setLoadingPast(false);
    }
  };

  // Disparo automático de busca remota com debounce no arquivo do Lichess (ex: "Floripa Chess 2023")
  useEffect(() => {
    const term = searchTerm.trim();
    if (term.length < 2) {
      setRemoteSearchResults([]);
      setIsSearchingRemote(false);
      return;
    }

    setIsSearchingRemote(true);
    const timer = setTimeout(async () => {
      try {
        const results = await searchBroadcasts(term);
        setRemoteSearchResults(results);
      } catch {
        setRemoteSearchResults([]);
      } finally {
        setIsSearchingRemote(false);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Inicialização e suporte a Deep Linking (abrir direto via URL)
  useEffect(() => {
    async function init() {
      const list = await loadBroadcastsList();
      if (initialRoute?.tourId) {
        const found = list.find((b) => b.tour?.id === initialRoute.tourId);
        if (found) {
          handleSelectTournament(found, initialRoute.roundId, initialRoute.boardNumber);
        } else {
          // Busca detalhes direto pelo ID se não estiver na lista inicial
          const details = await fetchTournamentDetails(initialRoute.tourId);
          if (details && details.tour) {
            handleSelectTournament(details, initialRoute.roundId, initialRoute.boardNumber);
          }
        }
      } else {
        updateRoute({ page: 'broadcasts' });
      }
    }
    init();
  }, [initialRoute?.tourId]);

  // Seleciona um torneio e sincroniza a URL
  const handleSelectTournament = async (broadcastItem, targetRoundId = null, targetBoard = null) => {
    setSelectedTournament(broadcastItem);
    const tourId = broadcastItem.tour.id;

    // Tenta obter detalhes mais atualizados do torneio e suas rodadas completas
    const details = await fetchTournamentDetails(tourId);
    const updatedTour = details && details.tour ? { ...broadcastItem, ...details } : broadcastItem;
    setSelectedTournament(updatedTour);

    const roundsList =
      details && details.rounds && details.rounds.length > 0
        ? details.rounds
        : broadcastItem.rounds || [];

    // Escolhe a rodada solicitada via URL, ou a primeira ativa, ou a mais recente
    let roundToSelect = null;
    if (targetRoundId) {
      roundToSelect = roundsList.find((r) => r.id === targetRoundId);
    }
    if (!roundToSelect) {
      roundToSelect = roundsList.find((r) => r.ongoing) || roundsList[0] || null;
    }

    setSelectedRound(roundToSelect);

    if (roundToSelect) {
      updateRoute({
        page: 'broadcasts',
        tourId,
        roundId: roundToSelect.id,
        boardNumber: targetBoard,
      }, false);
      loadGamesForRound(roundToSelect.id, targetBoard);
    } else {
      updateRoute({ page: 'broadcasts', tourId }, false);
      setRoundGames([]);
    }
  };

  // Carrega as partidas de uma rodada
  const loadGamesForRound = async (roundId, targetBoard = null) => {
    // Se já houver partidas em cache para esta rodada, exibe imediatamente para não sumir nem piscar
    if (roundGamesCacheRef.current.has(roundId)) {
      const cached = roundGamesCacheRef.current.get(roundId);
      setRoundGames(cached);
      syncLiveClocks(cached);
    } else {
      setLoadingGames(true);
    }

    try {
      const games = await fetchRoundGames(roundId);
      if (games && games.length > 0) {
        setRoundGames((prev) => {
          const map = new Map();
          // Preserva mesas existentes ou finalizadas
          if (roundGamesCacheRef.current.has(roundId)) {
            roundGamesCacheRef.current.get(roundId).forEach((g) => map.set(g.board, g));
          }
          prev.forEach((g) => map.set(g.board, g));
          games.forEach((g) => map.set(g.board, g));
          const merged = Array.from(map.values()).sort(
            (a, b) => (Number(a.board) || 0) - (Number(b.board) || 0)
          );
          roundGamesCacheRef.current.set(roundId, merged);
          syncLiveClocks(merged);
          return merged;
        });
        setLastRefreshedAt(new Date());

        if (targetBoard) {
          const matchingGame = games.find(
            (g) => String(g.board) === String(targetBoard) || String(g.boardNumber) === String(targetBoard)
          );
          if (matchingGame) {
            setWatchingGameId(matchingGame.id);
            setWatchingBoard(matchingGame.board);
          }
        }
      } else if (!roundGamesCacheRef.current.has(roundId)) {
        setRoundGames([]);
      }
    } catch {
      if (!roundGamesCacheRef.current.has(roundId)) {
        setRoundGames([]);
      }
    } finally {
      setLoadingGames(false);
    }
  };

  // Sincroniza o relógio interno com os tempos oficiais retornados do servidor
  // Ancorado no relógio real absoluto (turnStartedAt + initialTurnSec)
  // Imune a F5, recarregamento de página, alternância de abas e polling contínuo
  const syncLiveClocks = (games) => {
    if (!games || games.length === 0) return;

    setLiveClocks((prev) => {
      const persisted = loadPersistedClocks();
      const base = { ...persisted, ...prev };
      const next = { ...base };
      const now = Date.now();

      games.forEach((g) => {
        const existing = getClockRecord(base, g, selectedRound?.id);

        const serverWhiteSec =
          g.whiteSeconds > 0
            ? g.whiteSeconds
            : clockToSeconds(g.lastWhiteClk) || (existing?.whiteSec ?? 0);
        const serverBlackSec =
          g.blackSeconds > 0
            ? g.blackSeconds
            : clockToSeconds(g.lastBlackClk) || (existing?.blackSec ?? 0);

        // Chaves de indexação com escopo único para evitar colisões entre torneios e rodadas
        const recordKeys = [
          g.id,
          selectedRound?.id ? `${selectedRound.id}_b${g.board}` : null,
        ].filter(Boolean);

        // Se a partida encerrou: os tempos oficiais gravados no PGN são a verdade absoluta
        if (g.result !== '*') {
          const finalWhite = serverWhiteSec;
          const finalBlack = serverBlackSec;

          const finishedEntry = {
            id: g.id,
            board: g.board,
            roundId: selectedRound?.id || '',
            whiteSec: finalWhite,
            blackSec: finalBlack,
            finalWhiteSec: finalWhite,
            finalBlackSec: finalBlack,
            turn: g.turn,
            result: g.result,
            moveCount: g.moveCount,
            lastMoveSan: g.lastMoveSan,
            isFinished: true,
            updatedAt: now,
          };

          recordKeys.forEach((key) => {
            next[key] = finishedEntry;
          });
          return;
        }

        // Verifica se houve um novo lance genuíno no tabuleiro
        const hasNewMove =
          !existing ||
          existing.moveCount !== g.moveCount ||
          existing.lastMoveSan !== g.lastMoveSan ||
          existing.result !== g.result;

        if (hasNewMove) {
          // Novo lance jogado: inicializa a âncora de tempo real para o jogador da vez
          const activeTurnSec = g.turn === 'w' ? serverWhiteSec : serverBlackSec;
          const newEntry = {
            id: g.id,
            board: g.board,
            roundId: selectedRound?.id || '',
            turnStartedAt: now,
            initialTurnSec: activeTurnSec,
            whiteSec: serverWhiteSec,
            blackSec: serverBlackSec,
            turn: g.turn,
            result: g.result,
            moveCount: g.moveCount,
            lastMoveSan: g.lastMoveSan,
            isFinished: false,
            updatedAt: now,
          };

          recordKeys.forEach((key) => {
            next[key] = newEntry;
          });
        } else {
          // O jogador ainda está pensando no lance.
          // PRESERVA RIGOROSAMENTE turnStartedAt e initialTurnSec para JAMAIS voltar o tempo no F5!
          const turnStartedAt =
            existing.turnStartedAt || (existing.updatedAt ? existing.updatedAt : now);
          const initialTurnSec =
            existing.initialTurnSec !== undefined
              ? existing.initialTurnSec
              : (g.turn === 'w' ? (existing.whiteSec ?? serverWhiteSec) : (existing.blackSec ?? serverBlackSec));

          const elapsedSec = Math.max(0, (now - turnStartedAt) / 1000);
          const currentTurnSec = Math.max(0, initialTurnSec - elapsedSec);

          const whiteSec = g.turn === 'w' ? currentTurnSec : (existing.whiteSec ?? serverWhiteSec);
          const blackSec = g.turn === 'b' ? currentTurnSec : (existing.blackSec ?? serverBlackSec);

          const thinkingEntry = {
            ...existing,
            id: g.id,
            board: g.board,
            roundId: selectedRound?.id || existing.roundId || '',
            turnStartedAt,
            initialTurnSec,
            whiteSec,
            blackSec,
            turn: g.turn,
            result: g.result,
            moveCount: g.moveCount,
            lastMoveSan: g.lastMoveSan,
            isFinished: false,
            updatedAt: now,
          };

          recordKeys.forEach((key) => {
            next[key] = thinkingEntry;
          });
        }
      });

      persistClocks(next);
      return next;
    });
  };

  // Cronômetro ativo: decrementa em ultra-alta precisão a cada 50ms usando âncora de relógio real
  // Persiste periodicamente no localStorage para garantir persistência contínua
  useEffect(() => {
    let lastPersist = Date.now();

    const clockInterval = setInterval(() => {
      const now = Date.now();

      setLiveClocks((prev) => {
        let changed = false;
        const next = { ...prev };

        Object.keys(next).forEach((key) => {
          const item = next[key];
          if (item && item.result === '*' && !item.isFinished) {
            // Se temos a âncora de relógio real (turnStartedAt), calcula o tempo absoluto exato
            if (item.turnStartedAt && item.initialTurnSec !== undefined) {
              const elapsedSec = Math.max(0, (now - item.turnStartedAt) / 1000);
              const remainingSec = Math.max(0, item.initialTurnSec - elapsedSec);

              if (item.turn === 'w') {
                if (Math.abs(item.whiteSec - remainingSec) > 0.01) {
                  next[key] = {
                    ...item,
                    whiteSec: remainingSec,
                    updatedAt: now,
                  };
                  changed = true;
                }
              } else if (item.turn === 'b') {
                if (Math.abs(item.blackSec - remainingSec) > 0.01) {
                  next[key] = {
                    ...item,
                    blackSec: remainingSec,
                    updatedAt: now,
                  };
                  changed = true;
                }
              }
            }
          }
        });

        if (changed) {
          // Persiste no localStorage a cada 1000ms para manter integridade mesmo com F5 forçado
          if (now - lastPersist >= 1000) {
            lastPersist = now;
            persistClocks(next);
          }
          return next;
        }
        return prev;
      });
    }, 50);

    const handleBeforeUnload = () => {
      if (liveClocksRef.current) {
        persistClocks(liveClocksRef.current);
      }
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && liveClocksRef.current) {
        persistClocks(liveClocksRef.current);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(clockInterval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Stream em tempo real da rodada (HTTP chunked stream direto do Lichess) + polling de fallback
  useEffect(() => {
    if (!selectedRound) return;

    const handleGamesUpdate = (games) => {
      if (!games || games.length === 0) return;
      setRoundGames((prev) => {
        const map = new Map();
        if (roundGamesCacheRef.current.has(selectedRound.id)) {
          roundGamesCacheRef.current.get(selectedRound.id).forEach((g) => map.set(String(g.board), g));
        }
        prev.forEach((g) => map.set(String(g.board), g));

        games.forEach((newGame) => {
          if (!newGame || !newGame.board) return;
          const boardKey = String(newGame.board);
          const existing = map.get(boardKey);
          if (!existing) {
            map.set(boardKey, newGame);
            return;
          }

          const isNewFenInitial = (newGame.currentFen || '').startsWith(
            'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
          );

          // 1. NUNCA regrida para a posição inicial se a mesa já tinha lances em andamento
          // (evita o glitch de voltar rapidamente à posição inicial ao receber chunk de stream)
          if (existing.moveCount > 0 && newGame.moveCount === 0 && isNewFenInitial) {
            return;
          }

          // 2. NUNCA regrida o número de lances para a mesma partida (evita que cache de polling defasado
          // do CDN reverta o lance que a stream acabou de emitir em tempo real)
          const isSameMatch =
            (!existing.white || !newGame.white || existing.white === newGame.white) &&
            (!existing.black || !newGame.black || existing.black === newGame.black);

          if (isSameMatch && existing.moveCount > 0 && newGame.moveCount < existing.moveCount) {
            return;
          }

          // 3. Se a nova partida tem o mesmo número de lances mas FEN inicial (anomalia de parse), mantém a existente
          if (isSameMatch && existing.moveCount > 0 && newGame.moveCount === existing.moveCount && isNewFenInitial) {
            return;
          }

          // Mescla com segurança mantendo os relógios mais atualizados
          map.set(boardKey, {
            ...existing,
            ...newGame,
            whiteSeconds: newGame.whiteSeconds || existing.whiteSeconds,
            blackSeconds: newGame.blackSeconds || existing.blackSeconds,
            lastWhiteClk: newGame.lastWhiteClk || existing.lastWhiteClk,
            lastBlackClk: newGame.lastBlackClk || existing.lastBlackClk,
          });
        });

        const merged = Array.from(map.values()).sort(
          (a, b) => (Number(a.board) || 0) - (Number(b.board) || 0)
        );
        roundGamesCacheRef.current.set(selectedRound.id, merged);
        syncLiveClocks(merged);
        return merged;
      });
      setLastRefreshedAt(new Date());
    };

    // 1. Inicia o stream em tempo real direto da fonte oficial (emite no milissegundo em que o lance é transmitido)
    const cleanupStream = streamRoundGames(
      selectedRound.id,
      (streamGames) => handleGamesUpdate(streamGames),
      (err) => console.warn('Stream fechado, mantendo polling ativo:', err.message)
    );

    // 2. Polling contínuo de alta frequência como rede de segurança adaptativa (750ms para blitz)
    let isPolling = false;
    const pollInterval = setInterval(async () => {
      if (isPolling) return;
      isPolling = true;
      try {
        const games = await fetchRoundGames(selectedRound.id);
        if (games && games.length > 0) {
          handleGamesUpdate(games);
        }
      } catch {} finally {
        isPolling = false;
      }
    }, 750);

    return () => {
      cleanupStream();
      clearInterval(pollInterval);
    };
  }, [selectedRound?.id]);

  // Partida atualmente em exibição no modo ampliado
  const watchingGame = useMemo(() => {
    if (!watchingGameId && !watchingBoard) return null;
    return (
      roundGames.find((g) => g.id === watchingGameId) ||
      roundGames.find((g) => String(g.board) === String(watchingBoard)) ||
      null
    );
  }, [watchingGameId, watchingBoard, roundGames]);

  // Rola a lista de lances até o fim quando chegam novos movimentos
  useEffect(() => {
    if (watchingGame && movesContainerRef.current && viewingHalfMove === null) {
      movesContainerRef.current.scrollTop = movesContainerRef.current.scrollHeight;
    }
  }, [watchingGame?.moveCount, viewingHalfMove]);

  // Modo sincronizado ao vivo (se viewingHalfMove for null, segue os lances em tempo real)
  const isLiveSync = viewingHalfMove === null;

  // FEN exibido no tabuleiro: a posição atual do lance visualizado ou o lance ao vivo
  const currentDisplayedFen = useMemo(() => {
    if (!watchingGame) return 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    if (viewingHalfMove === null) return watchingGame.currentFen || watchingGame.fen;
    return watchingGame.historyFens?.[viewingHalfMove] || watchingGame.currentFen;
  }, [watchingGame, viewingHalfMove]);

  // Casas destacadas no tabuleiro para o lance atual/visualizado
  const currentDisplayedSquares = useMemo(() => {
    if (!watchingGame) return [];
    if (viewingHalfMove === null) return watchingGame.lastMoveSquares || [];
    return watchingGame.historySquares?.[viewingHalfMove] || [];
  }, [watchingGame, viewingHalfMove]);

  // Estilos de destaque para as casas do lance exibido
  const watchingBoardSquareStyles = useMemo(() => {
    const styles = {};
    if (currentDisplayedSquares && currentDisplayedSquares.length === 2) {
      styles[currentDisplayedSquares[0]] = {
        backgroundColor: 'rgba(255, 215, 0, 0.35)',
      };
      styles[currentDisplayedSquares[1]] = {
        backgroundColor: 'rgba(255, 215, 0, 0.55)',
      };
    }
    return styles;
  }, [currentDisplayedSquares]);

  // Refs para manter valores atualizados no listener de teclado sem recriar o listener
  const watchingGameRef = useRef(watchingGame);
  const viewingHalfMoveRef = useRef(viewingHalfMove);
  useEffect(() => {
    watchingGameRef.current = watchingGame;
  }, [watchingGame]);
  useEffect(() => {
    viewingHalfMoveRef.current = viewingHalfMove;
  }, [viewingHalfMove]);

  // Suporte a navegação por setas do teclado exclusiva para lances (Esquerda = Lance anterior, Direita = Próximo, Home/Cima = Início, End/Baixo = Ao Vivo)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeGame = watchingGameRef.current;
      if (!activeGame) return;

      const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
      if (!keys.includes(e.key)) return;

      // Não intercepta se o usuário estiver digitando em campo de texto
      if (
        e.target &&
        (e.target.tagName === 'INPUT' ||
          e.target.tagName === 'TEXTAREA' ||
          e.target.isContentEditable)
      ) {
        return;
      }

      // Previne que botões focados (ex: botão de trocar mesa) sejam acionados por eventos do teclado
      if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
      }

      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === 'function') {
        e.stopImmediatePropagation();
      }

      const total = (activeGame.historyFens?.length || 1) - 1;
      const current = viewingHalfMoveRef.current;

      if (e.key === 'ArrowLeft') {
        const cur = current === null ? total : current;
        setViewingHalfMove(Math.max(0, cur - 1));
      } else if (e.key === 'ArrowRight') {
        if (current !== null) {
          if (current + 1 >= total) {
            setViewingHalfMove(null);
          } else {
            setViewingHalfMove(current + 1);
          }
        }
      } else if (e.key === 'Home' || e.key === 'ArrowUp') {
        setViewingHalfMove(0);
      } else if (e.key === 'End' || e.key === 'ArrowDown') {
        setViewingHalfMove(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, []);

  // Ao abrir o modo ampliado de uma mesa, atualiza o link na barra de endereços (cria entrada no histórico)
  const handleOpenWatchBoard = (game) => {
    setWatchingGameId(game.id);
    setWatchingBoard(game.board);
    setViewingHalfMove(null);
    if (selectedTournament && selectedRound) {
      updateRoute({
        page: 'broadcasts',
        tourId: selectedTournament.tour?.id,
        roundId: selectedRound.id,
        boardNumber: game.board,
      }, false);
    }
  };

  // Ao fechar o modo ampliado, volta o link para a rodada e encerra a engine se ativa
  const handleCloseWatchBoard = () => {
    setWatchingGameId(null);
    setWatchingBoard(null);
    setViewingHalfMove(null);
    setLiveEngineOn(false);
    if (selectedTournament && selectedRound) {
      updateRoute({
        page: 'broadcasts',
        tourId: selectedTournament.tour?.id,
        roundId: selectedRound.id,
      }, false);
    }
  };

  // Retorna para a lista de torneios mantendo a aba ativa (ex: Encerrados)
  const handleBackToTournamentList = () => {
    setSelectedTournament(null);
    setSelectedRound(null);
    setRoundGames([]);
    setWatchingGameId(null);
    setWatchingBoard(null);
    setViewingHalfMove(null);
    setLiveEngineOn(false);
    updateRoute({ page: 'broadcasts' }, false);
  };

  // Sincroniza navegação passo a passo com o histórico do navegador (botão voltar)
  useEffect(() => {
    const handlePopRoute = () => {
      const r = parseRoute();
      if (r.page !== 'broadcasts') return;

      // Se a URL não possui mesa mas estava em uma mesa aberta, volta para o torneio
      if (!r.boardNumber && (watchingGameId || watchingBoard)) {
        setWatchingGameId(null);
        setWatchingBoard(null);
        setLiveEngineOn(false);
      }

      // Se a URL não possui torneio mas estava em um torneio selecionado, volta para a lista
      if (!r.tourId && selectedTournament) {
        setSelectedTournament(null);
        setSelectedRound(null);
        setRoundGames([]);
        setWatchingGameId(null);
        setWatchingBoard(null);
        setLiveEngineOn(false);
      }
    };

    window.addEventListener('hashchange', handlePopRoute);
    return () => window.removeEventListener('hashchange', handlePopRoute);
  }, [watchingGameId, watchingBoard, selectedTournament]);

  // Gerenciamento da engine de análise em tempo real (Stockfish 19 NNUE)
  useEffect(() => {
    if (liveEngineOn && watchingGame) {
      if (!liveEngineRef.current) {
        liveEngineRef.current = new LiveEngine();
      }
    } else {
      if (liveEngineRef.current) {
        try {
          liveEngineRef.current.stop();
          liveEngineRef.current.terminate();
        } catch {}
        liveEngineRef.current = null;
      }
      setLiveEval(null);
    }
    return () => {
      if (liveEngineRef.current) {
        try {
          liveEngineRef.current.stop();
          liveEngineRef.current.terminate();
        } catch {}
        liveEngineRef.current = null;
      }
    };
  }, [liveEngineOn, watchingGameId]);

  // Limpa avaliação ao trocar de mesa
  useEffect(() => {
    setLiveEval(null);
  }, [watchingGameId, watchingBoard]);

  // Disparo contínuo e rápido da análise da posição FEN atual da partida assistida (Stockfish 19 NNUE)
  useEffect(() => {
    if (!liveEngineOn || !currentDisplayedFen || !liveEngineRef.current) return;
    setLiveEval(null);
    liveEngineRef.current.analyze(
      currentDisplayedFen,
      liveDepth,
      (res) => {
        setLiveEval((prev) => {
          if (!res) return prev;
          const evalWhiteCp =
            res.evalWhiteCp !== undefined && res.evalWhiteCp !== null
              ? res.evalWhiteCp
              : (prev?.evalWhiteCp ?? 0);
          const mateWhite =
            res.mateWhite !== undefined && res.mateWhite !== null
              ? res.mateWhite
              : (prev?.mateWhite ?? null);
          return {
            ...prev,
            ...res,
            evalWhiteCp,
            mateWhite,
          };
        });
      },
      null,
      0,
      liveMultiPv
    );
  }, [liveEngineOn, currentDisplayedFen, liveDepth, liveMultiPv]);

  const evalWhiteCp = liveEval?.evalWhiteCp ?? 0;
  const isWhiteAhead = evalWhiteCp >= 0;

  const whiteBarPercent = useMemo(() => {
    if (!liveEval) return 50;
    if (liveEval.mateWhite !== null && liveEval.mateWhite !== undefined) {
      if (liveEval.mateWhite === 0) {
        return watchingGame?.turn === 'b' ? 100 : 0;
      }
      return liveEval.mateWhite > 0 ? 100 : 0;
    }
    return cpToWinPercent(evalWhiteCp);
  }, [liveEval, evalWhiteCp, watchingGame?.turn]);

  const evalDisplayText = useMemo(() => {
    if (!liveEval) return '0.0';
    if (liveEval.mateWhite !== null && liveEval.mateWhite !== undefined) {
      if (liveEval.mateWhite === 0) {
        return watchingGame?.turn === 'b' ? '+M0' : '-M0';
      }
      const sign = liveEval.mateWhite > 0 ? '+' : '-';
      return `${sign}M${Math.abs(liveEval.mateWhite)}`;
    }
    if (liveEval.evalWhiteCp === null || liveEval.evalWhiteCp === undefined) return '0.0';
    const val = (liveEval.evalWhiteCp / 100).toFixed(1);
    return liveEval.evalWhiteCp > 0 ? `+${val}` : val;
  }, [liveEval, watchingGame?.turn]);

  const liveEngineArrows = useMemo(() => {
    if (!liveEngineOn || !liveEval) return [];
    const line1Uci = liveEval.lines?.[0]?.bestMoveUci || liveEval.bestMoveUci;
    if (line1Uci && line1Uci.length >= 4) {
      return [[line1Uci.slice(0, 2), line1Uci.slice(2, 4), 'rgba(56, 189, 248, 0.85)']];
    }
    return [];
  }, [liveEngineOn, liveEval]);

  // Navega para a mesa anterior / próxima no modo ampliado e atualiza a URL
  const handleNavigateBoard = (direction) => {
    if (!watchingGame || roundGames.length === 0) return;
    const currentIndex = roundGames.findIndex((g) => g.id === watchingGame.id);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = roundGames.length - 1;
    if (nextIndex >= roundGames.length) nextIndex = 0;

    const nextGame = roundGames[nextIndex];
    setWatchingGameId(nextGame.id);
    setWatchingBoard(nextGame.board);
    setViewingHalfMove(null);
    if (selectedTournament && selectedRound) {
      updateRoute({
        page: 'broadcasts',
        tourId: selectedTournament.tour?.id,
        roundId: selectedRound.id,
        boardNumber: nextGame.board,
      });
    }
  };

  // Copia o link direto para a área de transferência
  const handleCopyCurrentLink = async (msg = 'Link copiado para a área de transferência!') => {
    const success = await copyToClipboard(window.location.href);
    if (success) {
      setCopyToast(msg);
      setTimeout(() => setCopyToast(''), 3000);
    }
  };

  // Filtra as transmissões combinando torneios locais, transmissões passadas e resultados da busca histórica no Lichess
  const filteredBroadcasts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    // 1. Se o usuário estiver pesquisando: combina dados locais e do arquivo histórico do Lichess
    if (term) {
      const map = new Map();

      // Torneios oficiais / ativos em memória
      broadcasts.forEach((item) => {
        const tour = item.tour || {};
        const name = (tour.name || '').toLowerCase();
        const players = (tour.info?.players || '').toLowerCase();
        const location = (tour.info?.location || '').toLowerCase();
        if (name.includes(term) || players.includes(term) || location.includes(term)) {
          map.set(tour.id, item);
        }
      });

      // Torneios passados já carregados
      pastBroadcasts.forEach((item) => {
        const tour = item.tour || {};
        const name = (tour.name || '').toLowerCase();
        const players = (tour.info?.players || '').toLowerCase();
        const location = (tour.info?.location || '').toLowerCase();
        if (name.includes(term) || players.includes(term) || location.includes(term)) {
          map.set(tour.id, item);
        }
      });

      // Resultados da busca remota no arquivo histórico do Lichess (ex: "Floripa Chess 2023")
      remoteSearchResults.forEach((item) => {
        if (item.tour?.id) {
          map.set(item.tour.id, item);
        }
      });

      return Array.from(map.values());
    }

    // 2. Se não houver busca, filtra pela aba selecionada
    if (filterMode === 'live') {
      return broadcasts.filter((item) => item.rounds?.some((r) => r.ongoing));
    }
    if (filterMode === 'finished') {
      const map = new Map();
      // Torneios encerrados da lista oficial ativa
      broadcasts
        .filter((item) => item.rounds?.length > 0 && item.rounds.every((r) => r.finished))
        .forEach((item) => map.set(item.tour.id, item));
      // Torneios passados do arquivo histórico do Lichess
      pastBroadcasts.forEach((item) => map.set(item.tour.id, item));
      return Array.from(map.values());
    }

    return broadcasts;
  }, [broadcasts, pastBroadcasts, remoteSearchResults, searchTerm, filterMode]);

  // Formatação amigável de data e hora
  const formatBroadcastDate = (timestamp) => {
    if (!timestamp) return '';
    try {
      const d = new Date(timestamp);
      return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return '';
    }
  };

  // Retorna o relógio formatado atual para um jogo
  // 1. Se a partida já está finalizada, o relógio definitivo e oficial é o gravado no PGN
  // 2. Se está em andamento (*), usa o relógio persistido com âncora de tempo real
  const getDisplayClock = (game, color) => {
    if (!game) return '00:00';

    // 1. Se a partida encerrou (1-0, 0-1, 1/2-1/2), exibe os tempos gravados no último lance do PGN oficial
    if (game.result && game.result !== '*') {
      const pgnClk = color === 'w' ? game.lastWhiteClk : game.lastBlackClk;
      if (pgnClk) return pgnClk;
      const pgnSec = color === 'w' ? game.whiteSeconds : game.blackSeconds;
      if (pgnSec !== undefined && pgnSec !== null && pgnSec >= 0) {
        return secondsToClock(pgnSec);
      }
    }

    // 2. Se a partida está em andamento, busca o relógio dinâmico calculado
    const clockData = getClockRecord(liveClocks, game, selectedRound?.id);
    if (clockData) {
      if (color === 'w') {
        const sec = clockData.finalWhiteSec !== undefined ? clockData.finalWhiteSec : clockData.whiteSec;
        if (sec !== undefined && sec !== null) {
          return secondsToClock(sec);
        }
      }
      if (color === 'b') {
        const sec = clockData.finalBlackSec !== undefined ? clockData.finalBlackSec : clockData.blackSec;
        if (sec !== undefined && sec !== null) {
          return secondsToClock(sec);
        }
      }
    }

    // 3. Fallback para os dados diretos do PGN
    const fallbackClk = color === 'w' ? game.lastWhiteClk : game.lastBlackClk;
    if (fallbackClk) return fallbackClk;
    const fallbackSec = color === 'w' ? game.whiteSeconds : game.blackSeconds;
    if (fallbackSec !== undefined && fallbackSec !== null && fallbackSec >= 0) {
      return secondsToClock(fallbackSec);
    }
    return '00:00';
  };

  // Retorna o relógio específico correspondente a um lance visualizado no histórico
  const getMoveClock = (game, color, halfMoveIndex) => {
    if (!game) return '00:00';
    if (halfMoveIndex === null || halfMoveIndex === undefined) {
      return getDisplayClock(game, color);
    }
    if (halfMoveIndex === 0) {
      const firstPair = game.movePairs?.[0];
      return color === 'w'
        ? (firstPair?.whiteClk || getDisplayClock(game, 'w'))
        : (firstPair?.blackClk || getDisplayClock(game, 'b'));
    }
    const moveIdx = Math.floor((halfMoveIndex - 1) / 2);
    const pair = game.movePairs?.[moveIdx];
    if (color === 'w') {
      return pair?.whiteClk || getDisplayClock(game, 'w');
    } else {
      if (halfMoveIndex % 2 === 1) {
        const prevPair = moveIdx > 0 ? game.movePairs?.[moveIdx - 1] : null;
        return prevPair?.blackClk || game.movePairs?.[0]?.blackClk || getDisplayClock(game, 'b');
      }
      return pair?.blackClk || getDisplayClock(game, 'b');
    }
  };

  return (
    <div className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
      {/* Toast flutuante de cópia de link */}
      {copyToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16261e] border border-[#274435] text-[#86efac] px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{copyToast}</span>
        </div>
      )}

      {/* ===================================================================
          CABEÇALHO DA PÁGINA
         =================================================================== */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1c1c22] pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#141418] border border-[#26262f] text-red-400">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                {t('broadcasts.title')}
              </h1>
              <p className="text-xs text-zinc-400 mt-0.5">
                {t('broadcasts.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Barra de busca com suporte ao histórico do Lichess, copiar link e botão de atualizar */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          {!selectedTournament && (
            <div className="relative flex-1 md:w-80">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('broadcasts.searchPlaceholder')}
                className="w-full bg-[#121215] border border-[#23232b] rounded-lg pl-9 pr-8 py-2 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition"
              />
              {isSearchingRemote ? (
                <RotateCcw className="w-3.5 h-3.5 text-blue-400 animate-spin absolute right-3 top-1/2 -translate-y-1/2" />
              ) : searchTerm ? (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="p-1 text-zinc-500 hover:text-zinc-300 absolute right-2.5 top-1/2 -translate-y-1/2"
                  title="Limpar busca"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : null}
            </div>
          )}

          {/* Botão Copiar Link da Visão Atual */}
          <button
            type="button"
            onClick={() => handleCopyCurrentLink()}
            className="p-2 bg-[#141418] hover:bg-[#1f1f26] border border-[#26262f] rounded-lg text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition shrink-0"
            title="Copiar link direto para compartilhar"
          >
            <Link2 className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">{t('broadcasts.copyLink')}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (selectedTournament && selectedRound) {
                loadGamesForRound(selectedRound.id);
              } else if (filterMode === 'past') {
                loadPastBroadcasts(1);
              } else {
                loadBroadcastsList();
              }
            }}
            disabled={loading || loadingGames || loadingPast}
            className="p-2 bg-[#141418] hover:bg-[#1f1f26] border border-[#26262f] rounded-lg text-zinc-300 text-xs font-medium flex items-center gap-1.5 transition disabled:opacity-50 shrink-0"
            title="Atualizar dados da transmissão"
          >
            <RotateCcw
              className={`w-4 h-4 ${
                loading || loadingGames || loadingPast ? 'animate-spin text-blue-400' : ''
              }`}
            />
            <span className="hidden sm:inline">{t('broadcasts.refresh')}</span>
          </button>
        </div>
      </div>

      {/* ===================================================================
          DIRETÓRIO / BREADCRUMBS DE NAVEGAÇÃO HIERÁRQUICA (EM CASCATA)
         =================================================================== */}
      <nav
        aria-label="Diretório de Navegação"
        className="flex items-center flex-wrap gap-2 text-xs text-zinc-400 bg-[#121217] border border-[#22222a] px-3.5 py-2.5 rounded-xl shadow-sm select-none"
      >
        {/* Nível 1: Transmissões (Raiz) */}
        <button
          type="button"
          onClick={handleBackToTournamentList}
          className={`inline-flex items-center gap-1.5 font-medium transition ${
            !selectedTournament
              ? 'text-white font-semibold cursor-default'
              : 'text-zinc-400 hover:text-white'
          }`}
          title={t('broadcasts.breadcrumbsRoot')}
        >
          <Radio className="w-3.5 h-3.5 text-red-400 shrink-0" />
          <span>{t('broadcasts.breadcrumbsRoot')}</span>
          {filterMode === 'finished' && !selectedTournament && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1e1e28] text-amber-300 border border-amber-500/20 font-bold">
              {t('broadcasts.finishedBadge')}
            </span>
          )}
          {filterMode === 'live' && !selectedTournament && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-500/30 font-bold">
              {t('broadcasts.liveBadge')}
            </span>
          )}
        </button>

        {selectedTournament && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />

            {/* Nível 2: Nome do Torneio */}
            <button
              type="button"
              onClick={() => {
                if (watchingGame) {
                  handleCloseWatchBoard();
                }
              }}
              className={`inline-flex items-center gap-1.5 truncate max-w-[200px] sm:max-w-[320px] transition ${
                !watchingGame
                  ? 'text-white font-semibold cursor-default'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title={selectedTournament.tour?.name}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{selectedTournament.tour?.name || 'Torneio'}</span>
            </button>
          </>
        )}

        {selectedTournament && selectedRound && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />

            {/* Nível 3: Rodada */}
            <button
              type="button"
              onClick={() => {
                if (watchingGame) {
                  handleCloseWatchBoard();
                }
              }}
              className={`inline-flex items-center gap-1 text-zinc-300 transition ${
                !watchingGame ? 'font-semibold text-white cursor-default' : 'hover:text-white'
              }`}
              title={selectedRound.name}
            >
              <span>{selectedRound.name || 'Rodada'}</span>
            </button>
          </>
        )}

        {watchingGame && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />

            {/* Nível 4: Mesa Ativa / Partida */}
            <span className="inline-flex items-center gap-1.5 text-white font-bold bg-[#1a1a24] px-2.5 py-1 rounded-lg border border-[#2e2e40] shadow-sm">
              <span className="text-amber-400">{t('broadcasts.boardNumber', { num: watchingGame.board })}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-200 text-[11px] truncate max-w-[130px] sm:max-w-[200px]">
                {watchingGame.white} vs {watchingGame.black}
              </span>
            </span>
          </>
        )}
      </nav>

      {/* ===================================================================
          VISÃO 1: LISTA DE TORNEIOS
         =================================================================== */}
      {!selectedTournament ? (
        <div className="space-y-4">
          {/* Filtros Rápidos */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  filterMode === 'all'
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#141418] text-zinc-400 hover:text-zinc-200 border border-[#24242c]'
                }`}
              >
                {t('broadcasts.all')} ({broadcasts.length})
              </button>
              <button
                onClick={() => setFilterMode('live')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                  filterMode === 'live'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40 font-semibold'
                    : 'bg-[#141418] text-zinc-400 hover:text-zinc-200 border border-[#24242c]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                {t('broadcasts.live')}
              </button>
              <button
                onClick={() => {
                  setFilterMode('finished');
                  if (pastBroadcasts.length === 0) {
                    loadPastBroadcasts(1);
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                  filterMode === 'finished'
                    ? 'bg-[#22222a] text-zinc-200 border border-zinc-500 font-semibold shadow-sm'
                    : 'bg-[#141418] text-zinc-400 hover:text-zinc-200 border border-[#24242c]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>{t('broadcasts.finished')}</span>
                {pastBroadcasts.length > 0 && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                    +{pastBroadcasts.length}
                  </span>
                )}
              </button>
            </div>

            {/* Sugestões Rápidas de Busca Histórica */}
            <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-zinc-400">
              <span className="flex items-center gap-1 text-zinc-400 shrink-0">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {t('broadcasts.suggestions')}
              </span>
              {['Floripa Chess 2023', 'Floripa Chess 2024', 'Tata Steel Masters', 'FIDE Candidates'].map(
                (query) => (
                  <button
                    key={query}
                    type="button"
                    onClick={() => {
                      setSearchTerm(query);
                      setFilterMode('all');
                    }}
                    className="px-2 py-0.5 rounded-md bg-[#16161c] hover:bg-[#202028] text-zinc-400 hover:text-white border border-[#24242e] transition text-[11px]"
                  >
                    {query}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Skeleton de carregamento */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#121215] border border-[#1f1f26] rounded-xl overflow-hidden animate-pulse flex flex-col h-72"
                >
                  <div className="h-40 bg-[#1a1a20]" />
                  <div className="p-4 space-y-2.5 flex-1">
                    <div className="h-3 w-1/3 bg-[#24242c] rounded" />
                    <div className="h-4 w-4/5 bg-[#24242c] rounded" />
                    <div className="h-3 w-full bg-[#1e1e26] rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Erro de conexão */}
          {error && !loading && (
            <div className="p-6 rounded-xl bg-red-950/20 border border-red-900/30 text-center space-y-3">
              <AlertCircle className="w-8 h-8 text-red-400 mx-auto" />
              <p className="text-sm text-red-300">{error}</p>
              <button
                onClick={loadBroadcastsList}
                className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-200 text-xs rounded-lg transition"
              >
                {t('common.retry') || 'Tentar novamente'}
              </button>
            </div>
          )}

          {/* Grade de Torneios */}
          {!loading && !error && filteredBroadcasts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredBroadcasts.map((item) => {
                const tour = item.tour || {};
                const rounds = item.rounds || [];
                const isLive = rounds.some((r) => r.ongoing);
                const activeRound = rounds.find((r) => r.ongoing) || rounds[0];

                return (
                  <div
                    key={tour.id}
                    onClick={() => handleSelectTournament(item)}
                    className="group cursor-pointer bg-[#141418] hover:bg-[#18181e] border border-[#24242c] hover:border-[#383844] rounded-xl overflow-hidden transition-all duration-200 flex flex-col shadow-lg hover:shadow-black/60"
                  >
                    {/* Imagem de Capa do Torneio */}
                    <div className="relative h-44 bg-[#0a0a0d] overflow-hidden flex items-center justify-center border-b border-[#1f1f26]">
                      {tour.image ? (
                        <img
                          src={tour.image}
                          alt={tour.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a22] to-[#0e0e12] p-4 text-center">
                          <Trophy className="w-10 h-10 text-zinc-600 mb-2" />
                          <span className="text-xs text-zinc-400 font-medium">
                            {tour.name}
                          </span>
                        </div>
                      )}

                      {/* Selo Ao Vivo, Histórico ou Rodada */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap max-w-[85%]">
                        {isLive ? (
                          <span className="bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            {t('broadcasts.liveBadge')}
                          </span>
                        ) : activeRound?.startsAt ? (
                          <span className="bg-black/75 backdrop-blur-sm text-zinc-300 text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10">
                            {formatBroadcastDate(activeRound.startsAt)}
                          </span>
                        ) : (
                          <span className="bg-black/75 backdrop-blur-sm text-zinc-400 text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10">
                            {rounds.length > 0 ? t('broadcasts.roundsCount', { count: rounds.length }) : t('broadcasts.past')}
                          </span>
                        )}

                        {(!isLive && (rounds.length === 0 || rounds.every((r) => r.finished))) && (
                          <span className="bg-purple-950/80 text-purple-200 text-[10px] font-medium px-1.5 py-0.5 rounded-full border border-purple-800/40 flex items-center gap-1">
                            <History className="w-2.5 h-2.5 text-purple-400" />
                            {t('broadcasts.past')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <div className="text-[11px] text-zinc-400 font-medium flex items-center gap-1.5 truncate">
                          <span>{activeRound?.name || (rounds.length > 0 ? t('broadcasts.roundsCount', { count: rounds.length }) : t('broadcasts.archiveTour'))}</span>
                        </div>

                        <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug">
                          {tour.name}
                        </h3>

                        {tour.info?.players && (
                          <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                            {tour.info.players}
                          </p>
                        )}
                      </div>

                      <div className="pt-2 border-t border-[#1c1c22] flex items-center justify-between text-[11px] text-zinc-400">
                        <span className="flex items-center gap-1 truncate max-w-[180px]">
                          {tour.info?.location ? (
                            <>
                              <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                              <span className="truncate">{tour.info.location}</span>
                            </>
                          ) : (
                            <span>{t('broadcasts.lichessArchive')}</span>
                          )}
                        </span>
                        <span className="text-blue-400 font-medium group-hover:underline flex items-center gap-0.5">
                          {t('broadcasts.viewBoards')}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Botão para Carregar Mais Torneios Encerrados */}
          {filterMode === 'finished' && pastPage < pastTotalPages && !searchTerm && (
            <div className="flex justify-center pt-2 pb-4">
              <button
                type="button"
                onClick={() => loadPastBroadcasts(pastPage + 1, true)}
                disabled={loadingPast}
                className="px-4 py-2.5 rounded-xl bg-[#141418] hover:bg-[#1c1c24] border border-[#24242e] text-xs font-semibold text-zinc-200 hover:text-white transition flex items-center gap-2 disabled:opacity-50 shadow-md"
              >
                {loadingPast ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 animate-spin text-blue-400" />
                    <span>{t('broadcasts.loadingMorePast')}</span>
                  </>
                ) : (
                  <>
                    <History className="w-3.5 h-3.5 text-purple-400" />
                    <span>{t('broadcasts.loadMorePast', { page: pastPage + 1, total: pastTotalPages })}</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Estado Vazio de Busca */}
          {!loading && !error && filteredBroadcasts.length === 0 && (
            <div className="p-12 text-center rounded-xl bg-[#121215] border border-[#1f1f26] space-y-3">
              {isSearchingRemote ? (
                <>
                  <RotateCcw className="w-8 h-8 text-blue-400 animate-spin mx-auto" />
                  <h3 className="text-sm font-medium text-zinc-300">
                    {t('broadcasts.searchingRemote')}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    {t('broadcasts.searchingRemoteDesc')}
                  </p>
                </>
              ) : (
                <>
                  <Radio className="w-10 h-10 text-zinc-600 mx-auto" />
                  <h3 className="text-sm font-medium text-zinc-300">
                    {t('broadcasts.noTournamentsFound')}
                  </h3>
                  <p className="text-xs text-zinc-500 max-w-md mx-auto">
                    {t('broadcasts.noTournamentsFoundDesc')}
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setFilterMode('all');
                    }}
                    className="px-3.5 py-1.5 bg-[#1b1b22] hover:bg-[#252530] border border-[#2d2d3a] text-xs text-zinc-200 rounded-lg transition"
                  >
                    {t('broadcasts.clearFilters')}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      ) : watchingGame ? (
        /* ===================================================================
            VISÃO 2: TABULEIRO AMPLIADO AO VIVO (MODO ASSISTIR PARTIDA)
           =================================================================== */
        <div className="space-y-5">
          {/* Barra de Navegação do Espectador com Botão Copiar Link da Mesa */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-[#121216] border border-[#22222a] rounded-xl">
            <button
              type="button"
              onClick={handleCloseWatchBoard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#181820] hover:bg-[#22222c] border border-[#2b2b36] rounded-lg text-xs font-medium text-zinc-200 hover:text-white transition"
              title={t('broadcasts.backToTournamentBoards')}
            >
              <ChevronLeft className="w-4 h-4 text-zinc-400" />
              <span>{t('broadcasts.backToTournamentBoards')}</span>
            </button>

            {/* Informações da Mesa e Indicador Ao Vivo ou Finalizada */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {watchingGame.result !== '*' ? (
                <span className="bg-[#1f1f28] text-zinc-300 border border-[#303040] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {t('broadcasts.gameFinished', { result: watchingGame.result })}
                </span>
              ) : (
                <span className="bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  {t('broadcasts.liveRealtime')}
                </span>
              )}
              <span className="font-semibold text-white text-xs sm:text-sm">
                {t('broadcasts.boardNumber', { num: watchingGame.board })}
              </span>
              {watchingGame.eco && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1a1a24] text-zinc-300 border border-[#2a2a38]">
                  {watchingGame.eco}
                </span>
              )}
            </div>

            {/* Ações da Mesa: Compartilhar Mesa, Seletor de Mesas e Analisar no Tabuleiro */}
            <div className="flex items-center gap-2 flex-wrap">

              <button
                type="button"
                onClick={() => handleCopyCurrentLink(t('broadcasts.boardLinkCopied', { board: watchingGame.board }))}
                className="px-2.5 py-1.5 rounded-lg bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition"
                title={t('broadcasts.shareBoard')}
              >
                <Link2 className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">{t('broadcasts.shareBoard')}</span>
              </button>

              <div className="flex items-center bg-[#181820] border border-[#2b2b36] rounded-lg overflow-hidden">
                <button
                  type="button"
                  tabIndex={-1}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.currentTarget.blur();
                    handleNavigateBoard(-1);
                  }}
                  className="p-1.5 hover:bg-[#252530] text-zinc-300 hover:text-white transition focus:outline-none"
                  title={t('broadcasts.prevBoard')}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-2.5 text-[11px] font-mono text-zinc-400 select-none">
                  {t('broadcasts.boardNumber', { num: watchingGame.board })}
                </span>
                <button
                  type="button"
                  tabIndex={-1}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.currentTarget.blur();
                    handleNavigateBoard(1);
                  }}
                  className="p-1.5 hover:bg-[#252530] text-zinc-300 hover:text-white transition focus:outline-none"
                  title={t('broadcasts.nextBoard')}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => onLoadGameIntoAnalysis(watchingGame.rawPgn, watchingGame)}
                className="px-3 py-1.5 rounded-lg bg-[#ececef] hover:bg-white text-black text-xs font-semibold flex items-center gap-1.5 transition shadow"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>{t('broadcasts.analyzeOnBoard')}</span>
              </button>
            </div>
          </div>

          {/* Área Principal: Tabuleiro Ampliado + Notação em Tempo Real */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Coluna Esquerda: Tabuleiro Ampliado e Jogadores (7 Colunas) */}
            <div className="lg:col-span-7 flex flex-col items-center gap-2 w-full">
              {/* Barra do Jogador Superior (Pretas por padrão, ou Brancas se invertido) */}
              {!boardFlipped ? (
                <PlayerBroadcastBar
                  name={watchingGame.black}
                  title={watchingGame.blackTitle}
                  rating={watchingGame.blackElo}
                  color="b"
                  isTurn={watchingGame.result === '*' && watchingGame.turn === 'b'}
                  clockDisplay={getMoveClock(watchingGame, 'b', viewingHalfMove)}
                  result={watchingGame.result}
                  fideId={watchingGame.blackFideId}
                  fed={watchingGame.blackFed}
                />
              ) : (
                <PlayerBroadcastBar
                  name={watchingGame.white}
                  title={watchingGame.whiteTitle}
                  rating={watchingGame.whiteElo}
                  color="w"
                  isTurn={watchingGame.result === '*' && watchingGame.turn === 'w'}
                  clockDisplay={getMoveClock(watchingGame, 'w', viewingHalfMove)}
                  result={watchingGame.result}
                  fideId={watchingGame.whiteFideId}
                  fed={watchingGame.whiteFed}
                />
              )}

              {/* Tabuleiro Central Grande com Barrinha Lateral de Avaliação em Tempo Real */}
              <div className="flex gap-2 sm:gap-2.5 items-stretch justify-center w-full max-w-[560px]">
                {/* Barrinha Lateral de Avaliação (visível quando a engine estiver ligada) */}
                {liveEngineOn && (
                  <div
                    className="w-6 sm:w-7 rounded-lg overflow-hidden flex flex-col relative shrink-0 border border-[#262633] shadow-lg bg-[#141418] select-none"
                    title={`Avaliação Stockfish 19 NNUE: ${evalDisplayText}`}
                  >
                    {!boardFlipped ? (
                      <>
                        <div
                          className="bg-[#18181c] transition-all duration-300"
                          style={{ height: `${100 - whiteBarPercent}%` }}
                        />
                        <div
                          className="bg-[#e4e4e7] transition-all duration-300"
                          style={{ height: `${whiteBarPercent}%` }}
                        />
                        <span
                          className={`absolute inset-x-0 text-[8px] sm:text-[9px] font-mono font-bold tracking-tighter leading-none text-center whitespace-nowrap ${
                            isWhiteAhead ? 'bottom-1.5 text-zinc-900' : 'top-1.5 text-zinc-200'
                          }`}
                        >
                          {evalDisplayText}
                        </span>
                      </>
                    ) : (
                      <>
                        <div
                          className="bg-[#e4e4e7] transition-all duration-300"
                          style={{ height: `${whiteBarPercent}%` }}
                        />
                        <div
                          className="bg-[#18181c] transition-all duration-300"
                          style={{ height: `${100 - whiteBarPercent}%` }}
                        />
                        <span
                          className={`absolute inset-x-0 text-[8px] sm:text-[9px] font-mono font-bold tracking-tighter leading-none text-center whitespace-nowrap ${
                            !isWhiteAhead ? 'bottom-1.5 text-zinc-200' : 'top-1.5 text-zinc-900'
                          }`}
                        >
                          {evalDisplayText}
                        </span>
                      </>
                    )}
                  </div>
                )}

                {/* Tabuleiro */}
                <div className="flex-1 aspect-square rounded-2xl overflow-hidden border-2 border-[#262633] shadow-2xl bg-[#0a0a0d] p-1">
                  <Chessboard
                    position={currentDisplayedFen}
                    boardOrientation={boardFlipped ? 'black' : 'white'}
                    arePiecesDraggable={false}
                    animationDuration={120}
                    customSquareStyles={watchingBoardSquareStyles}
                    customDarkSquareStyle={darkSquareStyle}
                    customLightSquareStyle={lightSquareStyle}
                    customPieces={customPieces}
                    customArrows={liveEngineArrows}
                  />
                </div>
              </div>

              {/* Barra do Jogador Inferior (Brancas por padrão, ou Pretas se invertido) */}
              {!boardFlipped ? (
                <PlayerBroadcastBar
                  name={watchingGame.white}
                  title={watchingGame.whiteTitle}
                  rating={watchingGame.whiteElo}
                  color="w"
                  isTurn={watchingGame.result === '*' && watchingGame.turn === 'w'}
                  clockDisplay={getMoveClock(watchingGame, 'w', viewingHalfMove)}
                  result={watchingGame.result}
                  fideId={watchingGame.whiteFideId}
                  fed={watchingGame.whiteFed}
                />
              ) : (
                <PlayerBroadcastBar
                  name={watchingGame.black}
                  title={watchingGame.blackTitle}
                  rating={watchingGame.blackElo}
                  color="b"
                  isTurn={watchingGame.result === '*' && watchingGame.turn === 'b'}
                  clockDisplay={getMoveClock(watchingGame, 'b', viewingHalfMove)}
                  result={watchingGame.result}
                  fideId={watchingGame.blackFideId}
                  fed={watchingGame.blackFed}
                />
              )}

              {/* Barra de Controles e Navegação de Lances do Tabuleiro */}
              <div className="w-full max-w-[560px] bg-[#121217] rounded-xl border border-[#22222e] px-3 py-2 flex flex-wrap items-center justify-between gap-2 shadow-sm">
                {/* Botão Girar Tabuleiro */}
                <button
                  type="button"
                  onClick={() => setBoardFlipped((f) => !f)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#181820] hover:bg-[#252532] border border-[#282836] text-zinc-300 hover:text-white text-xs flex items-center gap-1.5 transition select-none"
                  title={t('broadcasts.flipBoardTitle')}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t('broadcasts.flipBoard')}</span>
                </button>

                {/* Botões de Navegação (|<<  <  >  >>|) */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    tabIndex={-1}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                      e.currentTarget.blur();
                      setViewingHalfMove(0);
                    }}
                    disabled={viewingHalfMove === 0}
                    className="w-8 h-7 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-30 disabled:hover:bg-[#181820] border border-[#282836] flex items-center justify-center text-zinc-300 text-xs font-bold transition focus:outline-none"
                    title={t('broadcasts.firstMoveTitle')}
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    tabIndex={-1}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                      e.currentTarget.blur();
                      const total = (watchingGame.historyFens?.length || 1) - 1;
                      const current = viewingHalfMove === null ? total : viewingHalfMove;
                      setViewingHalfMove(Math.max(0, current - 1));
                    }}
                    disabled={viewingHalfMove === 0}
                    className="w-8 h-7 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-30 disabled:hover:bg-[#181820] border border-[#282836] flex items-center justify-center text-zinc-300 text-xs font-bold transition focus:outline-none"
                    title={t('broadcasts.prevMoveTitle')}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    tabIndex={-1}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                      e.currentTarget.blur();
                      if (viewingHalfMove === null) return;
                      const total = (watchingGame.historyFens?.length || 1) - 1;
                      if (viewingHalfMove + 1 >= total) {
                        setViewingHalfMove(null);
                      } else {
                        setViewingHalfMove(viewingHalfMove + 1);
                      }
                    }}
                    disabled={viewingHalfMove === null}
                    className="w-8 h-7 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-30 disabled:hover:bg-[#181820] border border-[#282836] flex items-center justify-center text-zinc-300 text-xs font-bold transition focus:outline-none"
                    title={t('broadcasts.nextMoveTitle')}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    tabIndex={-1}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                      e.currentTarget.blur();
                      setViewingHalfMove(null);
                    }}
                    disabled={viewingHalfMove === null}
                    className="w-8 h-7 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-30 disabled:hover:bg-[#181820] border border-[#282836] flex items-center justify-center text-zinc-300 text-xs font-bold transition focus:outline-none"
                    title={t('broadcasts.liveMoveTitle')}
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Indicador de Status / Lance Atual */}
                <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 select-none">
                  {viewingHalfMove !== null ? (
                    <span className="text-sky-300 font-semibold">
                      {t('broadcasts.moveNum', { num: Math.ceil(viewingHalfMove / 2) })}{' '}
                      {viewingHalfMove % 2 === 1
                        ? t('broadcasts.whiteMoveSuffix')
                        : viewingHalfMove > 0
                        ? t('broadcasts.blackMoveSuffix')
                        : t('broadcasts.startSuffix')}
                    </span>
                  ) : (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {t('broadcasts.liveStatus')}
                    </span>
                  )}
                </div>
              </div>

              {/* Informações de Turno / Partida Finalizada */}
              <div className="w-full max-w-[560px] flex items-center justify-between text-xs text-zinc-400 px-1 pt-1">
                <div className="flex items-center gap-2 font-medium">
                  {watchingGame.result !== '*' ? (
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-emerald-400 font-semibold">
                        {t('broadcasts.gameFinishedSummary', { result: watchingGame.result })}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-300 font-mono text-[11px] flex items-center gap-1.5 bg-[#121218] px-2 py-0.5 rounded border border-[#242432]">
                        <Clock className="w-3 h-3 text-zinc-400" />
                        <span>{t('broadcasts.whiteClock', { time: getDisplayClock(watchingGame, 'w') })}</span>
                        <span className="text-zinc-600">|</span>
                        <span>{t('broadcasts.blackClock', { time: getDisplayClock(watchingGame, 'b') })}</span>
                      </span>
                    </div>
                  ) : watchingGame.turn === 'w' ? (
                    <span className="text-zinc-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white inline-block" />
                      {t('broadcasts.whiteTurn')}
                    </span>
                  ) : (
                    <span className="text-zinc-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-400 inline-block" />
                      {t('broadcasts.blackTurn')}
                    </span>
                  )}
                </div>
              </div>

              {/* Final Teorico Syzygy se tiver 7 pecas ou menos */}
              <div className="w-full max-w-[560px] pt-1">
                <TablebaseCard currentFen={currentDisplayedFen} />
              </div>
            </div>

            {/* Coluna Direita: Lances ao Vivo e Histórico (5 Colunas) */}
            <div className="lg:col-span-5 bg-[#141418] border border-[#24242c] rounded-xl overflow-hidden flex flex-col h-[600px]">
              {/* Cabeçalho da Notação */}
              <div className="p-3.5 border-b border-[#1c1c22] bg-[#111114] flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                    {t('broadcasts.realtimeMoves')}
                  </h3>
                </div>

                {isLiveSync ? (
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full font-medium select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {t('broadcasts.syncLive')}
                  </div>
                ) : (
                  <button
                    type="button"
                    tabIndex={-1}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                      e.currentTarget.blur();
                      setViewingHalfMove(null);
                    }}
                    className="flex items-center gap-1.5 text-[11px] text-sky-300 bg-sky-950/60 hover:bg-sky-900/60 border border-sky-600/50 px-2.5 py-1 rounded-full font-medium transition shadow-sm animate-pulse focus:outline-none"
                    title={t('broadcasts.backToLiveTooltip')}
                  >
                    <Radio className="w-3 h-3 text-sky-400" />
                    <span>{t('broadcasts.backToLive')}</span>
                  </button>
                )}
              </div>

              {/* Motor ao Vivo - Card idêntico ao da aba de Análise (Imagem 2) */}
              <div className="bg-[#111116] border-b border-[#242432] px-3.5 py-2.5 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <button
                      type="button"
                      onClick={() => setLiveEngineOn((v) => !v)}
                      className={`relative w-9 h-5 rounded-full transition shrink-0 ${
                        liveEngineOn ? 'bg-sky-500' : 'bg-[#2a2a33]'
                      }`}
                      title={t('broadcasts.liveEngineToggle')}
                    >
                      <span
                        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${
                          liveEngineOn ? 'left-[18px]' : 'left-0.5'
                        }`}
                      />
                    </button>
                    <span className="text-zinc-200 font-medium text-xs shrink-0 select-none">
                      {t('broadcasts.liveEngine')}
                    </span>

                    {liveEngineOn && (
                      liveEval ? (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span
                            className={`font-mono font-bold px-1.5 py-0.5 rounded text-[11px] ${
                              isWhiteAhead ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-800 text-zinc-100'
                            }`}
                          >
                            {evalDisplayText}
                          </span>
                          <span className="text-zinc-400 font-mono text-[11px] shrink-0">
                            {t('broadcasts.depth')} {liveEval.depth || 0}/{liveDepth}
                          </span>
                        </div>
                      ) : (
                        <span className="text-zinc-500 text-[11px] animate-pulse">
                          {t('broadcasts.calculating')}
                        </span>
                      )
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowEngineSettings((s) => !s)}
                    className={`px-2 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1.5 transition shrink-0 ${
                      showEngineSettings
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                        : 'bg-[#181820] border-[#272733] text-zinc-400 hover:text-zinc-200'
                    }`}
                    title={t('broadcasts.parametersTooltip')}
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>{t('broadcasts.parameters')}</span>
                  </button>
                </div>

                {/* Gaveta de Parâmetros da Engine */}
                {showEngineSettings && (
                  <div className="pt-2 border-t border-[#1e1e28] flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-300">
                    <div className="flex items-center gap-1.5">
                      <span className="text-zinc-400">{t('broadcasts.depthLabel')}</span>
                      {[12, 14, 16, 18].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setLiveDepth(d)}
                          className={`px-1.5 py-0.5 rounded text-xs font-mono transition ${
                            liveDepth === d
                              ? 'bg-sky-500 text-white font-bold'
                              : 'bg-[#1c1c24] text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-zinc-400">{t('broadcasts.linesLabel')}</span>
                      {[1, 2, 3].map((lines) => (
                        <button
                          key={lines}
                          type="button"
                          onClick={() => setLiveMultiPv(lines)}
                          className={`px-1.5 py-0.5 rounded text-xs font-mono transition ${
                            liveMultiPv === lines
                              ? 'bg-sky-500 text-white font-bold'
                              : 'bg-[#1c1c24] text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {lines}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Linhas de Análise MultiPV */}
                {liveEngineOn && liveEval?.lines && liveEval.lines.length > 0 && (
                  <div className="space-y-1 text-[11px] font-mono pt-1">
                    {liveEval.lines.slice(0, liveMultiPv).map((line, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zinc-400">
                        <span className="text-zinc-500 font-bold w-3">{idx + 1}.</span>
                        <span className="text-emerald-300 font-semibold w-12 shrink-0">
                          {line.mateWhite !== null && line.mateWhite !== undefined
                            ? (line.mateWhite > 0 ? `+M${Math.abs(line.mateWhite)}` : `-M${Math.abs(line.mateWhite)}`)
                            : `${(line.evalWhiteCp ?? 0) > 0 ? '+' : ''}${(((line.evalWhiteCp ?? 0)) / 100).toFixed(1)}`}
                        </span>
                        <span
                          className="truncate text-zinc-300"
                          title={formatPvLineWithGlyphs(currentDisplayedFen, line.pv, 10)}
                        >
                          {formatPvLineWithGlyphs(currentDisplayedFen, line.pv, 7) || (line.pv || []).slice(0, 6).join(' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tabela de Lances com Scroll Automático e Navegação Interativa */}
              <div
                ref={movesContainerRef}
                className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin text-xs font-mono"
              >
                {watchingGame.movePairs && watchingGame.movePairs.length > 0 ? (
                  watchingGame.movePairs.map((pair, idx) => {
                    const isLastPair = idx === watchingGame.movePairs.length - 1;
                    const isWhiteSelected =
                      (viewingHalfMove === pair.whiteHalfIndex) ||
                      (viewingHalfMove === null && isLastPair && !pair.blackSan);
                    const isBlackSelected =
                      (viewingHalfMove === pair.blackHalfIndex) ||
                      (viewingHalfMove === null && isLastPair && Boolean(pair.blackSan));

                    return (
                      <div
                        key={pair.moveNumber}
                        className="grid grid-cols-12 gap-1.5 p-1 rounded-lg transition-colors hover:bg-[#181820]"
                      >
                        {/* Número do lance */}
                        <div className="col-span-2 text-zinc-500 font-semibold select-none flex items-center">
                          {pair.moveNumber}.
                        </div>

                        {/* Lance das Brancas */}
                        <div
                          onClick={() => setViewingHalfMove(pair.whiteHalfIndex)}
                          className={`col-span-5 flex items-center justify-between px-1.5 py-0.5 rounded cursor-pointer transition ${
                            isWhiteSelected
                              ? 'bg-sky-500/25 text-sky-200 font-bold border border-sky-500/40 shadow-sm'
                              : 'hover:bg-white/10 text-zinc-200'
                          }`}
                          title={`Ver lance ${pair.moveNumber}. ${pair.whiteSan}`}
                        >
                          <span className="font-semibold">{pair.whiteSan}</span>
                          {pair.whiteClk && (
                            <span className="text-[10px] text-zinc-500 font-mono">
                              {pair.whiteClk}
                            </span>
                          )}
                        </div>

                        {/* Lance das Pretas */}
                        {pair.blackSan ? (
                          <div
                            onClick={() => setViewingHalfMove(pair.blackHalfIndex)}
                            className={`col-span-5 flex items-center justify-between px-1.5 py-0.5 rounded cursor-pointer transition ${
                              isBlackSelected
                                ? 'bg-sky-500/25 text-sky-200 font-bold border border-sky-500/40 shadow-sm'
                                : 'hover:bg-white/10 text-zinc-200'
                            }`}
                            title={`Ver lance ${pair.moveNumber}... ${pair.blackSan}`}
                          >
                            <span className="font-semibold">{pair.blackSan}</span>
                            {pair.blackClk && (
                              <span className="text-[10px] text-zinc-500 font-mono">
                                {pair.blackClk}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="col-span-5" />
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-8 text-center text-zinc-500 text-xs italic">
                    {t('broadcasts.noMovesYet')}
                  </div>
                )}
              </div>

              {/* Rodapé com Último Lance e Ação de Análise */}
              <div className="p-3 bg-[#111114] border-t border-[#1c1c22] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">
                    {viewingHalfMove !== null ? t('broadcasts.viewedMove') : t('broadcasts.lastMove')}
                  </span>
                  <span className="font-mono font-bold text-white text-sm">
                    {viewingHalfMove !== null
                      ? (viewingHalfMove === 0
                          ? t('broadcasts.startPosition')
                          : `${Math.ceil(viewingHalfMove / 2)}${viewingHalfMove % 2 === 1 ? '.' : '...'} ${
                              watchingGame.historySans?.[viewingHalfMove] || ''
                            }`)
                      : (watchingGame.lastMoveSan || t('broadcasts.startPosition'))}
                  </span>
                </div>

                {watchingGame.result !== '*' && (
                  <div className="p-2.5 rounded-lg bg-[#14141e] border border-[#242436] text-xs flex items-center justify-between">
                    <span className="text-zinc-400 font-medium text-[11px]">{t('broadcasts.finalTimeAtEnd')}</span>
                    <div className="flex items-center gap-2 font-mono font-bold text-xs">
                      <span className="text-zinc-200 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-white inline-block" />
                        {getDisplayClock(watchingGame, 'w')}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-200 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-zinc-800 border border-zinc-500 inline-block" />
                        {getDisplayClock(watchingGame, 'b')}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => onLoadGameIntoAnalysis(watchingGame.rawPgn, watchingGame)}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#ececef] hover:bg-white text-black text-xs font-semibold flex items-center justify-center gap-2 transition shadow-md"
                >
                  <Cpu className="w-4 h-4" />
                  {t('broadcasts.openInAnalysis')}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ===================================================================
            VISÃO 3: GRADE DE TABULEIROS DA RODADA COM TRANSMISSÃO EM TEMPO REAL
           =================================================================== */
        <div className="space-y-6">
          {/* Botão de Retorno e Copiar Link do Torneio */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <button
              type="button"
              onClick={handleBackToTournamentList}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141418] hover:bg-[#1d1d24] border border-[#24242c] rounded-lg text-xs font-medium text-zinc-300 hover:text-white transition"
              title={t('broadcasts.breadcrumbsRoot')}
            >
              <ChevronLeft className="w-4 h-4 text-zinc-400" />
              <span>
                {filterMode === 'finished'
                  ? t('broadcasts.backToFinishedTours')
                  : filterMode === 'live'
                  ? t('broadcasts.backToLiveTours')
                  : t('broadcasts.backToAllTours')}
              </span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleCopyCurrentLink(t('broadcasts.tourLinkCopied'))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141418] hover:bg-[#1f1f26] border border-[#24242c] rounded-lg text-xs font-medium text-zinc-300 hover:text-white transition"
              >
                <Link2 className="w-3.5 h-3.5 text-blue-400" />
                <span>{t('broadcasts.shareTour')}</span>
              </button>

              {selectedTournament.tour?.url && (
                <a
                  href={selectedTournament.tour.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 hover:underline"
                >
                  <span>{t('broadcasts.officialLink')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Banner do Torneio Selecionado */}
          <div className="bg-[#141418] border border-[#24242c] rounded-xl p-5 flex flex-col md:flex-row gap-5 items-start md:items-center">
            {selectedTournament.tour?.image && (
              <img
                src={selectedTournament.tour.image}
                alt={selectedTournament.tour.name}
                className="w-full md:w-48 h-28 object-cover rounded-lg border border-[#22222a] shrink-0"
              />
            )}
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/40 text-blue-300 border border-blue-900/40">
                  {t('broadcasts.officialBroadcast')}
                </span>
                {selectedTournament.tour?.info?.format && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e1e26] text-zinc-400 border border-[#2a2a36]">
                    {selectedTournament.tour.info.format}
                  </span>
                )}
                {selectedTournament.tour?.info?.location && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e1e26] text-zinc-400 border border-[#2a2a36] flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {selectedTournament.tour.info.location}
                  </span>
                )}
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight truncate">
                {selectedTournament.tour?.name}
              </h2>
              {selectedTournament.tour?.info?.players && (
                <p className="text-xs text-zinc-400 line-clamp-2">
                  <span className="text-zinc-500 font-semibold">{t('broadcasts.participants')} </span>
                  {selectedTournament.tour.info.players}
                </p>
              )}
            </div>
          </div>

          {/* Seletor de Rodadas */}
          {selectedTournament.rounds && selectedTournament.rounds.length > 0 ? (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                {t('broadcasts.tournamentRounds')}
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {selectedTournament.rounds.map((round) => {
                  const isSelected = selectedRound?.id === round.id;
                  return (
                    <button
                      key={round.id}
                      onClick={() => {
                        setSelectedRound(round);
                        updateRoute({
                          page: 'broadcasts',
                          tourId: selectedTournament.tour?.id,
                          roundId: round.id,
                        });
                        loadGamesForRound(round.id);
                      }}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap flex items-center gap-2 transition shrink-0 ${
                        isSelected
                          ? 'bg-[#ececef] text-black font-semibold shadow-md'
                          : 'bg-[#141418] hover:bg-[#1a1a22] text-zinc-300 border border-[#24242c]'
                      }`}
                    >
                      {round.ongoing && (
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      )}
                      <span>{round.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="w-full flex items-center gap-3.5 px-4 py-3 rounded-md bg-[#302e2b] text-[#c0beb9] shadow-sm select-none">
              <div className="w-[22px] h-[22px] rounded-full bg-[#8c8985] text-[#302e2b] flex items-center justify-center text-xs font-serif italic font-black shrink-0">
                i
              </div>
              <span className="text-sm font-normal text-[#c0beb9]">
                {t('broadcasts.noBoardsYet')}
              </span>
            </div>
          )}

          {/* Barra de Status e Transmissão ao Vivo */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#111114] border border-[#1f1f26] rounded-xl text-xs">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-white">
                {selectedRound?.name || 'Rodada'}
              </span>
              {selectedRound?.ongoing ? (
                <span className="text-red-400 font-medium flex items-center gap-1.5 bg-red-950/40 border border-red-900/40 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  {t('broadcasts.liveActive')}
                </span>
              ) : selectedRound?.finished ? (
                <span className="text-zinc-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                  {t('broadcasts.finishedStatus')}
                </span>
              ) : null}

              <span className="text-zinc-400">
                • {roundGames.length === 1 ? t('broadcasts.singleBoard', { count: 1 }) : t('broadcasts.multipleBoards', { count: roundGames.length })}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                {t('broadcasts.realTime50ms')}
              </span>
              {lastRefreshedAt && (
                <span className="hidden sm:inline">
                  {t('broadcasts.updatedAt', { time: lastRefreshedAt.toLocaleTimeString(language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : 'pt-BR') })}
                </span>
              )}
            </div>
          </div>

          {/* Carregando Mesas */}
          {loadingGames && roundGames.length === 0 && (
            <div className="p-12 text-center rounded-xl bg-[#121215] border border-[#1f1f26] space-y-3">
              <RotateCcw className="w-8 h-8 text-blue-400 animate-spin mx-auto" />
              <p className="text-xs text-zinc-400">
                {t('broadcasts.connecting')}
              </p>
            </div>
          )}

          {/* Grade de Tabuleiros da Rodada */}
          {!loadingGames && roundGames.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {roundGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-[#141418] border border-[#24242c] hover:border-[#383844] rounded-xl overflow-hidden flex flex-col transition-all duration-200 shadow-md group"
                >
                  {/* Cabeçalho da Mesa */}
                  <div className="p-3 border-b border-[#1c1c22] flex items-center justify-between text-xs bg-[#111114]">
                    <span className="font-semibold text-zinc-200">
                      {t('broadcasts.boardNumber', { num: game.board })}
                    </span>
                    <div className="flex items-center gap-2">
                      {game.eco && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1a1a22] text-zinc-400 border border-[#262632]">
                          {game.eco}
                        </span>
                      )}
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          game.result === '1-0'
                            ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800/40'
                            : game.result === '0-1'
                            ? 'bg-rose-950/50 text-rose-300 border border-rose-800/40'
                            : game.result === '1/2-1/2'
                            ? 'bg-amber-950/50 text-amber-300 border border-amber-800/40'
                            : 'bg-red-950/40 text-red-300 border border-red-800/30 font-sans text-[11px]'
                        }`}
                      >
                        {game.result === '*' ? t('broadcasts.liveStatus') : game.result}
                      </span>
                    </div>
                  </div>

                  {/* Jogador Pretas (topo do tabuleiro) */}
                  <div className="px-3 py-2 bg-[#121216] border-b border-[#1c1c22] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-500 shrink-0" />
                      {game.blackTitle && <TitleBadge title={game.blackTitle} />}
                      <span className="font-medium text-zinc-200 truncate" title={game.black}>
                        {game.black}
                      </span>
                      {game.blackElo && (
                        <span className="text-[11px] text-zinc-400 font-mono shrink-0">
                          ({game.blackElo})
                        </span>
                      )}
                    </div>

                    {/* Relógio ou Pontuação das Pretas */}
                    {game.result !== '*' ? (
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <span
                          className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#101016] border border-[#222230] text-[10px] font-mono font-bold text-zinc-300"
                          title={t('broadcasts.finalTimeAtEnd')}
                        >
                          <Clock className="w-2.5 h-2.5 text-zinc-400" />
                          {getDisplayClock(game, 'b')}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                            game.result === '0-1'
                              ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/50'
                              : game.result === '1-0'
                              ? 'bg-zinc-900 text-zinc-500 border border-zinc-800'
                              : 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                          }`}
                        >
                          {game.result === '0-1' ? '1' : game.result === '1-0' ? '0' : '½'}
                        </span>
                      </div>
                    ) : (
                      <span
                        className={`text-[11px] font-mono flex items-center gap-1 shrink-0 ml-2 ${
                          game.turn === 'b' ? 'text-blue-300 font-bold' : 'text-zinc-400'
                        }`}
                      >
                        <Clock className="w-3 h-3 text-zinc-500" />
                        {getDisplayClock(game, 'b')}
                      </span>
                    )}
                  </div>

                  {/* Mini Tabuleiro Clicável para Abrir no Modo Assistir Ampliado */}
                  <div
                    onClick={() => handleOpenWatchBoard(game)}
                    className="p-2 flex items-center justify-center bg-[#0d0d10] cursor-pointer relative group/board"
                    title={t('broadcasts.watchEnlarged')}
                  >
                    <div className="w-full aspect-square max-w-[260px] rounded-lg overflow-hidden border border-[#24242c] shadow-inner pointer-events-none group-hover/board:border-blue-500/50 transition">
                      <Chessboard
                        position={game.currentFen}
                        arePiecesDraggable={false}
                        animationDuration={100}
                        customSquareStyles={
                          game.lastMoveSquares && game.lastMoveSquares.length === 2
                            ? {
                                [game.lastMoveSquares[0]]: {
                                  backgroundColor: 'rgba(255, 215, 0, 0.35)',
                                },
                                [game.lastMoveSquares[1]]: {
                                  backgroundColor: 'rgba(255, 215, 0, 0.55)',
                                },
                              }
                            : {}
                        }
                        customDarkSquareStyle={darkSquareStyle}
                        customLightSquareStyle={lightSquareStyle}
                        customPieces={customPieces}
                      />
                    </div>

                    {/* Overlay de hover com botão Assistir */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/board:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="px-3 py-1.5 rounded-lg bg-black/85 border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl">
                        <Eye className="w-3.5 h-3.5 text-blue-400" />
                        {t('broadcasts.watchEnlarged')}
                      </span>
                    </div>
                  </div>

                  {/* Jogador Brancas (base do tabuleiro) */}
                  <div className="px-3 py-2 bg-[#121216] border-t border-[#1c1c22] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-2.5 h-2.5 rounded-full bg-white border border-zinc-400 shrink-0" />
                      {game.whiteTitle && <TitleBadge title={game.whiteTitle} />}
                      <span className="font-medium text-zinc-200 truncate" title={game.white}>
                        {game.white}
                      </span>
                      {game.whiteElo && (
                        <span className="text-[11px] text-zinc-400 font-mono shrink-0">
                          ({game.whiteElo})
                        </span>
                      )}
                    </div>

                    {/* Relógio ou Pontuação das Brancas */}
                    {game.result !== '*' ? (
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <span
                          className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#101016] border border-[#222230] text-[10px] font-mono font-bold text-zinc-300"
                          title={t('broadcasts.finalTimeAtEnd')}
                        >
                          <Clock className="w-2.5 h-2.5 text-zinc-400" />
                          {getDisplayClock(game, 'w')}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                            game.result === '1-0'
                              ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/50'
                              : game.result === '0-1'
                              ? 'bg-zinc-900 text-zinc-500 border border-zinc-800'
                              : 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                          }`}
                        >
                          {game.result === '1-0' ? '1' : game.result === '0-1' ? '0' : '½'}
                        </span>
                      </div>
                    ) : (
                      <span
                        className={`text-[11px] font-mono flex items-center gap-1 shrink-0 ml-2 ${
                          game.turn === 'w' ? 'text-blue-300 font-bold' : 'text-zinc-400'
                        }`}
                      >
                        <Clock className="w-3 h-3 text-zinc-500" />
                        {getDisplayClock(game, 'w')}
                      </span>
                    )}
                  </div>

                  {/* Rodapé do Card com Último Lance e Botões */}
                  <div className="p-3 bg-[#0f0f13] border-t border-[#1c1c22] space-y-2 mt-auto">
                    <div className="text-[11px] text-zinc-400 flex items-center justify-between">
                      <span>{t('broadcasts.lastMove')}</span>
                      <span className="font-mono font-semibold text-zinc-200">
                        {game.lastMoveSan || t('broadcasts.startPosition')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenWatchBoard(game)}
                        className="py-1.5 px-2 rounded-lg bg-[#181820] hover:bg-[#22222d] text-zinc-200 text-xs font-medium border border-[#2b2b36] transition flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-blue-400" />
                        {t('broadcasts.watch')}
                      </button>

                      <button
                        type="button"
                        onClick={() => onLoadGameIntoAnalysis(game.rawPgn, game)}
                        className="py-1.5 px-2 rounded-lg bg-[#181820] hover:bg-white hover:text-black text-zinc-200 text-xs font-medium border border-[#2b2b36] hover:border-white transition flex items-center justify-center gap-1.5 group-hover:bg-[#ececef] group-hover:text-black group-hover:border-white"
                      >
                        <Cpu className="w-3.5 h-3.5" />
                        {t('broadcasts.analyze')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Mensagem quando não há tabuleiros ainda (Estilo Lichess exato com i circular conforme screenshot) */}
          {!loadingGames && roundGames.length === 0 && (
            <div className="w-full flex items-center gap-3.5 px-4 py-3 rounded-md bg-[#302e2b] text-[#c0beb9] shadow-sm select-none">
              <div className="w-[22px] h-[22px] rounded-full bg-[#8c8985] text-[#302e2b] flex items-center justify-center text-xs font-serif italic font-black shrink-0">
                i
              </div>
              <span className="text-sm font-normal text-[#c0beb9]">
                {t('broadcasts.noBoardsYet')}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
