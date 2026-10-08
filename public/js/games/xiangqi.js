// GAME CỜ TƯỚNG & CỜ ÚP (XIANGQI & CỜ ÚP VIỆT NAM) - BẢN THÂN LUÔN NẰM Ở PHÍA DƯỚI
class XiangqiGame {
  constructor() {
    this.canvas = document.getElementById('xiangqiCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.statusEl = document.getElementById('xiangqiStatus');
    this.modeEl = document.getElementById('xiangqiModeSelect');
    this.variantEl = document.getElementById('xiangqiVariantSelect');
    this.sideSelectEl = document.getElementById('xiangqiSideSelect');

    this.turnIndicatorEl = document.getElementById('xqTurnIndicator');
    this.sideNoteEl = document.getElementById('xqSideNote');
    this.opponentTagEl = document.getElementById('xqOpponentTag');
    this.playerTagEl = document.getElementById('xqPlayerTag');

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
    this.myColor = 'red';  // 'red' (Đỏ) hoặc 'black' (Đen) -> BẢN THÂN LUÔN Ở PHÍA DƯỚI
    this.currentTurn = 'red';
    this.selectedPiece = null;
    this.validMoves = [];
    this.lastMove = null;
    this.isOver = false;
    this.onlineRoomId = null;
    this.opponentName = 'Máy AI';

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
    this.updateStatusUI();
    this.draw();
  }

  // Chuyển đổi tọa độ Bàn Cờ <-> Màn hình hiển thị
  // NGUYÊN TẮC: BẢN THÂN (myColor) LUÔN NẰM Ở PHÍA DƯỚI MÀN HÌNH
  boardToCanvas(r, c) {
    const isFlipped = this.myColor === 'black';
    const displayR = isFlipped ? 9 - r : r;
    const displayC = isFlipped ? 8 - c : c;
    return {
      x: this.padX + displayC * this.stepX,
      y: this.padY + displayR * this.stepY
    };
  }

  canvasToBoard(clickX, clickY) {
    const displayC = Math.round((clickX - this.padX) / this.stepX);
    const displayR = Math.round((clickY - this.padY) / this.stepY);
    const isFlipped = this.myColor === 'black';
    return {
      r: isFlipped ? 9 - displayR : displayR,
      c: isFlipped ? 8 - displayC : displayC,
      displayR,
      displayC
    };
  }

  createInitialBoard() {
    const b = Array(10).fill(null).map(() => Array(9).fill(null));

    if (this.variant === 'coup') {
      // ===== BÀN CỜ ÚP VIỆT NAM =====
      // Tướng (Soái) luôn luôn ngửa ở giữa Cung
      b[0][4] = { side: 'black', type: 'soai', isDown: false, slotType: 'soai' };
      b[9][4] = { side: 'red', type: 'soai', isDown: false, slotType: 'soai' };

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
        b[pos.r][pos.c] = {
          side: 'black',
          type: blackPool[idx],
          isDown: true,
          slotType: pos.slot
        };
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

    if (this.sideSelectEl) {
      this.sideSelectEl.addEventListener('change', (e) => {
        this.myColor = e.target.value;
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

      const { r, c, displayR, displayC } = this.canvasToBoard(clickX, clickY);

      if (displayC >= 0 && displayC < 9 && displayR >= 0 && displayR < 10) {
        const { x, y } = this.boardToCanvas(r, c);
        const dist = Math.hypot(clickX - x, clickY - y);

        if (dist <= this.pieceRadius * 1.35) {
          this.handleIntersectionClick(r, c);
        }
      }
    };

    this.canvas.addEventListener('click', handleClickOrTouch);
    this.canvas.addEventListener('touchstart', handleClickOrTouch);
  }

  setMode(mode) {
    this.mode = mode;
    this.reset();
  }

  reset() {
    this.board = this.createInitialBoard();
    this.currentTurn = 'red'; // ĐỎ LUÔN ĐI TRƯỚC THEO LUẬT CỜ
    this.selectedPiece = null;
    this.validMoves = [];
    this.lastMove = null;
    this.isOver = false;
    this.onlineRoomId = null;

    if (this.mode === 'ai') {
      this.opponentName = 'Máy AI';
      if (this.sideSelectEl) this.myColor = this.sideSelectEl.value;
    }

    this.updateStatusUI();
    this.draw();

    // NẾU BẠN CHỌN CẦM ĐEN (ĐI SAU) KHI ĐẤU VỚI MÁY:
    // Máy (cầm Đỏ) sẽ tự động đi nước cờ đầu tiên!
    if (this.mode === 'ai' && this.myColor === 'black') {
      setTimeout(() => {
        if (!this.isOver && this.currentTurn === 'red') {
          this.makeAIMove();
        }
      }, 500);
    }
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
      if (this.currentTurn !== this.myColor) return; // Chưa tới lượt bạn
    }

    const clickedPiece = this.board[r][c];

    // 1. Nếu ô bấm là nước đi hợp lệ -> Đi cờ
    if (this.selectedPiece && this.validMoves.some(m => m.r === r && m.c === c)) {
      this.executeMove(this.selectedPiece, { r, c });
      return;
    }

    // 2. Chọn quân cờ của mình (chỉ chọn được quân phe mình)
    if (clickedPiece && clickedPiece.side === this.myColor) {
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

    if (flipped) window.soundFX.playCoin();
    else window.soundFX.playChessMove();
    this.draw();

    if (targetPiece && targetPiece.type === 'soai') {
      this.endGame(`🎉 BẠN (${this.myColor === 'red' ? 'Quân Đỏ' : 'Quân Đen'}) ĐÃ CHIẾN THẮNG MÁY!`);
      window.soundFX.playWin();
      return;
    }

    // Đổi lượt sang máy
    this.currentTurn = this.myColor === 'red' ? 'black' : 'red';
    this.updateStatusUI();

    setTimeout(() => {
      if (this.isOver) return;
      this.makeAIMove();
    }, 450);
  }

  makeAIMove() {
    const aiColor = this.myColor === 'red' ? 'black' : 'red';
    const allMoves = [];

    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = this.board[r][c];
        if (p && p.side === aiColor) {
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
      if (move.from.piece.isDown) score += 6;

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
      this.endGame('💀 Tướng của bạn đã bị bắt! Máy chiến thắng!');
      window.soundFX.playCrash();
      return;
    }

    this.currentTurn = this.myColor;
    this.updateStatusUI();
  }

  // LUẬT DI CHUYỂN
  getValidMoves(r, c, piece) {
    const moves = [];
    const side = piece.side;

    const isInside = (nr, nc) => nr >= 0 && nr < 10 && nc >= 0 && nc < 9;
    const canLand = (nr, nc) => {
      if (!isInside(nr, nc)) return false;
      const target = this.board[nr][nc];
      return !target || target.side !== side;
    };

    const activeType = piece.isDown ? piece.slotType : piece.type;
    const isDown = piece.isDown;

    switch (activeType) {
      // XE
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

      // PHÁO
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

      // MÃ
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

      // TƯỢNG: Quân úp được qua sông
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
              moves.push({ r: nr, c: nc });
            } else {
              if (this.variant === 'standard') {
                if (side === 'red' && nr >= 5) moves.push({ r: nr, c: nc });
                if (side === 'black' && nr <= 4) moves.push({ r: nr, c: nc });
              } else {
                moves.push({ r: nr, c: nc });
              }
            }
          }
        }
        break;
      }

      // SĨ: Quân úp được ra khỏi cung
      case 'si': {
        const sMoves = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        for (let [dr, dc] of sMoves) {
          const nr = r + dr, nc = c + dc;
          if (canLand(nr, nc)) {
            if (isDown) {
              moves.push({ r: nr, c: nc });
            } else {
              if (this.variant === 'standard') {
                const inPalace = side === 'red' ? (nr >= 7 && nr <= 9 && nc >= 3 && nc <= 5) : (nr >= 0 && nr <= 2 && nc >= 3 && nc <= 5);
                if (inPalace) moves.push({ r: nr, c: nc });
              } else {
                moves.push({ r: nr, c: nc });
              }
            }
          }
        }
        break;
      }

      // TƯỚNG (SOÁI)
      case 'soai': {
        const gMoves = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let [dr, dc] of gMoves) {
          const nr = r + dr, nc = c + dc;
          const inPalace = side === 'red' ? (nr >= 7 && nr <= 9 && nc >= 3 && nc <= 5) : (nr >= 0 && nr <= 2 && nc >= 3 && nc <= 5);
          if (inPalace && canLand(nr, nc)) moves.push({ r: nr, c: nc });
        }
        break;
      }

      // TỐT
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

  // CẬP NHẬT CÁC NOTE RÕ RÀNG VỀ PHE, VỊ TRÍ VÀ LƯỢT ĐI
  updateStatusUI() {
    if (this.isOver) return;

    const isMyTurn = this.currentTurn === this.myColor;
    const isRed = this.myColor === 'red';
    const opponentSide = isRed ? 'black' : 'red';
    const vName = this.variant === 'coup' ? 'Cờ Úp' : 'Cờ Tướng';

    // 1. Tag Đối thủ (Phía TRÊN)
    if (this.opponentTagEl) {
      this.opponentTagEl.innerHTML = `
        <span>👤 Phía TRÊN: <strong>${this.opponentName}</strong></span>
        <span class="xq-badge-side ${opponentSide === 'red' ? 'xq-badge-red' : 'xq-badge-black'}">
          ${opponentSide === 'red' ? '🔴 QUÂN ĐỎ (Đi trước)' : '⚫ QUÂN ĐEN (Đi sau)'}
        </span>
      `;
    }

    // 2. Tag Người chơi bản thân (Phía DƯỚI)
    if (this.playerTagEl) {
      const myName = (window.currentUser && window.currentUser.username) || 'BẠN (Bản thân)';
      this.playerTagEl.innerHTML = `
        <span>👤 Phía DƯỚI: <strong>${myName}</strong></span>
        <span class="xq-badge-side ${isRed ? 'xq-badge-red' : 'xq-badge-black'}">
          ${isRed ? '🔴 QUÂN ĐỎ (Đi trước)' : '⚫ QUÂN ĐEN (Đi sau)'}
        </span>
      `;
    }

    // 3. Trạng thái lượt đi trung tâm
    if (this.turnIndicatorEl) {
      this.turnIndicatorEl.innerHTML = isMyTurn ? 
        `<span style="color: #10b981; font-weight: 800;">🟢 ĐẾN LƯỢT BẠN ĐI!</span>` : 
        `<span style="color: #f59e0b; font-weight: 800;">⏳ ĐANG ĐỢI ĐỐI THỦ ĐI...</span>`;
    }

    if (this.sideNoteEl) {
      this.sideNoteEl.innerHTML = `
        👉 Chế độ: <strong>${vName}</strong> • Bạn cầm <strong>${isRed ? '🔴 QUÂN ĐỎ' : '⚫ QUÂN ĐEN'}</strong> 
        (Quân của bạn luôn nằm ở <strong>PHÍA DƯỚI</strong>).
      `;
    }
  }

  endGame(msg) {
    this.isOver = true;
    if (this.turnIndicatorEl) {
      this.turnIndicatorEl.innerHTML = `<span style="color:#ef4444; font-weight:800;">🏁 VÁN CỜ KẾT THÚC</span>`;
    }
    if (this.sideNoteEl) {
      this.sideNoteEl.innerHTML = `<strong>${msg}</strong>`;
    }
  }

  // ================= VẼ BÀN CỜ =================
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Mặt bàn cờ gỗ
    this.ctx.fillStyle = '#fef08a';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Khung viền gỗ ngoài cùng
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
      const pFrom = this.boardToCanvas(this.lastMove.from.r, this.lastMove.from.c);
      const pTo = this.boardToCanvas(this.lastMove.to.r, this.lastMove.to.c);

      this.ctx.fillStyle = 'rgba(250, 204, 21, 0.4)';
      this.ctx.beginPath(); this.ctx.arc(pFrom.x, pFrom.y, 12, 0, Math.PI * 2); this.ctx.fill();

      this.ctx.strokeStyle = '#eab308';
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(pTo.x - 22, pTo.y - 22, 44, 44);
    }

