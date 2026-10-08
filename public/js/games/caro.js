// GAME CỜ CARO (GOMOKU 15x15) - HỖ TRỢ ĐẤU MÁY (AI) VÀ ĐẤU ONLINE MULTIPLAYER
class CaroGame {
  constructor() {
    this.size = 15;
    this.board = Array(this.size).fill(null).map(() => Array(this.size).fill(''));
    this.mode = 'ai'; // 'ai' hoặc 'online'
    this.currentTurn = 'X';
    this.playerSymbol = 'X';
    this.isOver = false;
    this.lastMove = null;
    this.onlineRoomId = null;

    this.gridEl = document.getElementById('caroGrid');
    this.statusEl = document.getElementById('caroStatus');
    this.modeEl = document.getElementById('caroModeSelect');

    this.renderBoard();
    this.setupEvents();
  }

  setupEvents() {
    if (this.modeEl) {
      this.modeEl.addEventListener('change', (e) => {
        this.setMode(e.target.value);
      });
    }
  }

  setMode(mode) {
    this.mode = mode;
    this.reset();
    if (mode === 'ai') {
      this.statusEl.innerHTML = '🤖 Chế độ: <strong>Đấu với Máy (Bạn đi X)</strong>';
    } else {
      this.statusEl.innerHTML = '🌐 Đang chờ thách đấu Online (Mời đối thủ ở danh sách chat bên phải)...';
    }
  }

