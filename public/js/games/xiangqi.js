// GAME CỜ TƯỚNG (XIANGQI) CHUẨN TRUYỀN THỐNG - VẼ BẰNG HTML5 CANVAS CHÍNH XÁC 100%
class XiangqiGame {
  constructor() {
    this.canvas = document.getElementById('xiangqiCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.statusEl = document.getElementById('xiangqiStatus');
    this.modeEl = document.getElementById('xiangqiModeSelect');

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.rows = 10;
    this.cols = 9;
    this.padX = 35;
    this.padY = 32;
    this.stepX = (this.width - this.padX * 2) / 8;  // 48.75px
    this.stepY = (this.height - this.padY * 2) / 9; // 49.55px
    this.pieceRadius = 20;

    this.board = this.createInitialBoard();
    this.mode = 'ai'; // 'ai' hoặc 'online'
    this.myColor = 'red'; // 'red' (Đỏ) hoặc 'black' (Đen)
    this.currentTurn = 'red';
    this.selectedPiece = null;
    this.validMoves = [];
    this.lastMove = null;
    this.isOver = false;
    this.onlineRoomId = null;

    // Ký tự chữ Hán & Tên tiếng Việt
    this.pieceMeta = {
      soai:  { red: '帥', black: '將', vn: 'Tướng' },
      si:    { red: '仕', black: '士', vn: 'Sĩ' },
      tuong: { red: '相', black: '象', vn: 'Tượng' },
      xe:    { red: '車', black: '車', vn: 'Xe' },
      phao:  { red: '砲', black: '砲', vn: 'Pháo' },
      ma:    { red: '傌', black: '馬', vn: 'Mã' },
      tot:   { red: '兵', black: '卒', vn: 'Tốt' }
    };

    this.setupEvents();
    this.draw();
  }

  createInitialBoard() {
    const b = Array(10).fill(null).map(() => Array(9).fill(null));

    // 1. QUÂN ĐEN (Black) - Ở phía trên (r: 0..3)
    const blackBack = ['xe', 'ma', 'tuong', 'si', 'soai', 'si', 'tuong', 'ma', 'xe'];
    for (let c = 0; c < 9; c++) {
      b[0][c] = { side: 'black', type: blackBack[c] };
    }
    b[2][1] = { side: 'black', type: 'phao' };
    b[2][7] = { side: 'black', type: 'phao' };
    for (let c = 0; c < 9; c += 2) {
      b[3][c] = { side: 'black', type: 'tot' };
    }

    // 2. QUÂN ĐỎ (Red) - Ở phía dưới (r: 6..9)
    const redBack = ['xe', 'ma', 'tuong', 'si', 'soai', 'si', 'tuong', 'ma', 'xe'];
    for (let c = 0; c < 9; c++) {
      b[9][c] = { side: 'red', type: redBack[c] };
    }
    b[7][1] = { side: 'red', type: 'phao' };
    b[7][7] = { side: 'red', type: 'phao' };
    for (let c = 0; c < 9; c += 2) {
      b[6][c] = { side: 'red', type: 'tot' };
    }

    return b;
  }

  setupEvents() {
    if (this.modeEl) {
      this.modeEl.addEventListener('change', (e) => {
        this.setMode(e.target.value);
      });
    }

    const handleClickOrTouch = (e) => {
      e.preventDefault();
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

      // Scale coordinates if canvas is styled with max-width: 100%
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;

      const clickX = (clientX - rect.left) * scaleX;
      const clickY = (clientY - rect.top) * scaleY;

      // Tìm giao điểm gần nhất
      const col = Math.round((clickX - this.padX) / this.stepX);
      const row = Math.round((clickY - this.padY) / this.stepY);

      if (col >= 0 && col < 9 && row >= 0 && row < 10) {
        const targetX = this.padX + col * this.stepX;
        const targetY = this.padY + row * this.stepY;
        const dist = Math.hypot(clickX - targetX, clickY - targetY);

        if (dist <= this.pieceRadius * 1.35) {
          this.handleIntersectionClick(row, col);
        }
      }
    };

    this.canvas.addEventListener('click', handleClickOrTouch);
    this.canvas.addEventListener('touchstart', handleClickOrTouch);
  }

  setMode(mode) {
    this.mode = mode;
    this.reset();
    if (mode === 'ai') {
      this.statusEl.innerHTML = '🤖 Chế độ: <strong>Đấu với Máy (Bạn cầm quân Đỏ)</strong>';
    } else {
      this.statusEl.innerHTML = '🌐 Đang chờ đối thủ Online (Bấm nút [⚡ Tự Động Ghép] hoặc Thách đấu trong Chat)...';
    }
  }

  reset() {
    this.board = this.createInitialBoard();
    this.currentTurn = 'red';
    this.selectedPiece = null;
    this.validMoves = [];
    this.lastMove = null;
    this.isOver = false;
    this.onlineRoomId = null;
    this.updateStatusUI();
    this.draw();
  }

  handleIntersectionClick(r, c) {
    if (this.isOver) return;

    if (this.mode === 'online') {
      if (!this.onlineRoomId) {
        alert('Hãy bấm [⚡ Tự Động Ghép Đối Thủ] hoặc mời bạn bè để bắt đầu ván đấu!');
        return;
      }
      if (this.currentTurn !== this.myColor) return;
    } else {
      if (this.currentTurn !== 'red') return; // Lượt máy
    }

    const clickedPiece = this.board[r][c];
    const playerSide = this.mode === 'online' ? this.myColor : 'red';

    // 1. Nước đi hợp lệ -> Đi cờ
    if (this.selectedPiece && this.validMoves.some(m => m.r === r && m.c === c)) {
      this.executeMove(this.selectedPiece, { r, c });
      return;
    }

    // 2. Chọn quân của mình
    if (clickedPiece && clickedPiece.side === playerSide) {
      this.selectedPiece = { r, c, piece: clickedPiece };
      this.validMoves = this.getValidMoves(r, c, clickedPiece);
      window.soundFX.playBeep(480, 0.04);
      this.draw();
    } else {
      // Bấm vào ô trống hoặc quân địch khi chưa chọn -> Hủy chọn
      this.selectedPiece = null;
      this.validMoves = [];
      this.draw();
    }
  }

  executeMove(from, to) {
    if (this.mode === 'online') {
      window.chatSocket.emit('xiangqi_play_move', {
        roomId: this.onlineRoomId,
        from: { r: from.r, c: from.c },
        to: { r: to.r, c: to.c }
      });
      this.selectedPiece = null;
      this.validMoves = [];
      return;
    }

    // Đấu với Máy (AI)
    const targetPiece = this.board[to.r][to.c];
    this.board[to.r][to.c] = from.piece;
    this.board[from.r][from.c] = null;
    this.lastMove = { from, to };

    this.selectedPiece = null;
    this.validMoves = [];
    window.soundFX.playChessMove();
    this.draw();

    // Kiểm tra ăn Tướng
    if (targetPiece && targetPiece.type === 'soai') {
      this.endGame('🎉 Bạn (Quân Đỏ) đã trảm Tướng, chiến thắng vang dội!');
      window.soundFX.playWin();
      return;
    }

    this.currentTurn = 'black';
    this.updateStatusUI();

    // Máy suy nghĩ và đi
    setTimeout(() => {
      if (this.isOver) return;
      this.makeAIMove();
    }, 400);
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
      this.endGame('Máy bị chiếu bí / hết nước đi! Bạn thắng! 🏆');
      return;
    }

    const pieceValues = { soai: 10000, xe: 90, phao: 45, ma: 40, tuong: 20, si: 20, tot: 15 };
    let bestScore = -Infinity;
    let candidates = [];

    for (let move of allMoves) {
      const target = this.board[move.to.r][move.to.c];
      let score = Math.random() * 4;
      if (target) score += (pieceValues[target.type] || 10) * 2;
      if (move.to.r >= 5) score += 4; // Khuyến khích tấn công qua sông

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
    this.lastMove = chosen;

    window.soundFX.playChessMove();
    this.draw();

    if (captured && captured.type === 'soai') {
      this.endGame('💀 Tướng Đỏ bị bắt! Máy đã chiến thắng!');
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
      // 1. XE (Chariot): Đi thẳng/ngang
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

      // 3. MÃ (Horse): Đi chữ nhật, cản chân mã
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
            if (side === 'red' && nr >= 5) moves.push({ r: nr, c: nc });
            if (side === 'black' && nr <= 4) moves.push({ r: nr, c: nc });
          }
        }
        break;
      }

