import React from 'react';
import { normalizeTitle } from '../utils/openings';

/**
 * Badge sóbrio e padronizado de Títulos Oficiais de Xadrez (FIDE / Nacional)
 * Utiliza o mesmo padrão visual em todo o Saragix:
 * - Títulos Absolutos FIDE (GM, IM, FM, CM): dourado/âmbar elegante (#e5c07b) com fundo escuro quente (#27241d)
 * - Títulos Femininos FIDE (WGM, WIM, WFM, WCM): lilás/púrpura (#d8b4e2) com fundo (#2a1f2d)
 * - Títulos Nacionais (NM, WNM): esmeralda (#7dd3a8) com fundo (#1b2922)
 */
export default function TitleBadge({ title, className = '' }) {
  if (!title) return null;
  const norm = normalizeTitle(title);
  const isWomen = norm.startsWith('W');
  const isNational = norm === 'NM' || norm === 'WNM';

  return (
    <span
      className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider border inline-flex items-center font-mono shrink-0 select-none ${
        isNational
          ? 'bg-[#1b2922] text-[#7dd3a8] border-[#294235]'
          : isWomen
          ? 'bg-[#2a1f2d] text-[#d8b4e2] border-[#423047]'
          : 'bg-[#27241d] text-[#e5c07b] border-[#3e382b]'
      } ${className}`}
      title={
        isNational
          ? 'Título Nacional'
          : isWomen
          ? 'Título Internacional Feminino (FIDE)'
          : 'Título Internacional Absoluto (FIDE)'
      }
    >
      {title}
    </span>
  );
}
