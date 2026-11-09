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

    // Tọa độ tương tác chuẩn xác, đứng trước bàn Phật/các khu vực nghi thức
    this.interactiveStations = {
      woodfish: { x: 5.6, z: -1.2, rotY: Math.PI },
      bell: { x: -5.6, z: -1.2, rotY: Math.PI },
      incenseTable: { x: -2.8, z: -1.2, rotY: Math.PI },
      incenseBurner: { x: 0, z: -2.2, rotY: Math.PI },
      fortuneTable: { x: 2.8, z: -1.2, rotY: Math.PI }
    };

    // Khởi tạo các bộ texture Canvas chất lượng cao (PBR Procedural Textures)
    this.textures = {
      woodFloor: this.generateWoodFloorTexture(),
      carpet: this.generateCarpetTexture(),
      cushion: this.generatePlushCushionTexture(),
      pillar: this.generatePillarTexture(),
      wall: this.generateWallTexture()
    };

    this.createEnvironment();
    this.createArchitecture();
    this.createGrandBuddhaAltar();
    this.createGrandOfferingAltar();
    this.createSideAltars();
    this.createAuthenticCushionsGrid();
    this.createInteractiveStations();
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

    ctx.font = 'bold 92px "Times New Roman", "Palatino Linotype", "Noto Serif", serif';
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
      ctx.font = 'italic 32px "Times New Roman", serif';
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
    ctx.font = `bold ${fontSize}px "Times New Roman", "Palatino Linotype", "Noto Serif", serif`;

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

  createEnvironment() {
    // Không gian thiền định trầm ấm, thanh tịnh
    this.scene.background = new THREE.Color(0x28170e);
    this.scene.fog = new THREE.Fog(0x28170e, 26, 65);
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

    // CÂU ĐỐI THƯ PHÁP TREO TRÊN 2 CỘT CHÍNH:
    const coupletL = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 5.4, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateCoupletTexture('PHẬT NHẬT TĂNG HUY PHÁP LUÂN THƯỜNG CHUYỂN') })
    );
    coupletL.position.set(-3.8, 4.8, -1.9);

    const coupletR = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 5.4, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateCoupletTexture('TỔ ẤN TRÙNG QUANG PHƯỚC HUỆ TRANG NGHIÊM') })
    );
    coupletR.position.set(3.8, 4.8, -1.9);

    templeGroup.add(coupletL, coupletR);

    // HOÀNH PHI "ĐẠI HÙNG BẢO ĐIỆN" TREO TRÊN CAO TRUNG TÂM
    const grandSign = new THREE.Mesh(
      new THREE.BoxGeometry(5.8, 1.45, 0.15),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('ĐẠI HÙNG BẢO ĐIỆN', 'CHÙA TRÚC LÂM 3D • TÂM AN VẠN SỰ AN') })
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
  // BẢO ĐIỆN ĐỨC PHẬT BỔN SƯ THÍCH CA MÂU NI (GRAND BUDDHA ALTAR)
  // Bức bảo ảnh linh thiêng ngự chính giữa chánh điện, đài sen dát vàng nâng đỡ
  // Vầng hào quang ngũ sắc tỏa rạng mười phương
  // =========================================================================
  createGrandBuddhaAltar() {
    const altarGroup = new THREE.Group();
    // Đặt tại z = -6.2 để vừa vặn, gần gũi và uy nghiêm
    altarGroup.position.set(0, 0, -6.2);

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf5ba2a,
      metalness: 0.92,
      roughness: 0.18,
      emissive: 0x5a3d08,
      emissiveIntensity: 0.35
    });

    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x220a05, roughness: 0.4 });

    // 1. ĐÀI SEN VÀNG 2 TẦNG NÂNG ĐỠ KHÁM THỜ
    const pedBase = new THREE.Mesh(new THREE.CylinderGeometry(2.9, 3.3, 0.7, 24), goldMat);
    pedBase.position.y = 0.35;
    const pedTier2 = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.9, 0.5, 24), goldMat);
    pedTier2.position.y = 0.90;
    altarGroup.add(pedBase, pedTier2);

    // Cánh sen tròn mềm mại viền chân đài
    for (let i = 0; i < 16; i++) {
      const ang = (i / 16) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), goldMat);
      petal.scale.set(1.3, 0.55, 0.9);
      petal.position.set(Math.cos(ang) * 2.8, 1.15, Math.sin(ang) * 2.8);
      altarGroup.add(petal);
    }

    // 2. BỨC BẢO ẢNH ĐỨC PHẬT THÍCH CA LINH THIÊNG
    const textureLoader = new THREE.TextureLoader();
    const phatToTexture = textureLoader.load('/phat-to.jpg');
    phatToTexture.colorSpace = THREE.SRGBColorSpace;

    const picW = 4.8;
    const picH = 6.8;
    const pictureMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(picW, picH),
      new THREE.MeshStandardMaterial({
        map: phatToTexture,
        roughness: 0.12,
        metalness: 0.05,
        emissive: 0x3d2708,
        emissiveIntensity: 0.45
      })
    );
    pictureMesh.position.set(0, 4.8, 0.15);
    this.buddhaPictureMesh = pictureMesh;

    // Khung gỗ quý dát vàng hoàng gia
    const outerFrame = new THREE.Mesh(new THREE.BoxGeometry(picW + 0.8, picH + 0.8, 0.20), darkWoodMat);
    outerFrame.position.set(0, 4.8, 0.05);

    const innerGoldBorder = new THREE.Mesh(new THREE.BoxGeometry(picW + 0.28, picH + 0.28, 0.12), goldMat);
    innerGoldBorder.position.set(0, 4.8, 0.10);

    // Mái ngói đao cong cung đình trên đỉnh khám thờ
    const shrineRoof = new THREE.Mesh(new THREE.BoxGeometry(picW + 1.6, 0.5, 1.1), new THREE.MeshStandardMaterial({ color: 0x8a241c, roughness: 0.55 }));
    shrineRoof.position.set(0, 8.45, 0.25);
    const shrineTrim = new THREE.Mesh(new THREE.BoxGeometry(picW + 2.0, 0.16, 1.3), goldMat);
    shrineTrim.position.set(0, 8.72, 0.25);

    altarGroup.add(outerFrame, innerGoldBorder, pictureMesh, shrineRoof, shrineTrim);

    // 3. VẦNG HÀO QUANG CẦU VỒNG TỎA SÁNG
    const haloCanvas = document.createElement('canvas');
    haloCanvas.width = 512;
    haloCanvas.height = 512;
    const hctx = haloCanvas.getContext('2d');
    hctx.translate(256, 256);

    const hgrad = hctx.createRadialGradient(0, 0, 60, 0, 0, 250);
    hgrad.addColorStop(0, 'rgba(255, 245, 180, 0.95)');
    hgrad.addColorStop(0.4, 'rgba(255, 210, 80, 0.7)');
    hgrad.addColorStop(0.85, 'rgba(255, 140, 0, 0.35)');
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
      hctx.moveTo(-10, 70);
      hctx.lineTo(10, 70);
      hctx.lineTo(22, 250);
      hctx.lineTo(-22, 250);
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
    const rainbowHalo = new THREE.Mesh(new THREE.PlaneGeometry(10.0, 10.0), haloMat);
    rainbowHalo.position.set(0, 5.0, -0.22);
    altarGroup.add(rainbowHalo);
    this.haloMesh = rainbowHalo;

    // Ánh sáng quang minh Phật
    this.buddhaAuraLight = new THREE.PointLight(0xffe082, 4.2, 20);
    this.buddhaAuraLight.position.set(0, 5.5, 1.0);
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
  // GIAN THỜ TẢ HỮU: QUÁN THẾ ÂM & ĐỊA TẠNG VƯƠNG (SIDE ALTARS)
  // =========================================================================
  createSideAltars() {
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.88, roughness: 0.22 });

    // 1. GIAN THỜ QUÁN THẾ ÂM (Bên Tả: x = -7.5, z = -4.0)
    const qaGroup = new THREE.Group();
    qaGroup.position.set(-7.5, 0, -4.0);
    qaGroup.rotation.y = Math.PI / 4.5;

    const qaPed = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.2, 0.7, 16), goldMat);
    qaPed.position.y = 0.35;
    const qaLotus = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.0, 0.30, 16), new THREE.MeshStandardMaterial({ color: 0xf06292 }));
    qaLotus.position.y = 0.85;

    const qaBody = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.55, 2.0, 16), new THREE.MeshStandardMaterial({ color: 0xf7f7f7, roughness: 0.4 }));
    qaBody.position.y = 1.95;
    const qaHead = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), new THREE.MeshStandardMaterial({ color: 0xfce4d0, roughness: 0.45 }));
    qaHead.position.y = 3.15;
    const qaHalo = new THREE.Mesh(new THREE.TorusGeometry(0.70, 0.05, 8, 24), new THREE.MeshStandardMaterial({ color: 0x80deea, emissive: 0x00acc1, emissiveIntensity: 0.6 }));
    qaHalo.position.set(0, 3.25, -0.2);

    const qaSign = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.32, 0.04), new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Quán Thế Âm Bồ Tát') }));
    qaSign.position.set(0, 0.35, 1.15);

    qaGroup.add(qaPed, qaLotus, qaBody, qaHead, qaHalo, qaSign);
    this.scene.add(qaGroup);

    // 2. GIAN THỜ ĐỊA TẠNG VƯƠNG (Bên Hữu: x = 7.5, z = -4.0)
    const dtGroup = new THREE.Group();
    dtGroup.position.set(7.5, 0, -4.0);
    dtGroup.rotation.y = -Math.PI / 4.5;

    const dtPed = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.2, 0.7, 16), goldMat);
    dtPed.position.y = 0.35;
    const dtLotus = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.0, 0.30, 16), new THREE.MeshStandardMaterial({ color: 0xe57373 }));
    dtLotus.position.y = 0.85;

    const dtBody = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.55, 2.0, 16), new THREE.MeshStandardMaterial({ color: 0xef6c00, roughness: 0.5 }));
    dtBody.position.y = 1.95;
    const dtHead = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), new THREE.MeshStandardMaterial({ color: 0xfce4d0, roughness: 0.45 }));
    dtHead.position.y = 3.15;
    const dtHalo = new THREE.Mesh(new THREE.TorusGeometry(0.70, 0.05, 8, 24), new THREE.MeshStandardMaterial({ color: 0xffd54f, emissive: 0xffb300, emissiveIntensity: 0.6 }));
    dtHalo.position.set(0, 3.25, -0.2);

    const dtSign = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.32, 0.04), new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Địa Tạng Vương Bồ Tát') }));
    dtSign.position.set(0, 0.35, 1.15);

    dtGroup.add(dtPed, dtLotus, dtBody, dtHead, dtHalo, dtSign);
    this.scene.add(dtGroup);
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

    // 1. ĐẠI HỒNG CHUNG (x = -5.6, z = -1.8)
    const bellGroup = new THREE.Group();
    bellGroup.position.set(-5.6, 0, -1.8);

    const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 5.0, 12), woodMat);
    post1.position.set(-1.1, 2.5, 0);
    const post2 = post1.clone();
    post2.position.set(1.1, 2.5, 0);
    const cross = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.35, 0.35), woodMat);
    cross.position.set(0, 4.8, 0);

    const bellMat = new THREE.MeshStandardMaterial({
      color: 0xa88647,
      metalness: 0.88,
      roughness: 0.22,
      emissive: 0x2e2009,
      emissiveIntensity: 0.2
    });
    const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 1.25, 2.0, 24), bellMat);
    bell.position.set(0, 3.3, 0);
    this.bellMesh = bell;

    const striker = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.6, 10), woodMat);
    striker.rotation.z = Math.PI / 2;
    striker.position.set(0, 2.5, 0.35);

    const bellSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.30, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Đại Hồng Chung') })
    );
    bellSign.position.set(0, 5.25, 0);

    bellGroup.add(post1, post2, cross, bell, striker, bellSign);
    this.scene.add(bellGroup);

    // 2. KỆ MÕ GỖ BÁT NHÃ (x = 5.6, z = -1.8)
    const woodfishGroup = new THREE.Group();
    woodfishGroup.position.set(5.6, 0, -1.8);

    const tableMat = new THREE.MeshStandardMaterial({ color: 0x3d0e07, roughness: 0.45 });
    const table = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.15, 0.9, 18), tableMat);
    table.position.y = 0.45;

    const cushion = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.95, 0.25, 18), new THREE.MeshStandardMaterial({ color: 0x9e1a1a, roughness: 0.75 }));
    cushion.position.y = 1.02;

    const wf = new THREE.Mesh(
      new THREE.SphereGeometry(0.52, 18, 18),
      new THREE.MeshStandardMaterial({ color: 0x7c3817, roughness: 0.32, metalness: 0.15 })
    );
    wf.scale.set(1.22, 0.85, 1.02);
    wf.position.set(0, 1.48, 0);
    this.woodfishMesh = wf;

    const wfSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.30, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Mõ Gỗ Bát Nhã') })
    );
    wfSign.position.set(0, 2.15, 0);

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
  }

  // =========================================================================
  // ÁNH SÁNG & KHÍ TRỜI THIỀN ĐỊNH LUNG LINH (ATMOSPHERIC LIGHTING)
  // =========================================================================
  createAtmosphericLighting() {
    // 1. Ánh sáng môi trường chan hòa thanh tịnh
    const ambientLight = new THREE.AmbientLight(0xffedd8, 1.35);
    this.scene.add(ambientLight);

    // 2. Nắng sớm rọi từ vòm điện
    const mainSun = new THREE.DirectionalLight(0xfff3e0, 1.8);
    mainSun.position.set(0, 16, 6);
    mainSun.castShadow = true;
    mainSun.shadow.mapSize.width = 1024;
    mainSun.shadow.mapSize.height = 1024;
    mainSun.shadow.camera.near = 0.5;
    mainSun.shadow.camera.far = 35;
    this.scene.add(mainSun);

    // 3. Đèn lồng cung đình treo dọc 2 bên hành lang
    const lanternMat = new THREE.MeshStandardMaterial({
      color: 0xff9800,
      emissive: 0xff6f00,
      emissiveIntensity: 0.85,
      roughness: 0.3
    });

    [-7.5, 7.5].forEach(lx => {
      [0.0, 6.0, 12.0].forEach(lz => {
        const lan = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.30, 0.60, 10), lanternMat);
        lan.position.set(lx, 6.0, lz);

        const pLight = new THREE.PointLight(0xffa726, 1.2, 8.5);
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
  }
}