      // 5. SĨ (Advisor): Đi chéo 1 ô trong Cung (cols 3..5, rows 0..2 hoặc 7..9)
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
        if (canLand(r + forward, c)) moves.push({ r: r + forward, c });
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

  // ================= VẼ BÀN CỜ TƯỚNG CHUẨN =================
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Mặt bàn cờ gỗ ấm áp truyền thống
    const grad = this.ctx.createLinearGradient(0, 0, this.width, this.height);
    grad.addColorStop(0, '#fde047');
    grad.addColorStop(0.5, '#facc15');
    grad.addColorStop(1, '#eab308');
    this.ctx.fillStyle = '#fef08a';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Khung viền gỗ cao cấp ngoài cùng
    this.ctx.strokeStyle = '#854d0e';
    this.ctx.lineWidth = 6;
    this.ctx.strokeRect(3, 3, this.width - 6, this.height - 6);

    this.ctx.strokeStyle = '#a16207';
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeRect(10, 10, this.width - 20, this.height - 20);

    // 2. Kẻ các đường ngang (10 hàng)
    this.ctx.strokeStyle = '#713f12';
    this.ctx.lineWidth = 1.5;

    for (let r = 0; r < 10; r++) {
      const y = this.padY + r * this.stepY;
      this.ctx.beginPath();
      this.ctx.moveTo(this.padX, y);
      this.ctx.lineTo(this.padX + 8 * this.stepX, y);
      this.ctx.stroke();
    }

