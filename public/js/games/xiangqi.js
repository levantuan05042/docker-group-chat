// GAME CỜ TƯỚNG & CỜ ÚP (XIANGQI & CỜ ÚP VIỆT NAM) - CANVAS 100% CHÍNH XÁC
class XiangqiGame {
  constructor() {
    this.canvas = document.getElementById('xiangqiCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.statusEl = document.getElementById('xiangqiStatus');
    this.modeEl = document.getElementById('xiangqiModeSelect');
    this.variantEl = document.getElementById('xiangqiVariantSelect');

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.rows = 10;
    this.cols = 9;
    this.padX = 35;
    this.padY = 32;
    this.stepX = (this.width - this.padX * 2) / 8;  // 48.75px
    this.stepY = (this.height - this.padY * 2) / 9; // 49.55px
    this.pieceRadius = 20;

    this.variant = 'coup'; // 'coup' (Cờ Úp) hoặc 'standard' (Cờ Tướng truyền thống)
    this.mode = 'ai';      // 'ai' hoặc 'online'
    this.myColor = 'red';  // 'red' (Đỏ) hoặc 'black' (Đen)
    this.currentTurn = 'red';
    this.selectedPiece = null;
    this.validMoves = [];
    this.lastMove = null;
    this.isOver = false;
    this.onlineRoomId = null;

    this.board = this.createInitialBoard();

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

    if (this.variant === 'coup') {
      // ===== BÀN CỜ ÚP VIỆT NAM =====
      // 1. Tướng (Soái) luôn luôn ngửa ở giữa Cung
      b[0][4] = { side: 'black', type: 'soai', isDown: false, slotType: 'soai' };
      b[9][4] = { side: 'red', type: 'soai', isDown: false, slotType: 'soai' };

      // 15 quân còn lại của mỗi bên
      const pool = ['xe', 'xe', 'ma', 'ma', 'tuong', 'tuong', 'si', 'si', 'phao', 'phao', 'tot', 'tot', 'tot', 'tot', 'tot'];
      const shuffle = (arr) => {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      };

      const blackPool = shuffle(pool);
      const redPool = shuffle(pool);

      const slots = [
        { r: 0, c: 0, slot: 'xe' }, { r: 0, c: 1, slot: 'ma' }, { r: 0, c: 2, slot: 'tuong' }, { r: 0, c: 3, slot: 'si' },
        { r: 0, c: 5, slot: 'si' }, { r: 0, c: 6, slot: 'tuong' }, { r: 0, c: 7, slot: 'ma' }, { r: 0, c: 8, slot: 'xe' },
        { r: 2, c: 1, slot: 'phao' }, { r: 2, c: 7, slot: 'phao' },
        { r: 3, c: 0, slot: 'tot' }, { r: 3, c: 2, slot: 'tot' }, { r: 3, c: 4, slot: 'tot' }, { r: 3, c: 6, slot: 'tot' }, { r: 3, c: 8, slot: 'tot' }
      ];

      slots.forEach((pos, idx) => {
        // Đen
        b[pos.r][pos.c] = {
          side: 'black',
          type: blackPool[idx],
          isDown: true,
          slotType: pos.slot
        };
        // Đỏ
        const redR = 9 - pos.r;
        b[redR][pos.c] = {
          side: 'red',
          type: redPool[idx],
          isDown: true,
          slotType: pos.slot
        };
      });

    } else {
      // ===== BÀN CỜ TƯỚNG TRUYỀN THỐNG (NGỬA TOÀN BỘ) =====
      const blackBack = ['xe', 'ma', 'tuong', 'si', 'soai', 'si', 'tuong', 'ma', 'xe'];
      for (let c = 0; c < 9; c++) {
        b[0][c] = { side: 'black', type: blackBack[c], isDown: false, slotType: blackBack[c] };
      }
      b[2][1] = { side: 'black', type: 'phao', isDown: false, slotType: 'phao' };
      b[2][7] = { side: 'black', type: 'phao', isDown: false, slotType: 'phao' };
      for (let c = 0; c < 9; c += 2) {
        b[3][c] = { side: 'black', type: 'tot', isDown: false, slotType: 'tot' };
      }

      const redBack = ['xe', 'ma', 'tuong', 'si', 'soai', 'si', 'tuong', 'ma', 'xe'];
      for (let c = 0; c < 9; c++) {
        b[9][c] = { side: 'red', type: redBack[c], isDown: false, slotType: redBack[c] };
      }
      b[7][1] = { side: 'red', type: 'phao', isDown: false, slotType: 'phao' };
      b[7][7] = { side: 'red', type: 'phao', isDown: false, slotType: 'phao' };
      for (let c = 0; c < 9; c += 2) {
        b[6][c] = { side: 'red', type: 'tot', isDown: false, slotType: 'tot' };
      }
    }

    return b;
  }

  setupEvents() {
    if (this.modeEl) {
      this.modeEl.addEventListener('change', (e) => {
        this.setMode(e.target.value);
      });
    }

    if (this.variantEl) {
      this.variantEl.addEventListener('change', (e) => {
        this.variant = e.target.value;
        this.reset();
      });
    }

    const handleClickOrTouch = (e) => {
      e.preventDefault();
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;

      const clickX = (clientX - rect.left) * scaleX;
      const clickY = (clientY - rect.top) * scaleY;

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
    const vName = this.variant === 'coup' ? 'Cờ Úp' : 'Cờ Tướng';
    if (mode === 'ai') {
      this.statusEl.innerHTML = `🤖 Chế độ: <strong>${vName} - Đấu với Máy (Bạn cầm quân Đỏ)</strong>`;
    } else {
      this.statusEl.innerHTML = `🌐 Đang chờ đối thủ Online chơi <strong>${vName}</strong>...`;
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

    // 1. Nếu ô bấm là nước đi hợp lệ -> Đi cờ
    if (this.selectedPiece && this.validMoves.some(m => m.r === r && m.c === c)) {
      this.executeMove(this.selectedPiece, { r, c });
      return;
    }

    // 2. Chọn quân cờ của mình
    if (clickedPiece && clickedPiece.side === playerSide) {
      this.selectedPiece = { r, c, piece: clickedPiece };
      this.validMoves = this.getValidMoves(r, c, clickedPiece);
      window.soundFX.playBeep(480, 0.04);
      this.draw();
    } else {
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
    const movingPiece = from.piece;
    const targetPiece = this.board[to.r][to.c];

    // LẬT QUÂN ÚP NẾU CÒN ĐANG ÚP!
    let flipped = false;
    if (movingPiece.isDown) {
      movingPiece.isDown = false;
      flipped = true;
    }

    this.board[to.r][to.c] = movingPiece;
    this.board[from.r][from.c] = null;
    this.lastMove = { from, to };

    this.selectedPiece = null;
    this.validMoves = [];

    if (flipped) {
      window.soundFX.playCoin(); // Âm thanh vui tai khi mở được quân bí ẩn
    } else {
      window.soundFX.playChessMove();
    }
    this.draw();

    // Bắt Tướng
    if (targetPiece && targetPiece.type === 'soai') {
      this.endGame('🎉 Bạn (Quân Đỏ) đã trảm Tướng, chiến thắng ngoạn mục!');
      window.soundFX.playWin();
      return;
    }

    this.currentTurn = 'black';
    this.updateStatusUI();

    // Máy suy nghĩ và đi
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
      this.endGame('Máy bị chiếu bí / hết nước đi! Bạn thắng! 🏆');
      return;
    }

    const pieceValues = { soai: 10000, xe: 90, phao: 45, ma: 40, tuong: 20, si: 20, tot: 15 };
    let bestScore = -Infinity;
    let candidates = [];

    for (let move of allMoves) {
      const target = this.board[move.to.r][move.to.c];
      let score = Math.random() * 4;
      if (target) {
        const val = target.isDown ? 30 : (pieceValues[target.type] || 15);
        score += val * 2;
      }
      // Ưu tiên mở quân úp sớm
      if (move.from.piece.isDown) score += 6;
      if (move.to.r >= 5) score += 4;

      if (score > bestScore) {
        bestScore = score;
        candidates = [move];
      } else if (score === bestScore) {
        candidates.push(move);
      }
    }

    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    const movingPiece = chosen.from.piece;
    const captured = this.board[chosen.to.r][chosen.to.c];

    let flipped = false;
    if (movingPiece.isDown) {
      movingPiece.isDown = false;
      flipped = true;
    }

    this.board[chosen.to.r][chosen.to.c] = movingPiece;
    this.board[chosen.from.r][chosen.from.c] = null;
    this.lastMove = chosen;

    if (flipped) window.soundFX.playCoin();
    else window.soundFX.playChessMove();
    this.draw();

    if (captured && captured.type === 'soai') {
      this.endGame('💀 Tướng Đỏ bị bắt! Máy đã chiến thắng!');
      window.soundFX.playCrash();
      return;
    }

    this.currentTurn = 'red';
    this.updateStatusUI();
  }

  // LUẬT DI CHUYỂN CỦA CỜ TƯỚNG & CỜ ÚP
  getValidMoves(r, c, piece) {
    const moves = [];
    const side = piece.side;

    const isInside = (nr, nc) => nr >= 0 && nr < 10 && nc >= 0 && nc < 9;
    const canLand = (nr, nc) => {
      if (!isInside(nr, nc)) return false;
      const target = this.board[nr][nc];
      return !target || target.side !== side;
    };

    // NẾU QUÂN ĐANG ÚP: Đi theo slotType (vị trí xuất phát)
    // NẾU ĐÃ MỞ: Đi theo type thật
    const activeType = piece.isDown ? piece.slotType : piece.type;
    const isDown = piece.isDown;

    switch (activeType) {
      // 1. XE: Đi thẳng ngang
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

      // 2. PHÁO: Đi thẳng không ăn quân, ăn nhảy qua 1 quân
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

      // 3. MÃ: Đi chữ nhật, cản chân mã
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

      // 4. TƯỢNG: Đi chéo 2 ô, cản mắt tượng
      // ĐẶC BIỆT CỜ ÚP: Quân Úp ở vị trí Tượng ĐƯỢC PHÉP QUA SÔNG!
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
            if (isDown) {
              // Quân úp được qua sông
              moves.push({ r: nr, c: nc });
            } else {
              // Quân ngửa thật: nếu là cờ chuẩn thì không qua sông
              if (this.variant === 'standard') {
                if (side === 'red' && nr >= 5) moves.push({ r: nr, c: nc });
                if (side === 'black' && nr <= 4) moves.push({ r: nr, c: nc });
              } else {
                // Trong cờ úp, tượng đã mở có thể đi khắp bàn cờ
                moves.push({ r: nr, c: nc });
              }
            }
          }
        }
        break;
      }

      // 5. SĨ: Đi chéo 1 ô
      // ĐẶC BIỆT CỜ ÚP: Quân Úp ở vị trí Sĩ ĐƯỢC PHÉP RA KHỎI CUNG!
      case 'si': {
        const sMoves = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        for (let [dr, dc] of sMoves) {
          const nr = r + dr, nc = c + dc;
          if (canLand(nr, nc)) {
            if (isDown) {
              // Quân úp được tự do ra khỏi cung
              moves.push({ r: nr, c: nc });
            } else {
              if (this.variant === 'standard') {
                // Cờ tướng chuẩn: chỉ đi trong cung
                const inPalace = side === 'red' ? (nr >= 7 && nr <= 9 && nc >= 3 && nc <= 5) : (nr >= 0 && nr <= 2 && nc >= 3 && nc <= 5);
                if (inPalace) moves.push({ r: nr, c: nc });
              } else {
                // Cờ úp: Sĩ đã mở được đi chéo khắp nơi
                moves.push({ r: nr, c: nc });
              }
            }
          }
        }
        break;
      }

      // 6. TƯỚNG (SOÁI): Đi thẳng 1 ô trong cung
      case 'soai': {
        const gMoves = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let [dr, dc] of gMoves) {
          const nr = r + dr, nc = c + dc;
          const inPalace = side === 'red' ? (nr >= 7 && nr <= 9 && nc >= 3 && nc <= 5) : (nr >= 0 && nr <= 2 && nc >= 3 && nc <= 5);
          if (inPalace && canLand(nr, nc)) moves.push({ r: nr, c: nc });
        }
        break;
      }

      // 7. TỐT: Chưa qua sông đi thẳng, qua sông đi thẳng và ngang
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
    const vName = this.variant === 'coup' ? 'Cờ Úp' : 'Cờ Tướng';
    if (this.mode === 'ai') {
      const isMyTurn = this.currentTurn === 'red';
      this.statusEl.innerHTML = isMyTurn ? 
        `🎯 [${vName}] Lượt của bạn (Quân Đỏ)` : 
        `⏳ [${vName}] Máy đang suy nghĩ (Quân Đen)...`;
    }
  }

