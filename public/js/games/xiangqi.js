// GAME CỜ TƯỚNG (XIANGQI) - HỖ TRỢ ĐẤU MÁY (AI) VÀ ĐẤU ONLINE 2 NGƯỜI
class XiangqiGame {
  constructor() {
    this.boardEl = document.getElementById('xiangqiBoard');
    this.statusEl = document.getElementById('xiangqiStatus');
    this.modeEl = document.getElementById('xiangqiModeSelect');

    this.rows = 10;
    this.cols = 9;
    this.board = this.createInitialBoard();
    this.mode = 'ai'; // 'ai' hoặc 'online'
    this.myColor = 'red'; // 'red' (Đỏ) hoặc 'black' (Đen)
    this.currentTurn = 'red';
    this.selectedPiece = null;
    this.validMoves = [];
    this.isOver = false;
    this.onlineRoomId = null;

    // Ký tự quân cờ (Chữ Hán & Tên tiếng Việt)
    this.pieceNames = {
      soai: { red: '帥', black: '將', vn: 'Tướng' },
      si: { red: '仕', black: '士', vn: 'Sĩ' },
      tuong: { red: '相', black: '象', vn: 'Tượng' },
      xe: { red: '車', black: '車', vn: 'Xe' },
      phao: { red: '砲', black: '砲', vn: 'Pháo' },
      ma: { red: '傌', black: '馬', vn: 'Mã' },
      tot: { red: '兵', black: '卒', vn: 'Tốt' }
    };

    this.renderBoard();
    this.setupEvents();
  }

