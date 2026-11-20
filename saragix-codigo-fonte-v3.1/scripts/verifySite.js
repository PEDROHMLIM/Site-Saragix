import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('=== TESTE AUTOMATIZADO DAS FUNCIONALIDADES E VERIFICAÇÃO DE BUGS ===\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${testName} - ${details}`);
    failCount++;
  }
}

// -------------------------------------------------------------
// 1. TESTE DE DICIONÁRIOS I18N (pt, en, es)
// -------------------------------------------------------------
console.log('--- 1. Verificando Sincronização e Chaves de Idiomas (i18n) ---');
const pt = (await import('../src/i18n/pt.js')).default;
const en = (await import('../src/i18n/en.js')).default;
const es = (await import('../src/i18n/es.js')).default;

function getAllLeafKeys(obj, prefix = '') {
  let keys = [];
  for (const k of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      keys = keys.concat(getAllLeafKeys(obj[k], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const ptKeys = new Set(getAllLeafKeys(pt));
const enKeys = new Set(getAllLeafKeys(en));
const esKeys = new Set(getAllLeafKeys(es));

const missingInEn = [...ptKeys].filter((k) => !enKeys.has(k));
const missingInEs = [...ptKeys].filter((k) => !esKeys.has(k));
const extraInEn = [...enKeys].filter((k) => !ptKeys.has(k));
const extraInEs = [...esKeys].filter((k) => !ptKeys.has(k));

assert(missingInEn.length === 0, 'Todos as chaves de PT existem em EN', `Faltando em EN: ${missingInEn.join(', ')}`);
assert(missingInEs.length === 0, 'Todos as chaves de PT existem em ES', `Faltando em ES: ${missingInEs.join(', ')}`);
assert(extraInEn.length === 0, 'Nenhuma chave órfã em EN', `Extras em EN: ${extraInEn.join(', ')}`);
assert(extraInEs.length === 0, 'Nenhuma chave órfã em ES', `Extras em ES: ${extraInEs.join(', ')}`);

function getValByPath(obj, keyPath) {
  return keyPath.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

function walkSrc(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) results = results.concat(walkSrc(full));
    else if (f.endsWith('.js') || f.endsWith('.jsx')) results.push(full);
  }
  return results;
}

const srcFiles = walkSrc(path.join(rootDir, 'src'));
const missingCalls = [];
for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /\bt\(\s*['"]([a-zA-Z0-9_.]+)['"]/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const key = m[1];
    if (getValByPath(pt, key) === undefined) {
      missingCalls.push(`${path.basename(file)}:${key}`);
    }
  }
}
assert(missingCalls.length === 0, 'Todas as chamadas t("...") nos componentes existem nos dicionários', `Faltando: ${missingCalls.join(', ')}`);

// -------------------------------------------------------------
// 2. TESTE DE MOVE TREE, ANOTAÇÕES E CLASSIFICAÇÃO
// -------------------------------------------------------------
console.log('\n--- 2. Verificando MoveTree e Anotações ---');
const { INITIAL_FEN, parsePgnToTree, getMainlineNodes, serializeTreeToPgn } = await import('../src/utils/moveTree.js');
const { MOVE_ANNOTATIONS, resolveNodeAnnotation } = await import('../src/utils/moveAnnotations.js');

const pgnSample = '1. e4 {[%clk 1:30:45] Abertura clássica} e5 {[%clk 1:29:10]} 2. Nf3 {[%clk 0:05:06]} Nc6 {[%clk 0:04:59]} 3. Bb5 a6 4. Ba4 Nf6';
const { tree } = parsePgnToTree(pgnSample);
assert(tree && tree.rootId, 'Árvore de lances inicializada com sucesso a partir de PGN');
const mainlines = getMainlineNodes(tree);
assert(mainlines.length === 8, `Mainline tem 8 semilances esperados (obtido: ${mainlines.length})`);
assert(mainlines[0].san === 'e4', 'Primeiro lance da mainline é 1. e4');
assert(mainlines[0].clk === '1:30:45' && mainlines[2].clk === '05:06', `Extração de relógio [%clk] do PGN de transmissão funciona: ${mainlines[0].clk}, ${mainlines[2].clk}`);
assert(mainlines[0].comment === 'Abertura clássica' && serializeTreeToPgn(tree).includes('{ Abertura clássica }'), 'Extração e serialização de comentários na árvore PGN funcionam');

assert(Array.isArray(getMainlineNodes(null)), 'getMainlineNodes com entrada nula é seguro e retorna array vazio');

const annot = resolveNodeAnnotation(mainlines[0]);
assert(typeof annot === 'object', 'Resolução de anotações funciona corretamente');

const noveltyAnnot = resolveNodeAnnotation({ classification: { id: 'NOVELTY', symbol: 'N' } });
assert(noveltyAnnot && noveltyAnnot.symbol === 'N' && noveltyAnnot.id === 'NOVELTY', 'Resolução de anotação de Novidade Teórica (N) confirmada');

// -------------------------------------------------------------
// 3. TESTE DE URL ROUTER (DEEP LINKING)
// -------------------------------------------------------------
console.log('\n--- 3. Verificando URL Router e Rotas Suportadas ---');
const { parseRoute, updateRoute } = await import('../src/utils/urlRouter.js');

// Mock window.location para testar parseRoute
global.window = {
  location: { hash: '#/transmissoes/floripa-2024/round-3/mesa/7' }
};

const route1 = parseRoute();
assert(route1.page === 'broadcasts', 'Rota de transmissão identificada');
assert(route1.tourId === 'floripa-2024', 'ID do torneio extraído corretamente');
assert(route1.roundId === 'round-3', 'ID da rodada extraído corretamente');
assert(route1.boardNumber === '7', 'Número da mesa extraído corretamente');

global.window.location.hash = '#/editor';
const route2 = parseRoute();
assert(route2.page === 'board_editor', 'Rota de editor de tabuleiro identificada');

global.window.location.hash = '#/vspc';
const route3 = parseRoute();
assert(route3.page === 'play_bot', 'Rota de jogar vs bot identificada');

global.window.location.hash = '#/analise';
const route4 = parseRoute();
assert(route4.page === 'analysis', 'Rota de análise identificada');

// -------------------------------------------------------------
// 4. TESTE DE FORMATAÇÃO PV (STOCKFISH ENGINE)
// -------------------------------------------------------------
console.log('\n--- 4. Verificando Formatação de Linhas do Motor (PV) ---');
const { formatPvLineWithGlyphs } = await import('../src/utils/pvFormatter.js');

const pvFen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';
const pvMoves = ['e7e5', 'g1f3', 'b8c6'];
const formattedPv = formatPvLineWithGlyphs(pvFen, pvMoves, 3);
assert(typeof formattedPv === 'string' && formattedPv.includes('e5'), 'Formatação de lances com glifos (PV) produz lances SAN');

// -------------------------------------------------------------
// 5. TESTE DE TEMAS DE TABULEIRO E CONJUNTOS DE PEÇAS
// -------------------------------------------------------------
console.log('\n--- 5. Verificando Temas de Tabuleiro e Peças ---');
const { BOARD_THEMES } = await import('../src/utils/boardThemes.js');
const { INLINE_PIECE_SETS } = await import('../src/utils/pieceSetsData.js');

assert(Array.isArray(BOARD_THEMES) && BOARD_THEMES.length >= 20, `Temas de tabuleiro: ${BOARD_THEMES.length} encontrados (esperado >= 20)`);
const cburnett = INLINE_PIECE_SETS['cburnett'];
assert(cburnett && cburnett['wK'] && cburnett['bK'], 'Conjunto padrão cburnett possui SVGs válidos de peças');

// -------------------------------------------------------------
// 6. TESTE DE DETECÇÃO DE ABERTURAS
// -------------------------------------------------------------
console.log('\n--- 6. Verificando Detecção de Aberturas e Teoria Híbrida ---');
const { detectOpening, isBookMoveByFen } = await import('../src/utils/openings.js');
const { classifyMove, MOVE_CLASSIFICATIONS } = await import('../src/utils/chessAnalysis.js');
const { Chess } = await import('chess.js');

const ruyLopezNodes = [
  { san: 'e4' }, { san: 'e5' }, { san: 'Nf3' }, { san: 'Nc6' }, { san: 'Bb5' }
];
const detected = detectOpening(ruyLopezNodes);
assert(detected && (detected.name.toLowerCase().includes('ruy') || detected.eco === 'C60'), `Ruy Lopez detectada corretamente: ${detected?.name} (${detected?.eco})`);

// Teste de Teoria Profunda (Sicilian Najdorf 6.Bg5 até o lance 10)
const najdorfGame = new Chess();
const najdorfMoves = ['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','a6','Bg5','e6','f4','Be7','Qf3','Qc7','O-O-O','Nbd7','g4','b5'];
let najdorfAllBook = true;
for (const m of najdorfMoves) {
  const b4 = najdorfGame.fen();
  najdorfGame.move(m);
  if (!isBookMoveByFen(b4, najdorfGame.fen())) {
    najdorfAllBook = false;
    break;
  }
}
assert(najdorfAllBook, 'Reconhecimento de teoria profunda (Najdorf 6.Bg5 com 10 lances completos)');

// Teste de Novidade Teórica ('N')
assert(MOVE_CLASSIFICATIONS.NOVELTY && MOVE_CLASSIFICATIONS.NOVELTY.symbol === 'N', 'Classificação NOVELTY definida com símbolo N');
const noveltyResult = classifyMove({
  prevEvalWhiteCp: 20,
  currEvalWhiteCp: 15,
  bestMoveUci: 'e7e5',
  playedMoveUci: 'c7c5',
  turnColor: 'b',
  moveNumber: 9,
  isBookMove: false,
  isNovelty: true,
  inBookStreak: true
});
assert(noveltyResult && noveltyResult.id === 'NOVELTY', 'Lance inédito em streak teórico classificado como Novidade Teórica (N)');

const { normalizeExplorerUci, findMoveInExplorerData } = await import('../src/utils/lichessExplorer.js');
assert(normalizeExplorerUci('e1h1', 'O-O') === 'e1g1' && normalizeExplorerUci('e8h8', 'O-O') === 'e8g8', 'Normalização de roque UCI da Base de Mestres Lichess (e1h1 -> e1g1) funciona');
const mockMastersData = {
  mode: 'masters',
  isFallback: false,
  totalGames: 120,
  moves: [
    { uci: 'e1h1', san: 'O-O', total: 38 },
    { uci: 'd2d4', san: 'd4', total: 25 },
  ],
};
const matchedMasterMove = findMoveInExplorerData(mockMastersData, 'e1g1', 'O-O');
assert(matchedMasterMove && matchedMasterMove.total === 38, 'Lance no topo da Base de Mestres com 38 partidas é reconhecido como Teoria de Mestres e nunca como Novidade');

const secondBestResult = classifyMove({
  prevEvalWhiteCp: 30,
  currEvalWhiteCp: 15,
  bestMoveUci: 'g1f3',
  playedMoveUci: 'b1c3',
  turnColor: 'w',
  moveNumber: 12,
  isBookMove: false,
});
assert(secondBestResult && secondBestResult.id === 'EXCELLENT', '2ª opção da engine com pequena perda (15 cp) é classificada como Excelente e não como Melhor Lance');

const thirdChoiceGoodResult = classifyMove({
  prevEvalWhiteCp: 45,
  currEvalWhiteCp: 5,
  bestMoveUci: 'g1f3',
  playedMoveUci: 'd2d3',
  turnColor: 'w',
  moveNumber: 12,
  isBookMove: false,
});
assert(thirdChoiceGoodResult && thirdChoiceGoodResult.id === 'GOOD', '3ª opção da engine com perda moderada (40 cp) é classificada como Lance Bom');


// -------------------------------------------------------------
// 7. TESTE DE BANCO DE DADOS DE JOGOS (Daily Games)
// -------------------------------------------------------------
console.log('\n--- 7. Verificando Partidas Diárias (Daily Games) ---');
const { DAILY_GAMES, getDailyGame } = await import('../src/data/dailyGames.js');

assert(Array.isArray(DAILY_GAMES) && DAILY_GAMES.length > 0, `Base diária com ${DAILY_GAMES.length} partidas históricas`);
const todayGame = getDailyGame();
assert(todayGame && todayGame.white && todayGame.black && todayGame.pgn, `Partida de hoje carregada com sucesso: ${todayGame?.white?.name} vs ${todayGame?.black?.name}`);

// -------------------------------------------------------------
// 8. TESTE DE METADADOS, FOTOS E BANDEIRAS DOS JOGADORES
// -------------------------------------------------------------
console.log('\n--- 8. Verificando Fotos e Bandeiras de Jogadores (Modernos e Históricos) ---');
const { getPlayerMeta, getIsoCountryCode } = await import('../src/utils/playerAvatars.js');

const fischerMeta = getPlayerMeta('Fischer, Robert J.');
assert(Boolean(fischerMeta.photo) && fischerMeta.fed === 'USA', 'Bobby Fischer possui foto e federação USA');

const talMeta = getPlayerMeta('Tal M');
assert(Boolean(talMeta.photo) && talMeta.fed === 'LAT' && getIsoCountryCode(talMeta.fed) === 'lv', 'Mikhail Tal ("Tal M") resolve foto e bandeira da Letônia (lv)');

const morphyMeta = getPlayerMeta('Morphy, P', null, 'WLD');
assert(Boolean(morphyMeta.photo) && morphyMeta.fed === 'USA', 'Paul Morphy ("Morphy, P") ignora código genérico WLD e usa USA');

const meckingMeta = getPlayerMeta('Mecking H');
assert(meckingMeta.fed === 'BRA' && meckingMeta.wikiSlug === 'Henrique_Mecking', 'Henrique Mecking ("Mecking H") resolve federação BRA e slug da Wikipedia');

// -------------------------------------------------------------
// 9. TESTE DAS 3 NOVAS FUNCIONALIDADES (Syzygy, Repetição e Relógio)
// -------------------------------------------------------------
console.log('\n--- 9. Verificando Syzygy Tablebase, Repetições e Análise de Relógio ---');

// Syzygy Tablebase
const { countFenPieces } = await import('../src/utils/tablebaseService.js');
assert(countFenPieces('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') === 32, 'Posição inicial tem 32 peças (fora do alcance de tabela Syzygy)');
assert(countFenPieces('8/8/8/4k3/8/8/4K3/4Q3 w - - 0 1') === 3, 'Posição de final K+Q vs K tem 3 peças (coberta pela Syzygy 7 peças)');

// Deteccao de Repeticao 2x/3x e Regra dos 50 lances
const { detectRepetitionAnd50Move } = await import('../src/utils/repetitionDetector.js');
const testPath = [
  { fenAfter: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1' },
  { fenAfter: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2' },
  { fenAfter: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1' },
];
const repResult = detectRepetitionAnd50Move(testPath, 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1');
assert(repResult.isTwoFold && repResult.repetitionCount === 2, 'Detecção de repetição 2x identificada corretamente');

const fiftyMoveDraw = detectRepetitionAnd50Move([], '8/8/8/4k3/8/8/4K3/4Q3 w - - 100 80');
assert(fiftyMoveDraw.isFiftyMoveDraw, 'Regra dos 50 lances (100 meios-lances) acionada como empate');

// Analise de Uso de Relogio
const { parseClockToSeconds, buildClockAnalytics } = await import('../src/utils/clockAnalytics.js');
assert(parseClockToSeconds('1:30:45') === 5445, 'Conversão de relógio 1:30:45 para 5445 segundos');
assert(parseClockToSeconds('05:06') === 306, 'Conversão de relógio 05:06 para 306 segundos');

const clockTestNodes = [
  { id: '1', ply: 1, moveNumber: 1, color: 'w', san: 'e4', clk: '1:30:00' },
  { id: '2', ply: 2, moveNumber: 1, color: 'b', san: 'e5', clk: '1:29:45' },
  { id: '3', ply: 3, moveNumber: 2, color: 'w', san: 'Nf3', clk: '1:29:30' },
  { id: '4', ply: 4, moveNumber: 2, color: 'b', san: 'Nc6', clk: '1:29:10' },
];
const clockAnalytics = buildClockAnalytics(clockTestNodes);
assert(clockAnalytics.hasClockData && clockAnalytics.points.length === 4, 'Série temporal de relógio gerada com sucesso para 4 lances');
assert(clockAnalytics.points[2].timeSpent === 30, 'Cálculo de delta de tempo gasto pelas Brancas correto (30 segundos)');


// -------------------------------------------------------------
// 10. TESTE DA BIBLIOTECA DE MESTRES E LIVRO EXPANDIDO
// -------------------------------------------------------------
console.log('\n--- 10. Verificando Biblioteca de Mestres e Livro Teórico Expandido ---');

const { getAllMasterGames, searchMasterGames } = await import('../src/data/masterLibrary.js');
const masterGames = getAllMasterGames();
assert(masterGames.length >= 370, `Biblioteca de Mestres possui ${masterGames.length} partidas (esperado >= 370)`);

const supiSearch = searchMasterGames({ query: 'Supi' });
assert(supiSearch.length >= 1 && supiSearch[0].white?.name.includes('Supi'), 'Partida imortal de Luis Paulo Supi vs Carlsen encontrada na busca');

const gukeshSearch = searchMasterGames({ query: 'Gukesh' });
assert(gukeshSearch.length >= 1, 'Partida do Campeonato Mundial de 2024 de Gukesh encontrada na biblioteca');

const brazilCategory = searchMasterGames({ category: 'brazil' });
assert(brazilCategory.length >= 10, `Categoria Mestres do Brasil possui ${brazilCategory.length} partidas catalogadas`);

const { OPENINGS: bookOpenings } = await import('../src/utils/openingBookData.js');
assert(bookOpenings.length >= 3900, `Livro de Aberturas possui ${bookOpenings.length} aberturas catalogadas (esperado >= 3900)`);


// -------------------------------------------------------------
// RESULTADO FINAL
// -------------------------------------------------------------
console.log('\n=============================================================');
console.log(`TOTAL DE TESTES EXECUTADOS: ${passCount + failCount}`);
console.log(`PASSARAM: ${passCount}`);
console.log(`FALHARAM: ${failCount}`);
console.log('=============================================================\n');

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
