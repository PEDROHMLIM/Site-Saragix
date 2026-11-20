import { DAILY_GAMES } from './dailyGames.js';

/**
 * Biblioteca Curada de Partidas de Mestres do Saragix
 * Reúne mais de 370 obras-primas do xadrez mundial, campeonatos mundiais,
 * confrontos imortais e partidas históricas da FIDE e de mestres brasileiros.
 */

// Partidas icônicas adicionais de alta relevância histórica
export const SPECIAL_CURATED_GAMES = [
  {
    id: "gukesh-ding-2024-game-3",
    white: { name: "Gukesh, D", title: "GM", rating: "2783", country: "Índia", code: "IND" },
    black: { name: "Ding, Liren", title: "GM", rating: "2728", country: "China", code: "CHN" },
    event: "FIDE World Championship 2024",
    site: "Singapura",
    date: "2024.11.27",
    year: "2024",
    eco: "D02",
    opening: "Gambito da Dama Declinado: Variante das Trocas",
    speed: "Clássico",
    result: "1-0",
    highlight: "Gukesh vence a 3ª partida do match pelo título mundial em Singapura e empata o confronto rumo à conquista do campeonato mundial.",
    isWorldChampionship: true,
    isImmortal: false,
    isBrazil: false,
    championTag: "Gukesh",
    era: "modern",
    pgn: `[Event "FIDE World Championship 2024"]
[Site "Singapura"]
[Date "2024.11.27"]
[Round "3"]
[White "Gukesh, D."]
[Black "Ding, Liren"]
[Result "1-0"]
[ECO "D02"]

1. d4 Nf6 2. Nf3 d5 3. c4 e6 4. cxd5 exd5 5. Nc3 c6 6. Qc2 g6 7. h3 Bf5 8. Qb3 Qb6 9. g4 Qxb3 10. axb3 Bc2 11. Bf4 h5 12. Rg1 hxg4 13. hxg4 Nbd7 14. Nd2 Rg8 15. g5 Nh5 16. Bh2 Rh8 17. f3 Ng7 18. Bg3 Rh5 19. e4 dxe4 20. fxe4 Ne6 21. Rc1 Nxd4 22. Bf2 Bg7 23. Ne2 Nxb3 24. Rxc2 Nxd2 25. Kxd2 O-O-O 26. Kc1 Ne5 27. Nf4 Rh7 28. Rg3 Kb8 29. Ra3 a6 30. Rb3 Ka8 31. Be2 Bf8 32. Kb1 Be7 33. Ka2 Rd7 34. Be3 Rh4 35. Ng2 Rxe4 36. Bf1 Rg4 37. Bf4 1-0`
  },
  {
    id: "supi-carlsen-2020",
    white: { name: "Supi, Luis Paulo", title: "GM", rating: "2600", country: "Brasil", code: "BRA" },
    black: { name: "Carlsen, Magnus", title: "GM", rating: "2863", country: "Noruega", code: "NOR" },
    event: "Blitz Online",
    site: "Chess.com",
    date: "2020.05.26",
    year: "2020",
    eco: "B01",
    opening: "Defesa Escandinava: Variante Moderna",
    speed: "Blitz",
    result: "1-0",
    highlight: "A obra-prima brasileira onde o GM Luis Paulo Supi chocou o campeão mundial Magnus Carlsen com o fantástico sacrifício de dama 18.Qc6!!.",
    isWorldChampionship: false,
    isImmortal: true,
    isBrazil: true,
    championTag: "Carlsen",
    era: "modern",
    pgn: `[Event "Blitz"]
[Site "Chess.com"]
[Date "2020.05.26"]
[White "Supi, Luis Paulo"]
[Black "Carlsen, Magnus"]
[Result "1-0"]
[ECO "B01"]

1. e4 d5 2. exd5 Qxd5 3. Nf3 Bg4 4. Be2 Nc6 5. Nc3 Qd7 6. h3 Bxf3 7. Bxf3 O-O-O 8. O-O Nd4 9. a4 Kb8 10. Nb5 Nxf3+ 11. Qxf3 a6 12. c4 e5 13. d4 exd4 14. Bf4 axb5 15. axb5 Bd6 16. Ra2 Qf5 17. Rfa1 Kc8 18. Qc6 1-0`
  },
  {
    id: "fischer-mecking-1970",
    white: { name: "Fischer, Robert J", title: "GM", rating: "2760", country: "Estados Unidos", code: "USA" },
    black: { name: "Mecking, Henrique", title: "GM", rating: "2550", country: "Brasil", code: "BRA" },
    event: "Interzonal Palma de Mallorca",
    site: "Palma de Mallorca ESP",
    date: "1970.12.08",
    year: "1970",
    eco: "A01",
    opening: "Abertura Nimzowitsch-Larsen",
    speed: "Clássico",
    result: "1-0",
    highlight: "Confronto histórico entre Bobby Fischer e o jovem prodígio brasileiro Henrique Mecking (Mequinho) no lendário Torneio Interzonal de 1970.",
    isWorldChampionship: false,
    isImmortal: true,
    isBrazil: true,
    championTag: "Fischer",
    era: "soviet",
    pgn: `[Event "Palma de Mallorca Interzonal"]
[Site "Palma de Mallorca ESP"]
[Date "1970.12.08"]
[Round "21"]
[White "Fischer, Robert James"]
[Black "Mecking, Henrique"]
[Result "1-0"]
[ECO "A01"]

1. b3 d5 2. Bb2 c5 3. Nf3 Nc6 4. e3 Nf6 5. Bb5 Bd7 6. O-O e6 7. d3 Be7 8. Bxc6 Bxc6 9. Ne5 Rc8 10. Nd2 O-O 11. f4 Nd7 12. Qg4 Nxe5 13. Bxe5 Bf6 14. Rf3 Qe7 15. Raf1 a5 16. Rg3 Bxe5 17. fxe5 f5 18. exf6 Rxf6 19. Qxg7+ Qxg7 20. Rxf6 Qxg3 21. hxg3 Re8 22. g4 a4 23. Nf3 axb3 24. axb3 Kg7 25. g5 e5 26. Nh4 e4 27. Nf5+ Kg8 28. d4 c4 29. b4 Ra8 30. Kh2 c3 31. Ne7+ Kh8 32. Nxc6 bxc6 33. Rxc6 Ra3 34. Kg3 Rb3 35. Kf4 Kg7 36. Ke5 Rxb4 37. Kxd5 Rb2 38. Rxc3 Kg6 39. Kxe4 Kxg5 40. d5 Rb4+ 41. Ke5 Rg4 42. d6 1-0`
  },
  {
    id: "polugaevsky-mecking-1973",
    white: { name: "Polugaevsky, Lev", title: "GM", rating: "2645", country: "União Soviética", code: "URS" },
    black: { name: "Mecking, Henrique", title: "GM", rating: "2575", country: "Brasil", code: "BRA" },
    event: "Interzonal Petrópolis",
    site: "Petrópolis, Brasil",
    date: "1973.08.02",
    year: "1973",
    eco: "C97",
    opening: "Ruy Lopez: Variante Chigorin",
    speed: "Clássico",
    result: "1/2-1/2",
    highlight: "Em solo brasileiro, Henrique Mecking conquista o histórico Interzonal de Petrópolis 1973 que o qualificou para o Torneio de Candidatos da FIDE.",
    isWorldChampionship: false,
    isImmortal: false,
    isBrazil: true,
    championTag: null,
    era: "soviet",
    pgn: `[Event "Petropolis Interzonal"]
[Site "Petropolis, RJ Brazil"]
[Date "1973.08.02"]
[Round "9"]
[White "Polugaevsky, Lev"]
[Black "Mecking, Henrique"]
[Result "1/2-1/2"]
[ECO "C97"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Bd7 13. Nf1 Nc4 14. b3 Nb6 15. dxe5 dxe5 16. Ne3 Rad8 17. Qe2 Rfe8 18. c4 Bf8 19. Bb2 Bc8 20. Nd5 Nbxd5 21. exd5 e4 22. Nh2 bxc4 23. bxc4 Bd6 24. Nf1 Be5 25. Ba4 Bd7 26. Bxd7 Qxd7 27. Rab1 Rb8 28. Bxe5 Rxb1 29. Rxb1 Rxe5 30. Rb6 Ne8 31. Ne3 f5 32. Qb2 Re7 33. Rb8 f4 34. Nf1 f3 35. Ng3 fxg2 36. Kxg2 Kf7 37. Qe2 Nf6 38. Rb6 Re5 39. Rxa6 Rg5 40. Qe3 Rg6 41. Qxc5 Qf5 42. Qe3 Kg8 43. Re6 h5 44. h4 Rg4 45. Kh2 Rxh4+ 46. Kg1 Qg6 47. Kf1 Rg4 48. Ke2 h4 49. Nf1 Qf5 50. Nd2 Rf4 51. Ke1 Kh7 52. Re7 Qg5 53. Kf1 Qf5 54. Ke1 Qg5 55. Kf1 Qf5 1/2-1/2`
  },
  {
    id: "deep-blue-kasparov-1996",
    white: { name: "Deep Blue", title: "Comp", rating: "2700", country: "IBM", code: "WLD" },
    black: { name: "Kasparov, Garry", title: "GM", rating: "2775", country: "Rússia", code: "RUS" },
    event: "Man-Machine Match 1996",
    site: "Filadélfia, EUA",
    date: "1996.02.10",
    year: "1996",
    eco: "B22",
    opening: "Defesa Siciliana: Variante Alapin",
    speed: "Clássico",
    result: "1-0",
    highlight: "Primeira vez na história que um computador derrotou um campeão mundial de xadrez em ritmo clássico de torneio oficial.",
    isWorldChampionship: false,
    isImmortal: true,
    isBrazil: false,
    championTag: "Kasparov",
    era: "modern",
    pgn: `[Event "Deep Blue vs Kasparov Man-Machine Match"]
[Site "Philadelphia, PA USA"]
[Date "1996.02.10"]
[Round "1"]
[White "Deep Blue (Computer)"]
[Black "Kasparov, Garry"]
[Result "1-0"]
[ECO "B22"]

1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Be2 e6 7. h3 Bh5 8. O-O Nc6 9. Be3 cxd4 10. cxd4 Bb4 11. a3 Ba5 12. Nc3 Qd6 13. Nb5 Qe7 14. Ne5 Bxe2 15. Qxe2 O-O 16. Rac1 Rac8 17. Bg5 Bb6 18. Bxf6 gxf6 19. Nc4 Rfd8 20. Nxb6 axb6 21. Rfd1 f5 22. Qe3 Qf6 23. d5 Rxd5 24. Rxd5 exd5 25. b3 Kh8 26. Qxb6 Rg8 27. Qc5 d4 28. Nd6 f4 29. Nb7 Ne5 30. Qd5 f3 31. g3 Nd3 32. Rc7 Re8 33. Nd6 Re1+ 34. Kh2 Nxf2 35. Nxf7+ Kg7 36. Ng5+ Kh6 37. Rxh7+ 1-0`
  },
  {
    id: "alphazero-stockfish-2017",
    white: { name: "AlphaZero", title: "IA", rating: "3500", country: "DeepMind", code: "WLD" },
    black: { name: "Stockfish 8", title: "Engine", rating: "3400", country: "OpenSource", code: "WLD" },
    event: "London Match 2017",
    site: "Londres, Inglaterra",
    date: "2017.12.05",
    year: "2017",
    eco: "E15",
    opening: "Defesa Índia da Dama: Zugzwang Imortal",
    speed: "Clássico",
    result: "1-0",
    highlight: "A obra-prima posicional de inteligência artificial por redes neurais onde AlphaZero sufoca o Stockfish 8 com sacrifício de peão e controle total do tabuleiro.",
    isWorldChampionship: false,
    isImmortal: true,
    isBrazil: false,
    championTag: null,
    era: "modern",
    pgn: `[Event "AlphaZero vs Stockfish"]
[Site "London, England"]
[Date "2017.12.05"]
[White "AlphaZero"]
[Black "Stockfish 8"]
[Result "1-0"]
[ECO "E15"]

1. Nf3 Nf6 2. d4 e6 3. c4 b6 4. g3 Ba6 5. b3 Bb4+ 6. Bd2 Be7 7. Bg2 c6 8. Bc3 d5 9. Ne5 Nfd7 10. Nxd7 Nxd7 11. Nd2 O-O 12. O-O b5 13. c5 e5 14. b4 e4 15. Nb3 f5 16. Na5 Rc8 17. a4 f4 18. axb5 Bxb5 19. Bd2 g5 20. Bh3 Qe8 21. Ra3 Rd8 22. Nb3 a6 23. Nc1 Qg6 24. f3 Qg7 25. Bc3 Nf6 26. Nb3 h5 27. Be1 g4 28. fxg4 Nxg4 29. gxf4 Ne3+ 30. Rg3 Nxd1 31. Rxg7+ Kxg7 32. Rg1+ Kh7 33. Na5 Rxf4 34. e3 Rf6 35. Bh4 Rg8+ 36. Rxg8 Kxg8 37. Bxf6 Bxf6 38. Bd7 Bg5 39. Kd2 Nxe3 40. Kc3 Nd1+ 41. Kc2 Ba4+ 42. Kb1 e3 43. Bxc6 Nc3+ 44. Kb2 Bxc6 45. Kxc6 e2 46. b5 e1=Q 47. b6 Qe8+ 48. Kb7 Qe7+ 49. Kxa6 Qe2+ 50. Ka7 Nb5+ 51. Ka8 Nxd4 52. c6 Qe8+ 53. Ka7 Nxc6+ 54. Nxc6 Qxc6 55. b7 Qc7 56. Ka6 Bf4 57. h4 d4 58. b8=R+ Qxb8 59. Ka5 Bc7+ 60. Ka4 1-0`
  }
];

