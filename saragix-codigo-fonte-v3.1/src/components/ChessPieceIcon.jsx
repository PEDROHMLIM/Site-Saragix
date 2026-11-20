import React from 'react';

/**
 * Desenhos vetoriais próprios para peças de xadrez (Knight, Pawn, etc.),
 * substituindo totalmente caracteres tipográficos e emojis Unicode.
 */

export function KnightIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      viewBox="0 0 45 45"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#18181b"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path fill="#f4f4f5" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" />
        <path
          fill="#f4f4f5"
          d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
        />
        <path
          fill="#18181b"
          d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0m5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5"
        />
      </g>
    </svg>
  );
}

export function PawnIcon({ className = 'w-4 h-4', fill = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="6.5" r="3.5" />
      <path d="M9.5 11C8.7 12 8.5 13.2 8.5 14.5C9.5 14.8 10.8 15 12 15C13.2 15 14.5 14.8 15.5 14.5C15.5 13.2 15.3 12 14.5 11C13.8 11.5 12.9 11.8 12 11.8C11.1 11.8 10.2 11.5 9.5 11Z" />
      <path d="M7 16.5C7.8 16.2 9.8 16 12 16C14.2 16 16.2 16.2 17 16.5C17.6 16.7 18 17.2 18 17.8V19H6V17.8C6 17.2 6.4 16.7 7 16.5Z" />
    </svg>
  );
}

export function RookIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base da torre */}
      <path
        d="M4 20h16v-2a.75.75 0 0 0-.75-.75H4.75a.75.75 0 0 0-.75.75V20z"
        fill="#f4f4f5"
      />
      {/* Plinto / Degrau inferior */}
      <path
        d="M5.5 16.5h13a.6.6 0 0 0 .56-.4l.84-2.1a.6.6 0 0 0-.56-.8H4.66a.6.6 0 0 0-.56.8l.84 2.1a.6.6 0 0 0 .56.4z"
        fill="#f4f4f5"
      />
      {/* Corpo / Fuste da torre */}
      <path
        d="M6.8 12.5h10.4a.6.6 0 0 0 .59-.49l.81-4.8a.6.6 0 0 0-.59-.71H5.99a.6.6 0 0 0-.59.71l.81 4.8a.6.6 0 0 0 .59.49z"
        fill="#f4f4f5"
      />
      {/* Coroa / Almenas superiores */}
      <path
        d="M4.5 6h15V3.5a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.5.5V5h-2.5V3.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V5H8V3.5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5V6z"
        fill="#f4f4f5"
      />
      {/* Fresta / Janela estilizada de castelo */}
      <rect x="11" y="8.8" width="2" height="3" rx="0.8" fill="#161622" />
    </svg>
  );
}

export default { KnightIcon, PawnIcon, RookIcon };