  renderBoard() {
    this.gridEl.innerHTML = '';
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        const cell = document.createElement('div');
        cell.className = 'caro-cell';
        cell.dataset.r = r;
        cell.dataset.c = c;
        cell.addEventListener('click', () => this.handleCellClick(r, c));
        this.gridEl.appendChild(cell);
      }
    }
  }

  reset() {
    this.board = Array(this.size).fill(null).map(() => Array(this.size).fill(''));
    this.currentTurn = 'X';
    this.isOver = false;
    this.lastMove = null;
    this.onlineRoomId = null;

    const cells = this.gridEl.querySelectorAll('.caro-cell');
    cells.forEach(cell => {
      cell.innerText = '';
      cell.className = 'caro-cell';
    });

    if (this.mode === 'ai') {
      this.statusEl.innerHTML = '🎯 Lượt bạn đi (X)';
    }
  }

  handleCellClick(r, c) {
    if (this.isOver) return;
    if (this.board[r][c] !== '') return;

    if (this.mode === 'ai') {
      if (this.currentTurn !== 'X') return; // Đang lượt máy
      this.placeMove(r, c, 'X');
      window.soundFX.playChessMove();

      if (this.checkWin(r, c, 'X')) {
        this.endGame('Bạn (X) đã chiến thắng Máy! 🎉');
        window.soundFX.playWin();
        return;
      }

      this.currentTurn = 'O';
      this.statusEl.innerHTML = '⏳ Máy đang suy nghĩ...';

      setTimeout(() => {
        if (this.isOver) return;
        const aiMove = this.calculateAIMove();
        if (aiMove) {
          this.placeMove(aiMove.r, aiMove.c, 'O');
          window.soundFX.playChessMove();
          if (this.checkWin(aiMove.r, aiMove.c, 'O')) {
            this.endGame('Máy (O) đã chiến thắng! Thử lại nhé! 🤖');
            return;
          }
          this.currentTurn = 'X';
          this.statusEl.innerHTML = '🎯 Lượt bạn đi (X)';
        }
      }, 350);
    } else if (this.mode === 'online') {
      if (!this.onlineRoomId) {
        alert('Hãy thách đấu một người bạn trong danh sách người online ở mục Chat!');
        return;
      }
      if (this.currentTurn !== this.playerSymbol) {
        alert('Chưa tới lượt của bạn!');
        return;
      }

      // Gửi nước đi lên server Socket.IO
      window.chatSocket.emit('caro_play_move', {
        roomId: this.onlineRoomId,
        row: r,
        col: c
      });
    }
  }

  placeMove(r, c, symbol) {
    this.board[r][c] = symbol;

    // Highlight last move
    if (this.lastMove) {
      const prev = this.getCellElement(this.lastMove.r, this.lastMove.c);
      if (prev) prev.classList.remove('last-move');
    }
    this.lastMove = { r, c };

    const el = this.getCellElement(r, c);
    if (el) {
      el.innerText = symbol;
      el.classList.add(symbol === 'X' ? 'cell-x' : 'cell-o');
      el.classList.add('last-move');
    }
  }

  getCellElement(r, c) {
    return this.gridEl.children[r * this.size + c];
  }

  checkWin(r, c, symbol) {
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
    for (const [dr, dc] of directions) {
      let count = 1;
      let nr = r + dr, nc = c + dc;
      while (nr >= 0 && nr < this.size && nc >= 0 && nc < this.size && this.board[nr][nc] === symbol) {
        count++; nr += dr; nc += dc;
      }
      nr = r - dr; nc = c - dc;
      while (nr >= 0 && nr < this.size && nc >= 0 && nc < this.size && this.board[nr][nc] === symbol) {
        count++; nr -= dr; nc -= dc;
      }
      if (count >= 5) return true;
    }
    return false;
  }

  endGame(message) {
    this.isOver = true;
    this.statusEl.innerHTML = `<strong>${message}</strong>`;
  }

  // AI Thuật toán đánh giá nước cờ Caro
  calculateAIMove() {
    let bestScore = -Infinity;
    let bestMoves = [];

    // Duyệt qua tất cả các ô trống
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (this.board[r][c] === '') {
          // Tính điểm tấn công (O) và điểm phòng ngự chặn (X)
          const attackScore = this.evaluatePosition(r, c, 'O');
          const defenseScore = this.evaluatePosition(r, c, 'X');
          const score = attackScore * 1.1 + defenseScore;

          if (score > bestScore) {
            bestScore = score;
            bestMoves = [{ r, c }];
          } else if (score === bestScore) {
            bestMoves.push({ r, c });
          }
        }
      }
    }

    if (bestMoves.length === 0) return { r: 7, c: 7 };
    return bestMoves[Math.floor(Math.random() * bestMoves.length)];
  }

  evaluatePosition(r, c, symbol) {
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
    let totalScore = 0;

    for (const [dr, dc] of directions) {
      let count = 1;
      let openEnds = 0;

      // Hướng xuôi
      let nr = r + dr, nc = c + dc;
      while (nr >= 0 && nr < this.size && nc >= 0 && nc < this.size && this.board[nr][nc] === symbol) {
        count++; nr += dr; nc += dc;
      }
      if (nr >= 0 && nr < this.size && nc >= 0 && nc < this.size && this.board[nr][nc] === '') openEnds++;

      // Hướng ngược
      nr = r - dr; nc = c - dc;
      while (nr >= 0 && nr < this.size && nc >= 0 && nc < this.size && this.board[nr][nc] === symbol) {
        count++; nr -= dr; nc -= dc;
      }
      if (nr >= 0 && nr < this.size && nc >= 0 && nc < this.size && this.board[nr][nc] === '') openEnds++;

      if (count >= 5) totalScore += 100000;
      else if (count === 4 && openEnds >= 1) totalScore += 8000;
      else if (count === 3 && openEnds === 2) totalScore += 1000;
      else if (count === 3 && openEnds === 1) totalScore += 200;
      else if (count === 2 && openEnds === 2) totalScore += 50;
      else if (count === 1 && openEnds === 2) totalScore += 10;
    }

    return totalScore;
  }

  // Socket.IO Handlers
  onOnlineGameStart(data) {
    this.mode = 'online';
    this.modeEl.value = 'online';
    this.reset();
    this.onlineRoomId = data.roomId;
    this.playerSymbol = (window.currentUser && window.currentUser.id === data.p1.id) ? 'X' : 'O';
    this.currentTurn = data.currentTurn;

    const opponentName = this.playerSymbol === 'X' ? data.p2.name : data.p1.name;
    this.statusEl.innerHTML = `⚔️ Đấu với <strong>${opponentName}</strong> | Bạn là <strong>${this.playerSymbol}</strong> | Lượt: <strong>${this.currentTurn}</strong>`;
  }

  onOnlineMoveMade(data) {
    this.placeMove(data.row, data.col, data.symbol);
    window.soundFX.playChessMove();
    this.currentTurn = data.nextTurn;

    const isMyTurn = this.currentTurn === this.playerSymbol;
    this.statusEl.innerHTML = isMyTurn ? 
      `🎯 Lượt của bạn (${this.playerSymbol})!` : 
      `⏳ Lượt đối thủ (${this.currentTurn})...`;
  }

  onOnlineGameOver(data) {
    this.isOver = true;
    if (data.row !== undefined && data.col !== undefined && data.winner) {
      this.placeMove(data.row, data.col, data.winner);
    }
    const isWinner = data.winner === this.playerSymbol;
    if (isWinner) {
      this.statusEl.innerHTML = `🏆 <strong>BẠN ĐÃ CHIẾN THẮNG!</strong> 🎉`;
      window.soundFX.playWin();
    } else {
      this.statusEl.innerHTML = `💀 <strong>${data.winnerName} đã thắng!</strong>`;
      window.soundFX.playCrash();
    }
  }
}

window.CaroGame = CaroGame;
