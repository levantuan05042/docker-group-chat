// GAME ĐUA XE: TURBO HIGHWAY RACER
class RacingGame {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scoreEl = document.getElementById('racingScore');
    this.highScoreEl = document.getElementById('racingHighScore');
    
    this.highScore = parseInt(localStorage.getItem('racing_high') || '0', 10);
    this.highScoreEl.innerText = this.highScore;

    this.width = this.canvas.width;
    this.height = this.canvas.height;
    
    this.lanes = [70, 150, 230, 310]; // 4 lanes
    this.currentLane = 1;
    this.playerX = this.lanes[this.currentLane];
    this.playerY = this.height - 80;
    this.playerSpeed = 6;
    this.targetX = this.playerX;
    
    this.score = 0;
    this.traffic = [];
    this.coins = [];
    this.roadOffset = 0;
    this.baseSpeed = 5;
    this.speed = 5;
    this.isRunning = false;
    this.isGameOver = false;
    this.animId = null;

    this.keys = {};
    this.setupInputs();
  }

  setupInputs() {
    window.addEventListener('keydown', (e) => {
      if (!this.isRunning || this.isGameOver) return;
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'KeyA', 'KeyD', 'KeyW'].includes(e.code)) {
        e.preventDefault();
      }
      if ((e.code === 'ArrowLeft' || e.code === 'KeyA') && this.currentLane > 0) {
        this.currentLane--;
        this.targetX = this.lanes[this.currentLane];
        window.soundFX.playBeep(350, 0.05);
      } else if ((e.code === 'ArrowRight' || e.code === 'KeyD') && this.currentLane < this.lanes.length - 1) {
        this.currentLane++;
        this.targetX = this.lanes[this.currentLane];
        window.soundFX.playBeep(350, 0.05);
      } else if (e.code === 'ArrowUp' || e.code === 'KeyW') {
        this.speed = this.baseSpeed * 1.5; // Nitro boost!
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'ArrowUp' || e.code === 'KeyW') {
        this.speed = this.baseSpeed;
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
    this.currentLane = 1;
    this.playerX = this.lanes[this.currentLane];
    this.targetX = this.playerX;
    this.score = 0;
    this.scoreEl.innerText = 0;
    this.traffic = [];
    this.coins = [];
    this.baseSpeed = 5;
    this.speed = 5;
    this.isGameOver = false;
    this.roadOffset = 0;
  }

  spawnTraffic() {
    if (Math.random() < 0.035) {
      const laneIdx = Math.floor(Math.random() * this.lanes.length);
      const laneX = this.lanes[laneIdx];
      // Kiểm tra không chồng lên xe gần nhất cùng làn
      const tooClose = this.traffic.some(c => c.laneIdx === laneIdx && c.y < 120);
      if (!tooClose) {
        const colors = ['#f43f5e', '#a855f7', '#10b981', '#f59e0b', '#06b6d4'];
        this.traffic.push({
          x: laneX,
          y: -70,
          laneIdx,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedMultiplier: 0.6 + Math.random() * 0.4
        });
      }
    }

    // Spawn Coins / Nitro
    if (Math.random() < 0.02) {
      const laneIdx = Math.floor(Math.random() * this.lanes.length);
      this.coins.push({
        x: this.lanes[laneIdx],
        y: -40
      });
    }
  }

  update() {
    // Smooth lane shift
    this.playerX += (this.targetX - this.playerX) * 0.25;

    // Tăng độ khó dần
    this.baseSpeed = 5 + Math.min(8, Math.floor(this.score / 250));
    this.score += Math.round(this.speed * 0.1);
    this.scoreEl.innerText = this.score;

    this.roadOffset = (this.roadOffset + this.speed) % 40;

    this.spawnTraffic();

    // Di chuyển xe cộ
    for (let i = this.traffic.length - 1; i >= 0; i--) {
      const car = this.traffic[i];
      car.y += this.speed * car.speedMultiplier;

      // Va chạm với người chơi
      if (Math.abs(car.x - this.playerX) < 32 && Math.abs(car.y - this.playerY) < 55) {
        this.gameOver();
        return;
      }

      // Xóa xe đi qua màn hình
      if (car.y > this.height + 80) {
        this.traffic.splice(i, 1);
      }
    }

    // Ăn Coin
    for (let i = this.coins.length - 1; i >= 0; i--) {
      const coin = this.coins[i];
      coin.y += this.speed;

      if (Math.abs(coin.x - this.playerX) < 30 && Math.abs(coin.y - this.playerY) < 40) {
        this.score += 50;
        window.soundFX.playCoin();
        this.coins.splice(i, 1);
        continue;
      }

      if (coin.y > this.height + 50) {
        this.coins.splice(i, 1);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Vẽ mặt đường
    this.ctx.fillStyle = '#1e293b';
    this.ctx.fillRect(40, 0, this.width - 80, this.height);

    // Lề đường cỏ / neon
    this.ctx.fillStyle = '#0f172a';
    this.ctx.fillRect(0, 0, 40, this.height);
    this.ctx.fillRect(this.width - 40, 0, 40, this.height);

    // Vạch vàng 2 bên lề
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.fillRect(36, 0, 4, this.height);
    this.ctx.fillRect(this.width - 40, 0, 4, this.height);

    // Vạch kẻ đường đứt đoạn
    this.ctx.fillStyle = '#e2e8f0';
    for (let l = 1; l < 4; l++) {
      const lineX = 40 + (l * ((this.width - 80) / 4));
      for (let y = -40 + this.roadOffset; y < this.height; y += 40) {
        this.ctx.fillRect(lineX - 2, y, 4, 22);
      }
    }

    // Vẽ Coins
    for (const coin of this.coins) {
      this.ctx.fillStyle = '#fbbf24';
      this.ctx.beginPath();
      this.ctx.arc(coin.x, coin.y, 11, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.strokeStyle = '#f59e0b';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      this.ctx.fillStyle = '#78350f';
      this.ctx.font = 'bold 12px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText('$', coin.x, coin.y);
    }

    // Vẽ xe cộ đối thủ
    for (const car of this.traffic) {
      this.drawCar(car.x, car.y, car.color, false);
    }

    // Vẽ xe người chơi
    this.drawCar(this.playerX, this.playerY, '#38bdf8', true);

    // Hiệu ứng Nitro lửa nếu boost
    if (this.speed > this.baseSpeed) {
      this.ctx.fillStyle = '#f97316';
      this.ctx.beginPath();
      this.ctx.moveTo(this.playerX - 10, this.playerY + 28);
      this.ctx.lineTo(this.playerX + 10, this.playerY + 28);
      this.ctx.lineTo(this.playerX, this.playerY + 45 + Math.random() * 8);
      this.ctx.fill();
    }

    // Game Over Overlay
    if (this.isGameOver) {
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      this.ctx.fillRect(0, 0, this.width, this.height);

      this.ctx.fillStyle = '#ef4444';
      this.ctx.font = 'bold 28px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('💥 ĐÂM XE! GAME OVER', this.width / 2, this.height / 2 - 30);

      this.ctx.fillStyle = '#f1f5f9';
      this.ctx.font = '16px sans-serif';
      this.ctx.fillText(`Điểm số: ${this.score}`, this.width / 2, this.height / 2 + 10);
      this.ctx.fillText('Nhấn [Chơi lại] hoặc nút bên dưới', this.width / 2, this.height / 2 + 40);
    }
  }

  drawCar(x, y, color, isPlayer = false) {
    const w = 32;
    const h = 58;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Bánh xe
    this.ctx.fillStyle = '#0f172a';
    this.ctx.fillRect(-w/2 - 3, -h/2 + 6, 4, 12);
    this.ctx.fillRect(w/2 - 1, -h/2 + 6, 4, 12);
    this.ctx.fillRect(-w/2 - 3, h/2 - 18, 4, 12);
    this.ctx.fillRect(w/2 - 1, h/2 - 18, 4, 12);

    // Thân xe
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.roundRect(-w/2, -h/2, w, h, [8, 8, 5, 5]);
    this.ctx.fill();

    // Kính chắn gió
    this.ctx.fillStyle = '#0f172a';
    this.ctx.beginPath();
    this.ctx.roundRect(-w/2 + 4, isPlayer ? -h/2 + 12 : -h/2 + 24, w - 8, 14, 3);
    this.ctx.fill();

    // Đèn pha
    if (isPlayer) {
      this.ctx.fillStyle = '#fef08a';
      this.ctx.fillRect(-w/2 + 3, -h/2 + 1, 6, 3);
      this.ctx.fillRect(w/2 - 9, -h/2 + 1, 6, 3);
    } else {
      this.ctx.fillStyle = '#ef4444';
      this.ctx.fillRect(-w/2 + 3, h/2 - 4, 6, 3);
      this.ctx.fillRect(w/2 - 9, h/2 - 4, 6, 3);
    }

    this.ctx.restore();
  }

  gameOver() {
    this.isGameOver = true;
    this.isRunning = false;
    window.soundFX.playCrash();

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('racing_high', this.highScore);
      this.highScoreEl.innerText = this.highScore;
    }
  }

  loop() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    if (!this.isGameOver) {
      this.animId = requestAnimationFrame(() => this.loop());
    } else {
      this.draw();
    }
  }
}

window.RacingGame = RacingGame;
