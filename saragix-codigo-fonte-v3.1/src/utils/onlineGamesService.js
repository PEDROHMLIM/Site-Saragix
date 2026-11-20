// Serviço de integração com APIs públicas de xadrez (Lichess e Chess.com)

/**
 * Busca partidas recentes de um jogador no Lichess via API pública
 * @param {string} username - Nick do jogador no Lichess
 * @param {number} max - Quantidade máxima de partidas (padrão: 10)
 */
export async function fetchLichessUserGames(username, max = 10) {
  const cleanUser = username.trim();
  if (!cleanUser) throw new Error('Informe um nick válido do Lichess.');

  const url = `https://lichess.org/api/games/user/${encodeURIComponent(cleanUser)}?max=${max}&pgnInJson=true&clocks=false&evals=false&opening=true`;
  
  const response = await fetch(url, {
    headers: {
      Accept: 'application/x-ndjson',
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Jogador "${cleanUser}" não encontrado no Lichess.`);
    }
    if (response.status === 429) {
      throw new Error('Muitas requisições ao Lichess. Aguarde alguns instantes.');
    }
    throw new Error(`Erro ao conectar ao Lichess (${response.status}).`);
  }

  const rawText = await response.text();
  if (!rawText.trim()) return [];

  const lines = rawText.trim().split('\n').filter(Boolean);
  return lines.map((line) => {
    try {
      const g = JSON.parse(line);
      const isWhite = g.players.white.user?.name?.toLowerCase() === cleanUser.toLowerCase();
      const whiteName = g.players.white.user?.name || 'Anônimo';
      const blackName = g.players.black.user?.name || 'Anônimo';
      const whiteRating = g.players.white.rating || '';
      const blackRating = g.players.black.rating || '';
      
      let result = '1/2-1/2';
      let userOutcome = 'draw';
      if (g.winner === 'white') {
        result = '1-0';
        userOutcome = isWhite ? 'win' : 'loss';
      } else if (g.winner === 'black') {
        result = '0-1';
        userOutcome = isWhite ? 'loss' : 'win';
      }

      let pgnText = g.pgn || '';
      if (!pgnText && g.moves) {
        const dateStr = g.createdAt ? new Date(g.createdAt).toISOString().slice(0, 10).replace(/-/g, '.') : '';
        pgnText = `[Event "${g.speed || 'Lichess'}"]\n[Site "https://lichess.org/${g.id}"]\n[Date "${dateStr}"]\n[White "${whiteName}"]\n[Black "${blackName}"]\n[Result "${result}"]\n[WhiteElo "${whiteRating}"]\n[BlackElo "${blackRating}"]\n\n${g.moves}`;
      }

      return {
        id: g.id,
        platform: 'Lichess',
        url: `https://lichess.org/${g.id}`,
        date: g.createdAt ? new Date(g.createdAt).toLocaleDateString('pt-BR') : '',
        speed: g.speed || 'partida',
        timeControl: g.clock ? `${g.clock.initial / 60}+${g.clock.increment}` : g.speed,
        rated: g.rated,
        white: whiteName,
        whiteRating,
        black: blackName,
        blackRating,
        userColor: isWhite ? 'w' : 'b',
        userOutcome,
        result,
        opening: g.opening?.name || '',
        eco: g.opening?.eco || '',
        movesCount: g.moves ? Math.ceil(g.moves.split(' ').length / 2) : 0,
        pgn: pgnText,
      };
    } catch {
      return null;
    }
  }).filter(Boolean);
}

/**
 * Busca partidas recentes de um jogador no Chess.com via API pública
 * @param {string} username - Nick do jogador no Chess.com
 * @param {number} max - Quantidade máxima de partidas (padrão: 10)
 */
export async function fetchChessComUserGames(username, max = 10) {
  const cleanUser = username.trim().toLowerCase();
  if (!cleanUser) throw new Error('Informe um nick válido do Chess.com.');

  // Obtém a lista de arquivos mensais disponíveis
  const archivesUrl = `https://api.chess.com/pub/player/${encodeURIComponent(cleanUser)}/games/archives`;
  const archRes = await fetch(archivesUrl);

  if (!archRes.ok) {
    if (archRes.status === 404) {
      throw new Error(`Jogador "${cleanUser}" não encontrado no Chess.com.`);
    }
    throw new Error(`Erro ao buscar arquivos no Chess.com (${archRes.status}).`);
  }

  const archData = await archRes.json();
  const archives = archData.archives || [];
  if (archives.length === 0) return [];

  // Coleta as partidas dos meses mais recentes até atingir a quantidade solicitada (max)
  let collectedGames = [];
  for (let i = archives.length - 1; i >= 0 && collectedGames.length < max; i--) {
    try {
      const gamesRes = await fetch(archives[i]);
      if (gamesRes.ok) {
        const gamesData = await gamesRes.json();
        const monthGames = gamesData.games || [];
        collectedGames = [...monthGames, ...collectedGames];
      }
    } catch {
      break;
    }
  }

  // Ordena pelas mais recentes
  const recentGames = collectedGames.slice(-max).reverse();

  return recentGames.map((g) => {
    const isWhite = g.white.username.toLowerCase() === cleanUser;
    const whiteName = g.white.username;
    const blackName = g.black.username;
    const whiteRating = g.white.rating || '';
    const blackRating = g.black.rating || '';

    let result = '1/2-1/2';
    let userOutcome = 'draw';
    if (g.white.result === 'win') {
      result = '1-0';
      userOutcome = isWhite ? 'win' : 'loss';
    } else if (g.black.result === 'win') {
      result = '0-1';
      userOutcome = isWhite ? 'loss' : 'win';
    }

    return {
      id: g.url ? g.url.split('/').pop() : Math.random().toString(36).slice(2),
      platform: 'Chess.com',
      url: g.url,
      date: g.end_time ? new Date(g.end_time * 1000).toLocaleDateString('pt-BR') : '',
      speed: g.time_class || 'partida',
      timeControl: g.time_control || '',
      rated: g.rated,
      white: whiteName,
      whiteRating,
      black: blackName,
      blackRating,
      userColor: isWhite ? 'w' : 'b',
      userOutcome,
      result,
      opening: '',
      eco: '',
      movesCount: 0,
      pgn: g.pgn || '',
    };
  });
}