    // 3. Kẻ các đường dọc (9 cột)
    // 2 đường biên chạy suốt từ trên xuống dưới
    const yTop = this.padY;
    const yBottom = this.padY + 9 * this.stepY;
    const yRiverTop = this.padY + 4 * this.stepY;
    const yRiverBottom = this.padY + 5 * this.stepY;

    // Cột 0 và Cột 8
    this.ctx.beginPath();
    this.ctx.moveTo(this.padX, yTop);
    this.ctx.lineTo(this.padX, yBottom);
    this.ctx.moveTo(this.padX + 8 * this.stepX, yTop);
    this.ctx.lineTo(this.padX + 8 * this.stepX, yBottom);
    this.ctx.stroke();

    // 7 cột bên trong: ngắt đoạn ở giữa sông (hàng 4 đến hàng 5)
    for (let c = 1; c < 8; c++) {
      const x = this.padX + c * this.stepX;
      // Nửa trên (Đen)
      this.ctx.beginPath();
      this.ctx.moveTo(x, yTop);
      this.ctx.lineTo(x, yRiverTop);
      this.ctx.stroke();

      // Nửa dưới (Đỏ)
      this.ctx.beginPath();
      this.ctx.moveTo(x, yRiverBottom);
      this.ctx.lineTo(x, yBottom);
      this.ctx.stroke();
    }

    // 4. Kẻ đường chéo Cửu Cung (Cung Tướng X)
    // Cung Đen (r: 0..2, c: 3..5)
    const x3 = this.padX + 3 * this.stepX;
    const x5 = this.padX + 5 * this.stepX;
    const y0 = this.padY;
    const y2 = this.padY + 2 * this.stepY;

    this.ctx.beginPath();
    this.ctx.moveTo(x3, y0); this.ctx.lineTo(x5, y2);
    this.ctx.moveTo(x5, y0); this.ctx.lineTo(x3, y2);
    this.ctx.stroke();

    // Cung Đỏ (r: 7..9, c: 3..5)
    const y7 = this.padY + 7 * this.stepY;
    const y9 = this.padY + 9 * this.stepY;

    this.ctx.beginPath();
    this.ctx.moveTo(x3, y7); this.ctx.lineTo(x5, y9);
    this.ctx.moveTo(x5, y7); this.ctx.lineTo(x3, y9);
    this.ctx.stroke();

