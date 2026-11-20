import React, { useState, useMemo, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import {
  Trophy,
  Calendar,
  Zap,
  Cpu,
  PenSquare,
  Radio,
  Swords,
  Info,
  ChevronRight,
  Play,
  SkipBack,
  SkipForward,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { getDailyGame } from '../data/dailyGames';
import { RookIcon } from './ChessPieceIcon';
import PlayerBroadcastBar from './PlayerBroadcastBar';
import { useTranslation } from '../i18n';
import {
  localizeCountry,
  localizeSite,
  localizeOpening,
  localizeSpeed,
  localizeHighlight,
  formatLocalizedDate,
} from '../i18n/chessTranslations';

export default function Home({
  darkSquareStyle,
  lightSquareStyle,
  customPieces,
  onNavigate,
  onLoadGameIntoAnalysis,
}) {
  const { t, language } = useTranslation();

  // Partida do Dia sincronizada com a meia-noite
  const [dailyGame, setDailyGame] = useState(() => getDailyGame());

  // Monitora a troca da meia-noite a cada minuto para atualizar automaticamente sem refresh
  useEffect(() => {
    const timer = setInterval(() => {
      const current = getDailyGame();
      if (current.id !== dailyGame.id) {
        setDailyGame(current);
      }
    }, 30000);
    return () => clearInterval(timer);
  }, [dailyGame.id]);

  // Carrega e reconstrói o histórico da partida para reprodução interativa
  const { movesHistory, fensList } = useMemo(() => {
    try {
      const c = new Chess();
      c.loadPgn(dailyGame.pgn);
      const moves = c.history({ verbose: true });

      // Reconstrói cada FEN lance a lance
      const replayChess = new Chess();
      const fens = [replayChess.fen()];
      for (const m of moves) {
        replayChess.move(m.san);
        fens.push(replayChess.fen());
      }

      return { movesHistory: moves, fensList: fens };
    } catch {
      return { movesHistory: [], fensList: ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'] };
    }
  }, [dailyGame.pgn]);

  // Posição atual do lance no mini-tabuleiro (inicia na posição final/chave da partida)
  const [moveIndex, setMoveIndex] = useState(() => movesHistory.length);

  // Sincroniza ao mudar a partida
  useEffect(() => {
    setMoveIndex(movesHistory.length);
  }, [movesHistory.length, dailyGame.id]);

  const currentFen = fensList[moveIndex] || fensList[0];
  const lastMove = moveIndex > 0 ? movesHistory[moveIndex - 1] : null;

  // Destaque das casas do último lance
  const customSquareStyles = useMemo(() => {
    if (!lastMove) return {};
    return {
      [lastMove.from]: { backgroundColor: 'rgba(56, 189, 248, 0.28)' },
      [lastMove.to]: {
        backgroundColor: 'rgba(56, 189, 248, 0.35)',
        boxShadow: 'inset 0 0 0 2px rgba(56, 189, 248, 0.85)',
      },
    };
  }, [lastMove]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* GRID PRINCIPAL: PARTIDA DO DIA (ESQUERDA) + AÇÕES RÁPIDAS (DIREITA) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* ===================================================================
            BLOCO 1: 🏆 PARTIDA DO DIA (7 ou 8 Colunas)
           =================================================================== */}
        <section className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-[#111116] border border-[#202029] shadow-xl flex flex-col gap-5">
          {/* Cabeçalho do Card */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1c1c24] pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  {t('home.dailyTitle')}
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {localizeSpeed(dailyGame.speed, language)}
                  </span>
                </h2>
                <p className="text-xs text-zinc-400">
                  {t('home.dailySubtitle')}
                </p>
              </div>
            </div>

            {/* Pílula de Data da Troca Diária Localizada */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#16161d] border border-[#242432] text-xs font-mono text-zinc-300">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              <span>{formatLocalizedDate(new Date(), language)}</span>
            </div>
          </div>

          {/* Conteúdo Central: Tabuleiro Interativo + Metadados e CTA */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Tabuleiro Interativo com Navegação Padrão Broadcast */}
            <div className="md:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden border-2 border-[#262633] shadow-2xl bg-[#0a0a0d] p-1">
                <Chessboard
                  position={currentFen}
                  boardOrientation="white"
                  arePiecesDraggable={false}
                  customSquareStyles={customSquareStyles}
                  customDarkSquareStyle={darkSquareStyle}
                  customLightSquareStyle={lightSquareStyle}
                  customPieces={customPieces}
                />
              </div>

              {/* Controles de Reprodução da Partida do Dia (Padrão Broadcast) */}
              <div className="w-full max-w-[340px] mt-2.5 flex items-center justify-between bg-[#121217] border border-[#22222e] rounded-xl px-3 py-2 text-xs shadow-sm">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setMoveIndex(0)}
                    disabled={moveIndex === 0}
                    className="w-8 h-7 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-30 disabled:hover:bg-[#181820] border border-[#282836] flex items-center justify-center text-zinc-300 transition"
                    title={t('home.firstMove')}
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMoveIndex((prev) => Math.max(0, prev - 1))}
                    disabled={moveIndex === 0}
                    className="w-8 h-7 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-30 disabled:hover:bg-[#181820] border border-[#282836] flex items-center justify-center text-zinc-300 transition"
                    title={t('home.prevMove')}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMoveIndex((prev) => Math.min(movesHistory.length, prev + 1))}
                    disabled={moveIndex >= movesHistory.length}
                    className="w-8 h-7 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-30 disabled:hover:bg-[#181820] border border-[#282836] flex items-center justify-center text-zinc-300 transition"
                    title={t('home.nextMove')}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMoveIndex(movesHistory.length)}
                    disabled={moveIndex === movesHistory.length}
                    className="w-8 h-7 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-30 disabled:hover:bg-[#181820] border border-[#282836] flex items-center justify-center text-zinc-300 transition"
                    title={t('home.lastMove')}
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="font-mono text-[11px] text-zinc-300 font-semibold truncate px-2 text-right">
                  {moveIndex === 0 ? (
                    t('home.startPos')
                  ) : lastMove ? (
                    <span>
                      {Math.ceil(moveIndex / 2)}
                      {moveIndex % 2 === 1 ? '.' : '...'} {lastMove.san}
                      {moveIndex === movesHistory.length && (
                        <span className="ml-1 text-emerald-400 font-bold">({dailyGame.result})</span>
                      )}
                    </span>
                  ) : (
                    dailyGame.result
                  )}
                </div>
              </div>
            </div>

            {/* Informações da Partida e Jogadores (Com Foto, Título, Bandeira Retangular e Placar) */}
            <div className="md:col-span-6 flex flex-col justify-between h-full space-y-3.5">
              {/* Jogador de Brancas */}
              <PlayerBroadcastBar
                name={dailyGame.white.name}
                title={dailyGame.white.title || 'GM'}
                rating={dailyGame.white.rating}
                color="w"
                result={dailyGame.result}
                fed={
                  dailyGame.white.code && dailyGame.white.code !== 'WLD'
                    ? dailyGame.white.code
                    : dailyGame.white.country
                }
                subtitleText={
                  dailyGame.white.country && dailyGame.white.country !== 'FIDE'
                    ? localizeCountry(dailyGame.white.country, language)
                    : null
                }
                hideClock={true}
              />

              {/* Divisor VS */}
              <div className="relative flex items-center justify-center">
                <div className="w-full border-t border-[#1e1e27]" />
                <span className="absolute px-3 bg-[#111116] text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                  VS
                </span>
              </div>

              {/* Jogador de Pretas */}
              <PlayerBroadcastBar
                name={dailyGame.black.name}
                title={dailyGame.black.title || 'GM'}
                rating={dailyGame.black.rating}
                color="b"
                result={dailyGame.result}
                fed={
                  dailyGame.black.code && dailyGame.black.code !== 'WLD'
                    ? dailyGame.black.code
                    : dailyGame.black.country
                }
                subtitleText={
                  dailyGame.black.country && dailyGame.black.country !== 'FIDE'
                    ? localizeCountry(dailyGame.black.country, language)
                    : null
                }
                hideClock={true}
              />

              {/* Detalhes do Evento e Abertura */}
              <div className="p-3 rounded-xl bg-[#14141c] border border-[#222230] space-y-1.5 text-xs text-zinc-400">
                <div className="flex items-center justify-between text-zinc-200 font-medium">
                  <span className="truncate">{localizeSite(dailyGame.site, language)}</span>
                  <span className="font-mono text-zinc-400 shrink-0">{dailyGame.year}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sky-400 font-medium truncate">
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{localizeOpening(dailyGame.opening, language)}</span>
                  {dailyGame.eco && (
                    <span className="text-[10px] font-mono text-zinc-500">({dailyGame.eco})</span>
                  )}
                </div>
                {dailyGame.highlight && (
                  <p className="text-[11px] text-zinc-400 italic leading-relaxed pt-0.5 line-clamp-2">
                    &quot;{localizeHighlight(dailyGame, language)}&quot;
                  </p>
                )}
              </div>

              {/* Botão Primário: Ver Partida / Analisar no Saragix */}
              <button
                type="button"
                onClick={() => onLoadGameIntoAnalysis(dailyGame.pgn)}
                className="w-full py-3 px-4 rounded-xl bg-[#ececef] hover:bg-white text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition transform active:scale-[0.99]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{t('home.viewInAnalysis')}</span>
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================================
            BLOCO 2: ⚡ AÇÕES RÁPIDAS (4 ou 5 Colunas)
           =================================================================== */}
        <section className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-[#111116] border border-[#202029] shadow-xl flex flex-col gap-4">
          <div className="flex items-center gap-2.5 border-b border-[#1c1c24] pb-4">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {t('home.quickActions')}
              </h2>
              <p className="text-xs text-zinc-400">
                {t('home.quickActionsSub')}
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            {/* Ação 1: Análise */}
            <button
              onClick={() => onNavigate('analysis')}
              className="w-full p-4 rounded-xl bg-[#15151c] hover:bg-[#1a1a23] border border-[#22222d] hover:border-zinc-700 transition flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#1e1e28] text-blue-400 group-hover:text-blue-300 transition shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition">
                    {t('home.analysisTitle')}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {t('home.analysisDesc')}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </button>

            {/* Ação 2: Editor de Tabuleiro */}
            <button
              onClick={() => onNavigate('board_editor')}
              className="w-full p-4 rounded-xl bg-[#15151c] hover:bg-[#1a1a23] border border-[#22222d] hover:border-zinc-700 transition flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#1e1e28] text-emerald-400 group-hover:text-emerald-300 transition shrink-0">
                  <PenSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition">
                    {t('home.editorTitle')}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {t('home.editorDesc')}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </button>

            {/* Ação 3: Transmissões ao Vivo */}
            <button
              onClick={() => onNavigate('broadcasts')}
              className="w-full p-4 rounded-xl bg-[#15151c] hover:bg-[#1a1a23] border border-[#22222d] hover:border-zinc-700 transition flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#1e1e28] text-rose-400 group-hover:text-rose-300 transition shrink-0">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-rose-400 transition">
                    {t('home.broadcastsTitle')}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {t('home.broadcastsDesc')}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </button>

            {/* Ação 4: Jogar vs Computador */}
            <button
              onClick={() => onNavigate('play_bot')}
              className="w-full p-4 rounded-xl bg-[#15151c] hover:bg-[#1a1a23] border border-[#22222d] hover:border-zinc-700 transition flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#1e1e28] text-purple-400 group-hover:text-purple-300 transition shrink-0">
                  <Swords className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-400 transition">
                    {t('home.playBotTitle')}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {t('home.playBotDesc')}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </button>
          </div>
        </section>
      </div>

      {/* ===================================================================
          BLOCO 3: SOBRE O SARAGIX (Card de Apresentação e Convite)
         =================================================================== */}
      <section className="p-5 sm:p-6 rounded-2xl bg-[#111116] border border-[#202029] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-[#161622] border border-[#262638] flex items-center justify-center shrink-0 shadow-md">
            <RookIcon className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">{t('home.aboutCardTitle')}</h3>
            </div>
            <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              {t('home.aboutCardDesc')}
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('about')}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#181822] hover:bg-[#20202e] border border-[#29293a] text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition shrink-0"
        >
          <span>{t('common.learnMore')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
}
