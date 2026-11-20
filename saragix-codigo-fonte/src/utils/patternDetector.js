// Detector inteligente de padrões de erro, posições críticas de treinamento,
// eventos/torneios, linha do tempo da jornada e desempenho contra títulos.
import { detectOpening, normalizeTitle } from './openings';

function isQueenless(fen) {
  if (!fen) return false;
  const boardPart = fen.split(' ')[0] || '';
  return !boardPart.includes('Q') && !boardPart.includes('q');
}

function computeMoveListAccuracy(moves) {
  if (!moves || moves.length === 0) return null;
  const valid = moves.filter((m) => m.classification && typeof m.classification.winLoss === 'number');
  if (valid.length === 0) return null;
  const accs = valid.map((m) => {
    if (m.classification.id === 'BOOK') return 100;
    const wl = m.classification.winLoss || 0;
    return Math.max(0, Math.min(100, 103.1668 * Math.exp(-0.04354 * wl) - 3.1669));
  });
  return Math.round((accs.reduce((a, b) => a + b, 0) / accs.length) * 10) / 10;
}

/**
 * Extrai automaticamente "Minhas Posições Críticas" de todas as partidas analisadas do usuário.
 * Cada exercício inclui:
 * - FEN antes do lance do usuário;
 * - Lance que o usuário realmente jogou na partida;
 * - Melhor lance do Stockfish (UCI e SAN);
 * - Avaliação antes e depois;
 * - Fase da partida (OPENING, MIDDLEGAME, ENDGAME) e flag TACTICS;
 * - Explicação simples do motivo da posição ser crítica.
 */
export function extractCriticalPositions(savedGames) {
  const puzzles = [];

  savedGames.forEach((game) => {
    if (!game.isAnalyzed || !game.moves || game.moves.length === 0) return;
    const userColor = game.userColor || 'w';
    const opponentName = userColor === 'w' ? game.black : game.white;
    const opponentTitle = userColor === 'w' ? game.blackTitle : game.whiteTitle;

    game.moves.forEach((m, idx) => {
      if (m.color !== userColor || !m.classification) return;
      if (!m.bestMoveUci || m.bestMoveUci === m.uci) return;

      const cId = m.classification.id;
      const prevMove = idx > 0 ? game.moves[idx - 1] : null;
      const evalBeforeWhiteCp = prevMove?.evalWhiteCp ?? 20;
      const evalAfterWhiteCp = m.evalWhiteCp ?? 0;

      // Perspectiva do jogador (positivo = vantagem para o jogador)
      const userEvalBeforeCp = userColor === 'w' ? evalBeforeWhiteCp : -evalBeforeWhiteCp;
      const userEvalAfterCp = userColor === 'w' ? evalAfterWhiteCp : -evalAfterWhiteCp;
      const cpDrop = Math.max(0, userEvalBeforeCp - userEvalAfterCp);

      // Critérios para ser uma Posição Crítica:
      // 1) Erro (?) ou Capivara (??)
      // 2) Imprecisão (?!) com queda relevante de avaliação (>= 85 cp)
      const isMistakeOrBlunder = cId === 'MISTAKE' || cId === 'BLUNDER';
      const isSignificantInaccuracy = cId === 'INACCURACY' && cpDrop >= 85;

      if (!isMistakeOrBlunder && !isSignificantInaccuracy) return;

      const moveNum = m.moveNumber || Math.floor(idx / 2) + 1;
      let phaseCategory = 'MIDDLEGAME';
      let phaseLabel = 'Meio-Jogo';
      if (moveNum <= 10) {
        phaseCategory = 'OPENING';
        phaseLabel = 'Abertura';
      } else if (moveNum >= 26 || isQueenless(m.fenBefore)) {
        phaseCategory = 'ENDGAME';
        phaseLabel = 'Final';
      }

      // Verifica se foi uma oportunidade tática perdida ou perda de vantagem clara
      const lostWinningAdvantage = userEvalBeforeCp >= 180 && userEvalAfterCp <= 50;
      const missedTactic =
        cpDrop >= 180 ||
        (m.bestMoveSan && (m.bestMoveSan.includes('x') || m.bestMoveSan.includes('+')));

      let reasonTitle = 'Mudança significativa na avaliação';
      let explanation = `No lance ${moveNum}, você jogou ${m.san} (${m.classification.label}), permitindo que a avaliação caísse ${(cpDrop / 100).toFixed(1)} pontos.`;

      if (lostWinningAdvantage) {
        reasonTitle = 'Perda de vantagem decisiva';
        explanation = `Você tinha uma excelente vantagem (${userEvalBeforeCp > 0 ? '+' : ''}${(userEvalBeforeCp / 100).toFixed(1)}), mas o lance ${m.san} permitiu ao adversário igualar ou virar o jogo. O lance preciso era ${m.bestMoveSan || m.bestMoveUci}.`;
      } else if (cId === 'BLUNDER') {
        reasonTitle = 'Capivara crítica na partida (??)';
        explanation = `O lance ${m.san} comprometeu seriamente a posição (queda de ${(cpDrop / 100).toFixed(1)} peões). Encontrar ${m.bestMoveSan || m.bestMoveUci} mantinha a segurança ou conquistava material.`;
      } else if (missedTactic) {
        reasonTitle = 'Oportunidade tática / Lance ativo';
        explanation = `Havia uma continuação tática ou mais incisiva (${m.bestMoveSan || m.bestMoveUci}) que preservava ${(cpDrop / 100).toFixed(1)} pontos de vantagem em relação a ${m.san}.`;
      }

      puzzles.push({
        id: `${game.id}-ply-${m.ply}`,
        gameId: game.id,
        gameTitle: game.title,
        gameDate: game.date,
        event: game.event,
        opening: game.opening,
        opponentName,
        opponentTitle,
        userColor,
        ply: m.ply,
        moveNumber: moveNum,
        fen: m.fenBefore,
        playedSan: m.san,
        playedUci: m.uci,
        playedFrom: m.from,
        playedTo: m.to,
        bestMoveUci: m.bestMoveUci,
        bestMoveSan: m.bestMoveSan || m.bestMoveUci,
        classification: m.classification,
        evalBeforeWhiteCp,
        evalAfterWhiteCp,
        userEvalBeforePawns: Number((userEvalBeforeCp / 100).toFixed(2)),
        userEvalAfterPawns: Number((userEvalAfterCp / 100).toFixed(2)),
        evalSwingPawns: Number((cpDrop / 100).toFixed(2)),
        phaseCategory,
        phaseLabel,
        isTactical: Boolean(missedTactic),
        reasonTitle,
        explanation,
      });
    });
  });

  // Ordena pelas maiores quedas de avaliação primeiro
  return puzzles.sort((a, b) => b.evalSwingPawns - a.evalSwingPawns);
}

