// GAME BẮN SÚNG: ĐỘT KÍCH SINH TỒN (CYBER STRIKE / FREE FIRE 2D)
class ShooterGame {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    
    this.killsEl = document.getElementById('shooterKills');
    this.highKillsEl = document.getElementById('shooterHighKills');
    this.hpEl = document.getElementById('shooterHp');
    this.weaponEl = document.getElementById('shooterWeapon');

    this.width = 440;
    this.height = 460;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.highKills = parseInt(localStorage.getItem('shooter_high_kills') || '0', 10);
    if (this.highKillsEl) this.highKillsEl.innerText = this.highKills;

    this.player = {
      x: this.width / 2,
      y: this.height / 2,
      radius: 16,
      speed: 3.5,
      angle: 0,
      hp: 100,
      maxHp: 100,
      armor: 50,
      weapon: 'ak47', // 'pistol', 'ak47', 'shotgun'
      ammo: 90
    };

    this.bullets = [];
    this.enemies = [];
    this.particles = [];
    this.airdrops = [];
    this.kills = 0;
    this.isRunning = false;
    this.isGameOver = false;
    this.animId = null;

    this.keys = {};
    this.mouse = { x: this.width / 2, y: this.height / 2, isDown: false };
    this.lastShootTime = 0;
    this.spawnTimer = 0;
    this.airdropTimer = 0;

    // Vòng bo sinh tồn (Free Fire Safezone)
    this.zone = {
      x: this.width / 2,
      y: this.height / 2,
      radius: this.width * 0.65,
      targetRadius: 100,
      shrinkRate: 0.04
    };

