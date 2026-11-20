// Símbolos de análise manual (anotações clássicas de xadrez e oficiais do Chess.com)
export const MOVE_ANNOTATIONS = [
  { id: 'GREAT', symbol: '!', label: 'Grande Lance', desc: 'Lance crítico ou virada na posição.', color: '#749bbf' },
  { id: 'BRILLIANT', symbol: '!!', label: 'Lance Brilhante', desc: 'Sacrifício de peça espetacular e vencedor.', color: '#26c2a3' },
  { id: 'MISTAKE', symbol: '?', label: 'Erro', desc: 'Lance ruim que piora visivelmente a posição.', color: '#ffa459', isMistake: true },
  { id: 'BLUNDER', symbol: '??', label: 'Capivara', desc: 'Falha crítica que perde material ou a partida.', color: '#fa412d' },
  { id: 'MISS', symbol: '✕', label: 'Vitória Perdida', desc: 'Deixou escapar uma oportunidade tática ou mate.', color: '#ff7769', isMiss: true },
  { id: 'INTERESTING', symbol: '!?', label: 'Lance Interessante', desc: 'Criativo ou arriscado, vale a pena considerar.', color: '#8e4fc4' },
  { id: 'INACCURACY', symbol: '?!', label: 'Imprecisão', desc: 'Lance ligeiramente fraco que piora suavemente a posição.', color: '#f0c15c' },
];

// Símbolo especial para lances de livro (teoria de abertura)
export const BOOK_ANNOTATION = {
  id: 'BOOK',
  symbol: 'book',
  label: 'Lance de Livro',
  desc: 'Um lance teórico padrão da teoria de aberturas.',
  color: '#a88865',
  isBook: true,
};

// Símbolo especial para Novidade Teórica ('N')
export const NOVELTY_ANNOTATION = {
  id: 'NOVELTY',
  symbol: 'N',
  label: 'Novidade Teórica',
  desc: 'Primeiro lance fora da base de mestres em linha teórica.',
  color: '#9333ea',
  isNovelty: true,
};

// Símbolo de Oportunidade Perdida / Miss
export const MISS_ANNOTATION = {
  id: 'MISS',
  symbol: '✕',
  label: 'Vitória Perdida',
  desc: 'Deixou escapar uma oportunidade tática ou não puniu o erro do adversário.',
  color: '#ff7769',
  isMiss: true,
};

// Símbolos para lances positivos da Engine (Cores oficiais do Chess.com)
export const ENGINE_POSITIVE_ANNOTATIONS = {
  BEST: {
    id: 'BEST',
    symbol: '★',
    label: 'Melhor Lance',
    desc: 'A melhor escolha recomendada pelo motor Stockfish.',
    color: '#81b64c', // Verde musgo clássico Chess.com
    isBest: true,
  },
  EXCELLENT: {
    id: 'EXCELLENT',
    symbol: '✓',
    label: 'Excelente',
    desc: 'Quase tão forte quanto o melhor lance.',
    color: '#81b64c', // Verde Chess.com
    isCheck: true,
  },
  GOOD: {
    id: 'GOOD',
    symbol: '✓',
    label: 'Bom',
    desc: 'Um lance decente e jogável, embora não seja o ideal.',
    color: '#95af8a', // Verde oliva suave
    isGood: true,
  },
  BRILLIANT: {
    id: 'BRILLIANT',
    symbol: '!!',
    label: 'Lance Brilhante',
    desc: 'Um sacrifício de peça intuitivo e poderoso que mantém ou amplia a vantagem.',
    color: '#26c2a3', // Ciano Chess.com
  },
  GREAT: {
    id: 'GREAT',
    symbol: '!',
    label: 'Grande Lance',
    desc: 'O único lance bom da posição crítica ou que altera o rumo do jogo.',
    color: '#749bbf', // Azul ardósia Chess.com
  },
};

export function getAnnotation(symbol) {
  if (symbol === 'book' || symbol === '📖') return BOOK_ANNOTATION;
  if (symbol === 'N' || symbol === 'n' || symbol === 'nov') return NOVELTY_ANNOTATION;
  if (symbol === '❌' || symbol === '✕') return MISS_ANNOTATION;
  if (symbol === '★') return ENGINE_POSITIVE_ANNOTATIONS.BEST;
  if (symbol === '✓') return ENGINE_POSITIVE_ANNOTATIONS.EXCELLENT;
  if (symbol === '👍') return ENGINE_POSITIVE_ANNOTATIONS.GOOD;
  if (symbol === '!!') return ENGINE_POSITIVE_ANNOTATIONS.BRILLIANT;
  if (symbol === '!') return ENGINE_POSITIVE_ANNOTATIONS.GREAT;
  return MOVE_ANNOTATIONS.find((a) => a.symbol === symbol) || null;
}

// Converte uma classificação do motor no símbolo a exibir
export function annotationFromClassification(classification) {
  if (!classification) return null;
  if (classification.id === 'BOOK') return BOOK_ANNOTATION;
  if (classification.id === 'NOVELTY') return NOVELTY_ANNOTATION;
  if (classification.id === 'MISS') return MISS_ANNOTATION;
  if (classification.id === 'BEST') return ENGINE_POSITIVE_ANNOTATIONS.BEST;
  if (classification.id === 'EXCELLENT') return ENGINE_POSITIVE_ANNOTATIONS.EXCELLENT;
  if (classification.id === 'GOOD') return ENGINE_POSITIVE_ANNOTATIONS.GOOD;
  if (classification.id === 'BRILLIANT') return ENGINE_POSITIVE_ANNOTATIONS.BRILLIANT;
  if (classification.id === 'GREAT') return ENGINE_POSITIVE_ANNOTATIONS.GREAT;
  if (classification.id === 'INACCURACY') return getAnnotation('?!');
  if (classification.id === 'MISTAKE') return getAnnotation('?');
  if (classification.id === 'BLUNDER') return getAnnotation('??');

  return classification.symbol ? getAnnotation(classification.symbol) : null;
}

// Manual (nag) tem prioridade; depois classificação ao vivo; depois a salva no lance.
export function resolveNodeAnnotation(node, liveClassification = null) {
  if (!node) return null;
  if (node.nag) return getAnnotation(node.nag);
  if (node.classification?.id === 'BOOK') return BOOK_ANNOTATION;
  if (node.classification?.id === 'NOVELTY') return NOVELTY_ANNOTATION;
  return annotationFromClassification(liveClassification) || annotationFromClassification(node.classification);
}
