import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export class AvatarManager {
  constructor(scene) {
    this.scene = scene;
    this.avatars = new Map();
    this.localPlayerId = null;
    this.monkFaceTexture = this.generateChibiMonkFaceTexture();
  }

  setLocalPlayerId(id) {
    this.localPlayerId = id;
  }

  // =========================================================================
  // TẠO TEXTURE GƯƠNG MẶT CHÚ TIỂU CHIBI AN NHIÊN & ĐẦU CẠO TRỌC TỰ NHIÊN
  // Da hồng hào tự nhiên, vòm đầu cạo trọc chuyển màu mềm mại, không bị loang vạch
  // Đôi mắt cong nhắm thiền định (⌒ ⌒), má đào ửng hồng, nụ cười từ bi (‿)
  // =========================================================================
  generateChibiMonkFaceTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // 1. Nền da mặt hồng hào tự nhiên (Warm Peach Skin Tone)
    ctx.fillStyle = '#fae3d2';
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Vòm đầu cạo trọc thanh tịnh (Shaved Scalp Fade - Chuyển sắc radial cực kỳ êm)
    const scalpGrad = ctx.createLinearGradient(0, 0, 0, 420);
    scalpGrad.addColorStop(0, '#a2b4c2');
    scalpGrad.addColorStop(0.55, '#c5d3dc');
    scalpGrad.addColorStop(0.85, '#e8ded7');
    scalpGrad.addColorStop(1, '#fae3d2');
    ctx.fillStyle = scalpGrad;
    ctx.fillRect(0, 0, 1024, 420);

    // 3. Vùng gương mặt ở trung tâm (X = 512, Y = 560)
    const cx = 512;
    const cy = 560;

    // Đôi má hồng phấn nhẹ nhàng (Rosy blush)
    const blushL = ctx.createRadialGradient(cx - 165, cy + 45, 5, cx - 165, cy + 45, 95);
    blushL.addColorStop(0, 'rgba(255, 115, 125, 0.42)');
    blushL.addColorStop(1, 'rgba(255, 115, 125, 0)');
    ctx.fillStyle = blushL;
    ctx.beginPath();
    ctx.arc(cx - 165, cy + 45, 95, 0, Math.PI * 2);
    ctx.fill();

    const blushR = ctx.createRadialGradient(cx + 165, cy + 45, 5, cx + 165, cy + 45, 95);
    blushR.addColorStop(0, 'rgba(255, 115, 125, 0.42)');
    blushR.addColorStop(1, 'rgba(255, 115, 125, 0)');
    ctx.fillStyle = blushR;
    ctx.beginPath();
    ctx.arc(cx + 165, cy + 45, 95, 0, Math.PI * 2);
    ctx.fill();

    // 4. Đôi mắt cong nhắm nghiền an nhiên thiền định (⌒ ⌒)
    ctx.strokeStyle = '#362117';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';

    // Mắt trái
    ctx.beginPath();
    ctx.arc(cx - 140, cy - 10, 56, Math.PI * 1.15, Math.PI * 1.85);
    ctx.stroke();

    // Mắt phải
    ctx.beginPath();
    ctx.arc(cx + 140, cy - 10, 56, Math.PI * 1.15, Math.PI * 1.85);
    ctx.stroke();

    // Lông mi cong nhẹ thanh thoát
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(cx - 140, cy - 90, 75, Math.PI * 1.25, Math.PI * 1.75);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx + 140, cy - 90, 75, Math.PI * 1.25, Math.PI * 1.75);
    ctx.stroke();

    // 5. Nụ cười mỉm từ bi hoan hỷ (‿)
    ctx.strokeStyle = '#ab4040';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.arc(cx, cy + 85, 48, Math.PI * 0.2, Math.PI * 0.8);
    ctx.stroke();

    // 6. 6 CHẤM GIỚI ĐIỆP ĐỎ SON TRÊN TRÁN / ĐỈNH ĐẦU
    ctx.fillStyle = '#b71c1c';
    const dotXs = [cx - 45, cx + 45];
    const dotYs = [280, 340, 400];
    dotXs.forEach(dx => {
      dotYs.forEach(dy => {
        ctx.beginPath();
        ctx.arc(dx, dy, 12, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  // =========================================================================
  // TẠO NHÂN VẬT ĐỒNG TU MEME CHUẨN ĐẸP (CLEAN, ADORABLE CHIBI MONK)
  // Tỉ lệ Chibi 1:1.6 đáng yêu, áo lam mềm mại, vạt cà sa vàng ôm sát thân trang nhã
  // Hai bàn tay chắp búp sen an nhiên, bồ đoàn zafu êm ái khi ngồi thiền
  // =========================================================================
  createAvatar(data) {
    if (this.avatars.has(data.id)) {
      this.updateAvatarProfile(data.id, data);
      return this.avatars.get(data.id);
    }

    const group = new THREE.Group();
    group.position.set(data.x || 0, data.y || 0, data.z || 0);
    if (typeof data.rotY === 'number') {
      group.rotation.y = data.rotY;
    }

    const robeSashColorHex = parseInt((data.robeColor || '#E69500').replace('#', '0x'), 16);

    // VẬT LIỆU VẢI VÀ DA PBR MỊN MÀNG
    const innerRobeMat = new THREE.MeshStandardMaterial({
      color: 0x4f6475, // Áo tràng màu lam thanh tịnh
      roughness: 0.65,
      metalness: 0.05
    });

    const collarMat = new THREE.MeshStandardMaterial({
      color: 0x334450,
      roughness: 0.6
    });

    const sashRobeMat = new THREE.MeshStandardMaterial({
      color: robeSashColorHex, // Sắc y cà sa vàng cam rực rỡ
      roughness: 0.52,
      metalness: 0.08
    });

    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xfae3d2,
      roughness: 0.45,
      metalness: 0.0
    });

    const headMat = new THREE.MeshStandardMaterial({
      map: this.monkFaceTexture,
      roughness: 0.42,
      metalness: 0.0
    });

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x4a2411, roughness: 0.4 });
    const beadMat = new THREE.MeshStandardMaterial({ color: 0x542813, roughness: 0.32 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.85, roughness: 0.22 });
    const sockMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.6 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x2b1c14, roughness: 0.75 });

    // 1. PELVIS & SKIRT (HÔNG & TÀ ÁO TRÀNG DẬP LY)
    const pelvis = new THREE.Group();
    pelvis.position.y = 0.50;
    group.add(pelvis);

    // Tà áo tràng xòe nhẹ phủ qua đầu gối, bo tròn mềm mại
    const skirtGeo = new THREE.CylinderGeometry(0.24, 0.36, 0.44, 20);
    const skirt = new THREE.Mesh(skirtGeo, innerRobeMat);
    skirt.position.y = -0.10;
    skirt.castShadow = true;
    pelvis.add(skirt);

    // Vạt cà sa rủ dọc theo thân áo (ôm sát thân, không chìa ra ngoài)
    const kesaHem = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.40, 0.03), sashRobeMat);
    kesaHem.position.set(-0.08, -0.10, 0.14);
    kesaHem.rotation.z = -0.08;
    pelvis.add(kesaHem);

    // 2. CHÂN & GIÀY VẢI TU SĨ
    const legGeo = new THREE.CylinderGeometry(0.07, 0.065, 0.34, 12);
    const shoeGeo = new THREE.BoxGeometry(0.09, 0.065, 0.18);

    const legLGroup = new THREE.Group();
    legLGroup.position.set(-0.10, -0.16, 0);
    const legLMesh = new THREE.Mesh(legGeo, sockMat);
    legLMesh.position.y = -0.12;
    const footL = new THREE.Mesh(shoeGeo, shoeMat);
    footL.position.set(0, -0.28, 0.03);
    legLGroup.add(legLMesh, footL);

    const legRGroup = new THREE.Group();
    legRGroup.position.set(0.10, -0.16, 0);
    const legRMesh = new THREE.Mesh(legGeo, sockMat);
    legRMesh.position.y = -0.12;
    const footR = new THREE.Mesh(shoeGeo, shoeMat);
    footR.position.set(0, -0.28, 0.03);
    legRGroup.add(legRMesh, footR);

    pelvis.add(legLGroup, legRGroup);

    // 3. SPINE & TORSO (THÂN TRÊN VỚI VẠT CÀ SA ÔM GỌN TRANG NHÃ)
    const spineGroup = new THREE.Group();
    spineGroup.position.y = 0.08;
    pelvis.add(spineGroup);

    // Thân áo tràng
    const torsoGeo = new THREE.CylinderGeometry(0.22, 0.25, 0.42, 20);
    const torsoMesh = new THREE.Mesh(torsoGeo, innerRobeMat);
    torsoMesh.position.y = 0.20;
    torsoMesh.castShadow = true;
    spineGroup.add(torsoMesh);

    // Cổ áo giao lĩnh vạt chéo
    const collarL = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.24, 0.02), collarMat);
    collarL.rotation.z = -Math.PI / 4.8;
    collarL.position.set(-0.04, 0.32, 0.21);
    const collarR = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.24, 0.02), collarMat);
    collarR.rotation.z = Math.PI / 4.8;
    collarR.position.set(0.04, 0.32, 0.21);
    spineGroup.add(collarL, collarR);

    // Y cà sa vàng ôm gọn quanh ngực và vai (mềm mại, ôm sát cơ thể)
    const sashFront = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.40, 0.025), sashRobeMat);
    sashFront.position.set(-0.03, 0.20, 0.19);
    sashFront.rotation.z = -0.40;

    const sashBack = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.40, 0.025), sashRobeMat);
    sashBack.position.set(-0.03, 0.20, -0.19);
    sashBack.rotation.z = -0.40;

    const sashShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.035, 0.36), sashRobeMat);
    sashShoulder.position.set(-0.13, 0.375, 0);

    const brooch = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.008, 8, 16), goldMat);
    brooch.position.set(-0.13, 0.34, 0.20);

    spineGroup.add(sashFront, sashBack, sashShoulder, brooch);

    // Chuỗi tràng hạt bồ đề đàn hương
    const rosaryGroup = new THREE.Group();
    rosaryGroup.position.set(0, 0.34, 0.11);
    for (let b = 0; b < 18; b++) {
      const bAng = (b / 18) * Math.PI * 2;
      const bead = new THREE.Mesh(new THREE.SphereGeometry(0.016, 8, 8), beadMat);
      bead.position.set(Math.cos(bAng) * 0.15, -Math.sin(bAng) * 0.18, Math.sin(bAng) * 0.05);
      rosaryGroup.add(bead);
    }
    const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.014, 0.11, 6), new THREE.MeshBasicMaterial({ color: 0xaa1818 }));
    tassel.position.set(0, -0.24, 0.09);
    rosaryGroup.add(tassel);
    spineGroup.add(rosaryGroup);

    const chestGroup = new THREE.Group();
    chestGroup.position.y = 0.40;
    spineGroup.add(chestGroup);

    // 4. ĐẦU CHÚ TIỂU CHIBI PHÚC HẬU
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.18;
    chestGroup.add(headGroup);

    const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.28, 32, 32), headMat);
    cranium.rotation.y = -Math.PI / 2; // Xoay gương mặt chính diện hướng +Z
    cranium.castShadow = true;
    headGroup.add(cranium);

    // Đôi tai nhỏ xinh hai bên
    [-0.26, 0.26].forEach(earX => {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 10), skinMat);
      ear.scale.set(0.35, 0.8, 0.55);
      ear.position.set(earX, 0.02, -0.02);
      headGroup.add(ear);
    });

    // 5. HAI TAY CHẮP BÚP SEN AN NHIÊN (ANJALI MUDRA)
    const sleeveUpperGeo = new THREE.CylinderGeometry(0.09, 0.12, 0.20, 14);
    const sleeveLowerGeo = new THREE.CylinderGeometry(0.08, 0.13, 0.18, 14);

    const createChibiHand = () => {
      const hG = new THREE.Group();
      const palm = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), skinMat);
      palm.scale.set(0.75, 1.30, 0.45);
      palm.position.y = -0.035;
      hG.add(palm);
      return hG;
    };

    // Tay trái
    const armLGroup = new THREE.Group();
    armLGroup.position.set(-0.20, 0.02, 0);
    const upperArmL = new THREE.Mesh(sleeveUpperGeo, sashRobeMat);
    upperArmL.position.set(0, -0.10, 0);
    const foreArmL = new THREE.Group();
    foreArmL.position.set(0, -0.20, 0);
    const sleeveL = new THREE.Mesh(sleeveLowerGeo, sashRobeMat);
    sleeveL.position.set(0, -0.09, 0);
    const handL = createChibiHand();
    handL.position.set(0, -0.18, 0);
    foreArmL.add(sleeveL, handL);
    armLGroup.add(upperArmL, foreArmL);

    // Tay phải
    const armRGroup = new THREE.Group();
    armRGroup.position.set(0.20, 0.02, 0);
    const upperArmR = new THREE.Mesh(sleeveUpperGeo, innerRobeMat);
    upperArmR.position.set(0, -0.10, 0);
    const foreArmR = new THREE.Group();
    foreArmR.position.set(0, -0.20, 0);
    const sleeveR = new THREE.Mesh(sleeveLowerGeo, innerRobeMat);
    sleeveR.position.set(0, -0.09, 0);
    const handR = createChibiHand();
    handR.position.set(0, -0.18, 0);
    foreArmR.add(sleeveR, handR);
    armRGroup.add(upperArmR, foreArmR);

    chestGroup.add(armLGroup, armRGroup);

    // =========================================================================
    // PROPS GẮN TAY (DÙI MÕ, CHÀY CHUÔNG, 3 NÉN HƯƠNG, ỐNG XĂM)
    // =========================================================================
    const malletProp = new THREE.Group();
    const mStick = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.015, 0.38, 8), woodMat);
    mStick.rotation.x = Math.PI / 2.2;
    mStick.position.set(0, -0.18, 0.14);
    const mHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x9b1b1b, roughness: 0.35 })
    );
    mHead.position.set(0, -0.18, 0.32);
    malletProp.add(mStick, mHead);
    malletProp.visible = false;
    foreArmR.add(malletProp);

    const bellStrikerProp = new THREE.Group();
    // Thỉnh chuông bằng cách nắm và lắc sợi dây thừng bên trong chuông (không cần dùi gỗ rời)
    bellStrikerProp.visible = false;
    foreArmR.add(bellStrikerProp);

    // 3 nén tâm hương cầm chắc chắn trên bàn tay phải
    const incenseProp = new THREE.Group();
    incenseProp.position.set(0, -0.18, 0); // Đặt ngay tại vị trí bàn tay phải (handR)
    for (let s = -1; s <= 1; s++) {
      const stick = new THREE.Mesh(
        new THREE.CylinderGeometry(0.005, 0.005, 0.32, 8),
        new THREE.MeshBasicMaterial({ color: 0xaa2211 })
      );
      stick.rotation.x = Math.PI / 3.0;
      stick.position.set(s * 0.015, 0.08, 0.14);

      const tip = new THREE.Mesh(
        new THREE.SphereGeometry(0.012, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xff4500 })
      );
      tip.position.set(s * 0.015, 0.16, 0.28);
      incenseProp.add(stick, tip);
    }
    incenseProp.visible = false;
    foreArmR.add(incenseProp);

    const fortuneProp = new THREE.Group();
    fortuneProp.position.set(0, 0.07, 0.24);
    const fTube = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.40, 12), new THREE.MeshStandardMaterial({ color: 0xa1773a, roughness: 0.5 }));
    fortuneProp.add(fTube);
    fortuneProp.visible = false;
    chestGroup.add(fortuneProp);

    // Bồ đoàn Zafu vải thô dày dặn riêng gắn kèm khi ngồi thiền
    const cushion = new THREE.Mesh(
      new THREE.CylinderGeometry(0.44, 0.48, 0.12, 20),
      new THREE.MeshStandardMaterial({ color: 0x3a3a40, roughness: 0.85 })
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
    css2dObject.position.set(0, 1.65, 0);
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
      sashRobeMat,
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
      av.props.incense.visible = (action === 'takeIncense' || action === 'lightCandle' || action === 'incense' || action === 'plantIncense');
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
    if (data.name || data.robeColor) {
      this.updateAvatarProfile(id, data);
    }
  }

  updateAvatarProfile(id, { name, robeColor }) {
    const av = this.avatars.get(id);
    if (!av) return;
    if (name) {
      av.name = name;
      if (av.tagEl) {
        const textSpan = av.tagEl.querySelector('.nametag-text');
        if (textSpan) {
          textSpan.textContent = name;
        } else {
          av.tagEl.innerHTML = `<span class="nametag-text">${this.escapeHtml(name)}</span>`;
        }
      }
    }
    if (robeColor && av.sashRobeMat) {
      av.robeColor = robeColor;
      const robeSashColorHex = parseInt(robeColor.replace('#', '0x'), 16);
      av.sashRobeMat.color.setHex(robeSashColorHex);
    }
  }

  removeAvatar(id) {
    const av = this.avatars.get(id);
    if (av) {
      this.scene.remove(av.group);
      this.avatars.delete(id);
    }
  }

  update(delta) {
    const time = Date.now() * 0.003;

    this.avatars.forEach(av => {
      av.actionTimer += delta;

      const dx = av.targetX - av.group.position.x;
      const dz = av.targetZ - av.group.position.z;
      const dist = Math.hypot(dx, dz);

      // Mượt mà vị trí bước đi (Smooth position interpolation)
      if (dist > 0.04 && av.action !== 'sit') {
        av.isMoving = true;
        const posLerp = Math.min(1.0, delta * 12.0);
        av.group.position.x += dx * posLerp;
        av.group.position.z += dz * posLerp;
      } else {
        av.isMoving = false;
        if (av.action === 'sit') {
          const sitPosLerp = Math.min(1.0, delta * 14.0);
          av.group.position.x += (av.targetX - av.group.position.x) * sitPosLerp;
          av.group.position.z += (av.targetZ - av.group.position.z) * sitPosLerp;
        } else if (dist > 0.001) {
          const stopLerp = Math.min(1.0, delta * 12.0);
          av.group.position.x += dx * stopLerp;
          av.group.position.z += dz * stopLerp;
        }
      }

      // Xoay hướng mặt mượt mà (Smooth continuous yaw rotation)
      let diffRot = av.targetRotY - av.group.rotation.y;
      while (diffRot < -Math.PI) diffRot += Math.PI * 2;
      while (diffRot > Math.PI) diffRot -= Math.PI * 2;
      av.group.rotation.y += diffRot * Math.min(1.0, delta * 14.0);

      // KHAI BÁO CÁC MỤC TIÊU KHỚP XƯƠNG (TARGET TRANSFORMS) ĐỂ LERP MƯỢT MÀ
      let targetPelvisY = 0.50;
      let targetPelvisRot = { x: 0, y: 0, z: 0 };
      let targetSpineRot = { x: 0, y: 0, z: 0 };
      let targetHeadRot = { x: 0, y: 0, z: 0 };
      let targetLegLRot = { x: 0, y: 0, z: 0 };
      let targetLegRRot = { x: 0, y: 0, z: 0 };
      let targetArmLRot = { x: 0.02, y: 0, z: -0.09 };
      let targetArmRRot = { x: 0.02, y: 0, z: 0.09 };
      let targetForeArmLRot = { x: -0.02, y: 0, z: 0 };
      let targetForeArmRRot = { x: -0.02, y: 0, z: 0 };
      let targetChestScale = { x: 1, y: 1, z: 1 };

      // 1. BƯỚC ĐI THIỀN HÀNH (HAI TAY ĐUNG ĐƯA TỰ NHIÊN, NHỊP NHÀNG)
      if (av.isMoving) {
        av.walkCycle += delta * 9.5;
        const cycle = av.walkCycle;

        // Chân bước dồn trọng tâm
        const legSwing = Math.sin(cycle) * 0.40;
        targetLegLRot.x = -legSwing;
        targetLegRRot.x = legSwing;

        targetPelvisY = 0.50 + Math.abs(Math.sin(cycle)) * 0.028;
        targetPelvisRot.y = Math.sin(cycle) * 0.04;
        targetPelvisRot.z = Math.cos(cycle) * 0.02;

        targetSpineRot.y = -Math.sin(cycle) * 0.04;
        targetSpineRot.x = 0.04;

        // HAI TAY ĐUNG ĐƯA TỰ NHIÊN NGƯỢC CHIỀU VỚI BƯỚC CHÂN
        const armSwing = Math.sin(cycle) * 0.32;
        targetArmLRot = { x: armSwing, y: 0, z: -0.09 };
        targetArmRRot = { x: -armSwing, y: 0, z: 0.09 };

        targetForeArmLRot.x = armSwing < 0 ? armSwing * 0.35 - 0.03 : -0.03;
        targetForeArmRRot.x = armSwing > 0 ? -armSwing * 0.35 - 0.03 : -0.03;

        targetHeadRot.x = -Math.sin(cycle * 2) * 0.02;
        targetHeadRot.y = Math.sin(cycle) * 0.02;
      }
      // 2. NGỒI THIỀN KIẾT GIÀ TRÊN BỒ ĐOÀN (HAI TAY ĐỂ ÊM ÁI LÊN ĐÙI)
      else if (av.action === 'sit') {
        targetPelvisY = 0.16;
        targetPelvisRot = { x: 0, y: 0, z: 0 };

        // Chân xếp bằng kiết già trên đệm
        targetLegLRot = { x: -Math.PI / 2.2, y: 0.35, z: -0.20 };
        targetLegRRot = { x: -Math.PI / 2.2, y: -0.35, z: 0.20 };

        targetSpineRot = { x: 0, y: 0, z: 0 };

        // HAI TAY ĐỂ ÊM ÁI LÊN ĐÙI PHÍA TRƯỚC
        targetArmLRot = { x: -0.45, y: 0.05, z: 0.18 };
        targetArmRRot = { x: -0.45, y: -0.05, z: -0.18 };
        targetForeArmLRot = { x: -0.65, y: 0.08, z: 0.08 };
        targetForeArmRRot = { x: -0.65, y: -0.08, z: -0.08 };

        targetHeadRot = { x: 0.06, y: 0, z: 0 };

        const breathe = Math.sin(time * 1.5) * 0.02;
        targetChestScale = { x: 1 + breathe, y: 1 + breathe * 0.6, z: 1 + breathe };
      }
      // 3. ĐẢNH LỄ LẠY PHẬT (CHẮP TAY TRƯỚC NGỰC CÚI LẠY THÀNH KÍNH)
      else if (av.action === 'bow' || av.action === 'bow3Times') {
        const bowCycle = 2.4;
        const progress = (av.actionTimer % bowCycle) / bowCycle;

        let bowPhase = 0;
        if (progress < 0.40) {
          bowPhase = Math.sin((progress / 0.40) * (Math.PI / 2));
        } else if (progress < 0.65) {
          bowPhase = 1.0;
        } else {
          bowPhase = Math.cos(((progress - 0.65) / 0.35) * (Math.PI / 2));
        }
        bowPhase = Math.max(0, Math.min(1, bowPhase));

        // Quỳ gối cúi gập người về phía trước
        targetPelvisY = 0.50 - bowPhase * 0.32;
        targetLegLRot.x = -bowPhase * 1.15;
        targetLegRRot.x = -bowPhase * 1.15;

        targetSpineRot.x = bowPhase * 0.88;
        targetHeadRot.x = bowPhase * 0.35;

        // HAI TAY CHẮP BÚP SEN ÉP SÁT TRƯỚC NGỰC CUNG KÍNH
        targetArmLRot = { x: -0.55, y: 0.10, z: 0.50 };
        targetArmRRot = { x: -0.55, y: -0.10, z: -0.50 };
        targetForeArmLRot = { x: -1.25, y: 0, z: 0.25 };
        targetForeArmRRot = { x: -1.25, y: 0, z: -0.25 };
      }
      // 4. GÕ MÕ TỤNG KINH (TAY PHẢI CẦM DÙI GÕ MÕ, TAY TRÁI CHẮP TRƯỚC NGỰC)
      else if (av.action === 'strikeWoodfish') {
        targetPelvisY = 0.50;
        targetSpineRot.x = 0.04;

        // TAY TRÁI CHẮP BÚP SEN TRƯỚC NGỰC TRANG NGHIÊM (Độc thủ ấn)
        targetArmLRot = { x: -0.55, y: 0.10, z: 0.50 };
        targetForeArmLRot = { x: -1.25, y: 0, z: 0.25 };

        // TAY PHẢI CẦM DÙI GÕ MÕ ĐỀU ĐẶN NHỊP NHÀNG
        const tapCycle = (av.actionTimer * 6.0) % (Math.PI * 2);
        const up = Math.max(0, Math.sin(tapCycle));
        targetArmRRot = { x: -0.38 - up * 0.22, y: -0.08, z: -0.08 };
        targetForeArmRRot = { x: -0.72 - up * 0.40, y: -0.10, z: -0.05 };

        // Đầu gật nhẹ thành tâm theo nhịp gõ tụng kinh
        targetHeadRot.x = 0.05 + (1 - up) * 0.04;
      }
      // 5. THỈNH ĐẠI HỒNG CHUNG (CẦM VÀ LẮC SỢI DÂY THỪNG TRONG CHUÔNG)
      else if (av.action === 'strikeBell') {
        targetPelvisY = 0.50;

        const swayPhase = Math.sin(av.actionTimer * 7.5);
        const gripTension = Math.sin(Math.min(Math.PI, av.actionTimer * 2.2));

        targetSpineRot.x = 0.05 + swayPhase * 0.10 * gripTension;
        targetSpineRot.y = swayPhase * 0.04 * gripTension;

        // HAI TAY NẮM CHẶT SỢI DÂY VÀ LẮC DÂY CHUÔNG
        const armPull = -0.55 + swayPhase * 0.18 * gripTension;
        targetArmLRot = { x: armPull, y: 0.10, z: 0.35 };
        targetArmRRot = { x: armPull, y: -0.10, z: -0.35 };
        targetForeArmLRot = { x: -0.95 + swayPhase * 0.15 * gripTension, y: 0, z: 0.12 };
        targetForeArmRRot = { x: -0.95 + swayPhase * 0.15 * gripTension, y: 0, z: -0.12 };

        targetHeadRot.x = -0.12 + Math.max(0, swayPhase) * 0.06;
      }
      // 6. THÀNH KÍNH DÂNG HƯƠNG (4 BƯỚC MƯỢT MÀ)
      else if (av.action === 'takeIncense') {
        targetPelvisY = 0.50;
        targetSpineRot.x = 0.14;
        targetArmLRot = { x: -0.55, y: 0.10, z: 0.50 };
        targetForeArmLRot = { x: -1.25, y: 0, z: 0.25 };
        targetArmRRot = { x: -0.45, y: -0.08, z: -0.15 };
        targetForeArmRRot = { x: -0.70, y: 0, z: -0.05 };
        targetHeadRot.x = 0.12;
      }
      else if (av.action === 'lightCandle') {
        targetPelvisY = 0.50;
        targetSpineRot.x = 0.06;
        targetArmLRot = { x: -0.55, y: 0.10, z: 0.50 };
        targetForeArmLRot = { x: -1.25, y: 0, z: 0.25 };
        targetArmRRot = { x: -0.52, y: -0.08, z: -0.15 };
        targetForeArmRRot = { x: -0.90, y: 0, z: -0.08 };
        targetHeadRot.x = 0.05;
      }
      else if (av.action === 'incense' || av.action === 'plantIncense') {
        targetPelvisY = 0.50;
        const timer = av.actionTimer;
        if (timer < 1.2) {
          const raise = Math.sin((timer / 1.2) * (Math.PI / 2));
          targetSpineRot.x = 0.08 + raise * 0.10;
          targetHeadRot.x = 0.05 + raise * 0.08;
          targetArmLRot = { x: -0.58 - raise * 0.12, y: 0.10, z: 0.40 };
          targetArmRRot = { x: -0.58 - raise * 0.12, y: -0.10, z: -0.40 };
          targetForeArmLRot = { x: -1.20 - raise * 0.15, y: 0, z: 0.20 };
          targetForeArmRRot = { x: -1.20 - raise * 0.15, y: 0, z: -0.20 };
        } else {
          const plant = Math.sin(Math.min(Math.PI, (timer - 1.2) * 2.0));
          targetSpineRot.x = 0.18 + plant * 0.20;
          targetHeadRot.x = 0.12 + plant * 0.08;
          targetArmLRot = { x: -0.45 - plant * 0.15, y: 0.05, z: 0.25 };
          targetArmRRot = { x: -0.45 - plant * 0.15, y: -0.05, z: -0.25 };
          targetForeArmLRot = { x: -0.85 + plant * 0.15, y: 0, z: 0.10 };
          targetForeArmRRot = { x: -0.85 + plant * 0.15, y: 0, z: -0.10 };
        }
      }
      // 7. LẮC ỐNG XĂM
      else if (av.action === 'shakeFortune') {
        targetPelvisY = 0.50;
        const shake = Math.sin(av.actionTimer * 16) * 0.08;
        targetSpineRot.x = 0.08 + shake * 0.5;
        targetArmLRot = { x: -0.50 + shake, y: 0.10, z: 0.35 };
        targetArmRRot = { x: -0.50 + shake, y: -0.10, z: -0.35 };
        targetForeArmLRot = { x: -1.10, y: 0, z: 0.15 };
        targetForeArmRRot = { x: -1.10, y: 0, z: -0.15 };
      }
      // 8. ĐỨNG NGHỈ THƯ THÁI (HAI TAY BUÔNG THẢ TỰ NHIÊN DỌC HÔNG)
      else {
        targetPelvisY = 0.50;
        const idleBreathe = Math.sin(time * 2.0) * 0.015;
        targetSpineRot.x = idleBreathe * 0.3;
        targetHeadRot.x = idleBreathe * 0.2;
        targetArmLRot = { x: 0.02, y: 0, z: -0.09 - idleBreathe * 0.2 };
        targetArmRRot = { x: 0.02, y: 0, z: 0.09 + idleBreathe * 0.2 };
        targetForeArmLRot = { x: -0.02, y: 0, z: 0 };
        targetForeArmRRot = { x: -0.02, y: 0, z: 0 };
        targetChestScale = { x: 1 + idleBreathe * 0.6, y: 1 + idleBreathe * 0.4, z: 1 + idleBreathe * 0.6 };
      }

      // =========================================================================
      // BỘ LERP MƯỢT MÀ TẤT CẢ CÁC KHỚP (SILKY SMOOTH PROCEDURAL ANIMATION)
      // Không còn bất kỳ hiện tượng giật cục, nhảy khớp hay đơ cứng khi chuyển động tác!
      // =========================================================================
      const lerpSpeed = Math.min(1.0, delta * 14.0);

      av.pelvis.position.y += (targetPelvisY - av.pelvis.position.y) * lerpSpeed;
      av.pelvis.rotation.x += (targetPelvisRot.x - av.pelvis.rotation.x) * lerpSpeed;
      av.pelvis.rotation.y += (targetPelvisRot.y - av.pelvis.rotation.y) * lerpSpeed;
      av.pelvis.rotation.z += (targetPelvisRot.z - av.pelvis.rotation.z) * lerpSpeed;

      av.spineGroup.rotation.x += (targetSpineRot.x - av.spineGroup.rotation.x) * lerpSpeed;
      av.spineGroup.rotation.y += (targetSpineRot.y - av.spineGroup.rotation.y) * lerpSpeed;
      av.spineGroup.rotation.z += (targetSpineRot.z - av.spineGroup.rotation.z) * lerpSpeed;

      av.headGroup.rotation.x += (targetHeadRot.x - av.headGroup.rotation.x) * lerpSpeed;
      av.headGroup.rotation.y += (targetHeadRot.y - av.headGroup.rotation.y) * lerpSpeed;
      av.headGroup.rotation.z += (targetHeadRot.z - av.headGroup.rotation.z) * lerpSpeed;

      av.legLGroup.rotation.x += (targetLegLRot.x - av.legLGroup.rotation.x) * lerpSpeed;
      av.legLGroup.rotation.y += (targetLegLRot.y - av.legLGroup.rotation.y) * lerpSpeed;
      av.legLGroup.rotation.z += (targetLegLRot.z - av.legLGroup.rotation.z) * lerpSpeed;

      av.legRGroup.rotation.x += (targetLegRRot.x - av.legRGroup.rotation.x) * lerpSpeed;
      av.legRGroup.rotation.y += (targetLegRRot.y - av.legRGroup.rotation.y) * lerpSpeed;
      av.legRGroup.rotation.z += (targetLegRRot.z - av.legRGroup.rotation.z) * lerpSpeed;

      av.armLGroup.rotation.x += (targetArmLRot.x - av.armLGroup.rotation.x) * lerpSpeed;
      av.armLGroup.rotation.y += (targetArmLRot.y - av.armLGroup.rotation.y) * lerpSpeed;
      av.armLGroup.rotation.z += (targetArmLRot.z - av.armLGroup.rotation.z) * lerpSpeed;

      av.armRGroup.rotation.x += (targetArmRRot.x - av.armRGroup.rotation.x) * lerpSpeed;
      av.armRGroup.rotation.y += (targetArmRRot.y - av.armRGroup.rotation.y) * lerpSpeed;
      av.armRGroup.rotation.z += (targetArmRRot.z - av.armRGroup.rotation.z) * lerpSpeed;

      av.foreArmL.rotation.x += (targetForeArmLRot.x - av.foreArmL.rotation.x) * lerpSpeed;
      av.foreArmL.rotation.y += (targetForeArmLRot.y - av.foreArmL.rotation.y) * lerpSpeed;
      av.foreArmL.rotation.z += (targetForeArmLRot.z - av.foreArmL.rotation.z) * lerpSpeed;

      av.foreArmR.rotation.x += (targetForeArmRRot.x - av.foreArmR.rotation.x) * lerpSpeed;
      av.foreArmR.rotation.y += (targetForeArmRRot.y - av.foreArmR.rotation.y) * lerpSpeed;
      av.foreArmR.rotation.z += (targetForeArmRRot.z - av.foreArmR.rotation.z) * lerpSpeed;

      av.chestGroup.scale.x += (targetChestScale.x - av.chestGroup.scale.x) * lerpSpeed;
      av.chestGroup.scale.y += (targetChestScale.y - av.chestGroup.scale.y) * lerpSpeed;
      av.chestGroup.scale.z += (targetChestScale.z - av.chestGroup.scale.z) * lerpSpeed;
    });
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
