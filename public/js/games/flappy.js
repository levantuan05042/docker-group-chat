// GAME FLAPPY BIRD CYBER
class FlappyGame {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scoreEl = document.getElementById('flappyScore');
    this.highScoreEl = document.getElementById('flappyHighScore');

    this.canvas.width = 360;
    this.canvas.height = 420;

    this.highScore = parseInt(localStorage.getItem('flappy_high') || '0', 10);
    this.highScoreEl.innerText = this.highScore;

    this.bird = { x: 50, y: 150, vy: 0, gravity: 0.28, jump: -6, radius: 14 };
    this.pipes = [];
    this.score = 0;
    this.isRunning = false;
    this.isGameOver = false;
    this.animId = null;
    this.frame = 0;

    this.setupInputs();
  }

  setupInputs() {
    const handleJump = (e) => {
      if (!this.isRunning || this.isGameOver) return;
      if (e.type === 'keydown' && e.code !== 'Space' && e.code !== 'ArrowUp') return;
      if (e.preventDefault) e.preventDefault();
      this.bird.vy = this.bird.jump;
      window.soundFX.playJump();
    };

    window.addEventListener('keydown', handleJump);
    this.canvas.addEventListener('mousedown', handleJump);
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      handleJump(e);
    });
  }

  start() {
    this.reset();
    this.isRunning = true;
    this.loop();
  }

  reset() {
    cancelAnimationFrame(this.animId);
    this.bird = { x: 50, y: 150, vy: 0, gravity: 0.28, jump: -6, radius: 14 };
    this.pipes = [];
    this.score = 0;
    this.frame = 0;
    this.scoreEl.innerText = 0;
    this.isGameOver = false;
  }

  update() {
    this.frame++;
    this.bird.vy += this.bird.gravity;
    this.bird.y += this.bird.vy;

    // Chạm sàn hoặc trần
    if (this.bird.y + this.bird.radius >= this.canvas.height - 20 || this.bird.y - this.bird.radius <= 0) {
      this.gameOver();
      return;
    }

    // Spawn pipes
    if (this.frame % 100 === 0) {
      const gap = 115;
      const topHeight = Math.floor(Math.random() * (this.canvas.height - gap - 100)) + 40;
      this.pipes.push({
        x: this.canvas.width,
        top: topHeight,
        bottom: this.canvas.height - topHeight - gap,
        passed: false
      });
    }

    // Update pipes
    for (let i = this.pipes.length - 1; i >= 0; i--) {
      const p = this.pipes[i];
      p.x -= 2.2;

      // Va chạm
      if (
        this.bird.x + this.bird.radius > p.x &&
        this.bird.x - this.bird.radius < p.x + 45
      ) {
        if (
          this.bird.y - this.bird.radius < p.top ||
          this.bird.y + this.bird.radius > this.canvas.height - p.bottom
        ) {
          this.gameOver();
          return;
        }
      }

      // Vượt qua ống
      if (!p.passed && p.x + 45 < this.bird.x) {
        p.passed = true;
        this.score++;
        this.scoreEl.innerText = this.score;
        window.soundFX.playCoin();
        if (this.score > this.highScore) {
          this.highScore = this.score;
          localStorage.setItem('flappy_high', this.highScore);
          this.highScoreEl.innerText = this.highScore;
        }
      }

      if (p.x + 45 < 0) {
        this.pipes.splice(i, 1);
      }
    }
  }

  draw() {
    this.ctx.fillStyle = '#0f172a';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Vẽ ống
    for (const p of this.pipes) {
      this.ctx.fillStyle = '#10b981';
      // Ống trên
      this.ctx.fillRect(p.x, 0, 45, p.top);
      this.ctx.fillStyle = '#059669';
      this.ctx.fillRect(p.x - 3, p.top - 16, 51, 16);

      // Ống dưới
      this.ctx.fillStyle = '#10b981';
      this.ctx.fillRect(p.x, this.canvas.height - p.bottom, 45, p.bottom);
      this.ctx.fillStyle = '#059669';
      this.ctx.fillRect(p.x - 3, this.canvas.height - p.bottom, 51, 16);
    }

    // Mặt đất
    this.ctx.fillStyle = '#334155';
    this.ctx.fillRect(0, this.canvas.height - 20, this.canvas.width, 20);

    // Vẽ Chim
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.beginPath();
    this.ctx.arc(this.bird.x, this.bird.y, this.bird.radius, 0, Math.PI * 2);
    this.ctx.fill();

    // Mắt chim
    this.ctx.fillStyle = '#ffffff';
    this.ctx.beginPath();
    this.ctx.arc(this.bird.x + 6, this.bird.y - 4, 4, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.arc(this.bird.x + 7, this.bird.y - 4, 2, 0, Math.PI * 2);
    this.ctx.fill();

    // Mỏ
    this.ctx.fillStyle = '#ef4444';
    this.ctx.beginPath();
    this.ctx.moveTo(this.bird.x + 10, this.bird.y);
    this.ctx.lineTo(this.bird.x + 19, this.bird.y + 4);
    this.ctx.lineTo(this.bird.x + 10, this.bird.y + 7);
    this.ctx.fill();

    if (this.isGameOver) {
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#ef4444';
      this.ctx.font = 'bold 22px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('RƠI MẤT RỒI! GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 15);
      this.ctx.fillStyle = '#f1f5f9';
      this.ctx.font = '15px sans-serif';
      this.ctx.fillText(`Điểm số: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 15);
    }
  }

  gameOver() {
    this.isGameOver = true;
    this.isRunning = false;
    window.soundFX.playCrash();
  }

  loop() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    if (!this.isGameOver) {
      this.animId = requestAnimationFrame(() => this.loop());
    }
  }
}

window.FlappyGame = FlappyGame;
