import React, { useEffect, useState } from 'react';
import { ShieldAlert, Trophy, MinusCircle, ArrowRight } from 'lucide-react';
import { countFenPieces, fetchTablebase, getTablebaseFromCache } from '../utils/tablebaseService';
import { useTranslation } from '../i18n';

export default function TablebaseCard({ currentFen, onSelectMove }) {
  const { t } = useTranslation();
  const [data, setData] = useState(() => getTablebaseFromCache(currentFen));
  const [loading, setLoading] = useState(false);

  const pieceCount = countFenPieces(currentFen);
  const isTablebaseRange = pieceCount <= 7;

  useEffect(() => {
    if (!isTablebaseRange || !currentFen) {
      setData(null);
      setLoading(false);
      return;
    }

    const cached = getTablebaseFromCache(currentFen);
    if (cached) {
      setData(cached);
      setLoading(false);
      return;
    }

    let active = true;
    setLoading(true);

    fetchTablebase(currentFen)
      .then((res) => {
        if (active) {
          setData(res);
          setLoading(false);
        }
      })
      .catch(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [currentFen, isTablebaseRange]);

  if (!isTablebaseRange || (!loading && !data)) {
    return null;
  }

  // Define status visual e traducao
  let categoryLabel = t('tablebase.evaluating') || 'Consultando base de finais...';
  let badgeColor = 'bg-zinc-800 text-zinc-300 border-zinc-700';

  if (data) {
    if (data.checkmate || (data.dtm === 0 && (data.category === 'loss' || data.category === 'win'))) {
      categoryLabel = t('tablebase.checkmate') || 'Xeque-mate';
      badgeColor = data.category === 'win'
        ? 'bg-emerald-950/70 text-emerald-300 border-emerald-700'
        : 'bg-red-950/70 text-red-300 border-red-700';
    } else if (data.stalemate) {
      categoryLabel = t('tablebase.stalemate') || 'Afogamento';
      badgeColor = 'bg-amber-950/70 text-amber-300 border-amber-700';
    } else if (data.category === 'win') {
      categoryLabel = t('tablebase.win') || 'Vitoria Forcada';
      badgeColor = 'bg-emerald-950/70 text-emerald-300 border-emerald-700';
    } else if (data.category === 'loss') {
      categoryLabel = t('tablebase.loss') || 'Derrota Forcada';
      badgeColor = 'bg-red-950/70 text-red-300 border-red-700';
    } else if (data.category === 'draw') {
      categoryLabel = t('tablebase.draw') || 'Empate Teorico';
      badgeColor = 'bg-amber-950/70 text-amber-300 border-amber-700';
    } else if (data.dtm !== null) {
      categoryLabel = Math.abs(data.dtm) === 0 ? (t('tablebase.checkmate') || 'Xeque-mate') : (t('tablebase.win') || 'Final Teorico');
      badgeColor = 'bg-emerald-950/70 text-emerald-300 border-emerald-700';
    }
  }

  return (
    <div className="bg-[#121218] border border-[#262635] rounded-xl p-3 text-xs space-y-2 shadow-lg animate-in fade-in duration-200">
      <div className="flex items-center justify-between gap-2 border-b border-[#20202d] pb-2">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0" />
          <span className="font-semibold text-zinc-200">
            {t('tablebase.title') || 'Final Teorico Syzygy'}
          </span>
          <span className="text-[10px] text-zinc-400 bg-[#1c1c27] px-1.5 py-0.5 rounded border border-[#2a2a3b]">
            {pieceCount} {t('tablebase.pieces') || 'pecas'}
          </span>
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border transition-colors ${badgeColor}`}>
          {loading && !data ? (t('tablebase.loading') || 'Carregando...') : categoryLabel}
        </span>
      </div>

      {data && (
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span>
              {data.dtm !== null
                ? `${t('tablebase.mateIn') || 'Mate em'} ${Math.abs(data.dtm)} ${t('tablebase.moves') || 'lances'}`
                : data.dtz !== null
                ? `${t('tablebase.conversionIn') || 'Conversao em'} ${Math.abs(data.dtz)} ${t('tablebase.moves') || 'lances'}`
                : (t('tablebase.exactResult') || 'Resultado exato garantido')}
            </span>
            {data.stalemate && (
              <span className="text-amber-400 font-semibold">{t('tablebase.stalemate') || 'Afogamento'}</span>
            )}
            {data.checkmate && (
              <span className="text-emerald-400 font-semibold">{t('tablebase.checkmate') || 'Xeque-mate'}</span>
            )}
          </div>

          {Array.isArray(data.moves) && data.moves.length > 0 && (
            <div className="pt-1">
              <span className="text-[10px] text-zinc-400 block mb-1">
                {t('tablebase.bestMoves') || 'Melhores Lances da Tabela:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {data.moves.map((m, idx) => {
                  const isWin = m.category === 'win';
                  const isDraw = m.category === 'draw';
                  const btnColor = isWin
                    ? 'border-emerald-800 text-emerald-300 hover:bg-emerald-950/60'
                    : isDraw
                    ? 'border-amber-800 text-amber-300 hover:bg-amber-950/60'
                    : 'border-red-800 text-red-300 hover:bg-red-950/60';

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onSelectMove && onSelectMove(m.uci)}
                      className={`px-2 py-1 bg-[#181822] border rounded text-[11px] font-mono flex items-center gap-1 transition ${btnColor}`}
                    >
                      <span className="font-bold">{m.san || m.uci}</span>
                      {m.dtm !== null && (
                        <span className="text-[9px] opacity-75">M{Math.abs(m.dtm)}</span>
                      )}
                      <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
