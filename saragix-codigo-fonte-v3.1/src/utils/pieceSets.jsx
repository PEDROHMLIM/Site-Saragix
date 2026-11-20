import React from 'react';
import { INLINE_PIECE_SETS } from './pieceSetsData';

// Catálogo dos Estilos de Peças Disponíveis
export const PIECE_SETS = [
  {
    id: 'default',
    name: 'Padrão (Neo / React)',
    desc: 'Visual moderno e suave do react-chessboard.',
  },
  {
    id: 'merida',
    name: 'Mérida',
    desc: 'Estilo clássico e imponente, muito usado em livros e transmissões.',
  },
  {
    id: 'alpha',
    name: 'Alpha (Modern Clean)',
    desc: 'Contornos nítidos e modernos com visual arrojado.',
  },
  {
    id: 'california',
    name: 'Califórnia',
    desc: 'Estilo sóbrio de madeira estilizada e detalhes refinados.',
  },
  {
    id: 'tatiana',
    name: 'Tatiana (Vintage)',
    desc: 'Design clássico europeu com traços marcantes.',
  },
];

const PIECE_NAMES = ['wK', 'wQ', 'wR', 'wB', 'wN', 'wP', 'bK', 'bQ', 'bR', 'bB', 'bN', 'bP'];

/**
 * Renderiza um SVG direto do código sem usar tag <img src="...">
 */
export function renderInlineSvg(rawSvg, size = '100%') {
  if (!rawSvg) return null;
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
      dangerouslySetInnerHTML={{ __html: rawSvg }}
    />
  );
}

/**
 * Cria o mapeamento de customPieces para o componente <Chessboard />
 * @param {string} pieceSetId - ID do estilo de peças escolhido
 */
export function buildCustomPieces(pieceSetId) {
  if (!pieceSetId || pieceSetId === 'default' || !INLINE_PIECE_SETS[pieceSetId]) {
    return undefined; // Permite o react-chessboard usar seus próprios SVGs nativos de código
  }

  const setSvgs = INLINE_PIECE_SETS[pieceSetId];
  const customPieces = {};

  PIECE_NAMES.forEach((p) => {
    const svgCode = setSvgs[p];
    if (svgCode) {
      customPieces[p] = ({ squareWidth }) => (
        <div
          style={{
            width: squareWidth,
            height: squareWidth,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
          dangerouslySetInnerHTML={{ __html: svgCode }}
        />
      );
    }
  });

  return customPieces;
}

export const PIECE_SET_STORAGE_KEY = 'saragix_piece_set_v1';

export function loadSavedPieceSet() {
  try {
    const saved = localStorage.getItem(PIECE_SET_STORAGE_KEY);
    if (saved && PIECE_SETS.some((s) => s.id === saved)) {
      return saved;
    }
  } catch {
    // fallback
  }
  return 'default';
}

export function savePieceSetConfig(pieceSetId) {
  try {
    localStorage.setItem(PIECE_SET_STORAGE_KEY, pieceSetId);
  } catch {
    // fallback
  }
}
