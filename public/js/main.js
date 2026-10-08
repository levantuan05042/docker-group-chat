// MAIN CONTROLLER
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Chat
  window.chatClient = new ChatClient();

  // Initialize Games
  const shooterGame = new ShooterGame('shooterCanvas');
  const racingGame = new RacingGame('racingCanvas');
  const tetrisGame = new TetrisGame('tetrisCanvas');
  const snakeGame = new SnakeGame('snakeCanvas');
  const flappyGame = new FlappyGame('flappyCanvas');
  const caroGame = new CaroGame();

  window.caroGameInstance = caroGame;

  // Active game reference (mặc định mở Đột Kích)
  let currentGameId = 'shooter';
  let activeGameInstance = shooterGame;
  shooterGame.start();


  // Layout switcher
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

  // Sound toggle
  const soundBtn = document.getElementById('soundBtn');
  soundBtn.addEventListener('click', () => {
    const isMuted = window.soundFX.toggleMute();
    soundBtn.innerText = isMuted ? '🔇' : '🔊';
  });

  // Online Drawer Toggle
  const toggleDrawerBtn = document.getElementById('toggleDrawerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const onlineDrawer = document.getElementById('onlineDrawer');

  toggleDrawerBtn.addEventListener('click', () => {
    onlineDrawer.classList.toggle('open');
  });

  closeDrawerBtn.addEventListener('click', () => {
    onlineDrawer.classList.remove('open');
  });

  // Switch Game Tabs
  const gameTabs = document.querySelectorAll('.game-tab');
  const gameScreens = document.querySelectorAll('.game-screen');

  function switchGameTab(gameId) {
    currentGameId = gameId;

    gameTabs.forEach(t => t.classList.toggle('active', t.dataset.game === gameId));
    gameScreens.forEach(s => s.classList.toggle('active', s.id === `screen-${gameId}`));

    // Stop previous game animation
    if (activeGameInstance && activeGameInstance.isRunning !== undefined) {
      activeGameInstance.isRunning = false;
    }

    if (gameId === 'shooter') {
      activeGameInstance = shooterGame;
      shooterGame.start();
    } else if (gameId === 'racing') {
      activeGameInstance = racingGame;
      racingGame.start();
    } else if (gameId === 'caro') {
      activeGameInstance = caroGame;
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

  // Restart Buttons
  document.getElementById('restartShooterBtn').addEventListener('click', () => shooterGame.start());
  document.getElementById('restartRacingBtn').addEventListener('click', () => racingGame.start());
  document.getElementById('restartTetrisBtn').addEventListener('click', () => tetrisGame.start());
  document.getElementById('restartSnakeBtn').addEventListener('click', () => snakeGame.start());
  document.getElementById('restartFlappyBtn').addEventListener('click', () => flappyGame.start());
  document.getElementById('restartCaroBtn').addEventListener('click', () => caroGame.reset());

  // Share score buttons
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
});

