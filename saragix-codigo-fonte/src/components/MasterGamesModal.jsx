import React, { useState, useMemo } from 'react';
import {
  Trophy,
  Search,
  X,
  Play,
  Copy,
  Check,
  Download,
  Calendar,
  MapPin,
  BookOpen,
  Filter,
  Flame,
  Award,
  Globe,
  ChevronRight,
} from 'lucide-react';
import {
  getAllMasterGames,
  searchMasterGames,
  WORLD_CHAMPIONS_LIST,
} from '../data/masterLibrary.js';
import TitleBadge from './TitleBadge';
import { PlayerFlagRect } from './PlayerBroadcastBar';

export default function MasterGamesModal({ isOpen, onClose, onLoadGameIntoAnalysis }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedChampion, setSelectedChampion] = useState('');
  const [selectedEra, setSelectedEra] = useState('');
  const [selectedResult, setSelectedResult] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [displayLimit, setDisplayLimit] = useState(24);

  // Filtra as partidas em tempo real
  const filteredGames = useMemo(() => {
    return searchMasterGames({
      query: searchQuery,
      category: selectedCategory,
      championFilter: selectedChampion,
      eraFilter: selectedEra,
      resultFilter: selectedResult,
    });
  }, [searchQuery, selectedCategory, selectedChampion, selectedEra, selectedResult]);

  // Partidas visíveis limitadas para performance instantânea
  const visibleGames = useMemo(() => {
    return filteredGames.slice(0, displayLimit);
  }, [filteredGames, displayLimit]);

  if (!isOpen) return null;

  const handleCopyPgn = (game) => {
    if (!game.pgn) return;
    navigator.clipboard.writeText(game.pgn.trim()).then(() => {
      setCopiedId(game.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleDownloadPgn = (game) => {
    if (!game.pgn) return;
    const blob = new Blob([game.pgn.trim()], { type: 'application/x-chess-pgn;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeTitle = `${game.white?.name || 'Brancas'}_vs_${game.black?.name || 'Pretas'}_${game.year || ''}`
      .replace(/[^a-zA-Z0-9_-]/g, '_');
    link.href = url;
    link.download = `${safeTitle}.pgn`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSelectGame = (game) => {
    if (!game.pgn) return;
    onLoadGameIntoAnalysis(game.pgn);
    onClose();
  };

  const CATEGORIES = [
    { id: 'all', label: 'Todas as Partidas', icon: Globe },
    { id: 'champions', label: 'Campeões Mundiais', icon: Trophy },
    { id: 'immortal', label: 'Partidas Imortais', icon: Flame },
    { id: 'brazil', label: 'Mestres do Brasil', icon: Award },
    { id: 'world_championships', label: 'Matches de Título', icon: BookOpen },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-5xl max-h-[92vh] bg-[#111116] border border-[#272733] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-5 py-4 border-b border-[#22222d] bg-[#14141a] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1d1d26] border border-[#2e2e3d] flex items-center justify-center text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                  Biblioteca de Mestres
                </h2>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {filteredGames.length} Partidas
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Coleção curada de obras-primas, campeonatos mundiais e partidas históricas da FIDE.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#1a1a22] hover:bg-[#252532] text-zinc-400 hover:text-white transition flex items-center justify-center border border-[#2a2a38]"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Barra de Filtros e Busca */}
        <div className="p-4 border-b border-[#1f1f28] bg-[#0d0d12] space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5">
            {/* Campo de Busca Livre */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDisplayLimit(24);
                }}
                placeholder="Buscar por jogador, abertura, ECO, ano ou evento (ex: Fischer, Kasparov, Supi, C97)..."
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#15151c] border border-[#272736] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Filtro por Campeão Mundial */}
            <select
              value={selectedChampion}
              onChange={(e) => {
                setSelectedChampion(e.target.value);
                setDisplayLimit(24);
              }}
              className="px-3 py-2 rounded-xl bg-[#15151c] border border-[#272736] text-xs text-zinc-300 focus:outline-none focus:border-amber-500/60"
            >
              <option value="">Todos os Campeões Mundiais</option>
              {WORLD_CHAMPIONS_LIST.map((c) => (
                <option key={c.name} value={c.name.split(' ').pop()}>
                  {c.name} ({c.years})
                </option>
              ))}
            </select>

            {/* Filtro por Época */}
            <select
              value={selectedEra}
              onChange={(e) => {
                setSelectedEra(e.target.value);
                setDisplayLimit(24);
              }}
              className="px-3 py-2 rounded-xl bg-[#15151c] border border-[#272736] text-xs text-zinc-300 focus:outline-none focus:border-amber-500/60"
            >
              <option value="">Todas as Épocas</option>
              <option value="romantic">Era Romântica (Século XIX)</option>
              <option value="classical">Era Clássica (1900–1945)</option>
              <option value="soviet">Era Soviética (1946–1990)</option>
              <option value="modern">Era Moderna (1991–Presente)</option>
            </select>

            {/* Filtro por Resultado */}
            <select
              value={selectedResult}
              onChange={(e) => {
                setSelectedResult(e.target.value);
                setDisplayLimit(24);
              }}
              className="px-3 py-2 rounded-xl bg-[#15151c] border border-[#272736] text-xs text-zinc-300 focus:outline-none focus:border-amber-500/60"
            >
              <option value="">Todos os Resultados</option>
              <option value="1-0">1-0 (Vitória Brancas)</option>
              <option value="0-1">0-1 (Vitória Pretas)</option>
              <option value="1/2-1/2">1/2-1/2 (Empate)</option>
            </select>
          </div>

          {/* Abas de Categorias */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setDisplayLimit(24);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                      : 'bg-[#15151c] text-zinc-400 hover:text-zinc-200 border border-[#23232f] hover:border-[#323242]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista / Grid de Partidas */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0d0d10]">
          {filteredGames.length === 0 ? (
            <div className="py-16 text-center text-zinc-400 space-y-2">
              <Search className="w-8 h-8 text-zinc-600 mx-auto" />
              <div className="text-sm font-semibold text-zinc-300">
                Nenhuma partida encontrada com esses critérios
              </div>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Tente limpar o termo de busca ou ajustar os filtros de época e campeão mundial.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedChampion('');
                  setSelectedEra('');
                  setSelectedResult('');
                }}
                className="mt-3 px-3 py-1.5 rounded-lg bg-[#1c1c26] text-xs text-zinc-300 hover:text-white border border-[#2e2e3d] transition"
              >
                Limpar todos os filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {visibleGames.map((game) => {
                const isCopied = copiedId === game.id;
                const resultColor =
                  game.result === '1-0'
                    ? 'text-amber-300 bg-amber-500/10 border-amber-500/20'
                    : game.result === '0-1'
                    ? 'text-sky-300 bg-sky-500/10 border-sky-500/20'
                    : 'text-zinc-300 bg-zinc-500/10 border-zinc-500/20';

                return (
                  <div
                    key={game.id}
                    className="p-3.5 rounded-xl bg-[#14141a] hover:bg-[#181822] border border-[#22222d] hover:border-[#333344] transition flex flex-col justify-between gap-3 group"
                  >
                    <div>
                      {/* Top Bar: Evento, Ano e Resultado */}
                      <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-[#1c1c26]">
                        <div className="flex items-center gap-1.5 truncate pr-2">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                          <span className="font-medium text-zinc-300">{game.year}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="truncate">{game.event || game.site || 'Torneio'}</span>
                        </div>
                        <div
                          className={`px-2 py-0.5 rounded font-mono text-[11px] font-bold border shrink-0 ${resultColor}`}
                        >
                          {game.result}
                        </div>
                      </div>

                      {/* Jogadores: Brancas vs Pretas */}
                      <div className="py-2.5 space-y-1.5">
                        {/* Brancas */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 truncate">
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 border border-zinc-400 shrink-0" />
                            {game.white?.title && <TitleBadge title={game.white.title} />}
                            <span className="text-xs font-semibold text-white truncate">
                              {game.white?.name || 'Brancas'}
                            </span>
                            {game.white?.code && <PlayerFlagRect fedCode={game.white.code} />}
                          </div>
                          {game.white?.rating && (
                            <span className="text-[11px] font-mono text-zinc-400">
                              {game.white.rating}
                            </span>
                          )}
                        </div>

                        {/* Pretas */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 truncate">
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-600 shrink-0" />
                            {game.black?.title && <TitleBadge title={game.black.title} />}
                            <span className="text-xs font-semibold text-white truncate">
                              {game.black?.name || 'Pretas'}
                            </span>
                            {game.black?.code && <PlayerFlagRect fedCode={game.black.code} />}
                          </div>
                          {game.black?.rating && (
                            <span className="text-[11px] font-mono text-zinc-400">
                              {game.black.rating}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Abertura & Destaque Histórico */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                          {game.eco && (
                            <span className="font-mono px-1.5 py-0.2 rounded bg-[#1e1e28] text-amber-300 border border-[#2b2b3b]">
                              {game.eco}
                            </span>
                          )}
                          <span className="truncate text-zinc-300">{game.opening}</span>
                        </div>

                        {game.highlight && (
                          <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed italic pt-1">
                            "{game.highlight}"
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-[#1c1c26] gap-2">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleCopyPgn(game)}
                          className="px-2.5 py-1.5 rounded-lg bg-[#1b1b24] hover:bg-[#252533] text-zinc-300 hover:text-white text-[11px] font-medium border border-[#2b2b3a] transition flex items-center gap-1"
                          title="Copiar PGN"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-zinc-400" />
                              <span>PGN</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => handleDownloadPgn(game)}
                          className="p-1.5 rounded-lg bg-[#1b1b24] hover:bg-[#252533] text-zinc-300 hover:text-white border border-[#2b2b3a] transition"
                          title="Baixar arquivo .pgn"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleSelectGame(game)}
                        className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-amber-200 border border-amber-500/40 text-xs font-semibold transition flex items-center gap-1.5 group-hover:border-amber-400/60"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Analisar Partida</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Botão de carregar mais */}
          {visibleGames.length < filteredGames.length && (
            <div className="py-4 text-center">
              <button
                onClick={() => setDisplayLimit((prev) => prev + 24)}
                className="px-4 py-2 rounded-xl bg-[#161620] hover:bg-[#20202e] text-xs font-medium text-zinc-300 hover:text-white border border-[#28283a] transition"
              >
                Carregar mais partidas ({filteredGames.length - visibleGames.length} restantes)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
