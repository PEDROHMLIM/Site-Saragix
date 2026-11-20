import { Chess } from 'chess.js';
import { isBookMoveByFen } from './openings.js';
import { MOVE_CLASSIFICATIONS } from './chessAnalysis.js';

export const INITIAL_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

let idCounter = 1;
function nextNodeId() {
  return `node_${Date.now()}_${idCounter++}`;
}

/**
 * Cria uma árvore vazia (apenas o nó raiz na posição inicial)
 */
export function createEmptyTree(initialFen = INITIAL_FEN) {
  const rootId = 'root';
  return {
    rootId,
    nodes: {
      [rootId]: {
        id: rootId,
        parentId: null,
        ply: 0,
        moveNumber: 0,
        color: null,
        san: null,
        uci: null,
        from: null,
        to: null,
        fenBefore: null,
        fenAfter: initialFen,
        childrenIds: [],
        comment: '',
        evalWhiteCp: null,
        mateWhite: null,
        bestMoveUci: null,
        bestMoveSan: null,
        classification: null,
      },
    },
  };
}

export function cloneTree(tree) {
  return JSON.parse(JSON.stringify(tree));
}

/**
 * Adiciona um lance a partir do nó atual (currentNodeId).
 * - Se o lance já existir entre os filhos de currentNodeId, apenas retorna o ID desse filho existente.
 * - Se replaceChildren = true, apaga os filhos atuais e substitui pelo novo lance.
 * - Caso contrário, adiciona como novo filho (se já havia um filho principal, o novo vira uma variante!).
 */
export function addMoveToTree(tree, currentNodeId, moveInput, { replaceContinuation = false } = {}) {
  const nextTree = cloneTree(tree);
  const parentNode = nextTree.nodes[currentNodeId];
  if (!parentNode) return { tree, nodeId: currentNodeId, moveObj: null };

  const chess = new Chess(parentNode.fenAfter);
  const moveNumberBefore = chess.moveNumber();
  const pieceOnFrom = moveInput?.from ? chess.get(moveInput.from) : null;
  const isPawnPromo =
    pieceOnFrom?.type === 'p' &&
    ((pieceOnFrom.color === 'w' && moveInput?.to?.[1] === '8') ||
      (pieceOnFrom.color === 'b' && moveInput?.to?.[1] === '1'));

  const normalizedMoveInput =
    typeof moveInput === 'object' && moveInput !== null
      ? {
          from: moveInput.from,
          to: moveInput.to,
          promotion: isPawnPromo ? moveInput.promotion || 'q' : undefined,
        }
      : moveInput;

  let moveObj = null;
  try {
    moveObj = chess.move(normalizedMoveInput);
  } catch {
    return { tree, nodeId: currentNodeId, moveObj: null };
  }
  if (!moveObj) return { tree, nodeId: currentNodeId, moveObj: null };

  const uci = `${moveObj.from}${moveObj.to}${moveObj.promotion || ''}`;

  // Se pediu para substituir a continuação existente
  if (replaceContinuation && parentNode.childrenIds.length > 0) {
    parentNode.childrenIds.forEach((childId) => {
      removeSubtreeNodes(nextTree, childId);
    });
    parentNode.childrenIds = [];
  }

  // Verifica se já existe exatamente esse lance como filho
  const existingChildId = parentNode.childrenIds.find(
    (cid) => nextTree.nodes[cid]?.san === moveObj.san
  );
  if (existingChildId) {
    return { tree: nextTree, nodeId: existingChildId, moveObj };
  }

  const newPly = parentNode.ply + 1;
  const newMoveNumber = moveNumberBefore;
  const newId = nextNodeId();

  // Verifica pela POSIÇÃO se o lance pertence ao repertório teórico do Lichess
  // (funciona também a partir de posições montadas no Editor e com transposições)
  const isBook = isBookMoveByFen(parentNode.fenAfter, chess.fen());

  nextTree.nodes[newId] = {
    id: newId,
    parentId: currentNodeId,
    ply: newPly,
    moveNumber: newMoveNumber,
    color: moveObj.color,
    san: moveObj.san,
    uci,
    from: moveObj.from,
    to: moveObj.to,
    fenBefore: parentNode.fenAfter,
    fenAfter: chess.fen(),
    childrenIds: [],
    comment: '',
    evalWhiteCp: null,
    mateWhite: null,
    bestMoveUci: null,
    bestMoveSan: null,
    classification: isBook
      ? { ...MOVE_CLASSIFICATIONS.BOOK, cpLoss: 0, winLoss: 0 }
      : null,
  };

  parentNode.childrenIds.push(newId);
  return { tree: nextTree, nodeId: newId, moveObj };
}

