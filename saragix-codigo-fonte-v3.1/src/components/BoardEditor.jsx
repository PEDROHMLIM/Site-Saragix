import React, { useState, useEffect, useMemo } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import {
  MousePointer,
  Trash2,
  RotateCcw,
  RefreshCw,
  Cpu,
  Swords,
  Copy,
  Check,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { INITIAL_FEN } from '../utils/moveTree';
import { INLINE_PIECE_SETS } from '../utils/pieceSetsData';
import { useTranslation } from '../i18n';

// Converte FEN para mapa de peças { [square]: 'wP' | 'bK' ... }
export function fenToPieceMap(fen) {
  if (!fen || typeof fen !== 'string') return {};
  const [placement = ''] = fen.trim().split(' ');
  const ranks = placement.split('/');
  const map = {};
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  ranks.forEach((rankStr, rankIdx) => {
    const rank = 8 - rankIdx;
    let fileIdx = 0;
    for (const ch of rankStr) {
      if (/\d/.test(ch)) {
        fileIdx += parseInt(ch, 10);
      } else {
        const color = ch === ch.toUpperCase() ? 'w' : 'b';
        const type = ch.toUpperCase();
        const square = `${files[fileIdx]}${rank}`;
        map[square] = `${color}${type}`;
        fileIdx++;
      }
    }
  });

  return map;
}

// Converte mapa de peças { [square]: 'wP' ... } para string de posicionamento do FEN
export function pieceMapToPlacement(pieceMap) {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = [];

  for (let r = 8; r >= 1; r--) {
    let emptyCount = 0;
    let rankStr = '';
    for (let f = 0; f < 8; f++) {
      const sq = `${files[f]}${r}`;
      const piece = pieceMap[sq];
      if (!piece) {
        emptyCount++;
      } else {
        if (emptyCount > 0) {
          rankStr += emptyCount;
          emptyCount = 0;
        }
        const color = piece[0];
        const type = piece[1];
        rankStr += color === 'w' ? type.toUpperCase() : type.toLowerCase();
      }
    }
    if (emptyCount > 0) rankStr += emptyCount;
    ranks.push(rankStr);
  }

  return ranks.join('/');
}

// Constrói FEN completo
export function buildFenFromEditorState(pieceMap, turn, castling, enPassant) {
  const placement = pieceMapToPlacement(pieceMap);
  const castlingStr =
    `${castling.whiteO_O ? 'K' : ''}${castling.whiteO_O_O ? 'Q' : ''}${castling.blackO_O ? 'k' : ''}${castling.blackO_O_O ? 'q' : ''}` || '-';
  const epStr = enPassant || '-';
  return `${placement} ${turn} ${castlingStr} ${epStr} 0 1`;
}

// Valida se a posição é legal nas regras do xadrez
export function validateBoardPosition(pieceMap, turn = 'w') {
  let whiteKings = 0;
  let blackKings = 0;
  let whitePawnsBackRank = 0;
  let blackPawnsBackRank = 0;

  Object.entries(pieceMap).forEach(([sq, piece]) => {
    if (piece === 'wK') whiteKings++;
    if (piece === 'bK') blackKings++;
    const rank = sq[1];
    if (piece === 'wP' && (rank === '1' || rank === '8')) whitePawnsBackRank++;
    if (piece === 'bP' && (rank === '1' || rank === '8')) blackPawnsBackRank++;
  });

  if (whiteKings === 0) return { valid: false, error: 'Falta o Rei Branco no tabuleiro.' };
  if (whiteKings > 1) return { valid: false, error: 'Existe mais de 1 Rei Branco no tabuleiro.' };
  if (blackKings === 0) return { valid: false, error: 'Falta o Rei Preto no tabuleiro.' };
  if (blackKings > 1) return { valid: false, error: 'Existe mais de 1 Rei Preto no tabuleiro.' };
  if (whitePawnsBackRank > 0) return { valid: false, error: 'Peões brancos não podem estar na 1ª ou 8ª fileira.' };
  if (blackPawnsBackRank > 0) return { valid: false, error: 'Peões pretos não podem estar na 1ª ou 8ª fileira.' };

  try {
    const placement = pieceMapToPlacement(pieceMap);
    const oppTurn = turn === 'w' ? 'b' : 'w';
    const oppChess = new Chess(`${placement} ${oppTurn} - - 0 1`);
    if (oppChess.inCheck()) {
      return {
        valid: false,
        error: `O rei das ${turn === 'w' ? 'pretas' : 'brancas'} está em xeque na vez das ${turn === 'w' ? 'brancas' : 'pretas'} (situação ilegal).`,
      };
    }
  } catch {
    return { valid: false, error: 'Posição com estrutura inválida para as regras do xadrez.' };
  }

  return { valid: true, error: null };
}

// Posições pré-definidas úteis
const POSITION_PRESETS = [
  { id: 'custom', label: 'Defina a posição...' },
  { id: 'initial', label: 'Posição inicial', fen: INITIAL_FEN },
  { id: 'empty', label: 'Tabuleiro vazio', fen: '8/8/8/8/8/8/8/8 w - - 0 1' },
  { id: 'lucena', label: 'Final de Torres (Lucena)', fen: '1K1R4/8/k7/8/8/8/4p3/8 b - - 0 1' },
  { id: 'philidor', label: 'Final de Torres (Philidor)', fen: '7R/8/8/8/4k3/8/4r3/4K3 w - - 0 1' },
  { id: 'pawns_endgame', label: 'Final de Peões (Rei e Peão)', fen: '8/8/8/4k3/8/4K3/4P3/8 w - - 0 1' },
  { id: 'queens_endgame', label: 'Final de Damas', fen: '8/8/8/8/3Q4/4K3/8/3k4 w - - 0 1' },
  { id: 'minor_pieces', label: 'Final de Bispo e Cavalo', fen: '8/8/8/8/8/4K3/3BN3/7k w - - 0 1' },
];

export default function BoardEditor({
  customPieces,
  darkSquareStyle = { backgroundColor: '#788a9e' },
  lightSquareStyle = { backgroundColor: '#dee3e6' },
  onLoadIntoAnalysis,
  onPlayVsBotFromPosition,
}) {
  const { t, language } = useTranslation();

  // Estado das Peças no Tabuleiro
  const [pieces, setPieces] = useState(() => fenToPieceMap(INITIAL_FEN));
  const [boardOrientation, setBoardOrientation] = useState('white');

  // Ferramenta Ativa ('pointer' | 'trash' | 'bK' | 'wQ' etc.)
  const [activeTool, setActiveTool] = useState('pointer');
  const [selectedSquare, setSelectedSquare] = useState(null);

  // Regras da Posição
  const [turn, setTurn] = useState('w');
  const [castling, setCastling] = useState({
    whiteO_O: true,
    whiteO_O_O: true,
    blackO_O: true,
    blackO_O_O: true,
  });
  const [enPassant, setEnPassant] = useState('-');
  const [presetChoice, setPresetChoice] = useState('initial');

  // Feedback do FEN e Cópia
  const [fenInput, setFenInput] = useState(INITIAL_FEN);
  const [fenCopied, setFenCopied] = useState(false);
  const [validationError, setValidationError] = useState('');

  // FEN atual calculado automaticamente a partir do estado do editor
  const currentFen = useMemo(() => {
    return buildFenFromEditorState(pieces, turn, castling, enPassant);
  }, [pieces, turn, castling, enPassant]);

  // Sincroniza o campo de texto FEN com a posição atual
  useEffect(() => {
    setFenInput(currentFen);
    const { valid, error } = validateBoardPosition(pieces, turn);
    setValidationError(valid ? '' : error);
  }, [currentFen, pieces, turn]);

  // Manipulação de cliques no tabuleiro
  const handleSquareClick = (square) => {
    if (activeTool === 'trash') {
      setPieces((prev) => {
        if (!prev[square]) return prev;
        const next = { ...prev };
        delete next[square];
        return next;
      });
      setSelectedSquare(null);
      return;
    }

    if (activeTool === 'pointer') {
      if (selectedSquare) {
        if (selectedSquare === square) {
          setSelectedSquare(null);
        } else {
          // Move a peça selecionada para a nova casa
          setPieces((prev) => {
            const next = { ...prev };
            const piece = next[selectedSquare];
            if (piece) {
              delete next[selectedSquare];
              next[square] = piece;
            }
            return next;
          });
          setSelectedSquare(null);
        }
      } else {
        if (pieces[square]) {
          setSelectedSquare(square);
        }
      }
      return;
    }

    // Se uma peça da paleta estiver selecionada (ex: 'wQ' ou 'bK')
    setPieces((prev) => {
      const next = { ...prev };
      // Se a casa já tiver a mesma peça, remove (estilo Lichess)
      if (next[square] === activeTool) {
        delete next[square];
      } else {
        next[square] = activeTool;
      }
      return next;
    });
    setSelectedSquare(null);
  };

  // Botão direito em qualquer casa sempre apaga a peça
  const handleSquareRightClick = (square) => {
    setPieces((prev) => {
      if (!prev[square]) return prev;
      const next = { ...prev };
      delete next[square];
      return next;
    });
    if (selectedSquare === square) setSelectedSquare(null);
  };

  // Arrastar e soltar peças no tabuleiro
  const handlePieceDrop = (sourceSquare, targetSquare, piece) => {
    if (!targetSquare || targetSquare === 'off-board') {
      // Arrastou para fora do tabuleiro: remove a peça
      setPieces((prev) => {
        const next = { ...prev };
        delete next[sourceSquare];
        return next;
      });
      return false;
    }

    setPieces((prev) => {
      const next = { ...prev };
      delete next[sourceSquare];
      next[targetSquare] = piece;
      return next;
    });
    setSelectedSquare(null);
    return true;
  };

  // Ações de Limpeza e Presets
  const handleResetToInitial = () => {
    setPieces(fenToPieceMap(INITIAL_FEN));
    setTurn('w');
    setCastling({ whiteO_O: true, whiteO_O_O: true, blackO_O: true, blackO_O_O: true });
    setEnPassant('-');
    setPresetChoice('initial');
    setSelectedSquare(null);
  };

  const handleClearBoard = () => {
    setPieces({});
    setTurn('w');
    setCastling({ whiteO_O: false, whiteO_O_O: false, blackO_O: false, blackO_O_O: false });
    setEnPassant('-');
    setPresetChoice('empty');
    setSelectedSquare(null);
  };

  const handleSelectPreset = (e) => {
    const val = e.target.value;
    setPresetChoice(val);
    const found = POSITION_PRESETS.find((p) => p.id === val);
    if (found && found.fen) {
      applyFenToState(found.fen);
    }
  };

  // Aplica uma FEN externa ao estado do editor
  const applyFenToState = (fenStr) => {
    try {
      const trimmed = fenStr.trim();
      const parts = trimmed.split(/\s+/);
      if (parts.length >= 1) {
        setPieces(fenToPieceMap(parts[0]));
      }
      if (parts.length >= 2) {
        setTurn(parts[1] === 'b' ? 'b' : 'w');
      }
      if (parts.length >= 3) {
        const c = parts[2];
        setCastling({
          whiteO_O: c.includes('K'),
          whiteO_O_O: c.includes('Q'),
          blackO_O: c.includes('k'),
          blackO_O_O: c.includes('q'),
        });
      }
      if (parts.length >= 4) {
        setEnPassant(parts[3] !== '-' ? parts[3] : '-');
      }
      setSelectedSquare(null);
    } catch (err) {
      console.error('Erro ao processar FEN no editor:', err);
    }
  };

  // Copiar FEN
  const handleCopyFen = async () => {
    try {
      await navigator.clipboard.writeText(currentFen);
      setFenCopied(true);
      setTimeout(() => setFenCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  // Enviar para Análise com Stockfish
  const handleGoToAnalysis = () => {
    const { valid, error } = validateBoardPosition(pieces, turn);
    if (!valid) {
      alert(`Não é possível analisar esta posição:\n${error}`);
      return;
    }

    if (onLoadIntoAnalysis) {
      onLoadIntoAnalysis(currentFen, boardOrientation);
    }
  };

  // Jogar contra o computador a partir desta posição
  const handlePlayFromPosition = () => {
    const { valid, error } = validateBoardPosition(pieces, turn);
    if (!valid) {
      alert(`Não é possível jogar a partir desta posição:\n${error}`);
      return;
    }

    if (onPlayVsBotFromPosition) {
      onPlayVsBotFromPosition(currentFen, boardOrientation);
    } else if (onLoadIntoAnalysis) {
      // Fallback: abre na análise onde pode jogar contra a engine
      onLoadIntoAnalysis(currentFen, boardOrientation);
    }
  };

  // Renderizador das peças SVG da paleta (usando os SVGs oficiais do Lichess - cburnett)
  // Aplica contorno sutil nas peças pretas para contraste perfeito mesmo em temas escuros
  const renderPalettePiece = (pieceCode) => {
    const svgCode = INLINE_PIECE_SETS['cburnett']?.[pieceCode];
    if (!svgCode) return null;
    const isBlack = pieceCode.startsWith('b');
    return (
      <div
        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center pointer-events-none transition-transform"
        style={{
          filter: isBlack
            ? 'drop-shadow(0 0 1.2px rgba(255, 255, 255, 0.65)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
            : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35))',
        }}
        dangerouslySetInnerHTML={{ __html: svgCode }}
      />
    );
  };

  // Estilos de casas customizadas (destaque de casa selecionada)
  const squareStyles = useMemo(() => {
    const styles = {};
    if (selectedSquare) {
      styles[selectedSquare] = {
        backgroundColor: 'rgba(56, 189, 248, 0.45)',
        boxShadow: 'inset 0 0 0 2px #38bdf8',
      };
    }
    return styles;
  }, [selectedSquare]);

  const blackPieces = ['bK', 'bQ', 'bR', 'bB', 'bN', 'bP'];
  const whitePieces = ['wK', 'wQ', 'wR', 'wB', 'wN', 'wP'];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-5 animate-in fade-in duration-200">
      {/* BARRA SUPERIOR PADRÃO BROADCAST */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-[#121216] border border-[#22222a] rounded-xl">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {t('editor.title')}
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            {t('editor.subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={handleResetToInitial}
            className="px-2.5 py-1.5 rounded-lg bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition"
          >
            <RotateCcw className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">{t('editor.startPos')}</span>
          </button>

          <button
            type="button"
            onClick={handleClearBoard}
            className="px-2.5 py-1.5 rounded-lg bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition"
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">{t('editor.clearBoard')}</span>
          </button>

          <button
            type="button"
            onClick={handleGoToAnalysis}
            className="px-3 py-1.5 rounded-lg bg-[#ececef] hover:bg-white text-black text-xs font-semibold flex items-center gap-1.5 transition shadow"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{t('editor.sendToAnalysis')}</span>
          </button>
        </div>
      </div>

      {/* GRID PRINCIPAL PADRÃO BROADCAST: TABULEIRO (7 COLS) + PAINEL LATERAL (5 COLS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* COLUNA ESQUERDA: BARRAS DE PEÇAS + TABULEIRO + BARRA DE CONTROLES (7 Colunas) */}
        <div className="lg:col-span-7 flex flex-col items-center gap-2 w-full">
          {/* BARRA SUPERIOR DE PEÇAS PRETAS (ESTILO PLAYER BROADCAST BAR h-14) */}
          <div className="w-full max-w-[560px] h-14 bg-[#1f2026] rounded-xl border border-[#2d2e38] overflow-hidden flex items-stretch justify-between select-none">
            <div className="w-14 h-14 shrink-0 bg-[#16161c] relative flex items-center justify-center border-r border-[#2b2c36]">
              {renderPalettePiece('bK')}
              <span
                className="absolute bottom-1 right-1 w-3 h-3 rounded-full border border-white/40 shadow-sm bg-zinc-950"
                title={t('broadcasts.blackPieces')}
              />
            </div>

            <div className="flex-1 flex items-center justify-between gap-1 px-2 sm:px-3">
              {/* Botão Mãozinha / Ponteiro */}
              <button
                type="button"
                onClick={() => {
                  setActiveTool('pointer');
                  setSelectedSquare(null);
                }}
                className={`p-1.5 sm:p-2 rounded-lg transition flex items-center justify-center ${
                  activeTool === 'pointer'
                    ? 'bg-sky-600 text-white shadow-md ring-2 ring-sky-400'
                    : 'bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-300 hover:text-white'
                }`}
                title={t('editor.toolPointer')}
              >
                <MousePointer className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Peças Pretas: Rei, Dama, Torre, Bispo, Cavalo, Peão */}
              {blackPieces.map((p) => {
                const isSelected = activeTool === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setActiveTool(p);
                      setSelectedSquare(null);
                    }}
                    className={`p-1 rounded-lg transition flex items-center justify-center ${
                      isSelected
                        ? 'bg-sky-600 ring-2 ring-sky-400 shadow-lg scale-105 border-transparent'
                        : 'bg-[#181820] hover:bg-[#252532] border border-[#2b2b36]'
                    }`}
                    title={t('editor.insertPiece', { piece: p })}
                  >
                    {renderPalettePiece(p)}
                  </button>
                );
              })}

              {/* Botão Lixeira (Remover peça) */}
              <button
                type="button"
                onClick={() => {
                  setActiveTool('trash');
                  setSelectedSquare(null);
                }}
                className={`p-1.5 sm:p-2 rounded-lg transition flex items-center justify-center ${
                  activeTool === 'trash'
                    ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-400'
                    : 'bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-300 hover:text-rose-400'
                }`}
                title={t('editor.toolTrash')}
              >
                <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* TABULEIRO CENTRAL GRANDE PADRÃO BROADCAST */}
          <div className="w-full max-w-[560px] aspect-square rounded-2xl overflow-hidden border-2 border-[#262633] shadow-2xl bg-[#0a0a0d] p-1">
            <Chessboard
              position={pieces}
              boardOrientation={boardOrientation}
              onSquareClick={handleSquareClick}
              onSquareRightClick={handleSquareRightClick}
              onPieceDrop={handlePieceDrop}
              customPieces={customPieces}
              customSquareStyles={squareStyles}
              customDarkSquareStyle={darkSquareStyle}
              customLightSquareStyle={lightSquareStyle}
              arePiecesDraggable={true}
            />
          </div>

          {/* BARRA INFERIOR DE PEÇAS BRANCAS (ESTILO PLAYER BROADCAST BAR h-14) */}
          <div className="w-full max-w-[560px] h-14 bg-[#1f2026] rounded-xl border border-[#2d2e38] overflow-hidden flex items-stretch justify-between select-none">
            <div className="w-14 h-14 shrink-0 bg-[#16161c] relative flex items-center justify-center border-r border-[#2b2c36]">
              {renderPalettePiece('wK')}
              <span
                className="absolute bottom-1 right-1 w-3 h-3 rounded-full border border-black/60 shadow-sm bg-white"
                title={t('broadcasts.whitePieces')}
              />
            </div>

            <div className="flex-1 flex items-center justify-between gap-1 px-2 sm:px-3">
              {/* Botão Mãozinha / Ponteiro */}
              <button
                type="button"
                onClick={() => {
                  setActiveTool('pointer');
                  setSelectedSquare(null);
                }}
                className={`p-1.5 sm:p-2 rounded-lg transition flex items-center justify-center ${
                  activeTool === 'pointer'
                    ? 'bg-sky-600 text-white shadow-md ring-2 ring-sky-400'
                    : 'bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-300 hover:text-white'
                }`}
                title={t('editor.toolPointer')}
              >
                <MousePointer className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Peças Brancas: Rei, Dama, Torre, Bispo, Cavalo, Peão */}
              {whitePieces.map((p) => {
                const isSelected = activeTool === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setActiveTool(p);
                      setSelectedSquare(null);
                    }}
                    className={`p-1 rounded-lg transition flex items-center justify-center ${
                      isSelected
                        ? 'bg-sky-600 ring-2 ring-sky-400 shadow-lg scale-105 border-transparent'
                        : 'bg-[#181820] hover:bg-[#252532] border border-[#2b2b36]'
                    }`}
                    title={t('editor.insertPiece', { piece: p })}
                  >
                    {renderPalettePiece(p)}
                  </button>
                );
              })}

              {/* Botão Lixeira (Remover peça) */}
              <button
                type="button"
                onClick={() => {
                  setActiveTool('trash');
                  setSelectedSquare(null);
                }}
                className={`p-1.5 sm:p-2 rounded-lg transition flex items-center justify-center ${
                  activeTool === 'trash'
                    ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-400'
                    : 'bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-300 hover:text-rose-400'
                }`}
                title={t('editor.toolTrash')}
              >
                <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* BARRA DE CONTROLES E FEN PADRÃO BROADCAST */}
          <div className="w-full max-w-[560px] bg-[#121217] rounded-xl border border-[#22222e] px-3 py-2 flex flex-wrap items-center justify-between gap-2 shadow-sm">
            <button
              type="button"
              onClick={() => setBoardOrientation((o) => (o === 'white' ? 'black' : 'white'))}
              className="px-2.5 py-1.5 rounded-lg bg-[#181820] hover:bg-[#252532] border border-[#282836] text-zinc-300 hover:text-white text-xs flex items-center gap-1.5 transition select-none shrink-0"
              title={t('broadcasts.flipBoardTitle')}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t('broadcasts.flipBoard')}</span>
            </button>

            <div className="flex-1 min-w-[180px] flex items-center gap-2 bg-[#0d0d12] border border-[#232330] rounded-lg px-2.5 py-1.5">
              <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-wider shrink-0">
                FEN
              </span>
              <input
                type="text"
                value={fenInput}
                onChange={(e) => {
                  setFenInput(e.target.value);
                  applyFenToState(e.target.value);
                }}
                className="flex-1 bg-transparent text-xs text-zinc-200 font-mono outline-none truncate"
                placeholder={t('editor.fenPlaceholder')}
              />
              <button
                type="button"
                onClick={handleCopyFen}
                className="p-0.5 rounded text-zinc-400 hover:text-white transition shrink-0"
                title={t('editor.copyFen')}
              >
                {fenCopied ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: PAINEL DE CONFIGURAÇÕES PADRÃO BROADCAST (5 Colunas) */}
        <div className="lg:col-span-5 bg-[#141418] border border-[#24242c] rounded-xl overflow-hidden flex flex-col">
          {/* Cabeçalho do Painel Lateral */}
          <div className="p-3.5 border-b border-[#1c1c22] bg-[#111114] flex items-center justify-between gap-2">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              {t('broadcasts.parameters')}
            </h3>

            {!validationError ? (
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full font-medium select-none">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>{turn === 'w' ? t('editor.whiteToMove') : t('editor.blackToMove')}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-[11px] text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded-full font-medium select-none">
                <AlertCircle className="w-3 h-3 text-amber-400" />
                <span>{t('editor.attentionPosition')}</span>
              </div>
            )}
          </div>

          <div className="p-4 space-y-4 flex-1">
            {/* 1. QUEM JOGA */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 block mb-1.5">
                {t('editor.turnToMove')}
              </label>
              <select
                value={turn}
                onChange={(e) => setTurn(e.target.value)}
                className="w-full bg-[#111116] border border-[#262635] rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 font-medium focus:outline-none focus:border-sky-500"
              >
                <option value="w">{t('editor.whiteToMove')}</option>
                <option value="b">{t('editor.blackToMove')}</option>
              </select>
            </div>

            {/* 2. DIREITOS DE ROQUE */}
            <div className="space-y-2 border-t border-[#1c1c22] pt-3.5">
              <span className="text-xs font-semibold text-zinc-400 block">
                {t('editor.castlingTitle')}
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-2 text-zinc-300 hover:text-white cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={castling.whiteO_O}
                    onChange={(e) => setCastling((c) => ({ ...c, whiteO_O: e.target.checked }))}
                    className="rounded accent-sky-500 w-4 h-4"
                  />
                  <span>{t('editor.whiteOO')}</span>
                </label>

                <label className="flex items-center gap-2 text-zinc-300 hover:text-white cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={castling.whiteO_O_O}
                    onChange={(e) => setCastling((c) => ({ ...c, whiteO_O_O: e.target.checked }))}
                    className="rounded accent-sky-500 w-4 h-4"
                  />
                  <span>O-O-O</span>
                </label>

                <label className="flex items-center gap-2 text-zinc-300 hover:text-white cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={castling.blackO_O}
                    onChange={(e) => setCastling((c) => ({ ...c, blackO_O: e.target.checked }))}
                    className="rounded accent-sky-500 w-4 h-4"
                  />
                  <span>{t('editor.blackOO')}</span>
                </label>

                <label className="flex items-center gap-2 text-zinc-300 hover:text-white cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={castling.blackO_O_O}
                    onChange={(e) => setCastling((c) => ({ ...c, blackO_O_O: e.target.checked }))}
                    className="rounded accent-sky-500 w-4 h-4"
                  />
                  <span>O-O-O</span>
                </label>
              </div>
            </div>

            {/* 3. EN PASSANT */}
            <div className="border-t border-[#1c1c22] pt-3.5">
              <label className="text-xs font-semibold text-zinc-400 block mb-1.5">
                {t('editor.enPassant')}
              </label>
              <select
                value={enPassant}
                onChange={(e) => setEnPassant(e.target.value)}
                className="w-full bg-[#111116] border border-[#262635] rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 font-mono focus:outline-none focus:border-sky-500"
              >
                <option value="-">{t('editor.none')}</option>
                {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((file) => {
                  const sq = turn === 'b' ? `${file}3` : `${file}6`;
                  return (
                    <option key={sq} value={sq}>
                      {sq}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* 4. DEFINA A POSIÇÃO (PRESETS) */}
            <div className="border-t border-[#1c1c22] pt-3.5">
              <label className="text-xs font-semibold text-zinc-400 block mb-1.5">
                {t('editor.setPreset')}
              </label>
              <select
                value={presetChoice}
                onChange={handleSelectPreset}
                className="w-full bg-[#111116] border border-[#262635] rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-sky-500"
              >
                {POSITION_PRESETS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.id === 'custom'
                      ? t('editor.setPreset') + '...'
                      : p.id === 'initial'
                      ? t('editor.presetInitial')
                      : p.id === 'empty'
                      ? t('editor.presetEmpty')
                      : p.id === 'lucena'
                      ? t('editor.presetLucena')
                      : p.id === 'philidor'
                      ? t('editor.presetPhilidor')
                      : p.id === 'pawns_endgame'
                      ? t('editor.presetKPK')
                      : p.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 5. AÇÕES RÁPIDAS */}
            <div className="grid grid-cols-2 gap-2 border-t border-[#1c1c22] pt-3.5">
              <button
                type="button"
                onClick={handleResetToInitial}
                className="py-2 px-3 rounded-lg bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
              >
                <RotateCcw className="w-3.5 h-3.5 text-zinc-400" />
                <span className="truncate">{t('editor.startPos')}</span>
              </button>

              <button
                type="button"
                onClick={handleClearBoard}
                className="py-2 px-3 rounded-lg bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
              >
                <Trash2 className="w-3.5 h-3.5 text-zinc-400" />
                <span className="truncate">{t('editor.clearBoard')}</span>
              </button>
            </div>

            {/* FEEDBACK DE VALIDAÇÃO DA POSIÇÃO */}
            {validationError ? (
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/40 text-amber-300 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-200">{t('editor.attentionPosition')}</p>
                  <p className="text-[11px] text-amber-300/90 mt-0.5">{validationError}</p>
                </div>
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-800/40 text-sky-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t('editor.positionValid')}</span>
              </div>
            )}
          </div>

          {/* Rodapé com Ações Principais (Idêntico ao Rodapé do Broadcasts) */}
          <div className="p-3 bg-[#111114] border-t border-[#1c1c22] space-y-2">
            <button
              type="button"
              onClick={handleGoToAnalysis}
              className="w-full py-2.5 px-3 rounded-lg bg-[#ececef] hover:bg-white text-black text-xs font-semibold flex items-center justify-center gap-2 transition shadow-md"
            >
              <Cpu className="w-4 h-4" />
              {t('broadcasts.openInAnalysis')}
            </button>

            <button
              type="button"
              onClick={handlePlayFromPosition}
              className="w-full py-2 px-3 rounded-lg bg-[#181820] hover:bg-[#252532] border border-[#2b2b36] text-zinc-200 text-xs font-medium flex items-center justify-center gap-2 transition"
            >
              <Swords className="w-3.5 h-3.5 text-sky-400" />
              {t('editor.continueFromHere')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
