// =========================================================================
// ZEN MINI-GAMES & SPIRITUAL RITUALS ENGINE
// 1. Kỳ Đài Cờ Tướng Chánh Niệm (Authentic Xiangqi AI & Multiplayer PvP)
// 2. Hồ Sen Phóng Sinh (Fish Release & Floating Lanterns)
// 3. Trà Đạo Chánh Niệm (Tea Ceremony)
// =========================================================================

export const PIECE_INFO = {
  red: {
    k: { char: '帥', sub: 'Tướng', val: 10000 },
    a: { char: '仕', sub: 'Sĩ', val: 200 },
    e: { char: '相', sub: 'Tượng', val: 220 },
    h: { char: '傌', sub: 'Mã', val: 400 },
    r: { char: '俥', sub: 'Xe', val: 900 },
    c: { char: '炮', sub: 'Pháo', val: 450 },
    p: { char: '兵', sub: 'Binh', val: 100 }
  },
  black: {
    k: { char: '將', sub: 'Tướng', val: 10000 },
    a: { char: '士', sub: 'Sĩ', val: 200 },
    e: { char: '象', sub: 'Tượng', val: 220 },
    h: { char: '馬', sub: 'Mã', val: 400 },
    r: { char: '車', sub: 'Xe', val: 900 },
    c: { char: '砲', sub: 'Pháo', val: 450 },
    p: { char: '卒', sub: 'Tốt', val: 100 }
  }
};

export class ZenGames {
  constructor(app) {
    this.app = app;
    this.socket = app.socket;

    // Xiangqi State (10 rows x 9 columns)
    this.board = this.createInitialBoard();
    this.currentTurn = 'red'; // Red goes first
    this.mySide = 'red';      // 'red' | 'black'
    this.gameMode = 'ai';     // 'ai' | 'pvp'
    this.aiDifficulty = 'easy'; // 'easy' | 'med' | 'hard'
    this.isGameOver = false;

    // Selection & Moves
    this.selectedSquare = null; // { r, c }
    this.validMoves = [];       // array of { r, c }
    this.lastMove = null;       // { from: {r, c}, to: {r, c} }
    this.moveHistory = [];
    this.capturedPieces = { red: [], black: [] };

    // Multiplayer PvP State
    this.activeOpponentId = null;
    this.activeOpponentName = 'Thiền Sư AI';
    this.pendingInviteFrom = null;

    // Timer
    this.turnTimer = null;
    this.timeLeft = 60;

    // Fish Release State
    this.selectedCreature = 'carp';

    this.initDOM();
  }

  // =========================================================================
  // 1. KHỞI TẠO BÀN CỜ VÀ GIAO DIỆN
  // =========================================================================
  createInitialBoard() {
    const b = Array(10).fill(null).map(() => Array(9).fill(null));

    // Quân Đen (Black - Hàng 0 đến 3)
    b[0][0] = { type: 'r', color: 'black' };
    b[0][1] = { type: 'h', color: 'black' };
    b[0][2] = { type: 'e', color: 'black' };
    b[0][3] = { type: 'a', color: 'black' };
    b[0][4] = { type: 'k', color: 'black' };
    b[0][5] = { type: 'a', color: 'black' };
    b[0][6] = { type: 'e', color: 'black' };
    b[0][7] = { type: 'h', color: 'black' };
    b[0][8] = { type: 'r', color: 'black' };

    b[2][1] = { type: 'c', color: 'black' };
    b[2][7] = { type: 'c', color: 'black' };

    b[3][0] = { type: 'p', color: 'black' };
    b[3][2] = { type: 'p', color: 'black' };
    b[3][4] = { type: 'p', color: 'black' };
    b[3][6] = { type: 'p', color: 'black' };
    b[3][8] = { type: 'p', color: 'black' };

    // Quân Đỏ (Red - Hàng 6 đến 9)
    b[6][0] = { type: 'p', color: 'red' };
    b[6][2] = { type: 'p', color: 'red' };
    b[6][4] = { type: 'p', color: 'red' };
    b[6][6] = { type: 'p', color: 'red' };
    b[6][8] = { type: 'p', color: 'red' };

    b[7][1] = { type: 'c', color: 'red' };
    b[7][7] = { type: 'c', color: 'red' };

    b[9][0] = { type: 'r', color: 'red' };
    b[9][1] = { type: 'h', color: 'red' };
    b[9][2] = { type: 'e', color: 'red' };
    b[9][3] = { type: 'a', color: 'red' };
    b[9][4] = { type: 'k', color: 'red' };
    b[9][5] = { type: 'a', color: 'red' };
    b[9][6] = { type: 'e', color: 'red' };
    b[9][7] = { type: 'h', color: 'red' };
    b[9][8] = { type: 'r', color: 'red' };

    return b;
  }

  initDOM() {
    this.buildXiangqiBoard();
    this.setupChessEvents();
    this.setupFishEvents();
    this.setupSocketEvents();
    this.renderBoard();
  }