function removeSubtreeNodes(tree, nodeId) {
  const node = tree.nodes[nodeId];
  if (!node) return;
  for (const childId of node.childrenIds) {
    removeSubtreeNodes(tree, childId);
  }
  delete tree.nodes[nodeId];
}

/**
 * Apaga um nó e toda a sua sub-árvore (variante/continuação), retornando para o nó pai.
 */
export function deleteNodeAndSubtree(tree, nodeId) {
  if (!nodeId || nodeId === tree.rootId) return { tree, nextActiveId: tree.rootId };
  const nextTree = cloneTree(tree);
  const target = nextTree.nodes[nodeId];
  if (!target) return { tree, nextActiveId: tree.rootId };

  const parentId = target.parentId;
  const parent = nextTree.nodes[parentId];
  if (parent) {
    parent.childrenIds = parent.childrenIds.filter((id) => id !== nodeId);
  }
  removeSubtreeNodes(nextTree, nodeId);
  return { tree: nextTree, nextActiveId: parentId || nextTree.rootId };
}

/**
 * Promove um nó (ou a variante em que ele está) para ser a linha principal (childrenIds[0]) de seu pai.
 */
export function promoteVariationToMainline(tree, nodeId) {
  if (!nodeId || nodeId === tree.rootId) return tree;
  const nextTree = cloneTree(tree);

  // Sobe até encontrar a bifurcação mais próxima onde este ramo não é o índice 0
  let curr = nextTree.nodes[nodeId];
  while (curr && curr.parentId) {
    const parent = nextTree.nodes[curr.parentId];
    if (!parent) break;
    const idx = parent.childrenIds.indexOf(curr.id);
    if (idx > 0) {
      parent.childrenIds.splice(idx, 1);
      parent.childrenIds.unshift(curr.id);
      break;
    }
    curr = parent;
  }

  return nextTree;
}

/**
 * Extrai a Linha Principal (Mainline) como um array plano de nós de lances (compatível com moves[] do Stockfish e Base)
 */
export function getMainlineNodes(tree) {
  if (!tree || !tree.nodes || !tree.rootId) return [];
  const list = [];
  let curr = tree.nodes[tree.rootId];
  while (curr && curr.childrenIds && curr.childrenIds.length > 0) {
    const mainChildId = curr.childrenIds[0];
    const child = tree.nodes[mainChildId];
    if (!child) break;
    list.push(child);
    curr = child;
  }
  return list;
}

/**
 * Extrai o caminho da raiz até um nó específico (útil para navegar dentro de uma variante)
 */
export function getPathToNode(tree, targetNodeId) {
  if (!tree || !tree.nodes || !targetNodeId) return [];
  const path = [];
  let curr = tree.nodes[targetNodeId];
  while (curr && curr.id !== tree.rootId) {
    path.unshift(curr);
    curr = tree.nodes[curr.parentId];
  }
  return path;
}

/**
 * Serializa a árvore completa (incluindo variantes entre parênteses) + cabeçalhos PGN para texto PGN padrão
 */
