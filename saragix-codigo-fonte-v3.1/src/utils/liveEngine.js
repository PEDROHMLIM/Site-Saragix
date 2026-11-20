import { Chess } from 'chess.js';

// Motor Stockfish dedicado à análise em tempo real (streaming por profundidade com suporte a MultiPV)
export class LiveEngine {
  constructor() {
    this.worker = null;
    this.searching = false;
    this.pending = null;
    this.current = null;
    this.linesMap = {};
    this.throttleTimer = null;
    this.lastEmitTime = 0;
    this.pendingPayload = null;
  }

  clearThrottle() {
    if (this.throttleTimer) {
      clearTimeout(this.throttleTimer);
      this.throttleTimer = null;
    }
    this.pendingPayload = null;
  }

  ensureWorker() {
    if (this.worker) return;
    try {
      this.worker = new Worker('/stockfish-19.js');
    } catch {
      try {
        this.worker = new Worker('/stockfish.js');
      } catch {
        this.worker = new Worker('/stockfish-19-asm.js');
      }
    }
    this.worker.addEventListener('message', (e) => this.handleLine(typeof e.data === 'string' ? e.data : ''));
    this.worker.addEventListener('error', () => {
      try { this.worker.terminate(); } catch { /* ignore */ }
      try {
        this.worker = new Worker('/stockfish-19-asm.js');
        this.worker.addEventListener('message', (e) => this.handleLine(typeof e.data === 'string' ? e.data : ''));
        this.worker.postMessage('uci');
        this.worker.postMessage('setoption name UCI_LimitStrength value false');
        this.worker.postMessage('setoption name Skill Level value 20');
        this.worker.postMessage('setoption name Use NNUE value true');
        this.worker.postMessage('setoption name Hash value 32');
        this.worker.postMessage('isready');
      } catch { /* ignore */ }
    });
    this.worker.postMessage('uci');
    this.worker.postMessage('setoption name UCI_LimitStrength value false');
    this.worker.postMessage('setoption name Skill Level value 20');
    this.worker.postMessage('setoption name Use NNUE value true');
    this.worker.postMessage('setoption name Hash value 32');
    this.worker.postMessage('isready');
  }

  handleLine(line) {
    if (line.startsWith('bestmove')) {
      this.clearThrottle();
      this.searching = false;
      const job = this.current;
      this.current = null;
      const lines = Object.values(this.linesMap || {}).sort((a, b) => a.multipv - b.multipv);
      const best = this.linesMap[1] || lines[0] || this.lastBest;

      if (job && job.cb) {
        if (line.includes('(none)')) {
          job.cb({
            done: true,
            depth: 0,
            evalWhiteCp: best?.evalWhiteCp ?? 0,
            mateWhite: best?.mateWhite ?? null,
            bestMoveUci: null,
            pv: [],
            lines,
          });
        } else {
          job.cb({
            done: true,
            depth: best?.depth ?? 0,
            evalWhiteCp: best?.evalWhiteCp ?? null,
            mateWhite: best?.mateWhite ?? null,
            bestMoveUci: best?.bestMoveUci ?? null,
            pv: best?.pv ?? [],
            lines,
          });
        }
      }

      if (this.pending) {
        const next = this.pending;
        this.pending = null;
        this.start(next);
      }
      if (job && !this.pending && job.onDone) job.onDone();
      return;
    }

    if (!this.current || !line.startsWith('info') || !line.includes(' pv ')) return;

    const turn = this.current.fen.split(' ')[1] || 'w';
    const depthM = line.match(/ depth (\d+)/);
    const cpM = line.match(/score cp (-?\d+)/);
    const mateM = line.match(/score mate (-?\d+)/);
    const pvM = line.match(/ pv (.+)$/);
    const multipvM = line.match(/multipv (\d+)/);
    const pvNum = multipvM ? parseInt(multipvM[1], 10) : 1;

    let evalWhiteCp = null;
    let mateWhite = null;
    if (cpM) {
      const raw = parseInt(cpM[1], 10);
      evalWhiteCp = turn === 'w' ? raw : -raw;
    } else if (mateM) {
      const raw = parseInt(mateM[1], 10);
      mateWhite = turn === 'w' ? raw : -raw;
      evalWhiteCp = mateWhite > 0 ? 10000 - mateWhite * 10 : -10000 - mateWhite * 10;
    } else {
      return;
    }

    const pv = pvM ? pvM[1].trim().split(/\s+/) : [];
    const depthVal = depthM ? parseInt(depthM[1], 10) : 0;

    this.linesMap[pvNum] = {
      multipv: pvNum,
      depth: depthVal,
      evalWhiteCp,
      mateWhite,
      bestMoveUci: pv[0] || null,
      pv,
    };

    const lines = Object.values(this.linesMap).sort((a, b) => a.multipv - b.multipv);
    const best = this.linesMap[1] || lines[0];
    if (best) {
      this.lastBest = best;
    }

    const payload = {
      depth: best.depth,
      evalWhiteCp: best.evalWhiteCp,
      mateWhite: best.mateWhite,
      bestMoveUci: best.bestMoveUci,
      pv: best.pv,
      lines,
    };

    const now = Date.now();
    if (now - this.lastEmitTime >= 65) {
      this.clearThrottle();
      this.lastEmitTime = now;
      this.current.cb(payload);
    } else {
      this.pendingPayload = payload;
      if (!this.throttleTimer) {
        const activeJob = this.current;
        this.throttleTimer = setTimeout(() => {
          this.throttleTimer = null;
          if (this.current === activeJob && this.pendingPayload && activeJob?.cb) {
            this.lastEmitTime = Date.now();
            activeJob.cb(this.pendingPayload);
            this.pendingPayload = null;
          }
        }, 65);
      }
    }
  }

