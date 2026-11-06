import * as THREE from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { io } from 'socket.io-client';
import { TempleScene } from './temple.js';
import { AvatarManager } from './avatars.js';
import { PlayerController } from './controller.js';
import { templeAudio } from './audio.js';

const RANDOM_NAMES = [
  'Thích thì nhích',
  'Thích ăn chực',
  'Thích đủ thứ',
  'Thích tạo nghiệp',
  'Thích ngủ nướng',
  'Thích ăn vặt',
  'Thích nhiều chuyện',
  'Thích cúng dường',
  'Thích an lạc',
  'Thích buông bỏ',
  'Thích tĩnh tâm',
  'Thích trà đạo',
  'Thích tàu hủ',
  'Thích ăn nhậu',
  'Thích trúng số',
  'Thích thì chìu',
  'Thích im lặng',
  'Thích drama',
  'Thích sống ảo',
  'Thích vô đây'
];

class ChuaOnlineApp {
  constructor() {
    this.canvasContainer = document.getElementById('canvas-container');
    this.css2dContainer = document.getElementById('css2d-container');

    this.socket = null;
    this.myId = null;
    this.myName = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
    this.myRoomId = 'dai-hung-bao-dien';
    this.currentAction = 'stand';
    this.selectedRobeColor = '#E69500';

    this.initThree();
    this.initUI();
    this.initMusicControls();
    this.autoJoinTemple();
  }

  initThree() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    this.camera.position.set(0, 3, 10);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.38;
    this.canvasContainer.appendChild(this.renderer.domElement);

    this.css2dRenderer = new CSS2DRenderer();
    this.css2dRenderer.setSize(window.innerWidth, window.innerHeight);
    this.css2dRenderer.domElement.style.position = 'absolute';
    this.css2dRenderer.domElement.style.top = '0';
    this.css2dRenderer.domElement.style.left = '0';
    this.css2dRenderer.domElement.style.pointerEvents = 'none';
    this.css2dContainer.appendChild(this.css2dRenderer.domElement);

    this.temple = new TempleScene(this.scene);
    this.avatarManager = new AvatarManager(this.scene);

    this.controller = new PlayerController(
      this.camera,
      this.renderer.domElement,
      (coords) => {
        if (this.socket && this.myId) {
          this.socket.emit('move', coords);
        }
      },
      this.temple
    );

    window.addEventListener('resize', () => this.onWindowResize());