  buildXiangqiBoard() {
    const gridEl = document.getElementById('chess-board-grid');
    if (!gridEl) return;
    gridEl.innerHTML = '';

    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const cell = document.createElement('div');
        cell.className = 'xiangqi-cell';
        cell.dataset.row = r;
        cell.dataset.col = c;

        // Dòng sông giữa hàng 4 và 5
        if (r === 4 || r === 5) {
          if (c === 0 || c === 8) {
            cell.classList.add('river-edge');
          } else {
            cell.classList.add('river-cell');
          }
        }

        // Cung Tướng Đen (Black Palace: r 0..2, c 3..5)
        if (r === 0 && c === 3) cell.classList.add('diag-tl-br');
        if (r === 0 && c === 5) cell.classList.add('diag-tr-bl');
        if (r === 1 && c === 4) cell.classList.add('palace-center');
        if (r === 2 && c === 3) cell.classList.add('diag-tr-bl');
        if (r === 2 && c === 5) cell.classList.add('diag-tl-br');

        // Cung Tướng Đỏ (Red Palace: r 7..9, c 3..5)
        if (r === 7 && c === 3) cell.classList.add('diag-tl-br');
        if (r === 7 && c === 5) cell.classList.add('diag-tr-bl');
        if (r === 8 && c === 4) cell.classList.add('palace-center');
        if (r === 9 && c === 3) cell.classList.add('diag-tr-bl');
        if (r === 9 && c === 5) cell.classList.add('diag-tl-br');

        cell.addEventListener('click', () => this.handleCellClick(r, c));
        gridEl.appendChild(cell);
      }
    }
  }

  setupChessEvents() {
    // Mode tabs
    const tabAi = document.getElementById('tab-chess-ai');
    const tabPvp = document.getElementById('tab-chess-pvp');
    const secAi = document.getElementById('section-chess-ai');
    const secPvp = document.getElementById('section-chess-pvp');

    tabAi?.addEventListener('click', () => {
      tabAi.classList.add('active');
      tabPvp?.classList.remove('active');
      if (secAi) secAi.style.display = 'block';
      if (secPvp) secPvp.style.display = 'none';
      this.gameMode = 'ai';
      this.activeOpponentName = 'Thiền Sư AI';
      this.resetChessGame();
    });

    tabPvp?.addEventListener('click', () => {
      tabPvp.classList.add('active');
      tabAi?.classList.remove('active');
      if (secAi) secAi.style.display = 'none';
      if (secPvp) secPvp.style.display = 'block';
      this.gameMode = 'pvp';
      this.refreshOnlinePlayersList();
    });

    // Side Selector (Đỏ / Đen)
    const btnSideRed = document.getElementById('side-btn-red');
    const btnSideBlack = document.getElementById('side-btn-black');

    btnSideRed?.addEventListener('click', () => {
      btnSideRed.classList.add('active');
      btnSideBlack?.classList.remove('active');
      this.mySide = 'red';
      this.resetChessGame();
    });

    btnSideBlack?.addEventListener('click', () => {
      btnSideBlack.classList.add('active');
      btnSideRed?.classList.remove('active');
      this.mySide = 'black';
      this.resetChessGame();
    });

    // AI Difficulty buttons
    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.aiDifficulty = btn.dataset.diff || 'easy';
        this.app.showToast(`Đã chọn cấp độ Thiền Sư: ${btn.textContent.trim()}`);
      });
    });

    // Tool buttons
    document.getElementById('btn-chess-reset')?.addEventListener('click', () => this.resetChessGame());
    document.getElementById('btn-chess-undo')?.addEventListener('click', () => this.undoMove());
    document.getElementById('btn-chess-hint')?.addEventListener('click', () => this.showHint());
    document.getElementById('btn-close-chess')?.addEventListener('click', () => this.closeChessModal());

    // PvP controls
    document.getElementById('btn-chess-resign')?.addEventListener('click', () => this.resignGame());
    document.getElementById('btn-chess-draw')?.addEventListener('click', () => this.requestDraw());

    // Invite response buttons
    document.getElementById('btn-accept-chess')?.addEventListener('click', () => {
      if (this.pendingInviteFrom && this.socket) {
        this.socket.emit('chessRespondInvite', { inviterId: this.pendingInviteFrom.id, accept: true });
        this.startPvPMatch(this.pendingInviteFrom.id, this.pendingInviteFrom.name, 'black'); // Inviter is Red, you are Black
        this.pendingInviteFrom = null;
        document.getElementById('chess-invite-modal').style.display = 'none';
      }
    });

    document.getElementById('btn-decline-chess')?.addEventListener('click', () => {
      if (this.pendingInviteFrom && this.socket) {
        this.socket.emit('chessRespondInvite', { inviterId: this.pendingInviteFrom.id, accept: false });
        this.pendingInviteFrom = null;
        document.getElementById('chess-invite-modal').style.display = 'none';
      }
    });
  }

  openChessModal() {
    const modal = document.getElementById('chess-modal');
    if (!modal) return;
    modal.style.display = 'flex';

    if (this.app.controller && this.app.temple) {
      const st = this.app.temple.interactiveStations.chess;
      this.app.controller.runToTarget(st.x, st.z, st.rotY);
    }

    if (this.gameMode === 'ai' && this.moveHistory.length === 0) {
      this.resetChessGame();
    } else if (this.gameMode === 'pvp') {
      this.refreshOnlinePlayersList();
    }
  }

  closeChessModal() {
    const modal = document.getElementById('chess-modal');
    if (modal) modal.style.display = 'none';
    this.stopTurnTimer();
  }

  resetChessGame() {
    this.board = this.createInitialBoard();
    this.currentTurn = 'red'; // Luôn luôn Đỏ đi tiên
    this.isGameOver = false;
    this.selectedSquare = null;
    this.validMoves = [];
    this.lastMove = null;
    this.moveHistory = [];
    this.capturedPieces = { red: [], black: [] };

    const hintBox = document.getElementById('chess-hint-box');
    if (hintBox) hintBox.style.display = 'none';

    const alertBanner = document.getElementById('chess-alert-banner');
    if (alertBanner) alertBanner.style.display = 'none';

    this.renderBoard();
    this.renderCapturedTray();
    this.updateStatusBar();
    this.startTurnTimer();

    // Nếu người chơi chọn cầm quân Đen ở chế độ AI, Thiền Sư (Đỏ) sẽ đi nước đầu tiên!
    if (this.gameMode === 'ai' && this.mySide === 'black') {
      setTimeout(() => this.makeAiMove(), 600);
    }
  }

  startTurnTimer() {
    this.stopTurnTimer();
    this.timeLeft = 60;
    const timerEl = document.getElementById('chess-timer');
    if (timerEl) timerEl.textContent = `${this.timeLeft}s`;

    this.turnTimer = setInterval(() => {
      this.timeLeft--;
      if (timerEl) timerEl.textContent = `${this.timeLeft}s`;

      if (this.timeLeft <= 0) {
        this.stopTurnTimer();
        if (this.gameMode === 'ai' && this.currentTurn === this.mySide) {
          this.app.showToast('Hết thời gian lượt đi! Thiền Sư đi giúp bạn 1 nước chánh niệm.');
          this.makeAiMove();
        }
      }
    }, 1000);
  }

  stopTurnTimer() {
    if (this.turnTimer) {
      clearInterval(this.turnTimer);
      this.turnTimer = null;
    }
  }

  // =========================================================================
  // 2. LUẬT CỜ TƯỚNG CHUẨN XÁC & TÍNH TOÁN NƯỚC ĐI
  // =========================================================================
  inBounds(r, c) {
    return r >= 0 && r < 10 && c >= 0 && c < 9;
  }

  inPalace(r, c, color) {
    if (color === 'red') {
      return r >= 7 && r <= 9 && c >= 3 && c <= 5;
    } else {
      return r >= 0 && r <= 2 && c >= 3 && c <= 5;
    }
  }

  // Lấy toàn bộ nước đi hợp lệ (đã lọc nước đi làm hở tướng / tự sát)
  getLegalMoves(r, c, boardState = this.board) {
    const piece = boardState[r][c];
    if (!piece) return [];

    const pseudoMoves = this.getPseudoMoves(r, c, boardState);
    const legalMoves = [];

    for (const m of pseudoMoves) {
      // Giả lập nước cờ trên bàn cờ ảo
      const simulatedBoard = boardState.map(row => row.slice());
      simulatedBoard[m.r][m.c] = simulatedBoard[r][c];
      simulatedBoard[r][c] = null;

      // Không được để Tướng phe mình bị chiếu và không được lộ mặt tướng
      if (!this.isKingInCheck(piece.color, simulatedBoard) && !this.areKingsFacing(simulatedBoard)) {
        legalMoves.push(m);
      }
    }

    return legalMoves;
  }

  // Nước đi giả định theo hình dáng quân cờ
  getPseudoMoves(r, c, boardState) {
    const piece = boardState[r][c];
    if (!piece) return [];
    const moves = [];
    const color = piece.color;
    const enemyColor = color === 'red' ? 'black' : 'red';

    const addIfValid = (nr, nc) => {
      if (!this.inBounds(nr, nc)) return false;
      const target = boardState[nr][nc];
      if (!target) {
        moves.push({ r: nr, c: nc });
        return true;
      }
      if (target.color === enemyColor) {
        moves.push({ r: nr, c: nc, capture: true });
      }
      return false; // Gặp quân cản
    };

    switch (piece.type) {
      // 1. TƯỚNG (帥 / 將): Đi từng ô ngang dọc trong Cửu Cung
      case 'k': {
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        dirs.forEach(([dr, dc]) => {
          const nr = r + dr;
          const nc = c + dc;
          if (this.inPalace(nr, nc, color)) {
            const target = boardState[nr][nc];
            if (!target || target.color === enemyColor) {
              moves.push({ r: nr, c: nc });
            }
          }
        });
        break;
      }

      // 2. SĨ (仕 / 士): Đi chéo 1 ô trong Cửu Cung (5 vị trí)
      case 'a': {
        const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        dirs.forEach(([dr, dc]) => {
          const nr = r + dr;
          const nc = c + dc;
          if (this.inPalace(nr, nc, color)) {
            const target = boardState[nr][nc];
            if (!target || target.color === enemyColor) {
              moves.push({ r: nr, c: nc });
            }
          }
        });
        break;
      }

      // 3. TƯỢNG (相 / 象): Đi chéo 2 ô (hình chữ Điền), không qua sông, không bị cản mắt tượng
      case 'e': {
        const dirs = [
          { dr: -2, dc: -2, eyeR: -1, eyeC: -1 },
          { dr: -2, dc: 2, eyeR: -1, eyeC: 1 },
          { dr: 2, dc: -2, eyeR: 1, eyeC: -1 },
          { dr: 2, dc: 2, eyeR: 1, eyeC: 1 }
        ];
        dirs.forEach(({ dr, dc, eyeR, eyeC }) => {
          const nr = r + dr;
          const nc = c + dc;
          // Kiểm tra giới hạn sông
          const crossedRiver = color === 'red' ? (nr < 5) : (nr > 4);
          if (!crossedRiver && this.inBounds(nr, nc)) {
            // Kiểm tra mắt tượng (không bị chặn)
            if (boardState[r + eyeR][c + eyeC] === null) {
              const target = boardState[nr][nc];
              if (!target || target.color === enemyColor) {
                moves.push({ r: nr, c: nc });
              }
            }
          }
        });
        break;
      }

      // 4. MÃ (傌 / 馬): Đi hình chữ Nhật (L-shape), kiểm tra cản chân mã
      case 'h': {
        const horseSteps = [
          { dr: -2, dc: -1, legR: -1, legC: 0 },
          { dr: -2, dc: 1, legR: -1, legC: 0 },
          { dr: 2, dc: -1, legR: 1, legC: 0 },
          { dr: 2, dc: 1, legR: 1, legC: 0 },
          { dr: -1, dc: -2, legR: 0, legC: -1 },
          { dr: 1, dc: -2, legR: 0, legC: -1 },
          { dr: -1, dc: 2, legR: 0, legC: 1 },
          { dr: 1, dc: 2, legR: 0, legC: 1 }
        ];
        horseSteps.forEach(({ dr, dc, legR, legC }) => {
          const nr = r + dr;
          const nc = c + dc;
          if (this.inBounds(nr, nc)) {
            // Kiểm tra chân mã
            if (boardState[r + legR][c + legC] === null) {
              const target = boardState[nr][nc];
              if (!target || target.color === enemyColor) {
                moves.push({ r: nr, c: nc });
              }
            }
          }
        });
        break;
      }

      // 5. XE (俥 / 車): Đi thẳng và ngang không giới hạn ô, dừng lại trước quân cản hoặc ăn quân địch
      case 'r': {
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        dirs.forEach(([dr, dc]) => {
          let step = 1;
          while (true) {
            const nr = r + dr * step;
            const nc = c + dc * step;
            if (!this.inBounds(nr, nc)) break;
            const target = boardState[nr][nc];
            if (!target) {
              moves.push({ r: nr, c: nc });
            } else {
              if (target.color === enemyColor) {
                moves.push({ r: nr, c: nc, capture: true });
              }
              break; // Gặp bất kỳ quân cờ nào đều phải dừng lại
            }
            step++;
          }
        });
        break;
      }

      // 6. PHÁO (炮 / 砲): Đi như Xe khi không ăn quân; Phải nhảy qua đúng 1 quân ("ngòi") để ăn quân địch
      case 'c': {
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        dirs.forEach(([dr, dc]) => {
          let step = 1;
          let foundMount = false;

          while (true) {
            const nr = r + dr * step;
            const nc = c + dc * step;
            if (!this.inBounds(nr, nc)) break;
            const target = boardState[nr][nc];

            if (!foundMount) {
              if (!target) {
                moves.push({ r: nr, c: nc }); // Nước đi không ăn quân
              } else {
                foundMount = true; // Gặp quân làm ngòi pháo
              }
            } else {
              if (target) {
                if (target.color === enemyColor) {
                  moves.push({ r: nr, c: nc, capture: true }); // Nhảy ngòi ăn quân
                }
                break; // Chỉ nhảy được qua đúng 1 quân
              }
            }
            step++;
          }
        });
        break;
      }

      // 7. BINH / TỐT (兵 / 卒): Chưa qua sông đi thẳng 1 bước; Đã qua sông đi thẳng hoặc đi ngang 1 bước
      case 'p': {
        const forward = color === 'red' ? -1 : 1;
        const crossedRiver = color === 'red' ? (r <= 4) : (r >= 5);

        // Tiến về phía trước
        const forwardR = r + forward;
        if (this.inBounds(forwardR, c)) {
          const target = boardState[forwardR][c];
          if (!target || target.color === enemyColor) {
            moves.push({ r: forwardR, c: c });
          }
        }

        // Đã qua sông: có thể sang trái hoặc phải
        if (crossedRiver) {
          [-1, 1].forEach(dc => {
            const nc = c + dc;
            if (this.inBounds(r, nc)) {
              const target = boardState[r][nc];
              if (!target || target.color === enemyColor) {
                moves.push({ r: r, c: nc });
              }
            }
          });
        }
        break;
      }
    }

    return moves;
  }

  // Kiểm tra 2 Tướng đối mặt trực tiếp trên cùng cột (Lộ mặt tướng)
  areKingsFacing(boardState) {
    let redK = null;
    let blackK = null;

    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = boardState[r][c];
        if (p && p.type === 'k') {
          if (p.color === 'red') redK = { r, c };
          else blackK = { r, c };
        }
      }
    }

    if (!redK || !blackK) return false;
    if (redK.c !== blackK.c) return false;

    // Kiểm tra các ô nằm giữa 2 tướng
    const col = redK.c;
    const startRow = Math.min(redK.r, blackK.r) + 1;
    const endRow = Math.max(redK.r, blackK.r) - 1;

    for (let r = startRow; r <= endRow; r++) {
      if (boardState[r][col] !== null) {
        return false; // Có quân chắn giữa
      }
    }

    return true; // Hai tướng nhìn thẳng mặt nhau -> Phạm luật
  }

  // Kiểm tra xem Tướng của `color` có đang bị chiếu không
  isKingInCheck(color, boardState = this.board) {
    let kingPos = null;
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = boardState[r][c];
        if (p && p.type === 'k' && p.color === color) {
          kingPos = { r, c };
          break;
        }
      }
      if (kingPos) break;
    }

    if (!kingPos) return true; // Mất tướng coi như thua

    const enemyColor = color === 'red' ? 'black' : 'red';

    // Duyệt qua tất cả các quân địch, xem có quân nào tấn công được vào ô Tướng không
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = boardState[r][c];
        if (p && p.color === enemyColor) {
          const pseudoMoves = this.getPseudoMoves(r, c, boardState);
          if (pseudoMoves.some(m => m.r === kingPos.r && m.c === kingPos.c)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  // =========================================================================
  // 3. XỬ LÝ CLICK Ô CỜ & DI CHUYỂN
  // =========================================================================
  handleCellClick(r, c) {
    if (this.isGameOver) return;

    // Ở chế độ AI, chỉ được điều khiển khi đến lượt phe của mình
    if (this.gameMode === 'ai' && this.currentTurn !== this.mySide) {
      return;
    }

    const clickedPiece = this.board[r][c];

    // Đang có quân cờ được chọn
    if (this.selectedSquare) {
      const fromR = this.selectedSquare.r;
      const fromC = this.selectedSquare.c;

      // Click lại chính quân cờ đó -> Bỏ chọn
      if (fromR === r && fromC === c) {
        this.selectedSquare = null;
        this.validMoves = [];
        this.renderBoard();
        return;
      }

      // Kiểm tra ô vừa click có phải là nước đi hợp lệ không
      const move = this.validMoves.find(m => m.r === r && m.c === c);
      if (move) {
        this.executeMove(fromR, fromC, r, c);
        return;
      }

      // Nếu click vào một quân cờ khác cùng phe mình -> Chuyển sang chọn quân đó
      if (clickedPiece && clickedPiece.color === this.currentTurn) {
        this.selectedSquare = { r, c };
        this.validMoves = this.getLegalMoves(r, c);
        this.renderBoard();
        return;
      }

      // Click vào ô không hợp lệ -> Bỏ chọn
      this.selectedSquare = null;
      this.validMoves = [];
      this.renderBoard();
      return;
    }

    // Chưa chọn quân cờ nào: Nếu click trúng quân của lượt hiện tại thì chọn
    if (clickedPiece && clickedPiece.color === this.currentTurn) {
      this.selectedSquare = { r, c };
      this.validMoves = this.getLegalMoves(r, c);
      this.renderBoard();
    }
  }

  executeMove(fromR, fromC, toR, toC, isRemote = false) {
    const piece = this.board[fromR][fromC];
    const targetPiece = this.board[toR][toC];

    // Lưu lịch sử để có thể hối kỳ (undo)
    this.moveHistory.push({
      from: { r: fromR, c: fromC },
      to: { r: toR, c: toC },
      piece: { ...piece },
      captured: targetPiece ? { ...targetPiece } : null
    });

    // Nếu ăn quân địch
    if (targetPiece) {
      this.capturedPieces[targetPiece.color].push(targetPiece);
      this.renderCapturedTray();
      // Hiệu ứng ăn quân
      if (this.app.audio && this.app.audio.playWoodfish) {
        this.app.audio.playWoodfish();
      }
    } else {
      // Âm thanh đặt quân gỗ cộp cộp
      if (this.app.audio && this.app.audio.playWoodfish) {
        this.app.audio.playWoodfish();
      }
    }

    // Di chuyển quân
    this.board[toR][toC] = piece;
    this.board[fromR][fromC] = null;
    this.lastMove = { from: { r: fromR, c: fromC }, to: { r: toR, c: toC } };
    this.selectedSquare = null;
    this.validMoves = [];

    // Chuyển lượt
    const nextTurn = this.currentTurn === 'red' ? 'black' : 'red';
    this.currentTurn = nextTurn;

    // Gửi socket nếu ở chế độ PvP
    if (this.gameMode === 'pvp' && !isRemote && this.socket && this.activeOpponentId) {
      this.socket.emit('chessMove', {
        targetPlayerId: this.activeOpponentId,
        fromR, fromC, toR, toC,
        pieceType: piece.type,
        color: piece.color
      });
    }

    // Kiểm tra Chiếu Tướng hoặc Chiếu Bí
    const isCheck = this.isKingInCheck(nextTurn, this.board);
    const hasLegalMoves = this.hasAnyLegalMoves(nextTurn);

    const alertBanner = document.getElementById('chess-alert-banner');
    const alertText = document.getElementById('chess-alert-text');

    if (isCheck && hasLegalMoves) {
      if (alertBanner && alertText) {
        const turnLabel = nextTurn === 'red' ? 'ĐỎ' : 'ĐEN';
        alertText.textContent = `⚠️ CHIẾU TƯỚNG! Phe ${turnLabel} hãy định tâm ứng biến.`;
        alertBanner.style.display = 'block';
      }
      if (this.app.audio && this.app.audio.playBell) {
        this.app.audio.playBell();
      }
    } else {
      if (alertBanner) alertBanner.style.display = 'none';
    }

    // Kiểm tra Chiếu Bí (Checkmate / Thua cờ)
    if (!hasLegalMoves) {
      this.endGame(
        piece.color,
        isCheck
          ? `CHIẾU BÍ TUYỆT THẾ! Phe ${piece.color === 'red' ? 'ĐỎ' : 'ĐEN'} giành chiến thắng!`
          : `HẾT NƯỚC ĐI! Phe ${piece.color === 'red' ? 'ĐỎ' : 'ĐEN'} giành chiến thắng!`
      );
      this.renderBoard();
      return;
    }

    this.renderBoard();
    this.updateStatusBar();
    this.startTurnTimer();

    // Nếu đến lượt AI
    if (this.gameMode === 'ai' && this.currentTurn !== this.mySide && !this.isGameOver) {
      setTimeout(() => this.makeAiMove(), 450);
    }
  }

  hasAnyLegalMoves(color) {
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = this.board[r][c];
        if (p && p.color === color) {
          const moves = this.getLegalMoves(r, c, this.board);
          if (moves.length > 0) return true;
        }
      }
    }
    return false;
  }

  // =========================================================================
  // 4. THIỀN SƯ AI ENGINE (3 CẤP ĐỘ: SƠ CƠ, CHÁNH NIỆM, ĐẠI SƯ)
  // =========================================================================
  makeAiMove() {
    if (this.isGameOver) return;

    const aiColor = this.currentTurn;
    const allMoves = [];

    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = this.board[r][c];
        if (p && p.color === aiColor) {
          const moves = this.getLegalMoves(r, c, this.board);
          moves.forEach(m => {
            allMoves.push({ from: { r, c }, to: { r: m.r, c: m.c }, capture: m.capture });
          });
        }
      }
    }

    if (allMoves.length === 0) return;

    let chosenMove = null;

    if (this.aiDifficulty === 'easy') {
      // Sơ Cơ: Ưu tiên ăn quân có giá trị, nếu không chọn ngẫu nhiên
      const captureMoves = allMoves.filter(m => m.capture);
      if (captureMoves.length > 0 && Math.random() < 0.6) {
        captureMoves.sort((a, b) => {
          const pA = this.board[a.to.r][a.to.c];
          const pB = this.board[b.to.r][b.to.c];
          const valA = pA ? PIECE_INFO[pA.color][pA.type].val : 0;
          const valB = pB ? PIECE_INFO[pB.color][pB.type].val : 0;
          return valB - valA;
        });
        chosenMove = captureMoves[0];
      } else {
        chosenMove = allMoves[Math.floor(Math.random() * allMoves.length)];
      }
    } else if (this.aiDifficulty === 'med') {
      // Chánh Niệm: Tìm kiếm độ sâu 2 lớp (Minimax + Heuristic thế cờ)
      chosenMove = this.getBestMoveMinimax(2, aiColor);
    } else {
      // Đại Sư: Tìm kiếm độ sâu 3 lớp với Alpha-Beta Pruning
      chosenMove = this.getBestMoveMinimax(3, aiColor);
    }

    if (chosenMove) {
      this.executeMove(chosenMove.from.r, chosenMove.from.c, chosenMove.to.r, chosenMove.to.c);
    }
  }

  getBestMoveMinimax(depth, aiColor) {
    let bestMove = null;
    let bestScore = -Infinity;
    const enemyColor = aiColor === 'red' ? 'black' : 'red';

    const allMoves = this.getAllMovesForColor(aiColor, this.board);
    // Xáo trộn nhẹ để đa dạng nước đi
    allMoves.sort(() => Math.random() - 0.5);

    for (const m of allMoves) {
      const cloned = this.cloneBoard(this.board);
      cloned[m.to.r][m.to.c] = cloned[m.from.r][m.from.c];
      cloned[m.from.r][m.from.c] = null;

      const score = this.minimax(cloned, depth - 1, -Infinity, Infinity, false, aiColor, enemyColor);
      if (score > bestScore) {
        bestScore = score;
        bestMove = m;
      }
    }

    return bestMove || allMoves[0];
  }

  minimax(board, depth, alpha, beta, isMaximizing, aiColor, enemyColor) {
    if (depth === 0) {
      return this.evaluateBoard(board, aiColor);
    }

    const currentColor = isMaximizing ? aiColor : enemyColor;
    const moves = this.getAllMovesForColor(currentColor, board);

    if (moves.length === 0) {
      return isMaximizing ? -99999 : 99999;
    }

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (const m of moves) {
        const nextBoard = this.cloneBoard(board);
        nextBoard[m.to.r][m.to.c] = nextBoard[m.from.r][m.from.c];
        nextBoard[m.from.r][m.from.c] = null;

        const evalScore = this.minimax(nextBoard, depth - 1, alpha, beta, false, aiColor, enemyColor);
        maxEval = Math.max(maxEval, evalScore);
        alpha = Math.max(alpha, evalScore);
        if (beta <= alpha) break; // Cắt tỉa Alpha-Beta
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (const m of moves) {
        const nextBoard = this.cloneBoard(board);
        nextBoard[m.to.r][m.to.c] = nextBoard[m.from.r][m.from.c];
        nextBoard[m.from.r][m.from.c] = null;

        const evalScore = this.minimax(nextBoard, depth - 1, alpha, beta, true, aiColor, enemyColor);
        minEval = Math.min(minEval, evalScore);
        beta = Math.min(beta, evalScore);
        if (beta <= alpha) break;
      }
      return minEval;
    }
  }

  getAllMovesForColor(color, boardState) {
    const moves = [];
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = boardState[r][c];
        if (p && p.color === color) {
          const legal = this.getLegalMoves(r, c, boardState);
          legal.forEach(m => {
            moves.push({ from: { r, c }, to: { r: m.r, c: m.c } });
          });
        }
      }
    }
    return moves;
  }

  cloneBoard(board) {
    return board.map(row => row.map(cell => (cell ? { ...cell } : null)));
  }

  // Đánh giá thế cờ (Material + Positional positioning)
  evaluateBoard(boardState, aiColor) {
    let score = 0;
    const enemyColor = aiColor === 'red' ? 'black' : 'red';

    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = boardState[r][c];
        if (!p) continue;

        let val = PIECE_INFO[p.color][p.type].val;

        // Điểm thưởng vị trí chiến lược
        if (p.type === 'p') {
          // Tốt qua sông giá trị tăng gấp đôi
          const crossed = p.color === 'red' ? (r <= 4) : (r >= 5);
          if (crossed) val += 120;
          // Tốt tiến gần Cung Tướng
          if (p.color === 'red' && r <= 2 && c >= 3 && c <= 5) val += 150;
          if (p.color === 'black' && r >= 7 && c >= 3 && c <= 5) val += 150;
        } else if (p.type === 'h') {
          // Mã ở trung tâm thoáng hơn ở biên
          if (c >= 2 && c <= 6 && r >= 2 && r <= 7) val += 30;
        } else if (p.type === 'r') {
          // Xe giữ lộ thông suốt
          val += 40;
        }

        if (p.color === aiColor) {
          score += val;
        } else {
          score -= val;
        }
      }
    }

    return score;
  }

  // =========================================================================
  // 5. GỢI Ý NƯỚC ĐI THIỀN SƯ & HỐI KỲ (UNDO)
  // =========================================================================
  showHint() {
    if (this.isGameOver) return;

    const myMoves = this.getAllMovesForColor(this.currentTurn, this.board);
    if (myMoves.length === 0) return;

    const best = this.getBestMoveMinimax(2, this.currentTurn);
    if (!best) return;

    // Highlight nước cờ
    this.selectedSquare = { r: best.from.r, c: best.from.c };
    this.validMoves = [{ r: best.to.r, c: best.to.c }];
    this.renderBoard();

    const fromPiece = this.board[best.from.r][best.from.c];
    const pieceName = fromPiece ? PIECE_INFO[fromPiece.color][fromPiece.type].sub : 'Quân cờ';

    const zenQuotes = [
      `Thiền Sư: "${pieceName} điều phối uyển chuyển như mây bay nước chảy, thủ tĩnh để chế động."`,
      `Thiền Sư: "Nước cờ ${pieceName} này khai mở trung lộ, tâm an nhiên thì vạn sự tự hanh thông."`,
      `Thiền Sư: "Lùi một bước biển rộng trời cao. Điều ${pieceName} về vị trí này giữ vững giềng mối."`,
      `Thiền Sư: "Dĩ bất biến ứng vạn biến. Nước cờ ${pieceName} giúp tâm không tán loạn trước thế vây."`,
      `Thiền Sư: "Binh quý ở chỗ hòa hợp, không nóng vội công sát, lấy đức phục người."`
    ];

    const hintBox = document.getElementById('chess-hint-box');
    const hintText = document.getElementById('chess-hint-text');
    if (hintBox && hintText) {
      hintText.textContent = zenQuotes[Math.floor(Math.random() * zenQuotes.length)];
      hintBox.style.display = 'flex';
    }
  }

  undoMove() {
    if (this.moveHistory.length === 0 || this.isGameOver) {
      this.app.showToast('Chưa có nước cờ nào để hối kỳ!');
      return;
    }

    // Ở chế độ AI, hoàn trả cả nước của AI và nước của người chơi (2 nửa nước)
    const stepsToUndo = (this.gameMode === 'ai' && this.moveHistory.length >= 2) ? 2 : 1;

    for (let i = 0; i < stepsToUndo; i++) {
      const last = this.moveHistory.pop();
      if (!last) break;

      this.board[last.from.r][last.from.c] = last.piece;
      this.board[last.to.r][last.to.c] = last.captured;

      if (last.captured) {
        const arr = this.capturedPieces[last.captured.color];
        const idx = arr.findIndex(p => p.type === last.captured.type);
        if (idx !== -1) arr.splice(idx, 1);
      }
    }

    this.currentTurn = this.mySide;
    this.selectedSquare = null;
    this.validMoves = [];
    this.lastMove = this.moveHistory.length > 0 ? this.moveHistory[this.moveHistory.length - 1] : null;

    this.renderBoard();
    this.renderCapturedTray();
    this.updateStatusBar();
    this.app.showToast('Đã hối kỳ một nước đi! Hãy tĩnh tâm cân nhắc thế cờ mới 🙏');
  }

  // =========================================================================
  // 6. RENDER GIAO DIỆN BÀN CỜ
  // =========================================================================
  renderBoard() {
    const cells = document.querySelectorAll('.xiangqi-cell');
    const kingInCheckRed = this.isKingInCheck('red', this.board);
    const kingInCheckBlack = this.isKingInCheck('black', this.board);

    cells.forEach(cell => {
      const r = parseInt(cell.dataset.row, 10);
      const c = parseInt(cell.dataset.col, 10);

      // Xóa các quân cờ hoặc chỉ dẫn cũ
      cell.innerHTML = '';
      cell.classList.remove('last-move-src', 'last-move-dst');

      // Đánh dấu nước đi cuối cùng
      if (this.lastMove) {
        if (this.lastMove.from.r === r && this.lastMove.from.c === c) {
          cell.classList.add('last-move-src');
        }
        if (this.lastMove.to.r === r && this.lastMove.to.c === c) {
          cell.classList.add('last-move-dst');
        }
      }

      // Vẽ quân cờ nếu có
      const piece = this.board[r][c];
      if (piece) {
        const pieceEl = document.createElement('div');
        pieceEl.className = `xiangqi-piece ${piece.color}`;
        const info = PIECE_INFO[piece.color][piece.type];

        pieceEl.innerHTML = `
          <span class="piece-char">${info.char}</span>
          <span class="piece-sub">${info.sub}</span>
        `;

        // Highlight nếu được chọn
        if (this.selectedSquare && this.selectedSquare.r === r && this.selectedSquare.c === c) {
          pieceEl.classList.add('selected');
        }

        // Highlight nếu đang bị chiếu
        if (piece.type === 'k') {
          if ((piece.color === 'red' && kingInCheckRed) || (piece.color === 'black' && kingInCheckBlack)) {
            pieceEl.classList.add('in-check');
          }
        }

        // Hiển thị vòng tròn đỏ nếu là mục tiêu có thể ăn
        const isCaptureTarget = this.validMoves.some(m => m.r === r && m.c === c);
        if (isCaptureTarget) {
          pieceEl.classList.add('can-capture');
        }

        cell.appendChild(pieceEl);
      } else {
        // Nếu là ô trống và là đích đến hợp lệ -> Thêm chấm tròn xanh
        const isValidDest = this.validMoves.some(m => m.r === r && m.c === c);
        if (isValidDest) {
          const dot = document.createElement('div');
          dot.className = 'xiangqi-dest-indicator';
          cell.appendChild(dot);
        }
      }
    });
  }

  renderCapturedTray() {
    const tray = document.getElementById('captured-pieces-tray');
    if (!tray) return;
    tray.innerHTML = '';

    ['red', 'black'].forEach(color => {
      this.capturedPieces[color].forEach(p => {
        const chip = document.createElement('span');
        chip.className = `captured-chip ${p.color}`;
        chip.textContent = PIECE_INFO[p.color][p.type].char;
        chip.title = `${p.color === 'red' ? 'Đỏ' : 'Đen'} ${PIECE_INFO[p.color][p.type].sub}`;
        tray.appendChild(chip);
      });
    });
  }

  updateStatusBar() {
    const pRed = document.getElementById('chess-player-red');
    const pBlack = document.getElementById('chess-player-black');
    const nameRed = document.getElementById('name-red');
    const nameBlack = document.getElementById('name-black');

    if (this.gameMode === 'ai') {
      if (nameRed) nameRed.textContent = this.mySide === 'red' ? 'Bạn (Đỏ - 帥)' : 'Thiền Sư AI (Đỏ - 帥)';
      if (nameBlack) nameBlack.textContent = this.mySide === 'black' ? 'Bạn (Đen - 將)' : 'Thiền Sư AI (Đen - 將)';
    } else {
      if (nameRed) nameRed.textContent = this.mySide === 'red' ? 'Bạn (Đỏ - 帥)' : `${this.activeOpponentName} (Đỏ)`;
      if (nameBlack) nameBlack.textContent = this.mySide === 'black' ? 'Bạn (Đen - 將)' : `${this.activeOpponentName} (Đen)`;
    }

    if (this.currentTurn === 'red') {
      pRed?.classList.add('active');
      pBlack?.classList.remove('active');
    } else {
      pBlack?.classList.add('active');
      pRed?.classList.remove('active');
    }
  }

  endGame(winnerColor, message) {
    this.isGameOver = true;
    this.stopTurnTimer();

    const isMeWinner = (winnerColor === this.mySide);
    const resultTitle = winnerColor === 0 ? 'HÒA CỜ CHÁNH NIỆM' : (isMeWinner ? '🎉 THẮNG TRẬN KỲ ĐÀO!' : '🙏 HOÀN TẤT VÁN CỜ');

    if (this.app.audio && this.app.audio.playBell) {
      this.app.audio.playBell();
    }

    if (isMeWinner) {
      this.app.showFloatingMerit('+50 Kỳ Đạo ♟️', this.app.controller?.position);
      if (this.socket) {
        this.socket.emit('chessGameOver', {
          winnerId: this.socket.id,
          winnerName: this.app.avatarManager?.avatars.get(this.app.myId)?.name || 'Kỳ thủ',
          reason: message
        });
      }
    }

    setTimeout(() => {
      alert(`${resultTitle}\n\n${message}\n\n“Thắng không kiêu, bại không quạu. Cờ như dòng đời, buông xả là an vui!”`);
    }, 200);
  }

  // =========================================================================
  // 7. MULTIPLAYER PVP GIAO LƯU ĐỒNG TU
  // =========================================================================
  refreshOnlinePlayersList() {
    const listEl = document.getElementById('chess-players-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    const avatars = this.app.avatarManager?.avatars;
    if (!avatars || avatars.size <= 1) {
      listEl.innerHTML = `<div class="empty-list-notice">Chưa có đồng tu nào khác xung quanh. Bạn có thể mở tab "Học Cùng Thiền Sư AI" để đàm đạo cờ tướng!</div>`;
      return;
    }

    avatars.forEach((av, id) => {
      if (id === this.app.myId) return;

      const item = document.createElement('div');
      item.className = 'player-invite-item';
      item.innerHTML = `
        <div class="player-invite-info">
          <span class="player-invite-name">${this.escapeHtml(av.name || 'Đồng tu')}</span>
          <span class="player-invite-merit">✨ ${av.merit || 0} Công đức</span>
        </div>
        <button class="gold-tool-btn invite-btn" data-id="${id}">Kính Mời ♟️</button>
      `;

      item.querySelector('.invite-btn')?.addEventListener('click', () => {
        this.invitePlayerToChess(id, av.name);
      });

      listEl.appendChild(item);
    });
  }

  invitePlayerToChess(targetId, targetName) {
    if (!this.socket) return;
    this.socket.emit('chessInvite', { targetPlayerId: targetId });
    this.app.showToast(`Đã gửi lời mời giao lưu cờ tướng tới [${targetName}]... Đang chờ hồi đáp!`);
  }

  startPvPMatch(opponentId, opponentName, assignedSide) {
    this.activeOpponentId = opponentId;
    this.activeOpponentName = opponentName;
    this.mySide = assignedSide;
    this.gameMode = 'pvp';

    const pvpControls = document.getElementById('pvp-match-controls');
    if (pvpControls) pvpControls.style.display = 'flex';

    this.resetChessGame();
    this.app.showToast(`Trận cờ tướng với đồng tu [${opponentName}] đã bắt đầu! Bạn cầm quân ${assignedSide === 'red' ? 'ĐỎ (帥 - Đi trước)' : 'ĐEN (將 - Đi sau)'}.`);
  }

  resignGame() {
    if (!this.activeOpponentId || this.isGameOver) return;
    if (confirm('Bạn có chắc chắn muốn xin nhận thua ván cờ này để học hỏi không?')) {
      const winnerColor = this.mySide === 'red' ? 'black' : 'red';
      if (this.socket) {
        this.socket.emit('chessResign', { targetPlayerId: this.activeOpponentId });
      }
      this.endGame(winnerColor, 'Bạn đã xin nhận thua ván cờ để học hỏi kỳ đạo.');
    }
  }

  requestDraw() {
    if (!this.activeOpponentId || this.isGameOver) return;
    if (this.socket) {
      this.socket.emit('chessDrawRequest', { targetPlayerId: this.activeOpponentId });
      this.app.showToast('Đã gửi lời cầu hòa tới đồng tu đối thủ...');
    }
  }

  // =========================================================================
  // 8. HỒ SEN PHÓNG SINH (FISH & CREATURE RELEASE)
  // =========================================================================
  setupFishEvents() {
    document.querySelectorAll('.creature-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.creature-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedCreature = card.dataset.type || 'carp';
      });
    });

    document.querySelectorAll('.prayer-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const input = document.getElementById('input-prayer');
        if (input) input.value = chip.textContent.trim();
      });
    });

    document.getElementById('btn-close-fish')?.addEventListener('click', () => this.closeFishModal());
    document.getElementById('btn-do-release')?.addEventListener('click', () => this.executeRelease());
  }

  openFishReleaseModal() {
    const modal = document.getElementById('fish-modal');
    if (!modal) return;
    modal.style.display = 'flex';

    if (this.app.controller && this.app.temple) {
      const st = this.app.temple.interactiveStations.pond;
      this.app.controller.runToTarget(st.x, st.z, st.rotY);
    }
  }

  closeFishModal() {
    const modal = document.getElementById('fish-modal');
    if (modal) modal.style.display = 'none';
  }

  executeRelease() {
    const prayerInput = document.getElementById('input-prayer');
    const prayerText = prayerInput?.value?.trim() || 'Cầu muôn loài an lạc, deadline không quạu!';
    const type = this.selectedCreature || 'carp';

    if (this.app.audio && this.app.audio.playWaterSplash) {
      this.app.audio.playWaterSplash();
    }

    if (this.app.temple) {
      if (type === 'lantern') {
        this.app.temple.spawnFloatingLantern(prayerText);
      } else {
        this.app.temple.spawnReleasedFish(type, prayerText);
      }
    }

    if (this.socket) {
      this.socket.emit('releaseCreature', { creatureType: type, prayerText });
    }

    this.closeFishModal();
  }

  // =========================================================================
  // 9. THƯỞNG TRÀ ĐÀM ĐẠO (TEA CEREMONY)
  // =========================================================================
  drinkTea() {
    if (this.app.controller && this.app.temple) {
      const st = this.app.temple.interactiveStations.tea;
      this.app.controller.runToTarget(st.x, st.z, st.rotY, () => {
        if (this.app.audio && this.app.audio.playTeaPour) {
          this.app.audio.playTeaPour();
        }
        if (this.socket) {
          this.socket.emit('drinkTea');
        }
        this.app.showToast('Đang thưởng thức chén trà sen ấm áp... Tâm an vạn sự an! 🍵');
      });
    }
  }

  // =========================================================================
  // 10. SOCKET EVENT LISTENERS (MULTIPLAYER SYNC)
  // =========================================================================
  setupSocketEvents() {
    if (!this.socket) return;

    this.socket.on('chessInviteReceived', ({ inviterId, inviterName }) => {
      this.pendingInviteFrom = { id: inviterId, name: inviterName };
      const inviteModal = document.getElementById('chess-invite-modal');
      const textEl = document.getElementById('chess-invite-text');
      if (textEl) {
        textEl.textContent = `Đồng tu [${inviterName}] kính mời bạn giao lưu một ván Cờ Tướng chánh niệm! Bạn có sẵn lòng không?`;
      }
      if (inviteModal) inviteModal.style.display = 'flex';
      if (this.app.audio && this.app.audio.playBell) {
        this.app.audio.playBell();
      }
    });

    this.socket.on('chessInviteResponse', ({ opponentId, opponentName, accept }) => {
      if (accept) {
        this.startPvPMatch(opponentId, opponentName, 'red'); // Inviter plays Red
      } else {
        this.app.showToast(`Đồng tu [${opponentName}] hẹn bạn dịp khác giao lưu kỳ đạo.`);
      }
    });

    // Đối thủ đi nước cờ
    this.socket.on('chessMoveMade', (data) => {
      if (this.gameMode === 'pvp' && !this.isGameOver) {
        this.executeMove(data.fromR, data.fromC, data.toR, data.toC, true);
      }
    });

    this.socket.on('chessOpponentResigned', () => {
      if (this.gameMode === 'pvp' && !this.isGameOver) {
        this.endGame(this.mySide, `Đồng tu [${this.activeOpponentName}] đã xin nhận thua!`);
      }
    });

    this.socket.on('chessDrawRequested', ({ fromId, fromName }) => {
      if (confirm(`Đồng tu [${fromName}] đề nghị hòa ván cờ. Bạn có đồng ý không?`)) {
        this.socket.emit('chessDrawResponse', { targetPlayerId: fromId, accept: true });
        this.endGame(0, 'Hai bên đồng ý hòa cờ trong chánh niệm!');
      } else {
        this.socket.emit('chessDrawResponse', { targetPlayerId: fromId, accept: false });
      }
    });

    this.socket.on('chessDrawResponded', ({ accept }) => {
      if (accept) {
        this.endGame(0, 'Hai bên đồng ý hòa cờ trong chánh niệm!');
      } else {
        this.app.showToast('Đối thủ từ chối lời đề nghị hòa cờ. Ván cờ tiếp tục!');
      }
    });

    this.socket.on('creatureReleased', (data) => {
      if (this.app.temple && data.playerId !== this.socket.id) {
        if (data.creatureType === 'lantern') {
          this.app.temple.spawnFloatingLantern(data.prayerText);
        } else {
          this.app.temple.spawnReleasedFish(data.creatureType, data.prayerText);
        }
      }
      this.app.showFloatingMerit(`+${data.earnedMerit} Phóng Sinh 🐟`, this.app.controller?.position);
      const totalEl = document.getElementById('total-merit-display');
      if (totalEl) totalEl.textContent = data.totalMerit.toLocaleString();
      this.app.avatarManager?.updateMerit(data.playerId, data.playerMerit);
    });

    this.socket.on('teaDrunk', (data) => {
      this.app.showFloatingMerit(`+5 Trà Đạo 🍵`, this.app.controller?.position);
      const totalEl = document.getElementById('total-merit-display');
      if (totalEl) totalEl.textContent = data.totalMerit.toLocaleString();
      this.app.avatarManager?.updateMerit(data.playerId, data.playerMerit);
    });
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}