  endGame(msg) {
    this.isOver = true;
    this.statusEl.innerHTML = `<strong>${msg}</strong>`;
  }

  // ================= VẼ BÀN CỜ =================
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Mặt bàn cờ gỗ ấm
    this.ctx.fillStyle = '#fef08a';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Viền gỗ ngoài cùng
    this.ctx.strokeStyle = '#854d0e';
    this.ctx.lineWidth = 6;
    this.ctx.strokeRect(3, 3, this.width - 6, this.height - 6);

    this.ctx.strokeStyle = '#a16207';
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeRect(10, 10, this.width - 20, this.height - 20);

    // 2. Kẻ đường ngang (10 hàng)
    this.ctx.strokeStyle = '#713f12';
    this.ctx.lineWidth = 1.5;
    for (let r = 0; r < 10; r++) {
      const y = this.padY + r * this.stepY;
      this.ctx.beginPath();
      this.ctx.moveTo(this.padX, y);
      this.ctx.lineTo(this.padX + 8 * this.stepX, y);
      this.ctx.stroke();
    }

    // 3. Kẻ đường dọc (9 cột)
    const yTop = this.padY;
    const yBottom = this.padY + 9 * this.stepY;
    const yRiverTop = this.padY + 4 * this.stepY;
    const yRiverBottom = this.padY + 5 * this.stepY;