    // 5. Chữ giữa sông: SỞ HÀ - HÁN GIỚI (楚河 - 漢界)
    const riverCenterY = (yRiverTop + yRiverBottom) / 2 + 6;
    this.ctx.fillStyle = '#92400e';
    this.ctx.font = 'bold 15px "Segoe UI", sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText('楚 河   (SỞ HÀ)', this.padX + 2 * this.stepX, riverCenterY);
    this.ctx.fillText('漢 界   (HÁN GIỚI)', this.padX + 6 * this.stepX, riverCenterY);

    // 6. Vẽ các góc chữ thập (Corner ticks) tại vị trí Pháo và Tốt
    this.drawCornerMarks();

    // 7. Highlight nước đi trước (Last move)
    if (this.lastMove) {
      const fromX = this.padX + this.lastMove.from.c * this.stepX;
      const fromY = this.padY + this.lastMove.from.r * this.stepY;
      const toX = this.padX + this.lastMove.to.c * this.stepX;
      const toY = this.padY + this.lastMove.to.r * this.stepY;

      this.ctx.fillStyle = 'rgba(250, 204, 21, 0.4)';
      this.ctx.beginPath(); this.ctx.arc(fromX, fromY, 12, 0, Math.PI * 2); this.ctx.fill();

      this.ctx.strokeStyle = '#eab308';
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(toX - 22, toY - 22, 44, 44);
    }

