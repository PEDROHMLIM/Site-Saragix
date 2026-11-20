// Servico de Consulta a Base de Finais Syzygy (7-Piece Endgame Tablebase)
// API Publica e Aberta fornecida pela Fundacao Lichess (https://tablebase.lichess.ovh)
// Licenca: Dominio Publico / Formato Aberto por Ronald de Man.

const tablebaseCache = new Map();

/**
 * Conta o numero total de pecas no tabuleiro a partir do FEN.
 * As tabelas de finais Syzygy cobrem posicoes com 7 pecas ou menos.
 */
export function countFenPieces(fen) {
  if (!fen) return 32;
  const boardPart = fen.trim().split(/\s+/)[0];
  const pieceMatches = boardPart.match(/[pnbrqkPNBRQK]/g);
  return pieceMatches ? pieceMatches.length : 0;
}

/**
 * Consulta a Base de Finais Syzygy do Lichess se houver 7 pecas ou menos no tabuleiro.
 */
export async function fetchTablebase(fen) {
  if (!fen) return null;
  const piecesCount = countFenPieces(fen);
  if (piecesCount > 7) return null;

  // Normaliza o FEN para uso como chave de cache
  const parts = fen.trim().split(/\s+/);
  const normalizedFen = `${parts[0]} ${parts[1] || 'w'} ${parts[2] || '-'} ${parts[3] || '-'}`;

  if (tablebaseCache.has(normalizedFen)) {
    return tablebaseCache.get(normalizedFen);
  }

  const url = `https://tablebase.lichess.ovh/standard?fen=${encodeURIComponent(fen.trim())}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const result = {
      piecesCount,
      category: data.category, // 'win' | 'loss' | 'draw' | 'unknown' | 'maybe-win' | 'maybe-loss'
      dtm: data.dtm ?? null, // Distance to mate em plies/lances
      dtz: data.dtz ?? null, // Distance to zero (conversao/regra dos 50)
      checkmate: Boolean(data.checkmate),
      stalemate: Boolean(data.stalemate),
      insufficientMaterial: Boolean(data.insufficient_material),
      moves: (data.moves || []).slice(0, 8).map((m) => ({
        uci: m.uci,
        san: m.san,
        category: m.category, // 'win' | 'loss' | 'draw'
        dtm: m.dtm ?? null,
        dtz: m.dtz ?? null,
      })),
    };

    tablebaseCache.set(normalizedFen, result);
    return result;
  } catch {
    clearTimeout(timeoutId);
    return null;
  }
}

/**
 * Retorna do cache se ja estiver disponivel em 0ms
 */
export function getTablebaseFromCache(fen) {
  if (!fen) return null;
  const parts = fen.trim().split(/\s+/);
  const normalizedFen = `${parts[0]} ${parts[1] || 'w'} ${parts[2] || '-'} ${parts[3] || '-'}`;
  return tablebaseCache.get(normalizedFen) || null;
}
