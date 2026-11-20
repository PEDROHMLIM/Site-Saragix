import { Chess } from 'chess.js';

/**
 * Formata o score de avaliação com duas casas decimais ou mate
 * Ex: +0.32, -0.18, +M2, -M4
 */
export function formatMultiPvScore(evalWhiteCp, mateWhite) {
  if (mateWhite !== null && mateWhite !== undefined) {
    if (mateWhite === 0) {
      return (evalWhiteCp !== null && evalWhiteCp !== undefined && evalWhiteCp > 0) ? '1-0' : '0-1';
    }
    return mateWhite > 0 ? `+M${Math.abs(mateWhite)}` : `-M${Math.abs(mateWhite)}`;
  }
  if (evalWhiteCp === null || evalWhiteCp === undefined) return '0.00';
  const val = (evalWhiteCp / 100).toFixed(2);
  return evalWhiteCp > 0 ? `+${val}` : val;
}

/**
 * Formata a linha de lances (PV) com numeração e notação padrão SAN, terminando com ...
 * Ex: 1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. ...
 */
export function formatPvLineWithGlyphs(fen, uciMoves = [], maxMoves = 7) {
  if (!fen || !uciMoves || !uciMoves.length) return '';
  try {
    const chess = new Chess(fen);
    let moveNumber = parseInt(fen.split(' ')[5], 10) || 1;
    let turn = chess.turn(); // 'w' | 'b'
    const parts = [];

    for (let i = 0; i < Math.min(uciMoves.length, maxMoves); i++) {
      const uci = uciMoves[i];
      const from = uci.slice(0, 2);
      const to = uci.slice(2, 4);
      const promotion = uci.slice(4, 5) || undefined;
      const moveRes = chess.move({ from, to, promotion });
      if (!moveRes) break;

      const formattedSan = moveRes.san;

      if (turn === 'w') {
        parts.push(`${moveNumber}. ${formattedSan}`);
        turn = 'b';
      } else {
        if (i === 0) {
          parts.push(`${moveNumber}... ${formattedSan}`);
        } else {
          parts.push(formattedSan);
        }
        turn = 'w';
        moveNumber++;
      }
    }

    if (uciMoves.length > parts.length || uciMoves.length >= maxMoves) {
      if (parts.length > 0) {
        if (turn === 'w') {
          parts.push(`${moveNumber}. ...`);
        } else {
          parts.push('...');
        }
      }
    }

    return parts.join(' ');
  } catch {
    return uciMoves.slice(0, maxMoves).join(' ') + ' ...';
  }
}
