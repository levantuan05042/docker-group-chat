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

    this.createEnvironment();
    this.createArchitecture();
    this.createTempleEntranceDoors();
    this.createGrandBuddhaAltar();
    this.createVenerablesAndBodhisattvas();
    this.createEighteenArhats();
    this.createAuthenticCushionsGrid(); // Hàng bồ đoàn vuông giống hệt ảnh meme
    this.createAtmosphericLighting();
    this.createParticleSystems();
  }

  createEnvironment() {
    this.scene.background = new THREE.Color(0x120a07);
    this.scene.fog = new THREE.FogExp2(0x120a07, 0.015);

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

    // Sàn gỗ mun đen bóng phản chiếu ánh nến (Dark polished timber floor)
    const floorGeo = new THREE.PlaneGeometry(36, 48, 16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x24140d,
      roughness: 0.28,
      metalness: 0.2
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

    // Bức họa Thangka cổ kính phía sau tượng Phật (như trong ảnh gốc)
    const muralCanvas = document.createElement('canvas');
    muralCanvas.width = 512;
    muralCanvas.height = 512;
    const mctx = muralCanvas.getContext('2d');
    const grad = mctx.createRadialGradient(256, 256, 20, 256, 256, 260);
    grad.addColorStop(0, '#7a3b12');
    grad.addColorStop(0.5, '#421a08');
    grad.addColorStop(1, '#1c0a04');
    mctx.fillStyle = grad;
    mctx.fillRect(0, 0, 512, 512);

    // Golden halo rays on mural
    mctx.strokeStyle = 'rgba(245, 175, 25, 0.25)';
    mctx.lineWidth = 3;
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 16) {
      mctx.beginPath();
      mctx.moveTo(256, 256);
      mctx.lineTo(256 + Math.cos(a) * 240, 256 + Math.sin(a) * 240);
      mctx.stroke();
    }

    const muralTexture = new THREE.CanvasTexture(muralCanvas);
    const muralMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 11),
      new THREE.MeshStandardMaterial({ map: muralTexture, roughness: 0.6 })
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
  // TƯỢNG PHẬT TỔ DÁT VÀNG & BÀN THỜ TAM BẢO (CHUẨN XÁC THEO ẢNH GỐC)
  // Tay phải giơ lên thuyết pháp, tay trái thiền định, tòa sen vàng, chân đèn nến
  // =========================================================================
  createGrandBuddhaAltar() {
    const altarGroup = new THREE.Group();
    altarGroup.position.set(0, 0, -8);

    // Bục giảng kinh sơn màu gụ sẫm nâng cao
    const dais = new THREE.Mesh(
      new THREE.BoxGeometry(11, 0.8, 6.5),
      new THREE.MeshStandardMaterial({ color: 0x2b1009, roughness: 0.4 })
    );
    dais.position.y = 0.4;
    dais.receiveShadow = true;
    altarGroup.add(dais);

    // Chất liệu Vàng Ròng Phật Thích Ca (Pure Radiant Gold)
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf5b722,
      roughness: 0.24,
      metalness: 0.72,
      emissive: 0x4a3205,
      emissiveIntensity: 0.32
    });

    const robeGoldMat = new THREE.MeshStandardMaterial({
      color: 0xe59f14,
      roughness: 0.34,
      metalness: 0.52,
      emissive: 0x382203,
      emissiveIntensity: 0.25
    });

    // Tòa Sen Dát Vàng Đa Tầng (Multi-tiered Lotus Throne)
    const lotusBase = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 4.2, 0.8, 24), goldMat);
    lotusBase.position.y = 1.1;

    // Các lớp cánh sen nở rộ
    for (let layer = 0; layer < 2; layer++) {
      const radius = 3.6 - layer * 0.25;
      const yPos = 1.4 + layer * 0.4;
      const count = 18 - layer * 2;

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (layer * Math.PI) / count;
        const petal = new THREE.Mesh(new THREE.ConeGeometry(0.52, 1.25, 4), goldMat);
        petal.position.set(Math.cos(angle) * radius, yPos, Math.sin(angle) * radius);
        petal.rotation.x = Math.PI / 4.2;
        petal.rotation.y = -angle + Math.PI / 2;
        altarGroup.add(petal);
      }
    }
    altarGroup.add(lotusBase);

    // THÂN PHẬT TỔ (SEATED BUDDHA STATUE)
    // Chân bắt chéo Kim Cương Tọa (Kiết già)
    const lap = new THREE.Group();
    lap.position.set(0, 2.1, 0.1);

    const thighL = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.68, 2.7, 16), robeGoldMat);
    thighL.rotation.z = Math.PI / 2.3;
    thighL.rotation.y = Math.PI / 6;
    thighL.position.set(-0.95, 0.1, 0.2);

    const thighR = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.68, 2.7, 16), robeGoldMat);
    thighR.rotation.z = -Math.PI / 2.3;
    thighR.rotation.y = -Math.PI / 6;
    thighR.position.set(0.95, 0.1, 0.2);

    const rightSole = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.2, 0.8), goldMat);
    rightSole.rotation.x = Math.PI / 3;
    rightSole.position.set(-0.35, 0.35, 0.85);

    lap.add(thighL, thighR, rightSole);
    altarGroup.add(lap);

    // Thân trên & Áo cà sa nếp gấp mềm mại
    const torso = new THREE.Group();
    torso.position.set(0, 3.8, 0);

    const belly = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.4, 1.6, 20), robeGoldMat);
    belly.position.y = -0.3;

    const chest = new THREE.Mesh(new THREE.SphereGeometry(1.38, 22, 22), goldMat);
    chest.scale.set(1.28, 0.95, 1.0);
    chest.position.y = 0.55;

    // Vạt áo cà sa vắt chéo qua vai trái để hở vai phải
    const robeSash = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.18, 12, 28, Math.PI), robeGoldMat);
    robeSash.rotation.z = -Math.PI / 4;
    robeSash.rotation.x = Math.PI / 10;
    robeSash.position.set(-0.15, 0.5, 0.3);

    torso.add(belly, chest, robeSash);
    altarGroup.add(torso);

    // HAI TAY THỦ ẤN (EXACTLY AS IN PHOTO):
    // Tay trái đặt ngửa trên đùi (Thiền Định Ấn)
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.42, 1.6, 14), robeGoldMat);
    armL.rotation.z = Math.PI / 3.2;
    armL.position.set(-1.18, 3.8, 0.2);

    const foreArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 1.4, 14), goldMat);
    foreArmL.rotation.x = Math.PI / 2.2;
    foreArmL.rotation.z = -Math.PI / 4;
    foreArmL.position.set(-0.65, 2.9, 0.6);

    const handL = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.48), goldMat);
    handL.position.set(-0.12, 2.75, 0.95);

    // TAY PHẢI NÂNG CAO NGANG NGỰC (Thuyết Pháp / Vô Úy Ấn - như ảnh gốc)
    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.42, 1.5, 14), goldMat);
    armR.rotation.z = -Math.PI / 4.5;
    armR.position.set(1.22, 4.0, 0.1);

    const foreArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.32, 1.4, 14), goldMat);
    foreArmR.rotation.x = -Math.PI / 5;
    foreArmR.rotation.z = Math.PI / 7;
    foreArmR.position.set(1.18, 4.7, 0.55);

    const handR = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.48, 0.14), goldMat);
    handR.position.set(1.08, 5.25, 0.78);
    handR.rotation.y = -Math.PI / 8;

    altarGroup.add(armL, foreArmL, handL, armR, foreArmR, handR);

    // PHẬT DIỆN TỪ BI VIÊN MÃN (HEAD)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 5.85, 0.05);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.88, 24, 24), goldMat);
    const ushnisha = new THREE.Mesh(new THREE.SphereGeometry(0.44, 20, 20), goldMat);
    ushnisha.position.set(0, 0.9, 0);

    const chintamani = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.35, 10),
      new THREE.MeshStandardMaterial({ color: 0xff3b00, emissive: 0xff4500, emissiveIntensity: 0.6 })
    );
    chintamani.position.set(0, 1.38, 0);

    // Urna & tai dài chấm vai
    const urna = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffe6aa, emissiveIntensity: 0.9 })
    );
    urna.position.set(0, 0.12, 0.86);

    const earGeo = new THREE.CylinderGeometry(0.075, 0.065, 0.88, 10);
    const earL = new THREE.Mesh(earGeo, goldMat);
    earL.position.set(-0.9, -0.15, 0);
    const earR = earL.clone();
    earR.position.set(0.9, -0.15, 0);

    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x3d2612 });
    const eyeL = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.016, 6, 14, Math.PI), eyeMat);
    eyeL.position.set(-0.25, -0.02, 0.8);
    eyeL.rotation.z = Math.PI;

    const eyeR = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.016, 6, 14, Math.PI), eyeMat);
    eyeR.position.set(0.25, -0.02, 0.8);
    eyeR.rotation.z = Math.PI;

    headGroup.add(head, ushnisha, chintamani, urna, earL, earR, eyeL, eyeR);
    altarGroup.add(headGroup);

    // ĐÔI CHÂN ĐÈN NẾN BÊN BÀN THỜ (AS SEEN IN PHOTO)
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

      const cLight = new THREE.PointLight(0xff9922, 1.5, 8);
      cLight.position.set(cx, 2.8, 1.2);
      this.candleLights.push(cLight);

      altarGroup.add(stand, candle, flame, cLight);
    });

    // Lư hương đồng lớn ở giữa phía trước
    const burner = new THREE.Mesh(
      new THREE.CylinderGeometry(0.65, 0.52, 0.6, 18),
      new THREE.MeshStandardMaterial({ color: 0x94743e, metalness: 0.8, roughness: 0.3 })
    );
    burner.position.set(0, 1.1, 1.8);

    // 3 nén hương bén lửa khói bay
    for (let i = -1; i <= 1; i++) {
      const stick = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.8),
        new THREE.MeshBasicMaterial({ color: 0xaa2211 })
      );
      stick.position.set(i * 0.12, 1.7, 1.8);

      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff4500 }));
      tip.position.set(i * 0.12, 2.1, 1.8);
      altarGroup.add(stick, tip);
    }
    altarGroup.add(burner);

    // Ánh sáng vàng quang minh rực rỡ từ Phật
    this.buddhaAuraLight = new THREE.PointLight(0xffb84d, 4.5, 20);
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

  // =========================================================================
  // CHUÔNG BÁT NHÃ & MÕ GỖ
  // =========================================================================
  createBellsAndWoodfish() {
    // Chuông Bát Nhã
    const bellGroup = new THREE.Group();
    bellGroup.position.set(-8.5, 0, -2);
    const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 6.2, 12), new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.7 }));
    post1.position.set(-1.25, 3.1, 0);
    const post2 = post1.clone();
    post2.position.set(1.25, 3.1, 0);
    const cross = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.4, 0.4), new THREE.MeshStandardMaterial({ color: 0x3d170f, roughness: 0.7 }));
    cross.position.set(0, 5.9, 0);
    const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.45, 2.5, 24), new THREE.MeshStandardMaterial({ color: 0x8f7540, metalness: 0.85, roughness: 0.28 }));
    bell.position.set(0, 4.1, 0);
    bellGroup.add(post1, post2, cross, bell);
    this.scene.add(bellGroup);

    // Mõ Gỗ
    const woodfishGroup = new THREE.Group();
    woodfishGroup.position.set(8.5, 0, -2);
    const table = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.3, 1.2, 16), new THREE.MeshStandardMaterial({ color: 0x3d0e07, roughness: 0.5 }));
    table.position.y = 0.6;
    const cushion = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.15, 0.35, 16), new THREE.MeshStandardMaterial({ color: 0xb51a1a, roughness: 0.7 }));
    cushion.position.y = 1.35;
    const wf = new THREE.Mesh(new THREE.SphereGeometry(0.68, 16, 16), new THREE.MeshStandardMaterial({ color: 0x8a401a, roughness: 0.35 }));
    wf.scale.set(1.25, 0.85, 1.05);
    wf.position.set(0, 1.88, 0);
    woodfishGroup.add(table, cushion, wf);
    this.scene.add(woodfishGroup);
  }

  // =========================================================================
  // ÁNH SÁNG ẤM CÚNG & VOLUMETRIC GOD RAYS TỪ CỬA SỔ
  // =========================================================================
  createAtmosphericLighting() {
    // Ambient light warm
    const ambientLight = new THREE.AmbientLight(0xffebd2, 0.82);
    this.scene.add(ambientLight);

    // Directional light chiếu xiên từ cửa sổ bên trái (như ảnh gốc)
    const sunLight = new THREE.DirectionalLight(0xfff5e6, 1.4);
    sunLight.position.set(-20, 16, 6);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.001;
    this.scene.add(sunLight);

    // Warm glow at the entrance door
    const entranceLight = new THREE.PointLight(0xff9922, 1.6, 12);
    entranceLight.position.set(0, 5.5, 19.0);
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
