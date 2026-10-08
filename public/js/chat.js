// CHAT & SOCKET.IO LOGIC - HỖ TRỢ GHÉP TRẬN TỰ ĐỘNG & THÁCH ĐẤU SIÊU DỄ
class ChatClient {
  constructor() {
    this.socket = null;
    this.currentUser = null;
    this.onlineUsers = [];

    // DOM Elements
    this.messagesList = document.getElementById('messagesList');
    this.chatInput = document.getElementById('chatInput');
    this.sendBtn = document.getElementById('sendBtn');
    this.onlineCount = document.getElementById('onlineCount');
    this.drawerCount = document.getElementById('drawerCount');
    this.onlineDrawer = document.getElementById('onlineDrawer');
    this.drawerList = document.getElementById('drawerList');
    this.userNameDisplay = document.getElementById('userNameDisplay');
    this.userAvatarDot = document.getElementById('userAvatarDot');

    // Challenge Modal
    this.challengeModal = document.getElementById('challengeModal');
    this.challengerNameSpan = document.getElementById('challengerNameSpan');
    this.challengeGameLabel = document.getElementById('challengeGameLabel');
    this.acceptChallengeBtn = document.getElementById('acceptChallengeBtn');
    this.declineChallengeBtn = document.getElementById('declineChallengeBtn');
    this.pendingChallenge = null;

    // Matchmaking Modal
    this.matchmakingModal = document.getElementById('matchmakingModal');
    this.matchmakingText = document.getElementById('matchmakingText');
    this.cancelMatchBtn = document.getElementById('cancelMatchBtn');
    this.currentQueuingGame = null;

    this.initSocket();
    this.setupEvents();
  }

  initSocket() {
    this.socket = io();
    window.chatSocket = this.socket;

    let savedName = localStorage.getItem('chat_username');
    if (!savedName) {
      savedName = 'GameThủ_' + Math.floor(100 + Math.random() * 900);
      localStorage.setItem('chat_username', savedName);
    }

    this.socket.on('connect', () => {
      this.socket.emit('join', savedName);
    });

    this.socket.on('init', (data) => {
      this.currentUser = data.currentUser;
      window.currentUser = data.currentUser;
      this.updateProfileUI();
      this.renderMessages(data.history);
      this.updateUsersList(data.users);
    });

    this.socket.on('new_message', (msg) => {
      this.appendMessage(msg);
      window.soundFX.playBeep(600, 0.04);
    });

    this.socket.on('user_joined', (data) => {
      this.appendMessage(data.message);
      this.updateUsersList(data.users);
    });

    this.socket.on('user_left', (data) => {
      this.appendMessage(data.message);
      this.updateUsersList(data.users);
    });

    // 1. Nhận lời mời thách đấu đích danh
    this.socket.on('received_direct_challenge', (data) => {
      this.pendingChallenge = data;
      this.challengerNameSpan.innerText = data.challengerName;
      if (this.challengeGameLabel) this.challengeGameLabel.innerText = data.gameLabel;
      this.challengeModal.classList.add('open');
      window.soundFX.playCoin();
    });

    this.socket.on('challenge_declined', (data) => {
      alert(`${data.name} đã từ chối lời mời thách đấu.`);
    });

    // 2. Trạng thái hàng chờ tìm trận
    this.socket.on('queue_waiting', (data) => {
      this.currentQueuingGame = data.gameType;
      const name = data.gameType === 'xiangqi' ? 'Cờ Tướng' : 'Cờ Caro';
      this.matchmakingText.innerHTML = `Đang tìm đối thủ chơi <strong>${name}</strong>...<br><span style="font-size:0.85rem; color:#94a3b8">Hệ thống sẽ tự ghép ngay khi có người sẵn sàng</span>`;
      this.matchmakingModal.classList.add('open');
    });

    this.socket.on('match_error', (data) => {
      alert(data.message);
    });

    // 3. Sự kiện Cờ Caro Online
    this.socket.on('caro_game_start', (data) => {
      this.matchmakingModal.classList.remove('open');
      if (window.switchGameTab) window.switchGameTab('caro');
      if (window.caroGameInstance) {
        window.caroGameInstance.onOnlineGameStart(data);
      }
    });

    this.socket.on('caro_move_made', (data) => {
      if (window.caroGameInstance) window.caroGameInstance.onOnlineMoveMade(data);
    });

    this.socket.on('caro_game_over', (data) => {
      if (window.caroGameInstance) window.caroGameInstance.onOnlineGameOver(data);
    });

    this.socket.on('caro_opponent_disconnected', (data) => {
      alert(data.text);
      if (window.caroGameInstance) window.caroGameInstance.endGame(data.text);
    });

    // 4. Sự kiện Cờ Tướng Online
    this.socket.on('xiangqi_game_start', (data) => {
      this.matchmakingModal.classList.remove('open');
      if (window.switchGameTab) window.switchGameTab('xiangqi');
      if (window.xiangqiGameInstance) {
        window.xiangqiGameInstance.onOnlineGameStart(data);
      }
    });

    this.socket.on('xiangqi_move_made', (data) => {
      if (window.xiangqiGameInstance) window.xiangqiGameInstance.onOnlineMoveMade(data);
    });

    this.socket.on('xiangqi_game_over', (data) => {
      if (window.xiangqiGameInstance) window.xiangqiGameInstance.onOnlineGameOver(data);
    });

    this.socket.on('xiangqi_opponent_disconnected', (data) => {
      alert(data.text);
      if (window.xiangqiGameInstance) window.xiangqiGameInstance.endGame(data.text);
    });
  }

