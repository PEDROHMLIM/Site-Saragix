import { detectOpening } from './openings';

// Chave limpa do Saragix v3.0 — remove automaticamente todas as chaves antigas do antigo projeto
const STORAGE_KEY = 'saragix_saved_games_v3';
const LEGACY_KEYS = [
  'chess_reviewer_saved_games_v1',
  'chess_reviewer_real_games_v2',
  'chess_reviewer_training_stats_v1',
  'chess_reviewer_career_milestones_v1',
];

const TRAINING_STATS_KEY = 'saragix_training_stats_v3';
const MILESTONES_KEY = 'saragix_career_milestones_v3';

export function getSavedGames() {
  try {
    // Remove todas as bases de dados antigas do projeto anterior
    LEGACY_KEYS.forEach((k) => localStorage.removeItem(k));

    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((g) => !String(g.id || '').startsWith('demo-'));
  } catch (err) {
    console.error('Erro ao ler partidas salvas:', err);
    return [];
  }
}

export function clearAllSavedGamesFromDb() {
  try {
    LEGACY_KEYS.forEach((k) => localStorage.removeItem(k));
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  return [];
}

export function saveGameToDb(gameData) {
  const games = getSavedGames();
  const id = gameData.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()));
  const now = new Date().toISOString();

  const detectedOp = detectOpening(gameData.moves || []);
  const existingIndex = games.findIndex((g) => g.id === id);

  const record = {
    id,
    title: gameData.title || `${gameData.white || 'Brancas'} vs ${gameData.black || 'Pretas'}`,
    white: gameData.white || 'Brancas',
    whiteTitle: gameData.whiteTitle || '',
    whiteRating: gameData.whiteRating || '',
    black: gameData.black || 'Pretas',
    blackTitle: gameData.blackTitle || '',
    blackRating: gameData.blackRating || '',
    userColor: gameData.userColor || 'w',
    result: gameData.result || '*',
    date: gameData.date || new Date().toISOString().slice(0, 10),
    event: gameData.event || 'Partida Casual',
    eventLocation: gameData.eventLocation || '',
    round: gameData.round || '',
    platform: gameData.platform || '',
    gameMode: gameData.gameMode || 'Online',
    timeControl: gameData.timeControl || 'Rápida',
    timeTrouble: Boolean(gameData.timeTrouble),
    isImportant: Boolean(gameData.isImportant),
    opening: gameData.opening || detectedOp.name,
    eco: gameData.eco || detectedOp.eco,
    notes: gameData.notes || '',
    pgn: gameData.pgn,
    moves: gameData.moves || [],
    moveTree: gameData.moveTree || null,
    whiteAccuracy: gameData.whiteAccuracy ?? 0,
    blackAccuracy: gameData.blackAccuracy ?? 0,
    isAnalyzed: Boolean(gameData.isAnalyzed),
    updatedAt: now,
    createdAt: existingIndex >= 0 ? games[existingIndex].createdAt : now,
  };

  if (existingIndex >= 0) {
    games[existingIndex] = record;
  } else {
    games.unshift(record);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
  return { games, savedRecord: record };
}

export function deleteGameFromDb(id) {
  const games = getSavedGames().filter((g) => g.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
  return games;
}

// ============================================================================
// ESTATÍSTICAS DE TREINAMENTO (Minhas Posições Críticas)
// ============================================================================
export function getTrainingStats() {
  try {
    const raw = localStorage.getItem(TRAINING_STATS_KEY);
    if (!raw) {
      return {
        trainedCount: 0,
        bestMoveFound: 0,
        acceptableMoveFound: 0,
        errorsCount: 0,
        solvedIds: {}, // id -> 'BEST' | 'ACCEPTABLE' | 'ERROR'
        byCategory: {
          TACTICS: { trained: 0, solved: 0 },
          OPENING: { trained: 0, solved: 0 },
          MIDDLEGAME: { trained: 0, solved: 0 },
          ENDGAME: { trained: 0, solved: 0 },
        },
      };
    }
    return JSON.parse(raw);
  } catch {
    return {
      trainedCount: 0,
      bestMoveFound: 0,
      acceptableMoveFound: 0,
      errorsCount: 0,
      solvedIds: {},
      byCategory: {
        TACTICS: { trained: 0, solved: 0 },
        OPENING: { trained: 0, solved: 0 },
        MIDDLEGAME: { trained: 0, solved: 0 },
        ENDGAME: { trained: 0, solved: 0 },
      },
    };
  }
}

export function recordTrainingAttempt({ puzzleId, outcome, phaseCategory, isTactical }) {
  const stats = getTrainingStats();
  stats.trainedCount = (stats.trainedCount || 0) + 1;

  if (outcome === 'BEST') {
    stats.bestMoveFound = (stats.bestMoveFound || 0) + 1;
  } else if (outcome === 'ACCEPTABLE') {
    stats.acceptableMoveFound = (stats.acceptableMoveFound || 0) + 1;
  } else {
    stats.errorsCount = (stats.errorsCount || 0) + 1;
  }

  stats.solvedIds = stats.solvedIds || {};
  stats.solvedIds[puzzleId] = outcome;

  if (!stats.byCategory) {
    stats.byCategory = {
      TACTICS: { trained: 0, solved: 0 },
      OPENING: { trained: 0, solved: 0 },
      MIDDLEGAME: { trained: 0, solved: 0 },
      ENDGAME: { trained: 0, solved: 0 },
    };
  }

  const isSuccess = outcome === 'BEST' || outcome === 'ACCEPTABLE';

  if (phaseCategory && stats.byCategory[phaseCategory]) {
    stats.byCategory[phaseCategory].trained++;
    if (isSuccess) stats.byCategory[phaseCategory].solved++;
  }
  if (isTactical) {
    stats.byCategory.TACTICS.trained++;
    if (isSuccess) stats.byCategory.TACTICS.solved++;
  }

  localStorage.setItem(TRAINING_STATS_KEY, JSON.stringify(stats));
  return stats;
}

export function resetTrainingStats() {
  localStorage.removeItem(TRAINING_STATS_KEY);
  return getTrainingStats();
}

// ============================================================================
// MARCOS DA CARREIRA (Para "Minha Jornada no Xadrez")
// ============================================================================
export function getCareerMilestones() {
  try {
    const raw = localStorage.getItem(MILESTONES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function addCareerMilestone({ title, date, category, description }) {
  const list = getCareerMilestones();
  const item = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title: title.trim(),
    date: date || new Date().toISOString().slice(0, 10),
    category: category || 'MARCO', // 'MARCO' | 'TORNEIO' | 'TITULO'
    description: description ? description.trim() : '',
  };
  list.unshift(item);
  localStorage.setItem(MILESTONES_KEY, JSON.stringify(list));
  return list;
}

export function deleteCareerMilestone(id) {
  const list = getCareerMilestones().filter((m) => m.id !== id);
  localStorage.setItem(MILESTONES_KEY, JSON.stringify(list));
  return list;
}