    this.clock = new THREE.Clock();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.css2dRenderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate);
    const delta = Math.min(this.clock.getDelta(), 0.1);

    this.temple.update(delta);
    this.avatarManager.update(delta);
    this.controller.update(delta, this.avatarManager, this.myId);

    this.renderer.render(this.scene, this.camera);
    this.css2dRenderer.render(this.scene, this.camera);
  }

  initMusicControls() {
    const btnToggle = document.getElementById('btn-toggle-music');
    const stateText = document.getElementById('music-state-text');
    const wave = document.getElementById('audio-wave');
    const selectTrack = document.getElementById('select-track');
    const volSlider = document.getElementById('volume-slider');

    const updateUIState = (isPlaying) => {
      if (isPlaying) {
        btnToggle.classList.add('playing');
        stateText.textContent = 'Đang Gõ Mõ';
        wave.classList.add('active');
      } else {
        btnToggle.classList.remove('playing');
        stateText.textContent = 'Bật Mõ Thiền';
        wave.classList.remove('active');
      }
    };

    btnToggle.addEventListener('click', () => {
      const isPlaying = templeAudio.toggleMusic();
      updateUIState(isPlaying);
    });

    selectTrack.addEventListener('change', (e) => {
      templeAudio.selectTrack(e.target.value);
      if (!templeAudio.isPlaying) {
        templeAudio.startMusic();
      }
      updateUIState(true);
    });

    volSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value) / 100;
      templeAudio.setVolume(val);
    });

    this.updateMusicUI = updateUIState;

    // Start audio on first user interaction anywhere
    const startAudioOnFirstClick = () => {
      if (!templeAudio.isPlaying) {
        templeAudio.startMusic();
        updateUIState(true);
      }
      window.removeEventListener('pointerdown', startAudioOnFirstClick);
      window.removeEventListener('keydown', startAudioOnFirstClick);
    };
    window.addEventListener('pointerdown', startAudioOnFirstClick);
    window.addEventListener('keydown', startAudioOnFirstClick);
  }

  initUI() {
    // Check URL room
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam) {
      this.myRoomId = roomParam;
      const roomInput = document.getElementById('input-room');
      if (roomInput) roomInput.value = roomParam;
    }

    // Set initial display name
    document.getElementById('header-my-name').textContent = this.myName;
    document.getElementById('input-name').value = this.myName;
    document.getElementById('header-avatar-dot').style.background = this.selectedRobeColor;

    // Reset Camera Button
    document.getElementById('btn-reset-cam').addEventListener('click', () => {
      this.controller.resetToIconicView();
      this.showToast('📷 Đã quay về góc nhìn Chánh Điện!');
    });

    // Profile Modal Toggle
    const profileModal = document.getElementById('profile-modal');
    document.getElementById('btn-open-profile').addEventListener('click', () => {
      profileModal.style.display = 'flex';
    });

    document.getElementById('btn-save-profile').addEventListener('click', () => {
      const newName = document.getElementById('input-name').value.trim();
      const newRoom = document.getElementById('input-room').value.trim() || 'dai-hung-bao-dien';

      if (newName) this.myName = newName;
      document.getElementById('header-my-name').textContent = this.myName;
      document.getElementById('header-avatar-dot').style.background = this.selectedRobeColor;

      profileModal.style.display = 'none';

      // Reconnect if room changed or update info
      if (newRoom !== this.myRoomId) {
        window.location.search = `?room=${encodeURIComponent(newRoom)}`;
      } else {
        // Re-join with new name/color
        if (this.socket) {
          this.socket.emit('join', {
            name: this.myName,
            roomId: this.myRoomId,
            robeColor: this.selectedRobeColor
          });
        }
      }
      this.showToast(`✨ Đã cập nhật pháp danh: ${this.myName}`);
    });

    // Random Name Button
    const btnRandom = document.getElementById('btn-random-name');
    const inputName = document.getElementById('input-name');
    btnRandom.addEventListener('click', () => {
      const random = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
      inputName.value = random;
    });

    // Quick name tags
    document.querySelectorAll('.name-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        inputName.value = tag.textContent;
      });
    });

    // Robe Palette
    const colorOpts = document.querySelectorAll('.robe-color-opt');
    colorOpts.forEach(opt => {
      opt.addEventListener('click', () => {
        colorOpts.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        this.selectedRobeColor = opt.getAttribute('data-color');

        const previewBadge = document.getElementById('avatar-preview-badge');
        if (previewBadge) {
          previewBadge.style.borderColor = this.selectedRobeColor;
        }
      });
    });

    // Sound effects toggle
    const btnSound = document.getElementById('btn-sound');
    btnSound.addEventListener('click', () => {
      if (templeAudio.sfxGain) {
        const isMuted = templeAudio.sfxGain.gain.value === 0;
        templeAudio.sfxGain.gain.setValueAtTime(isMuted ? 0.85 : 0, templeAudio.ctx.currentTime);
        btnSound.textContent = isMuted ? '🔔' : '🔕';
        btnSound.title = isMuted ? 'Tắt Hiệu Ứng' : 'Bật Hiệu Ứng';
      }
    });

    // Share Invite Link
    const btnShare = document.getElementById('btn-share');
    btnShare.addEventListener('click', () => {
      const url = new URL(window.location.href);
      url.searchParams.set('room', this.myRoomId);
      navigator.clipboard.writeText(url.href).then(() => {
        this.showToast('🔗 Đã copy link phòng! Gửi cho bạn bè để cùng vào chùa.');
      }).catch(() => {
        this.showToast(`Link phòng: ${url.href}`);
      });
    });

    // Chat Panel Toggle
    const chatToggle = document.getElementById('chat-panel-toggle');
    const chatPanel = document.getElementById('chat-panel');
    const chatIcon = document.getElementById('chat-toggle-icon');
    chatToggle.addEventListener('click', () => {
      chatPanel.classList.toggle('collapsed');
      chatIcon.textContent = chatPanel.classList.contains('collapsed') ? '▲' : '▼';
    });

    // Live Chat Submit (FLOAT BUBBLE OVER AVATAR!)
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text || !this.socket) return;

      this.socket.emit('chat', { text });
      chatInput.value = '';
    });

    // Quick Canned Chat Presets (1-tap chat bubble)
    document.querySelectorAll('.preset-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const msg = btn.getAttribute('data-msg');
        if (msg && this.socket) {
          this.socket.emit('chat', { text: msg });
        }
      });
    });

    // Action Toolbar buttons - Theo đúng quy trình Phật môn thực tế:
    document.getElementById('act-sit').addEventListener('click', () => this.handleActionSit());
    document.getElementById('act-bow').addEventListener('click', () => this.handleActionBow());
    document.getElementById('act-woodfish').addEventListener('click', () => this.handleActionWoodfish());
    document.getElementById('act-bell').addEventListener('click', () => this.handleActionBell());
    document.getElementById('act-incense').addEventListener('click', () => this.handleActionIncense());
    document.getElementById('act-fortune').addEventListener('click', () => this.handleActionFortune());

    // Hotkeys [1..6] and [Enter]
    window.addEventListener('keydown', (e) => {
      if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) return;

      switch (e.key) {
        case '1':
          this.handleActionSit();
          break;
        case '2':
          this.handleActionBow();
          break;
        case '3':
          this.handleActionWoodfish();
          break;
        case '4':
          this.handleActionBell();
          break;
        case '5':
          this.handleActionIncense();
          break;
        case '6':
          this.handleActionFortune();
          break;
        case 'Enter':
          e.preventDefault();
          chatInput.focus();
          break;
      }
    });

    // Close Fortune Modal
    document.getElementById('btn-close-fortune').addEventListener('click', () => {
      document.getElementById('fortune-modal').style.display = 'none';
    });

    // Handle cancel auto movement / continuous actions when user walks away
    if (this.controller) {
      this.controller.onCancelCallback = () => {
        this.stopContinuousWoodfishLoop();
        if (this.currentAction === 'sit' || this.currentAction === 'strikeWoodfish') {
          this.setAction('stand');
        }
      };
    }
  }

  // =========================================================================
  // 1: NGỒI THIỀN: Tự động chạy ra bồ đoàn gần nhất rồi ngồi kiết già
  // =========================================================================
  handleActionSit() {
    this.stopContinuousWoodfishLoop();
    if (this.currentAction === 'sit') {
      this.setAction('stand');
      this.showToast('Đã xuất thiền đứng dậy 🙏');
      return;
    }

    const c = this.temple.findNearestCushion(this.controller.position.x, this.controller.position.z);
    this.showToast('Đang bước lại bồ đoàn tọa thiền...');
    this.controller.runToTarget(c.x, c.z, Math.PI, () => {
      this.setAction('sit');
      this.showToast('Đã an tọa thiền định kiết già trên bồ đoàn 🙏');
    });
  }

  // =========================================================================
  // 2: LẠY PHẬT: Chắp tay búp sen trước ngực rồi lạy 3 lạy trang nghiêm
  // =========================================================================
  handleActionBow() {
    this.stopContinuousWoodfishLoop();
    this.controller.rotationY = Math.PI;
    this.showToast('Thành tâm chắp tay đảnh lễ Tam Bảo (3 lạy)...');
    this.setAction('bow3Times');

    // Tiếng chuông khánh ngân nhẹ theo từng lạy
    [0.3, 2.7, 5.1].forEach((delaySec, idx) => {
      setTimeout(() => {
        if (this.currentAction === 'bow3Times' || this.currentAction === 'bow') {
          templeAudio.playGentleBellAccent();
          this.showToast(`Đảnh lễ Tam Bảo: Lạy ${idx + 1}/3 🙏`);
        }
      }, delaySec * 1000);
    });

    setTimeout(() => {
      if (this.currentAction === 'bow3Times') {
        this.setAction('stand');
        this.showToast('Tam bái viên mãn, công đức vô lượng! 🙏');
      }
    }, 7400);
  }

  // =========================================================================
  // 3: GÕ MÕ: Chạy ra chỗ mõ gỗ, cầm dùi gõ nhiều cái liên tục đến khi đi chỗ khác
  // =========================================================================
  handleActionWoodfish() {
    if (this.currentAction === 'strikeWoodfish') {
      this.stopContinuousWoodfishLoop();
      this.setAction('stand');
      this.showToast('Đã dừng gõ mõ 🙏');
      return;
    }

    const st = this.temple.interactiveStations.woodfish;
    this.showToast('Đang bước lại kệ Mõ Gỗ Bát Nhã...');
    this.controller.runToTarget(st.x, st.z, st.rotY, () => {
      this.setAction('strikeWoodfish');
      this.showToast('Đang gõ mõ tụng kinh liên tục... (Nhấn di chuyển để dừng)');
      this.startContinuousWoodfishLoop();
    });
  }

  startContinuousWoodfishLoop() {
    this.stopContinuousWoodfishLoop();
    this.woodfishLoopTimer = setInterval(() => {
      if (this.currentAction !== 'strikeWoodfish') {
        this.stopContinuousWoodfishLoop();
        return;
      }
      templeAudio.playWoodfish();
      if (this.socket) this.socket.emit('strikeWoodfish');
      const st = this.temple.interactiveStations.woodfish;
      this.temple.spawnClickRipple(st.x + 1.2, st.z);
    }, 1050);
  }

  stopContinuousWoodfishLoop() {
    if (this.woodfishLoopTimer) {
      clearInterval(this.woodfishLoopTimer);
      this.woodfishLoopTimer = null;
    }
  }

  // =========================================================================
  // 4: THỈNH CHUÔNG: Chạy ra chỗ chuông, nâng chày đánh 1 cái ngân rền
  // =========================================================================
  handleActionBell() {
    this.stopContinuousWoodfishLoop();
    const st = this.temple.interactiveStations.bell;
    this.showToast('Đang bước lại Đại Hồng Chung...');
    this.controller.runToTarget(st.x, st.z, st.rotY, () => {
      this.setAction('strikeBell');
      setTimeout(() => {
        templeAudio.playBell();
        this.temple.spawnClickRipple(st.x - 1.4, st.z);
        if (this.socket) this.socket.emit('strikeBell');
        this.showToast('Đại Hồng Chung ngân vang rền mười phương! 🙏 (+5 Công đức)');
      }, 1050);
    });
  }

  // =========================================================================
  // 5: THẮP HƯƠNG: Chạy đi lấy 3 que hương, châm đốt, rồi cắm trước mặt Phật Tổ
  // =========================================================================
  handleActionIncense() {
    this.stopContinuousWoodfishLoop();
    const stTable = this.temple.interactiveStations.incenseTable;
    const stBurner = this.temple.interactiveStations.incenseBurner;

    this.showToast('Bước đến bàn thỉnh 3 nén hương trầm...');
    // Giai đoạn 1: Chạy đến bàn hương
    this.controller.runToTarget(stTable.x, stTable.z, stTable.rotY, () => {
      this.setAction('incense'); // 3 nén nhang đỏ khói xuất hiện trên tay
      this.showToast('Đã thỉnh và châm 3 nén tâm hương. Cung kính tiến về trước Phật điện...');

      setTimeout(() => {
        // Giai đoạn 2: Cầm 3 nén hương đi đến Lư hương trước Phật
        this.controller.runToTarget(stBurner.x, stBurner.z, stBurner.rotY, () => {
          this.showToast('Cung kính vái 3 vái và cắm hương vào lư đồng...');

          setTimeout(() => {
            if (this.socket) this.socket.emit('lightIncense');
            this.showToast('Đã dâng 3 nén tâm hương cúng dường Phật Tổ! 🙏 (+3 Công đức)');
          }, 4600);
        });
      }, 1200);
    });
  }

  // =========================================================================
  // 6: XIN XĂM: Chạy đến ô thẻ xóc xóc rơi thẻ rồi mới hiện thêm thông điệp
  // =========================================================================
  handleActionFortune() {
    this.stopContinuousWoodfishLoop();
    const st = this.temple.interactiveStations.fortuneTable;
    this.showToast('Bước đến bàn xin xăm Quán Thế Âm...');

    // Giai đoạn 1: Chạy đến bàn xin xăm
    this.controller.runToTarget(st.x, st.z, st.rotY, () => {
      this.setAction('shakeFortune'); // Hai tay cầm ống xăm rung lắc liên tục
      this.showToast('Thành tâm nâng ống xăm... Lắc xóc đều tay...');
      this.playFortuneRattleAudio();

      setTimeout(() => {
        // Giai đoạn 2: Rơi thẻ xăm ra bàn/sàn
        this.temple.spawnDroppingFortuneStick(st.x, st.z + 0.6, () => {
          // GIAI ĐOẠN 3: ĐÚNG LÚC THẺ RƠI XUỐNG SÀN MỚI EMIT VÀ HIỆN THÔNG ĐIỆP
          templeAudio.playWoodfish();
          if (this.socket) this.socket.emit('drawFortune');
          this.setAction('stand');
        });
      }, 2500);
    });
  }

  playFortuneRattleAudio() {
    if (!templeAudio || !templeAudio.ctx) return;
    const ctx = templeAudio.ctx;
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(620 + Math.random() * 260, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.04);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      }, i * 340);
    }
  }

  setAction(action) {
    this.currentAction = action;

    ['sit', 'bow', 'woodfish', 'bell', 'incense', 'fortune'].forEach(act => {
      const btn = document.getElementById(`act-${act}`);
      if (btn) {
        if (action === act || (act === 'bow' && action === 'bow3Times') || (act === 'woodfish' && action === 'strikeWoodfish')) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    });

    if (this.avatarManager && this.myId) {
      this.avatarManager.setAction(this.myId, this.currentAction);
    }
    if (this.socket) {
      this.socket.emit('action', { action: this.currentAction });
    }
  }

  // DIRECT ACCESS - NO ANNOYING LOGIN BLOCK
  autoJoinTemple() {
    this.socket = io({
      transports: ['websocket', 'polling']
    });

    this.socket.on('connect', () => {
      this.socket.emit('join', {
        name: this.myName,
        roomId: this.myRoomId,
        robeColor: this.selectedRobeColor
      });
    });

    this.socket.on('initRoom', (data) => {
      this.myId = data.yourId;
      this.avatarManager.setLocalPlayerId(this.myId);

      document.getElementById('room-name-display').textContent = data.roomName || 'Đại Hùng Bảo Điện';
      document.getElementById('total-merit-display').textContent = data.totalMerit.toLocaleString();
      document.getElementById('online-count-display').textContent = data.players.length;

      data.players.forEach(p => {
        const av = this.avatarManager.createAvatar(p);
        if (p.id === this.myId) {
          this.controller.setPosition(p.x, p.y, p.z, p.rotY);
        }
        if (p.action) {
          this.avatarManager.setAction(p.id, p.action);
        }
      });

      if (data.chatHistory) {
        data.chatHistory.forEach(msg => this.appendChatMessage(msg));
      }

      this.showToast(`🙏 A Di Đà Phật! Đã vào chùa với pháp danh: [${this.myName}]`);
    });

    this.socket.on('playerJoined', (data) => {
      this.avatarManager.createAvatar(data);
      this.updateOnlineCount(1);
    });

    this.socket.on('playerMoved', (data) => {
      this.avatarManager.updateAvatarData(data.id, data);
    });

    this.socket.on('playerActionChanged', ({ id, action }) => {
      this.avatarManager.setAction(id, action);
    });

    this.socket.on('newChatMessage', (msg) => {
      this.appendChatMessage(msg);
    });

    // 3D SPEECH BUBBLE ON TOP OF HEAD
    this.socket.on('showBubble', ({ playerId, text, duration }) => {
      this.avatarManager.showBubble(playerId, text, duration);
    });

    // Woodfish
    this.socket.on('woodfishStruck', (data) => {
      templeAudio.playWoodfish();
      document.getElementById('total-merit-display').textContent = data.totalMerit.toLocaleString();
      this.avatarManager.updateMerit(data.playerId, data.playerMerit);
      this.triggerFloatingMerit('+1 Công Đức 🪷', data.playerId);
    });

    // Bell
    this.socket.on('bellStruck', (data) => {
      templeAudio.playBell();
      document.getElementById('total-merit-display').textContent = data.totalMerit.toLocaleString();
      this.avatarManager.updateMerit(data.playerId, data.playerMerit);
      this.triggerFloatingMerit('+5 Công Đức 🔔', data.playerId);
    });

    // Incense
    this.socket.on('incenseLit', (data) => {
      templeAudio.playBell();
      document.getElementById('total-merit-display').textContent = data.totalMerit.toLocaleString();
      this.triggerFloatingMerit('+3 Công Đức 🪔', data.playerId);
    });

    // Fortune
    this.socket.on('fortuneResult', (fortune) => {
      templeAudio.playBell();
      this.showFortuneModal(fortune);
    });

    // Player left
    this.socket.on('playerLeft', (data) => {
      this.avatarManager.removeAvatar(data.id);
      this.updateOnlineCount(-1);
      this.appendChatMessage({
        senderName: 'Chính Điện',
        text: `Đồng tu [${data.name}] đã rời bước. Chúc vạn sự bình yên!`
      });
    });
  }

  appendChatMessage(msg) {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const div = document.createElement('div');
    if (msg.senderId === 'system') {
      div.className = 'chat-msg system';
      div.textContent = msg.text;
    } else {
      div.className = 'chat-msg';
      div.innerHTML = `<span class="sender">${this.avatarManager.escapeHtml(msg.senderName)}:</span> ${this.avatarManager.escapeHtml(msg.text)}`;
    }
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  showFortuneModal(fortune) {
    document.getElementById('fortune-title').textContent = fortune.title;
    document.getElementById('fortune-poem').textContent = fortune.poem;
    document.getElementById('fortune-advice').textContent = `💡 Lời Phật dạy: ${fortune.advice}`;
    document.getElementById('fortune-modal').style.display = 'flex';
  }

  triggerFloatingMerit(text, playerId) {
    const av = this.avatarManager.avatars.get(playerId);
    let screenX = window.innerWidth / 2;
    let screenY = window.innerHeight / 2;

    if (av) {
      const pos = av.group.position.clone();
      pos.y += 2.25;
      pos.project(this.camera);
      screenX = (pos.x * 0.5 + 0.5) * window.innerWidth;
      screenY = (-(pos.y * 0.5) + 0.5) * window.innerHeight;
    }

    const pop = document.createElement('div');
    pop.className = 'floating-merit';
    pop.textContent = text;
    pop.style.left = `${screenX}px`;
    pop.style.top = `${screenY}px`;
    document.body.appendChild(pop);

    setTimeout(() => pop.remove(), 1200);
  }

  showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2800);
  }

  updateOnlineCount(delta) {
    const el = document.getElementById('online-count-display');
    const current = parseInt(el.textContent) || 1;
    el.textContent = Math.max(1, current + delta);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new ChuaOnlineApp();
});
