import { Chess } from 'chess.js';

// ============================================================================
// CLASSIFICAÇÃO OFICIAL DO CHESS.COM (GAME REVIEW / CLASSIFICATION V2)
// Baseado no documento oficial: https://support.chess.com/en/articles/8584089-how-does-game-review-work
// ============================================================================

export const MOVE_CLASSIFICATIONS = {
  BOOK: {
    id: 'BOOK',
    label: 'Lance de Livro',
    symbol: 'Bk',
    color: '#a88865',
    bgColor: 'rgba(168, 136, 101, 0.22)',
    textColor: 'text-[#d5b48a]',
    badgeBg: '#a88865',
    desc: 'Um lance teórico padrão da teoria de aberturas.',
  },
  NOVELTY: {
    id: 'NOVELTY',
    label: 'Novidade Teórica',
    symbol: 'N',
    color: '#9333ea',
    bgColor: 'rgba(147, 51, 234, 0.22)',
    textColor: 'text-[#c084fc]',
    badgeBg: '#9333ea',
    desc: 'Um lance inédito não documentado anteriormente na base de Grandes Mestres.',
  },
  BRILLIANT: {
    id: 'BRILLIANT',
    label: 'Brilhante',
    symbol: '!!',
    color: '#26c2a3', // Ciano oficial do Chess.com
    bgColor: 'rgba(38, 194, 163, 0.22)',
    textColor: 'text-[#26c2a3]',
    badgeBg: '#26c2a3',
    desc: 'Um sacrifício de peça intuitivo e poderoso que mantém ou amplia a vantagem.',
  },
  GREAT: {
    id: 'GREAT',
    label: 'Grande Lance',
    symbol: '!',
    color: '#749bbf', // Azul acinzentado oficial do Chess.com
    bgColor: 'rgba(116, 155, 191, 0.22)',
    textColor: 'text-[#749bbf]',
    badgeBg: '#749bbf',
    desc: 'O único lance bom da posição crítica ou que altera drasticamente o rumo do jogo.',
  },
  BEST: {
    id: 'BEST',
    label: 'Melhor Lance',
    symbol: '★',
    color: '#81b64c', // Verde musgo clássico do Chess.com
    bgColor: 'rgba(129, 182, 76, 0.22)',
    textColor: 'text-[#81b64c]',
    badgeBg: '#81b64c',
    desc: 'A melhor escolha recomendada pelo motor Stockfish.',
  },
  EXCELLENT: {
    id: 'EXCELLENT',
    label: 'Excelente',
    symbol: '✓',
    color: '#81b64c',
    bgColor: 'rgba(129, 182, 76, 0.16)',
    textColor: 'text-[#81b64c]',
    badgeBg: '#81b64c',
    desc: 'Quase tão forte quanto o melhor lance.',
  },
  GOOD: {
    id: 'GOOD',
    label: 'Bom',
    symbol: '✓',
    color: '#95af8a',
    bgColor: 'rgba(149, 175, 138, 0.16)',
    textColor: 'text-[#95af8a]',
    badgeBg: '#95af8a',
    desc: 'Um lance decente e jogável, embora não seja o ideal.',
  },
  INACCURACY: {
    id: 'INACCURACY',
    label: 'Imprecisão',
    symbol: '?!',
    color: '#f0c15c', // Amarelo suave do Chess.com
    bgColor: 'rgba(240, 193, 92, 0.22)',
    textColor: 'text-[#f0c15c]',
    badgeBg: '#f0c15c',
    desc: 'Um lance ligeiramente fraco que piora suavemente a posição.',
  },
  MISTAKE: {
    id: 'MISTAKE',
    label: 'Erro',
    symbol: '?',
    color: '#ffa459', // Laranja do Chess.com
    bgColor: 'rgba(255, 164, 89, 0.22)',
    textColor: 'text-[#ffa459]',
    badgeBg: '#ffa459',
    desc: 'Um lance ruim que piora visivelmente a sua posição.',
  },
  MISS: {
    id: 'MISS',
    label: 'Vitória Perdida',
    symbol: '✕',
    color: '#ff7769', // Salmão / Coral oficial do Miss do Chess.com
    bgColor: 'rgba(255, 119, 105, 0.25)',
    textColor: 'text-[#ff7769]',
    badgeBg: '#ff7769',
    desc: 'Deixou escapar uma oportunidade tática ou não puniu o erro do adversário.',
  },
  BLUNDER: {
    id: 'BLUNDER',
    label: 'Capivara',
    symbol: '??',
    color: '#fa412d', // Vermelho vivo de Blunder do Chess.com
    bgColor: 'rgba(250, 65, 45, 0.25)',
    textColor: 'text-[#fa412d]',
    badgeBg: '#fa412d',
    desc: 'Uma falha grave que entrega material valioso ou a partida.',
  },
};

