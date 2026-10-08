// GAME XẾP GẠCH: TETRIS CLASSIC ARCADE
class TetrisGame {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scoreEl = document.getElementById('tetrisScore');
    this.highScoreEl = document.getElementById('tetrisHighScore');

    this.cols = 10;
    this.rows = 20;
    this.blockSize = 20;
    this.canvas.width = this.cols * this.blockSize;
    this.canvas.height = this.rows * this.blockSize;

    this.highScore = parseInt(localStorage.getItem('tetris_high') || '0', 10);
    this.highScoreEl.innerText = this.highScore;

    this.grid = this.createGrid();
    this.colors = [
      null,
      '#ef4444', // I - red
      '#3b82f6', // J - blue
      '#f97316', // L - orange
      '#eab308', // O - yellow
      '#22c55e', // S - green
      '#a855f7', // T - purple
      '#06b6d4'  // Z - cyan
    ];

    this.pieces = [
      [],
      [[1, 1, 1, 1]], // I
      [[2, 0, 0], [2, 2, 2]], // J
      [[0, 0, 3], [3, 3, 3]], // L
      [[4, 4], [4, 4]], // O
      [[0, 5, 5], [5, 5, 0]], // S
      [[0, 6, 0], [6, 6, 6]], // T
      [[7, 7, 0], [0, 7, 7]]  // Z
    ];

    this.currentPiece = null;
    this.score = 0;
    this.dropCounter = 0;
    this.dropInterval = 800;
    this.lastTime = 0;
    this.isRunning = false;
    this.isGameOver = false;
    this.animId = null;

    this.setupInputs();
  }

  createGrid() {
    return Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
  }

  setupInputs() {
    window.addEventListener('keydown', (e) => {
      if (!this.isRunning || this.isGameOver) return;
      if (['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', 'Space'].includes(e.code)) {
        e.preventDefault();
      }

      if (e.code === 'ArrowLeft') this.move(-1);
      else if (e.code === 'ArrowRight') this.move(1);
      else if (e.code === 'ArrowDown') this.drop();
      else if (e.code === 'ArrowUp' || e.code === 'KeyW') this.rotate();
      else if (e.code === 'Space') this.hardDrop();
    });
  }

  start() {
    this.reset();
    this.isRunning = true;
    this.spawnPiece();
    this.loop();
  }

  reset() {
    cancelAnimationFrame(this.animId);
    this.grid = this.createGrid();
    this.score = 0;
    this.scoreEl.innerText = 0;
    this.dropInterval = 800;
    this.isGameOver = false;
  }

  spawnPiece() {
    const typeId = Math.floor(Math.random() * (this.pieces.length - 1)) + 1;
    const matrix = this.pieces[typeId];
    this.currentPiece = {
      matrix,
      x: Math.floor(this.cols / 2) - Math.floor(matrix[0].length / 2),
      y: 0
    };

    if (this.collide(this.grid, this.currentPiece)) {
      this.gameOver();
    }
  }

  collide(grid, piece) {
    const m = piece.matrix;
    const o = { x: piece.x, y: piece.y };
    for (let y = 0; y < m.length; ++y) {
      for (let x = 0; x < m[y].length; ++x) {
        if (m[y][x] !== 0 &&
           (grid[y + o.y] && grid[y + o.y][x + o.x]) !== 0) {
          return true;
        }
      }
    }
    return false;
  }

  move(dir) {
    this.currentPiece.x += dir;
    if (this.collide(this.grid, this.currentPiece)) {
      this.currentPiece.x -= dir;
    } else {
      window.soundFX.playBeep(280, 0.04);
    }
  }

  rotate() {
    const original = this.currentPiece.matrix;
    // Transpose + reverse columns
    const rotated = original[0].map((_, index) => original.map(row => row[index]).reverse());
    const oldMatrix = this.currentPiece.matrix;
    this.currentPiece.matrix = rotated;

    // Wall kick
    let offset = 1;
    while (this.collide(this.grid, this.currentPiece)) {
      this.currentPiece.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > this.currentPiece.matrix[0].length) {
        this.currentPiece.matrix = oldMatrix;
        return;
      }
    }
    window.soundFX.playBeep(450, 0.05);
  }

  drop() {
    this.currentPiece.y++;
    if (this.collide(this.grid, this.currentPiece)) {
      this.currentPiece.y--;
      this.merge(this.grid, this.currentPiece);
      this.clearLines();
      this.spawnPiece();
    }
    this.dropCounter = 0;
  }

  hardDrop() {
    while (!this.collide(this.grid, this.currentPiece)) {
      this.currentPiece.y++;
    }
    this.currentPiece.y--;
    this.merge(this.grid, this.currentPiece);
    this.clearLines();
    this.spawnPiece();
    window.soundFX.playBeep(520, 0.06);
  }

  merge(grid, piece) {
    piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          grid[y + piece.y][x + piece.x] = value;
        }
      });
    });
  }

  clearLines() {
    let linesCleared = 0;
    outer: for (let y = this.grid.length - 1; y >= 0; --y) {
      for (let x = 0; x < this.grid[y].length; ++x) {
        if (this.grid[y][x] === 0) continue outer;
      }
      const row = this.grid.splice(y, 1)[0].fill(0);
      this.grid.unshift(row);
      ++y;
      linesCleared++;
    }

    if (linesCleared > 0) {
      const points = [0, 100, 300, 500, 800];
      this.score += points[linesCleared] || 1000;
      this.scoreEl.innerText = this.score;
      window.soundFX.playCoin();
      if (this.score > this.highScore) {
        this.highScore = this.score;
        localStorage.setItem('tetris_high', this.highScore);
        this.highScoreEl.innerText = this.highScore;
      }
    }
  }

  draw() {
    this.ctx.fillStyle = '#090d16';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Vẽ lưới nền mờ
    this.ctx.strokeStyle = '#1e293b';
    this.ctx.lineWidth = 0.5;
    for (let x = 0; x <= this.canvas.width; x += this.blockSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0); this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }
    for (let y = 0; y <= this.canvas.height; y += this.blockSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y); this.ctx.lineTo(this.canvas.width, y);
      this.ctx.stroke();
    }

    // Vẽ các khối đã cố định
    this.grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.drawBlock(x, y, this.colors[value]);
        }
      });
    });

    // Vẽ khối đang rơi
    if (this.currentPiece) {
      this.currentPiece.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            this.drawBlock(this.currentPiece.x + x, this.currentPiece.y + y, this.colors[value]);
          }
        });
      });
    }

    // Overlay Game Over
    if (this.isGameOver) {
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#ef4444';
      this.ctx.font = 'bold 20px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 20);
      this.ctx.fillStyle = '#f1f5f9';
      this.ctx.font = '14px sans-serif';
      this.ctx.fillText(`Điểm: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 10);
    }
  }

  drawBlock(x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x * this.blockSize, y * this.blockSize, this.blockSize - 1, this.blockSize - 1);
  }

  gameOver() {
    this.isGameOver = true;
    this.isRunning = false;
    window.soundFX.playCrash();
  }

  loop(time = 0) {
    if (!this.isRunning) return;
    const deltaTime = time - this.lastTime;
    this.lastTime = time;

    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval) {
      this.drop();
    }

    this.draw();
    if (!this.isGameOver) {
      this.animId = requestAnimationFrame((t) => this.loop(t));
    }
  }
}

window.TetrisGame = TetrisGame;