  createInitialBoard() {
    const b = Array(10).fill(null).map(() => Array(9).fill(null));
    // Đen (r: 0..3)
    const blackBack = ['xe', 'ma', 'tuong', 'si', 'soai', 'si', 'tuong', 'ma', 'xe'];
    for (let c = 0; c < 9; c++) b[0][c] = { side: 'black', type: blackBack[c] };
    b[2][1] = { side: 'black', type: 'phao' };
    b[2][7] = { side: 'black', type: 'phao' };
    for (let c = 0; c < 9; c += 2) b[3][c] = { side: 'black', type: 'tot' };

    // Đỏ (r: 6..9)
    const redBack = ['xe', 'ma', 'tuong', 'si', 'soai', 'si', 'tuong', 'ma', 'xe'];
    for (let c = 0; c < 9; c++) b[9][c] = { side: 'red', type: redBack[c] };
    b[7][1] = { side: 'red', type: 'phao' };
    b[7][7] = { side: 'red', type: 'phao' };
    for (let c = 0; c < 9; c += 2) b[6][c] = { side: 'red', type: 'tot' };

    return b;
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
      this.statusEl.innerHTML = '🤖 Chế độ: <strong>Đấu với Máy (Bạn cầm quân Đỏ)</strong>';
    } else {
      this.statusEl.innerHTML = '🌐 Đang chờ đối thủ Online (Bấm nút [⚡ Tìm trận nhanh] hoặc thách đấu trong Chat)...';
    }
  }

  reset() {
    this.board = this.createInitialBoard();
    this.currentTurn = 'red';
    this.selectedPiece = null;
    this.validMoves = [];
    this.isOver = false;
    this.onlineRoomId = null;
    this.renderBoard();
    this.updateStatusUI();
  }

  renderBoard() {
    this.boardEl.innerHTML = '';

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const cell = document.createElement('div');
        cell.className = 'xq-cell';
        cell.dataset.r = r;
        cell.dataset.c = c;

        // Vạch sông (Sở Hà Hán Giới)
        if (r === 4) cell.classList.add('river-top');
        if (r === 5) cell.classList.add('river-bottom');

        // Cung tướng
        if ((r <= 2 || r >= 7) && c >= 3 && c <= 5) {
          cell.classList.add('in-palace');
        }

        const piece = this.board[r][c];
        if (piece) {
          const pieceEl = document.createElement('div');
          pieceEl.className = `xq-piece piece-${piece.side}`;
          const info = this.pieceNames[piece.type];
          pieceEl.innerHTML = `
            <span class="xq-char">${piece.side === 'red' ? info.red : info.black}</span>
            <span class="xq-sub">${info.vn}</span>
          `;
          cell.appendChild(pieceEl);
        }

        // Chấm gợi ý nước đi
        if (this.isValidMove(r, c)) {
          const hint = document.createElement('div');
          hint.className = piece ? 'xq-hint-capture' : 'xq-hint-dot';
          cell.appendChild(hint);
        }

        // Highlight quân đang chọn
        if (this.selectedPiece && this.selectedPiece.r === r && this.selectedPiece.c === c) {
          cell.classList.add('selected');
        }

        cell.addEventListener('click', () => this.handleCellClick(r, c));
        this.boardEl.appendChild(cell);
      }
    }
  }

  isValidMove(r, c) {
    return this.validMoves.some(m => m.r === r && m.c === c);
  }

  handleCellClick(r, c) {
    if (this.isOver) return;

    if (this.mode === 'online') {
      if (!this.onlineRoomId) {
        alert('Hãy bấm [⚡ Tìm trận nhanh] hoặc thách đấu ai đó để bắt đầu ván cờ!');
        return;
      }
      if (this.currentTurn !== this.myColor) {
        return; // Chưa tới lượt
      }
    } else {
      if (this.currentTurn !== 'red') return; // Máy đang đi
    }

    const clickedPiece = this.board[r][c];
    const playerSide = this.mode === 'online' ? this.myColor : 'red';

    // 1. Nếu bấm vào một ô trong danh sách nước đi hợp lệ -> Đi cờ
    if (this.selectedPiece && this.isValidMove(r, c)) {
      this.executeMove(this.selectedPiece, { r, c });
      return;
    }

    // 2. Nếu bấm vào quân của mình -> Chọn quân đó
    if (clickedPiece && clickedPiece.side === playerSide) {
      this.selectedPiece = { r, c, piece: clickedPiece };
      this.validMoves = this.getValidMoves(r, c, clickedPiece);
      window.soundFX.playBeep(450, 0.04);
      this.renderBoard();
    } else {
      // Hủy chọn
      this.selectedPiece = null;
      this.validMoves = [];
      this.renderBoard();
    }
  }

  executeMove(from, to) {
    if (this.mode === 'online') {
      // Gửi nước đi lên Socket.IO
      window.chatSocket.emit('xiangqi_play_move', {
        roomId: this.onlineRoomId,
        from: { r: from.r, c: from.c },
        to: { r: to.r, c: to.c }
      });
      this.selectedPiece = null;
      this.validMoves = [];
      return;
    }

    // Chế độ đánh với Máy (AI)
    const targetPiece = this.board[to.r][to.c];
    this.board[to.r][to.c] = from.piece;
    this.board[from.r][from.c] = null;

    this.selectedPiece = null;
    this.validMoves = [];
    window.soundFX.playChessMove();
    this.renderBoard();

    // Kiểm tra ăn Tướng
    if (targetPiece && targetPiece.type === 'soai') {
      this.endGame('🎉 Bạn (Quân Đỏ) đã trảm Tướng, chiến thắng ngoạn mục!');
      window.soundFX.playWin();
      return;
    }

    this.currentTurn = 'black';
    this.updateStatusUI();

    // Máy đi cờ
    setTimeout(() => {
      if (this.isOver) return;
      this.makeAIMove();
    }, 450);
  }

  makeAIMove() {
    const allMoves = [];

    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = this.board[r][c];
        if (p && p.side === 'black') {
          const moves = this.getValidMoves(r, c, p);
          for (let m of moves) {
            allMoves.push({ from: { r, c, piece: p }, to: m });
          }
        }
      }
    }

    if (allMoves.length === 0) {
      this.endGame('Máy hết nước đi! Bạn đã thắng! 🏆');
      return;
    }

    // Đánh giá nước đi: ưu tiên ăn quân giá trị cao
    const pieceValues = { soai: 10000, xe: 90, phao: 45, ma: 40, tuong: 20, si: 20, tot: 15 };
    let bestScore = -Infinity;
    let candidates = [];

    for (let move of allMoves) {
      const target = this.board[move.to.r][move.to.c];
      let score = Math.random() * 5; // Tính ngẫu nhiên để nước đi đa dạng
      if (target) {
        score += (pieceValues[target.type] || 10) * 2;
      }
      // Khuyến khích tấn công qua sông
      if (move.to.r >= 5) score += 3;

      if (score > bestScore) {
        bestScore = score;
        candidates = [move];
      } else if (score === bestScore) {
        candidates.push(move);
      }
    }

    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    const captured = this.board[chosen.to.r][chosen.to.c];

    this.board[chosen.to.r][chosen.to.c] = chosen.from.piece;
    this.board[chosen.from.r][chosen.from.c] = null;

    window.soundFX.playChessMove();
    this.renderBoard();

    if (captured && captured.type === 'soai') {
      this.endGame('💀 Tướng Đỏ bị trảm! Máy đã chiến thắng!');
      window.soundFX.playCrash();
      return;
    }

    this.currentTurn = 'red';
    this.updateStatusUI();
  }

  getValidMoves(r, c, piece) {
    const moves = [];
    const side = piece.side;

    const isInside = (nr, nc) => nr >= 0 && nr < 10 && nc >= 0 && nc < 9;
    const canLand = (nr, nc) => {
      if (!isInside(nr, nc)) return false;
      const target = this.board[nr][nc];
      return !target || target.side !== side;
    };

    switch (piece.type) {
      // 1. XE (Rook): Đi thẳng/ngang
      case 'xe': {
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let [dr, dc] of dirs) {
          let nr = r + dr, nc = c + dc;
          while (isInside(nr, nc)) {
            if (!this.board[nr][nc]) {
              moves.push({ r: nr, c: nc });
            } else {
              if (this.board[nr][nc].side !== side) moves.push({ r: nr, c: nc });
              break;
            }
            nr += dr; nc += dc;
          }
        }
        break;
      }

      // 2. PHÁO (Cannon): Đi thẳng, ăn nhảy qua 1 quân
      case 'phao': {
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let [dr, dc] of dirs) {
          let nr = r + dr, nc = c + dc;
          let count = 0;
          while (isInside(nr, nc)) {
            if (!this.board[nr][nc]) {
              if (count === 0) moves.push({ r: nr, c: nc });
            } else {
              count++;
              if (count === 2) {
                if (this.board[nr][nc].side !== side) moves.push({ r: nr, c: nc });
                break;
              }
            }
            nr += dr; nc += dc;
          }
        }
        break;
      }

      // 3. MÃ (Knight): Đi chữ nhật, cản chân mã
      case 'ma': {
        const maMoves = [
          { dr: -2, dc: -1, cr: -1, cc: 0 },
          { dr: -2, dc: 1,  cr: -1, cc: 0 },
          { dr: 2,  dc: -1, cr: 1,  cc: 0 },
          { dr: 2,  dc: 1,  cr: 1,  cc: 0 },
          { dr: -1, dc: -2, cr: 0,  cc: -1 },
          { dr: 1,  dc: -2, cr: 0,  cc: -1 },
          { dr: -1, dc: 2,  cr: 0,  cc: 1 },
          { dr: 1,  dc: 2,  cr: 0,  cc: 1 }
        ];
        for (let m of maMoves) {
          const nr = r + m.dr, nc = c + m.dc;
          const br = r + m.cr, bc = c + m.cc;
          if (isInside(nr, nc) && !this.board[br][bc] && canLand(nr, nc)) {
            moves.push({ r: nr, c: nc });
          }
        }
        break;
      }

      // 4. TƯỢNG (Elephant): Đi chéo 2 ô, không qua sông, cản mắt tượng
      case 'tuong': {
        const tMoves = [
          { dr: -2, dc: -2, cr: -1, cc: -1 },
          { dr: -2, dc: 2,  cr: -1, cc: 1 },
          { dr: 2,  dc: -2, cr: 1,  cc: -1 },
          { dr: 2,  dc: 2,  cr: 1,  cc: 1 }
        ];
        for (let m of tMoves) {
          const nr = r + m.dr, nc = c + m.dc;
          const eyeR = r + m.cr, eyeC = c + m.cc;
          if (isInside(nr, nc) && !this.board[eyeR][eyeC] && canLand(nr, nc)) {
            // Không được qua sông
            if (side === 'red' && nr >= 5) moves.push({ r: nr, c: nc });
            if (side === 'black' && nr <= 4) moves.push({ r: nr, c: nc });
          }
        }
        break;
      }

      // 5. SĨ (Advisor): Đi chéo 1 ô trong Cung (3..5, 0..2 hoặc 7..9)
      case 'si': {
        const sMoves = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        for (let [dr, dc] of sMoves) {
          const nr = r + dr, nc = c + dc;
          if (nc >= 3 && nc <= 5) {
            const inPalace = side === 'red' ? (nr >= 7 && nr <= 9) : (nr >= 0 && nr <= 2);
            if (inPalace && canLand(nr, nc)) moves.push({ r: nr, c: nc });
          }
        }
        break;
      }

      // 6. TƯỚNG (General): Đi thẳng 1 ô trong Cung
      case 'soai': {
        const gMoves = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let [dr, dc] of gMoves) {
          const nr = r + dr, nc = c + dc;
          if (nc >= 3 && nc <= 5) {
            const inPalace = side === 'red' ? (nr >= 7 && nr <= 9) : (nr >= 0 && nr <= 2);
            if (inPalace && canLand(nr, nc)) moves.push({ r: nr, c: nc });
          }
        }
        break;
      }

      // 7. TỐT (Pawn): Chưa qua sông đi thẳng, qua sông đi thẳng và ngang
      case 'tot': {
        const forward = side === 'red' ? -1 : 1;
        // Đi thẳng
        if (canLand(r + forward, c)) moves.push({ r: r + forward, c });
        // Qua sông thì được đi ngang
        const crossedRiver = side === 'red' ? (r <= 4) : (r >= 5);
        if (crossedRiver) {
          if (canLand(r, c - 1)) moves.push({ r, c: c - 1 });
          if (canLand(r, c + 1)) moves.push({ r, c: c + 1 });
        }
        break;
      }
    }

    return moves;
  }

  updateStatusUI() {
    if (this.isOver) return;
    if (this.mode === 'ai') {
      const isMyTurn = this.currentTurn === 'red';
      this.statusEl.innerHTML = isMyTurn ? 
        '🎯 Lượt của bạn (Quân Đỏ)' : 
        '⏳ Máy đang suy nghĩ (Quân Đen)...';
    }
  }

  endGame(msg) {
    this.isOver = true;
    this.statusEl.innerHTML = `<strong>${msg}</strong>`;
  }

  // Socket.IO Handlers
  onOnlineGameStart(data) {
    this.mode = 'online';
    this.modeEl.value = 'online';
    this.reset();
    this.onlineRoomId = data.roomId;
    this.board = data.board;
    this.myColor = (window.currentUser && window.currentUser.id === data.p1.id) ? 'red' : 'black';
    this.currentTurn = data.currentTurn;

    const opponentName = this.myColor === 'red' ? data.p2.name : data.p1.name;
    const colorLabel = this.myColor === 'red' ? 'ĐỎ' : 'ĐEN';
    this.statusEl.innerHTML = `⚔️ Đấu với <strong>${opponentName}</strong> | Bạn là <strong>${colorLabel}</strong> | Lượt: <strong>${this.currentTurn === 'red' ? 'ĐỎ' : 'ĐEN'}</strong>`;
    this.renderBoard();
  }

  onOnlineMoveMade(data) {
    const piece = this.board[data.from.r][data.from.c];
    this.board[data.to.r][data.to.c] = piece;
    this.board[data.from.r][data.from.c] = null;

    this.currentTurn = data.nextTurn;
    window.soundFX.playChessMove();
    this.renderBoard();

    const isMyTurn = this.currentTurn === this.myColor;
    const colorLabel = this.myColor === 'red' ? 'ĐỎ' : 'ĐEN';
    this.statusEl.innerHTML = isMyTurn ? 
      `🎯 Lượt của bạn (${colorLabel})!` : 
      `⏳ Lượt đối thủ (${this.currentTurn === 'red' ? 'ĐỎ' : 'ĐEN'})...`;
  }

  onOnlineGameOver(data) {
    this.isOver = true;
    if (data.from && data.to) {
      const piece = this.board[data.from.r][data.from.c];
      this.board[data.to.r][data.to.c] = piece;
      this.board[data.from.r][data.from.c] = null;
      this.renderBoard();
    }

    const isWinner = data.winner === this.myColor;
    if (isWinner) {
      this.statusEl.innerHTML = `🏆 <strong>BẠN ĐÃ CHIẾN THẮNG TRẬN CỜ TƯỚNG!</strong> 🎉`;
      window.soundFX.playWin();
    } else {
      this.statusEl.innerHTML = `💀 <strong>${data.winnerName} đã trảm Tướng chiến thắng!</strong>`;
      window.soundFX.playCrash();
    }
  }
}

window.XiangqiGame = XiangqiGame;
