import React, { useState } from 'react';
import {
  Info,
  User,
  Compass,
  Cpu,
  Sliders,
  ExternalLink,
  ShieldCheck,
  ShieldAlert,
  Clock,
  BookOpen,
  Code,
  Globe,
  Award,
  AlertTriangle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { ClassificationBadge } from './ClassificationIcon';
import TitleBadge from './TitleBadge';
import { PlayerFlagRect } from './PlayerBroadcastBar';
import { useTranslation } from '../i18n';

export default function About({ initialSubTab }) {
  const { t } = useTranslation();

  const TABS = [
    { id: 'sobre', label: t('about.tabs.about'), icon: Info },
    { id: 'desenvolvedor', label: t('about.tabs.developer'), icon: User },
    { id: 'funcionamento', label: t('about.tabs.howItWorks'), icon: Cpu },
    { id: 'parametros', label: t('about.tabs.parameters'), icon: Sliders },
    { id: 'vinculos', label: t('about.tabs.credits'), icon: Globe },
  ];

  const [activeTab, setActiveTab] = useState(() => {
    if (initialSubTab && TABS.some((t) => t.id === initialSubTab)) {
      return initialSubTab;
    }
    return 'sobre';
  });

  const CLASSIFICATION_IDS = [
    { id: 'BRILLIANT', symbol: '!!' },
    { id: 'GREAT', symbol: '!' },
    { id: 'BEST', symbol: '★' },
    { id: 'EXCELLENT', symbol: '✓' },
    { id: 'GOOD', symbol: '✓' },
    { id: 'BOOK', symbol: 'Bk' },
    { id: 'NOVELTY', symbol: 'N' },
    { id: 'INACCURACY', symbol: '?!' },
    { id: 'MISTAKE', symbol: '?' },
    { id: 'MISS', symbol: '✕' },
    { id: 'BLUNDER', symbol: '??' },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Cabeçalho da Página Sobre */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1c1c24]">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Info className="w-5 h-5" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t('about.title')}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      {/* Grid com Navegação de Abas à Esquerda e Conteúdo à Direita */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Menu Lateral de Abas */}
        <aside className="md:col-span-4 lg:col-span-3 bg-[#121215] border border-[#222228] rounded-2xl p-2 sm:p-2.5 space-y-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition text-left ${
                  isActive
                    ? 'bg-[#1e1e27] text-white border border-[#2d2d3c] shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#18181f]'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-400' : 'text-zinc-500'}`} />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}

          <div className="pt-3 mt-3 border-t border-[#1a1a22] px-3.5 pb-2 text-[11px] text-zinc-500 font-mono">
            {t('about.versionInfo')}
          </div>
        </aside>

        {/* Conteúdo Principal à Direita */}
        <main className="md:col-span-8 lg:col-span-9 bg-[#121215] border border-[#222228] rounded-2xl p-6 sm:p-8 space-y-6">
          {/* ===================================================================
              ABA 1: SOBRE O SARAGIX & MOTIVAÇÃO
             =================================================================== */}
          {activeTab === 'sobre' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {t('about.aboutTab.title')}
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  {t('about.aboutTab.subtitle')}
                </p>
              </div>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <p>{t('about.aboutTab.p1')}</p>
                <p>{t('about.aboutTab.p2')}</p>
                <p>{t('about.aboutTab.p3')}</p>

                <div className="p-4 rounded-xl bg-[#171720] border border-[#262636] space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    {t('about.aboutTab.mainGoalTitle')}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {t('about.aboutTab.mainGoalText')}
                  </p>
                </div>
              </div>

              {/* Pilares da Plataforma */}
              <div className="pt-4 border-t border-[#1c1c24] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#0f0f13] border border-[#1c1c24] space-y-1">
                  <span className="text-xs font-semibold text-white block">
                    {t('about.aboutTab.freeTitle')}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {t('about.aboutTab.freeText')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0f0f13] border border-[#1c1c24] space-y-1">
                  <span className="text-xs font-semibold text-white block">
                    {t('about.aboutTab.privacyTitle')}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {t('about.aboutTab.privacyText')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0f0f13] border border-[#1c1c24] space-y-1">
                  <span className="text-xs font-semibold text-white block">
                    {t('about.aboutTab.evolutionTitle')}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {t('about.aboutTab.evolutionText')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ===================================================================
              ABA 2: DESENVOLVEDOR
             =================================================================== */}
          {activeTab === 'desenvolvedor' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {t('about.devTab.title')}
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  {t('about.devTab.subtitle')}
                </p>
              </div>

              {/* Card do Desenvolvedor */}
              <div className="p-5 rounded-xl bg-[#171720] border border-[#262636] flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#20202d] border border-[#303046] flex items-center justify-center text-blue-400 font-bold text-lg shrink-0">
                  PL
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <TitleBadge title="MN" />
                    <h3 className="text-sm font-semibold text-white">Pedro Henrique M. Lima</h3>
                    <PlayerFlagRect fedCode="BRA" />
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {t('about.devTab.authorRole')}
                  </p>
                </div>
              </div>

              {/* O Desenvolvimento do Site */}
              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {t('about.devTab.siteDevTitle')}
                </h3>

                <p>{t('about.devTab.siteDevP1')}</p>
                <p>{t('about.devTab.siteDevP2')}</p>
                <p className="text-zinc-200 font-medium">{t('about.devTab.siteDevP3')}</p>
              </div>

              {/* Registro de Versão e Atualizações */}
              <div className="pt-4 border-t border-[#1c1c24] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
                  {t('about.devTab.versionInfoTitle')}
                </span>
                <div className="p-3.5 rounded-xl bg-[#0f0f13] border border-[#1c1c24] flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300">Saragix v3.1</span>
                  <span className="text-emerald-400">{t('about.devTab.stableRelease')}</span>
                </div>
              </div>
            </div>
          )}

          {/* ===================================================================
              ABA 3: COMO ELE FUNCIONA
             =================================================================== */}
          {activeTab === 'funcionamento' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {t('about.howTab.title')}
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  {t('about.howTab.subtitle')}
                </p>
              </div>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <p>{t('about.howTab.p1')}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-2">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold">
                      <Cpu className="w-4 h-4" />
                      <span>{t('about.howTab.card1Title')}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.howTab.card1Desc')}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{t('about.howTab.card2Title')}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.howTab.card2Desc')}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold">
                      <BookOpen className="w-4 h-4" />
                      <span>{t('about.howTab.card3Title')}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.howTab.card3Desc')}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                      <ShieldAlert className="w-4 h-4" />
                      <span>{t('about.howTab.card4Title')}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.howTab.card4Desc')}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-2 sm:col-span-2">
                    <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                      <Clock className="w-4 h-4" />
                      <span>{t('about.howTab.card5Title')}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.howTab.card5Desc')}
                    </p>
                  </div>
                </div>

                <p>{t('about.howTab.p2')}</p>
              </div>
            </div>
          )}

          {/* ===================================================================
              ABA 4: PARÂMETROS DE ANÁLISE
             =================================================================== */}
          {activeTab === 'parametros' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {t('about.paramsTab.title')}
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  {t('about.paramsTab.subtitle')}
                </p>
              </div>

              <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                <p>{t('about.paramsTab.intro')}</p>

                {/* Tabela Visual de Classificação de Lances Localizada */}
                <div className="space-y-2 pt-2">
                  {CLASSIFICATION_IDS.map(({ id, symbol }) => {
                    const label = t(`classifications.${id}.label`);
                    const desc = t(`classifications.${id}.desc`);
                    return (
                      <div
                        key={id}
                        className="p-3 rounded-xl bg-[#0f0f13] border border-[#1f1f28] flex items-center gap-3"
                      >
                        <ClassificationBadge id={id} />
                        <div className="flex-1 text-xs">
                          <span className="font-semibold text-white">
                            {label} ({symbol})
                          </span>
                          : {desc}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl bg-[#171720] border border-[#262636] space-y-1.5 mt-3">
                  <h4 className="text-xs font-semibold text-white">
                    {t('about.paramsTab.accuracyCalcTitle')}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {t('about.paramsTab.accuracyCalcDesc')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ===================================================================
              ABA 5: VÍNCULOS EXTERNOS & CRÉDITOS
             =================================================================== */}
          {activeTab === 'vinculos' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {t('about.creditsTab.title')}
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  {t('about.creditsTab.subtitle')}
                </p>
              </div>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <p>{t('about.creditsTab.intro')}</p>

                <div className="space-y-3 pt-1">
                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">
                        {t('about.creditsTab.lichessTitle')}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e1e28] text-zinc-400 border border-[#2b2b3a]">
                        {t('about.creditsTab.lichessBadge')}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.creditsTab.lichessDesc')}
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://lichess.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181822] hover:bg-[#222230] border border-[#2d2d3e] text-xs font-medium text-blue-400 hover:text-blue-300 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>lichess.org</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">
                        {t('about.creditsTab.stockfishTitle')}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e1e28] text-zinc-400 border border-[#2b2b3a]">
                        {t('about.creditsTab.stockfishBadge')}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.creditsTab.stockfishDesc')}
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://stockfishchess.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181822] hover:bg-[#222230] border border-[#2d2d3e] text-xs font-medium text-blue-400 hover:text-blue-300 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>stockfishchess.org</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">
                        {t('about.creditsTab.syzygyTitle')}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e1e28] text-purple-300 border border-purple-500/30">
                        {t('about.creditsTab.syzygyBadge')}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.creditsTab.syzygyDesc')}
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://tablebase.lichess.ovh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181822] hover:bg-[#222230] border border-[#2d2d3e] text-xs font-medium text-blue-400 hover:text-blue-300 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>tablebase.lichess.ovh</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">
                        {t('about.creditsTab.infraTitle')}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e1e28] text-zinc-400 border border-[#2b2b3a]">
                        {t('about.creditsTab.infraBadge')}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.creditsTab.infraDesc')}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f13] border border-[#1f1f28] space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-semibold text-white">
                        {t('about.creditsTab.wikimediaTitle')}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e1e28] text-emerald-300 border border-emerald-500/30">
                        {t('about.creditsTab.wikimediaBadge')}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {t('about.creditsTab.wikimediaDesc')}
                    </p>
                    <div className="pt-1">
                      <a
                        href={t('about.creditsTab.wikimediaLink') || 'https://commons.wikimedia.org/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181822] hover:bg-[#222230] border border-[#2d2d3e] text-xs font-medium text-blue-400 hover:text-blue-300 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{t('about.creditsTab.wikimediaAction') || 'Acessar Wikimedia Commons'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
