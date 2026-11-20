import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import {
  Play,
  RotateCcw,
  Flag,
  Undo2,
  Cpu,
  Clock,
  Zap,
  Award,
  Bookmark,
  ArrowRight,
  Lightbulb,
  RefreshCw,
  Check,
  Shield,
  Sliders,
  Edit3,
  Download,
  BookOpen,
  Dices,
} from 'lucide-react';
import { StockfishEngine } from '../utils/stockfishEngine';
import { detectOpening, isMoveInOpeningBook } from '../utils/openings';
import { INITIAL_FEN, parsePgnToTree } from '../utils/moveTree';
import { ClassificationIcon, ClassificationBadge } from './ClassificationIcon';
import { useTranslation } from '../i18n';

// ============================================================================
// RITMOS DE JOGO (Inspirados na grade do Lichess + Endgame.ai)
// ============================================================================
export const TIME_PRESETS = [
  { id: '1+0', label: '1+0', category: 'Bullet', minutes: 1, increment: 0 },
  { id: '2+1', label: '2+1', category: 'Bullet', minutes: 2, increment: 1 },
  { id: '3+0', label: '3+0', category: 'Blitz', minutes: 3, increment: 0 },
  { id: '3+2', label: '3+2', category: 'Blitz', minutes: 3, increment: 2 },
  { id: '5+0', label: '5+0', category: 'Blitz', minutes: 5, increment: 0 },
  { id: '5+3', label: '5+3', category: 'Blitz', minutes: 5, increment: 3 },
  { id: '10+0', label: '10+0', category: 'Rápida', minutes: 10, increment: 0 },
  { id: '10+5', label: '10+5', category: 'Rápida', minutes: 10, increment: 5 },
  { id: '15+10', label: '15+10', category: 'Rápida', minutes: 15, increment: 10 },
  { id: '30+0', label: '30+0', category: 'Clássica', minutes: 30, increment: 0 },
  { id: '30+20', label: '30+20', category: 'Clássica', minutes: 30, increment: 20 },
  { id: 'unlimited', label: 'Sem Relógio', category: 'Livre', minutes: 0, increment: 0 },
];

// ============================================================================
// MODOS DE PARTIDA CONTRA O COMPUTADOR
// ============================================================================
export const BOT_MODES = [
  {
    id: 'COMPETITIVE',
    label: 'Partida Oficial',
    desc: 'Sem dicas ou voltar lances. Simulação real de torneio.',
  },
  {
    id: 'TRAINING',
    label: 'Modo Treino / Assistido',
    desc: 'Permite voltar lances, pedir dica ao Stockfish e ver avaliação.',
  },
  {
    id: 'OPENING_SPAR',
    label: 'Sparring de Abertura',
    desc: 'Comece a partir de uma abertura específica do seu repertório.',
  },
];

export const SPARRING_POSITIONS = [
  {
    id: 'start',
    name: 'Posição Inicial Padrão',
    pgn: '',
    fen: INITIAL_FEN,
  },
  {
    id: 'sicilian_open',
    name: 'Defesa Siciliana Aberta (1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4)',
    pgn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4',
    fen: 'rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4',
  },
  {
    id: 'italian',
    name: 'Abertura Italiana (1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5)',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5',
    fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
  },
  {
    id: 'ruy_lopez',
    name: 'Ruy López — Espanhola (1.e4 e5 2.Nf3 Nc6 3.Bb5 a6)',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6',
    fen: 'r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
  },
  {
    id: 'french',
    name: 'Defesa Francesa (1.e4 e6 2.d4 d5)',
    pgn: '1. e4 e6 2. d4 d5',
    fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
  },
  {
    id: 'caro_kann',
    name: 'Defesa Caro-Kann (1.e4 c6 2.d4 d5)',
    pgn: '1. e4 c6 2. d4 d5',
    fen: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
  },
  {
    id: 'queens_gambit',
    name: 'Gambito da Dama (1.d4 d5 2.c4 e6)',
    pgn: '1. d4 d5 2. c4 e6',
    fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
  },
  {
    id: 'london',
    name: 'Sistema London (1.d4 d5 2.Bf4 Nf6 3.e3)',
    pgn: '1. d4 d5 2. Bf4 Nf6 3. e3',
    fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/4P3/PPP2PPP/RN1QKBNR b KQkq - 0 3',
  },
  {
    id: 'kings_indian',
    name: 'Defesa Índia do Rei (1.d4 Nf6 2.c4 g6 3.Nc3 Bg7)',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7',
    fen: 'rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4',
  },
];

// Retorna perfil descritivo e título FIDE correspondente ao Rating (100 a 3200)
export function getBotProfileByRating(rating) {
  const r = Number(rating) || 1500;
  if (r <= 400) {
    return {
      title: '',
      tier: 'Iniciante Absoluto',
      desc: 'Aprendeu o movimento das peças agora. Comete deslizes frequentes.',
    };
  }
  if (r <= 800) {
    return {
      title: '',
      tier: 'Casual / Principiante',
      desc: 'Desenvolve peças, mas deixa táticas simples de 1 ou 2 lances escaparem.',
    };
  }
  if (r <= 1200) {
    return {
      title: '',
      tier: 'Jogador de Clube Iniciante',
      desc: 'Conhece princípios básicos de abertura e pune peças soltas.',
    };
  }
  if (r <= 1600) {
    return {
      title: '',
      tier: 'Intermediário de Clube',
      desc: 'Jogo sólido, calcula pequenas combinações e defende ameaças diretas.',
    };
  }
  if (r <= 1900) {
    return {
      title: '',
      tier: 'Avançado de Torneio',
      desc: 'Forte visão tática e bom entendimento posicional no meio-jogo.',
    };
  }
  if (r === 2000 || r === 2100) {
    return {
      title: 'NM',
      tier: 'Mestre Nacional (NM)',
      desc: 'Domínio de aberturas teóricas, cálculo preciso e finais técnicos.',
    };
  }
  if (r === 2200) {
    return {
      title: 'CM',
      tier: 'Candidato a Mestre (CM)',
      desc: 'Pune imprecisões posicionais e converte vantagens com consistência.',
    };
  }
  if (r === 2300) {
    return {
      title: 'FM',
      tier: 'Mestre FIDE (FM)',
      desc: 'Alto nível tático e estratégico digno de titulados internacionais.',
    };
  }
  if (r === 2400) {
    return {
      title: 'IM',
      tier: 'Mestre Internacional (IM)',
      desc: 'Cálculo profundo, defesa tenaz e preparação teórica afiada.',
    };
  }
  if (r >= 2500 && r <= 2700) {
    return {
      title: 'GM',
      tier: 'Grande Mestre (GM)',
      desc: 'Elite mundial. Praticamente não comete erros táticos.',
    };
  }
  return {
    title: 'GM',
    tier: 'Super GM / Força Máxima',
    desc: 'Stockfish 19 em força sobre-humana (até 3200 Elo).',
  };
}

