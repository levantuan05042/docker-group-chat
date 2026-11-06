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

    // Tọa độ đứng thực hiện nghi lễ chuẩn xác, mặt hướng về phía Đức Phật (-Z)
    this.interactiveStations = {
      woodfish: { x: 6.8, z: -0.8, rotY: Math.PI },
      bell: { x: -6.8, z: -0.8, rotY: Math.PI },
      incenseTable: { x: -3.6, z: -0.8, rotY: Math.PI },
      incenseBurner: { x: 0, z: -2.8, rotY: Math.PI },
      fortuneTable: { x: 3.6, z: -0.8, rotY: Math.PI }
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
  // HELPER: TẠO TEXTURE HOÀNH PHI & CÂU ĐỐI THƯ PHÁP CHỮ VÀNG SƠN SON THIẾP VÀNG
  // =========================================================================
  generateSignboardTexture(text, subtitle = '') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Nền sơn son thếp đỏ thắm truyền thống
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#4a080a');
    grad.addColorStop(0.5, '#781216');
    grad.addColorStop(1, '#380406');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 256);

    // Viền khung dát vàng hoa văn cung đình
    ctx.strokeStyle = '#f5c33b';
    ctx.lineWidth = 14;
    ctx.strokeRect(16, 16, 992, 224);

    ctx.strokeStyle = '#9e7314';
    ctx.lineWidth = 4;
    ctx.strokeRect(28, 28, 968, 200);

    // Họa tiết hoa mai 4 góc
    ctx.fillStyle = '#ffdf79';
    [[38, 38], [986, 38], [38, 218], [986, 218]].forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fill();
    });

    // Chữ thư pháp đại tự dát vàng
    ctx.font = 'bold 92px "Times New Roman", "Palatino Linotype", "Noto Serif", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;

    const goldGrad = ctx.createLinearGradient(0, 30, 0, 220);
    goldGrad.addColorStop(0, '#fff6bd');
    goldGrad.addColorStop(0.35, '#ffd700');
    goldGrad.addColorStop(0.75, '#d49b18');
    goldGrad.addColorStop(1, '#9e6e08');
    ctx.fillStyle = goldGrad;
    ctx.fillText(text, 512, subtitle ? 106 : 128);

    if (subtitle) {
      ctx.font = 'italic 34px "Times New Roman", serif';
      ctx.fillStyle = '#ffd680';
      ctx.fillText(subtitle, 512, 186);
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

    // Nền câu đối sơn son màu cánh gián sẫm bóng
    const grad = ctx.createLinearGradient(0, 0, 256, 0);
    grad.addColorStop(0, '#380507');
    grad.addColorStop(0.5, '#6e1014');
    grad.addColorStop(1, '#380507');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 1024);

    // Viền chỉ dát vàng
    ctx.strokeStyle = '#f5c33b';
    ctx.lineWidth = 10;
    ctx.strokeRect(14, 14, 228, 996);
    ctx.strokeStyle = '#8c600b';
    ctx.lineWidth = 3;
    ctx.strokeRect(22, 22, 212, 980);

    // Chữ thư pháp dọc
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    const chars = text.split('');
    const charCount = chars.length;
    const fontSize = Math.min(62, Math.floor(860 / (charCount + 0.5)));
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
    // Không gian thiền định ấm áp, không còn sương mù tối tăm u ám
    this.scene.background = new THREE.Color(0x321e14);
    this.scene.fog = new THREE.Fog(0x321e14, 30, 80);
  }

  // =========================================================================
  // KIẾN TRÚC ĐẠI HÙNG BẢO ĐIỆN CHÙA VIỆT CỔ TRUYỀN
  // Tường bao trang nghiêm, sàn gỗ mun bóng loáng, thảm đỏ dẫn lối,
  // Cột lim vững chãi treo câu đối dát vàng, xà ngang vì kèo lợp ngói mũi hài
  // =========================================================================
  createArchitecture() {
    const templeGroup = new THREE.Group();

    // 1. SÀN GỖ MUN BÓNG ĐẬM ÁNH VÀNG & THẢM GẤM ĐỎ TRUNG TÂM
    const floorGeo = new THREE.PlaneGeometry(30, 36, 16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x361d12, // Gỗ gụ/mun bóng
      roughness: 0.22,
      metalness: 0.12
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, 4);
    floor.receiveShadow = true;
    templeGroup.add(floor);

    // Thảm gấm đỏ dẫn lối vào Chính Điện
    const redCarpet = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, 34),
      new THREE.MeshStandardMaterial({
        color: 0x821316,
        roughness: 0.8
      })
    );
    redCarpet.rotation.x = -Math.PI / 2;
    redCarpet.position.set(0, 0.015, 4);
    templeGroup.add(redCarpet);

    // Viền thảm thêu chỉ vàng hoàng gia
    [-1.6, 1.6].forEach(ex => {
      const edge = new THREE.Mesh(
        new THREE.PlaneGeometry(0.12, 34),
        new THREE.MeshStandardMaterial({ color: 0xf5c33b, metalness: 0.8, roughness: 0.2 })
      );
      edge.rotation.x = -Math.PI / 2;
      edge.position.set(ex, 0.018, 4);
      templeGroup.add(edge);
    });

    // 2. TƯỜNG BAO 4 PHÍA KÍN ĐÁO, TRANG NGHIÊM
    const wallOchreMat = new THREE.MeshStandardMaterial({
      color: 0x8a6332, // Màu vàng đất hoa quỳ chùa cổ
      roughness: 0.9
    });
    const woodBaseMat = new THREE.MeshStandardMaterial({
      color: 0x2e110a, // Gỗ gụ ốp chân tường
      roughness: 0.55
    });

    // Tường Hậu (Sau lưng Phật điện, z = -10.5)
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(28, 14, 1.0), wallOchreMat);
    backWall.position.set(0, 7, -10.5);
    const backWainscot = new THREE.Mesh(new THREE.BoxGeometry(28, 3.2, 1.15), woodBaseMat);
    backWainscot.position.set(0, 1.6, -10.45);
    templeGroup.add(backWall, backWainscot);

    // Tường Tả (Trái, x = -13.5) & Tường Hữu (Phải, x = 13.5)
    [-13.5, 13.5].forEach(wx => {
      const sideWall = new THREE.Mesh(new THREE.BoxGeometry(1.0, 14, 34), wallOchreMat);
      sideWall.position.set(wx, 7, 4);
      const sideWainscot = new THREE.Mesh(new THREE.BoxGeometry(1.15, 3.2, 34), woodBaseMat);
      sideWainscot.position.set(wx, 1.6, 4);
      templeGroup.add(sideWall, sideWainscot);

      // Cửa sổ tròn chữ Thọ dát vàng truyền thống (Round longevity lattice windows)
      [-4.0, 4.0, 12.0].forEach(wz => {
        const win = new THREE.Mesh(
          new THREE.TorusGeometry(1.4, 0.12, 10, 24),
          new THREE.MeshStandardMaterial({ color: 0x5a1811, roughness: 0.5 })
        );
        win.rotation.y = wx > 0 ? -Math.PI / 2 : Math.PI / 2;
        win.position.set(wx > 0 ? wx - 0.45 : wx + 0.45, 6.8, wz);
        templeGroup.add(win);
      });
    });

    // Tường Tiền & Cửa Tam Quan Nội (z = 20.5)
    const frontWallL = new THREE.Mesh(new THREE.BoxGeometry(10.5, 14, 0.8), woodBaseMat);
    frontWallL.position.set(-8.75, 7, 20.5);
    const frontWallR = new THREE.Mesh(new THREE.BoxGeometry(10.5, 14, 0.8), woodBaseMat);
    frontWallR.position.set(8.75, 7, 20.5);
    const archTop = new THREE.Mesh(new THREE.BoxGeometry(7.0, 5.0, 0.9), woodBaseMat);
    archTop.position.set(0, 11.5, 20.5);
    templeGroup.add(frontWallL, frontWallR, archTop);

    // 3. HÀNG CỘT LIM SƠN SON THIẾP VÀNG & CÂU ĐỐI THƯ PHÁP
    const pillarGeo = new THREE.CylinderGeometry(0.55, 0.60, 12.0, 24);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x36120b, roughness: 0.42 });
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.85 });
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xf5c33b, metalness: 0.85, roughness: 0.2 });

    const pillarCoords = [
      [-4.5, -3.5], [4.5, -3.5], // Đôi cột cái trung tâm trước bàn Phật (Treo câu đối chính)
      [-8.5, 3.5], [8.5, 3.5],   // Đôi cột quân giữa điện
      [-8.5, 11.5], [8.5, 11.5]  // Đôi cột quân cuối điện
    ];

    pillarCoords.forEach(([px, pz]) => {
      const p = new THREE.Mesh(pillarGeo, pillarMat);
      p.position.set(px, 6.0, pz);
      p.castShadow = true;

      // Chân tảng đá hoa sen bát giác
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.98, 0.5, 16), baseMat);
      base.position.set(px, 0.25, pz);

      // Đai đồng dát vàng quấn quanh cột
      [2.5, 7.5].forEach(ry => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.03, 8, 24), ringMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.set(px, ry, pz);
        templeGroup.add(ring);
      });

      templeGroup.add(p, base);
    });

    // CÂU ĐỐI THƯ PHÁP CHỮ VÀNG TREO TRÊN 2 CỘT TRUNG TÂM KHÁM THỜ:
    // Vế Tả: "PHẬT NHẬT TĂNG HUY PHÁP LUÂN THƯỜNG CHUYỂN"
    const coupletL = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 5.8, 0.05),
      new THREE.MeshStandardMaterial({ map: this.generateCoupletTexture('PHẬT NHẬT TĂNG HUY PHÁP LUÂN THƯỜNG CHUYỂN') })
    );
    coupletL.position.set(-4.5, 5.2, -2.85);

    // Vế Hữu: "TỔ ẤN TRÙNG QUANG PHƯỚC HUỆ TRANG NGHIÊM"
    const coupletR = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 5.8, 0.05),
      new THREE.MeshStandardMaterial({ map: this.generateCoupletTexture('TỔ ẤN TRÙNG QUANG PHƯỚC HUỆ TRANG NGHIÊM') })
    );
    coupletR.position.set(4.5, 5.2, -2.85);

    templeGroup.add(coupletL, coupletR);

    // HOÀNH PHI ĐẠI TỰ "ĐẠI HÙNG BẢO ĐIỆN" TREO TRÊN CAO CHÍNH ĐIỆN
    const grandSign = new THREE.Mesh(
      new THREE.BoxGeometry(6.4, 1.6, 0.18),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('ĐẠI HÙNG BẢO ĐIỆN', 'CHÙA TRÚC LÂM 3D • TÂM AN VẠN SỰ AN') })
    );
    grandSign.position.set(0, 9.8, -4.5);
    templeGroup.add(grandSign);

    // Xà gồ vì kèo gỗ lim nâng đỡ mái chùa
    const beamMat = new THREE.MeshStandardMaterial({ color: 0x2e0e08, roughness: 0.5 });
    [-3.5, 3.5, 11.5].forEach(bz => {
      const crossBeam = new THREE.Mesh(new THREE.BoxGeometry(26, 0.6, 0.6), beamMat);
      crossBeam.position.set(0, 11.8, bz);
      templeGroup.add(crossBeam);
    });

    this.scene.add(templeGroup);
  }

  // =========================================================================
  // TOÀ KIM THÂN ĐỨC PHẬT BỔN SƯ THÍCH CA MÂU NI (GRAND BUDDHA ALTAR)
  // Bảo ảnh linh thiêng của Đức Phật Bổn Sư hiển hiện rực rỡ, trung tâm của điện!
  // Tuyệt đối không bị bất kỳ vật thể nào che lấp, tỏa ánh hào quang chiếu rọi
  // =========================================================================
  createGrandBuddhaAltar() {
    const altarGroup = new THREE.Group();
    altarGroup.position.set(0, 0, -8.0);

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf5ba2a,
      metalness: 0.92,
      roughness: 0.18,
      emissive: 0x5a3d08,
      emissiveIntensity: 0.35
    });

    const darkWoodMat = new THREE.MeshStandardMaterial({
      color: 0x240c06,
      roughness: 0.4
    });

    // 1. ĐÀI SEN DÁT VÀNG NÂNG ĐỠ KHÁM THỜ (Nằm hoàn toàn bên dưới ảnh, không che ảnh!)
    const pedBase = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.6, 0.8, 24), goldMat);
    pedBase.position.y = 0.4;
    const pedTier2 = new THREE.Mesh(new THREE.CylinderGeometry(2.9, 3.2, 0.6, 24), goldMat);
    pedTier2.position.y = 1.0;
    altarGroup.add(pedBase, pedTier2);

    // Cánh sen tròn mềm mại viền quanh chân đài sen (chỉ cao đến y = 1.45)
    for (let i = 0; i < 16; i++) {
      const ang = (i / 16) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), goldMat);
      petal.scale.set(1.4, 0.6, 1.0);
      petal.position.set(Math.cos(ang) * 3.1, 1.25, Math.sin(ang) * 3.1);
      altarGroup.add(petal);
    }

    // 2. TRỌNG TÂM THIÊNG LIÊNG: BỨC BẢO ẢNH ĐỨC PHẬT BỔN SƯ THÍCH CA
    // Đặt ở vị trí trung tâm hoàn mỹ (y = 5.2, kích thước 5.2m x 7.4m)
    const textureLoader = new THREE.TextureLoader();
    const phatToTexture = textureLoader.load('/phat-to.jpg');
    phatToTexture.colorSpace = THREE.SRGBColorSpace;

    const picW = 5.2;
    const picH = 7.4;
    const pictureMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(picW, picH),
      new THREE.MeshStandardMaterial({
        map: phatToTexture,
        roughness: 0.12,
        metalness: 0.05,
        emissive: 0x422a08,
        emissiveIntensity: 0.42
      })
    );
    pictureMesh.position.set(0, 5.2, 0.18);
    this.buddhaPictureMesh = pictureMesh;

    // Khung gỗ quý sơn son thiếp vàng hoàng gia bao quanh bức ảnh
    const outerFrame = new THREE.Mesh(new THREE.BoxGeometry(picW + 0.9, picH + 0.9, 0.22), darkWoodMat);
    outerFrame.position.set(0, 5.2, 0.05);

    const innerGoldBorder = new THREE.Mesh(new THREE.BoxGeometry(picW + 0.3, picH + 0.3, 0.14), goldMat);
    innerGoldBorder.position.set(0, 5.2, 0.10);

    // Mái ngói đao cong cung đình 3 tầng uy nghiêm trên đỉnh khám thờ
    const shrineRoof = new THREE.Mesh(new THREE.BoxGeometry(picW + 1.8, 0.55, 1.2), new THREE.MeshStandardMaterial({ color: 0x8a241c, roughness: 0.55 }));
    shrineRoof.position.set(0, 9.25, 0.3);
    const shrineTrim = new THREE.Mesh(new THREE.BoxGeometry(picW + 2.2, 0.18, 1.4), goldMat);
    shrineTrim.position.set(0, 9.55, 0.3);

    altarGroup.add(outerFrame, innerGoldBorder, pictureMesh, shrineRoof, shrineTrim);

    // 3. VẦNG HÀO QUANG CẦU VỒNG NGŨ SẮC TỎA SÁNG SAU LƯNG ĐỨC PHẬT
    const haloCanvas = document.createElement('canvas');
    haloCanvas.width = 512;
    haloCanvas.height = 512;
    const hctx = haloCanvas.getContext('2d');
    hctx.translate(256, 256);

    const hgrad = hctx.createRadialGradient(0, 0, 70, 0, 0, 250);
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
      hctx.moveTo(-10, 80);
      hctx.lineTo(10, 80);
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
    rainbowHalo.position.set(0, 5.5, -0.25);
    altarGroup.add(rainbowHalo);
    this.haloMesh = rainbowHalo;

    // Ánh sáng quang minh rực rỡ từ kim thân Phật
    this.buddhaAuraLight = new THREE.PointLight(0xffdf80, 4.5, 22);
    this.buddhaAuraLight.position.set(0, 6.0, 1.2);
    altarGroup.add(this.buddhaAuraLight);

    this.scene.add(altarGroup);
  }

  // =========================================================================
  // BÀN ĐẠI LỄ TAM BẢO CHÍNH ĐIỆN (GRAND CEREMONIAL OFFERING ALTAR)
  // Bàn thờ gỗ gụ phủ gấm đỏ, bộ ngũ sự đồng đúc, lư hương, mâm ngũ quả,
  // Đôi hạc ngự rùa đồng, đôi đèn sen pha lê phát sáng lung linh
  // =========================================================================
  createGrandOfferingAltar() {
    const tableGroup = new THREE.Group();
    // Bàn lễ đặt tại z = -4.8, cao 0.95m => Hoàn toàn thoáng đãng, không hề che ảnh Phật!
    tableGroup.position.set(0, 0, -4.8);

    const tableMat = new THREE.MeshStandardMaterial({ color: 0x2b0d06, roughness: 0.38 });
    const goldTrimMat = new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.88, roughness: 0.22 });
    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0xb58b3c,
      metalness: 0.85,
      roughness: 0.24,
      emissive: 0x221504,
      emissiveIntensity: 0.15
    });

    // 1. Thân bàn thờ đại lễ gỗ gụ
    const mainTable = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.95, 1.3), tableMat);
    mainTable.position.y = 0.475;
    mainTable.castShadow = true;
    mainTable.receiveShadow = true;

    // Dạ cá viền chỉ vàng
    const tableApron = new THREE.Mesh(new THREE.BoxGeometry(4.7, 0.16, 1.35), goldTrimMat);
    tableApron.position.y = 0.85;

    // Khăn phủ gấm đỏ thắm
    const runner = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.03, 1.2), new THREE.MeshStandardMaterial({ color: 0x9e1215, roughness: 0.6 }));
    runner.position.y = 0.965;

    tableGroup.add(mainTable, tableApron, runner);

    // 2. LƯ ĐỒNG TAM BẢO TRUNG TÂM (ĐỈNH ĐỒNG TRẦM HƯƠNG)
    const burnerGroup = new THREE.Group();
    burnerGroup.position.set(0, 0.98, 0.15);

    const burnerBody = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.36, 0.48, 20), bronzeMat);
    burnerBody.position.y = 0.24;
    const burnerRim = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.05, 10, 24), goldTrimMat);
    burnerRim.rotation.x = Math.PI / 2;
    burnerRim.position.y = 0.48;

    // 3 chân vạc đồng
    for (let f = 0; f < 3; f++) {
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.24, 8), bronzeMat);
      const ang = (f / 3) * Math.PI * 2;
      foot.position.set(Math.cos(ang) * 0.32, 0.10, Math.sin(ang) * 0.32);
      burnerGroup.add(foot);
    }

    // Cát vàng mịn trong lư
    const sand = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.05, 18), new THREE.MeshStandardMaterial({ color: 0xd4b07b, roughness: 0.9 }));
    sand.position.y = 0.45;

    // 3 nén tâm hương bén lửa đỏ rực
    for (let i = -1; i <= 1; i++) {
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.65), new THREE.MeshBasicMaterial({ color: 0xaa2211 }));
      stick.position.set(i * 0.10, 0.75, 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff3b00 }));
      tip.position.set(i * 0.10, 1.05, 0);
      burnerGroup.add(stick, tip);
    }

    burnerGroup.add(burnerBody, burnerRim, sand);
    tableGroup.add(burnerGroup);

    // 3. ĐÔI HẠC NGỰ RÙA ĐỒNG (TWIN SACRED BRONZE CRANES)
    [-1.25, 1.25].forEach((hx, idx) => {
      const craneGroup = new THREE.Group();
      craneGroup.position.set(hx, 0.98, -0.10);
      craneGroup.rotation.y = idx === 0 ? Math.PI / 6 : -Math.PI / 6;

      const turtle = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), bronzeMat);
      turtle.scale.set(1.3, 0.55, 1.0);
      turtle.position.y = 0.06;

      const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.55, 8), bronzeMat);
      legs.position.y = 0.36;

      const cBody = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 10), bronzeMat);
      cBody.scale.set(0.9, 1.4, 0.9);
      cBody.position.set(0, 0.70, 0);

      const cNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.024, 0.42, 8), bronzeMat);
      cNeck.position.set(0, 0.98, 0.06);

      const cHead = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), bronzeMat);
      cHead.position.set(0, 1.20, 0.10);

      craneGroup.add(turtle, legs, cBody, cNeck, cHead);
      tableGroup.add(craneGroup);
    });

    // 4. ĐÔI LỌ HOA SEN HỒNG & ĐÔI NẾN ĐỎ CHIÊU TÀI
    [-1.9, 1.9].forEach(vx => {
      // Lọ gốm hoa sen
      const vase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.18, 0.45, 12),
        new THREE.MeshStandardMaterial({ color: 0x004d40, roughness: 0.25 })
      );
      vase.position.set(vx, 1.20, 0);

      // Búp sen hồng
      for (let s = 0; s < 3; s++) {
        const lotusBud = new THREE.Mesh(
          new THREE.ConeGeometry(0.06, 0.16, 8),
          new THREE.MeshStandardMaterial({ color: 0xf06292, roughness: 0.3 })
        );
        lotusBud.position.set(vx + (s - 1) * 0.06, 1.50, (s % 2) * 0.04);
        tableGroup.add(lotusBud);
      }
      tableGroup.add(vase);
    });

    // Đôi chân nến đồng đỏ thắp sáng
    [-0.7, 0.7].forEach(nx => {
      const cStand = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.32, 10), bronzeMat);
      cStand.position.set(nx, 1.14, 0.25);
      const cWax = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.28, 10), new THREE.MeshStandardMaterial({ color: 0xcc1818 }));
      cWax.position.set(nx, 1.40, 0.25);
      const flame = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffaa00 }));
      flame.scale.set(0.6, 1.8, 0.6);
      flame.position.set(nx, 1.56, 0.25);

      const candleLight = new THREE.PointLight(0xff9800, 1.5, 6.0);
      candleLight.position.set(nx, 1.60, 0.25);
      this.candleLights.push(candleLight);

      tableGroup.add(cStand, cWax, flame, candleLight);
    });

    // 5. MÂM NGŨ QUẢ CẦU AN (FIVE-FRUIT OFFERING TRAY)
    const fruitTray = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.24, 0.08, 16), goldTrimMat);
    fruitTray.position.set(0, 1.02, 0.45);
    const fruitMat = new THREE.MeshStandardMaterial({ color: 0xff7043, roughness: 0.6 });
    [-0.1, 0.1].forEach(fx => {
      const apple = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), fruitMat);
      apple.position.set(fx, 1.10, 0.45);
      tableGroup.add(apple);
    });
    const peach = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), new THREE.MeshStandardMaterial({ color: 0xffb74d }));
    peach.position.set(0, 1.17, 0.45);
    tableGroup.add(fruitTray, peach);

    this.scene.add(tableGroup);
  }

  // =========================================================================
  // GIAN THỜ TẢ HỮU: BỒ TÁT QUÁN THẾ ÂM & ĐỊA TẠNG VƯƠNG (SIDE ALTARS)
  // Hai khám thờ trang nghiêm hai bên chánh điện, đài sen, bình cam lộ, tích trượng
  // =========================================================================
  createSideAltars() {
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.88, roughness: 0.22 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.5 });

    // 1. GIAN THỜ BỒ TÁT QUÁN THẾ ÂM (Bên Tả: x = -8.5, z = -4.8)
    const quanAmGroup = new THREE.Group();
    quanAmGroup.position.set(-8.5, 0, -4.8);
    quanAmGroup.rotation.y = Math.PI / 5;

    const qaPed = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.3, 0.8, 16), goldMat);
    qaPed.position.y = 0.4;
    const qaLotus = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.1, 0.35, 16), new THREE.MeshStandardMaterial({ color: 0xf06292 }));
    qaLotus.position.y = 0.95;

    // Tôn tượng Quán Thế Âm bạch y thanh thoát
    const qaBody = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.58, 2.2, 16), new THREE.MeshStandardMaterial({ color: 0xf7f7f7, roughness: 0.4 }));
    qaBody.position.y = 2.15;
    const qaHead = new THREE.Mesh(new THREE.SphereGeometry(0.30, 16, 16), new THREE.MeshStandardMaterial({ color: 0xfce4d0, roughness: 0.45 }));
    qaHead.position.y = 3.45;
    const qaHalo = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.05, 8, 24), new THREE.MeshStandardMaterial({ color: 0x80deea, emissive: 0x00acc1, emissiveIntensity: 0.6 }));
    qaHalo.position.set(0, 3.55, -0.2);

    // Bình ngọc Cam Lộ & cành liễu
    const vase = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.38, 10), new THREE.MeshStandardMaterial({ color: 0xe0f7fa }));
    vase.position.set(-0.25, 2.45, 0.32);

    const qaSign = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.35, 0.05), new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Quán Thế Âm Bồ Tát') }));
    qaSign.position.set(0, 0.40, 1.25);

    quanAmGroup.add(qaPed, qaLotus, qaBody, qaHead, qaHalo, vase, qaSign);
    this.scene.add(quanAmGroup);

    // 2. GIAN THỜ BỒ TÁT ĐỊA TẠNG VƯƠNG (Bên Hữu: x = 8.5, z = -4.8)
    const diaTangGroup = new THREE.Group();
    diaTangGroup.position.set(8.5, 0, -4.8);
    diaTangGroup.rotation.y = -Math.PI / 5;

    const dtPed = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.3, 0.8, 16), goldMat);
    dtPed.position.y = 0.4;
    const dtLotus = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.1, 0.35, 16), new THREE.MeshStandardMaterial({ color: 0xe57373 }));
    dtLotus.position.y = 0.95;

    // Tôn tượng Địa Tạng Vương cà sa vàng cam
    const dtBody = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.58, 2.2, 16), new THREE.MeshStandardMaterial({ color: 0xef6c00, roughness: 0.5 }));
    dtBody.position.y = 2.15;
    const dtHead = new THREE.Mesh(new THREE.SphereGeometry(0.30, 16, 16), new THREE.MeshStandardMaterial({ color: 0xfce4d0, roughness: 0.45 }));
    dtHead.position.y = 3.45;
    const dtHalo = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.05, 8, 24), new THREE.MeshStandardMaterial({ color: 0xffd54f, emissive: 0xffb300, emissiveIntensity: 0.6 }));
    dtHalo.position.set(0, 3.55, -0.2);

    // Tích trượng chín vòng dát vàng
    const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.8, 8), goldMat);
    staff.position.set(0.35, 2.65, 0.3);

    const dtSign = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.35, 0.05), new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Địa Tạng Vương Bồ Tát') }));
    dtSign.position.set(0, 0.40, 1.25);

    diaTangGroup.add(dtPed, dtLotus, dtBody, dtHead, dtHalo, staff, dtSign);
    this.scene.add(diaTangGroup);
  }

  // =========================================================================
  // HÀNG BỒ ĐOÀN VUÔNG XÁM ĐẬM VIỀN BE CHUẨN MEME SANSA
  // Sắp xếp ngăn nắp 2 bên thảm đỏ trung tâm, người chơi click để ngồi thiền
  // =========================================================================
  createAuthenticCushionsGrid() {
    const cushionGroup = new THREE.Group();
    const cushionMat = new THREE.MeshStandardMaterial({ color: 0x3d3d42, roughness: 0.85 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x8a7a6b, roughness: 0.9 });

    this.cushionPositions = [];

    const colXs = [-4.2, -2.2, 2.2, 4.2];
    const rowZs = [0.8, 3.8, 6.8, 9.8, 12.8];

    colXs.forEach(cx => {
      rowZs.forEach(rz => {
        const cG = new THREE.Group();
        cG.position.set(cx, 0, rz);

        const cushion = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.10, 0.85), cushionMat);
        cushion.position.y = 0.05;
        cushion.receiveShadow = true;

        const trim = new THREE.Mesh(new THREE.BoxGeometry(0.87, 0.02, 0.87), trimMat);
        trim.position.y = 0.05;

        cG.add(cushion, trim);
        cushionGroup.add(cG);

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
  // CÁC KHU VỰC TƯƠNG TÁC PHẬT SỰ (STATIONS)
  // 1. Đại Hồng Chung (Chuông đồng Bát Nhã)
  // 2. Kệ Mõ Gỗ Cá Bát Nhã
  // 3. Bàn Xin Xăm Linh Ứng
  // =========================================================================
  createInteractiveStations() {
    // 1. ĐẠI HỒNG CHUNG (x = -6.8, z = -1.8)
    const bellGroup = new THREE.Group();
    bellGroup.position.set(-6.8, 0, -1.8);

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.65 });
    const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.24, 5.5, 12), woodMat);
    post1.position.set(-1.2, 2.75, 0);
    const post2 = post1.clone();
    post2.position.set(1.2, 2.75, 0);
    const cross = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.38, 0.38), woodMat);
    cross.position.set(0, 5.2, 0);

    const bellMat = new THREE.MeshStandardMaterial({
      color: 0xa88647,
      metalness: 0.88,
      roughness: 0.22,
      emissive: 0x2e2009,
      emissiveIntensity: 0.2
    });
    const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.35, 2.2, 24), bellMat);
    bell.position.set(0, 3.6, 0);
    this.bellMesh = bell;

    // Chày kình thỉnh chuông
    const striker = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.8, 10), woodMat);
    striker.rotation.z = Math.PI / 2;
    striker.position.set(0, 2.7, 0.4);

    const bellSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.32, 0.05),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Đại Hồng Chung') })
    );
    bellSign.position.set(0, 5.7, 0);

    bellGroup.add(post1, post2, cross, bell, striker, bellSign);
    this.scene.add(bellGroup);

    // 2. KỆ MÕ GỖ BÁT NHÃ (x = 6.8, z = -1.8)
    const woodfishGroup = new THREE.Group();
    woodfishGroup.position.set(6.8, 0, -1.8);

    const tableMat = new THREE.MeshStandardMaterial({ color: 0x3d0e07, roughness: 0.45 });
    const table = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.25, 1.0, 18), tableMat);
    table.position.y = 0.50;

    const cushion = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.05, 0.28, 18), new THREE.MeshStandardMaterial({ color: 0x9e1a1a, roughness: 0.75 }));
    cushion.position.y = 1.14;

    const wf = new THREE.Mesh(
      new THREE.SphereGeometry(0.58, 18, 18),
      new THREE.MeshStandardMaterial({ color: 0x7c3817, roughness: 0.32, metalness: 0.15 })
    );
    wf.scale.set(1.22, 0.85, 1.02);
    wf.position.set(0, 1.62, 0);
    this.woodfishMesh = wf;

    const wfSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.32, 0.05),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Mõ Gỗ Bát Nhã') })
    );
    wfSign.position.set(0, 2.3, 0);

    woodfishGroup.add(table, cushion, wf, wfSign);
    this.scene.add(woodfishGroup);

    // 3. BÀN XIN XĂM MAY MẮN (x = 3.6, z = -1.8)
    const fortuneGroup = new THREE.Group();
    fortuneGroup.position.set(3.6, 0, -1.8);

    const fTable = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.95, 0.85), woodMat);
    fTable.position.y = 0.475;

    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.11, 0.45, 12), new THREE.MeshStandardMaterial({ color: 0xbfa018, roughness: 0.4 }));
    tube.position.set(0, 1.18, 0);

    const fortuneSign = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.28, 0.04),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Xin Xăm Quẻ') })
    );
    fortuneSign.position.set(0, 1.55, 0);

    fortuneGroup.add(fTable, tube, fortuneSign);
    this.scene.add(fortuneGroup);
  }

  // =========================================================================
  // ÁNH SÁNG & KHÍ TRỜI THIỀN ĐỊNH LUNG LINH (ATMOSPHERIC LIGHTING)
  // Không gian chan hòa ấm áp, ánh nến lung linh, đèn lồng cung đình
  // =========================================================================
  createAtmosphericLighting() {
    // 1. Ánh sáng môi trường chan hòa thanh tịnh
    const ambientLight = new THREE.AmbientLight(0xfff0dd, 1.35);
    this.scene.add(ambientLight);

    // 2. Đèn chính rọi từ vòm điện xuống
    const mainSun = new THREE.DirectionalLight(0xffecd0, 1.8);
    mainSun.position.set(0, 18, 8);
    mainSun.castShadow = true;
    mainSun.shadow.mapSize.width = 1024;
    mainSun.shadow.mapSize.height = 1024;
    mainSun.shadow.camera.near = 0.5;
    mainSun.shadow.camera.far = 40;
    this.scene.add(mainSun);

    // 3. Đèn lồng cung đình treo dọc 2 bên hành lang
    const lanternMat = new THREE.MeshStandardMaterial({
      color: 0xff9800,
      emissive: 0xff6f00,
      emissiveIntensity: 0.85,
      roughness: 0.3
    });

    [-8.5, 8.5].forEach(lx => {
      [0.0, 7.0, 14.0].forEach(lz => {
        const lan = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.32, 0.65, 10), lanternMat);
        lan.position.set(lx, 6.5, lz);

        const pLight = new THREE.PointLight(0xffa726, 1.2, 9.0);
        pLight.position.set(lx, 6.5, lz);
        this.candleLights.push(pLight);

        this.scene.add(lan, pLight);
      });
    });
  }

  // =========================================================================
  // HỆ THỐNG KHÓI HƯƠNG TRẦM & HOA SEN TỎA NGÁT
  // =========================================================================
  createParticleSystems() {
    // Hạt khói hương trầm bay nghi ngút từ lư đồng Tam Bảo
    const count = 55;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const alpha = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.2;
      pos[i * 3 + 1] = 1.9 + Math.random() * 2.8;
      pos[i * 3 + 2] = -4.65 + (Math.random() - 0.5) * 0.2;
      alpha[i] = Math.random();
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('alpha', new THREE.BufferAttribute(alpha, 1));

    const smokeMat = new THREE.PointsMaterial({
      color: 0xefd8b8,
      size: 0.22,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.smokeParticles = new THREE.Points(geo, smokeMat);
    this.scene.add(this.smokeParticles);
  }

  // Hiệu ứng rơi que xăm linh ứng
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

  // Hiệu ứng vòng sóng hoa sen nở dưới chân khi chạm sàn
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

    // 1. Ánh sáng nến lung linh tự nhiên
    this.candleLights.forEach((light, i) => {
      light.intensity = 1.2 + Math.sin(time * 7 + i * 2.1) * 0.28 + (Math.random() - 0.5) * 0.08;
    });

    // 2. Vầng hào quang ngũ sắc xoay nhẹ nhàng an lạc quanh Đức Phật
    if (this.haloMesh) {
      this.haloMesh.rotation.z = time * 0.12;
    }

    // 3. Khói hương trầm bay lượn
    if (this.smokeParticles) {
      const pos = this.smokeParticles.geometry.attributes.position.array;
      for (let i = 0; i < pos.length / 3; i++) {
        pos[i * 3 + 1] += delta * 0.45;
        pos[i * 3] += Math.sin(time * 2 + i) * 0.003;
        if (pos[i * 3 + 1] > 4.8) {
          pos[i * 3 + 1] = 1.9;
          pos[i * 3] = (Math.random() - 0.5) * 0.18;
          pos[i * 3 + 2] = -4.65 + (Math.random() - 0.5) * 0.18;
        }
      }
      this.smokeParticles.geometry.attributes.position.needsUpdate = true;
    }

    // 4. Vòng sóng sen nở lan tỏa khi click
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
