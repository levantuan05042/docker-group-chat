import * as THREE from 'three';

export class TempleScene {
  constructor(scene) {
    this.scene = scene;
    this.candleLights = [];
    this.smokeParticles = null;
    this.haloMesh = null;
    this.buddhaAuraLight = null;
    this.clock = new THREE.Clock();
    this.ripples = [];
    this.cushionPositions = [];

    // Tọa độ tương tác chuẩn xác, đứng trước bàn Phật/các khu vực nghi thức (không bị lấp vào kệ/bàn)
    this.interactiveStations = {
      woodfish: { x: 5.6, z: -1.05, rotY: Math.PI },
      bell: { x: -5.6, z: -1.48, rotY: Math.PI },
      incenseTable: { x: -2.8, z: -0.95, rotY: Math.PI },
      incenseCandle: { x: -0.65, z: -2.75, rotY: Math.PI },
      incenseBurner: { x: 0, z: -2.75, rotY: Math.PI },
      incenseBow: { x: 0, z: -1.20, rotY: Math.PI },
      fortuneTable: { x: 2.8, z: -0.95, rotY: Math.PI },
      pond: { x: -6.8, z: 8.6, rotY: 0 }, // Đứng trước bờ Hồ Sen Phóng Sinh
      chess: { x: 6.8, z: 9.2, rotY: 0 }, // Ghế 1 Kỳ Đài Chánh Niệm (Hướng Nam vào bàn cờ)
      chess2: { x: 6.8, z: 11.8, rotY: Math.PI }, // Ghế 2 Kỳ Đài Chánh Niệm (Hướng Bắc vào bàn cờ)
      tea: { x: 7.7, z: 10.5, rotY: -Math.PI / 2 } // Ngồi bàn trà đàm đạo
    };

    this.pondFish = [];
    this.floatingLanterns = [];
    this.waterMesh = null;
    this.teaSteamParticles = null;

    // Khởi tạo các bộ texture Canvas chất lượng cao (PBR Procedural Textures)
    this.textures = {
      woodFloor: this.generateWoodFloorTexture(),
      carpet: this.generateCarpetTexture(),
      cushion: this.generatePlushCushionTexture(),
      pillar: this.generatePillarTexture(),
      wall: this.generateWallTexture(),
      chessBoard: this.generateChessBoardTexture()
    };

    this.createEnvironment();
    this.createArchitecture();
    this.createGrandBuddhaAltar();
    this.createGrandOfferingAltar();
    this.createSideAltars();
    this.createEighteenArhats();
    this.createAuthenticCushionsGrid();
    this.createInteractiveStations();
    this.createLotusPond();
    this.createChessPavilion();
    this.createAtmosphericLighting();
    this.createParticleSystems();
  }

  // =========================================================================
  // BỘ TẠO TEXTURE PROCEDURAL CHUYÊN NGHIỆP (PBR PROCEDURAL TEXTURES)
  // Biến toàn bộ các khối hình thành bề mặt vật liệu chân thực, sống động
  // =========================================================================

  // 1. SÀN GỖ MUN/GỤ BÓNG LÁNG (POLISHED TEAK WOOD FLOOR PLANKS)
  generateWoodFloorTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Nền gỗ gụ sẫm ấm áp
    ctx.fillStyle = '#261309';
    ctx.fillRect(0, 0, 1024, 1024);

    const plankCount = 16;
    const plankHeight = 1024 / plankCount;

    for (let i = 0; i < plankCount; i++) {
      const y = i * plankHeight;
      // Màu sắc từng thanh gỗ chênh lệch tự nhiên
      const shade = 28 + Math.floor(Math.sin(i * 1.7) * 12);
      ctx.fillStyle = `rgb(${shade + 18}, ${shade + 4}, ${shade - 8})`;
      ctx.fillRect(0, y, 1024, plankHeight - 2);

      // Thớ vân gỗ mềm mại
      ctx.strokeStyle = 'rgba(15, 6, 2, 0.45)';
      ctx.lineWidth = 1;
      for (let g = 0; g < 18; g++) {
        const gy = y + Math.random() * plankHeight;
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.bezierCurveTo(300, gy + (Math.random() - 0.5) * 6, 700, gy + (Math.random() - 0.5) * 6, 1024, gy);
        ctx.stroke();
      }

      // Mối ghép gỗ (bevel line)
      ctx.fillStyle = '#110502';
      ctx.fillRect(0, y + plankHeight - 2, 1024, 2);

      // Ánh bóng véc-ni nhẹ dọc thanh
      const gloss = ctx.createLinearGradient(0, y, 0, y + plankHeight);
      gloss.addColorStop(0, 'rgba(255, 230, 190, 0.08)');
      gloss.addColorStop(0.5, 'rgba(255, 230, 190, 0.02)');
      gloss.addColorStop(1, 'rgba(0, 0, 0, 0.15)');
      ctx.fillStyle = gloss;
      ctx.fillRect(0, y, 1024, plankHeight - 2);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(5, 5);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // 2. THẢM GẤM ĐỎ HOÀNG GIA DỆT HOA VĂN HOA SEN VÀNG (ROYAL BUDDHIST SILK CARPET)
  generateCarpetTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Nền gấm đỏ thẫm quý phái
    const grad = ctx.createLinearGradient(0, 0, 512, 0);
    grad.addColorStop(0, '#5a0a0f');
    grad.addColorStop(0.12, '#851218');
    grad.addColorStop(0.5, '#99151c');
    grad.addColorStop(0.88, '#851218');
    grad.addColorStop(1, '#5a0a0f');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 1024);

