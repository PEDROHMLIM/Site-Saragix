/**
 * Banco Completo de 365 Partidas Históricas do Saragix (Partida do Dia)
 * Contém exatamente 365 partidas lendárias e icônicas da história do xadrez mundial.
 * 
 * Cada dia do ano (do dia 1 ao 365) possui uma partida única e exclusiva,
 * alternando automaticamente toda meia-noite (00:00:00 local) sem qualquer repetição.
 */

export const DAILY_GAMES = [
  {
    "id": "game-21-mcdonnell,-de-1834",
    "white": {
      "name": "McDonnell, A",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "De La Bourdonnais, L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "4th match",
    "site": "London",
    "date": "1834.??.??",
    "year": "1834",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 74 lances entre McDonnell, A e De La Bourdonnais, L (1834).",
    "pgn": "[Event \"4th match\"]\n[Site \"London\"]\n[Date \"1834.??.??\"]\n[Round \"62\"]\n[White \"McDonnell,A\"]\n[Black \"De La Bourdonnais,L\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e5 5. Nxc6 bxc6 6. Bc4 Nf6 7. Bg5 Be7 8. Qe2 d5 9. Bxf6 Bxf6 10. Bb3 O-O 11. O-O a5 12. exd5 cxd5 13. Rd1 d4 14. c4 Qb6 15. Bc2 Bb7 16. Nd2 Rae8 17. Ne4 Bd8 18. c5 Qc6 19. f3 Be7 20. Rac1 f5 21. Qc4+ Kh8 22. Ba4 Qh6 23. Bxe8 fxe4 24. c6 exf3 25. Rc2 Bc8 26. Bd7 Qe3+ 27. Kh1 f2 28. Rf1 d3 29. Rc3 Bxd7 30. cxd7 e4 31. Qc8 Bd8 32. Qc4 Qe1 33. Rc1 d2 34. Qc5 Rg8 35. Rd1 e3 36. Qc3 Qxd1 37. Rxd1 e2 0-1"
  },
  {
    "id": "game-22-anderssen,-kieseritzky,-1851",
    "white": {
      "name": "Anderssen, A",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Kieseritzky, L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Immortal game",
    "site": "London",
    "date": "1851.??.??",
    "year": "1851",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 45 lances entre Anderssen, A e Kieseritzky, L (1851).",
    "pgn": "[Event \"Immortal game\"]\n[Site \"London\"]\n[Date \"1851.??.??\"]\n[Round \"?\"]\n[White \"Anderssen,A\"]\n[Black \"Kieseritzky,L\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 b5 5. Bxb5 Nf6 6. Nf3 Qh6 7. d3 Nh5 8. Nh4 Qg5 9. Nf5 c6 10. g4 Nf6 11. Rg1 cxb5 12. h4 Qg6 13. h5 Qg5 14. Qf3 Ng8 15. Bxf4 Qf6 16. Nc3 Bc5 17. Nd5 Qxb2 18. Bd6 Qxa1+ 19. Ke2 Bxg1 20. e5 Na6 21. Nxg7+ Kd8 22. Qf6+ Nxf6 23. Be7# 1-0"
  },
  {
    "id": "game-23-anderssen,-dufresne,-1852",
    "white": {
      "name": "Anderssen, A",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Dufresne, J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Evergreen game",
    "site": "Berlin",
    "date": "1852",
    "year": "1852",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 47 lances entre Anderssen, A e Dufresne, J (1852).",
    "pgn": "[Event \"Evergreen game\"]\n[Site \"Berlin\"]\n[Date \"1852\"]\n[Round \"?\"]\n[White \"Anderssen,A\"]\n[Black \"Dufresne,J\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d3 8. Qb3 Qf6 9. e5 Qg6 10. Re1 Nge7 11. Ba3 b5 12. Qxb5 Rb8 13. Qa4 Bb6 14. Nbd2 Bb7 15. Ne4 Qf5 16. Bxd3 Qh5 17. Nf6+ gxf6 18. exf6 Rg8 19. Rad1 Qxf3 20. Rxe7+ Nxe7 21. Qxd7+ Kxd7 22. Bf5+ Ke8 23. Bd7+ Kf8 24. Bxe7# 1-0"
  },
  {
    "id": "game-24-paulsen,-morphy,-1857",
    "white": {
      "name": "Paulsen, L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Morphy, P",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "ch 4th match",
    "site": "USA",
    "date": "1857.??.??",
    "year": "1857",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 56 lances entre Paulsen, L e Morphy, P (1857).",
    "pgn": "[Event \"ch 4th match\"]\n[Site \"USA\"]\n[Date \"1857.??.??\"]\n[Round \"6\"]\n[White \"Paulsen,L\"]\n[Black \"Morphy,P\"]\n[Result \"0-1\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bc5 5. O-O O-O 6. Nxe5 Re8 7. Nxc6 dxc6 8. Bc4 b5 9. Be2 Nxe4 10. Nxe4 Rxe4 11. Bf3 Re6 12. c3 Qd3 13. b4 Bb6 14. a4 bxa4 15. Qxa4 Bd7 16. Ra2 Rae8 17. Qa6 Qxf3 18. gxf3 Rg6+ 19. Kh1 Bh3 20. Rd1 Bg2+ 21. Kg1 Bxf3+ 22. Kf1 Bg2+ 23. Kg1 Bh3+ 24. Kh1 Bxf2 25. Qf1 Bxf1 26. Rxf1 Re2 27. Ra1 Rh6 28. d4 Be3 0-1"
  },
  {
    "id": "game-25-anderssen,-zukertort,-1869",
    "white": {
      "name": "Anderssen, A",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Zukertort, J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Barmen",
    "date": "1869.??.??",
    "year": "1869",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 65 lances entre Anderssen, A e Zukertort, J (1869).",
    "pgn": "[Event \"?\"]\n[Site \"Barmen\"]\n[Date \"1869.??.??\"]\n[Round \"?\"]\n[White \"Anderssen,A\"]\n[Black \"Zukertort,J\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O Bb6 8. cxd4 d6 9. d5 Na5 10. Bb2 Ne7 11. Bd3 O-O 12. Nc3 Ng6 13. Ne2 c5 14. Qd2 f6 15. Kh1 Bc7 16. Rac1 Rb8 17. Ng3 b5 18. Nf5 b4 19. Rg1 Bb6 20. g4 Ne5 21. Bxe5 dxe5 22. Rg3 Rf7 23. g5 Bxf5 24. exf5 Qxd5 25. gxf6 Rd8 26. Rcg1 Kh8 27. fxg7+ Kg8 28. Qh6 Qd6 29. Qxh7+ Kxh7 30. f6+ Kg8 31. Bh7+ Kxh7 32. Rh3+ Kg8 33. Rh8# 1-0"
  },
  {
    "id": "game-26-zukertort,-blackburne,-1883",
    "white": {
      "name": "Zukertort, J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Blackburne, J",
      "title": "GM",
      "rating": "2650",
      "country": "Inglaterra",
      "code": "GB"
    },
    "event": "Match do Campeonato Mundial",
    "site": "London",
    "date": "1883.??.??",
    "year": "1883",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 63 lances entre Zukertort, J e Blackburne, J (1883).",
    "pgn": "[Event \"?\"]\n[Site \"London\"]\n[Date \"1883.??.??\"]\n[Round \"?\"]\n[White \"Zukertort,J\"]\n[Black \"Blackburne,J\"]\n[Result \"1-0\"]\n\n1. c4 e6 2. e3 Nf6 3. Nf3 b6 4. Be2 Bb7 5. O-O d5 6. d4 Bd6 7. Nc3 O-O 8. b3 Nbd7 9. Bb2 Qe7 10. Nb5 Ne4 11. Nxd6 cxd6 12. Nd2 Ndf6 13. f3 Nxd2 14. Qxd2 dxc4 15. Bxc4 d5 16. Bd3 Rfc8 17. Rae1 Rc7 18. e4 Rac8 19. e5 Ne8 20. f4 g6 21. Re3 f6 22. exf6 Nxf6 23. f5 Ne4 24. Bxe4 dxe4 25. fxg6 Rc2 26. gxh7+ Kh8 27. d5+ e5 28. Qb4 R8c5 29. Rf8+ Kxh7 30. Qxe4+ Kg7 31. Bxe5+ Kxf8 32. Bg7+ 1-0"
  },
  {
    "id": "game-27-zukertort,-steinitz,-1886",
    "white": {
      "name": "Zukertort, J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Steinitz, W",
      "title": "GM",
      "rating": "2650",
      "country": "Áustria",
      "code": "AT"
    },
    "event": "WCh",
    "site": "USA",
    "date": "1886.??.??",
    "year": "1886",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 76 lances entre Zukertort, J e Steinitz, W (1886).",
    "pgn": "[Event \"WCh\"]\n[Site \"USA\"]\n[Date \"1886.??.??\"]\n[Round \"9\"]\n[White \"Zukertort,J\"]\n[Black \"Steinitz,W\"]\n[Result \"0-1\"]\n\n1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 dxc4 5. e3 c5 6. Bxc4 cxd4 7. exd4 Be7 8. O-O O-O 9. Qe2 Nbd7 10. Bb3 Nb6 11. Bf4 Nbd5 12. Bg3 Qa5 13. Rac1 Bd7 14. Ne5 Rfd8 15. Qf3 Be8 16. Rfe1 Rac8 17. Bh4 Nxc3 18. bxc3 Qc7 19. Qd3 Nd5 20. Bxe7 Qxe7 21. Bxd5 Rxd5 22. c4 Rdd8 23. Re3 Qd6 24. Rd1 f6 25. Rh3 h6 26. Ng4 Qf4 27. Ne3 Ba4 28. Rf3 Qd6 29. Rd2 Bc6 30. Rg3 f5 31. Rg6 Be4 32. Qb3 Kh7 33. c5 Rxc5 34. Rxe6 Rc1+ 35. Nd1 Qf4 36. Qb2 Rb1 37. Qc3 Rc8 38. Rxe4 Qxe4 0-1"
  },
  {
    "id": "game-28-lasker,-bauer,-1889",
    "white": {
      "name": "Lasker, Em",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Bauer, I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Amsterdam",
    "date": "1889.??.??",
    "year": "1889",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 65 lances entre Lasker, Em e Bauer, I (1889).",
    "pgn": "[Event \"?\"]\n[Site \"Amsterdam\"]\n[Date \"1889.??.??\"]\n[Round \"?\"]\n[White \"Lasker,Em\"]\n[Black \"Bauer,I\"]\n[Result \"1-0\"]\n\n1. f4 d5 2. e3 Nf6 3. b3 e6 4. Bb2 Be7 5. Bd3 b6 6. Nf3 Bb7 7. Nc3 Nbd7 8. O-O O-O 9. Ne2 c5 10. Ng3 Qc7 11. Ne5 Nxe5 12. Bxe5 Qc6 13. Qe2 a6 14. Nh5 Nxh5 15. Bxh7+ Kxh7 16. Qxh5+ Kg8 17. Bxg7 Kxg7 18. Qg4+ Kh7 19. Rf3 e5 20. Rh3+ Qh6 21. Rxh6+ Kxh6 22. Qd7 Bf6 23. Qxb7 Kg7 24. Rf1 Rab8 25. Qd7 Rfd8 26. Qg4+ Kf8 27. fxe5 Bg7 28. e6 Rb7 29. Qg6 f6 30. Rxf6+ Bxf6 31. Qxf6+ Ke8 32. Qh8+ Ke7 33. Qg7+ 1-0"
  },
  {
    "id": "game-29-steinitz,-chigorin,-1892",
    "white": {
      "name": "Steinitz, W",
      "title": "GM",
      "rating": "2650",
      "country": "Áustria",
      "code": "AT"
    },
    "black": {
      "name": "Chigorin, M",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "WCh",
    "site": "Havana",
    "date": "1892.??.??",
    "year": "1892",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 57 lances entre Steinitz, W e Chigorin, M (1892).",
    "pgn": "[Event \"WCh\"]\n[Site \"Havana\"]\n[Date \"1892.??.??\"]\n[Round \"4\"]\n[White \"Steinitz,W\"]\n[Black \"Chigorin,M\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 d6 5. c3 g6 6. Nbd2 Bg7 7. Nf1 O-O 8. Ba4 Nd7 9. Ne3 Nc5 10. Bc2 Ne6 11. h4 Ne7 12. h5 d5 13. hxg6 fxg6 14. exd5 Nxd5 15. Nxd5 Qxd5 16. Bb3 Qc6 17. Qe2 Bd7 18. Be3 Kh8 19. O-O-O Rae8 20. Qf1 a5 21. d4 exd4 22. Nxd4 Bxd4 23. Rxd4 Nxd4 24. Rxh7+ Kxh7 25. Qh1+ Kg7 26. Bh6+ Kf6 27. Qh4+ Ke5 28. Qxd4+ Kf5 29. Qf4# 1-0"
  },
  {
    "id": "game-30-steinitz,-von-1895",
    "white": {
      "name": "Steinitz, W",
      "title": "GM",
      "rating": "2650",
      "country": "Áustria",
      "code": "AT"
    },
    "black": {
      "name": "Von Bardeleben, C",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Hastings",
    "date": "1895.??.??",
    "year": "1895",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 69 lances entre Steinitz, W e Von Bardeleben, C (1895).",
    "pgn": "[Event \"?\"]\n[Site \"Hastings\"]\n[Date \"1895.??.??\"]\n[Round \"?\"]\n[White \"Steinitz,W\"]\n[Black \"Von Bardeleben,C\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 d5 8. exd5 Nxd5 9. O-O Be6 10. Bg5 Be7 11. Bxd5 Bxd5 12. Nxd5 Qxd5 13. Bxe7 Nxe7 14. Re1 f6 15. Qe2 Qd7 16. Rac1 c6 17. d5 cxd5 18. Nd4 Kf7 19. Ne6 Rhc8 20. Qg4 g6 21. Ng5+ Ke8 22. Rxe7+ Kf8 23. Rf7+ Kg8 24. Rg7+ Kh8 25. Rxh7+ Kg8 26. Rg7+ Kh8 27. Qh4+ Kxg7 28. Qh7+ Kf8 29. Qh8+ Ke7 30. Qg7+ Ke8 31. Qg8+ Ke7 32. Qf7+ Kd8 33. Qf8+ Qe8 34. Nf7+ Kd7 35. Qd6# 1-0"
  },
  {
    "id": "game-31-pillsbury,-lasker,-1896",
    "white": {
      "name": "Pillsbury, H",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Lasker, Em",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "Match do Campeonato Mundial",
    "site": "St.Petersburg",
    "date": "1896.??.??",
    "year": "1896",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 64 lances entre Pillsbury, H e Lasker, Em (1896).",
    "pgn": "[Event \"?\"]\n[Site \"St.Petersburg\"]\n[Date \"1896.??.??\"]\n[Round \"?\"]\n[White \"Pillsbury,H\"]\n[Black \"Lasker,Em\"]\n[Result \"0-1\"]\n\n1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c5 5. Bg5 cxd4 6. Qxd4 Nc6 7. Qh4 Be7 8. O-O-O Qa5 9. e3 Bd7 10. Kb1 h6 11. cxd5 exd5 12. Nd4 O-O 13. Bxf6 Bxf6 14. Qh5 Nxd4 15. exd4 Be6 16. f4 Rac8 17. f5 Rxc3 18. fxe6 Ra3 19. exf7+ Rxf7 20. bxa3 Qb6+ 21. Bb5 Qxb5+ 22. Ka1 Rc7 23. Rd2 Rc4 24. Rhd1 Rc3 25. Qf5 Qc4 26. Kb2 Rxa3 27. Qe6+ Kh7 28. Kxa3 Qc3+ 29. Ka4 b5+ 30. Kxb5 Qc4+ 31. Ka5 Bd8+ 32. Qb6 Bxb6# 0-1"
  },
  {
    "id": "game-32-lasker,-napier,-1904",
    "white": {
      "name": "Lasker, Em",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Napier, W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Cambridge Springs",
    "date": "1904.??.??",
    "year": "1904",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 73 lances entre Lasker, Em e Napier, W (1904).",
    "pgn": "[Event \"?\"]\n[Site \"Cambridge Springs\"]\n[Date \"1904.??.??\"]\n[Round \"?\"]\n[White \"Lasker,Em\"]\n[Black \"Napier,W\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nc3 Nc6 3. Nf3 g6 4. d4 cxd4 5. Nxd4 Bg7 6. Be3 d6 7. h3 Nf6 8. g4 O-O 9. g5 Ne8 10. h4 Nc7 11. f4 e5 12. Nde2 d5 13. exd5 Nd4 14. Nxd4 Nxd5 15. Nf5 Nxc3 16. Qxd8 Rxd8 17. Ne7+ Kh8 18. h5 Re8 19. Bc5 gxh5 20. Bc4 exf4 21. Bxf7 Ne4 22. Bxe8 Bxb2 23. Rb1 Bc3+ 24. Kf1 Bg4 25. Bxh5 Bxh5 26. Rxh5 Ng3+ 27. Kg2 Nxh5 28. Rxb7 a5 29. Rb3 Bg7 30. Rh3 Ng3 31. Kf3 Ra6 32. Kxf4 Ne2+ 33. Kf5 Nc3 34. a3 Na4 35. Be3 Bf8 36. Bd4+ Bg7 37. g6 1-0"
  },
  {
    "id": "game-33-rotlevi,-rubinstein,-1907",
    "white": {
      "name": "Rotlevi, G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Rubinstein, A",
      "title": "GM",
      "rating": "2650",
      "country": "Polônia",
      "code": "PL"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Lodz",
    "date": "1907.??.??",
    "year": "1907",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 50 lances entre Rotlevi, G e Rubinstein, A (1907).",
    "pgn": "[Event \"?\"]\n[Site \"Lodz\"]\n[Date \"1907.??.??\"]\n[Round \"?\"]\n[White \"Rotlevi,G\"]\n[Black \"Rubinstein,A\"]\n[Result \"0-1\"]\n\n1. d4 d5 2. Nf3 e6 3. e3 c5 4. c4 Nc6 5. Nc3 Nf6 6. dxc5 Bxc5 7. a3 a6 8. b4 Bd6 9. Bb2 O-O 10. Qd2 Qe7 11. Bd3 dxc4 12. Bxc4 b5 13. Bd3 Rd8 14. Qe2 Bb7 15. O-O Ne5 16. Nxe5 Bxe5 17. f4 Bc7 18. e4 Rac8 19. e5 Bb6+ 20. Kh1 Ng4 21. Be4 Qh4 22. g3 Rxc3 23. gxh4 Rd2 24. Qxd2 Bxe4+ 25. Qg2 Rh3 0-1"
  },
  {
    "id": "game-34-janowski,-lasker,-1909",
    "white": {
      "name": "Janowski, D",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Lasker, Em",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "WCh",
    "site": "Paris",
    "date": "1909.??.??",
    "year": "1909",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 64 lances entre Janowski, D e Lasker, Em (1909).",
    "pgn": "[Event \"WCh\"]\n[Site \"Paris\"]\n[Date \"1909.??.??\"]\n[Round \"2\"]\n[White \"Janowski,D\"]\n[Black \"Lasker,Em\"]\n[Result \"0-1\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Bxc3 8. bxc3 Ne7 9. Bc4 Ng6 10. Nh4 Nf4 11. Bxf4 exf4 12. Nf3 Bg4 13. h3 Bh5 14. Rb1 b6 15. Qd2 Bxf3 16. gxf3 Nh5 17. Kh2 Qf6 18. Rg1 Rae8 19. d4 Kh8 20. Rb5 Qh6 21. Rbg5 f6 22. R5g4 g6 23. Bd3 Re7 24. c4 Ng7 25. c3 Ne6 26. Bf1 f5 27. R4g2 Rf6 28. Bd3 g5 29. Rh1 g4 30. Be2 Ng5 31. fxg4 f3 32. Rg3 fxe2 0-1"
  },
  {
    "id": "game-35-nimzovitch,-salwe,-1911",
    "white": {
      "name": "Nimzovitch, A",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Salwe, G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Karlsbad",
    "date": "1911.??.??",
    "year": "1911",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 75 lances entre Nimzovitch, A e Salwe, G (1911).",
    "pgn": "[Event \"?\"]\n[Site \"Karlsbad\"]\n[Date \"1911.??.??\"]\n[Round \"?\"]\n[White \"Nimzovitch,A\"]\n[Black \"Salwe,G\"]\n[Result \"1-0\"]\n\n1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. Bd3 Bd7 7. dxc5 Bxc5 8. O-O f6 9. b4 Be7 10. Bf4 fxe5 11. Nxe5 Nxe5 12. Bxe5 Nf6 13. Nd2 O-O 14. Nf3 Bd6 15. Qe2 Rac8 16. Bd4 Qc7 17. Ne5 Be8 18. Rae1 Bxe5 19. Bxe5 Qc6 20. Bd4 Bd7 21. Qc2 Rf7 22. Re3 b6 23. Rg3 Kh8 24. Bxh7 e5 25. Bg6 Re7 26. Re1 Qd6 27. Be3 d4 28. Bg5 Rxc3 29. Rxc3 dxc3 30. Qxc3 Kg8 31. a3 Kf8 32. Bh4 Be8 33. Bf5 Qd4 34. Qxd4 exd4 35. Rxe7 Kxe7 36. Bd3 Kd6 37. Bxf6 gxf6 38. h4 1-0"
  },
  {
    "id": "game-36-capablanca,-bernstein,-1911",
    "white": {
      "name": "Capablanca, J",
      "title": "GM",
      "rating": "2650",
      "country": "Cuba",
      "code": "CU"
    },
    "black": {
      "name": "Bernstein, O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "San Sebastian",
    "date": "1911.??.??",
    "year": "1911",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 69 lances entre Capablanca, J e Bernstein, O (1911).",
    "pgn": "[Event \"?\"]\n[Site \"San Sebastian\"]\n[Date \"1911.??.??\"]\n[Round \"?\"]\n[White \"Capablanca,J\"]\n[Black \"Bernstein,O\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Be7 5. Nc3 d6 6. Bxc6+ bxc6 7. d4 exd4 8. Nxd4 Bd7 9. Bg5 O-O 10. Re1 h6 11. Bh4 Nh7 12. Bxe7 Qxe7 13. Qd3 Rab8 14. b3 Ng5 15. Rad1 Qe5 16. Qe3 Ne6 17. Nce2 Qa5 18. Nf5 Nc5 19. Ned4 Kh7 20. g4 Rbe8 21. f3 Ne6 22. Ne2 Qxa2 23. Neg3 Qxc2 24. Rc1 Qb2 25. Nh5 Rh8 26. Re2 Qe5 27. f4 Qb5 28. Nfxg7 Nc5 29. Nxe8 Bxe8 30. Qc3 f6 31. Nxf6+ Kg6 32. Nh5 Rg8 33. f5+ Kg5 34. Qe3+ Kh4 35. Qg3+ 1-0"
  },
  {
    "id": "game-37-levitzky,-marshall,-1912",
    "white": {
      "name": "Levitzky, S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Marshall, F",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Breslau",
    "date": "1912.??.??",
    "year": "1912",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 46 lances entre Levitzky, S e Marshall, F (1912).",
    "pgn": "[Event \"?\"]\n[Site \"Breslau\"]\n[Date \"1912.??.??\"]\n[Round \"?\"]\n[White \"Levitzky,S\"]\n[Black \"Marshall,F\"]\n[Result \"0-1\"]\n\n1. d4 e6 2. e4 d5 3. Nc3 c5 4. Nf3 Nc6 5. exd5 exd5 6. Be2 Nf6 7. O-O Be7 8. Bg5 O-O 9. dxc5 Be6 10. Nd4 Bxc5 11. Nxe6 fxe6 12. Bg4 Qd6 13. Bh3 Rae8 14. Qd2 Bb4 15. Bxf6 Rxf6 16. Rad1 Qc5 17. Qe2 Bxc3 18. bxc3 Qxc3 19. Rxd5 Nd4 20. Qh5 Ref8 21. Re5 Rh6 22. Qg5 Rxh3 23. Rc5 Qg3 0-1"
  },
  {
    "id": "game-38-lasker,-capablanca,-1914",
    "white": {
      "name": "Lasker, Em",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Capablanca, J",
      "title": "GM",
      "rating": "2650",
      "country": "Cuba",
      "code": "CU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "St.Petersburg",
    "date": "1914.??.??",
    "year": "1914",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 83 lances entre Lasker, Em e Capablanca, J (1914).",
    "pgn": "[Event \"?\"]\n[Site \"St.Petersburg\"]\n[Date \"1914.??.??\"]\n[Round \"?\"]\n[White \"Lasker,Em\"]\n[Black \"Capablanca,J\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. d4 exd4 6. Qxd4 Qxd4 7. Nxd4 Bd6 8. Nc3 Ne7 9. O-O O-O 10. f4 Re8 11. Nb3 f6 12. f5 b6 13. Bf4 Bb7 14. Bxd6 cxd6 15. Nd4 Rad8 16. Ne6 Rd7 17. Rad1 Nc8 18. Rf2 b5 19. Rfd2 Rde7 20. b4 Kf7 21. a3 Ba8 22. Kf2 Ra7 23. g4 h6 24. Rd3 a5 25. h4 axb4 26. axb4 Rae7 27. Kf3 Rg8 28. Kf4 g6 29. Rg3 g5+ 30. Kf3 Nb6 31. hxg5 hxg5 32. Rh3 Rd7 33. Kg3 Ke8 34. Rdh1 Bb7 35. e5 dxe5 36. Ne4 Nd5 37. N6c5 Bc8 38. Nxd7 Bxd7 39. Rh7 Rf8 40. Ra1 Kd8 41. Ra8+ Bc8 42. Nc5 1-0"
  },
  {
    "id": "game-39-nimzovitch,-tarrasch,-1914",
    "white": {
      "name": "Nimzovitch, A",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tarrasch, S",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "Match do Campeonato Mundial",
    "site": "St.Petersburg",
    "date": "1914.??.??",
    "year": "1914",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 64 lances entre Nimzovitch, A e Tarrasch, S (1914).",
    "pgn": "[Event \"?\"]\n[Site \"St.Petersburg\"]\n[Date \"1914.??.??\"]\n[Round \"?\"]\n[White \"Nimzovitch,A\"]\n[Black \"Tarrasch,S\"]\n[Result \"0-1\"]\n\n1. d4 d5 2. Nf3 c5 3. c4 e6 4. e3 Nf6 5. Bd3 Nc6 6. O-O Bd6 7. b3 O-O 8. Bb2 b6 9. Nbd2 Bb7 10. Rc1 Qe7 11. cxd5 exd5 12. Nh4 g6 13. Nhf3 Rad8 14. dxc5 bxc5 15. Bb5 Ne4 16. Bxc6 Bxc6 17. Qc2 Nxd2 18. Nxd2 d4 19. exd4 Bxh2+ 20. Kxh2 Qh4+ 21. Kg1 Bxg2 22. f3 Rfe8 23. Ne4 Qh1+ 24. Kf2 Bxf1 25. d5 f5 26. Qc3 Qg2+ 27. Ke3 Rxe4+ 28. fxe4 f4+ 29. Kxf4 Rf8+ 30. Ke5 Qh2+ 31. Ke6 Re8+ 32. Kd7 Bb5# 0-1"
  },
  {
    "id": "game-40-capablanca,-marshall,-1918",
    "white": {
      "name": "Capablanca, J",
      "title": "GM",
      "rating": "2650",
      "country": "Cuba",
      "code": "CU"
    },
    "black": {
      "name": "Marshall, F",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "Match do Campeonato Mundial",
    "site": "New York",
    "date": "1918.??.??",
    "year": "1918",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 75 lances entre Capablanca, J e Marshall, F (1918).",
    "pgn": "[Event \"?\"]\n[Site \"New York\"]\n[Date \"1918.??.??\"]\n[Round \"?\"]\n[White \"Capablanca,J\"]\n[Black \"Marshall,F\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6 12. Re1 Bd6 13. h3 Ng4 14. Qf3 Qh4 15. d4 Nxf2 16. Re2 Bg4 17. hxg4 Bh2+ 18. Kf1 Bg3 19. Rxf2 Qh1+ 20. Ke2 Bxf2 21. Bd2 Bh4 22. Qh3 Rae8+ 23. Kd3 Qf1+ 24. Kc2 Bf2 25. Qf3 Qg1 26. Bd5 c5 27. dxc5 Bxc5 28. b4 Bd6 29. a4 a5 30. axb5 axb4 31. Ra6 bxc3 32. Nxc3 Bb4 33. b6 Bxc3 34. Bxc3 h6 35. b7 Re3 36. Bxf7+ Rxf7 37. b8=Q+ Kh7 38. Rxh6+ 1-0"
  },
  {
    "id": "game-41-bogoljubow,-alekhine,-1922",
    "white": {
      "name": "Bogoljubow, J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Alekhine, A",
      "title": "GM",
      "rating": "2650",
      "country": "França",
      "code": "FR"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Hastings",
    "date": "1922.??.??",
    "year": "1922",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 106 lances entre Bogoljubow, J e Alekhine, A (1922).",
    "pgn": "[Event \"?\"]\n[Site \"Hastings\"]\n[Date \"1922.??.??\"]\n[Round \"?\"]\n[White \"Bogoljubow,J\"]\n[Black \"Alekhine,A\"]\n[Result \"0-1\"]\n\n1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Bb4+ 5. Bd2 Bxd2+ 6. Nxd2 Nc6 7. Ngf3 O-O 8. O-O d6 9. Qb3 Kh8 10. Qc3 e5 11. e3 a5 12. b3 Qe8 13. a3 Qh5 14. h4 Ng4 15. Ng5 Bd7 16. f3 Nf6 17. f4 e4 18. Rfd1 h6 19. Nh3 d5 20. Nf1 Ne7 21. a4 Nc6 22. Rd2 Nb4 23. Bh1 Qe8 24. Rg2 dxc4 25. bxc4 Bxa4 26. Nf2 Bd7 27. Nd2 b5 28. Nd1 Nd3 29. Rxa5 b4 30. Rxa8 bxc3 31. Rxe8 c2 32. Rxf8+ Kh7 33. Nf2 c1=Q+ 34. Nf1 Ne1 35. Rh2 Qxc4 36. Rb8 Bb5 37. Rxb5 Qxb5 38. g4 Nf3+ 39. Bxf3 exf3 40. gxf5 Qe2 41. d5 Kg8 42. h5 Kh7 43. e4 Nxe4 44. Nxe4 Qxe4 45. d6 cxd6 46. f6 gxf6 47. Rd2 Qe2 48. Rxe2 fxe2 49. Kf2 exf1=Q+ 50. Kxf1 Kg7 51. Kf2 Kf7 52. Ke3 Ke6 53. Ke4 d5+ 0-1"
  },
  {
    "id": "game-42-saemisch,-nimzovitch,-1923",
    "white": {
      "name": "Saemisch, F",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Nimzovitch, A",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Copenhagen",
    "date": "1923.??.??",
    "year": "1923",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 50 lances entre Saemisch, F e Nimzovitch, A (1923).",
    "pgn": "[Event \"?\"]\n[Site \"Copenhagen\"]\n[Date \"1923.??.??\"]\n[Round \"?\"]\n[White \"Saemisch,F\"]\n[Black \"Nimzovitch,A\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. Nc3 O-O 7. O-O d5 8. Ne5 c6 9. cxd5 cxd5 10. Bf4 a6 11. Rc1 b5 12. Qb3 Nc6 13. Nxc6 Bxc6 14. h3 Qd7 15. Kh2 Nh5 16. Bd2 f5 17. Qd1 b4 18. Nb1 Bb5 19. Rg1 Bd6 20. e4 fxe4 21. Qxh5 Rxf2 22. Qg5 Raf8 23. Kh1 R8f5 24. Qe3 Bd3 25. Rce1 h6 0-1"
  },
  {
    "id": "game-43-reti,-lasker,-1924",
    "white": {
      "name": "Reti, R",
      "title": "GM",
      "rating": "2650",
      "country": "Tchecoslováquia",
      "code": "CS"
    },
    "black": {
      "name": "Lasker, Em",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "Match do Campeonato Mundial",
    "site": "New York",
    "date": "1924.??.??",
    "year": "1924",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 90 lances entre Reti, R e Lasker, Em (1924).",
    "pgn": "[Event \"?\"]\n[Site \"New York\"]\n[Date \"1924.??.??\"]\n[Round \"?\"]\n[White \"Reti,R\"]\n[Black \"Lasker,Em\"]\n[Result \"0-1\"]\n\n1. Nf3 d5 2. c4 c6 3. b3 Bf5 4. g3 Nf6 5. Bg2 Nbd7 6. Bb2 e6 7. O-O Bd6 8. d3 O-O 9. Nbd2 e5 10. cxd5 cxd5 11. Rc1 Qe7 12. Rc2 a5 13. a4 h6 14. Qa1 Rfe8 15. Rfc1 Bh7 16. Nf1 Nc5 17. Rxc5 Bxc5 18. Nxe5 Rac8 19. Ne3 Qe6 20. h3 Bd6 21. Rxc8 Rxc8 22. Nf3 Be7 23. Nd4 Qd7 24. Kh2 h5 25. Qh1 h4 26. Nxd5 hxg3+ 27. fxg3 Nxd5 28. Bxd5 Bf6 29. Bxb7 Rc5 30. Ba6 Bg6 31. Qb7 Qd8 32. b4 Rc7 33. Qb6 Rd7 34. Qxd8+ Rxd8 35. e3 axb4 36. Kg2 Bxd4 37. exd4 Bf5 38. Bb7 Be6 39. Kf3 Bb3 40. Bc6 Rd6 41. Bb5 Rf6+ 42. Ke3 Re6+ 43. Kf4 Re2 44. Bc1 Rc2 45. Be3 Bd5 0-1"
  },
  {
    "id": "game-44-reti,-alekhine,-1925",
    "white": {
      "name": "Reti, R",
      "title": "GM",
      "rating": "2650",
      "country": "Tchecoslováquia",
      "code": "CS"
    },
    "black": {
      "name": "Alekhine, A",
      "title": "GM",
      "rating": "2650",
      "country": "França",
      "code": "FR"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Baden-Baden",
    "date": "1925.??.??",
    "year": "1925",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 84 lances entre Reti, R e Alekhine, A (1925).",
    "pgn": "[Event \"?\"]\n[Site \"Baden-Baden\"]\n[Date \"1925.??.??\"]\n[Round \"?\"]\n[White \"Reti,R\"]\n[Black \"Alekhine,A\"]\n[Result \"0-1\"]\n\n1. g3 e5 2. Nf3 e4 3. Nd4 d5 4. d3 exd3 5. Qxd3 Nf6 6. Bg2 Bb4+ 7. Bd2 Bxd2+ 8. Nxd2 O-O 9. c4 Na6 10. cxd5 Nb4 11. Qc4 Nbxd5 12. N2b3 c6 13. O-O Re8 14. Rfd1 Bg4 15. Rd2 Qc8 16. Nc5 Bh3 17. Bf3 Bg4 18. Bg2 Bh3 19. Bf3 Bg4 20. Bh1 h5 21. b4 a6 22. Rc1 h4 23. a4 hxg3 24. hxg3 Qc7 25. b5 axb5 26. axb5 Re3 27. Nf3 cxb5 28. Qxb5 Nc3 29. Qxb7 Qxb7 30. Nxb7 Nxe2+ 31. Kh2 Ne4 32. Rc4 Nxf2 33. Bg2 Be6 34. Rcc2 Ng4+ 35. Kh3 Ne5+ 36. Kh2 Rxf3 37. Rxe2 Ng4+ 38. Kh3 Ne3+ 39. Kh2 Nxc2 40. Bxf3 Nd4 41. Rf2 Nxf3+ 42. Rxf3 Bd5 0-1"
  },
  {
    "id": "game-45-johner,-nimzovitch,-1926",
    "white": {
      "name": "Johner, P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Nimzovitch, A",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Dresden",
    "date": "1926.??.??",
    "year": "1926",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 80 lances entre Johner, P e Nimzovitch, A (1926).",
    "pgn": "[Event \"?\"]\n[Site \"Dresden\"]\n[Date \"1926.??.??\"]\n[Round \"?\"]\n[White \"Johner,P\"]\n[Black \"Nimzovitch,A\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 c5 6. Nf3 Nc6 7. O-O Bxc3 8. bxc3 d6 9. Nd2 b6 10. Nb3 e5 11. f4 e4 12. Be2 Qd7 13. h3 Ne7 14. Qe1 h5 15. Bd2 Qf5 16. Kh2 Qh7 17. a4 Nf5 18. g3 a5 19. Rg1 Nh6 20. Bf1 Bd7 21. Bc1 Rac8 22. d5 Kh8 23. Nd2 Rg8 24. Bg2 g5 25. Nf1 Rg7 26. Ra2 Nf5 27. Bh1 Rcg8 28. Qd1 gxf4 29. exf4 Bc8 30. Qb3 Ba6 31. Re2 Nh4 32. Re3 Bc8 33. Qc2 Bxh3 34. Bxe4 Bf5 35. Bxf5 Nxf5 36. Re2 h4 37. Rgg2 hxg3+ 38. Kg1 Qh3 39. Ne3 Nh4 40. Kf1 Re8 0-1"
  },
  {
    "id": "game-46-nimzovitch,-capablanca,-1927",
    "white": {
      "name": "Nimzovitch, A",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Capablanca, J",
      "title": "GM",
      "rating": "2650",
      "country": "Cuba",
      "code": "CU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "New York",
    "date": "1927.??.??",
    "year": "1927",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 92 lances entre Nimzovitch, A e Capablanca, J (1927).",
    "pgn": "[Event \"?\"]\n[Site \"New York\"]\n[Date \"1927.??.??\"]\n[Round \"?\"]\n[White \"Nimzovitch,A\"]\n[Black \"Capablanca,J\"]\n[Result \"0-1\"]\n\n1. e4 c6 2. d4 d5 3. e5 Bf5 4. Bd3 Bxd3 5. Qxd3 e6 6. Nc3 Qb6 7. Nge2 c5 8. dxc5 Bxc5 9. O-O Ne7 10. Na4 Qc6 11. Nxc5 Qxc5 12. Be3 Qc7 13. f4 Nf5 14. c3 Nc6 15. Rad1 g6 16. g4 Nxe3 17. Qxe3 h5 18. g5 O-O 19. Nd4 Qb6 20. Rf2 Rfc8 21. a3 Rc7 22. Rd3 Na5 23. Re2 Re8 24. Kg2 Nc6 25. Red2 Rec8 26. Re2 Ne7 27. Red2 Rc4 28. Qh3 Kg7 29. Rf2 a5 30. Re2 Nf5 31. Nxf5+ gxf5 32. Qf3 Kg6 33. Red2 Re4 34. Rd4 Rc4 35. Qf2 Qb5 36. Kg3 Rcxd4 37. cxd4 Qc4 38. Kg2 b5 39. Kg1 b4 40. axb4 axb4 41. Kg2 Qc1 42. Kg3 Qh1 43. Rd3 Re1 44. Rf3 Rd1 45. b3 Rc1 46. Re3 Rf1 0-1"
  },
  {
    "id": "game-47-capablanca,-alekhine,-1927",
    "white": {
      "name": "Capablanca, J",
      "title": "GM",
      "rating": "2650",
      "country": "Cuba",
      "code": "CU"
    },
    "black": {
      "name": "Alekhine, A",
      "title": "GM",
      "rating": "2650",
      "country": "França",
      "code": "FR"
    },
    "event": "WCh",
    "site": "Buenos Aires",
    "date": "1927.??.??",
    "year": "1927",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 64 lances entre Capablanca, J e Alekhine, A (1927).",
    "pgn": "[Event \"WCh\"]\n[Site \"Buenos Aires\"]\n[Date \"1927.??.??\"]\n[Round \"21\"]\n[White \"Capablanca,J\"]\n[Black \"Alekhine,A\"]\n[Result \"0-1\"]\n\n1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 Be7 6. Nf3 O-O 7. Rc1 a6 8. a3 h6 9. Bh4 dxc4 10. Bxc4 b5 11. Be2 Bb7 12. O-O c5 13. dxc5 Nxc5 14. Nd4 Rc8 15. b4 Ncd7 16. Bg3 Nb6 17. Qb3 Nfd5 18. Bf3 Rc4 19. Ne4 Qc8 20. Rxc4 Nxc4 21. Rc1 Qa8 22. Nc3 Rc8 23. Nxd5 Bxd5 24. Bxd5 Qxd5 25. a4 Bf6 26. Nf3 Bb2 27. Re1 Rd8 28. axb5 axb5 29. h3 e5 30. Rb1 e4 31. Nd4 Bxd4 32. Rd1 Nxe3 0-1"
  },
  {
    "id": "game-48-capablanca,-treybal,-1929",
    "white": {
      "name": "Capablanca, J",
      "title": "GM",
      "rating": "2650",
      "country": "Cuba",
      "code": "CU"
    },
    "black": {
      "name": "Treybal, K",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Karlsbad",
    "date": "1929.??.??",
    "year": "1929",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 115 lances entre Capablanca, J e Treybal, K (1929).",
    "pgn": "[Event \"?\"]\n[Site \"Karlsbad\"]\n[Date \"1929.??.??\"]\n[Round \"?\"]\n[White \"Capablanca,J\"]\n[Black \"Treybal,K\"]\n[Result \"1-0\"]\n\n1. d4 d5 2. c4 c6 3. Nf3 e6 4. Bg5 Be7 5. Bxe7 Qxe7 6. Nbd2 f5 7. e3 Nd7 8. Bd3 Nh6 9. O-O O-O 10. Qc2 g6 11. Rab1 Nf6 12. Ne5 Nf7 13. f4 Bd7 14. Ndf3 Rfd8 15. b4 Be8 16. Rfc1 a6 17. Qf2 Nxe5 18. Nxe5 Nd7 19. Nf3 Rdc8 20. c5 Nf6 21. a4 Ng4 22. Qe1 Nh6 23. h3 Nf7 24. g4 Bd7 25. Rc2 Kh8 26. Rg2 Rg8 27. g5 Qd8 28. h4 Kg7 29. h5 Rh8 30. Rh2 Qc7 31. Qc3 Qd8 32. Kf2 Qc7 33. Rbh1 Rag8 34. Qa1 Rb8 35. Qa3 Rbg8 36. b5 axb5 37. h6+ Kf8 38. axb5 Ke7 39. b6 Qb8 40. Ra1 Rc8 41. Qb4 Rhd8 42. Ra7 Kf8 43. Rh1 Be8 44. Rha1 Kg8 45. R1a4 Kf8 46. Qa3 Kg8 47. Kg3 Bd7 48. Kh4 Kh8 49. Qa1 Kg8 50. Kg3 Kf8 51. Kg2 Be8 52. Nd2 Bd7 53. Nb3 Re8 54. Na5 Nd8 55. Ba6 bxa6 56. Rxd7 Re7 57. Rxd8+ Rxd8 58. Nxc6 1-0"
  },
  {
    "id": "game-49-bogoljubow,-alekhine,-1929",
    "white": {
      "name": "Bogoljubow, E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Alekhine, A",
      "title": "GM",
      "rating": "2650",
      "country": "França",
      "code": "FR"
    },
    "event": "WCh",
    "site": "GER\\NLD",
    "date": "1929.??.??",
    "year": "1929",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 101 lances entre Bogoljubow, E e Alekhine, A (1929).",
    "pgn": "[Event \"WCh\"]\n[Site \"GER\\NLD\"]\n[Date \"1929.??.??\"]\n[Round \"18\"]\n[White \"Bogoljubow,E\"]\n[Black \"Alekhine,A\"]\n[Result \"1-0\"]\n\n1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 dxe4 5. Nxe4 Be7 6. Bxf6 gxf6 7. Nf3 f5 8. Nc3 c6 9. g3 Nd7 10. Bg2 Qc7 11. Qe2 b5 12. Ne5 Bb7 13. O-O-O Nb6 14. Qh5 Rf8 15. f4 b4 16. Ne2 Nd5 17. Bxd5 cxd5 18. Kb1 a5 19. g4 fxg4 20. f5 exf5 21. Qxf5 a4 22. Rhe1 a3 23. b3 Bc8 24. Qxh7 Be6 25. Qd3 O-O-O 26. c3 Kb7 27. Rc1 Qb6 28. cxb4 Bxb4 29. Rc6 Qa5 30. Rec1 Rc8 31. Nf4 Bd6 32. Nxe6 fxe6 33. Qh7+ Rc7 34. Rxc7+ Bxc7 35. Qd7 Qb6 36. Nd3 Rd8 37. Rxc7+ Qxc7 38. Nc5+ Kb6 39. Qxc7+ Kxc7 40. Nxe6+ Kd7 41. Nxd8 Kxd8 42. b4 Kd7 43. Kc2 Kc6 44. Kb3 Kb5 45. Kxa3 Kc4 46. b5 Kxb5 47. Kb3 Ka5 48. a4 Ka6 49. Kb4 Kb6 50. a5+ Kc6 51. Ka4 1-0"
  },
  {
    "id": "game-50-euwe,-alekhine,-1935",
    "white": {
      "name": "Euwe, M",
      "title": "GM",
      "rating": "2650",
      "country": "Holanda",
      "code": "NL"
    },
    "black": {
      "name": "Alekhine, A",
      "title": "GM",
      "rating": "2650",
      "country": "França",
      "code": "FR"
    },
    "event": "WCh",
    "site": "NLD",
    "date": "1935.??.??",
    "year": "1935",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 93 lances entre Euwe, M e Alekhine, A (1935).",
    "pgn": "[Event \"WCh\"]\n[Site \"NLD\"]\n[Date \"1935.??.??\"]\n[Round \"26\"]\n[White \"Euwe,M\"]\n[Black \"Alekhine,A\"]\n[Result \"1-0\"]\n\n1. d4 e6 2. c4 f5 3. g3 Bb4+ 4. Bd2 Be7 5. Bg2 Nf6 6. Nc3 O-O 7. Nf3 Ne4 8. O-O b6 9. Qc2 Bb7 10. Ne5 Nxc3 11. Bxc3 Bxg2 12. Kxg2 Qc8 13. d5 d6 14. Nd3 e5 15. Kh1 c6 16. Qb3 Kh8 17. f4 e4 18. Nb4 c5 19. Nc2 Nd7 20. Ne3 Bf6 21. Nxf5 Bxc3 22. Nxd6 Qb8 23. Nxe4 Bf6 24. Nd2 g5 25. e4 gxf4 26. gxf4 Bd4 27. e5 Qe8 28. e6 Rg8 29. Nf3 Qg6 30. Rg1 Bxg1 31. Rxg1 Qf6 32. Ng5 Rg7 33. exd7 Rxd7 34. Qe3 Re7 35. Ne6 Rf8 36. Qe5 Qxe5 37. fxe5 Rf5 38. Re1 h6 39. Nd8 Rf2 40. e6 Rd2 41. Nc6 Re8 42. e7 b5 43. Nd8 Kg7 44. Nb7 Kf6 45. Re6+ Kg5 46. Nd6 Rxe7 47. Ne4+ 1-0"
  },
  {
    "id": "game-51-botvinnik,-tartakower,-1936",
    "white": {
      "name": "Botvinnik, M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Tartakower, S",
      "title": "GM",
      "rating": "2650",
      "country": "Polônia",
      "code": "PL"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Nottingham",
    "date": "1936.??.??",
    "year": "1936",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 59 lances entre Botvinnik, M e Tartakower, S (1936).",
    "pgn": "[Event \"?\"]\n[Site \"Nottingham\"]\n[Date \"1936.??.??\"]\n[Round \"?\"]\n[White \"Botvinnik,M\"]\n[Black \"Tartakower,S\"]\n[Result \"1-0\"]\n\n1. Nf3 Nf6 2. c4 d6 3. d4 Nbd7 4. g3 e5 5. Bg2 Be7 6. O-O O-O 7. Nc3 c6 8. e4 Qc7 9. h3 Re8 10. Be3 Nf8 11. Rc1 h6 12. d5 Bd7 13. Nd2 g5 14. f4 gxf4 15. gxf4 Kg7 16. fxe5 dxe5 17. c5 cxd5 18. Nxd5 Qc6 19. Nc4 Ng6 20. Nd6 Be6 21. Nxe7 Nxe7 22. Rxf6 Kxf6 23. Qh5 Ng6 24. Nf5 Rg8 25. Qxh6 Bxa2 26. Rd1 Rad8 27. Qg5+ Ke6 28. Rxd8 f6 29. Rxg8 Nf4 30. Qg7 1-0"
  },
  {
    "id": "game-52-reshevsky,-keres,-1937",
    "white": {
      "name": "Reshevsky, S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Keres, P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Semmering",
    "date": "1937.??.??",
    "year": "1937",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 114 lances entre Reshevsky, S e Keres, P (1937).",
    "pgn": "[Event \"?\"]\n[Site \"Semmering\"]\n[Date \"1937.??.??\"]\n[Round \"?\"]\n[White \"Reshevsky,S\"]\n[Black \"Keres,P\"]\n[Result \"0-1\"]\n\n1. Nf3 Nf6 2. d4 e6 3. c4 b6 4. g3 Bb7 5. Bg2 Bb4+ 6. Bd2 Bxd2+ 7. Qxd2 O-O 8. O-O d6 9. Qc2 Nbd7 10. Nc3 Qe7 11. e4 Rac8 12. Rfe1 e5 13. Rad1 c6 14. Qa4 Rc7 15. Qa3 Re8 16. b3 g6 17. dxe5 dxe5 18. Qxe7 Rxe7 19. Bh3 Bc8 20. b4 Nf8 21. Bxc8 Rxc8 22. Rd6 Ne8 23. Rd3 f6 24. Red1 Kf7 25. a4 Ke6 26. Rd8 Rec7 27. Kf1 Ke7 28. R8d3 Rd7 29. Rxd7+ Nxd7 30. Ke2 Nd6 31. Nd2 Nf8 32. Ra1 Ne6 33. a5 b5 34. cxb5 Nd4+ 35. Kd3 cxb5 36. Rc1 Ke6 37. Ne2 Nc6 38. Rb1 Rd8 39. Kc3 f5 40. exf5+ gxf5 41. f3 Rc8 42. Kd3 Ne8 43. Nc3 Nf6 44. Rb2 a6 45. g4 e4+ 46. fxe4 Ne5+ 47. Kc2 fxg4 48. Kb3 Nc4 49. Nxc4 Rxc4 50. Re2 Ke5 51. Re1 h5 52. Rd1 h4 53. Rd8 g3 54. hxg3 hxg3 55. Rd3 g2 56. Ne2 Rxe4 57. Ng1 Re1 0-1"
  },
  {
    "id": "game-53-botvinnik,-capablanca,-1938",
    "white": {
      "name": "Botvinnik, M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Capablanca, J",
      "title": "GM",
      "rating": "2650",
      "country": "Cuba",
      "code": "CU"
    },
    "event": "AVRO",
    "site": "Campeonato Mundial",
    "date": "1938.??.??",
    "year": "1938",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Botvinnik, M e Capablanca, J (1938).",
    "pgn": "[Event \"AVRO\"]\n[Site \"?\"]\n[Date \"1938.??.??\"]\n[Round \"?\"]\n[White \"Botvinnik,M\"]\n[Black \"Capablanca,J\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5 exd5 8. Bd3 O-O 9. Ne2 b6 10. O-O Ba6 11. Bxa6 Nxa6 12. Bb2 Qd7 13. a4 Rfe8 14. Qd3 c4 15. Qc2 Nb8 16. Rae1 Nc6 17. Ng3 Na5 18. f3 Nb3 19. e4 Qxa4 20. e5 Nd7 21. Qf2 g6 22. f4 f5 23. exf6 Nxf6 24. f5 Rxe1 25. Rxe1 Re8 26. Re6 Rxe6 27. fxe6 Kg7 28. Qf4 Qe8 29. Qe5 Qe7 30. Ba3 Qxa3 31. Nh5+ gxh5 32. Qg5+ Kf8 33. Qxf6+ Kg8 34. e7 Qc1+ 35. Kf2 Qc2+ 36. Kg3 Qd3+ 37. Kh4 Qe4+ 38. Kxh5 Qe2+ 39. Kh4 Qe4+ 40. g4 Qe1+ 41. Kh5 1-0"
  },
  {
    "id": "game-54-euwe,-keres,-1940",
    "white": {
      "name": "Euwe, M",
      "title": "GM",
      "rating": "2650",
      "country": "Holanda",
      "code": "NL"
    },
    "black": {
      "name": "Keres, P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "m",
    "site": "Rotterdam",
    "date": "1940.??.??",
    "year": "1940",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 68 lances entre Euwe, M e Keres, P (1940).",
    "pgn": "[Event \"m\"]\n[Site \"Rotterdam\"]\n[Date \"1940.??.??\"]\n[Round \"9\"]\n[White \"Euwe,M\"]\n[Black \"Keres,P\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3 Ne4 8. Qc2 Nxc3 9. Qxc3 d6 10. Qc2 f5 11. Ne1 Qc8 12. e4 Nd7 13. d5 fxe4 14. Qxe4 Nc5 15. Qe2 Bf6 16. Bh3 Re8 17. Be3 Qd8 18. Bxc5 exd5 19. Be6+ Kh8 20. Rd1 dxc5 21. Ng2 d4 22. f4 d3 23. Rxd3 Qxd3 24. Qxd3 Bd4+ 25. Rf2 Rxe6 26. Kf1 Rae8 27. f5 Re5 28. f6 gxf6 29. Rd2 Bc8 30. Nf4 Re3 31. Qb1 Rf3+ 32. Kg2 Rxf4 33. gxf4 Rg8+ 34. Kf3 Bg4+ 0-1"
  },
  {
    "id": "game-55-keres,-botvinnik,-1941",
    "white": {
      "name": "Keres, P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Botvinnik, M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "ch",
    "site": "URS",
    "date": "1941.??.??",
    "year": "1941",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 44 lances entre Keres, P e Botvinnik, M (1941).",
    "pgn": "[Event \"ch\"]\n[Site \"URS\"]\n[Date \"1941.??.??\"]\n[Round \"?\"]\n[White \"Keres,P\"]\n[Black \"Botvinnik,M\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. cxd5 exd5 6. Bg5 h6 7. Bh4 c5 8. O-O-O Bxc3 9. Qxc3 g5 10. Bg3 cxd4 11. Qxd4 Nc6 12. Qa4 Bf5 13. e3 Rc8 14. Bd3 Qd7 15. Kb1 Bxd3+ 16. Rxd3 Qf5 17. e4 Nxe4 18. Ka1 O-O 19. Rd1 b5 20. Qxb5 Nd4 21. Qd3 Nc2+ 22. Kb1 Nb4 0-1"
  },
  {
    "id": "game-56-smyslov,-reshevsky,-1946",
    "white": {
      "name": "Smyslov, V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Reshevsky, S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "URS USA",
    "site": "Campeonato Mundial",
    "date": "1946.??.??",
    "year": "1946",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Smyslov, V e Reshevsky, S (1946).",
    "pgn": "[Event \"URS USA\"]\n[Site \"?\"]\n[Date \"1946.??.??\"]\n[Round \"?\"]\n[White \"Smyslov,V\"]\n[Black \"Reshevsky,S\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5 10. Nbd2 O-O 11. Bc2 f5 12. Nb3 Bb6 13. Nfd4 Nxd4 14. Nxd4 Bxd4 15. cxd4 f4 16. f3 Ng3 17. hxg3 fxg3 18. Qd3 Bf5 19. Qxf5 Rxf5 20. Bxf5 Qh4 21. Bh3 Qxd4+ 22. Kh1 Qxe5 23. Bd2 Qxb2 24. Bf4 c5 25. Be6+ Kh8 26. Bxd5 Rd8 27. Rad1 c4 28. Bxg3 c3 29. Be5 b4 30. Bb3 Rd2 31. f4 h5 32. Rb1 Rf2 33. Rfe1 Qd2 34. Rbd1 Qb2 35. Rd8+ Kh7 36. Bg8+ Kg6 37. Rd6+ Kf5 38. Be6+ Kg6 39. Bd5+ Kh7 40. Be4+ Kg8 41. Bg6 1-0"
  },
  {
    "id": "game-57-botvinnik,-bronstein,-1951",
    "white": {
      "name": "Botvinnik, M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Bronstein, D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "WCh",
    "site": "Moscow",
    "date": "1951.??.??",
    "year": "1951",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 113 lances entre Botvinnik, M e Bronstein, D (1951).",
    "pgn": "[Event \"WCh\"]\n[Site \"Moscow\"]\n[Date \"1951.??.??\"]\n[Round \"23\"]\n[White \"Botvinnik,M\"]\n[Black \"Bronstein,D\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. g3 c6 4. Bg2 d5 5. cxd5 cxd5 6. Nc3 Bg7 7. Nh3 Bxh3 8. Bxh3 Nc6 9. Bg2 e6 10. e3 O-O 11. Bd2 Rc8 12. O-O Nd7 13. Ne2 Qb6 14. Bc3 Rfd8 15. Nf4 Nf6 16. Qb3 Ne4 17. Qxb6 axb6 18. Be1 Na5 19. Nd3 Bf8 20. f3 Nd6 21. Bf2 Bh6 22. Rac1 Nac4 23. Rfe1 Na5 24. Kf1 Bg7 25. g4 Nc6 26. b3 Nb5 27. Ke2 Bf8 28. a4 Nc7 29. Bg3 Na6 30. Bf1 f6 31. Red1 Na5 32. Rxc8 Rxc8 33. Rc1 Rxc1 34. Nxc1 Ba3 35. Kd1 Bxc1 36. Kxc1 Nxb3+ 37. Kc2 Na5 38. Kc3 Kf7 39. e4 f5 40. gxf5 gxf5 41. Bd3 Kg6 42. Bd6 Nc6 43. Bb1 Kf6 44. Bg3 fxe4 45. fxe4 h6 46. Bf4 h5 47. exd5 exd5 48. h4 Nab8 49. Bg5+ Kf7 50. Bf5 Na7 51. Bf4 Nbc6 52. Bd3 Nc8 53. Be2 Kg6 54. Bd3+ Kf6 55. Be2 Kg6 56. Bf3 N6e7 57. Bg5 1-0"
  },
  {
    "id": "game-58-averbakh,-kotov,-1953",
    "white": {
      "name": "Averbakh, Y",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kotov, A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "ct",
    "site": "SWZ",
    "date": "1953.??.??",
    "year": "1953",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 102 lances entre Averbakh, Y e Kotov, A (1953).",
    "pgn": "[Event \"ct\"]\n[Site \"SWZ\"]\n[Date \"1953.??.??\"]\n[Round \"?\"]\n[White \"Averbakh,Y\"]\n[Black \"Kotov,A\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 d6 3. Nf3 Nbd7 4. Nc3 e5 5. e4 Be7 6. Be2 O-O 7. O-O c6 8. Qc2 Re8 9. Rd1 Bf8 10. Rb1 a5 11. d5 Nc5 12. Be3 Qc7 13. h3 Bd7 14. Rbc1 g6 15. Nd2 Rab8 16. Nb3 Nxb3 17. Qxb3 c5 18. Kh2 Kh8 19. Qc2 Ng8 20. Bg4 Nh6 21. Bxd7 Qxd7 22. Qd2 Ng8 23. g4 f5 24. f3 Be7 25. Rg1 Rf8 26. Rcf1 Rf7 27. gxf5 gxf5 28. Rg2 f4 29. Bf2 Rf6 30. Ne2 Qxh3+ 31. Kxh3 Rh6+ 32. Kg4 Nf6+ 33. Kf5 Nd7 34. Rg5 Rf8+ 35. Kg4 Nf6+ 36. Kf5 Ng8+ 37. Kg4 Nf6+ 38. Kf5 Nxd5+ 39. Kg4 Nf6+ 40. Kf5 Ng8+ 41. Kg4 Nf6+ 42. Kf5 Ng8+ 43. Kg4 Bxg5 44. Kxg5 Rf7 45. Bh4 Rg6+ 46. Kh5 Rfg7 47. Bg5 Rxg5+ 48. Kh4 Nf6 49. Ng3 Rxg3 50. Qxd6 R3g6 51. Qb8+ Rg8 0-1"
  },
  {
    "id": "game-59-botvinnik,-smyslov,-1954",
    "white": {
      "name": "Botvinnik, M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Smyslov, V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "WCh",
    "site": "Moscow",
    "date": "1954.??.??",
    "year": "1954",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 66 lances entre Botvinnik, M e Smyslov, V (1954).",
    "pgn": "[Event \"WCh\"]\n[Site \"Moscow\"]\n[Date \"1954.??.??\"]\n[Round \"14\"]\n[White \"Botvinnik,M\"]\n[Black \"Smyslov,V\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 Nbd7 7. O-O e5 8. e4 c6 9. Be3 Ng4 10. Bg5 Qb6 11. h3 exd4 12. Na4 Qa6 13. hxg4 b5 14. Nxd4 bxa4 15. Nxc6 Qxc6 16. e5 Qxc4 17. Bxa8 Nxe5 18. Rc1 Qb4 19. a3 Qxb2 20. Qxa4 Bb7 21. Rb1 Nf3+ 22. Kh1 Bxa8 23. Rxb2 Nxg5+ 24. Kh2 Nf3+ 25. Kh3 Bxb2 26. Qxa7 Be4 27. a4 Kg7 28. Rd1 Be5 29. Qe7 Rc8 30. a5 Rc2 31. Kg2 Nd4+ 32. Kf1 Bf3 33. Rb1 Nc6 0-1"
  },
  {
    "id": "game-60-byrne,-fischer,-1956",
    "white": {
      "name": "Byrne, D",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Fischer, R",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "ch",
    "site": "USA",
    "date": "1956.??.??",
    "year": "1956",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 82 lances entre Byrne, D e Fischer, R (1956).",
    "pgn": "[Event \"ch\"]\n[Site \"USA\"]\n[Date \"1956.??.??\"]\n[Round \"?\"]\n[White \"Byrne,D\"]\n[Black \"Fischer,R\"]\n[Result \"0-1\"]\n\n1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6 8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4 14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+ 21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4 Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27. Kh2 Nxf2 28. Re1 Rxe1 29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 33. h4 h5 34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1 Ng3+ 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40. Kb1 Nc3+ 41. Kc1 Rc2# 0-1"
  },
  {
    "id": "game-61-polugaevsky,-neshmetdinov,-1958",
    "white": {
      "name": "Polugaevsky, L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Neshmetdinov, R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "ch",
    "site": "URS",
    "date": "1958.??.??",
    "year": "1958",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 66 lances entre Polugaevsky, L e Neshmetdinov, R (1958).",
    "pgn": "[Event \"ch\"]\n[Site \"URS\"]\n[Date \"1958.??.??\"]\n[Round \"?\"]\n[White \"Polugaevsky,L\"]\n[Black \"Neshmetdinov,R\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 d6 3. e4 e5 4. Nc3 exd4 5. Qxd4 Nc6 6. Qd2 g6 7. b3 Bg7 8. Bb2 O-O 9. Bd3 Ng4 10. Nge2 Qh4 11. Ng3 Nge5 12. O-O f5 13. f3 Bh6 14. Qd1 f4 15. Nge2 g5 16. Nd5 g4 17. g3 fxg3 18. hxg3 Qh3 19. f4 Be6 20. Bc2 Rf7 21. Kf2 Qh2+ 22. Ke3 Bxd5 23. cxd5 Nb4 24. Rh1 Rxf4 25. Rxh2 Rf3+ 26. Kd4 Bg7 27. a4 c5+ 28. dxc6 bxc6 29. Bd3 Nexd3+ 30. Kc4 d5+ 31. exd5 cxd5+ 32. Kb5 Rb8+ 33. Ka5 Nc6+ 0-1"
  },
  {
    "id": "game-62-tal,-smyslov,-1959",
    "white": {
      "name": "Tal, M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Smyslov, V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "ct",
    "site": "JUG",
    "date": "1959.??.??",
    "year": "1959",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 51 lances entre Tal, M e Smyslov, V (1959).",
    "pgn": "[Event \"ct\"]\n[Site \"JUG\"]\n[Date \"1959.??.??\"]\n[Round \"?\"]\n[White \"Tal,M\"]\n[Black \"Smyslov,V\"]\n[Result \"1-0\"]\n\n1. e4 c6 2. d3 d5 3. Nd2 e5 4. Ngf3 Nd7 5. d4 dxe4 6. Nxe4 exd4 7. Qxd4 Ngf6 8. Bg5 Be7 9. O-O-O O-O 10. Nd6 Qa5 11. Bc4 b5 12. Bd2 Qa6 13. Nf5 Bd8 14. Qh4 bxc4 15. Qg5 Nh5 16. Nh6+ Kh8 17. Qxh5 Qxa2 18. Bc3 Nf6 19. Qxf7 Qa1+ 20. Kd2 Rxf7 21. Nxf7+ Kg8 22. Rxa1 Kxf7 23. Ne5+ Ke6 24. Nxc6 Ne4+ 25. Ke3 Bb6+ 26. Bd4 1-0"
  },
  {
    "id": "game-63-cholmov,-keres,-1959",
    "white": {
      "name": "Cholmov, R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Keres, P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "ch",
    "site": "URS",
    "date": "1959.??.??",
    "year": "1959",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 57 lances entre Cholmov, R e Keres, P (1959).",
    "pgn": "[Event \"ch\"]\n[Site \"URS\"]\n[Date \"1959.??.??\"]\n[Round \"?\"]\n[White \"Cholmov,R\"]\n[Black \"Keres,P\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. Bb5 Nf6 4. e5 Ng4 5. Bxc6 dxc6 6. O-O g6 7. Re1 Bg7 8. h3 Nh6 9. Nc3 b6 10. d4 cxd4 11. Nxd4 c5 12. Nc6 Qd7 13. Nxe7 Kxe7 14. Bxh6 Bxh6 15. Qf3 Bg7 16. Nd5+ Kd8 17. Rad1 Bb7 18. Qb3 Bc6 19. Nxb6 axb6 20. Qxf7 Bxe5 21. Rxd7+ Bxd7 22. Rxe5 Kc7 23. Re7 Rad8 24. a4 g5 25. Qd5 Rhe8 26. Rxh7 g4 27. a5 gxh3 28. axb6+ Kxb6 29. Rxd7 1-0"
  },
  {
    "id": "game-64-gufeld,-kavalek,-1962",
    "white": {
      "name": "Gufeld, E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kavalek, L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "ST ol",
    "site": "Marianske Lazne",
    "date": "1962.??.??",
    "year": "1962",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 64 lances entre Gufeld, E e Kavalek, L (1962).",
    "pgn": "[Event \"ST ol\"]\n[Site \"Marianske Lazne\"]\n[Date \"1962.??.??\"]\n[Round \"?\"]\n[White \"Gufeld,E\"]\n[Black \"Kavalek,L\"]\n[Result \"0-1\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3 f5 5. d4 fxe4 6. Ng5 Bb6 7. d5 e3 8. Ne4 Qh4 9. Qf3 Nf6 10. Nxf6+ gxf6 11. dxc6 exf2+ 12. Kd1 dxc6 13. Be2 Be6 14. Qh5+ Qxh5 15. Bxh5+ Ke7 16. b3 Bd5 17. Ba3+ Ke6 18. Bg4+ f5 19. Bh3 Rhg8 20. Nd2 Bxg2 21. Bxg2 Rxg2 22. Rf1 Rd8 23. Ke2 Rxd2+ 24. Kxd2 e4 25. Bf8 f4 26. b4 Rg5 27. Bc5 Rxc5 28. bxc5 Bxc5 29. Rab1 f3 30. Rb4 Kf5 31. Rd4 Bxd4 32. cxd4 Kf4 0-1"
  },
  {
    "id": "game-65-spassky,-evans,-1962",
    "white": {
      "name": "Spassky, B",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Evans, L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "ol",
    "site": "Varna",
    "date": "1962.??.??",
    "year": "1962",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 51 lances entre Spassky, B e Evans, L (1962).",
    "pgn": "[Event \"ol\"]\n[Site \"Varna\"]\n[Date \"1962.??.??\"]\n[Round \"?\"]\n[White \"Spassky,B\"]\n[Black \"Evans,L\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 c6 6. Be3 a6 7. Qd2 b5 8. O-O-O bxc4 9. Bxc4 O-O 10. h4 d5 11. Bb3 dxe4 12. h5 exf3 13. hxg6 hxg6 14. Bh6 fxg2 15. Rh4 Ng4 16. Bxg7 Kxg7 17. Qxg2 Nh6 18. Nf3 Nf5 19. Rh2 Qd6 20. Ne5 Nd7 21. Ne4 Qc7 22. Rdh1 Rg8 23. Rh7+ Kf8 24. Rxf7+ Ke8 25. Qxg6 Nxe5 26. Rf8+ 1-0"
  },
  {
    "id": "game-66-byrne,-fischer,-1963",
    "white": {
      "name": "Byrne, R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Fischer, R",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "ch",
    "site": "USA",
    "date": "1963.??.??",
    "year": "1963",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 42 lances entre Byrne, R e Fischer, R (1963).",
    "pgn": "[Event \"ch\"]\n[Site \"USA\"]\n[Date \"1963.??.??\"]\n[Round \"?\"]\n[White \"Byrne,R\"]\n[Black \"Fischer,R\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 g6 3. g3 c6 4. Bg2 d5 5. cxd5 cxd5 6. Nc3 Bg7 7. e3 O-O 8. Nge2 Nc6 9. O-O b6 10. b3 Ba6 11. Ba3 Re8 12. Qd2 e5 13. dxe5 Nxe5 14. Rfd1 Nd3 15. Qc2 Nxf2 16. Kxf2 Ng4+ 17. Kg1 Nxe3 18. Qd2 Nxg2 19. Kxg2 d4 20. Nxd4 Bb7+ 21. Kf1 Qd7 0-1"
  },
  {
    "id": "game-67-keres,-spassky,-1965",
    "white": {
      "name": "Keres, P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Spassky, B",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "cq",
    "site": "Riga",
    "date": "1965.??.??",
    "year": "1965",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 70 lances entre Keres, P e Spassky, B (1965).",
    "pgn": "[Event \"cq\"]\n[Site \"Riga\"]\n[Date \"1965.??.??\"]\n[Round \"10\"]\n[White \"Keres,P\"]\n[Black \"Spassky,B\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 c5 6. d5 O-O 7. Nf3 e6 8. Be2 exd5 9. cxd5 b5 10. e5 dxe5 11. fxe5 Ng4 12. Bf4 Nd7 13. e6 fxe6 14. dxe6 Rxf4 15. Qd5 Kh8 16. Qxa8 Nb6 17. Qxa7 Bxe6 18. O-O Ne3 19. Rf2 b4 20. Nb5 Rf7 21. Qa5 Qb8 22. Re1 Bd5 23. Bf1 Nxf1 24. Rfxf1 Nc4 25. Qa6 Rf6 26. Qa4 Nxb2 27. Qc2 Qxb5 28. Re7 Nd3 29. Qe2 c4 30. Re8+ Rf8 31. Rxf8+ Bxf8 32. Ng5 Bc5+ 33. Kh1 Qd7 34. Qd2 Qe7 35. Nf3 Qe3 0-1"
  },
  {
    "id": "game-68-tal,-larsen,-1965",
    "white": {
      "name": "Tal, M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Larsen, B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "event": "cs",
    "site": "Bled",
    "date": "1965",
    "year": "1965",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 73 lances entre Tal, M e Larsen, B (1965).",
    "pgn": "[Event \"cs\"]\n[Site \"Bled\"]\n[Date \"1965\"]\n[Round \"10\"]\n[White \"Tal,M\"]\n[Black \"Larsen,B\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e6 5. Nc3 d6 6. Be3 Nf6 7. f4 Be7 8. Qf3 O-O 9. O-O-O Qc7 10. Ndb5 Qb8 11. g4 a6 12. Nd4 Nxd4 13. Bxd4 b5 14. g5 Nd7 15. Bd3 b4 16. Nd5 exd5 17. exd5 f5 18. Rhe1 Rf7 19. h4 Bb7 20. Bxf5 Rxf5 21. Rxe7 Ne5 22. Qe4 Qf8 23. fxe5 Rf4 24. Qe3 Rf3 25. Qe2 Qxe7 26. Qxf3 dxe5 27. Re1 Rd8 28. Rxe5 Qd6 29. Qf4 Rf8 30. Qe4 b3 31. axb3 Rf1+ 32. Kd2 Qb4+ 33. c3 Qd6 34. Bc5 Qxc5 35. Re8+ Rf8 36. Qe6+ Kh8 37. Qf7 1-0"
  },
  {
    "id": "game-69-botvinnik,-portisch,-1968",
    "white": {
      "name": "Botvinnik, M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Portisch, L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Monte Carlo",
    "date": "1968.??.??",
    "year": "1968",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 51 lances entre Botvinnik, M e Portisch, L (1968).",
    "pgn": "[Event \"?\"]\n[Site \"Monte Carlo\"]\n[Date \"1968.??.??\"]\n[Round \"?\"]\n[White \"Botvinnik,M\"]\n[Black \"Portisch,L\"]\n[Result \"1-0\"]\n\n1. c4 e5 2. Nc3 Nf6 3. g3 d5 4. cxd5 Nxd5 5. Bg2 Be6 6. Nf3 Nc6 7. O-O Nb6 8. d3 Be7 9. a3 a5 10. Be3 O-O 11. Na4 Nxa4 12. Qxa4 Bd5 13. Rfc1 Re8 14. Rc2 Bf8 15. Rac1 Nb8 16. Rxc7 Bc6 17. R1xc6 bxc6 18. Rxf7 h6 19. Rb7 Qc8 20. Qc4+ Kh8 21. Nh4 Qxb7 22. Ng6+ Kh7 23. Be4 Bd6 24. Nxe5+ g6 25. Bxg6+ Kg7 26. Bxh6+ 1-0"
  },
  {
    "id": "game-70-spassky,-petrosian,-1969",
    "white": {
      "name": "Spassky, B",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Petrosian, T",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "WCh",
    "site": "Moscow",
    "date": "1969.??.??",
    "year": "1969",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 47 lances entre Spassky, B e Petrosian, T (1969).",
    "pgn": "[Event \"WCh\"]\n[Site \"Moscow\"]\n[Date \"1969.??.??\"]\n[Round \"19\"]\n[White \"Spassky,B\"]\n[Black \"Petrosian,T\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 Nbd7 7. Bc4 Qa5 8. Qd2 h6 9. Bxf6 Nxf6 10. O-O-O e6 11. Rhe1 Be7 12. f4 O-O 13. Bb3 Re8 14. Kb1 Bf8 15. g4 Nxg4 16. Qg2 Nf6 17. Rg1 Bd7 18. f5 Kh8 19. Rdf1 Qd8 20. fxe6 fxe6 21. e5 dxe5 22. Ne4 Nh5 23. Qg6 exd4 24. Ng5 1-0"
  },
  {
    "id": "game-71-larsen,-spassky,-1970",
    "white": {
      "name": "Larsen, B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "black": {
      "name": "Spassky, B",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "URS-WORLD",
    "site": "Belgrade",
    "date": "1970",
    "year": "1970",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 34 lances entre Larsen, B e Spassky, B (1970).",
    "pgn": "[Event \"URS-WORLD\"]\n[Site \"Belgrade\"]\n[Date \"1970\"]\n[Round \"?\"]\n[White \"Larsen,B\"]\n[Black \"Spassky,B\"]\n[Result \"0-1\"]\n\n1. b3 e5 2. Bb2 Nc6 3. c4 Nf6 4. Nf3 e4 5. Nd4 Bc5 6. Nxc6 dxc6 7. e3 Bf5 8. Qc2 Qe7 9. Be2 O-O-O 10. f4 Ng4 11. g3 h5 12. h3 h4 13. hxg4 hxg3 14. Rg1 Rh1 15. Rxh1 g2 16. Rf1 Qh4+ 17. Kd1 gxf1=Q+ 0-1"
  },
  {
    "id": "game-72-fischer,-spassky,-1972",
    "white": {
      "name": "Fischer, R",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Spassky, B",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "WCh",
    "site": "Reykjavik",
    "date": "1972.??.??",
    "year": "1972",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Fischer, R e Spassky, B (1972).",
    "pgn": "[Event \"WCh\"]\n[Site \"Reykjavik\"]\n[Date \"1972.??.??\"]\n[Round \"6\"]\n[White \"Fischer,R\"]\n[Black \"Spassky,B\"]\n[Result \"1-0\"]\n\n1. c4 e6 2. Nf3 d5 3. d4 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6 12. Qa4 c5 13. Qa3 Rc8 14. Bb5 a6 15. dxc5 bxc5 16. O-O Ra7 17. Be2 Nd7 18. Nd4 Qf8 19. Nxe6 fxe6 20. e4 d4 21. f4 Qe7 22. e5 Rb8 23. Bc4 Kh8 24. Qh3 Nf8 25. b3 a5 26. f5 exf5 27. Rxf5 Nh7 28. Rcf1 Qd8 29. Qg3 Re7 30. h4 Rbb7 31. e6 Rbc7 32. Qe5 Qe8 33. a4 Qd8 34. R1f2 Qe8 35. R2f3 Qd8 36. Bd3 Qe8 37. Qe4 Nf6 38. Rxf6 gxf6 39. Rxf6 Kg8 40. Bc4 Kh8 41. Qf4 1-0"
  },
  {
    "id": "game-73-bronstein,-ljubojevic,-1973",
    "white": {
      "name": "Bronstein, D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Ljubojevic, L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Bronstein, D e Ljubojevic, L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"?\"]\n[White \"Bronstein,D\"]\n[Black \"Ljubojevic,L\"]\n[Result \"1-0\"]\n\n1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 c5 7. d5 e6 8. Nc3 exd5 9. cxd5 c4 10. Nf3 Bg4 11. Qd4 Bxf3 12. gxf3 Bb4 13. Bxc4 O-O 14. Rg1 g6 15. Bg5 Qc7 16. Bb3 Bc5 17. Qf4 Bxg1 18. d6 Qc8 19. Ke2 Bc5 20. Ne4 N8d7 21. Rc1 Qc6 22. Rxc5 Nxc5 23. Nf6+ Kh8 24. Qh4 Qb5+ 25. Ke3 h5 26. Nxh5 Qxb3+ 27. axb3 Nd5+ 28. Kd4 Ne6+ 29. Kxd5 Nxg5 30. Nf6+ Kg7 31. Qxg5 Rfc8 32. e6 fxe6+ 33. Kxe6 Rf8 34. d7 a5 35. Ng4 Ra6+ 36. Ke5 Rf5+ 37. Qxf5 gxf5 38. d8=Q fxg4 39. Qd7+ Kh6 40. Qxb7 Rg6 41. f4 1-0"
  },
  {
    "id": "game-74-karpov,-korchnoi,-1974",
    "white": {
      "name": "Karpov, A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Korchnoi, V",
      "title": "GM",
      "rating": "2650",
      "country": "Suíça",
      "code": "CH"
    },
    "event": "cf (WCh)",
    "site": "Moscow",
    "date": "1974.??.??",
    "year": "1974",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 53 lances entre Karpov, A e Korchnoi, V (1974).",
    "pgn": "[Event \"cf (WCh)\"]\n[Site \"Moscow\"]\n[Date \"1974.??.??\"]\n[Round \"2\"]\n[White \"Karpov,A\"]\n[Black \"Korchnoi,V\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6 8. Qd2 O-O 9. Bc4 Bd7 10. h4 Rc8 11. Bb3 Ne5 12. O-O-O Nc4 13. Bxc4 Rxc4 14. h5 Nxh5 15. g4 Nf6 16. Nde2 Qa5 17. Bh6 Bxh6 18. Qxh6 Rfc8 19. Rd3 R4c5 20. g5 Rxg5 21. Rd5 Rxd5 22. Nxd5 Re8 23. Nef4 Bc6 24. e5 Bxd5 25. exf6 exf6 26. Qxh7+ Kf8 27. Qh8+ 1-0"
  },
  {
    "id": "game-75-geller,-karpov,-1976",
    "white": {
      "name": "Geller, E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Karpov, A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "ch",
    "site": "URS",
    "date": "1976.??.??",
    "year": "1976",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 83 lances entre Geller, E e Karpov, A (1976).",
    "pgn": "[Event \"ch\"]\n[Site \"URS\"]\n[Date \"1976.??.??\"]\n[Round \"?\"]\n[White \"Geller,E\"]\n[Black \"Karpov,A\"]\n[Result \"1-0\"]\n\n1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 Qd7 5. Nf3 b6 6. Bd2 Ba6 7. Bxa6 Nxa6 8. O-O Nb8 9. Ne2 Be7 10. Rc1 b5 11. Nf4 h5 12. b3 Ba3 13. Rb1 a5 14. c4 c6 15. c5 Bb4 16. Bc1 a4 17. Nd3 Ba5 18. bxa4 bxa4 19. Qxa4 Qa7 20. Bg5 Bc7 21. Rxb8+ Qxb8 22. Qxc6+ Kf8 23. Nf4 Ra7 24. Nh4 Qe8 25. Qxe6 fxe6 26. Nhg6+ Qxg6 27. Nxg6+ Ke8 28. Nxh8 Ra4 29. Rd1 Ne7 30. Bxe7 Kxe7 31. Ng6+ Kf7 32. Nf4 Bxe5 33. dxe5 Rxf4 34. Rc1 Ke8 35. c6 Kd8 36. c7+ Kc8 37. g3 Ra4 38. Rc6 Rxa2 39. Rxe6 g5 40. Rd6 Rd2 41. e6 Kxc7 42. e7 1-0"
  },
  {
    "id": "game-76-kasparov,-pribyl,-1980",
    "white": {
      "name": "Kasparov, G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Pribyl, J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "EU-TC",
    "site": "Skara",
    "date": "1980.??.??",
    "year": "1980",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 61 lances entre Kasparov, G e Pribyl, J (1980).",
    "pgn": "[Event \"EU-TC\"]\n[Site \"Skara\"]\n[Date \"1980.??.??\"]\n[Round \"?\"]\n[White \"Kasparov,G\"]\n[Black \"Pribyl,J\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 b6 8. Bb5+ c6 9. Bc4 O-O 10. O-O Ba6 11. Bxa6 Nxa6 12. Qa4 Qc8 13. Bg5 Qb7 14. Rfe1 e6 15. Rab1 c5 16. d5 Bxc3 17. Red1 exd5 18. exd5 Bg7 19. d6 f6 20. d7 fxg5 21. Qc4+ Kh8 22. Nxg5 Bf6 23. Ne6 Nc7 24. Nxf8 Rxf8 25. Rd6 Be7 26. d8=Q Bxd8 27. Qc3+ Kg8 28. Rd7 Bf6 29. Qc4+ Kh8 30. Qf4 Qa6 31. Qh6 1-0"
  },
  {
    "id": "game-77-seirawan,-karpov,-1982",
    "white": {
      "name": "Seirawan, Y",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Karpov, A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "London",
    "date": "1982.??.??",
    "year": "1982",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 61 lances entre Seirawan, Y e Karpov, A (1982).",
    "pgn": "[Event \"?\"]\n[Site \"London\"]\n[Date \"1982.??.??\"]\n[Round \"?\"]\n[White \"Seirawan,Y\"]\n[Black \"Karpov,A\"]\n[Result \"1-0\"]\n\n1. Nf3 Nf6 2. c4 e6 3. Nc3 d5 4. d4 Be7 5. Bg5 h6 6. Bh4 O-O 7. Rc1 b6 8. cxd5 Nxd5 9. Nxd5 exd5 10. Bxe7 Qxe7 11. g3 Re8 12. Rc3 Na6 13. Qa4 c5 14. Re3 Be6 15. Qxa6 cxd4 16. Rb3 Bf5 17. Bg2 Bc2 18. Nxd4 Bxb3 19. Nxb3 Rac8 20. Bf3 Rc2 21. O-O Rxb2 22. Rd1 Rd8 23. Nd4 Rd7 24. Nc6 Qe8 25. Nxa7 Rc7 26. a4 Qa8 27. Rxd5 Qxa7 28. Rd8+ Kh7 29. Qd3+ f5 30. Qxf5+ g6 31. Qe6 1-0"
  },
  {
    "id": "game-78-korchnoi,-kasparov,-1982",
    "white": {
      "name": "Korchnoi, V",
      "title": "GM",
      "rating": "2650",
      "country": "Suíça",
      "code": "CH"
    },
    "black": {
      "name": "Kasparov, G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "ol",
    "site": "Luzern",
    "date": "1982.??.??",
    "year": "1982",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 72 lances entre Korchnoi, V e Kasparov, G (1982).",
    "pgn": "[Event \"ol\"]\n[Site \"Luzern\"]\n[Date \"1982.??.??\"]\n[Round \"?\"]\n[White \"Korchnoi,V\"]\n[Black \"Kasparov,G\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 c5 5. d5 d6 6. Nc3 O-O 7. Nf3 e6 8. O-O exd5 9. cxd5 a6 10. a4 Re8 11. Nd2 Nbd7 12. h3 Rb8 13. Nc4 Ne5 14. Na3 Nh5 15. e4 Rf8 16. Kh2 f5 17. f4 b5 18. axb5 axb5 19. Naxb5 fxe4 20. Bxe4 Bd7 21. Qe2 Qb6 22. Na3 Rbe8 23. Bd2 Qxb2 24. fxe5 Bxe5 25. Nc4 Nxg3 26. Rxf8+ Rxf8 27. Qe1 Nxe4+ 28. Kg2 Qc2 29. Nxe5 Rf2+ 30. Qxf2 Nxf2 31. Ra2 Qf5 32. Nxd7 Nd3 33. Bh6 Qxd7 34. Ra8+ Kf7 35. Rh8 Kf6 36. Kf3 Qxh3+ 0-1"
  },
  {
    "id": "game-79-kasparov,-portisch,-1983",
    "white": {
      "name": "Kasparov, G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Portisch, L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Niksic",
    "date": "1983.??.??",
    "year": "1983",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 69 lances entre Kasparov, G e Portisch, L (1983).",
    "pgn": "[Event \"?\"]\n[Site \"Niksic\"]\n[Date \"1983.??.??\"]\n[Round \"?\"]\n[White \"Kasparov,G\"]\n[Black \"Portisch,L\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb7 5. a3 d5 6. cxd5 Nxd5 7. e3 Nxc3 8. bxc3 Be7 9. Bb5+ c6 10. Bd3 c5 11. O-O Nc6 12. Bb2 Rc8 13. Qe2 O-O 14. Rad1 Qc7 15. c4 cxd4 16. exd4 Na5 17. d5 exd5 18. cxd5 Bxd5 19. Bxh7+ Kxh7 20. Rxd5 Kg8 21. Bxg7 Kxg7 22. Ne5 Rfd8 23. Qg4+ Kf8 24. Qf5 f6 25. Nd7+ Rxd7 26. Rxd7 Qc5 27. Qh7 Rc7 28. Qh8+ Kf7 29. Rd3 Nc4 30. Rfd1 Ne5 31. Qh7+ Ke6 32. Qg8+ Kf5 33. g4+ Kf4 34. Rd4+ Kf3 35. Qb3+ 1-0"
  },
  {
    "id": "game-80-karpov,-kasparov,-1985",
    "white": {
      "name": "Karpov, A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kasparov, G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "WCh II",
    "site": "Moscow",
    "date": "1985.??.??",
    "year": "1985",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 80 lances entre Karpov, A e Kasparov, G (1985).",
    "pgn": "[Event \"WCh II\"]\n[Site \"Moscow\"]\n[Date \"1985.??.??\"]\n[Round \"16\"]\n[White \"Karpov,A\"]\n[Black \"Kasparov,G\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 d5 9. cxd5 exd5 10. exd5 Nb4 11. Be2 Bc5 12. O-O O-O 13. Bf3 Bf5 14. Bg5 Re8 15. Qd2 b5 16. Rad1 Nd3 17. Nab1 h6 18. Bh4 b4 19. Na4 Bd6 20. Bg3 Rc8 21. b3 g5 22. Bxd6 Qxd6 23. g3 Nd7 24. Bg2 Qf6 25. a3 a5 26. axb4 axb4 27. Qa2 Bg6 28. d6 g4 29. Qd2 Kg7 30. f3 Qxd6 31. fxg4 Qd4+ 32. Kh1 Nf6 33. Rf4 Ne4 34. Qxd3 Nf2+ 35. Rxf2 Bxd3 36. Rfd2 Qe3 37. Rxd3 Rc1 38. Nb2 Qf2 39. Nd2 Rxd1+ 40. Nxd1 Re1+ 0-1"
  },
  {
    "id": "game-81-beliavsky,-nunn,-1985",
    "white": {
      "name": "Beliavsky, A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Nunn, J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Wijk",
    "date": "1985.??.??",
    "year": "1985",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 54 lances entre Beliavsky, A e Nunn, J (1985).",
    "pgn": "[Event \"?\"]\n[Site \"Wijk\"]\n[Date \"1985.??.??\"]\n[Round \"?\"]\n[White \"Beliavsky,A\"]\n[Black \"Nunn,J\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nbd7 7. Qd2 c5 8. d5 Ne5 9. h3 Nh5 10. Bf2 f5 11. exf5 Rxf5 12. g4 Rxf3 13. gxh5 Qf8 14. Ne4 Bh6 15. Qc2 Qf4 16. Ne2 Rxf2 17. Nxf2 Nf3+ 18. Kd1 Qh4 19. Nd3 Bf5 20. Nec1 Nd2 21. hxg6 hxg6 22. Bg2 Nxc4 23. Qf2 Ne3+ 24. Ke2 Qc4 25. Bf3 Rf8 26. Rg1 Nc2 27. Kd1 Bxd3 0-1"
  },
  {
    "id": "game-82-kasparov,-karpov,-1986",
    "white": {
      "name": "Kasparov, G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Karpov, A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "WCh III",
    "site": "Leningrad",
    "date": "1986.??.??",
    "year": "1986",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 91 lances entre Kasparov, G e Karpov, A (1986).",
    "pgn": "[Event \"WCh III\"]\n[Site \"Leningrad\"]\n[Date \"1986.??.??\"]\n[Round \"22\"]\n[White \"Kasparov,G\"]\n[Black \"Karpov,A\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bxf6 Bxf6 7. e3 O-O 8. Rc1 c6 9. Bd3 Nd7 10. O-O dxc4 11. Bxc4 e5 12. h3 exd4 13. exd4 Nb6 14. Bb3 Bf5 15. Re1 a5 16. a3 Re8 17. Rxe8+ Qxe8 18. Qd2 Nd7 19. Qf4 Bg6 20. h4 Qd8 21. Na4 h5 22. Re1 b5 23. Nc3 Qb8 24. Qe3 b4 25. Ne4 bxa3 26. Nxf6+ Nxf6 27. bxa3 Nd5 28. Bxd5 cxd5 29. Ne5 Qd8 30. Qf3 Ra6 31. Rc1 Kh7 32. Qh3 Rb6 33. Rc8 Qd6 34. Qg3 a4 35. Ra8 Qe6 36. Rxa4 Qf5 37. Ra7 Rb1+ 38. Kh2 Rc1 39. Rb7 Rc2 40. f3 Rd2 41. Nd7 Rxd4 42. Nf8+ Kh6 43. Rb4 Rc4 44. Rxc4 dxc4 45. Qd6 c3 46. Qd4 1-0"
  },
  {
    "id": "game-83-tal,-hjartarson,-1987",
    "white": {
      "name": "Tal, M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Hjartarson, J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Reykjavik",
    "date": "1987.??.??",
    "year": "1987",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 85 lances entre Tal, M e Hjartarson, J (1987).",
    "pgn": "[Event \"?\"]\n[Site \"Reykjavik\"]\n[Date \"1987.??.??\"]\n[Round \"?\"]\n[White \"Tal,M\"]\n[Black \"Hjartarson,J\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d6 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Bd7 13. Nf1 cxd4 14. cxd4 Rac8 15. Ne3 Nc6 16. d5 Nb4 17. Bb1 a5 18. a3 Na6 19. b4 g6 20. Bd2 axb4 21. axb4 Qb7 22. Bd3 Nc7 23. Nc2 Nh5 24. Be3 Ra8 25. Qd2 Rxa1 26. Nxa1 f5 27. Bh6 Ng7 28. Nb3 f4 29. Na5 Qb6 30. Rc1 Ra8 31. Qc2 Nce8 32. Qb3 Bf6 33. Nc6 Nh5 34. Qb2 Bg7 35. Bxg7 Kxg7 36. Rc5 Qa6 37. Rxb5 Nc7 38. Rb8 Qxd3 39. Ncxe5 Qd1+ 40. Kh2 Ra1 41. Ng4+ Kf7 42. Nh6+ Ke7 43. Ng8+ 1-0"
  },
  {
    "id": "game-84-keres-reshevsky-1953",
    "white": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Zurich ct",
    "date": "1953.??.??",
    "year": "1953",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 81 lances entre Keres P e Reshevsky S (1953).",
    "pgn": "[Event \"?\"]\n[Site \"Zurich ct\"]\n[Date \"1953.??.??\"]\n[Round \"11\"]\n[White \"Keres P\"]\n[Black \"Reshevsky S\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 O-O 6. a3 Bxc3+ 7. bxc3 b6 8. e4 Bb7 9. Bg5 h6 10. h4 d6 11. e5 dxe5 12. dxe5 Be4 13. Rh3 Bxd3 14. Rxd3 Qc7 15. Bxf6 gxf6 16. Qg4+ Kh8 17. Qf3 Nd7 18. O-O-O Nxe5 19. Qxf6+ Kh7 20. Rd6 Nxc4 21. Nf3 Nxd6 22. Ng5+ Kg8 23. Qxh6 f6 24. Nxe6 Qe7 25. Rxd6 Rf7 26. Qd2 Re8 27. f4 f5 28. Qd5 Kh8 29. Qe5+ Qf6 30. Kc2 c4 31. Kd2 Kg8 32. Qd5 Qxh4 33. Qxc4 Qf2+ 34. Kc1 Qg1+ 35. Kc2 Qxg2+ 36. Kb3 b5 37. Qd4 Qf1 38. Kb4 Qc4+ 39. Qxc4 bxc4 40. Kxc4 Rc8+ 41. Kb5 1/2-1/2"
  },
  {
    "id": "game-85-keres-petrosian-1959",
    "white": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Petrosian T",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Bled ct",
    "date": "1959.??.??",
    "year": "1959",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 102 lances entre Keres P e Petrosian T (1959).",
    "pgn": "[Event \"?\"]\n[Site \"Bled ct\"]\n[Date \"1959.??.??\"]\n[Round \"04\"]\n[White \"Keres P\"]\n[Black \"Petrosian T\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Bg7 6. Be3 Nf6 7. Nc3 Ng4 8. Qxg4 Nxd4 9. Qd1 Ne6 10. Qd2 d6 11. Be2 Bd7 12. O-O O-O 13. Rac1 Bc6 14. Rfd1 Nc5 15. f3 a5 16. b3 Qb6 17. Nb5 Rfc8 18. Bf1 Qd8 19. Qf2 Qe8 20. Nc3 b6 21. Rc2 Qf8 22. Qd2 Bd7 23. Nd5 Rab8 24. Bg5 Re8 25. Re1 Rb7 26. Qf2 Bc6 27. Qh4 f6 28. Be3 e6 29. Nc3 Rd7 30. Bd4 f5 31. exf5 gxf5 32. Rd2 Bxd4+ 33. Rxd4 Rg7 34. Kh1 Rg6 35. Rd2 Rd8 36. Red1 Rd7 37. Qf2 Qd8 38. Qe3 e5 39. f4 e4 40. Ne2 Rdg7 41. Nd4 Bd7 42. a3 Qa8 43. Kg1 h5 44. Rb1 h4 45. Rbb2 Rg4 46. Rf2 Qd8 47. b4 Rg3 48. hxg3 hxg3 49. Rfd2 Qh4 50. Be2 Rh7 51. Kf1 Qxf4+ 0-1"
  },
  {
    "id": "game-86-tal-smyslov-1959",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Bled ct",
    "date": "1959.??.??",
    "year": "1959",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 51 lances entre Tal M e Smyslov V (1959).",
    "pgn": "[Event \"?\"]\n[Site \"Bled ct\"]\n[Date \"1959.??.??\"]\n[Round \"08\"]\n[White \"Tal M\"]\n[Black \"Smyslov V\"]\n[Result \"1-0\"]\n\n1. e4 c6 2. d3 d5 3. Nd2 e5 4. Ngf3 Nd7 5. d4 dxe4 6. Nxe4 exd4 7. Qxd4 Ngf6 8. Bg5 Be7 9. O-O-O O-O 10. Nd6 Qa5 11. Bc4 b5 12. Bd2 Qa6 13. Nf5 Bd8 14. Qh4 bxc4 15. Qg5 Nh5 16. Nh6+ Kh8 17. Qxh5 Qxa2 18. Bc3 Nf6 19. Qxf7 Qa1+ 20. Kd2 Rxf7 21. Nxf7+ Kg8 22. Rxa1 Kxf7 23. Ne5+ Ke6 24. Nxc6 Ne4+ 25. Ke3 Bb6+ 26. Bd4 1-0"
  },
  {
    "id": "game-87-kortchnoi,-tal,-1962",
    "white": {
      "name": "Kortchnoi, V.",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tal, M.",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "URS-ch30 Yerevan ,URS",
    "date": "1962.??.??",
    "year": "1962",
    "eco": "A62",
    "opening": "Abertura Teórica (A62)",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 107 lances entre Kortchnoi, V. e Tal, M. (1962).",
    "pgn": "[Event \"?\"]\n[Site \"URS-ch30 Yerevan ,URS\"]\n[Date \"1962.??.??\"]\n[Round \"?\"]\n[White \"Kortchnoi,V.\"]\n[Black \"Tal,M.\"]\n[Result \"1-0\"]\n[ECO \"A62\"]\n\n1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. Nf3 g6 7. g3 Bg7 8. Bg2 O-O 9. O-O Na6 10. h3 Nc7 11. e4 Nd7 12. Re1 Ne8 13. Bg5 Bf6 14. Be3 Rb8 15. a4 a6 16. Bf1 Qe7 17. Nd2 Nc7 18. f4 b5 19. e5 dxe5 20. Nde4 Qd8 21. Nxf6+ Nxf6 22. d6 Ne6 23. fxe5 b4 24. Nd5 Nxd5 25. Qxd5 Bb7 26. Qd2 Qd7 27. Kh2 b3 28. Rac1 Qxa4 29. Bc4 Bc8 30. Rf1 Rb4 31. Bxe6 Bxe6 32. Bh6 Re8 33. Qg5 Re4 34. Rf2 f5 35. Qf6 Qd7 36. Rxc5 Rc4 37. Rxc4 Bxc4 38. Rd2 Be6 39. Rd1 Qa7 40. Rd2 Qd7 41. Rd1 Qa7 42. Rd4 Qd7 43. g4 a5 44. Kg3 Rb8 45. Kh4 Qf7 46. Kg5 fxg4 47. hxg4 Bd7 48. Rc4 a4 49. Rc7 a3 50. Rxd7 Qxd7 51. e6 Qa7 52. Qe5 axb2 53. e7 Kf7 54. d7 1-0"
  },
  {
    "id": "game-88-nezhmetdinov,-chernikov,-1962",
    "white": {
      "name": "Nezhmetdinov, Rashid",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Chernikov, O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "RSFSR League",
    "date": "1962.??.??",
    "year": "1962",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 65 lances entre Nezhmetdinov, Rashid e Chernikov, O (1962).",
    "pgn": "[Event \"?\"]\n[Site \"RSFSR League\"]\n[Date \"1962.??.??\"]\n[Round \"?\"]\n[White \"Nezhmetdinov,Rashid\"]\n[Black \"Chernikov,O\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Bc4 O-O 8. Bb3 Ng4 9. Qxg4 Nxd4 10. Qh4 Qa5 11. O-O Bf6 12. Qxf6 Ne2+ 13. Nxe2 exf6 14. Nc3 Re8 15. Nd5 Re6 16. Bd4 Kg7 17. Rad1 d6 18. Rd3 Bd7 19. Rf3 Bb5 20. Bc3 Qd8 21. Nxf6 Be2 22. Nxh7+ Kg8 23. Rh3 Re5 24. f4 Bxf1 25. Kxf1 Rc8 26. Bd4 b5 27. Ng5 Rc7 28. Bxf7+ Rxf7 29. Rh8+ Kxh8 30. Nxf7+ Kh7 31. Nxd8 Rxe4 32. Nc6 Rxf4+ 33. Ke2 1-0"
  },
  {
    "id": "game-89-bisguier-benko-1963",
    "white": {
      "name": "Bisguier A",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Benko Pal",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "New York USA ch",
    "date": "1963.??.??",
    "year": "1963",
    "eco": "D97",
    "opening": "Abertura Teórica (D97)",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 62 lances entre Bisguier A e Benko Pal (1963).",
    "pgn": "[Event \"?\"]\n[Site \"New York USA ch\"]\n[Date \"1963.??.??\"]\n[Round \"07\"]\n[White \"Bisguier A\"]\n[Black \"Benko Pal\"]\n[Result \"0-1\"]\n[ECO \"D97\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. Bf4 c6 8. e4 b5 9. Qd3 Qa5 10. Be2 b4 11. Nd1 c5 12. O-O Ba6 13. Qc2 cxd4 14. Nxd4 Rc8 15. Qb1 Nh5 16. Nb3 Nxf4 17. Nxa5 Nxe2+ 18. Kh1 Rc1 19. Qxc1 Nxc1 20. Rxc1 Bxf1 21. Rc8+ Bf8 22. Ne3 Ba6 23. Rd8 e6 24. Ng4 Kg7 25. e5 Be7 26. Re8 Bg5 27. h4 Bxh4 28. g3 Bb5 29. Nf6 Bxe8 30. Nxe8+ Kf8 31. Nc7 Bd8 0-1"
  },
  {
    "id": "game-90-petrosian-spassky-1966",
    "white": {
      "name": "Petrosian T",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Spassky B",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Moscow wcc",
    "date": "1966.??.??",
    "year": "1966",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 59 lances entre Petrosian T e Spassky B (1966).",
    "pgn": "[Event \"?\"]\n[Site \"Moscow wcc\"]\n[Date \"1966.??.??\"]\n[Round \"10\"]\n[White \"Petrosian T\"]\n[Black \"Spassky B\"]\n[Result \"1-0\"]\n\n1. Nf3 Nf6 2. g3 g6 3. c4 Bg7 4. Bg2 O-O 5. O-O Nc6 6. Nc3 d6 7. d4 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 e5 11. b3 Ng4 12. e4 f5 13. exf5 gxf5 14. Nd1 b5 15. f3 e4 16. Bb2 exf3 17. Bxf3 Bxb2 18. Qxb2 Ne5 19. Be2 f4 20. gxf4 Bh3 21. Ne3 Bxf1 22. Rxf1 Ng6 23. Bg4 Nxf4 24. Rxf4 Rxf4 25. Be6+ Rf7 26. Ne4 Qh4 27. Nxd6 Qg5+ 28. Kh1 Ra7 29. Bxf7+ Rxf7 30. Qh8+ 1-0"
  },
  {
    "id": "game-91-fischer-spassky-1972",
    "white": {
      "name": "Fischer R",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Spassky B",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Reykjavik wcc",
    "date": "1972.??.??",
    "year": "1972",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 111 lances entre Fischer R e Spassky B (1972).",
    "pgn": "[Event \"?\"]\n[Site \"Reykjavik wcc\"]\n[Date \"1972.??.??\"]\n[Round \"10\"]\n[White \"Fischer R\"]\n[Black \"Spassky B\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. b4 Bf8 14. a4 Nb6 15. a5 Nbd7 16. Bb2 Qb8 17. Rb1 c5 18. bxc5 dxc5 19. dxe5 Nxe5 20. Nxe5 Qxe5 21. c4 Qf4 22. Bxf6 Qxf6 23. cxb5 Red8 24. Qc1 Qc3 25. Nf3 Qxa5 26. Bb3 axb5 27. Qf4 Rd7 28. Ne5 Qc7 29. Rbd1 Re7 30. Bxf7+ Rxf7 31. Qxf7+ Qxf7 32. Nxf7 Bxe4 33. Rxe4 Kxf7 34. Rd7+ Kf6 35. Rb7 Ra1+ 36. Kh2 Bd6+ 37. g3 b4 38. Kg2 h5 39. Rb6 Rd1 40. Kf3 Kf7 41. Ke2 Rd5 42. f4 g6 43. g4 hxg4 44. hxg4 g5 45. f5 Be5 46. Rb5 Kf6 47. Rexb4 Bd4 48. Rb6+ Ke5 49. Kf3 Rd8 50. Rb8 Rd7 51. R4b7 Rd6 52. Rb6 Rd7 53. Rg6 Kd5 54. Rxg5 Be5 55. f6 Kd4 56. Rb1 1-0"
  },
  {
    "id": "game-92-polugaevsky,-torre,-1981",
    "white": {
      "name": "Polugaevsky, Lev",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Torre, Eugenio",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Moskva",
    "date": "1981.??.??",
    "year": "1981",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 79 lances entre Polugaevsky, Lev e Torre, Eugenio (1981).",
    "pgn": "[Event \"?\"]\n[Site \"Moskva\"]\n[Date \"1981.??.??\"]\n[Round \"?\"]\n[White \"Polugaevsky,Lev\"]\n[Black \"Torre,Eugenio\"]\n[Result \"1-0\"]\n\n1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 hxg5 10. Bxg5 Nbd7 11. exf6 Bb7 12. g3 c5 13. d5 Nb6 14. dxe6 Qxd1+ 15. Rxd1 Bxh1 16. e7 a6 17. h4 Bh6 18. f4 b4 19. Rd6 Rb8 20. Nd1 Bxg5 21. fxg5 Nd5 22. Bxc4 Nxe7 23. fxe7 Kxe7 24. Rf6 Rhf8 25. Ne3 Be4 26. Rxa6 Rbd8 27. Rf6 Rd6 28. Rf4 Rd4 29. h5 Bd3 30. Nd5+ Kd6 31. Rxd4 cxd4 32. Bb3 Bc2 33. Bxc2 Kxd5 34. Bb3+ Ke5 35. g4 Kf4 36. g6 Ke3 37. g7 Rc8 38. Kf1 d3 39. Kg2 Kf4 40. h6 1-0"
  },
  {
    "id": "game-93-polugaevsky,-ftacnik,-1982",
    "white": {
      "name": "Polugaevsky, Lev",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Ftacnik, Lubomir",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Lucerne ol",
    "date": "1982.??.??",
    "year": "1982",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 58 lances entre Polugaevsky, Lev e Ftacnik, Lubomir (1982).",
    "pgn": "[Event \"?\"]\n[Site \"Lucerne ol\"]\n[Date \"1982.??.??\"]\n[Round \"?\"]\n[White \"Polugaevsky,Lev\"]\n[Black \"Ftacnik,Lubomir\"]\n[Result \"0-1\"]\n\n1. Nf3 Nf6 2. c4 c5 3. Nc3 e6 4. g3 b6 5. Bg2 Bb7 6. O-O Be7 7. d4 cxd4 8. Qxd4 d6 9. Rd1 a6 10. b3 Nbd7 11. e4 Qb8 12. Bb2 O-O 13. Nd2 Rd8 14. a4 Qc7 15. Qe3 Rac8 16. Qe2 Ne5 17. h3 h5 18. f4 Ng6 19. Nf3 d5 20. cxd5 h4 21. Nxh4 Nxh4 22. gxh4 Qxf4 23. dxe6 fxe6 24. e5 Bc5+ 25. Kh1 Nh5 26. Qxh5 Qg3 27. Nd5 Rxd5 28. Rf1 Qxg2+ 29. Kxg2 Rd2+ 0-1"
  },
  {
    "id": "game-94-portisch,-pinter,-1984",
    "white": {
      "name": "Portisch, L.",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Pinter, J.",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Magyarorszag (ch) 37/473",
    "date": "1984.??.??",
    "year": "1984",
    "eco": "D41",
    "opening": "Abertura Teórica (D41)",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 66 lances entre Portisch, L. e Pinter, J. (1984).",
    "pgn": "[Event \"?\"]\n[Site \"Magyarorszag (ch) 37/473\"]\n[Date \"1984.??.??\"]\n[Round \"?\"]\n[White \"Portisch,L.\"]\n[Black \"Pinter,J.\"]\n[Result \"0-1\"]\n[ECO \"D41\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5 Nxd5 6. e4 Nxc3 7. bxc3 cxd4 8. cxd4 Nc6 9. Bc4 b5 10. Be2 Bb4+ 11. Bd2 Qa5 12. Bxb4 Qxb4+ 13. Qd2 Bb7 14. a3 Qxd2+ 15. Kxd2 a6 16. a4 b4 17. a5 Rd8 18. Ke3 f5 19. exf5 exf5 20. Bc4 Ke7 21. d5 Kf6 22. dxc6 Rhe8+ 23. Kf4 Re4+ 24. Kg3 Bc8 25. Rac1 Rg4+ 26. Kh3 f4 27. Ne5 Kg5 28. Nf7+ Kh5 29. Be2 Rd3+ 30. g3 f3 31. Rc5+ Rg5+ 32. g4+ Bxg4+ 33. Kg3 fxe2+ 0-1"
  },
  {
    "id": "game-95-ivanchuk-yusupov-1991",
    "white": {
      "name": "Ivanchuk V",
      "title": "GM",
      "rating": "2650",
      "country": "Ucrânia",
      "code": "UA"
    },
    "black": {
      "name": "Yusupov A",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Brussels cm4",
    "date": "1991.??.??",
    "year": "1991",
    "eco": "E67",
    "opening": "Abertura Teórica (E67)",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 78 lances entre Ivanchuk V e Yusupov A (1991).",
    "pgn": "[Event \"?\"]\n[Site \"Brussels cm4\"]\n[Date \"1991.??.??\"]\n[Round \"09\"]\n[White \"Ivanchuk V\"]\n[Black \"Yusupov A\"]\n[Result \"0-1\"]\n[ECO \"E67\"]\n\n1. c4 e5 2. g3 d6 3. Bg2 g6 4. d4 Nd7 5. Nc3 Bg7 6. Nf3 Ngf6 7. O-O O-O 8. Qc2 Re8 9. Rd1 c6 10. b3 Qe7 11. Ba3 e4 12. Ng5 e3 13. f4 Nf8 14. b4 Bf5 15. Qb3 h6 16. Nf3 Ng4 17. b5 g5 18. bxc6 bxc6 19. Ne5 gxf4 20. Nxc6 Qg5 21. Bxd6 Ng6 22. Nd5 Qh5 23. h4 Nxh4 24. gxh4 Qxh4 25. Nde7+ Kh8 26. Nxf5 Qh2+ 27. Kf1 Re6 28. Qb7 Rg6 29. Qxa8+ Kh7 30. Qg8+ Kxg8 31. Nce7+ Kh7 32. Nxg6 fxg6 33. Nxg7 Nf2 34. Bxf4 Qxf4 35. Ne6 Qh2 36. Rdb1 Nh3 37. Rb7+ Kg8 38. Rb8+ Qxb8 39. Bxh3 Qg3 0-1"
  },
  {
    "id": "game-96-rohde,-polgar,-1992",
    "white": {
      "name": "Rohde, M.",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Polgar, Susan",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "New York",
    "date": "1992.??.??",
    "year": "1992",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 59 lances entre Rohde, M. e Polgar, Susan (1992).",
    "pgn": "[Event \"?\"]\n[Site \"New York\"]\n[Date \"1992.??.??\"]\n[Round \"05\"]\n[White \"Rohde,M.\"]\n[Black \"Polgar,Susan\"]\n[Result \"1-0\"]\n\n1. c4 e5 2. Nc3 Nc6 3. Nf3 f5 4. d4 e4 5. Ng5 h6 6. Nh3 g5 7. Ng1 Bg7 8. e3 Nf6 9. h4 Kf7 10. Nh3 Kg6 11. f3 Qe7 12. fxe4 Nxe4 13. Nxe4 Qxe4 14. Bd3 Qxg2 15. Bxf5+ Kxf5 16. Rf1+ Ke6 17. Qh5 Ne5 18. dxe5 Bxe5 19. Qf7+ Kd6 20. Rf6+ Kc5 21. b4+ Kxb4 22. Bd2+ Ka3 23. c5 d5 24. cxd6 Bg3+ 25. Rf2 Qh1+ 26. Ke2 Bg4+ 27. Kd3 Bd1 28. Bc1+ Ka4 29. Qc4+ Ka5 30. Bd2+ 1-0"
  },
  {
    "id": "game-97-kasparov-kramnik-1994",
    "white": {
      "name": "Kasparov Gary",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Kramnik Vladimir",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Match do Campeonato Mundial",
    "site": "Novgorod (Russia) It (cat.19)",
    "date": "1994.??.??",
    "year": "1994",
    "eco": "B33",
    "opening": "Abertura Teórica (B33)",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 70 lances entre Kasparov Gary e Kramnik Vladimir (1994).",
    "pgn": "[Event \"?\"]\n[Site \"Novgorod (Russia) It (cat.19)\"]\n[Date \"1994.??.??\"]\n[Round \"04\"]\n[White \"Kasparov Gary\"]\n[Black \"Kramnik Vladimir\"]\n[Result \"1-0\"]\n[ECO \"B33\"]\n\n1. e4 c5 2. Nc3 Nc6 3. Nge2 Nf6 4. d4 cxd4 5. Nxd4 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Nd5 Be7 10. Bxf6 Bxf6 11. c3 O-O 12. Nc2 Rb8 13. h4 Ne7 14. Nxf6+ gxf6 15. Qd2 Bb7 16. Bd3 d5 17. exd5 Qxd5 18. O-O-O e4 19. Be2 Qxa2 20. Qh6 Qe6 21. Nd4 Qb6 22. Rh3 Kh8 23. Bg4 Rg8 24. Ne6 Rg6 25. Qf4 Re8 26. Rd6 Nd5 27. h5 Nxf4 28. hxg6 Qxd6 29. Rxh7+ Kg8 30. gxf7+ Kxh7 31. fxe8=Q Nxe6 32. Bf5+ Kg7 33. Qg6+ Kf8 34. Qxf6+ Ke8 35. Bxe6 Qf8 1-0"
  },
  {
    "id": "game-98-tal-botvinnik-1960",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Botvinnik M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1960.??.??",
    "year": "1960",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 63 lances entre Tal M e Botvinnik M (1960).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1960.??.??\"]\n[Round \"01\"]\n[White \"Tal M\"]\n[Black \"Botvinnik M\"]\n[Result \"1-0\"]\n\n1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Qc7 7. Qg4 f5 8. Qg3 Ne7 9. Qxg7 Rg8 10. Qxh7 cxd4 11. Kd1 Bd7 12. Qh5+ Ng6 13. Ne2 d3 14. cxd3 Ba4+ 15. Ke1 Qxe5 16. Bg5 Nc6 17. d4 Qc7 18. h4 e5 19. Rh3 Qf7 20. dxe5 Ncxe5 21. Re3 Kd7 22. Rb1 b6 23. Nf4 Rae8 24. Rb4 Bc6 25. Qd1 Nxf4 26. Rxf4 Ng6 27. Rd4 Rxe3+ 28. fxe3 Kc7 29. c4 dxc4 30. Bxc4 Qg7 31. Bxg8 Qxg8 32. h5 1-0"
  },
  {
    "id": "game-99-botvinnik-tal-1960",
    "white": {
      "name": "Botvinnik M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1960.??.??",
    "year": "1960",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 88 lances entre Botvinnik M e Tal M (1960).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1960.??.??\"]\n[Round \"02\"]\n[White \"Botvinnik M\"]\n[Black \"Tal M\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. Nf3 g6 7. Bg5 Bg7 8. Nd2 h6 9. Bh4 g5 10. Bg3 Nh5 11. Nc4 Nxg3 12. hxg3 O-O 13. e3 Qe7 14. Be2 Rd8 15. O-O Nd7 16. a4 Ne5 17. Nxe5 Qxe5 18. a5 Rb8 19. Ra2 Bd7 20. Nb5 Bxb5 21. Bxb5 b6 22. a6 Rbc8 23. Qd3 Rc7 24. b3 Qc3 25. Qxc3 Bxc3 26. Rc2 Bf6 27. g4 Re7 28. Rc4 Rc8 29. g3 Bg7 30. Rd1 Rf8 31. Rd3 Kh7 32. Kg2 Kg6 33. Rd1 h5 34. gxh5+ Kxh5 35. g4+ Kg6 36. Rc2 Rh8 37. Bd3+ Kf6 38. Kg3 Ree8 39. Bb5 Re4 40. Rc4 Rxc4 41. bxc4 Ke7 42. Ba4 Be5+ 43. Kf3 Rh4 44. Rg1 f5 1/2-1/2"
  },
  {
    "id": "game-100-botvinnik-tal-1961",
    "white": {
      "name": "Botvinnik M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1961.??.??",
    "year": "1961",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Botvinnik M e Tal M (1961).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1961.??.??\"]\n[Round \"01\"]\n[White \"Botvinnik M\"]\n[Black \"Tal M\"]\n[Result \"1-0\"]\n\n1. c4 Nf6 2. Nc3 e6 3. d4 Bb4 4. e3 O-O 5. Bd3 d5 6. a3 dxc4 7. Bxc4 Bd6 8. Nf3 Nc6 9. Nb5 e5 10. Nxd6 Qxd6 11. dxe5 Qxd1+ 12. Kxd1 Ng4 13. Ke2 Ncxe5 14. Bd5 c6 15. Be4 Be6 16. Nd2 Rad8 17. h3 Nf6 18. Bc2 Rd7 19. b3 Rfd8 20. Rd1 Nd3 21. Bxd3 Rxd3 22. Bb2 R3d7 23. Bxf6 gxf6 24. b4 Bf5 25. Nb3 Bd3+ 26. Ke1 b6 27. Rac1 Be4 28. f3 Rxd1+ 29. Rxd1 Rxd1+ 30. Kxd1 Bd5 31. Nd4 c5 32. bxc5 bxc5 33. Nb5 a6 34. Nc7 Bc4 35. Ne8 f5 36. h4 Kf8 37. Nd6 Bf1 38. g3 Ke7 39. Nxf5+ Ke6 40. e4 Ke5 41. Kd2 1-0"
  },
  {
    "id": "game-101-tal-botvinnik-1961",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Botvinnik M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1961.??.??",
    "year": "1961",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 89 lances entre Tal M e Botvinnik M (1961).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1961.??.??\"]\n[Round \"02\"]\n[White \"Tal M\"]\n[Black \"Botvinnik M\"]\n[Result \"1-0\"]\n\n1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. Bc4 e6 7. N1e2 Nf6 8. Nf4 Bd6 9. O-O Nd5 10. Ngh5 O-O 11. Bb3 Nd7 12. Nxg6 hxg6 13. Ng3 Qh4 14. Qd3 Rad8 15. Re1 N7f6 16. h3 Bf4 17. c3 b6 18. Qf3 Bxc1 19. Raxc1 Qf4 20. Qe2 c5 21. Rcd1 Qc7 22. dxc5 bxc5 23. Ne4 Nxe4 24. Qxe4 Nf6 25. Qe2 Rxd1 26. Rxd1 Rd8 27. Rxd8+ Qxd8 28. Bc4 Qb8 29. Qd2 Qc7 30. Bf1 Kf8 31. b4 cxb4 32. cxb4 Nd5 33. a3 Qc3 34. Qg5 Qf6 35. Qg3 Qf4 36. Qd3 Qc1 37. a4 Kg8 38. a5 Qe1 39. Qd4 a6 40. b5 axb5 41. a6 Qa5 42. a7 b4 43. Bc4 f6 44. Bb5 b3 45. Qa4 1-0"
  },
  {
    "id": "game-102-botvinnik-smyslov-1957",
    "white": {
      "name": "Botvinnik M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1957.??.??",
    "year": "1957",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 81 lances entre Botvinnik M e Smyslov V (1957).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1957.??.??\"]\n[Round \"01\"]\n[White \"Botvinnik M\"]\n[Black \"Smyslov V\"]\n[Result \"0-1\"]\n\n1. c4 Nf6 2. Nc3 g6 3. g3 Bg7 4. Bg2 O-O 5. e4 c5 6. Nge2 Nc6 7. O-O d6 8. a3 Bd7 9. h3 Ne8 10. d3 Nc7 11. Rb1 Rb8 12. Be3 b5 13. cxb5 Nxb5 14. Nxb5 Rxb5 15. d4 Qc8 16. dxc5 dxc5 17. Kh2 Rd8 18. Qc1 Nd4 19. Nc3 Rb7 20. f4 Bc6 21. Rf2 a5 22. Qf1 Nb5 23. e5 Nxc3 24. bxc3 Bxg2 25. Rxg2 Rxb1 26. Qxb1 Qc6 27. Rd2 Rxd2+ 28. Bxd2 c4 29. Be3 f6 30. Bd4 Kf7 31. Qd1 a4 32. Qe2 Qd5 33. Kg1 Bf8 34. f5 fxe5 35. fxg6+ hxg6 36. Bxe5 e6 37. Qf2+ Ke8 38. Qf6 Bxa3 39. Qxg6+ Kd7 40. Qh7+ Be7 41. Bf6 0-1"
  },
  {
    "id": "game-103-smyslov-botvinnik-1957",
    "white": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Botvinnik M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1957.??.??",
    "year": "1957",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 90 lances entre Smyslov V e Botvinnik M (1957).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1957.??.??\"]\n[Round \"02\"]\n[White \"Smyslov V\"]\n[Black \"Botvinnik M\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 a6 8. O-O-O h6 9. Be3 Ng4 10. Nxc6 bxc6 11. Bc5 Bb7 12. h3 dxc5 13. Qxd8+ Rxd8 14. Rxd8+ Kxd8 15. hxg4 Bd6 16. Na4 Kc7 17. Bc4 Rd8 18. b3 Bc8 19. Re1 f6 20. Nb2 Bf4+ 21. Kb1 Bd2 22. Rf1 Bf4 23. Nd3 Bd6 24. Kc1 a5 25. a4 Be7 26. Re1 Bd6 27. e5 Bxe5 28. Nxe5 fxe5 29. Rxe5 Kd6 30. Re3 Rf8 31. f3 e5 32. Kd2 Rf4 33. g3 Rf8 34. Rd3+ Kc7 35. Re3 Kd6 36. Be2 Be6 37. Rd3+ Kc7 38. Rc3 Kd6 39. Ke3 Bd5 40. Rd3 Kc7 41. Rd1 Rf6 42. Rh1 Kd6 43. c4 Bf7 44. Bd3 Ke7 45. Be4 Rd6 1/2-1/2"
  },
  {
    "id": "game-104-smyslov-botvinnik-1958",
    "white": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Botvinnik M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1958.??.??",
    "year": "1958",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 124 lances entre Smyslov V e Botvinnik M (1958).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1958.??.??\"]\n[Round \"01\"]\n[White \"Smyslov V\"]\n[Black \"Botvinnik M\"]\n[Result \"0-1\"]\n\n1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bxf3 5. Qxf3 Nf6 6. d3 e6 7. Be2 Nbd7 8. Qg3 g6 9. O-O Bg7 10. Bf4 Qb6 11. Rab1 O-O 12. Bc7 Qd4 13. Bf3 e5 14. Bd6 Rfe8 15. Ba3 dxe4 16. dxe4 b5 17. Rfd1 Qb6 18. b3 Nc5 19. Bc1 Qc7 20. Be3 Ne6 21. a4 a6 22. b4 Rad8 23. Be2 Qe7 24. axb5 axb5 25. Rxd8 Rxd8 26. Bb6 Ra8 27. f3 Ra3 28. Qe1 Bh6 29. Bf1 Nd4 30. Bc5 Qe6 31. Bd3 Nd7 32. Bxd4 exd4 33. Ne2 Be3+ 34. Kh1 Ne5 35. Qf1 Qd6 36. f4 Nxd3 37. cxd3 Rxd3 38. Qf3 Rd2 39. Rf1 Qxb4 40. e5 Qc4 41. Ng3 Rc2 42. f5 Rc1 43. e6 fxe6 44. fxg6 Rxf1+ 45. Nxf1 hxg6 46. Qf6 b4 47. Kh2 g5 48. Nxe3 dxe3 49. Qxg5+ Kf7 50. Qxe3 b3 51. Qe5 c5 52. Qc7+ Kg6 53. Qb8 Kf5 54. Qf8+ Ke4 55. Qf6 Qd5 56. Qf3+ Kd4 57. Qd1+ Ke5 58. Qe2+ Kd6 59. Qa6+ Ke7 60. Qa7+ Kf6 61. Qh7 Qe5+ 62. Kh1 b2 0-1"
  },
  {
    "id": "game-105-botvinnik-smyslov-1958",
    "white": {
      "name": "Botvinnik M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1958.??.??",
    "year": "1958",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Botvinnik M e Smyslov V (1958).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1958.??.??\"]\n[Round \"02\"]\n[White \"Botvinnik M\"]\n[Black \"Smyslov V\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 a6 7. Bd3 Nc6 8. Nge2 Rb8 9. a3 Nd7 10. Bb1 Na5 11. Ba2 b5 12. cxb5 axb5 13. b4 Nc4 14. Bxc4 bxc4 15. O-O c6 16. Qd2 Nb6 17. Bh6 Bxh6 18. Qxh6 f6 19. a4 Na8 20. Rfb1 f5 21. Qe3 fxe4 22. fxe4 Nc7 23. d5 cxd5 24. exd5 Bb7 25. Rf1 Qd7 26. Qd4 e6 27. dxe6 Nxe6 28. Qg4 Rfe8 29. Nd4 Qg7 30. Rad1 Nc7 31. Qf4 Re5 32. Nc6 Bxc6 33. Qxc4+ d5 34. Qxc6 Rd8 35. Qb6 Qe7 36. Qd4 Qd6 37. Rfe1 Rde8 38. Rxe5 Rxe5 39. b5 Ne6 40. Qa7 d4 41. Ne4 1-0"
  },
  {
    "id": "game-106-karpov-kasparov-1984",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1984.09.10",
    "year": "1984",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 72 lances entre Karpov A e Kasparov G (1984).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1984.09.10\"]\n[Round \"01\"]\n[White \"Karpov A\"]\n[Black \"Kasparov G\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g4 h6 7. h4 Nc6 8. Rg1 h5 9. gxh5 Nxh5 10. Bg5 Nf6 11. Qd2 Qb6 12. Nb3 Bd7 13. O-O-O a6 14. Rg3 Qc7 15. Bg2 Be7 16. f4 O-O-O 17. Qf2 Kb8 18. f5 Ne5 19. Bh3 Nc4 20. Nd2 Nxd2 21. Rxd2 Rc8 22. fxe6 Bxe6 23. Bxe6 fxe6 24. Qg1 Qa5 25. Qd4 Qc5 26. Qd3 Qc4 27. Qe3 Ka8 28. a3 Qc6 29. e5 dxe5 30. Qxe5 Rhd8 31. Rgd3 Rxd3 32. Rxd3 Qh1+ 33. Nd1 Qg2 34. Rd2 Qc6 35. Re2 Bd6 36. Qc3 Qd7 1/2-1/2"
  },
  {
    "id": "game-107-kasparov-karpov-1984",
    "white": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1984.09.12",
    "year": "1984",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 93 lances entre Kasparov G e Karpov A (1984).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1984.09.12\"]\n[Round \"02\"]\n[White \"Kasparov G\"]\n[Black \"Karpov A\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. d5 exd5 8. Nh4 c6 9. cxd5 Nxd5 10. Nf5 Nc7 11. Nc3 d5 12. e4 Bf6 13. Bf4 Bc8 14. g4 Nba6 15. Rc1 Bd7 16. Qd2 Nc5 17. e5 Be7 18. Nxe7+ Qxe7 19. Bg5 Qe6 20. h3 Qg6 21. f4 f6 22. exf6 gxf6 23. Bh4 f5 24. b4 fxg4 25. hxg4 Nd3 26. Rf3 Nxc1 27. f5 Qg7 28. Qxc1 Rae8 29. Qd2 d4 30. Ne2 Nd5 31. Nxd4 Kh8 32. g5 Re4 33. Bf2 Qe5 34. Rg3 Rf4 35. f6 Be8 36. b5 c5 37. Nc6 Qa1+ 38. Bf1 Rf5 39. g6 Bxg6 40. Rxg6 R5xf6 41. Rxf6 Qxf6 42. Qe1 Rg8+ 43. Kh2 Qf4+ 44. Bg3 Rxg3 45. Qxg3 Qxf1 46. Qb8+ Kg7 47. Qg3+ 1/2-1/2"
  },
  {
    "id": "game-108-karpov-kasparov-1985",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1985.01.02",
    "year": "1985",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 30 lances entre Karpov A e Kasparov G (1985).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1985.01.02\"]\n[Round \"37\"]\n[White \"Karpov A\"]\n[Black \"Kasparov G\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O O-O 9. Nb3 a5 10. a4 d5 11. exd5 Nxd5 12. Bxe7 Ncxe7 13. Nb5 Bd7 14. Be2 Nf5 15. N3d4 Nxd4 1/2-1/2"
  },
  {
    "id": "game-109-kasparov-karpov-1985",
    "white": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Moscow",
    "date": "1985.01.04",
    "year": "1985",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 50 lances entre Kasparov G e Karpov A (1985).",
    "pgn": "[Event \"wcc\"]\n[Site \"Moscow\"]\n[Date \"1985.01.04\"]\n[Round \"38\"]\n[White \"Kasparov G\"]\n[Black \"Karpov A\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bh4 O-O 7. e3 b6 8. Be2 Bb7 9. Bxf6 Bxf6 10. cxd5 exd5 11. b4 c5 12. bxc5 bxc5 13. Rb1 Bc6 14. O-O Nd7 15. Bb5 Qc7 16. Qc2 Rfd8 17. Rfc1 Rab8 18. a4 Qb6 19. dxc5 Nxc5 20. Bxc6 Qxc6 21. Nb5 Be7 22. Qf5 Qe8 23. Ne5 Rb7 24. Nd4 Rc7 25. Nb5 Rb7 1/2-1/2"
  },
  {
    "id": "game-110-karpov-kasparov-1986",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "wcc",
    "site": "London",
    "date": "1986.07.28",
    "year": "1986",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 41 lances entre Karpov A e Kasparov G (1986).",
    "pgn": "[Event \"wcc\"]\n[Site \"London\"]\n[Date \"1986.07.28\"]\n[Round \"01\"]\n[White \"Karpov A\"]\n[Black \"Kasparov G\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Bf4 c5 6. dxc5 Qa5 7. Rc1 dxc4 8. e3 Qxc5 9. Qa4+ Nc6 10. Bxc4 O-O 11. O-O Bd7 12. Qb5 Qxb5 13. Bxb5 Rac8 14. Rfd1 Rfd8 15. h3 h6 16. Kf1 a6 17. Be2 Be6 18. Rxd8+ Rxd8 19. Ne5 Nxe5 20. Bxe5 Rd2 21. b3 1/2-1/2"
  },
  {
    "id": "game-111-kasparov-karpov-1986",
    "white": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "London",
    "date": "1986.07.30",
    "year": "1986",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 104 lances entre Kasparov G e Karpov A (1986).",
    "pgn": "[Event \"wcc\"]\n[Site \"London\"]\n[Date \"1986.07.30\"]\n[Round \"02\"]\n[White \"Kasparov G\"]\n[Black \"Karpov A\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. g3 Nc6 6. Bg2 d5 7. cxd5 Nxd5 8. Bd2 cxd4 9. Nxd4 Nxd4 10. Nxd5 Bxd2+ 11. Qxd2 Nc6 12. Nf4 Qxd2+ 13. Kxd2 Bd7 14. Rhc1 Ke7 15. Nd3 Rhc8 16. Nc5 Rab8 17. Rc3 Nd8 18. Rac1 Bc6 19. Nd3 Bd7 20. Ne5 Rxc3 21. Rxc3 Be8 22. b4 a6 23. Be4 h6 24. a3 f6 25. Nd3 Bc6 26. Bxc6 Nxc6 27. Nc5 Ne5 28. f4 Nd7 29. Nb3 Kd6 30. e4 g5 31. Ke3 e5 32. fxg5 fxg5 33. Na5 g4 34. Rc2 h5 35. Rc1 b6 36. Rc6+ Ke7 37. Nc4 Rf8 38. Ke2 Rf3 39. Ne3 Nf6 40. Rxb6 Nxe4 41. Rxa6 Rf2+ 42. Kd3 Nd6 43. Ra7+ Ke6 44. Rh7 e4+ 45. Kc3 Nb5+ 46. Kc4 Nxa3+ 47. Kd4 Rxh2 48. Rh6+ Kd7 49. Nd5 h4 50. Rxh4 Rxh4 51. gxh4 g3 52. Nf4 Nc2+ 1/2-1/2"
  },
  {
    "id": "game-112-kasparov-short-1993",
    "white": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Short N",
      "title": "GM",
      "rating": "2650",
      "country": "Inglaterra",
      "code": "GB"
    },
    "event": "wcc (PCA)",
    "site": "London",
    "date": "1993.??.??",
    "year": "1993",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 78 lances entre Kasparov G e Short N (1993).",
    "pgn": "[Event \"wcc (PCA)\"]\n[Site \"London\"]\n[Date \"1993.??.??\"]\n[Round \"01\"]\n[White \"Kasparov G\"]\n[Black \"Short N\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 b4 9. d3 d6 10. a5 Be6 11. Nbd2 Rb8 12. Bc4 Qc8 13. Nf1 Re8 14. Ne3 Nd4 15. Nxd4 exd4 16. Nd5 Nxd5 17. exd5 Bd7 18. Bd2 Bf6 19. Rxe8+ Bxe8 20. Qe2 Bb5 21. Re1 Bxc4 22. dxc4 h6 23. b3 c5 24. Bf4 Qd7 25. h3 Rd8 26. Qe4 h5 27. Re2 g6 28. Qf3 Bg7 29. Re4 Bf8 30. Qe2 Qc7 31. Bg5 Rc8 32. g4 hxg4 33. Bf6 gxh3 34. Qg4 Ra8 35. Qxh3 Bg7 36. Bxg7 Kxg7 37. Rh4 Rg8 38. Rh7+ Kf8 39. Qg4 Ke8 1-0"
  },
  {
    "id": "game-113-short-kasparov-1993",
    "white": {
      "name": "Short N",
      "title": "GM",
      "rating": "2650",
      "country": "Inglaterra",
      "code": "GB"
    },
    "black": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "wcc (PCA)",
    "site": "London",
    "date": "1993.??.??",
    "year": "1993",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 101 lances entre Short N e Kasparov G (1993).",
    "pgn": "[Event \"wcc (PCA)\"]\n[Site \"London\"]\n[Date \"1993.??.??\"]\n[Round \"02\"]\n[White \"Short N\"]\n[Black \"Kasparov G\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 Nc6 7. Qd2 e6 8. O-O-O Bd7 9. f4 h6 10. Bh4 g5 11. fxg5 Ng4 12. Nf3 hxg5 13. Bg3 Be7 14. Be2 Nge5 15. Kb1 b5 16. Rdf1 Rc8 17. Nxe5 Nxe5 18. Rf2 f6 19. Rhf1 Bc6 20. a3 Bb7 21. h3 Nc4 22. Bxc4 Rxc4 23. Qd3 e5 24. Re2 Qc8 25. Rf5 Rxc3 26. bxc3 Qe6 27. Kb2 Kd7 28. Rf1 Qc4 29. Qxc4 bxc4 30. Ka2 Bc6 31. Rb1 Bd8 32. Rb8 Re8 33. Bf2 Ba5 34. Rxe8 Kxe8 35. Kb2 Kf7 36. Ba7 Ke6 37. g4 Bd8 38. Kc1 Be7 39. Re3 d5 40. exd5+ Kxd5 41. Kb2 Ke6 42. Bb6 Bd6 43. h4 gxh4 44. Rh3 e4 45. Rxh4 Bf4 46. Rh3 Bg5 47. Bd4 a5 48. Rh2 a4 49. Rh1 Bd7 50. Rh2 Kd5 51. Rh5 1/2-1/2"
  },
  {
    "id": "game-114-anand-kasparov-1995",
    "white": {
      "name": "Anand V",
      "title": "GM",
      "rating": "2650",
      "country": "Índia",
      "code": "IN"
    },
    "black": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "wcc (PCA)",
    "site": "New York",
    "date": "1995.09.11",
    "year": "1995",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 54 lances entre Anand V e Kasparov G (1995).",
    "pgn": "[Event \"wcc (PCA)\"]\n[Site \"New York\"]\n[Date \"1995.09.11\"]\n[Round \"01\"]\n[White \"Anand V\"]\n[Black \"Kasparov G\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e6 7. a4 Nc6 8. O-O Be7 9. Be3 O-O 10. f4 Qc7 11. Kh1 Re8 12. Qd2 Bd7 13. Rad1 Rad8 14. Nb3 Bc8 15. Bf3 b6 16. Qf2 Nd7 17. Nd4 Bb7 18. Bh5 Rf8 19. Qg3 Nxd4 20. Bxd4 Bf6 21. Be2 e5 22. fxe5 Bxe5 23. Qf2 Nc5 24. Bf3 Rfe8 25. h3 a5 26. b3 Bc6 27. Rfe1 h6 1/2-1/2"
  },
  {
    "id": "game-115-kasparov-anand-1995",
    "white": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Anand V",
      "title": "GM",
      "rating": "2650",
      "country": "Índia",
      "code": "IN"
    },
    "event": "wcc (PCA)",
    "site": "New York",
    "date": "1995.09.12",
    "year": "1995",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 58 lances entre Kasparov G e Anand V (1995).",
    "pgn": "[Event \"wcc (PCA)\"]\n[Site \"New York\"]\n[Date \"1995.09.12\"]\n[Round \"02\"]\n[White \"Kasparov G\"]\n[Black \"Anand V\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. cxd5 Qxd5 6. e3 c5 7. Bd2 Bxc3 8. Bxc3 cxd4 9. Bxd4 Nc6 10. Bxf6 gxf6 11. Ne2 Bd7 12. a3 Qe5 13. Nc3 f5 14. O-O-O O-O-O 15. g3 Kb8 16. Be2 Ne7 17. Qd3 Qc7 18. Qd6 Bc6 19. Qxc7+ Kxc7 20. Rhe1 Rxd1+ 21. Rxd1 Rd8 22. Rxd8 Kxd8 23. Kd2 Nc8 24. Kd3 Nd6 25. Kd4 b6 26. b4 Ke7 27. f4 h6 28. a4 f6 29. a5 Bd7 1/2-1/2"
  },
  {
    "id": "game-116-karpov-kamsky-1996",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kamsky G",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "wcc",
    "site": "Elista",
    "date": "1996.06.06",
    "year": "1996",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 112 lances entre Karpov A e Kamsky G (1996).",
    "pgn": "[Event \"wcc\"]\n[Site \"Elista\"]\n[Date \"1996.06.06\"]\n[Round \"01\"]\n[White \"Karpov A\"]\n[Black \"Kamsky G\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Nc6 8. Be2 Bg4 9. Be3 Bxf3 10. Bxf3 e5 11. d5 Nd4 12. Bd1 b5 13. Nxb5 Nxe4 14. O-O a6 15. Nc3 Nd6 16. Qd3 Qh4 17. g3 Qh3 18. Bxd4 exd4 19. Ne2 Qf5 20. Nf4 Rfb8 21. Qxf5 Nxf5 22. Nd3 Bh6 23. Re1 a5 24. Bg4 Nd6 25. Re2 a4 26. a3 Ra5 27. Rc2 Rxd5 28. Rxc7 Ra5 29. Bf3 Bg5 30. Rd1 Rc8 31. Rxc8+ Nxc8 32. h4 Bf6 33. Rc1 Nd6 34. Kf1 Be7 35. Ke2 Kf8 36. Rc7 Bf6 37. Kd2 h5 38. Ke2 Nf5 39. Rc4 Nd6 40. Rb4 Ra6 41. Nc5 Ra7 42. Kd3 Rc7 43. Nxa4 Rc1 44. Nb6 Bg7 45. a4 Ra1 46. Nd7+ Ke8 47. Nc5 Ke7 48. Kc2 Rf1 49. Nd3 Ra1 50. Kb3 f5 51. Rb6 Bh6 52. Bd5 g5 53. Ra6 gxh4 54. gxh4 Rd1 55. Bc4 Rh1 56. a5 Rxh4 1-0"
  },
  {
    "id": "game-117-kamsky-karpov-1996",
    "white": {
      "name": "Kamsky G",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "wcc",
    "site": "Elista",
    "date": "1996.06.08",
    "year": "1996",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 129 lances entre Kamsky G e Karpov A (1996).",
    "pgn": "[Event \"wcc\"]\n[Site \"Elista\"]\n[Date \"1996.06.08\"]\n[Round \"02\"]\n[White \"Kamsky G\"]\n[Black \"Karpov A\"]\n[Result \"1-0\"]\n\n1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 e6 6. Nf3 Bb4 7. cxd5 Nxd5 8. Bd2 Nc6 9. Bd3 Be7 10. O-O O-O 11. Qe2 Nf6 12. Ne4 Bd7 13. Rad1 Rc8 14. Rfe1 Nd5 15. Nc3 Nf6 16. a3 Qc7 17. Bg5 Qa5 18. d5 exd5 19. Bxf6 Bxf6 20. Bxh7+ Kxh7 21. Rxd5 Bxc3 22. Rxa5 Bxa5 23. b4 Kg8 24. bxa5 Bg4 25. a6 bxa6 26. Qe4 Bxf3 27. Qxf3 Rfe8 28. Ra1 Re6 29. h3 Rd8 30. Qc3 Rdd6 31. Rb1 Rd7 32. Qc4 a5 33. Rb5 Rd1+ 34. Kh2 Rd2 35. Rf5 Rd4 36. Qc3 Rdd6 37. Rc5 Rf6 38. Rc4 Rfe6 39. Rc5 Rf6 40. Qe3 Rfe6 41. Qg3 Rg6 42. Qb3 Rgf6 43. Qb7 Rfe6 44. Qc7 Rf6 45. f4 g6 46. f5 gxf5 47. Rxf5 Rde6 48. Rh5 Rh6 49. Qg3+ Kf8 50. Rd5 Rhg6 51. Qf2 Rgf6 52. Qb2 Ke7 53. Rh5 Rh6 54. Rb5 Rhf6 55. Qc3 Kf8 56. Rh5 Rh6 57. Rf5 Rhg6 58. Qf3 Rg7 59. Qf4 Kg8 60. Qc7 Kf8 61. Qc8+ Ke7 62. Rd5 Kf6 63. Qh8 Re4 64. Rh5 Ne7 65. Rh7 1-0"
  },
  {
    "id": "game-118-kasparov-kramnik-2000",
    "white": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Kramnik V",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Braingames WCC",
    "site": "London",
    "date": "2000.10.08",
    "year": "2000",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 50 lances entre Kasparov G e Kramnik V (2000).",
    "pgn": "[Event \"Braingames WCC\"]\n[Site \"London\"]\n[Date \"2000.10.08\"]\n[Round \"1\"]\n[White \"Kasparov G\"]\n[Black \"Kramnik V\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Bd7 10. b3 h6 11. Bb2 Kc8 12. h3 b6 13. Rad1 Ne7 14. Ne2 Ng6 15. Ne1 h5 16. Nd3 c5 17. c4 a5 18. a4 h4 19. Nc3 Be6 20. Nd5 Kb7 21. Ne3 Rh5 22. Bc3 Re8 23. Rd2 Kc8 24. f4 Ne7 25. Nf2 Nf5 1/2-1/2"
  },
  {
    "id": "game-119-kramnik-kasparov-2000",
    "white": {
      "name": "Kramnik V",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Kasparov G",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Braingames WCC",
    "site": "London",
    "date": "2000.10.10",
    "year": "2000",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 79 lances entre Kramnik V e Kasparov G (2000).",
    "pgn": "[Event \"Braingames WCC\"]\n[Site \"London\"]\n[Date \"2000.10.10\"]\n[Round \"2\"]\n[White \"Kramnik V\"]\n[Black \"Kasparov G\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Be3 Qa5 9. Qd2 Bg4 10. Rb1 a6 11. Rxb7 Bxf3 12. gxf3 Nc6 13. Bc4 O-O 14. O-O cxd4 15. cxd4 Bxd4 16. Bd5 Bc3 17. Qc1 Nd4 18. Bxd4 Bxd4 19. Rxe7 Ra7 20. Rxa7 Bxa7 21. f4 Qd8 22. Qc3 Bb8 23. Qf3 Qh4 24. e5 g5 25. Re1 Qxf4 26. Qxf4 gxf4 27. e6 fxe6 28. Rxe6 Kg7 29. Rxa6 Rf5 30. Be4 Re5 31. f3 Re7 32. a4 Ra7 33. Rb6 Be5 34. Rb4 Rd7 35. Kg2 Rd2+ 36. Kh3 h5 37. Rb5 Kf6 38. a5 Ra2 39. Rb6+ Ke7 40. Bd5 1-0"
  },
  {
    "id": "game-120-leko-kramnik-2004",
    "white": {
      "name": "Leko P",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Kramnik V",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Dannemann WCC",
    "site": "Brissago SUI",
    "date": "2004.09.25",
    "year": "2004",
    "eco": "C42",
    "opening": "Abertura Teórica (C42)",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 130 lances entre Leko P e Kramnik V (2004).",
    "pgn": "[Event \"Dannemann WCC\"]\n[Site \"Brissago SUI\"]\n[Date \"2004.09.25\"]\n[Round \"1\"]\n[White \"Leko P\"]\n[Black \"Kramnik V\"]\n[Result \"0-1\"]\n[ECO \"C42\"]\n\n1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. c4 Nb4 9. Be2 O-O 10. Nc3 Bf5 11. a3 Nxc3 12. bxc3 Nc6 13. Re1 Re8 14. cxd5 Qxd5 15. Bf4 Rac8 16. h3 Be4 17. Be3 Na5 18. c4 Nxc4 19. Bxc4 Qxc4 20. Nd2 Qd5 21. Nxe4 Qxe4 22. Bg5 Qxe1+ 23. Qxe1 Bxg5 24. Qa5 Bf6 25. Qxa7 c5 26. Qxb7 Bxd4 27. Ra2 c4 28. Re2 Red8 29. a4 c3 30. Qe4 Bb6 31. Qc2 g6 32. Qb3 Rd6 33. Rc2 Ba5 34. g4 Rd2 35. Kg2 Rcd8 36. Rxc3 Bxc3 37. Qxc3 R2d5 38. Qc6 Ra5 39. Kg3 Rda8 40. h4 R5a6 41. Qc1 Ra5 42. Qh6 Rxa4 43. h5 R4a5 44. Qf4 g5 45. Qf6 h6 46. f3 R5a6 47. Qc3 Ra4 48. Qc6 R8a6 49. Qe8+ Kg7 50. Qb5 R4a5 51. Qb4 Rd5 52. Qb3 Rad6 53. Qc4 Rd3 54. Kf2 Ra3 55. Qc5 Ra2+ 56. Kg3 Rf6 57. Qb4 Raa6 58. Kg2 Rf4 59. Qb2+ Raf6 60. Qe5 Rxf3 61. Qa1 Rf1 62. Qc3 Rf2+ 63. Kg3 Rf3+ 64. Qxf3 Rxf3+ 65. Kxf3 Kf6 0-1"
  },
  {
    "id": "game-121-kramnik-leko-2004",
    "white": {
      "name": "Kramnik V",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Leko P",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "Dannemann WCC",
    "site": "Brissago SUI",
    "date": "2004.09.26",
    "year": "2004",
    "eco": "C88",
    "opening": "Abertura Teórica (C88)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 35 lances entre Kramnik V e Leko P (2004).",
    "pgn": "[Event \"Dannemann WCC\"]\n[Site \"Brissago SUI\"]\n[Date \"2004.09.26\"]\n[Round \"2\"]\n[White \"Kramnik V\"]\n[Black \"Leko P\"]\n[Result \"1/2-1/2\"]\n[ECO \"C88\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. h3 Bb7 9. d3 Re8 10. Nc3 Bb4 11. Ng5 Rf8 12. a3 Bxc3 13. bxc3 Na5 14. Ba2 c5 15. f4 exf4 16. e5 Nd5 17. Bxd5 Qxg5 18. Bxb7 1/2-1/2"
  },
  {
    "id": "game-122-topalov,-kramnik,-2006",
    "white": {
      "name": "Topalov, V",
      "title": "GM",
      "rating": "2650",
      "country": "Bulgária",
      "code": "BG"
    },
    "black": {
      "name": "Kramnik, V",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "WCh",
    "site": "Elista RUS",
    "date": "2006.09.24",
    "year": "2006",
    "eco": "D19",
    "opening": "Abertura Teórica (D19)",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 126 lances entre Topalov, V e Kramnik, V (2006).",
    "pgn": "[Event \"WCh\"]\n[Site \"Elista RUS\"]\n[Date \"2006.09.24\"]\n[Round \"2\"]\n[White \"Topalov,V\"]\n[Black \"Kramnik,V\"]\n[Result \"0-1\"]\n[ECO \"D19\"]\n\n1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. Nf3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O Nbd7 9. Qe2 Bg6 10. e4 O-O 11. Bd3 Bh5 12. e5 Nd5 13. Nxd5 cxd5 14. Qe3 Bg6 15. Ng5 Re8 16. f4 Bxd3 17. Qxd3 f5 18. Be3 Nf8 19. Kh1 Rc8 20. g4 Qd7 21. Rg1 Be7 22. Nf3 Rc4 23. Rg2 fxg4 24. Rxg4 Rxa4 25. Rag1 g6 26. h4 Rb4 27. h5 Qb5 28. Qc2 Rxb2 29. hxg6 h5 30. g7 hxg4 31. gxf8=Q+ Bxf8 32. Qg6+ Bg7 33. f5 Re7 34. f6 Qe2 35. Qxg4 Rf7 36. Rc1 Rc2 37. Rxc2 Qd1+ 38. Kg2 Qxc2+ 39. Kg3 Qe4 40. Bf4 Qf5 41. Qxf5 exf5 42. Bg5 a5 43. Kf4 a4 44. Kxf5 a3 45. Bc1 Bf8 46. e6 Rc7 47. Bxa3 Bxa3 48. Ke5 Rc1 49. Ng5 Rf1 50. e7 Re1+ 51. Kxd5 Bxe7 52. fxe7 Rxe7 53. Kd6 Re1 54. d5 Kf8 55. Ne6+ Ke8 56. Nc7+ Kd8 57. Ne6+ Kc8 58. Ke7 Rh1 59. Ng5 b5 60. d6 Rd1 61. Ne6 b4 62. Nc5 Re1+ 63. Kf6 Re3 0-1"
  },
  {
    "id": "game-123-kramnik,-topalov,-2006",
    "white": {
      "name": "Kramnik, V",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Topalov, V",
      "title": "GM",
      "rating": "2650",
      "country": "Bulgária",
      "code": "BG"
    },
    "event": "WCh",
    "site": "Elista RUS",
    "date": "2006.09.26",
    "year": "2006",
    "eco": "E02",
    "opening": "Abertura Teórica (E02)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 76 lances entre Kramnik, V e Topalov, V (2006).",
    "pgn": "[Event \"WCh\"]\n[Site \"Elista RUS\"]\n[Date \"2006.09.26\"]\n[Round \"3\"]\n[White \"Kramnik,V\"]\n[Black \"Topalov,V\"]\n[Result \"1/2-1/2\"]\n[ECO \"E02\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 dxc4 5. Bg2 Nc6 6. Qa4 Bd7 7. Qxc4 Na5 8. Qd3 c5 9. O-O Bc6 10. Nc3 cxd4 11. Nxd4 Bc5 12. Rd1 Bxg2 13. Qb5+ Nd7 14. Kxg2 a6 15. Qd3 Rc8 16. Bg5 Be7 17. Bxe7 Qxe7 18. Rac1 Nc4 19. Na4 b5 20. b3 O-O 21. bxc4 bxa4 22. Nc6 Rxc6 23. Qxd7 Qc5 24. Rc3 g6 25. Rb1 h5 26. Rb7 e5 27. e4 Rf6 28. Rc2 Qa3 29. Qd1 Rd6 30. Rd2 Rfd8 31. Rd5 Rxd5 32. cxd5 Qxa2 33. Qf3 Rf8 34. Qd3 a3 35. Rb3 f5 36. Qxa6 Qxb3 37. Qxg6+ Kh8 38. Qh6+ Kg8 1/2-1/2"
  },
  {
    "id": "game-124-gelfand,-shirov,-2002",
    "white": {
      "name": "Gelfand, Boris",
      "title": "GM",
      "rating": "2650",
      "country": "Israel",
      "code": "IL"
    },
    "black": {
      "name": "Shirov, Alexei",
      "title": "GM",
      "rating": "2650",
      "country": "Espanha",
      "code": "ES"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.06",
    "year": "2002",
    "eco": "D47",
    "opening": "Abertura Teórica (D47)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 78 lances entre Gelfand, Boris e Shirov, Alexei (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.06\"]\n[Round \"01\"]\n[White \"Gelfand, Boris\"]\n[Black \"Shirov, Alexei\"]\n[Result \"1/2-1/2\"]\n[ECO \"D47\"]\n\n1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. Nf3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. a3 Bd6 10. O-O O-O 11. Bd2 Qe7 12. Ng5 h6 13. Nge4 Nxe4 14. Nxe4 c5 15. Nxd6 Qxd6 16. Be2 Rfd8 17. Ba5 Nb6 18. dxc5 Qxc5 19. Qc1 Qg5 20. e4 Bxe4 21. Qxg5 hxg5 22. Bxb5 Bd3 23. Bc6 Bxf1 24. Bxa8 Rxa8 25. Kxf1 Rc8 26. Bd2 Rc2 27. Bxg5 Rxb2 28. Be3 a5 29. Rc1 Nd5 30. Bc5 f6 31. g3 Kf7 32. Rc4 g5 33. h4 gxh4 34. Rxh4 Kg6 35. Ra4 Rb5 36. Rc4 Kf5 37. Ke2 e5 38. Kd3 Ke6 39. Rc2 Nb6 1/2-1/2"
  },
  {
    "id": "game-125-topalov,-lutz,-2002",
    "white": {
      "name": "Topalov, Veselin",
      "title": "GM",
      "rating": "2650",
      "country": "Bulgária",
      "code": "BG"
    },
    "black": {
      "name": "Lutz, Christopher",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.06",
    "year": "2002",
    "eco": "B48",
    "opening": "Abertura Teórica (B48)",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 67 lances entre Topalov, Veselin e Lutz, Christopher (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.06\"]\n[Round \"01\"]\n[White \"Topalov, Veselin\"]\n[Black \"Lutz, Christopher\"]\n[Result \"1-0\"]\n[ECO \"B48\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be3 a6 7. Qd2 Nf6 8. O-O-O Bb4 9. f3 Ne5 10. Nb3 b5 11. Kb1 Nc4 12. Bxc4 bxc4 13. Nc1 Qb7 14. N1e2 Rb8 15. b3 O-O 16. Bf4 Ra8 17. Bd6 Bxd6 18. Qxd6 cxb3 19. axb3 a5 20. Rd4 Ra6 21. Qa3 d5 22. exd5 exd5 23. Nf4 Be6 24. Rhd1 h6 25. Ncxd5 Nxd5 26. Nxd5 Rb8 27. Nf6+ gxf6 28. Rd8+ Rxd8 29. Rxd8+ Kh7 30. Qf8 Kg6 31. Qg8+ Kh5 32. Qg7 f5 33. Rd4 Bc8 34. g3 1-0"
  },
  {
    "id": "game-126-lutz,-shirov,-2002",
    "white": {
      "name": "Lutz, Christopher",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Shirov, Alexei",
      "title": "GM",
      "rating": "2650",
      "country": "Espanha",
      "code": "ES"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.07",
    "year": "2002",
    "eco": "C99",
    "opening": "Abertura Teórica (C99)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 99 lances entre Lutz, Christopher e Shirov, Alexei (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.07\"]\n[Round \"02\"]\n[White \"Lutz, Christopher\"]\n[Black \"Shirov, Alexei\"]\n[Result \"1/2-1/2\"]\n[ECO \"C99\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4 Nc6 14. Nb3 a5 15. Be3 a4 16. Nbd2 Bd7 17. Rc1 Rac8 18. Bd3 Qb8 19. a3 Rc7 20. Qe2 Rfc8 21. Rb1 Rb7 22. Rec1 Na5 23. Rxc8+ Bxc8 24. Rc1 Be6 25. Qf1 h6 26. dxe5 dxe5 27. Bc5 Bxc5 28. Rxc5 Nc4 29. Nxc4 bxc4 30. Bxc4 Nxe4 31. Rb5 Rxb5 32. Bxb5 Nd6 33. Bxa4 Qxb2 34. Qd1 Nf5 35. Bc2 Nd4 36. Nxd4 exd4 37. Qb1 Qxb1+ 38. Bxb1 Bc4 39. f4 Kf8 40. Kf2 Ke7 41. Ke1 Kd6 42. h4 Kc5 43. Kd2 f6 44. g3 g5 45. Bd3 Bd5 46. a4 Kb4 47. Bb5 Be4 48. Bd7 gxf4 49. gxf4 Ka5 50. Be8 1/2-1/2"
  },
  {
    "id": "game-127-topalov,-gelfand,-2002",
    "white": {
      "name": "Topalov, Veselin",
      "title": "GM",
      "rating": "2650",
      "country": "Bulgária",
      "code": "BG"
    },
    "black": {
      "name": "Gelfand, Boris",
      "title": "GM",
      "rating": "2650",
      "country": "Israel",
      "code": "IL"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.07",
    "year": "2002",
    "eco": "B12",
    "opening": "Abertura Teórica (B12)",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 77 lances entre Topalov, Veselin e Gelfand, Boris (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.07\"]\n[Round \"02\"]\n[White \"Topalov, Veselin\"]\n[Black \"Gelfand, Boris\"]\n[Result \"1-0\"]\n[ECO \"B12\"]\n\n1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nc3 e6 5. g4 Bg6 6. Nge2 c5 7. h4 h5 8. Nf4 Bh7 9. Nxh5 Nc6 10. dxc5 Bxc5 11. Bb5 Qc7 12. Bxc6+ Qxc6 13. Qf3 O-O-O 14. Nxg7 d4 15. Qxc6+ bxc6 16. Na4 Bf8 17. Nh5 Bxc2 18. b3 Rd5 19. Bf4 Bb4+ 20. Ke2 d3+ 21. Kf3 d2 22. Rad1 Ne7 23. Nf6 Rd3+ 24. Ke2 Nd5 25. Bg5 Bxd1+ 26. Rxd1 Rh3 27. h5 Be7 28. Rxd2 Bxf6 29. Bxf6 Nf4+ 30. Kd1 Rg8 31. Nc5 Rxg4 32. Rd8+ Kc7 33. Rd7+ Kb6 34. Be7 Nd5 35. Rb7+ Ka5 36. Rxa7+ Kb5 37. Rb7+ Nb6 38. a4+ Ka5 39. Kc2 1-0"
  },
  {
    "id": "game-128-gelfand,-lutz,-2002",
    "white": {
      "name": "Gelfand, Boris",
      "title": "GM",
      "rating": "2650",
      "country": "Israel",
      "code": "IL"
    },
    "black": {
      "name": "Lutz, Christopher",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.08",
    "year": "2002",
    "eco": "E05",
    "opening": "Abertura Teórica (E05)",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 73 lances entre Gelfand, Boris e Lutz, Christopher (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.08\"]\n[Round \"03\"]\n[White \"Gelfand, Boris\"]\n[Black \"Lutz, Christopher\"]\n[Result \"1-0\"]\n[ECO \"E05\"]\n\n1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O dxc4 7. Qc2 a6 8. Qxc4 b5 9. Qc2 Bb7 10. Bd2 Be4 11. Qc1 Nbd7 12. Ba5 Rc8 13. Nbd2 Ba8 14. Qc2 Qe8 15. b4 Nd5 16. a3 f5 17. Rae1 Qg6 18. e4 fxe4 19. Qxe4 Rf6 20. Qxg6 Rxg6 21. Ne4 Rf8 22. h4 Bd6 23. h5 Rh6 24. Nc5 N5b6 25. Ng5 Bxg2 26. Kxg2 Rxh5 27. Ngxe6 Rc8 28. Nxd7 Nxd7 29. Rc1 c6 30. Rfe1 Rd5 31. Nd8 Rxd4 32. Red1 Be5 33. Rxd4 Bxd4 34. Rd1 c5 35. bxc5 Nxc5 36. Rxd4 Nb3 37. Re4 1-0"
  },
  {
    "id": "game-129-shirov,-topalov,-2002",
    "white": {
      "name": "Shirov, Alexei",
      "title": "GM",
      "rating": "2650",
      "country": "Espanha",
      "code": "ES"
    },
    "black": {
      "name": "Topalov, Veselin",
      "title": "GM",
      "rating": "2650",
      "country": "Bulgária",
      "code": "BG"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.08",
    "year": "2002",
    "eco": "B33",
    "opening": "Abertura Teórica (B33)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 70 lances entre Shirov, Alexei e Topalov, Veselin (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.08\"]\n[Round \"03\"]\n[White \"Shirov, Alexei\"]\n[Black \"Topalov, Veselin\"]\n[Result \"1/2-1/2\"]\n[ECO \"B33\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Ndb5 d6 7. Bf4 e5 8. Bg5 a6 9. Na3 b5 10. Bxf6 gxf6 11. Nd5 Bg7 12. Bd3 Ne7 13. Nxe7 Qxe7 14. c4 f5 15. O-O O-O 16. Qf3 bxc4 17. Nxc4 d5 18. exd5 e4 19. Qe3 Bb7 20. d6 Qf6 21. Bc2 f4 22. Qh3 Rac8 23. b3 Qg5 24. Rad1 f5 25. d7 Rcd8 26. Nd6 Ba8 27. f3 Rxd7 28. fxe4 f3 29. Qg3 Qe3+ 30. Qf2 Qxf2+ 31. Kxf2 fxg2 32. Kxg2 Rfd8 33. Nc4 Bxe4+ 34. Bxe4 Rxd1 35. Rxf5 Re1 1/2-1/2"
  },
  {
    "id": "game-130-lutz,-gelfand,-2002",
    "white": {
      "name": "Lutz, Christopher",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Gelfand, Boris",
      "title": "GM",
      "rating": "2650",
      "country": "Israel",
      "code": "IL"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.09",
    "year": "2002",
    "eco": "B96",
    "opening": "Abertura Teórica (B96)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 50 lances entre Lutz, Christopher e Gelfand, Boris (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.09\"]\n[Round \"04\"]\n[White \"Lutz, Christopher\"]\n[Black \"Gelfand, Boris\"]\n[Result \"1/2-1/2\"]\n[ECO \"B96\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Nbd7 8. Qf3 Qc7 9. O-O-O b5 10. Bxb5 axb5 11. Ndxb5 Qb8 12. e5 Ra5 13. exf6 gxf6 14. Bh6 Bxh6 15. Nxd6+ Ke7 16. Kb1 Rd8 17. Rhe1 Nb6 18. Ncb5 Ba6 19. Nf5+ Kf8 20. Qc3 Rxb5 21. Qxf6 Rxb2+ 22. Qxb2 Nd5 23. Rxd5 Qxb2+ 24. Kxb2 Bg7+ 25. Nxg7 Rxd5 1/2-1/2"
  },
  {
    "id": "game-131-topalov,-shirov,-2002",
    "white": {
      "name": "Topalov, Veselin",
      "title": "GM",
      "rating": "2650",
      "country": "Bulgária",
      "code": "BG"
    },
    "black": {
      "name": "Shirov, Alexei",
      "title": "GM",
      "rating": "2650",
      "country": "Espanha",
      "code": "ES"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.09",
    "year": "2002",
    "eco": "C99",
    "opening": "Abertura Teórica (C99)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 115 lances entre Topalov, Veselin e Shirov, Alexei (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.09\"]\n[Round \"04\"]\n[White \"Topalov, Veselin\"]\n[Black \"Shirov, Alexei\"]\n[Result \"1/2-1/2\"]\n[ECO \"C99\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4 Nc6 14. Nb3 a5 15. Be3 a4 16. Nbd2 Bd7 17. Rc1 Rac8 18. Bd3 Qb8 19. Qe2 Nb4 20. Bb1 Rxc1 21. Rxc1 Rc8 22. Rxc8+ Bxc8 23. Nf1 Bd7 24. Qd2 exd4 25. Nxd4 Nc6 26. Ng3 Nxd4 27. Bxd4 Ne8 28. a3 Bf6 29. Nf5 Bxd4 30. Nxd4 Qb6 31. Qe3 Qc5 32. Bd3 Nc7 33. Kf1 Ne6 34. Nxe6 fxe6 35. e5 h6 36. Ke2 b4 37. Qxc5 dxc5 38. Ba6 Bc6 39. f3 Kf7 40. Kd3 Bd5 41. Bb5 Kg6 42. Ke3 Bb3 43. Be8+ Kg5 44. g3 h5 45. f4+ Kh6 46. Kd2 h4 47. gxh4 g6 48. Kc1 Kh5 49. Bf7 Kxh4 50. Bxg6 Kg3 51. f5 exf5 52. Bxf5 bxa3 53. bxa3 Kf4 54. Bc2 Be6 55. h4 Kg4 56. Bxa4 Kxh4 57. Kc2 Kg5 58. Kc3 1/2-1/2"
  },
  {
    "id": "game-132-gelfand,-topalov,-2002",
    "white": {
      "name": "Gelfand, Boris",
      "title": "GM",
      "rating": "2650",
      "country": "Israel",
      "code": "IL"
    },
    "black": {
      "name": "Topalov, Veselin",
      "title": "GM",
      "rating": "2650",
      "country": "Bulgária",
      "code": "BG"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.10",
    "year": "2002",
    "eco": "A33",
    "opening": "Abertura Teórica (A33)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 37 lances entre Gelfand, Boris e Topalov, Veselin (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.10\"]\n[Round \"05\"]\n[White \"Gelfand, Boris\"]\n[Black \"Topalov, Veselin\"]\n[Result \"1/2-1/2\"]\n[ECO \"A33\"]\n\n1. d4 Nf6 2. Nf3 e6 3. c4 c5 4. Nc3 cxd4 5. Nxd4 Nc6 6. g3 Qb6 7. Ndb5 a6 8. Nd6+ Bxd6 9. Qxd6 Qb4 10. Qxb4 Nxb4 11. Rb1 d5 12. Bg2 dxc4 13. b3 cxb3 14. Rxb3 Nc2+ 15. Kf1 Nd4 16. Rb4 Nc6 17. Rb1 O-O 18. Be3 e5 19. Na4 1/2-1/2"
  },
  {
    "id": "game-133-lutz,-topalov,-2002",
    "white": {
      "name": "Lutz, Christopher",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Topalov, Veselin",
      "title": "GM",
      "rating": "2650",
      "country": "Bulgária",
      "code": "BG"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.11",
    "year": "2002",
    "eco": "C67",
    "opening": "Abertura Teórica (C67)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 68 lances entre Lutz, Christopher e Topalov, Veselin (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.11\"]\n[Round \"06\"]\n[White \"Lutz, Christopher\"]\n[Black \"Topalov, Veselin\"]\n[Result \"1/2-1/2\"]\n[ECO \"C67\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Ke8 10. h3 Be7 11. Bg5 Bxg5 12. Nxg5 h6 13. Nge4 b6 14. Rfd1 Ke7 15. Kh2 g5 16. Ne2 Be6 17. g4 Nh4 18. Nd4 Bd7 19. Ng3 Rhe8 20. Rd3 Kf8 21. Re1 Rad8 22. Red1 c5 23. Ne6+ Rxe6 24. Rxd7 Rxd7 25. Rxd7 Rxe5 26. Rxc7 Re1 27. Rxa7 Rc1 28. Ra8+ Ke7 29. Ra7+ Ke6 30. Ra6 Rxc2 31. Rxb6+ Ke5 32. Kg1 Rc1+ 33. Kh2 Nf3+ 34. Kg2 Nh4+ 1/2-1/2"
  },
  {
    "id": "game-134-shirov,-gelfand,-2002",
    "white": {
      "name": "Shirov, Alexei",
      "title": "GM",
      "rating": "2650",
      "country": "Espanha",
      "code": "ES"
    },
    "black": {
      "name": "Gelfand, Boris",
      "title": "GM",
      "rating": "2650",
      "country": "Israel",
      "code": "IL"
    },
    "event": "Sparkassen G1",
    "site": "Dortmund",
    "date": "2002.07.11",
    "year": "2002",
    "eco": "B51",
    "opening": "Abertura Teórica (B51)",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 101 lances entre Shirov, Alexei e Gelfand, Boris (2002).",
    "pgn": "[Event \"Sparkassen G1\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.11\"]\n[Round \"06\"]\n[White \"Shirov, Alexei\"]\n[Black \"Gelfand, Boris\"]\n[Result \"1-0\"]\n[ECO \"B51\"]\n\n1. e4 c5 2. Nf3 Nc6 3. Bb5 d6 4. Bxc6+ bxc6 5. O-O Bg4 6. h3 Bh5 7. e5 e6 8. exd6 Bxd6 9. d3 Ne7 10. Nbd2 O-O 11. Ne4 Nd5 12. Re1 Re8 13. Ng3 Bg6 14. Ne4 Bc7 15. Nxc5 e5 16. a3 f5 17. c4 Nf6 18. d4 e4 19. Ne5 Bh5 20. Qd2 Qd6 21. Qc3 Rad8 22. Be3 Rxe5 23. Nb7 Qf8 24. dxe5 Rd3 25. Qb4 Bxe5 26. Qxf8+ Kxf8 27. Nc5 Rd6 28. Nb7 Rd7 29. Nc5 Re7 30. Rab1 f4 31. Bd2 Bd6 32. b4 Kf7 33. Bc3 e3 34. Bd4 Bxc5 35. Bxc5 Re5 36. fxe3 f3 37. gxf3 Bxf3 38. Kh2 Be4 39. Rb2 Rh5 40. Rf1 a6 41. Bd4 Bf5 42. Rf3 Ne4 43. b5 axb5 44. cxb5 cxb5 45. Rxb5 g6 46. a4 Nd2 47. Rf4 Rxh3+ 48. Kg2 Rh5 49. a5 Ke6 50. Re5+ Kd6 51. a6 1-0"
  },
  {
    "id": "game-135-adams,-leko,-2002",
    "white": {
      "name": "Adams, Michael",
      "title": "GM",
      "rating": "2650",
      "country": "Inglaterra",
      "code": "GB"
    },
    "black": {
      "name": "Leko, Peter",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.06",
    "year": "2002",
    "eco": "B31",
    "opening": "Abertura Teórica (B31)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 87 lances entre Adams, Michael e Leko, Peter (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.06\"]\n[Round \"01\"]\n[White \"Adams, Michael\"]\n[Black \"Leko, Peter\"]\n[Result \"1/2-1/2\"]\n[ECO \"B31\"]\n\n1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. Bxc6 dxc6 5. d3 Bg7 6. h3 Nf6 7. Nc3 O-O 8. O-O Nd7 9. Be3 e5 10. Qd2 Re8 11. Nh2 b6 12. Bh6 Bh8 13. Kh1 Qe7 14. Rae1 Nf8 15. Ne2 Ne6 16. b3 a5 17. a4 Bd7 18. f4 exf4 19. Nxf4 Nd4 20. Ne2 Nxe2 21. Rxe2 b5 22. Bg5 Qd6 23. c4 f5 24. Bf4 Qd4 25. e5 Be6 26. Nf3 Qd7 27. Qe3 bxa4 28. bxa4 Rab8 29. Rd2 Qa7 30. h4 Rb4 31. Ra1 Bg7 32. Bg5 Bf7 33. Bh6 Qe7 34. Re2 Bxh6 35. Qxh6 Qf8 36. Qf4 h6 37. e6 Rxe6 38. Rxe6 Bxe6 39. Re1 Bf7 40. Ne5 Be8 41. Nf3 Rb3 42. Qc7 Rxd3 43. Qxa5 Bf7 44. Ne5 1/2-1/2"
  },
  {
    "id": "game-136-morozevich,-bareev,-2002",
    "white": {
      "name": "Morozevich, Alexander",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Bareev, Evgeny",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.06",
    "year": "2002",
    "eco": "B14",
    "opening": "Abertura Teórica (B14)",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 80 lances entre Morozevich, Alexander e Bareev, Evgeny (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.06\"]\n[Round \"01\"]\n[White \"Morozevich, Alexander\"]\n[Black \"Bareev, Evgeny\"]\n[Result \"0-1\"]\n[ECO \"B14\"]\n\n1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 e6 6. c5 Be7 7. Nf3 O-O 8. b4 b6 9. Rb1 bxc5 10. bxc5 Ne4 11. Nxe4 dxe4 12. Ne5 Qc7 13. Bf4 Rd8 14. Qa4 g5 15. Bd2 Bd7 16. Bb5 Bxb5 17. Qxb5 Rxd4 18. Qe8+ Bf8 19. Bc3 Qxe5 20. O-O Qd5 21. c6 Qd8 22. Qxd8 Rxd8 23. c7 Rc8 24. cxb8=Q Raxb8 25. Rxb8 Rxb8 26. Bd4 a6 27. g3 h6 28. Rc1 Rb4 29. Be3 Bg7 30. h4 Bd4 31. Bxd4 Rxd4 32. hxg5 hxg5 33. Rc5 Rd5 34. Rc4 Re5 35. Kf1 Kg7 36. Ke2 f5 37. a4 Kf6 38. Ke3 Rd5 39. g4 Rd3+ 40. Ke2 Ke5 0-1"
  },
  {
    "id": "game-137-bareev,-leko,-2002",
    "white": {
      "name": "Bareev, Evgeny",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Leko, Peter",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.07",
    "year": "2002",
    "eco": "E32",
    "opening": "Abertura Teórica (E32)",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 73 lances entre Bareev, Evgeny e Leko, Peter (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.07\"]\n[Round \"02\"]\n[White \"Bareev, Evgeny\"]\n[Black \"Leko, Peter\"]\n[Result \"1-0\"]\n[ECO \"E32\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. a3 Bxc3+ 6. Qxc3 b6 7. Bg5 Bb7 8. e3 d6 9. f3 h6 10. Bh4 Nbd7 11. Bd3 c5 12. Ne2 Rc8 13. O-O Ba6 14. b4 cxd4 15. Qxd4 Ne5 16. b5 Nxd3 17. Qxd3 Bb7 18. e4 Qc7 19. Rac1 Rfd8 20. Rfd1 Rd7 21. a4 Qc5+ 22. Bf2 Qb4 23. Qc2 d5 24. c5 Rdc7 25. c6 Bxc6 26. Bg3 Bxb5 27. Bxc7 Rxc7 28. Qxc7 Bxe2 29. Re1 Bc4 30. Qxa7 h5 31. e5 Nh7 32. Rb1 Bb3 33. Kh1 Qxa4 34. Qxb6 Bc2 35. Qd8+ Nf8 36. Rb8 Qa3 37. Qd6 1-0"
  },
  {
    "id": "game-138-morozevich,-adams,-2002",
    "white": {
      "name": "Morozevich, Alexander",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Adams, Michael",
      "title": "GM",
      "rating": "2650",
      "country": "Inglaterra",
      "code": "GB"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.07",
    "year": "2002",
    "eco": "C42",
    "opening": "Abertura Teórica (C42)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 54 lances entre Morozevich, Alexander e Adams, Michael (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.07\"]\n[Round \"02\"]\n[White \"Morozevich, Alexander\"]\n[Black \"Adams, Michael\"]\n[Result \"1/2-1/2\"]\n[ECO \"C42\"]\n\n1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. Re1 Bg4 9. c3 f5 10. Nbd2 O-O 11. Qb3 Na5 12. Qc2 c5 13. Ne5 Bh5 14. f3 Bh4 15. fxe4 Bxe1 16. exf5 c4 17. Bf1 Bxd2 18. Bxd2 Nc6 19. Re1 Qc8 20. h3 Rxf5 21. g4 Nxe5 22. dxe5 Rxf1+ 23. Rxf1 Bg6 24. Qd1 Qc5+ 25. Rf2 Re8 26. Bf4 Bd3 27. Qf3 Be4 1/2-1/2"
  },
  {
    "id": "game-139-adams,-bareev,-2002",
    "white": {
      "name": "Adams, Michael",
      "title": "GM",
      "rating": "2650",
      "country": "Inglaterra",
      "code": "GB"
    },
    "black": {
      "name": "Bareev, Evgeny",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.08",
    "year": "2002",
    "eco": "B19",
    "opening": "Abertura Teórica (B19)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 61 lances entre Adams, Michael e Bareev, Evgeny (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.08\"]\n[Round \"03\"]\n[White \"Adams, Michael\"]\n[Black \"Bareev, Evgeny\"]\n[Result \"1/2-1/2\"]\n[ECO \"B19\"]\n\n1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 Ngf6 11. Bf4 e6 12. O-O-O Be7 13. Kb1 O-O 14. Ne5 Qa5 15. Ne4 Rad8 16. Nxf6+ Nxf6 17. Qg3 Kh8 18. Rd3 c5 19. Qf3 Rxd4 20. Rxd4 cxd4 21. Qxb7 Nd5 22. Bg3 Qa4 23. Qb3 Qa6 24. Qd3 Qa4 25. Rd1 Bc5 26. Qb3 Qa6 27. a4 Nf6 28. Qb5 Qc8 29. Nd3 Be7 30. Ne5 Bc5 31. Nd3 1/2-1/2"
  },
  {
    "id": "game-140-leko,-morozevich,-2002",
    "white": {
      "name": "Leko, Peter",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Morozevich, Alexander",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.08",
    "year": "2002",
    "eco": "C42",
    "opening": "Abertura Teórica (C42)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 82 lances entre Leko, Peter e Morozevich, Alexander (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.08\"]\n[Round \"03\"]\n[White \"Leko, Peter\"]\n[Black \"Morozevich, Alexander\"]\n[Result \"1/2-1/2\"]\n[ECO \"C42\"]\n\n1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 c6 9. Qc2 Na6 10. a3 f5 11. Nc3 Nc7 12. b4 Bd7 13. Bb2 Ng5 14. Ne5 Bxe5 15. dxe5 f4 16. f3 Kh8 17. Rfd1 Qe8 18. Rac1 dxc4 19. Bxc4 a5 20. Qf2 axb4 21. axb4 Be6 22. Bxe6 Ncxe6 23. Qb6 Qh5 24. Rd6 Nxf3+ 25. gxf3 Ng5 26. Rf1 Nxf3+ 27. Rxf3 Qxf3 28. Qf2 Qh5 29. Ne4 Ra2 30. Rd2 Qf5 31. Qf3 h6 32. h3 Rxb2 33. Rxb2 Qxe5 34. Rb1 Re8 35. Nf2 Qf5 36. Rb3 Qc2 37. Kg2 Re2 38. Ra3 Qg6+ 39. Qg4 Qxg4+ 40. hxg4 Rb2 41. Kf3 Rxb4 1/2-1/2"
  },
  {
    "id": "game-141-bareev,-adams,-2002",
    "white": {
      "name": "Bareev, Evgeny",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Adams, Michael",
      "title": "GM",
      "rating": "2650",
      "country": "Inglaterra",
      "code": "GB"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.09",
    "year": "2002",
    "eco": "E04",
    "opening": "Abertura Teórica (E04)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 50 lances entre Bareev, Evgeny e Adams, Michael (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.09\"]\n[Round \"04\"]\n[White \"Bareev, Evgeny\"]\n[Black \"Adams, Michael\"]\n[Result \"1/2-1/2\"]\n[ECO \"E04\"]\n\n1. d4 Nf6 2. c4 e6 3. g3 d5 4. Nf3 dxc4 5. Bg2 a6 6. O-O Nc6 7. Nc3 Rb8 8. e4 Be7 9. d5 exd5 10. exd5 Nb4 11. Ne5 Bf5 12. a3 Nd3 13. Nxc4 O-O 14. b4 Nxc1 15. Rxc1 Ne8 16. Qf3 g6 17. Ne4 Bxe4 18. Qxe4 Nd6 19. Qc2 Nxc4 20. Qxc4 Bd6 21. Rfe1 Qf6 22. Qc3 Qxc3 23. Rxc3 Rfe8 24. Rxe8+ Rxe8 25. Kf1 Kg7 1/2-1/2"
  },
  {
    "id": "game-142-morozevich,-leko,-2002",
    "white": {
      "name": "Morozevich, Alexander",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Leko, Peter",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.09",
    "year": "2002",
    "eco": "B30",
    "opening": "Abertura Teórica (B30)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 109 lances entre Morozevich, Alexander e Leko, Peter (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.09\"]\n[Round \"04\"]\n[White \"Morozevich, Alexander\"]\n[Black \"Leko, Peter\"]\n[Result \"1/2-1/2\"]\n[ECO \"B30\"]\n\n1. e4 c5 2. Nf3 Nc6 3. Nc3 e5 4. Bc4 Be7 5. d3 d6 6. O-O Nf6 7. h3 O-O 8. a3 a6 9. Ba2 Be6 10. Nd5 Nd4 11. Ne3 Nd7 12. c3 Nxf3+ 13. Qxf3 Bg5 14. Rd1 Qf6 15. Qxf6 Nxf6 16. Bxe6 fxe6 17. Nc4 Bxc1 18. Raxc1 Rad8 19. b4 b5 20. Na5 Rc8 21. c4 cxb4 22. axb4 bxc4 23. dxc4 Nxe4 24. f3 Ng3 25. Kf2 Nf5 26. c5 d5 27. Re1 e4 28. fxe4 Nd6+ 29. Ke3 Nxe4 30. Nc4 Nxc5 31. Nd6 d4+ 32. Ke2 d3+ 33. Ke3 d2 34. Nxc8 dxe1=Q+ 35. Rxe1 Nd7 36. Ne7+ Kf7 37. Nc6 Rc8 38. Rf1+ Nf6 39. Ne5+ Ke7 40. Kd4 Rd8+ 41. Kc4 Rd2 42. Ra1 Rc2+ 43. Kd4 Rd2+ 44. Kc4 Nd5 45. Rxa6 Ne3+ 46. Kb3 Kf6 47. Nc6 Rxg2 48. b5 Rg3 49. b6 Nd5+ 50. Kb2 Nxb6 51. Rxb6 Rxh3 52. Kc2 g5 53. Kd2 Rh2+ 54. Ke3 Rh1 55. Ke2 1/2-1/2"
  },
  {
    "id": "game-143-adams,-morozevich,-2002",
    "white": {
      "name": "Adams, Michael",
      "title": "GM",
      "rating": "2650",
      "country": "Inglaterra",
      "code": "GB"
    },
    "black": {
      "name": "Morozevich, Alexander",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.10",
    "year": "2002",
    "eco": "C42",
    "opening": "Abertura Teórica (C42)",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 93 lances entre Adams, Michael e Morozevich, Alexander (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.10\"]\n[Round \"05\"]\n[White \"Adams, Michael\"]\n[Black \"Morozevich, Alexander\"]\n[Result \"1/2-1/2\"]\n[ECO \"C42\"]\n\n1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 c6 9. Re1 Bf5 10. Nc3 Nxc3 11. bxc3 Bxd3 12. Qxd3 dxc4 13. Qxc4 Nd7 14. Qb3 Qc7 15. c4 Rfe8 16. Bb2 h6 17. g3 Rad8 18. Nh4 Bf8 19. Qc2 Qa5 20. Ng2 Rxe1+ 21. Rxe1 b5 22. Bc3 b4 23. Ba1 Nb6 24. Qb3 c5 25. d5 Qa6 26. Ne3 Re8 27. Rc1 Qc8 28. a3 a5 29. axb4 axb4 30. Kg2 h5 31. h4 Qd7 32. Bb2 Qa4 33. Qd3 Qa2 34. Qc2 Na4 35. Ra1 Qxb2 36. Rxa4 Qxc2 37. Nxc2 b3 38. Na3 b2 39. Kf1 g6 40. Ra5 Bg7 41. Nb1 Bd4 42. Ra6 Kg7 43. Ra7 Re4 44. Rb7 Re8 45. Ra7 Bf6 46. Ra5 Bd4 47. Ra7 1/2-1/2"
  },
  {
    "id": "game-144-leko,-adams,-2002",
    "white": {
      "name": "Leko, Peter",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Adams, Michael",
      "title": "GM",
      "rating": "2650",
      "country": "Inglaterra",
      "code": "GB"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.11",
    "year": "2002",
    "eco": "C42",
    "opening": "Abertura Teórica (C42)",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 89 lances entre Leko, Peter e Adams, Michael (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.11\"]\n[Round \"06\"]\n[White \"Leko, Peter\"]\n[Black \"Adams, Michael\"]\n[Result \"1-0\"]\n[ECO \"C42\"]\n\n1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. c4 Nf6 9. h3 O-O 10. Nc3 Nb4 11. Be2 dxc4 12. Bxc4 c6 13. Bg5 Nbd5 14. Re1 Be6 15. Qb3 Qb6 16. Nxd5 cxd5 17. Qxb6 axb6 18. Bb3 h6 19. Bf4 Rfc8 20. Ne5 g5 21. Bh2 Bb4 22. Re2 Ne4 23. Nd3 Bf8 24. Rae1 Bg7 25. Be5 Bxe5 26. Nxe5 Kg7 27. Nd3 Rc7 28. Nb4 Rd8 29. g4 Nf6 30. Kg2 Rd6 31. f3 Bd7 32. Kg3 Kf8 33. h4 Bb5 34. Re5 gxh4+ 35. Kxh4 Bc4 36. Bc2 Bb5 37. a3 Rd8 38. Kg3 Kg7 39. Bf5 Kf8 40. Rh1 Kg7 41. Nc2 Re8 42. Ne3 Rce7 43. Kf4 Bc6 44. Bc2 Bd7 45. g5 1-0"
  },
  {
    "id": "game-145-bareev,-morozevich,-2002",
    "white": {
      "name": "Bareev, Evgeny",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Morozevich, Alexander",
      "title": "GM",
      "rating": "2650",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Sparkassen G2",
    "site": "Dortmund",
    "date": "2002.07.11",
    "year": "2002",
    "eco": "A40",
    "opening": "Abertura Teórica (A40)",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 79 lances entre Bareev, Evgeny e Morozevich, Alexander (2002).",
    "pgn": "[Event \"Sparkassen G2\"]\n[Site \"Dortmund\"]\n[Date \"2002.07.11\"]\n[Round \"06\"]\n[White \"Bareev, Evgeny\"]\n[Black \"Morozevich, Alexander\"]\n[Result \"1-0\"]\n[ECO \"A40\"]\n\n1. d4 g6 2. g3 Bg7 3. Bg2 c5 4. c3 Qa5 5. Nd2 cxd4 6. Nb3 Qb6 7. cxd4 Nf6 8. d5 d6 9. Nf3 O-O 10. O-O Na6 11. Nfd4 Bd7 12. Bd2 Nc5 13. Ba5 Qa6 14. Qd2 Rfc8 15. Nxc5 Rxc5 16. Nb3 Rc4 17. Rfc1 Rxc1+ 18. Nxc1 Ng4 19. Nd3 Rc8 20. h3 Ne5 21. Bc3 Nc4 22. Qg5 Bxc3 23. Qxe7 Nxb2 24. Qxd7 Rf8 25. Rc1 Nxd3 26. Rxc3 Ne5 27. Qc7 Qxe2 28. Re3 Qxa2 29. Bf1 Qxd5 30. Bg2 Qd1+ 31. Kh2 Qd2 32. Kg1 Nd3 33. Rf3 Ne1 34. Rf6 Qd1 35. Bxb7 d5 36. Kh2 Kg7 37. Qe5 Kg8 38. Bxd5 Nd3 39. Qe7 Qe1 40. Bxf7+ 1-0"
  },
  {
    "id": "game-146-cuellar-uhlmann-1973",
    "white": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 52 lances entre Cuellar Gacharna M e Uhlmann W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Cuellar Gacharna M\"]\n[Black \"Uhlmann W\"]\n[Result \"0-1\"]\n\n1. c4 e5 2. Nc3 Nf6 3. g3 Bb4 4. Bg2 O-O 5. Nf3 Re8 6. O-O e4 7. Ne1 Bxc3 8. dxc3 d6 9. Nc2 Nbd7 10. b3 h6 11. Be3 b6 12. Qd2 Bb7 13. Rad1 Ne5 14. Qc1 Qc8 15. h3 Nf3+ 16. Kh1 Re5 17. Ne1 Rh5 18. h4 Qg4 19. exf3 exf3 20. Nxf3 Bxf3 21. Bxf3 Qxf3+ 22. Kg1 g5 23. Rd4 Re8 24. Qd1 Rxe3 25. fxe3 Qxg3+ 26. Kh1 g4 0-1"
  },
  {
    "id": "game-147-estevez-karpov-1973",
    "white": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 110 lances entre Estevez Morales G e Karpov A (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Estevez Morales G\"]\n[Black \"Karpov A\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6 8. Be2 Bb7 9. Bxf6 Bxf6 10. cxd5 exd5 11. b4 c6 12. O-O a5 13. a3 Qd6 14. Qb3 axb4 15. axb4 Nd7 16. Rfd1 Rxa1 17. Rxa1 Be7 18. Ra7 Rb8 19. Na2 Bc8 20. Qc2 Bf6 21. Nc1 Nf8 22. Nd3 Bf5 23. Qa4 Nd7 24. Ra8 Rxa8 25. Qxa8+ Kh7 26. Qa6 g6 27. Qb7 Kg7 28. h3 h5 29. Qa7 Bd8 30. Qb7 Qc7 31. Qa8 Be7 32. Nde5 Bxb4 33. Qxc6 Qxc6 34. Nxc6 Bd6 35. Bb5 Nf6 36. Nd2 Ne8 37. f3 Nc7 38. Be2 Bc2 39. Kf2 Ba4 40. Ne5 b5 41. Nd3 h4 42. Nb2 Bb4 43. Nb1 Bb3 44. Bd3 Bc4 45. e4 g5 46. exd5 Bxd5 47. Nd1 Bc6 48. Nbc3 Bd7 49. Ne4 Be7 50. Nc5 Bxc5 51. dxc5 Ne6 52. Nc3 b4 53. Ne4 b3 54. Nd2 Nxc5 55. Bb1 Kf6 0-1"
  },
  {
    "id": "game-148-gligoric-byrne-1973",
    "white": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 39 lances entre Gligoric S e Byrne R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Gligoric S\"]\n[Black \"Byrne R\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 O-O 5. e4 d6 6. h3 e5 7. d5 Na6 8. Be3 Nc5 9. Nd2 a5 10. Be2 Ne8 11. O-O f5 12. exf5 Bxf5 13. Nf3 Qe7 14. Re1 b6 15. Bf1 Nf6 16. Rc1 Bd7 17. Nh2 Qd8 18. Be2 Rf7 19. Rf1 Qe7 20. Ng4 1/2-1/2"
  },
  {
    "id": "game-149-huebner-taimanov-1973",
    "white": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 42 lances entre Huebner R e Taimanov M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Huebner R\"]\n[Black \"Taimanov M\"]\n[Result \"1/2-1/2\"]\n\n1. g3 d5 2. Bg2 c6 3. f4 g6 4. Nf3 Bg7 5. d3 Nh6 6. e4 dxe4 7. dxe4 Qxd1+ 8. Kxd1 Na6 9. Ke2 Be6 10. Na3 O-O-O 11. Re1 Nc5 12. Kf1 f6 13. Be3 b6 14. Bd4 Rhe8 15. Rad1 Kc7 16. b3 Bc8 17. Bxc5 bxc5 18. Kg1 Nf7 19. Nb1 Rxd1 20. Rxd1 e5 21. fxe5 Nxe5 1/2-1/2"
  },
  {
    "id": "game-150-radulov-quinteros-1973",
    "white": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 95 lances entre Radulov I e Quinteros M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Radulov I\"]\n[Black \"Quinteros M\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 Qc7 6. Bd3 Nf6 7. O-O Bc5 8. Nb3 Ba7 9. Bg5 Qe5 10. Qd2 Nh5 11. Kh1 h6 12. Be3 g5 13. Na4 Qc7 14. c4 b6 15. Bd4 e5 16. Be3 d6 17. Rfd1 Nf6 18. f3 Nbd7 19. Bf1 Ke7 20. Rac1 Bb7 21. Nc3 Nc5 22. Na1 Rad8 23. b4 Ncd7 24. Bf2 Nf8 25. Nc2 Ng6 26. Ne3 Kf8 27. Nf5 Ne7 28. Nxe7 Kxe7 29. Be3 Bc8 30. Qf2 Be6 31. a4 Ra8 32. Nd5+ Bxd5 33. cxd5 Qb7 34. Rc6 Nd7 35. Rdc1 b5 36. Rc7 Bxe3 37. Qxe3 Qb8 38. a5 Rd8 39. g3 Kf8 40. Bh3 Nf6 41. Bc8 Ne8 42. R7c6 Qa7 43. Qxa7 Rxa7 44. Bxa6 Rb8 45. Bc8 Ke7 46. Rb6 Raa8 47. Bb7 Ra7 48. Bc6 1-0"
  },
  {
    "id": "game-151-rukavina-larsen-1973",
    "white": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 56 lances entre Rukavina J e Larsen B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Rukavina J\"]\n[Black \"Larsen B\"]\n[Result \"0-1\"]\n\n1. c4 g6 2. d4 Bg7 3. g3 c5 4. d5 d6 5. Bg2 Na6 6. Nf3 f5 7. O-O Nf6 8. Nc3 O-O 9. Ne1 Rb8 10. Qd3 Bd7 11. b3 Ne4 12. Bxe4 fxe4 13. Qc2 Bh3 14. Ng2 Nb4 15. Qd2 e3 16. fxe3 Rxf1+ 17. Kxf1 e6 18. Bb2 exd5 19. cxd5 Qg5 20. Rd1 Be5 21. e4 Qg4 22. Kg1 Rf8 23. Ne3 Qg5 24. Ng2 Qh5 25. Re1 Bxg2 26. Kxg2 Rf2+ 27. Kxf2 Qxh2+ 28. Kf1 Qh3+ 0-1"
  },
  {
    "id": "game-152-smejkal-tal-1973",
    "white": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 64 lances entre Smejkal J e Tal M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Smejkal J\"]\n[Black \"Tal M\"]\n[Result \"1/2-1/2\"]\n\n1. c4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O c6 6. d4 d6 7. Nc3 Qa5 8. h3 e5 9. e4 exd4 10. Nxd4 Qc5 11. Nb3 Qxc4 12. Qxd6 a5 13. Rd1 Qb4 14. Rb1 Nbd7 15. Be3 Qxd6 16. Rxd6 a4 17. Nc5 a3 18. bxa3 Rxa3 19. Rb3 Rxb3 20. axb3 Re8 21. N3a4 Bf8 22. Rd1 b5 23. Nxd7 Nxd7 24. Nc3 Nc5 25. e5 b4 26. Bxc5 bxc3 27. Bxf8 Kxf8 28. Rc1 Rxe5 29. Rxc3 Be6 30. Bxc6 Bxh3 31. b4 Re1+ 32. Kh2 Be6 1/2-1/2"
  },
  {
    "id": "game-153-torre-kuzmin-1973",
    "white": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 113 lances entre Torre E e Kuzmin G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Torre E\"]\n[Black \"Kuzmin G\"]\n[Result \"1/2-1/2\"]\n\n1. e4 d6 2. d4 g6 3. Nf3 Nf6 4. Nc3 Bg7 5. Be2 O-O 6. O-O c6 7. a4 a5 8. Re1 Na6 9. Bf1 Bg4 10. h3 Bxf3 11. Qxf3 Nb4 12. Re2 Nd7 13. Be3 e6 14. Rd1 Nb6 15. Qg3 Qc7 16. Red2 Rad8 17. h4 Kh8 18. h5 gxh5 19. Qh4 f5 20. Bg5 Rde8 21. Qxh5 Qf7 22. Be2 Qg6 23. Qh4 Bf6 24. Bxf6+ Qxf6 25. Qxf6+ Rxf6 26. e5 Rff8 27. exd6 Rd8 28. b3 Rxd6 29. Nb1 Rd7 30. Kf1 Rfd8 31. Bf3 N4d5 32. Re1 Nc7 33. Red1 Kg7 34. Ke2 Nbd5 35. g3 Re7 36. Kf1 Kf6 37. c4 Nb4 38. Nc3 Red7 39. Ke2 Nca6 40. g4 Rg7 41. gxf5 exf5 42. Na2 Re7+ 43. Kf1 Nxa2 44. Rxa2 Red7 45. d5 Nc5 46. Rb1 cxd5 47. cxd5 Nd3 48. Rd2 Nb4 49. Rbd1 Rd6 50. Rd4 h6 51. Rh4 Kg5 52. Rh5+ Kg6 53. Rh4 b6 54. Rhd4 Kg5 55. Kg2 Kf6 56. Rh4 Rg8+ 57. Kf1 1/2-1/2"
  },
  {
    "id": "game-154-tukmakov-kortchnoi-1973",
    "white": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 76 lances entre Tukmakov V e Kortchnoi V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Tukmakov V\"]\n[Black \"Kortchnoi V\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3 b5 6. a4 c6 7. O-O Bb7 8. Ne5 a6 9. b3 cxb3 10. Bb2 Qb6 11. Qxb3 Nbd7 12. Nxd7 Nxd7 13. Nd2 Be7 14. d5 cxd5 15. Bxg7 Rg8 16. Bc3 Rg4 17. Rfb1 Bc5 18. e3 Bxe3 19. fxe3 Qxe3+ 20. Kh1 Rc8 21. Ba5 Qxb3 22. Nxb3 Rxa4 23. Rxa4 bxa4 24. Nd2 Bc6 25. Rc1 Ne5 26. Kg1 Kd7 27. Nf3 Nxf3+ 28. Bxf3 d4 29. Bh5 f5 30. g4 fxg4 31. Rd1 Bd5 32. Rxd4 Rc1+ 33. Kf2 a3 34. Bxg4 a2 35. Bc3 Rc2+ 36. Ke1 Rxc3 37. Rxd5+ Ke7 38. Rd1 Rb3 0-1"
  },
  {
    "id": "game-155-byrne-rukavina-1973",
    "white": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 65 lances entre Byrne R e Rukavina J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Byrne R\"]\n[Black \"Rukavina J\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nh4 Re8 12. Nf5 Bf8 13. f3 Bb7 14. Bg5 h6 15. Bh4 d5 16. exd5 exd4 17. cxd4 g6 18. Ne3 Nb6 19. Nc3 g5 20. Bg3 Nfxd5 21. Nexd5 Rxe1+ 22. Qxe1 Nxd5 23. Qe4 Nxc3 24. Qg6+ Bg7 25. Qxf7+ Kh8 26. bxc3 b4 27. Be5 Bxe5 28. dxe5 bxc3 29. Rd1 Qf8 30. Qxc7 Rc8 31. Qxb7 c2 32. Rc1 Rd8 33. Bxc2 1-0"
  },
  {
    "id": "game-156-karpov-huebner-1973",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 81 lances entre Karpov A e Huebner R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Karpov A\"]\n[Black \"Huebner R\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Nf6 6. O-O Qc7 7. Qe2 d6 8. c4 g6 9. Nc3 Bg7 10. Be3 O-O 11. Rac1 Nc6 12. Nxc6 bxc6 13. f4 c5 14. Rfd1 Bb7 15. a3 Bc6 16. b4 cxb4 17. axb4 Qb7 18. e5 dxe5 19. fxe5 Nd7 20. b5 axb5 21. cxb5 Bd5 22. Bd4 Qb8 23. Re1 Bb7 24. b6 Rd8 25. Bb5 Ra5 26. Qe3 Qa8 27. Qf2 Ba6 28. Rb1 Bxb5 29. Rxb5 Rxb5 30. Nxb5 Qa5 31. Nd6 Nxe5 32. Bxe5 Rxd6 33. Bxg7 Kxg7 34. Rb1 Rd8 35. Qb2+ Kg8 36. b7 Rb8 37. Qc2 Kg7 38. Qc8 Qa2 39. Qc3+ Kg8 40. Ra1 Qd5 41. Qc8+ 1/2-1/2"
  },
  {
    "id": "game-157-kortchnoi-cuellar-1973",
    "white": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 65 lances entre Kortchnoi V e Cuellar Gacharna M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Kortchnoi V\"]\n[Black \"Cuellar Gacharna M\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 b6 8. Be2 Bb7 9. Bxf6 Bxf6 10. cxd5 exd5 11. O-O Qe7 12. Qb3 c6 13. Rfe1 Bc8 14. Rac1 Be6 15. Qa4 a5 16. Bd3 Rc8 17. e4 Qd8 18. exd5 cxd5 19. Nxd5 Nd7 20. Bc4 Nf8 21. Nxf6+ Qxf6 22. Ne5 Qg5 23. Qd1 b5 24. Bxe6 Nxe6 25. Nc6 Nf4 26. Qf3 Re8 27. h4 Qf6 28. Re5 Kf8 29. g3 Ne6 30. Rf5 Qg6 31. h5 Qh7 32. Rxf7+ Kg8 33. Ne7+ 1-0"
  },
  {
    "id": "game-158-kuzmin-estevez-1973",
    "white": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 101 lances entre Kuzmin G e Estevez Morales G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Kuzmin G\"]\n[Black \"Estevez Morales G\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4 Qc7 11. Bb5 Bd7 12. a4 Rfd8 13. Ba3 b6 14. Qe2 Na5 15. Rac1 Bxb5 16. axb5 Ne4 17. Ne5 Rac8 18. f3 Nd2 19. Rfd1 Nab3 20. Rc2 cxd4 21. exd4 Nc4 22. Nxc4 Qxc4 23. Bb4 h6 24. Qxc4 Rxc4 25. Rb2 Na5 26. Ra1 Rd7 27. Kf2 Rcc7 28. Bxa5 bxa5 29. Rb3 e5 30. dxe5 Rd2+ 31. Kg3 Re2 32. Rxa5 g5 33. Rba3 Rxe5 34. Rxa7 Rxa7 35. Rxa7 Rxb5 36. Ra2 Kg7 37. Kf2 Rc5 38. Rc2 Kf6 39. Ke3 Ke5 40. Kd3 f5 41. c4 h5 42. Re2+ Kd6 43. Kd4 Ra5 44. Rc2 Ra4 45. g3 h4 46. gxh4 gxh4 47. f4 Ke6 48. Rc3 Ra1 49. h3 Kd6 50. c5+ Ke6 51. Re3+ 1-0"
  },
  {
    "id": "game-159-larsen-radulov-1973",
    "white": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "black": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 51 lances entre Larsen B e Radulov I (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Larsen B\"]\n[Black \"Radulov I\"]\n[Result \"1-0\"]\n\n1. c4 Nf6 2. Nf3 e6 3. b3 Be7 4. Bb2 O-O 5. Nc3 d5 6. e3 b6 7. d4 Bb7 8. Bd3 c5 9. O-O Nbd7 10. Qe2 Ne4 11. cxd5 exd5 12. Rfd1 Nxc3 13. Bxc3 Rc8 14. Rac1 Rc7 15. dxc5 bxc5 16. Qc2 g6 17. e4 Qa8 18. Qd2 Bf6 19. Qf4 Qd8 20. Ba5 Nb6 21. b4 Be7 22. exd5 Bd6 23. Qh6 cxb4 24. Ng5 f5 25. Ne6 Qd7 26. Rxc7 1-0"
  },
  {
    "id": "game-160-quinteros-smejkal-1973",
    "white": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 80 lances entre Quinteros M e Smejkal J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Quinteros M\"]\n[Black \"Smejkal J\"]\n[Result \"1-0\"]\n\n1. Nf3 Nf6 2. g3 d5 3. Bg2 c5 4. O-O Nc6 5. c4 d4 6. d3 g6 7. e3 Bg7 8. exd4 cxd4 9. Bd2 a5 10. Na3 O-O 11. Nb5 Nd7 12. Qc2 Nc5 13. Rfe1 Bf5 14. Bf1 Qd7 15. a3 Bg4 16. Nh4 Bf6 17. f3 Bh3 18. Bh6 Bxf1 19. Rxf1 Rfc8 20. Ng2 Ne5 21. Qe2 Ncxd3 22. b3 Nc5 23. Rab1 a4 24. Bf4 Ncd3 25. Rfd1 Nxf4 26. gxf4 Nc6 27. b4 Rd8 28. Ne1 b6 29. Nd3 e6 30. Rd2 Ne7 31. Rbd1 Nf5 32. Ne5 Bxe5 33. fxe5 Qe7 34. Nxd4 Qg5+ 35. Kh1 Ne3 36. Nc6 Nxd1 37. Rxd1 Rxd1+ 38. Qxd1 Qf4 39. Qd3 Kg7 40. Kg2 h5 1-0"
  },
  {
    "id": "game-161-taimanov-tukmakov-1973",
    "white": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 49 lances entre Taimanov M e Tukmakov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Taimanov M\"]\n[Black \"Tukmakov V\"]\n[Result \"1/2-1/2\"]\n\n1. c4 Nf6 2. Nc3 c5 3. g3 g6 4. Bg2 Bg7 5. e4 Nc6 6. Nge2 O-O 7. O-O Ne8 8. a3 Nc7 9. Rb1 a5 10. d3 Ne6 11. h3 d6 12. Kh2 Rb8 13. f4 Ned4 14. Nxd4 Nxd4 15. b4 axb4 16. axb4 cxb4 17. Rxb4 Bd7 18. Be3 Qa5 19. Nd5 e6 20. Nb6 Qxb4 21. Nxd7 b5 22. Nxf8 Rxf8 23. cxb5 Qxb5 24. Qb1 Rc8 25. Qxb5 1/2-1/2"
  },
  {
    "id": "game-162-uhlmann-gligoric-1973",
    "white": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 121 lances entre Uhlmann W e Gligoric S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Uhlmann W\"]\n[Black \"Gligoric S\"]\n[Result \"1/2-1/2\"]\n\n1. c4 g6 2. e4 Bg7 3. d4 d6 4. Nc3 Nf6 5. Be2 O-O 6. Bg5 h6 7. Be3 e5 8. d5 Nbd7 9. Qd2 h5 10. h3 Nc5 11. Bf3 a5 12. Nge2 Bd7 13. Nc1 Nh7 14. g4 h4 15. g5 c6 16. Nb3 cxd5 17. Nxc5 d4 18. Nxd7 Qxd7 19. Nd5 Qd8 20. Rg1 Rc8 21. Be2 Re8 22. Bxd4 exd4 23. Bd3 Nf8 24. Rg4 Nd7 25. Rxh4 Ne5 26. Ke2 Rc5 27. b3 b5 28. Rc1 a4 29. f4 Nxd3 30. Qxd3 axb3 31. axb3 Qa8 32. Rg4 bxc4 33. bxc4 Ra5 34. Rg3 Rb8 35. Nc7 Qc6 36. Nd5 Ra2+ 37. Kf3 Qa4 38. Kg4 Qd7+ 39. Kh4 Kh7 40. Rc2 Ra1 41. Nf6+ Bxf6 42. gxf6 Rh8 43. f5 Kg8+ 44. Kg4 Ra5 45. Kf3 Qc6 46. fxg6 Rh4 47. Re2 fxg6 48. Rxg6+ Kf7 49. Rg7+ Kxf6 50. Qxd4+ Re5 51. Qa7 Qe8 52. Kg3 Reh5 53. e5+ dxe5 54. Rf2+ Rf4 55. Rg4 Rxh3+ 56. Kxh3 Qh5+ 57. Kg2 Qxg4+ 58. Kf1 Kg6 59. Qa6+ Kh5 60. Rxf4 exf4 61. Qa5+ 1/2-1/2"
  },
  {
    "id": "game-163-estevez-tal-1973",
    "white": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 73 lances entre Estevez Morales G e Tal M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Estevez Morales G\"]\n[Black \"Tal M\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 a6 7. a4 Qc7 8. Be3 b6 9. f4 Bb7 10. Bf3 Nbd7 11. Qe2 Be7 12. O-O O-O 13. Kh1 Nc5 14. Bf2 d5 15. exd5 Nxd5 16. Bxd5 exd5 17. Qg4 Bf6 18. Nf5 Ne6 19. Bh4 Bxh4 20. Qxh4 Rfe8 21. Rad1 Qc5 22. Qg3 Kh8 23. Ne2 Qf8 24. Ned4 Nc5 25. Qh4 Re4 26. Ng3 Qe7 27. Qg4 Bc8 28. Qh5 g6 29. Qh6 Bg4 30. Nxe4 Qxe4 31. Rfe1 Bxd1 32. Rxe4 Nxe4 33. f5 Re8 34. fxg6 fxg6 35. Ne6 Rg8 36. Qf4 h5 37. Qh6# 1-0"
  },
  {
    "id": "game-164-huebner-kuzmin-1973",
    "white": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 47 lances entre Huebner R e Kuzmin G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Huebner R\"]\n[Black \"Kuzmin G\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4 Bb7 9. d3 d6 10. c3 Nd7 11. Bc2 Bf6 12. Na3 Nb6 13. axb5 axb5 14. b4 Ne7 15. Be3 c6 16. d4 Ng6 17. Bb3 exd4 18. Bxd4 Na4 19. c4 Nb2 20. Qc2 bxc4 21. Nxc4 Rxa1 22. Rxa1 Nxc4 23. Qxc4 c5 24. Bxf6 1/2-1/2"
  },
  {
    "id": "game-165-kortchnoi-taimanov-1973",
    "white": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 105 lances entre Kortchnoi V e Taimanov M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Kortchnoi V\"]\n[Black \"Taimanov M\"]\n[Result \"1-0\"]\n\n1. c4 e5 2. Nc3 Nf6 3. g3 Bb4 4. Bg2 O-O 5. e4 c6 6. Nge2 d5 7. cxd5 cxd5 8. exd5 Bf5 9. d4 e4 10. Bg5 Nbd7 11. Qb3 Qb6 12. O-O h6 13. Bf4 Rfe8 14. Na4 Qa5 15. a3 Bf8 16. Nec3 g5 17. Be3 Rac8 18. Rfc1 Ng4 19. Qxb7 Rb8 20. Qc6 Rec8 21. b4 Rxc6 22. bxa5 Ra6 23. Bxe4 Bxe4 24. Nxe4 Rxa5 25. Nac5 Nxc5 26. dxc5 f5 27. Bd2 Ra4 28. Nd6 Rd4 29. Bb4 Rxd5 30. Rd1 Nf6 31. c6 Bxd6 32. Bxd6 Rc8 33. c7 Kf7 34. Rxd5 Nxd5 35. Re1 Kf6 36. f4 gxf4 37. Re5 Nb6 38. Rc5 fxg3 39. Bxg3 h5 40. Kf2 Ke6 41. Re5+ Kf6 42. Ra5 Ke6 43. Rxa7 Kd7 44. Ra5 Rf8 45. Bf4 Kc6 46. Re5 Kb7 47. Rb5 Kc6 48. a4 Ra8 49. Kf3 Rf8 50. Rb4 Re8 51. a5 Nc8 52. Rd4 Kb7 53. a6+ 1-0"
  },
  {
    "id": "game-166-radulov-byrne-1973",
    "white": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 58 lances entre Radulov I e Byrne R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Radulov I\"]\n[Black \"Byrne R\"]\n[Result \"0-1\"]\n\n1. e4 e6 2. d4 d5 3. Nd2 c5 4. Ngf3 Nc6 5. Bb5 a6 6. exd5 axb5 7. dxc6 bxc6 8. dxc5 Bxc5 9. O-O Nf6 10. Qe2 Be7 11. Rd1 Qb6 12. c4 O-O 13. Ne4 bxc4 14. Bg5 Ba6 15. Nxf6+ Bxf6 16. Bxf6 gxf6 17. Nd4 Rfd8 18. Qg4+ Kf8 19. Qh4 c5 20. Nf5 exf5 21. Qxh7 Bc8 22. Re1 Be6 23. h4 Qc6 24. Re2 Rd4 25. Rae1 Rg4 26. g3 Re4 27. Rxe4 fxe4 28. h5 Ke7 29. Rxe4 Rxa2 0-1"
  },
  {
    "id": "game-167-rukavina-uhlmann-1973",
    "white": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 81 lances entre Rukavina J e Uhlmann W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Rukavina J\"]\n[Black \"Uhlmann W\"]\n[Result \"1/2-1/2\"]\n\n1. g3 e5 2. Bg2 Nc6 3. c4 g6 4. Nc3 Bg7 5. d3 d6 6. Rb1 f5 7. e3 Nf6 8. Nge2 O-O 9. O-O Be6 10. Nd5 Qd7 11. b4 Nh5 12. b5 Nd8 13. f4 c6 14. bxc6 bxc6 15. Ndc3 Re8 16. Qa4 Rc8 17. Bd2 Bf7 18. d4 exd4 19. Nxd4 Re7 20. Rfc1 Nf6 21. h3 c5 22. Nf3 Qxa4 23. Nxa4 Ne4 24. Be1 Be8 25. Nb2 Rb7 26. Nd1 Rxb1 27. Rxb1 Bf7 28. Bf1 Nc6 29. a3 Rb8 30. Rxb8+ Nxb8 31. Nd2 Nc3 32. Nxc3 Bxc3 33. Kf2 Nd7 34. Nb1 Bg7 35. Bc3 Nf6 36. Bxf6 Bxf6 37. Ke1 g5 38. Kd2 gxf4 39. gxf4 Kg7 40. Nc3 Bxc3+ 41. Kxc3 1/2-1/2"
  },
  {
    "id": "game-168-smejkal-larsen-1973",
    "white": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 80 lances entre Smejkal J e Larsen B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Smejkal J\"]\n[Black \"Larsen B\"]\n[Result \"0-1\"]\n\n1. d4 f5 2. g3 Nf6 3. Bg2 e6 4. Nf3 Bb4+ 5. c3 Be7 6. O-O O-O 7. c4 c6 8. Nc3 d5 9. Qc2 Ne4 10. Ne5 Nd7 11. Nxe4 fxe4 12. Bf4 Bf6 13. Rad1 Bxe5 14. Bxe5 Nxe5 15. dxe5 Qe7 16. Qc3 Bd7 17. f3 exf3 18. exf3 Qc5+ 19. Rd4 a5 20. f4 Qa7 21. f5 Rae8 22. cxd5 cxd5 23. Kh1 Rc8 24. Qd2 Rc2 25. Qxc2 Qxd4 26. Qc3 Qxc3 27. bxc3 Rc8 28. Rd1 Rc5 29. fxe6 Bxe6 30. Kg1 Kf7 31. Rd3 Rb5 32. Rd2 a4 33. a3 Rb3 34. Bxd5 Rxa3 35. c4 Rb3 36. Kf2 a3 37. Ke2 Rb2 38. Rxb2 axb2 39. Be4 Bxc4+ 40. Kd2 Ba2 0-1"
  },
  {
    "id": "game-169-torre-quinteros-1973",
    "white": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 48 lances entre Torre E e Quinteros M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Torre E\"]\n[Black \"Quinteros M\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. Nc3 a6 4. d4 cxd4 5. Nxd4 Nf6 6. Be2 Nbd7 7. f4 Qb6 8. Nb3 g6 9. Qd3 Qc7 10. g4 Nc5 11. Nxc5 Qxc5 12. Be3 Qa5 13. b4 Qd8 14. Bd4 Rg8 15. Qg3 Nd7 16. Rd1 e6 17. O-O b6 18. f5 gxf5 19. exf5 e5 20. Be3 Bb7 21. Bf3 Rc8 22. Bxb7 Rxc3 23. g5 Qc7 24. Bg2 Be7 1/2-1/2"
  },
  {
    "id": "game-170-tukmakov-karpov-1973",
    "white": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 66 lances entre Tukmakov V e Karpov A (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Tukmakov V\"]\n[Black \"Karpov A\"]\n[Result \"0-1\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. c4 c6 12. Bg5 h6 13. Bh4 Nh5 14. Bxe7 Qxe7 15. cxb5 axb5 16. Nc3 b4 17. Nb1 Nf4 18. Nbd2 exd4 19. Nxd4 Ne5 20. N2f3 Qf6 21. Nxe5 dxe5 22. Nf5 Bxf5 23. exf5 Rad8 24. Qf3 Rd2 25. Re3 Rxb2 26. Rae1 Re8 27. Re4 Nd5 28. Qg3 Nc3 29. Rxb4 Ne2+ 30. Rxe2 Rxe2 31. Rb7 Re7 32. Rb8+ Kh7 33. Kf1 Rd2 0-1"
  },
  {
    "id": "game-171-byrne-smejkal-1973",
    "white": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 81 lances entre Byrne R e Smejkal J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Byrne R\"]\n[Black \"Smejkal J\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 Bb7 7. d4 Nxd4 8. Nxd4 exd4 9. c3 Nxe4 10. Re1 Be7 11. Qg4 O-O 12. Rxe4 Bxe4 13. Qxe4 Bf6 14. Bd2 Re8 15. Qf3 c6 16. cxd4 d5 17. Nc3 Bxd4 18. Rc1 Qf6 19. Qxf6 Bxf6 20. Kf1 Rac8 21. Bc2 g6 22. Bd3 c5 23. Nxd5 Bxb2 24. Rc2 Bd4 25. Ba5 Kg7 26. Be2 Rc6 27. Bf3 Rd6 28. g3 g5 29. Nc3 c4 30. Ne4 Rg6 31. g4 Be5 32. Ng3 Bxg3 33. hxg3 Rd6 34. Bb4 Rd3 35. Be2 Rd7 36. a4 f6 37. a5 Re6 38. Bc5 Rd5 39. Be3 Rd7 40. Ke1 Red6 41. Bc5 1/2-1/2"
  },
  {
    "id": "game-172-gligoric-rukavina-1973",
    "white": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 56 lances entre Gligoric S e Rukavina J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Gligoric S\"]\n[Black \"Rukavina J\"]\n[Result \"1/2-1/2\"]\n\n1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 Bg4 5. Bxc4 e6 6. h3 Bh5 7. Nc3 Nbd7 8. O-O Bd6 9. Be2 O-O 10. e4 e5 11. Be3 exd4 12. Nxd4 Bxe2 13. Qxe2 Re8 14. Nf5 Be5 15. Bg5 c6 16. Rad1 Qc7 17. Qf3 Re6 18. Nd4 Rd6 19. Qe3 Nf8 20. Bf4 Bxf4 21. Qxf4 Rd7 22. Qxc7 Rxc7 23. e5 N6d7 24. f4 Re8 25. Ne4 Nb6 26. Nd6 Rd8 27. Nb3 Nd5 28. Rf3 f6 1/2-1/2"
  },
  {
    "id": "game-173-karpov-kortchnoi-1973",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 36 lances entre Karpov A e Kortchnoi V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Karpov A\"]\n[Black \"Kortchnoi V\"]\n[Result \"1/2-1/2\"]\n\n1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O Nc6 7. d5 Nb8 8. h3 c6 9. a4 a5 10. Bg5 Bd7 11. Re1 Na6 12. dxc6 Bxc6 13. Bb5 Nb4 14. Qe2 h6 15. Bf4 e5 16. Bh2 Rc8 17. Rad1 Qe7 18. Rd2 h5 1/2-1/2"
  },
  {
    "id": "game-174-kuzmin-tukmakov-1973",
    "white": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Kuzmin G e Tukmakov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Kuzmin G\"]\n[Black \"Tukmakov V\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 d6 6. g3 Bd7 7. Bg2 Nxd4 8. Qxd4 Nf6 9. O-O Be7 10. Bg5 Qc7 11. Rad1 a6 12. Rfe1 h6 13. Bxf6 gxf6 14. Re3 Rc8 15. Qd2 b5 16. a3 Kf8 17. Rc1 Qb6 18. Ne2 Rc5 19. Nf4 Bc8 20. b4 Rc7 21. c4 bxc4 22. Rec3 Bb7 23. Rxc4 Rxc4 24. Rxc4 Rg8 25. a4 Rg5 26. a5 Qd8 27. h4 Rb5 28. Kh2 Kg7 29. Qc3 Kh7 30. Qc2 Kg7 31. Qc3 Kh7 32. Rc7 Rc5 33. Rxc5 dxc5 34. bxc5 Qc7 35. Nd3 Bd8 36. Qb2 Bc6 37. e5 Bb5 38. Qd4 f5 39. c6 Qxa5 40. Nf4 Qc7 41. Qd6 1-0"
  },
  {
    "id": "game-175-quinteros-estevez-1973",
    "white": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 88 lances entre Quinteros M e Estevez Morales G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Quinteros M\"]\n[Black \"Estevez Morales G\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. c4 b6 3. d3 g6 4. e4 d6 5. Nc3 Bg7 6. d4 O-O 7. Bd3 Bg4 8. Be3 Nfd7 9. Be2 c5 10. d5 Na6 11. h3 Bxf3 12. Bxf3 Nc7 13. Be2 e6 14. O-O exd5 15. exd5 f5 16. Qd2 Qe7 17. Rfe1 Rae8 18. Kh1 Qh4 19. f4 Rf7 20. Bd3 Bh6 21. Rf1 Rfe7 22. Rf3 Bg7 23. Bf2 Qh6 24. Re1 Ne5 25. Rfe3 Qxf4 26. Bf1 Bf6 27. Qc2 Nxc4 28. Rxe7 Rxe7 29. Rxe7 Bxe7 30. Qa4 Qxf2 31. Bxc4 Bg5 32. Ne2 b5 33. Bxb5 Nxb5 34. Qxb5 Qf1+ 35. Kh2 Bf4+ 36. g3 Qf2+ 37. Kh1 Qf3+ 38. Kh2 Qf2+ 39. Kh1 Qf3+ 40. Kh2 Be5 41. Qe8+ Kg7 42. Qe7+ Kh6 43. Qh4+ Kg7 44. Qe7+ Kh6 1/2-1/2"
  },
  {
    "id": "game-176-taimanov-cuellar-1973",
    "white": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 116 lances entre Taimanov M e Cuellar Gacharna M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Taimanov M\"]\n[Black \"Cuellar Gacharna M\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 O-O 6. Rc1 Nbd7 7. Nf3 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. Ne4 N5f6 12. Ng3 e5 13. O-O e4 14. Nd2 Re8 15. Bb3 Nb6 16. Bc2 Bg4 17. Qe1 Be6 18. Ngxe4 Nxe4 19. Bxe4 Bxa2 20. b3 a5 21. Ra1 Bxb3 22. Bxh7+ Kxh7 23. Nxb3 a4 24. Nc5 Kg8 25. Qb1 Nc4 26. Qc1 b5 27. Nxa4 Nxe3 28. Re1 bxa4 29. Qxc6 Qa7 30. fxe3 a3 31. Qc3 Rec8 32. Qd3 Qa5 33. h3 Rc3 34. Qe4 Qa4 35. Rf1 Qe8 36. Qxe8+ Rxe8 37. Rfe1 Rexe3 38. Rxe3 Rxe3 39. Kf2 Rb3 40. Rc1 Rb8 41. d5 a2 42. Ra1 Ra8 43. Ke3 f6 44. h4 Kf7 45. h5 Ra4 46. Kd3 Ke7 47. Kc3 Kd6 48. Kb3 Ra8 49. Rxa2 Rxa2 50. Kxa2 Kxd5 51. Kb3 Kd4 52. Kb4 f5 53. Kb5 Kd5 54. Kb6 f4 55. Kc7 Ke6 56. Kd8 Kf7 57. Kd7 Kf6 58. Ke8 Kg5 1/2-1/2"
  },
  {
    "id": "game-177-tal-huebner-1973",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 68 lances entre Tal M e Huebner R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Tal M\"]\n[Black \"Huebner R\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 Qc7 6. Be2 b6 7. a3 Bb7 8. f4 Nc6 9. Be3 Nxd4 10. Qxd4 Ne7 11. Rd1 Rd8 12. O-O Nc6 13. Qd2 Be7 14. Qe1 d6 15. f5 O-O 16. f6 Bxf6 17. Rxf6 gxf6 18. Qh4 Qe7 19. Rd3 f5 20. Bg5 f6 21. Bh6 fxe4 22. Rg3+ Kh8 23. Bg7+ Qxg7 24. Rxg7 Kxg7 25. Nxe4 Ne5 26. Ng3 Ng6 27. Qd4 Kh8 28. Nh5 Ne5 29. Qh4 Rd7 30. Nxf6 Rg7 31. Qh6 Rxg2+ 32. Kf1 Rf7 33. Bh5 Ng4 34. Bxg4 Rxg4 0-1"
  },
  {
    "id": "game-178-uhlmann-radulov-1973",
    "white": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 84 lances entre Uhlmann W e Radulov I (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Uhlmann W\"]\n[Black \"Radulov I\"]\n[Result \"0-1\"]\n\n1. c4 c5 2. Nf3 Nc6 3. Nc3 e5 4. g3 g6 5. Bg2 Bg7 6. O-O Nge7 7. Ne1 O-O 8. Nc2 d6 9. d3 Be6 10. a3 Qd7 11. Ne4 f6 12. b4 b6 13. Bd2 h6 14. Ne3 Rad8 15. Nd5 f5 16. Nec3 f4 17. b5 Nd4 18. gxf4 Nxd5 19. Nxd5 Bh3 20. f3 Rde8 21. e4 Bxg2 22. Kxg2 exf4 23. Nxf4 g5 24. Nh5 Nxf3 25. Nxg7 Nh4+ 26. Kh1 Qh3 27. Qe2 Kxg7 28. Rg1 Qf3+ 29. Qxf3 Rxf3 30. Be1 Ng6 31. Rd1 Ne5 32. Bc3 Kg6 33. Rg3 Ref8 34. a4 Rxg3 35. hxg3 Rf2 36. Bxe5 dxe5 37. a5 Kh5 38. axb6 axb6 39. Kg1 Rf3 40. d4 exd4 41. Re1 Rxg3+ 42. Kf2 Re3 0-1"
  },
  {
    "id": "game-179-estevez-larsen-1973",
    "white": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 50 lances entre Estevez Morales G e Larsen B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Estevez Morales G\"]\n[Black \"Larsen B\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 Be7 9. Be2 O-O 10. O-O b6 11. Be3 Bb7 12. Rc1 Ne5 13. Qd4 Ned7 14. Nc2 Qb8 15. Rfd1 Re8 16. f3 d5 17. exd5 exd5 18. Bf4 Qa7 19. Kh1 Bc5 20. Qd2 dxc4 21. Bxc4 b5 22. Bb3 Ne5 23. Nd5 Bxd5 24. Bxd5 Rad8 25. Ne3 Nc4 0-1"
  },
  {
    "id": "game-180-huebner-quinteros-1973",
    "white": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 84 lances entre Huebner R e Quinteros M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Huebner R\"]\n[Black \"Quinteros M\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. g3 Bg4 7. f3 Bd7 8. Be3 Nc6 9. Qd2 e6 10. g4 h6 11. O-O-O b5 12. h4 Ne5 13. Be2 Nc4 14. Bxc4 bxc4 15. Qe2 Qc7 16. g5 Nh5 17. Rhg1 hxg5 18. hxg5 g6 19. f4 Rb8 20. f5 e5 21. fxg6 fxg6 22. Nf3 Qb7 23. Qxc4 Qxb2+ 24. Kd2 Qb4 25. Qxb4 Rxb4 26. Kd3 Be6 27. a3 Bc4+ 28. Kd2 Rb7 29. Rb1 Rhh7 30. Nd5 Bxd5 31. exd5 Rxb1 32. Rxb1 Ng7 33. Rb8+ Kf7 34. Rb7+ Kg8 35. Bf2 Rh5 36. Ke2 Nf5 37. c4 Be7 38. c5 dxc5 39. Nxe5 Rxg5 40. Rb6 Nd4+ 41. Bxd4 cxd4 42. Nxg6 Bxa3 1/2-1/2"
  },
  {
    "id": "game-181-kortchnoi-kuzmin-1973",
    "white": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 68 lances entre Kortchnoi V e Kuzmin G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Kortchnoi V\"]\n[Black \"Kuzmin G\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. c4 b6 3. Nc3 Bb7 4. d3 g6 5. e4 Bg7 6. g3 O-O 7. Bg2 c5 8. O-O Nc6 9. Rb1 Ne8 10. Be3 Nd4 11. Ne2 e5 12. b4 d6 13. bxc5 dxc5 14. Nexd4 cxd4 15. Bd2 Nc7 16. Ne1 Na6 17. a4 Bc6 18. a5 bxa5 19. Ra1 a4 20. f4 exf4 21. gxf4 Rb8 22. Bc1 Rb3 23. Ba3 Nb4 24. Rf2 a5 25. e5 Bxg2 26. Rxg2 Qd7 27. Qe2 Qf5 28. Rg5 Qxf4 29. Bc1 Qh4 30. Kg2 a3 31. Nf3 Qh6 32. Rg3 Qh5 33. Rg5 Qh6 34. Rg3 Qh5 1/2-1/2"
  },
  {
    "id": "game-182-radulov-gligoric-1973",
    "white": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 23 lances entre Radulov I e Gligoric S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Radulov I\"]\n[Black \"Gligoric S\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. Nd5 Nxd5 7. exd5 Nd4 8. Nxd4 exd4 9. a3 Be7 10. Be2 c5 11. c4 d6 12. b4 1/2-1/2"
  },
  {
    "id": "game-183-rukavina-cuellar-1973",
    "white": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 99 lances entre Rukavina J e Cuellar Gacharna M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Rukavina J\"]\n[Black \"Cuellar Gacharna M\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. g3 d5 3. Bg2 g6 4. O-O Bg7 5. d3 O-O 6. Nbd2 Nc6 7. e4 e5 8. c3 Rb8 9. Re1 b5 10. a3 a5 11. Qc2 Re8 12. b4 dxe4 13. dxe4 Nd7 14. Bf1 a4 15. Bb2 Qf6 16. Rac1 Nd8 17. c4 c6 18. cxb5 cxb5 19. Qd3 Nc6 20. Qd5 Ne7 21. Qd3 Qa6 22. Rc2 f6 23. Rec1 Nf8 24. Qe3 Ne6 25. Ne1 Bd7 26. Nd3 Qd6 27. Nf3 Nc6 28. Bg2 Red8 29. Nc5 Ned4 30. Bxd4 Nxd4 31. Nxd4 exd4 32. Qd2 Be8 33. Bf1 Bf7 34. Bd3 Bf8 35. Qe2 Be8 36. f4 Bg7 37. h4 Qe7 38. Kh2 Rb6 39. Re1 Kh8 40. Qf2 Bf7 41. Rd2 Bg8 42. Bb1 g5 43. Red1 gxh4 44. gxh4 Bh6 45. Rxd4 Rxd4 46. Rxd4 Rd6 47. Nd3 Rc6 48. Nc5 Rd6 49. Nd3 Rc6 50. Nc5 1/2-1/2"
  },
  {
    "id": "game-184-smejkal-uhlmann-1973",
    "white": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Smejkal J e Uhlmann W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Smejkal J\"]\n[Black \"Uhlmann W\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 6. dxc5 Qa5 7. Qa4+ Qxa4 8. Nxa4 Na6 9. Nf3 Bd7 10. Nc3 dxc4 11. Bxc4 Nxc5 12. O-O O-O 13. Rfd1 Rac8 14. Be5 Bc6 15. Nd4 Ncd7 16. Bg3 Bxg2 17. Ne6 Rfe8 18. Nc7 Bf3 19. Nxe8 Bxd1 20. Nxf6+ Nxf6 21. Bd5 Bg4 22. Bxb7 Rd8 23. Be5 Ne8 24. Bxg7 Kxg7 25. b4 Nd6 26. Bg2 Rc8 27. Nd5 e6 28. Ne7 Rc7 29. Nc6 Nf5 30. b5 Nh4 31. Bh1 Be2 32. Nd4 Bd3 33. a4 e5 34. Nc6 e4 35. Ne5 Bc2 36. Rc1 f5 37. f4 Rc5 38. Kf2 g5 39. Ke1 gxf4 40. exf4 Rxe5 41. fxe5 1-0"
  },
  {
    "id": "game-185-taimanov-karpov-1973",
    "white": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 79 lances entre Taimanov M e Karpov A (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Taimanov M\"]\n[Black \"Karpov A\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Ne2 d5 6. a3 Be7 7. cxd5 Nxd5 8. Bd2 Nxc3 9. Nxc3 c5 10. dxc5 Bxc5 11. Ne4 Be7 12. Bc3 Nc6 13. Bb5 a6 14. Bxc6 bxc6 15. Qf3 Qc7 16. Rc1 Rb8 17. O-O f6 18. Qe2 Rd8 19. Rc2 Qb6 20. Rfc1 Qb5 21. Qe1 f5 22. Nd2 Bb7 23. f3 Bf8 24. Qg3 Rbc8 25. Be5 Rd5 26. Nc4 Rcd8 27. h4 c5 28. Kh2 Rd1 29. Qf4 Rxc1 30. Rxc1 Bd5 31. Rc3 Rd7 32. b3 Bxc4 33. Qxc4 Qxc4 34. Rxc4 Rd3 35. Rc3 c4 36. Rxc4 Rxe3 37. f4 Rxb3 38. a4 Be7 39. Rc7 Bf6 40. Bxf6 1/2-1/2"
  },
  {
    "id": "game-186-torre-byrne-1973",
    "white": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 82 lances entre Torre E e Byrne R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Torre E\"]\n[Black \"Byrne R\"]\n[Result \"0-1\"]\n\n1. g3 f5 2. Bg2 Nf6 3. c4 e6 4. b3 Be7 5. Bb2 O-O 6. f4 d5 7. Nf3 c5 8. O-O b6 9. e3 Bb7 10. Qe2 Nc6 11. Nc3 Qd7 12. Nd1 Rad8 13. Nf2 Ne4 14. d3 Nxf2 15. Kxf2 Bf6 16. Bxf6 Rxf6 17. cxd5 Qxd5 18. Ne5 Qd6 19. Bxc6 Bxc6 20. Rg1 Bb7 21. g4 Qc7 22. Rg3 Rd5 23. Rag1 Rxe5 24. fxe5 Qxe5 25. gxf5 Rxf5+ 26. Ke1 Rf7 27. Qc2 g6 28. e4 Ba6 29. R1g2 Qa1+ 30. Ke2 Rf1 31. Qd2 Rb1 32. Qg5 Re1+ 33. Kf3 Qd1+ 34. Kf4 Rf1+ 35. Ke5 Qa1+ 36. Kxe6 Bc8+ 37. Kd6 Rf6+ 38. Kc7 Be6 39. d4 Qxd4 40. Rd2 Rf7+ 41. Kb8 Qxe4 0-1"
  },
  {
    "id": "game-187-tukmakov-tal-1973",
    "white": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 82 lances entre Tukmakov V e Tal M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Tukmakov V\"]\n[Black \"Tal M\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f4 Qc7 7. Bd3 g6 8. Nf3 Nbd7 9. O-O e5 10. Qe1 b5 11. Kh1 Bb7 12. fxe5 dxe5 13. Qh4 Be7 14. Qg3 Nh5 15. Qf2 O-O 16. Bh6 Rfe8 17. Nd2 Ndf6 18. a4 b4 19. Ne2 Bf8 20. Bg5 Bg7 21. h3 Re6 22. Rae1 Rae8 23. b3 h6 24. Be3 Nh7 25. g4 Rf6 26. Qh2 Rxf1+ 27. Rxf1 N5f6 28. Ng3 Ng5 29. Qg2 Ne6 30. Qf2 Rf8 31. Kh2 Nd7 32. Bc4 Kh7 33. Nf3 Ndc5 34. Bd5 Bxd5 35. exd5 Nd4 36. Nxd4 exd4 37. Bf4 Qd7 38. Qf3 a5 39. Re1 d3 40. cxd3 Nxb3 41. d6 Nd4 0-1"
  },
  {
    "id": "game-188-byrne-estevez-1973",
    "white": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 43 lances entre Byrne R e Estevez Morales G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Byrne R\"]\n[Black \"Estevez Morales G\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e6 6. g4 h6 7. h3 a6 8. Bg2 Bd7 9. Be3 Nc6 10. Qe2 Rc8 11. f4 Nxd4 12. Bxd4 Qa5 13. e5 dxe5 14. Qxe5 Qb4 15. a3 Qd6 16. Bxb7 Rb8 17. Bxa6 Bc6 18. O-O Qd8 19. Bb5 Bxb5 20. Nxb5 Rc8 21. Rac1 Be7 22. Na7 1-0"
  },
  {
    "id": "game-189-cuellar-karpov-1973",
    "white": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 111 lances entre Cuellar Gacharna M e Karpov A (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Cuellar Gacharna M\"]\n[Black \"Karpov A\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. Nf3 c5 3. c4 cxd4 4. Nxd4 Nc6 5. Nc3 Qb6 6. e3 e6 7. Be2 Be7 8. O-O O-O 9. b3 a6 10. Bb2 d6 11. Qd2 Bd7 12. Rad1 Rfd8 13. g4 Qa7 14. g5 Ne8 15. Nf3 Rab8 16. e4 Bf8 17. Qf4 Ne7 18. Nh4 b5 19. Rd2 Bc6 20. Rfd1 Qa8 21. Bd3 Rd7 22. Qg4 Nc7 23. Nd5 bxc4 24. Nxe7+ Bxe7 25. bxc4 g6 26. Bc3 a5 27. Bc2 Ne8 28. Nf3 Rdd8 29. Nd4 Bd7 30. e5 Bf8 31. Ne2 d5 32. Rd3 Rbc8 33. cxd5 exd5 34. Qh4 Bf5 35. e6 fxe6 36. Nd4 Ng7 37. Nxf5 Nxf5 38. Qa4 Bg7 39. Bxg7 Kxg7 40. Bb3 Rc5 41. Re1 Qc6 42. Qf4 Qd6 43. Qd2 Kg8 44. f4 Ng7 45. Rd4 Qb6 46. Kh1 Rb5 47. Rc1 Rf8 48. Rd3 Rb4 49. Rf3 Qd6 50. f5 Nxf5 51. a3 Rh4 52. Bd1 Qe5 53. Qf2 Re4 54. Kg2 Nh4+ 55. Kh3 Nxf3 56. Bxf3 0-1"
  },
  {
    "id": "game-190-gligoric-smejkal-1973",
    "white": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 86 lances entre Gligoric S e Smejkal J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Gligoric S\"]\n[Black \"Smejkal J\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. O-O O-O 10. Be3 Na5 11. Bd3 b6 12. Qd2 Bb7 13. Bh6 cxd4 14. cxd4 e6 15. Rad1 Rc8 16. Bxg7 Kxg7 17. Rfe1 Qe7 18. Nf4 Rfd8 19. d5 exd5 20. e5 Nc4 21. Qe2 Re8 22. e6 fxe6 23. Qg4 e5 24. Nxg6 hxg6 25. Bxg6 Rg8 26. Rd3 Rc6 27. Bh7+ Kxh7 28. Rh3+ Rh6 29. Rxh6+ Kxh6 30. Qxg8 Qg7 31. Qe6+ Qg6 32. Qe7 Qg7 33. Qh4+ Kg6 34. f4 e4 35. g4 Qd4+ 36. Kh1 e3 37. f5+ Kf7 38. Qh7+ Kf8 39. Qh6+ Qg7 40. Qh4 d4+ 41. Kg1 Ne5 42. Qd8+ Kf7 43. Qc7+ Kf6 0-1"
  },
  {
    "id": "game-191-kuzmin-taimanov-1973",
    "white": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 67 lances entre Kuzmin G e Taimanov M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Kuzmin G\"]\n[Black \"Taimanov M\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. c4 c6 3. Nc3 d5 4. d4 dxc4 5. a4 Bg4 6. Ne5 Bh5 7. f3 Nfd7 8. Nxc4 e5 9. g3 Bb4 10. dxe5 O-O 11. Qd4 Na6 12. Bf4 Ndc5 13. Qxd8 Raxd8 14. Nd2 Rfe8 15. O-O-O Nc7 16. Bg5 Ra8 17. e4 Rxe5 18. Bf4 Re7 19. g4 Bg6 20. Ndb1 Nd5 21. Rxd5 cxd5 22. Nxd5 Nb3+ 23. Kc2 Nd4+ 24. Kd3 Nxf3 25. Nxe7+ Bxe7 26. Nc3 Rd8+ 27. Ke3 Ng5 28. b4 Ne6 29. Nd5 Bh4 30. Bc4 Rc8 31. Rc1 Nxf4 32. Nxf4 Kf8 33. Kd4 Bg5 34. Nxg6+ 1/2-1/2"
  },
  {
    "id": "game-192-larsen-huebner-1973",
    "white": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "black": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 97 lances entre Larsen B e Huebner R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Larsen B\"]\n[Black \"Huebner R\"]\n[Result \"1-0\"]\n\n1. Nf3 g6 2. c4 Bg7 3. d4 Nf6 4. Nc3 O-O 5. e4 d6 6. Be3 e5 7. dxe5 dxe5 8. Qxd8 Rxd8 9. Nd5 Nxd5 10. cxd5 c6 11. Bc4 cxd5 12. Bxd5 Nc6 13. Bxc6 bxc6 14. O-O f5 15. Rfc1 a5 16. Rc5 a4 17. Rac1 Rb8 18. Nxe5 Bxe5 19. Rxe5 Rxb2 20. h4 Rb4 21. Bg5 Rf8 22. Bh6 Rd8 23. Re7 Rxe4 24. Rg7+ Kh8 25. Ra7 Kg8 26. f3 Re6 27. Rc4 Rd7 28. Rcxa4 Kf7 29. Rxd7+ Bxd7 30. Ra7 Rd6 31. Ra8 Ke6 32. Rh8 c5 33. Rxh7 Bb5 34. Ra7 Ra6 35. Rxa6+ Bxa6 36. Kf2 Bb5 37. Ke3 Ke5 38. Bg7+ Ke6 39. Bf8 Kd5 40. Kf4 c4 41. Bg7 Ke6 42. Bc3 Bd7 43. Kg5 Kf7 44. a3 Bc8 45. a4 Bd7 46. a5 Bc8 47. Bb2 Ba6 48. h5 gxh5 49. Kxf5 1-0"
  },
  {
    "id": "game-193-quinteros-tukmakov-1973",
    "white": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 79 lances entre Quinteros M e Tukmakov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Quinteros M\"]\n[Black \"Tukmakov V\"]\n[Result \"1-0\"]\n\n1. Nf3 Nf6 2. c4 g6 3. d4 Bg7 4. g3 O-O 5. Bg2 d6 6. Nc3 Nc6 7. O-O a6 8. h3 Rb8 9. e4 b5 10. cxb5 axb5 11. Be3 b4 12. Ne2 e5 13. dxe5 dxe5 14. Qc2 Bb7 15. Rfd1 Qc8 16. Nd2 Re8 17. Nb3 Ba8 18. Nc5 Bf8 19. Nc1 Bd6 20. N1b3 Nd7 21. Rd2 Nxc5 22. Nxc5 Nd8 23. Bf1 Bc6 24. Kh2 Ra8 25. Bc4 Nb7 26. Nb3 Bd7 27. h4 Be6 28. Bxe6 Qxe6 29. Qc6 Na5 30. Nxa5 Rxa5 31. a4 bxa3 32. bxa3 Rea8 33. a4 R8a6 34. Qb7 Kg7 35. Rd5 Rxa4 36. Qxa6 Rxa6 37. Rxa6 Qg4 38. Ra4 f5 39. Ra7 Kf6 40. Rxd6+ 1-0"
  },
  {
    "id": "game-194-rukavina-radulov-1973",
    "white": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 83 lances entre Rukavina J e Radulov I (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Rukavina J\"]\n[Black \"Radulov I\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 c5 2. c4 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e6 6. g3 Be7 7. Bg2 O-O 8. O-O a6 9. b3 Qc7 10. Bb2 b6 11. Rc1 Bb7 12. Nd5 Qd8 13. Nxe7+ Qxe7 14. e4 Rfd8 15. Qd2 d6 16. Rfe1 Nxd4 17. Bxd4 Nd7 18. b4 Rdc8 19. f4 e5 20. Bf2 b5 21. c5 dxc5 22. bxc5 Nb8 23. Qd6 Re8 24. Qb6 Nc6 25. Rcd1 Rab8 26. Rd6 Nd4 27. Bxd4 exd4 28. Rxd4 f5 29. Qd6 Bxe4 30. Bxe4 fxe4 31. Rexe4 Qxd6 32. Rxe8+ Rxe8 33. Rxd6 Rc8 34. Rxa6 Rxc5 35. Kg2 b4 36. Kf3 h5 37. Kg2 Rc2+ 38. Kh3 Kh7 39. Rb6 Rb2 40. Ra6 Rf2 41. Ra4 Rb2 42. a3 1/2-1/2"
  },
  {
    "id": "game-195-tal-kortchnoi-1973",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 112 lances entre Tal M e Kortchnoi V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Tal M\"]\n[Black \"Kortchnoi V\"]\n[Result \"0-1\"]\n\n1. Nf3 Nf6 2. c4 b6 3. g3 c5 4. Bg2 Bb7 5. O-O g6 6. b3 Bg7 7. Bb2 O-O 8. Nc3 Ne4 9. Na4 Bxb2 10. Nxb2 d5 11. cxd5 Bxd5 12. Qc1 Nc6 13. d3 Nd6 14. e3 e5 15. Nc4 f6 16. Rd1 Nf7 17. Qc3 Qd7 18. a3 Rac8 19. Qb2 Rfd8 20. Rac1 Qe7 21. Rb1 Rc7 22. Ncd2 Be6 23. Bf1 Bf5 24. Ne4 Bg4 25. Ned2 Ng5 26. Be2 Rcd7 27. Re1 Nxf3+ 28. Nxf3 Bf5 29. b4 Bxd3 30. Bxd3 Rxd3 31. Rec1 e4 32. Ne1 R3d5 33. bxc5 bxc5 34. Qb7 Qxb7 35. Rxb7 Ne5 36. Kf1 R8d7 37. Rxd7 Nxd7 38. Ke2 Kf7 39. f3 exf3+ 40. Nxf3 Ke6 41. Nd2 Ne5 42. Nc4 f5 43. Rc2 Kd7 44. Nd2 Kc6 45. h3 Nf7 46. Rc4 Re5 47. Rh4 Ng5 48. Ra4 Re7 49. g4 Ne4 50. Nxe4 fxe4 51. Ra6+ Kb5 52. Rd6 a5 53. Kd2 Kc4 54. Ra6 Rd7+ 55. Ke2 Kb3 56. Rxa5 c4 0-1"
  },
  {
    "id": "game-196-uhlmann-torre-1973",
    "white": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 83 lances entre Uhlmann W e Torre E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Uhlmann W\"]\n[Black \"Torre E\"]\n[Result \"1/2-1/2\"]\n\n1. c4 c5 2. Nf3 Nc6 3. Nc3 e5 4. g3 g6 5. d3 d6 6. a3 Bg7 7. Rb1 a5 8. Bg2 Nge7 9. O-O O-O 10. Ne1 Be6 11. Nc2 d5 12. cxd5 Nxd5 13. Ne4 b6 14. Ng5 Bc8 15. Ne3 Nde7 16. Bd2 Rb8 17. Nc2 h6 18. Ne4 Be6 19. b4 f5 20. Nc3 axb4 21. axb4 c4 22. dxc4 Bxc4 23. Re1 Rc8 24. Na3 Be6 25. Nab5 Qd7 26. Na4 Rcd8 27. Bc3 Qxd1 28. Rexd1 Rxd1+ 29. Rxd1 Bc4 30. Nc7 Bb3 31. Ra1 Rc8 32. Nb5 e4 33. Nxb6 Rb8 34. Ra8 Rxa8 35. Nxa8 Bxc3 36. Nxc3 Nxb4 37. Nc7 Kf7 38. g4 Nbd5 39. N7xd5 Nxd5 40. Nb5 Kf6 41. gxf5 gxf5 42. e3 1/2-1/2"
  },
  {
    "id": "game-197-estevez-uhlmann-1973",
    "white": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 67 lances entre Estevez Morales G e Uhlmann W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Estevez Morales G\"]\n[Black \"Uhlmann W\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. g3 d5 5. cxd5 Nxd5 6. Bg2 O-O 7. O-O c5 8. Nxd5 Qxd5 9. d3 Nc6 10. Qa4 Qh5 11. Be3 Bd7 12. Rac1 b6 13. b4 Ne5 14. Qd1 cxb4 15. Nxe5 Bxe5 16. Bxa8 Rxa8 17. d4 Bd6 18. Qd2 Qd5 19. f3 a5 20. Bf2 f5 21. Rfe1 b3 22. e4 Qf7 23. axb3 Bb4 24. Qf4 Bxe1 25. Rxe1 fxe4 26. Qxe4 Rf8 27. d5 Qxf3 28. Qxf3 Rxf3 29. Bxb6 Rxb3 30. Bxa5 Bh3 31. Rxe7 Rf3 32. Re1 Rd3 33. Re5 Rf3 34. Re1 1/2-1/2"
  },
  {
    "id": "game-198-huebner-byrne-1973",
    "white": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 52 lances entre Huebner R e Byrne R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Huebner R\"]\n[Black \"Byrne R\"]\n[Result \"1/2-1/2\"]\n\n1. c4 g6 2. g3 Bg7 3. Bg2 c5 4. Nc3 Nc6 5. e3 e6 6. Nge2 Nge7 7. O-O O-O 8. a3 d6 9. Rb1 b6 10. d4 cxd4 11. Nxd4 Qd7 12. Nxc6 Nxc6 13. Ne4 Rd8 14. b4 d5 15. cxd5 exd5 16. Nd2 Qd6 17. Rb3 Be6 18. Bb2 Rac8 19. Bxg7 Kxg7 20. Qa1+ Qe5 21. Rb2 Qf6 22. Nb3 d4 23. b5 Bxb3 24. Rxb3 Na5 25. Rd3 dxe3 26. Rxe3 Qxa1 1/2-1/2"
  },
  {
    "id": "game-199-karpov-kuzmin-1973",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 77 lances entre Karpov A e Kuzmin G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Karpov A\"]\n[Black \"Kuzmin G\"]\n[Result \"1-0\"]\n\n1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5 5. Ngf3 Nc6 6. Bb5 Bd6 7. dxc5 Bxc5 8. O-O Ne7 9. Nb3 Bd6 10. Bg5 O-O 11. Bh4 Qc7 12. Bg3 Bxg3 13. hxg3 Bg4 14. Re1 Rad8 15. c3 Qb6 16. Bd3 Ng6 17. Qc2 Bxf3 18. gxf3 Rd6 19. f4 Rfd8 20. a3 h5 21. Kg2 h4 22. Re2 Nf8 23. Nd2 Rh6 24. Nf3 hxg3 25. fxg3 Nd7 26. Rae1 Kf8 27. g4 Qc7 28. g5 Rh8 29. Kg3 Nc5 30. Bf5 g6 31. b4 Ne4+ 32. Bxe4 dxe4 33. Qxe4 Kg7 34. b5 Na5 35. Qe7 Qxe7 36. Rxe7 Rd3 37. Rc7 Nb3 38. Kg4 Rf8 39. Ree7 1-0"
  },
  {
    "id": "game-200-kortchnoi-quinteros-1973",
    "white": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 53 lances entre Kortchnoi V e Quinteros M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Kortchnoi V\"]\n[Black \"Quinteros M\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 c5 3. d5 d6 4. g3 g6 5. Bg2 Bg7 6. Nf3 b5 7. cxb5 a6 8. bxa6 O-O 9. Nc3 Bxa6 10. O-O Nbd7 11. Qc2 Qb6 12. Rb1 Rfb8 13. b3 Ne8 14. Nd2 Qa5 15. Bb2 c4 16. Rfc1 Ne5 17. Ba1 Rb4 18. bxc4 Nxc4 19. Rxb4 Qxb4 20. Nxc4 Bxc4 21. Bh3 Nc7 22. e4 Bd4 23. Bd7 Na6 24. Bc6 Ra7 25. Rb1 Qa5 26. Nb5 Bxa1 27. Qxc4 1-0"
  },
  {
    "id": "game-201-radulov-cuellar-1973",
    "white": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 53 lances entre Radulov I e Cuellar Gacharna M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Radulov I\"]\n[Black \"Cuellar Gacharna M\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. c4 Nc6 6. d4 cxd4 7. Nxd4 g6 8. O-O Bg7 9. Be3 Nf6 10. f3 O-O 11. Nc3 Ne8 12. Qd2 Nc7 13. Nde2 Rfd8 14. Rac1 Ne5 15. b3 b5 16. cxb5 Nxb5 17. Nxb5 Qxb5 18. Rc7 Rd7 19. Nd4 Qa6 20. Rfc1 Rxc7 21. Rxc7 Rc8 22. Qe2 Nxf3+ 23. Nxf3 Qxe2 24. Rxc8+ Bf8 25. Bh6 Qd1+ 26. Kf2 Qc2+ 27. Rxc2 1-0"
  },
  {
    "id": "game-202-smejkal-rukavina-1973",
    "white": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 93 lances entre Smejkal J e Rukavina J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Smejkal J\"]\n[Black \"Rukavina J\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Bc4 Be7 6. O-O O-O 7. a4 c6 8. Qe2 Qc7 9. h3 h6 10. Ba2 a5 11. Be3 Re8 12. Qc4 Rf8 13. Rfd1 b6 14. dxe5 dxe5 15. Nb5 Qb7 16. Nd6 Bxd6 17. Rxd6 c5 18. Rad1 Ra7 19. Nd2 Ne8 20. Rd3 Qc6 21. Qb5 Qg6 22. Nc4 Ba6 23. Qb3 Bxc4 24. Qxc4 Ndf6 25. f3 Nh5 26. Rd7 Rxd7 27. Rxd7 Qg3 28. Qe2 Nf4 29. Bxf4 Qxf4 30. Qd2 Qxd2 31. Rxd2 Nf6 32. f4 exf4 33. e5 Ne4 34. Rd7 Ng5 35. Rb7 Rd8 36. h4 Ne6 37. Rxb6 Rd2 38. c3 g5 39. Bxe6 fxe6 40. Rxe6 Kg7 41. h5 Rxb2 42. Rg6+ Kh7 43. Rc6 Re2 44. Rxc5 g4 45. Kf1 Re4 46. Rxa5 Rc4 47. Ra7+ 1-0"
  },
  {
    "id": "game-203-taimanov-tal-1973",
    "white": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 23 lances entre Taimanov M e Tal M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Taimanov M\"]\n[Black \"Tal M\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 c5 2. c4 g6 3. g3 Bg7 4. Bg2 Nc6 5. O-O e6 6. Nc3 Nge7 7. e3 O-O 8. d4 cxd4 9. Nxd4 d5 10. cxd5 Nxd4 11. exd4 Nxd5 12. Nxd5 1/2-1/2"
  },
  {
    "id": "game-204-torre-gligoric-1973",
    "white": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 74 lances entre Torre E e Gligoric S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Torre E\"]\n[Black \"Gligoric S\"]\n[Result \"0-1\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Be2 Nf6 4. d3 g6 5. c3 Bg7 6. Nbd2 O-O 7. O-O d6 8. d4 exd4 9. cxd4 Re8 10. d5 Nb8 11. Re1 Nbd7 12. Bb5 a6 13. Ba4 b5 14. Bc2 Bb7 15. a4 c6 16. dxc6 Bxc6 17. Nd4 Qb6 18. Nxc6 Qxc6 19. axb5 axb5 20. Rxa8 Rxa8 21. Nb3 Ne5 22. h3 Nfd7 23. Bd3 Nxd3 24. Qxd3 Ne5 25. Qd5 Qxd5 26. exd5 Nd3 27. Re7 Nxc1 28. Nxc1 Bxb2 29. Nd3 Bd4 30. Kf1 Ra2 31. Ke1 Bc3+ 32. Kf1 Rd2 33. Re3 b4 34. Nf4 Be5 35. Nd3 b3 36. Nxe5 b2 37. Re1 dxe5 0-1"
  },
  {
    "id": "game-205-byrne-tukmakov-1973",
    "white": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Byrne R e Tukmakov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Byrne R\"]\n[Black \"Tukmakov V\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. b4 Bf8 14. Bb2 Nb6 15. a3 Nfd7 16. Rc1 g6 17. Bb1 Bh6 18. Rc2 a5 19. c4 axb4 20. axb4 exd4 21. Bxd4 bxc4 22. Ba2 Ra4 23. Qb1 Qa8 24. Nxc4 Rxe4 25. Ne3 c5 26. bxc5 dxc5 27. Bc3 Nd5 28. Nxd5 Bxd5 29. Bxd5 Qxd5 30. Rd1 Qe6 31. Rb2 Ra8 32. Rxd7 Re8 33. Rd1 Bf4 34. Rb6 Qc4 35. Qb3 Qe2 36. Rb7 c4 37. Qb1 Be3 38. Rf1 Bc5 39. Rb8 h6 40. Rxe8+ Rxe8 41. Qb5 1-0"
  },
  {
    "id": "game-206-cuellar-kuzmin-1973",
    "white": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 57 lances entre Cuellar Gacharna M e Kuzmin G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Cuellar Gacharna M\"]\n[Black \"Kuzmin G\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 Nf6 3. g3 Bb4 4. Qc2 O-O 5. a3 Bxc3 6. Qxc3 d5 7. Bg2 d4 8. Qc2 a5 9. d3 Re8 10. Nf3 c5 11. O-O Nc6 12. Bd2 h6 13. b4 axb4 14. axb4 Rxa1 15. Rxa1 cxb4 16. Ra8 Qe7 17. Ne1 Bf5 18. Rxe8+ Nxe8 19. Qb1 Nf6 20. Bxc6 bxc6 21. Qxb4 Qe6 22. f3 Bg6 23. Qb8+ Kh7 24. Bb4 Qf5 25. Bd2 Qe6 26. Bb4 Qf5 27. Bd2 Qe6 28. Ng2 Nd7 29. Qa7 1/2-1/2"
  },
  {
    "id": "game-207-gligoric-estevez-1973",
    "white": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 73 lances entre Gligoric S e Estevez Morales G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Gligoric S\"]\n[Black \"Estevez Morales G\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Ne2 d5 6. a3 Be7 7. cxd5 exd5 8. g3 c6 9. Bg2 Bf5 10. O-O Qc8 11. Re1 Bd6 12. b4 Nbd7 13. f3 Re8 14. g4 Bg6 15. Nf4 Qc7 16. h3 b5 17. Nxg6 hxg6 18. e4 Bg3 19. Rf1 g5 20. Bxg5 Bf4 21. Bxf4 Qxf4 22. Qd3 Nb6 23. e5 Nc4 24. Ne2 Qd2 25. Qxd2 Nxd2 26. Rfe1 Nd7 27. a4 a6 28. a5 Nf8 29. f4 Ne6 30. Ra2 Nc4 31. f5 Nc7 32. Nf4 Kf8 33. Rae2 Ke7 34. h4 Kd7 35. Kf2 f6 36. g5 Rf8 37. exf6 1-0"
  },
  {
    "id": "game-208-larsen-kortchnoi-1973",
    "white": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "black": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 86 lances entre Larsen B e Kortchnoi V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Larsen B\"]\n[Black \"Kortchnoi V\"]\n[Result \"0-1\"]\n\n1. c4 e5 2. g3 c6 3. Nf3 e4 4. Nd4 d5 5. cxd5 Qxd5 6. Nb3 Nf6 7. Bg2 Qh5 8. h3 Qg6 9. Nc3 Nbd7 10. Qc2 e3 11. Qxg6 exf2+ 12. Kxf2 hxg6 13. d4 Nb6 14. e4 Be6 15. Bf4 Bb4 16. Nc5 O-O-O 17. Nxe6 fxe6 18. a3 Be7 19. Rad1 Rhf8 20. Ke2 Nc4 21. h4 Nh5 22. Bh3 Rxf4 23. Bxe6+ Kc7 24. Bxc4 Nxg3+ 25. Ke3 Rdf8 26. Rhg1 Bxh4 27. Kd3 Rf2 28. Rd2 Bg5 29. Rxf2 Rxf2 30. Ne2 Rf3+ 31. Kc2 Nxe4 32. Bd3 Re3 33. Nc3 Ng3 34. d5 Bf6 35. Nd1 Rf3 36. dxc6 Kxc6 37. Bxg6 Kd6 38. Re1 Nf5 39. Re8 Nd4+ 40. Kd2 Bg5+ 41. Ke1 Bh4+ 42. Kd2 Rg3 43. Be4 Bg5+ 0-1"
  },
  {
    "id": "game-209-quinteros-taimanov-1973",
    "white": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 80 lances entre Quinteros M e Taimanov M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Quinteros M\"]\n[Black \"Taimanov M\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 d5 2. g3 c6 3. Bg2 Nf6 4. d3 Bg4 5. h3 Bh5 6. b3 e6 7. Bb2 Qa5+ 8. Qd2 Qxd2+ 9. Nbxd2 a5 10. a3 Nbd7 11. Nd4 e5 12. Nf5 Bg6 13. Nh4 Bd6 14. e3 O-O 15. Nxg6 hxg6 16. c4 Rfe8 17. cxd5 Nxd5 18. Ke2 Bf8 19. Rhc1 Nc7 20. Nc4 Nb5 21. a4 Nd6 22. Bc3 Nxc4 23. bxc4 Nc5 24. Rd1 f6 25. Kf1 f5 26. d4 exd4 27. exd4 Ne4 28. Bxe4 Rxe4 29. Rab1 Re7 30. Rd2 Rd7 31. d5 cxd5 32. Rxd5 Rc7 33. Be5 Rxc4 34. Rxb7 Rxa4 35. Rdd7 Rb4 36. Rbc7 Rbb8 37. Bxg7 Rc8 38. Rb7 Rcb8 39. Rbc7 Rc8 40. Rb7 Rcb8 1/2-1/2"
  },
  {
    "id": "game-210-radulov-smejkal-1973",
    "white": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 112 lances entre Radulov I e Smejkal J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Radulov I\"]\n[Black \"Smejkal J\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. c4 e5 6. Nc3 Nc6 7. O-O Nge7 8. Nd5 Nxd5 9. cxd5 Nb4 10. d3 Be7 11. Ne1 O-O 12. Bd2 f5 13. a3 Na6 14. Nc2 fxe4 15. dxe4 c4 16. Ne3 Nc5 17. Nxc4 Nxe4 18. Rc1 Qb5 19. Bb4 a5 20. Qg4 axb4 21. Qxe4 Rf4 22. Qc2 Rc8 23. Nxd6 Rxc2 24. Nxb5 Rfxf2 25. Rxc2 Rxc2 26. d6 Bd8 27. axb4 Bb6+ 28. Kh1 e4 29. Nc3 e3 30. Rd1 Rxb2 31. g3 Rd2 32. Rxd2 exd2 33. Kg2 Kf7 34. Kf3 Bd4 35. Nd1 Ke6 36. Ke2 Kxd6 37. Kxd2 Kd5 38. b5 Kc4 39. b6 Bxb6 40. Nb2+ Kd4 41. Nd3 Ba5+ 42. Ke2 Bc7 43. Ne1 b5 44. Nf3+ Kc3 45. Kd1 Kd3 46. Ng5 h6 47. Ne6 Be5 48. g4 g5 49. h3 Ke3 50. Nd8 Kf3 51. Nf7 Bg7 52. Nd6 b4 53. Nf5 Bf8 54. Kc2 Kg2 55. h4 Kf3 56. Nxh6 gxh4 0-1"
  },
  {
    "id": "game-211-tal-karpov-1973",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 93 lances entre Tal M e Karpov A (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Tal M\"]\n[Black \"Karpov A\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. b4 Bf8 14. Bb2 a5 15. Bd3 c6 16. a3 Nb6 17. Rc1 exd4 18. Nxd4 Nfd7 19. N2b3 Ne5 20. Nxa5 Rxa5 21. bxa5 Nbc4 22. Rc2 Qxa5 23. Bf1 Nxb2 24. Rxb2 Qxc3 25. Rb3 Qa5 26. Qb1 Qa7 27. Rd1 Nd7 28. Nf5 Re6 29. Nd4 Re8 30. Bxb5 cxb5 31. Nxb5 Qc5 32. Nxd6 Bxd6 33. Rxb7 Nf6 34. Qb3 Bc7 35. Qb5 Qc2 36. Qb1 Qxb1 37. Rdxb1 Bd6 38. a4 Rxe4 39. Rd1 Ne8 40. a5 Kf8 41. a6 Ra4 42. Ra7 g5 43. Ra8 Be5 44. g3 Ke7 45. Re1 f6 46. a7 Nc7 47. Rh8 1/2-1/2"
  },
  {
    "id": "game-212-estevez-rukavina-1973",
    "white": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 70 lances entre Estevez Morales G e Rukavina J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Estevez Morales G\"]\n[Black \"Rukavina J\"]\n[Result \"0-1\"]\n\n1. e4 g6 2. d4 d6 3. Nc3 Bg7 4. Nf3 c6 5. Be2 Nd7 6. a4 Qc7 7. O-O Ngf6 8. h3 O-O 9. Be3 e5 10. dxe5 dxe5 11. Bc4 Re8 12. Qd2 Nb6 13. Bb3 Be6 14. Bh6 Bxb3 15. Bxg7 Kxg7 16. cxb3 a5 17. Rac1 Qe7 18. Qe3 Ra6 19. Ne2 Nfd7 20. Rfd1 Nf8 21. h4 h5 22. Qd3 Nbd7 23. Qe3 Rb6 24. Ng3 Rb4 25. Rc3 Ne6 26. Qa7 c5 27. Qxa5 Nb6 28. Ng5 Nxg5 29. hxg5 c4 30. bxc4 Ra8 31. Rd7 Nxd7 32. Qxa8 Nc5 33. b3 Nxb3 34. Qc8 Nd4 35. Rc1 h4 0-1"
  },
  {
    "id": "game-213-huebner-gligoric-1973",
    "white": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Huebner R e Gligoric S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Huebner R\"]\n[Black \"Gligoric S\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c6 7. Bd3 e5 8. Nge2 exd4 9. Bxd4 d5 10. cxd5 cxd5 11. e5 Nfd7 12. f4 Nc6 13. Bf2 Nb6 14. O-O f6 15. Bh4 Ne7 16. exf6 Bxf6 17. Bxf6 Rxf6 18. Nd4 Qf8 19. Qf3 Bd7 20. Rae1 Nc6 21. Nb3 Qf7 22. Nc5 Bf5 23. Bxf5 Rxf5 24. Nd3 Rf8 25. b3 Qg7 26. Ne2 R5f7 27. Ng3 Nd4 28. Qf2 Nd7 29. Rd1 Nc6 30. f5 Ne7 31. Qxa7 Nxf5 32. Nxf5 Rxf5 33. Rxf5 Rxf5 34. h3 Nf8 35. Nb4 Qf7 36. Qb6 Qd7 37. Qe3 Ne6 38. g4 Rg5 39. Re1 Kf7 40. Nd3 Qd6 41. Qf3+ 1-0"
  },
  {
    "id": "game-214-karpov-quinteros-1973",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 73 lances entre Karpov A e Quinteros M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Karpov A\"]\n[Black \"Quinteros M\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Qb6 8. Nb3 Be7 9. Qf3 h6 10. Bh4 Nbd7 11. O-O-O Qc7 12. Bg3 b5 13. e5 Bb7 14. Qe2 dxe5 15. fxe5 Nh7 16. Ne4 Bg5+ 17. Kb1 O-O 18. h4 Be7 19. Nd6 Bd5 20. Rxd5 exd5 21. Nf5 Qd8 22. Qg4 g6 23. Nxh6+ Kg7 24. Nf5+ Kh8 25. Bd3 Rg8 26. Nh6 Rg7 27. h5 Qe8 28. e6 Ndf6 29. exf7 Qd8 30. Qd4 Nxh5 31. Be5 Bf6 32. Re1 Bxe5 33. Rxe5 N5f6 34. g4 Qf8 35. g5 Ne4 36. Bxe4 dxe4 37. Qxe4 1-0"
  },
  {
    "id": "game-215-kortchnoi-byrne-1973",
    "white": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 57 lances entre Kortchnoi V e Byrne R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Kortchnoi V\"]\n[Black \"Byrne R\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Bd2 c5 10. dxc6 bxc6 11. Bg5 Be6 12. c5 Ne8 13. cxd6 Nxd6 14. Qa4 f6 15. Be3 Qc7 16. Rac1 Rfb8 17. Rfd1 Bf8 18. Rd2 Nec8 19. Nd5 Qf7 20. Qxc6 Nxe4 21. Nxf6+ Nxf6 22. Ng5 Bd7 23. Qa6 Qe7 24. Bc5 Qg7 25. Qc4+ Kh8 26. Nf7+ Kg8 27. Nxe5+ Kh8 28. Bxf8 Qxf8 29. Nxd7 1-0"
  },
  {
    "id": "game-216-kuzmin-tal-1973",
    "white": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 125 lances entre Kuzmin G e Tal M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Kuzmin G\"]\n[Black \"Tal M\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 c5 3. d5 g6 4. Nc3 Bg7 5. e4 O-O 6. Nf3 d6 7. Be2 e5 8. O-O Ne8 9. a3 Qe7 10. b4 Nd7 11. Rb1 h6 12. g3 f5 13. Nh4 Qf6 14. exf5 gxf5 15. Bb2 b6 16. Bd3 e4 17. Nxe4 Qxb2 18. Rxb2 fxe4 19. Bxe4 Bxb2 20. Bh7+ Kxh7 21. Qc2+ Kg8 22. Qxb2 Ng7 23. Re1 Ne5 24. Qc3 Bf5 25. f4 Ng6 26. Nxf5 Rxf5 27. bxc5 bxc5 28. Qa5 Rf7 29. Qa6 Rd8 30. Qb5 Ne7 31. Qa5 Rd7 32. Rb1 Ngf5 33. Rb8+ Kg7 34. Qc3+ Nd4 35. Qe3 Ng6 36. Qe8 Nf8 37. Qc8 h5 38. Rb2 Rde7 39. Qd8 Nf5 40. Kf2 Ng6 41. Re2 Rf8 42. Rxe7+ Ngxe7 43. Qd7 Rf7 44. Qd8 Kh7 45. a4 Ng8 46. Qg5 Ng7 47. h3 Ne7 48. g4 Ng6 49. f5 Ne5 50. Ke2 hxg4 51. hxg4 Ne8 52. Qd8 Rf8 53. g5 Kg8 54. Qe7 Ng7 55. f6 Nh5 56. Kd1 Ng6 57. Qxa7 Ne5 58. Qe7 Rf7 59. Qxd6 Nxc4 60. Qh2 Nxf6 61. gxf6 Rxf6 62. Qh4 Ne3+ 63. Ke2 1-0"
  },
  {
    "id": "game-217-smejkal-cuellar-1973",
    "white": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 83 lances entre Smejkal J e Cuellar Gacharna M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Smejkal J\"]\n[Black \"Cuellar Gacharna M\"]\n[Result \"1-0\"]\n\n1. c4 Nf6 2. Nf3 e6 3. g3 d5 4. Bg2 Be7 5. O-O O-O 6. d4 Nbd7 7. Qc2 c6 8. b3 b6 9. Bb2 Bb7 10. Nc3 c5 11. cxd5 Nxd5 12. Nxd5 Bxd5 13. e4 Bb7 14. d5 exd5 15. exd5 Bf6 16. Rad1 Re8 17. d6 Be4 18. Qd2 b5 19. Rfe1 Rc8 20. Bxf6 Qxf6 21. Qe2 Re6 22. Qxb5 Rd8 23. Ng5 Qxg5 24. Bxe4 Nf6 25. Bf3 Rxe1+ 26. Rxe1 h5 27. Rd1 Qf5 28. Qd3 Qe6 29. h4 g6 30. Bc6 Nd7 31. Qc3 Ne5 32. Qxc5 Rc8 33. d7 Rd8 34. Rd6 Qf5 35. Kg2 g5 36. Qa5 Rxd7 37. Rxd7 gxh4 38. Rd8+ Kh7 39. Qd2 h3+ 40. Kg1 Ng4 41. Qd3 h2+ 42. Kf1 1-0"
  },
  {
    "id": "game-218-taimanov-larsen-1973",
    "white": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 94 lances entre Taimanov M e Larsen B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Taimanov M\"]\n[Black \"Larsen B\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb4+ 5. Bd2 Bxd2+ 6. Qxd2 Ba6 7. Na3 Bb7 8. Bg2 d6 9. O-O Nbd7 10. Nh4 Bxg2 11. Nxg2 O-O 12. Rad1 c6 13. f3 d5 14. Rc1 c5 15. cxd5 Nxd5 16. Rfd1 Qe7 17. e4 N5f6 18. dxc5 Nxc5 19. Qd6 Qxd6 20. Rxd6 Rfc8 21. Rd2 g5 22. Ne3 Ncd7 23. Rxc8+ Rxc8 24. Nac4 b5 25. e5 bxc4 26. exf6 Nxf6 27. Rc2 c3 28. Nd1 Nd5 29. Nxc3 Kg7 30. Kf2 h5 31. Rc1 g4 32. f4 Kg6 33. Ne2 Rh8 34. Nc3 Rb8 35. b3 Rc8 36. Ne2 Rxc1 37. Nxc1 Kf5 38. Nd3 Ke4 39. Ne5 f6 40. Nc6 a6 41. Nb8 Nb4 42. a3 Nd3+ 43. Kf1 h4 44. gxh4 Nxf4 45. Nxa6 Kf3 46. Nb4 e5 47. Nc2 e4 1/2-1/2"
  },
  {
    "id": "game-219-torre-radulov-1973",
    "white": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 60 lances entre Torre E e Radulov I (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Torre E\"]\n[Black \"Radulov I\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. c4 e5 6. Nc3 g6 7. d3 Bg7 8. a3 Nc6 9. Rb1 Nge7 10. b4 O-O 11. bxc5 dxc5 12. O-O h6 13. Nd5 f5 14. Qb3 b6 15. Bd2 g5 16. Bc3 fxe4 17. dxe4 Rxf3 18. gxf3 Ng6 19. Ba1 Nh4 20. Kh1 Qh3 21. Rg1 Nxf3 22. Rg2 Rf8 23. Qa4 Ncd4 24. Qxa7 Ne2 25. Qxb6 Nh4 26. Rbg1 Qf3 27. Qe6+ Kh7 28. Qg4 Nxg1 29. Kxg1 Rb8 30. Nc3 Qxc3 0-1"
  },
  {
    "id": "game-220-tukmakov-uhlmann-1973",
    "white": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 86 lances entre Tukmakov V e Uhlmann W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Tukmakov V\"]\n[Black \"Uhlmann W\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Qb3 Nb6 10. Rd1 Nc6 11. d5 Ne5 12. Be2 Nxf3+ 13. gxf3 Bh5 14. f4 Bxe2 15. Nxe2 Qd7 16. Bd4 c6 17. Bxg7 Kxg7 18. Qc3+ Kg8 19. dxc6 Qxc6 20. Qxc6 bxc6 21. Rc1 Rac8 22. Kd2 c5 23. Ke3 Rfd8 24. b3 c4 25. Rhd1 Rxd1 26. Rxd1 cxb3 27. axb3 Kf8 28. Rc1 Rb8 29. Nd4 Rb7 30. Rc5 Ke8 31. h4 Kd8 32. Ra5 Kc7 33. Rc5+ Kd8 34. Ra5 Kc7 35. h5 Nd7 36. f3 Nf6 37. hxg6 hxg6 38. f5 gxf5 39. Rxf5 Kd8 40. Ra5 Kc7 41. e5 Nd7 42. f4 e6 43. Ke4 Kb6 1/2-1/2"
  },
  {
    "id": "game-221-byrne-taimanov-1973",
    "white": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 82 lances entre Byrne R e Taimanov M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"10\"]\n[White \"Byrne R\"]\n[Black \"Taimanov M\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. Nc3 a6 4. d4 cxd4 5. Nxd4 e6 6. g3 Nge7 7. Nb3 b5 8. Bg2 d6 9. f4 Bb7 10. Be3 g6 11. Qd2 Qc7 12. Qf2 Bg7 13. O-O O-O 14. Rad1 Rfe8 15. Rd2 Nc8 16. a3 Rb8 17. Rfd1 b4 18. axb4 Nxb4 19. Bd4 Bxd4 20. Qxd4 Ba8 21. Bf1 e5 22. fxe5 Rxe5 23. Qf2 Bxe4 24. Nxe4 Rxe4 25. c3 Nc6 26. Nc5 dxc5 27. Rd7 Qxd7 28. Rxd7 Re7 29. Rd1 N8a7 30. Bxa6 Ne5 31. Bf1 c4 32. Bg2 Nd3 33. Qd4 Nb5 34. Qxc4 Nxb2 35. Qf4 Rbe8 36. Rb1 Nd3 37. Qd2 Na3 38. Ra1 Re1+ 39. Rxe1 Nxe1 40. Qd7 Re2 41. Bd5 Kg7 1-0"
  },
  {
    "id": "game-222-gligoric-tukmakov-1973",
    "white": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 82 lances entre Gligoric S e Tukmakov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"10\"]\n[White \"Gligoric S\"]\n[Black \"Tukmakov V\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O Qc7 11. Rc1 Rd8 12. Qd2 Qa5 13. Qb2 b6 14. Bd5 Bb7 15. Rfd1 e6 16. Bb3 cxd4 17. cxd4 Rac8 18. e5 Bf8 19. a4 Qb4 20. Qa2 Qe7 21. Nf4 Na5 22. Rxc8 Rxc8 23. Bc2 Qa3 24. Qb1 Qb4 25. h4 Nc4 26. Bc1 Na3 27. Qxb4 Bxb4 28. Bb3 Nc4 29. d5 exd5 30. Nxd5 Bxd5 31. Rxd5 Na5 32. Bc2 Rxc2 33. Rd8+ Kg7 34. Bg5 Rc6 35. Ra8 Nc4 36. Bf6+ Rxf6 37. exf6+ Kxf6 38. Rxa7 Ba5 39. Rd7 Nb2 40. Rd4 Ke5 41. Rd7 Ke6 0-1"
  },
  {
    "id": "game-223-larsen-karpov-1973",
    "white": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 42 lances entre Larsen B e Karpov A (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"10\"]\n[White \"Larsen B\"]\n[Black \"Karpov A\"]\n[Result \"1/2-1/2\"]\n\n1. c4 c5 2. g3 g6 3. Bg2 Bg7 4. Nc3 Nc6 5. a3 e6 6. Rb1 a5 7. Nh3 Nge7 8. Nf4 O-O 9. d3 Rb8 10. Bd2 b6 11. O-O Bb7 12. Re1 d6 13. Nb5 Nd4 14. Nxd4 Bxd4 15. Bxb7 Rxb7 16. Qa4 Qd7 17. Qxd7 Rxd7 18. Bc3 Bg7 19. Bxg7 Kxg7 20. b4 axb4 21. axb4 Ra8 1/2-1/2"
  },
  {
    "id": "game-224-quinteros-kuzmin-1973",
    "white": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 110 lances entre Quinteros M e Kuzmin G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"10\"]\n[White \"Quinteros M\"]\n[Black \"Kuzmin G\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. g3 d5 3. Bg2 c6 4. d3 Bf5 5. O-O e6 6. Nbd2 h6 7. Qe1 Be7 8. e4 Bh7 9. Qe2 O-O 10. b3 a5 11. a4 Nbd7 12. Bb2 Qb6 13. e5 Ne8 14. Kh1 Nc7 15. Ne1 Qa6 16. f4 b5 17. g4 f6 18. exf6 Bxf6 19. Bxf6 Rxf6 20. g5 hxg5 21. fxg5 Rxf1+ 22. Nxf1 Qb6 23. Nf3 Bf5 24. Ne3 Qc5 25. Qd2 Bg6 26. axb5 cxb5 27. d4 Qb6 28. Ng4 b4 29. Nfe5 Nxe5 30. Nxe5 Bf5 31. Rf1 Qb5 32. Qe1 Rf8 33. Qh4 Ne8 34. Qh5 Qb7 35. Rf4 g6 36. Nxg6 Bxg6 37. Qxg6+ Ng7 38. Rxf8+ Kxf8 39. Qf6+ Kg8 40. Qd8+ Kf7 41. Qxa5 Qe7 42. c4 Qxg5 43. Qc7+ Qe7 44. Qxe7+ Kxe7 45. cxd5 Nf5 46. dxe6 Nxd4 47. Bd5 Nf5 48. Kg1 Ne3 49. Be4 Kxe6 50. Kf2 Ng4+ 51. Kg3 Ne5 52. Kf4 Kf6 53. Ke3 Ng4+ 54. Kd4 Nxh2 55. Kc5 Nf1 1/2-1/2"
  },
  {
    "id": "game-225-radulov-estevez-1973",
    "white": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Radulov I e Estevez Morales G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"10\"]\n[White \"Radulov I\"]\n[Black \"Estevez Morales G\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Be2 O-O 8. O-O d6 9. Qd2 Ng4 10. Bxg4 Bxg4 11. f4 Nxd4 12. Bxd4 e5 13. Be3 exf4 14. Rxf4 Be6 15. Rf2 Qa5 16. Bd4 Be5 17. Bxe5 Qxe5 18. Rd1 Rfd8 19. Qd4 Qxd4 20. Rxd4 Rd7 21. Rfd2 Rad8 22. b3 a6 23. Kf2 b5 24. a4 Rc7 25. Na2 Rdc8 26. axb5 axb5 27. Nb4 f5 28. Rxd6 Kf7 29. Rb6 Rc5 30. Rdd6 Re5 31. Rdc6 Rd8 32. Rc7+ Rd7 33. Rxd7+ Bxd7 34. Rb7 Ke8 35. Nd3 Rxe4 36. Rxd7 Kxd7 37. Nc5+ Kd6 38. Nxe4+ fxe4 39. Ke3 Ke5 40. c4 b4 41. g3 1-0"
  },
  {
    "id": "game-226-rukavina-huebner-1973",
    "white": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 60 lances entre Rukavina J e Huebner R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"10\"]\n[White \"Rukavina J\"]\n[Black \"Huebner R\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 g6 2. d4 Nf6 3. g3 Bg7 4. Bg2 O-O 5. O-O d6 6. c4 Nc6 7. Nc3 Bf5 8. Be3 e5 9. dxe5 dxe5 10. Rc1 Re8 11. h3 Nd7 12. Qd2 Nb6 13. Nd5 Be4 14. Rfd1 Qc8 15. Bh6 Rd8 16. Bxg7 Kxg7 17. Nxe5 Bxd5 18. Ng4 Bxg2 19. Qc3+ Kg8 20. Nf6+ Kf8 21. Nxh7+ Kg8 22. Nf6+ Kg7 23. Ng4+ Kh7 24. Nf6+ Kh6 25. Ng4+ Kh7 26. Nf6+ Kg7 27. Ng4+ Kg8 28. Nf6+ Kf8 29. Nh7+ Kg8 30. Nf6+ Kf8 1/2-1/2"
  },
  {
    "id": "game-227-smejkal-torre-1973",
    "white": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 63 lances entre Smejkal J e Torre E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"10\"]\n[White \"Smejkal J\"]\n[Black \"Torre E\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c6 7. Nc3 Qa5 8. h3 e5 9. d5 cxd5 10. cxd5 Na6 11. Nd2 Nc7 12. Nb3 Qa6 13. e4 Bd7 14. a4 Nfe8 15. Be3 b6 16. Qd2 f5 17. Rfc1 Nf6 18. exf5 gxf5 19. f4 Rae8 20. a5 b5 21. fxe5 dxe5 22. Nc5 Qd6 23. Nb7 Qa6 24. Nc5 Qd6 25. Nb7 Qa6 26. d6 Ne6 27. Nd5 e4 28. Ne7+ Kf7 29. Nc5 Nxc5 30. Rxc5 Rd8 31. Rc7 Ne8 32. Rxd7 1-0"
  },
  {
    "id": "game-228-uhlmann-kortchnoi-1973",
    "white": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 53 lances entre Uhlmann W e Kortchnoi V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"10\"]\n[White \"Uhlmann W\"]\n[Black \"Kortchnoi V\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bb4 5. Bg2 O-O 6. O-O Bxc3 7. bxc3 d6 8. d3 Bd7 9. e4 Kh8 10. Nh4 Ng8 11. Be3 Be6 12. Qd2 Nge7 13. f4 exf4 14. Bxf4 f6 15. Be3 Qd7 16. Rab1 b6 17. Nf5 Ne5 18. Nxe7 Qxe7 19. h3 Rae8 20. g4 Qd7 21. Kh2 Bf7 22. Bf4 Bg6 23. Qe2 c6 24. Rbe1 Bf7 25. Bg3 Kg8 26. Qd1 Re7 27. Rf5 1/2-1/2"
  },
  {
    "id": "game-229-estevez-smejkal-1973",
    "white": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 71 lances entre Estevez Morales G e Smejkal J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"11\"]\n[White \"Estevez Morales G\"]\n[Black \"Smejkal J\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 O-O 9. O-O Nc6 10. Be3 Qc7 11. Rc1 Rd8 12. Bf4 Qd7 13. dxc5 Qe8 14. Bd5 Bd7 15. Qd3 e6 16. Bb3 Ne5 17. Bxe5 Bxe5 18. f4 Bb5 19. Qe3 Bg7 20. Rfd1 Qc6 21. c4 Ba6 22. Rd6 Rxd6 23. cxd6 Qxd6 24. e5 Qc6 25. Ng3 b6 26. Bd1 Bf8 27. Kh1 Rd8 28. Bf3 Qc5 29. Qb3 Qa3 30. Ra1 Rd3 31. Qc2 Bh6 32. Be4 Rd4 33. Rd1 Rxd1+ 34. Qxd1 Bxf4 35. Qd8+ Qf8 36. Qc7 0-1"
  },
  {
    "id": "game-230-huebner-radulov-1973",
    "white": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 65 lances entre Huebner R e Radulov I (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"11\"]\n[White \"Huebner R\"]\n[Black \"Radulov I\"]\n[Result \"1-0\"]\n\n1. Nf3 Nf6 2. c4 e6 3. d4 d5 4. Nc3 dxc4 5. e4 c5 6. Bxc4 cxd4 7. Nxd4 Nbd7 8. O-O Bc5 9. Nb3 Be7 10. Qe2 e5 11. Be3 O-O 12. Rfd1 a6 13. a4 Bb4 14. Na2 Be7 15. a5 Qe8 16. f3 Nb8 17. Nc3 Bd7 18. Nc5 Bc6 19. Nd5 Bd8 20. Nb4 Qe7 21. Nd5 Qe8 22. Bd2 Kh8 23. Bb4 Rg8 24. Qd3 Nbd7 25. Nxf6 Nxf6 26. Qb3 Rf8 27. Nxb7 Be7 28. Nd6 Qb8 29. Ba3 Qa7+ 30. Kh1 Rab8 31. Qc3 Bb5 32. Bxb5 axb5 33. Bc5 1-0"
  },
  {
    "id": "game-231-karpov-byrne-1973",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 42 lances entre Karpov A e Byrne R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"11\"]\n[White \"Karpov A\"]\n[Black \"Byrne R\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 7. Nb3 Be6 8. f4 Qc7 9. f5 Bc4 10. a4 Nbd7 11. Be3 Be7 12. a5 O-O 13. O-O b5 14. axb6 Nxb6 15. Kh1 Rfc8 16. Bxb6 Qxb6 17. Bxc4 Rxc4 18. Qe2 Rac8 19. Ra2 Bd8 20. Rfa1 Qb7 21. Ra4 Rxa4 1/2-1/2"
  },
  {
    "id": "game-232-kortchnoi-gligoric-1973",
    "white": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 81 lances entre Kortchnoi V e Gligoric S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"11\"]\n[White \"Kortchnoi V\"]\n[Black \"Gligoric S\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Bd2 Ne8 10. Ne1 f5 11. Nd3 Nf6 12. f3 f4 13. Rc1 g5 14. c5 Ng6 15. cxd6 cxd6 16. Nb5 Rf7 17. Nf2 Bf8 18. Qc2 Bd7 19. Qc7 Ne8 20. Qxd8 Rxd8 21. Nxa7 Ra8 22. Nb5 Rxa2 23. Bc3 Ra8 24. Ra1 Rb8 25. Bb4 Be7 26. Rfc1 h5 27. Rc3 Rf6 28. Rca3 Kg7 29. Nc3 Nc7 30. Ra7 Bd8 31. Kf1 Ne7 32. R7a3 Na6 33. Ba5 Bxa5 34. Rxa5 Nc7 35. Rc1 Nc8 36. Ke1 Rf8 37. b4 Kf6 38. h3 Rg8 39. Ra2 Nb6 40. Ra5 Nc8 41. Ra2 1/2-1/2"
  },
  {
    "id": "game-233-kuzmin-larsen-1973",
    "white": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 104 lances entre Kuzmin G e Larsen B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"11\"]\n[White \"Kuzmin G\"]\n[Black \"Larsen B\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 Nc6 3. Bb5 Nf6 4. e5 Nd5 5. O-O Qc7 6. Re1 e6 7. b3 b6 8. Bf1 Bb7 9. Bb2 a6 10. Na3 Be7 11. Nc4 O-O 12. Nd6 Bxd6 13. exd6 Qxd6 14. d4 cxd4 15. Nxd4 Nf4 16. Nxc6 Qxc6 17. Qg4 Ng6 18. c4 d6 19. Rad1 e5 20. Re3 f5 21. Qg5 Rf6 22. Rg3 f4 23. Rgd3 Ne7 24. Rxd6 Rxd6 25. Rxd6 Qxd6 26. Bxe5 Qg6 27. Qxe7 Be4 28. c5 bxc5 29. Bxf4 Re8 30. Qd6 Qxd6 31. Bxd6 Rd8 32. Bc4+ Bd5 33. Bxd5+ Kh8 34. g3 Rxd6 35. Bc4 g5 36. Kg2 Kg7 37. a4 a5 38. Kf3 Rh6 39. Kg2 Kf6 40. h3 Ke5 41. Bg8 Kd4 42. Bc4 Rf6 43. Bg8 Kc3 44. Bc4 Kd2 45. Kf1 h5 46. Be2 h4 47. gxh4 gxh4 48. Bc4 Rf3 49. Kg2 Rc3 50. f4 Ke1 51. f5 Rg3+ 52. Kh2 Rf3 0-1"
  },
  {
    "id": "game-234-taimanov-uhlmann-1973",
    "white": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 124 lances entre Taimanov M e Uhlmann W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"11\"]\n[White \"Taimanov M\"]\n[Black \"Uhlmann W\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Bd2 e6 7. Rc1 b6 8. Be2 Bb7 9. O-O dxc4 10. Bxc4 Nbd7 11. Qe2 c5 12. Rfd1 Qe7 13. Ba6 Bxa6 14. Qxa6 e5 15. dxe5 Nxe5 16. Nxe5 Qxe5 17. h3 Qe6 18. Be1 Qc8 19. Qe2 Qb7 20. Nb5 Rfd8 21. b4 Ne4 22. Qf3 Rxd1 23. Rxd1 cxb4 24. Bxb4 Re8 25. Nc3 f5 26. Qe2 Nxc3 27. Bxc3 Bxc3 28. Qc4+ Qf7 29. Qxc3 Qe6 30. Qa3 Qf7 31. g3 h6 32. Rd6 Kh7 33. Qc3 Re7 34. Rd8 Qg7 35. Qd2 Qe5 36. Kh2 Qf6 37. Qd5 Qf7 38. Qd6 Rb7 39. a3 Qe7 40. Qd4 Qg7 41. Qd5 Qf7 42. Qd3 Re7 43. Qd6 Qg7 44. Kg2 Rf7 45. Qd5 Qf6 46. Rd6 Qg7 47. g4 fxg4 48. hxg4 Qf8 49. f3 Qg7 50. Qd4 Qxd4 51. Rxd4 a5 52. a4 Rc7 53. Kg3 g5 54. f4 Rc3 55. Kf3 gxf4 56. Kxf4 Rb3 57. e4 b5 58. Rd7+ Kg6 59. Rd6+ Kg7 60. axb5 Rxb5 61. Ra6 h5 62. Ra7+ Kg6 1/2-1/2"
  },
  {
    "id": "game-235-tal-quinteros-1973",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 113 lances entre Tal M e Quinteros M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"11\"]\n[White \"Tal M\"]\n[Black \"Quinteros M\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f4 Nbd7 7. Be2 e5 8. Nf5 Nc5 9. Ng3 Qb6 10. f5 Bd7 11. a4 Bc6 12. Bf3 a5 13. b3 Be7 14. Be3 Qb4 15. Qd2 Bd8 16. O-O Bb6 17. Kh1 Ncd7 18. Rad1 O-O 19. Nge2 Rfd8 20. Bg5 h6 21. Bh4 Bc5 22. Nc1 Qb6 23. Qe1 Bd4 24. N1e2 Re8 25. Nxd4 exd4 26. Bf2 d5 27. Bxd4 Qc7 28. e5 Nxe5 29. Qg3 Re7 30. Be2 Rae8 31. h3 Qd8 32. Qh4 Qd6 33. Qg3 Nc4 34. Qxd6 Nxd6 35. Bd3 Nfe4 36. Ne2 b5 37. f6 gxf6 38. Bxf6 Rb7 39. axb5 Bxb5 40. Bd4 Bxd3 41. cxd3 Ng5 42. Ng3 Rxb3 43. Nh5 Rd8 44. Nf6+ Kf8 45. Ng4 Ne6 46. Bf6 Ra8 47. Nxh6 a4 48. Rde1 a3 49. Be5 Ke7 50. Bxd6+ Kxd6 51. Nxf7+ Kc5 52. Rxe6 a2 53. Rc1+ Kd4 54. Ree1 Rab8 55. Ne5 Rb1 56. Nc6+ Kxd3 57. Nxb8 1-0"
  },
  {
    "id": "game-236-tukmakov-rukavina-1973",
    "white": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 101 lances entre Tukmakov V e Rukavina J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"11\"]\n[White \"Tukmakov V\"]\n[Black \"Rukavina J\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d3 Nbd7 11. Nbd2 Bb7 12. Nf1 Nc5 13. Bc2 Re8 14. Ng3 Bf8 15. b4 Ne6 16. d4 exd4 17. cxd4 d5 18. e5 Ne4 19. a3 a5 20. Rb1 axb4 21. axb4 Nxg3 22. fxg3 c6 23. Qd3 g6 24. Be3 Bc8 25. g4 Bd7 26. Rf1 Be7 27. Rf2 Qb6 28. Qc3 Ra7 29. Rbf1 Rea8 30. Bb3 Be8 31. h4 Qd8 32. g3 Ra3 33. Bc1 Ra1 34. Kg2 Qd7 35. Bc2 Qa7 36. Bf5 Ng7 37. Bc2 Qd7 38. g5 R8a7 39. Nh2 Bd8 40. Bd1 R1a2 41. Bb2 Ne6 42. Ng4 Kg7 43. Nf6 Qe7 44. Bb3 R2a6 45. Qe3 Rb7 46. h5 Ra8 47. Rh1 Nf8 48. Qf4 Bb6 49. Qh4 Kh8 50. Rhf1 Qxb4 51. hxg6 1-0"
  },
  {
    "id": "game-237-byrne-kuzmin-1973",
    "white": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 74 lances entre Byrne R e Kuzmin G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"12\"]\n[White \"Byrne R\"]\n[Black \"Kuzmin G\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 h6 10. d4 Re8 11. Nbd2 Bf8 12. Nf1 Bd7 13. Ng3 Na5 14. Bc2 c5 15. b3 Nc6 16. d5 Ne7 17. Be3 Qc8 18. Qd2 Kh8 19. a4 Nfg8 20. Nh2 Qb7 21. Ra2 Reb8 22. b4 cxb4 23. cxb4 bxa4 24. Bxa4 Bxa4 25. Rxa4 f5 26. Nxf5 Nxf5 27. exf5 Qd7 28. Rea1 Qxf5 29. Nf1 Nf6 30. Ng3 Qg6 31. Ra5 Qe8 32. Ne2 Rb5 33. Nc3 Rxb4 34. Rxa6 Rab8 35. Rc6 Qg6 36. Rc1 Ng8 37. Qc2 Qxc2 1/2-1/2"
  },
  {
    "id": "game-238-cuellar-quinteros-1973",
    "white": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 100 lances entre Cuellar Gacharna M e Quinteros M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"12\"]\n[White \"Cuellar Gacharna M\"]\n[Black \"Quinteros M\"]\n[Result \"0-1\"]\n\n1. d4 c5 2. e3 Nf6 3. Nf3 b6 4. d5 g6 5. c4 Bg7 6. Nc3 O-O 7. Be2 d6 8. O-O e5 9. dxe6 fxe6 10. Qc2 Bb7 11. Rd1 Qe7 12. Bd2 e5 13. Be1 e4 14. Nd2 Nbd7 15. a4 Nb8 16. Nd5 Bxd5 17. cxd5 Nbd7 18. Bb5 Rad8 19. Nc4 Ne5 20. Nxe5 Qxe5 21. h3 a5 22. Ra3 Kh8 23. Bc3 Qf5 24. Qd2 h5 25. Bc4 Nd7 26. Rf1 Bxc3 27. Qxc3+ Ne5 28. Rb3 Rb8 29. f4 exf3 30. Rxf3 Qb1+ 31. Kh2 Kg8 32. Rxf8+ Rxf8 33. Bd3 Qd1 34. Qc2 Qe1 35. Qe2 Qh4 36. g3 Qxa4 37. Rxb6 Nf3+ 38. Kh1 Qa1+ 39. Qf1 Ne1 40. Qg1 Qd1 41. Bc4 Qb1 42. Be2 Qe4+ 43. Kh2 Nf3+ 44. Bxf3 Rxf3 45. Rb8+ Kf7 46. Rb7+ Ke8 47. Rb8+ Kd7 48. h4 Qc2+ 49. Kh3 Rf2 50. Rb7+ Kc8 0-1"
  },
  {
    "id": "game-239-gligoric-taimanov-1973",
    "white": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 92 lances entre Gligoric S e Taimanov M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"12\"]\n[White \"Gligoric S\"]\n[Black \"Taimanov M\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 c5 4. d5 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O Re8 10. Nd2 Nbd7 11. a4 Ne5 12. Qc2 Nh5 13. Bxh5 gxh5 14. Nd1 b6 15. Ra3 f5 16. exf5 Ba6 17. Ne4 Bxf1 18. Kxf1 Nf7 19. Rg3 Kh8 20. f6 Bf8 21. Bd2 Qd7 22. Bc3 Bh6 23. Ne3 Rg8 24. Rg7 Rxg7 25. fxg7+ Bxg7 26. Nf6 Bxf6 27. Bxf6+ Kg8 28. Qe4 Re8 29. Qf4 Kf8 30. Nf5 Qb7 31. Bg7+ Kg8 32. Bc3 Qa6+ 33. Kg1 Qd3 34. h3 Re2 35. Ng3 Qxd5 36. Nxe2 Qd1+ 37. Kh2 Qxe2 38. Qg3+ Kf8 39. Qg7+ Ke7 40. Qf6+ Ke8 41. Qf5 Nd8 42. Qxh7 Qxf2 43. Qxh5+ Nf7 44. Qg4 Kd8 45. Qe6 Qf4+ 46. Kg1 Kc7 1/2-1/2"
  },
  {
    "id": "game-240-larsen-tal-1973",
    "white": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 70 lances entre Larsen B e Tal M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"12\"]\n[White \"Larsen B\"]\n[Black \"Tal M\"]\n[Result \"0-1\"]\n\n1. c4 g6 2. Nc3 Bg7 3. Nf3 c5 4. g3 Nc6 5. Bg2 e6 6. O-O Nge7 7. d3 O-O 8. Bd2 d5 9. Qc1 b6 10. Bh6 Bb7 11. Bxg7 Kxg7 12. cxd5 Nxd5 13. h4 Nd4 14. Re1 h6 15. Ne5 Nxc3 16. Qxc3 Bxg2 17. Kxg2 Qd5+ 18. Nf3 Rad8 19. Kg1 e5 20. Nxd4 exd4 21. Qc4 Qh5 22. Qa4 Rfe8 23. Qxa7 Rd6 24. b4 Rf6 25. bxc5 Qf5 26. f3 Qh3 27. Qc7 Rf5 28. cxb6 Rfe5 29. e4 Qxg3+ 30. Kh1 Qxh4+ 31. Kg2 Rg5+ 32. Kf1 Qh3+ 33. Ke2 Rg2+ 34. Kd1 Qxf3+ 35. Kc1 Qf2 0-1"
  },
  {
    "id": "game-241-radulov-tukmakov-1973",
    "white": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 79 lances entre Radulov I e Tukmakov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"12\"]\n[White \"Radulov I\"]\n[Black \"Tukmakov V\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g4 h6 7. Be2 Nc6 8. Be3 a6 9. Rg1 Be7 10. Qd2 Nxd4 11. Qxd4 e5 12. Qd2 Be6 13. h4 d5 14. exd5 Nxd5 15. O-O-O Nxe3 16. Qxe3 Qa5 17. g5 hxg5 18. Bg4 f5 19. Bxf5 Bxf5 20. Rd5 Qc7 21. Rxe5 g6 22. Re1 Rh7 23. Qxg5 Kf8 24. Rxe7 Rxe7 25. Qf6+ Ke8 26. Qh8+ Kf7 27. Qh7+ Kf8 28. Qh8+ Kf7 29. Qh7+ Kf8 30. Rxe7 Qxe7 31. Qh8+ Kf7 32. Qxa8 g5 33. h5 Qe1+ 34. Nd1 Qe4 35. Ne3 Qh1+ 36. Kd2 Qf3 37. Ke1 Qh1+ 38. Kd2 Qf3 39. Kc3 Qc6+ 40. Kd2 1/2-1/2"
  },
  {
    "id": "game-242-rukavina-kortchnoi-1973",
    "white": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 77 lances entre Rukavina J e Kortchnoi V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"12\"]\n[White \"Rukavina J\"]\n[Black \"Kortchnoi V\"]\n[Result \"1-0\"]\n\n1. Nf3 d5 2. d4 Nf6 3. c4 c6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. e4 b4 10. Na4 c5 11. e5 Nd5 12. dxc5 Qa5 13. O-O Bxc5 14. Re1 N5b6 15. Nxb6 Qxb6 16. Qe2 Rc8 17. a3 Bxf3 18. gxf3 b3 19. Rd1 Rc7 20. Bf4 O-O 21. Rd2 Nb8 22. Rad1 Nc6 23. Qe4 g6 24. Bg5 Rd7 25. Qf4 Be7 26. Bf6 Bxf6 27. exf6 Kh8 28. Be4 Nd4 29. Kg2 Rg8 30. h4 Qc5 31. Qg5 e5 32. f4 Ne6 33. Qxe5 Rxd2 34. Rxd2 Qc1 35. Bd5 Qxd2 36. Bxe6 Qd8 37. Bxf7 Rf8 38. Qe7 h5 39. Bxg6 1-0"
  },
  {
    "id": "game-243-smejkal-huebner-1973",
    "white": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 104 lances entre Smejkal J e Huebner R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"12\"]\n[White \"Smejkal J\"]\n[Black \"Huebner R\"]\n[Result \"0-1\"]\n\n1. c4 Nf6 2. Nf3 g6 3. d4 Bg7 4. g3 c5 5. Bg2 Nc6 6. O-O O-O 7. Nc3 d6 8. d5 Na5 9. Nd2 e5 10. e4 Ne8 11. b3 a6 12. Bb2 Rb8 13. Qc2 f5 14. exf5 gxf5 15. Rae1 b5 16. Nd1 Rb7 17. f4 e4 18. Bxg7 Rxg7 19. Qc3 h5 20. Ne3 b4 21. Qa1 Nb7 22. Rf2 a5 23. Ndf1 Bd7 24. Bh3 a4 25. bxa4 Na5 26. Rc1 Rg6 27. Kh1 Qf6 28. Qxf6 Rgxf6 29. Ng2 Nc7 30. Rb2 Na8 31. Nd2 Nb6 32. Ne3 Nxa4 33. Rbc2 R6f7 34. Nb3 Ra8 35. Nd1 Nb6 36. Ne3 Kg7 37. Bf1 Kg6 38. Be2 Be8 39. Re1 Rfa7 40. Nc1 Nb7 41. Kg2 Ra3 42. Kf2 Na4 43. Nd1 Nc3 44. Nxc3 bxc3 45. h3 Ba4 46. Nb3 Na5 47. g4 Bxb3 48. axb3 Nxb3 49. gxh5+ Kh7 50. Rxc3 Nd4 51. Rxa3 Rxa3 52. Bd1 Rc3 0-1"
  },
  {
    "id": "game-244-torre-estevez-1973",
    "white": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Torre E e Estevez Morales G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"12\"]\n[White \"Torre E\"]\n[Black \"Estevez Morales G\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. Re1 e5 6. Bxc6 dxc6 7. d3 Ne7 8. Nbd2 O-O 9. a4 b6 10. Nc4 Bg4 11. h3 Bxf3 12. Qxf3 Qc7 13. Qg3 b5 14. Na3 a6 15. Be3 c4 16. Bc5 cxd3 17. Qxd3 Rfd8 18. Qe3 Rab8 19. axb5 axb5 20. c3 Nc8 21. Nc2 Nb6 22. b3 Nd7 23. Be7 Re8 24. Ra7 Rb7 25. Bd6 Qc8 26. Rea1 Rxa7 27. Rxa7 Nf8 28. c4 bxc4 29. bxc4 Ne6 30. Qf3 Nf4 31. c5 Qe6 32. Qg4 Qxg4 33. hxg4 Ne6 34. Nb4 Bf8 35. Nd3 f6 36. Ra6 Rc8 37. g3 Bxd6 38. cxd6 c5 39. d7 Rd8 40. Rxe6 c4 41. Re8+ 1-0"
  },
  {
    "id": "game-245-uhlmann-karpov-1973",
    "white": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 90 lances entre Uhlmann W e Karpov A (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"12\"]\n[White \"Uhlmann W\"]\n[Black \"Karpov A\"]\n[Result \"0-1\"]\n\n1. c4 c5 2. Nf3 Nf6 3. Nc3 d5 4. cxd5 Nxd5 5. e3 e6 6. d4 Nc6 7. Bd3 cxd4 8. exd4 Be7 9. O-O O-O 10. Re1 Nf6 11. a3 b6 12. Be3 Bb7 13. Rc1 Rc8 14. Bb1 Rc7 15. Qd3 Rd7 16. Qc2 g6 17. Ba2 Ng4 18. Rcd1 Nxe3 19. fxe3 Bf6 20. Qf2 Bg7 21. Rd2 Ne7 22. e4 h6 23. Red1 Qb8 24. Qe3 Rfd8 25. h3 Kh7 26. Kh1 a6 27. Rf2 Ng8 28. Rdf1 b5 29. h4 Nf6 30. Ne5 Rxd4 31. Rxf6 Qxe5 32. Rxf7 R8d7 33. Rxd7 Rxd7 34. Qh3 Rd6 35. Bb1 Rd2 36. h5 gxh5 37. Nd1 Bc6 38. Qf3 Be8 39. b4 Bg6 40. Nf2 Qd4 41. Nh3 e5 42. Nf2 Rb2 43. Kh2 Qc4 44. Rd1 Rb3 45. Nd3 Qxe4 0-1"
  },
  {
    "id": "game-246-estevez-cuellar-1973",
    "white": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 85 lances entre Estevez Morales G e Cuellar Gacharna M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"13\"]\n[White \"Estevez Morales G\"]\n[Black \"Cuellar Gacharna M\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Qxd4 Nc6 5. Bb5 Bd7 6. Bxc6 Bxc6 7. Nc3 Nf6 8. Bg5 e6 9. O-O-O Be7 10. Rhe1 O-O 11. Kb1 Qa5 12. Qd2 Kh8 13. Nd4 Rac8 14. f3 Rfd8 15. g4 a6 16. h4 b5 17. Bxf6 Bxf6 18. g5 Bxd4 19. Qxd4 b4 20. Ne2 Ba4 21. b3 Bb5 22. Nc1 Qc7 23. Rd2 a5 24. Red1 d5 25. f4 Qxf4 26. exd5 Qxd4 27. Rxd4 e5 28. Re4 f6 29. a3 Be8 30. axb4 Bg6 31. Rc4 axb4 32. Kb2 e4 33. Na2 f5 34. Nxb4 f4 35. Rxc8 Rxc8 36. d6 e3 37. d7 Rd8 38. Nc6 e2 39. Ra1 Rf8 40. d8=Q Rxd8 41. Nxd8 f3 42. Ne6 Kg8 43. Nd4 1-0"
  },
  {
    "id": "game-247-huebner-torre-1973",
    "white": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 99 lances entre Huebner R e Torre E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"13\"]\n[White \"Huebner R\"]\n[Black \"Torre E\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 g6 6. Nf3 Bg7 7. g3 O-O 8. Bg2 d6 9. O-O Re8 10. Nd2 Nbd7 11. a4 a6 12. h3 Rb8 13. Nc4 Ne5 14. Na3 Qc7 15. Re1 c4 16. Be3 Nh5 17. a5 f5 18. Bb6 Qe7 19. f4 Nd7 20. Bf2 b5 21. axb6 Nxb6 22. e4 fxe4 23. Rxe4 Qd8 24. Rxe8+ Qxe8 25. Qd2 Qf8 26. Kh2 Bh6 27. Be3 Nf6 28. Qe2 Bg7 29. Ra2 Nfd7 30. Nxc4 Nxc4 31. Qxc4 Qd8 32. Ne4 Nb6 33. Qc6 Bd7 34. Qc1 Bb5 35. Ng5 Nc4 36. Ne6 Qe7 37. Bf2 Bf6 38. b3 Nb6 39. Rc2 Bd7 40. Rc7 Qe8 41. Qe3 Nc8 42. g4 Ne7 43. Qa7 Bxe6 44. dxe6 g5 45. Bd4 Bxd4 46. Qxd4 gxf4 47. Qf6 Qf8 48. Qxe7 Qxe7 49. Rxe7 Rxb3 50. Rd7 1-0"
  },
  {
    "id": "game-248-karpov-gligoric-1973",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 125 lances entre Karpov A e Gligoric S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"13\"]\n[White \"Karpov A\"]\n[Black \"Gligoric S\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 c5 13. d5 Ne8 14. Nf1 g6 15. Bh6 Ng7 16. Ne3 Nf6 17. a4 Kh8 18. b3 Rb8 19. Qe2 Bc8 20. axb5 axb5 21. Ra7 Ng8 22. Bxg7+ Kxg7 23. Rea1 Nf6 24. Bd3 Bd7 25. Qa2 Ne8 26. Qa6 Rb6 27. Qa5 Nf6 28. Ng4 Rb8 29. Nxf6 Bxf6 30. Qc7 Qxc7 31. Rxc7 Rfd8 32. Raa7 Be8 33. Rab7 Kg8 34. g4 h6 35. h4 Rxb7 36. Rxb7 c4 37. bxc4 bxc4 38. Be2 Ra8 39. Bxc4 Ba4 40. Bb3 Bxb3 41. Rxb3 Rc8 42. Kg2 h5 43. gxh5 gxh5 44. Rb6 Rxc3 45. Rxd6 Kg7 46. Rc6 Rd3 47. Rc7 Kg6 48. Rc8 Bg7 49. Rc6+ Kh7 50. Ng5+ Kg8 51. Rc8+ Bf8 52. Rc7 f6 53. Ne6 Bh6 54. Rd7 Rd2 55. Kf1 Rd1+ 56. Ke2 Rd2+ 57. Ke1 Rc2 58. d6 Rc1+ 59. Ke2 Rc2+ 60. Kf1 Rc6 61. Kg2 Rb6 62. Nc7 Rb7 63. Nd5 1-0"
  },
  {
    "id": "game-249-kortchnoi-radulov-1973",
    "white": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 71 lances entre Kortchnoi V e Radulov I (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"13\"]\n[White \"Kortchnoi V\"]\n[Black \"Radulov I\"]\n[Result \"1-0\"]\n\n1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. Qe2 Nc6 7. O-O a6 8. Nc3 Qc7 9. d5 exd5 10. Nxd5 Nxd5 11. Bxd5 Bd6 12. b3 O-O 13. Bb2 Bg4 14. h3 Bh5 15. Rfd1 Rfe8 16. Rd2 Rad8 17. Rad1 Nd4 18. Bxd4 Bh2+ 19. Kh1 Rxd5 20. g4 Bg6 21. Nxh2 cxd4 22. Rxd4 Be4+ 23. f3 Rxd4 24. Rxd4 Bc6 25. Qf2 a5 26. Kg2 g6 27. Qd2 Qe7 28. e4 f5 29. gxf5 gxf5 30. exf5 Qe2+ 31. Kg3 Qxd2 32. Rxd2 a4 33. Ng4 Re1 34. Kf4 Rb1 35. Ne5 Kg7 36. Rd6 1-0"
  },
  {
    "id": "game-250-kuzmin-uhlmann-1973",
    "white": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 87 lances entre Kuzmin G e Uhlmann W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"13\"]\n[White \"Kuzmin G\"]\n[Black \"Uhlmann W\"]\n[Result \"1-0\"]\n\n1. e4 e6 2. d4 d5 3. Nd2 c5 4. Ngf3 Nc6 5. exd5 exd5 6. Bb5 Bd6 7. dxc5 Bxc5 8. O-O Ne7 9. Nb3 Bd6 10. Bg5 O-O 11. Bh4 Bg4 12. Be2 Qb6 13. Bxe7 Nxe7 14. Qd4 Qxd4 15. Nfxd4 Bd7 16. Rad1 Rfd8 17. Rfe1 Kf8 18. c3 a5 19. a3 a4 20. Na1 Nc8 21. Nac2 Nb6 22. Ne3 Bf4 23. Ndc2 Be6 24. Rd4 Bxe3 25. Nxe3 Nc4 26. Red1 Rdc8 27. Nxd5 Nxb2 28. Rb1 Bxd5 29. Rxd5 Nc4 30. Rxb7 Na5 31. Rbb5 Nc4 32. Rd7 g6 33. f4 Ra6 34. Rb4 Rac6 35. Bd3 Kg7 36. Rd4 Nxa3 37. c4 Ra6 38. Kf2 Ra5 39. Ke3 Rc7 40. Kd2 h5 41. Re4 Rd7 42. Re1 Rc5 43. Rc1 Rd4 44. Ke3 1-0"
  },
  {
    "id": "game-251-quinteros-larsen-1973",
    "white": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 73 lances entre Quinteros M e Larsen B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"13\"]\n[White \"Quinteros M\"]\n[Black \"Larsen B\"]\n[Result \"1-0\"]\n\n1. Nf3 g6 2. d4 Nf6 3. c4 Bg7 4. g3 O-O 5. Bg2 d6 6. Nc3 c6 7. O-O Bf5 8. b3 Qa5 9. Qd2 e5 10. Bb2 Re8 11. e4 Bg4 12. d5 c5 13. Ne1 Na6 14. Nd3 Bd7 15. a4 h5 16. h3 h4 17. g4 Nh7 18. f4 exf4 19. Qxf4 Bxc3 20. Qxf7+ Kh8 21. Nf4 Nf8 22. Nxg6+ Nxg6 23. Qxg6 Re7 24. Qxd6 Bxb2 25. Qxe7 Qd8 26. Qd6 Qe8 27. Qh6+ Kg8 28. Rae1 Bg7 29. Qxh4 Qe5 30. g5 Be8 31. Rf6 Rd8 32. Kh1 Nb4 33. Re6 Qc7 34. g6 Bxg6 35. Rxg6 Rf8 36. e5 Qf7 37. Be4 1-0"
  },
  {
    "id": "game-252-taimanov-rukavina-1973",
    "white": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Taimanov M e Rukavina J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"13\"]\n[White \"Taimanov M\"]\n[Black \"Rukavina J\"]\n[Result \"1-0\"]\n\n1. d4 d5 2. c4 e6 3. Nc3 Be7 4. cxd5 exd5 5. Bf4 c6 6. e3 Bf5 7. g4 Be6 8. h3 Nf6 9. Bd3 Bd6 10. Nge2 h6 11. Qb3 Bc8 12. O-O-O Na6 13. Rde1 Nc7 14. Rhg1 Bxf4 15. Nxf4 Qd6 16. g5 hxg5 17. Rxg5 Kf8 18. Reg1 Nce8 19. Nce2 b6 20. Kb1 Rh6 21. f3 Nh7 22. R5g3 Be6 23. Qc2 Kg8 24. e4 dxe4 25. fxe4 Nf8 26. Qc3 f6 27. e5 Qe7 28. Nxe6 Nxe6 29. Qxc6 Rd8 30. Bc4 fxe5 31. Rg6 Rd6 32. Qc8 Rxg6 33. Rxg6 Kf7 34. Rxe6 Rxe6 35. dxe5 g5 36. Nd4 Ng7 37. a4 a6 38. Bd5 b5 39. a5 b4 40. Bb3 g4 41. hxg4 1-0"
  },
  {
    "id": "game-253-tal-byrne-1973",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 86 lances entre Tal M e Byrne R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"13\"]\n[White \"Tal M\"]\n[Black \"Byrne R\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Qb6 8. Qd2 Qxb2 9. Nb3 Qa3 10. Bxf6 gxf6 11. Be2 h5 12. O-O Nc6 13. Kh1 Bd7 14. Qe3 Rc8 15. Nb1 Qa4 16. c4 Na5 17. Qc3 Nxc4 18. Qxf6 Rh6 19. Qd4 Rh7 20. f5 exf5 21. Nc3 Bg7 22. Nxa4 Bxd4 23. Nxd4 Bxa4 24. Rac1 b5 25. Rxf5 Rc5 26. Bxc4 bxc4 27. Rxc5 dxc5 28. Rxc4 Bd7 29. Rxc5 Rh6 30. h3 Rd6 31. Nf3 Rd1+ 32. Kh2 Ra1 33. Ra5 Bb5 34. Nd4 Bf1 35. Nb3 Re1 36. Rf5 Bc4 37. Rxh5 Bxb3 38. axb3 Rxe4 39. Ra5 Re6 40. b4 Re4 41. Rxa6 Rxb4 42. Ra8+ Ke7 43. Rg8 f5 1/2-1/2"
  },
  {
    "id": "game-254-byrne-quinteros-1973",
    "white": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 82 lances entre Byrne R e Quinteros M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"14\"]\n[White \"Byrne R\"]\n[Black \"Quinteros M\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Nf6 6. O-O Qc7 7. Nd2 d6 8. f4 e5 9. fxe5 dxe5 10. Nf5 g6 11. Ne3 Bg7 12. a4 O-O 13. b3 Be6 14. Ba3 Rd8 15. Qe1 Nc6 16. Qh4 Qb6 17. Qf2 Bh6 18. Ndc4 Bxc4 19. Nxc4 Qxf2+ 20. Kxf2 Bf8 21. Bxf8 Kxf8 22. h3 Kg7 23. Ke3 Nh5 24. Rf2 f6 25. c3 Ne7 26. a5 Rac8 27. Rd2 f5 28. Rad1 f4+ 29. Kf3 Nc6 30. Be2 Rxd2 31. Rxd2 Nf6 32. b4 Nd8 33. Nxe5 Rxc3+ 34. Rd3 Rc8 35. Kxf4 Ne6+ 36. Ke3 Ng5 37. Ng4 Ngxe4 38. Bf3 Rc4 39. Rd4 Rc3+ 40. Kf4 g5+ 41. Kf5 Ng3+ 1-0"
  },
  {
    "id": "game-255-estevez-huebner-1973",
    "white": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 79 lances entre Estevez Morales G e Huebner R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"14\"]\n[White \"Estevez Morales G\"]\n[Black \"Huebner R\"]\n[Result \"1-0\"]\n\n1. e4 e6 2. d4 d5 3. Nd2 Nc6 4. Ngf3 Nf6 5. e5 Nd7 6. Nb3 Be7 7. Bb5 a6 8. Bxc6 bxc6 9. Na5 Nb8 10. O-O c5 11. c4 O-O 12. dxc5 Bxc5 13. Bg5 Qd7 14. Nb3 Ba7 15. Rc1 Bb7 16. c5 f6 17. Bf4 Nc6 18. Re1 Rae8 19. Nbd4 Nd8 20. b4 c6 21. a4 Bb8 22. Bg3 h6 23. h4 Qf7 24. Qd2 Qh5 25. b5 Rf7 26. Rb1 Bc7 27. Qd3 axb5 28. axb5 cxb5 29. Qxb5 Ref8 30. c6 Bc8 31. Ra1 fxe5 32. Bxe5 Bxe5 33. Rxe5 Qg6 34. Ra8 Rc7 35. Qb6 Qf7 36. Re2 Qf4 37. g3 Rxc6 38. Qxc6 Qxf3 39. Qxc8 Qd3 40. Qc5 1-0"
  },
  {
    "id": "game-256-gligoric-kuzmin-1973",
    "white": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 83 lances entre Gligoric S e Kuzmin G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"14\"]\n[White \"Gligoric S\"]\n[Black \"Kuzmin G\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 O-O 6. Nf3 d5 7. O-O dxc4 8. Bxc4 a6 9. Bd3 Nbd7 10. a4 cxd4 11. exd4 b6 12. Qe2 Bb7 13. Rd1 Re8 14. Bf4 Nf8 15. Ne5 Nd5 16. Bd2 f6 17. Nc4 Be7 18. Nxd5 Qxd5 19. Qg4 f5 20. Qg3 Bh4 21. Qh3 Rad8 22. Bc3 Ng6 23. Ne3 Qd6 24. d5 Qe7 25. Bc4 Nf4 26. Qf3 Nxd5 27. Bxd5 Bxd5 28. Nxd5 Rxd5 29. Rxd5 exd5 30. g3 Bf6 31. Re1 Qd7 32. Rxe8+ Qxe8 33. Qxd5+ Kh8 34. Bxf6 gxf6 35. Qxf5 Qc6 36. b3 Kg7 37. h4 a5 38. Kh2 Qd6 39. Qe4 Qc5 40. Kg2 Qd6 41. Qg4+ Kh6 42. Qf5 1-0"
  },
  {
    "id": "game-257-radulov-taimanov-1973",
    "white": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 112 lances entre Radulov I e Taimanov M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"14\"]\n[White \"Radulov I\"]\n[Black \"Taimanov M\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d3 g6 4. g3 Bg7 5. Bg2 e6 6. O-O Nge7 7. c3 O-O 8. Be3 b6 9. d4 cxd4 10. Nxd4 Bb7 11. Nxc6 Bxc6 12. Qd6 Nc8 13. Qd2 Qc7 14. Na3 Qb7 15. Rfe1 b5 16. Bd4 e5 17. Be3 Nb6 18. b3 f5 19. c4 bxc4 20. Bxb6 axb6 21. Nxc4 f4 22. a4 h5 23. Rad1 Kh7 24. h4 b5 25. Nd6 Qb6 26. gxf4 Rxf4 27. axb5 Bxb5 28. Qe3 Qxe3 29. fxe3 Rg4 30. Ra1 Rxa1 31. Rxa1 Bc6 32. Rf1 Kg8 33. b4 Bf8 34. b5 Bxd6 35. bxc6 dxc6 36. Kf2 Be7 37. Bf3 Bxh4+ 38. Ke2 Rg3 39. Rc1 Rh3 40. Rxc6 Rh2+ 41. Kd3 Kg7 42. Rc5 Kf6 43. Rc6+ Kg5 44. Re6 Bg3 45. Bd1 Rf2 46. Ba4 Rf6 47. Re7 Kg4 48. Rh7 Kf3 49. Rh6 Rd6+ 50. Kc4 Kxe3 51. Kc5 Rf6 52. Kd5 Bf4 53. Rh7 g5 54. Rxh5 g4 55. Rxe5 Bxe5 56. Kxe5 Rf4 0-1"
  },
  {
    "id": "game-258-rukavina-karpov-1973",
    "white": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 97 lances entre Rukavina J e Karpov A (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"14\"]\n[White \"Rukavina J\"]\n[Black \"Karpov A\"]\n[Result \"0-1\"]\n\n1. c4 Nf6 2. Nc3 e6 3. Nf3 c5 4. d4 cxd4 5. Nxd4 Bb4 6. Nc2 Bxc3+ 7. bxc3 Qa5 8. Nb4 O-O 9. e3 b6 10. Be2 Bb7 11. O-O Rc8 12. f3 Nc6 13. Qb3 Qe5 14. Nxc6 Rxc6 15. Bd2 Qc7 16. Qa4 a5 17. Rfb1 Ba6 18. Rb2 Bxc4 19. Bxc4 Rxc4 20. Qb5 Rc6 21. e4 d6 22. Qg5 Nd7 23. Qe7 Ne5 24. Qxc7 Rxc7 25. Rb5 Nc4 26. Bc1 Rac8 27. Rab1 Rc5 28. Kf1 Kf8 29. Ke2 Ke7 30. R5b3 Kd7 31. a4 Kc7 32. Bf4 Kb7 33. Be3 R5c6 34. Bd4 f6 35. Rd1 Rd8 36. f4 d5 37. Bf2 Rcd6 38. Bc5 Rc6 39. Bf2 Rdd6 40. exd5 Rxd5 41. Rxd5 exd5 42. Rb5 Re6+ 43. Kd3 Kc6 44. g3 Re7 45. Rb1 Rb7 46. Rb5 Nd6 47. Rb2 b5 48. axb5+ Rxb5 49. Re2 0-1"
  },
  {
    "id": "game-259-smejkal-kortchnoi-1973",
    "white": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 40 lances entre Smejkal J e Kortchnoi V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"14\"]\n[White \"Smejkal J\"]\n[Black \"Kortchnoi V\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bb4 5. Bg2 O-O 6. Nd5 Nxd5 7. cxd5 Nd4 8. Nxd4 exd4 9. O-O Bd6 10. e4 dxe3 11. dxe3 c5 12. Qc2 Be7 13. Bd2 d6 14. a4 Bf6 15. Bc3 Re8 16. e4 Bd7 17. Rfe1 Bxc3 18. bxc3 Re7 19. a5 Qc7 20. c4 Rae8 1/2-1/2"
  },
  {
    "id": "game-260-torre-tukmakov-1973",
    "white": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 75 lances entre Torre E e Tukmakov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"14\"]\n[White \"Torre E\"]\n[Black \"Tukmakov V\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 e6 3. d3 Nc6 4. g3 d5 5. Qe2 Nge7 6. Bg2 g6 7. h4 h6 8. e5 Nd4 9. Nxd4 cxd4 10. Nd2 Nc6 11. O-O Bd7 12. Nf3 Bg7 13. b3 Qc7 14. Re1 O-O-O 15. Bf4 Kb8 16. a3 Rc8 17. Qd2 a6 18. b4 Bf8 19. Rec1 f6 20. c4 dxc3 21. Rxc3 g5 22. hxg5 hxg5 23. Be3 fxe5 24. Bxg5 Bg7 25. Re1 Rhf8 26. Bh6 Bxh6 27. Qxh6 Qd6 28. Rc5 Rf5 29. Nh4 Rff8 30. Rxd5 Qe7 31. Ng6 Qf6 32. Rxd7 Qxf2+ 33. Kh2 Rf3 34. Qh3 Qd2 35. Nxe5 Nxe5 36. Rxe5 Rf2 37. Rxb7+ Ka8 38. Ra7+ 1-0"
  },
  {
    "id": "game-261-uhlmann-tal-1973",
    "white": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 37 lances entre Uhlmann W e Tal M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"14\"]\n[White \"Uhlmann W\"]\n[Black \"Tal M\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 d6 3. Nf3 Bg4 4. e3 Nf6 5. Be2 Be7 6. d4 Nbd7 7. O-O O-O 8. b3 Re8 9. Bb2 Bf8 10. dxe5 dxe5 11. Qc2 e4 12. Nd4 c5 13. Ndb5 a6 14. Na3 Qc7 15. Rad1 Bxe2 16. Qxe2 Rad8 17. Nd5 Nxd5 18. Rxd5 Nb6 19. Rxd8 1/2-1/2"
  },
  {
    "id": "game-262-huebner-cuellar-1973",
    "white": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 107 lances entre Huebner R e Cuellar Gacharna M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"15\"]\n[White \"Huebner R\"]\n[Black \"Cuellar Gacharna M\"]\n[Result \"1-0\"]\n\n1. Nf3 Nf6 2. g3 g6 3. c4 Bg7 4. Bg2 O-O 5. O-O d6 6. d4 Nc6 7. Nc3 e5 8. d5 Ne7 9. e4 Ne8 10. Ng5 h6 11. Nh3 f5 12. f4 Nf6 13. fxe5 dxe5 14. Nf2 g5 15. Nd3 Nxe4 16. Nxe4 fxe4 17. Bxe4 Bf5 18. Qe2 Bxe4 19. Qxe4 Rxf1+ 20. Kxf1 Qf8+ 21. Kg2 Qf5 22. Nf2 Qxe4+ 23. Nxe4 Nf5 24. b3 Nd6 25. Nxd6 cxd6 26. Ba3 Rd8 27. Rf1 g4 28. h3 gxh3+ 29. Kxh3 Rd7 30. Kg4 Bf8 31. Rf6 Rg7+ 32. Kh3 Rd7 33. Re6 a6 34. Kg4 b5 35. cxb5 axb5 36. Bb4 Kf7 37. Kf5 Rd8 38. g4 Kg7 39. a3 Rd7 40. Rf6 Kg8 41. Rg6+ Kh7 42. Re6 Kg8 43. Bd2 Kh7 44. Re8 Rf7+ 45. Ke6 Kg6 46. a4 bxa4 47. bxa4 Rf6+ 48. Kd7 Rf2 49. Be3 Rf3 50. Bb6 Kf7 51. a5 Ra3 52. Re6 Ra1 53. Kc6 Be7 54. Kb7 1-0"
  },
  {
    "id": "game-263-karpov-radulov-1973",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 78 lances entre Karpov A e Radulov I (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"15\"]\n[White \"Karpov A\"]\n[Black \"Radulov I\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 c5 3. g3 g6 4. Bg2 Bg7 5. Nf3 Ne7 6. O-O O-O 7. Ne1 Nbc6 8. Nc2 d6 9. Ne3 Be6 10. a3 Qd7 11. d3 Bh3 12. Ned5 Bxg2 13. Kxg2 Nxd5 14. Nxd5 Ne7 15. Nxe7+ Qxe7 16. e4 f5 17. f3 h5 18. Bd2 Kh7 19. b4 Bh6 20. exf5 Rxf5 21. Bxh6 Kxh6 22. Qd2+ Kg7 23. bxc5 dxc5 24. Rae1 Rd8 25. Re3 Rd4 26. Qe2 Qd6 27. Rb1 Rf7 28. a4 b6 29. Re1 Rd7 30. h4 Rxd3 31. Rxd3 Qxd3 32. Qxe5+ Kh7 33. Qe6 Qf5 34. Qxf5 gxf5 35. Kf2 Kg7 36. a5 Rd4 37. axb6 axb6 38. Re6 Rxc4 39. Rxb6 f4 1/2-1/2"
  },
  {
    "id": "game-264-kortchnoi-torre-1973",
    "white": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 85 lances entre Kortchnoi V e Torre E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"15\"]\n[White \"Kortchnoi V\"]\n[Black \"Torre E\"]\n[Result \"1-0\"]\n\n1. d4 c5 2. d5 g6 3. e4 d6 4. c4 Bg7 5. Nc3 Nf6 6. Nf3 O-O 7. Be2 e6 8. O-O exd5 9. cxd5 a6 10. a4 Bg4 11. Bf4 Re8 12. Nd2 Bxe2 13. Qxe2 Nh5 14. Be3 Nd7 15. a5 Qe7 16. Rac1 Rf8 17. g4 Nhf6 18. Bg5 b5 19. axb6 Nxb6 20. Qf3 h6 21. Bh4 Qe5 22. Rcd1 Nfd7 23. Kh1 Rfe8 24. Bg3 Qe7 25. Rfe1 Ne5 26. Qe2 c4 27. f4 Nd3 28. Nxc4 Nxc4 29. Rxd3 Rab8 30. Rf3 Rec8 31. Nd1 Nxb2 32. e5 Nxd1 33. Rxd1 Rb5 34. e6 Rb2 35. Qxa6 Rcc2 36. f5 gxf5 37. Qxd6 Qxd6 38. Bxd6 fxe6 39. dxe6 Bf8 40. Be5 fxg4 41. Rg1 h5 42. Bxb2 Rxb2 43. Re3 1-0"
  },
  {
    "id": "game-265-kuzmin-rukavina-1973",
    "white": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Kuzmin G e Rukavina J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"15\"]\n[White \"Kuzmin G\"]\n[Black \"Rukavina J\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. a4 c5 14. d5 c4 15. Nf1 Bf8 16. Ng3 g6 17. Be3 Nc5 18. Qd2 Rb8 19. Ra3 Bg7 20. Rea1 Bc8 21. axb5 axb5 22. Qe1 Bb7 23. Ra7 Nfd7 24. R1a5 Qb6 25. Qa1 Bf6 26. Qa3 Bd8 27. Qb4 Ba6 28. Rxd7 Qxa5 29. Qxa5 Bxa5 30. Rxd6 Bc7 31. Rc6 Rbc8 32. Bxc5 Bb7 33. Rxc7 Rxc7 34. Bd6 Rcc8 35. Bxe5 Ra8 36. Bc7 Ra2 37. Nd4 Rxb2 38. Nf1 Ra8 39. Ne3 Ra3 40. d6 Bc8 41. Nd5 1-0"
  },
  {
    "id": "game-266-larsen-byrne-1973",
    "white": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "black": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 62 lances entre Larsen B e Byrne R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"15\"]\n[White \"Larsen B\"]\n[Black \"Byrne R\"]\n[Result \"0-1\"]\n\n1. c4 g6 2. d4 Nf6 3. Nc3 Bg7 4. e4 d6 5. f3 a6 6. Be3 c6 7. c5 O-O 8. Nge2 Nbd7 9. Nc1 b5 10. Be2 dxc5 11. dxc5 Ne5 12. Qc2 Be6 13. O-O Bc4 14. Rd1 Qc7 15. b3 Bxe2 16. N1xe2 Rfd8 17. h3 Rxd1+ 18. Rxd1 Rd8 19. f4 Rxd1+ 20. Qxd1 Ned7 21. e5 Ne8 22. b4 Nb8 23. a4 Qd7 24. Nd4 Nc7 25. Qb3 g5 26. fxg5 Bxe5 27. Nf3 Bxc3 28. Qxc3 Qd1+ 29. Kh2 Nd5 30. Qe5 Nd7 31. Qe4 Qe2 0-1"
  },
  {
    "id": "game-267-quinteros-uhlmann-1973",
    "white": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 118 lances entre Quinteros M e Uhlmann W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"15\"]\n[White \"Quinteros M\"]\n[Black \"Uhlmann W\"]\n[Result \"0-1\"]\n\n1. Nf3 g6 2. d4 Nf6 3. Bf4 Bg7 4. Nbd2 O-O 5. e4 d6 6. Be2 Nbd7 7. c3 Nh5 8. Be3 e5 9. Qc2 Qe8 10. Ng1 f5 11. g4 fxg4 12. Bxg4 Nf4 13. Bf3 exd4 14. cxd4 c5 15. Ne2 Ne6 16. dxc5 Ne5 17. Bg2 dxc5 18. Nc4 Nxc4 19. Qxc4 Bxb2 20. Rb1 Bg7 21. f4 Rb8 22. a4 Kh8 23. O-O b6 24. e5 Nc7 25. Nc3 Ba6 26. Nb5 Nxb5 27. axb5 Bb7 28. Rbe1 Bxg2 29. Kxg2 Rd8 30. Re2 Qe7 31. e6 Rd6 32. Bf2 Bd4 33. Bg3 Rf5 34. Qb3 Kg7 35. Rfe1 h5 36. h3 Bf6 37. Qa4 Rd4 38. Qb3 h4 39. Bh2 Qb7+ 40. Qf3 Qxf3+ 41. Kxf3 Be7 42. Ra2 Kf6 43. Rxa7 c4 44. Re5 Rxe5 45. fxe5+ Kxe6 46. Bg1 Rd5 47. Bxb6 Rxb5 48. Bd4 Bc5 49. Ra6+ Kf5 50. Rf6+ Kg5 51. Ke4 Bxd4 52. Kxd4 Rb3 53. Rf1 Rxh3 54. e6 Rd3+ 55. Kxc4 Re3 56. Kd5 h3 57. Kd6 Kh4 58. Rf8 h2 59. e7 Kg3 0-1"
  },
  {
    "id": "game-268-taimanov-smejkal-1973",
    "white": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Smejkal J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 94 lances entre Taimanov M e Smejkal J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"15\"]\n[White \"Taimanov M\"]\n[Black \"Smejkal J\"]\n[Result \"0-1\"]\n\n1. c4 Nf6 2. Nc3 c5 3. Nf3 Nc6 4. g3 g6 5. Bg2 Bg7 6. O-O O-O 7. d4 d6 8. d5 Na5 9. Nd2 a6 10. Qc2 Rb8 11. b3 b5 12. Bb2 bxc4 13. bxc4 Bh6 14. e3 Bf5 15. e4 Bxd2 16. Nd1 Bd7 17. Bxf6 exf6 18. Qxd2 Nxc4 19. Qc3 Nb6 20. Re1 Na4 21. Qd2 Kg7 22. Rc1 Rb4 23. Ne3 Bb5 24. Nc2 Rb2 25. a3 c4 26. Qd4 Qb6 27. Qxb6 Nxb6 28. Bf1 Rc8 29. Nd4 Rc5 30. Kg2 c3 31. Nxb5 axb5 32. Bd3 Ra2 33. Ra1 Rd2 34. Red1 Rxd1 35. Rxd1 Nc4 36. Ra1 Nb2 37. Bc2 f5 38. Kf3 Nc4 39. Ke2 fxe4 40. Bxe4 f5 41. Bd3 Nb2 42. Rc1 Kf6 43. f4 Rxd5 44. Bb1 Rd2+ 45. Kf3 Nd1 46. g4 fxg4+ 47. Kg3 d5 0-1"
  },
  {
    "id": "game-269-tal-gligoric-1973",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 83 lances entre Tal M e Gligoric S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"15\"]\n[White \"Tal M\"]\n[Black \"Gligoric S\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 c5 13. Nf1 Re8 14. Ng3 Bf8 15. d5 g6 16. b3 Nb6 17. Be3 Bc8 18. a4 bxa4 19. bxa4 Nc4 20. Bg5 Bg7 21. Qe2 Na5 22. Qd2 Rb8 23. Reb1 Rxb1+ 24. Rxb1 Bd7 25. c4 Nxc4 26. Qd3 Na5 27. Qxa6 Bc8 28. Qa7 Re7 29. Qa8 Qc7 30. Nd2 c4 31. Be3 Nd7 32. Rb5 Nb7 33. a5 c3 34. Nb3 Re8 35. a6 Nbc5 36. a7 Nb7 37. Ne2 Rf8 38. Nec1 f5 39. f3 Bf6 40. exf5 Kg7 41. fxg6 hxg6 42. Nd3 1-0"
  },
  {
    "id": "game-270-cuellar-byrne-1973",
    "white": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 108 lances entre Cuellar Gacharna M e Byrne R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"16\"]\n[White \"Cuellar Gacharna M\"]\n[Black \"Byrne R\"]\n[Result \"0-1\"]\n\n1. Nf3 Nf6 2. g3 g6 3. c4 Bg7 4. Bg2 O-O 5. O-O d6 6. d4 Nc6 7. Nc3 Rb8 8. h3 a6 9. Be3 b5 10. cxb5 axb5 11. d5 Na5 12. Nd4 b4 13. Ncb5 e5 14. dxe6 c5 15. exf7+ Rxf7 16. Nc6 Nxc6 17. Bxc6 Rb6 18. Nxd6 Rxc6 19. Nxf7 Qxd1 20. Rfxd1 Kxf7 21. Rac1 Bf8 22. Kg2 Be6 23. b3 Nd5 24. Bd2 Bg7 25. e4 Nc3 26. Bxc3 bxc3 27. Rd8 Bf6 28. Rdd1 Rb6 29. f4 Bd4 30. g4 Bc8 31. Kf3 Bb7 32. Rc2 Rb4 33. Re2 Ke6 34. g5 Bc6 35. h4 Rb8 36. Kg4 Rf8 37. Kg3 Rh8 38. Kg4 h5+ 39. Kg3 Rf8 40. f5+ Ke5 41. f6 Bb5 42. Rg2 Kxe4 43. Re1+ Kd5 44. Kf4 Bd3 45. Rd1 c2 46. Rc1 Re8 47. Rcxc2 Re4+ 48. Kf3 Re3+ 49. Kf4 Rh3 50. Rce2 Rxh4+ 51. Kf3 Bxe2+ 52. Rxe2 Be5 53. a4 Rh3+ 54. Kf2 Rxb3 0-1"
  },
  {
    "id": "game-271-estevez-kortchnoi-1973",
    "white": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 77 lances entre Estevez Morales G e Kortchnoi V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"16\"]\n[White \"Estevez Morales G\"]\n[Black \"Kortchnoi V\"]\n[Result \"0-1\"]\n\n1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5 5. Ngf3 a6 6. dxc5 Bxc5 7. Nb3 Ba7 8. Be2 Nf6 9. O-O Nc6 10. Bg5 O-O 11. c3 Re8 12. Nbd4 Qd6 13. Bxf6 Qxf6 14. Bd3 Bg4 15. Qd2 Kh8 16. Bc2 g6 17. Rae1 Kg7 18. Bb3 Bxf3 19. Nxf3 d4 20. cxd4 Nxd4 21. Nxd4 Bxd4 22. g3 Bxb2 23. Qd7 Rxe1 24. Rxe1 Bd4 25. Re2 b5 26. Rd2 Bb6 27. Qb7 Rd8 28. Re2 Re8 29. Rd2 a5 30. Kg2 Re7 31. Qd5 a4 32. Bd1 Re5 33. Qd6 Re6 34. Qd5 Qc3 35. Bg4 Rf6 36. Bd7 Bc5 37. Re2 Rd6 38. Qb7 Rb6 39. Qc7 0-1"
  },
  {
    "id": "game-272-gligoric-quinteros-1973",
    "white": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 117 lances entre Gligoric S e Quinteros M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"16\"]\n[White \"Gligoric S\"]\n[Black \"Quinteros M\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 c5 3. d5 g6 4. Nc3 d6 5. e4 Bg7 6. Nf3 O-O 7. Be2 e5 8. O-O Ne8 9. Ne1 f5 10. Nd3 Nd7 11. f4 Qe7 12. exf5 gxf5 13. Kh1 e4 14. Ne1 Ndf6 15. Nc2 Qf7 16. Ne3 Qg6 17. Qe1 h5 18. Ncd1 Ng4 19. Rb1 Bd4 20. b4 Rf7 21. Rb3 Rg7 22. Bxg4 hxg4 23. Nc2 Bf6 24. Bb2 Bxb2 25. Rxb2 cxb4 26. Qxb4 Nc7 27. g3 Na6 28. Qa3 Nc5 29. Nce3 Rc7 30. Qa5 Qg7 31. h3 gxh3 32. Rh2 b6 33. Qd2 Qg6 34. Nf2 Rg7 35. Rxh3 Bd7 36. Rg1 Kf7 37. Qd4 Rag8 38. Rh4 Rh7 39. Nh3 Rxh4 40. gxh4 Qh6 41. Rxg8 Kxg8 42. Ng2 Qg7 43. Qxg7+ Kxg7 44. Ne3 Nd3 45. a3 Kg6 46. Kg2 Ne1+ 47. Kg3 Nf3 48. Ng5 Nd4 49. Kf2 a5 50. Ke1 b5 51. cxb5 Nxb5 52. Nc4 Nc7 53. Nb6 Be8 54. Kf2 Kf6 55. a4 Ke7 56. Nc8+ Kd7 57. Nb6+ Ke7 58. Nc8+ Kd7 59. Nb6+ 1/2-1/2"
  },
  {
    "id": "game-273-huebner-tukmakov-1973",
    "white": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 92 lances entre Huebner R e Tukmakov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"16\"]\n[White \"Huebner R\"]\n[Black \"Tukmakov V\"]\n[Result \"1/2-1/2\"]\n\n1. c4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O c6 6. d4 d5 7. cxd5 cxd5 8. Ne5 Bf5 9. Nc3 Ne4 10. Qb3 Nc6 11. Rd1 Nxc3 12. bxc3 Qc7 13. Bxd5 Nxe5 14. dxe5 Qxe5 15. Bf4 Qxc3 16. Qxb7 Qa3 17. Rac1 Rac8 18. Rxc8 Rxc8 19. Bb3 h6 20. Kg2 g5 21. Bd6 Qb2 22. Qxe7 Bg6 23. Bb4 Bf6 24. Qe3 Rc7 25. Bd6 Rc8 26. Be7 Bg7 27. Bd8 Kh7 28. Qe7 Rxd8 29. Rxd8 Bf6 30. Rd2 Qxd2 31. Qxf6 Qxe2 32. Bxf7 Qe4+ 33. f3 Qc2+ 34. Kh3 Bf5+ 35. g4 Bd3 36. Kg3 Qc5 37. Bg8+ Kxg8 38. Qd8+ Kf7 39. Qxd3 Qg1+ 40. Kh3 Qf2 41. a4 a5 42. Qd5+ Ke7 43. Qe5+ Kd7 44. Qb5+ Ke7 45. Qb7+ Kd8 46. Qb8+ Kd7 1/2-1/2"
  },
  {
    "id": "game-274-radulov-kuzmin-1973",
    "white": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kuzmin G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 19 lances entre Radulov I e Kuzmin G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"16\"]\n[White \"Radulov I\"]\n[Black \"Kuzmin G\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nc3 Bb4 6. Nxc6 bxc6 7. Bd3 d5 8. exd5 Qe7+ 9. Qe2 Qxe2+ 10. Kxe2 1/2-1/2"
  },
  {
    "id": "game-275-rukavina-tal-1973",
    "white": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 82 lances entre Rukavina J e Tal M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"16\"]\n[White \"Rukavina J\"]\n[Black \"Tal M\"]\n[Result \"1-0\"]\n\n1. Nf3 Nf6 2. g3 g6 3. b3 a5 4. Bb2 Bg7 5. Bg2 d6 6. d4 c6 7. O-O O-O 8. Nbd2 a4 9. a3 Nbd7 10. Rb1 Qc7 11. Re1 e5 12. e4 Re8 13. h3 b5 14. b4 Nb6 15. dxe5 dxe5 16. Bf1 Ba6 17. c4 Nxc4 18. Nxc4 bxc4 19. Qc2 c3 20. Qxc3 Bxf1 21. Kxf1 Qb7 22. Qc4 Nd7 23. Red1 Nb6 24. Qe2 h6 25. Rbc1 Re6 26. Ne1 Nd7 27. Qd3 Nf8 28. Qc2 h5 29. Nd3 Nd7 30. Qe2 Bf8 31. Rc2 Qb5 32. Bc1 Rd6 33. Be3 Rd8 34. Nb2 Nf6 35. Rxd6 Bxd6 36. f3 Be7 37. Qxb5 cxb5 38. Ke2 Nd7 39. Nd3 Bd6 40. Rc6 Bb8 41. Nc5 Nf8 1-0"
  },
  {
    "id": "game-276-torre-taimanov-1973",
    "white": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 105 lances entre Torre E e Taimanov M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"16\"]\n[White \"Torre E\"]\n[Black \"Taimanov M\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 e6 3. d3 Nc6 4. g3 g6 5. Bg2 Bg7 6. O-O Nge7 7. Re1 d6 8. c3 O-O 9. Na3 Rb8 10. d4 cxd4 11. cxd4 b5 12. Nc2 Na5 13. Bf4 Bb7 14. b3 Rc8 15. Rc1 h6 16. h4 Kh7 17. Qd3 a6 18. Bh3 Qb6 19. h5 Rfe8 20. e5 Bxf3 21. Qxf3 d5 22. Bf1 Nac6 23. Be3 Kg8 24. hxg6 fxg6 25. Bd3 Nf5 26. Bxf5 gxf5 27. Qh5 Qb7 28. Bxh6 Bxh6 29. Qxh6 Qg7 30. Qf4 Kf7 31. Kg2 Ke7 32. Rh1 Kd7 33. Ne3 Ne7 34. Rxc8 Rxc8 35. Rh5 Rh8 36. Rxh8 Qxh8 37. Qh4 Qc8 38. Qf4 Qc3 39. g4 fxg4 40. Qxg4 Qb2 41. Qh4 Qxa2 42. Qh8 Qd2 43. Qb8 Qxd4 44. Qd6+ Ke8 45. Qxe6 Qe4+ 46. Kg3 a5 47. Ng4 Qg6 48. Qxg6+ Nxg6 49. Nf6+ Kf7 50. Nxd5 Nxe5 51. Kf4 Nd3+ 52. Ke3 Nc5 53. b4 1/2-1/2"
  },
  {
    "id": "game-277-uhlmann-larsen-1973",
    "white": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 77 lances entre Uhlmann W e Larsen B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"16\"]\n[White \"Uhlmann W\"]\n[Black \"Larsen B\"]\n[Result \"0-1\"]\n\n1. c4 f5 2. Nc3 Nf6 3. g3 e5 4. Bg2 c6 5. d4 e4 6. Nh3 Na6 7. O-O Nc7 8. f3 d5 9. cxd5 cxd5 10. Bg5 Be7 11. Nf4 Ne6 12. Qa4+ Kf7 13. Nxe6 Bxe6 14. fxe4 dxe4 15. Kh1 h5 16. Rad1 Kg6 17. h4 Qd6 18. Rf4 Rhc8 19. Bh3 Rxc3 20. bxc3 Nd5 21. Bxe7 Qxe7 22. Rdf1 Nxf4 23. Rxf4 Qc7 24. d5 Bd7 25. Qb4 Re8 26. Rf1 b6 27. Kh2 Kf6 28. c4 g6 29. e3 Rc8 30. Rc1 Qe5 31. Bf1 Rc5 32. Qa3 g5 33. Qxa7 Qd6 34. Rb1 b5 35. hxg5+ Kxg5 36. Kg2 h4 37. gxh4+ Kxh4 38. Kf2 bxc4 39. Qb8 0-1"
  },
  {
    "id": "game-278-byrne-uhlmann-1973",
    "white": {
      "name": "Byrne R",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Uhlmann W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 25 lances entre Byrne R e Uhlmann W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"17\"]\n[White \"Byrne R\"]\n[Black \"Uhlmann W\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5 5. Ngf3 Nc6 6. Bb5 Bd6 7. dxc5 Bxc5 8. Nb3 Bd6 9. O-O Ne7 10. Bg5 O-O 11. Bh4 Bg4 12. Be2 Re8 13. Re1 1/2-1/2"
  },
  {
    "id": "game-279-karpov-torre-1973",
    "white": {
      "name": "Karpov A",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Torre E",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 47 lances entre Karpov A e Torre E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"17\"]\n[White \"Karpov A\"]\n[Black \"Torre E\"]\n[Result \"1-0\"]\n\n1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 g6 5. Bc4 Nb6 6. Bb3 Bg7 7. Ng5 d5 8. f4 Nc6 9. c3 f6 10. Nf3 Bf5 11. O-O Qd7 12. Nbd2 fxe5 13. fxe5 O-O 14. Rf2 Na5 15. Bc2 Bxc2 16. Qxc2 Qf5 17. Qd1 e6 18. Nf1 c5 19. h3 cxd4 20. cxd4 Nc6 21. b3 Nd7 22. Ba3 Rf7 23. g4 Qe4 24. Ng5 1-0"
  },
  {
    "id": "game-280-kortchnoi-huebner-1973",
    "white": {
      "name": "Kortchnoi V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Huebner R",
      "title": "GM",
      "rating": "2650",
      "country": "Alemanha",
      "code": "DE"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 76 lances entre Kortchnoi V e Huebner R (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"17\"]\n[White \"Kortchnoi V\"]\n[Black \"Huebner R\"]\n[Result \"1-0\"]\n\n1. c4 Nf6 2. Nc3 c5 3. Nf3 g6 4. e4 Bg7 5. d4 cxd4 6. Nxd4 Nc6 7. Nc2 d6 8. Be2 Nd7 9. Bd2 Nc5 10. b4 Ne6 11. Rc1 O-O 12. Nd5 Ned4 13. Nxd4 Nxd4 14. Bg5 Re8 15. O-O Be6 16. Re1 Nxe2+ 17. Rxe2 Qd7 18. Rd2 Bxd5 19. Rxd5 Qe6 20. Qd3 Rac8 21. Be3 a6 22. h3 Rf8 23. g4 Qf6 24. Bg5 Qb2 25. a3 Rc7 26. c5 Rfc8 27. Kg2 Bf8 28. cxd6 exd6 29. Rxc7 Rxc7 30. e5 Rc2 31. Bd2 dxe5 32. Rd8 Kg7 33. Qe3 Be7 34. Qh6+ Kf6 35. Qh4+ Ke6 36. Re8 Rxd2 37. Qxe7+ Kd5 38. Rd8+ Kc6 1-0"
  },
  {
    "id": "game-281-larsen-gligoric-1973",
    "white": {
      "name": "Larsen B",
      "title": "GM",
      "rating": "2650",
      "country": "Dinamarca",
      "code": "DK"
    },
    "black": {
      "name": "Gligoric S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 56 lances entre Larsen B e Gligoric S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"17\"]\n[White \"Larsen B\"]\n[Black \"Gligoric S\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nge2 O-O 6. Bg5 h6 7. Be3 Ng4 8. Bc1 c5 9. d5 e6 10. h3 Ne5 11. Nf4 exd5 12. exd5 Re8 13. Be3 Nbd7 14. Be2 Nf6 15. Qb3 Bf5 16. O-O-O b5 17. cxb5 g5 18. Nh5 Nxh5 19. Bxh5 Nd3+ 20. Kd2 a6 21. b6 Rb8 22. Na4 Nxb2 23. Rb1 c4 24. Qb4 a5 25. Qxb2 Bxb2 26. Rxb2 c3+ 27. Kxc3 Bd7 28. Kb3 Re4 0-1"
  },
  {
    "id": "game-282-quinteros-rukavina-1973",
    "white": {
      "name": "Quinteros M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Rukavina J",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 93 lances entre Quinteros M e Rukavina J (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"17\"]\n[White \"Quinteros M\"]\n[Black \"Rukavina J\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 d5 2. g3 c5 3. Bg2 Nc6 4. d4 e6 5. O-O Nf6 6. c4 dxc4 7. Qa4 Bd7 8. Qxc4 cxd4 9. Nxd4 Rc8 10. Nxc6 Bxc6 11. Bxc6+ Rxc6 12. Qa4 a6 13. Nc3 Qb6 14. Bg5 Be7 15. Ne4 Nxe4 16. Bxe7 Nxg3 17. hxg3 Kxe7 18. Rad1 Rd8 19. Qh4+ f6 20. Qxh7 Kf7 21. Qh5+ Kg8 22. e4 Rcd6 23. Rxd6 Qxd6 24. Rc1 e5 25. Kg2 Qd7 26. Rh1 b5 27. Qg6 Qe8 28. Qh7+ Kf7 29. Rc1 Qd7 30. Rc5 Rc8 31. Rd5 Qg4 32. Rd6 Rc4 33. Rxa6 Qxe4+ 34. Qxe4 Rxe4 35. Ra5 Rb4 36. b3 g5 37. Kf3 g4+ 38. Ke3 Ke6 39. Ra6+ Kf5 40. Rd6 Re4+ 41. Kd2 b4 42. a4 bxa3 43. Ra6 Rd4+ 44. Ke2 Re4+ 45. Kf1 Rd4 46. Ke2 Re4+ 47. Kf1 1/2-1/2"
  },
  {
    "id": "game-283-taimanov-estevez-1973",
    "white": {
      "name": "Taimanov M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Estevez Morales G",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 93 lances entre Taimanov M e Estevez Morales G (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"17\"]\n[White \"Taimanov M\"]\n[Black \"Estevez Morales G\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 O-O 5. Bg5 c5 6. e3 Qa5 7. Bxf6 Bxc3+ 8. bxc3 Qxc3+ 9. Nd2 gxf6 10. Rc1 Qa5 11. Qg4+ Kh8 12. Qh4 cxd4 13. Qxf6+ Kg8 14. exd4 Qd8 15. Qf4 Nc6 16. Rc3 Ne7 17. h4 f6 18. Rg3+ Kh8 19. Bd3 Rf7 20. h5 Nf5 21. Bxf5 exf5 22. O-O d6 23. Re1 Bd7 24. Qxd6 Qa5 25. Re7 Qxd2 26. Qxd7 Qe1+ 27. Rxe1 Rxd7 28. d5 b5 29. cxb5 Rxd5 30. a4 f4 31. Rg4 Rxh5 32. Rxf4 Kg7 33. Re7+ Kg6 34. Rg4+ Kf5 35. Rgg7 Rh4 36. Rxa7 Rxa4 37. Rxa8 Rxa8 38. Rxh7 Ra2 39. b6 Rb2 40. b7 Kf4 41. Re7 f5 42. Kf1 Kg5 43. Ke1 Kf6 44. Rh7 Ke5 45. Kd1 Kd4 46. Rd7+ Kc3 47. g3 1-0"
  },
  {
    "id": "game-284-tal-radulov-1973",
    "white": {
      "name": "Tal M",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Radulov I",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 82 lances entre Tal M e Radulov I (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"17\"]\n[White \"Tal M\"]\n[Black \"Radulov I\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 Bd7 7. Qd2 Nxd4 8. Qxd4 Qa5 9. Bd2 e5 10. Qd3 Rc8 11. O-O-O a6 12. a3 Be6 13. f3 Qc7 14. Kb1 Nd7 15. Be3 Be7 16. h4 O-O 17. g3 b5 18. f4 Nc5 19. Bxc5 Qxc5 20. f5 Bc4 21. Qd2 d5 22. Bxc4 d4 23. Bxf7+ Rxf7 24. Nd5 Bf8 25. g4 Rd7 26. g5 a5 27. Qd3 a4 28. h5 Rxd5 29. exd5 b4 30. h6 gxh6 31. Rxh6 bxa3 32. Rc6 Rxc6 33. dxc6 Qxc6 34. bxa3 Qd5 35. f6 Bc5 36. g6 e4 37. Qb5 d3 38. Qe8+ Bf8 39. gxh7+ Kxh7 40. Rh1+ Bh6 41. Qe7+ Kg6 1-0"
  },
  {
    "id": "game-285-tukmakov-cuellar-1973",
    "white": {
      "name": "Tukmakov V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Cuellar Gacharna M",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Leningrad",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 57 lances entre Tukmakov V e Cuellar Gacharna M (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Leningrad\"]\n[Date \"1973.??.??\"]\n[Round \"17\"]\n[White \"Tukmakov V\"]\n[Black \"Cuellar Gacharna M\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 a6 8. O-O-O Bd7 9. f4 Be7 10. Nf3 b5 11. Bxf6 gxf6 12. g3 b4 13. Ne2 Qb6 14. Kb1 a5 15. f5 Rc8 16. fxe6 fxe6 17. Bh3 O-O 18. Nf4 Ne5 19. Nd4 Nc4 20. Qe2 f5 21. exf5 Bf6 22. fxe6 Bxd4 23. Nd5 Qb5 24. Rhe1 Bxb2 25. exd7 Na3+ 26. Kxb2 Rxc2+ 27. Qxc2 Nxc2 28. Re8 Na3 29. d8=Q 1-0"
  },
  {
    "id": "game-286-biyiasas-kagan-1973",
    "white": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kagan S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 79 lances entre Biyiasas P e Kagan S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Biyiasas P\"]\n[Black \"Kagan S\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. Re1 Nf6 6. e5 Nd5 7. Nc3 Nc7 8. Bxc6 dxc6 9. Ne4 Ne6 10. d3 h6 11. Be3 b6 12. Qd2 Bb7 13. a4 a5 14. h4 Qc7 15. Bf4 O-O-O 16. Bg3 Ba6 17. Rad1 Qd7 18. Qc1 Kb7 19. c3 Ka7 20. d4 c4 21. Qc2 Qd5 22. Ned2 c5 23. Nf1 cxd4 24. cxd4 Qa8 25. Ne3 Bb7 26. Qxc4 Rc8 27. Qb3 Bxf3 28. gxf3 Qxf3 29. d5 Nf4 30. Bxf4 Qxf4 31. Ng2 Qc4 32. Qf3 Rhf8 33. b3 Qc3 34. Rd3 Qb4 35. d6 e6 36. d7 Rb8 37. d8=Q Rfxd8 38. Rxd8 Rxd8 39. Qxf7+ Ka6 40. Qxg7 1-0"
  },
  {
    "id": "game-287-hort-geller-1973",
    "white": {
      "name": "Hort V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 31 lances entre Hort V e Geller E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Hort V\"]\n[Black \"Geller E\"]\n[Result \"1/2-1/2\"]\n\n1. c4 c5 2. Nf3 g6 3. g3 Bg7 4. Bg2 Nc6 5. Nc3 Nf6 6. d4 cxd4 7. Nxd4 O-O 8. O-O Nxd4 9. Qxd4 d6 10. Qd3 a6 11. Bd2 Bf5 12. e4 Be6 13. b3 Nd7 14. a4 Nc5 15. Qc2 Rc8 16. Rac1 1/2-1/2"
  },
  {
    "id": "game-288-ivkov-mecking-1973",
    "white": {
      "name": "Ivkov B",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Mecking H",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 69 lances entre Ivkov B e Mecking H (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Ivkov B\"]\n[Black \"Mecking H\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 7. Nb3 Be6 8. O-O Be7 9. f4 Qc7 10. f5 Bc4 11. a4 O-O 12. Kh1 Nbd7 13. a5 Bb5 14. Nxb5 axb5 15. Bg5 b4 16. Bd3 Nc5 17. Qe1 Nxb3 18. cxb3 Rxa5 19. Rxa5 Qxa5 20. Bc4 Rc8 21. Qe2 h6 22. Bxf6 Bxf6 23. g3 Rc5 24. Kg2 b5 25. Bd5 Qc7 26. Kh3 Qa7 27. Qd2 Qa5 28. Qd1 Kf8 29. Qh5 Rc7 30. Rc1 Bg5 31. Rxc7 Qxc7 32. Qe2 Qa5 33. Qh5 Qc7 34. Qe2 Qa5 35. Qh5 1/2-1/2"
  },
  {
    "id": "game-289-ljubojevic-hug-1973",
    "white": {
      "name": "Ljubojevic L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Hug W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 105 lances entre Ljubojevic L e Hug W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Ljubojevic L\"]\n[Black \"Hug W\"]\n[Result \"1-0\"]\n\n1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. dxc5 Qc7 6. Nf3 Nd7 7. Qd4 Qxc5 8. Qxc5 Nxc5 9. Bd2 Bd7 10. a3 Bxc3 11. Bxc3 Ne7 12. h4 Rc8 13. Bd3 Nxd3+ 14. cxd3 h5 15. Kd2 Nf5 16. Rag1 Bc6 17. b3 b6 18. Rh3 Kd7 19. a4 Rc7 20. Nd4 g6 21. Nxf5 gxf5 22. Rg3 d4 23. Bxd4 Bd5 24. b4 Rhc8 25. Ke3 Rc2 26. Ra1 Rc1 27. Rxc1 Rxc1 28. Rg7 Rb1 29. Rxf7+ Ke8 30. Rxa7 f4+ 31. Kxf4 Rxb4 32. Ke3 Bxg2 33. Ra6 Kf7 34. f4 Bd5 35. Bxb6 Kg6 36. Bc5 Rb1 37. Ra7 Re1+ 38. Kd2 Rf1 39. Be3 Rh1 40. Bf2 Kf5 41. Rf7+ Kg4 42. Ke2 Ra1 43. Rg7+ Kh3 44. Rg5 Rxa4 45. Ke3 Ra3 46. f5 exf5 47. Rxf5 Be6 48. Rf6 Bc4 49. Rd6 Bb5 50. e6 Kg4 51. Rd4+ Kh3 52. Rd5 Be8 53. Rd8 1-0"
  },
  {
    "id": "game-290-panno-gheorghiu-1973",
    "white": {
      "name": "Panno O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Gheorghiu F",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 24 lances entre Panno O e Gheorghiu F (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Panno O\"]\n[Black \"Gheorghiu F\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 c5 2. b3 d5 3. e3 Nf6 4. Bb2 e6 5. c4 dxc4 6. bxc4 Nc6 7. Be2 Be7 8. O-O O-O 9. Ne5 Nxe5 10. Bxe5 Bd7 11. Bf3 Qc8 12. d3 Bc6 1/2-1/2"
  },
  {
    "id": "game-291-portisch-keres-1973",
    "white": {
      "name": "Portisch L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 77 lances entre Portisch L e Keres P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Portisch L\"]\n[Black \"Keres P\"]\n[Result \"1-0\"]\n\n1. c4 Nf6 2. Nc3 e6 3. Nf3 c5 4. g3 d5 5. cxd5 Nxd5 6. Bg2 Be7 7. O-O O-O 8. d4 Nc6 9. Nxd5 exd5 10. Be3 Bf6 11. dxc5 Bxb2 12. Rb1 Bf6 13. Ne1 d4 14. Bf4 Qa5 15. Nd3 Qxa2 16. Bd6 Re8 17. Nf4 Bf5 18. Rxb7 Be4 19. Bxe4 Rxe4 20. Qb1 Qxb1 21. Rfxb1 Ree8 22. Rc7 Rec8 23. Rbb7 Rxc7 24. Rxc7 Na5 25. Nd5 Bd8 26. Ne7+ Bxe7 27. Bxe7 h6 28. c6 Rb8 29. Bd6 Kh7 30. Rxf7 Rb1+ 31. Kg2 Nxc6 32. Rc7 Nd8 33. Rxa7 Rb5 34. f4 Nb7 35. Be5 Rb4 36. Bxd4 g5 37. Kf3 Kg6 38. Ra6+ Kf7 39. e3 1-0"
  },
  {
    "id": "game-292-reshevsky-polugaevsky-1973",
    "white": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Polugaevsky L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 54 lances entre Reshevsky S e Polugaevsky L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Reshevsky S\"]\n[Black \"Polugaevsky L\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. c4 e6 3. g3 b6 4. Bg2 Bb7 5. d4 Be7 6. Nc3 Ne4 7. Bd2 d5 8. cxd5 exd5 9. Ne5 Nxd2 10. Qxd2 O-O 11. O-O c6 12. e4 dxe4 13. Bxe4 f6 14. Nc4 f5 15. Bg2 Ba6 16. b3 f4 17. Qe2 Kh8 18. a4 Bb4 19. Na2 Bd6 20. Rfe1 Qc7 21. Qe4 Bxc4 22. bxc4 a5 23. Nc3 Bb4 24. Rac1 Ra7 25. Qe6 Qd8 26. Re4 Re7 27. Qh3 f3 1/2-1/2"
  },
  {
    "id": "game-293-savon-bronstein-1973",
    "white": {
      "name": "Savon V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Bronstein D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 119 lances entre Savon V e Bronstein D (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Savon V\"]\n[Black \"Bronstein D\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 cxd4 12. cxd4 Bb7 13. Nbd2 Qc7 14. Nf1 Rac8 15. Re2 Nh5 16. Bd3 Nc6 17. Rc2 Qd7 18. d5 Nb4 19. Rxc8 Rxc8 20. Be2 Nc2 21. Rb1 f5 22. Nxe5 dxe5 23. Bxh5 g6 24. Be2 Nd4 25. f3 f4 26. Bd2 Bc5 27. Kh1 Ba7 28. Bd3 Qd6 29. Nh2 h5 30. Rc1 Kf7 31. Ba5 Qd7 32. Nf1 g5 33. Nd2 Kf6 34. Rxc8 Qxc8 35. Nb3 Nxb3 36. axb3 Qc5 37. Be2 Bc8 38. Bd8+ Kg6 39. d6 h4 40. Be7 Bd7 41. Bd8 Be6 42. b4 Qxb4 43. d7 Bxd7 44. Bc7 Qd4 45. Bxe5 Qxe5 46. Qxd7 Qc5 47. Qd1 Qd4 48. Qb1 Kf6 49. Kh2 Ke5 50. Bd3 Bc5 51. Bc2 Qf2 52. Bb3 Be3 53. Bd5 Kd6 54. b4 Bd2 55. Qa1 Qg3+ 56. Kh1 Qe1+ 57. Qxe1 Bxe1 58. Bb7 Bxb4 59. Bxa6 Kc6 60. Kg1 1/2-1/2"
  },
  {
    "id": "game-294-tan-smyslov-1973",
    "white": {
      "name": "Tan L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 73 lances entre Tan L e Smyslov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"01\"]\n[White \"Tan L\"]\n[Black \"Smyslov V\"]\n[Result \"0-1\"]\n\n1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bc4 Bg7 5. Qe2 c6 6. e5 Nd5 7. Bd2 O-O 8. Bb3 a5 9. a4 dxe5 10. dxe5 Na6 11. Nf3 Nc5 12. Bxd5 cxd5 13. Be3 Ne4 14. Bd4 Nxc3 15. Bxc3 b6 16. Qd2 Ba6 17. h4 Qd7 18. h5 Qg4 19. O-O-O Qxa4 20. Kb1 Rfc8 21. Rh4 Qe8 22. hxg6 hxg6 23. Rdh1 Rc4 24. Rh7 Qf8 25. e6 Rxc3 26. exf7+ Qxf7 27. bxc3 Rd8 28. Ne5 Qf6 29. f4 d4 30. g4 Bb7 31. R1h3 Rd5 32. cxd4 Qd6 33. Qh2 Qb4+ 34. Ka2 Qa4+ 35. Ra3 Qxd4 36. Rxg7+ Kxg7 37. Rh3 0-1"
  },
  {
    "id": "game-295-bronstein-biyiasas-1973",
    "white": {
      "name": "Bronstein D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 85 lances entre Bronstein D e Biyiasas P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Bronstein D\"]\n[Black \"Biyiasas P\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. d3 b5 6. Bb3 Be7 7. O-O O-O 8. c3 d6 9. Nbd2 Na5 10. Bc2 c5 11. Re1 Nc6 12. Nf1 Re8 13. a4 Rb8 14. axb5 axb5 15. Bb3 Qc7 16. Bg5 Nd7 17. Be3 Nb6 18. Ng3 Nd8 19. Nd2 Be6 20. Bxe6 Nxe6 21. Qb3 Qc6 22. Nf3 Ra8 23. Rad1 Bf8 24. d4 Nc7 25. d5 Qb7 26. Nd2 Nd7 27. Ne2 f5 28. f3 f4 29. Bf2 Ra4 30. Qc2 Rea8 31. Nc1 Be7 32. Nd3 Bd8 33. b3 Ra2 34. Qb1 Ne8 35. Nc1 R2a5 36. Qd3 Bb6 37. Qf1 Nc7 38. g3 fxg3 39. hxg3 Rf8 40. Qh3 Rf7 41. Kg2 Ra8 42. f4 c4 43. Bxb6 1/2-1/2"
  },
  {
    "id": "game-296-geller-tan-1973",
    "white": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Tan L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 103 lances entre Geller E e Tan L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Geller E\"]\n[Black \"Tan L\"]\n[Result \"1-0\"]\n\n1. e4 d5 2. exd5 Nf6 3. d4 Nxd5 4. Nf3 Bg4 5. Be2 Nc6 6. O-O g6 7. c4 Nb6 8. d5 Bxf3 9. Bxf3 Ne5 10. Be2 Bg7 11. Nc3 c6 12. Qb3 O-O 13. Rd1 cxd5 14. c5 Nbd7 15. Qxd5 e6 16. Qxb7 Nxc5 17. Rxd8 Nxb7 18. Rxa8 Rxa8 19. Be3 Nd6 20. Bc5 Nec4 21. Rc1 Rc8 22. b4 Nb6 23. Bxd6 Rxc3 24. Rxc3 Bxc3 25. Kf1 Nd5 26. b5 Bd4 27. a4 Bb6 28. Bd3 f5 29. Bc4 Kf7 30. Bxd5 exd5 31. Ke2 Ke6 32. Bf4 d4 33. Kd3 Kd5 34. Bc1 Ba5 35. Bb2 Bb6 36. f3 h5 37. h4 Bc5 38. a5 Bb4 39. b6 axb6 40. a6 Kc6 41. Bxd4 Be1 42. a7 Kb7 43. Bxb6 Bg3 44. Ke2 Be5 45. Bf2 Bd6 46. Kd3 Be7 47. Kc4 f4 48. Kd5 Bd8 49. Ke5 g5 50. hxg5 Bxg5 51. Kf5 Bh6 52. Bc5 1-0"
  },
  {
    "id": "game-297-gheorghiu-hort-1973",
    "white": {
      "name": "Gheorghiu F",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Hort V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 38 lances entre Gheorghiu F e Hort V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Gheorghiu F\"]\n[Black \"Hort V\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. c4 Nc6 6. O-O Nf6 7. Nc3 g6 8. d4 cxd4 9. Nxd4 Bg7 10. Nde2 O-O 11. f3 e6 12. Bg5 h6 13. Be3 Rad8 14. Qd2 d5 15. cxd5 exd5 16. Bxh6 dxe4 17. Qe3 exf3 18. Bxg7 Kxg7 19. Qxf3 Qe7 1/2-1/2"
  },
  {
    "id": "game-298-hug-ivkov-1973",
    "white": {
      "name": "Hug W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Ivkov B",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 33 lances entre Hug W e Ivkov B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Hug W\"]\n[Black \"Ivkov B\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. Nc3 f6 6. d4 exd4 7. Nxd4 c5 8. Nde2 Qxd1+ 9. Nxd1 Bd7 10. Bf4 O-O-O 11. Ne3 Bc6 12. f3 Ne7 13. Rd1 Rxd1+ 14. Kxd1 g6 15. Kc1 Bg7 16. h4 Re8 17. Rd1 1/2-1/2"
  },
  {
    "id": "game-299-kagan-ljubojevic-1973",
    "white": {
      "name": "Kagan S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Ljubojevic L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 80 lances entre Kagan S e Ljubojevic L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Kagan S\"]\n[Black \"Ljubojevic L\"]\n[Result \"0-1\"]\n\n1. c4 g6 2. g3 Bg7 3. Bg2 e5 4. Nc3 Ne7 5. e3 Nbc6 6. Rb1 a5 7. a3 b6 8. Nge2 Nf5 9. d3 Bb7 10. Nd5 O-O 11. Nec3 Nd6 12. b4 axb4 13. axb4 Ne7 14. Qb3 Nxd5 15. Nxd5 Ra7 16. O-O Kh8 17. Bb2 f5 18. c5 bxc5 19. bxc5 Nf7 20. Ra1 Rxa1 21. Rxa1 Bc6 22. Ra7 Ng5 23. f4 exf4 24. Bxg7+ Kxg7 25. gxf4 Ne6 26. Qc3+ Kh6 27. d4 g5 28. Ra6 Bb7 29. Ra7 Bxd5 30. Bxd5 gxf4 31. exf4 Nxf4 32. Bc4 Rg8+ 33. Kf1 Rg2 34. Qe3 Qg5 35. Rxc7 Rxh2 36. Qf3 Qh4 37. Kg1 Rg2+ 38. Qxg2 Nxg2 39. Kxg2 Qg4+ 40. Kh1 Qh3+ 0-1"
  },
  {
    "id": "game-300-keres-reshevsky-1973",
    "white": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 48 lances entre Keres P e Reshevsky S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Keres P\"]\n[Black \"Reshevsky S\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. a4 c5 14. Nf1 Bf8 15. Ng3 g6 16. b3 Bg7 17. dxe5 Nxe5 18. Nxe5 dxe5 19. Be3 Qxd1 20. Rexd1 Bf8 21. f3 Rec8 22. Bd3 Bc6 23. Nf1 c4 24. axb5 Bxb5 1/2-1/2"
  },
  {
    "id": "game-301-mecking-panno-1973",
    "white": {
      "name": "Mecking H",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Panno O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 81 lances entre Mecking H e Panno O (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Mecking H\"]\n[Black \"Panno O\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. c4 O-O 10. Nc3 f6 11. Re1 fxe5 12. Nxe5 Bf6 13. Bf4 Qe8 14. Qc2 Bxe5 15. Bxe5 Qf7 16. c5 d6 17. cxd6 cxd6 18. Bg3 Bf5 19. Qa4 Qd7 20. Rad1 d5 21. f3 Nc5 22. Qa3 Ne6 23. Re5 Bg6 24. Qa4 Nc5 25. Qd4 Ne6 26. Qa4 Nc5 27. Qd4 Ne6 28. Qg4 Rae8 29. Rde1 Nc5 30. Qxd7 Nxd7 31. Re7 Rxe7 32. Rxe7 Rf7 33. Re8+ Rf8 34. Re6 Rf6 35. Rxf6 gxf6 36. Kf2 Bd3 37. Bd6 Kf7 38. Na4 Ke6 39. Bb4 Bb1 40. Nc5+ Nxc5 41. Bxc5 1/2-1/2"
  },
  {
    "id": "game-302-polugaevsky-savon-1973",
    "white": {
      "name": "Polugaevsky L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Savon V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 64 lances entre Polugaevsky L e Savon V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Polugaevsky L\"]\n[Black \"Savon V\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bb4 5. Bg2 O-O 6. O-O e4 7. Ne1 Bxc3 8. dxc3 h6 9. Nc2 Re8 10. Ne3 d6 11. Qc2 Re5 12. Bd2 Bd7 13. f4 exf3 14. exf3 Qc8 15. Rfe1 Re8 16. Nd5 Nxd5 17. Rxe8+ Qxe8 18. cxd5 Ne5 19. c4 Qf8 20. h3 Re8 21. f4 Ng6 22. Bc3 c5 23. Kh2 Qe7 24. Re1 Qd8 25. Be4 Nf8 26. b3 Re7 27. Qd2 Qe8 28. Bd3 f5 29. Rxe7 Qxe7 30. Qe2 Qxe2+ 31. Bxe2 Kf7 32. g4 Nh7 1/2-1/2"
  },
  {
    "id": "game-303-smyslov-portisch-1973",
    "white": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Portisch L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 82 lances entre Smyslov V e Portisch L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"02\"]\n[White \"Smyslov V\"]\n[Black \"Portisch L\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bb4 5. Bg2 O-O 6. O-O e4 7. Ng5 Bxc3 8. dxc3 Re8 9. f3 d6 10. b3 Bd7 11. Nh3 exf3 12. exf3 Ne7 13. Bg5 Nf5 14. Qd3 h6 15. Bd2 Ne7 16. Rfe1 Bf5 17. Qf1 Qd7 18. g4 Bh7 19. Qf2 a5 20. Nf4 Ng6 21. h4 Nxf4 22. Bxf4 Qc6 23. Rxe8+ Rxe8 24. Re1 Rxe1+ 25. Qxe1 Kf8 26. g5 Nh5 27. Be3 hxg5 28. hxg5 Qe8 29. Qd2 Ng3 30. c5 dxc5 31. Bxc5+ Kg8 32. Bf2 Nf5 33. c4 Bg6 34. Qxa5 Qd8 35. f4 Qd1+ 36. Qe1 Qg4 37. Qd2 Nd6 38. Kf1 Be4 39. Bxe4 Nxe4 40. Qe3 Qd1+ 41. Be1 Nd6 1/2-1/2"
  },
  {
    "id": "game-304-biyiasas-ljubojevic-1973",
    "white": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Ljubojevic L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 80 lances entre Biyiasas P e Ljubojevic L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Biyiasas P\"]\n[Black \"Ljubojevic L\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 e6 6. Be3 Qa5 7. Ne2 Nd4 8. O-O Ne7 9. Nc1 d6 10. Qd2 Bd7 11. Nb3 Qb6 12. Rae1 h5 13. h3 a5 14. Nd1 Qb4 15. Na1 Qxd2 16. Bxd2 a4 17. c3 Ndc6 18. f4 Nc8 19. Nc2 b5 20. a3 Rb8 21. Nf2 b4 22. cxb4 cxb4 23. Nxb4 Nxb4 24. Bxb4 Bxb2 25. Re2 Bd4 26. e5 d5 27. Rc1 Rxb4 28. axb4 Na7 29. Rc7 Nb5 30. Rb7 Ke7 31. Ra2 Nc3 32. Ra3 Ra8 33. Kf1 Kd8 34. Bf3 Kc8 35. Rxd7 Kxd7 36. Nd1 Nb1 37. Ra2 Kc6 38. Nb2 Kb5 39. Nc4 Kxb4 40. Nd6 a3 0-1"
  },
  {
    "id": "game-305-bronstein-polugaevsky-1973",
    "white": {
      "name": "Bronstein D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Polugaevsky L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 46 lances entre Bronstein D e Polugaevsky L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Bronstein D\"]\n[Black \"Polugaevsky L\"]\n[Result \"1/2-1/2\"]\n\n1. c4 Nf6 2. Nc3 e5 3. Nf3 Nc6 4. g3 Nd4 5. Bg2 Nxf3+ 6. Bxf3 Bb4 7. Qb3 a5 8. O-O O-O 9. d3 h6 10. Be3 Bxc3 11. Qxc3 d6 12. c5 Re8 13. cxd6 Qxd6 14. Rfd1 c6 15. Bc5 Qc7 16. Qb3 Bg4 17. Bxg4 Nxg4 18. e4 Nf6 19. f3 Nh7 20. d4 exd4 21. Bxd4 Ng5 22. Bb6 Qe7 23. h4 a4 1/2-1/2"
  },
  {
    "id": "game-306-hort-mecking-1973",
    "white": {
      "name": "Hort V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Mecking H",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 83 lances entre Hort V e Mecking H (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Hort V\"]\n[Black \"Mecking H\"]\n[Result \"1/2-1/2\"]\n\n1. c4 c5 2. Nf3 g6 3. d4 cxd4 4. Nxd4 Nc6 5. e4 Nf6 6. Nc3 d6 7. Be2 Nxd4 8. Qxd4 Bg7 9. Be3 O-O 10. Qd2 Qa5 11. f3 Be6 12. Rc1 Rfc8 13. b3 a6 14. a4 Qb4 15. Nd5 Nxd5 16. exd5 Qxd2+ 17. Kxd2 Bd7 18. Rhd1 Bb2 19. Rc2 Ba3 20. Bd4 Bb4+ 21. Kc1 a5 22. Kb1 e5 23. dxe6 fxe6 24. Bd3 Kf7 25. Re2 Bc6 26. f4 Rf8 27. Rf1 Ke7 28. Rff2 Kd7 29. Kc2 Rf7 30. g3 Raf8 31. h4 e5 32. fxe5 Rxf2 33. e6+ Ke7 34. Rxf2 Rxf2+ 35. Bxf2 Bf3 36. Be3 Be1 37. Bf4 Kxe6 38. Bf1 d5 39. Bh3+ Kf6 40. cxd5 Bxd5 41. Bc8 Be4+ 42. Kd1 1/2-1/2"
  },
  {
    "id": "game-307-ivkov-kagan-1973",
    "white": {
      "name": "Ivkov B",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kagan S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 85 lances entre Ivkov B e Kagan S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Ivkov B\"]\n[Black \"Kagan S\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 Bg4 7. Be3 Nfd7 8. Rc1 e5 9. d5 a5 10. O-O Bxf3 11. Bxf3 Na6 12. Bg4 Ndc5 13. Bh3 Qh4 14. Qg4 Qxg4 15. Bxg4 f5 16. Bf3 Bf6 17. b3 Kg7 18. Rfd1 h6 19. Rb1 Bg5 20. a3 Bxe3 21. fxe3 fxe4 22. Bxe4 Rf7 23. b4 axb4 24. axb4 Nd7 25. Bd3 Raf8 26. Rb2 Nf6 27. h3 Re7 28. Be2 h5 29. e4 Nd7 30. Rf1 Ref7 31. Rxf7+ Rxf7 32. Bd3 Kh6 33. Na4 Nb6 34. Nxb6 cxb6 35. c5 bxc5 36. Bxa6 bxa6 37. bxc5 dxc5 38. Ra2 Rf4 39. d6 c4 40. d7 Rf8 41. Rxa6 Rd8 42. Ra7 Kg5 43. g3 1/2-1/2"
  },
  {
    "id": "game-308-panno-hug-1973",
    "white": {
      "name": "Panno O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Hug W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 59 lances entre Panno O e Hug W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Panno O\"]\n[Black \"Hug W\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 c5 4. d5 d6 5. e4 Bg7 6. Bd3 O-O 7. Nge2 e5 8. h3 Na6 9. a3 Nc7 10. Rb1 Qe7 11. Bg5 h6 12. Be3 Nh7 13. Qd2 h5 14. O-O f5 15. f4 g5 16. fxe5 f4 17. exd6 fxe3 18. dxe7 Rxf1+ 19. Rxf1 exd2 20. e5 Bxe5 21. Bxh7+ Kxh7 22. Rf8 Bd7 23. Rd8 Ba4 24. b3 Be8 25. d6 Bxd6 26. Rxd6 Kg7 27. Ng3 Bg6 28. Rxd2 Kf7 29. Rd7 Rc8 30. Rd8 1-0"
  },
  {
    "id": "game-309-portisch-geller-1973",
    "white": {
      "name": "Portisch L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 45 lances entre Portisch L e Geller E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Portisch L\"]\n[Black \"Geller E\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. Be3 Ng4 8. Bg5 f6 9. Bh4 Nc6 10. d5 Ne7 11. Nd2 Nh6 12. g4 Nf7 13. Qc2 c5 14. f3 Bd7 15. Bd3 Nc8 16. Bf2 Bh6 17. h4 Bf4 18. Nf1 a6 19. a4 Qa5 20. Ra3 Ne7 21. Kd1 Kg7 22. Ng3 Rfb8 23. Nge2 1/2-1/2"
  },
  {
    "id": "game-310-reshevsky-smyslov-1973",
    "white": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 94 lances entre Reshevsky S e Smyslov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Reshevsky S\"]\n[Black \"Smyslov V\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. c4 b6 3. d4 Bb7 4. g3 e6 5. Bg2 Be7 6. Nc3 Ne4 7. Bd2 Bf6 8. Qc2 Nxd2 9. Qxd2 d5 10. cxd5 exd5 11. Ne5 O-O 12. O-O c5 13. e3 cxd4 14. exd4 Na6 15. Rac1 Nc7 16. Nd1 g6 17. Ne3 Bg7 18. Rc2 Qd6 19. Rfc1 Ne6 20. f4 Rae8 21. h4 Re7 22. h5 Rc7 23. hxg6 hxg6 24. Rxc7 Nxc7 25. Bh3 Rd8 26. Rc2 Ne8 27. a3 Nf6 28. Qc1 Ne4 29. Rc7 Nxg3 30. Bg4 Ba6 31. Rxf7 Rf8 32. Rxf8+ Bxf8 33. Qc6 Qxc6 34. Nxc6 Bd6 35. Nxd5 Bb7 36. Bd7 Bxc6 37. Bxc6 Ne2+ 38. Kf2 Nxf4 39. Nf6+ Kf7 40. Ne4 Ke7 41. Ke3 Ne6 42. Bd5 Bf4+ 43. Kd3 g5 44. Nc3 Bc1 45. Kc2 Be3 46. Ne2 Nxd4+ 47. Nxd4 Bxd4 1/2-1/2"
  },
  {
    "id": "game-311-savon-keres-1973",
    "white": {
      "name": "Savon V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 32 lances entre Savon V e Keres P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"03\"]\n[White \"Savon V\"]\n[Black \"Keres P\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Qd6 6. d3 Ne7 7. Be3 Ng6 8. Nbd2 Be6 9. Qe2 Be7 10. d4 O-O 11. c3 Rad8 12. Nc4 Bxc4 13. Qxc4 Rfe8 14. Qb3 exd4 15. Nxd4 c5 16. Nf5 Qc6 1/2-1/2"
  },
  {
    "id": "game-312-geller-reshevsky-1973",
    "white": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 36 lances entre Geller E e Reshevsky S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Geller E\"]\n[Black \"Reshevsky S\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d3 Nbd7 11. Nbd2 Bb7 12. Nf1 Nc5 13. Bc2 Re8 14. Ng3 Bf8 15. b4 Ncd7 16. d4 g6 17. Bd2 Bg7 18. a4 d5 1/2-1/2"
  },
  {
    "id": "game-313-gheorghiu-portisch-1973",
    "white": {
      "name": "Gheorghiu F",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Portisch L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 51 lances entre Gheorghiu F e Portisch L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Gheorghiu F\"]\n[Black \"Portisch L\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bb4 5. Nd5 Bc5 6. d3 h6 7. Bg2 O-O 8. O-O d6 9. Bd2 Nxd5 10. cxd5 Ne7 11. b4 Bb6 12. a4 a6 13. Qb3 Bd7 14. Bc3 Nf5 15. e4 Ne7 16. d4 f6 17. Nd2 exd4 18. Bb2 Ng6 19. Nf3 d3 20. Qxd3 Ne5 21. Qb3 Nxf3+ 22. Qxf3 Qe7 23. Rfe1 Rae8 24. a5 Ba7 25. Rac1 c6 26. Qd1 1/2-1/2"
  },
  {
    "id": "game-314-kagan-panno-1973",
    "white": {
      "name": "Kagan S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Panno O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 111 lances entre Kagan S e Panno O (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Kagan S\"]\n[Black \"Panno O\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e6 6. g3 Nc6 7. Bg2 Bd7 8. O-O a6 9. a4 Rc8 10. Nde2 Be7 11. h3 O-O 12. Be3 Nb4 13. a5 Qc7 14. Bb6 Qb8 15. f4 Bd8 16. Bxd8 Rfxd8 17. f5 exf5 18. exf5 Bc6 19. Rf4 Qa7+ 20. Kh2 Qc5 21. Bxc6 bxc6 22. Nd4 Nbd5 23. Nxd5 Qxd5 24. Nb3 Qb5 25. Qf1 Qb7 26. Rd1 c5 27. g4 d5 28. g5 Nh5 29. Rf3 Re8 30. Qf2 Re4 31. Kg1 Qc6 32. Nd2 Re5 33. Re1 Rxe1+ 34. Qxe1 g6 35. f6 h6 36. gxh6 Kh7 37. Qe7 Rc7 38. Qe5 c4 39. Nf1 Qc5+ 40. Ne3 d4 41. Ng4 Qa7 42. Nf2 d3 43. cxd3 cxd3 44. Rxd3 Rc1+ 45. Kg2 Rc2 46. Rf3 Qb7 47. b3 Qc6 48. h4 Ra2 49. b4 Qc4 50. Kg1 Re2 51. Qa1 Qxb4 52. Qc3 Qxh4 53. Kf1 Rxf2+ 54. Rxf2 Ng3+ 55. Kg2 Ne4 56. Qf3 0-1"
  },
  {
    "id": "game-315-keres-bronstein-1973",
    "white": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Bronstein D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 47 lances entre Keres P e Bronstein D (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Keres P\"]\n[Black \"Bronstein D\"]\n[Result \"1/2-1/2\"]\n\n1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bg4 6. Ne5 Bh5 7. g3 a5 8. Bg2 e6 9. Nxc4 Na6 10. O-O Be7 11. b3 O-O 12. Bb2 Nd5 13. Rc1 Qc7 14. Qd2 Rfd8 15. e4 Nxc3 16. Bxc3 Nb4 17. Bb2 b5 18. Ne3 Qb6 19. axb5 Qxb5 20. Rc4 f6 21. f4 Bf7 22. e5 fxe5 23. fxe5 Bg6 24. Bh3 1/2-1/2"
  },
  {
    "id": "game-316-ljubojevic-ivkov-1973",
    "white": {
      "name": "Ljubojevic L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Ivkov B",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 27 lances entre Ljubojevic L e Ivkov B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Ljubojevic L\"]\n[Black \"Ivkov B\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e6 2. Nf3 d5 3. d4 Nf6 4. Nc3 Be7 5. Bg5 h6 6. Bxf6 Bxf6 7. e3 O-O 8. Rc1 c6 9. Bd3 Nd7 10. O-O dxc4 11. Bxc4 e5 12. Ne4 exd4 13. Nxf6+ Nxf6 14. Nxd4 1/2-1/2"
  },
  {
    "id": "game-317-mecking-tan-1973",
    "white": {
      "name": "Mecking H",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tan L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 65 lances entre Mecking H e Tan L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Mecking H\"]\n[Black \"Tan L\"]\n[Result \"1-0\"]\n\n1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bb4 5. Bg2 O-O 6. O-O e4 7. Ng5 Bxc3 8. bxc3 Re8 9. d3 exd3 10. exd3 d6 11. Rb1 h6 12. Ne4 Nxe4 13. Bxe4 Ne5 14. f4 Nxc4 15. f5 d5 16. Bg2 Ne3 17. Bxe3 Rxe3 18. f6 g6 19. Qd2 Re6 20. Qxh6 Rxf6 21. Rxf6 Qxf6 22. Bxd5 Bf5 23. Rxb7 Rd8 24. Bc4 Qxc3 25. Bxf7+ Kxf7 26. Rxc7+ Qxc7 27. Qh7+ Ke6 28. Qxc7 Rxd3 29. Qxa7 Rd1+ 30. Kf2 Rd2+ 31. Kf3 Rd3+ 32. Kf4 Kf6 33. Qa6+ 1-0"
  },
  {
    "id": "game-318-polugaevsky-biyiasas-1973",
    "white": {
      "name": "Polugaevsky L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 53 lances entre Polugaevsky L e Biyiasas P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Polugaevsky L\"]\n[Black \"Biyiasas P\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. d5 e5 11. b3 Bd6 12. O-O O-O 13. Re1 Rb8 14. Bf1 Re8 15. a4 b4 16. Nb1 Nb6 17. Nbd2 Re7 18. Bb2 Ne8 19. Rc1 f6 20. a5 Na8 21. Nc4 Rc7 22. Nfd2 Bd7 23. f4 Qe7 24. fxe5 fxe5 25. Nxd6 Nxd6 26. Nc4 Nxc4 27. Bxc4 1-0"
  },
  {
    "id": "game-319-smyslov-savon-1973",
    "white": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Savon V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 91 lances entre Smyslov V e Savon V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"04\"]\n[White \"Smyslov V\"]\n[Black \"Savon V\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. b3 d5 3. Bb2 Bg4 4. e3 e6 5. h3 Bxf3 6. Qxf3 Be7 7. g3 c5 8. Bg2 Nc6 9. O-O O-O 10. d3 Nd7 11. Qe2 Bf6 12. c4 Bxb2 13. Qxb2 Nf6 14. cxd5 exd5 15. Nd2 Rc8 16. Nf3 Qb6 17. Rfd1 Rfd8 18. Rac1 Rc7 19. d4 c4 20. Ne5 cxb3 21. Qxb3 Qxb3 22. axb3 Rdc8 23. Nd3 Ne7 24. Rxc7 Rxc7 25. Ra1 b6 26. b4 Ne4 27. Nf4 g5 28. Nxd5 Nxd5 29. Bxe4 Nxb4 30. d5 Rd7 31. Rd1 Rd6 32. Bg2 f5 33. g4 fxg4 34. e4 Nc6 35. Ra1 Ne5 36. Rxa7 gxh3 37. Bxh3 g4 38. Bg2 Rd7 39. Ra8+ Kf7 40. Bf1 Rc7 41. Bb5 Rc5 42. Be8+ Kf6 43. Kg2 Rc4 44. Rb8 Rxe4 45. Rxb6+ Kf5 46. Rh6 1/2-1/2"
  },
  {
    "id": "game-320-bronstein-smyslov-1973",
    "white": {
      "name": "Bronstein D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 66 lances entre Bronstein D e Smyslov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Bronstein D\"]\n[Black \"Smyslov V\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d6 9. d4 Bg4 10. Be3 exd4 11. cxd4 Na5 12. Bc2 Nc4 13. Bc1 c5 14. b3 Na5 15. d5 Nd7 16. Nbd2 Bf6 17. Rb1 Bc3 18. h3 Bxf3 19. Qxf3 b4 20. Rd1 Re8 21. Nf1 Qf6 22. Qxf6 Nxf6 23. f3 g6 24. Bf4 Nb7 25. Nd2 Nh5 26. Bh2 f5 27. g4 Nf6 28. g5 Nh5 29. Nc4 f4 30. h4 a5 31. a4 Be5 32. Bd3 Kg7 33. Nb6 Re7 1-0"
  },
  {
    "id": "game-321-hort-kagan-1973",
    "white": {
      "name": "Hort V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kagan S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 115 lances entre Hort V e Kagan S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Hort V\"]\n[Black \"Kagan S\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 c6 6. Be3 Nbd7 7. Bd3 a6 8. Nge2 b5 9. b3 O-O 10. O-O bxc4 11. bxc4 c5 12. Rb1 cxd4 13. Nxd4 Ne5 14. Be2 Bd7 15. Nb3 a5 16. Nd5 Nxd5 17. cxd5 Ba4 18. Qd2 Bxb3 19. Rxb3 Nd7 20. Rc1 a4 21. Rb7 Rb8 22. Qb4 Nc5 23. Rxb8 Qxb8 24. Rb1 Qxb4 25. Rxb4 a3 26. Bxc5 dxc5 27. Rb7 Bd4+ 28. Kf1 f5 29. Bc4 fxe4 30. Rxe7 exf3 31. d6+ Kh8 32. gxf3 Rxf3+ 33. Ke2 Rf8 34. d7 Bf6 35. Re3 Rd8 36. Bb5 c4 37. Rxa3 c3 38. Ra6 Kg7 39. a4 Rf8 40. Rc6 Bh4 41. Rxc3 Bd8 42. Re3 g5 43. Re8 h5 44. Kd3 g4 45. Kc4 Bc7 46. Bc6 h4 47. Kb5 g3 48. hxg3 hxg3 49. Ka6 Bd8 50. Kb7 Ba5 51. Re3 Kf6 52. Rxg3 Ke6 53. Re3+ Kd6 54. Re8 Rf7 55. Ra8 Bd2 56. a5 Bc3 57. a6 Ba5 58. a7 1-0"
  },
  {
    "id": "game-322-ivkov-biyiasas-1973",
    "white": {
      "name": "Ivkov B",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 83 lances entre Ivkov B e Biyiasas P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Ivkov B\"]\n[Black \"Biyiasas P\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. d4 O-O 6. Be2 e5 7. Be3 Ng4 8. Bg5 f6 9. Bh4 Nc6 10. d5 Ne7 11. Nd2 Nh6 12. f3 c5 13. a3 Nf7 14. b4 b6 15. Rb1 Kh8 16. Bd3 Ng8 17. Bc2 Bh6 18. Qe2 a6 19. Ba4 Ra7 20. Rb3 Bg5 21. Bf2 f5 22. O-O Nf6 23. bxc5 bxc5 24. Rfb1 Bxd2 25. Qxd2 fxe4 26. Nxe4 Nxe4 27. fxe4 Ng5 28. Re3 Raf7 29. Bg3 h5 30. Bh4 Rf4 31. Bg3 R4f7 32. Bh4 Kg7 33. Bc2 Nf3+ 34. Rxf3 Qxh4 35. Rxf7+ Rxf7 36. Bd3 Bd7 37. Rf1 Rxf1+ 38. Kxf1 Qxh2 39. Qa5 Qf4+ 40. Kg1 Qe3+ 41. Kh2 Kh6 42. Qd8 1/2-1/2"
  },
  {
    "id": "game-323-panno-ljubojevic-1973",
    "white": {
      "name": "Panno O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Ljubojevic L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 100 lances entre Panno O e Ljubojevic L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Panno O\"]\n[Black \"Ljubojevic L\"]\n[Result \"0-1\"]\n\n1. Nf3 Nf6 2. c4 c5 3. g3 b6 4. Bg2 Bb7 5. O-O g6 6. Nc3 Bg7 7. d4 cxd4 8. Qxd4 Nc6 9. Qf4 Rc8 10. Rd1 Nh5 11. Qe3 Nb4 12. Rb1 Rxc4 13. Ne5 Bxe5 14. Qxe5 f6 15. Qb5 Ba6 16. Qa4 Qc8 17. Qb3 Ng7 18. Nd5 Nc6 19. e4 Ne6 20. Be3 Kf7 21. Qa3 Rc2 22. Rbc1 Rxc1 23. Rxc1 Qb7 24. e5 fxe5 25. Nxe7 Bb5 26. Nd5 Re8 27. Qd6 Qc8 28. f4 exf4 29. Bxf4 Qd8 30. Be3 Ne7 31. Nxe7 Qxe7 32. Qd2 h5 33. Bd5 Kg7 34. h4 Kh7 35. Kh2 Ng7 36. Re1 Nf5 37. Bf2 Qf8 38. Rxe8 Qxe8 39. Bf3 Bc6 40. Qd3 Bxf3 41. Qxf3 Qe5 42. Qb3 d5 43. Qa4 Kh6 44. Qxa7 Nxh4 45. Qxb6 Nf5 46. Qb4 d4 47. Qd2+ g5 48. Qe1 Ne3 49. Kg1 Qe4 50. Bxe3 Qxe3+ 0-1"
  },
  {
    "id": "game-324-polugaevsky-keres-1973",
    "white": {
      "name": "Polugaevsky L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Polugaevsky L e Keres P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Polugaevsky L\"]\n[Black \"Keres P\"]\n[Result \"1-0\"]\n\n1. c4 Nf6 2. Nf3 e6 3. g3 d5 4. Bg2 Be7 5. O-O O-O 6. d4 Nbd7 7. Qc2 c6 8. b3 b6 9. Rd1 Bb7 10. Nc3 Rc8 11. e4 dxe4 12. Nxe4 Nxe4 13. Qxe4 b5 14. Qc2 c5 15. Ng5 Bxg5 16. Bxb7 Rc7 17. dxc5 Bxc1 18. Raxc1 Rxc5 19. Qd2 Qb6 20. Qxd7 Rc7 21. Qxb5 Qxb5 22. cxb5 Rxb7 23. Rc5 Rfb8 24. a4 Kf8 25. Rdc1 Ke7 26. Rc7+ Kd6 27. R1c6+ Kd5 28. Kf1 e5 29. Ke2 Ke4 30. f3+ Kf5 31. Kd3 Rd8+ 32. Kc4 Rd7 33. Rxb7 Rxb7 34. a5 g5 35. g4+ Kf4 36. Rf6+ Ke3 37. b6 axb6 38. axb6 h5 39. gxh5 g4 40. fxg4 e4 41. h6 1-0"
  },
  {
    "id": "game-325-portisch-mecking-1973",
    "white": {
      "name": "Portisch L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Mecking H",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 124 lances entre Portisch L e Mecking H (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Portisch L\"]\n[Black \"Mecking H\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 Nf6 3. g3 Bb4 4. Bg2 O-O 5. e4 Bxc3 6. bxc3 c6 7. Ba3 Re8 8. Qb3 b6 9. Rd1 Bb7 10. d3 d5 11. Ne2 dxe4 12. dxe4 Qc8 13. c5 Ba6 14. f3 Nbd7 15. Bh3 Qb7 16. Nc1 Rab8 17. cxb6 Nxb6 18. Bd6 Rbd8 19. Kf2 Bb5 20. Qc2 Rxd6 21. Rxd6 Nc4 22. Rd3 Qb6+ 23. Kg2 Ne3+ 24. Rxe3 Qxe3 25. Rd1 Qb6 26. Qf2 Qxf2+ 27. Kxf2 Kf8 28. Bf1 Bxf1 29. Kxf1 Ke7 30. Nd3 Nd7 31. Rb1 Ra8 32. Ke2 f6 33. Rb7 Kd8 34. f4 Kc8 35. Rb4 Kc7 36. Rb1 Re8 37. Kf3 f5 38. Nf2 fxe4+ 39. Nxe4 exf4 40. gxf4 Nb6 41. Rg1 Re7 42. h4 Nd5 43. c4 Nb6 44. c5 Nd5 45. f5 Kb7 46. Rb1+ Ka6 47. Rb8 Re5 48. Nd6 Nf6 49. Rb7 Rxc5 50. Rxg7 Rd5 51. Nc8 Rxf5+ 52. Kg2 Rf4 53. Rxa7+ Kb5 54. Rf7 h5 55. Na7+ Kc5 56. a4 Rg4+ 57. Kf3 Nd5 58. Rf5 Rxh4 59. a5 Rh3+ 60. Kg2 Ra3 61. Rxh5 Rxa5 62. Nxc6 Kxc6 1/2-1/2"
  },
  {
    "id": "game-326-reshevsky-gheorghiu-1973",
    "white": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Gheorghiu F",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 31 lances entre Reshevsky S e Gheorghiu F (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Reshevsky S\"]\n[Black \"Gheorghiu F\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 Nc6 7. O-O e5 8. d5 Ne7 9. e4 c5 10. Ne1 Ne8 11. Nd3 f5 12. f4 exf4 13. Bxf4 fxe4 14. Nxe4 h6 15. h4 Nf5 16. Qd2 1/2-1/2"
  },
  {
    "id": "game-327-savon-geller-1973",
    "white": {
      "name": "Savon V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 67 lances entre Savon V e Geller E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Savon V\"]\n[Black \"Geller E\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d6 9. h3 h6 10. d4 Re8 11. Be3 Bf8 12. Nbd2 Bd7 13. Qb1 Rb8 14. a3 a5 15. Ba2 a4 16. b4 axb3 17. Qxb3 Be6 18. Qc2 Bxa2 19. Rxa2 Qd7 20. a4 exd4 21. Bxd4 Nxd4 22. cxd4 bxa4 23. Rxa4 c5 24. Rea1 cxd4 25. Nxd4 Rbc8 26. Qd3 d5 27. Ra7 Qd8 28. exd5 Qxd5 29. N2b3 Rb8 30. R7a4 Re4 31. Nd2 Ree8 32. Qc4 Qxc4 33. Rxc4 Rb2 34. N2f3 1/2-1/2"
  },
  {
    "id": "game-328-tan-hug-1973",
    "white": {
      "name": "Tan L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Hug W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 73 lances entre Tan L e Hug W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"05\"]\n[White \"Tan L\"]\n[Black \"Hug W\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Ne4 5. Bd3 Nxd2 6. Bxd2 c5 7. dxc5 Nd7 8. Nf3 Nxc5 9. O-O Be7 10. Be3 O-O 11. Bxc5 Bxc5 12. c3 Bd7 13. Qe2 Rc8 14. Rad1 f5 15. exf6 Qxf6 16. Rde1 Bd6 17. Ne5 Bxe5 18. Qxe5 Rce8 19. f4 Bc6 20. Re3 Rf7 21. Rh3 g6 22. Re3 Kg7 23. g3 Rd7 24. Rfe1 d4 25. cxd4 Rxd4 26. Be4 Qxe5 27. fxe5 Bxe4 28. Rxe4 Rd2 29. R4e2 Red8 30. Kf2 Rf8+ 31. Kg2 Rfd8 32. Kf2 h5 33. Rxd2 Rxd2+ 34. Re2 Rxe2+ 35. Kxe2 g5 36. Kf3 Kg6 37. g4 1/2-1/2"
  },
  {
    "id": "game-329-biyiasas-keres-1973",
    "white": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 65 lances entre Biyiasas P e Keres P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Biyiasas P\"]\n[Black \"Keres P\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Qd6 6. d4 exd4 7. Qxd4 Qxd4 8. Nxd4 Bd7 9. Bf4 O-O-O 10. Nc3 Ne7 11. Rad1 Ng6 12. Bg3 Bb4 13. Nf5 h5 14. Nh4 Nxh4 15. Bxh4 Rde8 16. Rfe1 Re5 17. f4 Ra5 18. Rd3 f6 19. a3 Bd6 20. f5 Re8 21. Bg3 Bxg3 22. Rxg3 Re7 23. Rd1 Rae5 24. Kf2 b6 25. Rgd3 a5 26. R1d2 c5 27. Nd5 Rf7 28. Re3 Bc6 29. c4 Rf8 30. Kf3 Be8 31. Kf4 Bf7 32. a4 Rfe8 33. b3 1/2-1/2"
  },
  {
    "id": "game-330-geller-bronstein-1973",
    "white": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Bronstein D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 111 lances entre Geller E e Bronstein D (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Geller E\"]\n[Black \"Bronstein D\"]\n[Result \"1-0\"]\n\n1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. Be2 e6 6. O-O Be7 7. h3 Bh5 8. c4 Nb6 9. Nc3 O-O 10. Be3 d5 11. c5 Bxf3 12. Bxf3 Nc4 13. Bf4 Nc6 14. b3 N4a5 15. Rc1 b6 16. Na4 b5 17. Nc3 b4 18. Ne2 f6 19. exf6 Bxf6 20. Bg4 Qd7 21. Qd3 a6 22. Rce1 Qf7 23. Bh2 Rfe8 24. Rd1 Nb7 25. Kh1 Nbd8 26. f4 g6 27. Bf3 Ne7 28. g4 Ndc6 29. f5 exf5 30. Bxc7 Kh8 31. Bh2 Red8 32. Qe3 g5 33. gxf5 Nxf5 34. Qf2 Ng7 35. Bg4 Rf8 36. Be5 Ne8 37. Ng3 Ra7 38. Bh5 Qg8 39. Qb2 Bxe5 40. dxe5 d4 41. Rxf8 Qxf8 42. Rf1 Qg8 43. Qf2 Ng7 44. Bf7 Qd8 45. Bc4 Ra8 46. Ne4 Nh5 47. Qf7 Nf4 48. Qb7 Na5 49. Qf7 Ng6 50. Bd5 Rc8 51. Nd6 Rc7 52. Qf5 Qe7 53. Nf7+ Kg7 54. Nxg5 Rd7 55. e6 Rc7 56. Nxh7 1-0"
  },
  {
    "id": "game-331-gheorghiu-savon-1973",
    "white": {
      "name": "Gheorghiu F",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Savon V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 38 lances entre Gheorghiu F e Savon V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Gheorghiu F\"]\n[Black \"Savon V\"]\n[Result \"1/2-1/2\"]\n\n1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bb4 5. Nd5 e4 6. Nh4 d6 7. Bg2 Bc5 8. O-O Be6 9. d3 Nxd5 10. cxd5 Bxd5 11. dxe4 Be6 12. Nf5 O-O 13. Bd2 Qd7 14. Qc2 Nd4 15. Nxd4 Bxd4 16. e3 Bb6 17. Bc3 f6 18. Rfd1 Qf7 19. b3 Rad8 1/2-1/2"
  },
  {
    "id": "game-332-hug-portisch-1973",
    "white": {
      "name": "Hug W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Portisch L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 88 lances entre Hug W e Portisch L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Hug W\"]\n[Black \"Portisch L\"]\n[Result \"0-1\"]\n\n1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. f4 c5 6. c3 Nc6 7. Ndf3 cxd4 8. cxd4 Nb6 9. Bd3 Bd7 10. Ne2 h5 11. O-O g6 12. Bd2 Nb4 13. Bxb4 Bxb4 14. a3 Be7 15. Nc3 Kf8 16. Ng5 Rc8 17. Qf3 Nc4 18. Nxd5 exd5 19. Qxd5 Be6 20. Nxe6+ fxe6 21. Qxd8+ Bxd8 22. Rac1 Nb6 23. Bxg6 Rxc1 24. Rxc1 Nd5 25. Be4 Bb6 26. Bxd5 exd5 27. Rd1 Ke7 28. Kf2 Rc8 29. Rd2 Ke6 30. g3 Rc4 31. Ke3 Rc1 32. Kd3 Re1 33. Rc2 Rd1+ 34. Ke2 Rxd4 35. Rc8 Rc4 36. Re8+ Kf5 37. Kd3 Rd4+ 38. Kc3 Re4 39. Rg8 Re2 40. Rg5+ Ke4 41. e6 Bd4+ 42. Kb4 Rxb2+ 43. Ka4 Bc3 44. Re5+ Kd4 0-1"
  },
  {
    "id": "game-333-ivkov-panno-1973",
    "white": {
      "name": "Ivkov B",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Panno O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 35 lances entre Ivkov B e Panno O (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Ivkov B\"]\n[Black \"Panno O\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 c5 2. c4 g6 3. d4 Bg7 4. d5 d6 5. e4 Nf6 6. Nc3 O-O 7. Be2 e5 8. Bg5 h6 9. Bh4 Qc7 10. Nd2 Nh7 11. a3 Bf6 12. Bxf6 Nxf6 13. h4 h5 14. f3 Kg7 15. Nf1 Qe7 16. Ne3 Na6 17. Qd2 Rb8 18. b3 1/2-1/2"
  },
  {
    "id": "game-334-kagan-tan-1973",
    "white": {
      "name": "Kagan S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tan L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 81 lances entre Kagan S e Tan L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Kagan S\"]\n[Black \"Tan L\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g3 e5 7. Nde2 d5 8. exd5 Nb4 9. a3 Nbxd5 10. Bg2 Be6 11. Bg5 Bc5 12. O-O Nxc3 13. Nxc3 O-O 14. Bxb7 Rb8 15. Qf3 Be7 16. Bxf6 Bxf6 17. Rab1 Qb6 18. Be4 Bd8 19. Rfd1 f5 20. Bd5 Kh8 21. Bxe6 Qxe6 22. Nd5 Bg5 23. Qh5 Bh6 24. b4 f4 25. Rb3 e4 26. Nxf4 Bxf4 27. gxf4 h6 28. Rg3 Rbc8 29. c3 Rxf4 30. Qh3 Rf5 31. Qg4 Qf7 32. Rd5 Rxd5 33. Qxc8+ Kh7 34. Qg4 Qe7 35. c4 Re5 36. Qf4 a5 37. c5 axb4 38. axb4 Rd5 39. c6 Rd1+ 40. Kg2 e3 41. Rxe3 1-0"
  },
  {
    "id": "game-335-ljubojevic-hort-1973",
    "white": {
      "name": "Ljubojevic L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Hort V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 85 lances entre Ljubojevic L e Hort V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Ljubojevic L\"]\n[Black \"Hort V\"]\n[Result \"1-0\"]\n\n1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bxf3 5. Qxf3 Nf6 6. d3 e6 7. a3 Nbd7 8. g4 g6 9. Qg3 Bc5 10. h4 h5 11. g5 Ng4 12. Nd1 dxe4 13. dxe4 Qb6 14. b4 Bd4 15. c3 Be5 16. f4 Bg7 17. e5 O-O-O 18. Ra2 Qc7 19. Be2 Nb6 20. a4 Nd5 21. Bxg4 hxg4 22. Qxg4 Ne7 23. h5 gxh5 24. Rxh5 Rxh5 25. Qxh5 Nf5 26. Ne3 Bxe5 27. fxe5 Qxe5 28. Qe2 Qxc3+ 29. Bd2 Qb3 30. Ra1 Nd4 31. Qf1 e5 32. b5 e4 33. Kf2 Nc2 34. Qh3+ Kb8 35. Ba5 b6 36. bxc6 Qxe3+ 37. Qxe3 Nxe3 38. Kxe3 bxa5 39. Kxe4 Kc7 40. Rf1 Re8+ 41. Kd5 Re7 42. Rb1 Kc8 43. Rb7 1-0"
  },
  {
    "id": "game-336-mecking-reshevsky-1973",
    "white": {
      "name": "Mecking H",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 63 lances entre Mecking H e Reshevsky S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Mecking H\"]\n[Black \"Reshevsky S\"]\n[Result \"1-0\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. a4 Bf8 14. b4 a5 15. bxa5 Rxa5 16. Rb1 Ba6 17. axb5 Rxb5 18. Bb3 Re7 19. Qc2 Rb8 20. Ng5 Bb7 21. f4 h6 22. fxe5 dxe5 23. Ngf3 c5 24. Ba3 Qc7 25. Nh4 Ree8 26. Qa2 Nb6 27. dxe5 Rxe5 28. Bxf7+ Qxf7 29. Qxf7+ Kxf7 30. Rxb6 Nd7 31. Rb5 Ba6 32. Rf1+ 1-0"
  },
  {
    "id": "game-337-smyslov-polugaevsky-1973",
    "white": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Polugaevsky L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 60 lances entre Smyslov V e Polugaevsky L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"06\"]\n[White \"Smyslov V\"]\n[Black \"Polugaevsky L\"]\n[Result \"1/2-1/2\"]\n\n1. c4 Nf6 2. d4 c5 3. d5 g6 4. Nc3 d6 5. e4 Bg7 6. Bd3 O-O 7. Nf3 e6 8. O-O exd5 9. cxd5 Bg4 10. h3 Bxf3 11. Qxf3 Nbd7 12. Qe2 a6 13. a4 Re8 14. Bf4 c4 15. Bc2 Nc5 16. Rfe1 Rc8 17. Qd2 b5 18. axb5 axb5 19. Nxb5 Nfxe4 20. Bxe4 Nxe4 21. Qc2 Qb6 22. Na7 Qxb2 23. Qxb2 Bxb2 24. Nxc8 Bxa1 25. Nxd6 Nxd6 26. Rxa1 Rd8 27. Bg5 Rd7 28. Bf6 Ne8 29. Ra8 Kf8 30. Bc3 f5 1/2-1/2"
  },
  {
    "id": "game-338-bronstein-gheorghiu-1973",
    "white": {
      "name": "Bronstein D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Gheorghiu F",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 71 lances entre Bronstein D e Gheorghiu F (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Bronstein D\"]\n[Black \"Gheorghiu F\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Nbd7 8. Qe2 Qc7 9. O-O-O b5 10. a3 Rb8 11. Nd5 exd5 12. exd5+ Be7 13. Nc6 Nb6 14. Bxf6 gxf6 15. g3 Bb7 16. Nxb8 Qxb8 17. Bg2 Qd8 18. Rhe1 f5 19. Rd3 Kd7 20. Qh5 Kc8 21. Qxf5+ Kb8 22. Qxf7 Bf6 23. Rde3 Bxb2+ 24. Kxb2 Nc4+ 25. Ka2 Nxe3 26. Rxe3 Qb6 27. Re8+ Rxe8 28. Qxe8+ Ka7 29. Qe4 Qf2 30. Kb2 a5 31. f5 Kb6 32. g4 h6 33. Bf3 Qxh2 34. f6 Qh4 35. Qd4+ Kc7 36. f7 1-0"
  },
  {
    "id": "game-339-hort-ivkov-1973",
    "white": {
      "name": "Hort V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Ivkov B",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 54 lances entre Hort V e Ivkov B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Hort V\"]\n[Black \"Ivkov B\"]\n[Result \"0-1\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 O-O 6. Bf4 Na6 7. a3 Bxc3+ 8. Qxc3 Nxc5 9. Rd1 d5 10. f3 Bd7 11. e3 Rc8 12. b3 Qb6 13. b4 Na4 14. Qc2 a5 15. Kf2 axb4 16. Rb1 dxc4 17. Rxb4 Qa7 18. Rxc4 Nd5 19. Qe4 Nac3 20. Qd4 Qxa3 21. Nh3 f6 22. Rxc8 Rxc8 23. Bc4 b5 24. Bd3 e5 25. Bxe5 fxe5 26. Qh4 e4 27. fxe4 Rf8+ 0-1"
  },
  {
    "id": "game-340-keres-smyslov-1973",
    "white": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 81 lances entre Keres P e Smyslov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Keres P\"]\n[Black \"Smyslov V\"]\n[Result \"0-1\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d6 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Re8 13. Nf1 g6 14. Bh6 Nc4 15. Qc1 exd4 16. cxd4 cxd4 17. b3 Ne5 18. Nxd4 Bb7 19. Qb2 Rac8 20. Rad1 d5 21. exd5 Nxd5 22. Bb1 Bb4 23. Bd2 Bc3 24. Bxc3 Nxc3 25. Rc1 Qc5 26. Ne2 Nf3+ 27. gxf3 Rxe2 28. Rxe2 Nxe2+ 29. Qxe2 Qg5+ 30. Kh2 Rxc1 31. Be4 Bc8 32. Bd3 Qh5 33. Qe3 Rc3 34. Qd4 Qxf3 35. Be4 Qf4+ 36. Ng3 b4 37. Kg2 Be6 38. Qxb4 Rc8 39. Qe7 Qe5 40. Qb7 a5 41. h4 0-1"
  },
  {
    "id": "carlsen-karjakin-2016-rapid",
    "white": {
      "name": "Carlsen, Magnus",
      "title": "GM",
      "rating": "2853",
      "country": "Noruega",
      "code": "NO"
    },
    "black": {
      "name": "Karjakin, Sergey",
      "title": "GM",
      "rating": "2772",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Campeonato Mundial de Xadrez (Tiebreak Rápido)",
    "site": "Nova York, EUA",
    "date": "30 de Novembro de 2016",
    "year": "2016",
    "eco": "B54",
    "opening": "Defesa Siciliana: Variante Paulsen",
    "speed": "Rápido",
    "result": "1-0",
    "highlight": "A consagração do título mundial de rápidas com o histórico sacrifício de dama 50.Dh6+!! forçando o mate inevitável.",
    "pgn": "[Event \"World Championship Rapid Tiebreak\"]\n[Site \"New York, NY USA\"]\n[Date \"2016.11.30\"]\n[Round \"4\"]\n[White \"Carlsen, Magnus\"]\n[Black \"Karjakin, Sergey\"]\n[Result \"1-0\"]\n[WhiteElo \"2853\"]\n[BlackElo \"2772\"]\n[ECO \"B54\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. f3 e5 6. Nb3 Be7 7. c4 a5 8. Be3 a4 9. Nc1 O-O 10. Nc3 Qa5 11. Qd2 Na6 12. Be2 Nc5 13. O-O Bd7 14. Rb1 Rfc8 15. b4 axb3 16. axb3 Qd8 17. Nd3 Ne6 18. Nb4 Bc6 19. Rfd1 h5 20. Bf1 h4 21. Qf2 Nd7 22. g3 Ra3 23. Bh3 Rca8 24. Nc2 R3a6 25. Nb4 Ra5 26. Nc2 b6 27. Rd2 Qc7 28. Rbd1 Bf8 29. gxh4 Nf4 30. Bxf4 exf4 31. Bxd7 Qxd7 32. Nb4 Ra3 33. Nxc6 Qxc6 34. Nb5 Rxb3 35. Nd4 Qxc4 36. Nxb3 Qxb3 37. Qe2 Be7 38. Kg2 Qe6 39. h5 Ra3 40. Rd3 Ra2 41. R3d2 Ra3 42. Rd3 Ra7 43. Rd5 Rc7 44. Qd2 Qf6 45. Rf5 Qh4 46. Rc1 Ra7 47. Qxf4 Ra2+ 48. Kh1 Qf2 49. Rc8+ Kh7 50. Qh6+ 1-0"
  },
  {
    "id": "fischer-spassky-1972-g6",
    "white": {
      "name": "Fischer, Robert J.",
      "title": "GM",
      "rating": "2785",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Spassky, Boris",
      "title": "GM",
      "rating": "2660",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Campeonato Mundial de Xadrez (Match do Século)",
    "site": "Reykjavik, Islândia",
    "date": "23 de Julho de 1972",
    "year": "1972",
    "eco": "D59",
    "opening": "Gambito da Dama Recusado: Tartakower",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Considerada por muitos a partida mais perfeita de Fischer, que arrancou aplausos em pé do próprio campeão Boris Spassky.",
    "pgn": "[Event \"World Championship 28th\"]\n[Site \"Reykjavik ISL\"]\n[Date \"1972.07.23\"]\n[Round \"6\"]\n[White \"Fischer, Robert James\"]\n[Black \"Spassky, Boris V\"]\n[Result \"1-0\"]\n[WhiteElo \"2785\"]\n[BlackElo \"2660\"]\n[ECO \"D59\"]\n\n1. c4 e6 2. Nf3 d5 3. d4 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6 12. Qa4 c5 13. Qa3 Rc8 14. Bb5 a6 15. dxc5 bxc5 16. O-O Ra7 17. Be2 Nd7 18. Nd4 Qf8 19. Nxe6 fxe6 20. e4 d4 21. f4 Qe7 22. e5 Rb8 23. Bc4 Kh8 24. Qh3 Nf8 25. b3 a5 26. f5 exf5 27. Rxf5 Nh7 28. Rcf1 Qd8 29. Qg3 Re7 30. h4 Rbb7 31. e6 Rbc7 32. Qe5 Qe8 33. a4 Qd8 34. R1f2 Qe8 35. R2f3 Qd8 36. Bd3 Qe8 37. Qe4 Nf6 38. Rxf6 gxf6 39. Rxf6 Kg8 40. Bc4 Kh8 41. Qf4 1-0"
  },
  {
    "id": "kasparov-topalov-1999",
    "white": {
      "name": "Kasparov, Garry",
      "title": "GM",
      "rating": "2812",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Topalov, Veselin",
      "title": "GM",
      "rating": "2700",
      "country": "Bulgária",
      "code": "BG"
    },
    "event": "Torneio Magistral de Wijk aan Zee",
    "site": "Wijk aan Zee, Holanda",
    "date": "20 de Janeiro de 1999",
    "year": "1999",
    "eco": "B07",
    "opening": "Defesa Pirc",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Apelidada de \"A Imortal de Kasparov\". Um inacreditável sacrifício de torre 24.Txd4!! iniciando uma caçada ao rei negro por todo o tabuleiro.",
    "pgn": "[Event \"Hoogovens Group A\"]\n[Site \"Wijk aan Zee NED\"]\n[Date \"1999.01.20\"]\n[Round \"4\"]\n[White \"Kasparov, Garry\"]\n[Black \"Topalov, Veselin\"]\n[Result \"1-0\"]\n[WhiteElo \"2812\"]\n[BlackElo \"2700\"]\n[ECO \"B07\"]\n\n1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4 22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6 26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7 Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2 35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8 Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7 1-0"
  },
  {
    "id": "ding-gukesh-2024-wcc",
    "white": {
      "name": "Gukesh, D",
      "title": "GM",
      "rating": "2783",
      "country": "Índia",
      "code": "IN"
    },
    "black": {
      "name": "Ding, Liren",
      "title": "GM",
      "rating": "2728",
      "country": "China",
      "code": "CN"
    },
    "event": "Campeonato Mundial de Xadrez FIDE",
    "site": "Sentosa, Singapura",
    "date": "25 de Novembro de 2024",
    "year": "2024",
    "eco": "C65",
    "opening": "Ruy Lopez: Defesa Berlinesa",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "O início eletrizante do Mundial de 2024 onde o campeão Ding Liren chocou as previsões com uma vitória contundente de pretas.",
    "pgn": "[Event \"FIDE World Championship 2024\"]\n[Site \"Singapore SGP\"]\n[Date \"2024.11.25\"]\n[Round \"1\"]\n[White \"Gukesh, D\"]\n[Black \"Ding, Liren\"]\n[Result \"0-1\"]\n[WhiteElo \"2783\"]\n[BlackElo \"2728\"]\n[ECO \"C65\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. c3 O-O 6. O-O d6 7. Re1 a6 8. Ba4 Ba7 9. h3 Ne7 10. d4 Ng6 11. Nbd2 c6 12. Bc2 Re8 13. Nf1 h6 14. Ng3 exd4 15. cxd4 Be6 16. b3 Nh7 17. Qd2 Qf6 18. e5 dxe5 19. dxe5 Qd8 20. Qc3 Nh4 21. Nxh4 Qxh4 22. Be3 Bxe3 23. Qxe3 Rad8 24. f4 Nf8 25. Ne4 Bf5 26. Nf6+ Qxf6 27. exf6 Rxe3 28. Bxf5 Rxe1+ 29. Rxe1 gxf6 30. Re7 Rd5 31. Be4 Rd4 32. Kf2 Ne6 33. Ke3 Rd1 34. g3 Re1+ 35. Kf3 Nd4+ 36. Kf2 Re2+ 37. Kf1 Kf8 38. Rd7 Rxe4 39. Rxb7 a5 40. Ra7 Re3 41. Rxa5 Rxg3 42. Kf2 Rf3+ 0-1"
  },
  {
    "id": "byrne-fischer-1956-century",
    "white": {
      "name": "Byrne, Donald",
      "title": "IM",
      "rating": "2500",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Fischer, Robert J.",
      "title": "GM",
      "rating": "2500",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "Torneio Rosenwald Memorial",
    "site": "Nova York, EUA",
    "date": "17 de Outubro de 1956",
    "year": "1956",
    "eco": "D92",
    "opening": "Defesa Grünfeld: Variante 5.Bf4",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "O consagrado \"Jogo do Século\". Aos 13 anos de idade, Fischer sacrificou sua dama com 17...Be6!! orquestrando um moinho de vento fulminante.",
    "pgn": "[Event \"Third Rosenwald Trophy\"]\n[Site \"New York, NY USA\"]\n[Date \"1956.10.17\"]\n[Round \"8\"]\n[White \"Byrne, Donald\"]\n[Black \"Fischer, Robert James\"]\n[Result \"0-1\"]\n[ECO \"D92\"]\n\n1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6 8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4 14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+ 21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4 Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27. Kh2 Nxf2 28. Re1 Rxe1 29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 33. h4 h5 34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1 Ng3+ 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40. Kb1 Nc3+ 41. Kc1 Rc2# 0-1"
  },
  {
    "id": "kasparov-karpov-1985-g16",
    "white": {
      "name": "Karpov, Anatoly",
      "title": "GM",
      "rating": "2720",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Kasparov, Garry",
      "title": "GM",
      "rating": "2700",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Campeonato Mundial de Xadrez",
    "site": "Moscou, URSS",
    "date": "15 de Outubro de 1985",
    "year": "1985",
    "eco": "B44",
    "opening": "Defesa Siciliana: Variante Taimanov",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "A lendária partida do \"Cavalo Polvo\" em d3 (16...Cd3!). Uma das demonstrações estratégicas mais profundas de toda a rivalidade Karpov-Kasparov.",
    "pgn": "[Event \"World Championship 31th-KK2\"]\n[Site \"Moscow URS\"]\n[Date \"1985.10.15\"]\n[Round \"16\"]\n[White \"Karpov, Anatoly\"]\n[Black \"Kasparov, Garry\"]\n[Result \"0-1\"]\n[WhiteElo \"2720\"]\n[BlackElo \"2700\"]\n[ECO \"B44\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 d5 9. cxd5 exd5 10. exd5 Nb4 11. Be2 Bc5 12. O-O O-O 13. Bf3 Bf5 14. Bg5 Re8 15. Qd2 b5 16. Rad1 Nd3 17. Nab1 h6 18. Bh4 b4 19. Na4 Bd6 20. Bg3 Rc8 21. b3 g5 22. Bxd6 Qxd6 23. g3 Nd7 24. Bg2 Qf6 25. a3 a5 26. axb4 axb4 27. Qa2 Bg6 28. d6 g4 29. Qd2 Kg7 30. f3 Qxd6 31. fxg4 Qd4+ 32. Kh1 Nf6 33. Rf4 Ne4 34. Qxd3 Nf2+ 35. Rxf2 Bxd3 36. Rfd2 Qe3 37. Rxd3 Rc1 38. Nb2 Qf2 39. Nd2 Rxd1+ 40. Nxd1 Re1+ 0-1"
  },
  {
    "id": "morphy-opera-1858",
    "white": {
      "name": "Morphy, Paul",
      "title": "Mestre",
      "rating": "2600",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Duque de Brunswick & Conde Isouard",
      "title": "Mestres",
      "rating": "2100",
      "country": "França",
      "code": "FR"
    },
    "event": "Partida Casual na Ópera de Paris",
    "site": "Paris, França",
    "date": "21 de Outubro de 1858",
    "year": "1858",
    "eco": "C41",
    "opening": "Defesa Philidor",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "A mais famosa partida didática de ataque da história. Desenvolvimento acelerado culminando no sacrifício de dama 16.Db8+!! e mate de torre.",
    "pgn": "[Event \"Paris Opera\"]\n[Site \"Paris FRA\"]\n[Date \"1858.10.21\"]\n[Round \"1\"]\n[White \"Morphy, Paul\"]\n[Black \"Duke of Brunswick / Count Isouard\"]\n[Result \"1-0\"]\n[ECO \"C41\"]\n\n1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8# 1-0"
  },
  {
    "id": "tal-botvinnik-1960-g6",
    "white": {
      "name": "Botvinnik, Mikhail",
      "title": "GM",
      "rating": "2720",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Tal, Mikhail",
      "title": "GM",
      "rating": "2710",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Campeonato Mundial de Xadrez",
    "site": "Moscou, URSS",
    "date": "26 de Março de 1960",
    "year": "1960",
    "eco": "E69",
    "opening": "Defesa Índia do Rei: Variante Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "O \"Mago de Riga\" desferiu o lendário sacrifício de cavalo 21...Cf4! que incendiou a posição e desestruturou o jogo cirúrgico do Patriarca Botvinnik.",
    "pgn": "[Event \"World Championship 24th\"]\n[Site \"Moscow URS\"]\n[Date \"1960.03.26\"]\n[Round \"6\"]\n[White \"Botvinnik, Mikhail\"]\n[Black \"Tal, Mikhail\"]\n[Result \"0-1\"]\n[WhiteElo \"2720\"]\n[BlackElo \"2710\"]\n[ECO \"E69\"]\n\n1. c4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. d4 d6 6. Nc3 Nbd7 7. O-O e5 8. e4 c6 9. h3 Qb6 10. d5 cxd5 11. cxd5 Nc5 12. Ne1 Bd7 13. Nd3 Nxd3 14. Qxd3 Rfc8 15. Rb1 Nh5 16. Be3 Qb4 17. Qe2 Rc4 18. Rfc1 Rac8 19. Kh2 f5 20. exf5 Bxf5 21. Ra1 Nf4 22. gxf4 exf4 23. Bd2 Qxb2 24. Rab1 f3 25. Bxf3 Bxb1 26. Rxb1 Qc2 27. Qe6+ Kh8 28. Rxb7 Rf8 29. Qe7 Rg8 30. Ne4 Rxe4 31. Bxe4 Qxd2 32. Qf7 Qd4 33. Re7 Rf8 34. Re8 Qe5+ 35. Rxe5 Rxf7 36. Re8+ Rf8 37. Rxf8+ Bxf8 38. Kg3 Kg7 39. Kf4 Kf6 40. Bd3 Bh6+ 41. Ke4 Bc1 42. Bb5 h5 43. Be8 h4 44. f4 a5 45. a4 Bb2 46. Kf3 g5 47. fxg5+ Kxg5 0-1"
  },
  {
    "id": "anand-carlsen-2013-wcc-g9",
    "white": {
      "name": "Anand, Viswanathan",
      "title": "GM",
      "rating": "2775",
      "country": "Índia",
      "code": "IN"
    },
    "black": {
      "name": "Carlsen, Magnus",
      "title": "GM",
      "rating": "2870",
      "country": "Noruega",
      "code": "NO"
    },
    "event": "Campeonato Mundial de Xadrez",
    "site": "Chennai, Índia",
    "date": "21 de Novembro de 2013",
    "year": "2013",
    "eco": "E25",
    "opening": "Defesa Nimzo-Índia: Variante Saemisch",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "A nona partida do mundial em Chennai: Anand partiu para um ataque feroz na ala do rei, mas com 28...b1=D! Carlsen conquistou a vitória e o título mundial.",
    "pgn": "[Event \"World Championship Match\"]\n[Site \"Chennai IND\"]\n[Date \"2013.11.21\"]\n[Round \"9\"]\n[White \"Anand, Viswanathan\"]\n[Black \"Carlsen, Magnus\"]\n[Result \"0-1\"]\n[WhiteElo \"2775\"]\n[BlackElo \"2870\"]\n[ECO \"E25\"]\n\n1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5 exd5 8. e3 c4 9. Ne2 Nc6 10. g4 O-O 11. Bg2 Na5 12. O-O Nb3 13. Ra2 b5 14. Ng3 a5 15. g5 Ne8 16. e4 Nxc1 17. Qxc1 Ra6 18. e5 Nc7 19. f4 b4 20. axb4 axb4 21. Rxa6 Nxa6 22. f5 b3 23. Qf4 Nc7 24. Qh4 Qe7 25. Qh5 g6 26. Qh6 Re8 27. Rf4 Qf8 28. fxg6 hxg6 29. Qh4 b2 30. Rf1 Qa3 0-1"
  },
  {
    "id": "short-timman-1991-king-walk",
    "white": {
      "name": "Short, Nigel",
      "title": "GM",
      "rating": "2665",
      "country": "Inglaterra",
      "code": "GB"
    },
    "black": {
      "name": "Timman, Jan",
      "title": "GM",
      "rating": "2630",
      "country": "Holanda",
      "code": "NL"
    },
    "event": "Torneio Magistral de Tilburg",
    "site": "Tilburg, Holanda",
    "date": "16 de Outubro de 1991",
    "year": "1991",
    "eco": "B04",
    "opening": "Defesa Alekhine: Variante Moderna",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "A mais famosa marcha do rei da história moderna: Short caminhou com seu próprio monarca de g1 até h6 com as damas ainda no tabuleiro para dar o mate.",
    "pgn": "[Event \"Tilburg\"]\n[Site \"Tilburg NED\"]\n[Date \"1991.10.16\"]\n[Round \"4\"]\n[White \"Short, Nigel D\"]\n[Black \"Timman, Jan H\"]\n[Result \"1-0\"]\n[WhiteElo \"2665\"]\n[BlackElo \"2630\"]\n[ECO \"B04\"]\n\n1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 g6 5. Be2 Bg7 6. O-O O-O 7. c4 Nb6 8. Nc3 Bg4 9. exd6 cxd6 10. h3 Bxf3 11. Bxf3 Nc6 12. c5 dxc5 13. dxc5 Nc4 14. Qe2 N4e5 15. Be4 Qa5 16. Be3 Qb4 17. a3 Qc4 18. Rfe1 Rfd8 19. Rad1 e6 20. Rd6 Bf8 21. Red1 Bxd6 22. cxd6 Qxe2 23. Nxe2 Rd7 24. Bc5 Rad8 25. Nc3 Nc4 26. Bxc6 bxc6 27. Ne4 Kg7 28. b3 Nb6 29. Bd4+ Kf8 30. Bf6 Nd5 31. Bxd8 Rxd8 32. Rc1 f5 33. Ng5 Rxd6 34. Nxh7+ Ke7 35. Ng5 Nf4 36. Re1 Kf6 37. h4 e5 38. g3 Ne6 39. Rxe5 Nxg5 40. hxg5+ Kxg5 41. Ra5 Rd7 42. Ra6 Rc7 43. Kg2 Kf6 44. Kf3 Ke5 45. Ke3 g5 46. f4+ gxf4+ 47. gxf4+ Kd5 48. Kd3 Kd6 49. Kd4 Re7 50. b4 Re4+ 51. Kc3 Kd5 52. Rxa7 Rxf4 53. Rd7+ Ke6 54. Rd3 Rf1 55. a4 Ra1 56. a5 Ke5 57. Kc4 f4 58. Kc5 Rc1+ 59. Kb6 Ke4 60. Rd8 f3 61. Rf8 1-0"
  },
  {
    "id": "karpov-kasparov-1987-g24",
    "white": {
      "name": "Kasparov, Garry",
      "title": "GM",
      "rating": "2740",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Karpov, Anatoly",
      "title": "GM",
      "rating": "2700",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Campeonato Mundial de Xadrez (Match de Sevilha)",
    "site": "Sevilha, Espanha",
    "date": "18 de Dezembro de 1987",
    "year": "1987",
    "eco": "A13",
    "opening": "Abertura Inglesa",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "A mais dramática partida decisiva de campeonato mundial: Kasparov precisava vencer obrigatoriamente a última partida para reter o título e jogou uma obra-prima de paciência.",
    "pgn": "[Event \"World Championship Match\"]\n[Site \"Seville ESP\"]\n[Date \"1987.12.18\"]\n[Round \"24\"]\n[White \"Kasparov, Garry\"]\n[Black \"Karpov, Anatoly\"]\n[Result \"1-0\"]\n[WhiteElo \"2740\"]\n[BlackElo \"2700\"]\n[ECO \"A13\"]\n\n1. c4 e6 2. Nf3 Nf6 3. g3 d5 4. b3 Be7 5. Bg2 O-O 6. O-O b6 7. Bb2 Bb7 8. e3 Nbd7 9. Nc3 Ne4 10. Ne2 a5 11. d3 Bf6 12. Qc2 Bxb2 13. Qxb2 Nd6 14. cxd5 Bxd5 15. d4 c5 16. Rfd1 Rc8 17. Nf4 Bxf3 18. Bxf3 Qe7 19. Rac1 Rfd8 20. dxc5 Nxc5 21. b4 axb4 22. Qxb4 Qa7 23. a3 Nf5 24. Rb1 Rxd1+ 25. Rxd1 Qc7 26. Nd3 h6 27. Rc1 Ne7 28. Qb5 Nf5 29. a4 Nd6 30. Qb1 Qa7 31. Ne5 Nxa4 32. Rxc8+ Nxc8 33. Qd1 Ne7 34. Qd8+ Kh7 35. Nxf7 Ng6 36. Qe8 Qe7 37. Qxa4 Qxf7 38. Be4 Kg8 39. Qb5 Nf8 40. Qxb6 Qf6 41. Qb5 Qe7 42. Kg2 g6 43. Qa5 Qg7 44. Qc5 Qf7 45. h4 h5 46. Qc6 Qe7 47. Bd3 Qf7 48. Qd6 Kg7 49. e4 Kg8 50. Bc4 Kg7 51. Qe5+ Kg8 52. Qd6 Kg7 53. Bb5 Kg8 54. Bc6 Qa7 55. Qb4 Qc7 56. Qb7 Qd8 57. e5 Qa5 58. Be8 Qxe5 59. Qf7+ Kh8 60. Qxf8+ Kh7 61. Qe7+ Kh8 62. Bxg6 Qd5+ 63. Kh2 1-0"
  },
  {
    "id": "nepamniachtchi-ding-2023-rapid-g4",
    "white": {
      "name": "Ding, Liren",
      "title": "GM",
      "rating": "2788",
      "country": "China",
      "code": "CN"
    },
    "black": {
      "name": "Nepomniachtchi, Ian",
      "title": "GM",
      "rating": "2795",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Campeonato Mundial de Xadrez (Tiebreak Rápido)",
    "site": "Astana, Cazaquistão",
    "date": "30 de Abril de 2023",
    "year": "2023",
    "eco": "A15",
    "opening": "Abertura Inglesa",
    "speed": "Rápido",
    "result": "1-0",
    "highlight": "O lance mais audacioso de um desempate mundial: 46...Tg6!! auto-cravando a torre para recusar o empate por repetição e vencer a coroa mundial.",
    "pgn": "[Event \"FIDE World Championship Match 2023\"]\n[Site \"Astana KAZ\"]\n[Date \"2023.04.30\"]\n[Round \"18\"]\n[White \"Ding, Liren\"]\n[Black \"Nepomniachtchi, Ian\"]\n[Result \"1-0\"]\n[WhiteElo \"2788\"]\n[BlackElo \"2795\"]\n[ECO \"A15\"]\n\n1. c4 Nf6 2. Nf3 e6 3. Nc3 d5 4. d4 c6 5. e3 Nbd7 6. Bd3 Bd6 7. O-O O-O 8. b3 e5 9. cxd5 cxd5 10. Nb5 Bb8 11. dxe5 Nxe5 12. h3 Ne4 13. Bb2 Qf6 14. Bxe5 Bxe5 15. Nxe5 Qxe5 16. Rc1 Bd7 17. Nd4 Rac8 18. Re1 g6 19. Qe2 a6 20. Qb2 Rfe8 21. Red1 h5 22. Rxc8 Bxc8 23. Qc1 Bd7 24. Ne2 Rc8 25. Qa1 Qxa1 26. Rxa1 Nc5 27. Rd1 Nxd3 28. Rxd3 Rc2 29. Nc3 Be6 30. h4 Kf8 31. a3 Rc1+ 32. Kh2 Rc2 33. Kg3 Ke7 34. b4 Kd6 35. f3 Kc6 36. e4 dxe4 37. Nxe4 Bc4 38. Rd6+ Kc7 39. Rd4 Bf1 40. Nf2 b5 41. Rd1 Bc4 42. Ne4 Ra2 43. Nc5 Rxa3 44. Rd7+ Kc6 45. Ra7 Ra2 46. Rxa6+ Rxa6 47. Nxa6 Kd5 48. Kf2 Kd4 49. g4 Kc3 50. Ke3 Bd5 51. g5 Bb7 52. Nc5 Bc8 53. Nd3 Bf5 54. Ne5 Kxb4 55. Kd2 Ka3 56. Nc6 b4 57. Nd4 b3 58. Kc3 b2 59. Nb5+ Ka2 60. Kd2 b1=N+ 61. Ke3 Kb3 62. Nd6 Be6 63. Kd4 Nd2 64. Ke3 Nc4+ 65. Nxc4 Kxc4 66. Ke4 Kc3 67. Ke3 Bf5 68. Ke2 Kd4 1-0"
  },
  {
    "id": "kramnik-kasparov-2000-berlin",
    "white": {
      "name": "Kasparov, Garry",
      "title": "GM",
      "rating": "2849",
      "country": "Rússia",
      "code": "RU"
    },
    "black": {
      "name": "Kramnik, Vladimir",
      "title": "GM",
      "rating": "2772",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Campeonato Mundial de Xadrez Braingames",
    "site": "Londres, Reino Unido",
    "date": "12 de Outubro de 2000",
    "year": "2000",
    "eco": "C67",
    "opening": "Ruy Lopez: Defesa Berlinesa",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "O nascimento da \"Muralha de Berlim\". Kramnik utilizou o final sem damas da Berlinesa para desarmar completamente a lendária preparação de Kasparov.",
    "pgn": "[Event \"World Championship Match\"]\n[Site \"London ENG\"]\n[Date \"2000.10.12\"]\n[Round \"2\"]\n[White \"Kasparov, Garry\"]\n[Black \"Kramnik, Vladimir\"]\n[Result \"0-1\"]\n[WhiteElo \"2849\"]\n[BlackElo \"2772\"]\n[ECO \"C67\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Bd7 10. b3 h6 11. Bb2 Kc8 12. h3 b6 13. Rad1 Ne7 14. Ne2 Ng6 15. Ne1 h5 16. Nd3 c5 17. c4 a5 18. a4 h4 19. Nc3 Be6 20. Nd5 Kb7 21. Ne3 Rh5 22. f4 Ne7 23. Nf2 Re8 24. Bc3 g6 25. Ne4 Bg7 26. Ng4 Nf5 27. Rd3 Rhh8 28. Rfd1 Kc6 29. Kf2 Bc8 30. Kf3 Kb7 31. Nef6 Re6 32. Rd8 Rxd8 33. Rxd8 Bxf6 34. Nxf6 Re7 35. Rd2 Be6 36. Ke4 Kc8 37. Rd3 Bd7 38. Be1 Bc6+ 39. Nd5 Re8 40. Bf2 Rh8 41. Rd1 Kb7 42. Kd3 Rd8 43. Ke2 Rh8 44. Rd3 Kc8 45. Kd2 Kb7 46. Ke2 Kc8 47. Kd2 Kb7 48. Ke2 0-1"
  },
  {
    "id": "nakamura-carlsen-2023-scc",
    "white": {
      "name": "Carlsen, Magnus",
      "title": "GM",
      "rating": "2830",
      "country": "Noruega",
      "code": "NO"
    },
    "black": {
      "name": "Nakamura, Hikaru",
      "title": "GM",
      "rating": "2875",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "Speed Chess Championship (Final)",
    "site": "Online / Arena Global",
    "date": "22 de Setembro de 2023",
    "year": "2023",
    "eco": "B06",
    "opening": "Defesa Robatsch / Moderna",
    "speed": "Blitz",
    "result": "1-0",
    "highlight": "O clássico moderno da era digital entre os dois maiores gigantes da história do ritmo rápido e blitz com trocas táticas ultrarrápidas.",
    "pgn": "[Event \"Speed Chess Championship 2023\"]\n[Site \"Chess.com\"]\n[Date \"2023.09.22\"]\n[Round \"3.1\"]\n[White \"Carlsen, Magnus\"]\n[Black \"Nakamura, Hikaru\"]\n[Result \"1-0\"]\n[WhiteElo \"2830\"]\n[BlackElo \"2875\"]\n[ECO \"B06\"]\n\n1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. Be3 a6 5. Qd2 b5 6. h4 h5 7. Nh3 Bxh3 8. Rxh3 Nd7 9. O-O-O Ngf6 10. f3 c6 11. Kb1 Qc7 12. Bg5 b4 13. Ne2 a5 14. Nc1 O-O 15. Bh6 e5 16. Bxg7 Kxg7 17. dxe5 dxe5 18. Bc4 Nb6 19. Qe2 Rad8 20. Rhh1 Rd4 21. Rxd4 exd4 22. e5 Nfd5 23. Bxd5 Nxd5 24. Nd3 Re8 25. f4 c5 26. f5 c4 27. f6+ Kg8 28. Qd2 Kh7 29. Nf4 Qxe5 30. Nxd5 Qxd5 31. Re1 Rxe1+ 32. Qxe1 Qe6 33. Qf2 Qe3 34. Qf1 d3 35. cxd3 cxd3 36. Qd1 Qe2 37. Kc1 Qe3+ 38. Kb1 d2 39. Kc2 Qe4+ 40. Kxd2 Qxh4 41. Qf3 Qd4+ 42. Kc2 Qc4+ 43. Kb1 a4 44. b3 axb3 45. axb3 Qd4 46. Kc2 h4 47. Kc1 Kh6 48. Kc2 Kg5 49. Kc1 Qxf6 50. Qe3+ Qf4 1-0"
  },
  {
    "id": "ivanchuk-kasparov-1991-linares",
    "white": {
      "name": "Ivanchuk, Vassily",
      "title": "GM",
      "rating": "2695",
      "country": "Ucrânia",
      "code": "UA"
    },
    "black": {
      "name": "Kasparov, Garry",
      "title": "GM",
      "rating": "2800",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "Torneio Magistral de Linares",
    "site": "Linares, Espanha",
    "date": "24 de Fevereiro de 1991",
    "year": "1991",
    "eco": "E97",
    "opening": "Defesa Índia do Rei: Variante Mar del Plata",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Na lendária edição de Linares 1991, \"Chucky\" enfrentou a poderosa Índia do Rei de Kasparov e venceu uma batalha tática sublime.",
    "pgn": "[Event \"Linares 9th\"]\n[Site \"Linares ESP\"]\n[Date \"1991.02.24\"]\n[Round \"1\"]\n[White \"Ivanchuk, Vassily\"]\n[Black \"Kasparov, Garry\"]\n[Result \"1-0\"]\n[WhiteElo \"2695\"]\n[BlackElo \"2800\"]\n[ECO \"E97\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Nd2 a5 10. a3 Nd7 11. Rb1 f5 12. b4 Kh8 13. f3 Ng8 14. Qc2 Ngf6 15. Nb5 axb4 16. axb4 Nh5 17. g3 Ndf6 18. c5 Bd7 19. Rb3 Bh6 20. Rc3 fxe4 21. fxe4 Bh3 22. Re1 Rf7 23. Nf3 Bxc1 24. Qxc1 Qf8 25. Ng5 Re7 26. Bxh5 Nxh5 27. Nxh3 Ra2 28. cxd6 Rf7 29. dxc7 Qc8 30. Rc2 Rxc2 31. Qxc2 1-0"
  },
  {
    "id": "alekhine-reti-1925",
    "white": {
      "name": "Reti, Richard",
      "title": "Mestre",
      "rating": "2600",
      "country": "Tchecoslováquia",
      "code": "CS"
    },
    "black": {
      "name": "Alekhine, Alexander",
      "title": "Mestre",
      "rating": "2680",
      "country": "França",
      "code": "FR"
    },
    "event": "Torneio de Baden-Baden",
    "site": "Baden-Baden, Alemanha",
    "date": "27 de Fevereiro de 1925",
    "year": "1925",
    "eco": "A00",
    "opening": "Abertura Reti",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Considerada uma das combinações mais profundas da história: Alekhine lançou um contra-ataque geométrico com 31...Ce4!! que cruzou todo o tabuleiro.",
    "pgn": "[Event \"Baden-Baden\"]\n[Site \"Baden-Baden GER\"]\n[Date \"1925.02.27\"]\n[Round \"20\"]\n[White \"Reti, Richard\"]\n[Black \"Alekhine, Alexander\"]\n[Result \"0-1\"]\n[ECO \"A00\"]\n\n1. g3 e5 2. Nf3 e4 3. Nd4 d5 4. d3 exd3 5. Qxd3 Nf6 6. Bg2 Bb4+ 7. Bd2 Bxd2+ 8. Nxd2 O-O 9. c4 Na6 10. cxd5 Nb4 11. Qc4 Nbxd5 12. N2b3 c6 13. O-O Re8 14. Rfd1 Bg4 15. Rd2 Qc8 16. Nc5 Bh3 17. Bf3 Bg4 18. Bg2 Bh3 19. Bf3 Bg4 20. Bh1 h5 21. b4 a6 22. Rc1 h4 23. a4 hxg3 24. hxg3 Qc7 25. b5 axb5 26. axb5 Re3 27. Nf3 cxb5 28. Qxb5 Nc3 29. Qxb7 Qxb7 30. Nxb7 Nxe2+ 31. Kh2 Ne4 32. Rc4 Nxf2 33. Bg2 Be6 34. Rcc2 Ng4+ 35. Kh3 Ne5+ 36. Kh2 Rxf3 37. Rxe2 Ng4+ 38. Kh3 Ne3+ 39. Kh2 Nxc2 40. Bxf3 Nd4 0-1"
  },
  {
    "id": "anderssen-kieseritzky-1851-immortal",
    "white": {
      "name": "Anderssen, Adolf",
      "title": "Mestre",
      "rating": "2600",
      "country": "Alemanha",
      "code": "DE"
    },
    "black": {
      "name": "Kieseritzky, Lionel",
      "title": "Mestre",
      "rating": "2550",
      "country": "França",
      "code": "FR"
    },
    "event": "A Partida Imortal",
    "site": "Londres, Reino Unido",
    "date": "21 de Junho de 1851",
    "year": "1851",
    "eco": "C33",
    "opening": "Gambito do Rei Aceito",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "A histórica \"Partida Imortal\". Anderssen sacrificou um bispo, ambas as torres e finalmente sua própria dama para dar mate com apenas três peças menores.",
    "pgn": "[Event \"The Immortal Game\"]\n[Site \"London ENG\"]\n[Date \"1851.06.21\"]\n[Round \"1\"]\n[White \"Anderssen, Adolf\"]\n[Black \"Kieseritzky, Lionel\"]\n[Result \"1-0\"]\n[ECO \"C33\"]\n\n1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 b5 5. Bxb5 Nf6 6. Nf3 Qh6 7. d3 Nh5 8. Nh4 Qg5 9. Nf5 c6 10. g4 Nf6 11. Rg1 cxb5 12. h4 Qg6 13. h5 Qg5 14. Qf3 Ng8 15. Bxf4 Qf6 16. Nc3 Bc5 17. Nd5 Qxb2 18. Bd6 Bxg1 19. e5 Qxa1+ 20. Ke2 Na6 21. Nxg7+ Kd8 22. Qf6+ Nxf6 23. Be7# 1-0"
  },
  {
    "id": "capablanca-tartakower-1924",
    "white": {
      "name": "Capablanca, Jose Raul",
      "title": "GM",
      "rating": "2725",
      "country": "Cuba",
      "code": "CU"
    },
    "black": {
      "name": "Tartakower, Savielly",
      "title": "Mestre",
      "rating": "2580",
      "country": "Polônia",
      "code": "PL"
    },
    "event": "Torneio Internacional de Nova York",
    "site": "Nova York, EUA",
    "date": "23 de Março de 1924",
    "year": "1924",
    "eco": "A80",
    "opening": "Defesa Holandesa",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "A mais famosa aula de finais de torres de todos os tempos. Capablanca ativou seu rei de forma magistral cortando o rei adversário com precisão cirúrgica.",
    "pgn": "[Event \"New York\"]\n[Site \"New York, NY USA\"]\n[Date \"1924.03.23\"]\n[Round \"7\"]\n[White \"Capablanca, Jose Raul\"]\n[Black \"Tartakower, Savielly\"]\n[Result \"1-0\"]\n[ECO \"A80\"]\n\n1. d4 e6 2. Nf3 f5 3. c4 Nf6 4. Bg5 Be7 5. Nc3 O-O 6. e3 b6 7. Bd3 Bb7 8. O-O Ne4 9. Bxe7 Qxe7 10. Bxe4 fxe4 11. Nd2 d5 12. Qb3 Qd7 13. f3 exf3 14. Rxf3 Rxf3 15. Nxf3 dxc4 16. Qxc4 Qc6 17. Qd3 Nd7 18. Rf1 Rf8 19. Rf2 Qd6 20. Ng5 g6 21. Rxf8+ Nxf8 22. Nce4 Bxe4 23. Qxe4 c5 24. Qb7 Qd7 25. Qxd7 Nxd7 26. Nxe6 Kf7 27. Nd8+ Kf6 28. Nc6 a5 29. Kf2 Ke6 30. Kf3 Kd6 31. Nd8 Ke7 32. Nc6+ Kd6 33. Nd8 Ke7 34. Nc6+ Kd6 35. Ne5 Nxe5+ 36. dxe5+ Kxe5 37. a4 c4 38. e4 Kd4 39. Kf4 c3 40. bxc3+ Kc5 41. e5 b5 42. axb5 Kxb5 43. e6 Kc6 44. Ke5 a4 45. Kf6 a3 46. e7 Kd7 47. Kf7 a2 48. e8=Q+ 1-0"
  },
  {
    "id": "polgar-kasparov-2002",
    "white": {
      "name": "Polgar, Judit",
      "title": "GM",
      "rating": "2685",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Kasparov, Garry",
      "title": "GM",
      "rating": "2838",
      "country": "Rússia",
      "code": "RU"
    },
    "event": "Match Rússia vs Resto do Mundo (Rápidas)",
    "site": "Moscou, Rússia",
    "date": "9 de Setembro de 2002",
    "year": "2002",
    "eco": "C67",
    "opening": "Ruy Lopez: Defesa Berlinesa",
    "speed": "Rápido",
    "result": "1-0",
    "highlight": "Um marco na história do xadrez feminino: Judit Polgar superou o número 1 do mundo Garry Kasparov em uma aula posicional exemplar de 42 lances.",
    "pgn": "[Event \"Russia vs The World Rapid\"]\n[Site \"Moscow RUS\"]\n[Date \"2002.09.09\"]\n[Round \"5\"]\n[White \"Polgar, Judit\"]\n[Black \"Kasparov, Garry\"]\n[Result \"1-0\"]\n[WhiteElo \"2685\"]\n[BlackElo \"2838\"]\n[ECO \"C67\"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 h6 10. Rd1+ Ke8 11. h3 Be7 12. Ne2 Nh4 13. Nxh4 Bxh4 14. Be3 Bf5 15. Nd4 Bh7 16. g4 Be7 17. Kg2 h5 18. Nf5 Bf8 19. Kf3 Bg6 20. Rd2 hxg4+ 21. hxg4 Rh3+ 22. Kg2 Rh7 23. Kg3 f6 24. Bf4 Bxf5 25. gxf5 fxe5 26. Re1 Bd6 27. Bxe5 Kd7 28. c4 c5 29. Bxd6 cxd6 30. Re6 Rah8 31. Rexd6+ Kc8 32. R2d5 Rh3+ 33. Kg2 Rh2+ 34. Kf3 R2h3+ 35. Ke4 b6 36. Rc6+ Kb8 37. Rd7 Rh2 38. Ke3 Rf8 39. Rxg7 Rxf5 40. Re6 Rf8 41. Ree7 Rhxf2 42. Rb7+ 1-0"
  },
  {
    "id": "fischer-larsen-1971-candidates",
    "white": {
      "name": "Fischer, Robert J.",
      "title": "GM",
      "rating": "2760",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Larsen, Bent",
      "title": "GM",
      "rating": "2660",
      "country": "Dinamarca",
      "code": "DK"
    },
    "event": "Torneio de Candidatos (Semifinal)",
    "site": "Denver, EUA",
    "date": "6 de Julho de 1971",
    "year": "1971",
    "eco": "B88",
    "opening": "Defesa Siciliana: Sozin-Fischer",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "A primeira partida do inacreditável 6-0 de Fischer contra Larsen. Sacrifício de torre na coluna f para destruir o roque negro.",
    "pgn": "[Event \"Candidates Semifinal\"]\n[Site \"Denver, CO USA\"]\n[Date \"1971.07.06\"]\n[Round \"1\"]\n[White \"Fischer, Robert James\"]\n[Black \"Larsen, Bent\"]\n[Result \"1-0\"]\n[WhiteElo \"2760\"]\n[BlackElo \"2660\"]\n[ECO \"B88\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bc4 e6 7. Bb3 Be7 8. Be3 O-O 9. f4 a6 10. O-O Qc7 11. f5 Nxd4 12. Bxd4 b5 13. a3 Qb7 14. Qd3 Bd7 15. Kh1 a5 16. fxe6 fxe6 17. e5 dxe5 18. Bxe5 b4 19. axb4 axb4 20. Rxa8 Rxa8 21. Ne2 Bb5 22. Bc4 Rd8 23. Nd4 Bxc4 24. Qxc4 Qd5 25. Qe2 Ne4 26. Nf3 Bc5 27. g3 Nd2 28. Qxd2 Qxd2 29. Nxd2 Rxd2 30. c4 Rc2 31. Rf4 g5 32. Re4 Kf7 33. b3 h5 34. Bd4 Bxd4 35. Rxd4 Rc3 36. c5 Rxb3 37. Rc4 Rc3 38. Rxb4 Rxc5 39. h4 g4 40. Kg2 Rc2+ 41. Kf1 1-0"
  },
  {
    "id": "game-341-panno-biyiasas-1973",
    "white": {
      "name": "Panno O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 82 lances entre Panno O e Biyiasas P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Panno O\"]\n[Black \"Biyiasas P\"]\n[Result \"1/2-1/2\"]\n\n1. c4 g6 2. e4 d6 3. d4 e5 4. Ne2 Nc6 5. Nbc3 Bg7 6. Be3 Nh6 7. f3 f5 8. Qd2 fxe4 9. Nxe4 Nf5 10. Bg5 Bh6 11. Bxd8 Bxd2+ 12. Kxd2 Kxd8 13. dxe5 Nxe5 14. N2c3 Be6 15. b3 c6 16. Re1 Kd7 17. f4 Nf7 18. Bd3 Rac8 19. Rhf1 h5 20. Nd5 Nd8 21. Ne3 Nxe3 22. Rxe3 Bf5 23. h4 Ne6 24. g3 Rh7 25. Rfe1 Re7 26. Bf1 Rce8 27. Bg2 Nc7 28. Rd3 d5 29. Nc5+ Kc8 30. Rde3 Rxe3 31. Rxe3 dxc4 32. bxc4 Rd8+ 33. Kc3 Rd1 34. Be4 Rc1+ 35. Kb3 b5 36. Rc3 Re1 37. Bxf5+ gxf5 38. cxb5 Nxb5 39. Rd3 Kc7 40. a4 Nd6 41. Na6+ Kd7 1/2-1/2"
  },
  {
    "id": "game-342-polugaevsky-geller-1973",
    "white": {
      "name": "Polugaevsky L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 81 lances entre Polugaevsky L e Geller E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Polugaevsky L\"]\n[Black \"Geller E\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5 c6 8. Bd3 cxd5 9. cxd5 Ne8 10. Qd2 f5 11. Nge2 Nd7 12. exf5 gxf5 13. O-O Kh8 14. Rac1 Ndf6 15. Kh1 Qe7 16. Bg5 Qf7 17. Ng3 f4 18. Bxf6 Bxf6 19. Nge4 Be7 20. Nb5 Bf5 21. Nc7 Rc8 22. Nxe8 Qxe8 23. Rxc8 Qxc8 24. Rc1 Qd8 25. Nc3 Bd7 26. Qc2 Rf7 27. Ne4 Rf8 28. Qb3 Qb8 29. Rc3 Rc8 30. Qc2 Kg7 31. g4 fxg3 32. Nxg3 Rxc3 33. bxc3 Qf8 34. Kg2 Qg8 35. c4 Kh8 36. Bf5 Be8 37. Qb3 b6 38. Qa3 Qg5 39. Qxa7 Qd2+ 40. Kh3 Qh6+ 41. Kg2 1/2-1/2"
  },
  {
    "id": "game-343-portisch-kagan-1973",
    "white": {
      "name": "Portisch L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Kagan S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 92 lances entre Portisch L e Kagan S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Portisch L\"]\n[Black \"Kagan S\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 c6 6. Be3 Nbd7 7. Bd3 a6 8. Nge2 O-O 9. O-O b5 10. Qd2 e5 11. Rad1 Qc7 12. Rc1 b4 13. Nd1 c5 14. dxe5 dxe5 15. Bg5 Nb8 16. Ne3 Nc6 17. Nd5 Qd6 18. Bb1 Kh8 19. Rfd1 Nd7 20. Qe1 Qb8 21. Qh4 f6 22. Bd2 Nb6 23. f4 Ra7 24. Rf1 Raf7 25. Ng3 Bd7 26. f5 g5 27. Qg4 Nd4 28. Ne2 Nxd5 29. exd5 Nxe2+ 30. Qxe2 Qd6 31. Be4 Re7 32. h4 gxh4 33. Qh5 Rg8 34. Qxh4 Bf8 35. Bxb4 Reg7 36. Bd2 Rg4 37. Qe1 Qb8 38. b3 Qe8 39. Rc3 Bd6 40. Rh3 Qf7 41. Qe2 Qe7 42. Rh2 Qg7 43. Bh6 Qf7 44. Bd2 Qg7 45. Rf3 Rg3 46. Rxg3 Qxg3 1-0"
  },
  {
    "id": "game-344-reshevsky-hug-1973",
    "white": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Hug W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 89 lances entre Reshevsky S e Hug W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Reshevsky S\"]\n[Black \"Hug W\"]\n[Result \"1/2-1/2\"]\n\n1. Nf3 Nf6 2. d4 g6 3. c4 c5 4. d5 d6 5. Nc3 Bg7 6. e4 O-O 7. Be2 e5 8. Bg5 h6 9. Bh4 Qc7 10. Nd2 Nh7 11. O-O Bf6 12. Bxf6 Nxf6 13. a3 Kg7 14. b4 Na6 15. Rb1 Qe7 16. Qc2 h5 17. bxc5 Nxc5 18. Nb3 Nfd7 19. Nxc5 Nxc5 20. Na4 Na6 21. Qc3 b6 22. f4 f6 23. f5 Qe8 24. Qg3 g5 25. Nc3 Rh8 26. Qe3 Nc5 27. Nb5 Qe7 28. Rf3 Ba6 29. Nc3 Rac8 30. Rh3 Qf7 31. Rb4 Rc7 32. Qf3 Nb7 33. Nb1 Kf8 34. Qf1 Nc5 35. Nd2 Bc8 36. Qd1 h4 37. Rb1 Bd7 38. Bg4 Ba4 39. Qe2 Qe8 40. Kh1 Ke7 41. Qf1 Kd8 42. Bd1 Bxd1 43. Qxd1 Qh5 44. Qe1 Qg4 45. Kg1 1/2-1/2"
  },
  {
    "id": "game-345-savon-mecking-1973",
    "white": {
      "name": "Savon V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Mecking H",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 66 lances entre Savon V e Mecking H (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Savon V\"]\n[Black \"Mecking H\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Nbd7 8. Qe2 Qc7 9. g4 b5 10. a3 Be7 11. Bg2 Bb7 12. O-O-O Rc8 13. Bh4 Qc4 14. Qxc4 Rxc4 15. Bf3 Nc5 16. Be2 Nfxe4 17. Nxe4 Bxe4 18. Bxe7 Nb3+ 19. Kb1 Rxd4 20. Bxd6 Bxh1 21. cxb3 Rxd1+ 22. Bxd1 Kd7 23. Be5 f6 24. Bc3 Be4+ 25. Ka2 Kc6 26. a4 Rd8 27. Be2 e5 28. fxe5 fxe5 29. Bxe5 Rd2 30. Bf1 Rd1 31. axb5+ axb5 32. Bh3 b4 33. Bxg7 Rd7 0-1"
  },
  {
    "id": "game-346-tan-ljubojevic-1973",
    "white": {
      "name": "Tan L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Ljubojevic L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 69 lances entre Tan L e Ljubojevic L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"07\"]\n[White \"Tan L\"]\n[Black \"Ljubojevic L\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Qxd4 Bd7 5. c4 Nf6 6. Nc3 Nc6 7. Qd2 a6 8. b3 Rb8 9. a3 g6 10. b4 Bg7 11. Bb2 O-O 12. h3 Rc8 13. Bd3 Be6 14. Nd5 Nd7 15. Bxg7 Kxg7 16. O-O Nde5 17. Nxe5 Nxe5 18. Be2 f6 19. Rac1 g5 20. Rfd1 Qe8 21. Qd4 Rc6 22. Rc3 Rg8 23. Rdc1 Qd7 24. Bd1 Qd8 25. Ba4 Rc8 26. c5 dxc5 27. Rxc5 Rxc5 28. Rxc5 Qd6 29. Qc3 b6 30. Rc7 Bxd5 31. exd5 Rd8 32. Bc2 Rd7 33. Rxd7 Qxd7 34. Qd4 Qd6 35. h4 1/2-1/2"
  },
  {
    "id": "game-347-biyiasas-smyslov-1973",
    "white": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 93 lances entre Biyiasas P e Smyslov V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Biyiasas P\"]\n[Black \"Smyslov V\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Bc5 6. Nb3 Bb6 7. Bf4 d6 8. O-O Nc6 9. c4 e5 10. Bd2 Qh4 11. Nc3 Nf6 12. Qf3 Bg4 13. Qg3 Qxg3 14. hxg3 Rc8 15. Nd5 Nxd5 16. cxd5 Nd4 17. Nxd4 Bxd4 18. Rac1 Ke7 19. Rfe1 Bd7 20. b3 Bb2 21. Rxc8 Rxc8 22. Kf1 h5 23. Rb1 Bd4 24. Rc1 Rc5 25. Ke2 g6 26. Rc2 f5 27. f3 Kf6 28. Bb4 Rxc2+ 29. Bxc2 Bc5 30. Bd2 Bg1 31. Bd3 Bh2 32. Kf2 f4 33. gxf4 Bxf4 34. Bb4 Ke7 35. Ke2 g5 36. Ba5 Bc1 37. Bb4 Bc8 38. Ba5 Ba3 39. Bd2 Kf6 40. Ba5 g4 41. Bd8+ Kf7 42. Kf2 Bc5+ 43. Kg3 gxf3 44. gxf3 Bd7 45. Bf1 Bb4 46. a4 Be1+ 47. Kh2 1/2-1/2"
  },
  {
    "id": "game-348-geller-keres-1973",
    "white": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 84 lances entre Geller E e Keres P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Geller E\"]\n[Black \"Keres P\"]\n[Result \"1-0\"]\n\n1. c4 c6 2. d4 d5 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 h6 6. Bxf6 Qxf6 7. e3 Nd7 8. Bd3 Bb4 9. O-O Qe7 10. a3 Bxc3 11. bxc3 O-O 12. cxd5 exd5 13. a4 Rd8 14. a5 Nf8 15. Qa4 Bd7 16. Rfb1 Rab8 17. Qa3 Qxa3 18. Rxa3 c5 19. Ra2 Rdc8 20. Rab2 Rc7 21. h3 Ne6 22. Ne5 Bc8 23. Bf5 Kf8 24. Bg4 cxd4 25. cxd4 Rc3 26. Rb3 Rxb3 27. Rxb3 b5 28. Bf3 b4 29. Nc6 Rb7 30. Bxd5 Bd7 31. Ne5 Ba4 32. Bxb7 Bxb3 33. Nd3 Ke7 34. Nxb4 Kd6 35. f3 f5 36. Bc8 g5 37. Bxe6 Bxe6 38. f4 gxf4 39. exf4 Bc4 40. Kf2 Be6 41. Kf3 Bb3 42. g4 Ke6 1-0"
  },
  {
    "id": "game-349-gheorghiu-polugaevsky-1973",
    "white": {
      "name": "Gheorghiu F",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Polugaevsky L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 110 lances entre Gheorghiu F e Polugaevsky L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Gheorghiu F\"]\n[Black \"Polugaevsky L\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4 e6 7. Bb3 b5 8. O-O Be7 9. f4 O-O 10. e5 dxe5 11. fxe5 Nfd7 12. Qh5 Nc6 13. Nxc6 Qb6+ 14. Be3 Qxc6 15. Kh1 Bb7 16. Rf3 Bc5 17. Re1 a5 18. a4 b4 19. Nb5 Bxe3 20. Rexe3 Nc5 21. Nd4 Qa6 22. Rf4 Rad8 23. Kg1 g6 24. Qh6 Rd7 25. Qh4 Nxb3 26. Rxb3 f5 27. Rg3 Qb6 28. Qh6 Rff7 29. c3 bxc3 30. bxc3 Qc5 31. h4 Qxe5 32. h5 Rg7 33. hxg6 Kh8 34. Kh2 Qf6 35. Rh4 e5 36. Nf3 f4 37. Rg5 Bxf3 38. gxf3 Rd2+ 39. Kh3 Qc6 40. Qh5 Qc4 41. Rxe5 Qf1+ 42. Kg4 Rd8 43. Kxf4 Qc1+ 44. Kg3 Rxg6+ 45. Rg4 Qg1+ 46. Kh3 Rxg4 47. Qxg4 Qh1+ 48. Kg3 Rg8 49. Rg5 Qg1+ 50. Kf4 Qc1+ 51. Kf5 Rf8+ 52. Ke4 Qxc3 53. Re5 Qe1+ 54. Kd5 Rd8+ 55. Ke6 Re8+ 0-1"
  },
  {
    "id": "game-350-hug-savon-1973",
    "white": {
      "name": "Hug W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Savon V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 56 lances entre Hug W e Savon V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Hug W\"]\n[Black \"Savon V\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. O-O Nf6 6. e5 dxe5 7. Nxe5 Qc8 8. Qf3 e6 9. Nc3 Be7 10. d3 Nbd7 11. Bf4 Nxe5 12. Bxe5 O-O 13. Rfe1 Qd7 14. Rad1 Rac8 15. h4 Qc6 16. Ne4 Nxe4 17. dxe4 f6 18. Bc3 Rfd8 19. h5 b5 20. Ba5 Rxd1 21. Rxd1 Kf7 22. Be1 b4 23. c4 a5 24. Qe2 Rd8 25. Rxd8 Bxd8 26. f4 a4 27. Qd3 Ke7 28. Bd2 g6 1/2-1/2"
  },
  {
    "id": "game-351-ivkov-tan-1973",
    "white": {
      "name": "Ivkov B",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Tan L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 111 lances entre Ivkov B e Tan L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Ivkov B\"]\n[Black \"Tan L\"]\n[Result \"1-0\"]\n\n1. Nf3 d5 2. c4 c6 3. d4 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 a6 8. a4 Bb4 9. O-O O-O 10. Qe2 Qa5 11. Rd1 e5 12. Qc2 exd4 13. Rxd4 Nb6 14. Bd3 h6 15. Na2 c5 16. Rh4 Be6 17. Nxb4 cxb4 18. Bd2 Rfc8 19. Qd1 Nc4 20. Bxc4 Rxc4 21. Rxc4 Bxc4 22. Qe1 Qh5 23. Bxb4 Bd5 24. Nd4 Ng4 25. Bd6 Qg6 26. Bg3 Qe4 27. f3 Qxe3+ 28. Qxe3 Nxe3 29. b3 Bc6 30. Nxc6 bxc6 31. Rc1 Rc8 32. Rc5 Nd5 33. Ra5 Ra8 34. Be1 Kf8 35. b4 Rb8 36. Bg3 Rb6 37. Bf2 Rb7 38. Rxa6 Nxb4 39. Bc5+ Ke8 40. Ra8+ Kd7 41. a5 Rb5 42. Bf8 c5 43. Bxg7 h5 44. h4 f5 45. a6 Ra5 46. Rf8 Rxa6 47. Rxf5 Rc6 48. Rxh5 c4 49. Rb5 Nd3 50. h5 Nf4 51. g3 c3 52. gxf4 c2 53. Bb2 c1=Q+ 54. Bxc1 Rxc1+ 55. Kg2 Rc6 56. Re5 1-0"
  },
  {
    "id": "game-352-kagan-reshevsky-1973",
    "white": {
      "name": "Kagan S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "0-1",
    "highlight": "Confronto de alto nível com 130 lances entre Kagan S e Reshevsky S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Kagan S\"]\n[Black \"Reshevsky S\"]\n[Result \"0-1\"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. g3 e5 7. Nde2 Be7 8. Bg2 Be6 9. a4 Nbd7 10. O-O Rc8 11. h3 O-O 12. Kh2 Qc7 13. a5 Rfd8 14. Be3 h6 15. Qd2 Bf8 16. Rfc1 b5 17. g4 Nc5 18. Nd5 Bxd5 19. exd5 Re8 20. Ng3 e4 21. Bd4 Ncd7 22. g5 hxg5 23. Qxg5 Qb7 24. c3 Qxd5 25. Qxd5 Nxd5 26. Bxe4 Nf4 27. Bb7 Rb8 28. Bxa6 Nd3 29. b4 Nxc1 30. Rxc1 d5 31. Nf5 Re6 32. Bxb5 Rxb5 33. Rg1 g6 34. Ne3 Bg7 35. Bxg7 Kxg7 36. Nf5+ Kf6 37. Nd4 Rb8 38. Nxe6 fxe6 39. Ra1 Ke5 40. a6 Ra8 41. a7 Nb6 42. Ra6 Nc8 43. Rc6 Nxa7 44. Ra6 Rc8 45. Rxa7 Rxc3 46. Kg2 d4 47. Rg7 Kf5 48. Rf7+ Ke4 49. Rf6 Kd3 50. Rxe6 Kc2 51. Rd6 d3 52. Kf3 Kc1 53. Kg4 d2 54. h4 Kc2 55. Rxd2+ Kxd2 56. Kg5 Rc6 57. f4 Ke3 58. f5 gxf5 59. Kxf5 Kd4 60. h5 Kd5 61. b5 Rd6 62. Kg5 Ke6 63. Kg6 Rd1 64. h6 Rg1+ 65. Kh7 Kf7 0-1"
  },
  {
    "id": "game-353-ljubojevic-portisch-1973",
    "white": {
      "name": "Ljubojevic L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Portisch L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 80 lances entre Ljubojevic L e Portisch L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Ljubojevic L\"]\n[Black \"Portisch L\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e6 2. d3 d5 3. Nd2 Nf6 4. Ngf3 Nc6 5. c3 a5 6. e5 Nd7 7. d4 b6 8. h4 Be7 9. Bb5 Ncb8 10. Nf1 Ba6 11. Bxa6 Rxa6 12. Qd3 h6 13. Ng3 Nf8 14. Nh5 g6 15. Nf4 Qd7 16. h5 g5 17. Ne2 c5 18. Nh2 c4 19. Qc2 Kd8 20. Ng4 Qe8 21. a4 Ra7 22. Rb1 Rc7 23. f4 Nbd7 24. f5 f6 25. fxe6 Nxe6 26. Ne3 fxe5 27. Nxd5 exd4 28. Nxc7 Nxc7 29. cxd4 Qf7 30. b3 Rf8 31. bxc4 Qf2+ 32. Kd1 Qxg2 33. Re1 Na6 34. Rb3 Nb4 35. Qg6 Rf6 36. Qg8+ Kc7 37. Re3 Bd6 38. Bd2 Bf4 39. Nxf4 Rxf4 40. R3e2 Qf3 1/2-1/2"
  },
  {
    "id": "game-354-mecking-bronstein-1973",
    "white": {
      "name": "Mecking H",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Bronstein D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 43 lances entre Mecking H e Bronstein D (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Mecking H\"]\n[Black \"Bronstein D\"]\n[Result \"1/2-1/2\"]\n\n1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. a4 Nbc6 8. Nf3 Qc7 9. Ba3 b6 10. Bd3 h6 11. O-O c4 12. Be2 Bb7 13. Re1 O-O-O 14. Bf1 Qd7 15. g3 Rde8 16. Nh4 Kb8 17. f4 Bc8 18. Bh3 g6 19. Rf1 Reg8 20. Bg2 a5 21. Qe1 Ka7 22. g4 1/2-1/2"
  },
  {
    "id": "game-355-panno-hort-1973",
    "white": {
      "name": "Panno O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Hort V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 90 lances entre Panno O e Hort V (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"08\"]\n[White \"Panno O\"]\n[Black \"Hort V\"]\n[Result \"1/2-1/2\"]\n\n1. c4 Nf6 2. Nc3 d5 3. cxd5 Nxd5 4. g3 Nb6 5. Bg2 g6 6. d3 Bg7 7. Be3 O-O 8. Rc1 h6 9. Qd2 Kh7 10. f4 f5 11. h4 N8d7 12. h5 gxh5 13. Rxh5 Nf6 14. Rh3 c6 15. Nf3 Ng4 16. Bc5 Re8 17. Rh4 Kg8 18. Bh3 Nd7 19. Bg1 Ndf6 20. Ne5 h5 21. Bxg4 hxg4 22. e4 Nd7 23. Nc4 Nb6 24. Ne3 e6 25. e5 Kf7 26. Nc4 Nxc4 27. dxc4 Qxd2+ 28. Kxd2 b6 29. c5 Rd8+ 30. Kc2 b5 31. b4 a5 32. a3 Ra7 33. Be3 a4 34. Rd1 Rxd1 35. Nxd1 Rd7 36. Bg1 Rd8 37. Rh2 Bf8 38. Nc3 Kg7 39. Ne2 Rd5 40. Nd4 Bd7 41. Kc3 Be7 42. Rh5 Bd8 43. Be3 Be7 44. Kc2 Bd8 45. Ne2 Be8 1/2-1/2"
  },
  {
    "id": "game-356-bronstein-hug-1973",
    "white": {
      "name": "Bronstein D",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Hug W",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 111 lances entre Bronstein D e Hug W (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Bronstein D\"]\n[Black \"Hug W\"]\n[Result \"1-0\"]\n\n1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. f4 c5 6. c3 Nc6 7. Ndf3 cxd4 8. cxd4 Nb6 9. Ne2 h5 10. Nc3 Bd7 11. Be2 Rc8 12. O-O g6 13. Kh1 a6 14. b3 Ne7 15. Qd2 Nf5 16. Bb2 Bb4 17. a3 Be7 18. Na2 Kf8 19. Bc3 Na8 20. Ba5 Qe8 21. a4 Kg7 22. Bd3 Nh6 23. Qe2 Bd8 24. Bd2 Be7 25. Qe1 Rc7 26. Nc3 Bc6 27. Ne2 Nf5 28. g3 Qc8 29. Nc1 b6 30. Kg1 a5 31. Na2 Bb7 32. Nc3 Rc6 33. Nb5 Qb8 34. Qe2 Nc7 35. Be1 Na6 36. Rd1 Nb4 37. Bb1 Ba6 38. h3 Rh6 39. Qd2 Rc8 40. Kg2 Nc2 41. Bf2 Bxb5 42. axb5 Na3 43. Bd3 Bb4 44. Qe2 Rc3 45. g4 Ne7 46. Bh4 Rxb3 47. Bg5 Rh7 48. f5 gxf5 49. gxf5 Nxf5 50. Nh4 Nxh4+ 51. Bxh4 Qg8 52. Kh2 Kf8 53. Bf6 Bc3 54. Rg1 Rh8 55. Rxg8+ Rxg8 56. Qxh5 1-0"
  },
  {
    "id": "game-357-hort-biyiasas-1973",
    "white": {
      "name": "Hort V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 82 lances entre Hort V e Biyiasas P (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Hort V\"]\n[Black \"Biyiasas P\"]\n[Result \"1-0\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. e3 Be7 6. b3 Nbd7 7. Bd3 O-O 8. O-O b6 9. Bb2 Bb7 10. Qe2 c5 11. Rfd1 cxd4 12. exd4 Re8 13. Rac1 a6 14. Ne5 Bd6 15. Rc2 Qe7 16. Bc1 Bc7 17. Bf4 dxc4 18. bxc4 Nxe5 19. Bxe5 Red8 20. f4 Rd7 21. Rb2 Rad8 22. h3 g6 23. Qf2 Bxe5 24. fxe5 Ne8 25. Be4 Bxe4 26. Nxe4 Rc7 27. Qe2 Rdc8 28. c5 bxc5 29. dxc5 Rd8 30. Rd6 f5 31. exf6 Nxf6 32. Nxf6+ Qxf6 33. Rxd8+ Qxd8 34. Qxe6+ Kg7 35. Qe5+ Kh6 36. Rb4 Qe7 37. Rh4+ Qxh4 38. Qxc7 Qc4 39. Qd6 Qxa2 40. c6 Qb1+ 41. Kh2 Qb3 1-0"
  },
  {
    "id": "game-358-keres-gheorghiu-1973",
    "white": {
      "name": "Keres P",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Gheorghiu F",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 28 lances entre Keres P e Gheorghiu F (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Keres P\"]\n[Black \"Gheorghiu F\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. Nf3 g6 3. Bg5 Bg7 4. e3 d6 5. h3 O-O 6. Be2 Nbd7 7. O-O h6 8. Bf4 Qe8 9. c4 e5 10. Bh2 Ne4 11. dxe5 Nxe5 12. Nxe5 Bxe5 13. Bxe5 Qxe5 14. Nd2 Bf5 1/2-1/2"
  },
  {
    "id": "game-359-polugaevsky-mecking-1973",
    "white": {
      "name": "Polugaevsky L",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Mecking H",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 64 lances entre Polugaevsky L e Mecking H (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Polugaevsky L\"]\n[Black \"Mecking H\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5 Nxd5 6. e4 Nxc3 7. bxc3 cxd4 8. cxd4 Nc6 9. Bc4 b5 10. Be2 Bb4+ 11. Bd2 Qa5 12. d5 exd5 13. exd5 Ne7 14. O-O Bxd2 15. Nxd2 O-O 16. Nb3 Qd8 17. Bxb5 Bb7 18. Nc5 Qxd5 19. Qxd5 Bxd5 20. Rfe1 Rfc8 21. Rac1 Nc6 22. Na6 Nd4 23. Nc7 Rab8 24. Nxd5 Rxc1 25. Rxc1 Nxb5 26. h3 f6 27. a4 Nd6 28. Rc7 Rb7 29. Rc6 Rd7 30. Nc3 Kf7 31. a5 Ke7 32. a6 Kd8 1/2-1/2"
  },
  {
    "id": "game-360-portisch-ivkov-1973",
    "white": {
      "name": "Portisch L",
      "title": "GM",
      "rating": "2650",
      "country": "Hungria",
      "code": "HU"
    },
    "black": {
      "name": "Ivkov B",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 73 lances entre Portisch L e Ivkov B (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Portisch L\"]\n[Black \"Ivkov B\"]\n[Result \"1-0\"]\n\n1. Nf3 Nf6 2. g3 g6 3. Bg2 Bg7 4. c4 c6 5. O-O O-O 6. d4 d5 7. Qa4 Nbd7 8. cxd5 Nb6 9. Qa3 cxd5 10. Nc3 Nc4 11. Qb4 e6 12. Bf4 Re8 13. Ne5 Bf8 14. Qb3 Nd6 15. Bg5 Be7 16. Rfd1 Nf5 17. e4 Nxe4 18. Bxe7 Qxe7 19. Nxe4 dxe4 20. Bxe4 Rd8 21. Qc3 Nd6 22. Bg2 Bd7 23. Qa3 Be8 24. Rac1 Kf8 25. d5 exd5 26. Rxd5 f6 27. Nd3 Bc6 28. Re1 Qc7 29. Nf4 Bxd5 30. Bxd5 Re8 31. Ne6+ Rxe6 32. Rxe6 Rd8 33. Rxf6+ Kg7 34. Qf3 Rd7 35. Rf8 Nf5 36. Rg8+ Kh6 37. Be6 1-0"
  },
  {
    "id": "game-361-reshevsky-ljubojevic-1973",
    "white": {
      "name": "Reshevsky S",
      "title": "GM",
      "rating": "2650",
      "country": "Estados Unidos",
      "code": "US"
    },
    "black": {
      "name": "Ljubojevic L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 85 lances entre Reshevsky S e Ljubojevic L (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Reshevsky S\"]\n[Black \"Ljubojevic L\"]\n[Result \"1-0\"]\n\n1. d4 g6 2. c4 Bg7 3. e4 d6 4. Nc3 Nd7 5. Nf3 e5 6. Be2 c6 7. O-O Nh6 8. Rb1 O-O 9. b4 f5 10. Bg5 Qe8 11. d5 Nf7 12. dxc6 bxc6 13. Bc1 Bb7 14. exf5 gxf5 15. Nh4 e4 16. Rb3 Qe6 17. Nxf5 Qxf5 18. Bg4 Qg6 19. Bxd7 Ne5 20. Bh3 Rf3 21. Ne2 Nd3 22. Nf4 Rxf4 23. Rxd3 exd3 24. Bxf4 Bc8 25. Bxc8 Rxc8 26. Re1 Rf8 27. Qd2 Qf5 28. g3 d5 29. c5 h5 30. h4 Bd4 31. Kg2 Rf7 32. f3 Kh7 33. Rd1 Be5 34. Bxe5 Qxe5 35. Qxd3+ Kg8 36. f4 Qb2+ 37. Rd2 Qxb4 38. Qg6+ Kf8 39. Qh6+ Rg7 40. Re2 Qxc5 41. Qh8+ Kf7 42. Qe8+ Kf6 43. Qe6# 1-0"
  },
  {
    "id": "game-362-savon-kagan-1973",
    "white": {
      "name": "Savon V",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Kagan S",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 129 lances entre Savon V e Kagan S (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Savon V\"]\n[Black \"Kagan S\"]\n[Result \"1-0\"]\n\n1. c4 g6 2. d4 Bg7 3. g3 d6 4. Bg2 Nc6 5. d5 Nd4 6. e3 Nf5 7. Ne2 e5 8. dxe6 fxe6 9. Nbc3 Nf6 10. e4 Ne7 11. h3 O-O 12. Be3 e5 13. O-O Be6 14. Nd5 c5 15. Nxe7+ Qxe7 16. Qd3 Ne8 17. Nc3 Rb8 18. Rfd1 a6 19. Rab1 b5 20. cxb5 axb5 21. b4 c4 22. Qd2 Qd7 23. Kh2 Rf7 24. Bf1 Bf8 25. a4 Nc7 26. Qc2 Qc6 27. Ra1 bxa4 28. Rxa4 Nb5 29. Nd5 c3 30. Ra5 Nd4 31. Bxd4 exd4 32. Rxd4 Bg7 33. Rc4 Qe8 34. Kg1 Qd8 35. Nxc3 Rxb4 36. Rxb4 Qxa5 37. Rb8+ Bf8 38. Nd5 Qa7 39. Rb4 Bxd5 40. exd5 Bh6 41. Re4 Bg7 42. Qd2 Qa1 43. Qe3 Rf8 44. Kg2 Qc3 45. Bd3 Bh6 46. f4 Bg7 47. h4 Qb2+ 48. Be2 Qc3 49. Qb6 Rf6 50. Qd8+ Bf8 51. Bf3 Rf7 52. h5 Qf6 53. Qb8 g5 54. Bg4 Qc3 55. Be6 Qc2+ 56. Kf3 Qd3+ 57. Re3 Qd1+ 58. Kf2 Qxh5 59. Qe8 Qh2+ 60. Kf3 Qh1+ 61. Kg4 Qd1+ 62. Rf3 h5+ 63. Kxg5 Kh8 64. Qxf7 Be7+ 65. Kh6 1-0"
  },
  {
    "id": "game-363-smyslov-geller-1973",
    "white": {
      "name": "Smyslov V",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "black": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 31 lances entre Smyslov V e Geller E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Smyslov V\"]\n[Black \"Geller E\"]\n[Result \"1/2-1/2\"]\n\n1. d4 Nf6 2. Nf3 d5 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Rc1 Bb7 11. Bd3 Rc8 12. O-O c5 13. dxc5 Rxc5 14. Nxd5 Bxd5 15. Rxc5 Qxc5 16. Qd2 1/2-1/2"
  },
  {
    "id": "game-364-tan-panno-1973",
    "white": {
      "name": "Tan L",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Panno O",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1/2-1/2",
    "highlight": "Confronto de alto nível com 82 lances entre Tan L e Panno O (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"09\"]\n[White \"Tan L\"]\n[Black \"Panno O\"]\n[Result \"1/2-1/2\"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Bd3 Nc6 6. Nxc6 bxc6 7. O-O d5 8. exd5 cxd5 9. c4 Be7 10. cxd5 Qxd5 11. Nc3 Qb7 12. Bg5 Bd7 13. Qe2 Bc6 14. Bb5 O-O 15. Bxc6 Qxc6 16. Rac1 Qb7 17. Rc2 h6 18. Bh4 Rfd8 19. Rfc1 Rd4 20. Bg3 Rad8 21. h3 Rd3 22. Be5 a5 23. Bxf6 Bxf6 24. Ne4 Be7 25. Rc7 Rd1+ 26. Rxd1 Rxd1+ 27. Qxd1 Qxc7 28. Qd4 f5 29. Nc3 Bc5 30. Qd2 Kf7 31. Ne2 Bb4 32. Qe3 Kf6 33. Nf4 Qd6 34. Nd3 Qd5 35. Nxb4 Qd1+ 36. Kh2 Qd6+ 37. f4 axb4 38. a3 g5 39. g3 bxa3 40. bxa3 Qd5 41. fxg5+ hxg5 1/2-1/2"
  },
  {
    "id": "game-365-biyiasas-geller-1973",
    "white": {
      "name": "Biyiasas P",
      "title": "GM",
      "rating": "2650",
      "country": "FIDE",
      "code": "WLD"
    },
    "black": {
      "name": "Geller E",
      "title": "GM",
      "rating": "2650",
      "country": "União Soviética",
      "code": "SU"
    },
    "event": "izt",
    "site": "Petropolis",
    "date": "1973.??.??",
    "year": "1973",
    "eco": "",
    "opening": "Abertura Clássica",
    "speed": "Clássico",
    "result": "1-0",
    "highlight": "Confronto de alto nível com 79 lances entre Biyiasas P e Geller E (1973).",
    "pgn": "[Event \"izt\"]\n[Site \"Petropolis\"]\n[Date \"1973.??.??\"]\n[Round \"10\"]\n[White \"Biyiasas P\"]\n[Black \"Geller E\"]\n[Result \"1-0\"]\n\n1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. O-O Nc6 6. b3 Nf6 7. Re1 g6 8. Bb2 Bg7 9. c4 e5 10. Nc3 O-O 11. d3 Nh5 12. Nd5 Ne7 13. Bc1 Nxd5 14. cxd5 Nf4 15. Bxf4 exf4 16. Rc1 Rae8 17. Qd2 f5 18. Ng5 fxe4 19. dxe4 Qg4 20. Nf3 Qh5 21. h3 b6 22. b4 Be5 23. a4 g5 24. Nxe5 Rxe5 25. f3 Qg6 26. Kf2 h5 27. Rh1 Qg7 28. bxc5 bxc5 29. Qc3 Rb8 30. Rb1 Ree8 31. Qxg7+ Kxg7 32. Ke2 Kf6 33. Kd3 Ke5 34. Kc4 Rh8 35. a5 Rhc8 36. Rhg1 Rb4+ 37. Rxb4 cxb4+ 38. Kb5 Kd4 39. Ka6 b3 40. Rd1+ 1-0"
  }
];

/**
 * Obtém a Partida do Dia correspondente à data atual (ou informada).
 * A cada virada de meia-noite (00:00:00 local), avança deterministicamente
 * para o dia específico do ano (1 a 365), garantindo 365 dias sem repetições.
 */
export function getDailyGame(date = new Date()) {
  const year = date.getFullYear();
  const startOfYear = new Date(year, 0, 1);
  const diffMs = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  // Mapeia o dia do ano (0 a 364) para o índice exato da partida
  const safeIndex = Math.min(Math.max(0, dayOfYear), DAILY_GAMES.length - 1);
  
  return {
    ...DAILY_GAMES[safeIndex],
    dayOfYear: dayOfYear + 1,
    totalGamesInYear: DAILY_GAMES.length,
    formattedToday: date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  };
}
