// CHAT & SOCKET.IO LOGIC
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
    this.acceptChallengeBtn = document.getElementById('acceptChallengeBtn');
    this.declineChallengeBtn = document.getElementById('declineChallengeBtn');
    this.pendingChallengerId = null;

    this.initSocket();
    this.setupEvents();
  }

  initSocket() {
    this.socket = io();
    window.chatSocket = this.socket;

    // Lấy tên đã lưu hoặc gợi ý tên mới
    let savedName = localStorage.getItem('chat_username');
    if (!savedName) {
      savedName = 'Player_' + Math.floor(100 + Math.random() * 900);
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

    // Caro Challenge Events
    this.socket.on('caro_received_challenge', (data) => {
      this.pendingChallengerId = data.challengerId;
      this.challengerNameSpan.innerText = data.challengerName;
      this.challengeModal.classList.add('open');
      window.soundFX.playCoin();
    });

    this.socket.on('caro_challenge_declined', (data) => {
      alert(`${data.name} đã từ chối lời mời thách đấu.`);
    });

    this.socket.on('caro_game_start', (data) => {
      // Tự động chuyển qua tab Cờ Caro
      if (window.switchGameTab) window.switchGameTab('caro');
      if (window.caroGameInstance) {
        window.caroGameInstance.onOnlineGameStart(data);
      }
    });

    this.socket.on('caro_move_made', (data) => {
      if (window.caroGameInstance) {
        window.caroGameInstance.onOnlineMoveMade(data);
      }
    });

    this.socket.on('caro_game_over', (data) => {
      if (window.caroGameInstance) {
        window.caroGameInstance.onOnlineGameOver(data);
      }
    });

    this.socket.on('caro_opponent_disconnected', (data) => {
      alert(data.text);
      if (window.caroGameInstance) {
        window.caroGameInstance.endGame(data.text);
      }
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
      if (this.pendingChallengerId) {
        this.socket.emit('caro_respond_challenge', {
          challengerId: this.pendingChallengerId,
          accept: true
        });
        this.pendingChallengerId = null;
      }
    });

    this.declineChallengeBtn.addEventListener('click', () => {
      this.challengeModal.classList.remove('open');
      if (this.pendingChallengerId) {
        this.socket.emit('caro_respond_challenge', {
          challengerId: this.pendingChallengerId,
          accept: false
        });
        this.pendingChallengerId = null;
      }
    });

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

  shareScore(gameName, score) {
    if (!this.socket) return;
    this.socket.emit('share_score', { gameName, score });
    alert(`Đã chia sẻ ${score} điểm game "${gameName}" vào phòng chat! 🚀`);
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
          <span style="font-size: 0.9rem; font-weight: 500;">
            ${this.escapeHtml(u.username)} ${isSelf ? '<span style="color:#38bdf8">(Bạn)</span>' : ''}
          </span>
        </div>
        ${!isSelf ? `<button class="btn-challenge" onclick="window.chatClient.sendCaroChallenge('${u.id}')">⚔️ Đấu Cờ</button>` : ''}
      `;
      this.drawerList.appendChild(row);
    });
  }

  sendCaroChallenge(targetSocketId) {
    this.socket.emit('caro_send_challenge', { targetSocketId });
    alert('Đã gửi lời mời thách đấu Cờ Caro! Vui lòng chờ đối thủ đồng ý...');
  }

  escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
}

window.ChatClient = ChatClient;