    // Biên 2 bên
    this.ctx.beginPath();
    this.ctx.moveTo(this.padX, yTop); this.ctx.lineTo(this.padX, yBottom);
    this.ctx.moveTo(this.padX + 8 * this.stepX, yTop); this.ctx.lineTo(this.padX + 8 * this.stepX, yBottom);
    this.ctx.stroke();

    // 7 đường dọc trong ngắt ở sông
    for (let c = 1; c < 8; c++) {
      const x = this.padX + c * this.stepX;
      this.ctx.beginPath();
      this.ctx.moveTo(x, yTop); this.ctx.lineTo(x, yRiverTop);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(x, yRiverBottom); this.ctx.lineTo(x, yBottom);
      this.ctx.stroke();
    }

    // 4. Kẻ đường chéo Cửu Cung
    const x3 = this.padX + 3 * this.stepX;
    const x5 = this.padX + 5 * this.stepX;
    const y0 = this.padY;
    const y2 = this.padY + 2 * this.stepY;
    const y7 = this.padY + 7 * this.stepY;
    const y9 = this.padY + 9 * this.stepY;

    this.ctx.beginPath();
    this.ctx.moveTo(x3, y0); this.ctx.lineTo(x5, y2);
    this.ctx.moveTo(x5, y0); this.ctx.lineTo(x3, y2);
    this.ctx.moveTo(x3, y7); this.ctx.lineTo(x5, y9);
    this.ctx.moveTo(x5, y7); this.ctx.lineTo(x3, y9);
    this.ctx.stroke();