    // 8. Vẽ các quân cờ
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const piece = this.board[r][c];
        if (piece) {
          const isSelected = this.selectedPiece && this.selectedPiece.r === r && this.selectedPiece.c === c;
          this.drawPiece(r, c, piece, isSelected);
        }
      }
    }

    // 9. Vẽ gợi ý nước đi hợp lệ
    for (const m of this.validMoves) {
      const mx = this.padX + m.c * this.stepX;
      const my = this.padY + m.r * this.stepY;
      const target = this.board[m.r][m.c];

      if (target) {
        // Vòng đỏ viền quân địch có thể ăn
        this.ctx.strokeStyle = '#ef4444';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(mx, my, this.pieceRadius + 3, 0, Math.PI * 2);
        this.ctx.stroke();
      } else {
        // Chấm xanh phát sáng tại giao điểm trống
        this.ctx.fillStyle = '#10b981';
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = '#10b981';
        this.ctx.beginPath();
        this.ctx.arc(mx, my, 7, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
    }
  }

  drawPiece(r, c, piece, isSelected) {
    const x = this.padX + c * this.stepX;
    const y = this.padY + r * this.stepY;
    const radius = this.pieceRadius;
    const isRed = piece.side === 'red';

    this.ctx.save();

    // Bóng đổ quân cờ 3D
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
    this.ctx.shadowBlur = 6;
    this.ctx.shadowOffsetX = 2;
    this.ctx.shadowOffsetY = 3;

    // Mặt quân cờ gỗ ngà tròn
    const pGrad = this.ctx.createRadialGradient(x - 4, y - 4, 3, x, y, radius);
    pGrad.addColorStop(0, '#ffffff');
    pGrad.addColorStop(0.7, '#fffbeb');
    pGrad.addColorStop(1, '#fed7aa');
    this.ctx.fillStyle = pGrad;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.shadowColor = 'transparent'; // Tắt bóng đổ cho viền và chữ

    // Viền ngoài quân cờ
    this.ctx.strokeStyle = isRed ? '#dc2626' : '#1e293b';
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();

    // Vòng tròn chìm bên trong
    this.ctx.strokeStyle = isRed ? '#f87171' : '#64748b';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius - 3, 0, Math.PI * 2);
    this.ctx.stroke();

    // Chữ Hán thư pháp ở giữa
    const meta = this.pieceMeta[piece.type];
    const char = isRed ? meta.red : meta.black;

    this.ctx.fillStyle = isRed ? '#b91c1c' : '#0f172a';
    this.ctx.font = 'bold 19px "KaiTi", "STKaiti", "Microsoft YaHei", sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(char, x, y - 2);

    // Tên phụ đề tiếng Việt nhỏ bên dưới
    this.ctx.font = 'bold 8px sans-serif';
    this.ctx.fillStyle = isRed ? '#dc2626' : '#475569';
    this.ctx.fillText(meta.vn, x, y + 12);

    // Viền vàng phát sáng khi đang được chọn
    if (isSelected) {
      this.ctx.strokeStyle = '#38bdf8';
      this.ctx.lineWidth = 3.5;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = '#38bdf8';
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius + 3, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    this.ctx.restore();
  }

  drawCornerMarks() {
    const marks = [
      // Pháo (r: 2, 7, c: 1, 7)
      { r: 2, c: 1 }, { r: 2, c: 7 },
      { r: 7, c: 1 }, { r: 7, c: 7 },
      // Tốt Đen (r: 3, c: 0, 2, 4, 6, 8)
      { r: 3, c: 0, noLeft: true }, { r: 3, c: 2 }, { r: 3, c: 4 }, { r: 3, c: 6 }, { r: 3, c: 8, noRight: true },
      // Tốt Đỏ (r: 6, c: 0, 2, 4, 6, 8)
      { r: 6, c: 0, noLeft: true }, { r: 6, c: 2 }, { r: 6, c: 4 }, { r: 6, c: 6 }, { r: 6, c: 8, noRight: true }
    ];

    this.ctx.strokeStyle = '#854d0e';
    this.ctx.lineWidth = 1.2;

    for (const m of marks) {
      const cx = this.padX + m.c * this.stepX;
      const cy = this.padY + m.r * this.stepY;
      const d = 3, len = 6;

      // Góc trên trái
      if (!m.noLeft) {
        this.ctx.beginPath();
        this.ctx.moveTo(cx - d - len, cy - d); this.ctx.lineTo(cx - d, cy - d); this.ctx.lineTo(cx - d, cy - d - len);
        this.ctx.stroke();
        // Góc dưới trái
        this.ctx.beginPath();
        this.ctx.moveTo(cx - d - len, cy + d); this.ctx.lineTo(cx - d, cy + d); this.ctx.lineTo(cx - d, cy + d + len);
        this.ctx.stroke();
      }

      // Góc trên phải
      if (!m.noRight) {
        this.ctx.beginPath();
        this.ctx.moveTo(cx + d + len, cy - d); this.ctx.lineTo(cx + d, cy - d); this.ctx.lineTo(cx + d, cy - d - len);
        this.ctx.stroke();
        // Góc dưới phải
        this.ctx.beginPath();
        this.ctx.moveTo(cx + d + len, cy + d); this.ctx.lineTo(cx + d, cy + d); this.ctx.lineTo(cx + d, cy + d + len);
        this.ctx.stroke();
      }
    }
  }

  // Socket.IO Multiplayer Handlers
  onOnlineGameStart(data) {
    this.mode = 'online';
    this.modeEl.value = 'online';
    this.board = data.board;
    this.onlineRoomId = data.roomId;
    this.myColor = (window.currentUser && window.currentUser.id === data.p1.id) ? 'red' : 'black';
    this.currentTurn = data.currentTurn;
    this.isOver = false;
    this.selectedPiece = null;
    this.validMoves = [];
    this.lastMove = null;

    const opponentName = this.myColor === 'red' ? data.p2.name : data.p1.name;
    const colorLabel = this.myColor === 'red' ? 'ĐỎ' : 'ĐEN';
    this.statusEl.innerHTML = `⚔️ Đấu với <strong>${opponentName}</strong> | Bạn là <strong>${colorLabel}</strong> | Lượt: <strong>${this.currentTurn === 'red' ? 'ĐỎ' : 'ĐEN'}</strong>`;
    this.draw();
  }

  onOnlineMoveMade(data) {
    const piece = this.board[data.from.r][data.from.c];
    this.board[data.to.r][data.to.c] = piece;
    this.board[data.from.r][data.from.c] = null;
    this.lastMove = data;
    this.currentTurn = data.nextTurn;

    window.soundFX.playChessMove();
    this.draw();

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
      this.lastMove = data;
      this.draw();
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
