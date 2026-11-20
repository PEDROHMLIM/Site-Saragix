// ============================================================================
// TEMAS DE TABULEIRO DO SARAGIX (25 Modelos Clássicos/Editoriais + Personalizado)
// Inspirados na paleta de 25 tabuleiros (5x5) enviada pelo usuário
// ============================================================================

export const BOARD_THEMES = [
  // LINHA 1: Madeiras & Clássicos
  {
    id: 'classic_brown',
    name: 'Castanho Clássico',
    category: 'Madeira',
    light: '#f0d9b5',
    dark: '#b58863',
  },
  {
    id: 'wood_oak',
    name: 'Carvalho Natural',
    category: 'Madeira',
    light: '#e3c699',
    dark: '#8b5a2b',
    lightStyle: {
      backgroundColor: '#e3c699',
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(120,72,24,0.05) 0px, rgba(120,72,24,0.05) 2px, transparent 2px, transparent 7px)',
    },
    darkStyle: {
      backgroundColor: '#8b5a2b',
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(40,20,5,0.16) 0px, rgba(40,20,5,0.16) 3px, transparent 3px, transparent 9px)',
    },
  },
  {
    id: 'maple_cherry',
    name: 'Cerejeira',
    category: 'Madeira',
    light: '#f5dec3',
    dark: '#bc6c44',
  },
  {
    id: 'dark_walnut',
    name: 'Nogueira Escura',
    category: 'Madeira',
    light: '#edd6b6',
    dark: '#543222',
  },
  {
    id: 'warm_teak',
    name: 'Teca Suave',
    category: 'Madeira',
    light: '#e2c499',
    dark: '#8d613e',
  },

  // LINHA 2: Azuis & Verdes Suaves
  {
    id: 'endgame_slate',
    name: 'Slate Editorial (Padrão)',
    category: 'Frio',
    light: '#dee3e6',
    dark: '#788a9e',
  },
  {
    id: 'ice_ocean',
    name: 'Azul Gelo',
    category: 'Frio',
    light: '#d8e4ec',
    dark: '#5b82a6',
  },
  {
    id: 'nordic_blue',
    name: 'Azul Nórdico',
    category: 'Frio',
    light: '#a4b8d0',
    dark: '#516a86',
  },
  {
    id: 'sage_mint',
    name: 'Verde Sálvia',
    category: 'Verde',
    light: '#bad8c4',
    dark: '#557860',
  },
  {
    id: 'olive_club',
    name: 'Verde Oliva',
    category: 'Verde',
    light: '#bfd69b',
    dark: '#738948',
  },

  // LINHA 3: Pedra, Grafite & Floresta
  {
    id: 'warm_stone',
    name: 'Pedra Taupe',
    category: 'Neutro',
    light: '#c5bda8',
    dark: '#7d7461',
  },
  {
    id: 'matte_graphite',
    name: 'Grafite',
    category: 'Neutro',
    light: '#bdbdbd',
    dark: '#585858',
  },
  {
    id: 'cool_slate_grey',
    name: 'Ardósia Cinza',
    category: 'Neutro',
    light: '#c4c4c4',
    dark: '#676767',
  },
  {
    id: 'tournament_forest',
    name: 'Verde Torneio',
    category: 'Verde',
    light: '#ede0c4',
    dark: '#305338',
  },
  {
    id: 'deep_moss',
    name: 'Musgo Imperial',
    category: 'Verde',
    light: '#e6d5b8',
    dark: '#3b4d33',
  },

  // LINHA 4: Diagrama, Roxos & Rosé/Borgonha
  {
    id: 'diagram_hatched',
    name: 'Diagrama de Livro',
    category: 'Especial',
    light: '#dcdcdc',
    dark: '#a8a8a8',
    darkStyle: {
      backgroundColor: '#d0d0d0',
      backgroundImage:
        'repeating-linear-gradient(-45deg, #8c8c8c 0px, #8c8c8c 2.5px, #d4d4d4 2.5px, #d4d4d4 7px)',
    },
  },
  {
    id: 'saragix_amethyst',
    name: 'Ametista Saragix',
    category: 'Roxo',
    light: '#b098d6',
    dark: '#633682',
  },
  {
    id: 'royal_lavender',
    name: 'Lavanda',
    category: 'Roxo',
    light: '#dfd0f0',
    dark: '#7b4c9e',
  },
  {
    id: 'rosewood_pink',
    name: 'Rosé & Framboesa',
    category: 'Rubi',
    light: '#efb1b6',
    dark: '#9c4654',
  },
  {
    id: 'royal_burgundy',
    name: 'Borgonha Real',
    category: 'Rubi',
    light: '#f2b6c1',
    dark: '#6e1427',
  },

  // LINHA 5: Marinho, Petróleo, Turquesa, Âmbar & Terracota
  {
    id: 'navy_cream',
    name: 'Marinho & Creme',
    category: 'Contraste',
    light: '#f2e2c4',
    dark: '#364968',
  },
  {
    id: 'deep_teal',
    name: 'Azul Petróleo',
    category: 'Contraste',
    light: '#dfddd4',
    dark: '#2b5769',
  },
  {
    id: 'aqua_turquoise',
    name: 'Água-Marinha',
    category: 'Contraste',
    light: '#bce6dc',
    dark: '#3d8482',
  },
  {
    id: 'amber_mustard',
    name: 'Ouro Velho',
    category: 'Quente',
    light: '#f2dfb9',
    dark: '#bc9344',
  },
  {
    id: 'autumn_terracotta',
    name: 'Terracota',
    category: 'Quente',
    light: '#f5dec3',
    dark: '#b8502b',
  },
];

const STORAGE_THEME_KEY = 'saragix_board_theme_v1';

export function loadSavedBoardTheme() {
  try {
    const raw = localStorage.getItem(STORAGE_THEME_KEY);
    if (!raw) {
      return {
        themeId: 'endgame_slate',
        customLight: '#dee3e6',
        customDark: '#788a9e',
      };
    }
    const parsed = JSON.parse(raw);
    return {
      themeId: parsed.themeId || 'endgame_slate',
      customLight: parsed.customLight || '#dee3e6',
      customDark: parsed.customDark || '#788a9e',
    };
  } catch {
    return {
      themeId: 'endgame_slate',
      customLight: '#dee3e6',
      customDark: '#788a9e',
    };
  }
}

export function saveBoardThemeConfig(config) {
  try {
    localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(config));
  } catch {
    // ignore storage errors
  }
}

export function resolveBoardSquareStyles(config) {
  if (config?.themeId === 'custom') {
    const light = config.customLight || '#dee3e6';
    const dark = config.customDark || '#788a9e';
    return {
      id: 'custom',
      name: 'Personalizado',
      light,
      dark,
      lightSquareStyle: { backgroundColor: light },
      darkSquareStyle: { backgroundColor: dark },
    };
  }

  const found =
    BOARD_THEMES.find((t) => t.id === config?.themeId) ||
    BOARD_THEMES.find((t) => t.id === 'endgame_slate') ||
    BOARD_THEMES[0];

  return {
    ...found,
    lightSquareStyle: found.lightStyle || { backgroundColor: found.light },
    darkSquareStyle: found.darkStyle || { backgroundColor: found.dark },
  };
}
