import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from 'recharts';
import { Clock, AlertTriangle, Hourglass } from 'lucide-react';
import { buildClockAnalytics } from '../utils/clockAnalytics';
import { useTranslation } from '../i18n';

export default function ClockChartPanel({ mainlineNodes, activeNodeId, onSelectNodeId }) {
  const { t } = useTranslation();

  const analytics = useMemo(() => {
    return buildClockAnalytics(mainlineNodes);
  }, [mainlineNodes]);

  if (!analytics.hasClockData || analytics.points.length === 0) {
    return (
      <div className="bg-[#101016] border border-[#232332] rounded-xl p-4 text-center text-xs text-zinc-400 space-y-1">
        <Clock className="w-5 h-5 mx-auto text-zinc-400 mb-1" />
        <p className="font-semibold text-zinc-300">
          {t('clockChart.noDataTitle') || 'Sem informacoes de relogio'}
        </p>
        <p className="text-[11px] text-zinc-400">
          {t('clockChart.noDataDesc') || 'Este PGN nao contem marcadores [%clk] para geracao do grafico de tempo.'}
        </p>
      </div>
    );
  }

  const { points, stats } = analytics;

  return (
    <div className="bg-[#101016] border border-[#232332] rounded-xl p-3.5 space-y-3 shadow-lg">
      <div className="flex items-center justify-between border-b border-[#1f1f2c] pb-2">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold text-zinc-200">
            {t('clockChart.title') || 'Tempo Gasto por Lance (Relogio)'}
          </span>
        </div>
        <span className="text-[10px] text-zinc-400 bg-[#191924] px-2 py-0.5 rounded border border-[#252536]">
          {points.length} {t('clockChart.plies') || 'lances com relogio'}
        </span>
      </div>

      {/* Cartoes de Estatisticas de Tempo */}
      {stats && (
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-[#15151f] border border-[#242433] rounded-lg p-2 space-y-1">
            <span className="text-[10px] text-zinc-400 block font-semibold">
              {t('clockChart.whiteLongest') || 'Brancas: Lance Mais Pensado'}
            </span>
            {stats.whiteLongestThink ? (
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono font-bold text-zinc-200">
                  {stats.whiteLongestThink.san}
                </span>
                <span className="text-sky-400 font-semibold">
                  {stats.whiteLongestThink.seconds}s
                </span>
              </div>
            ) : (
              <span className="text-[11px] text-zinc-400">--</span>
            )}
            {stats.whiteLowTimeMoves > 0 && (
              <span className="text-[10px] text-amber-400 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 shrink-0" />
                {stats.whiteLowTimeMoves} {t('clockChart.lowTimeMoves') || 'em apuro (<30s)'}
              </span>
            )}
          </div>

          <div className="bg-[#15151f] border border-[#242433] rounded-lg p-2 space-y-1">
            <span className="text-[10px] text-zinc-400 block font-semibold">
              {t('clockChart.blackLongest') || 'Pretas: Lance Mais Pensado'}
            </span>
            {stats.blackLongestThink ? (
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono font-bold text-zinc-200">
                  {stats.blackLongestThink.san}
                </span>
                <span className="text-sky-400 font-semibold">
                  {stats.blackLongestThink.seconds}s
                </span>
              </div>
            ) : (
              <span className="text-[11px] text-zinc-400">--</span>
            )}
            {stats.blackLowTimeMoves > 0 && (
              <span className="text-[10px] text-amber-400 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 shrink-0" />
                {stats.blackLowTimeMoves} {t('clockChart.lowTimeMoves') || 'em apuro (<30s)'}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Grafico de Barras de Tempo Gasto */}
      <div className="h-36 w-full pt-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={points}
            margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
            onClick={(e) => {
              if (e && e.activePayload && e.activePayload[0]) {
                const targetNodeId = e.activePayload[0].payload.nodeId;
                if (targetNodeId && onSelectNodeId) {
                  onSelectNodeId(targetNodeId);
                }
              }
            }}
          >
            <CartesianGrid stroke="#1f1f2e" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="san" tick={{ fill: '#71717a', fontSize: 10 }} interval="preserveStartEnd" />
            <YAxis tick={{ fill: '#71717a', fontSize: 10 }} unit="s" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const d = payload[0].payload;
                  return (
                    <div className="bg-[#12121a] border border-[#28283a] p-2 rounded shadow-xl text-xs space-y-1">
                      <div className="font-bold text-zinc-200">
                        {d.color === 'w' ? `${d.moveNumber}. ` : `${d.moveNumber}... `}
                        {d.san}
                      </div>
                      <div className="text-sky-400">
                        {t('clockChart.spent') || 'Tempo gasto:'} <span className="font-bold">{d.formattedSpent}</span>
                      </div>
                      <div className="text-zinc-400 text-[10px]">
                        {t('clockChart.remaining') || 'Restante no relogio:'} {d.clk}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="timeSpent" radius={[2, 2, 0, 0]}>
              {points.map((entry) => {
                const isActive = entry.nodeId === activeNodeId;
                const isWhite = entry.color === 'w';
                let fillColor = isWhite ? '#e2e8f0' : '#475569';
                if (isActive) fillColor = '#38bdf8';
                return <Cell key={entry.idx} fill={fillColor} cursor="pointer" />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-slate-200 rounded-sm inline-block" />
            {t('clockChart.whiteMoves') || 'Brancas'}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-slate-600 rounded-sm inline-block" />
            {t('clockChart.blackMoves') || 'Pretas'}
          </span>
        </div>
        <span className="text-zinc-400">
          {t('clockChart.clickToJump') || 'Clique na barra para navegar ate o lance'}
        </span>
      </div>
    </div>
  );
}