// Mapeamento dos Campeões Mundiais oficiais da FIDE/Históricos
export const WORLD_CHAMPIONS_LIST = [
  { name: "Wilhelm Steinitz", years: "1886–1894", country: "Áustria / EUA", code: "AUT" },
  { name: "Emanuel Lasker", years: "1894–1921", country: "Alemanha", code: "GER" },
  { name: "José Raúl Capablanca", years: "1921–1927", country: "Cuba", code: "CUB" },
  { name: "Alexander Alekhine", years: "1927–1935, 1937–1946", country: "Rússia / França", code: "FRA" },
  { name: "Max Euwe", years: "1935–1937", country: "Holanda", code: "NED" },
  { name: "Mikhail Botvinnik", years: "1948–1957, 1958–1960, 1961–1963", country: "União Soviética", code: "URS" },
  { name: "Vasily Smyslov", years: "1957–1958", country: "União Soviética", code: "URS" },
  { name: "Mikhail Tal", years: "1960–1961", country: "União Soviética", code: "URS" },
  { name: "Tigran Petrosian", years: "1963–1969", country: "União Soviética", code: "URS" },
  { name: "Boris Spassky", years: "1969–1972", country: "União Soviética", code: "URS" },
  { name: "Bobby Fischer", years: "1972–1975", country: "Estados Unidos", code: "USA" },
  { name: "Anatoly Karpov", years: "1975–1985", country: "União Soviética", code: "URS" },
  { name: "Garry Kasparov", years: "1985–2000", country: "Rússia", code: "RUS" },
  { name: "Vladimir Kramnik", years: "2000–2007", country: "Rússia", code: "RUS" },
  { name: "Viswanathan Anand", years: "2007–2013", country: "Índia", code: "IND" },
  { name: "Magnus Carlsen", years: "2013–2023", country: "Noruega", code: "NOR" },
  { name: "Ding Liren", years: "2023–2024", country: "China", code: "CHN" },
  { name: "D. Gukesh", years: "2024–presente", country: "Índia", code: "IND" },
];

