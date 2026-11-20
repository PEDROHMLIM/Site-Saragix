// Helper para fotos de jogadores, bandeiras de federações e avatares estilizados para transmissões ao vivo

// Base de fotos oficiais de alta resolução via Wikimedia Commons (CORS universal, sem bloqueios de hotlink)
export const KNOWN_FIDE_PLAYERS = {
  // Fabiano Caruana
  'fabiano caruana': {
    fideId: '2020009',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Fabiano_Caruana_in_2025.jpg/330px-Fabiano_Caruana_in_2025.jpg',
  },
  'caruana, fabiano': {
    fideId: '2020009',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Fabiano_Caruana_in_2025.jpg/330px-Fabiano_Caruana_in_2025.jpg',
  },
  'caruana, f.': {
    fideId: '2020009',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Fabiano_Caruana_in_2025.jpg/330px-Fabiano_Caruana_in_2025.jpg',
  },
  'caruana, f': {
    fideId: '2020009',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Fabiano_Caruana_in_2025.jpg/330px-Fabiano_Caruana_in_2025.jpg',
  },
  'caruana': {
    fideId: '2020009',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Fabiano_Caruana_in_2025.jpg/330px-Fabiano_Caruana_in_2025.jpg',
  },

  // Magnus Carlsen
  'magnus carlsen': {
    fideId: '1503014',
    fed: 'NOR',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Magnus_Carlsen_Tata_2023_-_71_%28cropped_v4%29.jpg/330px-Magnus_Carlsen_Tata_2023_-_71_%28cropped_v4%29.jpg',
  },
  'carlsen, magnus': {
    fideId: '1503014',
    fed: 'NOR',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Magnus_Carlsen_Tata_2023_-_71_%28cropped_v4%29.jpg/330px-Magnus_Carlsen_Tata_2023_-_71_%28cropped_v4%29.jpg',
  },
  'carlsen, m.': {
    fideId: '1503014',
    fed: 'NOR',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Magnus_Carlsen_Tata_2023_-_71_%28cropped_v4%29.jpg/330px-Magnus_Carlsen_Tata_2023_-_71_%28cropped_v4%29.jpg',
  },
  'carlsen': {
    fideId: '1503014',
    fed: 'NOR',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Magnus_Carlsen_Tata_2023_-_71_%28cropped_v4%29.jpg/330px-Magnus_Carlsen_Tata_2023_-_71_%28cropped_v4%29.jpg',
  },

  // Hikaru Nakamura
  'hikaru nakamura': {
    fideId: '2016192',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Hikaru_Nakamura_at_the_2026_Naroditsky_Memorial_Rapid_and_Blitz_%28v2%29.jpg/330px-Hikaru_Nakamura_at_the_2026_Naroditsky_Memorial_Rapid_and_Blitz_%28v2%29.jpg',
  },
  'nakamura, hikaru': {
    fideId: '2016192',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Hikaru_Nakamura_at_the_2026_Naroditsky_Memorial_Rapid_and_Blitz_%28v2%29.jpg/330px-Hikaru_Nakamura_at_the_2026_Naroditsky_Memorial_Rapid_and_Blitz_%28v2%29.jpg',
  },
  'nakamura, h.': {
    fideId: '2016192',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Hikaru_Nakamura_at_the_2026_Naroditsky_Memorial_Rapid_and_Blitz_%28v2%29.jpg/330px-Hikaru_Nakamura_at_the_2026_Naroditsky_Memorial_Rapid_and_Blitz_%28v2%29.jpg',
  },
  'nakamura': {
    fideId: '2016192',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Hikaru_Nakamura_at_the_2026_Naroditsky_Memorial_Rapid_and_Blitz_%28v2%29.jpg/330px-Hikaru_Nakamura_at_the_2026_Naroditsky_Memorial_Rapid_and_Blitz_%28v2%29.jpg',
  },

  // Alireza Firouzja
  'alireza firouzja': {
    fideId: '12573981',
    fed: 'FRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Alireza_Firouzja_at_the_Candidates_2024_tournament_07_%28cropped_v2%29.jpg/330px-Alireza_Firouzja_at_the_Candidates_2024_tournament_07_%28cropped_v2%29.jpg',
  },
  'firouzja, alireza': {
    fideId: '12573981',
    fed: 'FRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Alireza_Firouzja_at_the_Candidates_2024_tournament_07_%28cropped_v2%29.jpg/330px-Alireza_Firouzja_at_the_Candidates_2024_tournament_07_%28cropped_v2%29.jpg',
  },
  'firouzja': {
    fideId: '12573981',
    fed: 'FRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Alireza_Firouzja_at_the_Candidates_2024_tournament_07_%28cropped_v2%29.jpg/330px-Alireza_Firouzja_at_the_Candidates_2024_tournament_07_%28cropped_v2%29.jpg',
  },

  // Gukesh D
  'gukesh d': {
    fideId: '46616543',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Gukesh_in_2025_%28cropped%29.jpg/330px-Gukesh_in_2025_%28cropped%29.jpg',
  },
  'd gukesh': {
    fideId: '46616543',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Gukesh_in_2025_%28cropped%29.jpg/330px-Gukesh_in_2025_%28cropped%29.jpg',
  },
  'gukesh, d': {
    fideId: '46616543',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Gukesh_in_2025_%28cropped%29.jpg/330px-Gukesh_in_2025_%28cropped%29.jpg',
  },
  'gukesh, d.': {
    fideId: '46616543',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Gukesh_in_2025_%28cropped%29.jpg/330px-Gukesh_in_2025_%28cropped%29.jpg',
  },
  'gukesh': {
    fideId: '46616543',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Gukesh_in_2025_%28cropped%29.jpg/330px-Gukesh_in_2025_%28cropped%29.jpg',
  },

  // Praggnanandhaa
  'praggnanandhaa r': {
    fideId: '25059530',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg/330px-Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg',
  },
  'r praggnanandhaa': {
    fideId: '25059530',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg/330px-Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg',
  },
  'praggnanandhaa, r': {
    fideId: '25059530',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg/330px-Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg',
  },
  'praggnanandhaa, r.': {
    fideId: '25059530',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg/330px-Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg',
  },
  'praggnanandhaa': {
    fideId: '25059530',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg/330px-Praggnanandhaa_R%2C_Tata_Steel_chess_tournament_2025%2C_Round_1_%2802%29_%28cropped_v2%29.jpg',
  },

  // Arjun Erigaisi
  'arjun erigaisi': {
    fideId: '35009192',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Arjun_Erigaisi_Uzchess_cup_3_masters_%28cropped%29.jpg/330px-Arjun_Erigaisi_Uzchess_cup_3_masters_%28cropped%29.jpg',
  },
  'erigaisi, arjun': {
    fideId: '35009192',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Arjun_Erigaisi_Uzchess_cup_3_masters_%28cropped%29.jpg/330px-Arjun_Erigaisi_Uzchess_cup_3_masters_%28cropped%29.jpg',
  },
  'erigaisi': {
    fideId: '35009192',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Arjun_Erigaisi_Uzchess_cup_3_masters_%28cropped%29.jpg/330px-Arjun_Erigaisi_Uzchess_cup_3_masters_%28cropped%29.jpg',
  },

  // Ian Nepomniachtchi
  'ian nepomniachtchi': {
    fideId: '4168119',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Ian_Nepomniachtchi_at_UzChess_Cup_2026_%28v2%29.jpg/330px-Ian_Nepomniachtchi_at_UzChess_Cup_2026_%28v2%29.jpg',
  },
  'nepomniachtchi, ian': {
    fideId: '4168119',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Ian_Nepomniachtchi_at_UzChess_Cup_2026_%28v2%29.jpg/330px-Ian_Nepomniachtchi_at_UzChess_Cup_2026_%28v2%29.jpg',
  },
  'nepomniachtchi, i.': {
    fideId: '4168119',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Ian_Nepomniachtchi_at_UzChess_Cup_2026_%28v2%29.jpg/330px-Ian_Nepomniachtchi_at_UzChess_Cup_2026_%28v2%29.jpg',
  },
  'nepomniachtchi': {
    fideId: '4168119',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Ian_Nepomniachtchi_at_UzChess_Cup_2026_%28v2%29.jpg/330px-Ian_Nepomniachtchi_at_UzChess_Cup_2026_%28v2%29.jpg',
  },

  // Ding Liren
  'ding liren': {
    fideId: '8603677',
    fed: 'CHN',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Ding_Liren_at_the_46th_FIDE_Chess_Olympiad.jpg/330px-Ding_Liren_at_the_46th_FIDE_Chess_Olympiad.jpg',
  },
  'ding, liren': {
    fideId: '8603677',
    fed: 'CHN',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Ding_Liren_at_the_46th_FIDE_Chess_Olympiad.jpg/330px-Ding_Liren_at_the_46th_FIDE_Chess_Olympiad.jpg',
  },
  'ding': {
    fideId: '8603677',
    fed: 'CHN',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Ding_Liren_at_the_46th_FIDE_Chess_Olympiad.jpg/330px-Ding_Liren_at_the_46th_FIDE_Chess_Olympiad.jpg',
  },

  // Nodirbek Abdusattorov
  'nodirbek abdusattorov': {
    fideId: '14203983',
    fed: 'UZB',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Abdusattorov_Nodirbek_Uzchess_cup_3_masters_%28cropped_v2%29.jpg/330px-Abdusattorov_Nodirbek_Uzchess_cup_3_masters_%28cropped_v2%29.jpg',
  },
  'abdusattorov, nodirbek': {
    fideId: '14203983',
    fed: 'UZB',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Abdusattorov_Nodirbek_Uzchess_cup_3_masters_%28cropped_v2%29.jpg/330px-Abdusattorov_Nodirbek_Uzchess_cup_3_masters_%28cropped_v2%29.jpg',
  },
  'abdusattorov': {
    fideId: '14203983',
    fed: 'UZB',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Abdusattorov_Nodirbek_Uzchess_cup_3_masters_%28cropped_v2%29.jpg/330px-Abdusattorov_Nodirbek_Uzchess_cup_3_masters_%28cropped_v2%29.jpg',
  },

  // Wesley So
  'wesley so': {
    fideId: '5202213',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Wesley_So_in_2023.jpg/330px-Wesley_So_in_2023.jpg',
  },
  'so, wesley': {
    fideId: '5202213',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Wesley_So_in_2023.jpg/330px-Wesley_So_in_2023.jpg',
  },
  'so, w.': {
    fideId: '5202213',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Wesley_So_in_2023.jpg/330px-Wesley_So_in_2023.jpg',
  },

  // Anish Giri
  'anish giri': {
    fideId: '24116068',
    fed: 'NED',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Anish_Giri_at_the_46th_FIDE_Chess_Olympiad_%281%29.jpg/330px-Anish_Giri_at_the_46th_FIDE_Chess_Olympiad_%281%29.jpg',
  },
  'giri, anish': {
    fideId: '24116068',
    fed: 'NED',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Anish_Giri_at_the_46th_FIDE_Chess_Olympiad_%281%29.jpg/330px-Anish_Giri_at_the_46th_FIDE_Chess_Olympiad_%281%29.jpg',
  },
  'giri, a.': {
    fideId: '24116068',
    fed: 'NED',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Anish_Giri_at_the_46th_FIDE_Chess_Olympiad_%281%29.jpg/330px-Anish_Giri_at_the_46th_FIDE_Chess_Olympiad_%281%29.jpg',
  },
  'giri': {
    fideId: '24116068',
    fed: 'NED',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Anish_Giri_at_the_46th_FIDE_Chess_Olympiad_%281%29.jpg/330px-Anish_Giri_at_the_46th_FIDE_Chess_Olympiad_%281%29.jpg',
  },

  // Vidit Gujrathi
  'vidit gujrathi': {
    fideId: '5029465',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Vidit_Gujrathi_Uzchess_cup_3_%28cropped%29.jpg/330px-Vidit_Gujrathi_Uzchess_cup_3_%28cropped%29.jpg',
  },
  'vidit santosh gujrathi': {
    fideId: '5029465',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Vidit_Gujrathi_Uzchess_cup_3_%28cropped%29.jpg/330px-Vidit_Gujrathi_Uzchess_cup_3_%28cropped%29.jpg',
  },
  'vidit, santosh gujrathi': {
    fideId: '5029465',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Vidit_Gujrathi_Uzchess_cup_3_%28cropped%29.jpg/330px-Vidit_Gujrathi_Uzchess_cup_3_%28cropped%29.jpg',
  },
  'vidit': {
    fideId: '5029465',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Vidit_Gujrathi_Uzchess_cup_3_%28cropped%29.jpg/330px-Vidit_Gujrathi_Uzchess_cup_3_%28cropped%29.jpg',
  },

  // Levon Aronian
  'levon aronian': {
    fideId: '13300474',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/LevonAronian23.jpg/330px-LevonAronian23.jpg',
  },
  'aronian, levon': {
    fideId: '13300474',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/LevonAronian23.jpg/330px-LevonAronian23.jpg',
  },
  'aronian': {
    fideId: '13300474',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/LevonAronian23.jpg/330px-LevonAronian23.jpg',
  },

  // Maxime Vachier-Lagrave
  'maxime vachier-lagrave': {
    fideId: '623539',
    fed: 'FRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Maxime_Vachier-Lagrave_au_tournoi_des_candidats_%28cropped%29.jpg/330px-Maxime_Vachier-Lagrave_au_tournoi_des_candidats_%28cropped%29.jpg',
  },
  'vachier-lagrave, maxime': {
    fideId: '623539',
    fed: 'FRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Maxime_Vachier-Lagrave_au_tournoi_des_candidats_%28cropped%29.jpg/330px-Maxime_Vachier-Lagrave_au_tournoi_des_candidats_%28cropped%29.jpg',
  },
  'vachier-lagrave': {
    fideId: '623539',
    fed: 'FRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Maxime_Vachier-Lagrave_au_tournoi_des_candidats_%28cropped%29.jpg/330px-Maxime_Vachier-Lagrave_au_tournoi_des_candidats_%28cropped%29.jpg',
  },

  // Jan-Krzysztof Duda
  'jan-krzysztof duda': {
    fideId: '1170546',
    fed: 'POL',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Jan-Krzysztof_Duda_2021_%28cropped%29.jpg/330px-Jan-Krzysztof_Duda_2021_%28cropped%29.jpg',
  },
  'duda, jan-krzysztof': {
    fideId: '1170546',
    fed: 'POL',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Jan-Krzysztof_Duda_2021_%28cropped%29.jpg/330px-Jan-Krzysztof_Duda_2021_%28cropped%29.jpg',
  },
  'duda': {
    fideId: '1170546',
    fed: 'POL',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Jan-Krzysztof_Duda_2021_%28cropped%29.jpg/330px-Jan-Krzysztof_Duda_2021_%28cropped%29.jpg',
  },

  // Richard Rapport
  'richard rapport': {
    fideId: '738590',
    fed: 'HUN',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Richard_Rapport_in_June_2026_%28v2%29.jpg/330px-Richard_Rapport_in_June_2026_%28v2%29.jpg',
  },
  'rapport, richard': {
    fideId: '738590',
    fed: 'HUN',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Richard_Rapport_in_June_2026_%28v2%29.jpg/330px-Richard_Rapport_in_June_2026_%28v2%29.jpg',
  },
  'rapport': {
    fideId: '738590',
    fed: 'HUN',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Richard_Rapport_in_June_2026_%28v2%29.jpg/330px-Richard_Rapport_in_June_2026_%28v2%29.jpg',
  },

  // Vincent Keymer
  'vincent keymer': {
    fideId: '12940690',
    fed: 'GER',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Vincent_Keymer_2026_Norway_Chess.jpg/330px-Vincent_Keymer_2026_Norway_Chess.jpg',
  },
  'keymer, vincent': {
    fideId: '12940690',
    fed: 'GER',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Vincent_Keymer_2026_Norway_Chess.jpg/330px-Vincent_Keymer_2026_Norway_Chess.jpg',
  },
  'keymer': {
    fideId: '12940690',
    fed: 'GER',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Vincent_Keymer_2026_Norway_Chess.jpg/330px-Vincent_Keymer_2026_Norway_Chess.jpg',
  },

  // Wei Yi
  'wei yi': {
    fideId: '8603405',
    fed: 'CHN',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Wei_Yi_in_2025_%28cropped%29.jpg/330px-Wei_Yi_in_2025_%28cropped%29.jpg',
  },
  'wei, yi': {
    fideId: '8603405',
    fed: 'CHN',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Wei_Yi_in_2025_%28cropped%29.jpg/330px-Wei_Yi_in_2025_%28cropped%29.jpg',
  },

  // Hans Niemann
  'hans niemann': {
    fideId: '2093596',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Hans_Niemann_Uzchess_cup_3_masters_%28cropped_v2%29.jpg/330px-Hans_Niemann_Uzchess_cup_3_masters_%28cropped_v2%29.jpg',
  },
  'niemann, hans': {
    fideId: '2093596',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Hans_Niemann_Uzchess_cup_3_masters_%28cropped_v2%29.jpg/330px-Hans_Niemann_Uzchess_cup_3_masters_%28cropped_v2%29.jpg',
  },
  'niemann, hans moke': {
    fideId: '2093596',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Hans_Niemann_Uzchess_cup_3_masters_%28cropped_v2%29.jpg/330px-Hans_Niemann_Uzchess_cup_3_masters_%28cropped_v2%29.jpg',
  },
  'niemann': {
    fideId: '2093596',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Hans_Niemann_Uzchess_cup_3_masters_%28cropped_v2%29.jpg/330px-Hans_Niemann_Uzchess_cup_3_masters_%28cropped_v2%29.jpg',
  },

  // Daniil Dubov
  'daniil dubov': {
    fideId: '24126055',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/DaniilDubov19a.jpg/330px-DaniilDubov19a.jpg',
  },
  'dubov, daniil': {
    fideId: '24126055',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/DaniilDubov19a.jpg/330px-DaniilDubov19a.jpg',
  },
  'dubov': {
    fideId: '24126055',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/DaniilDubov19a.jpg/330px-DaniilDubov19a.jpg',
  },

  // Alexander Grischuk
  'alexander grischuk': {
    fideId: '4126025',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Alexander_Grischuk_4%2C_Candidates_Tournament_2018.jpg/330px-Alexander_Grischuk_4%2C_Candidates_Tournament_2018.jpg',
  },
  'grischuk, alexander': {
    fideId: '4126025',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Alexander_Grischuk_4%2C_Candidates_Tournament_2018.jpg/330px-Alexander_Grischuk_4%2C_Candidates_Tournament_2018.jpg',
  },
  'grischuk': {
    fideId: '4126025',
    fed: 'FID',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Alexander_Grischuk_4%2C_Candidates_Tournament_2018.jpg/330px-Alexander_Grischuk_4%2C_Candidates_Tournament_2018.jpg',
  },

  // Shakhriyar Mamedyarov
  'shakhriyar mamedyarov': {
    fideId: '13401319',
    fed: 'AZE',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Shakhriyar_Mamedyarov_in_August_2026.jpg/330px-Shakhriyar_Mamedyarov_in_August_2026.jpg',
  },
  'mamedyarov, shakhriyar': {
    fideId: '13401319',
    fed: 'AZE',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Shakhriyar_Mamedyarov_in_August_2026.jpg/330px-Shakhriyar_Mamedyarov_in_August_2026.jpg',
  },
  'mamedyarov': {
    fideId: '13401319',
    fed: 'AZE',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Shakhriyar_Mamedyarov_in_August_2026.jpg/330px-Shakhriyar_Mamedyarov_in_August_2026.jpg',
  },

  // Teimour Radjabov
  'teimour radjabov': {
    fideId: '13400924',
    fed: 'AZE',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Teimour_Radjabov_at_the_46th_FIDE_Chess_Olympiad.jpg/330px-Teimour_Radjabov_at_the_46th_FIDE_Chess_Olympiad.jpg',
  },
  'radjabov, teimour': {
    fideId: '13400924',
    fed: 'AZE',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Teimour_Radjabov_at_the_46th_FIDE_Chess_Olympiad.jpg/330px-Teimour_Radjabov_at_the_46th_FIDE_Chess_Olympiad.jpg',
  },

  // Mestres do Brasil
  'luis paulo supi': {
    fideId: '2110210',
    fed: 'BRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Luis_Paulo_Supi.jpg/330px-Luis_Paulo_Supi.jpg',
  },
  'supi, luis paulo': {
    fideId: '2110210',
    fed: 'BRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Luis_Paulo_Supi.jpg/330px-Luis_Paulo_Supi.jpg',
  },
  'supi': {
    fideId: '2110210',
    fed: 'BRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Luis_Paulo_Supi.jpg/330px-Luis_Paulo_Supi.jpg',
  },
  'alexandr fier': {
    fideId: '2107104',
    fed: 'BRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/AlexandrFier23a.jpg/330px-AlexandrFier23a.jpg',
  },
  'fier, alexandr': {
    fideId: '2107104',
    fed: 'BRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/AlexandrFier23a.jpg/330px-AlexandrFier23a.jpg',
  },
  'fier': {
    fideId: '2107104',
    fed: 'BRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/AlexandrFier23a.jpg/330px-AlexandrFier23a.jpg',
  },
  'krikor sevag mekhitarian': {
    fideId: '2107660',
    fed: 'BRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/KrikorMekhitarian13_%28cropped%29.jpg/330px-KrikorMekhitarian13_%28cropped%29.jpg',
  },
  'mekhitarian, krikor sevag': {
    fideId: '2107660',
    fed: 'BRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/KrikorMekhitarian13_%28cropped%29.jpg/330px-KrikorMekhitarian13_%28cropped%29.jpg',
  },
  'mekhitarian': {
    fideId: '2107660',
    fed: 'BRA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/KrikorMekhitarian13_%28cropped%29.jpg/330px-KrikorMekhitarian13_%28cropped%29.jpg',
  },

  // Lendas e Campeões Históricos
  'bobby fischer': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Bobby_Fischer_1972.jpg/330px-Bobby_Fischer_1972.jpg',
  },
  'robert j. fischer': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Bobby_Fischer_1972.jpg/330px-Bobby_Fischer_1972.jpg',
  },
  'fischer, robert j.': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Bobby_Fischer_1972.jpg/330px-Bobby_Fischer_1972.jpg',
  },
  'fischer': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Bobby_Fischer_1972.jpg/330px-Bobby_Fischer_1972.jpg',
  },
  'boris spassky': {
    fideId: '',
    fed: 'URS',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Dhr._Boris_Spassky%2C_Bestanddeelnr_932-7320.jpg/330px-Dhr._Boris_Spassky%2C_Bestanddeelnr_932-7320.jpg',
  },
  'spassky, boris': {
    fideId: '',
    fed: 'URS',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Dhr._Boris_Spassky%2C_Bestanddeelnr_932-7320.jpg/330px-Dhr._Boris_Spassky%2C_Bestanddeelnr_932-7320.jpg',
  },
  'spassky': {
    fideId: '',
    fed: 'URS',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Dhr._Boris_Spassky%2C_Bestanddeelnr_932-7320.jpg/330px-Dhr._Boris_Spassky%2C_Bestanddeelnr_932-7320.jpg',
  },
  'garry kasparov': {
    fideId: '4100018',
    fed: 'RUS',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Garri_Kasparow_%2818776605665%29_%28cropped%29_2.jpg/330px-Garri_Kasparow_%2818776605665%29_%28cropped%29_2.jpg',
  },
  'kasparov, garry': {
    fideId: '4100018',
    fed: 'RUS',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Garri_Kasparow_%2818776605665%29_%28cropped%29_2.jpg/330px-Garri_Kasparow_%2818776605665%29_%28cropped%29_2.jpg',
  },
  'kasparov': {
    fideId: '4100018',
    fed: 'RUS',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Garri_Kasparow_%2818776605665%29_%28cropped%29_2.jpg/330px-Garri_Kasparow_%2818776605665%29_%28cropped%29_2.jpg',
  },
  'anatoly karpov': {
    fideId: '4100026',
    fed: 'RUS',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Anatoly_Karpov_2017_april.jpg/330px-Anatoly_Karpov_2017_april.jpg',
  },
  'karpov, anatoly': {
    fideId: '4100026',
    fed: 'RUS',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Anatoly_Karpov_2017_april.jpg/330px-Anatoly_Karpov_2017_april.jpg',
  },
  'karpov': {
    fideId: '4100026',
    fed: 'RUS',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Anatoly_Karpov_2017_april.jpg/330px-Anatoly_Karpov_2017_april.jpg',
  },
  'viswanathan anand': {
    fideId: '5000017',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Viswanathan_Anand_%282016%29_%28cropped%29.jpeg/330px-Viswanathan_Anand_%282016%29_%28cropped%29.jpeg',
  },
  'anand, viswanathan': {
    fideId: '5000017',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Viswanathan_Anand_%282016%29_%28cropped%29.jpeg/330px-Viswanathan_Anand_%282016%29_%28cropped%29.jpeg',
  },
  'anand': {
    fideId: '5000017',
    fed: 'IND',
    title: 'GM',
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Viswanathan_Anand_%282016%29_%28cropped%29.jpeg/330px-Viswanathan_Anand_%282016%29_%28cropped%29.jpeg',
  },
  'vladimir kramnik': {
    fideId: '4101588',
    fed: 'RUS',
    title: 'GM',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Vladimir_Kramnik_2%2C_Candidates_Tournament_2018.jpg',
  },
  'kramnik, vladimir': {
    fideId: '4101588',
    fed: 'RUS',
    title: 'GM',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Vladimir_Kramnik_2%2C_Candidates_Tournament_2018.jpg',
  },
  'kramnik': {
    fideId: '4101588',
    fed: 'RUS',
    title: 'GM',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Vladimir_Kramnik_2%2C_Candidates_Tournament_2018.jpg',
  },
  // Campeões Mundiais Clássicos e Lendas da Partida do Dia
  'tal': {
    fideId: '',
    fed: 'LAT',
    title: 'GM',
    wikiSlug: 'Mikhail_Tal',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mikhail_Tal_1982.jpg/330px-Mikhail_Tal_1982.jpg',
  },
  'botvinnik': {
    fideId: '',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Mikhail_Botvinnik',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Mikhail_Botvinnik_1962.jpg/330px-Mikhail_Botvinnik_1962.jpg',
  },
  'capablanca': {
    fideId: '',
    fed: 'CUB',
    title: 'GM',
    wikiSlug: 'José_Raúl_Capablanca',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Jos%C3%A9_Ra%C3%BAl_Capablanca_1931.jpg/330px-Jos%C3%A9_Ra%C3%BAl_Capablanca_1931.jpg',
  },
  'alekhine': {
    fideId: '',
    fed: 'FRA',
    title: 'GM',
    wikiSlug: 'Alexander_Alekhine',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Alexandre_Alekhine_color.jpg/330px-Alexandre_Alekhine_color.jpg',
  },
  'lasker': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Emanuel_Lasker',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Emanuel_Lasker_1920s.jpg/330px-Emanuel_Lasker_1920s.jpg',
  },
  'steinitz': {
    fideId: '',
    fed: 'AUT',
    title: 'GM',
    wikiSlug: 'Wilhelm_Steinitz',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wilhelm_Steinitz2.jpg/330px-Wilhelm_Steinitz2.jpg',
  },
  'morphy': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Paul_Morphy',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Paul_Morphy_portrait.jpg/330px-Paul_Morphy_portrait.jpg',
  },
  'anderssen': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Adolf_Anderssen',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Adolf_Anderssen.jpg/330px-Adolf_Anderssen.jpg',
  },
  'smyslov': {
    fideId: '',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Vasily_Smyslov',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vasily_Smyslov_1977.jpg/330px-Vasily_Smyslov_1977.jpg',
  },
  'petrosian': {
    fideId: '',
    fed: 'ARM',
    title: 'GM',
    wikiSlug: 'Tigran_Petrosian',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Tigran_Petrosian_1975.jpg/330px-Tigran_Petrosian_1975.jpg',
  },
  'euwe': {
    fideId: '',
    fed: 'NED',
    title: 'GM',
    wikiSlug: 'Max_Euwe',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Max_Euwe_1973.jpg/330px-Max_Euwe_1973.jpg',
  },
  'korchnoi': {
    fideId: '',
    fed: 'SUI',
    title: 'GM',
    wikiSlug: 'Viktor_Korchnoi',
  },
  'kortchnoi': {
    fideId: '',
    fed: 'SUI',
    title: 'GM',
    wikiSlug: 'Viktor_Korchnoi',
  },
  'bronstein': {
    fideId: '',
    fed: 'UKR',
    title: 'GM',
    wikiSlug: 'David_Bronstein',
  },
  'keres': {
    fideId: '',
    fed: 'EST',
    title: 'GM',
    wikiSlug: 'Paul_Keres',
  },
  'larsen': {
    fideId: '',
    fed: 'DEN',
    title: 'GM',
    wikiSlug: 'Bent_Larsen',
  },
  'mecking': {
    fideId: '2100010',
    fed: 'BRA',
    title: 'GM',
    wikiSlug: 'Henrique_Mecking',
  },
  'gligoric': {
    fideId: '',
    fed: 'SRB',
    title: 'GM',
    wikiSlug: 'Svetozar_Gligorić',
  },
  'taimanov': {
    fideId: '',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Mark_Taimanov',
  },
  'geller': {
    fideId: '',
    fed: 'UKR',
    title: 'GM',
    wikiSlug: 'Efim_Geller',
  },
  'polugaevsky': {
    fideId: '',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Lev_Polugaevsky',
  },
  'portisch': {
    fideId: '',
    fed: 'HUN',
    title: 'GM',
    wikiSlug: 'Lajos_Portisch',
  },
  'ljubojevic': {
    fideId: '',
    fed: 'SRB',
    title: 'GM',
    wikiSlug: 'Ljubomir_Ljubojević',
  },
  'panno': {
    fideId: '',
    fed: 'ARG',
    title: 'GM',
    wikiSlug: 'Oscar_Panno',
  },
  'ivkov': {
    fideId: '',
    fed: 'SRB',
    title: 'GM',
    wikiSlug: 'Borislav_Ivkov',
  },
  'reshevsky': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Samuel_Reshevsky',
  },
  'byrne': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Robert_Byrne_(chess_player)',
  },
  'byrne, d': {
    fideId: '',
    fed: 'USA',
    title: 'IM',
    wikiSlug: 'Donald_Byrne',
  },
  'byrne, donald': {
    fideId: '',
    fed: 'USA',
    title: 'IM',
    wikiSlug: 'Donald_Byrne',
  },
  'uhlmann': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Wolfgang_Uhlmann',
  },
  'huebner': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Robert_Hübner',
  },
  'hort': {
    fideId: '',
    fed: 'CZE',
    title: 'GM',
    wikiSlug: 'Vlastimil_Hort',
  },
  'smejkal': {
    fideId: '',
    fed: 'CZE',
    title: 'GM',
    wikiSlug: 'Jan_Smejkal',
  },
  'tukmakov': {
    fideId: '',
    fed: 'UKR',
    title: 'GM',
    wikiSlug: 'Vladimir_Tukmakov',
  },
  'torre': {
    fideId: '',
    fed: 'PHI',
    title: 'GM',
    wikiSlug: 'Eugenio_Torre',
  },
  'quinteros': {
    fideId: '',
    fed: 'ARG',
    title: 'GM',
    wikiSlug: 'Miguel_Quinteros',
  },
  'radulov': {
    fideId: '',
    fed: 'BUL',
    title: 'GM',
    wikiSlug: 'Ivan_Radulov',
  },
  'kuzmin': {
    fideId: '',
    fed: 'UKR',
    title: 'GM',
    wikiSlug: 'Gennady_Kuzmin',
  },
  'savon': {
    fideId: '',
    fed: 'UKR',
    title: 'GM',
    wikiSlug: 'Vladimir_Savon',
  },
  'gheorghiu': {
    fideId: '',
    fed: 'ROU',
    title: 'GM',
    wikiSlug: 'Florin_Gheorghiu',
  },
  'topalov': {
    fideId: '2900084',
    fed: 'BUL',
    title: 'GM',
    wikiSlug: 'Veselin_Topalov',
  },
  'gelfand': {
    fideId: '2805677',
    fed: 'ISR',
    title: 'GM',
    wikiSlug: 'Boris_Gelfand',
  },
  'adams': {
    fideId: '400041',
    fed: 'ENG',
    title: 'GM',
    wikiSlug: 'Michael_Adams_(chess_player)',
  },
  'morozevich': {
    fideId: '4116992',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Alexander_Morozevich',
  },
  'shirov': {
    fideId: '2209390',
    fed: 'ESP',
    title: 'GM',
    wikiSlug: 'Alexei_Shirov',
  },
  'leko': {
    fideId: '703303',
    fed: 'HUN',
    title: 'GM',
    wikiSlug: 'Peter_Leko',
  },
  'bareev': {
    fideId: '4100140',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Evgeny_Bareev',
  },
  'short': {
    fideId: '400025',
    fed: 'ENG',
    title: 'GM',
    wikiSlug: 'Nigel_Short',
  },
  'timman': {
    fideId: '1000012',
    fed: 'NED',
    title: 'GM',
    wikiSlug: 'Jan_Timman',
  },
  'kamsky': {
    fideId: '2000024',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Gata_Kamsky',
  },
  'ivanchuk': {
    fideId: '14100010',
    fed: 'UKR',
    title: 'GM',
    wikiSlug: 'Vasyl_Ivanchuk',
  },
  'polgar': {
    fideId: '700070',
    fed: 'HUN',
    title: 'GM',
    wikiSlug: 'Judit_Polgár',
  },
  'polgar, susan': {
    fideId: '700088',
    fed: 'HUN',
    title: 'GM',
    wikiSlug: 'Susan_Polgar',
  },
  'nimzovitch': {
    fideId: '',
    fed: 'DEN',
    title: 'GM',
    wikiSlug: 'Aron_Nimzowitsch',
  },
  'nimzowitsch': {
    fideId: '',
    fed: 'DEN',
    title: 'GM',
    wikiSlug: 'Aron_Nimzowitsch',
  },
  'rubinstein': {
    fideId: '',
    fed: 'POL',
    title: 'GM',
    wikiSlug: 'Akiba_Rubinstein',
  },
  'zukertort': {
    fideId: '',
    fed: 'POL',
    title: 'GM',
    wikiSlug: 'Johannes_Zukertort',
  },
  'kieseritzky': {
    fideId: '',
    fed: 'FRA',
    title: 'GM',
    wikiSlug: 'Lionel_Kieseritzky',
  },
  'tartakower': {
    fideId: '',
    fed: 'POL',
    title: 'GM',
    wikiSlug: 'Savielly_Tartakower',
  },
  'reti': {
    fideId: '',
    fed: 'CZE',
    title: 'GM',
    wikiSlug: 'Richard_Réti',
  },
  'marshall': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Frank_Marshall_(chess_player)',
  },
  'tarrasch': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Siegbert_Tarrasch',
  },
  'bogoljubow': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Efim_Bogoljubow',
  },
  'chigorin': {
    fideId: '',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Mikhail_Chigorin',
  },
  'pillsbury': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Harry_Nelson_Pillsbury',
  },
  'blackburne': {
    fideId: '',
    fed: 'ENG',
    title: 'GM',
    wikiSlug: 'Joseph_Henry_Blackburne',
  },
  'nezhmetdinov': {
    fideId: '',
    fed: 'RUS',
    title: 'IM',
    wikiSlug: 'Rashid_Nezhmetdinov',
  },
  'neshmetdinov': {
    fideId: '',
    fed: 'RUS',
    title: 'IM',
    wikiSlug: 'Rashid_Nezhmetdinov',
  },
  'yusupov': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Artur_Yusupov',
  },
  'seirawan': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Yasser_Seirawan',
  },
  'nunn': {
    fideId: '',
    fed: 'ENG',
    title: 'GM',
    wikiSlug: 'John_Nunn',
  },
  'beliavsky': {
    fideId: '',
    fed: 'SLO',
    title: 'GM',
    wikiSlug: 'Alexander_Beliavsky',
  },
  'karjakin': {
    fideId: '14109603',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Sergey_Karjakin',
  },
  'averbakh': {
    fideId: '',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Yuri_Averbakh',
  },
  'kotov': {
    fideId: '',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Alexander_Kotov',
  },
  'gufeld': {
    fideId: '',
    fed: 'UKR',
    title: 'GM',
    wikiSlug: 'Eduard_Gufeld',
  },
  'kavalek': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Lubomir_Kavalek',
  },
  'evans': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Larry_Evans',
  },
  'benko': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Pal_Benko',
  },
  'bisguier': {
    fideId: '',
    fed: 'USA',
    title: 'GM',
    wikiSlug: 'Arthur_Bisguier',
  },
  'ftacnik': {
    fideId: '',
    fed: 'SVK',
    title: 'GM',
    wikiSlug: 'Ľubomír_Ftáčnik',
  },
  'hjartarson': {
    fideId: '',
    fed: 'ISL',
    title: 'GM',
    wikiSlug: 'Jóhann_Hjartarson',
  },
  'lutz': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Christopher_Lutz',
  },
  'mcdonnell': {
    fideId: '',
    fed: 'IRL',
    title: 'GM',
    wikiSlug: 'Alexander_McDonnell',
  },
  'de la bourdonnais': {
    fideId: '',
    fed: 'FRA',
    title: 'GM',
    wikiSlug: 'Louis-Charles_Mahé_de_La_Bourdonnais',
  },
  'dufresne': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Jean_Dufresne',
  },
  'paulsen': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Louis_Paulsen',
  },
  'janowski': {
    fideId: '',
    fed: 'FRA',
    title: 'GM',
    wikiSlug: 'Dawid_Janowski',
  },
  'bernstein': {
    fideId: '',
    fed: 'FRA',
    title: 'GM',
    wikiSlug: 'Ossip_Bernstein',
  },
  'saemisch': {
    fideId: '',
    fed: 'GER',
    title: 'GM',
    wikiSlug: 'Friedrich_Sämisch',
  },
  'cholmov': {
    fideId: '',
    fed: 'RUS',
    title: 'GM',
    wikiSlug: 'Ratmir_Kholmov',
  },
  'rukavina': {
    fideId: '',
    fed: 'CRO',
    title: 'IM',
    wikiSlug: 'Josip_Rukavina',
  },
  'estevez morales': {
    fideId: '',
    fed: 'CUB',
    title: 'IM',
    wikiSlug: 'Guillermo_Estévez_Morales',
  },
  'estevez': {
    fideId: '',
    fed: 'CUB',
    title: 'IM',
    wikiSlug: 'Guillermo_Estévez_Morales',
  },
  'cuellar gacharna': {
    fideId: '',
    fed: 'COL',
    title: 'IM',
    wikiSlug: 'Miguel_Cuéllar',
  },
  'cuellar': {
    fideId: '',
    fed: 'COL',
    title: 'IM',
    wikiSlug: 'Miguel_Cuéllar',
  },
  'biyiasas': {
    fideId: '',
    fed: 'CAN',
    title: 'GM',
    wikiSlug: 'Peter_Biyiasas',
  },
  'kagan': {
    fideId: '',
    fed: 'ISR',
    title: 'IM',
    wikiSlug: 'Shimon_Kagan',
  },
  'hug': {
    fideId: '',
    fed: 'SUI',
    title: 'IM',
    wikiSlug: 'Werner_Hug',
  },
  'tan': {
    fideId: '',
    fed: 'SGP',
    title: 'IM',
    wikiSlug: 'Tan_Lian_Ann',
  },
};