export const PIECE_VALUES = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 1000 };

/**
 * Avaliação Estática de Trocas (Static Exchange Evaluation - SEE)
 * Simula a sequência ideal de capturas e recapturas numa casa específica para determinar
 * o ganho material líquido que o lado a jogar consegue obter.
 * Valores de referência oficiais: Peão=1, Cavalo=3, Bispo=3, Torre=5, Dama=9.
 */
export function staticExchangeEvaluation(chess, targetSq) {
  const target = chess.get(targetSq);
  if (!target) return 0;

  const caps = chess.moves({ verbose: true }).filter((m) => m.to === targetSq);
  if (caps.length === 0) return 0;

  // LVA (Least Valuable Attacker) - ordena atacantes do menor para o maior valor
  caps.sort((a, b) => (PIECE_VALUES[a.piece] || 0) - (PIECE_VALUES[b.piece] || 0));

  let bestGain = -9999;
  for (const move of caps) {
    const sim = new Chess(chess.fen());
    const valTarget = PIECE_VALUES[target.type] || 0;
    sim.move(move);

    const defCaps = sim.moves({ verbose: true }).filter((m) => m.to === targetSq);
    let netGain = valTarget;

    if (defCaps.length > 0) {
      defCaps.sort((a, b) => (PIECE_VALUES[a.piece] || 0) - (PIECE_VALUES[b.piece] || 0));
      const valAttacker = PIECE_VALUES[move.piece] || 0;
      const sim2 = new Chess(sim.fen());
      sim2.move(defCaps[0]);
      const furtherGain = staticExchangeEvaluation(sim2, targetSq);
      netGain = valTarget - valAttacker + Math.max(0, furtherGain);
    }

    if (netGain > bestGain) {
      bestGain = netGain;
    }
  }

  return Math.max(0, bestGain);
}

/**
 * Detecta se o lance executado foi um sacrifício genuíno de peça material.
 * Regras estritas alinhadas ao Chess.com:
 * 1. O sacrifício é exclusivo para PEÇAS (Cavalo, Bispo, Torre, Dama - valores 3, 5, 9). Peões NÃO contam.
 * 2. Trocas justas (Torre por Torre: 5=5; Dama por Dama: 9=9; Bispo por Bispo: 3=3) NUNCA são sacrifícios (Net Loss = 0).
 * 3. Movimentos normais e de desenvolvimento (Be2, Nf3, O-O, etc.) NUNCA são sacrifícios.
 * 4. Para ser sacrifício, o adversário deve poder capturar e obter ganho líquido >= 2 pontos de material
 *    (sacrifício de qualidade: Torre por peça menor = 2 pontos, ou entrega de peça menor/maior).
 */