/**
 * Agrupa partidas por Evento / Torneio (Seção 3: Eventos & Torneios)
 */
export function buildEventsAnalytics(savedGames) {
  const eventsMap = {};

  savedGames.forEach((game) => {
    const eventName = (game.event || 'Partidas Casuais').trim();
    if (!eventsMap[eventName]) {
      eventsMap[eventName] = {
        name: eventName,
        location: game.eventLocation || (game.gameMode === 'Presencial' ? 'Presencial (OTB)' : 'Online'),
        date: game.date,
        gameMode: game.gameMode || 'Online',
        timeControl: game.timeControl || 'Rápida',
        games: [],
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0,
        accuracies: [],
        bestGame: null,
        bestGameAcc: -1,
        biggestBlunder: null,
        biggestBlunderSwing: 0,
        byColor: {
          w: { games: 0, wins: 0, draws: 0, losses: 0 },
          b: { games: 0, wins: 0, draws: 0, losses: 0 },
        },
      };
    }

    const ev = eventsMap[eventName];
    ev.games.push(game);
    if (game.eventLocation && !ev.location) ev.location = game.eventLocation;
    if (game.date && game.date > ev.date) ev.date = game.date;

    const userColor = game.userColor || 'w';
    const res = game.result || '*';
    const isWin = (userColor === 'w' && res === '1-0') || (userColor === 'b' && res === '0-1');
    const isLoss = (userColor === 'w' && res === '0-1') || (userColor === 'b' && res === '1-0');
    const isDraw = res === '1/2-1/2';

    ev.byColor[userColor].games++;
    if (isWin) {
      ev.wins++;
      ev.points += 1;
      ev.byColor[userColor].wins++;
    } else if (isDraw) {
      ev.draws++;
      ev.points += 0.5;
      ev.byColor[userColor].draws++;
    } else if (isLoss) {
      ev.losses++;
      ev.byColor[userColor].losses++;
    }

    const userAcc = userColor === 'w' ? game.whiteAccuracy : game.blackAccuracy;
    if (game.isAnalyzed && typeof userAcc === 'number' && userAcc > 0) {
      ev.accuracies.push(userAcc);
      if (userAcc > ev.bestGameAcc) {
        ev.bestGameAcc = userAcc;
        ev.bestGame = game;
      }
    }

    // Procura o maior erro do usuário neste torneio
    if (game.isAnalyzed && game.moves) {
      game.moves.forEach((m, idx) => {
        if (m.color !== userColor || !m.classification) return;
        const prev = idx > 0 ? game.moves[idx - 1] : null;
        const prevCp = prev?.evalWhiteCp ?? 20;
        const currCp = m.evalWhiteCp ?? 0;
        const drop = Math.max(0, userColor === 'w' ? prevCp - currCp : currCp - prevCp);
        if (drop > ev.biggestBlunderSwing && (m.classification.id === 'BLUNDER' || m.classification.id === 'MISTAKE')) {
          ev.biggestBlunderSwing = drop;
          ev.biggestBlunder = {
            gameTitle: game.title,
            moveNumber: m.moveNumber,
            san: m.san,
            bestMoveSan: m.bestMoveSan || m.bestMoveUci,
            swingPawns: Number((drop / 100).toFixed(1)),
          };
        }
      });
    }
  });

  return Object.values(eventsMap)
    .map((ev) => ({
      ...ev,
      totalGames: ev.games.length,
      avgAccuracy:
        ev.accuracies.length > 0
          ? Math.round((ev.accuracies.reduce((a, b) => a + b, 0) / ev.accuracies.length) * 10) / 10
          : null,
    }))
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

/**
 * Analisa todas as partidas reais salvas do usuário para gerar:
 * 1. Resumo da Carreira
 * 2. Estatísticas por Abertura
 * 3. Detector de Padrões de Erro
 * 4. Desempenho contra Títulos (Sem título, NM, CM, FM, IM, GM, etc.)
 */
export function buildCareerAnalytics(savedGames) {
  const totalGames = savedGames.length;
  let wins = 0;
  let losses = 0;
  let draws = 0;

  const byColor = {
    w: { games: 0, wins: 0, losses: 0, draws: 0, accuracies: [] },
    b: { games: 0, wins: 0, losses: 0, draws: 0, accuracies: [] },
  };

  let allUserAccuracies = [];
  let bestAccuracy = 0;
  let bestAccuracyGame = null;

  let totalInaccuracies = 0;
  let totalMistakes = 0;
  let totalBlunders = 0;

  const errorsByPhase = {
    opening: 0,
    earlyMiddle: 0,
    lateMiddle: 0,
    endgame: 0,
  };
  let userOpeningMoves = [];
  let userMiddlegameMoves = [];
  let userEndgameMoves = [];
  let queenTradeAdvantageLostCount = 0;
  let timeTroubleErrors = 0;
  let fastControlErrors = 0;
  let fastControlGames = 0;

  const openingsMap = {};
  const vsE4Counts = {};
  const vsD4Counts = {};

  // Estatísticas contra Títulos (Seção 4)
  const vsTitlesMap = {
    NONE: { key: 'NONE', label: 'Sem Título', games: 0, wins: 0, draws: 0, losses: 0, points: 0, accuracies: [] },
    NM: { key: 'NM', label: 'NM / WNM (Mestre Nacional)', games: 0, wins: 0, draws: 0, losses: 0, points: 0, accuracies: [] },
    CM: { key: 'CM', label: 'CM / WCM (Candidato a Mestre)', games: 0, wins: 0, draws: 0, losses: 0, points: 0, accuracies: [] },
    FM: { key: 'FM', label: 'FM / WFM (Mestre FIDE)', games: 0, wins: 0, draws: 0, losses: 0, points: 0, accuracies: [] },
    IM: { key: 'IM', label: 'IM / WIM (Mestre Internacional)', games: 0, wins: 0, draws: 0, losses: 0, points: 0, accuracies: [] },
    GM: { key: 'GM', label: 'GM / WGM (Grande Mestre)', games: 0, wins: 0, draws: 0, losses: 0, points: 0, accuracies: [] },
  };

  const chronological = [...savedGames].reverse();
  const accuracyTimeline = [];

  chronological.forEach((game, idx) => {
    const userColor = game.userColor || 'w';
    const res = game.result || '*';
    const oppRawTitle = userColor === 'w' ? game.blackTitle : game.whiteTitle;
    const normTitle = normalizeTitle(oppRawTitle);

    let titleBucketKey = 'NONE';
    if (normTitle === 'GM' || normTitle === 'WGM') titleBucketKey = 'GM';
    else if (normTitle === 'IM' || normTitle === 'WIM') titleBucketKey = 'IM';
    else if (normTitle === 'FM' || normTitle === 'WFM') titleBucketKey = 'FM';
    else if (normTitle === 'CM' || normTitle === 'WCM') titleBucketKey = 'CM';
    else if (normTitle === 'NM' || normTitle === 'WNM') titleBucketKey = 'NM';

    const tBucket = vsTitlesMap[titleBucketKey];
    tBucket.games++;

    let outcome = 'draw';
    if ((userColor === 'w' && res === '1-0') || (userColor === 'b' && res === '0-1')) {
      wins++;
      outcome = 'win';
      byColor[userColor].wins++;
      tBucket.wins++;
      tBucket.points += 1;
    } else if ((userColor === 'w' && res === '0-1') || (userColor === 'b' && res === '1-0')) {
      losses++;
      outcome = 'loss';
      byColor[userColor].losses++;
      tBucket.losses++;
    } else if (res === '1/2-1/2') {
      draws++;
      outcome = 'draw';
      byColor[userColor].draws++;
      tBucket.draws++;
      tBucket.points += 0.5;
    }
    byColor[userColor].games++;

    const userAcc = userColor === 'w' ? game.whiteAccuracy : game.blackAccuracy;
    if (game.isAnalyzed && typeof userAcc === 'number' && userAcc > 0) {
      allUserAccuracies.push(userAcc);
      byColor[userColor].accuracies.push(userAcc);
      tBucket.accuracies.push(userAcc);
      if (userAcc > bestAccuracy) {
        bestAccuracy = userAcc;
        bestAccuracyGame = game;
      }
      accuracyTimeline.push({
        index: idx + 1,
        date: game.date || `Partida ${idx + 1}`,
        title: game.title,
        accuracy: userAcc,
      });
    }

    const openingInfo = game.opening
      ? { name: game.opening, eco: game.eco || '' }
      : detectOpening(game.moves || []);
    const opName = openingInfo.name || 'Abertura não identificada';

    if (!openingsMap[opName]) {
      openingsMap[opName] = {
        name: opName,
        eco: openingInfo.eco || '',
        firstMoveWhite: openingInfo.firstMoveWhite || (game.moves?.[0]?.san ?? ''),
        userColors: { w: 0, b: 0 },
        games: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        accuracies: [],
        phaseErrors: { '1-10': 0, '10-20': 0, '21-30': 0, '30+': 0 },
      };
    }
    const opStat = openingsMap[opName];
    opStat.games++;
    opStat.userColors[userColor] = (opStat.userColors[userColor] || 0) + 1;
    if (outcome === 'win') opStat.wins++;
    else if (outcome === 'loss') opStat.losses++;
    else opStat.draws++;
    if (game.isAnalyzed && userAcc > 0) {
      opStat.accuracies.push(userAcc);
    }

    if (userColor === 'b' && game.moves && game.moves.length >= 2) {
      const firstWhite = game.moves[0].san;
      if (firstWhite === 'e4') {
        vsE4Counts[opName] = (vsE4Counts[opName] || 0) + 1;
      } else if (firstWhite === 'd4') {
        vsD4Counts[opName] = (vsD4Counts[opName] || 0) + 1;
      }
    }

    if (game.timeControl === 'Blitz' || game.timeControl === 'Bullet') {
      fastControlGames++;
    }

    if (game.moves && game.moves.length > 0) {
      let hadQueenAdvantageBeforeTrade = false;

      game.moves.forEach((m, mIdx) => {
        const isUserMove = m.color === userColor;
        const moveNum = m.moveNumber || Math.floor(mIdx / 2) + 1;

        if (m.fenBefore && m.fenAfter && !isQueenless(m.fenBefore) && isQueenless(m.fenAfter)) {
          const prevMove = mIdx > 0 ? game.moves[mIdx - 1] : null;
          const prevCp = prevMove?.evalWhiteCp ?? 0;
          const userAdvBefore = userColor === 'w' ? prevCp : -prevCp;
          const currCp = m.evalWhiteCp ?? 0;
          const userAdvAfter = userColor === 'w' ? currCp : -currCp;
          if (userAdvBefore >= 150 && userAdvAfter <= 40) {
            hadQueenAdvantageBeforeTrade = true;
          }
        }

        if (!isUserMove || !m.classification) return;

        if (moveNum <= 10) userOpeningMoves.push(m);
        else if (moveNum <= 25) userMiddlegameMoves.push(m);
        else userEndgameMoves.push(m);

        const cId = m.classification.id;
        const isError = cId === 'INACCURACY' || cId === 'MISTAKE' || cId === 'BLUNDER';
        const isSeriousError = cId === 'MISTAKE' || cId === 'BLUNDER';

        if (cId === 'INACCURACY') totalInaccuracies++;
        if (cId === 'MISTAKE') totalMistakes++;
        if (cId === 'BLUNDER') totalBlunders++;

        if (isError) {
          if (moveNum <= 10) {
            errorsByPhase.opening++;
            opStat.phaseErrors['1-10']++;
          } else if (moveNum <= 20) {
            errorsByPhase.earlyMiddle++;
            opStat.phaseErrors['10-20']++;
          } else if (moveNum <= 30) {
            errorsByPhase.lateMiddle++;
            opStat.phaseErrors['21-30']++;
          } else {
            errorsByPhase.endgame++;
            opStat.phaseErrors['30+']++;
          }

          if (game.timeTrouble) {
            timeTroubleErrors++;
          }
          if (isSeriousError && (game.timeControl === 'Blitz' || game.timeControl === 'Bullet')) {
            fastControlErrors++;
          }
        }
      });

      if (hadQueenAdvantageBeforeTrade) {
        queenTradeAdvantageLostCount++;
      }
    }
  });

  const avgAccuracy =
    allUserAccuracies.length > 0
      ? Math.round((allUserAccuracies.reduce((a, b) => a + b, 0) / allUserAccuracies.length) * 10) / 10
      : 0;

  const whiteAvgAccuracy =
    byColor.w.accuracies.length > 0
      ? Math.round((byColor.w.accuracies.reduce((a, b) => a + b, 0) / byColor.w.accuracies.length) * 10) / 10
      : 0;

  const blackAvgAccuracy =
    byColor.b.accuracies.length > 0
      ? Math.round((byColor.b.accuracies.reduce((a, b) => a + b, 0) / byColor.b.accuracies.length) * 10) / 10
      : 0;

  const openingsStats = Object.values(openingsMap)
    .map((op) => {
      const winRate = op.games > 0 ? Math.round((op.wins / op.games) * 100) : 0;
      const drawRate = op.games > 0 ? Math.round((op.draws / op.games) * 100) : 0;
      const lossRate = op.games > 0 ? Math.max(0, 100 - winRate - drawRate) : 0;
      const avgAcc =
        op.accuracies.length > 0
          ? Math.round((op.accuracies.reduce((a, b) => a + b, 0) / op.accuracies.length) * 10) / 10
          : null;

      const entries = Object.entries(op.phaseErrors).sort((a, b) => b[1] - a[1]);
      const worstPhase =
        entries[0] && entries[0][1] > 0
          ? `Erros entre os lances ${entries[0][0]} (${entries[0][1]} ocorrências)`
          : 'Sem concentração de erros registrada';

      return {
        ...op,
        winRate,
        drawRate,
        lossRate,
        avgAccuracy: avgAcc,
        worstPhase,
      };
    })
    .sort((a, b) => b.games - a.games);

  const patterns = [];
  const openingAcc = computeMoveListAccuracy(userOpeningMoves);
  const middleAcc = computeMoveListAccuracy(userMiddlegameMoves);
  const endgameAcc = computeMoveListAccuracy(userEndgameMoves);

  const afterMove20Errors = errorsByPhase.lateMiddle + errorsByPhase.endgame;
  const beforeMove20Errors = errorsByPhase.opening + errorsByPhase.earlyMiddle;

  if (afterMove20Errors > 0 && afterMove20Errors >= beforeMove20Errors) {
    patterns.push({
      severity: 'high',
      title: 'Seus maiores erros acontecem frequentemente após o lance 20',
      description: `Você acumulou ${afterMove20Errors} imprecisões/erros após o lance 20. Treine suas posições críticas de meio-jogo tardio e finais na aba Treinamento!`,
    });
  } else if (errorsByPhase.earlyMiddle > errorsByPhase.opening && errorsByPhase.earlyMiddle >= 2) {
    patterns.push({
      severity: 'medium',
      title: 'Atenção na transição da abertura (Lances 10 a 20)',
      description: `Foram detectados ${errorsByPhase.earlyMiddle} deslizes entre os lances 10 e 20. Revise os planos típicos das suas aberturas.`,
    });
  }

  if (endgameAcc !== null && openingAcc !== null && endgameAcc + 5 < openingAcc) {
    patterns.push({
      severity: 'high',
      title: 'Você tem precisão mais baixa em finais',
      description: `Sua precisão média nos finais é de ${endgameAcc}%, comparada a ${openingAcc}% na abertura.`,
    });
  }

  if (queenTradeAdvantageLostCount > 0) {
    patterns.push({
      severity: 'medium',
      title: 'Você costuma perder vantagem depois de trocar as damas',
      description: `Em ${queenTradeAdvantageLostCount} partida(s), sua vantagem caiu logo após a troca das damas.`,
    });
  }

  if (timeTroubleErrors >= 2 || (fastControlGames >= 1 && fastControlErrors >= 2)) {
    patterns.push({
      severity: 'high',
      title: 'Você comete mais erros quando tem pouco tempo',
      description: `Foram detectados ${Math.max(timeTroubleErrors, fastControlErrors)} erros sob pressão de relógio.`,
    });
  }

  if (byColor.b.games >= 1 && byColor.w.games >= 1 && blackAvgAccuracy > 0 && whiteAvgAccuracy - blackAvgAccuracy >= 6) {
    patterns.push({
      severity: 'low',
      title: 'Desempenho inferior jogando de Pretas',
      description: `Sua precisão média de Pretas (${blackAvgAccuracy}%) está abaixo da sua precisão de Brancas (${whiteAvgAccuracy}%).`,
    });
  }

  const topVsE4 = Object.entries(vsE4Counts).sort((a, b) => b[1] - a[1])[0];
  const topVsD4 = Object.entries(vsD4Counts).sort((a, b) => b[1] - a[1])[0];

  const vsTitlesStats = Object.values(vsTitlesMap).map((b) => ({
    ...b,
    scoreRate: b.games > 0 ? Math.round((b.points / b.games) * 100) : 0,
    avgAccuracy:
      b.accuracies.length > 0
        ? Math.round((b.accuracies.reduce((x, y) => x + y, 0) / b.accuracies.length) * 10) / 10
        : null,
  }));

  return {
    totalGames,
    wins,
    losses,
    draws,
    avgAccuracy,
    bestAccuracy,
    bestAccuracyGame,
    totalInaccuracies,
    totalMistakes,
    totalBlunders,
    byColor: {
      w: { ...byColor.w, avgAccuracy: whiteAvgAccuracy },
      b: { ...byColor.b, avgAccuracy: blackAvgAccuracy },
    },
    accuracyTimeline,
    openingsStats,
    repertoireSummary: {
      vsE4: topVsE4 ? `${topVsE4[0]} (${topVsE4[1]}x)` : 'Sem partidas de Pretas contra 1.e4 ainda',
      vsD4: topVsD4 ? `${topVsD4[0]} (${topVsD4[1]}x)` : 'Sem partidas de Pretas contra 1.d4 ainda',
    },
    phaseAccuracies: {
      opening: openingAcc,
      middlegame: middleAcc,
      endgame: endgameAcc,
    },
    errorsByPhase,
    patterns,
    vsTitlesStats,
  };
}
