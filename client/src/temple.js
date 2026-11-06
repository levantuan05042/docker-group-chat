import * as THREE from 'three';

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
      woodfish: { x: 6.8, z: -2.0, rotY: -Math.PI / 2 },
      bell: { x: -6.8, z: -2.0, rotY: Math.PI / 2 },
      incenseTable: { x: -3.6, z: -4.3, rotY: Math.PI },
      incenseBurner: { x: 0, z: -4.8, rotY: Math.PI },
      fortuneTable: { x: 3.6, z: -4.3, rotY: Math.PI }
    };

    this.createEnvironment();
    this.createArchitecture();
    this.createTempleEntranceDoors();
    this.createGrandBuddhaAltar();
    this.createVenerablesAndBodhisattvas();
    this.createEighteenArhats();
    this.createAuthenticCushionsGrid(); // Hàng bồ đoàn vuông giống hệt ảnh meme
    this.createInteractiveStations(); // Chuông đồng, Mõ gỗ, Bàn lấy hương, Bàn xin xăm
    this.createAtmosphericLighting();
    this.createParticleSystems();
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
  // KIẾN TRÚC CHÍNH ĐIỆN (GIỐNG HỆT BỨC ẢNH GỐC)
  // Sàn gỗ bóng loáng, cửa sổ ô trám bên trái đón nắng, tường hậu gắn tranh Phật
  // =========================================================================
  createArchitecture() {
    const templeGroup = new THREE.Group();

    // Sàn gỗ mun ấm bóng phản chiếu ánh sáng (Warm polished temple timber floor)
    const floorGeo = new THREE.PlaneGeometry(36, 48, 16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x3d251a,
      roughness: 0.32,
      metalness: 0.12
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, 5);
    floor.receiveShadow = true;
    templeGroup.add(floor);

    // Cột đình gỗ lim sơn son sẫm màu
    const pillarGeo = new THREE.CylinderGeometry(0.65, 0.7, 12, 20);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x3b140e, roughness: 0.45 });
    const baseGeo = new THREE.CylinderGeometry(0.9, 1.0, 0.5, 16);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x1f1f1f, roughness: 0.8 });
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.75, roughness: 0.25 });

    const pillarCoords = [
      [-9, -2], [-9, 5], [-9, 12],
      [9, -2], [9, 5], [9, 12]
    ];

    pillarCoords.forEach(([px, pz]) => {
      const p = new THREE.Mesh(pillarGeo, pillarMat);
      p.position.set(px, 6, pz);
      p.castShadow = true;
      p.receiveShadow = true;

      const base = new THREE.Mesh(baseGeo, baseMat);
      base.position.set(px, 0.25, pz);

      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.08, 8, 24), ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(px, 10.5, pz);

      templeGroup.add(p, base, ring);
    });

    // Tường hậu phía sau bàn thờ gắn bức bích họa Phật giáo (Thangka mural backdrop)
    const backWall = new THREE.Mesh(
      new THREE.BoxGeometry(36, 14, 1),
      new THREE.MeshStandardMaterial({ color: 0x1a0d07, roughness: 0.8 })
    );
    backWall.position.set(0, 7, -10);
    backWall.receiveShadow = true;

    // BỨC BÍCH HỌA THANGKA PHẬT GIÁO CỔ KÍNH SAU TƯỢNG PHẬT (NHƯ ẢNH GỐC)
    const muralCanvas = document.createElement('canvas');
    muralCanvas.width = 1024;
    muralCanvas.height = 1024;
    const mctx = muralCanvas.getContext('2d');

    // Nền gấm lụa chu sa & lam sẫm cổ kính
    const grad = mctx.createRadialGradient(512, 460, 40, 512, 460, 540);
    grad.addColorStop(0, '#78201b');
    grad.addColorStop(0.45, '#451614');
    grad.addColorStop(0.8, '#1c1626');
    grad.addColorStop(1, '#0e080f');
    mctx.fillStyle = grad;
    mctx.fillRect(0, 0, 1024, 1024);

    // Đường viền chỉ gấm vàng kim cổ
    mctx.strokeStyle = '#d4af37';
    mctx.lineWidth = 14;
    mctx.strokeRect(20, 20, 984, 984);
    mctx.strokeStyle = '#f5d77f';
    mctx.lineWidth = 4;
    mctx.strokeRect(36, 36, 952, 952);

    // Hào quang Mandala tỏa sáng 64 tia quang minh
    mctx.save();
    mctx.translate(512, 460);
    mctx.strokeStyle = 'rgba(245, 215, 127, 0.25)';
    mctx.lineWidth = 3;
    for (let a = 0; a < 64; a++) {
      mctx.beginPath();
      mctx.moveTo(0, 0);
      const angle = (a / 64) * Math.PI * 2;
      mctx.lineTo(Math.cos(angle) * 440, Math.sin(angle) * 440);
      mctx.stroke();
    }

    // Vòng hoa văn đồng tâm
    [100, 180, 260, 340, 420].forEach((r, idx) => {
      mctx.beginPath();
      mctx.arc(0, 0, r, 0, Math.PI * 2);
      mctx.strokeStyle = idx % 2 === 0 ? 'rgba(245, 195, 66, 0.5)' : 'rgba(255, 255, 255, 0.25)';
      mctx.lineWidth = idx % 2 === 0 ? 5 : 2;
      mctx.stroke();
    });

    // Cánh hoa sen nở viền quanh
    for (let p = 0; p < 16; p++) {
      mctx.save();
      mctx.rotate((p / 16) * Math.PI * 2);
      mctx.fillStyle = 'rgba(235, 110, 135, 0.38)';
      mctx.beginPath();
      mctx.ellipse(0, -180, 24, 60, 0, 0, Math.PI * 2);
      mctx.fill();
      mctx.strokeStyle = '#f5d77f';
      mctx.lineWidth = 2;
      mctx.stroke();
      mctx.restore();
    }
    mctx.restore();

    const muralTexture = new THREE.CanvasTexture(muralCanvas);
    const muralMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 11),
      new THREE.MeshStandardMaterial({ map: muralTexture, roughness: 0.65, metalness: 0.1 })
    );
    muralMesh.position.set(0, 7.5, -9.45);
    templeGroup.add(backWall, muralMesh);

    // Cửa sổ ô trám kiểu Á Đông bên vách trái đón ánh sáng (Lattice window as seen in photo)
    [-18, 18].forEach(wx => {
      const sideWall = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 14, 46),
        new THREE.MeshStandardMaterial({ color: 0x160c07, roughness: 0.8 })
      );
      sideWall.position.set(wx, 7, 6);
      templeGroup.add(sideWall);

      for (let wz = -4; wz <= 16; wz += 5.5) {
        const frame = new THREE.Mesh(
          new THREE.BoxGeometry(0.9, 7.0, 4.0),
          new THREE.MeshStandardMaterial({ color: 0x0f0704, roughness: 0.6 })
        );
        frame.position.set(wx, 6.5, wz);
        templeGroup.add(frame);
      }
    });

    // Trần gỗ đấu củng xà ngang
    for (let bz = -8; bz <= 20; bz += 4.5) {
      const beam = new THREE.Mesh(
        new THREE.BoxGeometry(36, 0.5, 0.7),
        new THREE.MeshStandardMaterial({ color: 0x2e110a, roughness: 0.6 })
      );
      beam.position.set(0, 11.5, bz);
      templeGroup.add(beam);
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
  // TƯỢNG ĐỨC PHẬT THÍCH CA MÂU NI DÁT VÀNG UY NGHIÊM (MASTERPIECE BUDDHA STATUE)
  // Tướng mạo từ bi viên mãn, tòa sen kép, cà sa vạt mềm, chữ Vạn dát vàng,
  // Đôi bình sen ngọc, đôi chân đèn nến trang nghiêm như ảnh gốc
  // =========================================================================
  createGrandBuddhaAltar() {
    const altarGroup = new THREE.Group();
    altarGroup.position.set(0, 0, -8);

    // Bục giảng kinh sơn màu gụ sẫm nâng cao
    const dais = new THREE.Mesh(
      new THREE.BoxGeometry(11, 0.8, 6.5),
      new THREE.MeshStandardMaterial({ color: 0x240d07, roughness: 0.4 })
    );
    dais.position.y = 0.4;
    dais.receiveShadow = true;
    altarGroup.add(dais);

    // Chất liệu Vàng Ròng Phật Thích Ca (Antique 24K Radiant Gold)
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf5b82a,
      roughness: 0.22,
      metalness: 0.82,
      emissive: 0x4d3205,
      emissiveIntensity: 0.35
    });

    const robeGoldMat = new THREE.MeshStandardMaterial({
      color: 0xdf9917,
      roughness: 0.30,
      metalness: 0.62,
      emissive: 0x3d2303,
      emissiveIntensity: 0.28
    });

    const trimGoldMat = new THREE.MeshStandardMaterial({
      color: 0xffe875,
      roughness: 0.16,
      metalness: 0.88,
      emissive: 0x5a3e07,
      emissiveIntensity: 0.42
    });

    // 1. TÒA SEN VÀNG ĐA TẦNG NỞ RỘ (DOUBLE LOTUS THRONE)
    const lotusBase = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 4.3, 0.9, 28), goldMat);
    lotusBase.position.y = 1.15;
    altarGroup.add(lotusBase);

    // Vành ngọc châu quanh đài sen
    const beadRing = new THREE.Mesh(new THREE.TorusGeometry(3.65, 0.08, 12, 36), trimGoldMat);
    beadRing.rotation.x = Math.PI / 2;
    beadRing.position.y = 1.6;
    altarGroup.add(beadRing);

    // 2 lớp cánh sen nở xòe uốn cong kiêu hãnh
    for (let layer = 0; layer < 2; layer++) {
      const radius = 3.65 - layer * 0.3;
      const yPos = 1.45 + layer * 0.4;
      const count = 18 - layer * 2;

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (layer * Math.PI) / count;
        const petal = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.35, 5), layer === 1 ? trimGoldMat : goldMat);
        petal.position.set(Math.cos(angle) * radius, yPos, Math.sin(angle) * radius);
        petal.rotation.x = Math.PI / 4.4;
        petal.rotation.y = -angle + Math.PI / 2;
        petal.scale.set(1.15, 1.0, 0.45);
        altarGroup.add(petal);
      }
    }

    // 2. THÂN PHẬT TỔ - KIẾT GIÀ KIM CƯƠNG TỌA (VAJRASANA)
    const lap = new THREE.Group();
    lap.position.set(0, 2.15, 0.1);

    const thighL = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.72, 2.8, 18), robeGoldMat);
    thighL.rotation.z = Math.PI / 2.3;
    thighL.rotation.y = Math.PI / 5.8;
    thighL.position.set(-1.0, 0.12, 0.22);

    const thighR = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.72, 2.8, 18), robeGoldMat);
    thighR.rotation.z = -Math.PI / 2.3;
    thighR.rotation.y = -Math.PI / 5.8;
    thighR.position.set(1.0, 0.12, 0.22);

    const soleR = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.22, 0.85), goldMat);
    soleR.rotation.x = Math.PI / 3;
    soleR.rotation.z = -0.15;
    soleR.position.set(-0.38, 0.42, 0.95);

    const soleL = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.2, 0.8), goldMat);
    soleL.rotation.x = Math.PI / 3.2;
    soleL.rotation.z = 0.15;
    soleL.position.set(0.38, 0.38, 0.92);

    // Tà áo cà sa tràn phủ qua đài sen
    const robeDrapeLap = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.8, 0.6, 20), robeGoldMat);
    robeDrapeLap.rotation.x = 0.4;
    robeDrapeLap.position.set(0, 0.15, 0.45);

    lap.add(thighL, thighR, soleR, soleL, robeDrapeLap);
    altarGroup.add(lap);

    // 3. THÂN TRÊN & ÁO CÀ SA HỞ VAI PHẢI + CHỮ VẠN (卍)
    const torso = new THREE.Group();
    torso.position.set(0, 3.85, 0);

    const belly = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.45, 1.6, 22), robeGoldMat);
    belly.position.y = -0.3;

    const chest = new THREE.Mesh(new THREE.SphereGeometry(1.42, 24, 24), goldMat);
    chest.scale.set(1.32, 0.98, 1.05);
    chest.position.y = 0.6;

    // CHỮ VẠN (卍) DÁT VÀNG NỔI BẬT GIỮA NGỰC PHẬT
    const vanGroup = new THREE.Group();
    vanGroup.position.set(0, 0.72, 1.15);
    const vanMat = trimGoldMat;
    const vCenH = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.07, 0.04), vanMat);
    const vCenV = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.32, 0.04), vanMat);
    const vT1 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.07, 0.04), vanMat);
    vT1.position.set(-0.125, 0.125, 0);
    const vT2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.07, 0.04), vanMat);
    vT2.position.set(0.125, -0.125, 0);
    const vT3 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.12, 0.04), vanMat);
    vT3.position.set(0.125, 0.125, 0);
    const vT4 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.12, 0.04), vanMat);
    vT4.position.set(-0.125, -0.125, 0);
    vanGroup.add(vCenH, vCenV, vT1, vT2, vT3, vT4);
    vanGroup.scale.set(1.2, 1.2, 1.2);
    torso.add(vanGroup);

    // Vạt áo cà sa mềm mại vắt qua vai trái, hở vai phải
    const robeSash = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.20, 14, 30, Math.PI), robeGoldMat);
    robeSash.rotation.z = -Math.PI / 4.2;
    robeSash.rotation.x = Math.PI / 9;
    robeSash.position.set(-0.2, 0.52, 0.32);

    torso.add(belly, chest, robeSash);
    altarGroup.add(torso);

    // 4. HAI TAY THỦ ẤN TINH XẢO
    // Tay trái: Thiền Định Ấn đặt ngửa trong lòng
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.44, 1.65, 16), robeGoldMat);
    armL.rotation.z = Math.PI / 3.1;
    armL.position.set(-1.22, 3.85, 0.22);

    const foreArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.35, 1.45, 16), goldMat);
    foreArmL.rotation.x = Math.PI / 2.2;
    foreArmL.rotation.z = -Math.PI / 4.2;
    foreArmL.position.set(-0.68, 2.92, 0.62);

    const handLGroup = new THREE.Group();
    handLGroup.position.set(-0.14, 2.76, 1.0);
    const palmL = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.11, 0.46), goldMat);
    handLGroup.add(palmL);

    // Tay phải: Giơ cao ngang ngực (Vô Úy / Thuyết Pháp Ấn)
    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.44, 1.55, 16), goldMat);
    armR.rotation.z = -Math.PI / 4.6;
    armR.position.set(1.26, 4.05, 0.12);

    const foreArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 1.45, 16), goldMat);
    foreArmR.rotation.x = -Math.PI / 5.2;
    foreArmR.rotation.z = Math.PI / 7.2;
    foreArmR.position.set(1.22, 4.75, 0.58);

    const handRGroup = new THREE.Group();
    handRGroup.position.set(1.12, 5.35, 0.82);
    handRGroup.rotation.y = -Math.PI / 7.5;
    const palmR = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.46, 0.12), goldMat);
    const mudraCircle = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.038, 8, 16), goldMat);
    mudraCircle.position.set(0.12, 0.22, 0.08);
    handRGroup.add(palmR, mudraCircle);

    altarGroup.add(armL, foreArmL, handLGroup, armR, foreArmR, handRGroup);

    // 5. DIỆN MẠO PHẬT TỔ TỪ BI VIÊN MÃN
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 5.92, 0.08);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.68, 0.65, 20), goldMat);
    neck.position.y = -0.55;
    headGroup.add(neck);

    const face = new THREE.Mesh(new THREE.SphereGeometry(0.92, 28, 28), goldMat);
    face.scale.set(0.95, 1.08, 0.98);
    headGroup.add(face);

    // Nhục kế (Ushnisha) trên đỉnh đầu vươn cao
    const ushnisha = new THREE.Mesh(new THREE.SphereGeometry(0.48, 22, 22), goldMat);
    ushnisha.position.set(0, 0.98, -0.05);
    headGroup.add(ushnisha);

    // Ngọc Mani (Chintamani) rực sáng
    const chintamani = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 16, 16),
      new THREE.MeshStandardMaterial({
        color: 0xff3300,
        emissive: 0xff4500,
        emissiveIntensity: 0.95,
        roughness: 0.15
      })
    );
    chintamani.position.set(0, 1.58, -0.05);
    headGroup.add(chintamani);

    // Mũ tóc xoắn ốc (Stylized unified snail hair cap)
    const hairCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.94, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xdf9917, roughness: 0.35, metalness: 0.65 })
    );
    hairCap.position.set(0, 0.22, -0.06);
    hairCap.scale.set(0.96, 1.0, 0.96);
    headGroup.add(hairCap);

    // Bạch Hào (Urna) chiếu sáng giữa trán
    const urna = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfffae6, emissiveIntensity: 1.2 })
    );
    urna.position.set(0, 0.15, 0.94);
    headGroup.add(urna);

    // Sống mũi thẳng cao thanh tú
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.35, 6), goldMat);
    nose.rotation.x = -0.25;
    nose.position.set(0, -0.05, 0.96);
    headGroup.add(nose);

    // Khóe môi mỉm cười từ bi
    const lips = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.035, 8, 16, Math.PI), trimGoldMat);
    lips.rotation.x = Math.PI / 2;
    lips.rotation.z = Math.PI;
    lips.position.set(0, -0.28, 0.93);
    headGroup.add(lips);

    // Đôi mắt phượng từ bi khép hờ
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x3d240d });
    [-0.26, 0.26].forEach((ex) => {
      const eyeLid = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.022, 6, 16, Math.PI), eyeMat);
      eyeLid.rotation.z = Math.PI;
      eyeLid.position.set(ex, 0.02, 0.9);
      headGroup.add(eyeLid);
    });

    // Đôi tai chảy dài chấm vai
    [-0.96, 0.96].forEach((earX) => {
      const earGroup = new THREE.Group();
      earGroup.position.set(earX, -0.15, 0);
      const earLobe = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.95, 10), goldMat);
      earLobe.position.set(0, -0.2, 0);
      earGroup.add(earLobe);
      headGroup.add(earGroup);
    });

    altarGroup.add(headGroup);

    // 6. VẦNG HÀO QUANG LÁ BỒ ĐỀ DÁT VÀNG PHÍA SAU
    const mandorlaMat = new THREE.MeshStandardMaterial({
      color: 0xffd54f,
      roughness: 0.18,
      metalness: 0.85,
      emissive: 0x6e4e08,
      emissiveIntensity: 0.45,
      side: THREE.DoubleSide
    });
    const mandorla = new THREE.Mesh(new THREE.CircleGeometry(3.2, 36), mandorlaMat);
    mandorla.position.set(0, 5.8, -1.1);
    const outerHaloRing = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.15, 16, 48), trimGoldMat);
    outerHaloRing.position.set(0, 5.8, -1.05);
    altarGroup.add(mandorla, outerHaloRing);

    // 7. ĐÔI BÌNH HOA SEN NGỌC BÍCH DÂNG CÚNG (NHƯ ẢNH GỐC)
    [-4.8, 4.8].forEach(vx => {
      const vaseGroup = new THREE.Group();
      vaseGroup.position.set(vx, 1.35, 1.1);

      const vase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.32, 1.2, 16),
        new THREE.MeshStandardMaterial({ color: 0x7da49c, roughness: 0.2, metalness: 0.1 })
      );
      vaseGroup.add(vase);

      const lotusFlowerMat = new THREE.MeshStandardMaterial({ color: 0xf58da8, roughness: 0.4 });
      for (let p = 0; p < 8; p++) {
        const petal = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.38, 4), lotusFlowerMat);
        const ang = (p / 8) * Math.PI * 2;
        petal.position.set(Math.cos(ang) * 0.14, 0.72, Math.sin(ang) * 0.14);
        petal.rotation.x = 0.35;
        petal.rotation.y = -ang;
        vaseGroup.add(petal);
      }
      altarGroup.add(vaseGroup);
    });

    // 8. ĐÔI CHÂN ĐÈN NẾN ĐỒNG BÊN BÀN THỜ
    [-3.8, 3.8].forEach(cx => {
      const stand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.28, 1.4, 12),
        new THREE.MeshStandardMaterial({ color: 0xbfa018, metalness: 0.8, roughness: 0.25 })
      );
      stand.position.set(cx, 1.5, 1.2);

      const candle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 0.6, 12),
        new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
      );
      candle.position.set(cx, 2.4, 1.2);

      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.06, 0.2, 8),
        new THREE.MeshBasicMaterial({ color: 0xff9900 })
      );
      flame.position.set(cx, 2.75, 1.2);

      const cLight = new THREE.PointLight(0xff9922, 1.8, 10);
      cLight.position.set(cx, 2.8, 1.2);
      this.candleLights.push(cLight);

      altarGroup.add(stand, candle, flame, cLight);
    });

    // 9. LƯ HƯƠNG ĐỒNG LỚN TRƯỚC BÀN PHẬT
    const burnerGroup = new THREE.Group();
    burnerGroup.position.set(0, 1.1, 1.8);
    const burner = new THREE.Mesh(
      new THREE.CylinderGeometry(0.72, 0.58, 0.65, 20),
      new THREE.MeshStandardMaterial({ color: 0x9e7b42, metalness: 0.82, roughness: 0.28 })
    );
    const burnerRim = new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.08, 12, 28), trimGoldMat);
    burnerRim.rotation.x = Math.PI / 2;
    burnerRim.position.y = 0.32;
    burnerGroup.add(burner, burnerRim);

    // Cát vàng mịn trong lư hương
    const sand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.68, 0.68, 0.1, 18),
      new THREE.MeshStandardMaterial({ color: 0xd4b07b, roughness: 0.9 })
    );
    sand.position.y = 0.28;
    burnerGroup.add(sand);

    // 3 nén hương bén lửa khói bay ban đầu
    for (let i = -1; i <= 1; i++) {
      const stick = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.85),
        new THREE.MeshBasicMaterial({ color: 0xaa2211 })
      );
      stick.position.set(i * 0.14, 0.75, 0);

      const tip = new THREE.Mesh(
        new THREE.SphereGeometry(0.035, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xff4500 })
      );
      tip.position.set(i * 0.14, 1.18, 0);
      burnerGroup.add(stick, tip);
    }
    this.burnerGroup = burnerGroup;
    altarGroup.add(burnerGroup);

    // Ánh sáng vàng quang minh rực rỡ từ Phật
    this.buddhaAuraLight = new THREE.PointLight(0xffbe4d, 5.0, 22);
    this.buddhaAuraLight.position.set(0, 6.0, 1.8);
    altarGroup.add(this.buddhaAuraLight);

    this.scene.add(altarGroup);
  }

  // =========================================================================
  // TÔN GIẢ & BỒ TÁT CHẦU HAI BÊN
  // =========================================================================
  createVenerablesAndBodhisattvas() {
    const goldRobeMat = new THREE.MeshStandardMaterial({ color: 0xd68910, roughness: 0.45 });
    const whiteRobeMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.35 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffdfbe, roughness: 0.45 });
    const lotusMat = new THREE.MeshStandardMaterial({ color: 0xb58900, metalness: 0.5, roughness: 0.3 });

    // 1. TÔN GIẢ A NAN (Bên Tả)
    const ananda = new THREE.Group();
    ananda.position.set(-3.2, 0, -6.8);

    const aPed = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.7, 16), lotusMat);
    aPed.position.y = 0.35;
    const aBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.6, 2.6, 16), goldRobeMat);
    aBody.position.y = 2.0;
    const aHead = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 16), skinMat);
    aHead.position.y = 3.55;
    const aHands = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 10), skinMat);
    aHands.scale.set(1, 1.6, 0.8);
    aHands.position.set(0.12, 2.6, 0.35);

    ananda.add(aPed, aBody, aHead, aHands);
    ananda.rotation.y = Math.PI / 6;
    this.scene.add(ananda);

    // 2. TÔN GIẢ CA DIẾP (Bên Hữu)
    const kasyapa = new THREE.Group();
    kasyapa.position.set(3.2, 0, -6.8);

    const kPed = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.7, 16), lotusMat);
    kPed.position.y = 0.35;
    const kBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.6, 2.6, 16), goldRobeMat);
    kBody.position.y = 2.0;
    const kHead = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 16), skinMat);
    kHead.position.y = 3.55;
    const kHands = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 10), skinMat);
    kHands.scale.set(1, 1.6, 0.8);
    kHands.position.set(-0.12, 2.6, 0.35);

    kasyapa.add(kPed, kBody, kHead, kHands);
    kasyapa.rotation.y = -Math.PI / 6;
    this.scene.add(kasyapa);

    // 3. BỒ TÁT QUÁN THẾ ÂM (Bạch Y Quán Âm bên trái)
    const quanAm = new THREE.Group();
    quanAm.position.set(-6.2, 0, -4.5);
    const qPed = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.25, 0.9, 16), lotusMat);
    qPed.position.y = 0.45;
    const qBody = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.75, 2.9, 16), whiteRobeMat);
    qBody.position.y = 2.3;
    const qHead = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), skinMat);
    qHead.position.y = 3.95;
    const qCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.35, 0.5, 12), lotusMat);
    qCrown.position.y = 4.35;
    const vase = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 0.45, 8), lotusMat);
    vase.position.set(0.25, 2.7, 0.5);

    quanAm.add(qPed, qBody, qHead, qCrown, vase);
    quanAm.rotation.y = Math.PI / 4;
    this.scene.add(quanAm);
  }

  // =========================================================================
  // THẬP BÁT LA HÁN DỌC HAI HÀNH LANG
  // =========================================================================
  createEighteenArhats() {
    const arhatGroup = new THREE.Group();
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x332014, roughness: 0.8 });
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x8a632c, metalness: 0.65, roughness: 0.35 });

    for (let i = 0; i < 9; i++) {
      const zPos = -1.0 + i * 2.0;

      // Hàng Tả (East)
      const aL = new THREE.Group();
      aL.position.set(-13.5, 0, zPos);
      const pL = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.6, 12), stoneMat);
      pL.position.y = 0.3;
      const bL = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 1.3, 10), stoneMat);
      bL.position.y = 1.25;
      const hL = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 12), bronzeMat);
      hL.position.y = 2.05;
      aL.add(pL, bL, hL);
      aL.rotation.y = Math.PI / 2;
      arhatGroup.add(aL);

      // Hàng Hữu (West)
      const aR = new THREE.Group();
      aR.position.set(13.5, 0, zPos);
      const pR = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.6, 12), stoneMat);
      pR.position.y = 0.3;
      const bR = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 1.3, 10), stoneMat);
      bR.position.y = 1.25;
      const hR = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 12), bronzeMat);
      hR.position.y = 2.05;
      aR.add(pR, bR, hR);
      aR.rotation.y = -Math.PI / 2;
      arhatGroup.add(aR);
    }
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
  // CÁC KHU TƯƠNG TÁC: CHUÔNG BÁT NHÃ, MÕ GỖ, BÀN LẤY HƯƠNG, BÀN XIN XĂM
  // =========================================================================
  createInteractiveStations() {
    // 1. ĐẠI HỒNG CHUNG (CHUÔNG ĐỒNG & CHÀY GÕ)
    const bellGroup = new THREE.Group();
    bellGroup.position.set(-8.2, 0, -2);

    const woodPostMat = new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.65 });
    const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 6.2, 14), woodPostMat);
    post1.position.set(-1.3, 3.1, 0);
    const post2 = post1.clone();
    post2.position.set(1.3, 3.1, 0);

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
    striker.position.set(1.4, 3.8, 0);
    this.bellStrikerMesh = striker;

    bellGroup.add(post1, post2, cross, bell, striker);
    this.scene.add(bellGroup);

    // 2. MÕ GỖ BÁT NHÃ & KỆ GỖ TRẦM
    const woodfishGroup = new THREE.Group();
    woodfishGroup.position.set(8.2, 0, -2);

    const tableMat = new THREE.MeshStandardMaterial({ color: 0x3d0e07, roughness: 0.45 });
    const table = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.35, 1.2, 20), tableMat);
    table.position.y = 0.6;

    const cushion = new THREE.Mesh(
      new THREE.CylinderGeometry(1.05, 1.15, 0.35, 20),
      new THREE.MeshStandardMaterial({ color: 0x9e1a1a, roughness: 0.75 })
    );
    cushion.position.y = 1.35;

    // Mõ gỗ chạm trổ hình ngư vảy cá dát màu cánh gián bóng
    const wf = new THREE.Mesh(
      new THREE.SphereGeometry(0.72, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0x7c3817, roughness: 0.32, metalness: 0.15 })
    );
    wf.scale.set(1.25, 0.88, 1.05);
    wf.position.set(0, 1.9, 0);
    this.woodfishMesh = wf;

    // Dùi mõ cán bọc vải đỏ đặt cạnh mõ
    const malletStick = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 1.1, 10),
      new THREE.MeshStandardMaterial({ color: 0xd49b56, roughness: 0.4 })
    );
    malletStick.rotation.z = Math.PI / 3;
    malletStick.position.set(-0.3, 1.95, 0.6);

    const malletHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x8a1515, roughness: 0.6 })
    );
    malletHead.position.set(-0.75, 2.2, 0.6);

    woodfishGroup.add(table, cushion, wf, malletStick, malletHead);
    this.scene.add(woodfishGroup);

    // 3. BÀN LẤY HƯƠNG TRẦM (INCENSE STATION)
    const incenseTableGroup = new THREE.Group();
    incenseTableGroup.position.set(-3.6, 0, -5.5);

    const tableIncense = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 1.1, 0.9),
      new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.5 })
    );
    tableIncense.position.y = 0.55;

    // Khay vàng đựng hương
    const tray = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 0.08, 0.6),
      new THREE.MeshStandardMaterial({ color: 0xbfa018, metalness: 0.85, roughness: 0.25 })
    );
    tray.position.y = 1.14;

    // Bó nhang trầm thơm hương đỏ
    const bundle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.14, 0.8, 14),
      new THREE.MeshStandardMaterial({ color: 0x8f2214, roughness: 0.8 })
    );
    bundle.rotation.z = Math.PI / 2;
    bundle.position.set(0, 1.25, 0);

    // Ngọn nến thắp hương
    const candleMini = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.35, 10),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    candleMini.position.set(0.42, 1.3, 0.15);
    const flameMini = new THREE.Mesh(
      new THREE.ConeGeometry(0.04, 0.12, 8),
      new THREE.MeshBasicMaterial({ color: 0xff6600 })
    );
    flameMini.position.set(0.42, 1.54, 0.15);

    incenseTableGroup.add(tableIncense, tray, bundle, candleMini, flameMini);
    this.scene.add(incenseTableGroup);

    // 4. BÀN XIN XĂM QUÁN ÂM (FORTUNE TUBE STATION)
    const fortuneTableGroup = new THREE.Group();
    fortuneTableGroup.position.set(3.6, 0, -5.5);

    const tableFortune = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 1.1, 0.9),
      new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.5 })
    );
    tableFortune.position.y = 0.55;

    // Khăn phủ gấm vàng
    const cloth = new THREE.Mesh(
      new THREE.BoxGeometry(1.25, 0.04, 0.75),
      new THREE.MeshStandardMaterial({ color: 0xe6a817, roughness: 0.65 })
    );
    cloth.position.y = 1.12;

    // ỐNG XĂM BẰNG TRE TRÊN BÀN (BAMBOO FORTUNE TUBE)
    const tubeGroup = new THREE.Group();
    tubeGroup.position.set(0, 1.14, 0);

    const tube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.16, 0.75, 16),
      new THREE.MeshStandardMaterial({ color: 0xa1773a, roughness: 0.55 })
    );
    tube.position.y = 0.38;
    tubeGroup.add(tube);

    // Các que xăm nhô lên khỏi miệng ống
    for (let s = 0; s < 12; s++) {
      const stick = new THREE.Mesh(
        new THREE.CylinderGeometry(0.015, 0.015, 0.85, 6),
        new THREE.MeshStandardMaterial({ color: 0xd4b07b, roughness: 0.6 })
      );
      const ang = (s / 12) * Math.PI * 2;
      const r = 0.09 * (s % 2 === 0 ? 0.7 : 1.0);
      stick.position.set(Math.cos(ang) * r, 0.52 + (s % 3) * 0.04, Math.sin(ang) * r);
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

  createParticleSystems() {
    // Incense smoke
    const smokeCount = 130;
    const smokeGeo = new THREE.BufferGeometry();
    const smokePos = new Float32Array(smokeCount * 3);
    const smokeVel = [];

    for (let i = 0; i < smokeCount; i++) {
      smokePos[i * 3] = (Math.random() - 0.5) * 0.25;
      smokePos[i * 3 + 1] = 2.1 + Math.random() * 2.6;
      smokePos[i * 3 + 2] = -6.2 + (Math.random() - 0.5) * 0.25;
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

    if (this.smokeParticles) {
      const pos = this.smokeParticles.geometry.attributes.position.array;
      for (let i = 0; i < this.smokeVel.length; i++) {
        pos[i * 3 + 1] += this.smokeVel[i].vy;
        pos[i * 3] += Math.sin(time * 3 + i) * 0.004 + this.smokeVel[i].vx;
        if (pos[i * 3 + 1] > 5.2) {
          pos[i * 3] = (Math.random() - 0.5) * 0.16;
          pos[i * 3 + 1] = 2.1;
          pos[i * 3 + 2] = -6.2 + (Math.random() - 0.5) * 0.16;
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
