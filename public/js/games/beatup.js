// GAME ĐẤM HÌNH NHÂN (BEAT UP THE DUMMY / RAGE PUNCH)
// Tự do tải ảnh khuôn mặt của bất kỳ ai ghép vào hình nhân ragdoll và đấm xả stress!

class BeatUpGame {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    // Trạng thái hình nhân
    this.dummy = {
      baseX: this.width / 2,
      baseY: this.height - 30,
      x: this.width / 2,
      y: 190,
      headRadius: 46,
      vx: 0,
      vy: 0,
      angle: 0,
      vAngle: 0,
      springK: 0.12,
      damp: 0.88,
      hurtTimer: 0,
      hp: 100,
      maxHp: 100,
      bruises: [] // Vết bầm tím và băng cá nhân tích lũy
    };

    // Điểm số & chỉ số
    this.punchCount = 0;
    this.combo = 0;
    this.lastHitTime = 0;
    this.weapon = 'fist'; // 'fist', 'glove', 'slipper' (dép tổ ong), 'slap', 'bat'
    this.customFaceImg = null;
    this.hasCustomFace = false;

    // Hiệu ứng hạt (máu, sao choáng váng, tia lửa, text damage)
    this.particles = [];
    this.floatingTexts = [];
    this.punches = []; // Găng tay / bàn tay đấm bay vào

    // UI elements
    this.countEl = document.getElementById('beatPunchCount');
    this.comboEl = document.getElementById('beatCombo');
    this.weaponNameEl = document.getElementById('beatWeaponName');
    this.dummyStatusEl = document.getElementById('beatDummyStatus');
    this.fileInput = document.getElementById('beatFaceInput');
    this.resetFaceBtn = document.getElementById('beatResetFaceBtn');
    this.resetGameBtn = document.getElementById('beatResetGameBtn');
    this.weaponBtns = document.querySelectorAll('.beat-weapon-btn');

    this.isRunning = false;

    // Bộ căn chỉnh khuôn mặt (Face Cropper)
    this.cropModal = document.getElementById('beatCropModal');
    this.cropCanvas = document.getElementById('cropCanvas');
    this.cropCtx = this.cropCanvas ? this.cropCanvas.getContext('2d') : null;
    this.cropZoomSlider = document.getElementById('cropZoomSlider');
    this.confirmCropBtn = document.getElementById('confirmCropBtn');
    this.cancelCropBtn = document.getElementById('cancelCropBtn');

    this.cropState = {
      rawImg: null,
      x: 0,
      y: 0,
      scale: 1,
      isDragging: false,
      lastMouseX: 0,
      lastMouseY: 0
    };

