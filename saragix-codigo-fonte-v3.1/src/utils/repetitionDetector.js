// Detector de Repeticao de Posicao (2-fold e 3-fold) e Regra dos 50 Lances
// Baseado nas Regras Oficiais da FIDE (Artigos 9.2 e 9.3)

/**
 * Normaliza o FEN para deteccao exata de repeticao segundo as regras da FIDE:
 * - Mesmas pecas nas mesmas casas;
 * - Mesmo jogador a jogar;
 * - Mesmos direitos de roque (K, Q, k, q);
 * - Mesmas possibilidades de captura en passant.
 */
export function getPositionSignature(fen) {
  if (!fen) return '';
  const parts = fen.trim().split(/\s+/);
  const board = parts[0] || '';
  const turn = parts[1] || 'w';
  const castling = parts[2] || '-';
  const enPassant = parts[3] || '-';
  return `${board} ${turn} ${castling} ${enPassant}`;
}

/**
 * Extrai o contador de meio-lances (relogio de 50 lances) do FEN.
 */
export function getHalfMoveClock(fen) {
  if (!fen) return 0;
  const parts = fen.trim().split(/\s+/);
  return parseInt(parts[4], 10) || 0;
}

/**
 * Analisa o caminho da arvore de lances ate o no atual para identificar repeticoes
 * e contagem da regra dos 50 lances.
 */
export function detectRepetitionAnd50Move(nodesPath, currentFen) {
  if (!currentFen) {
    return {
      repetitionCount: 1,
      isTwoFold: false,
      isThreeFold: false,
      halfMoves: 0,
      movesWithoutPawnOrCapture: 0,
      isFiftyMoveDraw: false,
      fiftyMoveWarning: false,
    };
  }

  const currentSignature = getPositionSignature(currentFen);
  let count = 0;

  if (Array.isArray(nodesPath) && nodesPath.length > 0) {
    for (const node of nodesPath) {
      if (node && node.fenAfter) {
        if (getPositionSignature(node.fenAfter) === currentSignature) {
          count++;
        }
      }
    }
  }

  // Se nao achou no historico (por exemplo se currentFen acabou de ser jogado), pelo menos conta 1
  if (count === 0) count = 1;

  const halfMoves = getHalfMoveClock(currentFen);
  const movesWithoutPawnOrCapture = Math.floor(halfMoves / 2);

  return {
    repetitionCount: count,
    isTwoFold: count === 2,
    isThreeFold: count >= 3,
    halfMoves,
    movesWithoutPawnOrCapture,
    isFiftyMoveDraw: halfMoves >= 100,
    fiftyMoveWarning: halfMoves >= 70 && halfMoves < 100,
  };
}