export function serializeTreeToPgn(tree, headers = {}, result = '*') {
  const headerLines = [];
  const defaultOrder = ['Event', 'Site', 'Date', 'Round', 'White', 'Black', 'Result', 'WhiteElo', 'BlackElo', 'WhiteTitle', 'BlackTitle', 'ECO', 'Opening', 'TimeControl'];

  defaultOrder.forEach((key) => {
    if (headers[key]) {
      headerLines.push(`[${key} "${headers[key]}"]`);
    }
  });

  // Se a árvore começou a partir de uma posição personalizada (SetUp / FEN)
  const rootFen = tree?.nodes?.[tree?.rootId]?.fenAfter;
  if (rootFen && rootFen !== INITIAL_FEN) {
    if (!headers.SetUp) headerLines.push(`[SetUp "1"]`);
    if (!headers.FEN) headerLines.push(`[FEN "${rootFen}"]`);
  }

  function formatSubtree(nodeId, forceMoveNumber = false) {
    const node = tree.nodes[nodeId];
    if (!node || !node.childrenIds || node.childrenIds.length === 0) return '';

    const mainId = node.childrenIds[0];
    const mainNode = tree.nodes[mainId];
    if (!mainNode) return '';

    const parts = [];
    const mainComment = mainNode.comment && mainNode.comment.trim()
      ? ` { ${mainNode.comment.replace(/[{}]/g, '').trim()} }`
      : '';
    if (mainNode.color === 'w') {
      parts.push(`${mainNode.moveNumber}. ${mainNode.san}${mainNode.nag || ''}${mainComment}`);
    } else if (forceMoveNumber) {
      parts.push(`${mainNode.moveNumber}... ${mainNode.san}${mainNode.nag || ''}${mainComment}`);
    } else {
      parts.push(mainNode.san + (mainNode.nag || '') + mainComment);
    }

    // Variantes irmãs (childrenIds[1..n])
    const variations = node.childrenIds.slice(1);
    for (const varId of variations) {
      const varNode = tree.nodes[varId];
      if (!varNode) continue;
      const varComment = varNode.comment && varNode.comment.trim()
        ? ` { ${varNode.comment.replace(/[{}]/g, '').trim()} }`
        : '';
      const varPrefix =
        varNode.color === 'w'
          ? `${varNode.moveNumber}. ${varNode.san}${varNode.nag || ''}${varComment}`
          : `${varNode.moveNumber}... ${varNode.san}${varNode.nag || ''}${varComment}`;
      const varCont = formatSubtree(varId, false);
      parts.push(`(${varPrefix}${varCont ? ' ' + varCont : ''})`);
    }

    const needNumNext = variations.length > 0 && mainNode.color === 'w';
    const mainCont = formatSubtree(mainId, needNumNext);
    if (mainCont) {
      parts.push(mainCont);
    }

    return parts.join(' ');
  }

  const movesText = formatSubtree(tree.rootId, true);
  const body = movesText ? `${movesText} ${result || '*'}` : result || '*';

  if (headerLines.length > 0) {
    return `${headerLines.join('\n')}\n\n${body}`;
  }
  return body;
}

/**
 * Faz o parse de um texto PGN completo (inclusive com variantes aninhadas entre parênteses) para a Árvore de Lances!
 */