export function isPieceSacrifice(fenBefore, uci) {
  if (!fenBefore || !uci || uci.length < 4) return false;
  try {
    const cBefore = new Chess(fenBefore);
    const from = uci.slice(0, 2);
    const to = uci.slice(2, 4);
    const promotion = uci.slice(4, 5) || undefined;
    const movedPiece = cBefore.get(from);
    if (!movedPiece) return false;

    // Peões NÃO geram lance brilhante por sacrifício de peça (apenas Cavalo, Bispo, Torre e Dama)
    if (movedPiece.type === 'p') return false;

    const valMoved = PIECE_VALUES[movedPiece.type] || 0;

    const cAfter = new Chess(fenBefore);
    const moveObj = cAfter.move({ from, to, promotion });
    if (!moveObj) return false;

    const valCapturedByPlayer = moveObj.captured ? (PIECE_VALUES[moveObj.captured] || 0) : 0;

    // 1) Sacrifício da própria peça movida na casa de destino (to)
    if (valMoved >= 3) {
      const oppGainOnSquare = staticExchangeEvaluation(cAfter, to);
      const netMaterialLost = oppGainOnSquare - valCapturedByPlayer;
      // Perda líquida material de pelo menos 2 pontos (ex: sacrifício de qualidade ou peça inteira)
      if (netMaterialLost >= 2) {
        return true;
      }
    }

    // 2) Sacrifício por exposição deliberada de outra peça menor/maior (N, B, R, Q)
    const oppCapsAfter = cAfter.moves({ verbose: true }).filter((m) => m.captured && m.to !== to);
    for (const oppCap of oppCapsAfter) {
      const sq = oppCap.to;
      const target = cAfter.get(sq);
      if (!target || target.color !== movedPiece.color) continue;
      if (target.type === 'p') continue; // Peões não contam

      const oppGain = staticExchangeEvaluation(cAfter, sq);
      if (oppGain - valCapturedByPlayer >= 2) {
        // Verifica se essa peça já estava pendurada antes do lance
        try {
          const fenTokens = fenBefore.split(' ');
          fenTokens[1] = fenTokens[1] === 'w' ? 'b' : 'w';
          const oppTurnBefore = new Chess(fenTokens.join(' '));
          const oppGainBefore = staticExchangeEvaluation(oppTurnBefore, sq);
          if (oppGainBefore < 2) {
            return true;
          }
        } catch {
          // ignora
        }
      }
    }

    return false;
  } catch {
    return false;
  }
}

/**
 * Converte centipeões para Probabilidade de Vitória (0% a 100%) - Modelo Sigmoide Oficial Lichess/Chess.com
 * MULTIPLIER = -0.00368208
 */
export function cpToWinPercent(cp) {
  const clamped = Math.max(-1500, Math.min(1500, cp));
  return 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * clamped)) - 1);
}

/**
 * Fórmula oficial do Lichess para precisão de um lance individual (AccuracyPercent.scala):
 * if after >= before => 100%
 * else => 103.1668100711649 * exp(-0.04354415386753951 * winDiff) - 3.166924740191411 + 1 (bônus de incerteza)
 */
export function fromWinPercents(beforeWinPercent, afterWinPercent) {
  if (afterWinPercent >= beforeWinPercent) return 100;
  const winDiff = beforeWinPercent - afterWinPercent;
  const raw = 103.1668100711649 * Math.exp(-0.04354415386753951 * winDiff) - 3.166924740191411;
  const withBonus = raw + 1; // bônus de incerteza para análise de engine
  return Math.max(0, Math.min(100, withBonus));
}

/**
 * Desvio padrão de uma série numérica (scalalib / Maths.standardDeviation)
 */