    // 5. Chữ giữa sông
    const riverCenterY = (yRiverTop + yRiverBottom) / 2 + 5;
    this.ctx.fillStyle = '#92400e';
    this.ctx.font = 'bold 15px "Segoe UI", sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    const tag = this.variant === 'coup' ? '🎴 CỜ ÚP VN' : 'SỞ HÀ - HÁN GIỚI';
    this.ctx.fillText(`楚 河  (${tag})`, this.padX + 2 * this.stepX, riverCenterY);
    this.ctx.fillText('漢 界  (HÁN GIỚI)', this.padX + 6 * this.stepX, riverCenterY);

    // 6. Dấu góc chữ thập
    this.drawCornerMarks();

    // 7. Highlight nước đi trước
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

    // 9. Gợi ý nước đi
    for (const m of this.validMoves) {
      const mx = this.padX + m.c * this.stepX;
      const my = this.padY + m.r * this.stepY;
      const target = this.board[m.r][m.c];

      if (target) {
        this.ctx.strokeStyle = '#ef4444';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(mx, my, this.pieceRadius + 3, 0, Math.PI * 2);
        this.ctx.stroke();
      } else {
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
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
    this.ctx.shadowBlur = 6;
    this.ctx.shadowOffsetX = 2;
    this.ctx.shadowOffsetY = 3;

    if (piece.isDown) {
      // ===== VẼ NẮP CỜ ÚP BÍ ẨN =====
      const cupGrad = this.ctx.createRadialGradient(x - 4, y - 4, 2, x, y, radius);
      cupGrad.addColorStop(0, '#78350f');
      cupGrad.addColorStop(0.6, '#451a03');
      cupGrad.addColorStop(1, '#1c0d02');
      this.ctx.fillStyle = cupGrad;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.shadowColor = 'transparent';

      // Viền phe Đỏ / Đen
      this.ctx.strokeStyle = isRed ? '#ef4444' : '#38bdf8';
      this.ctx.lineWidth = 2.5;
      this.ctx.stroke();

      // Vòng tròn vàng kim loại bên trong
      this.ctx.strokeStyle = '#facc15';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius - 3.5, 0, Math.PI * 2);
      this.ctx.stroke();

      // Chữ "ÚP" phong cách cổ điển
      this.ctx.fillStyle = '#fef08a';
      this.ctx.font = 'bold 15px "Segoe UI", sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText('ÚP', x, y);

    } else {
      // ===== VẼ QUÂN CỜ NGỬA THẬT =====
      const pGrad = this.ctx.createRadialGradient(x - 4, y - 4, 3, x, y, radius);
      pGrad.addColorStop(0, '#ffffff');
      pGrad.addColorStop(0.7, '#fffbeb');
      pGrad.addColorStop(1, '#fed7aa');
      this.ctx.fillStyle = pGrad;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.shadowColor = 'transparent';

      // Viền quân cờ
      this.ctx.strokeStyle = isRed ? '#dc2626' : '#1e293b';
      this.ctx.lineWidth = 2.5;
      this.ctx.stroke();

      this.ctx.strokeStyle = isRed ? '#f87171' : '#64748b';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius - 3, 0, Math.PI * 2);
      this.ctx.stroke();

      // Chữ Hán
      const meta = this.pieceMeta[piece.type];
      const char = isRed ? meta.red : meta.black;

      this.ctx.fillStyle = isRed ? '#b91c1c' : '#0f172a';
      this.ctx.font = 'bold 19px "KaiTi", "STKaiti", "Microsoft YaHei", sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(char, x, y - 2);

      // Phụ đề tiếng Việt
      this.ctx.font = 'bold 8px sans-serif';
      this.ctx.fillStyle = isRed ? '#dc2626' : '#475569';
      this.ctx.fillText(meta.vn, x, y + 12);
    }