// Dicionário extensivo mapeando federações FIDE, códigos ISO e nomes de países para ISO 3166-1 alpha-2
export const FED_TO_ISO2 = {
  // Códigos FIDE / IOC
  USA: 'us',
  US: 'us',
  NOR: 'no',
  NO: 'no',
  IND: 'in',
  IN: 'in',
  FRA: 'fr',
  FR: 'fr',
  UZB: 'uz',
  UZ: 'uz',
  CHN: 'cn',
  CN: 'cn',
  NED: 'nl',
  NL: 'nl',
  GER: 'de',
  DE: 'de',
  POL: 'pl',
  PL: 'pl',
  HUN: 'hu',
  HU: 'hu',
  AZE: 'az',
  AZ: 'az',
  RUS: 'ru',
  RU: 'ru',
  FID: 'ru',
  URS: 'ru',
  BRA: 'br',
  BR: 'br',
  ESP: 'es',
  ES: 'es',
  ITA: 'it',
  IT: 'it',
  ARG: 'ar',
  AR: 'ar',
  ENG: 'gb',
  GB: 'gb',
  UK: 'gb',
  SCO: 'gb',
  UKR: 'ua',
  UA: 'ua',
  ARM: 'am',
  AM: 'am',
  CUB: 'cu',
  CU: 'cu',
  ROU: 'ro',
  RO: 'ro',
  LAT: 'lv',
  LV: 'lv',
  EST: 'ee',
  EE: 'ee',
  LTU: 'lt',
  LT: 'lt',
  SUI: 'ch',
  CH: 'ch',
  AUT: 'at',
  AT: 'at',
  BEL: 'be',
  BE: 'be',
  BUL: 'bg',
  BG: 'bg',
  YUG: 'rs',
  SLO: 'si',
  SI: 'si',
  SVK: 'sk',
  SK: 'sk',
  ISL: 'is',
  IS: 'is',
  IRL: 'ie',
  IE: 'ie',
  SGP: 'sg',
  SG: 'sg',
  BLR: 'by',
  BY: 'by',
  MDA: 'md',
  MD: 'md',
  CZE: 'cz',
  CZ: 'cz',
  SRB: 'rs',
  RS: 'rs',
  CRO: 'hr',
  HR: 'hr',
  GRE: 'gr',
  GR: 'gr',
  TUR: 'tr',
  TR: 'tr',
  VIE: 'vn',
  VN: 'vn',
  PHI: 'ph',
  PH: 'ph',
  GEO: 'ge',
  GE: 'ge',
  KAZ: 'kz',
  KZ: 'kz',
  IRI: 'ir',
  IR: 'ir',
  ISR: 'il',
  IL: 'il',
  SWE: 'se',
  SE: 'se',
  DEN: 'dk',
  DK: 'dk',
  FIN: 'fi',
  FI: 'fi',
  POR: 'pt',
  PT: 'pt',
  COL: 'co',
  CO: 'co',
  MEX: 'mx',
  MX: 'mx',
  CHI: 'cl',
  CL: 'cl',
  PER: 'pe',
  PE: 'pe',
  VEN: 've',
  VE: 've',
  URU: 'uy',
  UY: 'uy',
  PAR: 'py',
  PY: 'py',
  CAN: 'ca',
  CA: 'ca',
  AUS: 'au',
  AU: 'au',
  NZL: 'nz',
  NZ: 'nz',
  RSA: 'za',
  ZA: 'za',
  EGY: 'eg',
  EG: 'eg',

  // Nomes em inglês
  'UNITED STATES': 'us',
  'UNITED STATES OF AMERICA': 'us',
  'NORWAY': 'no',
  'INDIA': 'in',
  'FRANCE': 'fr',
  'UZBEKISTAN': 'uz',
  'CHINA': 'cn',
  'NETHERLANDS': 'nl',
  'GERMANY': 'de',
  'POLAND': 'pl',
  'HUNGARY': 'hu',
  'AZERBAIJAN': 'az',
  'RUSSIA': 'ru',
  'SOVIET UNION': 'ru',
  'BRAZIL': 'br',
  'SPAIN': 'es',
  'ITALY': 'it',
  'ARGENTINA': 'ar',
  'ENGLAND': 'gb',
  'UNITED KINGDOM': 'gb',
  'GREAT BRITAIN': 'gb',
  'UKRAINE': 'ua',
  'ARMENIA': 'am',
  'CUBA': 'cu',
  'ROMANIA': 'ro',
  'CZECH REPUBLIC': 'cz',
  'CZECHIA': 'cz',
  'SERBIA': 'rs',
  'CROATIA': 'hr',
  'GREECE': 'gr',
  'TURKEY': 'tr',
  'VIETNAM': 'vn',
  'PHILIPPINES': 'ph',
  'GEORGIA': 'ge',
  'KAZAKHSTAN': 'kz',
  'IRAN': 'ir',
  'ISRAEL': 'il',
  'SWEDEN': 'se',
  'DENMARK': 'dk',
  'FINLAND': 'fi',
  'PORTUGAL': 'pt',
  'COLOMBIA': 'co',
  'MEXICO': 'mx',
  'CHILE': 'cl',
  'PERU': 'pe',
  'CANADA': 'ca',
  'AUSTRALIA': 'au',

  // Nomes em português e espanhol
  'ESTADOS UNIDOS': 'us',
  'NORUEGA': 'no',
  'ÍNDIA': 'in',
  'FRANÇA': 'fr',
  'FRANCIA': 'fr',
  'USBEQUISTÃO': 'uz',
  'UZBEQUISTÁN': 'uz',
  'HOLANDA': 'nl',
  'PAÍSES BAIXOS': 'nl',
  'PAISES BAJOS': 'nl',
  'ALEMANHA': 'de',
  'ALEMANIA': 'de',
  'POLÔNIA': 'pl',
  'POLONIA': 'pl',
  'HUNGRIA': 'hu',
  'AZERBAIJÃO': 'az',
  'AZERBAIYÁN': 'az',
  'RÚSSIA': 'ru',
  'RUSIA': 'ru',
  'UNIÃO SOVIÉTICA': 'ru',
  'UNION SOVIETICA': 'ru',
  'BRASIL': 'br',
  'ESPANHA': 'es',
  'ESPAÑA': 'es',
  'ITÁLIA': 'it',
  'ITALIA': 'it',
  'INGLATERRA': 'gb',
  'REINO UNIDO': 'gb',
  'UCRÂNIA': 'ua',
  'UCRANIA': 'ua',
  'ARMÊNIA': 'am',
  'ROMÊNIA': 'ro',
  'ROMENIA': 'ro',
  'REPÚBLICA CHECA': 'cz',
  'REPUBLICA CHECA': 'cz',
  'SÉRVIA': 'rs',
  'SERVIA': 'rs',
  'CROÁCIA': 'hr',
  'CROACIA': 'hr',
  'GRÉCIA': 'gr',
  'GRECIA': 'gr',
  'TURQUIA': 'tr',
  'FILIPINAS': 'ph',
  'GEÓRGIA': 'ge',
  'CAZAQUISTÃO': 'kz',
  'CAZAJISTÁN': 'kz',
  'IRÃ': 'ir',
  'SUÉCIA': 'se',
  'SUECIA': 'se',
  'DINAMARCA': 'dk',
  'FINLÂNDIA': 'fi',
  'FINLANDIA': 'fi',
  'COLÔMBIA': 'co',
  'MÉXICO': 'mx',
  'AUSTRÁLIA': 'au',
};