    this.initEvents();
    this.initCropperEvents();
  }

  initCropperEvents() {
    if (!this.cropCanvas || !this.cropCtx) return;

    // Kéo di chuyển ảnh trong vòng tròn
    const startDrag = (cx, cy) => {
      this.cropState.isDragging = true;
      this.cropState.lastMouseX = cx;
      this.cropState.lastMouseY = cy;
      this.cropCanvas.style.cursor = 'grabbing';
    };

    const doDrag = (cx, cy) => {
      if (!this.cropState.isDragging) return;
      const dx = cx - this.cropState.lastMouseX;
      const dy = cy - this.cropState.lastMouseY;
      this.cropState.x += dx;
      this.cropState.y += dy;
      this.cropState.lastMouseX = cx;
      this.cropState.lastMouseY = cy;
      this.drawCropView();
    };

    const stopDrag = () => {
      this.cropState.isDragging = false;
      this.cropCanvas.style.cursor = 'grab';
    };

    // Chuột
    this.cropCanvas.addEventListener('mousedown', (e) => startDrag(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => doDrag(e.clientX, e.clientY));
    window.addEventListener('mouseup', stopDrag);

    // Cảm ứng điện thoại / tablet
    this.cropCanvas.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        startDrag(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    this.cropCanvas.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        doDrag(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    this.cropCanvas.addEventListener('touchend', stopDrag);

    // Zoom slider
    if (this.cropZoomSlider) {
      this.cropZoomSlider.addEventListener('input', (e) => {
        this.cropState.scale = parseFloat(e.target.value);
        this.drawCropView();
      });
    }

    // Nút xác nhận ghép mặt
    if (this.confirmCropBtn) {
      this.confirmCropBtn.addEventListener('click', () => {
        this.applyCroppedFace();
      });
    }

    // Nút hủy
    if (this.cancelCropBtn) {
      this.cancelCropBtn.addEventListener('click', () => {
        if (this.cropModal) this.cropModal.style.display = 'none';
      });
    }
  }

  openCropper(img) {
    this.cropState.rawImg = img;

    // Đưa tâm ảnh về giữa canvas 300x300
    const cw = this.cropCanvas.width;
    const ch = this.cropCanvas.height;
    const baseScale = Math.max(200 / img.width, 200 / img.height);
    this.cropState.scale = baseScale;
    this.cropState.x = cw / 2;
    this.cropState.y = ch / 2;

    if (this.cropZoomSlider) {
      this.cropZoomSlider.value = baseScale;
      this.cropZoomSlider.min = (baseScale * 0.4).toFixed(2);
      this.cropZoomSlider.max = (baseScale * 3.5).toFixed(2);
      this.cropZoomSlider.step = ((baseScale * 3.1) / 50).toFixed(3);
    }

    if (this.cropModal) this.cropModal.style.display = 'flex';
    this.drawCropView();
  }

  drawCropView() {
    if (!this.cropCtx || !this.cropState.rawImg) return;
    const ctx = this.cropCtx;
    const w = this.cropCanvas.width;
    const h = this.cropCanvas.height;
    const img = this.cropState.rawImg;

    ctx.clearRect(0, 0, w, h);

    // 1. Vẽ ảnh gốc đang di chuyển/phóng to
    ctx.save();
    ctx.translate(this.cropState.x, this.cropState.y);
    ctx.scale(this.cropState.scale, this.cropState.scale);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();

    // 2. Phủ lớp mờ bóng đêm bên ngoài vòng tròn
    const circleRadius = 90; // Đường kính 180px
    const cx = w / 2;
    const cy = h / 2;

    ctx.save();
    // Tạo mặt nạ vùng ngoài vòng tròn
    ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
    ctx.beginPath();
    ctx.rect(0, 0, w, h);
    ctx.arc(cx, cy, circleRadius, 0, Math.PI * 2, true);
    ctx.fill();

    // 3. Vòng tròn chọn mặt với viền phát sáng hồng/vàng
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, circleRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Viền nét đứt bên trong
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, circleRadius - 4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // 4. Hồng tâm chữ thập ở giữa để căn chuẩn sống mũi / tâm mặt
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 15, cy); ctx.lineTo(cx + 15, cy);
    ctx.moveTo(cx, cy - 15); ctx.lineTo(cx, cy + 15);
    ctx.stroke();

    ctx.restore();
  }

  applyCroppedFace() {
    if (!this.cropState.rawImg) return;

    // Xuất ra canvas tròn 180x180
    const outCanvas = document.createElement('canvas');
    outCanvas.width = 180;
    outCanvas.height = 180;
    const outCtx = outCanvas.getContext('2d');

    const circleRadius = 90;
    const cx = this.cropCanvas.width / 2;
    const cy = this.cropCanvas.height / 2;

    // Vị trí của ảnh so với tâm vòng tròn
    const relX = this.cropState.x - cx;
    const relY = this.cropState.y - cy;

    outCtx.save();
    // Cắt mặt tròn
    outCtx.beginPath();
    outCtx.arc(90, 90, 90, 0, Math.PI * 2);
    outCtx.clip();

    outCtx.translate(90 + relX, 90 + relY);
    outCtx.scale(this.cropState.scale, this.cropState.scale);
    outCtx.drawImage(
      this.cropState.rawImg,
      -this.cropState.rawImg.width / 2,
      -this.cropState.rawImg.height / 2
    );
    outCtx.restore();

    // Lưu vào customFaceImg
    const finalImg = new Image();
    finalImg.onload = () => {
      this.customFaceImg = finalImg;
      this.hasCustomFace = true;
      this.dummy.bruises = [];
      if (this.dummyStatusEl) {
        this.dummyStatusEl.innerHTML = '😎 <strong>Đã căn chỉnh & ghép mặt tròn hoàn hảo! Hãy đấm xả giận đi!</strong>';
      }
      if (this.cropModal) this.cropModal.style.display = 'none';
    };
    finalImg.src = outCanvas.toDataURL('image/png');
  }

  initEvents() {
    // 1. Tải ảnh từ máy / điện thoại -> Mở modal vòng tròn căn chỉnh mặt
    if (this.fileInput) {
      this.fileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            this.openCropper(img);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      });
    }

    // Gỡ ảnh mặt
    if (this.resetFaceBtn) {
      this.resetFaceBtn.addEventListener('click', () => {
        this.customFaceImg = null;
        this.hasCustomFace = false;
        if (this.fileInput) this.fileInput.value = '';
        if (this.dummyStatusEl) {
          this.dummyStatusEl.innerText = '🤖 Sử dụng khuôn mặt mặc định';
        }
      });
    }

    // Reset lại ván
    if (this.resetGameBtn) {
      this.resetGameBtn.addEventListener('click', () => {
        this.punchCount = 0;
        this.combo = 0;
        this.dummy.bruises = [];
        this.dummy.hp = this.dummy.maxHp;
        this.particles = [];
        this.floatingTexts = [];
        this.updateStatsUI();
        if (this.dummyStatusEl) {
          this.dummyStatusEl.innerText = '👊 Sẵn sàng! Click chuột hoặc chạm màn hình để ĐẤM!';
        }
      });
    }

    // Đổi vũ khí
    if (this.weaponBtns) {
      this.weaponBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.weaponBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.weapon = btn.dataset.weapon || 'fist';
          if (this.weaponNameEl) {
            const names = {
              fist: '🥊 Đấm Thường',
              glove: '🥊 Găng Boxing Lực',
              slipper: '🩴 Dép Tổ Ong Huyền Thoại',
              slap: '👋 Bạt Tai Thần Chưởng',
              bat: '🏏 Gậy Bóng Chày'
            };
            this.weaponNameEl.innerText = names[this.weapon] || '🥊 Đấm';
          }
        });
      });
    }

    // 2. Tương tác đấm (Click chuột hoặc Chạm cảm ứng)
    const handleHit = (clientX, clientY) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const x = (clientX - rect.left) * scaleX;
      const y = (clientY - rect.top) * scaleY;
      this.punchAt(x, y);
    };

    this.canvas.addEventListener('mousedown', (e) => {
      handleHit(e.clientX, e.clientY);
    });

    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (e.touches && e.touches[0]) {
        handleHit(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: false });
  }

  start() {
    this.isRunning = true;
    this.lastTime = performance.now();
    this.loop();
  }

  stop() {
    this.isRunning = false;
  }

  // Tác dụng lực đấm khi người chơi click/chạm
  punchAt(hitX, hitY) {
    const headX = this.dummy.x;
    const headY = this.dummy.y;

    // Khoảng cách tới đầu
    const dx = hitX - headX;
    const dy = hitY - headY;
    const distToHead = Math.sqrt(dx * dx + dy * dy);

    // Tính lực & sát thương theo vũ khí
    let forceMultiplier = 1;
    let damage = 10;
    let soundType = 'slap';

    if (this.weapon === 'glove') {
      forceMultiplier = 1.6;
      damage = 25;
      soundType = 'glove';
    } else if (this.weapon === 'slipper') {
      forceMultiplier = 1.3;
      damage = 18;
      soundType = 'slipper';
    } else if (this.weapon === 'slap') {
      forceMultiplier = 1.2;
      damage = 15;
      soundType = 'slap';
    } else if (this.weapon === 'bat') {
      forceMultiplier = 2.2;
      damage = 35;
      soundType = 'bat';
    }

    // Combo
    const now = Date.now();
    if (now - this.lastHitTime < 800) {
      this.combo++;
    } else {
      this.combo = 1;
    }
    this.lastHitTime = now;

    // Gia tăng damage theo combo
    const finalDamage = Math.floor(damage * (1 + (this.combo - 1) * 0.1));
    this.punchCount++;
    this.dummy.hurtTimer = 12;

    // Âm thanh
    this.playHitSound(soundType);

    // Đẩy hình nhân lắc lư theo góc đánh
    const hitAngle = Math.atan2(hitY - headY, hitX - headX);
    const force = 18 * forceMultiplier;
    this.dummy.vx -= Math.cos(hitAngle) * force;
    this.dummy.vy -= Math.sin(hitAngle) * (force * 0.5);
    this.dummy.vAngle += (hitX > headX ? -0.35 : 0.35) * forceMultiplier;

    // Thêm vết bầm tím trên mặt nếu đánh trúng đầu
    if (distToHead < this.dummy.headRadius + 20) {
      if (this.dummy.bruises.length < 15) {
        // Lưu tọa độ tương đối so với tâm đầu
        this.dummy.bruises.push({
          relX: (hitX - headX) * 0.6,
          relY: (hitY - headY) * 0.6,
          type: Math.random() > 0.4 ? 'bruise' : 'bandage',
          size: 8 + Math.random() * 8
        });
      }
    }

    // Hiệu ứng hạt nổ tung tóe (sao choáng, tía máu, mồ hôi)
    this.spawnHitEffects(hitX, hitY, finalDamage);

    // Hoạt ảnh găng tay / vũ khí đấm vào màn hình
    this.punches.push({
      x: hitX,
      y: hitY,
      weapon: this.weapon,
      life: 10,
      scale: 1.4
    });

    this.updateStatsUI();
  }

  playHitSound(soundType) {
    if (!window.soundFX || window.soundFX.muted) return;
    try {
      if (soundType === 'slipper') {
        // Âm thanh chát chúa của dép tổ ong
        window.soundFX.playBeep(650, 0.08, 'square');
        setTimeout(() => window.soundFX.playBeep(220, 0.12, 'sawtooth'), 50);
      } else if (soundType === 'bat') {
        window.soundFX.playExplosion();
      } else if (soundType === 'glove') {
        window.soundFX.playCrash();
      } else {
        // Slap / fist
        window.soundFX.playBeep(380, 0.08, 'sawtooth');
      }
    } catch(e) {}
  }

  spawnHitEffects(x, y, damage) {
    // 1. Text sát thương & combo bay lên
    const texts = [`-${damage} HP!`];
    if (this.combo > 3) texts.push(`🔥 x${this.combo} COMBO!`);
    if (this.weapon === 'slipper') texts.push('💥 CHÁT!');
    if (this.weapon === 'bat') texts.push('🏏 CRITICAL!');

    texts.forEach((txt, idx) => {
      this.floatingTexts.push({
        text: txt,
        x: x + (Math.random() * 30 - 15),
        y: y - 20 - idx * 24,
        vy: -2.5,
        alpha: 1,
        color: idx === 0 ? '#ef4444' : '#f59e0b',
        fontSize: idx === 0 ? 22 : 18
      });
    });

    // 2. Sao vàng xoay vòng choáng váng
    for (let i = 0; i < 7; i++) {
      const angle = (Math.PI * 2 / 7) * i;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * (3 + Math.random() * 4),
        vy: Math.sin(angle) * (3 + Math.random() * 4),
        type: 'star',
        size: 8 + Math.random() * 6,
        alpha: 1,
        rot: 0,
        vRot: 0.2
      });
    }

    // 3. Giọt mồ hôi / bụi va chạm
    for (let i = 0; i < 6; i++) {
      this.particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 6,
        vy: -Math.random() * 5 - 2,
        type: 'sweat',
        size: 3 + Math.random() * 3,
        alpha: 1
      });
    }
  }

  updateStatsUI() {
    if (this.countEl) this.countEl.innerText = this.punchCount;
    if (this.comboEl) this.comboEl.innerText = `x${this.combo}`;
    if (this.dummyStatusEl) {
      if (this.combo >= 15) {
        this.dummyStatusEl.innerHTML = `🔥 <strong>CUỒNG NỘ! BÃO ĐẤM ${this.combo} HÍT LIÊN TỤC!</strong>`;
      } else if (this.combo >= 8) {
        this.dummyStatusEl.innerHTML = `😵 <strong>HÌNH NHÂN ĐANG BỊ CHOÁNG VÁNG NẶNG NỀ!</strong>`;
      } else if (this.punchCount > 0) {
        this.dummyStatusEl.innerHTML = `💥 <strong>ĐÃ TẨN CHO ${this.punchCount} ĐÒN RA TRÒ!</strong>`;
      }
    }
  }

  // ================= VÒNG LẶP VẬT LÝ & VẼ =================
  loop() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  update() {
    const d = this.dummy;

    // Vật lý đàn hồi con lật đật / lò xo nối từ đế lên đầu
    // Lực đàn hồi kéo về tâm baseX
    const dx = d.baseX - d.x;
    d.vx += dx * d.springK;
    d.vx *= d.damp;
    d.x += d.vx;

    // Góc nghiêng đàn hồi về 0
    d.vAngle += (-d.angle) * 0.15;
    d.vAngle *= 0.85;
    d.angle += d.vAngle;

    // Độ nhún lò xo theo phương thẳng đứng
    const targetY = 190;
    const dy = targetY - d.y;
    d.vy += dy * 0.15;
    d.vy *= 0.85;
    d.y += d.vy;

    if (d.hurtTimer > 0) d.hurtTimer--;

    // Cập nhật hiệu ứng hạt
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // Trọng lực
      p.alpha -= 0.025;
      if (p.rot !== undefined) p.rot += p.vRot;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }

    // Cập nhật text nổi
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const t = this.floatingTexts[i];
      t.y += t.vy;
      t.alpha -= 0.02;
      if (t.alpha <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }

    // Cập nhật hoạt ảnh nắm đấm
    for (let i = this.punches.length - 1; i >= 0; i--) {
      const p = this.punches[i];
      p.life--;
      p.scale += 0.08;
      if (p.life <= 0) {
        this.punches.splice(i, 1);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Phông nền phòng tập Boxing / Võ đài ấm cúng
    const grad = this.ctx.createLinearGradient(0, 0, 0, this.height);
    grad.addColorStop(0, '#1e1b4b');
    grad.addColorStop(0.6, '#0f172a');
    grad.addColorStop(1, '#020617');
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Vạch kẻ sàn võ đài
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    this.ctx.lineWidth = 2;
    for (let y = this.height - 120; y < this.height; y += 25) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.width, y);
      this.ctx.stroke();
    }

    // Ánh đèn rọi Spotlight từ trên xuống hình nhân
    const spot = this.ctx.createRadialGradient(
      this.dummy.x, 150, 20,
      this.dummy.x, 260, 260
    );
    spot.addColorStop(0, 'rgba(139, 92, 246, 0.25)');
    spot.addColorStop(1, 'rgba(0, 0, 0, 0)');
    this.ctx.fillStyle = spot;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 2. Vẽ bục đế con lật đật / lò xo chịu lực
    this.drawBaseAndSpring();

    // 3. Vẽ thân & tay của hình nhân (Ragdoll)
    this.drawBody();

    // 4. Vẽ đầu & mặt hình nhân (Khuôn mặt ghép hoặc Mặt nạ ngố mặc định)
    this.drawHead();

    // 5. Vẽ hiệu ứng hạt & tia lửa, sao choáng
    this.drawParticles();

    // 6. Vẽ hiệu ứng vũ khí đấm vào
    this.drawPunchHits();

    // 7. Vẽ text sát thương
    this.drawFloatingTexts();
  }

  drawBaseAndSpring() {
    const d = this.dummy;
    const ctx = this.ctx;

    // Bóng râm của đế
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.ellipse(d.baseX, d.baseY + 12, 85, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // Đế thép tròn nặng (Tumbler base)
    const baseGrad = ctx.createLinearGradient(d.baseX - 70, d.baseY, d.baseX + 70, d.baseY);
    baseGrad.addColorStop(0, '#334155');
    baseGrad.addColorStop(0.5, '#64748b');
    baseGrad.addColorStop(1, '#1e293b');
    ctx.fillStyle = baseGrad;
    ctx.beginPath();
    ctx.ellipse(d.baseX, d.baseY, 70, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Lò xo thép nối từ đế lên eo hình nhân
    const waistX = d.x;
    const waistY = d.y + 160;
    const coils = 6;
    const springStep = (waistY - d.baseY) / coils;

    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(d.baseX, d.baseY);

    for (let i = 0; i <= coils; i++) {
      const curY = d.baseY + i * springStep;
      const curX = (d.baseX + (waistX - d.baseX) * (i / coils)) + (i % 2 === 0 ? -16 : 16);
      ctx.lineTo(curX, curY);
    }
    ctx.lineTo(waistX, waistY);
    ctx.stroke();
  }

  drawBody() {
    const d = this.dummy;
    const ctx = this.ctx;

    ctx.save();
    ctx.translate(d.x, d.y);
    ctx.rotate(d.angle);

    // Cột sống & áo tập boxing màu đỏ/cam
    const bodyY = 50;
    const bodyHeight = 110;

    // Thân nộm tập võ (Foam dummy)
    const bodyGrad = ctx.createLinearGradient(-40, bodyY, 40, bodyY);
    bodyGrad.addColorStop(0, '#ea580c');
    bodyGrad.addColorStop(0.5, '#fb923c');
    bodyGrad.addColorStop(1, '#c2410c');

    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.roundRect(-42, bodyY, 84, bodyHeight, [16, 16, 20, 20]);
    ctx.fill();
    ctx.strokeStyle = '#7c2d12';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Đai đen / chữ số trên ngực
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-42, bodyY + 70, 84, 18);
    ctx.fillStyle = '#facc15';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TARGET', 0, bodyY + 83);

    // Vạch ngực & cơ bụng vẽ hài hước
    ctx.strokeStyle = '#c2410c';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, bodyY + 15);
    ctx.lineTo(0, bodyY + 65);
    ctx.moveTo(-25, bodyY + 38);
    ctx.lineTo(25, bodyY + 38);
    ctx.stroke();

    // 2 Tay găng boxing giơ lên đỡ đòn
    // Tay trái
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(-55, bodyY + 30 + Math.sin(d.angle * 2) * 10, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#991b1b';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Tay phải
    ctx.beginPath();
    ctx.arc(55, bodyY + 30 - Math.sin(d.angle * 2) * 10, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Cổ nối lên đầu
    ctx.fillStyle = '#fed7aa';
    ctx.fillRect(-14, 30, 28, 25);
    ctx.strokeStyle = '#ea580c';
    ctx.strokeRect(-14, 30, 28, 25);

    ctx.restore();
  }

  drawHead() {
    const d = this.dummy;
    const ctx = this.ctx;
    const r = d.headRadius;

    ctx.save();
    ctx.translate(d.x, d.y);
    ctx.rotate(d.angle);

    // Rung lắc đầu khi bị đấm
    if (d.hurtTimer > 0) {
      const shake = (Math.random() - 0.5) * 8;
      ctx.translate(shake, shake);
    }

    // Clip mặt theo hình tròn oval tự nhiên của đầu
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);

    if (this.hasCustomFace && this.customFaceImg) {
      // ===== CẮT & DÁN ẢNH KHUÔN MẶT CỦA NGƯỜI CHƠI TẢI LÊN =====
      ctx.save();
      ctx.clip();

      try {
        ctx.drawImage(this.customFaceImg, -r, -r, r * 2, r * 2);
      } catch(e) {
        this.drawDefaultFace(r);
      }
      ctx.restore();

      // Viền bao quanh đầu
      ctx.strokeStyle = d.hurtTimer > 0 ? '#ef4444' : '#e2e8f0';
      ctx.lineWidth = 4;
      ctx.stroke();
    } else {
      // ===== KHUÔN MẶT HÀI HƯỚC MẶC ĐỊNH =====
      this.drawDefaultFace(r);
    }

    // Vẽ thêm vết bầm tím, sưng mắt và băng dán cá nhân tích tụ
    this.drawBruises();

    // Vẽ sao choáng váng quay quanh đầu khi combo cao
    if (this.combo >= 4) {
      const time = Date.now() * 0.005;
      for (let i = 0; i < 3; i++) {
        const starAngle = time + (i * Math.PI * 2 / 3);
        const sx = Math.cos(starAngle) * (r + 18);
        const sy = Math.sin(starAngle) * 16 - 35;
        this.drawMiniStar(sx, sy, 7, '#facc15');
      }
    }

    ctx.restore();
  }

  drawDefaultFace(r) {
    const ctx = this.ctx;
    const d = this.dummy;

    // Mặt da vàng/hồng
    ctx.fillStyle = d.hurtTimer > 0 ? '#fca5a5' : '#fed7aa';
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Tóc ngố
    ctx.fillStyle = '#451a03';
    ctx.beginPath();
    ctx.arc(0, -18, r - 4, Math.PI, Math.PI * 2);
    ctx.fill();

    // Mắt (mắt híp hoặc mắt xoáy ốc khi bị đấm)
    if (d.hurtTimer > 0 || this.combo >= 6) {
      // Mắt hình dấu X (bị choáng)
      this.drawCrossEye(-16, -4);
      this.drawCrossEye(16, -4);
    } else {
      // Mắt ngơ ngác
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(-16, -4, 9, 0, Math.PI * 2);
      ctx.arc(16, -4, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(-14, -4, 4, 0, Math.PI * 2);
      ctx.arc(18, -4, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Miệng (méo mó khi bị tẩn)
    ctx.strokeStyle = '#991b1b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (d.hurtTimer > 0) {
      // Miệng chữ O la hét
      ctx.fillStyle = '#7f1d1d';
      ctx.ellipse(0, 22, 12, 16, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    } else {
      // Miệng cười nhăn nhở
      ctx.arc(0, 14, 18, 0.2, Math.PI - 0.2);
      ctx.stroke();
    }
  }

  drawCrossEye(x, y) {
    const ctx = this.ctx;
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x - 6, y - 6); ctx.lineTo(x + 6, y + 6);
    ctx.moveTo(x + 6, y - 6); ctx.lineTo(x - 6, y + 6);
    ctx.stroke();
  }

  drawBruises() {
    const ctx = this.ctx;
    this.dummy.bruises.forEach(b => {
      if (b.type === 'bruise') {
        // Vết bầm màu tím xanh
        ctx.fillStyle = 'rgba(126, 34, 206, 0.55)';
        ctx.beginPath();
        ctx.arc(b.relX, b.relY, b.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Băng cá nhân dán chéo
        ctx.save();
        ctx.translate(b.relX, b.relY);
        ctx.rotate(0.4);
        ctx.fillStyle = '#fde047';
        ctx.fillRect(-b.size, -5, b.size * 2, 10);
        ctx.fillStyle = '#f87171';
        ctx.fillRect(-3, -5, 6, 10);
        ctx.restore();
      }
    });
  }

  drawMiniStar(x, y, r, color) {
    const ctx = this.ctx;
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      ctx.lineTo(
        x + Math.cos((18 + i * 72) * Math.PI / 180) * r,
        y - Math.sin((18 + i * 72) * Math.PI / 180) * r
      );
      ctx.lineTo(
        x + Math.cos((54 + i * 72) * Math.PI / 180) * (r * 0.5),
        y - Math.sin((54 + i * 72) * Math.PI / 180) * (r * 0.5)
      );
    }
    ctx.closePath();
    ctx.fill();
  }

  drawParticles() {
    const ctx = this.ctx;
    this.particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);

      if (p.type === 'star') {
        this.drawMiniStar(p.x, p.y, p.size, '#facc15');
      } else if (p.type === 'sweat') {
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });
  }

  drawPunchHits() {
    const ctx = this.ctx;
    this.punches.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.scale(p.scale, p.scale);

      // Vẽ hình ảnh vũ khí tác động
      if (p.weapon === 'slipper') {
        // Dép tổ ong huyền thoại
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.roundRect(-22, -12, 44, 24, 8);
        ctx.fill();
        ctx.strokeStyle = '#ca8a04';
        ctx.lineWidth = 2;
        ctx.stroke();
        // Quai dép
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(-8, -12, 16, 24);
      } else if (p.weapon === 'bat') {
        // Gậy bóng chày
        ctx.rotate(-0.5);
        ctx.fillStyle = '#d97706';
        ctx.fillRect(-8, -40, 16, 80);
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 2;
        ctx.strokeRect(-8, -40, 16, 80);
      } else if (p.weapon === 'slap') {
        // Bàn tay bạt tai 👋
        ctx.font = '36px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('👋', 0, 0);
      } else {
        // Nắm đấm 🥊
        ctx.font = '38px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🥊', 0, 0);
      }

      ctx.restore();
    });
  }

  drawFloatingTexts() {
    const ctx = this.ctx;
    this.floatingTexts.forEach(t => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, t.alpha);
      ctx.fillStyle = t.color;
      ctx.font = `bold ${t.fontSize}px 'Segoe UI', sans-serif`;
      ctx.textAlign = 'center';
      ctx.shadowColor = 'black';
      ctx.shadowBlur = 6;
      ctx.fillText(t.text, t.x, t.y);
      ctx.restore();
    });
  }
}

window.BeatUpGame = BeatUpGame;
