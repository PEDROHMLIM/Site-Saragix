import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useTranslation, AVAILABLE_LANGUAGES } from '../i18n';

/**
 * Seletor de Idioma em Formato Pill (Topbar ou Menus)
 */
export default function LanguageSelector({ variant = 'pill', className = '' }) {
  const { language, changeLanguage } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const current = AVAILABLE_LANGUAGES.find((l) => l.code === language) || AVAILABLE_LANGUAGES[0];

  // Variante: Segmentada (para modal de configurações / perfil)
  if (variant === 'segmented') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-2 ${className}`}>
        {AVAILABLE_LANGUAGES.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl border text-xs font-medium transition ${
                isActive
                  ? 'bg-[#1e1e28] border-blue-500/60 text-white shadow-sm'
                  : 'bg-[#121217] border-[#22222b] text-zinc-400 hover:text-zinc-200 hover:bg-[#16161f]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#20202c] border border-[#2c2c3d] text-blue-400">
                  {lang.short}
                </span>
                <span className="truncate">{lang.name}</span>
              </div>
              {isActive && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 ml-1.5" />}
            </button>
          );
        })}
      </div>
    );
  }

  // Variante: Compact Toggle (um clique cicla para o próximo idioma)
  if (variant === 'toggle') {
    const currentIndex = AVAILABLE_LANGUAGES.findIndex((l) => l.code === language);
    const nextLang = AVAILABLE_LANGUAGES[(currentIndex + 1) % AVAILABLE_LANGUAGES.length].code;
    return (
      <button
        type="button"
        onClick={() => changeLanguage(nextLang)}
        className={`px-2 py-1 rounded-md bg-[#16161b] hover:bg-[#202028] border border-[#282832] text-[11px] text-zinc-300 flex items-center gap-1.5 transition ${className}`}
        title={`Idioma atual: ${current.name} (Clique para alterar)`}
      >
        <Globe className="w-3 h-3 text-blue-400" />
        <span className="font-mono font-bold text-[10px] tracking-wider text-white">
          {current.short}
        </span>
      </button>
    );
  }

  // Variante padrão: Dropdown Pill Elegante
  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="px-2.5 py-1.5 rounded-lg bg-[#141418] hover:bg-[#1c1c24] border border-[#262632] hover:border-[#383848] text-xs text-zinc-200 flex items-center gap-1.5 transition"
        title="Alterar idioma da plataforma"
      >
        <Globe className="w-3.5 h-3.5 text-blue-400" />
        <span className="font-mono font-bold text-[11px] text-zinc-100">{current.short}</span>
        <ChevronDown className={`w-3 h-3 text-zinc-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-44 rounded-xl bg-[#121217] border border-[#262634] shadow-2xl z-50 p-1.5 space-y-1 animate-in fade-in slide-in-from-top-1">
          <div className="px-2 py-1 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
            Idioma / Language
          </div>
          {AVAILABLE_LANGUAGES.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  changeLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition ${
                  isSelected
                    ? 'bg-[#1f1f2c] text-white'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#181820]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#101016] border border-[#28283a] text-blue-400">
                    {lang.short}
                  </span>
                  <span>{lang.name}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