    // Viền phát sáng khi chọn
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
      { r: 2, c: 1 }, { r: 2, c: 7 },
      { r: 7, c: 1 }, { r: 7, c: 7 },
      { r: 3, c: 0, noLeft: true }, { r: 3, c: 2 }, { r: 3, c: 4 }, { r: 3, c: 6 }, { r: 3, c: 8, noRight: true },
      { r: 6, c: 0, noLeft: true }, { r: 6, c: 2 }, { r: 6, c: 4 }, { r: 6, c: 6 }, { r: 6, c: 8, noRight: true }
    ];

    this.ctx.strokeStyle = '#854d0e';
    this.ctx.lineWidth = 1.2;

    for (const m of marks) {
      const cx = this.padX + m.c * this.stepX;
      const cy = this.padY + m.r * this.stepY;
      const d = 3, len = 6;

      if (!m.noLeft) {
        this.ctx.beginPath();
        this.ctx.moveTo(cx - d - len, cy - d); this.ctx.lineTo(cx - d, cy - d); this.ctx.lineTo(cx - d, cy - d - len);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(cx - d - len, cy + d); this.ctx.lineTo(cx - d, cy + d); this.ctx.lineTo(cx - d, cy + d + len);
        this.ctx.stroke();
      }

      if (!m.noRight) {
        this.ctx.beginPath();
        this.ctx.moveTo(cx + d + len, cy - d); this.ctx.lineTo(cx + d, cy - d); this.ctx.lineTo(cx + d, cy - d - len);
        this.ctx.stroke();
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
    this.variant = data.variant || 'coup';
    if (this.variantEl) this.variantEl.value = this.variant;

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
    const vName = this.variant === 'coup' ? 'Cờ Úp' : 'Cờ Tướng';
    this.statusEl.innerHTML = `⚔️ [${vName}] Đấu với <strong>${opponentName}</strong> | Bạn là <strong>${colorLabel}</strong> | Lượt: <strong>${this.currentTurn === 'red' ? 'ĐỎ' : 'ĐEN'}</strong>`;
    this.draw();
  }

  onOnlineMoveMade(data) {
    const movedPiece = data.piece || this.board[data.from.r][data.from.c];
    this.board[data.to.r][data.to.c] = movedPiece;
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
    if (data.from && data.to && data.piece) {
      this.board[data.to.r][data.to.c] = data.piece;
      this.board[data.from.r][data.from.c] = null;
      this.lastMove = data;
      this.draw();
    }

    const isWinner = data.winner === this.myColor;
    if (isWinner) {
      this.statusEl.innerHTML = `🏆 <strong>BẠN ĐÃ CHIẾN THẮNG TRẬN CỜ!</strong> 🎉`;
      window.soundFX.playWin();
    } else {
      this.statusEl.innerHTML = `💀 <strong>${data.winnerName} đã trảm Tướng chiến thắng!</strong>`;
      window.soundFX.playCrash();
    }
  }
}

window.XiangqiGame = XiangqiGame;
