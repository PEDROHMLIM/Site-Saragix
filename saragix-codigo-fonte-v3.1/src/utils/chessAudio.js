// Módulo de áudio desativado (sons removidos conforme solicitado)

class ChessAudio {
  playMove() {}
  playCapture() {}
  playCheck() {}
  playCastle() {}
  playBrilliant() {}
  playCorrect() {}
  playWrong() {}
  playMoveEvent() {}
  toggleSound() {
    return false;
  }
  isSoundEnabled() {
    return false;
  }
}

export const chessAudio = new ChessAudio();
