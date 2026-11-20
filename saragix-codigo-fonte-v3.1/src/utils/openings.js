// Detector de Aberturas (repertório Lichess) e sistema de títulos FIDE / Nacionais
import { Chess } from 'chess.js';
import { OPENINGS, POSITIONS } from './openingBookData.js';
import { checkMasterTheoryStatus } from './lichessExplorer.js';

export const TITLE_CATEGORIES = [
  {
    group: 'Sem Título',
    options: [{ value: '', label: 'Sem Título', category: 'NONE' }],
  },
  {
    group: 'Títulos Internacionais (FIDE)',
    options: [
      { value: 'GM', label: 'GM — Grande Mestre', category: 'INTL' },
      { value: 'IM', label: 'IM / MI — Mestre Internacional', category: 'INTL' },
      { value: 'FM', label: 'FM / MF — Mestre FIDE', category: 'INTL' },
      { value: 'CM', label: 'CM — Candidato a Mestre', category: 'INTL' },
      { value: 'WGM', label: 'WGM — Grande Mestre Feminina', category: 'INTL_W' },
      { value: 'WIM', label: 'WIM / WMI — Mestre Internacional Feminina', category: 'INTL_W' },
      { value: 'WFM', label: 'WFM / WMF — Mestre FIDE Feminina', category: 'INTL_W' },
      { value: 'WCM', label: 'WCM — Candidata a Mestre Feminina', category: 'INTL_W' },
    ],
  },
  {
    group: 'Títulos Nacionais (CBX / Federação)',
    options: [
      { value: 'NM', label: 'NM / MN — Mestre Nacional', category: 'NAT' },
      { value: 'WNM', label: 'WNM / WMN — Mestre Nacional Feminina', category: 'NAT_W' },
    ],
  },
];

// Normaliza siglas equivalentes (ex: MI -> IM, MF -> FM, WMI -> WIM, WMF -> WFM) para agrupar estatísticas
export function normalizeTitle(rawTitle) {
  if (!rawTitle) return '';
  const map = {
    MI: 'IM',
    MF: 'FM',
    WMI: 'WIM',
    WMF: 'WFM',
    MN: 'NM',
    WMN: 'WNM',
  };
  return map[rawTitle.toUpperCase()] || rawTitle.toUpperCase();
}

export const TIME_CONTROLS = [
  { value: 'Blitz', label: 'Blitz (3m - 5m)' },
  { value: 'Rápida', label: 'Rápida (10m - 30m)' },
  { value: 'Clássica', label: 'Clássica (+60m)' },
  { value: 'Bullet', label: 'Bullet (1m - 2m)' },
];

export const GAME_MODES = [
  { value: 'Online', label: 'Online (Chess.com / Lichess)' },
  { value: 'Presencial', label: 'Presencial (OTB / Torneio)' },
];

// ============================================================================
// LIVRO DE ABERTURAS — Repertório oficial do Lichess (lichess-org/chess-openings)
// ----------------------------------------------------------------------------
// ~3.800 aberturas / ~8.000 posições teóricas (ECO A00–E99), geradas por
// scripts/build-opening-book.mjs em ./openingBookData.js.
//
// A teoria é reconhecida pela POSIÇÃO (peças + vez + roques), não pela ordem
// de lances. Assim, transposições (ex.: 1.Nf3 d5 2.d4 = 1.d4 d5 2.Nf3) também
// são corretamente identificadas como livro, e qualquer lance que saia das
// posições catalogadas deixa de ser teoria imediatamente.
// ============================================================================

const START_KEY = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq';

function positionKey(fen) {
  if (!fen) return '';
  const p = fen.trim().split(/\s+/);
  return `${p[0]} ${p[1] || 'w'} ${p[2] || '-'}`;
}

// FNV-1a 32 bits — idêntico ao script gerador
function hashKey(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36);
}

let bookMap = null; // hash -> índice da abertura (-1 = posição intermediária da teoria)
function getBookMap() {
  if (bookMap) return bookMap;
  bookMap = new Map();
  for (const pair of POSITIONS.split(',')) {
    const sep = pair.indexOf(':');
    bookMap.set(pair.slice(0, sep), Number(pair.slice(sep + 1)));
  }
  return bookMap;
}

function lookup(fen) {
  const key = positionKey(fen);
  if (key === START_KEY) return { inBook: true, idx: -1, isStart: true };
  const v = getBookMap().get(hashKey(key));
  return v === undefined ? { inBook: false, idx: -1 } : { inBook: true, idx: v };
}

/** A posição (FEN) faz parte da teoria catalogada do Lichess? */
export function isBookPosition(fen) {
  return lookup(fen).inBook;
}

/**
 * Um lance é "de livro" quando parte de uma posição teórica (ou da posição
 * inicial) e chega a outra posição teórica do repertório do Lichess.
 */
export function isBookMoveByFen(fenBefore, fenAfter) {
  if (!fenAfter) return false;
  const after = lookup(fenAfter);
  if (!after.inBook || after.isStart) return false;
  return lookup(fenBefore || START_KEY).inBook;
}

