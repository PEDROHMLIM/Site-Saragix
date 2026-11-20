/**
 * Sistema de Roteamento por Hash (Deep Linking) para o Saragix
 * Permite que cada aba, torneio, rodada e mesa possua um link único compartilhável.
 */

export function parseRoute() {
  if (typeof window === 'undefined') return { page: null };

  const hash = window.location.hash.replace(/^#\/?/, '');
  const segments = hash.split('/').filter(Boolean);
  const root = segments[0] || '';

  if (root === '' || root === 'inicio' || root === 'home') {
    return { page: 'home' };
  }
  if (root === 'analise' || root === 'analysis') {
    return { page: 'analysis' };
  }
  if (root === 'editor' || root === 'board_editor') {
    return { page: 'board_editor' };
  }
  if (root === 'vspc' || root === 'play' || root === 'play_bot') {
    return { page: 'play_bot' };
  }
  if (root === 'sobre' || root === 'about') {
    return { page: 'about', subTab: segments[1] || null };
  }
  if (root === 'transmissoes' || root === 'broadcasts') {
    const tourId = segments[1] || null;
    let roundId = null;
    let boardNumber = null;

    if (segments[2] && segments[2] !== 'mesa') {
      roundId = segments[2];
    }

    const mesaIndex = segments.indexOf('mesa');
    if (mesaIndex !== -1 && segments[mesaIndex + 1]) {
      boardNumber = segments[mesaIndex + 1];
    }

    return {
      page: 'broadcasts',
      tourId,
      roundId,
      boardNumber,
    };
  }
  if (root === 'visao-geral' || root === 'overview') {
    return { page: 'overview' };
  }
  if (root === 'carreira' || root === 'career') {
    return { page: 'career' };
  }
  if (root === 'partidas' || root === 'games') {
    return { page: 'games' };
  }
  if (root === 'repertorio' || root === 'repertoire') {
    return { page: 'repertoire' };
  }
  if (root === 'treinamento' || root === 'training') {
    return { page: 'training' };
  }
  if (root === 'eventos' || root === 'events') {
    return { page: 'events' };
  }

  return { page: null };
}

export function updateRoute(routeObj, replace = false) {
  if (typeof window === 'undefined') return;

  const { page, tourId, roundId, boardNumber } = routeObj;
  let hash = '';

  if (page === 'home') {
    hash = '#/';
  } else if (page === 'analysis') {
    hash = '#/analise';
  } else if (page === 'board_editor') {
    hash = '#/editor';
  } else if (page === 'play_bot') {
    hash = '#/vspc';
  } else if (page === 'about') {
    hash = routeObj.subTab ? `#/sobre/${routeObj.subTab}` : '#/sobre';
  } else if (page === 'broadcasts') {
    if (tourId && roundId && boardNumber) {
      hash = `#/transmissoes/${tourId}/${roundId}/mesa/${boardNumber}`;
    } else if (tourId && roundId) {
      hash = `#/transmissoes/${tourId}/${roundId}`;
    } else if (tourId) {
      hash = `#/transmissoes/${tourId}`;
    } else {
      hash = '#/transmissoes';
    }
  } else if (page === 'overview') {
    hash = '#/visao-geral';
  } else if (page === 'career') {
    hash = '#/carreira';
  } else if (page === 'games') {
    hash = '#/partidas';
  } else if (page === 'repertoire') {
    hash = '#/repertorio';
  } else if (page === 'training') {
    hash = '#/treinamento';
  } else if (page === 'events') {
    hash = '#/eventos';
  }

  if (hash && window.location.hash !== hash) {
    if (replace) {
      window.history.replaceState(null, '', hash);
    } else {
      window.history.pushState(null, '', hash);
    }
  }
}

/**
 * Utilitário para copiar texto para a área de transferência com suporte cross-browser
 */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    }
  } catch (err) {
    console.warn('Erro ao copiar link:', err);
    return false;
  }
}