function classifyGameEra(year) {
  const y = parseInt(year, 10) || 1950;
  if (y < 1900) return 'romantic';
  if (y <= 1945) return 'classical';
  if (y <= 1990) return 'soviet';
  return 'modern';
}

function detectChampion(name) {
  if (!name) return null;
  const n = name.toLowerCase();
  if (n.includes('steinitz')) return 'Steinitz';
  if (n.includes('lasker')) return 'Lasker';
  if (n.includes('capablanca')) return 'Capablanca';
  if (n.includes('alekhine')) return 'Alekhine';
  if (n.includes('euwe')) return 'Euwe';
  if (n.includes('botvinnik')) return 'Botvinnik';
  if (n.includes('smyslov')) return 'Smyslov';
  if (n.includes('tal')) return 'Tal';
  if (n.includes('petrosian')) return 'Petrosian';
  if (n.includes('spassky')) return 'Spassky';
  if (n.includes('fischer')) return 'Fischer';
  if (n.includes('karpov')) return 'Karpov';
  if (n.includes('kasparov')) return 'Kasparov';
  if (n.includes('kramnik')) return 'Kramnik';
  if (n.includes('anand')) return 'Anand';
  if (n.includes('carlsen')) return 'Carlsen';
  if (n.includes('ding')) return 'Ding';
  if (n.includes('gukesh')) return 'Gukesh';
  return null;
}

