import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export class TempleScene {
  constructor(scene) {
    this.scene = scene;
    this.candleLights = [];
    this.smokeParticles = null;
    this.petalParticles = null;
    this.haloMesh = null;
    this.buddhaAuraLight = null;
    this.clock = new THREE.Clock();
    this.ripples = [];
    this.cushionPositions = [];
    this.interactiveStations = {
      woodfish: { x: 7.5, z: -1.2, rotY: Math.PI },
      bell: { x: -7.5, z: -1.0, rotY: Math.PI },
      incenseTable: { x: -3.8, z: -1.0, rotY: Math.PI },
      incenseBurner: { x: 0, z: -1.35, rotY: Math.PI },
      fortuneTable: { x: 3.8, z: -1.0, rotY: Math.PI }
    };

    this.createEnvironment();
    this.createArchitecture();
    this.createTempleEntranceDoors();
    this.createGrandBuddhaAltar();
    this.createGrandOfferingAltar(); // Bàn Đại Lễ Tam Bảo lớn ở chính điện
    this.createTrangNhaDrum(); // Đại Trống Bát Nhã tương xứng với Chuông Đồng
    this.createVenerablesAndBodhisattvas();
    this.createEighteenArhats();
    this.createAuthenticCushionsGrid(); // Hàng bồ đoàn vuông giống hệt ảnh meme
    this.createInteractiveStations(); // Chuông đồng, Mõ gỗ, Bàn lấy hương, Bàn xin xăm
    this.createAtmosphericLighting();
    this.createParticleSystems();
  }

  // =========================================================================
  // HELPER TẠO TEXTURE HOÀNH PHI & CÂU ĐỐI THƯ PHÁP CHỮ VÀNG SƠN SON THIẾP VÀNG
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

    // Viền khung dát vàng đôi hoa văn cung đình
    ctx.strokeStyle = '#f5c33b';
    ctx.lineWidth = 14;
    ctx.strokeRect(16, 16, 992, 224);

    ctx.strokeStyle = '#9e7314';
    ctx.lineWidth = 4;
    ctx.strokeRect(28, 28, 968, 200);

    // Họa tiết hoa mai & góc rồng mạ vàng 4 góc
    ctx.fillStyle = '#ffdf79';
    [[38, 38], [986, 38], [38, 218], [986, 218]].forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fill();
    });

    // Chữ thư pháp đại tự dát vàng rực rỡ
    ctx.font = 'bold 94px "Times New Roman", "Palatino Linotype", "Noto Serif", serif';
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

    // Nền liễn câu đối sơn son màu cánh gián sẫm bóng
    const grad = ctx.createLinearGradient(0, 0, 256, 0);
    grad.addColorStop(0, '#380507');
    grad.addColorStop(0.5, '#6e1014');
    grad.addColorStop(1, '#380507');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 1024);

    // Viền chỉ dát vàng tinh xảo
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
    const fontSize = Math.min(64, Math.floor(860 / (charCount + 0.5)));
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
    this.scene.background = new THREE.Color(0x2d1c14);
    this.scene.fog = new THREE.FogExp2(0x2d1c14, 0.008);

    // Misty mountain backdrop visible through lattice windows
    const mountainMat = new THREE.MeshStandardMaterial({
      color: 0x1a1012,
      roughness: 0.95,
      flatShading: true
    });

    for (let i = -5; i <= 5; i++) {
      const geo = new THREE.ConeGeometry(38 + Math.random() * 8, 28 + Math.random() * 6, 6);
      const m = new THREE.Mesh(geo, mountainMat);
      m.position.set(i * 22 + (Math.random() - 0.5) * 6, 3, -32 - Math.abs(i) * 3);
      m.scale.set(0.9, 0.9 + Math.random() * 0.3, 0.9);
      this.scene.add(m);
    }
  }

  // =========================================================================
  // KIẾN TRÚC ĐẠI HÙNG BẢO ĐIỆN CHÙA VIỆT CỔ TRUYỀN
  // Tường bao sơn vàng hoa quỳ, ốp gỗ gụ chân tường, cửa sổ tròn chữ Thọ,
  // Hoành phi câu đối chữ vàng, xà gồ vì kèo gỗ lim, cờ Phật giáo ngũ sắc
  // =========================================================================
  createArchitecture() {
    const templeGroup = new THREE.Group();

    // 1. SÀN GỖ MUN & LỐI ĐI THẢM GẤM ĐỎ TRUNG TÂM
    const floorGeo = new THREE.PlaneGeometry(32, 42, 16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x331c12,
      roughness: 0.28,
      metalness: 0.15
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, 5);
    floor.receiveShadow = true;
    templeGroup.add(floor);

    // Thảm gấm đỏ dẫn lối vào Chính Điện
    const redCarpet = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, 38),
      new THREE.MeshStandardMaterial({
        color: 0x8b181b,
        roughness: 0.85
      })
    );
    redCarpet.rotation.x = -Math.PI / 2;
    redCarpet.position.set(0, 0.015, 5);
    redCarpet.receiveShadow = true;

    // Viền vàng hoa văn thảm
    [-1.6, 1.6].forEach(cx => {
      const trim = new THREE.Mesh(
        new THREE.PlaneGeometry(0.12, 38),
        new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.4, metalness: 0.6 })
      );
      trim.rotation.x = -Math.PI / 2;
      trim.position.set(cx, 0.02, 5);
      templeGroup.add(trim);
    });
    templeGroup.add(redCarpet);

    // 2. HỆ THỐNG TƯỜNG BAO KÍN 4 PHÍA TRANG NGHIÊM (ENCLOSING WALLS)
    const wallOchreMat = new THREE.MeshStandardMaterial({
      color: 0x9e733a, // Màu vàng đất hoa quỳ chùa cổ
      roughness: 0.88
    });
    const woodBaseMat = new THREE.MeshStandardMaterial({
      color: 0x2e110a, // Gỗ gụ ốp chân tường
      roughness: 0.6
    });

    // Vách Tường Tả (Trái, x = -14) & Vách Tường Hữu (Phải, x = 14)
    [-14, 14].forEach(wx => {
      // Tường chính
      const wall = new THREE.Mesh(new THREE.BoxGeometry(1.0, 14, 38), wallOchreMat);
      wall.position.set(wx, 7, 5);
      wall.receiveShadow = true;

      // Ốp chân tường gỗ gụ cao 3.2m
      const wainscot = new THREE.Mesh(new THREE.BoxGeometry(1.15, 3.2, 38), woodBaseMat);
      wainscot.position.set(wx, 1.6, 5);

      // Phào chỉ nẹp gỗ ngăn cách tường và ốp chân
      const moulding = new THREE.Mesh(
        new THREE.BoxGeometry(1.25, 0.18, 38),
        new THREE.MeshStandardMaterial({ color: 0xbfa018, metalness: 0.75, roughness: 0.3 })
      );
      moulding.position.set(wx, 3.25, 5);

      templeGroup.add(wall, wainscot, moulding);

      // CỬA SỔ TRÒN CHỮ THỌ DÁT VÀNG TRUYỀN THỐNG DỌC HAI VÁCH (Round Longevity Lattice Windows)
      [-4.0, 4.0, 12.0].forEach(wz => {
        const winGroup = new THREE.Group();
        winGroup.position.set(wx > 0 ? wx - 0.45 : wx + 0.45, 7.2, wz);
        winGroup.rotation.y = wx > 0 ? -Math.PI / 2 : Math.PI / 2;

        // Vành cung tròn gỗ mun
        const winRim = new THREE.Mesh(
          new THREE.TorusGeometry(1.65, 0.16, 12, 32),
          new THREE.MeshStandardMaterial({ color: 0x1f0b07, roughness: 0.5 })
        );

        // Chữ Thọ (壽) triện tròn dát vàng tâm điểm
        const thoRing = new THREE.Mesh(
          new THREE.TorusGeometry(1.1, 0.08, 8, 28),
          new THREE.MeshStandardMaterial({ color: 0xf5c33b, metalness: 0.85, roughness: 0.25 })
        );
        const thoBarH1 = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.08, 0.05), thoRing.material);
        const thoBarH2 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.05), thoRing.material);
        thoBarH2.position.y = 0.45;
        const thoBarH3 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.05), thoRing.material);
        thoBarH3.position.y = -0.45;
        const thoBarV1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.1, 0.05), thoRing.material);

        winGroup.add(winRim, thoRing, thoBarH1, thoBarH2, thoBarH3, thoBarV1);
        templeGroup.add(winGroup);
      });
    });

    // Tường Hậu (Phía sau bàn Phật, z = -10)
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(29, 14, 1.2), woodBaseMat);
    backWall.position.set(0, 7, -10.2);
    backWall.receiveShadow = true;
    templeGroup.add(backWall);

    // 3. HÀNG CỘT LIM SƠN SON THIẾP VÀNG VỮNG CHÃI
    const pillarGeo = new THREE.CylinderGeometry(0.62, 0.68, 12.5, 24);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x36120b, roughness: 0.42 });
    const baseGeo = new THREE.CylinderGeometry(0.92, 1.05, 0.55, 16);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.85 });
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xf5c33b, metalness: 0.85, roughness: 0.2 });

    const pillarCoords = [
      [-8.5, -2.0], [-8.5, 5.0], [-8.5, 12.5],
      [8.5, -2.0], [8.5, 5.0], [8.5, 12.5]
    ];

    pillarCoords.forEach(([px, pz]) => {
      const p = new THREE.Mesh(pillarGeo, pillarMat);
      p.position.set(px, 6.25, pz);
      p.castShadow = true;
      p.receiveShadow = true;

      const base = new THREE.Mesh(baseGeo, baseMat);
      base.position.set(px, 0.27, pz);

      const ringTop = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.08, 8, 24), ringMat);
      ringTop.rotation.x = Math.PI / 2;
      ringTop.position.set(px, 11.2, pz);

      templeGroup.add(p, base, ringTop);
    });

    // 4. BỨC BẢO ẢNH PHẬT TỔ LINH THIÊNG CHUẨN XÁC THEO ẢNH CỦA NGƯỜI DÙNG
    const textureLoader = new THREE.TextureLoader();
    const phatToTexture = textureLoader.load('/phat-to.jpg');
    phatToTexture.colorSpace = THREE.SRGBColorSpace;

    const frameW = 6.8;
    const frameH = 9.2;
    const pictureMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(frameW, frameH),
      new THREE.MeshStandardMaterial({
        map: phatToTexture,
        roughness: 0.25,
        metalness: 0.1,
        emissive: 0x221305,
        emissiveIntensity: 0.25
      })
    );
    pictureMesh.position.set(0, 8.0, -9.45);

    // Khung tranh chạm rồng gỗ gụ & viền chỉ dát vàng 24K
    const outerFrame = new THREE.Mesh(
      new THREE.BoxGeometry(frameW + 1.1, frameH + 1.1, 0.25),
      new THREE.MeshStandardMaterial({ color: 0x220b06, roughness: 0.4 })
    );
    outerFrame.position.set(0, 8.0, -9.56);

    const innerGoldFrame = new THREE.Mesh(
      new THREE.BoxGeometry(frameW + 0.42, frameH + 0.42, 0.16),
      new THREE.MeshStandardMaterial({
        color: 0xf5ba2a,
        roughness: 0.16,
        metalness: 0.92,
        emissive: 0x5a3d08,
        emissiveIntensity: 0.4
      })
    );
    innerGoldFrame.position.set(0, 8.0, -9.5);

    // Mái ngói đao cong che trên linh ảnh
    const canopyRoof = new THREE.Mesh(
      new THREE.BoxGeometry(frameW + 1.8, 0.5, 1.4),
      new THREE.MeshStandardMaterial({ color: 0x8a241c, roughness: 0.55 })
    );
    canopyRoof.position.set(0, 13.0, -9.0);

    const canopyTrim = new THREE.Mesh(
      new THREE.BoxGeometry(frameW + 2.1, 0.18, 1.55),
      new THREE.MeshStandardMaterial({ color: 0xf5c33b, metalness: 0.85, roughness: 0.25 })
    );
    canopyTrim.position.set(0, 13.25, -9.0);

    // Đèn rọi chuyên dụng chiếu sáng linh ảnh Phật Tổ
    const altarSpot = new THREE.SpotLight(0xfffaea, 5.5, 30, Math.PI / 3.0, 0.45);
    altarSpot.position.set(0, 11.5, -2.2);
    altarSpot.target = pictureMesh;
    templeGroup.add(altarSpot);

    templeGroup.add(outerFrame, innerGoldFrame, pictureMesh, canopyRoof, canopyTrim);

    // 5. HOÀNH PHI ĐẠI TỰ THƯ PHÁP CHỮ VÀNG CHÍNH ĐIỆN (GRAND CALLIGRAPHY SIGNBOARDS)
    // Hoành phi trung tâm số 1: "ĐẠI HÙNG BẢO ĐIỆN"
    const signTexDaiHung = this.generateSignboardTexture('ĐẠI HÙNG BẢO ĐIỆN', '大 雄 寶 殿');
    const signBoardMain = new THREE.Mesh(
      new THREE.BoxGeometry(5.4, 1.45, 0.18),
      new THREE.MeshStandardMaterial({ map: signTexDaiHung, roughness: 0.35, metalness: 0.25 })
    );
    signBoardMain.position.set(0, 10.6, -3.8);

    const signFrameMain = new THREE.Mesh(
      new THREE.BoxGeometry(5.65, 1.65, 0.14),
      new THREE.MeshStandardMaterial({ color: 0x1f0b07, roughness: 0.45 })
    );
    signFrameMain.position.set(0, 10.6, -3.88);

    // Hoành phi số 2 phía trước: "VẠN ĐỨC TRANG NGHIÊM"
    const signTexVanDuc = this.generateSignboardTexture('VẠN ĐỨC TRANG NGHIÊM', '萬 德 莊 嚴');
    const signBoardFront = new THREE.Mesh(
      new THREE.BoxGeometry(4.8, 1.35, 0.18),
      new THREE.MeshStandardMaterial({ map: signTexVanDuc, roughness: 0.35, metalness: 0.25 })
    );
    signBoardFront.position.set(0, 10.2, 5.8);

    templeGroup.add(signBoardMain, signFrameMain, signBoardFront);

    // 6. ĐÔI CÂU ĐỐI LÒNG MÁNG SƠN SON THIẾP VÀNG TRÊN CÁC CỘT LIM (PAIRS OF COUPLETS)
    // ĐÔI CÂU ĐỐI CỘT TRUNG TÂM (Cột tại z = 5.0):
    // Cột Tả: "VẠN CỔ LINH THANH QUY PHẬT ĐẠO"
    const coupletTexLeft = this.generateCoupletTexture('VẠN CỔ LINH THANH QUY PHẬT ĐẠO');
    const coupletLeft = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 5.8, 0.12),
      new THREE.MeshStandardMaterial({ map: coupletTexLeft, roughness: 0.35, metalness: 0.25 })
    );
    coupletLeft.position.set(-7.8, 6.2, 5.0);
    coupletLeft.rotation.y = Math.PI / 2;

    // Cột Hữu: "THIÊN THU THẮNG CẢNH TÍCH TÂY THIÊN"
    const coupletTexRight = this.generateCoupletTexture('THIÊN THU THẮNG CẢNH TÍCH TÂY THIÊN');
    const coupletRight = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 5.8, 0.12),
      new THREE.MeshStandardMaterial({ map: coupletTexRight, roughness: 0.35, metalness: 0.25 })
    );
    coupletRight.position.set(7.8, 6.2, 5.0);
    coupletRight.rotation.y = -Math.PI / 2;

    // ĐÔI CÂU ĐỐI CỘT TIỀN TẾ (Cột tại z = 12.5):
    // Cột Tả: "PHẬT NHẬT TĂNG HUY PHÁP LUÂN THƯỜNG CHUYỂN"
    const coupletTexLeft2 = this.generateCoupletTexture('PHẬT NHẬT TĂNG HUY PHÁP LUÂN THƯỜNG CHUYỂN');
    const coupletLeft2 = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 5.8, 0.12),
      new THREE.MeshStandardMaterial({ map: coupletTexLeft2, roughness: 0.35, metalness: 0.25 })
    );
    coupletLeft2.position.set(-7.8, 6.2, 12.5);
    coupletLeft2.rotation.y = Math.PI / 2;

    // Cột Hữu: "PHONG ĐIỀU VŨ THUẬN QUỐC THÁI DÂN AN"
    const coupletTexRight2 = this.generateCoupletTexture('PHONG ĐIỀU VŨ THUẬN QUỐC THÁI DÂN AN');
    const coupletRight2 = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 5.8, 0.12),
      new THREE.MeshStandardMaterial({ map: coupletTexRight2, roughness: 0.35, metalness: 0.25 })
    );
    coupletRight2.position.set(7.8, 6.2, 12.5);
    coupletRight2.rotation.y = -Math.PI / 2;

    templeGroup.add(coupletLeft, coupletRight, coupletLeft2, coupletRight2);

    // 7. CỜ PHẬT GIÁO NGŨ SẮC DỌC CÁC CỘT (FIVE-COLORED BUDDHIST BANNERS)
    const buddhistColors = [0x0055a5, 0xffd700, 0xdd1111, 0xfafafa, 0xff7700];
    [-8.5, 8.5].forEach(bx => {
      [1.5, 9.0].forEach(bz => {
        const flagGroup = new THREE.Group();
        flagGroup.position.set(bx > 0 ? bx - 0.75 : bx + 0.75, 8.5, bz);

        buddhistColors.forEach((col, idx) => {
          const stripe = new THREE.Mesh(
            new THREE.BoxGeometry(0.12, 4.2, 0.02),
            new THREE.MeshStandardMaterial({ color: col, roughness: 0.6 })
          );
          stripe.position.set((idx - 2) * 0.12, -2.1, 0);
          flagGroup.add(stripe);
        });

        templeGroup.add(flagGroup);
      });
    });

    // 8. VÌ KÈO, RƯỜNG CỘT & XÀ GỒ GỖ LIM CHẠM KHẮC (TRADITIONAL ROOF TRUSSES)
    for (let bz = -8; bz <= 18; bz += 4.5) {
      // Xà ngang chính
      const tieBeam = new THREE.Mesh(
        new THREE.BoxGeometry(28, 0.55, 0.75),
        new THREE.MeshStandardMaterial({ color: 0x2e110a, roughness: 0.55 })
      );
      tieBeam.position.set(0, 11.6, bz);

      // Đấu củng chạm lộng
      [-8.5, 8.5].forEach(cx => {
        const bracket = new THREE.Mesh(
          new THREE.BoxGeometry(1.6, 0.45, 0.8),
          new THREE.MeshStandardMaterial({ color: 0x421a10, roughness: 0.5 })
        );
        bracket.position.set(cx, 11.2, bz);
        templeGroup.add(bracket);
      });

      // Đèn lồng bát giác chữ Phật treo từ xà nhà
      if (bz === -2 || bz === 7) {
        [-4.5, 4.5].forEach(lx => {
          const lantern = new THREE.Mesh(
            new THREE.CylinderGeometry(0.35, 0.45, 0.7, 8),
            new THREE.MeshStandardMaterial({
              color: 0xcc2222,
              roughness: 0.3,
              emissive: 0x8a1515,
              emissiveIntensity: 0.6
            })
          );
          lantern.position.set(lx, 9.8, bz);

          const lCord = new THREE.Mesh(
            new THREE.CylinderGeometry(0.015, 0.015, 1.4, 6),
            new THREE.MeshStandardMaterial({ color: 0xbfa018, metalness: 0.8 })
          );
          lCord.position.set(lx, 10.8, bz);

          const lLight = new THREE.PointLight(0xffa834, 1.2, 8);
          lLight.position.set(lx, 9.6, bz);

          templeGroup.add(lantern, lCord, lLight);
        });
      }

      templeGroup.add(tieBeam);
    }

    this.scene.add(templeGroup);
  }

  // =========================================================================
  // CỬA CHÙA (TEMPLE ENTRANCE AT Z = 19.5)
  // =========================================================================
  createTempleEntranceDoors() {
    const entranceGroup = new THREE.Group();
    entranceGroup.position.set(0, 0, 19.5);

    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x240c08, roughness: 0.6 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x471812, roughness: 0.5 });
    const goldTrimMat = new THREE.MeshStandardMaterial({ color: 0xf4b41a, metalness: 0.75, roughness: 0.25 });

    const wallLeft = new THREE.Mesh(new THREE.BoxGeometry(13.5, 14, 0.8), darkWoodMat);
    wallLeft.position.set(-11.25, 7, 0);

    const wallRight = new THREE.Mesh(new THREE.BoxGeometry(13.5, 14, 0.8), darkWoodMat);
    wallRight.position.set(11.25, 7, 0);

    const archTop = new THREE.Mesh(new THREE.BoxGeometry(9.0, 5.0, 0.9), darkWoodMat);
    archTop.position.set(0, 11.5, 0);

    // Hoành phi sơn son thếp vàng "ĐẠI HÙNG BẢO ĐIỆN"
    const signBoard = new THREE.Mesh(
      new THREE.BoxGeometry(5.4, 1.4, 0.2),
      new THREE.MeshStandardMaterial({ color: 0x821316, roughness: 0.4 })
    );
    signBoard.position.set(0, 9.2, 0.55);

    const signTrim = new THREE.Mesh(new THREE.BoxGeometry(5.6, 1.55, 0.15), goldTrimMat);
    signTrim.position.set(0, 9.2, 0.5);

    // Đôi cánh cửa gỗ lim mở rộng chào đón
    const doorL = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 8.5, 0.18),
      new THREE.MeshStandardMaterial({ color: 0x5a1811, roughness: 0.45 })
    );
    doorL.position.set(-3.2, 4.35, -1.2);
    doorL.rotation.y = Math.PI / 3.2;

    const doorR = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 8.5, 0.18),
      new THREE.MeshStandardMaterial({ color: 0x5a1811, roughness: 0.45 })
    );
    doorR.position.set(3.2, 4.35, -1.2);
    doorR.rotation.y = -Math.PI / 3.2;

    // Ngạch cửa & bậc tam cấp
    const threshold = new THREE.Mesh(
      new THREE.BoxGeometry(9.0, 0.22, 0.6),
      new THREE.MeshStandardMaterial({ color: 0x3d2b20, roughness: 0.8 })
    );
    threshold.position.set(0, 0.11, 0);

    for (let step = 1; step <= 3; step++) {
      const st = new THREE.Mesh(
        new THREE.BoxGeometry(9.0 + step * 0.4, 0.18, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x332822, roughness: 0.85 })
      );
      st.position.set(0, -step * 0.18 + 0.05, step * 0.8);
      entranceGroup.add(st);
    }

    entranceGroup.add(wallLeft, wallRight, archTop, signBoard, signTrim, doorL, doorR, threshold);
    this.scene.add(entranceGroup);
  }

  // =========================================================================
  // TÒA KIM THÂN PHẬT TỔ THÍCH CA & KHÁM THỜ TAM CẤP HOÀNG GIA DÁT VÀNG
  // Bảo ảnh linh thiêng của người dùng ngự giữa Khám Thờ 3 tầng mái đao cong,
  // Đôi tàn lọng hoàng gia, vầng hào quang ngũ sắc tỏa rạng mười phương
  // =========================================================================
  createGrandBuddhaAltar() {
    const altarGroup = new THREE.Group();
    altarGroup.position.set(0, 0, -8);

    // Bục Tam Cấp gỗ gụ sơn son thếp vàng uy nghiêm
    for (let s = 0; s < 3; s++) {
      const stepDais = new THREE.Mesh(
        new THREE.BoxGeometry(12.5 - s * 1.6, 0.45, 6.8 - s * 0.9),
        new THREE.MeshStandardMaterial({ color: 0x240d07, roughness: 0.45 })
      );
      stepDais.position.set(0, 0.22 + s * 0.45, -s * 0.35);
      stepDais.receiveShadow = true;
      altarGroup.add(stepDais);

      const trim = new THREE.Mesh(
        new THREE.BoxGeometry(12.7 - s * 1.6, 0.08, 7.0 - s * 0.9),
        new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.88, roughness: 0.25 })
      );
      trim.position.set(0, 0.45 + s * 0.45, -s * 0.35);
      altarGroup.add(trim);
    }

    // TÒA SEN VÀNG BÁT GIÁC CỬU PHẨM (NINE-TIER OCTAGONAL GOLDEN LOTUS THRONE)
    const lotusMat = new THREE.MeshStandardMaterial({
      color: 0xffd24d,
      roughness: 0.16,
      metalness: 0.92,
      emissive: 0x5a3d08,
      emissiveIntensity: 0.35
    });

    const lotusPed = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 4.2, 1.2, 8), lotusMat);
    lotusPed.position.set(0, 1.95, -0.6);
    altarGroup.add(lotusPed);

    // 2 lớp cánh sen vàng chạm trổ ôm đỡ lấy khám thờ
    for (let l = 0; l < 2; l++) {
      const pRad = 3.8 - l * 0.4;
      const pY = 2.4 + l * 0.45;
      const pCount = 16 - l * 2;
      for (let i = 0; i < pCount; i++) {
        const ang = (i / pCount) * Math.PI * 2 + (l * Math.PI) / pCount;
        const petal = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.3, 5), lotusMat);
        petal.position.set(Math.cos(ang) * pRad, pY, Math.sin(ang) * pRad - 0.6);
        petal.rotation.x = Math.PI / 4.2;
        petal.rotation.y = -ang + Math.PI / 2;
        petal.scale.set(1.15, 1.0, 0.45);
        altarGroup.add(petal);
      }
    }

    // VẦNG HÀO QUANG CẦU VỒNG NGŨ SẮC NAN HOA XOAY VẦN (RAINBOW AURA HALO)
    const haloCanvas = document.createElement('canvas');
    haloCanvas.width = 512;
    haloCanvas.height = 512;
    const hctx = haloCanvas.getContext('2d');
    hctx.translate(256, 256);

    const hgrad = hctx.createRadialGradient(0, 0, 10, 0, 0, 250);
    hgrad.addColorStop(0, '#ffffff');
    hgrad.addColorStop(0.2, '#fff4b8');
    hgrad.addColorStop(0.5, '#ffd15c');
    hgrad.addColorStop(0.85, 'rgba(255, 140, 0, 0.6)');
    hgrad.addColorStop(1, 'rgba(180, 40, 0, 0)');
    hctx.fillStyle = hgrad;
    hctx.beginPath();
    hctx.arc(0, 0, 250, 0, Math.PI * 2);
    hctx.fill();

    const rainbowColors = [
      '#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#00c7be', '#30b0c7', '#007aff', '#5856d6', '#af52de', '#ff2d55'
    ];
    for (let ray = 0; ray < 64; ray++) {
      const rayAngle = (ray / 64) * Math.PI * 2;
      hctx.save();
      hctx.rotate(rayAngle);
      hctx.fillStyle = rainbowColors[ray % rainbowColors.length];
      hctx.globalAlpha = 0.38;
      hctx.beginPath();
      hctx.moveTo(0, 0);
      hctx.lineTo(-4, 250);
      hctx.lineTo(4, 250);
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
    const rainbowHalo = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 9.6), haloMat);
    rainbowHalo.position.set(0, 7.8, -1.35);
    altarGroup.add(rainbowHalo);
    this.haloMesh = rainbowHalo;

    // ĐÔI TÀN LỌNG BÁU HOÀNG GIA CHE HAI BÊN PHẬT ĐIỆN (ROYAL GOLDEN CANOPIES)
    [-5.6, 5.6].forEach(lx => {
      const canopyGroup = new THREE.Group();
      canopyGroup.position.set(lx, 0, -1.0);

      // Cán lọng bằng gỗ chạm rồng dát vàng
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.08, 9.5, 12),
        new THREE.MeshStandardMaterial({ color: 0x8a6320, metalness: 0.7, roughness: 0.3 })
      );
      pole.position.y = 4.75;

      // Đế cắm lọng
      const cBase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.45, 0.55, 0.6, 12),
        new THREE.MeshStandardMaterial({ color: 0x2e110a, roughness: 0.5 })
      );
      cBase.position.y = 0.3;

      // Tán lọng lụa vàng 3 tầng
      for (let t = 0; t < 3; t++) {
        const tier = new THREE.Mesh(
          new THREE.ConeGeometry(1.4 - t * 0.25, 0.45, 16),
          new THREE.MeshStandardMaterial({ color: 0xe6a817, roughness: 0.4, metalness: 0.3 })
        );
        tier.position.y = 8.5 + t * 0.55;

        // Dải tua rua đỏ rủ xuống quanh vành lọng
        const fringe = new THREE.Mesh(
          new THREE.CylinderGeometry(1.42 - t * 0.25, 1.42 - t * 0.25, 0.35, 16, 1, true),
          new THREE.MeshStandardMaterial({ color: 0xaa1818, roughness: 0.6, side: THREE.DoubleSide })
        );
        fringe.position.y = 8.35 + t * 0.55;
        canopyGroup.add(tier, fringe);
      }

      canopyGroup.add(pole, cBase);
      altarGroup.add(canopyGroup);
    });

    // ĐÔI ĐÈN THỜ HOA SEN PHA LÊ LUNG LINH PHÁT SÁNG
    [-4.2, 4.2].forEach(cx => {
      const stand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.28, 2.2, 14),
        new THREE.MeshStandardMaterial({ color: 0xbfa018, metalness: 0.85, roughness: 0.2 })
      );
      stand.position.set(cx, 1.9, 0.4);

      const lotusFlower = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 14, 14),
        new THREE.MeshStandardMaterial({
          color: 0xff3b6f,
          emissive: 0xff1453,
          emissiveIntensity: 0.85,
          roughness: 0.2
        })
      );
      lotusFlower.scale.set(1.2, 0.8, 1.2);
      lotusFlower.position.set(cx, 3.1, 0.4);

      const lampLight = new THREE.PointLight(0xff4081, 2.5, 12);
      lampLight.position.set(cx, 3.2, 0.4);
      this.candleLights.push(lampLight);

      altarGroup.add(stand, lotusFlower, lampLight);
    });

    // Ánh sáng quang minh rực rỡ từ Phật
    this.buddhaAuraLight = new THREE.PointLight(0xffbe4d, 5.5, 26);
    this.buddhaAuraLight.position.set(0, 7.5, 0.5);
    altarGroup.add(this.buddhaAuraLight);

    this.scene.add(altarGroup);
  }

  // =========================================================================
  // BÀN ĐẠI LỄ TAM BẢO CHÍNH ĐIỆN (GRAND CEREMONIAL OFFERING ALTARE)
  // Bàn thờ gỗ gụ chạm rồng, bộ ngũ sự đồng (đỉnh đồng, hạc ngự rùa, chân nến),
  // Mâm ngũ quả, đĩa oản đỏ, đôi lọ hoa sen & cúc đại đóa, kỷ 3 đài nước
  // =========================================================================
  createGrandOfferingAltar() {
    const tableGroup = new THREE.Group();
    tableGroup.position.set(0, 0, -2.7);

    // 1. Bàn thờ đại lễ gỗ gụ sơn son chân quỳ chạm lộng
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x2b0d06, roughness: 0.38 });
    const goldTrimMat = new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.88, roughness: 0.22 });

    const mainTable = new THREE.Mesh(new THREE.BoxGeometry(4.8, 1.1, 1.5), tableMat);
    mainTable.position.y = 0.55;
    mainTable.castShadow = true;
    mainTable.receiveShadow = true;

    // Dạ cá viền chỉ vàng chạm hoa sen
    const tableApron = new THREE.Mesh(new THREE.BoxGeometry(4.9, 0.22, 1.55), goldTrimMat);
    tableApron.position.y = 0.98;

    // Khăn phủ gấm đỏ hoa văn chữ Vạn vàng kim
    const runner = new THREE.Mesh(
      new THREE.BoxGeometry(4.6, 0.04, 1.35),
      new THREE.MeshStandardMaterial({ color: 0x9e1215, roughness: 0.6 })
    );
    runner.position.y = 1.12;

    tableGroup.add(mainTable, tableApron, runner);

    // 2. BỘ NGŨ SỰ ĐỒNG ĐÚC (FIVE CEREMONIAL BRONZE PIECES)
    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0xb58b3c,
      metalness: 0.88,
      roughness: 0.22,
      emissive: 0x221504,
      emissiveIntensity: 0.15
    });

    // A. ĐỈNH ĐỒNG TRẦM HƯƠNG TRUNG TÂM (LƯ ĐỒNG TAM BẢO)
    const burnerGroup = new THREE.Group();
    burnerGroup.position.set(0, 1.14, 0);

    const burnerBody = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.46, 0.6, 20), bronzeMat);
    burnerBody.position.y = 0.3;
    const burnerRim = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.07, 12, 28), goldTrimMat);
    burnerRim.rotation.x = Math.PI / 2;
    burnerRim.position.y = 0.6;

    // 3 chân vạc đồng chạm đầu lân
    for (let f = 0; f < 3; f++) {
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.09, 0.32, 8), bronzeMat);
      const ang = (f / 3) * Math.PI * 2;
      foot.position.set(Math.cos(ang) * 0.42, 0.12, Math.sin(ang) * 0.42);
      burnerGroup.add(foot);
    }

    // Cát vàng mịn trong lư
    const sand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.54, 0.54, 0.08, 18),
      new THREE.MeshStandardMaterial({ color: 0xd4b07b, roughness: 0.9 })
    );
    sand.position.y = 0.54;

    // 3 nén tâm hương bén lửa đỏ rực khói bay nghi ngút
    for (let i = -1; i <= 1; i++) {
      const stick = new THREE.Mesh(
        new THREE.CylinderGeometry(0.01, 0.01, 0.8, 6),
        new THREE.MeshBasicMaterial({ color: 0xaa2211 })
      );
      stick.position.set(i * 0.14, 0.92, 0);

      const tip = new THREE.Mesh(
        new THREE.SphereGeometry(0.026, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xff3b00 })
      );
      tip.position.set(i * 0.14, 1.32, 0);
      burnerGroup.add(stick, tip);
    }

    burnerGroup.add(burnerBody, burnerRim, sand);
    this.burnerGroup = burnerGroup;
    tableGroup.add(burnerGroup);

    // B. ĐÔI HẠC NGỰ LƯNG RÙA ĐỒNG (TWIN SACRED BRONZE CRANES ON TURTLES)
    [-1.25, 1.25].forEach((hx, idx) => {
      const craneGroup = new THREE.Group();
      craneGroup.position.set(hx, 1.14, -0.05);
      craneGroup.rotation.y = idx === 0 ? Math.PI / 6 : -Math.PI / 6;

      // Rùa đồng
      const turtle = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), bronzeMat);
      turtle.scale.set(1.4, 0.6, 1.1);
      turtle.position.y = 0.08;

      // Chim Hạc cao thanh thoát đứng trên lưng rùa
      const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.75, 8), bronzeMat);
      legs.position.y = 0.48;

      const cBody = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), bronzeMat);
      cBody.scale.set(0.9, 1.5, 0.9);
      cBody.position.set(0, 0.92, 0);

      const cNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.03, 0.55, 8), bronzeMat);
      cNeck.position.set(0, 1.3, 0.08);

      const cHead = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 8), bronzeMat);
      cHead.position.set(0, 1.58, 0.14);

      // Cành sen ngậm trong mỏ hạc
      const lotusInBeak = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.22, 6), goldTrimMat);
      lotusInBeak.rotation.x = Math.PI / 3;
      lotusInBeak.position.set(0, 1.62, 0.24);

      craneGroup.add(turtle, legs, cBody, cNeck, cHead, lotusInBeak);
      tableGroup.add(craneGroup);
    });

    // C. ĐÔI CHÂN NẾN ĐỒNG DÂNG SÁNG TRÊN BÀN THỜ
    [-1.9, 1.9].forEach(cx => {
      const candleStand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.24, 0.9, 12),
        bronzeMat
      );
      candleStand.position.set(cx, 1.59, -0.05);

      const waxCandle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.065, 0.48, 10),
        new THREE.MeshStandardMaterial({ color: 0xdd2222, roughness: 0.3 })
      );
      waxCandle.position.set(cx, 2.22, -0.05);

      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.045, 0.18, 8),
        new THREE.MeshBasicMaterial({ color: 0xff9900 })
      );
      flame.position.set(cx, 2.52, -0.05);

      const cLight = new THREE.PointLight(0xffa834, 1.6, 7);
      cLight.position.set(cx, 2.55, -0.05);
      this.candleLights.push(cLight);

      tableGroup.add(candleStand, waxCandle, flame, cLight);
    });

    // 3. MÂM BỒNG NGŨ QUẢ TƯƠI THẮM DÂNG PHẬT (PEDESTAL FRUIT OFFERING)
    const fruitStand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.26, 0.16, 16),
      goldTrimMat
    );
    fruitStand.position.set(-0.65, 1.22, 0.32);

    // Chuối tiêu xanh, bưởi vàng, dưa hấu đỏ, thanh long
    const bananaBase = new THREE.Mesh(
      new THREE.TorusGeometry(0.3, 0.08, 8, 16, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0x4a8522, roughness: 0.5 })
    );
    bananaBase.rotation.x = Math.PI / 2;
    bananaBase.position.set(-0.65, 1.34, 0.32);

    const pomelo = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 14, 14),
      new THREE.MeshStandardMaterial({ color: 0xe6b800, roughness: 0.4 })
    );
    pomelo.position.set(-0.65, 1.48, 0.32);

    const dragonFruit = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 10, 10),
      new THREE.MeshStandardMaterial({ color: 0xd91456, roughness: 0.4 })
    );
    dragonFruit.position.set(-0.52, 1.58, 0.36);

    tableGroup.add(fruitStand, bananaBase, pomelo, dragonFruit);

    // 4. ĐĨA OẢN ĐỎ TRUYỀN THỐNG DÂNG CÚNG (CRIMSON OFFERING CONES)
    const oanStand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.26, 0.16, 16),
      goldTrimMat
    );
    oanStand.position.set(0.65, 1.22, 0.32);

    const oanCenter = new THREE.Mesh(
      new THREE.ConeGeometry(0.18, 0.42, 8),
      new THREE.MeshStandardMaterial({ color: 0xd61313, roughness: 0.3, metalness: 0.2 })
    );
    oanCenter.position.set(0.65, 1.45, 0.32);

    [-0.12, 0.12].forEach(ox => {
      const oanMini = new THREE.Mesh(
        new THREE.ConeGeometry(0.12, 0.28, 8),
        new THREE.MeshStandardMaterial({ color: 0xd61313, roughness: 0.3, metalness: 0.2 })
      );
      oanMini.position.set(0.65 + ox, 1.36, 0.38);
      tableGroup.add(oanMini);
    });
    tableGroup.add(oanStand, oanCenter);

    // 5. KỶ 3 ĐÀI NƯỚC TAM BẢO CÚNG DƯỜNG (3 PURE WATER CUPS)
    const waterTray = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.05, 0.26),
      new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.5 })
    );
    waterTray.position.set(0, 1.16, 0.52);
    tableGroup.add(waterTray);

    [-0.26, 0, 0.26].forEach(wx => {
      const cup = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.05, 0.12, 12),
        new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.2, metalness: 0.1 })
      );
      cup.position.set(wx, 1.24, 0.52);

      const water = new THREE.Mesh(
        new THREE.CylinderGeometry(0.058, 0.058, 0.02, 12),
        new THREE.MeshStandardMaterial({ color: 0x64b5f6, roughness: 0.1, transparent: true, opacity: 0.85 })
      );
      water.position.set(wx, 1.29, 0.52);

      tableGroup.add(cup, water);
    });

    // 6. ĐÔI LỌ HOA SEN HỒNG & HOA CÚC ĐẠI ĐÓA VÀNG
    [-2.25, 2.25].forEach((vx, idx) => {
      const vase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.34, 0.95, 16),
        new THREE.MeshStandardMaterial({ color: 0x648a7c, roughness: 0.2, metalness: 0.15 })
      );
      vase.position.set(vx, 1.62, 0.1);

      // Bó hoa cúc vàng đại đóa và hoa sen
      for (let f = 0; f < 7; f++) {
        const fAng = (f / 7) * Math.PI * 2;
        const fl = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 8, 8),
          new THREE.MeshStandardMaterial({ color: idx === 0 ? 0xffc400 : 0xf06292, roughness: 0.4 })
        );
        fl.position.set(vx + Math.cos(fAng) * 0.18, 2.15 + (f % 2) * 0.12, 0.1 + Math.sin(fAng) * 0.18);
        tableGroup.add(fl);
      }

      tableGroup.add(vase);
    });

    this.scene.add(tableGroup);
  }

  // =========================================================================
  // ĐẠI TRỐNG BÁT NHÃ (TRỐNG SẤM GỖ MÍT DA TRÂU SƠN SON VẼ RỒNG)
  // Tương xứng hoàn hảo với Đại Hồng Chung: Chuông bên Tả, Trống bên Hữu
  // =========================================================================
  createTrangNhaDrum() {
    const drumGroup = new THREE.Group();
    drumGroup.position.set(7.5, 0, -2.2);

    // Giá đỡ trống bằng gỗ lim chạm trổ rồng mây
    const timberMat = new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.6 });
    const postL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 5.2, 12), timberMat);
    postL.position.set(-1.4, 2.6, 0);
    const postR = postL.clone();
    postR.position.set(1.4, 2.6, 0);

    const crossBottom = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.35, 0.35), timberMat);
    crossBottom.position.set(0, 0.6, 0);

    const crossTop = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.35, 0.35), timberMat);
    crossTop.position.set(0, 4.8, 0);

    // Mái che trống chạm ngói đao cong
    const drumRoof = new THREE.Mesh(
      new THREE.BoxGeometry(3.8, 0.45, 2.2),
      new THREE.MeshStandardMaterial({ color: 0x821316, roughness: 0.5 })
    );
    drumRoof.position.set(0, 5.2, 0);

    // THÂN TRỐNG BÁT NHÃ GỖ MÍT SƠN ĐỎ THẮM VẼ RỒNG MẠ VÀNG
    const drumBodyMat = new THREE.MeshStandardMaterial({
      color: 0x941518,
      roughness: 0.35,
      metalness: 0.15
    });
    const drumBody = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.2, 24), drumBodyMat);
    drumBody.rotation.z = Math.PI / 2;
    drumBody.position.set(0, 2.8, 0);

    // Mặt da trâu màu ngà cổ kính ở 2 đầu trống
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xd9c29c, roughness: 0.75 });
    [-1.11, 1.11].forEach(dx => {
      const drumFace = new THREE.Mesh(new THREE.CircleGeometry(1.18, 24), skinMat);
      drumFace.rotation.y = dx > 0 ? Math.PI / 2 : -Math.PI / 2;
      drumFace.position.set(dx, 2.8, 0);

      // Vành đinh đồng ghim da trâu
      const rimStuds = new THREE.Mesh(
        new THREE.TorusGeometry(1.18, 0.05, 8, 28),
        new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.85, roughness: 0.3 })
      );
      rimStuds.rotation.y = Math.PI / 2;
      rimStuds.position.set(dx, 2.8, 0);

      drumGroup.add(drumFace, rimStuds);
    });

    // Dùi trống gỗ bọc vải đỏ treo bên giá
    const drumMallet = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 1.1, 8),
      timberMat
    );
    drumMallet.position.set(0, 1.8, 1.1);
    drumMallet.rotation.z = Math.PI / 3;

    drumGroup.add(postL, postR, crossBottom, crossTop, drumRoof, drumBody, drumMallet);
    this.scene.add(drumGroup);
  }

  // =========================================================================
  // BỒ TÁT QUÁN THẾ ÂM & NHỊ VỊ TÔN GIẢ A NAN - CA DIẾP
  // Bạch Y Quán Âm bình cam lộ cành dương liễu, Nhị đại đệ tử hầu cận
  // =========================================================================
  createVenerablesAndBodhisattvas() {
    const goldRobeMat = new THREE.MeshStandardMaterial({ color: 0xd68910, roughness: 0.42 });
    const whiteRobeMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.28 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffdfbe, roughness: 0.45 });
    const lotusMat = new THREE.MeshStandardMaterial({ color: 0xb58900, metalness: 0.65, roughness: 0.25 });
    const woodPlaqueMat = new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.5 });

    // 1. TÔN GIẢ A NAN (Bên Tả, x = -3.2, z = -6.2)
    const ananda = new THREE.Group();
    ananda.position.set(-3.2, 0, -6.2);

    const aPed = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.7, 16), lotusMat);
    aPed.position.y = 0.35;

    // Thân áo cà sa vàng nghệ nếp gấp
    const aBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.58, 2.6, 16), goldRobeMat);
    aBody.position.y = 2.0;

    const aSash = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.1, 8, 20, Math.PI), goldRobeMat);
    aSash.rotation.z = -Math.PI / 3;
    aSash.position.set(0, 2.2, 0.1);

    // Đầu thanh tú cung kính
    const aHead = new THREE.Mesh(new THREE.SphereGeometry(0.38, 18, 18), skinMat);
    aHead.position.y = 3.55;

    // Hai tay chắp búp sen cung kính niệm Phật (Anjali Mudra)
    const aHandsGroup = new THREE.Group();
    aHandsGroup.position.set(0, 2.6, 0.38);
    const aHandL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.32, 0.08), skinMat);
    aHandL.position.x = -0.05;
    aHandL.rotation.z = 0.15;
    const aHandR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.32, 0.08), skinMat);
    aHandR.position.x = 0.05;
    aHandR.rotation.z = -0.15;
    aHandsGroup.add(aHandL, aHandR);

    // Biển vàng danh hiệu
    const aPlaque = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.32, 0.05),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Tôn Giả A Nan') })
    );
    aPlaque.position.set(0, 0.35, 0.9);

    ananda.add(aPed, aBody, aSash, aHead, aHandsGroup, aPlaque);
    ananda.rotation.y = Math.PI / 5.5;
    this.scene.add(ananda);

    // 2. TÔN GIẢ CA DIẾP (Bên Hữu, x = 3.2, z = -6.2)
    const kasyapa = new THREE.Group();
    kasyapa.position.set(3.2, 0, -6.2);

    const kPed = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.7, 16), lotusMat);
    kPed.position.y = 0.35;

    const kBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.58, 2.6, 16), goldRobeMat);
    kBody.position.y = 2.0;

    const kHead = new THREE.Mesh(new THREE.SphereGeometry(0.38, 18, 18), skinMat);
    kHead.position.y = 3.55;

    // Lông mày dài và râu lão tăng đức độ
    const browMat = new THREE.MeshBasicMaterial({ color: 0xf5f5f5 });
    [-0.12, 0.12].forEach(bx => {
      const brow = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.01, 0.35, 6), browMat);
      brow.position.set(bx, 3.65, 0.36);
      brow.rotation.x = Math.PI / 4;
      kasyapa.add(brow);
    });

    // Tay cầm tích trượng thiền môn bằng đồng
    const staff = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 3.8, 8),
      new THREE.MeshStandardMaterial({ color: 0x9e7314, metalness: 0.85, roughness: 0.25 })
    );
    staff.position.set(0.45, 2.2, 0.35);

    // Vòng khuyên tích trượng
    const sRing = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.035, 8, 16), staff.material);
    sRing.position.set(0.45, 4.0, 0.35);

    const kPlaque = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.32, 0.05),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Tôn Giả Ca Diếp') })
    );
    kPlaque.position.set(0, 0.35, 0.9);

    kasyapa.add(kPed, kBody, kHead, staff, sRing, kPlaque);
    kasyapa.rotation.y = -Math.PI / 5.5;
    this.scene.add(kasyapa);

    // 3. BỒ TÁT QUÁN THẾ ÂM (BẠCH Y QUÁN ÂM BÌNH CAM LỘ CÀNH DƯƠNG LIỄU)
    const quanAm = new THREE.Group();
    quanAm.position.set(-6.4, 0, -4.5);

    // Đài sen ngọc bích hồng phấn 2 tầng
    const qPed = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 0.9, 16), lotusMat);
    qPed.position.y = 0.45;

    const qLotusPetals = new THREE.Mesh(
      new THREE.CylinderGeometry(1.35, 1.25, 0.4, 16),
      new THREE.MeshStandardMaterial({ color: 0xf06292, roughness: 0.4 })
    );
    qLotusPetals.position.y = 0.95;

    // Y phục bạch y thướt tha mềm mại
    const qBody = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.75, 2.9, 20), whiteRobeMat);
    qBody.position.y = 2.4;

    // Khăn trùm đầu màu trắng ngọc rủ dài chấm vai (White Cowl of Avalokiteshvara)
    const qVeil = new THREE.Mesh(new THREE.SphereGeometry(0.55, 18, 18, 0, Math.PI * 2, 0, Math.PI / 1.7), whiteRobeMat);
    qVeil.position.set(0, 4.25, -0.05);

    const qHead = new THREE.Mesh(new THREE.SphereGeometry(0.42, 20, 20), skinMat);
    qHead.position.y = 4.05;

    // Ngũ Phật Bảo Quán trên đỉnh đầu
    const qCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.32, 0.55, 14), lotusMat);
    qCrown.position.y = 4.62;

    // Tay trái nâng Bình Cam Lộ (Bình Ngọc Tịnh Thủy)
    const vase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.18, 0.52, 12),
      new THREE.MeshStandardMaterial({ color: 0xe0f7fa, roughness: 0.15, metalness: 0.1 })
    );
    vase.position.set(-0.35, 2.8, 0.45);

    // Tay phải cầm Cành Dương Liễu xanh biếc rủ lá
    const willowGroup = new THREE.Group();
    willowGroup.position.set(0.35, 2.9, 0.45);
    const wStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.65, 6),
      new THREE.MeshStandardMaterial({ color: 0x43a047, roughness: 0.4 })
    );
    wStem.rotation.z = Math.PI / 4;
    willowGroup.add(wStem);
    for (let l = 0; l < 5; l++) {
      const leaf = new THREE.Mesh(
        new THREE.ConeGeometry(0.035, 0.18, 4),
        new THREE.MeshStandardMaterial({ color: 0x66bb6a })
      );
      leaf.position.set(0.12 + l * 0.05, 0.1 - l * 0.06, 0);
      leaf.rotation.z = -Math.PI / 3;
      willowGroup.add(leaf);
    }

    // Vòng hào quang ngọc bích phát quang sau đầu
    const qHalo = new THREE.Mesh(
      new THREE.TorusGeometry(0.95, 0.06, 8, 32),
      new THREE.MeshStandardMaterial({
        color: 0x80deea,
        emissive: 0x00bcd4,
        emissiveIntensity: 0.85,
        roughness: 0.2
      })
    );
    qHalo.position.set(0, 4.25, -0.4);

    // Biển hiệu sơn son chữ vàng: "Nam Mô Đại Bi Quán Thế Âm Bồ Tát"
    const qPlaque = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.38, 0.06),
      new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture('Quán Thế Âm Bồ Tát') })
    );
    qPlaque.position.set(0, 0.45, 1.4);

    quanAm.add(qPed, qLotusPetals, qBody, qVeil, qHead, qCrown, vase, willowGroup, qHalo, qPlaque);
    quanAm.rotation.y = Math.PI / 3.8;
    this.scene.add(quanAm);
  }

  // =========================================================================
  // THẬP BÁT LA HÁN (18 VỊ LA HÁN CHÙA VIỆT) VỚI ĐẦY ĐỦ PHÁP BẢO & BIỂN DANH HIỆU
  // 9 vị hàng Tả, 9 vị hàng Hữu dọc 2 vách chính điện, có đĩa đèn dầu lạc lung linh
  // =========================================================================
  createEighteenArhats() {
    const arhatGroup = new THREE.Group();
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x2b130a, roughness: 0.65 });
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xa87d3e, metalness: 0.72, roughness: 0.28 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffdfbe, roughness: 0.45 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.88, roughness: 0.22 });

    const arhatsLeft = [
      { name: 'Hàng Long La Hán', prop: 'dragon' },
      { name: 'Trường Mi La Hán', prop: 'eyebrows' },
      { name: 'Cử Bát La Hán', prop: 'bowl' },
      { name: 'Tiếu Sư La Hán', prop: 'laugh' },
      { name: 'Phục Hổ La Hán', prop: 'tiger' },
      { name: 'Bố Đại La Hán', prop: 'sack' },
      { name: 'Trầm Tư La Hán', prop: 'meditate' },
      { name: 'Quá Giang La Hán', prop: 'fan' },
      { name: 'Khám Hoa La Hán', prop: 'flower' }
    ];

    const arhatsRight = [
      { name: 'Thác Tháp La Hán', prop: 'pagoda' },
      { name: 'Kỵ Tượng La Hán', prop: 'staff' },
      { name: 'Tĩnh Tọa La Hán', prop: 'meditate' },
      { name: 'Hoan Hỷ La Hán', prop: 'laugh' },
      { name: 'Ba Tiêu La Hán', prop: 'leaf' },
      { name: 'Đoạt Oản La Hán', prop: 'bowl' },
      { name: 'Bạt Tiêu La Hán', prop: 'staff' },
      { name: 'Khán Môn La Hán', prop: 'ring' },
      { name: 'Tọa Lộc La Hán', prop: 'deer' }
    ];

    const buildArhatStatue = (info, xPos, zPos, rotY) => {
      const g = new THREE.Group();
      g.position.set(xPos, 0, zPos);
      g.rotation.y = rotY;

      // Kệ gỗ & đài sen đá bát giác
      const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.78, 0.75, 8), stoneMat);
      ped.position.y = 0.375;

      // Thân tượng cà sa đồng hun nếp gấp mềm mại
      const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.58, 1.45, 14), bronzeMat);
      robe.position.y = 1.45;

      // Đầu La Hán thần thái đức độ
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), skinMat);
      head.position.y = 2.32;

      // Dái tai dài của bậc La Hán giác ngộ
      [-0.28, 0.28].forEach(ex => {
        const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.35, 6), skinMat);
        ear.position.set(ex, 2.22, 0);
        g.add(ear);
      });

      // Pháp bảo riêng biệt từng vị:
      if (info.prop === 'dragon') {
        // Rồng vàng uốn quanh tay
        const dragon = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 8, 20, Math.PI * 1.5), goldMat);
        dragon.rotation.x = Math.PI / 3;
        dragon.position.set(0, 1.6, 0.35);
        g.add(dragon);
      } else if (info.prop === 'eyebrows') {
        // Lông mày dài chạm ngực
        const brow = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.008, 0.65, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        brow.position.set(0.1, 2.05, 0.28);
        brow.rotation.x = 0.35;
        g.add(brow);
      } else if (info.prop === 'bowl') {
        // Bình bát khất thực vàng
        const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), goldMat);
        bowl.position.set(0, 1.65, 0.42);
        g.add(bowl);
      } else if (info.prop === 'pagoda') {
        // Bảo tháp 7 tầng trong lòng bàn tay
        const pagoda = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.45, 6), goldMat);
        pagoda.position.set(0.25, 1.75, 0.35);
        g.add(pagoda);
      } else if (info.prop === 'tiger') {
        // Bạch hổ phủ phục dưới chân
        const tiger = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.55, 8), new THREE.MeshStandardMaterial({ color: 0xefefef, roughness: 0.6 }));
        tiger.rotation.z = Math.PI / 2;
        tiger.position.set(0, 0.85, 0.42);
        g.add(tiger);
      } else if (info.prop === 'sack') {
        // Túi vải bố cứu nhân
        const sack = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), new THREE.MeshStandardMaterial({ color: 0x8a5a2a, roughness: 0.8 }));
        sack.scale.set(1.2, 0.9, 1.1);
        sack.position.set(-0.35, 1.35, 0.2);
        g.add(sack);
      }

      // Biển gỗ chữ vàng ghi rõ danh xưng từng vị La Hán
      const plaque = new THREE.Mesh(
        new THREE.BoxGeometry(1.3, 0.26, 0.04),
        new THREE.MeshStandardMaterial({ map: this.generateSignboardTexture(info.name) })
      );
      plaque.position.set(0, 0.42, 0.72);

      // Đĩa đèn dầu lạc ấm áp trước mỗi vị
      const oilLamp = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.08, 0.08, 10),
        new THREE.MeshStandardMaterial({ color: 0xbfa018, metalness: 0.8 })
      );
      oilLamp.position.set(0, 0.8, 0.65);

      const lampFlame = new THREE.Mesh(
        new THREE.ConeGeometry(0.025, 0.08, 6),
        new THREE.MeshBasicMaterial({ color: 0xffaa00 })
      );
      lampFlame.position.set(0, 0.88, 0.65);

      g.add(ped, robe, head, plaque, oilLamp, lampFlame);
      return g;
    };

    // Đặt 9 vị Tả dọc vách trái (x = -12.4)
    arhatsLeft.forEach((info, idx) => {
      const zPos = -3.5 + idx * 2.3;
      arhatGroup.add(buildArhatStatue(info, -12.4, zPos, Math.PI / 2));
    });

    // Đặt 9 vị Hữu dọc vách phải (x = 12.4)
    arhatsRight.forEach((info, idx) => {
      const zPos = -3.5 + idx * 2.3;
      arhatGroup.add(buildArhatStatue(info, 12.4, zPos, -Math.PI / 2));
    });

    this.scene.add(arhatGroup);
  }

  // =========================================================================
  // CÁC HÀNG BỒ ĐOÀN VUÔNG ĐỆM XÁM CHUẨN XÁC THEO ẢNH GỐC
  // Trong ảnh gốc: Các đệm ngồi hình vuông màu xám đậm xếp thành hàng dọc lối đi
  // =========================================================================
  createAuthenticCushionsGrid() {
    const cushionGroup = new THREE.Group();
    this.cushionPositions = [];

    // Đệm vuông nỉ xám sẫm viền ghi xám (Dark grey square fabric meditation cushions as in photo)
    const cushionGeo = new THREE.BoxGeometry(0.95, 0.12, 0.95);
    const cushionMat = new THREE.MeshStandardMaterial({
      color: 0x3d3d42,
      roughness: 0.85
    });

    const pipingGeo = new THREE.BoxGeometry(0.98, 0.04, 0.98);
    const pipingMat = new THREE.MeshStandardMaterial({
      color: 0x5a5a62,
      roughness: 0.9
    });

    const rows = 6;
    const cols = 6;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = (c - (cols - 1) / 2) * 2.5;
        // Giữ thông thoáng lối đi thảm đỏ ở giữa
        if (Math.abs(cx) < 1.4) continue;

        const cz = 0.5 + r * 2.8;
        this.cushionPositions.push({ x: cx, z: cz });

        const cushion = new THREE.Mesh(cushionGeo, cushionMat);
        cushion.position.set(cx, 0.06, cz);
        cushion.receiveShadow = true;

        const piping = new THREE.Mesh(pipingGeo, pipingMat);
        piping.position.set(cx, 0.06, cz);

        cushionGroup.add(cushion, piping);
      }
    }
    this.scene.add(cushionGroup);
  }

  findNearestCushion(px, pz) {
    if (!this.cushionPositions || this.cushionPositions.length === 0) {
      return { x: 0, z: 2.0 };
    }
    let nearest = this.cushionPositions[0];
    let minDist = Infinity;
    for (const c of this.cushionPositions) {
      const d = Math.hypot(c.x - px, c.z - pz);
      if (d < minDist) {
        minDist = d;
        nearest = c;
      }
    }
    return nearest;
  }

  // =========================================================================
  // CÁC KHU TƯƠNG TÁC: CHUÔNG BÁT NHÃ, MÕ GỖ, BÀN THỈNH HƯƠNG, BÀN XIN XĂM
  // =========================================================================
  createInteractiveStations() {
    // 1. ĐẠI HỒNG CHUNG (CHUÔNG ĐỒNG & KHUNG GỖ BÁT NHÃ)
    // Đặt tại x = -7.5, z = -2.2. Hai cột trụ ở -8.9 và -6.1, người chơi đứng ở giữa x = -7.5 không bao giờ bị kẹt cột!
    const bellGroup = new THREE.Group();
    bellGroup.position.set(-7.5, 0, -2.2);

    const woodPostMat = new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.65 });
    const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 6.2, 14), woodPostMat);
    post1.position.set(-1.4, 3.1, 0);
    const post2 = post1.clone();
    post2.position.set(1.4, 3.1, 0);

    const cross = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.45, 0.45), woodPostMat);
    cross.position.set(0, 5.9, 0);

    const bellMat = new THREE.MeshStandardMaterial({
      color: 0xa88647,
      metalness: 0.88,
      roughness: 0.22,
      emissive: 0x2e2009,
      emissiveIntensity: 0.2
    });
    const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.55, 2.6, 28), bellMat);
    bell.position.set(0, 4.0, 0);
    this.bellMesh = bell;

    // Chày kình gỗ gõ chuông treo dây lụa
    const striker = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 2.2, 12),
      new THREE.MeshStandardMaterial({ color: 0x5a2312, roughness: 0.5 })
    );
    striker.rotation.z = Math.PI / 2;
    striker.position.set(0, 3.6, 0.6);
    this.bellStrikerMesh = striker;

    bellGroup.add(post1, post2, cross, bell, striker);
    this.scene.add(bellGroup);

    // 2. MÕ GỖ BÁT NHÃ & KỆ GỖ TRẦM
    // Đặt tại x = 7.5, z = -2.2. Người chơi đứng tại z = -0.7 quay mặt về phía mõ gõ tự nhiên
    const woodfishGroup = new THREE.Group();
    woodfishGroup.position.set(7.5, 0, -2.2);

    const tableMat = new THREE.MeshStandardMaterial({ color: 0x3d0e07, roughness: 0.45 });
    const table = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.35, 1.1, 20), tableMat);
    table.position.y = 0.55;

    const cushion = new THREE.Mesh(
      new THREE.CylinderGeometry(1.05, 1.15, 0.35, 20),
      new THREE.MeshStandardMaterial({ color: 0x9e1a1a, roughness: 0.75 })
    );
    cushion.position.y = 1.25;

    // Mõ gỗ chạm trổ hình ngư vảy cá dát màu cánh gián bóng
    const wf = new THREE.Mesh(
      new THREE.SphereGeometry(0.68, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0x7c3817, roughness: 0.32, metalness: 0.15 })
    );
    wf.scale.set(1.25, 0.88, 1.05);
    wf.position.set(0, 1.78, 0);
    this.woodfishMesh = wf;

    // Dùi mõ cán bọc vải đỏ đặt cạnh mõ
    const malletStick = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.035, 0.95, 10),
      new THREE.MeshStandardMaterial({ color: 0xd49b56, roughness: 0.4 })
    );
    malletStick.rotation.z = Math.PI / 3;
    malletStick.position.set(-0.25, 1.82, 0.5);

    const malletHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x8a1515, roughness: 0.6 })
    );
    malletHead.position.set(-0.65, 2.05, 0.5);

    woodfishGroup.add(table, cushion, wf, malletStick, malletHead);
    this.scene.add(woodfishGroup);

    // 3. BÀN LẤY HƯƠNG TRẦM (INCENSE STATION)
    const incenseTableGroup = new THREE.Group();
    incenseTableGroup.position.set(-3.8, 0, -2.0);

    const tableIncense = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 1.05, 0.85),
      new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.5 })
    );
    tableIncense.position.y = 0.525;

    // Khay vàng đựng hương
    const tray = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 0.08, 0.55),
      new THREE.MeshStandardMaterial({ color: 0xbfa018, metalness: 0.85, roughness: 0.25 })
    );
    tray.position.y = 1.09;

    // Bó nhang trầm thơm hương đỏ
    const bundle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.75, 14),
      new THREE.MeshStandardMaterial({ color: 0x8f2214, roughness: 0.8 })
    );
    bundle.rotation.z = Math.PI / 2;
    bundle.position.set(0, 1.19, 0);

    // Ngọn nến thắp hương
    const candleMini = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.32, 10),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    candleMini.position.set(0.4, 1.23, 0.12);
    const flameMini = new THREE.Mesh(
      new THREE.ConeGeometry(0.04, 0.12, 8),
      new THREE.MeshBasicMaterial({ color: 0xff6600 })
    );
    flameMini.position.set(0.4, 1.45, 0.12);

    incenseTableGroup.add(tableIncense, tray, bundle, candleMini, flameMini);
    this.scene.add(incenseTableGroup);

    // 4. BÀN XIN XĂM QUÁN ÂM (FORTUNE TUBE STATION)
    const fortuneTableGroup = new THREE.Group();
    fortuneTableGroup.position.set(3.8, 0, -2.0);

    const tableFortune = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 1.05, 0.85),
      new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.5 })
    );
    tableFortune.position.y = 0.525;

    // Khăn phủ gấm vàng
    const cloth = new THREE.Mesh(
      new THREE.BoxGeometry(1.25, 0.04, 0.75),
      new THREE.MeshStandardMaterial({ color: 0xe6a817, roughness: 0.65 })
    );
    cloth.position.y = 1.07;

    // ỐNG XĂM BẰNG TRE TRÊN BÀN (BAMBOO FORTUNE TUBE)
    const tubeGroup = new THREE.Group();
    tubeGroup.position.set(0, 1.09, 0);

    const tube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.17, 0.15, 0.72, 16),
      new THREE.MeshStandardMaterial({ color: 0xa1773a, roughness: 0.55 })
    );
    tube.position.y = 0.36;
    tubeGroup.add(tube);

    // Các que xăm nhô lên khỏi miệng ống
    for (let s = 0; s < 12; s++) {
      const stick = new THREE.Mesh(
        new THREE.CylinderGeometry(0.015, 0.015, 0.82, 6),
        new THREE.MeshStandardMaterial({ color: 0xd4b07b, roughness: 0.6 })
      );
      const ang = (s / 12) * Math.PI * 2;
      const r = 0.09 * (s % 2 === 0 ? 0.7 : 1.0);
      stick.position.set(Math.cos(ang) * r, 0.5 + (s % 3) * 0.04, Math.sin(ang) * r);
      stick.rotation.z = (Math.random() - 0.5) * 0.12;
      tubeGroup.add(stick);
    }
    this.tableFortuneTube = tubeGroup;

    fortuneTableGroup.add(tableFortune, cloth, tubeGroup);
    this.scene.add(fortuneTableGroup);
  }

  // Hiệu ứng rơi que xăm trên sàn/bàn
  spawnDroppingFortuneStick(x, z, onComplete) {
    const stick = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.012, 0.38),
      new THREE.MeshStandardMaterial({ color: 0xdfb466, roughness: 0.4 })
    );
    stick.position.set(x, 1.3, z);
    stick.rotation.set(0.5, 0.8, 0.3);
    this.scene.add(stick);

    let vy = 0;
    const dropAnim = () => {
      vy += 0.018; // trọng lực gia tốc
      stick.position.y -= vy;
      stick.rotation.x += 0.15;
      stick.rotation.z += 0.18;

      if (stick.position.y <= 0.03) {
        stick.position.y = 0.03;
        stick.rotation.set(Math.PI / 2, 0, Math.random() * Math.PI);
        if (onComplete) onComplete();
        setTimeout(() => {
          this.scene.remove(stick);
        }, 6000);
      } else {
        requestAnimationFrame(dropAnim);
      }
    };
    dropAnim();
  }

  // =========================================================================
  // ÁNH SÁNG ẤM CÚNG & VOLUMETRIC GOD RAYS TỪ CỬA SỔ
  // =========================================================================
  createAtmosphericLighting() {
    // 1. Ánh sáng môi trường dịu dàng, ấm cúng làm sáng toàn bộ chánh điện
    const ambientLight = new THREE.AmbientLight(0xfff2e0, 1.45);
    this.scene.add(ambientLight);

    // 2. Bán cầu ánh sáng chiếu từ trần vàng ấm xuống và hắt từ sàn lên
    const hemiLight = new THREE.HemisphereLight(0xfffaea, 0x5a3b25, 1.35);
    this.scene.add(hemiLight);

    // 3. Ánh nắng ban mai rực rỡ chiếu xiên từ hàng cửa sổ ô trám bên trái
    const sunLight = new THREE.DirectionalLight(0xffeed2, 2.1);
    sunLight.position.set(-20, 16, 6);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.001;
    this.scene.add(sunLight);

    // 4. Ánh sáng diện diện từ hướng cửa chính vào trung tâm giúp nhân vật và tượng rõ nét
    const frontLight = new THREE.DirectionalLight(0xffe2bf, 1.25);
    frontLight.position.set(0, 14, 24);
    this.scene.add(frontLight);

    // 5. Đèn chùm vàng ấm trên cao lan tỏa
    const ceilingGlow = new THREE.PointLight(0xffbb55, 1.8, 35);
    ceilingGlow.position.set(0, 9.5, 4);
    this.scene.add(ceilingGlow);

    // 6. Ánh nến ấm áp tại ngạch Cửa Chùa
    const entranceLight = new THREE.PointLight(0xffaa33, 2.0, 14);
    entranceLight.position.set(0, 5.5, 18.5);
    this.scene.add(entranceLight);
  }

  // BIỂU TƯỢNG ĐIỀU HƯỚNG 3D TRỰC QUAN (FLOATING INTERACTIVE BEACONS)
  createStationBeacons(app) {
    this.app = app;
    const beacons = [
      {
        icon: '🪵',
        title: 'Mõ Gỗ Bát Nhã',
        sub: 'Click để gõ mõ liên tục',
        x: 7.5,
        y: 2.1,
        z: -2.2,
        action: () => app.fsm.startWoodfish()
      },
      {
        icon: '🔔',
        title: 'Đại Hồng Chung',
        sub: 'Click để thỉnh 1 tiếng ngân',
        x: -7.5,
        y: 3.5,
        z: -2.2,
        action: () => app.fsm.startBell()
      },
      {
        icon: '🪔',
        title: 'Lư Đồng Tam Bảo',
        sub: 'Click thỉnh 3 nén hương dâng Phật',
        x: 0,
        y: 2.2,
        z: -2.7,
        action: () => app.fsm.startIncense()
      },
      {
        icon: '🎋',
        title: 'Ống Xăm Quán Âm',
        sub: 'Click xóc ống xin quẻ',
        x: 3.8,
        y: 2.0,
        z: -2.0,
        action: () => app.fsm.startFortune()
      },
      {
        icon: '🧎',
        title: 'Bồ Đoàn Tọa Thiền',
        sub: 'Click ngồi thiền kiết già',
        x: 0,
        y: 0.9,
        z: 2.2,
        action: () => app.fsm.startMeditation()
      },
      {
        icon: '🙇',
        title: 'Lễ Phật Tam Bái',
        sub: 'Click chắp tay lạy 3 lạy',
        x: 0,
        y: 1.6,
        z: 0.0,
        action: () => app.fsm.startBowing()
      }
    ];

    beacons.forEach(b => {
      const el = document.createElement('div');
      el.className = 'station-beacon interactive-ui';
      el.innerHTML = `
        <span class="beacon-icon">${b.icon}</span>
        <div class="beacon-info">
          <div class="beacon-title">${b.title}</div>
          <div class="beacon-sub">${b.sub}</div>
        </div>
      `;
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        b.action();
      });

      const cssObj = new CSS2DObject(el);
      cssObj.position.set(b.x, b.y, b.z);
      this.scene.add(cssObj);
    });
  }

  createParticleSystems() {
    // Incense smoke
    const smokeCount = 130;
    const smokeGeo = new THREE.BufferGeometry();
    const smokePos = new Float32Array(smokeCount * 3);
    const smokeVel = [];

    for (let i = 0; i < smokeCount; i++) {
      smokePos[i * 3] = (Math.random() - 0.5) * 0.25;
      smokePos[i * 3 + 1] = 1.9 + Math.random() * 2.6;
      smokePos[i * 3 + 2] = -2.7 + (Math.random() - 0.5) * 0.25;
      smokeVel.push({
        vx: (Math.random() - 0.5) * 0.016,
        vy: 0.012 + Math.random() * 0.01,
        vz: (Math.random() - 0.5) * 0.016
      });
    }

    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3));
    this.smokeParticles = new THREE.Points(
      smokeGeo,
      new THREE.PointsMaterial({
        color: 0xdddddd,
        size: 0.28,
        transparent: true,
        opacity: 0.38,
        depthWrite: false
      })
    );
    this.smokeVel = smokeVel;
    this.scene.add(this.smokeParticles);

    // Floating golden dust motes in sunbeams
    const petalCount = 80;
    const petalGeo = new THREE.BufferGeometry();
    const petalPos = new Float32Array(petalCount * 3);
    const petalVel = [];

    for (let i = 0; i < petalCount; i++) {
      petalPos[i * 3] = (Math.random() - 0.5) * 30;
      petalPos[i * 3 + 1] = 0.5 + Math.random() * 8.5;
      petalPos[i * 3 + 2] = (Math.random() - 0.5) * 26;
      petalVel.push({
        vx: (Math.random() - 0.5) * 0.008,
        vy: -0.006 - Math.random() * 0.008,
        vz: 0.005 + Math.random() * 0.005
      });
    }

    petalGeo.setAttribute('position', new THREE.BufferAttribute(petalPos, 3));
    this.petalParticles = new THREE.Points(
      petalGeo,
      new THREE.PointsMaterial({
        color: 0xffd166,
        size: 0.16,
        transparent: true,
        opacity: 0.65,
        depthWrite: false
      })
    );
    this.petalVel = petalVel;
    this.scene.add(this.petalParticles);
  }

  spawnClickRipple(x, z) {
    const ringGeo = new THREE.RingGeometry(0.1, 0.22, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf4b41a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const ripple = new THREE.Mesh(ringGeo, ringMat);
    ripple.rotation.x = -Math.PI / 2;
    ripple.position.set(x, 0.035, z);
    this.scene.add(ripple);

    this.ripples.push({ mesh: ripple, scale: 1, opacity: 0.95 });
  }

  update(delta) {
    const time = this.clock.getElapsedTime();

    this.candleLights.forEach((light, i) => {
      light.intensity = 1.2 + Math.sin(time * 9 + i * 2.5) * 0.3;
    });

    if (this.buddhaAuraLight) {
      this.buddhaAuraLight.intensity = 4.2 + Math.sin(time * 2.5) * 0.4;
    }

    if (this.haloMesh) {
      this.haloMesh.rotation.z += delta * 0.08;
    }

    if (this.smokeParticles) {
      const pos = this.smokeParticles.geometry.attributes.position.array;
      for (let i = 0; i < this.smokeVel.length; i++) {
        pos[i * 3 + 1] += this.smokeVel[i].vy;
        pos[i * 3] += Math.sin(time * 3 + i) * 0.004 + this.smokeVel[i].vx;
        if (pos[i * 3 + 1] > 5.2) {
          pos[i * 3] = (Math.random() - 0.5) * 0.16;
          pos[i * 3 + 1] = 1.9;
          pos[i * 3 + 2] = -2.7 + (Math.random() - 0.5) * 0.16;
        }
      }
      this.smokeParticles.geometry.attributes.position.needsUpdate = true;
    }

    if (this.petalParticles) {
      const pos = this.petalParticles.geometry.attributes.position.array;
      for (let i = 0; i < this.petalVel.length; i++) {
        pos[i * 3 + 1] += this.petalVel[i].vy;
        pos[i * 3] += Math.sin(time * 1.5 + i) * 0.007;
        pos[i * 3 + 2] += this.petalVel[i].vz;
        if (pos[i * 3 + 1] < 0.1) {
          pos[i * 3 + 1] = 8.0;
          pos[i * 3] = (Math.random() - 0.5) * 30;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 26;
        }
      }
      this.petalParticles.geometry.attributes.position.needsUpdate = true;
    }

    for (let r = this.ripples.length - 1; r >= 0; r--) {
      const rip = this.ripples[r];
      rip.scale += delta * 3.5;
      rip.opacity -= delta * 1.6;
      rip.mesh.scale.set(rip.scale, rip.scale, 1);
      rip.mesh.material.opacity = Math.max(0, rip.opacity);
      if (rip.opacity <= 0) {
        this.scene.remove(rip.mesh);
        this.ripples.splice(r, 1);
      }
    }
  }
}