    this.setupInputs();
  }

  setupInputs() {
    window.addEventListener('keydown', (e) => {
      if (!this.isRunning) return;
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
      this.keys[e.code] = true;

      // Đổi súng bằng phím 1, 2, 3
      if (e.code === 'Digit1') this.switchWeapon('pistol');
      if (e.code === 'Digit2') this.switchWeapon('ak47');
      if (e.code === 'Digit3') this.switchWeapon('shotgun');
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.player.angle = Math.atan2(this.mouse.y - this.player.y, this.mouse.x - this.player.x);
    });

    this.canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.mouse.isDown = true;
      this.tryShoot();
    });

    window.addEventListener('mouseup', () => {
      this.mouse.isDown = false;
    });

    // Touch controls for mobile
    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const rect = this.canvas.getBoundingClientRect();
      const touch = e.touches[0];
      this.mouse.x = touch.clientX - rect.left;
      this.mouse.y = touch.clientY - rect.top;
      this.player.angle = Math.atan2(this.mouse.y - this.player.y, this.mouse.x - this.player.x);
      this.mouse.isDown = true;
      this.tryShoot();
    });

    this.canvas.addEventListener('touchend', () => {
      this.mouse.isDown = false;
    });
  }

  switchWeapon(wp) {
    this.player.weapon = wp;
    if (this.weaponEl) {
      const names = { pistol: '🔫 Lục', ak47: '⚡ AK-47 Sấy', shotgun: '💥 Shotgun M1887' };
      this.weaponEl.innerText = names[wp] || wp;
    }
    window.soundFX.playReload();
  }

  start() {
    this.reset();
    this.isRunning = true;
    this.loop();
  }

  reset() {
    cancelAnimationFrame(this.animId);
    this.player.x = this.width / 2;
    this.player.y = this.height / 2;
    this.player.hp = 100;
    this.player.armor = 50;
    this.player.weapon = 'ak47';
    this.switchWeapon('ak47');

    this.bullets = [];
    this.enemies = [];
    this.particles = [];
    this.airdrops = [];
    this.kills = 0;
    this.zone.radius = this.width * 0.65;
    this.isGameOver = false;

    if (this.killsEl) this.killsEl.innerText = 0;
    if (this.hpEl) this.hpEl.innerText = '100 HP';
  }

  tryShoot() {
    const now = Date.now();
    let fireInterval = 130; // ms (AK47)
    if (this.player.weapon === 'pistol') fireInterval = 280;
    if (this.player.weapon === 'shotgun') fireInterval = 550;

    if (now - this.lastShootTime < fireInterval) return;
    this.lastShootTime = now;

    const angle = this.player.angle;
    const bulletSpeed = 9;
    const startX = this.player.x + Math.cos(angle) * (this.player.radius + 12);
    const startY = this.player.y + Math.sin(angle) * (this.player.radius + 12);

    if (this.player.weapon === 'shotgun') {
      window.soundFX.playShoot('shotgun');
      // Bắn chùm 5 viên toả ra
      for (let i = -2; i <= 2; i++) {
        const spread = angle + (i * 0.12);
        this.bullets.push({
          x: startX,
          y: startY,
          vx: Math.cos(spread) * bulletSpeed,
          vy: Math.sin(spread) * bulletSpeed,
          damage: 35,
          life: 30,
          color: '#f59e0b'
        });
      }
    } else if (this.player.weapon === 'ak47') {
      window.soundFX.playShoot('rifle');
      // Thêm chút giật đạn ngẫu nhiên
      const spread = angle + (Math.random() - 0.5) * 0.08;
      this.bullets.push({
        x: startX,
        y: startY,
        vx: Math.cos(spread) * bulletSpeed,
        vy: Math.sin(spread) * bulletSpeed,
        damage: 28,
        life: 55,
        color: '#38bdf8'
      });
    } else {
      // Pistol
      window.soundFX.playShoot('rifle');
      this.bullets.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * bulletSpeed,
        vy: Math.sin(angle) * bulletSpeed,
        damage: 22,
        life: 60,
        color: '#fbbf24'
      });
    }

    // Hiệu ứng giật lùi nhẹ của người chơi
    this.player.x -= Math.cos(angle) * 1.5;
    this.player.y -= Math.sin(angle) * 1.5;
  }

  spawnEnemy() {
    this.spawnTimer++;
    const spawnRate = Math.max(35, 75 - Math.floor(this.kills * 1.2));

    if (this.spawnTimer >= spawnRate) {
      this.spawnTimer = 0;
      
      // Spawn ngoài viền canvas
      let ex, ey;
      if (Math.random() < 0.5) {
        ex = Math.random() < 0.5 ? -20 : this.width + 20;
        ey = Math.random() * this.height;
      } else {
        ex = Math.random() * this.width;
        ey = Math.random() < 0.5 ? -20 : this.height + 20;
      }

      const isBoss = this.kills > 0 && this.kills % 15 === 0 && Math.random() < 0.4;
      this.enemies.push({
        x: ex,
        y: ey,
        radius: isBoss ? 26 : 14,
        speed: isBoss ? 1.4 : 2.1 + Math.random() * 0.8,
        hp: isBoss ? 200 : 45,
        maxHp: isBoss ? 200 : 45,
        isBoss,
        color: isBoss ? '#dc2626' : '#ef4444'
      });
    }

    // Spawn Hòm Thính Airdrop
    this.airdropTimer++;
    if (this.airdropTimer >= 450) {
      this.airdropTimer = 0;
      this.airdrops.push({
        x: 60 + Math.random() * (this.width - 120),
        y: 60 + Math.random() * (this.height - 120),
        radius: 16,
        type: Math.random() < 0.5 ? 'shotgun' : 'ak47'
      });
    }
  }

  update() {
    // Di chuyển người chơi W, A, S, D
    let dx = 0, dy = 0;
    if (this.keys['KeyW'] || this.keys['ArrowUp']) dy -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) dy += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) dx -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) dx += 1;

    if (dx !== 0 && dy !== 0) {
      dx *= 0.7071;
      dy *= 0.7071;
    }

    this.player.x = Math.max(this.player.radius, Math.min(this.width - this.player.radius, this.player.x + dx * this.player.speed));
    this.player.y = Math.max(this.player.radius, Math.min(this.height - this.player.radius, this.player.y + dy * this.player.speed));

    // Bắn liên tục nếu giữ chuột (với AK47)
    if (this.mouse.isDown && this.player.weapon === 'ak47') {
      this.tryShoot();
    }

    // Co vòng bo (Free Fire Safe Zone)
    if (this.zone.radius > this.zone.targetRadius) {
      this.zone.radius -= this.zone.shrinkRate;
    }
    // Sát thương nếu ở ngoài vòng bo
    const distFromCenter = Math.hypot(this.player.x - this.zone.x, this.player.y - this.zone.y);
    if (distFromCenter > this.zone.radius) {
      this.takeDamage(0.2); // Đau dần khi ngoài bo
    }

    // Cập nhật đạn
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const b = this.bullets[i];
      b.x += b.vx;
      b.y += b.vy;
      b.life--;

      if (b.life <= 0 || b.x < 0 || b.x > this.width || b.y < 0 || b.y > this.height) {
        this.bullets.splice(i, 1);
        continue;
      }

      // Va chạm đạn với quái
      for (let j = this.enemies.length - 1; j >= 0; j--) {
        const en = this.enemies[j];
        const dist = Math.hypot(b.x - en.x, b.y - en.y);
        if (dist < b.life && dist < en.radius + 6) {
          en.hp -= b.damage;
          this.createHitParticles(b.x, b.y, '#f59e0b');
          this.bullets.splice(i, 1);

          if (en.hp <= 0) {
            this.killEnemy(en, j);
          }
          break;
        }
      }
    }

    // Cập nhật Kẻ địch
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const en = this.enemies[i];
      const angle = Math.atan2(this.player.y - en.y, this.player.x - en.x);
      en.x += Math.cos(angle) * en.speed;
      en.y += Math.sin(angle) * en.speed;

      // Cắn trúng người chơi
      const dist = Math.hypot(this.player.x - en.x, this.player.y - en.y);
      if (dist < this.player.radius + en.radius) {
        this.takeDamage(en.isBoss ? 2 : 0.8);
      }
    }

    // Nhặt Hòm Thính (Airdrop)
    for (let i = this.airdrops.length - 1; i >= 0; i--) {
      const drop = this.airdrops[i];
      const dist = Math.hypot(this.player.x - drop.x, this.player.y - drop.y);
      if (dist < this.player.radius + drop.radius) {
        this.switchWeapon(drop.type);
        this.player.hp = Math.min(100, this.player.hp + 40);
        this.player.armor = 50;
        this.updateHpUI();
        window.soundFX.playCoin();
        this.createHitParticles(drop.x, drop.y, '#10b981');
        this.airdrops.splice(i, 1);
      }
    }

    // Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.05;
      if (p.life <= 0) this.particles.splice(i, 1);
    }

    this.spawnEnemy();
  }

  killEnemy(en, idx) {
    this.createHitParticles(en.x, en.y, en.isBoss ? '#dc2626' : '#10b981', 12);
    this.enemies.splice(idx, 1);
    this.kills++;
    if (this.killsEl) this.killsEl.innerText = this.kills;

    window.soundFX.playCoin();

    if (this.kills > this.highKills) {
      this.highKills = this.kills;
      localStorage.setItem('shooter_high_kills', this.highKills);
      if (this.highKillsEl) this.highKillsEl.innerText = this.highKills;
    }
  }

  takeDamage(amt) {
    if (this.player.armor > 0) {
      this.player.armor -= amt;
      if (this.player.armor < 0) {
        this.player.hp += this.player.armor;
        this.player.armor = 0;
      }
    } else {
      this.player.hp -= amt;
    }

    this.updateHpUI();

    if (this.player.hp <= 0) {
      this.gameOver();
    }
  }

  updateHpUI() {
    if (this.hpEl) {
      const hp = Math.max(0, Math.round(this.player.hp));
      const armor = Math.max(0, Math.round(this.player.armor));
      this.hpEl.innerHTML = `<span style="color:#ef4444">${hp} HP</span> | <span style="color:#38bdf8">${armor} Giáp</span>`;
    }
  }

  createHitParticles(x, y, color, count = 5) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        color,
        life: 1
      });
    }
  }

  draw() {
    this.ctx.fillStyle = '#0b0f19';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Vẽ lưới sàn chiến trường
    this.ctx.strokeStyle = '#1a233a';
    this.ctx.lineWidth = 1;
    for (let x = 0; x < this.width; x += 30) {
      this.ctx.beginPath(); this.ctx.moveTo(x, 0); this.ctx.lineTo(x, this.height); this.ctx.stroke();
    }
    for (let y = 0; y < this.height; y += 30) {
      this.ctx.beginPath(); this.ctx.moveTo(0, y); this.ctx.lineTo(this.width, y); this.ctx.stroke();
    }

    // Vẽ Vòng Bo An Toàn (Safe Zone)
    this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(this.zone.x, this.zone.y, this.zone.radius, 0, Math.PI * 2);
    this.ctx.stroke();

    // Hòm Thính (Airdrop Free Fire đỏ vàng với khói)
    for (const drop of this.airdrops) {
      this.ctx.fillStyle = '#ef4444';
      this.ctx.fillRect(drop.x - 12, drop.y - 12, 24, 24);
      this.ctx.fillStyle = '#fbbf24';
      this.ctx.fillRect(drop.x - 12, drop.y - 3, 24, 6);
      this.ctx.fillStyle = '#f59e0b';
      this.ctx.font = 'bold 9px sans-serif';
      this.ctx.fillText('DROP', drop.x - 11, drop.y - 14);
    }

    // Particles
    for (const p of this.particles) {
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.life;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      this.ctx.fill();
    }
    this.ctx.globalAlpha = 1;

    // Đạn
    for (const b of this.bullets) {
      this.ctx.fillStyle = b.color;
      this.ctx.beginPath();
      this.ctx.arc(b.x, b.y, 3.5, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Kẻ địch
    for (const en of this.enemies) {
      this.ctx.fillStyle = en.color;
      this.ctx.beginPath();
      this.ctx.arc(en.x, en.y, en.radius, 0, Math.PI * 2);
      this.ctx.fill();

      // Thanh máu kẻ địch
      const hpPct = Math.max(0, en.hp / en.maxHp);
      this.ctx.fillStyle = '#334155';
      this.ctx.fillRect(en.x - 15, en.y - en.radius - 8, 30, 4);
      this.ctx.fillStyle = '#ef4444';
      this.ctx.fillRect(en.x - 15, en.y - en.radius - 8, 30 * hpPct, 4);
    }

    // Người chơi (Chiến binh ngắm bắn)
    this.ctx.save();
    this.ctx.translate(this.player.x, this.player.y);
    this.ctx.rotate(this.player.angle);

    // Nòng súng
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.fillRect(8, 2, 16, 5);

    // Thân chiến binh
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.player.radius, 0, Math.PI * 2);
    this.ctx.fill();

    // Mũ cối bảo hiểm
    this.ctx.fillStyle = '#0284c7';
    this.ctx.beginPath();
    this.ctx.arc(-2, 0, 10, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.restore();

    // Game Over Overlay
    if (this.isGameOver) {
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = '#ef4444';
      this.ctx.font = 'bold 24px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('💀 BẠN ĐÃ BỊ HẠ GỤC!', this.width / 2, this.height / 2 - 25);
      this.ctx.fillStyle = '#f1f5f9';
      this.ctx.font = '16px sans-serif';
      this.ctx.fillText(`Kills: ${this.kills} mạng`, this.width / 2, this.height / 2 + 10);
      this.ctx.fillText('Nhấn [Chơi lại] hoặc khoe Kills vào Chat', this.width / 2, this.height / 2 + 38);
    }
  }

  gameOver() {
    this.isGameOver = true;
    this.isRunning = false;
    window.soundFX.playExplosion();
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

window.ShooterGame = ShooterGame;