// Consolidação de todas as partidas da base
let consolidatedLibrary = null;

export function getAllMasterGames() {
  if (consolidatedLibrary) return consolidatedLibrary;

  const baseGames = DAILY_GAMES.map((g) => {
    const era = classifyGameEra(g.year);
    const champ = detectChampion(g.white?.name) || detectChampion(g.black?.name);
    const ev = (g.event || '').toLowerCase();
    const isWCh = ev.includes('match') || ev.includes('world') || ev.includes('championship') || ev.includes('candidat');
    const isImm = ev.includes('immortal') || ev.includes('evergreen') || ev.includes('opera') || (g.highlight || '').toLowerCase().includes('obra-prima') || (g.highlight || '').toLowerCase().includes('lendár');
    const isBr = (g.white?.country || '').includes('Brasil') || (g.black?.country || '').includes('Brasil') || (g.white?.name || '').includes('Mecking') || (g.black?.name || '').includes('Mecking');

    return {
      ...g,
      era,
      championTag: champ,
      isWorldChampionship: isWCh,
      isImmortal: isImm,
      isBrazil: isBr,
    };
  });

  consolidatedLibrary = [...SPECIAL_CURATED_GAMES, ...baseGames];
  return consolidatedLibrary;
}

export function searchMasterGames({
  query = '',
  category = 'all', // 'all' | 'champions' | 'immortal' | 'brazil' | 'world_championships'
  championFilter = '',
  eraFilter = '',
  resultFilter = '',
} = {}) {
  const all = getAllMasterGames();
  const q = query.trim().toLowerCase();

  return all.filter((g) => {
    // Busca textual livre
    if (q) {
      const matchText =
        (g.white?.name || '').toLowerCase().includes(q) ||
        (g.black?.name || '').toLowerCase().includes(q) ||
        (g.event || '').toLowerCase().includes(q) ||
        (g.site || '').toLowerCase().includes(q) ||
        (g.year || '').toString().includes(q) ||
        (g.eco || '').toLowerCase().includes(q) ||
        (g.opening || '').toLowerCase().includes(q) ||
        (g.highlight || '').toLowerCase().includes(q);
      if (!matchText) return false;
    }

    // Filtro por Categoria
    if (category === 'champions') {
      if (!g.championTag) return false;
    } else if (category === 'immortal') {
      if (!g.isImmortal) return false;
    } else if (category === 'brazil') {
      if (!g.isBrazil) return false;
    } else if (category === 'world_championships') {
      if (!g.isWorldChampionship) return false;
    }

    // Filtro específico por Campeão Mundial
    if (championFilter) {
      if (g.championTag !== championFilter && !((g.white?.name || '').includes(championFilter) || (g.black?.name || '').includes(championFilter))) {
        return false;
      }
    }

    // Filtro por Época
    if (eraFilter && g.era !== eraFilter) {
      return false;
    }

    // Filtro por Resultado
    if (resultFilter && g.result !== resultFilter) {
      return false;
    }

    return true;
  });
}