// Todos os 32 degraus de 100 em 100: [100, 200, 300, ..., 3200]
const RATING_STEPS = Array.from({ length: 32 }, (_, i) => (i + 1) * 100);

function formatClock(seconds) {
  if (seconds === null || seconds === undefined) return '∞';
  const s = Math.max(0, Math.ceil(seconds));
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export default function PlayVsComputer({
  playerName = 'Usuário',
  isPublicMode = false,
  darkSquareStyle = { backgroundColor: '#788a9e' },
  lightSquareStyle = { backgroundColor: '#dee3e6' },
  customPieces,
  onEditPlayerName,
  onAnalyzeFinishedGame,
  onSaveFinishedGameToDb,
}) {
  const { t, language } = useTranslation();

  // Configurações da Partida
  const [botRating, setBotRating] = useState(1200);
  const [selectedTimePreset, setSelectedTimePreset] = useState(TIME_PRESETS[6]); // 10+0 Rápida
  const [customMinutes, setCustomMinutes] = useState(10);
  const [customIncrement, setCustomIncrement] = useState(0);
  const [useCustomTime, setUseCustomTime] = useState(false);

  const [selectedMode, setSelectedMode] = useState('COMPETITIVE'); // 'COMPETITIVE' | 'TRAINING' | 'OPENING_SPAR'
  const [selectedSparringId, setSelectedSparringId] = useState('sicilian_open');
  const [colorChoice, setColorChoice] = useState('w'); // 'w' | 'b' | 'random'

  // Estado da Partida em Andamento
  const [isGameActive, setIsGameActive] = useState(false);
  const [userColor, setUserColor] = useState('w');
  const [fen, setFen] = useState(INITIAL_FEN);
  const [moveHistory, setMoveHistory] = useState([]); // [{ ply, moveNumber, color, san, uci, from, to, fenBefore, fenAfter, isBook }]
  const [gameStatus, setGameStatus] = useState(null); // { over: boolean, result: '1-0'|'0-1'|'1/2-1/2', reason: string }
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [hintMove, setHintMove] = useState(null); // { from, to, san, evalCp }
  const [isFetchingHint, setIsFetchingHint] = useState(false);
  const [savedConfirmed, setSavedConfirmed] = useState(false);

  // Sistema de Pre-move (Pré-lance estilo Lichess / Chess.com)
  const [premoveEnabled, setPremoveEnabled] = useState(true);
  const [queuedPremove, setQueuedPremove] = useState(null); // { from, to, piece }
  const [selectedSquare, setSelectedSquare] = useState(null); // Suporte a clique casa-origem -> casa-destino
  const queuedPremoveRef = useRef(null);

  useEffect(() => {
    queuedPremoveRef.current = queuedPremove;
  }, [queuedPremove]);

  // Relógios (em segundos)
  const [whiteTime, setWhiteTime] = useState(600);
  const [blackTime, setBlackTime] = useState(600);
  const hasClock = useCustomTime ? customMinutes > 0 : selectedTimePreset.minutes > 0;
  const activeIncrement = useCustomTime ? customIncrement : selectedTimePreset.increment;

  const botEngineRef = useRef(null);
  const chessRef = useRef(new Chess());

  useEffect(() => {
    return () => {
      if (botEngineRef.current) {
        botEngineRef.current.terminate();
      }
    };
  }, []);

  const botProfile = useMemo(() => getBotProfileByRating(botRating), [botRating]);
  const currentOpening = useMemo(() => detectOpening(moveHistory), [moveHistory]);

  // Verifica fim de partida (Xeque-mate, Afogamento, Empate por repetição/material/50 lances)
  const checkGameOver = (chessInstance) => {
    if (!chessInstance.isGameOver()) return null;

    if (chessInstance.isCheckmate()) {
      const winner = chessInstance.turn() === 'w' ? '0-1' : '1-0';
      return {
        over: true,
        result: winner,
        reason: `Xeque-mate (${winner === '1-0' ? 'Brancas vencem' : 'Pretas vencem'})`,
      };
    }
    if (chessInstance.isStalemate()) {
      return { over: true, result: '1/2-1/2', reason: 'Empate por Afogamento' };
    }
    if (chessInstance.isThreefoldRepetition()) {
      return { over: true, result: '1/2-1/2', reason: 'Empate por Tripla Repetição' };
    }
    if (chessInstance.isInsufficientMaterial()) {
      return { over: true, result: '1/2-1/2', reason: 'Empate por Material Insuficiente' };
    }
    return { over: true, result: '1/2-1/2', reason: 'Empate (Regra dos 50 lances)' };
  };

  // Timer de relógio a cada 1 segundo
  useEffect(() => {
    if (!isGameActive || !hasClock || gameStatus?.over) return;

    const timer = setInterval(() => {
      const turn = chessRef.current.turn();
      if (turn === 'w') {
        setWhiteTime((prev) => {
          if (prev <= 1) {
            setGameStatus({
              over: true,
              result: '0-1',
              reason: 'Tempo esgotado das Brancas (0-1)',
            });
            setIsGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      } else {
        setBlackTime((prev) => {
          if (prev <= 1) {
            setGameStatus({
              over: true,
              result: '1-0',
              reason: 'Tempo esgotado das Pretas (1-0)',
            });
            setIsGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameActive, hasClock, gameStatus]);

  // Inicia uma nova partida contra o computador
  const startNewBotGame = async () => {
    const resolvedColor =
      colorChoice === 'random' ? (Math.random() < 0.5 ? 'w' : 'b') : colorChoice;
    setUserColor(resolvedColor);
    setHintMove(null);
    setQueuedPremove(null);
    setSelectedSquare(null);
    setSavedConfirmed(false);

    const mins = useCustomTime ? Number(customMinutes) || 0 : selectedTimePreset.minutes;
    setWhiteTime(mins * 60);
    setBlackTime(mins * 60);

    const newChess = new Chess();
    const initialHistory = [];

    if (selectedMode === 'OPENING_SPAR') {
      const preset = SPARRING_POSITIONS.find((p) => p.id === selectedSparringId);
      if (preset && preset.pgn) {
        const tempChess = new Chess();
        tempChess.loadPgn(preset.pgn);
        const verboseMoves = tempChess.history({ verbose: true });
        const replayChess = new Chess();
        verboseMoves.forEach((m, idx) => {
          const fenBefore = replayChess.fen();
          replayChess.move(m);
          const fenAfter = replayChess.fen();
          const sanSeq = verboseMoves.slice(0, idx + 1).map((x) => x.san);
          initialHistory.push({
            ply: idx + 1,
            moveNumber: Math.floor(idx / 2) + 1,
            color: m.color,
            san: m.san,
            uci: `${m.from}${m.to}${m.promotion || ''}`,
            from: m.from,
            to: m.to,
            fenBefore,
            fenAfter,
            isBook: isMoveInOpeningBook(sanSeq),
          });
        });
        newChess.load(replayChess.fen());
      }
    }

    chessRef.current = newChess;
    setFen(newChess.fen());
    setMoveHistory(initialHistory);
    setGameStatus(null);
    setIsGameActive(true);
  };

  // Executa um lance válido do usuário na instância atual do jogo (usado tanto para lance normal quanto para Pre-move automático)
  const executeUserMoveOnBoard = (sourceSquare, targetSquare, pieceHint) => {
    const boardPiece = chessRef.current.get(sourceSquare);
    if (!boardPiece || boardPiece.color !== userColor) return false;

    const promoChar = pieceHint ? pieceHint[1]?.toLowerCase() : 'q';
    const isPromo =
      boardPiece.type === 'p' &&
      ((userColor === 'w' && targetSquare[1] === '8') ||
        (userColor === 'b' && targetSquare[1] === '1'));
    const chosenPromo = isPromo
      ? ['q', 'r', 'b', 'n'].includes(promoChar)
        ? promoChar
        : 'q'
      : undefined;

    const fenBefore = chessRef.current.fen();
    let moveObj = null;
    try {
      moveObj = chessRef.current.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: chosenPromo,
      });
    } catch {
      return false;
    }

    if (!moveObj) return false;

    const fenAfter = chessRef.current.fen();
    setFen(fenAfter);
    setHintMove(null);
    setSelectedSquare(null);

    setMoveHistory((prev) => {
      const nextSanSeq = [...prev.map((m) => m.san), moveObj.san];
      const isBook = isMoveInOpeningBook(nextSanSeq);
      const nextPly = prev.length + 1;
      return [
        ...prev,
        {
          ply: nextPly,
          moveNumber: Math.floor((nextPly - 1) / 2) + 1,
          color: moveObj.color,
          san: moveObj.san,
          uci: `${moveObj.from}${moveObj.to}${moveObj.promotion || ''}`,
          from: moveObj.from,
          to: moveObj.to,
          fenBefore,
          fenAfter,
          isBook,
        },
      ];
    });

    if (hasClock && activeIncrement > 0) {
      if (userColor === 'w') {
        setWhiteTime((t) => t + activeIncrement);
      } else {
        setBlackTime((t) => t + activeIncrement);
      }
    }

    const overState = checkGameOver(chessRef.current);
    if (overState) {
      setGameStatus(overState);
      setIsGameActive(false);
    }

    return true;
  };

  // Dispara o lance do computador sempre que for a vez dele
  useEffect(() => {
    if (!isGameActive || gameStatus?.over) return;
    const currentTurn = chessRef.current.turn();
    if (currentTurn === userColor) return;

    let cancelled = false;
    const makeBotMove = async () => {
      setIsBotThinking(true);
      try {
        if (!botEngineRef.current) {
          botEngineRef.current = new StockfishEngine();
        }
        await botEngineRef.current.init();

        // Pequena pausa para permitir que o jogador registre um pre-move confortavelmente
        await new Promise((r) => setTimeout(r, 380));
        if (cancelled) return;

        const currentFen = chessRef.current.fen();
        const uciMove = await botEngineRef.current.getComputerMove(currentFen, botRating);
        if (cancelled || !uciMove) return;

        const from = uciMove.slice(0, 2);
        const to = uciMove.slice(2, 4);
        const promotion = uciMove.slice(4, 5) || undefined;

        const fenBefore = chessRef.current.fen();
        const moveObj = chessRef.current.move({ from, to, promotion });
        if (!moveObj) return;

        const fenAfter = chessRef.current.fen();
        setFen(fenAfter);

        setMoveHistory((prev) => {
          const nextSanSeq = [...prev.map((m) => m.san), moveObj.san];
          const isBook = isMoveInOpeningBook(nextSanSeq);
          const nextPly = prev.length + 1;
          return [
            ...prev,
            {
              ply: nextPly,
              moveNumber: Math.floor((nextPly - 1) / 2) + 1,
              color: moveObj.color,
              san: moveObj.san,
              uci: `${moveObj.from}${moveObj.to}${moveObj.promotion || ''}`,
              from: moveObj.from,
              to: moveObj.to,
              fenBefore,
              fenAfter,
              isBook,
            },
          ];
        });

        // Aplica incremento ao relógio do computador
        if (hasClock && activeIncrement > 0) {
          if (moveObj.color === 'w') {
            setWhiteTime((t) => t + activeIncrement);
          } else {
            setBlackTime((t) => t + activeIncrement);
          }
        }

        const overState = checkGameOver(chessRef.current);
        if (overState) {
          setGameStatus(overState);
          setQueuedPremove(null);
          setIsGameActive(false);
          return;
        }

        // ⚡ EXECUÇÃO INSTANTÂNEA DE PRE-MOVE (Se o usuário deixou um pré-lance agendado)
        const pendingPremove = queuedPremoveRef.current;
        if (pendingPremove) {
          setQueuedPremove(null);
          queuedPremoveRef.current = null;
          // Executa no próximo micro-frame para atualizar a posição visualmente sem perder tempo no relógio
          setTimeout(() => {
            executeUserMoveOnBoard(
              pendingPremove.from,
              pendingPremove.to,
              pendingPremove.piece
            );
          }, 30);
        }
      } finally {
        if (!cancelled) setIsBotThinking(false);
      }
    };

    makeBotMove();
    return () => {
      cancelled = true;
    };
  }, [fen, isGameActive, userColor, botRating, gameStatus, hasClock, activeIncrement]);

  // Lance do Usuário no Tabuleiro (ou Agendamento de Pre-move durante a vez do computador)
  const handleUserPieceDrop = (sourceSquare, targetSquare, piece) => {
    if (!isGameActive || gameStatus?.over) return false;
    if (sourceSquare === targetSquare) return false;

    const currentTurn = chessRef.current.turn();

    // Se for a vez do computador (ou ele estiver pensando) e o Pre-move estiver ativo:
    if (currentTurn !== userColor || isBotThinking) {
      if (!premoveEnabled) return false;
      const pieceColor = piece ? piece[0] : chessRef.current.get(sourceSquare)?.color;
      if (pieceColor !== userColor) return false;

      setQueuedPremove({ from: sourceSquare, to: targetSquare, piece });
      setSelectedSquare(null);
      // Retorna false para a peça aguardar na casa atual com o destaque vermelho/âmbar de Pre-move até o bot jogar
      return false;
    }

    // Se for a vez do usuário, limpa eventual pre-move e executa o lance imediatamente
    setQueuedPremove(null);
    return executeUserMoveOnBoard(sourceSquare, targetSquare, piece);
  };

  // Suporte a clique nas casas (para jogar ou agendar/cancelar Pre-move clicando origem -> destino)
  const handleSquareClick = (square) => {
    if (!isGameActive || gameStatus?.over) return;

    const currentTurn = chessRef.current.turn();
    const isUsersTurn = currentTurn === userColor && !isBotThinking;
    const pieceOnSquare = chessRef.current.get(square);

    // Se já havia uma casa selecionada e clicou em uma casa diferente:
    if (selectedSquare && selectedSquare !== square) {
      if (!isUsersTurn) {
        if (premoveEnabled) {
          setQueuedPremove({
            from: selectedSquare,
            to: square,
            piece: `${userColor}P`,
          });
          setSelectedSquare(null);
          return;
        }
      } else {
        const moved = executeUserMoveOnBoard(selectedSquare, square);
        if (moved) return;
      }
    }

    // Se clicou em uma peça da sua própria cor, seleciona a casa de origem
    if (pieceOnSquare && pieceOnSquare.color === userColor) {
      setSelectedSquare((prev) => (prev === square ? null : square));
    } else {
      setSelectedSquare(null);
    }
  };

  // Clique com botão direito no tabuleiro cancela qualquer Pre-move agendado (padrão Lichess / Chess.com)
  const handleSquareRightClick = () => {
    if (queuedPremove) {
      setQueuedPremove(null);
    }
    setSelectedSquare(null);
  };

  // Voltar Par de Lances (Disponível no Modo Treino ou Sparring)
  const handleTakeback = () => {
    if (isBotThinking || moveHistory.length < 2) return;
    const updatedHistory = moveHistory.slice(0, -2);
    const targetFen =
      updatedHistory.length > 0
        ? updatedHistory[updatedHistory.length - 1].fenAfter
        : INITIAL_FEN;
    chessRef.current = new Chess(targetFen);
    setFen(targetFen);
    setMoveHistory(updatedHistory);
    setGameStatus(null);
    setHintMove(null);
    setIsGameActive(true);
  };

  // Pedir Dica ao Stockfish (Modo Treino / Sparring)
  const handleRequestHint = async () => {
    if (!isGameActive || isBotThinking || isFetchingHint) return;
    setIsFetchingHint(true);
    try {
      if (!botEngineRef.current) {
        botEngineRef.current = new StockfishEngine();
      }
      await botEngineRef.current.init();
      const res = await botEngineRef.current.evaluateFen(fen, 12);
      if (res.bestMoveUci) {
        const from = res.bestMoveUci.slice(0, 2);
        const to = res.bestMoveUci.slice(2, 4);
        const temp = new Chess(fen);
        const moveObj = temp.move({
          from,
          to,
          promotion: res.bestMoveUci.slice(4, 5) || undefined,
        });
        setHintMove({
          from,
          to,
          san: moveObj ? moveObj.san : res.bestMoveUci,
          evalCp: res.evalWhiteCp,
        });
      }
    } finally {
      setIsFetchingHint(false);
    }
  };

  // Abandonar Partida
  const handleResign = () => {
    if (!isGameActive) return;
    const winner = userColor === 'w' ? '0-1' : '1-0';
    setGameStatus({
      over: true,
      result: winner,
      reason: `Abandono (${userColor === 'w' ? 'Pretas vencem' : 'Brancas vencem'})`,
    });
    setIsGameActive(false);
  };

  // Gera PGN completo da partida contra o computador
  const buildGamePgnAndMetadata = () => {
    const whiteName = userColor === 'w' ? playerName : `Stockfish (${botRating})`;
    const blackName = userColor === 'b' ? playerName : `Stockfish (${botRating})`;
    const whiteRating = userColor === 'w' ? '' : String(botRating);
    const blackRating = userColor === 'b' ? '' : String(botRating);
    const whiteTitle = userColor === 'w' ? '' : botProfile.title;
    const blackTitle = userColor === 'b' ? '' : botProfile.title;
    const result = gameStatus?.result || '*';
    const dateStr = new Date().toISOString().slice(0, 10);
    const timeLabel = useCustomTime
      ? customMinutes > 0
        ? `${customMinutes}+${customIncrement}`
        : 'Livre'
      : selectedTimePreset.category;

    let movesText = '';
    for (let i = 0; i < moveHistory.length; i++) {
      const m = moveHistory[i];
      if (m.color === 'w') {
        movesText += `${m.moveNumber}. ${m.san} `;
      } else {
        movesText += `${m.san} `;
      }
    }
    const fullPgn = `[Event "Partida vs Computador (${botRating})"]\n[Site "SARAGIX"]\n[Date "${dateStr.replace(/-/g, '.')}"]\n[White "${whiteName}"]\n[Black "${blackName}"]\n[Result "${result}"]\n\n${movesText.trim()} ${result}`;

    return {
      title: `${whiteName} vs ${blackName}`,
      white: whiteName,
      whiteTitle,
      whiteRating,
      black: blackName,
      blackTitle,
      blackRating,
      userColor,
      result,
      date: dateStr,
      event: `Desafio vs Stockfish (${botRating})`,
      gameMode: 'Online',
      timeControl:
        timeLabel === 'Bullet' || timeLabel === 'Blitz' || timeLabel === 'Rápida' || timeLabel === 'Clássica'
          ? timeLabel
          : 'Rápida',
      platform: 'SARAGIX vs Computador',
      opening: currentOpening.name,
      eco: currentOpening.eco,
      pgn: fullPgn,
      moves: moveHistory.map((m) => ({
        ...m,
        evalWhiteCp: null,
        mateWhite: null,
        bestMoveUci: null,
        bestMoveSan: null,
        classification: m.isBook
          ? {
              id: 'BOOK',
              label: 'Lance de Livro',
              symbol: 'book',
              color: '#c8a374',
              bgColor: 'rgba(200, 163, 116, 0.22)',
              textColor: 'text-[#d5b48a]',
              cpLoss: 0,
              winLoss: 0,
            }
          : null,
      })),
    };
  };

  // Exporta o PGN da partida contra o computador como arquivo .pgn
  const handleExportBotGamePgn = () => {
    if (moveHistory.length === 0) return;
    const data = buildGamePgnAndMetadata();
    const safeName = `${data.white}-vs-${data.black}-${data.date}`
      .toLowerCase()
      .replace(/[^a-z0-9-_]+/gi, '-')
      .replace(/^-+|-+$/g, '');
    const blob = new Blob([data.pgn], { type: 'application/x-chess-pgn;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${safeName || 'saragix-vs-pc'}.pgn`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const checkStatus = useMemo(() => {
    try {
      const g = chessRef.current;
      if (!g) return { inCheck: false, isCheckmate: false, checkSquare: null, matedColor: null };
      const inCheck = g.inCheck();
      const isCheckmate = g.isCheckmate();
      if (!inCheck && !isCheckmate) return { inCheck: false, isCheckmate: false, checkSquare: null, matedColor: null };
      const turn = g.turn();
      let square = null;
      const b = g.board();
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const piece = b[r][c];
          if (piece && piece.type === 'k' && piece.color === turn) {
            square = piece.square;
            break;
          }
        }
        if (square) break;
      }
      return { inCheck, isCheckmate, checkSquare: square, matedColor: turn };
    } catch {
      return { inCheck: false, isCheckmate: false, checkSquare: null, matedColor: null };
    }
  }, [fen]);

  const checkSquareBadgePos = useMemo(() => {
    if (!checkStatus.checkSquare) return null;
    const sq = checkStatus.checkSquare;
    const file = sq.charCodeAt(0) - 97;
    const rank = parseInt(sq[1], 10) - 1;
    const orientation = userColor === 'b' ? 'black' : 'white';
    const col = orientation === 'white' ? file : 7 - file;
    const row = orientation === 'white' ? 7 - rank : rank;
    return { col, row };
  }, [checkStatus.checkSquare, userColor]);

  const lastMove = moveHistory[moveHistory.length - 1] || null;
  const selectedSquareLegalMoves = useMemo(() => {
    if (!selectedSquare || !isGameActive || gameStatus?.over) return [];
    try {
      const g = chessRef.current;
      if (!g) return [];
      if (g.turn() === userColor) {
        return g.moves({ square: selectedSquare, verbose: true }) || [];
      }
      return [];
    } catch {
      return [];
    }
  }, [selectedSquare, fen, isGameActive, gameStatus, userColor]);

  const boardSquareStyles = useMemo(() => {
    const styles = {};
    if (lastMove) {
      styles[lastMove.from] = { backgroundColor: 'rgba(56, 189, 248, 0.18)' };
      styles[lastMove.to] = { backgroundColor: 'rgba(56, 189, 248, 0.28)' };
    }
    if (selectedSquare) {
      styles[selectedSquare] = {
        ...(styles[selectedSquare] || {}),
        backgroundColor: 'rgba(56, 189, 248, 0.35)',
        boxShadow: 'inset 0 0 0 2px #38bdf8',
      };
    }
    if (queuedPremove) {
      styles[queuedPremove.from] = {
        backgroundColor: 'rgba(239, 68, 68, 0.42)',
        boxShadow: 'inset 0 0 0 2px #ef4444',
      };
      styles[queuedPremove.to] = {
        backgroundColor: 'rgba(239, 68, 68, 0.52)',
        boxShadow: 'inset 0 0 0 2px #ef4444',
      };
    }
    if (hintMove) {
      styles[hintMove.from] = { backgroundColor: 'rgba(56, 189, 248, 0.35)' };
      styles[hintMove.to] = { backgroundColor: 'rgba(56, 189, 248, 0.45)' };
    }
    if ((checkStatus.inCheck || checkStatus.isCheckmate) && checkStatus.checkSquare) {
      styles[checkStatus.checkSquare] = {
        background:
          'radial-gradient(circle at center, rgba(239, 68, 68, 0.95) 0%, rgba(220, 38, 38, 0.75) 35%, rgba(185, 28, 28, 0.35) 65%, rgba(185, 28, 28, 0.05) 80%, transparent 88%)',
        borderRadius: '3px',
      };
    }
    for (const m of selectedSquareLegalMoves) {
      const prevStyle = styles[m.to] || {};
      const isCapture = Boolean(m.captured || (m.flags && m.flags.includes('e')));
      styles[m.to] = {
        ...prevStyle,
        backgroundImage: isCapture
          ? 'radial-gradient(circle, transparent 56%, rgba(255, 255, 255, 0.48) 57%, rgba(15, 23, 42, 0.62) 60%, rgba(15, 23, 42, 0.62) 68%, transparent 70%)'
          : 'radial-gradient(circle, rgba(15, 23, 42, 0.58) 0%, rgba(15, 23, 42, 0.58) 18%, rgba(255, 255, 255, 0.48) 19%, rgba(255, 255, 255, 0.48) 22%, transparent 24%)',
      };
    }
    return styles;
  }, [lastMove, selectedSquare, selectedSquareLegalMoves, queuedPremove, hintMove, checkStatus]);

  const boardArrows = useMemo(() => {
    const arrows = [];
    if (queuedPremove) {
      arrows.push([queuedPremove.from, queuedPremove.to, '#ef4444']);
    }
    if (hintMove) {
      arrows.push([hintMove.from, hintMove.to, 'rgba(56, 189, 248, 0.9)']);
    }
    return arrows;
  }, [queuedPremove, hintMove]);

  const isTopBot = userColor === 'w';

  return (
    <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 space-y-6">
      {/* Cabeçalho Editorial Sóbrio */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-mono block mb-0.5">
            {language === 'en' ? 'Practical Training & Simulation' : 'Treinamento Prático & Simulação'}
          </span>
          <h2 className="text-3xl font-serif-editorial text-white">
            {t('play.title')}
          </h2>
        </div>

        {isGameActive && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-sky-950/50 border border-sky-800/60 text-sky-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Partida em Andamento • {botRating} Elo
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ===================================================================
            COLUNA ESQUERDA: TABULEIRO + RELÓGIOS + BARRA DE JOGADORES (7 cols)
           =================================================================== */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {/* Barra Superior do Adversário (ou Usuário se invertido) */}
          <div className="saragix-card px-4 py-3 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-3.5 h-3.5 rounded-sm border ${
                  isTopBot
                    ? userColor === 'w'
                      ? 'bg-[#18181b] border-zinc-600'
                      : 'bg-[#e4e4e7] border-zinc-400'
                    : userColor === 'w'
                    ? 'bg-[#e4e4e7] border-zinc-400'
                    : 'bg-[#18181b] border-zinc-600'
                }`}
              />
              {botProfile.title && (
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-wider bg-[#291f1a] text-[#fb923c] border border-[#4a3428]">
                  {botProfile.title}
                </span>
              )}
              <span className="font-semibold text-sm text-white">
                Stockfish ({botRating})
              </span>
              <span className="text-xs text-zinc-400 hidden sm:inline">
                • {botProfile.tier}
              </span>
              {isBotThinking && (
                <span className="text-[11px] font-mono text-sky-400 ml-2 animate-pulse">
                  Pensando...
                </span>
              )}
            </div>

            <div
              className={`font-mono text-base font-bold px-3 py-1 rounded-lg border transition ${
                chessRef.current.turn() !== userColor && isGameActive
                  ? 'bg-sky-600 text-white border-sky-400 shadow-sm'
                  : 'bg-[#0e0e11] text-zinc-300 border-[#24242c]'
              }`}
            >
              {hasClock
                ? formatClock(userColor === 'w' ? blackTime : whiteTime)
                : '∞'}
            </div>
          </div>

          {/* Tabuleiro Slate-Blue & Off-White (Estilo Endgame.ai) com suporte a Pre-move */}
          <div className="flex justify-center">
            <div className="w-full max-w-[500px] aspect-square rounded-lg overflow-hidden border border-[#26262f] relative">
              {checkStatus.isCheckmate && checkSquareBadgePos && (
                <div
                  className="absolute pointer-events-none z-20 flex items-center justify-center"
                  style={{
                    width: '12.5%',
                    height: '12.5%',
                    left: `${checkSquareBadgePos.col * 12.5}%`,
                    top: `${checkSquareBadgePos.row * 12.5}%`,
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      top: '-6%',
                      right: '-6%',
                      width: '44%',
                      height: '44%',
                    }}
                    title="Xeque-mate (#)"
                  >
                    <ClassificationBadge
                      id="CHECKMATE"
                      symbol="#"
                      className="w-full h-full text-[clamp(9px,1.8vw,13px)] rounded-full shadow-lg shadow-black/80"
                    />
                  </div>
                </div>
              )}
              <Chessboard
                position={fen}
                boardOrientation={userColor === 'b' ? 'black' : 'white'}
                arePiecesDraggable={
                  isGameActive &&
                  !gameStatus?.over &&
                  (chessRef.current.turn() === userColor || premoveEnabled)
                }
                onPieceDrop={handleUserPieceDrop}
                onSquareClick={handleSquareClick}
                onSquareRightClick={handleSquareRightClick}
                customSquareStyles={boardSquareStyles}
                customArrows={boardArrows}
                customDarkSquareStyle={darkSquareStyle}
                customLightSquareStyle={lightSquareStyle}
                customPieces={customPieces}
              />
            </div>
          </div>

          {/* Barra Inferior do Jogador (Você) */}
          <div className="saragix-card px-4 py-3 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div
                className={`w-3.5 h-3.5 rounded-sm border ${
                  userColor === 'w'
                    ? 'bg-[#e4e4e7] border-zinc-400'
                    : 'bg-[#18181b] border-zinc-600'
                }`}
              />
              <span className="font-semibold text-sm text-white">
                {playerName || 'Usuário'} (Você)
              </span>
              {onEditPlayerName && (
                <button
                  type="button"
                  onClick={onEditPlayerName}
                  className="px-2 py-0.5 rounded-md bg-[#1a1a20] hover:bg-[#24242c] border border-[#2c2c36] text-[11px] text-zinc-300 flex items-center gap-1 transition"
                  title="Editar seu nome"
                >
                  <Edit3 className="w-3 h-3" /> Editar
                </button>
              )}
              <span className="text-xs text-zinc-500 font-mono">
                {selectedMode === 'COMPETITIVE'
                  ? 'Oficial'
                  : selectedMode === 'TRAINING'
                  ? 'Modo Treino'
                  : 'Sparring'}
              </span>
              {queuedPremove && (
                <span className="text-[11px] font-mono bg-red-950/60 border border-red-500/40 text-red-300 px-2 py-0.5 rounded-md flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-red-400" />
                  Pre-move: {queuedPremove.from}
                  <ArrowRight className="w-3 h-3 inline text-red-400" />
                  {queuedPremove.to}
                  <button
                    type="button"
                    onClick={() => setQueuedPremove(null)}
                    className="hover:text-white underline ml-1"
                    title="Cancelar Pre-move (ou clique com botão direito no tabuleiro)"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            <div
              className={`font-mono text-base font-bold px-3 py-1 rounded-lg border transition ${
                chessRef.current.turn() === userColor && isGameActive
                  ? 'bg-sky-600 text-white border-sky-400 shadow-sm'
                  : 'bg-[#0e0e11] text-zinc-300 border-[#24242c]'
              }`}
            >
              {hasClock
                ? formatClock(userColor === 'w' ? whiteTime : blackTime)
                : '∞'}
            </div>
          </div>

          {/* Controles Durante a Partida (Pre-move Toggle, Voltar Lance, Dica, Abandonar, Nova Partida) */}
          <div className="saragix-card p-3 rounded-xl flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setPremoveEnabled((p) => {
                    if (p) setQueuedPremove(null);
                    return !p;
                  });
                }}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition ${
                  premoveEnabled
                    ? 'bg-sky-950/60 border-sky-500 text-sky-200'
                    : 'bg-[#0e0e11] border-[#26262f] text-zinc-400 hover:border-zinc-600'
                }`}
                title="Permite arrastar ou clicar sua peça durante a vez do computador para jogar instantaneamente"
              >
                <Zap className={`w-3.5 h-3.5 ${premoveEnabled ? 'text-sky-400' : 'text-zinc-500'}`} />
                Pre-move: {premoveEnabled ? 'Ativo' : 'Desativado'}
              </button>

              {selectedMode !== 'COMPETITIVE' && (
                <>
                  <button
                    onClick={() => {
                      setQueuedPremove(null);
                      handleTakeback();
                    }}
                    disabled={!isGameActive || moveHistory.length < 2 || isBotThinking}
                    className="px-3 py-1.5 rounded-lg bg-[#0e0e11] hover:bg-[#1a1a20] disabled:opacity-35 border border-[#26262f] text-xs font-medium text-zinc-200 flex items-center gap-1.5 transition"
                  >
                    <Undo2 className="w-3.5 h-3.5" />
                    {t('play.takeback')}
                  </button>
                  <button
                    onClick={handleRequestHint}
                    disabled={!isGameActive || isBotThinking || isFetchingHint}
                    className="px-3 py-1.5 rounded-lg bg-[#0e0e11] hover:bg-[#1a1a20] disabled:opacity-35 border border-[#26262f] text-xs font-medium text-zinc-200 hover:text-white flex items-center gap-1.5 transition"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-sky-400" />
                    {isFetchingHint ? (language === 'en' ? 'Calculating...' : 'Calculando...') : t('play.hint')}
                  </button>
                </>
              )}
              {hintMove && (
                <span className="text-xs font-mono text-sky-300 bg-sky-950/50 border border-sky-800/60 px-2.5 py-1 rounded-md">
                  {t('play.hintLabel')} <strong>{hintMove.san}</strong>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {isGameActive && (
                <button
                  onClick={handleResign}
                  className="px-3 py-1.5 rounded-lg bg-[#1c1315] hover:bg-[#291a1d] border border-red-900/40 text-xs font-medium text-red-300 flex items-center gap-1.5 transition"
                >
                  <Flag className="w-3.5 h-3.5" />
                  {t('play.resign')}
                </button>
              )}
              <button
                onClick={startNewBotGame}
                className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                {isGameActive ? t('play.restart') : t('play.newGame')}
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================================
            COLUNA DIREITA: SELETOR DE RATING (100..3200), RITMOS, MODOS & LANCES (5 cols)
           =================================================================== */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Card de Fim de Jogo (Com botões para Revisar na Central de Análise ou Salvar na Base) */}
          {gameStatus?.over && (
            <div className="saragix-card rounded-xl p-5 border border-zinc-500 bg-[#121217] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {t('play.gameEnded')}
                </span>
                <span className="font-mono font-bold text-sm px-2.5 py-0.5 rounded bg-sky-600 text-white">
                  {gameStatus.result}
                </span>
              </div>
              <div className="text-lg font-serif-editorial text-white">
                {gameStatus.reason}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => {
                    const data = buildGamePgnAndMetadata();
                    onAnalyzeFinishedGame(data);
                  }}
                  className="flex-1 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  <Cpu className="w-4 h-4" />
                  {t('play.analyzeInStockfish')}
                </button>
                <button
                  onClick={handleExportBotGamePgn}
                  className="bg-[#18181e] hover:bg-[#22222a] border border-[#2c2c36] text-zinc-200 text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center gap-1.5 transition"
                >
                  <Download className="w-4 h-4" />
                  {t('play.exportPgn')}
                </button>
                <button
                  onClick={() => {
                    const data = buildGamePgnAndMetadata();
                    onSaveFinishedGameToDb(data);
                    setSavedConfirmed(true);
                  }}
                  disabled={savedConfirmed}
                  className="bg-[#161d2a] hover:bg-[#1e293b] disabled:opacity-50 border border-sky-700/50 text-sky-300 text-xs font-semibold py-2.5 px-3.5 rounded-lg flex items-center gap-1.5 transition"
                >
                  {savedConfirmed ? (
                    <>
                      <Check className="w-4 h-4" /> {t('play.saved')}
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-4 h-4" /> {t('play.saveToDb')}
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Painel de Configuração de Força (100 a 3200), Ritmos e Modos */}
          <div className="saragix-card rounded-xl p-5 space-y-5">
            {/* 1. NÍVEL DE RATING DO COMPUTADOR: 100, 200, 300 ... ATÉ 3200 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  {t('play.computerStrength')}
                </label>
                <div className="flex items-center gap-1.5">
                  {botProfile.title && (
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-wider bg-[#291f1a] text-[#fb923c] border border-[#4a3428]">
                      {botProfile.title}
                    </span>
                  )}
                  <span className="text-lg font-mono font-bold text-sky-400">
                    {botRating}
                  </span>
                </div>
              </div>

              {/* Slider Contínuo de 100 em 100 até 3200 */}
              <input
                type="range"
                min={100}
                max={3200}
                step={100}
                value={botRating}
                onChange={(e) => setBotRating(Number(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer h-1.5 bg-[#0e0e11] rounded-lg"
              />

              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>100</span>
                <span>800</span>
                <span>1500</span>
                <span>2200</span>
                <span>3200</span>
              </div>

              {/* Grade Rápida com TODOS os níveis de 100 a 3200 */}
              <div className="bg-[#0e0e11] border border-[#222229] rounded-lg p-2 max-h-28 overflow-y-auto grid grid-cols-8 gap-1">
                {RATING_STEPS.map((step) => (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setBotRating(step)}
                    className={`py-1 rounded text-[10px] font-mono font-semibold transition ${
                      botRating === step
                        ? 'bg-sky-600 text-white font-bold shadow-sm'
                        : 'text-zinc-400 hover:bg-[#191920] hover:text-white'
                    }`}
                  >
                    {step}
                  </button>
                ))}
              </div>

              <div className="bg-[#0e0e11] border border-[#222229] rounded-lg px-3 py-2 text-xs">
                <div className="font-semibold text-zinc-200">
                  {botProfile.tier} ({botRating} Elo)
                </div>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  {botProfile.desc}
                </p>
              </div>
            </div>

            {/* 2. RITMOS DE JOGO (Estilo Grade Lichess) */}
            <div className="space-y-2.5 border-t border-[#222229] pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400" />
                  {t('play.timeControl')}
                </label>
                <button
                  type="button"
                  onClick={() => setUseCustomTime((c) => !c)}
                  className="text-[11px] text-sky-400 hover:text-sky-300 font-mono underline"
                >
                  {useCustomTime ? t('play.useStandardGrid') : t('play.customizeTime')}
                </button>
              </div>

              {!useCustomTime ? (
                <div className="grid grid-cols-4 gap-1.5">
                  {TIME_PRESETS.map((preset) => {
                    const isSelected = selectedTimePreset.id === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedTimePreset(preset)}
                        className={`py-2 px-1.5 rounded-lg border text-center transition ${
                          isSelected
                            ? 'bg-sky-600 text-white border-sky-500 font-bold shadow-sm'
                            : 'bg-[#0e0e11] text-zinc-300 border-[#222229] hover:border-zinc-500'
                        }`}
                      >
                        <div className="text-xs font-mono font-bold leading-tight">
                          {preset.label}
                        </div>
                        <div
                          className={`text-[10px] ${
                            isSelected ? 'text-sky-100' : 'text-zinc-500'
                          }`}
                        >
                          {preset.category}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 bg-[#0e0e11] p-3 rounded-lg border border-[#222229] text-xs">
                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">
                      {t('play.initialMinutes')}
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={180}
                      value={customMinutes}
                      onChange={(e) => setCustomMinutes(Number(e.target.value))}
                      className="w-full bg-[#15151a] border border-[#282832] rounded-lg px-2.5 py-1.5 text-white font-mono focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">
                      {t('play.incrementSeconds')}
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={60}
                      value={customIncrement}
                      onChange={(e) => setCustomIncrement(Number(e.target.value))}
                      className="w-full bg-[#15151a] border border-[#282832] rounded-lg px-2.5 py-1.5 text-white font-mono focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 3. MODOS DE JOGO (Oficial, Modo Treino/Assistido, Sparring de Abertura) */}
            <div className="space-y-2.5 border-t border-[#222229] pt-4">
              <label className="text-xs font-semibold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-sky-400" />
                {t('play.gameMode')}
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {BOT_MODES.map((m) => {
                  const active = selectedMode === m.id;
                  const label = t(`play.modes.${m.id}.label`) || m.label;
                  const desc = t(`play.modes.${m.id}.desc`) || m.desc;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSelectedMode(m.id)}
                      className={`p-2.5 rounded-lg border text-left transition ${
                        active
                          ? 'bg-sky-950/40 border-sky-500 text-white'
                          : 'bg-[#0e0e11] border-[#222229] text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      <div className="text-xs font-semibold text-white">
                        {label}
                      </div>
                      <div className="text-[11px] text-zinc-400">{desc}</div>
                    </button>
                  );
                })}
              </div>

              {selectedMode === 'OPENING_SPAR' && (
                <div className="pt-1">
                  <label className="text-[10px] text-zinc-400 block mb-1">
                    {t('play.chooseSparringOpening')}
                  </label>
                  <select
                    value={selectedSparringId}
                    onChange={(e) => setSelectedSparringId(e.target.value)}
                    className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-2.5 py-2 text-xs text-white focus:border-sky-500 focus:outline-none"
                  >
                    {SPARRING_POSITIONS.map((pos) => (
                      <option key={pos.id} value={pos.id}>
                        {pos.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* 4. SUA COR + BOTÃO INICIAR */}
            <div className="space-y-3 border-t border-[#222229] pt-4">
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  {
                    id: 'w',
                    label: t('play.whiteColor'),
                    icon: (
                      <span className="w-3.5 h-3.5 rounded-sm bg-zinc-100 border border-zinc-400 shrink-0 inline-block shadow-inner" />
                    ),
                  },
                  {
                    id: 'random',
                    label: t('play.randomColor'),
                    icon: <Dices className="w-3.5 h-3.5 text-sky-400 shrink-0" />,
                  },
                  {
                    id: 'b',
                    label: t('play.blackColor'),
                    icon: (
                      <span className="w-3.5 h-3.5 rounded-sm bg-zinc-900 border border-zinc-700 shrink-0 inline-block shadow-inner" />
                    ),
                  },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setColorChoice(c.id)}
                    className={`py-2 px-2 rounded-lg font-semibold border flex items-center justify-center gap-1.5 transition ${
                      colorChoice === c.id
                        ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                        : 'bg-[#0e0e11] text-zinc-300 border-[#222229] hover:border-zinc-600'
                    }`}
                  >
                    {c.icon}
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={startNewBotGame}
                className="w-full py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                {isGameActive ? t('play.startNewGame') : t('play.playNow')}
              </button>
            </div>
          </div>

          {/* Lista de Lances da Partida Atual (Com indicação de Lance de Livro) */}
          <div className="saragix-card rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white">
                {t('play.movesCount', { count: moveHistory.length })}
              </span>
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] text-zinc-400 truncate max-w-[150px]">
                  {currentOpening.eco ? `${currentOpening.eco} • ` : ''}
                  {currentOpening.name}
                </span>
                {moveHistory.length > 0 && (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        const data = buildGamePgnAndMetadata();
                        onAnalyzeFinishedGame(data);
                      }}
                      className="px-2 py-0.5 rounded bg-sky-600 hover:bg-sky-500 text-[11px] font-semibold text-white flex items-center gap-1 transition shadow-sm"
                      title={t('play.analyzeInStockfish')}
                    >
                      <Cpu className="w-3 h-3" /> {t('nav.analysis')}
                    </button>
                    <button
                      type="button"
                      onClick={handleExportBotGamePgn}
                      className="px-2 py-0.5 rounded bg-[#18181e] hover:bg-[#22222a] border border-[#2c2c36] text-[11px] text-zinc-200 flex items-center gap-1 transition"
                      title={t('play.exportPgnTooltip')}
                    >
                      <Download className="w-3 h-3" /> .PGN
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#0e0e11] border border-[#222229] rounded-lg p-2.5 h-32 overflow-y-auto font-mono text-xs">
              {moveHistory.length === 0 ? (
                <div className="h-full flex items-center justify-center text-zinc-500 text-[11px] font-sans">
                  {t('play.emptyMovesHelp')}
                </div>
              ) : (
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {moveHistory.map((m) => (
                    <span key={m.ply} className="text-zinc-300 inline-flex items-center gap-1">
                      {m.color === 'w' && (
                        <span className="text-zinc-500">{m.moveNumber}.</span>
                      )}
                      <span>{m.san}</span>
                      {m.isBook && (
                        <span
                          className="inline-flex items-center text-[#d5b48a]"
                          title={t('play.bookMoveTooltip')}
                        >
                          <BookOpen className="w-3 h-3" />
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
