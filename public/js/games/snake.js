// GAME RẮN SĂN MỒI: NEON CYBER SNAKE
class SnakeGame {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scoreEl = document.getElementById('snakeScore');
    this.highScoreEl = document.getElementById('snakeHighScore');

    this.gridSize = 20;
    this.cols = 20;
    this.rows = 20;
    this.canvas.width = this.cols * this.gridSize;
    this.canvas.height = this.rows * this.gridSize;

    this.highScore = parseInt(localStorage.getItem('snake_high') || '0', 10);
    this.highScoreEl.innerText = this.highScore;

    this.snake = [];
    this.food = {};
    this.dx = 1;
    this.dy = 0;
    this.score = 0;
    this.isRunning = false;
    this.isGameOver = false;
    this.animId = null;
    this.lastTime = 0;
    this.speed = 100; // ms

    this.setupInputs();
  }

  setupInputs() {
    window.addEventListener('keydown', (e) => {
      if (!this.isRunning || this.isGameOver) return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyS', 'KeyA', 'KeyD'].includes(e.code)) {
        e.preventDefault();
      }

      if ((e.code === 'ArrowUp' || e.code === 'KeyW') && this.dy === 0) {
        this.dx = 0; this.dy = -1;
      } else if ((e.code === 'ArrowDown' || e.code === 'KeyS') && this.dy === 0) {
        this.dx = 0; this.dy = 1;
      } else if ((e.code === 'ArrowLeft' || e.code === 'KeyA') && this.dx === 0) {
        this.dx = -1; this.dy = 0;
      } else if ((e.code === 'ArrowRight' || e.code === 'KeyD') && this.dx === 0) {
        this.dx = 1; this.dy = 0;
      }
    });
  }

  start() {
    this.reset();
    this.isRunning = true;
    this.loop();
  }

  reset() {
    cancelAnimationFrame(this.animId);
    this.snake = [
      { x: 8, y: 10 },
      { x: 7, y: 10 },
      { x: 6, y: 10 }
    ];
    this.dx = 1;
    this.dy = 0;
    this.score = 0;
    this.scoreEl.innerText = 0;
    this.isGameOver = false;
    this.spawnFood();
  }

  spawnFood() {
    this.food = {
      x: Math.floor(Math.random() * this.cols),
      y: Math.floor(Math.random() * this.rows)
    };
    // Đảm bảo không spawn trùng thân rắn
    for (let seg of this.snake) {
      if (seg.x === this.food.x && seg.y === this.food.y) {
        return this.spawnFood();
      }
    }
  }

  update(timestamp) {
    if (timestamp - this.lastTime < this.speed) return;
    this.lastTime = timestamp;

    const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };

    // Va chạm tường
    if (head.x < 0 || head.x >= this.cols || head.y < 0 || head.y >= this.rows) {
      this.gameOver();
      return;
    }

    // Tự cắn đuôi
    for (let seg of this.snake) {
      if (head.x === seg.x && head.y === seg.y) {
        this.gameOver();
        return;
      }
    }

    this.snake.unshift(head);

    // Ăn mồi
    if (head.x === this.food.x && head.y === this.food.y) {
      this.score += 10;
      this.scoreEl.innerText = this.score;
      window.soundFX.playCoin();
      if (this.score > this.highScore) {
        this.highScore = this.score;
        localStorage.setItem('snake_high', this.highScore);
        this.highScoreEl.innerText = this.highScore;
      }
      this.spawnFood();
    } else {
      this.snake.pop();
    }
  }

  draw() {
    this.ctx.fillStyle = '#090d16';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Mồi (Táo phát sáng)
    this.ctx.fillStyle = '#ef4444';
    this.ctx.shadowBlur = 10;
    this.ctx.shadowColor = '#ef4444';
    this.ctx.beginPath();
    this.ctx.arc(
      this.food.x * this.gridSize + this.gridSize/2,
      this.food.y * this.gridSize + this.gridSize/2,
      this.gridSize/2 - 2, 0, Math.PI * 2
    );
    this.ctx.fill();
    this.ctx.shadowBlur = 0;

    // Rắn Neon
    this.snake.forEach((seg, idx) => {
      this.ctx.fillStyle = idx === 0 ? '#38bdf8' : '#10b981';
      this.ctx.fillRect(
        seg.x * this.gridSize + 1,
        seg.y * this.gridSize + 1,
        this.gridSize - 2,
        this.gridSize - 2
      );
    });

    if (this.isGameOver) {
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#ef4444';
      this.ctx.font = 'bold 22px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('RẮN ĐỤNG ĐẦU! GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 15);
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

  loop(timestamp = 0) {
    if (!this.isRunning) return;
    this.update(timestamp);
    this.draw();
    if (!this.isGameOver) {
      this.animId = requestAnimationFrame((t) => this.loop(t));
    }
  }
}

window.SnakeGame = SnakeGame;
