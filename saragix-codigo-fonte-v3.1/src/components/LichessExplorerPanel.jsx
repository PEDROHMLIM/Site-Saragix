import React, { useState, useEffect } from 'react';
import { Database, Settings, Loader2, Download, CheckCircle2, Trophy, Users, Filter, ExternalLink, RefreshCw } from 'lucide-react';
import { fetchLichessExplorer, fetchGamePgn } from '../utils/lichessExplorer';
import { KnightIcon } from './ChessPieceIcon';

export default function LichessExplorerPanel({ currentFen, onSelectMove, onImportPgn }) {
  // Modo de Base: 'masters' (Mestres FIDE 2200+) ou 'lichess' (Comunidade Lichess)
  const [dbMode, setDbMode] = useState('masters');
  const [showSettings, setShowSettings] = useState(false);

  // Filtros de Ritmo e Faixa de Rating da Base Lichess
  const [speeds, setSpeeds] = useState(['blitz', 'rapid', 'classical']);
  const [ratings, setRatings] = useState([1800, 2000, 2200, 2500]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [importingId, setImportingId] = useState(null);
  const [importSuccessId, setImportSuccessId] = useState(null);

  // Identifica se estamos na posição inicial do tabuleiro (lance 0)
  const isStartingPosition =
    !currentFen ||
    currentFen.trim().startsWith('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');

  // Consulta a base de dados do Lichess sempre que a posição, modo ou filtros mudam
  useEffect(() => {
    let active = true;
    if (!currentFen) return;

    setLoading(true);
    fetchLichessExplorer({
      fen: currentFen,
      mode: dbMode,
      speeds,
      ratings,
    }).then((res) => {
      if (active) {
        setData(res);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [currentFen, dbMode, speeds, ratings]);

  const handleImportGame = async (gameId, e) => {
    if (e) e.stopPropagation();
    if (!gameId || !onImportPgn) return;
    setImportingId(gameId);
    try {
      const pgn = await fetchGamePgn(gameId);
      if (pgn) {
        onImportPgn(pgn);
        setImportSuccessId(gameId);
        setTimeout(() => setImportSuccessId(null), 3000);
      }
    } catch (err) {
      console.error('Erro ao importar partida:', err);
    } finally {
      setImportingId(null);
    }
  };

  const toggleSpeed = (sp) => {
    setSpeeds((prev) =>
      prev.includes(sp) ? (prev.length > 1 ? prev.filter((s) => s !== sp) : prev) : [...prev, sp]
    );
  };

  const toggleRating = (r) => {
    setRatings((prev) =>
      prev.includes(r) ? (prev.length > 1 ? prev.filter((item) => item !== r) : prev) : [...prev, r]
    );
  };

  const formatSanWithGlyphs = (san) => {
    return san || '';
  };

  const getPlayerName = (playerObj) => {
    if (!playerObj) return 'Anônimo';
    if (typeof playerObj === 'string') return playerObj;
    return playerObj.name || 'Anônimo';
  };

  const getPlayerRating = (playerObj) => {
    if (!playerObj) return '';
    if (typeof playerObj === 'object' && playerObj.rating) {
      return `(${playerObj.rating})`;
    }
    return '';
  };

  const formatGameResult = (winner) => {
    if (winner === 'white') return '1 - 0';
    if (winner === 'black') return '0 - 1';
    return '½ - ½';
  };

  return (
    <div className="flex flex-col h-full bg-[#0d0d12] text-xs">
      {/* SELETOR DE BASE: MESTRES FIDE vs LICHESS COMUNIDADE */}
      <div className="p-2.5 bg-[#0a0a0f] border-b border-[#1c1c28] flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 p-0.5 rounded-lg bg-[#14141d] border border-[#232332]">
          <button
            type="button"
            onClick={() => setDbMode('masters')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
              dbMode === 'masters'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
            }`}
            title="Base oficial de Mestres FIDE (Partidas clássicas/torneio de 2200+ desde 1952)"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Mestres FIDE</span>
          </button>

          <button
            type="button"
            onClick={() => setDbMode('lichess')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
              dbMode === 'lichess'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
            }`}
            title="Base oficial da Comunidade Lichess (Centenas de milhões de partidas por rating)"
          >
            <Users className="w-3.5 h-3.5 text-sky-400" />
            <span>Lichess</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {data && (
            <span className="text-[11px] font-mono text-zinc-400">
              {data.formattedTotal} partidas
            </span>
          )}
          {dbMode === 'lichess' && (
            <button
              type="button"
              onClick={() => setShowSettings((s) => !s)}
              className={`p-1.5 rounded-lg border transition ${
                showSettings
                  ? 'bg-[#222233] border-zinc-500 text-white'
                  : 'border-[#22222e] text-zinc-400 hover:text-zinc-200'
              }`}
              title="Filtros da Base Lichess (Ritmo e Faixa de Rating)"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* CABEÇALHO DA ABERTURA DETECTADA */}
      <div className="flex items-center justify-between border-b border-[#1b1b26] px-3.5 py-2 bg-[#0e0e16]">
        <div className="flex items-center gap-2 min-w-0">
          <KnightIcon className="w-4 h-4 text-sky-400 shrink-0" />
          <span className="text-zinc-200 font-bold text-xs tracking-wide truncate">
            {data?.opening
              ? `${data.opening.eco} — ${data.opening.name}`
              : 'Posição em Estudo'}
          </span>
        </div>

        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider shrink-0">
          {dbMode === 'masters' ? 'FIDE 2200+' : 'Comunidade'}
        </span>
      </div>

      {/* FILTROS DE RITMO / RATING DA COMUNIDADE EXPANSÍVEIS (⚙️) */}
      {showSettings && dbMode === 'lichess' && (
        <div className="p-3 bg-[#12121a] border-b border-[#252535] space-y-2.5 animate-in fade-in">
          <div>
            <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">
              Ritmo de Jogo:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['bullet', 'blitz', 'rapid', 'classical'].map((sp) => (
                <button
                  key={sp}
                  type="button"
                  onClick={() => toggleSpeed(sp)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono capitalize transition ${
                    speeds.includes(sp)
                      ? 'bg-sky-500 text-white font-semibold'
                      : 'bg-[#181822] text-zinc-400 border border-[#262635]'
                  }`}
                >
                  {sp}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">
              Faixas de Rating (Lichess):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[1600, 1800, 2000, 2200, 2500].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => toggleRating(r)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                    ratings.includes(r)
                      ? 'bg-amber-500 text-zinc-950 font-bold'
                      : 'bg-[#181822] text-zinc-400 border border-[#262635]'
                  }`}
                >
                  {r}+
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CABEÇALHO DA TABELA (Movimentos | Partidas | Brancas / Empate / Pretas) */}
      <div className="grid grid-cols-12 px-3.5 py-1.5 text-[11px] text-zinc-400 border-b border-[#1b1b24] select-none font-medium bg-[#0a0a0f]">
        <div className="col-span-3">Movimento</div>
        <div className="col-span-4 text-center">Partidas</div>
        <div className="col-span-5 text-right pr-2">Brancas / Empate / Pretas</div>
      </div>

      {/* ESTADO DE CARREGAMENTO */}
      {loading && (
        <div className="py-8 flex flex-col items-center justify-center gap-2 text-zinc-400">
          <Loader2 className="w-5 h-5 animate-spin text-sky-400" />
          <span className="text-xs">
            {dbMode === 'masters'
              ? 'Consultando Base de Mestres FIDE...'
              : 'Consultando Base do Lichess...'}
          </span>
        </div>
      )}

      {/* LISTA DE LANCES COM AS BARRAS DE VITÓRIA IDÊNTICAS AO LICHESS */}
      {!loading && data && data.moves.length > 0 && (
        <div className="flex-1 overflow-y-auto divide-y divide-[#161620]">
          {data.moves.map((m) => (
            <div
              key={m.uci}
              onClick={() => onSelectMove && onSelectMove(m.san, m.uci)}
              className="grid grid-cols-12 items-center px-3.5 py-1.5 hover:bg-[#151520] cursor-pointer transition group select-none text-xs"
              title={`Jogar ${m.san} (${m.formattedTotal} partidas • Brancas ${m.whitePct}%, Empates ${m.drawPct}%, Pretas ${m.blackPct}%)`}
            >
              {/* Coluna 1: Lance em Notação SAN */}
              <div className="col-span-3 font-mono font-bold text-zinc-200 group-hover:text-sky-300 transition text-[13px] flex items-center gap-1">
                <span>{formatSanWithGlyphs(m.san)}</span>
              </div>

              {/* Coluna 2: Partidas (% share e total) */}
              <div className="col-span-4 flex items-center justify-center gap-2 font-mono text-[11px]">
                <span className="text-zinc-400 text-right min-w-[28px]">{m.sharePct}%</span>
                <span className="text-zinc-200 text-left min-w-[42px] font-medium">{m.formattedTotal}</span>
              </div>

              {/* Coluna 3: Barrinha de Resultados Segmentada (Brancas / Empate / Pretas) */}
              <div className="col-span-5 flex items-center justify-end pl-1">
                <div className="w-full max-w-[135px] h-[19px] rounded-full overflow-hidden flex bg-[#161620] border border-[#2a2a38] text-[10px] font-mono font-bold leading-none select-none relative shadow-inner">
                  {/* Segmento Brancas */}
                  <div
                    style={{ width: `${m.whitePct}%` }}
                    className="bg-[#c2c2c9] text-zinc-950 flex items-center justify-center transition-all duration-300 min-w-0 overflow-hidden"
                  >
                    {m.whitePct >= 15 && `${m.whitePct}%`}
                  </div>

                  {/* Segmento Empate */}
                  <div
                    style={{ width: `${m.drawPct}%` }}
                    className="bg-[#52525e] text-zinc-300 flex items-center justify-center transition-all duration-300 min-w-0 overflow-hidden"
                  >
                    {m.drawPct >= 18 && `${m.drawPct}%`}
                  </div>

                  {/* Segmento Pretas */}
                  <div
                    style={{ width: `${m.blackPct}%` }}
                    className="bg-[#18181e] text-zinc-200 flex items-center justify-center transition-all duration-300 min-w-0 overflow-hidden"
                  >
                    {m.blackPct >= 15 && `${m.blackPct}%`}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* LINHA DE TOTAIS NO RODAPÉ (Σ 100% total) */}
          <div className="grid grid-cols-12 items-center px-3.5 py-2 bg-[#0a0a0f] border-t border-[#222230] text-xs font-mono font-bold">
            <div className="col-span-3 text-white flex items-center gap-1">
              <span>Σ</span>
            </div>

            <div className="col-span-4 flex items-center justify-center gap-2 text-[11px]">
              <span className="text-zinc-400 text-right min-w-[28px]">100%</span>
              <span className="text-white text-left min-w-[42px]">{data.formattedTotal}</span>
            </div>

            <div className="col-span-5 flex items-center justify-end pl-1">
              <div className="w-full max-w-[135px] h-[19px] rounded-full overflow-hidden flex bg-[#161620] border border-[#2a2a38] text-[10px] font-mono font-bold leading-none select-none shadow-inner">
                <div
                  style={{ width: `${data.whitePct}%` }}
                  className="bg-[#c2c2c9] text-zinc-950 flex items-center justify-center transition-all duration-300 min-w-0 overflow-hidden"
                >
                  {data.whitePct >= 15 && `${data.whitePct}%`}
                </div>
                <div
                  style={{ width: `${data.drawPct}%` }}
                  className="bg-[#52525e] text-zinc-300 flex items-center justify-center transition-all duration-300 min-w-0 overflow-hidden"
                >
                  {data.drawPct >= 18 && `${data.drawPct}%`}
                </div>
                <div
                  style={{ width: `${data.blackPct}%` }}
                  className="bg-[#18181e] text-zinc-200 flex items-center justify-center transition-all duration-300 min-w-0 overflow-hidden"
                >
                  {data.blackPct >= 15 && `${data.blackPct}%`}
                </div>
              </div>
            </div>
          </div>

          {/* PARTIDAS DE MESTRES NA POSIÇÃO (Com 1-clique para importar) */}
          {!isStartingPosition && data.topGames && data.topGames.length > 0 && (
            <div className="mt-2 border-t border-[#1e1e2c] pt-2 px-3 pb-3">
              <div className="text-[10px] uppercase font-bold text-zinc-400 mb-1.5 flex items-center justify-between">
                <span>Partidas de Mestres nesta posição:</span>
                <span className="text-[9px] text-zinc-500 font-normal lowercase">clique para importar</span>
              </div>
              <div className="space-y-1">
                {data.topGames.slice(0, 8).map((g) => {
                  const whiteName = getPlayerName(g.white);
                  const blackName = getPlayerName(g.black);
                  const whiteRating = getPlayerRating(g.white);
                  const blackRating = getPlayerRating(g.black);
                  const resultText = formatGameResult(g.winner);
                  const isImporting = importingId === g.id;
                  const isSuccess = importSuccessId === g.id;

                  return (
                    <div
                      key={g.id}
                      onClick={(e) => handleImportGame(g.id, e)}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#111119] hover:bg-[#181824] border border-[#1d1d2b] hover:border-sky-500/40 cursor-pointer transition text-[11px] group"
                      title="Clique para carregar esta partida no tabuleiro de análise"
                    >
                      <div className="truncate max-w-[245px] flex items-center gap-1.5 flex-wrap">
                        <span className="text-zinc-200 font-semibold group-hover:text-sky-300 transition">
                          {whiteName}
                        </span>
                        {whiteRating && (
                          <span className="text-[10px] text-amber-400 font-mono">
                            {whiteRating}
                          </span>
                        )}
                        <span className="text-zinc-400 font-mono font-bold text-[10px] px-1 rounded bg-[#181822]">
                          {resultText}
                        </span>
                        <span className="text-zinc-300 font-medium">
                          {blackName}
                        </span>
                        {blackRating && (
                          <span className="text-[10px] text-amber-400 font-mono">
                            {blackRating}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {g.year && <span className="text-[10px] text-zinc-500 font-mono">{g.year}</span>}
                        {isImporting ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
                        ) : isSuccess ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Download className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* CASO VAZIO (Fim do livro / Sem partidas nesta linha) */}
      {!loading && (!data || data.moves.length === 0) && (
        <div className="p-8 text-center text-zinc-500 text-xs space-y-2 my-auto">
          <Database className="w-8 h-8 mx-auto opacity-30" />
          <p className="text-zinc-400 font-medium">Nenhuma partida registrada nesta posição.</p>
          <p className="text-[11px] text-zinc-600">
            Esta linha já saiu da base de aberturas {dbMode === 'masters' ? 'de Mestres FIDE' : 'do Lichess'}.
          </p>
        </div>
      )}
    </div>
  );
}
