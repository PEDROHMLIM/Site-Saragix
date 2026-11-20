import { isMoveInOpeningBook, isBookMoveByFen, detectOpening } from '../src/utils/openings.js';
import { Chess } from 'chess.js';

const cases = [
  ['e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7', true],
  ['e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6', true],
  ['e4 e5 Qh5', true],            // Parham Attack é catalogada no Lichess
  ['e4 e5 Ke2', true],            // Bongcloud também
  ['e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Qe2 h5', false],
  ['d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 a4 a5 h4', false],
  ['Nf3 d5 d4', true],            // transposição
  ['e4 a5 h4 h5', false],
];
let ok = 0;
for (const [seq, exp] of cases) {
  const sans = seq.split(' ');
  const got = isMoveInOpeningBook(sans);
  console.log(got === exp ? 'OK ' : 'ERR', exp, got, seq, '=>', detectOpening(sans).eco, detectOpening(sans).name);
  if (got === exp) ok++;
}
// por FEN
const g = new Chess();
const b = g.fen(); g.move('d4'); const a = g.fen();
console.log('fen d4 book:', isBookMoveByFen(b, a));
console.log(`${ok}/${cases.length}`);
const t = performance.now();
for (let i = 0; i < 2000; i++) isMoveInOpeningBook(['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6']);
console.log('2000 consultas (cache):', (performance.now() - t).toFixed(1), 'ms');