export function parsePgnToTree(rawPgn) {
  const headers = {};
  if (!rawPgn || !rawPgn.trim()) {
    return { tree: createEmptyTree(), headers, lastMainlineNodeId: 'root' };
  }

  // Extrai cabeçalhos [Key "Value"]
  const headerRegex = /^\s*\[([A-Za-z0-9_]+)\s+"([^"]*)"\]\s*$/gm;
  let match;
  while ((match = headerRegex.exec(rawPgn)) !== null) {
    headers[match[1]] = match[2];
  }

  // Remove cabeçalhos e comentários de linha (;), mantendo blocos { ... } para extrair [%clk ...]
  let body = rawPgn
    .replace(/^\s*\[[^\]]*\]\s*$/gm, '')
    .replace(/;[^\n]*/g, ' ')
    .trim();

  // Tokeniza comentários { ... }, parênteses e lances
  const tokenRegex = /(\{[^}]*\}|\(|\)|\d+\.+|[O0]-[O0](?:-[O0])?[+#]?|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](?:=[QRBN])?[+#]?|[?!]+|1-0|0-1|1\/2-1\/2|\*)/g;
  const tokens = body.match(tokenRegex) || [];

  let tree = createEmptyTree(headers.FEN || INITIAL_FEN);
  let currentNodeId = tree.rootId;
  let lastAddedNodeId = tree.rootId;
  const branchStack = [];

  for (const tok of tokens) {
    if (tok.startsWith('{')) {
      const clkMatch = tok.match(/\[%clk\s+([0-9:.]+)\]/i);
      if (clkMatch && currentNodeId && currentNodeId !== tree.rootId && tree.nodes[currentNodeId]) {
        const rawClk = clkMatch[1].trim().replace(/\.\d+$/, '');
        const parts = rawClk.split(':').map((n) => parseInt(n, 10) || 0);
        let formattedClk = rawClk;
        if (parts.length === 3) {
          const [h, m, s] = parts;
          formattedClk =
            h > 0
              ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
              : `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        }
        tree.nodes[currentNodeId] = {
          ...tree.nodes[currentNodeId],
          clk: formattedClk,
        };
      }
      const cleanComment = tok
        .slice(1, -1)
        .replace(/\[%[a-zA-Z]+\s+[^\]]*\]/g, '')
        .trim();
      if (cleanComment && currentNodeId && currentNodeId !== tree.rootId && tree.nodes[currentNodeId]) {
        const prevCmt = tree.nodes[currentNodeId].comment || '';
        tree.nodes[currentNodeId] = {
          ...tree.nodes[currentNodeId],
          comment: prevCmt ? `${prevCmt} ${cleanComment}` : cleanComment,
        };
      }
      continue;
    } else if (tok === '(') {
      // Inicia variante a partir do pai do último lance jogado
      const currNode = tree.nodes[currentNodeId];
      branchStack.push(currentNodeId);
      if (currNode && currNode.parentId) {
        currentNodeId = currNode.parentId;
      }
    } else if (tok === ')') {
      if (branchStack.length > 0) {
        currentNodeId = branchStack.pop();
      }
    } else if (
      /^\d+\.+$/.test(tok) ||
      /^[?!]+$/.test(tok) ||
      tok === '1-0' ||
      tok === '0-1' ||
      tok === '1/2-1/2' ||
      tok === '*'
    ) {
      continue;
    } else {
      // É um lance SAN
      const res = addMoveToTree(tree, currentNodeId, tok);
      if (res.moveObj) {
        tree = res.tree;
        currentNodeId = res.nodeId;
        if (branchStack.length === 0) {
          lastAddedNodeId = currentNodeId;
        }
      }
    }
  }

  // Caso o parser customizado não tenha encontrado lances mas o chess.js consiga ler
  if (Object.keys(tree.nodes).length === 1 && rawPgn.trim()) {
    const fallbackChess = new Chess();
    fallbackChess.loadPgn(rawPgn.trim());
    const hist = fallbackChess.history();
    let currId = tree.rootId;
    hist.forEach((san) => {
      const r = addMoveToTree(tree, currId, san);
      tree = r.tree;
      currId = r.nodeId;
    });
    lastAddedNodeId = currId;
  }

  return { tree, headers, lastMainlineNodeId: lastAddedNodeId };
}

/**
 * Converte um array linear de lances (de partidas antigas salvas na base) em uma árvore
 */
export function buildTreeFromSavedMoves(movesArray) {
  let tree = createEmptyTree();
  let currId = tree.rootId;

  (movesArray || []).forEach((m) => {
    const res = addMoveToTree(tree, currId, m.san);
    tree = res.tree;
    currId = res.nodeId;
    if (tree.nodes[currId]) {
      tree.nodes[currId] = {
        ...tree.nodes[currId],
        evalWhiteCp: m.evalWhiteCp ?? null,
        mateWhite: m.mateWhite ?? null,
        bestMoveUci: m.bestMoveUci ?? null,
        bestMoveSan: m.bestMoveSan ?? null,
        classification: m.classification ?? null,
      };
    }
  });

  return tree;
}
