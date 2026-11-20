import React, { useMemo } from 'react';
import { Cpu, RefreshCw, Layers } from 'lucide-react';
import { MOVE_CLASSIFICATIONS, calculatePhasesAccuracy } from '../utils/chessAnalysis';
import ClassificationIcon, { ClassificationBadge } from './ClassificationIcon';
import ClockChartPanel from './ClockChartPanel';
import { useTranslation } from '../i18n';

export default function GameReviewDashboard({
  mainlineNodes = [],
  whiteAccuracy = 0,
  blackAccuracy = 0,
  whitePlayer = 'Brancas',
  whiteRating = '',
  blackPlayer = 'Pretas',
  blackRating = '',
  currentMove = null,
  onSelectMove = null,
  depth = 16,
  setDepth = null,
  onReAnalyze = null,
  onStopAnalysis = null,
  isAnalyzing = false,
  analysisProgress = 0,
  gameResult = '*',
}) {
  const { t, language } = useTranslation();

  // Normalização do resultado da partida para exibição com i18n
  const formattedResult = useMemo(() => {
    if (!gameResult) return null;
    const res = String(gameResult).trim();
    if (res === '1-0') {
      return {
        score: '1 - 0',
        text: t('dashboard.whiteVictory'),
        winner: 'w',
        badgeClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
      };
    }
    if (res === '0-1') {
      return {
        score: '0 - 1',
        text: t('dashboard.blackVictory'),
        winner: 'b',
        badgeClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
      };
    }
    if (res === '1/2-1/2' || res === '½-½' || res === '0.5-0.5') {
      return {
        score: '½ - ½',
        text: t('dashboard.draw'),
        winner: 'draw',
        badgeClass: 'bg-zinc-500/15 border-zinc-500/30 text-zinc-300',
      };
    }
    if (res === '*' || !res) {
      return {
        score: '*',
        text: t('dashboard.ongoing'),
        winner: 'ongoing',
        badgeClass: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
      };
    }
    return {
      score: res,
      text: res,
      winner: 'other',
      badgeClass: 'bg-zinc-500/15 border-zinc-500/30 text-zinc-300',
    };
  }, [gameResult, t]);
  // 1. Cálculo das precisões por fase com parâmetros oficiais do Lichess (Divider.scala + AccuracyPercent.scala)
  const phaseData = useMemo(() => {
    return calculatePhasesAccuracy(mainlineNodes);
  }, [mainlineNodes]);

  // 2. Contagem de classificações de lances por cor
  const classificationCounts = useMemo(() => {
    const counts = {
      w: { BRILLIANT: 0, GREAT: 0, BEST: 0, EXCELLENT: 0, GOOD: 0, BOOK: 0, NOVELTY: 0, INACCURACY: 0, MISTAKE: 0, BLUNDER: 0, MISS: 0 },
      b: { BRILLIANT: 0, GREAT: 0, BEST: 0, EXCELLENT: 0, GOOD: 0, BOOK: 0, NOVELTY: 0, INACCURACY: 0, MISTAKE: 0, BLUNDER: 0, MISS: 0 },
    };

    mainlineNodes.forEach((node) => {
      if (node.classification && counts[node.color]) {
        const id = node.classification.id;
        if (counts[node.color][id] !== undefined) {
          counts[node.color][id]++;
        }
      }
    });

    return counts;
  }, [mainlineNodes]);

  // 3. Preparação dos pontos do Gráfico de Avaliação
  const chartPoints = useMemo(() => {
    if (!mainlineNodes || mainlineNodes.length === 0) return [];

    return mainlineNodes.map((node, idx) => {
      let cp = node.evalWhiteCp;
      if (cp === null || cp === undefined) {
        cp = 0;
      }
      // Clampa entre -800 e +800 cp (-8.0 a +8.0) para escala visual ideal
      const clampedCp = Math.max(-800, Math.min(800, cp));
      return {
        idx,
        node,
        cp,
        clampedCp,
        san: node.san,
        color: node.color,
      };
    });
  }, [mainlineNodes]);

  // Dimensões do Gráfico SVG
  const graphWidth = 460;
  const graphHeight = 110;
  const midY = graphHeight / 2;

  // Converte índice do lance e centipeões em coordenadas (x, y) no SVG
  const getCoords = (idx, cp) => {
    const total = Math.max(1, chartPoints.length - 1);
    const x = (idx / total) * (graphWidth - 24) + 12;
    // Y: +800 cp fica no topo (y=10), -800 cp fica na base (y=100)
    const y = midY - (cp / 800) * (midY - 12);
    return { x, y: Math.max(8, Math.min(graphHeight - 8, y)) };
  };

  // Traçado da linha do gráfico
  const pathD = useMemo(() => {
    if (chartPoints.length === 0) return '';
    return chartPoints
      .map((pt, i) => {
        const { x, y } = getCoords(i, pt.clampedCp);
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
  }, [chartPoints]);

  // Posições X dos divisores de fase no gráfico
  const { middlegameMoveIndex, endgameMoveIndex } = phaseData.phases;
  const midX = middlegameMoveIndex !== null && chartPoints.length > 1 && middlegameMoveIndex < chartPoints.length
    ? getCoords(middlegameMoveIndex, 0).x
    : null;
  const endX = endgameMoveIndex !== null && chartPoints.length > 1 && endgameMoveIndex < chartPoints.length
    ? getCoords(endgameMoveIndex, 0).x
    : null;

  // Índice do lance atualmente selecionado
  const activeIdx = useMemo(() => {
    if (!currentMove) return chartPoints.length - 1;
    return chartPoints.findIndex((p) => p.node.id === currentMove.id);
  }, [chartPoints, currentMove]);

  const activePoint = activeIdx >= 0 && activeIdx < chartPoints.length ? chartPoints[activeIdx] : null;
  const activeCoords = activePoint ? getCoords(activeIdx, activePoint.clampedCp) : null;

  // Itens de classificação para a tabela com suporte internacional (PT / EN)
  const classificationRows = useMemo(
    () => [
      { key: 'BRILLIANT', label: t('classifications.BRILLIANT.label'), color: '#26c2a3' },
      { key: 'GREAT', label: t('classifications.GREAT.label'), color: '#749bbf' },
      { key: 'BEST', label: t('classifications.BEST.label'), color: '#81b64c' },
      { key: 'EXCELLENT', label: t('classifications.EXCELLENT.label'), color: '#81b64c' },
      { key: 'GOOD', label: t('classifications.GOOD.label'), color: '#95af8a' },
      { key: 'BOOK', label: t('classifications.BOOK.label'), color: '#a88865' },
      { key: 'NOVELTY', label: t('classifications.NOVELTY.label'), color: '#9333ea' },
      { key: 'INACCURACY', label: t('classifications.INACCURACY.label'), color: '#f0c15c' },
      { key: 'MISTAKE', label: t('classifications.MISTAKE.label'), color: '#ffa459' },
      { key: 'BLUNDER', label: t('classifications.BLUNDER.label'), color: '#fa412d' },
      { key: 'MISS', label: t('classifications.MISS.label'), color: '#ff7769' },
    ],
    [t]
  );

  return (
    <div className="flex flex-col bg-[#111117] border border-[#232332] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in duration-300">
      {/* BARRA SUPERIOR: AÇÕES E PROFUNDIDADE */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0d0d12] border-b border-[#1d1d28]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-zinc-200 tracking-wider uppercase">
            {t('dashboard.gameReport')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Seletor de Profundidade */}
          <div className="flex items-center gap-1.5 text-zinc-300 font-mono text-[11px] bg-[#161622] px-2.5 py-1 rounded-lg border border-[#262638]">
            <Cpu className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <select
              value={depth}
              disabled={isAnalyzing}
              onChange={(e) => setDepth && setDepth(Number(e.target.value))}
              className="bg-transparent text-zinc-200 outline-none cursor-pointer text-[11px]"
              title="Profundidade do Stockfish 19"
            >
              <option value={12} className="bg-[#121218] text-zinc-200">{t('dashboard.depth12')}</option>
              <option value={14} className="bg-[#121218] text-zinc-200">{t('dashboard.depth14')}</option>
              <option value={16} className="bg-[#121218] text-zinc-200">{t('dashboard.depth16')}</option>
              <option value={18} className="bg-[#121218] text-zinc-200">{t('dashboard.depth18')}</option>
              <option value={20} className="bg-[#121218] text-zinc-200">{t('dashboard.depth20')}</option>
            </select>
          </div>

          {/* Botão de Refazer Análise */}
          <button
            type="button"
            onClick={onReAnalyze}
            disabled={isAnalyzing}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1e2230] hover:bg-[#272d42] border border-sky-500/30 text-sky-300 hover:text-sky-200 text-xs font-semibold transition"
            title="Calcular novamente a revisão desta partida"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin' : ''}`} />
            <span>{isAnalyzing ? t('dashboard.reviewing') : t('dashboard.review')}</span>
          </button>
        </div>
      </div>

      {/* BARRA DE PROGRESSO DA ANÁLISE SE ESTIVER CALCULANDO */}
      {isAnalyzing && (
        <div className="bg-[#121624] border-b border-sky-500/30 p-3 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-sky-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              {t('dashboard.analyzingWith', { progress: analysisProgress })}
            </span>
            {onStopAnalysis && (
              <button
                type="button"
                onClick={onStopAnalysis}
                className="text-xs px-2.5 py-1 rounded bg-red-950/70 hover:bg-red-900 border border-red-700/50 text-red-300 font-semibold transition"
              >
                {t('dashboard.stop')}
              </button>
            )}
          </div>
          <div className="h-2 rounded-full bg-[#1c1c28] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300"
              style={{ width: `${analysisProgress}%` }}
            />
          </div>
        </div>
      )}

      <div className="p-4 space-y-5">
        {/* RESULTADO OFICIAL DA PARTIDA */}
        {formattedResult && (
          <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0e1017] border border-[#202230] text-xs">
            <span className="text-zinc-400 font-medium text-[11px] uppercase tracking-wider">
              {t('dashboard.gameResult')}
            </span>
            <div className="flex items-center gap-2">
              <span className={`font-mono font-bold px-2 py-0.5 rounded border text-xs ${formattedResult.badgeClass}`}>
                {formattedResult.score}
              </span>
              <span className="font-semibold text-zinc-200">
                {formattedResult.text}
              </span>
            </div>
          </div>
        )}

        {/* GRÁFICO DE AVALIAÇÃO COM DIVISORES DE FASE (MEIO-JOGO / FINAIS) */}
        <div className="relative rounded-xl bg-[#0a0a0f] border border-[#1f1f2d] p-3 shadow-inner">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
            <span>{t('dashboard.advantageGraph')}</span>
            {activePoint && (
              <span className="text-zinc-200">
                {t('dashboard.move')} {Math.floor(activePoint.idx / 2) + 1}
                {activePoint.color === 'w' ? '.' : '...'} {activePoint.san} (
                {activePoint.cp > 0
                  ? `+${(activePoint.cp / 100).toFixed(1)}`
                  : (activePoint.cp / 100).toFixed(1)}
                )
              </span>
            )}
          </div>

          <svg
            viewBox={`0 0 ${graphWidth} ${graphHeight}`}
            className="w-full h-28 overflow-visible select-none cursor-pointer"
            onClick={(e) => {
              if (!onSelectMove || chartPoints.length === 0) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const pct = Math.max(0, Math.min(1, clickX / rect.width));
              const targetIdx = Math.round(pct * (chartPoints.length - 1));
              const node = chartPoints[targetIdx]?.node;
              if (node) onSelectMove(node.id);
            }}
          >
            {/* Linha Zero / Igualdade */}
            <line
              x1="0"
              y1={midY}
              x2={graphWidth}
              y2={midY}
              stroke="#2e2e42"
              strokeDasharray="3 3"
              strokeWidth="1"
            />

            {/* Linha Divisória de Meio-jogo */}
            {midX !== null && chartPoints[middlegameMoveIndex] && (
              <g>
                <line
                  x1={midX}
                  y1="4"
                  x2={midX}
                  y2={graphHeight - 4}
                  stroke="#f59e0b"
                  strokeDasharray="3 2"
                  strokeWidth="1.2"
                  opacity="0.8"
                />
                <circle cx={midX} cy={getCoords(middlegameMoveIndex, chartPoints[middlegameMoveIndex]?.clampedCp || 0).y} r="3" fill="#f59e0b" />
              </g>
            )}

            {/* Linha Divisória de Finais */}
            {endX !== null && chartPoints[endgameMoveIndex] && (
              <g>
                <line
                  x1={endX}
                  y1="4"
                  x2={endX}
                  y2={graphHeight - 4}
                  stroke="#38bdf8"
                  strokeDasharray="3 2"
                  strokeWidth="1.2"
                  opacity="0.8"
                />
                <circle cx={endX} cy={getCoords(endgameMoveIndex, chartPoints[endgameMoveIndex]?.clampedCp || 0).y} r="3" fill="#38bdf8" />
              </g>
            )}

            {/* Traçado da Curva de Avaliação */}
            <path
              d={pathD}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Ponto do Lance Ativo */}
            {activeCoords && (
              <g>
                <line
                  x1={activeCoords.x}
                  y1="0"
                  x2={activeCoords.x}
                  y2={graphHeight}
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <circle
                  cx={activeCoords.x}
                  cy={activeCoords.y}
                  r="5"
                  fill="#38bdf8"
                  stroke="#0a0a0f"
                  strokeWidth="2"
                />
              </g>
            )}
          </svg>

          {/* Rótulos dos Divisores de Fase */}
          <div className="flex items-center justify-between pt-1.5 text-[10px] font-semibold select-none">
            <span className="text-zinc-500">{t('dashboard.opening')}</span>
            {midX !== null && (
              <span className="text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                {t('dashboard.middlegame')}
              </span>
            )}
            {endX !== null && (
              <span className="text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                {t('dashboard.endgame')}
              </span>
            )}
          </div>
        </div>

        {/* SEÇÃO 1: PRECISÃO GERAL (ACCURACY) */}
        <div className="text-center pt-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-3">
            {t('dashboard.accuracy')}
          </span>
          <div className="grid grid-cols-11 items-center max-w-sm mx-auto">
            {/* Brancas */}
            <div className="col-span-5 flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-semibold mb-1 truncate max-w-[140px]">
                <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0 shadow-sm" />
                <span className="truncate">{whitePlayer}</span>
              </div>
              {whiteRating && (
                <span className="text-[10px] font-mono text-zinc-400 mb-1">
                  ({whiteRating})
                </span>
              )}
              <span className="text-3xl font-extrabold text-white tracking-tight">
                {whiteAccuracy}%
              </span>
              {formattedResult && formattedResult.score !== '*' && (
                <span className={`mt-1.5 text-[10px] font-bold px-2 py-0.5 rounded border ${
                  formattedResult.winner === 'w'
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                    : formattedResult.winner === 'draw'
                    ? 'bg-zinc-800 border-zinc-700 text-zinc-300'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-500'
                }`}>
                  {formattedResult.winner === 'w' ? t('dashboard.win') : formattedResult.winner === 'draw' ? t('dashboard.draw') : t('dashboard.loss')}
                </span>
              )}
            </div>

            {/* VS e Placar */}
            <div className="col-span-1 flex flex-col items-center justify-center">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                vs
              </span>
              {formattedResult && formattedResult.score !== '*' && (
                <span className="mt-1 font-mono text-[11px] font-bold text-zinc-300 bg-[#14141e] px-1.5 py-0.5 rounded border border-[#252536] whitespace-nowrap">
                  {formattedResult.score}
                </span>
              )}
            </div>

            {/* Pretas */}
            <div className="col-span-5 flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-semibold mb-1 truncate max-w-[140px]">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600 shrink-0 shadow-sm" />
                <span className="truncate">{blackPlayer}</span>
              </div>
              {blackRating && (
                <span className="text-[10px] font-mono text-zinc-400 mb-1">
                  ({blackRating})
                </span>
              )}
              <span className="text-3xl font-extrabold text-white tracking-tight">
                {blackAccuracy}%
              </span>
              {formattedResult && formattedResult.score !== '*' && (
                <span className={`mt-1.5 text-[10px] font-bold px-2 py-0.5 rounded border ${
                  formattedResult.winner === 'b'
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                    : formattedResult.winner === 'draw'
                    ? 'bg-zinc-800 border-zinc-700 text-zinc-300'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-500'
                }`}>
                  {formattedResult.winner === 'b' ? t('dashboard.win') : formattedResult.winner === 'draw' ? t('dashboard.draw') : t('dashboard.loss')}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="h-px bg-[#1d1d2b]" />

        {/* SEÇÃO 2: PRECISÃO POR FASE (BY PHASE - PARÂMETROS DO LICHESS) */}
        <div className="space-y-3.5">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block text-center">
            {t('dashboard.accuracyByPhase')}
          </span>

          {/* FASE: ABERTURA */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider block text-center">
              {t('dashboard.opening')}
            </span>
            <div className="grid grid-cols-12 items-center gap-2 text-xs font-mono font-bold">
              <span className="col-span-2 text-right text-white font-bold">
                {phaseData.opening.white !== null ? `${phaseData.opening.white}%` : '--'}
              </span>
              <div className="col-span-8 flex items-center gap-1.5 h-3 bg-[#161622] rounded-full p-0.5 border border-[#262638]">
                {/* Barra Brancas (preenche da direita para esquerda em direção ao centro) */}
                <div className="w-1/2 flex justify-end">
                  <div
                    style={{ width: `${Math.min(100, phaseData.opening.white || 0)}%` }}
                    className="h-2 rounded-full bg-emerald-400 shadow-sm transition-all duration-500"
                  />
                </div>
                {/* Barra Pretas (preenche da esquerda para direita partindo do centro) */}
                <div className="w-1/2 flex justify-start">
                  <div
                    style={{ width: `${Math.min(100, phaseData.opening.black || 0)}%` }}
                    className="h-2 rounded-full bg-teal-400 shadow-sm transition-all duration-500"
                  />
                </div>
              </div>
              <span className="col-span-2 text-left text-white font-bold">
                {phaseData.opening.black !== null ? `${phaseData.opening.black}%` : '--'}
              </span>
            </div>
          </div>

          {/* FASE: MEIO-JOGO */}
          {phaseData.middlegame.moveCount > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider block text-center">
                {t('dashboard.middlegame')}
              </span>
              <div className="grid grid-cols-12 items-center gap-2 text-xs font-mono font-bold">
                <span className="col-span-2 text-right text-white font-bold">
                  {phaseData.middlegame.white !== null ? `${phaseData.middlegame.white}%` : '--'}
                </span>
                <div className="col-span-8 flex items-center gap-1.5 h-3 bg-[#161622] rounded-full p-0.5 border border-[#262638]">
                  <div className="w-1/2 flex justify-end">
                    <div
                      style={{ width: `${Math.min(100, phaseData.middlegame.white || 0)}%` }}
                      className="h-2 rounded-full bg-emerald-400 shadow-sm transition-all duration-500"
                    />
                  </div>
                  <div className="w-1/2 flex justify-start">
                    <div
                      style={{ width: `${Math.min(100, phaseData.middlegame.black || 0)}%` }}
                      className="h-2 rounded-full bg-teal-400 shadow-sm transition-all duration-500"
                    />
                  </div>
                </div>
                <span className="col-span-2 text-left text-white font-bold">
                  {phaseData.middlegame.black !== null ? `${phaseData.middlegame.black}%` : '--'}
                </span>
              </div>
            </div>
          )}

          {/* FASE: FINAIS */}
          {phaseData.endgame.moveCount > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider block text-center">
                {t('dashboard.endgame')}
              </span>
              <div className="grid grid-cols-12 items-center gap-2 text-xs font-mono font-bold">
                <span className="col-span-2 text-right text-white font-bold">
                  {phaseData.endgame.white !== null ? `${phaseData.endgame.white}%` : '--'}
                </span>
                <div className="col-span-8 flex items-center gap-1.5 h-3 bg-[#161622] rounded-full p-0.5 border border-[#262638]">
                  <div className="w-1/2 flex justify-end">
                    <div
                      style={{ width: `${Math.min(100, phaseData.endgame.white || 0)}%` }}
                      className="h-2 rounded-full bg-emerald-400 shadow-sm transition-all duration-500"
                    />
                  </div>
                  <div className="w-1/2 flex justify-start">
                    <div
                      style={{ width: `${Math.min(100, phaseData.endgame.black || 0)}%` }}
                      className="h-2 rounded-full bg-teal-400 shadow-sm transition-all duration-500"
                    />
                  </div>
                </div>
                <span className="col-span-2 text-left text-white font-bold">
                  {phaseData.endgame.black !== null ? `${phaseData.endgame.black}%` : '--'}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="h-px bg-[#1d1d2b]" />

        {/* SEÇÃO 3: CLASSIFICAÇÃO DE LANCES (TABELA COMPARATIVA CHESS.COM STYLE) */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block text-center mb-3">
            {t('dashboard.moveClassifications')}
          </span>

          <div className="space-y-1.5 max-w-sm mx-auto">
            {classificationRows.map(({ key, label, color }) => {
              const countW = classificationCounts.w[key] || 0;
              const countB = classificationCounts.b[key] || 0;

              return (
                <div
                  key={key}
                  className="grid grid-cols-11 items-center px-3 py-1 rounded-lg bg-[#0d0d14] hover:bg-[#151520] transition select-none text-xs"
                >
                  {/* Contagem Brancas */}
                  <span
                    className={`col-span-3 text-right font-mono font-bold pr-3 ${
                      countW > 0 ? 'text-white' : 'text-zinc-600'
                    }`}
                  >
                    {countW}
                  </span>

                  {/* Ícone e Nome da Classificação */}
                  <div className="col-span-5 flex items-center justify-start gap-2 pl-2">
                    <ClassificationBadge id={key} size="xs" />
                    <span
                      style={{ color }}
                      className="font-semibold text-xs truncate"
                    >
                      {label}
                    </span>
                  </div>

                  {/* Contagem Pretas */}
                  <span
                    className={`col-span-3 text-left font-mono font-bold pl-3 ${
                      countB > 0 ? 'text-white' : 'text-zinc-600'
                    }`}
                  >
                    {countB}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEÇÃO 4: GRÁFICO DE RELÓGIO E USO DE TEMPO */}
        {mainlineNodes.filter((n) => Boolean(n?.clk)).length >= 2 && (
          <div className="pt-2">
            <ClockChartPanel
              mainlineNodes={mainlineNodes}
              activeNodeId={currentMove?.id}
              onSelectNodeId={onSelectMove}
            />
          </div>
        )}
      </div>
    </div>
  );
}
