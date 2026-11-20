import React from 'react';
import { BookOpen, Star, Check, Hash } from 'lucide-react';

export const CLASSIFICATION_BADGE_STYLES = {
  BRILLIANT: {
    bg: 'bg-[#1baca6]',
    text: 'text-white',
    glyph: '!!',
  },
  '!!': {
    bg: 'bg-[#1baca6]',
    text: 'text-white',
    glyph: '!!',
  },
  GREAT: {
    bg: 'bg-[#5c8bb0]',
    text: 'text-white',
    glyph: '!',
  },
  '!': {
    bg: 'bg-[#5c8bb0]',
    text: 'text-white',
    glyph: '!',
  },
  BEST: {
    bg: 'bg-[#81b64c]',
    text: 'text-white',
    glyph: '★',
    isStar: true,
  },
  '★': {
    bg: 'bg-[#81b64c]',
    text: 'text-white',
    glyph: '★',
    isStar: true,
  },
  EXCELLENT: {
    bg: 'bg-[#81b64c]',
    text: 'text-white',
    glyph: '✓',
    isCheck: true,
  },
  '✓': {
    bg: 'bg-[#81b64c]',
    text: 'text-white',
    glyph: '✓',
    isCheck: true,
  },
  GOOD: {
    bg: 'bg-[#5fa85b]',
    text: 'text-white',
    glyph: '✓',
    isCheck: true,
  },
  '👍': {
    bg: 'bg-[#5fa85b]',
    text: 'text-white',
    glyph: '✓',
    isCheck: true,
  },
  BOOK: {
    bg: 'bg-[#a88865]',
    text: 'text-white',
    isBook: true,
  },
  book: {
    bg: 'bg-[#a88865]',
    text: 'text-white',
    isBook: true,
  },
  Bk: {
    bg: 'bg-[#a88865]',
    text: 'text-white',
    isBook: true,
  },
  '📖': {
    bg: 'bg-[#a88865]',
    text: 'text-white',
    isBook: true,
  },
  NOVELTY: {
    bg: 'bg-[#9333ea]',
    text: 'text-white',
    glyph: 'N',
  },
  novelty: {
    bg: 'bg-[#9333ea]',
    text: 'text-white',
    glyph: 'N',
  },
  N: {
    bg: 'bg-[#9333ea]',
    text: 'text-white',
    glyph: 'N',
  },
  INACCURACY: {
    bg: 'bg-[#e69e23]',
    text: 'text-white',
    glyph: '?!',
  },
  '?!': {
    bg: 'bg-[#e69e23]',
    text: 'text-white',
    glyph: '?!',
  },
  MISTAKE: {
    bg: 'bg-[#ffa459]',
    text: 'text-white',
    glyph: '?',
  },
  '?': {
    bg: 'bg-[#ffa459]',
    text: 'text-white',
    glyph: '?',
  },
  MISS: {
    bg: 'bg-[#e15555]',
    text: 'text-white',
    glyph: '✕',
  },
  '❌': {
    bg: 'bg-[#e15555]',
    text: 'text-white',
    glyph: '✕',
  },
  '✕': {
    bg: 'bg-[#e15555]',
    text: 'text-white',
    glyph: '✕',
  },
  BLUNDER: {
    bg: 'bg-[#fa412d]',
    text: 'text-white',
    glyph: '??',
  },
  '??': {
    bg: 'bg-[#fa412d]',
    text: 'text-white',
    glyph: '??',
  },
  INTERESTING: {
    bg: 'bg-[#8e4fc4]',
    text: 'text-white',
    glyph: '!?',
  },
  '!?': {
    bg: 'bg-[#8e4fc4]',
    text: 'text-white',
    glyph: '!?',
  },
  CHECKMATE: {
    bg: 'bg-[#b91c1c]',
    text: 'text-white',
    glyph: '#',
  },
  '#': {
    bg: 'bg-[#b91c1c]',
    text: 'text-white',
    glyph: '#',
  },
};

/**
 * Renderiza o emblema estilizado em formato circular e de cor sólida,
 * mantendo o modelo de desenho e glifos internos intactos.
 */