    // 8. Vẽ các quân cờ (tọa độ hiển thị xoay theo góc nhìn của người chơi)
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
      const pos = this.boardToCanvas(m.r, m.c);
      const target = this.board[m.r][m.c];

      if (target) {
        this.ctx.strokeStyle = '#ef4444';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, this.pieceRadius + 3, 0, Math.PI * 2);
        this.ctx.stroke();
      } else {
        this.ctx.fillStyle = '#10b981';
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = '#10b981';
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, 7, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
    }
  }

  drawPiece(r, c, piece, isSelected) {
    const { x, y } = this.boardToCanvas(r, c);
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

      this.ctx.strokeStyle = isRed ? '#ef4444' : '#38bdf8';
      this.ctx.lineWidth = 2.5;
      this.ctx.stroke();

      this.ctx.strokeStyle = '#facc15';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius - 3.5, 0, Math.PI * 2);
      this.ctx.stroke();

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

      this.ctx.strokeStyle = isRed ? '#dc2626' : '#1e293b';
      this.ctx.lineWidth = 2.5;
      this.ctx.stroke();

      this.ctx.strokeStyle = isRed ? '#f87171' : '#64748b';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius - 3, 0, Math.PI * 2);
      this.ctx.stroke();

      const meta = this.pieceMeta[piece.type];
      const char = isRed ? meta.red : meta.black;

      this.ctx.fillStyle = isRed ? '#b91c1c' : '#0f172a';
      this.ctx.font = 'bold 19px "KaiTi", "STKaiti", "Microsoft YaHei", sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(char, x, y - 2);

      this.ctx.font = 'bold 8px sans-serif';
      this.ctx.fillStyle = isRed ? '#dc2626' : '#475569';
      this.ctx.fillText(meta.vn, x, y + 12);
    }

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
      const pos = this.boardToCanvas(m.r, m.c);
      const cx = pos.x;
      const cy = pos.y;
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
    this.opponentName = this.myColor === 'red' ? data.p2.name : data.p1.name;
    this.isOver = false;
    this.selectedPiece = null;
    this.validMoves = [];
    this.lastMove = null;

    this.updateStatusUI();
    this.draw();
  }

  onOnlineMoveMade(data) {
    const movedPiece = data.piece || this.board[data.from.r][data.from.c];
    this.board[data.to.r][data.to.c] = movedPiece;
    this.board[data.from.r][data.from.c] = null;
    this.lastMove = data;
    this.currentTurn = data.nextTurn;

    window.soundFX.playChessMove();
    this.updateStatusUI();
    this.draw();
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
      this.endGame('🏆 BẠN ĐÃ CHIẾN THẮNG VÁN CỜ! 🎉');
      window.soundFX.playWin();
    } else {
      this.endGame(`💀 ${data.winnerName} đã trảm Tướng chiến thắng!`);
      window.soundFX.playCrash();
    }
  }
}

window.XiangqiGame = XiangqiGame;