export function standardDeviation(values) {
  if (!values || values.length <= 1) return 0;
  const mean = values.reduce((sum, v) => sum + v, 0) / values.length;
  const variance = values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

/**
 * Classifica um lance segundo os critérios exatos do Modelo de Pontos Esperados (Expected Points Model - Chess.com):
 * https://support.chess.com/en/articles/8584089-how-does-game-review-work
 */
export function classifyMove({
  prevEvalWhiteCp,
  currEvalWhiteCp,
  bestMoveUci,
  playedMoveUci,
  turnColor,
  moveNumber,
  fenBefore,
  isBookMove = false,
  isNovelty = false,
  inBookStreak = false,
  isDeliveringCheckmate = false,
}) {
  // 0) Xeque-mate direto = Lance vitorioso perfeito (BEST / 100%)
  if (isDeliveringCheckmate) {
    return { ...MOVE_CLASSIFICATIONS.BEST, cpLoss: 0, winLoss: 0 };
  }

  const isWhite = turnColor === 'w';
  const prevWin = isWhite ? cpToWinPercent(prevEvalWhiteCp) : 100 - cpToWinPercent(prevEvalWhiteCp);
  const currWin = isWhite ? cpToWinPercent(currEvalWhiteCp) : 100 - cpToWinPercent(currEvalWhiteCp);

  // Perda de probabilidade de vitória (0% a 100%)
  const winLoss = Math.max(0, prevWin - currWin);
  const cpLoss = Math.max(0, isWhite ? prevEvalWhiteCp - currEvalWhiteCp : currEvalWhiteCp - prevEvalWhiteCp);
  const isTopEngineMove = bestMoveUci && playedMoveUci && bestMoveUci === playedMoveUci;

  // 1) Lance de Livro de Abertura (ECO / Base de Mestres)
  if (isBookMove) {
    return { ...MOVE_CLASSIFICATIONS.BOOK, cpLoss: 0, winLoss: 0 };
  }

  // 1.5) Novidade Teórica (N):
  // Primeiro lance fora da base de mestres que mantém a posição sólida (perda máxima de 0.45 peão e <= 3.5% Win%)
  if (isNovelty && inBookStreak && winLoss <= 3.5 && cpLoss <= 45) {
    return { ...MOVE_CLASSIFICATIONS.NOVELTY, cpLoss: Math.round(cpLoss), winLoss: 0 };
  }

  const playerEvalAfter = isWhite ? currEvalWhiteCp : -currEvalWhiteCp;
  const playerEvalBefore = isWhite ? prevEvalWhiteCp : -prevEvalWhiteCp;
  const isDecidedPosition = Math.abs(playerEvalBefore) >= 500 && playerEvalAfter * playerEvalBefore > 0;

  // Observação: NÃO existe mais "tolerância teórica". Só é Lance de Livro o que
  // está catalogado no repertório do Lichess (isBookMove). Fora dele, o lance é
  // julgado normalmente pela engine, mesmo nos primeiros lances da partida.

  // 2) Lance Brilhante (!!):
  //    "Um sacrifício de peça intuitivo e poderoso que mantém ou amplia a vantagem."
  //    EXCLUSIVO para sacrifícios reais de peça (SEE >= 2) onde o lance é a melhor escolha da engine.
  //    Trocas justas (5 por 5, 3 por 3, 9 por 9) e lances sem sacrifício NUNCA são brilhantes.
  if (
    fenBefore &&
    playedMoveUci &&
    isTopEngineMove &&
    isPieceSacrifice(fenBefore, playedMoveUci) &&
    winLoss <= 2.0 &&
    playerEvalAfter >= -50 &&
    playerEvalBefore < 600
  ) {
    return { ...MOVE_CLASSIFICATIONS.BRILLIANT, cpLoss: Math.round(cpLoss), winLoss };
  }

  // 3) Grande Lance (!):
  //    "Um lance que altera criticamente o rumo do jogo ou é o único bom da posição."
  if (
    isTopEngineMove &&
    playerEvalBefore <= -150 &&
    playerEvalAfter >= -50 &&
    winLoss <= 1.0
  ) {
    return { ...MOVE_CLASSIFICATIONS.GREAT, cpLoss: 0, winLoss: 0 };
  }

  // 4) Oportunidade Perdida / Miss (❌):
  //    "Deixou escapar uma oportunidade tática ou não puniu o erro do adversário."
  if (playerEvalBefore >= 300 && winLoss >= 18.0 && playerEvalAfter < 150) {
    return { ...MOVE_CLASSIFICATIONS.MISS, cpLoss: Math.round(cpLoss), winLoss };
  }

  // 5) Limiares Rigorosos (O 2º ou 3º lance da máquina com perda de centipeões NUNCA é Melhor Lance ★):
  //    - Melhor Lance (BEST ★): EXCLUSIVO para o 1º lance escolhido pelo Stockfish (ou perda zero exata 0.00 cp)
  //    - Excelente (EXCELLENT ✓): 2ª/3ª opção da engine com winLoss <= 2.5% E cpLoss <= 25 cp (0.25 peão)
  //    - Bom (GOOD ✓): Alternativa jogável com winLoss <= 5.5% E cpLoss <= 55 cp (0.55 peão)
  //    - Imprecisão (INACCURACY ?! ): winLoss <= 11.0% E cpLoss <= 100 cp (1.00 peão)
  //    - Erro (MISTAKE ?): winLoss <= 20.0% E cpLoss <= 200 cp (2.00 peões)
  //    - Capivara (BLUNDER ??): winLoss > 20.0% OU cpLoss > 200 cp (> 2.00 peões)
  if (isTopEngineMove || (cpLoss === 0 && winLoss === 0)) {
    return { ...MOVE_CLASSIFICATIONS.BEST, cpLoss: Math.round(cpLoss), winLoss };
  }
  if (
    (winLoss <= 2.5 && cpLoss <= 25) ||
    (isDecidedPosition && winLoss <= 1.2 && cpLoss <= 55)
  ) {
    return { ...MOVE_CLASSIFICATIONS.EXCELLENT, cpLoss: Math.round(cpLoss), winLoss };
  }
  if (
    (winLoss <= 5.5 && cpLoss <= 55) ||
    (isDecidedPosition && winLoss <= 3.0 && cpLoss <= 110)
  ) {
    return { ...MOVE_CLASSIFICATIONS.GOOD, cpLoss: Math.round(cpLoss), winLoss };
  }
  if (
    (winLoss <= 11.0 && cpLoss <= 100) ||
    (playerEvalAfter >= 500 && winLoss <= 5.0)
  ) {
    return { ...MOVE_CLASSIFICATIONS.INACCURACY, cpLoss: Math.round(cpLoss), winLoss };
  }
  if (
    (winLoss <= 20.0 && cpLoss <= 200) ||
    (playerEvalAfter >= 450 && winLoss <= 10.0)
  ) {
    return { ...MOVE_CLASSIFICATIONS.MISTAKE, cpLoss: Math.round(cpLoss), winLoss };
  }
  return { ...MOVE_CLASSIFICATIONS.BLUNDER, cpLoss: Math.round(cpLoss), winLoss };
}

/**
 * Constrói janelas deslizantes para cálculo de volatilidade oficial do Lichess (AccuracyPercent.scala):
 * windowSize = ((cps.size - 1) / 10).squeeze(2, 8)
 * windows = List.fill(windowSize.atMost(allWinPercents.size) - 2)(allWinPercents.take(windowSize)) ::: allWinPercents.sliding(windowSize).toList
 */
export function getLichessWindows(allWinPercents) {
  const m = allWinPercents.length;
  if (m <= 1) return [];
  const windowSize = Math.max(2, Math.min(8, Math.floor((m - 1) / 10)));
  const effectiveWindowSize = Math.min(windowSize, m);

  const slidingWindows = [];
  for (let i = 0; i <= m - effectiveWindowSize; i++) {
    slidingWindows.push(allWinPercents.slice(i, i + effectiveWindowSize));
  }

  const prefixCount = Math.max(0, effectiveWindowSize - 2);
  const prefix = [];
  const firstWindow = allWinPercents.slice(0, effectiveWindowSize);
  for (let i = 0; i < prefixCount; i++) {
    prefix.push(firstWindow);
  }

  return [...prefix, ...slidingWindows];
}

/**
 * Calcula a precisão oficial do Lichess (AccuracyPercent.scala):
 * - Move accuracy: fromWinPercents com sigmoid MULTIPLIER = -0.00368208 e decaimento exponencial
 * - Ponderação por volatilidade via desvio padrão em janelas deslizantes (limitado entre 0.5 e 12)
 * - Média Harmônica para penalizar erros graves
 * - Combinação final: (Média Ponderada + Média Harmônica) / 2
 */
export function calculateAccuracy(moves, color) {
  if (!moves || moves.length === 0) return 0;

  // Caso 1: Array de lances já filtrados de um único jogador
  const allSameColor = moves.every((m) => m.color === color);
  if (allSameColor) {
    const playerMoves = moves.filter((m) => m.classification);
    if (playerMoves.length === 0) return 0;

    const accuracies = playerMoves.map((m) => {
      if (m.classification.id === 'BOOK' || m.classification.id === 'BRILLIANT' || m.classification.id === 'NOVELTY') return 100;
      const winLoss = m.classification.winLoss ?? 0;
      return fromWinPercents(100, 100 - winLoss);
    });

    const harmonicSum = accuracies.reduce((sum, acc) => sum + 1 / Math.max(1, acc), 0);
    const harmonicMean = harmonicSum > 0 ? accuracies.length / harmonicSum : 0;
    const arithmeticMean = accuracies.reduce((a, b) => a + b, 0) / accuracies.length;
    return Math.round(((arithmeticMean + harmonicMean) / 2) * 10) / 10;
  }

  // Caso 2: Partida completa com lances de Brancas e Pretas em sequência (mainline)
  // Monta a sequência de probabilidades de vitória (allWinPercents): posição 0 + pós cada lance
  const initialCp = 20; // Avaliação padrão da posição inicial
  const allWinPercents = [cpToWinPercent(initialCp)];

  for (let i = 0; i < moves.length; i++) {
    const m = moves[i];
    let cp = m.evalWhiteCp;
    if (cp === null || cp === undefined) {
      if (m.classification && m.classification.winLoss !== undefined) {
        const prevWp = allWinPercents[i];
        const isWhite = (m.color || (i % 2 === 0 ? 'w' : 'b')) === 'w';
        const currWp = isWhite ? prevWp - m.classification.winLoss : prevWp + m.classification.winLoss;
        allWinPercents.push(Math.max(0, Math.min(100, currWp)));
        continue;
      }
      cp = initialCp;
    }
    allWinPercents.push(cpToWinPercent(cp));
  }

  // Gera as janelas deslizantes e pesos de volatilidade (desvio padrão limitado entre 0.5 e 12)
  const windows = getLichessWindows(allWinPercents);
  const weights = windows.map((win) => {
    const sd = standardDeviation(win);
    return Math.max(0.5, Math.min(12, sd));
  });

  // Calcula a acurácia individual e peso para cada lance da partida
  const evaluatedMoves = [];
  for (let i = 0; i < moves.length; i++) {
    const m = moves[i];
    const moveColor = m.color || (i % 2 === 0 ? 'w' : 'b');
    const prevWhiteWin = allWinPercents[i];
    const currWhiteWin = allWinPercents[i + 1];

    const p = moveColor === 'w' ? prevWhiteWin : 100 - prevWhiteWin;
    const n = moveColor === 'w' ? currWhiteWin : 100 - currWhiteWin;

    let moveAcc;
    if (m.classification?.id === 'BOOK' || m.classification?.id === 'BRILLIANT' || m.classification?.id === 'NOVELTY') {
      moveAcc = 100;
    } else {
      moveAcc = fromWinPercents(p, n);
    }

    const weight = weights[i] ?? 1;
    evaluatedMoves.push({
      color: moveColor,
      accuracy: moveAcc,
      weight,
      classification: m.classification,
    });
  }

  const targetPlayerMoves = evaluatedMoves.filter((m) => m.color === color);
  if (targetPlayerMoves.length === 0) return 0;

  // 1. Média Ponderada por Volatilidade
  const totalWeight = targetPlayerMoves.reduce((s, m) => s + m.weight, 0);
  const weightedSum = targetPlayerMoves.reduce((s, m) => s + m.accuracy * m.weight, 0);
  const weightedMean = totalWeight > 0 ? weightedSum / totalWeight : 0;

  // 2. Média Harmônica (penaliza severamente capivaras e erros graves)
  const harmonicSum = targetPlayerMoves.reduce((s, m) => s + 1 / Math.max(1, m.accuracy), 0);
  const harmonicMean = harmonicSum > 0 ? targetPlayerMoves.length / harmonicSum : 0;

  // 3. Combinação oficial do Lichess: (Weighted + Harmonic) / 2
  const gameAccuracy = (weightedMean + harmonicMean) / 2;
  return Math.round(gameAccuracy * 10) / 10;
}

/**
 * Retorna as precisões de ambos os lados (Brancas e Pretas) de acordo com o algoritmo oficial do Lichess
 */
export function calculateGameAccuracy(moves) {
  return {
    white: calculateAccuracy(moves, 'w'),
    black: calculateAccuracy(moves, 'b'),
  };
}

/**
 * Conta peças maiores e menores (Damas, Torres, Bispos, Cavalos)
 */
export function countMajorsAndMinors(fen) {
  if (!fen) return 16;
  const boardStr = fen.split(' ')[0];
  let count = 0;
  for (const ch of boardStr) {
    if ('qrbnQRBN'.includes(ch)) {
      count++;
    }
  }
  return count;
}

/**
 * Conta peças nas primeiras e oitavas fileiras
 */
export function countBackrankPieces(fen) {
  if (!fen) return { white: 8, black: 8 };
  const ranks = fen.split(' ')[0].split('/');
  const rank8 = ranks[0] || '';
  const rank1 = ranks[7] || '';

  const countPieces = (rankStr) => {
    let count = 0;
    for (const ch of rankStr) {
      if (isNaN(parseInt(ch, 10))) {
        count++;
      }
    }
    return count;
  };

  return {
    white: countPieces(rank1),
    black: countPieces(rank8),
  };
}

/**
 * Divide a partida em Abertura, Meio-jogo e Finais segundo o algoritmo oficial do Lichess (Divider.scala):
 * 1. Finais: <= 6 peças maiores/menores (Q, R, B, N) restantes no tabuleiro.
 * 2. Meio-jogo: <= 10 peças maiores/menores OU primeira/última fileira esparsa (< 4 peças).
 * 3. Abertura: lances iniciais antes do início do meio-jogo.
 */
export function detectGamePhases(moves) {
  let middlegameMoveIndex = null;
  let endgameMoveIndex = null;

  if (!moves || !Array.isArray(moves) || moves.length === 0) {
    return { middlegameMoveIndex: null, endgameMoveIndex: null };
  }

  for (let i = 0; i < moves.length; i++) {
    const fen = moves[i]?.fenAfter;
    if (!fen || typeof fen !== 'string') continue;
    const pieces = countMajorsAndMinors(fen);
    const backrank = countBackrankPieces(fen);

    // Condição de Finais (Lichess: <= 6 peças maiores/menores)
    if (endgameMoveIndex === null && pieces <= 6) {
      if (middlegameMoveIndex === null) {
        middlegameMoveIndex = i;
      }
      endgameMoveIndex = i;
      continue;
    }

    // Condição de Meio-jogo (Lichess: <= 10 peças OU backrank < 4)
    if (middlegameMoveIndex === null) {
      if (pieces <= 10 || backrank.white < 4 || backrank.black < 4) {
        middlegameMoveIndex = i;
      }
    }
  }

  // Fallbacks razoáveis se a partida não atingiu os critérios
  if (middlegameMoveIndex === null && moves.length > 20) {
    middlegameMoveIndex = Math.min(20, Math.floor(moves.length * 0.3));
  }
  if (endgameMoveIndex === null && moves.length > 50) {
    endgameMoveIndex = Math.min(60, Math.floor(moves.length * 0.7));
  }

  return {
    middlegameMoveIndex, // índice do primeiro lance do meio-jogo (0-based)
    endgameMoveIndex,    // índice do primeiro lance dos finais (0-based)
  };
}

/**
 * Calcula a precisão por fase (Abertura, Meio-jogo, Finais) para Brancas e Pretas
 * com a fórmula exata do Lichess (AccuracyPercent.scala)
 */
export function calculatePhasesAccuracy(moves) {
  if (!moves || moves.length === 0) {
    return {
      phases: { middlegameMoveIndex: null, endgameMoveIndex: null },
      opening: { white: 100, black: 100, moveCount: 0 },
      middlegame: { white: null, black: null, moveCount: 0 },
      endgame: { white: null, black: null, moveCount: 0 },
    };
  }

  const { middlegameMoveIndex, endgameMoveIndex } = detectGamePhases(moves);

  const endOpenIdx = middlegameMoveIndex !== null ? middlegameMoveIndex : moves.length;
  const openingMoves = moves.slice(0, endOpenIdx);

  let middlegameMoves = [];
  if (middlegameMoveIndex !== null) {
    const endMidIdx = endgameMoveIndex !== null ? endgameMoveIndex : moves.length;
    middlegameMoves = moves.slice(middlegameMoveIndex, endMidIdx);
  }

  const endgameMoves = endgameMoveIndex !== null ? moves.slice(endgameMoveIndex) : [];

  return {
    phases: {
      middlegameMoveIndex,
      endgameMoveIndex,
    },
    opening: {
      white: openingMoves.length > 0 ? calculateAccuracy(openingMoves, 'w') : 100,
      black: openingMoves.length > 0 ? calculateAccuracy(openingMoves, 'b') : 100,
      moveCount: openingMoves.length,
    },
    middlegame: {
      white: middlegameMoves.length > 0 ? calculateAccuracy(middlegameMoves, 'w') : null,
      black: middlegameMoves.length > 0 ? calculateAccuracy(middlegameMoves, 'b') : null,
      moveCount: middlegameMoves.length,
    },
    endgame: {
      white: endgameMoves.length > 0 ? calculateAccuracy(endgameMoves, 'w') : null,
      black: endgameMoves.length > 0 ? calculateAccuracy(endgameMoves, 'b') : null,
      moveCount: endgameMoves.length,
    },
  };
}


