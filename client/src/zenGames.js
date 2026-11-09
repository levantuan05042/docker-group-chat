// =========================================================================
// ZEN MINI-GAMES & SPIRITUAL RITUALS ENGINE
// 1. Kỳ Đài Chánh Niệm (15x15 Gomoku / Zen Chess AI & Multiplayer PvP)
// 2. Hồ Sen Phóng Sinh (Fish Release & Floating Lanterns)
// 3. Trà Đạo Chánh Niệm (Tea Ceremony)
// =========================================================================

export class ZenGames {
  constructor(app) {
    this.app = app;
    this.socket = app.socket;

    // Chess State
    this.boardSize = 15;
    this.board = Array(15).fill(null).map(() => Array(15).fill(0)); // 0: empty, 1: Black, 2: White
    this.currentTurn = 1; // 1: Black (plays first), 2: White
    this.myColor = 1; // 1: Black, 2: White
    this.gameMode = 'ai'; // 'ai' | 'pvp'
    this.aiDifficulty = 'med'; // 'easy' | 'med' | 'hard'
    this.moveHistory = [];
    this.isGameOver = false;
    this.activeOpponentId = null;
    this.activeOpponentName = 'Thiền Sư AI';
    this.turnTimer = null;
    this.timeLeft = 45;
    this.pendingInviteFrom = null;

    // Fish Release State
    this.selectedCreature = 'carp';

    this.initDOM();
  }

  initDOM() {
    this.buildChessBoard();
    this.setupChessEvents();
    this.setupFishEvents();
    this.setupSocketEvents();
  }