/**
 * Resolução Híbrida de Teoria:
 * 1. Verifica instantaneamente o livro local em 0ms;
 * 2. Se for além do repertório local, consulta a Base de Mestres do Lichess;
 * 3. Identifica se o lance é Teoria de Mestres ou Novidade Teórica ('N').
 */
export async function resolveMoveTheory({ fenBefore, fenAfter, playedUci, playedSan = '' }) {
  const isLocalBook = isBookMoveByFen(fenBefore, fenAfter);
  if (isLocalBook) {
    return { isBook: true, isNovelty: false, source: 'local', masterGames: 0 };
  }

  if (fenBefore && (playedUci || playedSan)) {
    try {
      const status = await checkMasterTheoryStatus(fenBefore, playedUci, playedSan, fenAfter);
      if (status.isMasterBook) {
        return { isBook: true, isNovelty: false, source: 'masters', masterGames: status.masterGames };
      }
      if (status.isNovelty) {
        return { isBook: false, isNovelty: true, source: 'masters', masterGames: 0, positionGames: status.positionGames };
      }
    } catch {
      // fallback gracioso em caso de erro de rede
    }
  }

  return { isBook: false, isNovelty: false, source: 'none', masterGames: 0 };
}

/** Abertura (ECO + nome) cuja linha termina exatamente nesta posição, se houver. */
export function getOpeningAtFen(fen) {
  const { idx } = lookup(fen);
  if (idx < 0) return null;
  const [eco, name] = OPENINGS[idx];
  return { eco, name };
}

// Cache incremental: sequência SAN (a partir da posição inicial) -> FEN resultante
const fenCache = new Map();
function fenAfterSequence(sans) {
  const key = sans.join(' ');
  if (fenCache.has(key)) return fenCache.get(key);
  let fen = null;
  try {
    const parentFen = sans.length > 1 ? fenAfterSequence(sans.slice(0, -1)) : new Chess().fen();
    if (parentFen) {
      const g = new Chess(parentFen);
      const mv = g.move(sans[sans.length - 1]);
      fen = mv ? g.fen() : null;
    }
  } catch {
    fen = null;
  }
  if (fenCache.size > 20000) fenCache.clear();
  fenCache.set(key, fen);
  return fen;
}

/**
 * Compatibilidade: recebe a sequência SAN desde a posição inicial e diz se o
 * ÚLTIMO lance da sequência é teoria (posição anterior e posterior no livro).
 */
export function isMoveInOpeningBook(sanSequenceUpToPly) {
  if (!sanSequenceUpToPly || sanSequenceUpToPly.length === 0) return false;
  if (sanSequenceUpToPly.length > 60) return false;
  const sans = sanSequenceUpToPly.map((m) => (typeof m === 'string' ? m : m?.san));
  const fenAfter = fenAfterSequence(sans);
  if (!fenAfter) return false;
  const fenBefore = sans.length > 1 ? fenAfterSequence(sans.slice(0, -1)) : START_KEY;
  return isBookMoveByFen(fenBefore, fenAfter);
}

/**
 * Detecta a abertura de uma partida percorrendo seus lances e guardando a
 * linha catalogada mais profunda alcançada (inclusive por transposição).
 * Aceita lista de SANs ou de nós ({ san, fenAfter }).
 */
export function detectOpening(movesArray) {
  if (!movesArray || movesArray.length === 0) {
    return { eco: '', name: 'Abertura não identificada', firstMoveWhite: '', firstMoveBlack: '' };
  }

  const sanList = movesArray.map((m) => (typeof m === 'string' ? m : m?.san));
  let found = null;
  let outOfBookStreak = 0;
  const limit = Math.min(movesArray.length, 60);

  for (let i = 0; i < limit; i++) {
    const m = movesArray[i];
    const fen = (typeof m === 'object' && m?.fenAfter) || fenAfterSequence(sanList.slice(0, i + 1));
    if (!fen) break;
    const res = lookup(fen);
    if (res.inBook) {
      outOfBookStreak = 0;
      if (res.idx >= 0) found = OPENINGS[res.idx];
    } else if (++outOfBookStreak >= 8) {
      break; // saiu da teoria há tempo demais — não procura mais transposições
    }
  }

  if (found) {
    return {
      eco: found[0],
      name: found[1],
      firstMoveWhite: sanList[0] || '',
      firstMoveBlack: sanList[1] || '',
    };
  }

  if (sanList[0] === 'e4') {
    return { eco: 'B00', name: 'Abertura do Peão do Rei (1.e4)', firstMoveWhite: 'e4', firstMoveBlack: sanList[1] || '' };
  }
  if (sanList[0] === 'd4') {
    return { eco: 'D00', name: 'Abertura do Peão da Dama (1.d4)', firstMoveWhite: 'd4', firstMoveBlack: sanList[1] || '' };
  }
  return {
    eco: 'A00',
    name: 'Abertura Irregular',
    firstMoveWhite: sanList[0] || '',
    firstMoveBlack: sanList[1] || '',
  };
}
