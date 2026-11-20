// Analise de Uso de Tempo e Relogio a partir das tags [%clk] do PGN
// Permite gerar graficos de consumo de tempo por lance e identificar apuros de tempo

/**
 * Converte string de relogio (ex: "1:30:45", "05:20", "45") para total de segundos.
 */
export function parseClockToSeconds(clkStr) {
  if (!clkStr) return null;
  const clean = String(clkStr).trim().replace(/^[^\d:]+/, '');
  const parts = clean.split(':').map((p) => parseInt(p, 10) || 0);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  if (parts.length === 1) {
    return parts[0];
  }
  return null;
}

/**
 * Formata segundos em texto legivel (ex: "1m 24s", "45s", "2h 10m").
 */
export function formatSecondsSpent(seconds) {
  if (seconds === null || seconds === undefined || isNaN(seconds)) return '--';
  const s = Math.max(0, Math.round(seconds));
  if (s >= 3600) {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return `${h}h ${m}m`;
  }
  if (s >= 60) {
    const m = Math.floor(s / 60);
    const remS = s % 60;
    return remS > 0 ? `${m}m ${remS}s` : `${m}m`;
  }
  return `${s}s`;
}

/**
 * Processa a lista de nos da mainline para construir a serie temporal de uso de relogio.
 */
export function buildClockAnalytics(mainlineNodes) {
  if (!Array.isArray(mainlineNodes) || mainlineNodes.length === 0) {
    return { hasClockData: false, points: [], stats: null };
  }

  let nodesWithClock = 0;
  for (const n of mainlineNodes) {
    if (n && n.clk) nodesWithClock++;
  }

  // Precisa de pelo menos 2 lances com relogio para calcular deltas de tempo
  if (nodesWithClock < 2) {
    return { hasClockData: false, points: [], stats: null };
  }

  let lastWhiteSeconds = null;
  let lastBlackSeconds = null;
  let initialWhiteSeconds = null;
  let initialBlackSeconds = null;

  let whiteLongest = { ply: 0, san: '', seconds: 0 };
  let blackLongest = { ply: 0, san: '', seconds: 0 };
  let whiteLowTimeMoves = 0;
  let blackLowTimeMoves = 0;

  const points = [];

  for (let i = 0; i < mainlineNodes.length; i++) {
    const node = mainlineNodes[i];
    const isWhite = node.color === 'w';
    const secondsLeft = parseClockToSeconds(node.clk);

    let timeSpent = null;

    if (secondsLeft !== null) {
      if (isWhite) {
        if (initialWhiteSeconds === null) initialWhiteSeconds = secondsLeft;
        if (lastWhiteSeconds !== null) {
          // O tempo gasto eh a diferenca entre o relogio anterior e o atual
          // Se houve incremento e o tempo subiu, limitamos a 0
          timeSpent = Math.max(0, lastWhiteSeconds - secondsLeft);
        }
        lastWhiteSeconds = secondsLeft;
        if (timeSpent !== null && timeSpent > whiteLongest.seconds) {
          whiteLongest = { ply: node.ply, san: node.san, seconds: timeSpent };
        }
        if (secondsLeft < 30) {
          whiteLowTimeMoves++;
        }
      } else {
        if (initialBlackSeconds === null) initialBlackSeconds = secondsLeft;
        if (lastBlackSeconds !== null) {
          timeSpent = Math.max(0, lastBlackSeconds - secondsLeft);
        }
        lastBlackSeconds = secondsLeft;
        if (timeSpent !== null && timeSpent > blackLongest.seconds) {
          blackLongest = { ply: node.ply, san: node.san, seconds: timeSpent };
        }
        if (secondsLeft < 30) {
          blackLowTimeMoves++;
        }
      }
    }

    points.push({
      idx: i,
      nodeId: node.id,
      ply: node.ply,
      moveNumber: node.moveNumber,
      color: node.color,
      san: node.san,
      clk: node.clk || '--',
      secondsLeft,
      timeSpent,
      formattedSpent: formatSecondsSpent(timeSpent),
      isLowTime: secondsLeft !== null && secondsLeft < 30,
    });
  }

  return {
    hasClockData: true,
    points,
    stats: {
      whiteLongestThink: whiteLongest.seconds > 0 ? whiteLongest : null,
      blackLongestThink: blackLongest.seconds > 0 ? blackLongest : null,
      whiteLowTimeMoves,
      blackLowTimeMoves,
    },
  };
}
