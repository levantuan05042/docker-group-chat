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
  // TẠO NHÂN VẬT ĐỒNG TU MEME CHUẨN ĐẸP (CLEAN, ADORABLE CHIBI MONK)
  // Lấy cảm hứng trực tiếp từ bức ảnh gốc meme Sansa:
  // Đầu tròn nhẵn mịn phúc hậu, áo lam thanh nhã, vạt cà sa vàng rực rỡ,
  // Dáng ngồi kiết già vững chãi trên bồ đoàn vuông, nametag chữ trắng sắc nét
  // =========================================================================
  createAvatar(data) {
    const group = new THREE.Group();
    group.position.set(data.x || 0, data.y || 0, data.z || 0);
    if (typeof data.rotY === 'number') {
      group.rotation.y = data.rotY;
    }

    const robeSashColorHex = parseInt((data.robeColor || '#f5a623').replace('#', '0x'), 16);

    // MATERIALS VẢI VÀ DA MỊN MÀNG (STUDIO PBR MATERIALS)
    const innerRobeMat = new THREE.MeshStandardMaterial({
      color: 0xdedee6, // Vải áo tràng màu tro lam / xám trắng thanh tịnh
      roughness: 0.65,
      metalness: 0.05
    });

    const sashRobeMat = new THREE.MeshStandardMaterial({
      color: robeSashColorHex, // Sắc y cà sa vàng nghệ tươi tắn
      roughness: 0.52,
      metalness: 0.08
    });

    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xffdfbe, // Làn da sáng hồng mịn màng phúc tướng
      roughness: 0.38,
      metalness: 0.0
    });

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x4a2411, roughness: 0.5 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x221711, roughness: 0.75 });

    // 1. PELVIS & SKIRT
    const pelvis = new THREE.Group();
    pelvis.position.y = 0.66;
    group.add(pelvis);

    // Tà áo tràng phủ xuống gối (Robe Skirt)
    const skirtGeo = new THREE.CylinderGeometry(0.32, 0.45, 0.56, 20);
    const skirt = new THREE.Mesh(skirtGeo, innerRobeMat);
    skirt.position.y = -0.15;
    pelvis.add(skirt);

    // Dải y cà sa rủ sau lưng
    const sashBack = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.46, 0.06), sashRobeMat);
    sashBack.position.set(-0.1, -0.12, -0.22);
    pelvis.add(sashBack);

    // 2. LEGS & MONK SHOES (ĐÔI CHÂN ĐI LẠI TỰ NHIÊN)
    const legGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.44, 12);
    const shoeGeo = new THREE.BoxGeometry(0.13, 0.085, 0.23);

    const legLGroup = new THREE.Group();
    legLGroup.position.set(-0.14, -0.22, 0);
    const legLMesh = new THREE.Mesh(legGeo, innerRobeMat);
    legLMesh.position.y = -0.18;
    const footL = new THREE.Mesh(shoeGeo, shoeMat);
    footL.position.set(0, -0.4, 0.04);
    legLGroup.add(legLMesh, footL);

    const legRGroup = new THREE.Group();
    legRGroup.position.set(0.14, -0.22, 0);
    const legRMesh = new THREE.Mesh(legGeo, innerRobeMat);
    legRMesh.position.y = -0.18;
    const footR = new THREE.Mesh(shoeGeo, shoeMat);
    footR.position.set(0, -0.4, 0.04);
    legRGroup.add(legRMesh, footR);

    pelvis.add(legLGroup, legRGroup);

    // 3. SPINE & TORSO (THÂN TRÊN VỚI VẠT CÀ SA ĐẸP MẮT)
    const spineGroup = new THREE.Group();
    spineGroup.position.y = 0.08;
    pelvis.add(spineGroup);

    const torsoGeo = new THREE.CylinderGeometry(0.28, 0.32, 0.52, 20);
    const torsoMesh = new THREE.Mesh(torsoGeo, innerRobeMat);
    torsoMesh.position.y = 0.26;
    torsoMesh.castShadow = true;
    spineGroup.add(torsoMesh);

    // Vạt cà sa vắt chéo qua vai trái (Saffron Sash Torus)
    const stoleGeo = new THREE.TorusGeometry(0.34, 0.08, 12, 24, Math.PI * 1.25);
    const stole = new THREE.Mesh(stoleGeo, sashRobeMat);
    stole.rotation.z = -Math.PI / 3.2;
    stole.rotation.y = Math.PI / 12;
    stole.position.set(0.04, 0.32, 0.06);
    spineGroup.add(stole);

    // Chuỗi hạt bồ đề đeo quanh cổ rủ trước ngực
    const rosary = new THREE.Mesh(new THREE.TorusGeometry(0.20, 0.02, 8, 24), woodMat);
    rosary.rotation.x = Math.PI / 2.6;
    rosary.position.set(0, 0.44, 0.12);
    spineGroup.add(rosary);

    const chestGroup = new THREE.Group();
    chestGroup.position.y = 0.48;
    spineGroup.add(chestGroup);

    // 4. ĐẦU TIỂU ĐỒNG TU TRÒN TRĨNH PHÚC HẬU (ADORABLE NOVICE MONK HEAD)
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.22;
    chestGroup.add(headGroup);

    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.32, 28, 28), skinMat);
    headMesh.scale.set(1.0, 1.05, 1.0);
    headMesh.position.y = 0.18;
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Nụ cười & đôi mắt từ bi an lạc (Stylized peaceful eyes)
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x2b1c11 });
    [-0.1, 0.1].forEach(ex => {
      // Đôi mắt khép hờ tĩnh tâm (arc curve)
      const eyeArc = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 12, Math.PI), eyeMat);
      eyeArc.rotation.z = Math.PI;
      eyeArc.position.set(ex, 0.19, 0.30);
      headGroup.add(eyeArc);
    });

    // Môi mỉm cười nhẹ nhõm
    const smile = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.009, 6, 10, Math.PI * 0.8), eyeMat);
    smile.rotation.x = Math.PI / 2.4;
    smile.rotation.z = Math.PI;
    smile.position.set(0, 0.08, 0.31);
    headGroup.add(smile);

    // Đôi tai tròn nhỏ dễ thương
    [-0.32, 0.32].forEach(earX => {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 10), skinMat);
      ear.scale.set(0.5, 1.0, 0.8);
      ear.position.set(earX, 0.17, 0.02);
      headGroup.add(ear);
    });

    // 5. HAI TAY & VẬT PHẨM CẦM TAY (ARMS & PROPS)
    const armGeo = new THREE.CylinderGeometry(0.09, 0.12, 0.38, 14);

    const createHand = () => {
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 12), skinMat);
      hand.scale.set(0.9, 1.0, 0.8);
      return hand;
    };

    const armLGroup = new THREE.Group();
    armLGroup.position.set(-0.32, 0.1, 0);
    const upperArmL = new THREE.Mesh(armGeo, sashRobeMat);
    upperArmL.position.set(0, -0.16, 0);
    const foreArmL = new THREE.Group();
    foreArmL.position.set(0, -0.32, 0);
    const handL = createHand();
    handL.position.set(0, -0.05, 0.12);
    foreArmL.add(handL);
    armLGroup.add(upperArmL, foreArmL);

    const armRGroup = new THREE.Group();
    armRGroup.position.set(0.32, 0.1, 0);
    const upperArmR = new THREE.Mesh(armGeo, innerRobeMat);
    upperArmR.position.set(0, -0.16, 0);
    const foreArmR = new THREE.Group();
    foreArmR.position.set(0, -0.32, 0);
    const handR = createHand();
    handR.position.set(0, -0.05, 0.12);
    foreArmR.add(handR);
    armRGroup.add(upperArmR, foreArmR);

    chestGroup.add(armLGroup, armRGroup);

    // =========================================================================
    // PROPS GẮN TAY (DÙI MÕ, CHÀY CHUÔNG, 3 NÉN HƯƠNG, ỐNG XĂM)
    // =========================================================================
    // Dùi gõ mõ
    const malletProp = new THREE.Group();
    const mStick = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.55, 8), woodMat);
    const mHead = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 10), new THREE.MeshStandardMaterial({ color: 0x8a1515, roughness: 0.4 }));
    mHead.position.y = 0.28;
    malletProp.add(mStick, mHead);
    malletProp.rotation.x = Math.PI / 2;
    malletProp.position.set(0, 0.08, 0.22);
    malletProp.visible = false;
    foreArmR.add(malletProp);

    // Chày thỉnh chuông
    const bellStrikerProp = new THREE.Group();
    const bWood = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.7, 8), woodMat);
    bellStrikerProp.add(bWood);
    bellStrikerProp.rotation.x = Math.PI / 2.2;
    bellStrikerProp.position.set(0, 0.08, 0.25);
    bellStrikerProp.visible = false;
    foreArmR.add(bellStrikerProp);

    // 3 nén hương bén lửa
    const incenseProp = new THREE.Group();
    incenseProp.position.set(0, 0.16, 0.3);
    for (let s = -1; s <= 1; s++) {
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.5), new THREE.MeshBasicMaterial({ color: 0xaa2211 }));
      stick.position.set(s * 0.04, 0.15, 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff4500 }));
      tip.position.set(s * 0.04, 0.4, 0);
      incenseProp.add(stick, tip);
    }
    incenseProp.visible = false;
    chestGroup.add(incenseProp);

    // Ống xăm tre
    const fortuneProp = new THREE.Group();
    fortuneProp.position.set(0, 0.12, 0.32);
    const fTube = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.11, 0.48, 14), new THREE.MeshStandardMaterial({ color: 0xa1773a, roughness: 0.5 }));
    fortuneProp.add(fTube);
    for (let k = 0; k < 6; k++) {
      const fs = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.54), new THREE.MeshStandardMaterial({ color: 0xd4b07b }));
      fs.position.set((Math.random() - 0.5) * 0.12, 0.18, (Math.random() - 0.5) * 0.12);
      fortuneProp.add(fs);
    }
    fortuneProp.visible = false;
    chestGroup.add(fortuneProp);

    // Bồ đoàn xám riêng gắn kèm khi ngồi thiền
    const cushion = new THREE.Mesh(
      new THREE.BoxGeometry(0.92, 0.12, 0.92),
      new THREE.MeshStandardMaterial({ color: 0x3d3d42, roughness: 0.85 })
    );
    cushion.position.y = 0.06;
    cushion.visible = false;
    group.add(cushion);

    // =========================================================================
    // CSS2D UI CONTAINER (MEME NAMETAG & CRISP SPEECH BUBBLE)
    // =========================================================================
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
    css2dObject.position.set(0, 1.88, 0);
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
    if (data.action && data.action !== av.action) {
      this.setAction(id, data.action);
    }
  }

  removeAvatar(id) {
    const av = this.avatars.get(id);
    if (av) {
      this.scene.remove(av.group);
      this.avatars.delete(id);
    }
  }

  // =========================================================================
  // BỘ MÔ PHỎNG ĐỘNG TÁC TỰ NHIÊN MƯỢT MÀ (NATURAL FLUID RIGGING)
  // =========================================================================
  update(delta) {
    const time = Date.now() * 0.003;

    this.avatars.forEach(av => {
      av.actionTimer += delta;

      const dx = av.targetX - av.group.position.x;
      const dz = av.targetZ - av.group.position.z;
      const dist = Math.hypot(dx, dz);

      // Only mark moving if actually traversing a noticeable distance
      if (dist > 0.04 && av.action !== 'sit') {
        av.isMoving = true;
        av.group.position.x += dx * 0.35;
        av.group.position.z += dz * 0.35;
      } else {
        av.isMoving = false;
        if (av.action === 'sit') {
          av.group.position.x = av.targetX;
          av.group.position.z = av.targetZ;
        } else if (dist > 0.001) {
          av.group.position.x += dx * 0.5;
          av.group.position.z += dz * 0.5;
        }
      }

      let diffRot = av.targetRotY - av.group.rotation.y;
      while (diffRot < -Math.PI) diffRot += Math.PI * 2;
      while (diffRot > Math.PI) diffRot -= Math.PI * 2;
      av.group.rotation.y += diffRot * 0.25;

      // 1. WALKING GAIT (ĐI LẠI TỰ NHIÊN, ĐONG ĐƯA HÔNG)
      if (av.isMoving) {
        av.walkCycle += delta * 11;
        const cycle = av.walkCycle;

        const legSwing = Math.sin(cycle) * 0.55;
        av.legLGroup.rotation.x = legSwing;
        av.legRGroup.rotation.x = -legSwing;

        av.pelvis.position.y = 0.64 + Math.abs(Math.sin(cycle)) * 0.04;
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

      // 2. NGỒI THIỀN TRÊN BỒ ĐOÀN (SITTING MEDITATION AS IN MEME)
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

      // 3. LẠY PHẬT 3 LẠY (BOWING 3 TIMES)
      if (av.action === 'bow' || av.action === 'bow3Times') {
        const bowCycleDuration = 2.4;
        const cycleProgress = (av.actionTimer % bowCycleDuration) / bowCycleDuration;
        const bowPhase = Math.sin(cycleProgress * Math.PI);

        av.pelvis.position.y = 0.65 - bowPhase * 0.45;
        av.spineGroup.rotation.x = bowPhase * 1.05;
        av.headGroup.rotation.x = bowPhase * 0.45;

        av.legLGroup.rotation.x = -bowPhase * 0.6;
        av.legRGroup.rotation.x = -bowPhase * 0.6;

        av.armLGroup.rotation.set(0.7 + bowPhase * 0.5, 0, -0.2 - bowPhase * 0.3);
        av.armRGroup.rotation.set(0.7 + bowPhase * 0.5, 0, 0.2 + bowPhase * 0.3);
        av.foreArmL.rotation.set(1.0 + bowPhase * 0.3, 0.6, 0);
        av.foreArmR.rotation.set(1.0 + bowPhase * 0.3, -0.6, 0);
        return;
      }

      // 4. GÕ MÕ LIÊN TỤC (STRIKE WOODFISH)
      if (av.action === 'strikeWoodfish') {
        av.pelvis.position.y = 0.65;
        av.pelvis.rotation.set(0, 0, 0);
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);
        av.spineGroup.rotation.set(0.12, 0, 0);

        av.armLGroup.rotation.set(0.5, 0, -0.25);
        av.foreArmL.rotation.set(0.7, 0.3, 0);

        const tapCycle = (av.actionTimer * 6.0) % (Math.PI * 2);
        const strike = Math.sin(tapCycle);
        av.armRGroup.rotation.set(0.75 + Math.max(0, strike) * 0.28, 0, 0.05);
        av.foreArmR.rotation.set(0.85 + Math.max(0, strike) * 0.35, 0, 0);
        av.headGroup.rotation.x = Math.max(0, strike) * 0.08;
        return;
      }

      // 5. THỈNH CHUÔNG (STRIKE BELL)
      if (av.action === 'strikeBell') {
        av.pelvis.position.y = 0.65;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

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
        }
        return;
      }

      // 6. THẮP HƯƠNG (INCENSE)
      if (av.action === 'incense' || av.action === 'plantIncense') {
        av.pelvis.position.y = 0.65;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

        if (av.actionTimer < 3.8) {
          const vPhase = Math.sin(av.actionTimer * 4.5);
          av.spineGroup.rotation.x = 0.15 + Math.max(0, vPhase) * 0.35;
          av.headGroup.rotation.x = Math.max(0, vPhase) * 0.2;
          av.armLGroup.rotation.set(0.85, 0, -0.2);
          av.armRGroup.rotation.set(0.85, 0, 0.2);
          av.foreArmL.rotation.set(1.1, 0.5, 0);
          av.foreArmR.rotation.set(1.1, -0.5, 0);
        } else if (av.actionTimer < 5.5) {
          const plantPhase = Math.sin(((av.actionTimer - 3.8) / 1.7) * Math.PI);
          av.spineGroup.rotation.x = plantPhase * 0.55;
          av.armLGroup.rotation.set(1.0 + plantPhase * 0.3, 0, -0.1);
          av.armRGroup.rotation.set(1.0 + plantPhase * 0.3, 0, 0.1);
        }
        return;
      }

      // 7. XIN XĂM (SHAKE FORTUNE)
      if (av.action === 'shakeFortune') {
        av.pelvis.position.y = 0.65;
        av.spineGroup.rotation.set(0.1, 0, 0);

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
