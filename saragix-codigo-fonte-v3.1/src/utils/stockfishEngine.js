// Gerenciador de comunicação com o motor Stockfish 19 NNUE via Web Worker
import { Chess } from 'chess.js';

export class StockfishEngine {
  constructor() {
    this.worker = null;
    this.isReady = false;
    this.engineName = 'Stockfish 19 NNUE';
  }

  async init() {
    if (this.worker && this.isReady) return;

    return new Promise((resolve, reject) => {
      const candidates = ['/stockfish-19.js', '/stockfish.js', '/stockfish-19-asm.js'];
      let candidateIndex = 0;

      const tryCandidate = (url) => {
        let settled = false;
        let timeoutId = null;
        let worker = null;

        try {
          worker = new Worker(url);
        } catch (err) {
          tryNext(err);
          return;
        }

        const cleanup = () => {
          if (timeoutId) clearTimeout(timeoutId);
          if (worker) {
            worker.removeEventListener('message', onMessage);
            worker.removeEventListener('error', onError);
          }
        };

        const tryNext = (err) => {
          if (settled) return;
          settled = true;
          cleanup();
          try { worker?.terminate(); } catch { /* ignore */ }
          candidateIndex++;
          if (candidateIndex < candidates.length) {
            tryCandidate(candidates[candidateIndex]);
          } else {
            reject(err || new Error('Falha ao inicializar Stockfish 19'));
          }
        };

        const onMessage = (e) => {
          const line = typeof e.data === 'string' ? e.data : '';
          if (line.includes('Stockfish 19') || line.includes('SF 19')) {
            this.engineName = 'Stockfish 19 (NNUE)';
          }
          if (line.includes('uciok')) {
            worker.postMessage('setoption name UCI_LimitStrength value false');
            worker.postMessage('setoption name Skill Level value 20');
            worker.postMessage('setoption name Use NNUE value true');
            worker.postMessage('setoption name Hash value 32');
            worker.postMessage('isready');
          } else if (line.includes('readyok')) {
            if (settled) return;
            settled = true;
            cleanup();
            this.isReady = true;
            this.worker = worker;
            resolve();
          }
        };

        const onError = (err) => {
          tryNext(err);
        };

        timeoutId = setTimeout(() => {
          tryNext(new Error(`Timeout ao carregar ${url}`));
        }, 7000);

        worker.addEventListener('message', onMessage);
        worker.addEventListener('error', onError);
        worker.postMessage('uci');
      };

      tryCandidate(candidates[0]);
    });
  }

  /**
   * Analisa uma posição FEN até uma certa profundidade (depth) em força máxima
   * Retorna { evalWhiteCp, mateWhite, bestMoveUci, pv }
   */
  async evaluateFen(fen, depth = 14, movetime = 0) {
    // Se a posição for terminal (xeque-mate, afogamento, etc), resolve imediatamente sem acionar o motor
    try {
      const helper = new Chess(fen);
      if (helper.isGameOver()) {
        const turn = helper.turn(); // Quem deve jogar (mas não tem lances legais)
        if (helper.isCheckmate()) {
          // Se é a vez das Pretas jogarem e estão em xeque-mate, as Brancas venceram (+10000)
          // Se é a vez das Brancas jogarem e estão em xeque-mate, as Pretas venceram (-10000)
          const isWhiteWin = turn === 'b';
          return {
            evalWhiteCp: isWhiteWin ? 10000 : -10000,
            mateWhite: isWhiteWin ? 0 : -0,
            bestMoveUci: null,
            pv: '',
          };
        }
        // Afogamento ou empate
        return {
          evalWhiteCp: 0,
          mateWhite: null,
          bestMoveUci: null,
          pv: '',
        };
      }
    } catch {
      // Prossegue normalmente se o fen for inválido para o parser
    }

    if (!this.isReady) {
      await this.init();
    }

    const turn = fen.split(' ')[1] || 'w'; // 'w' ou 'b'

    return new Promise((resolve) => {
      let lastScoreCp = null;
      let lastMate = null;
      let lastPv = '';
      let searchStarted = false;

      const onMessage = (e) => {
        const line = typeof e.data === 'string' ? e.data : '';

        // Sincronização estrita: aguarda o motor acusar 'readyok' para iniciar a busca limpa
        if (!searchStarted) {
          if (line.includes('readyok')) {
            searchStarted = true;
            this.worker.postMessage('setoption name UCI_LimitStrength value false');
            this.worker.postMessage('setoption name Skill Level value 20');
            this.worker.postMessage('setoption name Use NNUE value true');
            this.worker.postMessage(`position fen ${fen}`);
            if (movetime && movetime > 0) {
              this.worker.postMessage(`go depth ${depth} movetime ${movetime}`);
            } else {
              this.worker.postMessage(`go depth ${depth}`);
            }
          }
          return;
        }

        if (line.startsWith('info') && line.includes('score')) {
          const cpMatch = line.match(/score cp (-?\d+)/);
          const mateMatch = line.match(/score mate (-?\d+)/);
          const pvMatch = line.match(/ pv (.+)$/);

          if (cpMatch) {
            const rawCp = parseInt(cpMatch[1], 10);
            lastScoreCp = turn === 'w' ? rawCp : -rawCp;
            lastMate = null;
          } else if (mateMatch) {
            const rawMate = parseInt(mateMatch[1], 10);
            const mateWhite = turn === 'w' ? rawMate : -rawMate;
            lastMate = mateWhite;
            lastScoreCp = mateWhite > 0 ? 10000 - mateWhite * 10 : -10000 - mateWhite * 10;
          }

          if (pvMatch) {
            lastPv = pvMatch[1].trim();
          }
        }

        if (line.startsWith('bestmove')) {
          this.worker.removeEventListener('message', onMessage);
          const parts = line.split(' ');
          const bestMoveUci = parts[1] && parts[1] !== '(none)' ? parts[1] : null;
          resolve({
            evalWhiteCp: lastScoreCp !== null ? lastScoreCp : 0,
            mateWhite: lastMate,
            bestMoveUci,
            pv: lastPv,
          });
        }
      };

      this.worker.addEventListener('message', onMessage);
      this.worker.postMessage('stop');
      this.worker.postMessage('isready');
    });
  }