    // Vân dệt sợi gấm đan xen (Woven fabric texture)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    for (let y = 0; y < 1024; y += 4) {
      ctx.fillRect(0, y, 512, 1.5);
    }

    // Viền thêu chỉ vàng hoàng gia 2 bên
    ctx.fillStyle = '#f5c33b';
    ctx.fillRect(16, 0, 14, 1024);
    ctx.fillRect(482, 0, 14, 1024);

    ctx.fillStyle = '#ffd700';
    ctx.fillRect(36, 0, 6, 1024);
    ctx.fillRect(470, 0, 6, 1024);

    // Họa tiết hoa văn liên hoa (Lotus medaillons) chạy dọc tim thảm
    const lotusCount = 8;
    const step = 1024 / lotusCount;
    for (let i = 0; i < lotusCount; i++) {
      const cy = i * step + step / 2;
      const cx = 256;

      ctx.save();
      ctx.translate(cx, cy);

      // Vòng tròn ánh vàng
      ctx.strokeStyle = '#e6b12a';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 36, 0, Math.PI * 2);
      ctx.stroke();

      // Cánh sen vàng 8 cánh
      ctx.fillStyle = '#ffdf79';
      for (let p = 0; p < 8; p++) {
        const ang = (p / 8) * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(Math.cos(ang) * 22, Math.sin(ang) * 22, 12, 6, ang, 0, Math.PI * 2);
        ctx.fill();
      }

      // Nhụy sen
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.arc(0, 0, 9, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 4);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // 3. BỒ ĐOÀN VẢI DỆT DÀY DẶN ÊM ÁI (PLUSH ZAFU MEDITATION CUSHION)
  generatePlushCushionTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Nền vải thô màu xám đá thiền định (Zen Slate Grey)
    const rad = ctx.createRadialGradient(256, 256, 10, 256, 256, 256);
    rad.addColorStop(0, '#4e4e55');
    rad.addColorStop(0.65, '#3a3a40');
    rad.addColorStop(0.92, '#2b2b30');
    rad.addColorStop(1, '#1e1e22');
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, 512, 512);

    // Vân vải đan chéo vi sợi
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 512; x += 6) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }
    for (let y = 0; y < 512; y += 6) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    // Nút rút chỉ giữa tâm bồ đoàn (Tufted button)
    const btn = ctx.createRadialGradient(256, 256, 2, 256, 256, 32);
    btn.addColorStop(0, '#151518');
    btn.addColorStop(0.4, '#242428');
    btn.addColorStop(0.85, '#3e3e44');
    btn.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = btn;
    ctx.beginPath();
    ctx.arc(256, 256, 32, 0, Math.PI * 2);
    ctx.fill();

    // Viền thêu chỉ vàng be quanh mép
    ctx.strokeStyle = 'rgba(215, 185, 130, 0.65)';
    ctx.lineWidth = 6;
    ctx.strokeRect(16, 16, 480, 480);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // 4. CỘT GỖ LIM SƠN VÉC-NI SẪM BÓNG (POLISHED LIM WOOD PILLARS)
  generatePillarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Gỗ lim cánh gián bóng
    const grad = ctx.createLinearGradient(0, 0, 256, 0);
    grad.addColorStop(0, '#1e0804');
    grad.addColorStop(0.35, '#3b1209');
    grad.addColorStop(0.7, '#48170c');
    grad.addColorStop(1, '#1e0804');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 1024);

    // Vân gỗ lim sẫm thẳng tắp
    ctx.strokeStyle = 'rgba(15, 4, 2, 0.4)';
    ctx.lineWidth = 1.5;
    for (let x = 0; x < 256; x += 10) {
      ctx.beginPath();
      ctx.moveTo(x + (Math.random() - 0.5) * 4, 0);
      ctx.lineTo(x + (Math.random() - 0.5) * 4, 1024);
      ctx.stroke();
    }

    // Đai hoa văn cánh sen vàng ở đầu và chân cột
    [60, 964].forEach(by => {
      ctx.fillStyle = '#f5c33b';
      ctx.fillRect(0, by - 12, 256, 24);
      ctx.fillStyle = '#ffd700';
      ctx.fillRect(0, by - 4, 256, 8);
    });

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 2);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // 5. TƯỜNG GẠCH CỔ CHÙA VÀ VÁCH GỖ ỐP (TEMPLE WALL TEXTURE)
  generateWallTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Nền vôi vàng hoa quỳ trầm ấm
    ctx.fillStyle = '#8f6838';
    ctx.fillRect(0, 0, 512, 512);

    // Độ nhám vôi vữa tự nhiên (Stucco grain)
    for (let i = 0; i < 4000; i++) {
      const rx = Math.random() * 512;
      const ry = Math.random() * 512;
      const lum = (Math.random() - 0.5) * 24;
      ctx.fillStyle = `rgba(${140 + lum}, ${100 + lum}, ${55 + lum}, 0.25)`;
      ctx.fillRect(rx, ry, 3, 3);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 2);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // 6. HOÀNH PHI & CÂU ĐỐI THƯ PHÁP
  generateSignboardTexture(text, subtitle = '') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#380406');
    grad.addColorStop(0.5, '#6a0f13');
    grad.addColorStop(1, '#2c0305');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 256);

    ctx.strokeStyle = '#f5c33b';
    ctx.lineWidth = 14;
    ctx.strokeRect(16, 16, 992, 224);
    ctx.strokeStyle = '#8f640a';
    ctx.lineWidth = 4;
    ctx.strokeRect(28, 28, 968, 200);

    ctx.font = 'bold 92px "Playfair Display", "Times New Roman", "Noto Serif", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    const goldGrad = ctx.createLinearGradient(0, 30, 0, 220);
    goldGrad.addColorStop(0, '#fff6bd');
    goldGrad.addColorStop(0.35, '#ffd700');
    goldGrad.addColorStop(0.75, '#d49b18');
    goldGrad.addColorStop(1, '#9e6e08');
    ctx.fillStyle = goldGrad;
    ctx.fillText(text, 512, subtitle ? 104 : 128);

    if (subtitle) {
      ctx.font = 'italic 34px "Playfair Display", "Times New Roman", serif';
      ctx.fillStyle = '#ffd680';
      ctx.fillText(subtitle, 512, 184);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  generateCoupletTexture(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 256, 0);
    grad.addColorStop(0, '#2e0405');
    grad.addColorStop(0.5, '#610c10');
    grad.addColorStop(1, '#2e0405');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 1024);

    ctx.strokeStyle = '#f5c33b';
    ctx.lineWidth = 10;
    ctx.strokeRect(14, 14, 228, 996);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    const chars = text.split('');
    const charCount = chars.length;
    const fontSize = Math.min(58, Math.floor(860 / (charCount + 0.5)));
    ctx.font = `bold ${fontSize}px "Playfair Display", "Times New Roman", "Noto Serif", serif`;

    const startY = 70;
    const spacing = (1024 - 140) / charCount;

    const goldGrad = ctx.createLinearGradient(0, 0, 256, 0);
    goldGrad.addColorStop(0, '#fff6bd');
    goldGrad.addColorStop(0.4, '#ffd700');
    goldGrad.addColorStop(0.85, '#c98e14');
    ctx.fillStyle = goldGrad;

    chars.forEach((c, idx) => {
      ctx.fillText(c, 128, startY + idx * spacing + spacing / 2);
    });

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // 7. BÀN CỜ GỖ MUN KHẢM NÂU VÀNG (15x15 ZEN CHESSBOARD TEXTURE)
  generateChessBoardTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Nền gỗ gụ vàng ấm
    const grad = ctx.createLinearGradient(0, 0, 512, 512);
    grad.addColorStop(0, '#c9934a');
    grad.addColorStop(0.5, '#b8813a');
    grad.addColorStop(1, '#a6702c');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Vân gỗ nhẹ
    ctx.strokeStyle = 'rgba(70, 40, 10, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      const y = Math.random() * 512;
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(170, y + (Math.random() - 0.5) * 12, 340, y + (Math.random() - 0.5) * 12, 512, y);
      ctx.stroke();
    }

    // Viền khung ngoài bàn cờ mạ vàng/mun đen
    ctx.strokeStyle = '#3a1a08';
    ctx.lineWidth = 8;
    ctx.strokeRect(16, 16, 480, 480);

    ctx.strokeStyle = '#e0a943';
    ctx.lineWidth = 2;
    ctx.strokeRect(22, 22, 468, 468);

    // 15x15 Lưới ô cờ truyền thống
    const margin = 42;
    const size = 512 - margin * 2;
    const step = size / 14;

    ctx.strokeStyle = '#2d1405';
    ctx.lineWidth = 1.8;

    for (let i = 0; i < 15; i++) {
      const pos = margin + i * step;
      // Đường ngang
      ctx.beginPath();
      ctx.moveTo(margin, pos);
      ctx.lineTo(margin + size, pos);
      ctx.stroke();

      // Đường dọc
      ctx.beginPath();
      ctx.moveTo(pos, margin);
      ctx.lineTo(pos, margin + size);
      ctx.stroke();
    }

    // 5 Điểm sao (Thiên nguyên & 4 góc: (3,3), (11,3), (7,7), (3,11), (11,11))
    const starIndices = [
      [3, 3], [11, 3], [7, 7], [3, 11], [11, 11]
    ];
    ctx.fillStyle = '#2d1405';
    starIndices.forEach(([c, r]) => {
      const sx = margin + c * step;
      const sy = margin + r * step;
      ctx.beginPath();
      ctx.arc(sx, sy, 4.5, 0, Math.PI * 2);
      ctx.fill();
    });

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  createEnvironment() {
    // Không gian thiền định ấm áp, sáng sủa, thanh tịnh
    this.scene.background = new THREE.Color(0x361f14);
    this.scene.fog = new THREE.Fog(0x361f14, 28, 75);
  }

  // =========================================================================
  // KIẾN TRÚC ĐẠI HÙNG BẢO ĐIỆN VỚI VẬT LIỆU CHÂN THỰC
  // Tường bao, sàn gỗ bóng phản chiếu nến, thảm gấm hoa sen, cột lim vững chãi
  // =========================================================================
  createArchitecture() {
    const templeGroup = new THREE.Group();

    // 1. SÀN GỖ MUN BÓNG LÁNG (PHẢN CHIẾU ÁNH ĐÈN & NẾN)
    const floorGeo = new THREE.PlaneGeometry(24, 28, 16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      map: this.textures.woodFloor,
      roughness: 0.18, // Bóng bẩy để phản chiếu ánh nến vàng ấm áp
      metalness: 0.08
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, 3.5);
    floor.receiveShadow = true;
    templeGroup.add(floor);

    // 2. THẢM GẤM ĐỎ DỆT HOA SEN HOÀNG GIA DẪN LỐI TRUNG TÂM
    const carpetGeo = new THREE.PlaneGeometry(3.0, 26);
    const carpetMat = new THREE.MeshStandardMaterial({
      map: this.textures.carpet,
      roughness: 0.65,
      metalness: 0.04
    });
    const redCarpet = new THREE.Mesh(carpetGeo, carpetMat);
    redCarpet.rotation.x = -Math.PI / 2;
    redCarpet.position.set(0, 0.02, 3.5);
    redCarpet.receiveShadow = true;
    templeGroup.add(redCarpet);

    // 3. TƯỜNG BAO 4 PHÍA KÍN ĐÁO TRANG NGHIÊM
    const wallMat = new THREE.MeshStandardMaterial({
      map: this.textures.wall,
      roughness: 0.85
    });

    const woodBaseMat = new THREE.MeshStandardMaterial({
      color: 0x240e07,
      roughness: 0.45,
      metalness: 0.05
    });

    // Tường Hậu (Sau lưng Phật điện, z = -8.5)
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(24, 12, 0.8), wallMat);
    backWall.position.set(0, 6.0, -8.5);
    const backWainscot = new THREE.Mesh(new THREE.BoxGeometry(24.2, 2.8, 0.95), woodBaseMat);
    backWainscot.position.set(0, 1.4, -8.45);
    templeGroup.add(backWall, backWainscot);

    // Tường Tả (Trái, x = -11.5) & Tường Hữu (Phải, x = 11.5)
    [-11.5, 11.5].forEach(wx => {
      const sideWall = new THREE.Mesh(new THREE.BoxGeometry(0.8, 12, 28), wallMat);
      sideWall.position.set(wx, 6.0, 3.5);
      const sideWainscot = new THREE.Mesh(new THREE.BoxGeometry(0.95, 2.8, 28), woodBaseMat);
      sideWainscot.position.set(wx, 1.4, 3.5);
      templeGroup.add(sideWall, sideWainscot);

      // Cửa sổ tròn chữ Thọ dát vàng truyền thống
      [-2.0, 5.0, 12.0].forEach(wz => {
        const win = new THREE.Mesh(
          new THREE.TorusGeometry(1.3, 0.12, 10, 24),
          new THREE.MeshStandardMaterial({ color: 0x4a120b, roughness: 0.45 })
        );
        win.rotation.y = wx > 0 ? -Math.PI / 2 : Math.PI / 2;
        win.position.set(wx > 0 ? wx - 0.35 : wx + 0.35, 6.2, wz);
        templeGroup.add(win);
      });
    });

    // Tường Tiền & Cửa Tam Quan (z = 17.5)
    const frontWallL = new THREE.Mesh(new THREE.BoxGeometry(8.5, 12, 0.8), woodBaseMat);
    frontWallL.position.set(-7.25, 6.0, 17.5);
    const frontWallR = new THREE.Mesh(new THREE.BoxGeometry(8.5, 12, 0.8), woodBaseMat);
    frontWallR.position.set(7.25, 6.0, 17.5);
    const archTop = new THREE.Mesh(new THREE.BoxGeometry(7.0, 4.0, 0.9), woodBaseMat);
    archTop.position.set(0, 10.0, 17.5);
    templeGroup.add(frontWallL, frontWallR, archTop);

    // 4. HÀNG CỘT LIM SƠN VÉC-NI & CÂU ĐỐI THƯ PHÁP DÁT VÀNG
    const pillarGeo = new THREE.CylinderGeometry(0.52, 0.58, 11.0, 24);
    const pillarMat = new THREE.MeshStandardMaterial({
      map: this.textures.pillar,
      roughness: 0.28,
      metalness: 0.15
    });

    const baseGeo = new THREE.CylinderGeometry(0.82, 0.95, 0.45, 16);
    const stoneBaseMat = new THREE.MeshStandardMaterial({ color: 0x1f1f22, roughness: 0.85 });

    const pillarCoords = [
      [-3.8, -2.5], [3.8, -2.5], // Đôi cột cái phía trước bàn Phật
      [-7.5, 4.0], [7.5, 4.0],   // Đôi cột quân giữa điện
      [-7.5, 11.0], [7.5, 11.0]  // Đôi cột quân cuối điện
    ];

    pillarCoords.forEach(([px, pz]) => {
      const p = new THREE.Mesh(pillarGeo, pillarMat);
      p.position.set(px, 5.5, pz);
      p.castShadow = true;

      const base = new THREE.Mesh(baseGeo, stoneBaseMat);
      base.position.set(px, 0.225, pz);

      templeGroup.add(p, base);
    });

    // CÂU ĐỐI THƯ PHÁP TREO TRÊN 2 CỘT CHÍNH: VỪA LÀM VỪA TU
    const coupletL = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 5.4, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateCoupletTexture('TẬN LỰC CÀY CUỐC PHƯỚC ĐỨC TĂNG HUY') })
    );
    coupletL.position.set(-3.8, 4.8, -1.9);

    const coupletR = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 5.4, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateCoupletTexture('CHÁNH NIỆM TU TÂM DEADLINE KHÔNG QUẠU') })
    );
    coupletR.position.set(3.8, 4.8, -1.9);

    templeGroup.add(coupletL, coupletR);

    // HOÀNH PHI ĐẠI TỰ "CHÙA VỪA LÀM VỪA TU" TREO TRÊN CAO TRUNG TÂM
    const grandSign = new THREE.Mesh(
      new THREE.BoxGeometry(6.2, 1.45, 0.15),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('CHÙA VỪA LÀM VỪA TU', 'LÀM VIỆC CHÁNH NIỆM • VỪA CÀY DEADLINE VỪA TU TÂM') })
    );
    grandSign.position.set(0, 8.8, -3.5);
    templeGroup.add(grandSign);

    // Xà gồ vì kèo gỗ lim nâng đỡ mái
    const beamMat = new THREE.MeshStandardMaterial({ color: 0x2b0d06, roughness: 0.5 });
    [-2.5, 4.0, 11.0].forEach(bz => {
      const crossBeam = new THREE.Mesh(new THREE.BoxGeometry(23, 0.55, 0.55), beamMat);
      crossBeam.position.set(0, 10.8, bz);
      templeGroup.add(crossBeam);
    });

    this.scene.add(templeGroup);
  }

  // =========================================================================
  // BẢO ĐIỆN ĐỨC PHẬT BỔN SƯ THÍCH CA MÂU NI 3D & NHỊ VỊ TÔN GIẢ
  // Tôn tượng Đức Bổn Sư Thích Ca Mâu Ni 3D dát vàng ngự tòa sen uy nghi,
  // Tôn Giả A Nan & Ca Diếp đứng hầu hai bên, vầng hào quang rực rỡ mười phương
  // =========================================================================
  createGrandBuddhaAltar() {
    const altarGroup = new THREE.Group();
    altarGroup.position.set(0, 0, -6.2);

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf5ba2a,
      metalness: 0.90,
      roughness: 0.18,
      emissive: 0x5a3d08,
      emissiveIntensity: 0.35
    });

    const darkGoldMat = new THREE.MeshStandardMaterial({
      color: 0xc9941e,
      metalness: 0.85,
      roughness: 0.28
    });

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x1a2430,
      roughness: 0.70
    });

    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xfde3cf,
      roughness: 0.40
    });

    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x220a05, roughness: 0.40 });
    const redSilkMat = new THREE.MeshStandardMaterial({ color: 0x9b1c1c, roughness: 0.60 });

    // 1. TÒA SEN VÀNG TAM CẤP UY NGHI
    const pedOct = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 3.2, 0.40, 8), darkWoodMat);
    pedOct.position.y = 0.20;
    const pedBase = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.8, 0.50, 24), goldMat);
    pedBase.position.y = 0.65;
    const pedTier2 = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.4, 0.45, 24), darkGoldMat);
    pedTier2.position.y = 1.10;
    const pedBowl = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.6, 0.40, 24), goldMat);
    pedBowl.position.y = 1.50;
    altarGroup.add(pedOct, pedBase, pedTier2, pedBowl);

    // 20 Cánh sen vàng nở rộ quanh đài sen
    for (let i = 0; i < 20; i++) {
      const ang = (i / 20) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 10), goldMat);
      petal.scale.set(1.4, 0.55, 0.85);
      petal.position.set(Math.cos(ang) * 1.95, 1.55, Math.sin(ang) * 1.95);
      petal.rotation.y = -ang;
      petal.rotation.z = Math.PI / 6;
      altarGroup.add(petal);
    }

    // 2. TÔN TƯỢNG ĐỨC PHẬT THÍCH CA MÂU NI 3D TỌA THIỀN KIẾT GIÀ (PADMASANA)
    const buddhaGroup = new THREE.Group();
    buddhaGroup.position.set(0, 1.65, 0.10);

    // Chân xếp bằng kiết già (Hai chân đan hoa sen)
    const crossedLegs = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.55, 0.50, 24), darkGoldMat);
    crossedLegs.position.y = 0.25;

    // Hai đầu gối bo tròn hai bên
    [-1.25, 1.25].forEach(kx => {
      const knee = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 12), darkGoldMat);
      knee.scale.set(1.1, 0.75, 1.3);
      knee.position.set(kx, 0.25, 0.15);
      buddhaGroup.add(knee);
    });

    // Hai bàn chân ngửa lòng bàn chân lên đùi
    [-0.45, 0.45].forEach(fx => {
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.40), skinMat);
      foot.position.set(fx, 0.46, 0.22);
      foot.rotation.x = -0.3;
      buddhaGroup.add(foot);
    });

    // Thân tượng uy nghi (Torso & Kasaya)
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.95, 1.65, 24), goldMat);
    torso.position.y = 1.25;

    // Vạt cà sa buông qua vai trái (Right shoulder bare - Hữu thiên y truyền thống)
    const kasayaSash = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.98, 1.66, 24, 1, false, Math.PI * 0.4, Math.PI * 1.2), redSilkMat);
    kasayaSash.position.y = 1.25;

    // Bờ vai nở nang trang nghiêm
    const shoulders = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.46, 0.72), goldMat);
    shoulders.position.y = 1.95;

    // Cánh tay trái: Đặt trên đùi trong Ấn Thiền Định (Dhyana Mudra)
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 1.1, 14), redSilkMat);
    armL.position.set(-0.95, 1.50, 0.05);
    armL.rotation.z = Math.PI / 5.5;

    const foreArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.95, 14), skinMat);
    foreArmL.position.set(-0.45, 0.75, 0.45);
    foreArmL.rotation.set(-Math.PI / 2.2, 0, -Math.PI / 3.0);

    // Bát đồng đựng nước cam lộ đặt trên lòng bàn tay trái
    const almsBowl = new THREE.Mesh(
      new THREE.SphereGeometry(0.20, 14, 14, 0, Math.PI * 2, 0, Math.PI * 0.65),
      new THREE.MeshStandardMaterial({ color: 0x221307, metalness: 0.9, roughness: 0.2 })
    );
    almsBowl.position.set(-0.05, 0.78, 0.52);

    // Cánh tay phải: Buông qua đầu gối phải trong Ấn Xúc Địa Hàng Ma (Bhumisparsha Mudra)
    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 1.1, 14), goldMat);
    armR.position.set(0.95, 1.50, 0.05);
    armR.rotation.z = -Math.PI / 5.5;

    const foreArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.95, 14), skinMat);
    foreArmR.position.set(1.05, 0.68, 0.35);
    foreArmR.rotation.set(Math.PI / 4, 0, -0.2);

    const handR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.28, 0.08), skinMat);
    handR.position.set(1.15, 0.32, 0.52);
    handR.rotation.x = 0.35;

    // Đầu Đức Phật Thích Ca (Tướng hảo quang minh, từ bi hỷ xả)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.56, 24, 24), skinMat);
    head.scale.set(0.92, 1.15, 0.95);
    head.position.set(0, 2.75, 0);

    // Tóc xoắn ốc xanh biếc & Nhục kế Ushnisha trên đỉnh đầu
    const hairDome = new THREE.Mesh(new THREE.SphereGeometry(0.57, 24, 18, 0, Math.PI * 2, 0, Math.PI * 0.58), hairMat);
    hairDome.position.set(0, 2.85, 0);

    const ushnisha = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), hairMat);
    ushnisha.position.set(0, 3.42, 0.02);

    // Đỉnh ngọc Urna hồng ngọc phát quang giữa hai chân mày
    const urna = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff3b30 }));
    urna.position.set(0, 2.85, 0.53);

    // Đôi tai dài phúc tướng chấm vai
    [-0.56, 0.56].forEach(ex => {
      const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.52, 10), skinMat);
      ear.position.set(ex, 2.65, 0);
      buddhaGroup.add(ear);
    });

    // Vòng hào quang đầu bằng vàng chạm nổi
    const headHalo = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.06, 12, 32), goldMat);
    headHalo.position.set(0, 2.90, -0.25);

    buddhaGroup.add(
      crossedLegs, torso, kasayaSash, shoulders,
      armL, foreArmL, almsBowl,
      armR, foreArmR, handR,
      head, hairDome, ushnisha, urna, headHalo
    );
    altarGroup.add(buddhaGroup);

    // 3. NHỊ VỊ TÔN GIẢ ĐỨNG HẦU: A NAN (TẢ) & CA DIẾP (HỮU)
    // TÔN GIẢ A NAN (Bên Tả: x = -2.6, trẻ tuổi, chắp tay thành kính)
    const anandaGroup = new THREE.Group();
    anandaGroup.position.set(-2.6, 0, 0.35);
    anandaGroup.rotation.y = Math.PI / 6;

    const anPed = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 0.45, 18), darkWoodMat);
    anPed.position.y = 0.225;
    const anLotus = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.50, 0.20, 18), goldMat);
    anLotus.position.y = 0.55;

    const anRobe = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.48, 1.95, 16), new THREE.MeshStandardMaterial({ color: 0x4f6475, roughness: 0.6 }));
    anRobe.position.y = 1.55;
    const anKesa = new THREE.Mesh(new THREE.BoxGeometry(0.24, 1.8, 0.05), goldMat);
    anKesa.position.set(-0.08, 1.55, 0.22);
    anKesa.rotation.z = -0.15;

    // Hai tay chắp búp sen hướng Phật
    const anHands = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 10), skinMat);
    anHands.scale.set(0.6, 1.5, 0.8);
    anHands.position.set(0, 1.85, 0.35);

    const anHead = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), skinMat);
    anHead.position.set(0, 2.70, 0);
    const anHalo = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.03, 8, 24), goldMat);
    anHalo.position.set(0, 2.75, -0.15);

    const anSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.24, 0.03),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Tôn Giả A Nan') })
    );
    anSign.position.set(0, 0.25, 0.65);

    anandaGroup.add(anPed, anLotus, anRobe, anKesa, anHands, anHead, anHalo, anSign);
    altarGroup.add(anandaGroup);

    // TÔN GIẢ CA DIẾP (Bên Hữu: x = 2.6, trưởng lão từ bi, cầm bình bát)
    const kasyapaGroup = new THREE.Group();
    kasyapaGroup.position.set(2.6, 0, 0.35);
    kasyapaGroup.rotation.y = -Math.PI / 6;

    const kaPed = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 0.45, 18), darkWoodMat);
    kaPed.position.y = 0.225;
    const kaLotus = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.50, 0.20, 18), goldMat);
    kaLotus.position.y = 0.55;

    const kaRobe = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.48, 1.95, 16), new THREE.MeshStandardMaterial({ color: 0x7c3817, roughness: 0.6 }));
    kaRobe.position.y = 1.55;
    const kaKesa = new THREE.Mesh(new THREE.BoxGeometry(0.24, 1.8, 0.05), goldMat);
    kaKesa.position.set(-0.08, 1.55, 0.22);
    kaKesa.rotation.z = -0.15;

    // Hai tay nâng bình bát cúng dường
    const kaHands = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 10), skinMat);
    kaHands.position.set(0, 1.80, 0.35);
    const kaBowl = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 10, 0, Math.PI * 2, 0, Math.PI * 0.65), darkWoodMat);
    kaBowl.position.set(0, 1.88, 0.40);

    const kaHead = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), skinMat);
    kaHead.position.set(0, 2.70, 0);
    // Râu tóc bạc trắng từ bi
    const kaBeard = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.05, 0.22, 10), new THREE.MeshBasicMaterial({ color: 0xeeeeee }));
    kaBeard.position.set(0, 2.45, 0.16);

    const kaHalo = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.03, 8, 24), goldMat);
    kaHalo.position.set(0, 2.75, -0.15);

    const kaSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.24, 0.03),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Tôn Giả Ca Diếp') })
    );
    kaSign.position.set(0, 0.25, 0.65);

    kasyapaGroup.add(kaPed, kaLotus, kaRobe, kaKesa, kaHands, kaBowl, kaHead, kaBeard, kaHalo, kaSign);
    altarGroup.add(kasyapaGroup);

    // 4. KHÁM THỜ HOÀNG GIA & MÁI NGÓI CUNG ĐÌNH PHÍA SAU
    const shrineW = 5.6;
    const shrineH = 7.6;
    const outerFrame = new THREE.Mesh(new THREE.BoxGeometry(shrineW + 0.8, shrineH + 0.8, 0.20), darkWoodMat);
    outerFrame.position.set(0, 5.0, -0.35);

    const innerGoldBorder = new THREE.Mesh(new THREE.BoxGeometry(shrineW + 0.28, shrineH + 0.28, 0.12), goldMat);
    innerGoldBorder.position.set(0, 5.0, -0.30);

    const shrineRoof = new THREE.Mesh(new THREE.BoxGeometry(shrineW + 1.8, 0.55, 1.2), new THREE.MeshStandardMaterial({ color: 0x8a241c, roughness: 0.55 }));
    shrineRoof.position.set(0, 9.10, 0);
    const shrineTrim = new THREE.Mesh(new THREE.BoxGeometry(shrineW + 2.2, 0.18, 1.4), goldMat);
    shrineTrim.position.set(0, 9.40, 0);

    altarGroup.add(outerFrame, innerGoldBorder, shrineRoof, shrineTrim);

    // 5. VẦNG HÀO QUANG CẦU VỒNG QUANG MINH RỰC RỠ
    const haloCanvas = document.createElement('canvas');
    haloCanvas.width = 512;
    haloCanvas.height = 512;
    const hctx = haloCanvas.getContext('2d');
    hctx.translate(256, 256);

    const hgrad = hctx.createRadialGradient(0, 0, 50, 0, 0, 250);
    hgrad.addColorStop(0, 'rgba(255, 248, 200, 0.95)');
    hgrad.addColorStop(0.35, 'rgba(255, 215, 90, 0.75)');
    hgrad.addColorStop(0.75, 'rgba(255, 140, 0, 0.35)');
    hgrad.addColorStop(1, 'rgba(180, 40, 0, 0)');
    hctx.fillStyle = hgrad;
    hctx.beginPath();
    hctx.arc(0, 0, 250, 0, Math.PI * 2);
    hctx.fill();

    const rainbowColors = ['#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#00c7be', '#007aff', '#af52de', '#ff2d55'];
    for (let ray = 0; ray < 48; ray++) {
      const rayAngle = (ray / 48) * Math.PI * 2;
      hctx.save();
      hctx.rotate(rayAngle);
      hctx.fillStyle = rainbowColors[ray % rainbowColors.length];
      hctx.globalAlpha = 0.35;
      hctx.beginPath();
      hctx.moveTo(-12, 60);
      hctx.lineTo(12, 60);
      hctx.lineTo(24, 250);
      hctx.lineTo(-24, 250);
      hctx.closePath();
      hctx.fill();
      hctx.restore();
    }

    const haloTexture = new THREE.CanvasTexture(haloCanvas);
    const haloMat = new THREE.MeshBasicMaterial({
      map: haloTexture,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const rainbowHalo = new THREE.Mesh(new THREE.PlaneGeometry(11.0, 11.0), haloMat);
    rainbowHalo.position.set(0, 5.0, -0.28);
    altarGroup.add(rainbowHalo);
    this.haloMesh = rainbowHalo;

    // Biển đại tự dát vàng trước Phật điện
    const mainSign = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.45, 0.05),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Đức Bổn Sư Thích Ca Mâu Ni Phật') })
    );
    mainSign.position.set(0, 0.70, 1.85);
    altarGroup.add(mainSign);

    // Ánh sáng quang minh Phật
    this.buddhaAuraLight = new THREE.PointLight(0xffe082, 4.5, 24);
    this.buddhaAuraLight.position.set(0, 5.5, 1.2);
    altarGroup.add(this.buddhaAuraLight);

    this.scene.add(altarGroup);
  }

  // =========================================================================
  // BÀN ĐẠI LỄ TAM BẢO CHÍNH ĐIỆN (GRAND CEREMONIAL OFFERING ALTAR)
  // Bàn thờ gỗ gụ chạm rồng, đỉnh đồng trầm hương, đôi hạc đồng ngự rùa,
  // Đôi nến đỏ thắp sáng, mâm ngũ quả, đôi bình sen hồng
  // =========================================================================
  createGrandOfferingAltar() {
    const tableGroup = new THREE.Group();
    // Bàn lễ tại z = -3.8, cao 0.95m => Rất gọn gàng, tôn vinh ảnh Phật phía sau
    tableGroup.position.set(0, 0, -3.8);

    const tableMat = new THREE.MeshStandardMaterial({ color: 0x2a0d06, roughness: 0.35 });
    const goldTrimMat = new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.88, roughness: 0.22 });
    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0xb58b3c,
      metalness: 0.85,
      roughness: 0.24,
      emissive: 0x221504,
      emissiveIntensity: 0.15
    });

    // 1. Thân bàn thờ đại lễ
    const mainTable = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.95, 1.2), tableMat);
    mainTable.position.y = 0.475;
    mainTable.castShadow = true;
    mainTable.receiveShadow = true;

    const tableApron = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.16, 1.25), goldTrimMat);
    tableApron.position.y = 0.85;

    // Khăn phủ gấm đỏ
    const runner = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.03, 1.1), new THREE.MeshStandardMaterial({ color: 0x941418, roughness: 0.6 }));
    runner.position.y = 0.965;

    tableGroup.add(mainTable, tableApron, runner);

    // 2. LƯ ĐỒNG TAM BẢO TRUNG TÂM
    const burnerGroup = new THREE.Group();
    burnerGroup.position.set(0, 0.98, 0.12);

    const burnerBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.34, 0.46, 20), bronzeMat);
    burnerBody.position.y = 0.23;
    const burnerRim = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.045, 10, 24), goldTrimMat);
    burnerRim.rotation.x = Math.PI / 2;
    burnerRim.position.y = 0.46;

    for (let f = 0; f < 3; f++) {
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.065, 0.22, 8), bronzeMat);
      const ang = (f / 3) * Math.PI * 2;
      foot.position.set(Math.cos(ang) * 0.30, 0.09, Math.sin(ang) * 0.30);
      burnerGroup.add(foot);
    }

    const sand = new THREE.Mesh(new THREE.CylinderGeometry(0.40, 0.40, 0.05, 18), new THREE.MeshStandardMaterial({ color: 0xd4b07b, roughness: 0.9 }));
    sand.position.y = 0.43;

    // 3 nén tâm hương bén lửa đỏ
    for (let i = -1; i <= 1; i++) {
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.65), new THREE.MeshBasicMaterial({ color: 0xaa2211 }));
      stick.position.set(i * 0.09, 0.72, 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff3b00 }));
      tip.position.set(i * 0.09, 1.02, 0);
      burnerGroup.add(stick, tip);
    }

    burnerGroup.add(burnerBody, burnerRim, sand);
    tableGroup.add(burnerGroup);

    // 3. ĐÔI HẠC ĐỒNG NGỰ RÙA
    [-1.15, 1.15].forEach((hx, idx) => {
      const craneGroup = new THREE.Group();
      craneGroup.position.set(hx, 0.98, -0.10);
      craneGroup.rotation.y = idx === 0 ? Math.PI / 6 : -Math.PI / 6;

      const turtle = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), bronzeMat);
      turtle.scale.set(1.3, 0.52, 1.0);
      turtle.position.y = 0.06;

      const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.52, 8), bronzeMat);
      legs.position.y = 0.34;

      const cBody = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10), bronzeMat);
      cBody.scale.set(0.9, 1.4, 0.9);
      cBody.position.set(0, 0.66, 0);

      const cNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.022, 0.40, 8), bronzeMat);
      cNeck.position.set(0, 0.92, 0.06);

      const cHead = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), bronzeMat);
      cHead.position.set(0, 1.14, 0.09);

      craneGroup.add(turtle, legs, cBody, cNeck, cHead);
      tableGroup.add(craneGroup);
    });

    // 4. ĐÔI CHÂN NẾN ĐỎ THẮP SÁNG
    [-0.65, 0.65].forEach(nx => {
      const cStand = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.11, 0.30, 10), bronzeMat);
      cStand.position.set(nx, 1.12, 0.22);
      const cWax = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.26, 10), new THREE.MeshStandardMaterial({ color: 0xcc1818 }));
      cWax.position.set(nx, 1.36, 0.22);
      const flame = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffaa00 }));
      flame.scale.set(0.6, 1.8, 0.6);
      flame.position.set(nx, 1.52, 0.22);

      const candleLight = new THREE.PointLight(0xff9800, 1.6, 6.0);
      candleLight.position.set(nx, 1.55, 0.22);
      this.candleLights.push(candleLight);

      tableGroup.add(cStand, cWax, flame, candleLight);
    });

    // 5. MÂM NGŨ QUẢ & HOA SEN
    [-1.7, 1.7].forEach(vx => {
      const vase = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.16, 0.42, 12), new THREE.MeshStandardMaterial({ color: 0x004d40 }));
      vase.position.set(vx, 1.18, 0);

      for (let s = 0; s < 3; s++) {
        const lotusBud = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.15, 8), new THREE.MeshStandardMaterial({ color: 0xf06292 }));
        lotusBud.position.set(vx + (s - 1) * 0.05, 1.45, (s % 2) * 0.03);
        tableGroup.add(lotusBud);
      }
      tableGroup.add(vase);
    });

    const fruitTray = new THREE.Mesh(new THREE.CylinderGeometry(0.30, 0.22, 0.07, 16), goldTrimMat);
    fruitTray.position.set(0, 1.01, 0.40);
    const peach = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), new THREE.MeshStandardMaterial({ color: 0xffa726 }));
    peach.position.set(0, 1.14, 0.40);
    tableGroup.add(fruitTray, peach);

    this.scene.add(tableGroup);
  }

  // =========================================================================
  // GIAN THỜ TẢ HỮU: QUÁN THẾ ÂM BỒ TÁT & ĐỊA TẠNG VƯƠNG BỒ TÁT (3D NGHỆ THUẬT)
  // Tôn tượng Bồ Tát Quán Âm cầm bình cam lộ & cành dương liễu
  // Tôn tượng Bồ Tát Địa Tạng cầm tích trượng 6 vòng & minh châu phát sáng
  // =========================================================================
  createSideAltars() {
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf5ba2a,
      metalness: 0.90,
      roughness: 0.18,
      emissive: 0x4a3206,
      emissiveIntensity: 0.25
    });
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x220a05, roughness: 0.40 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xfde3cf, roughness: 0.42 });
    const redSilkMat = new THREE.MeshStandardMaterial({ color: 0x9b1c1c, roughness: 0.55 });

    // -----------------------------------------------------------------------
    // 1. TÔN TƯỢNG BỒ TÁT QUÁN THẾ ÂM (Avalokiteshvara - Bên Tả: x = -7.6, z = -4.0)
    // Bạch y thanh tịnh, đài sen hồng, tay cầm Bình Cam Lộ & Cành Dương Liễu
    // -----------------------------------------------------------------------
    const qaGroup = new THREE.Group();
    qaGroup.position.set(-7.6, 0, -4.0);
    qaGroup.rotation.y = Math.PI / 4.2;

    // Đài sen hồng tam cấp
    const qaPedBase = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 0.40, 16), darkWoodMat);
    qaPedBase.position.y = 0.20;
    const qaPedMid = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.15, 0.35, 16), goldMat);
    qaPedMid.position.y = 0.55;
    const qaLotusBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.70, 0.30, 16), goldMat);
    qaLotusBowl.position.y = 0.85;
    qaGroup.add(qaPedBase, qaPedMid, qaLotusBowl);

    // Cánh sen hồng nở rộ quanh đài sen Quán Âm
    const pinkPetalMat = new THREE.MeshStandardMaterial({ color: 0xf06292, roughness: 0.45, emissive: 0x4a0b22, emissiveIntensity: 0.2 });
    for (let p = 0; p < 16; p++) {
      const pAng = (p / 16) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), pinkPetalMat);
      petal.scale.set(1.2, 0.45, 0.75);
      petal.position.set(Math.cos(pAng) * 0.95, 0.92, Math.sin(pAng) * 0.95);
      petal.rotation.y = -pAng;
      petal.rotation.z = Math.PI / 5.5;
      qaGroup.add(petal);
    }

    // Tôn tượng Quán Thế Âm đứng trang nghiêm (Bạch Y Đại Sĩ)
    const whiteRobeMat = new THREE.MeshStandardMaterial({
      color: 0xf7fafc,
      roughness: 0.35,
      metalness: 0.05
    });

    // Chân & Tà y dài buông rủ chấm tòa sen
    const qaSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.68, 1.6, 20), whiteRobeMat);
    qaSkirt.position.y = 1.75;

    // Thân trên thon thả, khoác áo cà sa trắng thanh khiết
    const qaTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.44, 1.1, 18), whiteRobeMat);
    qaTorso.position.y = 2.95;

    // Chuỗi ngọc anh lạc hoàng kim trước ngực
    const qaBeads = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.025, 8, 20), goldMat);
    qaBeads.position.set(0, 3.05, 0.24);
    qaBeads.rotation.x = Math.PI / 3;

    // Cánh tay trái: Nâng Bình Cam Lộ (Bình tịnh thủy)
    const qaArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.75, 10), whiteRobeMat);
    qaArmL.position.set(-0.42, 3.05, 0.08);
    qaArmL.rotation.z = Math.PI / 6;

    const qaForeArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.65, 10), skinMat);
    qaForeArmL.position.set(-0.24, 2.65, 0.30);
    qaForeArmL.rotation.set(-Math.PI / 3, 0, -Math.PI / 6);

    // Bình Nước Cam Lộ (Kundika Vase) màu ngọc bích / bạch ngọc
    const vaseMat = new THREE.MeshStandardMaterial({ color: 0xe0f2f1, roughness: 0.15, metalness: 0.2 });
    const vaseBody = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), vaseMat);
    vaseBody.scale.set(1.0, 1.45, 1.0);
    vaseBody.position.set(-0.16, 2.70, 0.48);
    const vaseNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, 0.22, 10), vaseMat);
    vaseNeck.position.set(-0.16, 2.88, 0.48);
    vaseNeck.rotation.z = -0.2;

    // Cánh tay phải: Giơ cao nâng Cành Dương Liễu rải nước cam lộ
    const qaArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.75, 10), whiteRobeMat);
    qaArmR.position.set(0.42, 3.05, 0.08);
    qaArmR.rotation.z = -Math.PI / 5.5;

    const qaForeArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.65, 10), skinMat);
    qaForeArmR.position.set(0.35, 3.25, 0.32);
    qaForeArmR.rotation.set(Math.PI / 4, 0, Math.PI / 8);

    // Cành dương liễu xanh biếc rủ lá
    const willowMat = new THREE.MeshStandardMaterial({ color: 0x4caf50, roughness: 0.5 });
    const willowStem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.018, 0.45, 8), willowMat);
    willowStem.position.set(0.36, 3.65, 0.38);
    willowStem.rotation.z = -0.35;
    const willowLeaf = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), willowMat);
    willowLeaf.scale.set(0.4, 1.8, 0.4);
    willowLeaf.position.set(0.46, 3.82, 0.38);

    // Đầu Quán Thế Âm Bồ Tát thanh cao từ ái
    const qaHead = new THREE.Mesh(new THREE.SphereGeometry(0.28, 20, 20), skinMat);
    qaHead.position.set(0, 3.70, 0);

    // Mũ Thiên Quan dát vàng có hình tượng Đức Phật A Di Đà ngự trên đỉnh
    const qaCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.30, 0.38, 16), goldMat);
    qaCrown.position.set(0, 4.02, 0);
    const miniAmitabha = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), goldMat);
    miniAmitabha.position.set(0, 4.15, 0.22);

    // Đôi tai dài thù thắng & Khăn trùm đầu trắng buông rủ
    const qaVeil = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.42, 1.2, 16, 1, true, Math.PI * 0.3, Math.PI * 1.4), whiteRobeMat);
    qaVeil.position.set(0, 3.55, -0.05);

    // Vầng hào quang ngọc bích phát sáng
    const qaHalo = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.05, 10, 28),
      new THREE.MeshStandardMaterial({ color: 0x80deea, emissive: 0x00bcd4, emissiveIntensity: 0.85 })
    );
    qaHalo.position.set(0, 3.80, -0.22);

    // Ánh sáng quang minh Bồ Tát Quán Âm
    const qaLight = new THREE.PointLight(0xb2ebf2, 2.2, 8);
    qaLight.position.set(0, 3.9, 0.6);

    // Biển tên thếp vàng
    const qaSign = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.35, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Nam Mô Quán Thế Âm Bồ Tát') })
    );
    qaSign.position.set(0, 0.40, 1.25);

    // Bàn lễ nhỏ phía trước đài sen
    const qaAltar = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.70, 0.65), darkWoodMat);
    qaAltar.position.set(0, 0.35, 1.85);
    const qaBurner = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.10, 0.15, 12), goldMat);
    qaBurner.position.set(0, 0.78, 1.85);

    qaGroup.add(
      qaSkirt, qaTorso, qaBeads,
      qaArmL, qaForeArmL, vaseBody, vaseNeck,
      qaArmR, qaForeArmR, willowStem, willowLeaf,
      qaHead, qaCrown, miniAmitabha, qaVeil, qaHalo, qaLight,
      qaSign, qaAltar, qaBurner
    );
    this.scene.add(qaGroup);

    // -----------------------------------------------------------------------
    // 2. TÔN TƯỢNG BỒ TÁT ĐỊA TẠNG VƯƠNG (Ksitigarbha - Bên Hữu: x = 7.6, z = -4.0)
    // Cà sa vàng son rực rỡ, tay phải cầm Tích Trượng 6 vòng, tay trái nâng Minh Châu
    // -----------------------------------------------------------------------
    const dtGroup = new THREE.Group();
    dtGroup.position.set(7.6, 0, -4.0);
    dtGroup.rotation.y = -Math.PI / 4.2;

    // Đài sen đỏ tam cấp
    const dtPedBase = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 0.40, 16), darkWoodMat);
    dtPedBase.position.y = 0.20;
    const dtPedMid = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.15, 0.35, 16), goldMat);
    dtPedMid.position.y = 0.55;
    const dtLotusBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.70, 0.30, 16), goldMat);
    dtLotusBowl.position.y = 0.85;
    dtGroup.add(dtPedBase, dtPedMid, dtLotusBowl);

    // Cánh sen son viền vàng quanh đài sen Địa Tạng
    const redPetalMat = new THREE.MeshStandardMaterial({ color: 0xd32f2f, roughness: 0.45, emissive: 0x4a0000, emissiveIntensity: 0.25 });
    for (let p = 0; p < 16; p++) {
      const pAng = (p / 16) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), redPetalMat);
      petal.scale.set(1.2, 0.45, 0.75);
      petal.position.set(Math.cos(pAng) * 0.95, 0.92, Math.sin(pAng) * 0.95);
      petal.rotation.y = -pAng;
      petal.rotation.z = Math.PI / 5.5;
      dtGroup.add(petal);
    }

    // Tôn tượng Bồ Tát Địa Tạng ngự tọa hoa sen
    const saffronRobeMat = new THREE.MeshStandardMaterial({ color: 0xe65100, roughness: 0.50 });
    const goldKesaMat = new THREE.MeshStandardMaterial({ color: 0xfbc02d, roughness: 0.35, metalness: 0.3 });

    // Thân y cà sa trang nghiêm
    const dtSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.70, 1.6, 20), saffronRobeMat);
    dtSkirt.position.y = 1.75;
    const dtTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.46, 1.1, 18), saffronRobeMat);
    dtTorso.position.y = 2.95;

    // Dải y cà sa khoác chéo màu vàng hoàng thổ
    const dtSash = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.48, 1.12, 18, 1, false, 0, Math.PI * 1.1), goldKesaMat);
    dtSash.position.y = 2.95;

    // Cánh tay trái: Nâng Viên Minh Châu (Cintamani Jewel) phát sáng rực rỡ
    const dtArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.75, 10), saffronRobeMat);
    dtArmL.position.set(-0.42, 3.05, 0.08);
    dtArmL.rotation.z = Math.PI / 6;

    const dtForeArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.65, 10), skinMat);
    dtForeArmL.position.set(-0.25, 2.75, 0.32);
    dtForeArmL.rotation.set(-Math.PI / 3, 0, -Math.PI / 6);

    // VIÊN MINH CHÂU CỨU ĐỘ ĐỊA NGỤC (Phát quang ngọc bích vàng rực sáng)
    const jewelMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 16, 16),
      new THREE.MeshStandardMaterial({
        color: 0xfff59d,
        emissive: 0xffd600,
        emissiveIntensity: 1.2,
        roughness: 0.15
      })
    );
    jewelMesh.position.set(-0.16, 2.85, 0.50);

    const jewelGlow = new THREE.PointLight(0xffea00, 2.6, 7.0);
    jewelGlow.position.set(-0.16, 2.85, 0.50);

    // Cánh tay phải: Nắm Cây Tích Trượng Kim Cang 6 Vòng
    const dtArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.75, 10), saffronRobeMat);
    dtArmR.position.set(0.42, 3.05, 0.08);
    dtArmR.rotation.z = -Math.PI / 6;

    const dtForeArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.65, 10), skinMat);
    dtForeArmR.position.set(0.40, 2.85, 0.30);
    dtForeArmR.rotation.set(0.1, 0, 0);

    // CÂY TÍCH TRƯỢNG 6 VÒNG (Khakkhara / 6-ring Golden Staff)
    const staffGroup = new THREE.Group();
    staffGroup.position.set(0.50, 0, 0.32);

    const staffPole = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 3.4, 10), goldMat);
    staffPole.position.y = 2.4;

    // Đỉnh tích trượng vòm tháp chạm rỗng
    const staffHead = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.025, 8, 20), goldMat);
    staffHead.position.y = 4.15;
    const staffSpire = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.22, 8), goldMat);
    staffSpire.position.y = 4.42;

    // 6 vòng kim loại rung chuyển cảnh tỉnh mê mờ
    for (let r = 0; r < 6; r++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 12), goldMat);
      const side = (r % 2 === 0 ? -1 : 1);
      const tier = Math.floor(r / 2);
      ring.position.set(side * 0.16, 4.05 + tier * 0.09, 0);
      ring.rotation.y = Math.PI / 2;
      staffGroup.add(ring);
    }
    staffGroup.add(staffPole, staffHead, staffSpire);

    // Đầu Bồ Tát Địa Tạng thanh thoát trang nghiêm
    const dtHead = new THREE.Mesh(new THREE.SphereGeometry(0.28, 20, 20), skinMat);
    dtHead.position.set(0, 3.70, 0);

    // Mũ Tỳ Lư Ngũ Phật (Five-Buddha Crown) dát vàng rực rỡ
    const dtCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.30, 0.28, 16), goldMat);
    dtCrown.position.set(0, 3.96, 0);
    // 5 cánh sen đỉnh mũ
    for (let c = -2; c <= 2; c++) {
      const cLeaf = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.20, 6), goldMat);
      cLeaf.position.set(c * 0.09, 4.18, 0.20 - Math.abs(c) * 0.04);
      dtGroup.add(cLeaf);
    }

    // Dải lụa mũ rủ hai bên vai
    [-0.30, 0.30].forEach(sx => {
      const ribbon = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.95, 0.02), redSilkMat);
      ribbon.position.set(sx, 3.45, -0.05);
      dtGroup.add(ribbon);
    });

    // Vầng hào quang lửa vàng quang minh
    const dtHalo = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.05, 10, 28),
      new THREE.MeshStandardMaterial({ color: 0xffca28, emissive: 0xff8f00, emissiveIntensity: 0.85 })
    );
    dtHalo.position.set(0, 3.80, -0.22);

    // Biển tên thếp vàng
    const dtSign = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.35, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Nam Mô Địa Tạng Vương Bồ Tát') })
    );
    dtSign.position.set(0, 0.40, 1.25);

    // Bàn lễ nhỏ phía trước
    const dtAltar = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.70, 0.65), darkWoodMat);
    dtAltar.position.set(0, 0.35, 1.85);
    const dtBurner = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.10, 0.15, 12), goldMat);
    dtBurner.position.set(0, 0.78, 1.85);

    dtGroup.add(
      dtSkirt, dtTorso, dtSash,
      dtArmL, dtForeArmL, jewelMesh, jewelGlow,
      dtArmR, dtForeArmR, staffGroup,
      dtHead, dtCrown, dtHalo,
      dtSign, dtAltar, dtBurner
    );
    this.scene.add(dtGroup);
  }

  // =========================================================================
  // THẬP BÁT LA HÁN (18 VỊ LA HÁN TỌA HAI HÀNG HÀNH LANG TẢ HỮU)
  // 9 vị bên Tả (x = -9.6) & 9 vị bên Hữu (x = 9.6) với đầy đủ pháp bảo & biển tên
  // =========================================================================
  createEighteenArhats() {
    const arhatGroup = new THREE.Group();

    // Vật liệu đồng cổ dát vàng uy nghiêm
    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0x9e7232,
      metalness: 0.82,
      roughness: 0.28,
      emissive: 0x2e1903,
      emissiveIntensity: 0.15
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf5ba2a,
      metalness: 0.88,
      roughness: 0.20
    });
    const stoneBaseMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1c, roughness: 0.85 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xecd0b7, roughness: 0.45 });

    // Danh sách 18 vị La Hán kinh điển Phật giáo
    const arhatsLeft = [
      { id: 'hanglong', name: 'Hàng Long La Hán', desc: 'Thu phục rồng vàng' },
      { id: 'truongmi', name: 'Trường Mi La Hán', desc: 'Lông mày dài từ bi' },
      { id: 'thacthap', name: 'Thác Tháp La Hán', desc: 'Nâng bảo tháp 7 tầng' },
      { id: 'bodai', name: 'Bố Đại La Hán', desc: 'Khoác túi vải hoan hỉ' },
      { id: 'tinhtoa', name: 'Tĩnh Tọa La Hán', desc: 'Nhập định kiết già' },
      { id: 'kytuong', name: 'Kỵ Tượng La Hán', desc: 'Thu phục bạch tượng' },
      { id: 'khaimtam', name: 'Khai Tâm La Hán', desc: 'Phật hiện trong tâm' },
      { id: 'batieu', name: 'Ba Tiêu La Hán', desc: 'Cầm quạt ba tiêu' },
      { id: 'toaloc', name: 'Tọa Lộc La Hán', desc: 'Tĩnh tọa bên nai ngọc' }
    ];

    const arhatsRight = [
      { id: 'phucho', name: 'Phục Hổ La Hán', desc: 'Hàng phục mãnh hổ' },
      { id: 'cubat', name: 'Cử Bát La Hán', desc: 'Nâng bát hóa duyên' },
      { id: 'hoanhi', name: 'Hoan Hỉ La Hán', desc: 'Nụ cười giác ngộ' },
      { id: 'thamthu', name: 'Thám Thủ La Hán', desc: 'Vươn tay tự tại' },
      { id: 'tramtu', name: 'Trầm Tư La Hán', desc: 'Chiêm nghiệm diệu pháp' },
      { id: 'hikhanh', name: 'Hỉ Khánh La Hán', desc: 'Gõ khánh ngọc trừ tà' },
      { id: 'quagiang', name: 'Quá Giang La Hán', desc: 'Vượt biển sanh tử' },
      { id: 'tieusu', name: 'Tiếu Sư La Hán', desc: 'Đùa vui cùng sư tử' },
      { id: 'khanmon', name: 'Khán Môn La Hán', desc: 'Giữ gậy trượng thiền gia' }
    ];

    // Khoảng cách giữa các bệ tượng dọc hành lang (z từ -1.5 đến 12.9)
    const zCoords = [-1.5, 0.3, 2.1, 3.9, 5.7, 7.5, 9.3, 11.1, 12.9];

    // Hàm tạo 1 pho tượng La Hán hoàn chỉnh
    const buildArhat = (info, xPos, zPos, isLeft) => {
      const g = new THREE.Group();
      g.position.set(xPos, 0, zPos);
      g.rotation.y = isLeft ? Math.PI / 2 : -Math.PI / 2;

      // 1. Bệ đá hoa sen hình bát giác
      const baseOct = new THREE.Mesh(new THREE.CylinderGeometry(0.70, 0.78, 0.35, 8), stoneBaseMat);
      baseOct.position.y = 0.175;
      const baseLotus = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.58, 0.18, 16), goldMat);
      baseLotus.position.y = 0.44;
      g.add(baseOct, baseLotus);

      // 2. Thân tượng La Hán (Tọa thiền hoặc ngồi tự tại trên đài)
      const bodyMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.44, 0.95, 14), bronzeMat);
      bodyMesh.position.y = 0.98;

      const legsMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.55, 0.32, 14), bronzeMat);
      legsMesh.position.y = 0.65;

      const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.18, 14, 14), skinMat);
      headMesh.position.set(0, 1.58, 0.02);

      // Vòng hào quang đầu bằng đồng cổ
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.025, 8, 20), goldMat);
      halo.position.set(0, 1.62, -0.12);

      g.add(bodyMesh, legsMesh, headMesh, halo);

      // 3. Pháp bảo & Đặc trưng riêng biệt từng vị La Hán
      switch (info.id) {
        case 'hanglong': {
          // Rồng vàng cuộn quanh thân
          const dragon = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.045, 8, 24), goldMat);
          dragon.position.set(0, 1.05, 0.05);
          dragon.rotation.x = Math.PI / 4;
          const dHead = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.18, 8), goldMat);
          dHead.position.set(0.28, 1.35, 0.22);
          dHead.rotation.z = -Math.PI / 3;
          g.add(dragon, dHead);
          break;
        }
        case 'phucho': {
          // Mãnh hổ nằm phục dưới chân đài sen
          const tiger = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.18, 0.45), goldMat);
          tiger.position.set(0.18, 0.62, 0.32);
          const tHead = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 8), goldMat);
          tHead.position.set(0.18, 0.72, 0.52);
          g.add(tiger, tHead);
          break;
        }
        case 'truongmi': {
          // Đôi lông mày bạc dài rủ xuống tận đùi
          [-0.08, 0.08].forEach(bx => {
            const brow = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.005, 0.52, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
            brow.position.set(bx, 1.35, 0.18);
            brow.rotation.x = 0.25;
            g.add(brow);
          });
          break;
        }
        case 'thacthap': {
          // Bàn tay nâng bảo tháp 7 tầng phát sáng
          const stupa = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.07, 0.35, 8), goldMat);
          stupa.position.set(0.22, 1.25, 0.25);
          const stupaLight = new THREE.PointLight(0xffeb3b, 1.2, 3.0);
          stupaLight.position.set(0.22, 1.35, 0.25);
          g.add(stupa, stupaLight);
          break;
        }
        case 'cubat': {
          // Hai tay nâng bình bát hóa duyên
          const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10, 0, Math.PI * 2, 0, Math.PI * 0.65), goldMat);
          bowl.position.set(0, 1.15, 0.28);
          g.add(bowl);
          break;
        }
        case 'bodai': {
          // Túi vải càn khôn màu hoàng thổ bên cạnh
          const sack = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 12), new THREE.MeshStandardMaterial({ color: 0x8d6e63 }));
          sack.scale.set(1.1, 1.3, 0.9);
          sack.position.set(-0.35, 0.72, 0.15);
          g.add(sack);
          break;
        }
        case 'batieu': {
          // Chiếc quạt ba tiêu lá cọ
          const fan = new THREE.Mesh(new THREE.CircleGeometry(0.18, 12), goldMat);
          fan.position.set(0.24, 1.15, 0.24);
          fan.rotation.y = Math.PI / 4;
          g.add(fan);
          break;
        }
        case 'khaimtam': {
          // Ánh sáng phát từ tâm ngực
          const heartLight = new THREE.PointLight(0xff9800, 1.5, 2.5);
          heartLight.position.set(0, 1.12, 0.22);
          g.add(heartLight);
          break;
        }
        default: {
          // Các vị còn lại: Tràng hạt bồ đề hoặc pháp ấn tự tại
          const rosary = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 6, 16), goldMat);
          rosary.position.set(0, 1.05, 0.24);
          g.add(rosary);
          break;
        }
      }

      // 4. Biển tên thư pháp mạ vàng trên bệ đá
      const signMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.0, 0.20, 0.03),
        new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture(info.name) })
      );
      signMesh.position.set(0, 0.20, 0.52);
      g.add(signMesh);

      return g;
    };

    // Đặt 9 vị bên Tả (x = -9.6)
    arhatsLeft.forEach((info, idx) => {
      const aMesh = buildArhat(info, -9.6, zCoords[idx], true);
      arhatGroup.add(aMesh);
    });

    // Đặt 9 vị bên Hữu (x = 9.6)
    arhatsRight.forEach((info, idx) => {
      const aMesh = buildArhat(info, 9.6, zCoords[idx], false);
      arhatGroup.add(aMesh);
    });

    this.scene.add(arhatGroup);
  }

  // =========================================================================
  // HÀNG BỒ ĐOÀN DÀY DẶN ÊM ÁI CHUẨN MEME SANSA (PLUSH ZAFU CUSHIONS)
  // Từng chiếc đệm bồ đoàn tròn/vuông phồng êm ái, bọc vải dệt có nút rút tâm
  // =========================================================================
  createAuthenticCushionsGrid() {
    const cushionGroup = new THREE.Group();
    this.cushionPositions = [];

    // Bồ đoàn dạng hình trụ vát cạnh bo tròn (Plush cylinder zafu)
    const cushionGeo = new THREE.CylinderGeometry(0.48, 0.52, 0.14, 20);
    const cushionMat = new THREE.MeshStandardMaterial({
      map: this.textures.cushion,
      roughness: 0.75,
      metalness: 0.05
    });

    const colXs = [-3.6, -2.0, 2.0, 3.6];
    const rowZs = [0.5, 3.2, 5.9, 8.6, 11.3];

    colXs.forEach(cx => {
      rowZs.forEach(rz => {
        const c = new THREE.Mesh(cushionGeo, cushionMat);
        c.position.set(cx, 0.07, rz);
        c.receiveShadow = true;
        c.castShadow = true;

        // Vòng đế gỗ nâng đỡ nhẹ
        const baseRing = new THREE.Mesh(
          new THREE.CylinderGeometry(0.50, 0.54, 0.03, 20),
          new THREE.MeshStandardMaterial({ color: 0x1f1f22, roughness: 0.85 })
        );
        baseRing.position.set(cx, 0.015, rz);

        cushionGroup.add(c, baseRing);
        this.cushionPositions.push({ x: cx, z: rz });
      });
    });

    this.scene.add(cushionGroup);
  }

  findNearestCushion(x, z) {
    if (!this.cushionPositions.length) return { x: 0, z: 2.0 };
    let best = this.cushionPositions[0];
    let minD = Infinity;
    for (const c of this.cushionPositions) {
      const d = Math.hypot(c.x - x, c.z - z);
      if (d < minD) {
        minD = d;
        best = c;
      }
    }
    return { ...best };
  }

  // =========================================================================
  // CÁC KHU VỰC NGHI THỨC PHẬT SỰ
  // 1. Đại Hồng Chung (Chuông đồng Bát Nhã)
  // 2. Kệ Mõ Gỗ Cá Bát Nhã
  // 3. Bàn Xin Xăm Linh Ứng
  // =========================================================================
  createInteractiveStations() {
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.65 });

    // 1. ĐẠI HỒNG CHUNG (x = -5.6, z = -1.8) - Chuông đồng cổ kính có sợi dây thừng thả trong lòng chuông
    const bellGroup = new THREE.Group();
    bellGroup.position.set(-5.6, 0, -1.8);

    // Giá treo chuông gỗ lim già vững chãi
    const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 5.0, 16), woodMat);
    post1.position.set(-1.1, 2.5, 0);
    const post2 = post1.clone();
    post2.position.set(1.1, 2.5, 0);
    const cross = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.35, 0.35), woodMat);
    cross.position.set(0, 4.8, 0);

    // Xà đỡ phụ và móc đồng cổ
    const subCross = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.18, 0.18), woodMat);
    subCross.position.set(0, 4.35, 0);

    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0x9e7a3e,
      metalness: 0.85,
      roughness: 0.25
    });
    const hangerRing = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.04, 12, 24), bronzeMat);
    hangerRing.position.set(0, 4.20, 0);

    // CỤM CHUÔNG ĐỒNG ĐẠI HỒNG CHUNG (Treo từ móc đồng, có thể nghiêng lắc nhẹ khi đánh)
    const bellPivot = new THREE.Group();
    bellPivot.position.set(0, 4.05, 0);

    const bellMat = new THREE.MeshStandardMaterial({
      color: 0xbfa04e,
      metalness: 0.88,
      roughness: 0.22,
      emissive: 0x221705,
      emissiveIntensity: 0.15
    });

    // Vòm chóp chuông bo tròn (Crown / Dome)
    const bellDome = new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5), bellMat);
    bellDome.position.y = -0.15;

    // Thân trên chuông (Upper barrel)
    const bellUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.58, 0.80, 24), bellMat);
    bellUpper.position.y = -0.55;

    // Thân dưới chuông xòe rộng (Lower flared skirt)
    const bellFlared = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.84, 0.85, 24), bellMat);
    bellFlared.position.y = -1.375;

    // Vành chuông nở dày dặn (Heavy bottom rim)
    const bellLip = new THREE.Mesh(new THREE.TorusGeometry(0.84, 0.06, 12, 32), bellMat);
    bellLip.rotation.x = Math.PI / 2;
    bellLip.position.y = -1.80;

    // Gờ chỉ đồng chạm nổi quanh thân chuông
    const band1 = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.025, 8, 32), bronzeMat);
    band1.rotation.x = Math.PI / 2;
    band1.position.y = -0.55;
    const band2 = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.03, 8, 32), bronzeMat);
    band2.rotation.x = Math.PI / 2;
    band2.position.y = -1.35;

    bellPivot.add(bellDome, bellUpper, bellFlared, bellLip, band1, band2);
    this.bellMesh = bellPivot;

    // SỢI DÂY THỪNG THỈNH CHUÔNG (Hanging from inside the bell)
    const ropeGroup = new THREE.Group();
    ropeGroup.position.set(0, -0.60, 0); // Treo từ tâm trong lòng chuông

    // Quả lắc đồng bên trong chuông (Bronze clapper inside)
    const clapper = new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 14), bronzeMat);
    clapper.position.y = -0.60;

    // Thân dây thừng bện gai nâu vàng
    const ropeMat = new THREE.MeshStandardMaterial({ color: 0x8a623c, roughness: 0.90 });
    const ropeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1.8, 10), ropeMat);
    ropeMesh.position.y = -1.50; // Thả từ lòng chuông xuống độ cao ngang thắt lưng

    // Đoạn tay cầm bọc vải gấm đỏ trang trọng (Vị trí người cầm và lắc)
    const gripMat = new THREE.MeshStandardMaterial({ color: 0xb71c1c, roughness: 0.60 });
    const gripHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.45, 12), gripMat);
    gripHandle.position.y = -2.40; // Độ cao thế giới: 4.05 - 0.60 - 2.40 = 1.05m -> Vừa vặn ngang ngực/bàn tay người đứng!

    // Vòng đồng chặn đầu tay cầm
    const gripRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.015, 8, 16), bronzeMat);
    gripRing1.rotation.x = Math.PI / 2;
    gripRing1.position.y = -2.175;
    const gripRing2 = gripRing1.clone();
    gripRing2.position.y = -2.625;

    // Túm tua rua đỏ phong thủy rủ xuống
    const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.045, 0.30, 8), new THREE.MeshBasicMaterial({ color: 0xc62828 }));
    tassel.position.y = -2.80;

    ropeGroup.add(clapper, ropeMesh, gripHandle, gripRing1, gripRing2, tassel);
    bellPivot.add(ropeGroup);
    this.bellRope = ropeGroup;

    // Biển tên Đại Hồng Chung
    const bellSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.30, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Đại Hồng Chung') })
    );
    bellSign.position.set(0, 5.25, 0);

    bellGroup.add(post1, post2, cross, subCross, hangerRing, bellPivot, bellSign);
    this.scene.add(bellGroup);

    // 2. KỆ MÕ GỖ BÁT NHÃ (x = 5.6, z = -1.8) - Kích thước cân đối trang nhã, vừa tầm tay gõ
    const woodfishGroup = new THREE.Group();
    woodfishGroup.position.set(5.6, 0, -1.8);

    const tableMat = new THREE.MeshStandardMaterial({ color: 0x3d0e07, roughness: 0.45 });
    const table = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.52, 0.55, 24), tableMat);
    table.position.y = 0.275;

    const cushion = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.42, 0.14, 24),
      new THREE.MeshStandardMaterial({ color: 0x9e1a1a, roughness: 0.70 })
    );
    cushion.position.y = 0.62;

    const wf = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x7c3817, roughness: 0.32, metalness: 0.15 })
    );
    wf.scale.set(1.18, 0.82, 1.05);
    wf.position.set(0, 0.88, 0);
    this.woodfishMesh = wf;

    const wfSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.0, 0.22, 0.03),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Mõ Gỗ Bát Nhã') })
    );
    wfSign.position.set(0, 1.45, -0.10);

    woodfishGroup.add(table, cushion, wf, wfSign);
    this.scene.add(woodfishGroup);

    // 3. BÀN XIN XĂM MAY MẮN (x = 2.8, z = -1.8)
    const fortuneGroup = new THREE.Group();
    fortuneGroup.position.set(2.8, 0, -1.8);

    const fTable = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.90, 0.80), woodMat);
    fTable.position.y = 0.45;

    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.10, 0.42, 12), new THREE.MeshStandardMaterial({ color: 0xbfa018, roughness: 0.4 }));
    tube.position.set(0, 1.11, 0);

    const fortuneSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 0.26, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Xin Xăm Quẻ') })
    );
    fortuneSign.position.set(0, 1.45, 0);

    fortuneGroup.add(fTable, tube, fortuneSign);
    this.scene.add(fortuneGroup);

    // 4. BÀN THỈNH HƯƠNG TRẦM (x = -2.8, z = -1.8) - Đối xứng hoàn hảo với Bàn Xin Xăm
    const incenseTableGroup = new THREE.Group();
    incenseTableGroup.position.set(-2.8, 0, -1.8);

    const iTable = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.90, 0.80), woodMat);
    iTable.position.y = 0.45;

    // Khay gỗ sơn mài đựng các bó hương trầm
    const iTray = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.08, 0.35), new THREE.MeshStandardMaterial({ color: 0x220b06, roughness: 0.4 }));
    iTray.position.set(0, 0.94, 0.05);

    // Ống đồng đựng các nén hương trầm vàng đỏ
    const iVase = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.30, 12), new THREE.MeshStandardMaterial({ color: 0xb58b3c, metalness: 0.8 }));
    iVase.position.set(-0.20, 1.05, 0.05);

    // Bó hương cắm trong ống
    for (let s = -2; s <= 2; s++) {
      const iStick = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.38), new THREE.MeshBasicMaterial({ color: 0xaa2211 }));
      iStick.position.set(-0.20 + s * 0.015, 1.25, 0.05 + (s % 2) * 0.01);
      incenseTableGroup.add(iStick);
    }

    // Các nén hương mẫu đặt nằm trên khay
    const lyingStick = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.32), new THREE.MeshBasicMaterial({ color: 0xcc2914 }));
    lyingStick.rotation.z = Math.PI / 2;
    lyingStick.position.set(0.12, 0.99, 0.05);

    // Biển tên "Bàn Thỉnh Hương"
    const incenseSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 0.26, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Bàn Thỉnh Hương') })
    );
    incenseSign.position.set(0, 1.45, 0);

    incenseTableGroup.add(iTable, iTray, iVase, lyingStick, incenseSign);
    this.scene.add(incenseTableGroup);
  }

  // =========================================================================
  // 5. HỒ SEN THỦY TRÚC PHÓNG SINH (x = -6.8, z = 10.5)
  // Bể đá tự nhiên, nước trong xanh biếc, hoa sen nở rộ, đàn cá bơi lội uốn lượn
  // =========================================================================
  createLotusPond() {
    const pondGroup = new THREE.Group();
    pondGroup.position.set(-6.8, 0, 10.5);

    // Bờ kè đá tự nhiên bo tròn
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x36403d,
      roughness: 0.88,
      metalness: 0.1
    });
    const stoneRim = new THREE.Mesh(
      new THREE.CylinderGeometry(2.0, 2.2, 0.42, 28, 1, true),
      stoneMat
    );
    stoneRim.position.y = 0.21;
    stoneRim.receiveShadow = true;

    // Thành đá bo viền trên
    const rimCap = new THREE.Mesh(
      new THREE.TorusGeometry(2.0, 0.12, 12, 32),
      stoneMat
    );
    rimCap.rotation.x = Math.PI / 2;
    rimCap.position.y = 0.42;

    // Đáy hồ rải sỏi cuội
    const bedMat = new THREE.MeshStandardMaterial({ color: 0x1a2623, roughness: 0.95 });
    const pondBed = new THREE.Mesh(new THREE.CylinderGeometry(1.95, 1.95, 0.05, 28), bedMat);
    pondBed.position.y = 0.025;

    // Mặt nước hồ sen trong xanh ngọc bích
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0e5d56,
      roughness: 0.06,
      metalness: 0.15,
      transparent: true,
      opacity: 0.82,
      emissive: 0x032b27,
      emissiveIntensity: 0.25
    });
    const water = new THREE.Mesh(new THREE.CylinderGeometry(1.92, 1.92, 0.04, 32), waterMat);
    water.position.y = 0.32;
    this.waterMesh = water;

    // Khóm lá sen xanh mướt nổi trên mặt nước
    const padMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.65 });
    const padPositions = [
      { x: -0.85, z: -0.45, r: 0.38, rot: 0.2 },
      { x: -0.40, z: 0.80, r: 0.32, rot: 1.1 },
      { x: 0.75, z: 0.45, r: 0.42, rot: 2.3 },
      { x: 0.60, z: -0.70, r: 0.35, rot: 3.5 },
      { x: -0.20, z: -0.90, r: 0.28, rot: 0.8 },
      { x: 0.95, z: -0.15, r: 0.26, rot: 1.7 }
    ];

    padPositions.forEach(p => {
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(p.r, p.r, 0.015, 16), padMat);
      pad.position.set(p.x, 0.34, p.z);
      pad.rotation.y = p.rot;
      pondGroup.add(pad);
    });

    // Hoa sen hồng bung nở thơm ngát (2 bông sen nở điểm xuyết)
    const lotusMat = new THREE.MeshStandardMaterial({
      color: 0xf48fb1,
      emissive: 0xe91e63,
      emissiveIntensity: 0.3,
      roughness: 0.4
    });
    const lotusCenterMat = new THREE.MeshBasicMaterial({ color: 0xffeb3b });

    [
      { x: -0.82, z: -0.42 },
      { x: 0.72, z: 0.42 }
    ].forEach(lp => {
      const flower = new THREE.Group();
      flower.position.set(lp.x, 0.38, lp.z);
      for (let p = 0; p < 8; p++) {
        const pAng = (p / 8) * Math.PI * 2;
        const petal = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.12, 5), lotusMat);
        petal.position.set(Math.cos(pAng) * 0.05, 0.02, Math.sin(pAng) * 0.05);
        petal.rotation.set(0.4 * Math.sin(pAng), pAng, 0.4 * Math.cos(pAng));
        flower.add(petal);
      }
      const stamen = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.04, 8), lotusCenterMat);
      flower.add(stamen);
      pondGroup.add(flower);
    });

    // Đèn đá sân vườn kiểu Nhật/Chùa cổ bên cạnh hồ
    const lanternPost = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.90, 8), stoneMat);
    lanternPost.position.set(-1.8, 0.45, -1.2);
    const lanternHead = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.30, 0.35), new THREE.MeshStandardMaterial({ color: 0xffd54f, emissive: 0xff9800, emissiveIntensity: 0.6 }));
    lanternHead.position.set(-1.8, 0.95, -1.2);
    const lanternRoof = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.22, 4), stoneMat);
    lanternRoof.position.set(-1.8, 1.20, -1.2);
    lanternRoof.rotation.y = Math.PI / 4;
    pondGroup.add(lanternPost, lanternHead, lanternRoof);

    // Ống nước tre róc rách phong thủy (Bamboo Water Fountain)
    const bambooMat = new THREE.MeshStandardMaterial({ color: 0x556b2f, roughness: 0.6 });
    const bPost = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.75, 8), bambooMat);
    bPost.position.set(-1.5, 0.375, 1.0);
    const bSpout = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.55, 8), bambooMat);
    bSpout.rotation.z = -Math.PI / 3;
    bSpout.position.set(-1.32, 0.62, 1.0);
    pondGroup.add(bPost, bSpout);

    // Biển tên: "Hồ Sen Phóng Sinh"
    const pondSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.26, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Hồ Sen Phóng Sinh', 'Tích Đức Phóng Sinh • Tâm An Phúc Lạc') })
    );
    pondSign.position.set(0, 1.25, -2.1);
    pondGroup.add(stoneRim, rimCap, pondBed, water, pondSign);

    this.scene.add(pondGroup);
    this.pondGroup = pondGroup;

    // KHỞI TẠO ĐÀN CÁ BƠI LỘI BAN ĐẦU (4 Chú cá bơi tự do)
    this.createInitialPondFish();
  }

  createInitialPondFish() {
    const initialTypes = ['koi', 'goldfish', 'carp', 'turtle'];
    initialTypes.forEach((type, idx) => {
      this.spawnPondFish(type, idx * (Math.PI / 2), 0.65 + idx * 0.25);
    });
  }

  spawnPondFish(type, initialAngle = 0, radius = 0.9) {
    const fishGroup = new THREE.Group();
    const isTurtle = type === 'turtle';

    let bodyMat;
    if (type === 'koi') {
      bodyMat = new THREE.MeshStandardMaterial({ color: 0xff6d00, roughness: 0.3, metalness: 0.2 });
    } else if (type === 'goldfish') {
      bodyMat = new THREE.MeshStandardMaterial({ color: 0xffb300, roughness: 0.25, metalness: 0.3 });
    } else if (type === 'carp') {
      bodyMat = new THREE.MeshStandardMaterial({ color: 0xd50000, roughness: 0.3, metalness: 0.2 });
    } else { // turtle
      bodyMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.7, metalness: 0.1 });
    }

    if (isTurtle) {
      // Mai rùa bo tròn
      const shell = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), bodyMat);
      shell.scale.set(1.0, 0.55, 1.2);
      // Đầu rùa
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), bodyMat);
      head.position.set(0, 0.01, 0.14);
      // 4 Chân bơi
      const legMat = new THREE.MeshStandardMaterial({ color: 0x388e3c });
      [-0.09, 0.09].forEach(lx => {
        [-0.08, 0.08].forEach(lz => {
          const leg = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.02, 0.07), legMat);
          leg.position.set(lx, -0.02, lz);
          shell.add(leg);
        });
      });
      fishGroup.add(shell, head);
    } else {
      // Thân cá thuôn nhọn 2 đầu
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8), bodyMat);
      body.scale.set(0.65, 0.85, 2.2);

      // Đốm trắng trên lưng cá Koi
      if (type === 'koi') {
        const spot = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        spot.position.set(0, 0.05, 0.02);
        spot.scale.set(0.8, 0.3, 1.4);
        body.add(spot);
      }

      // Đuôi cá có khớp quẫy nhịp nhàng
      const tailPivot = new THREE.Group();
      tailPivot.position.set(0, 0, -0.14);

      const tailGeo = new THREE.ConeGeometry(0.065, 0.16, 6);
      const tailMesh = new THREE.Mesh(tailGeo, bodyMat);
      tailMesh.rotation.x = -Math.PI / 2;
      tailMesh.scale.set(0.2, 1.0, 0.9);
      tailPivot.add(tailMesh);
      body.add(tailPivot);

      // Vây bơi 2 bên ngực
      const finMat = new THREE.MeshBasicMaterial({ color: 0xffe082, transparent: true, opacity: 0.75 });
      [-0.05, 0.05].forEach((fx, i) => {
        const fin = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.09), finMat);
        fin.position.set(fx, -0.01, 0.04);
        fin.rotation.set(Math.PI / 4, 0, i === 0 ? 0.6 : -0.6);
        body.add(fin);
      });

      fishGroup.add(body);
      fishGroup.tailPivot = tailPivot;
    }

    fishGroup.position.set(
      -6.8 + Math.cos(initialAngle) * radius,
      0.24,
      10.5 + Math.sin(initialAngle) * radius
    );

    this.scene.add(fishGroup);

    const fishData = {
      group: fishGroup,
      tailPivot: fishGroup.tailPivot || null,
      type,
      angle: initialAngle,
      radius,
      speed: 0.45 + Math.random() * 0.35,
      yBase: 0.22 + Math.random() * 0.05,
      seed: Math.random() * 10
    };

    this.pondFish.push(fishData);
    return fishData;
  }

  // =========================================================================
  // 6. KỲ ĐÀI CHÁNH NIỆM & BÀN TRÀ ĐẠO (x = 6.8, z = 10.5)
  // Bàn cờ gụ khảm trai 15x15, đôn thiền bọc gấm, bộ trà tử sa thơm ngát
  // =========================================================================
  createChessPavilion() {
    const chessGroup = new THREE.Group();
    chessGroup.position.set(6.8, 0, 10.5);

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x241108, roughness: 0.45 });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.25, metalness: 0.85 });

    // Trụ bàn cờ hình tròn chạm khắc
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.38, 0.62, 16), woodMat);
    pedestal.position.y = 0.31;

    // Mặt bàn tròn gụ bóng loáng
    const tabletop = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.08, 24), woodMat);
    tabletop.position.y = 0.66;

    // Viền chỉ đồng quanh mép bàn
    const tableRim = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.016, 8, 32), brassMat);
    tableRim.rotation.x = Math.PI / 2;
    tableRim.position.y = 0.66;

    // BÀN CỜ 15x15 ĐẶT CHÍNH GIỮA MẶT BÀN
    const boardGeo = new THREE.BoxGeometry(0.70, 0.032, 0.70);
    const boardMat = new THREE.MeshStandardMaterial({
      map: this.textures.chessBoard,
      roughness: 0.32,
      metalness: 0.08
    });
    const chessBoard = new THREE.Mesh(boardGeo, boardMat);
    chessBoard.position.set(-0.08, 0.716, 0);

    // Các quân cờ 3D mẫu bày trên bàn (Quân đen & Quân trắng đá ngọc bóng loáng)
    const blackStoneMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.3 });
    const whiteStoneMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.15, metalness: 0.2 });
    const sampleStones = [
      { x: -0.08, z: 0, c: 'b' },
      { x: -0.04, z: 0.04, c: 'w' },
      { x: -0.12, z: -0.04, c: 'b' },
      { x: -0.08, z: 0.08, c: 'w' },
      { x: -0.04, z: -0.08, c: 'b' }
    ];
    sampleStones.forEach(s => {
      const stone = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.018, 0.012, 12),
        s.c === 'b' ? blackStoneMat : whiteStoneMat
      );
      stone.position.set(s.x, 0.738, s.z);
      chessGroup.add(stone);
    });

    // BỘ TRÀ ĐẠO TỬ SA (Ấm trà, chén ngọc & khay gỗ)
    const teaGroup = new THREE.Group();
    teaGroup.position.set(0.48, 0.70, 0);

    const clayMat = new THREE.MeshStandardMaterial({ color: 0x5d281a, roughness: 0.65 });
    const potBody = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 10), clayMat);
    potBody.scale.set(1.0, 0.75, 1.0);
    const potLid = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 10), clayMat);
    potLid.position.y = 0.055;
    const potSpout = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.018, 0.06, 8), clayMat);
    potSpout.rotation.z = -Math.PI / 3;
    potSpout.position.set(-0.06, 0.02, 0);
    teaGroup.add(potBody, potLid, potSpout);

    // 2 Chén trà ngọc xanh
    const cupMat = new THREE.MeshStandardMaterial({ color: 0xa5d6a7, roughness: 0.2 });
    [-0.06, 0.06].forEach(cz => {
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.018, 0.035, 10), cupMat);
      cup.position.set(0.02, 0.018, cz);
      teaGroup.add(cup);
    });
    chessGroup.add(teaGroup);

    // 2 ĐÔN THIỀN NGỒI ĐÁNH CỜ (BẮC VÀ NAM)
    const stoolMat = new THREE.MeshStandardMaterial({ color: 0x1f0f08, roughness: 0.6 });
    const seatCushionMat = new THREE.MeshStandardMaterial({
      color: 0x8a1c14,
      roughness: 0.75,
      map: this.textures.cushion
    });

    [-1.15, 1.15].forEach(sz => {
      const stoolBase = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.28, 16), stoolMat);
      stoolBase.position.set(0, 0.14, sz);

      const cushion = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.10, 16), seatCushionMat);
      cushion.position.set(0, 0.33, sz);

      chessGroup.add(stoolBase, cushion);
    });

    // Biển tên: "Kỳ Đài Chánh Niệm"
    const chessSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.28, 0.04),
      new THREE.MeshStandardMaterial({
        map: this.generateSignboardTexture('Kỳ Đài Chánh Niệm', 'Kỳ Đạo Đàm Đạo • Tâm Tĩnh Trí Minh')
      })
    );
    chessSign.position.set(0, 1.35, 1.85);

    chessGroup.add(pedestal, tabletop, tableRim, chessBoard, chessSign);
    this.scene.add(chessGroup);
  }

  // Thả chú cá phóng sinh mới do người chơi vừa thực hiện
  spawnReleasedFish(type, prayerText = '') {
    const angle = Math.random() * Math.PI * 2;
    const fish = this.spawnPondFish(type, angle, 0.75 + Math.random() * 0.45);
    this.spawnClickRipple(-6.8 + Math.cos(angle) * fish.radius, 10.5 + Math.sin(angle) * fish.radius);
    return fish;
  }

  // Thả ngọn đèn hoa đăng lung linh trên mặt hồ
  spawnFloatingLantern(prayerText = '') {
    const lantern = new THREE.Group();
    const lMat = new THREE.MeshStandardMaterial({
      color: 0xffa726,
      emissive: 0xff6d00,
      emissiveIntensity: 0.85,
      roughness: 0.3
    });
    // Đế hoa sen nhỏ
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.08, 0.04, 8), lMat);
    // Vách lồng đèn giấy
    const paper = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.12, 6), new THREE.MeshBasicMaterial({ color: 0xffe082 }));
    paper.position.y = 0.08;
    // Ngọn lửa nến nhỏ
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff3d00 }));
    flame.position.y = 0.14;

    lantern.add(base, paper, flame);

    const angle = Math.random() * Math.PI * 2;
    const radius = 0.5 + Math.random() * 0.7;
    lantern.position.set(
      -6.8 + Math.cos(angle) * radius,
      0.34,
      10.5 + Math.sin(angle) * radius
    );

    this.scene.add(lantern);
    this.floatingLanterns.push({
      group: lantern,
      angle,
      radius,
      driftSpeed: 0.12 + Math.random() * 0.08,
      seed: Math.random() * 10
    });
  }

  // =========================================================================
  // ÁNH SÁNG & KHÍ TRỜI THIỀN ĐỊNH LUNG LINH (ATMOSPHERIC LIGHTING)
  // =========================================================================
  createAtmosphericLighting() {
    // 1. Ánh sáng môi trường chan hòa, sáng sủa, thanh tịnh
    const ambientLight = new THREE.AmbientLight(0xfff3e6, 1.75);
    this.scene.add(ambientLight);

    // 2. Nắng sớm rọi từ vòm điện
    const mainSun = new THREE.DirectionalLight(0xfffaf0, 2.3);
    mainSun.position.set(0, 18, 6);
    mainSun.castShadow = true;
    mainSun.shadow.mapSize.width = 1024;
    mainSun.shadow.mapSize.height = 1024;
    mainSun.shadow.camera.near = 0.5;
    mainSun.shadow.camera.far = 35;
    this.scene.add(mainSun);

    // 3. Ánh sáng vàng dịu soi sáng Chánh Điện, Thảm đỏ & 18 vị La Hán
    const centralWarmLight = new THREE.DirectionalLight(0xffd54f, 1.25);
    centralWarmLight.position.set(0, 14, -3.5);
    this.scene.add(centralWarmLight);

    // 4. Đèn lồng cung đình treo dọc 2 bên hành lang
    const lanternMat = new THREE.MeshStandardMaterial({
      color: 0xffa726,
      emissive: 0xff8f00,
      emissiveIntensity: 0.95,
      roughness: 0.25
    });

    [-7.5, 7.5].forEach(lx => {
      [0.0, 6.0, 12.0].forEach(lz => {
        const lan = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.30, 0.60, 10), lanternMat);
        lan.position.set(lx, 6.0, lz);

        const pLight = new THREE.PointLight(0xffb74d, 1.5, 9.5);
        pLight.position.set(lx, 6.0, lz);
        this.candleLights.push(pLight);

        this.scene.add(lan, pLight);
      });
    });
  }

  // =========================================================================
  // HỆ THỐNG KHÓI HƯƠNG TRẦM & HIỆU ỨNG TƯƠNG TÁC
  // =========================================================================
  createParticleSystems() {
    const count = 50;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const alpha = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.18;
      pos[i * 3 + 1] = 1.8 + Math.random() * 2.6;
      pos[i * 3 + 2] = -3.68 + (Math.random() - 0.5) * 0.18;
      alpha[i] = Math.random();
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('alpha', new THREE.BufferAttribute(alpha, 1));

    const smokeMat = new THREE.PointsMaterial({
      color: 0xefd8b8,
      size: 0.20,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.smokeParticles = new THREE.Points(geo, smokeMat);
    this.scene.add(this.smokeParticles);
  }

  spawnDroppingFortuneStick(x, z, onLanded) {
    const geo = new THREE.CylinderGeometry(0.012, 0.012, 0.45, 8);
    const mat = new THREE.MeshStandardMaterial({ color: 0xd4b07b, roughness: 0.4 });
    const stick = new THREE.Mesh(geo, mat);
    stick.position.set(x, 1.35, z);
    stick.rotation.z = Math.PI / 4;
    this.scene.add(stick);

    const startTime = Date.now();
    const duration = 750;

    const anim = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(1, elapsed / duration);
      stick.position.y = 1.35 - t * 1.30;
      stick.rotation.x += 0.08;
      stick.rotation.z += 0.05;

      if (t < 1) {
        requestAnimationFrame(anim);
      } else {
        this.spawnClickRipple(x, z);
        setTimeout(() => {
          this.scene.remove(stick);
          geo.dispose();
          mat.dispose();
        }, 1500);
        if (onLanded) onLanded();
      }
    };
    anim();
  }

  ringBell() {
    this.bellRingTimer = 2.8;
  }

  spawnClickRipple(x, z) {
    const geo = new THREE.RingGeometry(0.1, 0.25, 24);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffd54f,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const ring = new THREE.Mesh(geo, mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, 0.025, z);
    this.scene.add(ring);

    this.ripples.push({ mesh: ring, scale: 1, maxScale: 4.5, life: 1.0 });
  }

  update(delta) {
    const time = this.clock.getElapsedTime();

    this.candleLights.forEach((light, i) => {
      light.intensity = 1.2 + Math.sin(time * 7 + i * 2.1) * 0.28 + (Math.random() - 0.5) * 0.08;
    });

    if (this.haloMesh) {
      this.haloMesh.rotation.z = time * 0.12;
    }

    // Hiệu ứng lắc chuông và dây thừng khi thỉnh Đại Hồng Chung
    if (this.bellRingTimer > 0) {
      this.bellRingTimer -= delta;
      const sway = Math.sin(this.bellRingTimer * 8.5) * Math.min(1.0, this.bellRingTimer / 1.5);
      if (this.bellRope) {
        this.bellRope.rotation.x = sway * 0.22;
        this.bellRope.rotation.z = sway * 0.08;
      }
      if (this.bellMesh) {
        this.bellMesh.rotation.z = sway * 0.04;
      }
    } else {
      if (this.bellRope) this.bellRope.rotation.set(0, 0, 0);
      if (this.bellMesh) this.bellMesh.rotation.set(0, 0, 0);
    }

    if (this.smokeParticles) {
      const pos = this.smokeParticles.geometry.attributes.position.array;
      for (let i = 0; i < pos.length / 3; i++) {
        pos[i * 3 + 1] += delta * 0.45;
        pos[i * 3] += Math.sin(time * 2 + i) * 0.003;
        if (pos[i * 3 + 1] > 4.5) {
          pos[i * 3 + 1] = 1.8;
          pos[i * 3] = (Math.random() - 0.5) * 0.16;
          pos[i * 3 + 2] = -3.68 + (Math.random() - 0.5) * 0.16;
        }
      }
      this.smokeParticles.geometry.attributes.position.needsUpdate = true;
    }

    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      r.scale += delta * 3.8;
      r.life -= delta * 1.35;
      r.mesh.scale.set(r.scale, r.scale, r.scale);
      r.mesh.material.opacity = Math.max(0, r.life);

      if (r.life <= 0) {
        this.scene.remove(r.mesh);
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
        this.ripples.splice(i, 1);
      }
    }

    // 1. CẬP NHẬT ĐÀN CÁ BƠI LỘI TRONG HỒ SEN PHÓNG SINH (SWIMMING FISH ANIMATION)
    if (this.pondFish && this.pondFish.length > 0) {
      this.pondFish.forEach(fish => {
        fish.angle += fish.speed * delta;
        fish.group.position.x = -6.8 + Math.cos(fish.angle) * fish.radius;
        fish.group.position.z = 10.5 + Math.sin(fish.angle) * fish.radius;
        fish.group.position.y = fish.yBase + Math.sin(time * 2.8 + fish.seed) * 0.015;

        // Xoay hướng thân cá theo góc tiếp tuyến bơi uốn lượn
        fish.group.rotation.y = -fish.angle + Math.PI / 2;
        fish.group.rotation.z = Math.sin(time * 3.5 + fish.seed) * 0.08;

        // Quẫy đuôi cá nhịp nhàng
        if (fish.tailPivot) {
          fish.tailPivot.rotation.y = Math.sin(time * 8.5 + fish.seed) * 0.42;
        }
      });
    }

    // 2. CẬP NHẬT ĐÈN HOA ĐĂNG TRÔI LỮNG LỜ TRÊN MẶT NƯỚC (FLOATING LOTUS LANTERNS)
    if (this.floatingLanterns && this.floatingLanterns.length > 0) {
      this.floatingLanterns.forEach(fl => {
        fl.angle += fl.driftSpeed * delta * 0.25;
        fl.group.position.x = -6.8 + Math.cos(fl.angle) * fl.radius;
        fl.group.position.z = 10.5 + Math.sin(fl.angle) * fl.radius;
        fl.group.position.y = 0.34 + Math.sin(time * 2.2 + fl.seed) * 0.012;
        fl.group.rotation.y = time * 0.15;
      });
    }

    // 3. LÀN NƯỚC HỒ SEN LĂN TĂN LẤP LÁNH
    if (this.waterMesh) {
      this.waterMesh.rotation.y = time * 0.015;
    }
  }
}
