import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export class AvatarManager {
  constructor(scene) {
    this.scene = scene;
    this.avatars = new Map();
    this.localPlayerId = null;
  }

  setLocalPlayerId(id) {
    this.localPlayerId = id;
  }

  // =========================================================================
  // TẠO NHÂN VẬT ĐỒNG TU THẬT (REALISTIC HUMANOID BUDDHIST MONK)
  // Khuôn mặt giải phẫu người thật, mắt mũi miệng, 6 chấm giới điệp,
  // Cổ áo tràng vạt chéo chữ V truyền thống, chuỗi 108 hạt, bàn tay 5 ngón,
  // Props tương tác: dùi gõ mõ, chày thỉnh chuông, 3 nén nhang đỏ khói, ống xăm tre
  // =========================================================================
  createAvatar(data) {
    const group = new THREE.Group();
    group.position.set(data.x || 0, data.y || 0, data.z || 0);
    if (typeof data.rotY === 'number') {
      group.rotation.y = data.rotY;
    }

    const robeSashColorHex = parseInt((data.robeColor || '#E69500').replace('#', '0x'), 16);

    // MATERIALS
    const innerRobeMat = new THREE.MeshStandardMaterial({
      color: 0xd4d4dc, // Vải áo tràng lam / nâu tro thiền môn
      roughness: 0.72,
      metalness: 0.05
    });

    const sashRobeMat = new THREE.MeshStandardMaterial({
      color: robeSashColorHex, // Y cà sa hoàng y / hoại sắc
      roughness: 0.58,
      metalness: 0.1
    });

    const collarMat = new THREE.MeshStandardMaterial({
      color: 0x5a3e2b, // Viền cổ áo lam/nâu truyền thống
      roughness: 0.6
    });

    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xf5cfb3, // Tông da người thật tự nhiên, mịn màng
      roughness: 0.45,
      metalness: 0.0
    });

    const eyePupilMat = new THREE.MeshBasicMaterial({ color: 0x1a110a });
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const woodBeadMat = new THREE.MeshStandardMaterial({ color: 0x3b1e0f, roughness: 0.4 });
    const darkShoeMat = new THREE.MeshStandardMaterial({ color: 0x2b1c14, roughness: 0.75 });

    // 1. PELVIS HIERARCHY
    const pelvis = new THREE.Group();
    pelvis.position.y = 0.68;
    group.add(pelvis);

    // Tà áo tràng phủ dài qua đùi (Flowing Robe Skirt)
    const skirtGeo = new THREE.CylinderGeometry(0.33, 0.46, 0.58, 18);
    const skirt = new THREE.Mesh(skirtGeo, innerRobeMat);
    skirt.position.y = -0.16;
    pelvis.add(skirt);

    // Vạt cà sa vàng rủ phía sau thắt lưng
    const sashHanger = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.48, 0.07), sashRobeMat);
    sashHanger.position.set(-0.11, -0.12, -0.23);
    pelvis.add(sashHanger);

    // 2. LEGS & MONK SHOES
    const legGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.46, 12);
    const shoeGeo = new THREE.BoxGeometry(0.13, 0.085, 0.24);

    const legLGroup = new THREE.Group();
    legLGroup.position.set(-0.14, -0.22, 0);
    const legLMesh = new THREE.Mesh(legGeo, innerRobeMat);
    legLMesh.position.y = -0.19;
    const footL = new THREE.Mesh(shoeGeo, darkShoeMat);
    footL.position.set(0, -0.42, 0.05);
    legLGroup.add(legLMesh, footL);

    const legRGroup = new THREE.Group();
    legRGroup.position.set(0.14, -0.22, 0);
    const legRMesh = new THREE.Mesh(legGeo, innerRobeMat);
    legRMesh.position.y = -0.19;
    const footR = new THREE.Mesh(shoeGeo, darkShoeMat);
    footR.position.set(0, -0.42, 0.05);
    legRGroup.add(legRMesh, footR);

    pelvis.add(legLGroup, legRGroup);

    // 3. SPINE & TORSO
    const spineGroup = new THREE.Group();
    spineGroup.position.y = 0.08;
    pelvis.add(spineGroup);

    const torsoGeo = new THREE.CylinderGeometry(0.29, 0.33, 0.54, 18);
    const torsoMesh = new THREE.Mesh(torsoGeo, innerRobeMat);
    torsoMesh.position.y = 0.27;
    torsoMesh.castShadow = true;
    spineGroup.add(torsoMesh);

    // Cổ áo tràng vạt chéo chữ V truyền thống (Traditional Vietnamese Monk Lapel)
    const collarL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.32, 0.02), collarMat);
    collarL.rotation.z = -Math.PI / 6;
    collarL.position.set(-0.08, 0.38, 0.29);

    const collarR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.32, 0.02), collarMat);
    collarR.rotation.z = Math.PI / 6;
    collarR.position.set(0.08, 0.38, 0.29);
    spineGroup.add(collarL, collarR);

    // Y Cà sa vắt chéo qua vai trái uyển chuyển
    const stoleGeo = new THREE.TorusGeometry(0.35, 0.085, 10, 24, Math.PI * 1.25);
    const stole = new THREE.Mesh(stoleGeo, sashRobeMat);
    stole.rotation.z = -Math.PI / 3.2;
    stole.rotation.y = Math.PI / 12;
    stole.position.set(0.04, 0.34, 0.07);
    spineGroup.add(stole);

    // 4. CHUỖI TRÀNG HẠT 108 HẠT QUANH CỔ (BUDDHIST ROSARY / MALA BEADS)
    const malaGroup = new THREE.Group();
    malaGroup.position.set(0, 0.44, 0.12);
    const malaRing = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.022, 8, 30), woodBeadMat);
    malaRing.rotation.x = Math.PI / 2.6;
    const malaPendant = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.025, 0.12, 8), woodBeadMat);
    malaPendant.position.set(0, -0.16, 0.18);
    malaGroup.add(malaRing, malaPendant);
    spineGroup.add(malaGroup);

    const chestGroup = new THREE.Group();
    chestGroup.position.y = 0.50;
    spineGroup.add(chestGroup);

    // 5. ĐẦU VÀ KHUÔN MẶT NGƯỜI THẬT (REALISTIC HUMAN MONK HEAD)
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.24;
    chestGroup.add(headGroup);

    // Hộp sọ có đường nét giải phẫu người (trán, cằm, gò má)
    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.32, 24, 24), skinMat);
    headMesh.scale.set(0.96, 1.08, 1.02);
    headMesh.position.y = 0.18;
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Cằm người thật
    const chin = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), skinMat);
    chin.position.set(0, -0.06, 0.24);
    headGroup.add(chin);

    // 6 CHẤM HƯƠNG GIỚI ĐIỆP (TẤN HƯƠNG) TRÊN ĐỈNH ĐẦU
    const vowDotMat = new THREE.MeshBasicMaterial({ color: 0x9e6c4f });
    [-0.04, 0.04].forEach(dx => {
      [-0.07, 0, 0.07].forEach(dz => {
        const dot = new THREE.Mesh(new THREE.CircleGeometry(0.016, 8), vowDotMat);
        dot.rotation.x = -Math.PI / 2;
        dot.position.set(dx, 0.525, dz - 0.02);
        headGroup.add(dot);
      });
    });

    // Mắt người thật: Màng củng mạc trắng + Tròng đen + Lông mày
    [-0.1, 0.1].forEach(ex => {
      const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 10), eyeWhiteMat);
      eyeWhite.scale.set(1.0, 0.6, 0.6);
      eyeWhite.position.set(ex, 0.19, 0.30);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.024, 8, 8), eyePupilMat);
      pupil.position.set(ex, 0.19, 0.325);

      const eyebrow = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.018, 0.02), collarMat);
      eyebrow.rotation.z = ex > 0 ? -0.15 : 0.15;
      eyebrow.position.set(ex, 0.245, 0.31);

      headGroup.add(eyeWhite, pupil, eyebrow);
    });

    // Sống mũi người thật
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.14, 6), skinMat);
    nose.rotation.x = -0.25;
    nose.position.set(0, 0.13, 0.34);
    headGroup.add(nose);

    // Đôi môi người mỉm cười nhẹ nhõm, an lạc
    const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 12, Math.PI), collarMat);
    mouth.rotation.x = Math.PI / 2;
    mouth.rotation.z = Math.PI;
    mouth.position.set(0, 0.04, 0.32);
    headGroup.add(mouth);

    // Đôi tai người thật với dái tai
    [-0.32, 0.32].forEach(earX => {
      const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.15, 10), skinMat);
      ear.position.set(earX, 0.16, 0.02);
      headGroup.add(ear);
    });

    // 6. ARMS WITH REALISTIC HANDS & SLEEVES
    const armGeo = new THREE.CylinderGeometry(0.09, 0.13, 0.42, 14);

    // Helper tạo bàn tay 5 ngón
    const createHand = () => {
      const hGroup = new THREE.Group();
      const palm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.05), skinMat);
      hGroup.add(palm);
      for (let f = 0; f < 4; f++) {
        const finger = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.014, 0.11, 6), skinMat);
        finger.position.set((f - 1.5) * 0.028, 0.11, 0);
        hGroup.add(finger);
      }
      const thumb = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.016, 0.09, 6), skinMat);
      thumb.rotation.z = -Math.PI / 4;
      thumb.position.set(0.065, 0.02, 0);
      hGroup.add(thumb);
      return hGroup;
    };

    const armLGroup = new THREE.Group();
    armLGroup.position.set(-0.33, 0.1, 0);
    const upperArmL = new THREE.Mesh(armGeo, sashRobeMat);
    upperArmL.position.set(0, -0.17, 0);
    const foreArmL = new THREE.Group();
    foreArmL.position.set(0, -0.34, 0);
    const handL = createHand();
    handL.position.set(0, -0.06, 0.12);
    foreArmL.add(handL);
    armLGroup.add(upperArmL, foreArmL);

    const armRGroup = new THREE.Group();
    armRGroup.position.set(0.33, 0.1, 0);
    const upperArmR = new THREE.Mesh(armGeo, innerRobeMat);
    upperArmR.position.set(0, -0.17, 0);
    const foreArmR = new THREE.Group();
    foreArmR.position.set(0, -0.34, 0);
    const handR = createHand();
    handR.position.set(0, -0.06, 0.12);
    foreArmR.add(handR);
    armRGroup.add(upperArmR, foreArmR);

    chestGroup.add(armLGroup, armRGroup);

    // =========================================================================
    // PROPS TƯƠNG TÁC GẮN VÀO TAY (MALLET, BELL STRIKER, INCENSE, FORTUNE TUBE)
    // =========================================================================
    // A. Dùi gõ mõ cầm tay phải
    const malletProp = new THREE.Group();
    const mStick = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6, 8), woodBeadMat);
    const mHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 10, 10),
      new THREE.MeshStandardMaterial({ color: 0x8a1515, roughness: 0.5 })
    );
    mHead.position.y = 0.3;
    malletProp.add(mStick, mHead);
    malletProp.rotation.x = Math.PI / 2;
    malletProp.position.set(0, 0.08, 0.22);
    malletProp.visible = false;
    foreArmR.add(malletProp);

    // B. Chày đúc thỉnh chuông cầm tay phải
    const bellStrikerProp = new THREE.Group();
    const bWood = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.75, 8), collarMat);
    bellStrikerProp.add(bWood);
    bellStrikerProp.rotation.x = Math.PI / 2.2;
    bellStrikerProp.position.set(0, 0.08, 0.25);
    bellStrikerProp.visible = false;
    foreArmR.add(bellStrikerProp);

    // C. 3 nén nhang đỏ khói cầm hai tay
    const incenseProp = new THREE.Group();
    incenseProp.position.set(0, 0.18, 0.32);
    for (let s = -1; s <= 1; s++) {
      const stick = new THREE.Mesh(
        new THREE.CylinderGeometry(0.008, 0.008, 0.55),
        new THREE.MeshBasicMaterial({ color: 0xaa2211 })
      );
      stick.position.set(s * 0.04, 0.15, 0);
      const tip = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xff3b00 })
      );
      tip.position.set(s * 0.04, 0.43, 0);
      incenseProp.add(stick, tip);
    }
    incenseProp.visible = false;
    chestGroup.add(incenseProp);

    // D. Ống xăm tre cầm 2 tay để lắc xóc
    const fortuneProp = new THREE.Group();
    fortuneProp.position.set(0, 0.12, 0.35);
    const fTube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.11, 0.5, 14),
      new THREE.MeshStandardMaterial({ color: 0xa1773a, roughness: 0.5 })
    );
    fortuneProp.add(fTube);
    for (let k = 0; k < 6; k++) {
      const fs = new THREE.Mesh(
        new THREE.CylinderGeometry(0.01, 0.01, 0.56),
        new THREE.MeshStandardMaterial({ color: 0xd4b07b })
      );
      fs.position.set((Math.random() - 0.5) * 0.12, 0.18, (Math.random() - 0.5) * 0.12);
      fortuneProp.add(fs);
    }
    fortuneProp.visible = false;
    chestGroup.add(fortuneProp);

    // Bồ đoàn riêng khi ngồi
    const cushion = new THREE.Mesh(
      new THREE.BoxGeometry(0.92, 0.12, 0.92),
      new THREE.MeshStandardMaterial({ color: 0x3d3d42, roughness: 0.85 })
    );
    cushion.position.y = 0.06;
    cushion.visible = false;
    group.add(cushion);

    // CSS2D UI Container
    const uiContainer = document.createElement('div');
    uiContainer.className = 'avatar-ui-container';

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'avatar-speech-bubble hidden';
    bubbleEl.innerHTML = `<div class="bubble-text"></div><div class="bubble-tail"></div>`;

    const tagEl = document.createElement('div');
    tagEl.className = 'avatar-nametag meme-style' + (data.id === this.localPlayerId ? ' is-me' : '');
    tagEl.innerHTML = `<span class="nametag-text">${this.escapeHtml(data.name || 'Thích thì nhích')}</span>`;

    uiContainer.appendChild(bubbleEl);
    uiContainer.appendChild(tagEl);

    const css2dObject = new CSS2DObject(uiContainer);
    css2dObject.position.set(0, 1.95, 0);
    group.add(css2dObject);

    this.scene.add(group);

    const avatarInstance = {
      id: data.id,
      name: data.name,
      robeColor: data.robeColor,
      group,
      pelvis,
      skirt,
      legLGroup,
      legRGroup,
      spineGroup,
      chestGroup,
      headGroup,
      armLGroup,
      armRGroup,
      foreArmL,
      foreArmR,
      cushion,
      css2dObject,
      uiContainer,
      bubbleEl,
      tagEl,
      bubbleTimeout: null,
      targetX: data.x || 0,
      targetZ: data.z || 0,
      targetRotY: data.rotY || 0,
      action: data.action || 'stand',
      actionTimer: 0,
      walkCycle: Math.random() * 10,
      isMoving: false,
      merit: data.merit || 0,
      props: {
        mallet: malletProp,
        bellStriker: bellStrikerProp,
        incense: incenseProp,
        fortune: fortuneProp
      }
    };

    this.avatars.set(data.id, avatarInstance);

    if (data.currentBubble && data.currentBubble.text) {
      this.showBubble(data.id, data.currentBubble.text, 5000);
    }

    return avatarInstance;
  }

  setAction(id, action) {
    const av = this.avatars.get(id);
    if (!av) return;
    av.action = action;
    av.actionTimer = 0;

    // Reset visibility of hand props
    if (av.props) {
      av.props.mallet.visible = (action === 'strikeWoodfish');
      av.props.bellStriker.visible = (action === 'strikeBell');
      av.props.incense.visible = (action === 'incense' || action === 'plantIncense');
      av.props.fortune.visible = (action === 'shakeFortune');
    }

    if (action === 'sit') {
      av.cushion.visible = true;
    } else {
      av.cushion.visible = false;
    }
  }

  showBubble(id, text, duration = 5000) {
    const av = this.avatars.get(id);
    if (!av) return;

    const bubbleText = av.bubbleEl.querySelector('.bubble-text');
    if (bubbleText) bubbleText.textContent = text;
    av.bubbleEl.classList.remove('hidden');

    if (av.bubbleTimeout) clearTimeout(av.bubbleTimeout);
    av.bubbleTimeout = setTimeout(() => {
      av.bubbleEl.classList.add('hidden');
    }, duration);
  }

  updateAvatarData(id, data) {
    const av = this.avatars.get(id);
    if (!av) return;
    if (typeof data.x === 'number') av.targetX = data.x;
    if (typeof data.z === 'number') av.targetZ = data.z;
    if (typeof data.rotY === 'number') av.targetRotY = data.rotY;
    if (data.action) this.setAction(id, data.action);
  }

  removeAvatar(id) {
    const av = this.avatars.get(id);
    if (av) {
      this.scene.remove(av.group);
      this.avatars.delete(id);
    }
  }

  // =========================================================================
  // BỘ MÔ PHỎNG ĐỘNG TÁC NHÂN VẬT THỰC TẾ
  // 1: Bước đi uyển chuyển đong đưa hông, vung tay nhịp chân
  // 2: Ngồi kiết già tĩnh tâm, lồng ngực thở êm ái
  // 3: Chắp tay búp sen lạy Phật 3 lạy ngũ thể đầu địa
  // 4: Gõ mõ liên tục nhịp nhàng với dùi gõ
  // 5: Thỉnh chuông vung chày đánh 1 tiếng vang rền
  // 6: Thắp hương nâng ngang trán vái 3 vái rồi cắm vào lư
  // 7: Cầm ống xăm lắc xóc xóc rơi thẻ
  // =========================================================================
  update(delta) {
    const time = Date.now() * 0.003;

    this.avatars.forEach(av => {
      av.actionTimer += delta;

      const dx = av.targetX - av.group.position.x;
      const dz = av.targetZ - av.group.position.z;
      const dist = Math.hypot(dx, dz);

      if (dist > 0.02) {
        av.isMoving = true;
        av.group.position.x += dx * 0.25;
        av.group.position.z += dz * 0.25;

        if (av.action === 'sit') {
          this.setAction(av.id, 'stand');
        }
      } else {
        av.isMoving = false;
      }

      let diffRot = av.targetRotY - av.group.rotation.y;
      while (diffRot < -Math.PI) diffRot += Math.PI * 2;
      while (diffRot > Math.PI) diffRot -= Math.PI * 2;
      av.group.rotation.y += diffRot * 0.25;

      // 1. WALKING GAIT (ĐI LẠI TỰ NHIÊN)
      if (av.isMoving) {
        av.walkCycle += delta * 11;
        const cycle = av.walkCycle;

        const legSwing = Math.sin(cycle) * 0.55;
        av.legLGroup.rotation.x = legSwing;
        av.legRGroup.rotation.x = -legSwing;

        av.pelvis.position.y = 0.65 + Math.abs(Math.sin(cycle)) * 0.045;
        av.pelvis.rotation.y = Math.sin(cycle) * 0.06;
        av.pelvis.rotation.z = Math.cos(cycle) * 0.025;

        av.spineGroup.rotation.y = -Math.sin(cycle) * 0.08;
        av.spineGroup.rotation.x = 0.08;

        av.armLGroup.rotation.x = -Math.sin(cycle) * 0.45;
        av.armLGroup.rotation.z = -0.15;
        av.armRGroup.rotation.x = Math.sin(cycle) * 0.45;
        av.armRGroup.rotation.z = 0.15;

        av.foreArmL.rotation.x = 0.2 + Math.max(0, -Math.sin(cycle) * 0.25);
        av.foreArmR.rotation.x = 0.2 + Math.max(0, Math.sin(cycle) * 0.25);

        av.headGroup.rotation.x = Math.sin(cycle * 2) * 0.03;
        av.headGroup.rotation.y = 0;
        return;
      }

      // 2. NGỒI THIỀN TRÊN BỒ ĐOÀN (SITTING MEDITATION)
      if (av.action === 'sit') {
        av.pelvis.position.y = 0.26;
        av.pelvis.rotation.set(0, 0, 0);

        av.legLGroup.rotation.set(Math.PI / 2.3, 0.35, -0.2);
        av.legRGroup.rotation.set(Math.PI / 2.3, -0.35, 0.2);

        av.spineGroup.rotation.set(0, 0, 0);

        // Hai tay đặt ngửa trong lòng (Thiền Định Ấn)
        av.armLGroup.rotation.set(0.4, 0, -0.3);
        av.armRGroup.rotation.set(0.4, 0, 0.3);
        av.foreArmL.rotation.set(0.7, 0.4, 0);
        av.foreArmR.rotation.set(0.7, -0.4, 0);

        av.headGroup.rotation.set(0.06, 0, 0);

        const breathe = Math.sin(time * 1.6) * 0.025;
        av.chestGroup.scale.set(1 + breathe, 1 + breathe * 0.8, 1 + breathe);
        return;
      }

      // 3. LẠY PHẬT 3 LẠY (BOW 3 TIMES FULL PROSTRATION)
      if (av.action === 'bow' || av.action === 'bow3Times') {
        const bowCycleDuration = 2.4; // 2.4s mỗi lạy
        const cycleProgress = (av.actionTimer % bowCycleDuration) / bowCycleDuration;
        const bowNumber = Math.min(3, Math.floor(av.actionTimer / bowCycleDuration) + 1);

        // Sinusoidal curve for 1 bow: 0 -> 1 (lạy sát đất) -> 0 (đứng dậy)
        const bowPhase = Math.sin(cycleProgress * Math.PI);

        // Hạ người rạp sát sàn
        av.pelvis.position.y = 0.65 - bowPhase * 0.45;
        av.spineGroup.rotation.x = bowPhase * 1.05;
        av.headGroup.rotation.x = bowPhase * 0.45;

        av.legLGroup.rotation.x = -bowPhase * 0.6;
        av.legRGroup.rotation.x = -bowPhase * 0.6;

        // Tay chắp búp sen nâng lên rồi mở đón sen sát sàn
        av.armLGroup.rotation.set(0.7 + bowPhase * 0.5, 0, -0.2 - bowPhase * 0.3);
        av.armRGroup.rotation.set(0.7 + bowPhase * 0.5, 0, 0.2 + bowPhase * 0.3);
        av.foreArmL.rotation.set(1.0 + bowPhase * 0.3, 0.6, 0);
        av.foreArmR.rotation.set(1.0 + bowPhase * 0.3, -0.6, 0);

        // Sau 3 lạy (7.2s) thì đứng thẳng chắp tay
        if (av.actionTimer >= 7.2) {
          av.action = 'stand';
          av.actionTimer = 0;
        }
        return;
      }

      // 4. GÕ MÕ LIÊN TỤC (STRIKE WOODFISH CONTINUOUS)
      if (av.action === 'strikeWoodfish') {
        av.pelvis.position.y = 0.65;
        av.pelvis.rotation.set(0, 0, 0);
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);
        av.spineGroup.rotation.set(0.12, 0, 0);

        // Tay trái giữ nhịp
        av.armLGroup.rotation.set(0.5, 0, -0.25);
        av.foreArmL.rotation.set(0.7, 0.3, 0);

        // Tay phải cầm dùi gõ nhịp mõ đều đặn ~1.05s
        const tapCycle = (av.actionTimer * 6.0) % (Math.PI * 2);
        const strike = Math.sin(tapCycle);
        av.armRGroup.rotation.set(0.75 + Math.max(0, strike) * 0.28, 0, 0.05);
        av.foreArmR.rotation.set(0.85 + Math.max(0, strike) * 0.35, 0, 0);
        av.headGroup.rotation.x = Math.max(0, strike) * 0.08;
        return;
      }

      // 5. THỈNH CHUÔNG (STRIKE BELL ONCE)
      if (av.action === 'strikeBell') {
        av.pelvis.position.y = 0.65;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

        // 0 -> 1.0s: Nâng chày lấy đà ra sau. 1.0s -> 1.4s: Vung mạnh về trước đánh chuông!
        if (av.actionTimer < 1.0) {
          const windup = av.actionTimer / 1.0;
          av.spineGroup.rotation.set(0, -windup * 0.3, 0);
          av.armRGroup.rotation.set(1.2 * windup, 0, 0.3);
          av.foreArmR.rotation.set(0.8 * windup, 0, 0);
        } else if (av.actionTimer < 1.8) {
          const strikePhase = (av.actionTimer - 1.0) / 0.8;
          av.spineGroup.rotation.set(0.15, 0.2, 0);
          av.armRGroup.rotation.set(1.4 - strikePhase * 0.6, 0, -0.2);
          av.foreArmR.rotation.set(1.2 - strikePhase * 0.5, 0, 0);
        } else {
          // Xong 1 tiếng chuông thì hạ chày và quay về tư thế đứng
          this.setAction(av.id, 'stand');
        }
        return;
      }

      // 6. THẮP HƯƠNG (CẦM 3 NÉN VÁI RỒI CẮM VÀO LƯ)
      if (av.action === 'incense' || av.action === 'plantIncense') {
        av.pelvis.position.y = 0.65;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

        if (av.actionTimer < 3.8) {
          // 3 lần vái trang nghiêm (nâng 3 nén nhang ngang trán)
          const vPhase = Math.sin(av.actionTimer * 4.5);
          av.spineGroup.rotation.x = 0.15 + Math.max(0, vPhase) * 0.35;
          av.headGroup.rotation.x = Math.max(0, vPhase) * 0.2;
          av.armLGroup.rotation.set(0.85, 0, -0.2);
          av.armRGroup.rotation.set(0.85, 0, 0.2);
          av.foreArmL.rotation.set(1.1, 0.5, 0);
          av.foreArmR.rotation.set(1.1, -0.5, 0);
        } else if (av.actionTimer < 5.5) {
          // Cúi người cắm hương vào lư đồng
          const plantPhase = Math.sin(((av.actionTimer - 3.8) / 1.7) * Math.PI);
          av.spineGroup.rotation.x = plantPhase * 0.55;
          av.armLGroup.rotation.set(1.0 + plantPhase * 0.3, 0, -0.1);
          av.armRGroup.rotation.set(1.0 + plantPhase * 0.3, 0, 0.1);
        } else {
          this.setAction(av.id, 'stand');
        }
        return;
      }

      // 7. XIN XĂM (CẦM ỐNG XĂM XÓC XÓC RƠI THẺ)
      if (av.action === 'shakeFortune') {
        av.pelvis.position.y = 0.65;
        av.spineGroup.rotation.set(0.1, 0, 0);

        // Hai tay giữ ống xăm, rung lắc liên tục
        const rattle = Math.sin(av.actionTimer * 18);
        av.armLGroup.rotation.set(0.85 + rattle * 0.15, 0, -0.25);
        av.armRGroup.rotation.set(0.85 + rattle * 0.15, 0, 0.25);
        av.foreArmL.rotation.set(1.15 + rattle * 0.2, 0.4, 0);
        av.foreArmR.rotation.set(1.15 + rattle * 0.2, -0.4, 0);
        av.headGroup.rotation.x = 0.1 + Math.abs(rattle) * 0.05;
        return;
      }

      // 8. TƯ THẾ ĐỨNG CHẮP TAY AN NHIÊN (STANDING IDLE)
      av.pelvis.position.y = 0.65;
      av.pelvis.rotation.set(0, 0, 0);
      av.legLGroup.rotation.set(0, 0, 0);
      av.legRGroup.rotation.set(0, 0, 0);
      av.spineGroup.rotation.set(0, 0, 0);

      // Hai tay chắp búp sen nhẹ nhàng trước ngực (Añjali Mudra)
      av.armLGroup.rotation.set(0.65, 0, -0.35);
      av.armRGroup.rotation.set(0.65, 0, 0.35);
      av.foreArmL.rotation.set(0.95, 0.55, 0);
      av.foreArmR.rotation.set(0.95, -0.55, 0);

      const idleBreathe = Math.sin(time * 1.8) * 0.015;
      av.chestGroup.scale.set(1 + idleBreathe, 1 + idleBreathe * 0.6, 1 + idleBreathe);
      av.headGroup.rotation.x = Math.sin(time * 1.2) * 0.02;
      av.headGroup.rotation.y = Math.sin(time * 0.8) * 0.025;
    });
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