  /**
   * Obtém o lance do computador calibrado para qualquer nível de Rating de 100 até 3200.
   * - Para ratings de 100 a 1200: combina a busca do Stockfish em baixa profundidade com
   *   uma probabilidade graduada de lances subótimos humanos para simular de iniciante absoluto a intermediário.
   * - Para ratings de 1300 a 3200: utiliza UCI_LimitStrength / UCI_Elo / Skill Level nativos do Stockfish
   *   e profundidade progressiva até força máxima de GM / Super Engine (3200).
   */
  async getComputerMove(fen, rating = 1500) {
    if (!this.isReady) {
      await this.init();
    }

    const clampedRating = Math.max(100, Math.min(3200, Number(rating) || 1500));
    const chess = new Chess(fen);
    const legalMoves = chess.moves({ verbose: true });
    if (legalMoves.length === 0) return null;

    // Para níveis muito baixos (100 a 900), há chance de escolher um lance legal aleatório ou semi-natural
    if (clampedRating <= 900) {
      // Chance de jogar lance aleatório não-ótimo: 100 -> 82%, 300 -> 65%, 500 -> 48%, 700 -> 30%, 900 -> 15%
      const randomChance = Math.max(0.12, 0.9 - (clampedRating / 1000) * 0.82);
      if (Math.random() < randomChance) {
        // Evita dar mate imediato se for rating <= 400, ou escolhe entre lances legais
        const pool =
          clampedRating <= 400 && legalMoves.length > 1
            ? legalMoves.filter((m) => !m.san.includes('#'))
            : legalMoves;
        const chosen = (pool.length > 0 ? pool : legalMoves)[
          Math.floor(Math.random() * (pool.length > 0 ? pool.length : legalMoves.length))
        ];
        return `${chosen.from}${chosen.to}${chosen.promotion || ''}`;
      }
    }

    // Mapeia Rating (100..3200) para Skill Level (0..20) e Depth (1..16)
    const skillLevel = Math.max(
      0,
      Math.min(20, Math.round(((clampedRating - 100) / 3100) * 20))
    );

    let searchDepth = 1;
    if (clampedRating <= 400) searchDepth = 1;
    else if (clampedRating <= 800) searchDepth = 2;
    else if (clampedRating <= 1100) searchDepth = 3;
    else if (clampedRating <= 1400) searchDepth = 5;
    else if (clampedRating <= 1700) searchDepth = 7;
    else if (clampedRating <= 2000) searchDepth = 9;
    else if (clampedRating <= 2300) searchDepth = 11;
    else if (clampedRating <= 2600) searchDepth = 13;
    else if (clampedRating <= 2900) searchDepth = 15;
    else searchDepth = 16;

    return new Promise((resolve) => {
      let searchStarted = false;

      const onMessage = (e) => {
        const line = typeof e.data === 'string' ? e.data : '';

        if (!searchStarted) {
          if (line.includes('readyok')) {
            searchStarted = true;
            this.worker.postMessage(`setoption name Skill Level value ${skillLevel}`);
            if (clampedRating >= 1320 && clampedRating <= 3190) {
              this.worker.postMessage('setoption name UCI_LimitStrength value true');
              this.worker.postMessage(`setoption name UCI_Elo value ${clampedRating}`);
            } else if (clampedRating >= 3200) {
              this.worker.postMessage('setoption name UCI_LimitStrength value false');
              this.worker.postMessage('setoption name Skill Level value 20');
            } else {
              this.worker.postMessage('setoption name UCI_LimitStrength value true');
              this.worker.postMessage('setoption name UCI_Elo value 1320');
            }
            this.worker.postMessage(`position fen ${fen}`);
            this.worker.postMessage(`go depth ${searchDepth}`);
          }
          return;
        }

        if (line.startsWith('bestmove')) {
          this.worker.removeEventListener('message', onMessage);
          const parts = line.split(' ');
          const moveUci = parts[1] && parts[1] !== '(none)' ? parts[1] : null;
          if (moveUci) {
            resolve(moveUci);
          } else {
            const fallback = legalMoves[0];
            resolve(`${fallback.from}${fallback.to}${fallback.promotion || ''}`);
          }
        }
      };

      this.worker.addEventListener('message', onMessage);
      this.worker.postMessage('stop');
      this.worker.postMessage('isready');
    });
  }

  stop() {
    if (this.worker) {
      this.worker.postMessage('stop');
    }
  }

  resetGame() {
    if (this.worker && this.isReady) {
      this.worker.postMessage('stop');
      this.worker.postMessage('ucinewgame');
      this.worker.postMessage('isready');
    }
  }

  terminate() {
    if (this.worker) {
      try {
        this.worker.postMessage('stop');
        this.worker.terminate();
      } catch {
        /* ignore */
      }
      this.worker = null;
      this.isReady = false;
    }
  }
}