  setupEvents() {
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    this.chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    // Quick emoji buttons
    document.querySelectorAll('.emoji-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.chatInput.value += btn.innerText;
        this.chatInput.focus();
      });
    });

    // Challenge Modal actions
    this.acceptChallengeBtn.addEventListener('click', () => {
      this.challengeModal.classList.remove('open');
      if (this.pendingChallenge) {
        this.socket.emit('respond_direct_challenge', {
          challengerId: this.pendingChallenge.challengerId,
          gameType: this.pendingChallenge.gameType,
          accept: true
        });
        this.pendingChallenge = null;
      }
    });

    this.declineChallengeBtn.addEventListener('click', () => {
      this.challengeModal.classList.remove('open');
      if (this.pendingChallenge) {
        this.socket.emit('respond_direct_challenge', {
          challengerId: this.pendingChallenge.challengerId,
          gameType: this.pendingChallenge.gameType,
          accept: false
        });
        this.pendingChallenge = null;
      }
    });

    // Matchmaking Cancel
    if (this.cancelMatchBtn) {
      this.cancelMatchBtn.addEventListener('click', () => {
        this.matchmakingModal.classList.remove('open');
        if (this.currentQueuingGame) {
          this.socket.emit('queue_leave', { gameType: this.currentQueuingGame });
          this.currentQueuingGame = null;
        }
      });
    }

    // Click profile để đổi tên
    this.userNameDisplay.parentElement.addEventListener('click', () => {
      const newName = prompt('Nhập tên hiển thị mới của bạn:', this.currentUser ? this.currentUser.username : '');
      if (newName && newName.trim()) {
        const clean = newName.trim().substring(0, 20);
        localStorage.setItem('chat_username', clean);
        window.location.reload();
      }
    });
  }

  updateProfileUI() {
    if (!this.currentUser) return;
    this.userNameDisplay.innerText = this.currentUser.username;
    this.userAvatarDot.style.backgroundColor = this.currentUser.color;
    this.userAvatarDot.innerText = (this.currentUser.username[0] || 'U').toUpperCase();
  }

  sendMessage() {
    const text = this.chatInput.value.trim();
    if (!text) return;
    this.socket.emit('send_message', text);
    this.chatInput.value = '';
    this.chatInput.focus();
  }

  // Gửi thách đấu công khai lên chat (Ai trong phòng cũng bấm nhận được!)
  sendPublicChallenge(gameType, variant = 'coup') {
    if (!this.socket) return;
    this.socket.emit('send_public_challenge', { gameType, variant });
  }

  // Tìm trận nhanh (Hệ thống tự ghép)
  startQuickMatch(gameType, variant = 'coup') {
    if (!this.socket) return;
    this.socket.emit('queue_join', { gameType, variant });
  }


  shareScore(gameName, score) {
    if (!this.socket) return;
    this.socket.emit('share_score', { gameName, score });
    alert(`Đã chia sẻ thành tích [${score}] game "${gameName}" vào phòng chat! 🚀`);
  }

  renderMessages(messages) {
    this.messagesList.innerHTML = '';
    messages.forEach(msg => this.appendMessage(msg, false));
    this.scrollToBottom();
  }

  appendMessage(msg, scroll = true) {
    let el = document.createElement('div');

    if (msg.type === 'system') {
      el.className = 'msg-system';
      el.innerText = msg.text;
    } else if (msg.type === 'badge') {
      el.className = 'msg-badge';
      el.innerHTML = `
        <div class="msg-badge-tag">${msg.badge}</div>
        <div><strong>${msg.sender}:</strong> ${msg.text}</div>
      `;
    } else if (msg.type === 'challenge_card') {
      // THẺ THÁCH ĐẤU TƯƠNG TÁC NGAY TRONG CHAT!
      const isMyChallenge = this.currentUser && this.currentUser.id === msg.senderId;
      el.className = 'msg-challenge-card';
      el.innerHTML = `
        <div class="challenge-card-header">
          <span style="font-size: 1.3rem;">⚔️</span>
          <strong>Lời Thách Đấu ${msg.gameLabel}!</strong>
        </div>
        <p style="font-size: 0.88rem; margin: 6px 0;">${msg.text}</p>
        <div style="margin-top: 8px;">
          ${!isMyChallenge ? 
            `<button class="btn-accept-challenge-chat" onclick="window.chatClient.acceptPublicChallenge('${msg.challengeId}')">⚡ NHẬN LỜI THÁCH ĐẤU NGAY</button>` : 
            `<span style="font-size:0.8rem; color:#94a3b8;">(Kèo của bạn - Đang đợi đối thủ vào nhận...)</span>`
          }
        </div>
      `;
    } else {
      const isSelf = this.currentUser && this.currentUser.username === msg.sender;
      el.className = `msg-item ${isSelf ? 'self' : 'other'}`;
      el.innerHTML = `
        <div class="msg-header">
          <span class="msg-sender" style="color: ${msg.color}">${msg.sender}</span>
          <span>${msg.time || ''}</span>
        </div>
        <div class="msg-bubble">${this.escapeHtml(msg.text)}</div>
      `;
    }

    this.messagesList.appendChild(el);
    if (scroll) this.scrollToBottom();
  }

  acceptPublicChallenge(challengeId) {
    if (!this.socket) return;
    this.socket.emit('accept_public_challenge', { challengeId });
  }

  scrollToBottom() {
    this.messagesList.scrollTop = this.messagesList.scrollHeight;
  }

  updateUsersList(users) {
    this.onlineUsers = users;
    this.onlineCount.innerText = users.length;
    this.drawerCount.innerText = users.length;

    this.drawerList.innerHTML = '';
    users.forEach(u => {
      const isSelf = this.currentUser && this.currentUser.id === u.id;
      const row = document.createElement('div');
      row.className = 'user-row';
      row.innerHTML = `
        <div class="user-info">
          <div class="user-avatar-small" style="background-color: ${u.color}">
            ${(u.username[0] || 'U').toUpperCase()}
          </div>
          <div>
            <div style="font-size: 0.9rem; font-weight: 600;">
              ${this.escapeHtml(u.username)} ${isSelf ? '<span style="color:#38bdf8">(Bạn)</span>' : ''}
            </div>
            <div style="font-size: 0.72rem; color: #10b981;">● Đang online</div>
          </div>
        </div>
        ${!isSelf ? `
          <div style="display:flex; gap: 4px;">
            <button class="btn-challenge" onclick="window.chatClient.sendDirectChallenge('${u.id}', 'xiangqi')" title="Thách đấu Cờ Tướng">🎎 Cờ Tướng</button>
            <button class="btn-challenge btn-challenge-caro" onclick="window.chatClient.sendDirectChallenge('${u.id}', 'caro')" title="Thách đấu Cờ Caro">⭕ Caro</button>
          </div>
        ` : ''}
      `;
      this.drawerList.appendChild(row);
    });
  }

  sendDirectChallenge(targetSocketId, gameType) {
    this.socket.emit('send_direct_challenge', { targetSocketId, gameType });
    alert(`Đã gửi lời mời thách đấu! Vui lòng chờ đối thủ bấm đồng ý...`);
  }

  escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
}

window.ChatClient = ChatClient;
