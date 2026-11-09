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

    const incenseProp = new THREE.Group();
    incenseProp.position.set(0, 0.16, 0.24);
    for (let s = -1; s <= 1; s++) {
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.44), new THREE.MeshBasicMaterial({ color: 0xaa2211 }));
      stick.position.set(s * 0.028, 0.15, 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.015, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff4500 }));
      tip.position.set(s * 0.028, 0.36, 0);
      incenseProp.add(stick, tip);
    }
    incenseProp.visible = false;
    chestGroup.add(incenseProp);

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

  update(delta) {
    const time = Date.now() * 0.003;

    this.avatars.forEach(av => {
      av.actionTimer += delta;

      const dx = av.targetX - av.group.position.x;
      const dz = av.targetZ - av.group.position.z;
      const dist = Math.hypot(dx, dz);

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

      // 1. BƯỚC ĐI THIỀN HÀNH (HAI TAY ĐUNG ĐƯA TỰ NHIÊN)
      if (av.isMoving) {
        av.walkCycle += delta * 9.5;
        const cycle = av.walkCycle;

        // Chân bước dồn trọng tâm
        const legSwing = Math.sin(cycle) * 0.40;
        av.legLGroup.rotation.x = -legSwing;
        av.legRGroup.rotation.x = legSwing;

        av.pelvis.position.y = 0.50 + Math.abs(Math.sin(cycle)) * 0.028;
        av.pelvis.rotation.y = Math.sin(cycle) * 0.04;
        av.pelvis.rotation.z = Math.cos(cycle) * 0.02;

        av.spineGroup.rotation.y = -Math.sin(cycle) * 0.04;
        av.spineGroup.rotation.x = 0.04;

        // HAI TAY ĐUNG ĐƯA TỰ NHIÊN NGƯỢC CHIỀU VỚI BƯỚC CHÂN
        // Chân trái bước tới (-legSwing < 0) -> tay trái vung ra sau (+armSwing), tay phải vung ra trước (-armSwing)
        const armSwing = Math.sin(cycle) * 0.32;
        av.armLGroup.rotation.set(armSwing, 0, -0.09);
        av.armRGroup.rotation.set(-armSwing, 0, 0.09);

        // Cẳng tay co nhẹ tự nhiên khi vung ra trước (rotX âm)
        av.foreArmL.rotation.set(armSwing < 0 ? armSwing * 0.35 - 0.03 : -0.03, 0, 0);
        av.foreArmR.rotation.set(armSwing > 0 ? -armSwing * 0.35 - 0.03 : -0.03, 0, 0);

        av.headGroup.rotation.x = -Math.sin(cycle * 2) * 0.02;
        av.headGroup.rotation.y = Math.sin(cycle) * 0.02;
        return;
      }

      // 2. NGỒI THIỀN KIẾT GIÀ TRÊN BỒ ĐOÀN (HAI TAY ĐỂ LÊN ĐÙI)
      if (av.action === 'sit') {
        av.pelvis.position.y = 0.16;
        av.pelvis.rotation.set(0, 0, 0);

        // Chân xếp bằng kiết già trên đệm
        av.legLGroup.rotation.set(-Math.PI / 2.2, 0.35, -0.20);
        av.legRGroup.rotation.set(-Math.PI / 2.2, -0.35, 0.20);

        av.spineGroup.rotation.set(0, 0, 0);

        // HAI TAY ĐỂ ÊM ÁI LÊN ĐÙI PHÍA TRƯỚC (hướng tới trước bụng và đặt nhẹ trên hai đầu gối)
        av.armLGroup.rotation.set(-0.45, 0.05, 0.18);
        av.armRGroup.rotation.set(-0.45, -0.05, -0.18);
        av.foreArmL.rotation.set(-0.65, 0.08, 0.08);
        av.foreArmR.rotation.set(-0.65, -0.08, -0.08);

        av.headGroup.rotation.set(0.06, 0, 0);

        const breathe = Math.sin(time * 1.5) * 0.02;
        av.chestGroup.scale.set(1 + breathe, 1 + breathe * 0.6, 1 + breathe);
        return;
      }

      // 3. ĐẢNH LỄ LẠY PHẬT (CHẮP TAY TRƯỚC NGỰC CÚI LẠY)
      if (av.action === 'bow' || av.action === 'bow3Times') {
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
        av.pelvis.position.y = 0.50 - bowPhase * 0.32;
        av.legLGroup.rotation.x = -bowPhase * 1.15;
        av.legRGroup.rotation.x = -bowPhase * 1.15;

        av.spineGroup.rotation.x = bowPhase * 0.88;
        av.headGroup.rotation.x = bowPhase * 0.35;

        // HAI TAY CHẮP BÚP SEN ÉP SÁT TRƯỚC NGỰC CUNG KÍNH
        av.armLGroup.rotation.set(-0.55, 0.10, 0.50);
        av.armRGroup.rotation.set(-0.55, -0.10, -0.50);
        av.foreArmL.rotation.set(-1.25, 0, 0.25);
        av.foreArmR.rotation.set(-1.25, 0, -0.25);
        return;
      }

      // 4. GÕ MÕ TỤNG KINH (TAY PHẢI CẦM DÙI GÕ MÕ, TAY TRÁI CHẮP TRƯỚC NGỰC)
      if (av.action === 'strikeWoodfish') {
        av.pelvis.position.y = 0.50;
        av.pelvis.rotation.set(0, 0, 0);
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);
        av.spineGroup.rotation.set(0.04, 0, 0);

        // TAY TRÁI CHẮP BÚP SEN TRƯỚC NGỰC TRANG NGHIÊM (Độc thủ ấn tụng kinh)
        av.armLGroup.rotation.set(-0.55, 0.10, 0.50);
        av.foreArmL.rotation.set(-1.25, 0, 0.25);

        // TAY PHẢI CẦM DÙI GÕ MÕ ĐỀU ĐẶN NHỊP NHÀNG
        const tapCycle = (av.actionTimer * 6.0) % (Math.PI * 2);
        const up = Math.max(0, Math.sin(tapCycle));
        av.armRGroup.rotation.set(-0.38 - up * 0.22, -0.08, -0.08);
        av.foreArmR.rotation.set(-0.72 - up * 0.40, -0.10, -0.05);

        // Đầu gật nhẹ thành tâm theo nhịp gõ tụng kinh
        av.headGroup.rotation.x = 0.05 + (1 - up) * 0.04;
        return;
      }

      // 5. THỈNH ĐẠI HỒNG CHUNG (CẦM VÀ LẮC SỢI DÂY THỪNG TRONG CHUÔNG)
      if (av.action === 'strikeBell') {
        av.pelvis.position.y = 0.50;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

        // Nhịp lắc dây: 2 lần kéo lắc dứt khoát làm chuông rung ngân
        const swayPhase = Math.sin(av.actionTimer * 7.5);
        const gripTension = Math.sin(Math.min(Math.PI, av.actionTimer * 2.2));

        // Thân người hơi rướn và chuyển động theo lực kéo dây
        av.spineGroup.rotation.x = 0.05 + swayPhase * 0.10 * gripTension;
        av.spineGroup.rotation.y = swayPhase * 0.04 * gripTension;

        // HAI TAY NẮM CHẶT SỢI DÂY VÀ LẮC DÂY CHUÔNG
        const armPull = -0.55 + swayPhase * 0.18 * gripTension;
        av.armLGroup.rotation.set(armPull, 0.10, 0.35);
        av.armRGroup.rotation.set(armPull, -0.10, -0.35);
        av.foreArmL.rotation.set(-0.95 + swayPhase * 0.15 * gripTension, 0, 0.12);
        av.foreArmR.rotation.set(-0.95 + swayPhase * 0.15 * gripTension, 0, -0.12);

        // Đầu ngước nhìn Đại Hồng Chung cung kính
        av.headGroup.rotation.x = -0.12 + Math.max(0, swayPhase) * 0.06;
        return;
      }

      // 6. THÀNH KÍNH DÂNG HƯƠNG
      if (av.action === 'incense' || av.action === 'plantIncense') {
        av.pelvis.position.y = 0.50;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

        if (av.actionTimer < 3.8) {
          const vPhase = Math.sin(av.actionTimer * 3.8);
          av.spineGroup.rotation.x = 0.06 + Math.max(0, vPhase) * 0.20;
          av.headGroup.rotation.x = Math.max(0, vPhase) * 0.10;
          av.armLGroup.rotation.set(-0.55, 0.10, 0.35);
          av.armRGroup.rotation.set(-0.55, -0.10, -0.35);
          av.foreArmL.rotation.set(-1.15, 0, 0.15);
          av.foreArmR.rotation.set(-1.15, 0, -0.15);
        } else if (av.actionTimer < 5.5) {
          const plantPhase = Math.sin(((av.actionTimer - 3.8) / 1.7) * Math.PI);
          av.spineGroup.rotation.x = plantPhase * 0.35;
          av.armLGroup.rotation.set(-0.40 - plantPhase * 0.20, 0, 0.15);
          av.armRGroup.rotation.set(-0.40 - plantPhase * 0.20, 0, -0.15);
          av.foreArmL.rotation.set(-0.85 + plantPhase * 0.25, 0.10, 0.05);
          av.foreArmR.rotation.set(-0.85 + plantPhase * 0.25, -0.10, -0.05);
        }
        return;
      }

      // 7. LẮC ỐNG XĂM
      if (av.action === 'shakeFortune') {
        av.pelvis.position.y = 0.50;
        const shake = Math.sin(av.actionTimer * 16) * 0.08;
        av.spineGroup.rotation.x = 0.08 + shake * 0.5;
        av.armLGroup.rotation.set(-0.50 + shake, 0.10, 0.35);
        av.armRGroup.rotation.set(-0.50 + shake, -0.10, -0.35);
        av.foreArmL.rotation.set(-1.10, 0, 0.15);
        av.foreArmR.rotation.set(-1.10, 0, -0.15);
        return;
      }

      // 8. ĐỨNG NGHỈ (LÚC ĐỨNG LÀ 2 TAY BUÔNG THẢ TỰ NHIÊN)
      av.pelvis.position.y = 0.50;
      av.pelvis.rotation.set(0, 0, 0);
      av.legLGroup.rotation.set(0, 0, 0);
      av.legRGroup.rotation.set(0, 0, 0);

      const idleBreathe = Math.sin(time * 2.0) * 0.015;
      av.spineGroup.rotation.set(idleBreathe * 0.3, 0, 0);
      av.headGroup.rotation.set(idleBreathe * 0.2, 0, 0);

      // HAI TAY BUÔNG THẢ TỰ NHIÊN DỌC HAI BÊN HÔNG
      av.armLGroup.rotation.set(0.02, 0, -0.09 - idleBreathe * 0.2);
      av.armRGroup.rotation.set(0.02, 0, 0.09 + idleBreathe * 0.2);
      av.foreArmL.rotation.set(-0.02, 0, 0);
      av.foreArmR.rotation.set(-0.02, 0, 0);
    });
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