export function ClassificationBadge({ id, symbol, size = 'md', className = '', title, style: customStyle }) {
  const key = id || symbol;
  const style = CLASSIFICATION_BADGE_STYLES[key] || {
    bg: 'bg-zinc-700',
    text: 'text-white',
    glyph: symbol || '?',
  };

  const hasCustomSize = className.includes('w-') || className.includes('h-');

  const defaultSizeClass = hasCustomSize
    ? ''
    : size === 'xs'
    ? 'w-4 h-4 text-[10px]'
    : size === 'sm'
    ? 'w-5 h-5 text-[11px]'
    : 'w-6 h-6 text-xs';

  const iconClass = hasCustomSize
    ? 'w-[62%] h-[62%]'
    : size === 'xs'
    ? 'w-2.5 h-2.5'
    : size === 'sm'
    ? 'w-3 h-3'
    : 'w-3.5 h-3.5';

  return (
    <span
      title={title}
      style={customStyle}
      className={`${defaultSizeClass} ${style.bg} ${style.text} rounded-full flex items-center justify-center font-bold shrink-0 font-mono select-none shadow-sm ${className}`}
    >
      {style.isBook ? (
        <BookOpen className={iconClass} strokeWidth={2.4} />
      ) : style.isStar ? (
        <Star className={iconClass} strokeWidth={2.4} fill="currentColor" />
      ) : style.isCheck ? (
        <Check className={iconClass} strokeWidth={2.8} />
      ) : (
        style.glyph
      )}
    </span>
  );
}

/**
 * Renderiza o ícone autoral oficial correspondente à classificação do lance.
 * Substitui totalmente o uso de emojis por caracteres e glifos tipográficos sóbrios e padronizados.
 */
export function ClassificationIcon({ id, symbol, className = 'w-3.5 h-3.5', strokeWidth = 2.4 }) {
  const key = id || symbol;

  switch (key) {
    case 'BOOK':
    case 'book':
    case 'Bk':
    case '📖':
      return <BookOpen className={className} strokeWidth={strokeWidth} />;
    case 'NOVELTY':
    case 'novelty':
    case 'N':
      return (
        <span className="font-extrabold text-[12px] leading-none select-none font-mono">
          N
        </span>
      );
    case 'BRILLIANT':
    case '!!':
      return (
        <span className="font-extrabold tracking-tighter text-[11px] leading-none select-none font-mono">
          !!
        </span>
      );
    case 'GREAT':
    case '!':
      return (
        <span className="font-extrabold text-[12px] leading-none select-none font-mono">
          !
        </span>
      );
    case 'BEST':
    case '★':
      return <Star className={className} strokeWidth={strokeWidth} fill="currentColor" />;
    case 'EXCELLENT':
    case '✓':
      return <Check className={className} strokeWidth={strokeWidth + 0.6} />;
    case 'GOOD':
    case '👍':
      return <Check className={className} strokeWidth={strokeWidth} />;
    case 'INACCURACY':
    case '?!':
      return (
        <span className="font-bold text-[11px] leading-none select-none font-mono">
          ?!
        </span>
      );
    case 'MISTAKE':
    case '?':
      return (
        <span className="font-extrabold text-[12px] leading-none select-none font-mono">
          ?
        </span>
      );
    case 'MISS':
    case '❌':
    case '✕':
      return (
        <span className="font-extrabold text-[12px] leading-none select-none font-mono">
          ✕
        </span>
      );
    case 'BLUNDER':
    case '??':
      return (
        <span className="font-extrabold tracking-tighter text-[11px] leading-none select-none font-mono">
          ??
        </span>
      );
    case 'INTERESTING':
    case '!?':
      return (
        <span className="font-bold text-[11px] leading-none select-none font-mono">
          !?
        </span>
      );
    case 'CHECKMATE':
    case 'MATE':
    case '#':
      return <Hash className={className} strokeWidth={strokeWidth >= 3 ? strokeWidth : 3.2} />;
    default:
      return symbol ? <span>{symbol}</span> : null;
  }
}

export default ClassificationIcon;