  // =========================================================================
  // 1. KỲ ĐÀI CHÁNH NIỆM (15x15 GOMOKU / CARO)
  // =========================================================================
  buildChessBoard() {
    const gridEl = document.getElementById('chess-board-grid');
    if (!gridEl) return;
    gridEl.innerHTML = '';

    const starCoords = new Set(['3,3', '11,3', '7,7', '3,11', '11,11']);

    for (let r = 0; r < this.boardSize; r++) {
      for (let c = 0; c < this.boardSize; c++) {
        const cell = document.createElement('div');
        cell.className = 'chess-cell';
        cell.dataset.row = r;
        cell.dataset.col = c;

        if (starCoords.has(`${c},${r}`)) {
          cell.classList.add('star-point');
        }

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

    // AI Difficulty buttons
    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.aiDifficulty = btn.dataset.diff || 'med';
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
        this.startPvPMatch(this.pendingInviteFrom.id, this.pendingInviteFrom.name, 2); // Opponent is Black, you are White
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

    // Walk avatar to chess table
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
    this.board = Array(15).fill(null).map(() => Array(15).fill(0));
    this.currentTurn = 1; // Black first
    this.isGameOver = false;
    this.moveHistory = [];

    // Clear board visual stones
    document.querySelectorAll('.chess-cell').forEach(cell => {
      const stone = cell.querySelector('.stone');
      if (stone) stone.remove();
    });

    const hintBox = document.getElementById('chess-hint-box');
    if (hintBox) hintBox.style.display = 'none';

    this.updateStatusBar();
    this.startTurnTimer();
  }

  startTurnTimer() {
    this.stopTurnTimer();
    this.timeLeft = 45;
    const timerEl = document.getElementById('chess-timer');
    if (timerEl) timerEl.textContent = `${this.timeLeft}s`;

    this.turnTimer = setInterval(() => {
      this.timeLeft--;
      if (timerEl) timerEl.textContent = `${this.timeLeft}s`;

      if (this.timeLeft <= 0) {
        this.stopTurnTimer();
        if (this.gameMode === 'ai') {
          if (this.currentTurn === 1) {
            this.app.showToast('Hết thời gian lượt đi! Thiền Sư đi giúp bạn 1 nước chánh niệm.');
            this.makeAiMove();
          }
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

  updateStatusBar() {
    const pBlack = document.getElementById('chess-player-black');
    const pWhite = document.getElementById('chess-player-white');
    const nameBlack = document.getElementById('name-black');
    const nameWhite = document.getElementById('name-white');

    if (this.gameMode === 'ai') {
      if (nameBlack) nameBlack.textContent = `${this.app.localPlayerName || 'Bạn'} (Đen)`;
      if (nameWhite) nameWhite.textContent = `Thiền Sư AI (${this.aiDifficulty.toUpperCase()})`;
    } else {
      if (this.myColor === 1) {
        if (nameBlack) nameBlack.textContent = `${this.app.localPlayerName || 'Bạn'} (Đen)`;
        if (nameWhite) nameWhite.textContent = `${this.activeOpponentName} (Trắng)`;
      } else {
        if (nameBlack) nameBlack.textContent = `${this.activeOpponentName} (Đen)`;
        if (nameWhite) nameWhite.textContent = `${this.app.localPlayerName || 'Bạn'} (Trắng)`;
      }
    }

    if (this.currentTurn === 1) {
      pBlack?.classList.add('active');
      pWhite?.classList.remove('active');
    } else {
      pWhite?.classList.add('active');
      pBlack?.classList.remove('active');
    }
  }

  handleCellClick(r, c) {
    if (this.isGameOver) return;
    if (this.board[r][c] !== 0) return;

    if (this.gameMode === 'ai') {
      if (this.currentTurn !== 1) return; // Wait for AI
      this.placeStone(r, c, 1);

      if (this.checkWin(r, c, 1)) {
        this.endGame(1, 'Bạn đã chiến thắng Thiền Sư AI!');
        return;
      }

      this.currentTurn = 2;
      this.updateStatusBar();
      this.startTurnTimer();

      // Trigger AI move with natural reflection delay
      setTimeout(() => this.makeAiMove(), 550);
    } else if (this.gameMode === 'pvp') {
      if (this.currentTurn !== this.myColor) {
        this.app.showToast('Chưa tới lượt đi của bạn! Hãy quán chiếu tâm nhẫn nại.');
        return;
      }
      this.placeStone(r, c, this.myColor);

      // Send to server
      if (this.socket && this.activeOpponentId) {
        this.socket.emit('chessMove', {
          targetPlayerId: this.activeOpponentId,
          row: r,
          col: c,
          player: this.myColor
        });
      }

      if (this.checkWin(r, c, this.myColor)) {
        this.endGame(this.myColor, 'Bạn đã chiến thắng đồng tu!');
        if (this.socket) {
          this.socket.emit('chessGameOver', {
            winnerId: this.socket.id,
            winnerName: this.app.localPlayerName,
            loserId: this.activeOpponentId
          });
        }
        return;
      }

      this.currentTurn = this.myColor === 1 ? 2 : 1;
      this.updateStatusBar();
      this.startTurnTimer();
    }
  }

  placeStone(r, c, player) {
    this.board[r][c] = player;
    this.moveHistory.push({ r, c, player });

    // Remove old last-move mark
    document.querySelectorAll('.chess-cell .stone.last-move').forEach(s => s.classList.remove('last-move'));

    // Visual stone
    const cell = document.querySelector(`.chess-cell[data-row="${r}"][data-col="${c}"]`);
    if (cell) {
      const stone = document.createElement('div');
      stone.className = `stone ${player === 1 ? 'black' : 'white'} last-move`;
      cell.appendChild(stone);
    }

    if (this.app.audio && this.app.audio.playChessClack) {
      this.app.audio.playChessClack();
    }
  }

  undoMove() {
    if (this.isGameOver || this.moveHistory.length === 0) return;

    if (this.gameMode === 'ai') {
      // Undo both AI move and Player move
      const undoCount = this.currentTurn === 1 ? 2 : 1;
      for (let i = 0; i < undoCount; i++) {
        if (this.moveHistory.length === 0) break;
        const last = this.moveHistory.pop();
        this.board[last.r][last.c] = 0;
        const cell = document.querySelector(`.chess-cell[data-row="${last.r}"][data-col="${last.c}"]`);
        const stone = cell?.querySelector('.stone');
        if (stone) stone.remove();
      }
      this.currentTurn = 1;
      this.updateStatusBar();
      this.startTurnTimer();
      this.app.showToast('Đã hối kỳ thành công! Hãy quán xét lại nước đi.');
    } else {
      this.app.showToast('Chế độ thi đấu cùng đồng tu không hỗ trợ hối kỳ.');
    }
  }

  showHint() {
    if (this.isGameOver || this.currentTurn !== 1) return;

    const hint = this.getBestMove(1);
    const hintBox = document.getElementById('chess-hint-box');
    const hintText = document.getElementById('chess-hint-text');

    if (hint && hintBox && hintText) {
      const colChar = String.fromCharCode(65 + hint.c);
      const rowNum = 15 - hint.r;

      const wisdoms = [
        `Nước cờ tại [${colChar}${rowNum}] mở ra thế trận liên hoàn ba quân, tăng sức ép công thủ.`,
        `Đặt quân tại [${colChar}${rowNum}] ngăn chặn trước mũi tấn công tiềm ẩn của đối phương.`,
        `Thế cờ tại [${colChar}${rowNum}] hòa hợp giữa tấn công và phòng thủ, tự tại an nhiên.`
      ];
      hintText.textContent = wisdoms[Math.floor(Math.random() * wisdoms.length)];
      hintBox.style.display = 'flex';

      // Highlight cell temporarily
      const cell = document.querySelector(`.chess-cell[data-row="${hint.r}"][data-col="${hint.c}"]`);
      if (cell) {
        cell.style.boxShadow = 'inset 0 0 10px #ffd700';
        setTimeout(() => cell.style.boxShadow = '', 2500);
      }
    }
  }

  makeAiMove() {
    if (this.isGameOver) return;

    const bestMove = this.getBestMove(2); // AI is White (2)
    if (bestMove) {
      this.placeStone(bestMove.r, bestMove.c, 2);

      if (this.checkWin(bestMove.r, bestMove.c, 2)) {
        this.endGame(2, 'Thiền Sư AI đã giành chiến thắng!');
        return;
      }

      this.currentTurn = 1;
      this.updateStatusBar();
      this.startTurnTimer();
    }
  }

  getBestMove(player) {
    const opp = player === 1 ? 2 : 1;
    let bestScore = -Infinity;
    let bestMove = null;

    // Search empty cells near existing stones
    const candidates = [];
    for (let r = 0; r < 15; r++) {
      for (let c = 0; c < 15; c++) {
        if (this.board[r][c] === 0) {
          if (this.hasNeighbor(r, c)) {
            candidates.push({ r, c });
          }
        }
      }
    }

    if (candidates.length === 0) {
      return { r: 7, c: 7 }; // Tengen
    }

    candidates.forEach(({ r, c }) => {
      // Evaluation heuristic
      const attackScore = this.evaluatePoint(r, c, player);
      const defendScore = this.evaluatePoint(r, c, opp);

      let score = attackScore * 1.1 + defendScore * 1.0;

      if (this.aiDifficulty === 'easy') {
        score += (Math.random() - 0.5) * 50;
      } else if (this.aiDifficulty === 'hard') {
        if (attackScore >= 10000) score += 50000; // Instant win
        if (defendScore >= 10000) score += 30000; // Must block win
      }

      if (score > bestScore) {
        bestScore = score;
        bestMove = { r, c };
      }
    });

    return bestMove || candidates[Math.floor(Math.random() * candidates.length)];
  }

  hasNeighbor(r, c) {
    for (let dr = -2; dr <= 2; dr++) {
      for (let dc = -2; dc <= 2; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < 15 && nc >= 0 && nc < 15) {
          if (this.board[nr][nc] !== 0) return true;
        }
      }
    }
    return false;
  }

  evaluatePoint(r, c, player) {
    const directions = [
      [0, 1],  // Horizontal
      [1, 0],  // Vertical
      [1, 1],  // Diagonal \
      [1, -1]  // Diagonal /
    ];

    let totalScore = 0;

    directions.forEach(([dr, dc]) => {
      let count = 1;
      let openEnds = 0;

      // Forward
      let fr = r + dr;
      let fc = c + dc;
      while (fr >= 0 && fr < 15 && fc >= 0 && fc < 15 && this.board[fr][fc] === player) {
        count++;
        fr += dr;
        fc += dc;
      }
      if (fr >= 0 && fr < 15 && fc >= 0 && fc < 15 && this.board[fr][fc] === 0) {
        openEnds++;
      }

      // Backward
      let br = r - dr;
      let bc = c - dc;
      while (br >= 0 && br < 15 && bc >= 0 && bc < 15 && this.board[br][bc] === player) {
        count++;
        br -= dr;
        bc -= dc;
      }
      if (br >= 0 && br < 15 && bc >= 0 && bc < 15 && this.board[br][bc] === 0) {
        openEnds++;
      }

      // Scoring pattern
      if (count >= 5) totalScore += 100000;
      else if (count === 4) {
        if (openEnds === 2) totalScore += 10000;
        else if (openEnds === 1) totalScore += 1000;
      } else if (count === 3) {
        if (openEnds === 2) totalScore += 1500;
        else if (openEnds === 1) totalScore += 200;
      } else if (count === 2) {
        if (openEnds === 2) totalScore += 100;
        else if (openEnds === 1) totalScore += 20;
      }
    });

    return totalScore;
  }

  checkWin(r, c, player) {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1]
    ];

    for (const [dr, dc] of directions) {
      let count = 1;
      const winStones = [{ r, c }];

      // Forward
      let fr = r + dr;
      let fc = c + dc;
      while (fr >= 0 && fr < 15 && fc >= 0 && fc < 15 && this.board[fr][fc] === player) {
        count++;
        winStones.push({ r: fr, c: fc });
        fr += dr;
        fc += dc;
      }

      // Backward
      let br = r - dr;
      let bc = c - dc;
      while (br >= 0 && br < 15 && bc >= 0 && bc < 15 && this.board[br][bc] === player) {
        count++;
        winStones.push({ r: br, c: bc });
        br -= dr;
        bc -= dc;
      }

      if (count >= 5) {
        // Highlight winning 5 stones
        winStones.forEach(ws => {
          const cell = document.querySelector(`.chess-cell[data-row="${ws.r}"][data-col="${ws.c}"]`);
          const stone = cell?.querySelector('.stone');
          if (stone) stone.classList.add('win-stone');
        });
        return true;
      }
    }
    return false;
  }

  endGame(winner, message) {
    this.isGameOver = true;
    this.stopTurnTimer();

    if (this.app.audio && this.app.audio.playFanfare) {
      this.app.audio.playFanfare();
    }

    if (winner === 1 || (this.gameMode === 'pvp' && winner === this.myColor)) {
      this.app.showFloatingMerit('+50 Công Đức Kỳ Vương 👑', this.app.controller?.position);
      this.app.showToast(`🎉 CHÚC MỪNG: ${message} (+50 Công Đức)`);
    } else {
      this.app.showToast(`🙏 KẾT THÚC: ${message}`);
    }
  }

  // =========================================================================
  // PVP MULTIPLAYER ONLINE CHESS
  // =========================================================================
  refreshOnlinePlayersList() {
    const listEl = document.getElementById('chess-players-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    const avatars = this.app.avatarManager?.avatars;
    if (!avatars || avatars.size <= 1) {
      listEl.innerHTML = '<div class="empty-list-notice">Chưa có đồng tu nào khác trong phòng. Mời bạn chuyển tab Tự Học hoặc rủ bạn bè vào cùng phòng!</div>';
      return;
    }

    avatars.forEach((av, id) => {
      if (id === this.app.myId) return;

      const row = document.createElement('div');
      row.className = 'player-item-row';
      row.innerHTML = `
        <span class="p-name">🧘 ${av.name || 'Đồng tu'}</span>
        <button class="invite-btn" data-id="${id}">Mời Tỉ Thí ⚔️</button>
      `;
      row.querySelector('.invite-btn').addEventListener('click', () => {
        this.sendChessInvite(id, av.name);
      });
      listEl.appendChild(row);
    });
  }

  sendChessInvite(targetId, targetName) {
    if (!this.socket) return;
    this.socket.emit('chessInvite', { targetPlayerId: targetId });
    this.app.showToast(`Đã gửi lời mời giao lưu cờ tới [${targetName}]... Đang chờ hồi đáp!`);
  }

  startPvPMatch(opponentId, opponentName, color) {
    this.gameMode = 'pvp';
    this.activeOpponentId = opponentId;
    this.activeOpponentName = opponentName;
    this.myColor = color; // 1: Black, 2: White
    this.currentTurn = 1;

    const pvpControls = document.getElementById('pvp-match-controls');
    if (pvpControls) pvpControls.style.display = 'flex';

    this.resetChessGame();
    this.openChessModal();
    this.app.showToast(`Trận cờ với đồng tu [${opponentName}] đã bắt đầu! Bạn cầm quân ${color === 1 ? 'ĐEN (đi trước)' : 'TRẮNG (đi sau)'}.`);
  }

  resignGame() {
    if (!this.activeOpponentId || this.isGameOver) return;
    if (confirm('Bạn có chắc chắn muốn xin nhận thua ván cờ này để học hỏi không?')) {
      if (this.socket) {
        this.socket.emit('chessResign', { targetPlayerId: this.activeOpponentId });
      }
      this.endGame(this.myColor === 1 ? 2 : 1, 'Bạn đã xin nhận thua. Tâm nhẫn nại là cội nguồn của trí tuệ!');
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
  // 2. HỒ SEN PHÓNG SINH (FISH & CREATURE RELEASE)
  // =========================================================================
  setupFishEvents() {
    document.querySelectorAll('.creature-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.creature-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedCreature = card.dataset.type || 'carp';
      });
    });

    // Prayer chips
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

    // Walk to pond station
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

    // Audio splash
    if (this.app.audio && this.app.audio.playWaterSplash) {
      this.app.audio.playWaterSplash();
    }

    // Visual in 3D scene
    if (this.app.temple) {
      if (type === 'lantern') {
        this.app.temple.spawnFloatingLantern(prayerText);
      } else {
        this.app.temple.spawnReleasedFish(type, prayerText);
      }
    }

    // Send to server
    if (this.socket) {
      this.socket.emit('releaseCreature', {
        creatureType: type,
        prayerText
      });
    }

    this.closeFishModal();
  }

  // =========================================================================
  // 3. THƯỞNG TRÀ ĐÀM ĐẠO (TEA CEREMONY)
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
  // 4. SOCKET EVENT LISTENERS (MULTIPLAYER SYNC)
  // =========================================================================
  setupSocketEvents() {
    if (!this.socket) return;

    // Incoming Chess Invite
    this.socket.on('chessInviteReceived', ({ inviterId, inviterName }) => {
      this.pendingInviteFrom = { id: inviterId, name: inviterName };
      const inviteModal = document.getElementById('chess-invite-modal');
      const textEl = document.getElementById('chess-invite-text');
      if (textEl) {
        textEl.textContent = `Đồng tu [${inviterName}] kính mời bạn giao lưu một ván cờ chánh niệm! Bạn có sẵn lòng không?`;
      }
      if (inviteModal) inviteModal.style.display = 'flex';
      if (this.app.audio && this.app.audio.playBell) {
        this.app.audio.playBell();
      }
    });

    // Chess Invite Response
    this.socket.on('chessInviteResponse', ({ opponentId, opponentName, accept }) => {
      if (accept) {
        this.startPvPMatch(opponentId, opponentName, 1); // Inviter is Black
      } else {
        this.app.showToast(`Đồng tu [${opponentName}] hẹn bạn dịp khác giao lưu kỳ đạo.`);
      }
    });

    // Opponent made a move
    this.socket.on('chessMoveMade', ({ row, col, player }) => {
      if (this.gameMode === 'pvp' && !this.isGameOver) {
        this.placeStone(row, col, player);

        if (this.checkWin(row, col, player)) {
          this.endGame(player, `Đồng tu [${this.activeOpponentName}] đã giành chiến thắng!`);
          return;
        }

        this.currentTurn = this.myColor;
        this.updateStatusBar();
        this.startTurnTimer();
      }
    });

    // Opponent resigned
    this.socket.on('chessOpponentResigned', () => {
      if (this.gameMode === 'pvp' && !this.isGameOver) {
        this.endGame(this.myColor, `Đồng tu [${this.activeOpponentName}] đã xin nhận thua!`);
      }
    });

    // Opponent asked for a draw
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

    // Creature released by any player
    this.socket.on('creatureReleased', (data) => {
      if (this.app.temple && data.playerId !== this.socket.id) {
        if (data.creatureType === 'lantern') {
          this.app.temple.spawnFloatingLantern(data.prayerText);
        } else {
          this.app.temple.spawnReleasedFish(data.creatureType, data.prayerText);
        }
      }
      this.app.showFloatingMerit(`+${data.earnedMerit} Phóng Sinh 🐟`, this.app.controller?.position);
      document.getElementById('total-merit-display').textContent = data.totalMerit.toLocaleString();
      this.app.avatarManager?.updateMerit(data.playerId, data.playerMerit);
    });

    // Tea drunk
    this.socket.on('teaDrunk', (data) => {
      this.app.showFloatingMerit(`+5 Trà Đạo 🍵`, this.app.controller?.position);
      document.getElementById('total-merit-display').textContent = data.totalMerit.toLocaleString();
      this.app.avatarManager?.updateMerit(data.playerId, data.playerMerit);
    });
  }
}