  start(job) {
    this.clearThrottle();
    this.current = job;
    this.linesMap = {};
    this.lastBest = null;
    this.searching = true;
    const multiPv = job.multiPv || 2;
    this.worker.postMessage(`setoption name MultiPV value ${multiPv}`);
    this.worker.postMessage(`position fen ${job.fen}`);
    if (job.movetime && job.movetime > 0) {
      this.worker.postMessage(`go depth ${job.depth || 14} movetime ${job.movetime}`);
    } else {
      this.worker.postMessage(`go depth ${job.depth || 14}`);
    }
  }

  analyze(fen, depth, cb, onDone, movetime = 0, multiPv = 3) {
    // Posição terminal (mate ou empate)
    try {
      const helper = new Chess(fen);
      if (helper.isGameOver()) {
        const turn = helper.turn();
        const isWhiteWin = helper.isCheckmate() && turn === 'b';
        const isBlackWin = helper.isCheckmate() && turn === 'w';
        const evalWhiteCp = isWhiteWin ? 10000 : isBlackWin ? -10000 : 0;
        const mateWhite = isWhiteWin ? 0 : isBlackWin ? -0 : null;
        cb({
          depth: 99,
          evalWhiteCp,
          mateWhite,
          bestMoveUci: null,
          pv: [],
          lines: [],
          done: true,
        });
        if (onDone) onDone();
        return;
      }
    } catch {
      // continua para o worker
    }

    this.ensureWorker();
    const job = { fen, depth, cb, onDone, movetime, multiPv };
    if (this.searching) {
      this.pending = job;
      this.current = null; // ignora linhas da busca antiga
      this.worker.postMessage('stop');
    } else {
      this.start(job);
    }
  }

  stop() {
    this.clearThrottle();
    this.pending = null;
    this.current = null;
    this.linesMap = {};
    if (this.worker && this.searching) this.worker.postMessage('stop');
  }

  resetGame() {
    this.stop();
    if (this.worker) {
      this.worker.postMessage('ucinewgame');
      this.worker.postMessage('isready');
    }
  }

  terminate() {
    this.clearThrottle();
    if (this.worker) {
      try {
        this.worker.postMessage('stop');
        this.worker.terminate();
      } catch {
        /* ignore */
      }
    }
    this.worker = null;
    this.searching = false;
    this.pending = null;
    this.current = null;
    this.linesMap = {};
  }
}
