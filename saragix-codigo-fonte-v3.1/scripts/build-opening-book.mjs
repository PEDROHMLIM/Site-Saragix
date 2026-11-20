// Gera src/utils/openingBookData.js a partir do repertório oficial do Lichess
// (https://github.com/lichess-org/chess-openings — arquivos a.tsv ... e.tsv, licença CC0).
//
// Uso:  node scripts/build-opening-book.mjs
//
// Saída:
//   OPENINGS  -> lista [eco, nome] de todas as aberturas catalogadas
//   POSITIONS -> string compacta "hash:idx,hash:idx,..." com TODAS as posições
//                atravessadas pelas linhas teóricas. `idx` aponta para a abertura
//                cuja linha termina naquela posição (ou -1 se for posição intermediária).
//   As posições são indexadas pela FEN reduzida (peças + vez + roques), então
//   transposições de ordem de lances também são reconhecidas como teoria.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Chess } from 'chess.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'openings-data');
const outFile = path.join(__dirname, '..', 'src', 'utils', 'openingBookData.js');

export function positionKey(fen) {
  const p = fen.split(' ');
  return `${p[0]} ${p[1]} ${p[2]}`;
}

// FNV-1a 32 bits (idêntico ao usado em runtime em openings.js)
export function hashKey(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36);
}

const openings = [];
const positions = new Map(); // hash -> idx (-1 intermediária)
const keyByHash = new Map();
let collisions = 0;

const sourceFiles = ['a', 'b', 'c', 'd', 'e'];
const deepFile = path.join(dataDir, 'deep-mainlines.tsv');
if (fs.existsSync(deepFile)) {
  sourceFiles.push('deep-mainlines');
}

for (const f of sourceFiles) {
  const lines = fs.readFileSync(path.join(dataDir, `${f}.tsv`), 'utf8').split(/\r?\n/);
  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;
    const [eco, name, pgn] = line.split('\t');
    const sans = pgn.replace(/\d+\.(\.\.)?/g, ' ').trim().split(/\s+/);
    const g = new Chess();
    const idx = openings.length;
    openings.push([eco, name]);
    const register = (fen, isFinal) => {
      const key = positionKey(fen);
      const h = hashKey(key);
      const prevKey = keyByHash.get(h);
      if (prevKey && prevKey !== key) collisions++;
      keyByHash.set(h, key);
      const cur = positions.get(h);
      if (isFinal) {
        positions.set(h, idx); // linha mais específica/mais recente vence
      } else if (cur === undefined) {
        positions.set(h, -1);
      }
    };
    for (let i = 0; i < sans.length; i++) {
      const mv = g.move(sans[i]);
      if (!mv) throw new Error(`Lance inválido "${sans[i]}" em ${eco} ${name}`);
      register(g.fen(), i === sans.length - 1);
    }
  }
}

const posStr = [...positions.entries()].map(([h, i]) => `${h}:${i}`).join(',');
const header = `// ARQUIVO GERADO AUTOMATICAMENTE por scripts/build-opening-book.mjs — não editar à mão.
// Fonte: Lichess chess-openings (https://github.com/lichess-org/chess-openings) — CC0.
// ${openings.length} aberturas • ${positions.size} posições teóricas.
`;
const body = `${header}export const OPENINGS = ${JSON.stringify(openings)};\nexport const POSITIONS = ${JSON.stringify(posStr)};\n`;
fs.writeFileSync(outFile, body);
console.log(`Aberturas: ${openings.length}`);
console.log(`Posições teóricas únicas: ${positions.size}`);
console.log(`Colisões de hash: ${collisions}`);
console.log(`Arquivo: ${outFile} (${(body.length / 1024).toFixed(1)} KB)`);