/**
 * Converte qualquer código ou nome de país/federação em código ISO 3166-1 alpha-2 (minúsculo)
 */
export function getIsoCountryCode(fedOrCountry) {
  if (!fedOrCountry || typeof fedOrCountry !== 'string') return null;
  const clean = fedOrCountry.trim().toUpperCase();
  if (FED_TO_ISO2[clean]) return FED_TO_ISO2[clean];
  if (clean.length === 2 && /^[A-Z]{2}$/.test(clean)) return clean.toLowerCase();
  return null;
}

/**
 * Retorna o link de imagem da bandeira nacional a partir do código FIDE/País
 */
export function getFederationFlagUrl(fedCode) {
  const iso2 = getIsoCountryCode(fedCode);
  if (!iso2) return null;
  return `https://flagcdn.com/w40/${iso2}.png`;
}

/**
 * Normaliza o nome do jogador para busca na base (remove prefixos de títulos GM/IM e pontuações extras)
 */
export function normalizePlayerName(name) {
  if (!name || typeof name !== 'string') return '';
  // Remove títulos de xadrez do início do nome (ex: "GM Caruana, Fabiano" => "Caruana, Fabiano")
  const stripped = name.replace(/^(GM|IM|FM|WGM|WIM|WFM|CM|WCM)\s+/i, '').trim();
  return stripped.toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Retorna as informações do jogador pelo nome ou fideId consultando a base conhecida
 */
export function getPlayerMeta(playerName, fideId = null, fedCode = null) {
  const normalized = normalizePlayerName(playerName);
  const validFed =
    fedCode && !['WLD', 'FIDE', '?', '-'].includes(String(fedCode).trim().toUpperCase())
      ? fedCode
      : null;

  const buildResult = (known) => ({
    fideId: fideId || known.fideId || '',
    photo: known.photo || '',
    fed: validFed || known.fed || '',
    title: known.title || '',
    wikiSlug: known.wikiSlug || '',
  });

  if (normalized && KNOWN_FIDE_PLAYERS[normalized]) {
    return buildResult(KNOWN_FIDE_PLAYERS[normalized]);
  }

  // Tenta inversão de ordem ("Sobrenome, Nome" <=> "Nome Sobrenome")
  if (normalized && normalized.includes(',')) {
    const parts = normalized.split(',').map((p) => p.trim());
    const inverted = `${parts[1]} ${parts[0]}`.trim();
    if (KNOWN_FIDE_PLAYERS[inverted]) {
      return buildResult(KNOWN_FIDE_PLAYERS[inverted]);
    }
    const beforeComma = parts[0];
    if (beforeComma && KNOWN_FIDE_PLAYERS[beforeComma]) {
      return buildResult(KNOWN_FIDE_PLAYERS[beforeComma]);
    }
  } else if (normalized && normalized.includes(' ')) {
    const parts = normalized.split(' ');
    if (parts.length === 2) {
      const commaForm = `${parts[1]}, ${parts[0]}`.trim();
      if (KNOWN_FIDE_PLAYERS[commaForm]) {
        return buildResult(KNOWN_FIDE_PLAYERS[commaForm]);
      }
    }
  }

  // Tenta busca pelo primeiro segmento do sobrenome se for mestre consagrado
  if (normalized) {
    const lastName = normalized.split(',')[0].trim().split(' ')[0].trim();
    if (lastName && KNOWN_FIDE_PLAYERS[lastName]) {
      return buildResult(KNOWN_FIDE_PLAYERS[lastName]);
    }
  }

  return {
    fideId: fideId || '',
    photo: '',
    fed: validFed || '',
    title: '',
    wikiSlug: '',
  };
}

// Cache em memória para requisições assíncronas do Wikipedia API
const playerPhotoCache = new Map();

/**
 * Busca a foto do jogador e país dinamicamente via Wikipedia REST API (CORS aberto, CDN global)
 */
export async function fetchPlayerPhotoDynamic(playerName) {
  if (!playerName || typeof playerName !== 'string') return null;
  const normalized = normalizePlayerName(playerName);
  if (!normalized) return null;

  if (playerPhotoCache.has(normalized)) {
    return playerPhotoCache.get(normalized);
  }

  // 1. Tenta pegar do banco local verificado
  const localMeta = getPlayerMeta(playerName);
  if (localMeta && localMeta.photo) {
    playerPhotoCache.set(normalized, { photo: localMeta.photo, fed: localMeta.fed });
    return playerPhotoCache.get(normalized);
  }

  // 2. Formata o nome para o formato de slug da Wikipedia (usa wikiSlug se disponível para nomes abreviados)
  let slug = '';
  if (localMeta && localMeta.wikiSlug) {
    slug = encodeURIComponent(localMeta.wikiSlug);
  } else {
    let cleanName = playerName.replace(/^(GM|IM|FM|WGM|WIM|WFM|CM|WCM)\s+/i, '').trim();
    if (cleanName.includes(',')) {
      const parts = cleanName.split(',').map((s) => s.trim());
      if (parts.length >= 2) {
        cleanName = `${parts[1]} ${parts[0]}`;
      }
    }
    slug = encodeURIComponent(cleanName.replace(/\s+/g, '_'));
  }

  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`);
    if (res.ok) {
      const data = await res.json();
      const photo = data && data.thumbnail && data.thumbnail.source ? data.thumbnail.source : null;
      let detectedFed = localMeta?.fed || '';

      // Tenta inferir a nacionalidade a partir da descrição da Wikipedia se ainda não conhecida
      if (!detectedFed && data && data.description) {
        const desc = data.description.toLowerCase();
        if (desc.includes('american')) detectedFed = 'USA';
        else if (desc.includes('norwegian')) detectedFed = 'NOR';
        else if (desc.includes('indian')) detectedFed = 'IND';
        else if (desc.includes('french')) detectedFed = 'FRA';
        else if (desc.includes('uzbek')) detectedFed = 'UZB';
        else if (desc.includes('chinese')) detectedFed = 'CHN';
        else if (desc.includes('dutch')) detectedFed = 'NED';
        else if (desc.includes('german')) detectedFed = 'GER';
        else if (desc.includes('polish')) detectedFed = 'POL';
        else if (desc.includes('hungarian')) detectedFed = 'HUN';
        else if (desc.includes('russian') || desc.includes('soviet')) detectedFed = 'RUS';
        else if (desc.includes('brazilian')) detectedFed = 'BRA';
        else if (desc.includes('spanish')) detectedFed = 'ESP';
        else if (desc.includes('italian')) detectedFed = 'ITA';
        else if (desc.includes('british') || desc.includes('english')) detectedFed = 'ENG';
        else if (desc.includes('ukrainian')) detectedFed = 'UKR';
        else if (desc.includes('azerbaijani')) detectedFed = 'AZE';
        else if (desc.includes('armenian')) detectedFed = 'ARM';
        else if (desc.includes('cuban')) detectedFed = 'CUB';
        else if (desc.includes('danish')) detectedFed = 'DEN';
        else if (desc.includes('latvian')) detectedFed = 'LAT';
        else if (desc.includes('estonian')) detectedFed = 'EST';
        else if (desc.includes('swiss')) detectedFed = 'SUI';
        else if (desc.includes('austrian')) detectedFed = 'AUT';
        else if (desc.includes('czech')) detectedFed = 'CZE';
        else if (desc.includes('serbian') || desc.includes('yugoslav')) detectedFed = 'SRB';
        else if (desc.includes('argentine')) detectedFed = 'ARG';
        else if (desc.includes('bulgarian')) detectedFed = 'BUL';
        else if (desc.includes('romanian')) detectedFed = 'ROU';
        else if (desc.includes('israeli')) detectedFed = 'ISR';
        else if (desc.includes('filipino')) detectedFed = 'PHI';
      }

      const result = { photo, fed: detectedFed };
      playerPhotoCache.set(normalized, result);
      return result;
    }
  } catch {}

  playerPhotoCache.set(normalized, { photo: null, fed: localMeta?.fed || '' });
  return { photo: null, fed: localMeta?.fed || '' };
}

/**
 * Gera as iniciais do jogador para o avatar fallback estilizado
 */
export function getPlayerInitials(playerName) {
  if (!playerName || typeof playerName !== 'string') return '?';
  const clean = playerName.replace(/^(GM|IM|FM|WGM|WIM|WFM|CM|WCM)\s+/i, '').replace(/[^a-zA-Z\s,]/g, '').trim();
  if (!clean) return '?';

  if (clean.includes(',')) {
    const parts = clean.split(',').map((p) => p.trim()).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[1][0]}${parts[0][0]}`.toUpperCase();
    }
    return parts[0][0].toUpperCase();
  }

  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}
