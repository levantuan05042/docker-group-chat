// MAIN CONTROLLER - ĐIỀU PHỐI GIAO DIỆN LAPTOP, TABLET & ĐIỆN THOẠI
document.addEventListener('DOMContentLoaded', () => {
  // 1. Khởi tạo Chat Client
  window.chatClient = new ChatClient();

  // 2. Khởi tạo các trò chơi
  const shooterGame = new ShooterGame('shooterCanvas');
  const xiangqiGame = new XiangqiGame();
  const caroGame = new CaroGame();
  const racingGame = new RacingGame('racingCanvas');
  const tetrisGame = new TetrisGame('tetrisCanvas');
  const snakeGame = new SnakeGame('snakeCanvas');
  const flappyGame = new FlappyGame('flappyCanvas');

  window.caroGameInstance = caroGame;
  window.xiangqiGameInstance = xiangqiGame;

  // Game mặc định mở ban đầu
  let currentGameId = 'shooter';
  let activeGameInstance = shooterGame;
  shooterGame.start();

  // 3. Layout switcher trên Laptop (Song song / Chỉ Game / Chỉ Chat)
  const mainWrapper = document.getElementById('mainWrapper');
  const layoutBtns = document.querySelectorAll('.layout-btn');

  layoutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      layoutBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      mainWrapper.className = `main-wrapper mode-${mode}`;
    });
  });

  // 4. Thanh điều hướng dưới đáy màn hình cho Điện thoại & Tablet
  const mobileNavItems = document.querySelectorAll('.nav-bottom-item');
  const onlineDrawer = document.getElementById('onlineDrawer');

  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileNavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const target = item.dataset.tab;
      if (target === 'game') {
        mainWrapper.className = 'main-wrapper mobile-show-game';
        onlineDrawer.classList.remove('open');
      } else if (target === 'chat') {
        mainWrapper.className = 'main-wrapper mobile-show-chat';
        onlineDrawer.classList.remove('open');
      } else if (target === 'users') {
        onlineDrawer.classList.add('open');
      }
    });
  });

  // Đồng bộ số người online lên thanh điều hướng mobile
  const observer = new MutationObserver(() => {
    const count = document.getElementById('onlineCount').innerText;
    const mobCount = document.getElementById('mobileOnlineCount');
    if (mobCount) mobCount.innerText = count;
  });
  const onlineCountEl = document.getElementById('onlineCount');
  if (onlineCountEl) observer.observe(onlineCountEl, { childList: true, characterData: true, subtree: true });

  // 5. Bật / Tắt âm thanh
  const soundBtn = document.getElementById('soundBtn');
  soundBtn.addEventListener('click', () => {
    const isMuted = window.soundFX.toggleMute();
    soundBtn.innerText = isMuted ? '🔇' : '🔊';
  });

  // 6. Ngăn kéo danh sách người online (Drawer)
  const toggleDrawerBtn = document.getElementById('toggleDrawerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  toggleDrawerBtn.addEventListener('click', () => {
    onlineDrawer.classList.toggle('open');
  });

  closeDrawerBtn.addEventListener('click', () => {
    onlineDrawer.classList.remove('open');
  });

  // 7. Chuyển đổi qua lại giữa các game
  const gameTabs = document.querySelectorAll('.game-tab');
  const gameScreens = document.querySelectorAll('.game-screen');

  function switchGameTab(gameId) {
    currentGameId = gameId;

    gameTabs.forEach(t => t.classList.toggle('active', t.dataset.game === gameId));
    gameScreens.forEach(s => s.classList.toggle('active', s.id === `screen-${gameId}`));

    // Dừng vòng lặp game trước
    if (activeGameInstance && activeGameInstance.isRunning !== undefined) {
      activeGameInstance.isRunning = false;
    }

    if (gameId === 'shooter') {
      activeGameInstance = shooterGame;
      shooterGame.start();
    } else if (gameId === 'xiangqi') {
      activeGameInstance = xiangqiGame;
    } else if (gameId === 'caro') {
      activeGameInstance = caroGame;
    } else if (gameId === 'racing') {
      activeGameInstance = racingGame;
      racingGame.start();
    } else if (gameId === 'tetris') {
      activeGameInstance = tetrisGame;
      tetrisGame.start();
    } else if (gameId === 'snake') {
      activeGameInstance = snakeGame;
      snakeGame.start();
    } else if (gameId === 'flappy') {
      activeGameInstance = flappyGame;
      flappyGame.start();
    }
  }

  window.switchGameTab = switchGameTab;

  gameTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      switchGameTab(tab.dataset.game);
    });
  });

  // 8. TÌM ĐỐI THỦ SIÊU DỄ: Ghép trận tự động & Thách đấu lên Chat
  // Cờ Tướng:
  document.getElementById('quickMatchXQBtn').addEventListener('click', () => {
    window.chatClient.startQuickMatch('xiangqi');
  });
  document.getElementById('publicChallengeXQBtn').addEventListener('click', () => {
    window.chatClient.sendPublicChallenge('xiangqi');
    alert('Đã gửi kèo solo Cờ Tướng lên phòng Chat! Bạn bè chỉ cần bấm vào là vào bàn ngay!');
  });
  document.getElementById('restartXQBtn').addEventListener('click', () => xiangqiGame.reset());

  // Cờ Caro:
  document.getElementById('quickMatchCaroBtn').addEventListener('click', () => {
    window.chatClient.startQuickMatch('caro');
  });
  document.getElementById('publicChallengeCaroBtn').addEventListener('click', () => {
    window.chatClient.sendPublicChallenge('caro');
    alert('Đã gửi kèo solo Cờ Caro lên phòng Chat! Ai bấm vào là vào bàn ngay!');
  });
  document.getElementById('restartCaroBtn').addEventListener('click', () => caroGame.reset());

  // Restart các game khác
  document.getElementById('restartShooterBtn').addEventListener('click', () => shooterGame.start());
  document.getElementById('restartRacingBtn').addEventListener('click', () => racingGame.start());
  document.getElementById('restartTetrisBtn').addEventListener('click', () => tetrisGame.start());
  document.getElementById('restartSnakeBtn').addEventListener('click', () => snakeGame.start());
  document.getElementById('restartFlappyBtn').addEventListener('click', () => flappyGame.start());

  // Khoe điểm / Kills vào Chat
  document.getElementById('shareShooterBtn').addEventListener('click', () => {
    window.chatClient.shareScore('Đột Kích Sinh Tồn (Free Fire)', `${shooterGame.kills} Kills`);
  });
  document.getElementById('shareRacingBtn').addEventListener('click', () => {
    window.chatClient.shareScore('Đua xe Turbo Highway', racingGame.score);
  });
  document.getElementById('shareTetrisBtn').addEventListener('click', () => {
    window.chatClient.shareScore('Xếp gạch Tetris', tetrisGame.score);
  });
  document.getElementById('shareSnakeBtn').addEventListener('click', () => {
    window.chatClient.shareScore('Rắn săn mồi Neon', snakeGame.score);
  });
  document.getElementById('shareFlappyBtn').addEventListener('click', () => {
    window.chatClient.shareScore('Flappy Bird Cyber', flappyGame.score);
  });

  // 9. Nút điều khiển cảm ứng ảo trên Điện thoại & Tablet cho game Đột Kích
  const touchMap = {
    touchLeft: 'KeyA',
    touchRight: 'KeyD',
    touchUp: 'KeyW',
    touchDown: 'KeyS'
  };

  Object.entries(touchMap).forEach(([btnId, code]) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const press = (e) => {
      e.preventDefault();
      shooterGame.keys[code] = true;
    };
    const release = (e) => {
      e.preventDefault();
      shooterGame.keys[code] = false;
    };
    btn.addEventListener('touchstart', press);
    btn.addEventListener('touchend', release);
    btn.addEventListener('mousedown', press);
    btn.addEventListener('mouseup', release);
  });

  const shootBtn = document.getElementById('touchShoot');
  if (shootBtn) {
    const shootStart = (e) => {
      e.preventDefault();
      shooterGame.mouse.isDown = true;
      shooterGame.tryShoot();
    };
    const shootEnd = (e) => {
      e.preventDefault();
      shooterGame.mouse.isDown = false;
    };
    shootBtn.addEventListener('touchstart', shootStart);
    shootBtn.addEventListener('touchend', shootEnd);
    shootBtn.addEventListener('mousedown', shootStart);
    shootBtn.addEventListener('mouseup', shootEnd);
  }
});
