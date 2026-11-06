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
  // TẠO TEXTURE GƯƠNG MẶT CHÚ TIỂU CHIBI SIÊU DỄ THƯƠNG & AN NHIÊN (CANVAS HD)
  // Gương mặt tròn trịa phúc hậu, đôi mắt nhắm thanh tịnh (⌒ ⌒), má hồng hào,
  // Nụ cười mỉm từ bi (‿), vòm đầu cạo trọc xanh lam & 6 chấm giới điệp đỏ son
  // =========================================================================
  generateChibiMonkFaceTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // 1. Nền da mặt sáng hồng mịn màng (Zen Peach Skin)
    ctx.fillStyle = '#fce4d0';
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Vòm da đầu cạo trọc màu xanh lam mờ của tu sĩ thanh tịnh
    const scalpGrad = ctx.createLinearGradient(0, 0, 0, 480);
    scalpGrad.addColorStop(0, '#8ea1af');
    scalpGrad.addColorStop(0.65, '#9fb1be');
    scalpGrad.addColorStop(1, '#fce4d0');
    ctx.fillStyle = scalpGrad;
    ctx.fillRect(0, 0, 1024, 460);

    // 3. Vùng gương mặt ở trung tâm (U=0.5, V=0.5 maps to sphere front)
    // Tọa độ tâm mặt: X = 512, Y = 560
    const cx = 512;
    const cy = 560;

    // Đôi má hồng đào phấn nhẹ nhàng (Rosy blush)
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

    // Điểm nhấn khóe môi nhỏ xinh
    ctx.fillStyle = '#ab4040';
    ctx.beginPath();
    ctx.arc(cx, cy + 45, 5, 0, Math.PI * 2);
    ctx.fill();

    // 6. 6 CHẤM GIỚI ĐIỆP ĐỎ SON TRÊN TRÁN / ĐỈNH ĐẦU (SIX MONASTIC DOTS)
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

    // VẬT LIỆU PBR MỊN MÀNG SANG TRỌNG
    const innerRobeMat = new THREE.MeshStandardMaterial({
      color: 0x4f6475, // Áo tràng màu lam thanh tịnh
      roughness: 0.68,
      metalness: 0.05
    });

    const collarMat = new THREE.MeshStandardMaterial({
      color: 0x334450, // Cổ áo giao lĩnh
      roughness: 0.6
    });

    const sashRobeMat = new THREE.MeshStandardMaterial({
      color: robeSashColorHex, // Màu cà sa vàng cam rực rỡ
      roughness: 0.52,
      metalness: 0.08
    });

    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xfce4d0,
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
    // Tọa độ gốc: pelvis ở y = 0.52
    const pelvis = new THREE.Group();
    pelvis.position.y = 0.52;
    group.add(pelvis);

    // Tà áo tràng xòe nhẹ phủ qua đầu gối
    const skirtGeo = new THREE.CylinderGeometry(0.26, 0.38, 0.46, 20);
    const skirt = new THREE.Mesh(skirtGeo, innerRobeMat);
    skirt.position.y = -0.12;
    skirt.castShadow = true;
    pelvis.add(skirt);

    // Vạt cà sa rủ xéo qua hông
    const kesaHem = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.44, 0.05), sashRobeMat);
    kesaHem.position.set(-0.11, -0.12, 0.16);
    kesaHem.rotation.z = -0.12;
    pelvis.add(kesaHem);

    // 2. CHÂN & GIÀY VẢI
    const legGeo = new THREE.CylinderGeometry(0.075, 0.07, 0.36, 12);
    const shoeGeo = new THREE.BoxGeometry(0.10, 0.07, 0.19);

    const legLGroup = new THREE.Group();
    legLGroup.position.set(-0.11, -0.18, 0);
    const legLMesh = new THREE.Mesh(legGeo, sockMat);
    legLMesh.position.y = -0.14;
    const footL = new THREE.Mesh(shoeGeo, shoeMat);
    footL.position.set(0, -0.31, 0.04);
    legLGroup.add(legLMesh, footL);

    const legRGroup = new THREE.Group();
    legRGroup.position.set(0.11, -0.18, 0);
    const legRMesh = new THREE.Mesh(legGeo, sockMat);
    legRMesh.position.y = -0.14;
    const footR = new THREE.Mesh(shoeGeo, shoeMat);
    footR.position.set(0, -0.31, 0.04);
    legRGroup.add(legRMesh, footR);

    pelvis.add(legLGroup, legRGroup);

    // 3. SPINE & TORSO (THÂN TRÊN VỚI VẠT CÀ SA VÀNG)
    const spineGroup = new THREE.Group();
    spineGroup.position.y = 0.08;
    pelvis.add(spineGroup);

    // Thân áo tràng
    const torsoGeo = new THREE.CylinderGeometry(0.23, 0.26, 0.44, 20);
    const torsoMesh = new THREE.Mesh(torsoGeo, innerRobeMat);
    torsoMesh.position.y = 0.22;
    torsoMesh.castShadow = true;
    spineGroup.add(torsoMesh);

    // Cổ áo giao lĩnh vạt chéo
    const collarL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.26, 0.02), collarMat);
    collarL.rotation.z = -Math.PI / 4.8;
    collarL.position.set(-0.05, 0.34, 0.23);
    const collarR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.26, 0.02), collarMat);
    collarR.rotation.z = Math.PI / 4.8;
    collarR.position.set(0.05, 0.34, 0.23);
    spineGroup.add(collarL, collarR);

    // Y cà sa vàng vắt chéo trước ngực & sau lưng
    const sashFront = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.46, 0.04), sashRobeMat);
    sashFront.position.set(-0.03, 0.22, 0.21);
    sashFront.rotation.z = -0.48;
    sashFront.rotation.y = 0.04;

    const sashBack = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.46, 0.04), sashRobeMat);
    sashBack.position.set(-0.03, 0.22, -0.21);
    sashBack.rotation.z = -0.48;
    sashBack.rotation.y = -0.04;

    const sashShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.44), sashRobeMat);
    sashShoulder.position.set(-0.16, 0.42, 0);

    const brooch = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.012, 8, 16), goldMat);
    brooch.position.set(-0.16, 0.38, 0.22);

    spineGroup.add(sashFront, sashBack, sashShoulder, brooch);

    // Chuỗi tràng hạt bồ đề gỗ đàn hương
    const rosaryGroup = new THREE.Group();
    rosaryGroup.position.set(0, 0.36, 0.12);
    for (let b = 0; b < 18; b++) {
      const bAng = (b / 18) * Math.PI * 2;
      const bead = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 8), beadMat);
      bead.position.set(Math.cos(bAng) * 0.16, -Math.sin(bAng) * 0.20, Math.sin(bAng) * 0.06);
      rosaryGroup.add(bead);
    }
    const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.015, 0.12, 6), new THREE.MeshBasicMaterial({ color: 0xaa1818 }));
    tassel.position.set(0, -0.26, 0.10);
    rosaryGroup.add(tassel);
    spineGroup.add(rosaryGroup);

    const chestGroup = new THREE.Group();
    chestGroup.position.y = 0.42;
    spineGroup.add(chestGroup);

    // 4. ĐẦU CHÚ TIỂU CHIBI PHÚC HẬU
    // Dùng quả cầu nhẵn mịn có texture vẽ tay sắc nét, xoay -90 độ để mặt hướng chính diện (+Z)
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.18;
    chestGroup.add(headGroup);

    const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.28, 32, 32), headMat);
    cranium.rotation.y = -Math.PI / 2; // Xoay tâm texture U=0.5 về phía trước (+Z)
    cranium.castShadow = true;
    headGroup.add(cranium);

    // Đôi tai nhỏ xinh hai bên (-X và +X)
    [-0.26, 0.26].forEach(earX => {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 10), skinMat);
      ear.scale.set(0.35, 0.8, 0.55);
      ear.position.set(earX, 0.02, -0.02);
      headGroup.add(ear);
    });

    // 5. HAI TAY CHẮP BÚP SEN TRANG NGHIÊM (ANJALI MUDRA)
    // Ống tay áo thụng rộng & bàn tay tròn mềm mại
    const sleeveUpperGeo = new THREE.CylinderGeometry(0.10, 0.13, 0.22, 14);
    const sleeveLowerGeo = new THREE.CylinderGeometry(0.09, 0.14, 0.20, 14);

    const createChibiHand = () => {
      const hG = new THREE.Group();
      // Bàn tay búp sen hình giọt nước mềm mại
      const palm = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), skinMat);
      palm.scale.set(0.75, 1.35, 0.45);
      palm.position.y = -0.04;
      hG.add(palm);
      return hG;
    };

    // Tay trái
    const armLGroup = new THREE.Group();
    armLGroup.position.set(-0.22, 0.02, 0);
    const upperArmL = new THREE.Mesh(sleeveUpperGeo, sashRobeMat);
    upperArmL.position.set(0, -0.11, 0);
    const foreArmL = new THREE.Group();
    foreArmL.position.set(0, -0.22, 0);
    const sleeveL = new THREE.Mesh(sleeveLowerGeo, sashRobeMat);
    sleeveL.position.set(0, -0.10, 0);
    const handL = createChibiHand();
    handL.position.set(0, -0.20, 0);
    foreArmL.add(sleeveL, handL);
    armLGroup.add(upperArmL, foreArmL);

    // Tay phải
    const armRGroup = new THREE.Group();
    armRGroup.position.set(0.22, 0.02, 0);
    const upperArmR = new THREE.Mesh(sleeveUpperGeo, innerRobeMat);
    upperArmR.position.set(0, -0.11, 0);
    const foreArmR = new THREE.Group();
    foreArmR.position.set(0, -0.22, 0);
    const sleeveR = new THREE.Mesh(sleeveLowerGeo, innerRobeMat);
    sleeveR.position.set(0, -0.10, 0);
    const handR = createChibiHand();
    handR.position.set(0, -0.20, 0);
    foreArmR.add(sleeveR, handR);
    armRGroup.add(upperArmR, foreArmR);

    chestGroup.add(armLGroup, armRGroup);

    // =========================================================================
    // PROPS GẮN TAY (DÙI MÕ, CHÀY CHUÔNG, 3 NÉN HƯƠNG, ỐNG XĂM)
    // =========================================================================
    // Dùi gõ mõ cầm ở tay phải
    const malletProp = new THREE.Group();
    const mStick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.018, 0.42, 10), woodMat);
    mStick.rotation.x = Math.PI / 2.3;
    mStick.position.set(0, -0.16, 0.16);
    const mHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x9b1b1b, roughness: 0.35 })
    );
    mHead.position.set(0, -0.20, 0.34);
    malletProp.add(mStick, mHead);
    malletProp.visible = false;
    foreArmR.add(malletProp);

    // Chày thỉnh chuông
    const bellStrikerProp = new THREE.Group();
    const bWood = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.65, 10), woodMat);
    bWood.rotation.x = Math.PI / 2;
    bWood.position.set(0, -0.18, 0.28);
    bellStrikerProp.add(bWood);
    bellStrikerProp.visible = false;
    foreArmR.add(bellStrikerProp);

    // 3 nén hương bén lửa
    const incenseProp = new THREE.Group();
    incenseProp.position.set(0, 0.18, 0.26);
    for (let s = -1; s <= 1; s++) {
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.46), new THREE.MeshBasicMaterial({ color: 0xaa2211 }));
      stick.position.set(s * 0.03, 0.16, 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff4500 }));
      tip.position.set(s * 0.03, 0.38, 0);
      incenseProp.add(stick, tip);
    }
    incenseProp.visible = false;
    chestGroup.add(incenseProp);

    // Ống xăm tre
    const fortuneProp = new THREE.Group();
    fortuneProp.position.set(0, 0.08, 0.26);
    const fTube = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.09, 0.42, 12), new THREE.MeshStandardMaterial({ color: 0xa1773a, roughness: 0.5 }));
    fortuneProp.add(fTube);
    for (let k = 0; k < 6; k++) {
      const fs = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.48), new THREE.MeshStandardMaterial({ color: 0xd4b07b }));
      fs.position.set((Math.random() - 0.5) * 0.10, 0.16, (Math.random() - 0.5) * 0.10);
      fortuneProp.add(fs);
    }
    fortuneProp.visible = false;
    chestGroup.add(fortuneProp);

    // Bồ đoàn riêng gắn kèm khi ngồi thiền (Vuông xám sạch sẽ y hệt Sansa)
    const cushion = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.10, 0.85),
      new THREE.MeshStandardMaterial({ color: 0x3d3d42, roughness: 0.85 })
    );
    cushion.position.y = 0.05;
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
    css2dObject.position.set(0, 1.75, 0);
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
  // Quy chuẩn hướng: +Z là PHÍA TRƯỚC mặt nhân vật, -Z là PHÍA SAU lưng
  // =========================================================================
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

      // 1. BƯỚC ĐI THIỀN HÀNH AN NHIÊN (MINDFUL WALKING GAIT)
      if (av.isMoving) {
        av.walkCycle += delta * 9.5;
        const cycle = av.walkCycle;

        // Chân bước dồn trọng tâm tự nhiên
        const legSwing = Math.sin(cycle) * 0.42;
        av.legLGroup.rotation.x = -legSwing;
        av.legRGroup.rotation.x = legSwing;

        // Nhấc chân và nhún gối nhẹ
        av.pelvis.position.y = 0.52 + Math.abs(Math.sin(cycle)) * 0.03;
        av.pelvis.rotation.y = Math.sin(cycle) * 0.04;
        av.pelvis.rotation.z = Math.cos(cycle) * 0.02;

        av.spineGroup.rotation.y = -Math.sin(cycle) * 0.04;
        av.spineGroup.rotation.x = 0.04; // Hơi nghiêng nhẹ về trước khi bước

        // Hai tay giữ trang nghiêm trong tư thế chắp búp sen trước ngực (+Z)
        // Upper arm khép nhẹ, forearm gập đưa bàn tay chắp trước ngực
        av.armLGroup.rotation.set(0.35, -0.15, 0.25);
        av.armRGroup.rotation.set(0.35, 0.15, -0.25);
        av.foreArmL.rotation.set(1.15, -0.35, -0.45);
        av.foreArmR.rotation.set(1.15, 0.35, 0.45);

        av.headGroup.rotation.x = -Math.sin(cycle * 2) * 0.02;
        av.headGroup.rotation.y = Math.sin(cycle) * 0.02;
        return;
      }

      // 2. NGỒI THIỀN KIẾT GIÀ TRÊN BỒ ĐOÀN (LOTUS MEDITATION)
      if (av.action === 'sit') {
        av.pelvis.position.y = 0.18;
        av.pelvis.rotation.set(0, 0, 0);

        // Chân gập ngang kiết già trên bồ đoàn
        av.legLGroup.rotation.set(-Math.PI / 2.2, 0.35, -0.20);
        av.legRGroup.rotation.set(-Math.PI / 2.2, -0.35, 0.20);

        av.spineGroup.rotation.set(0, 0, 0);

        // Hai tay kết Thiền Định Ấn (Dhyana Mudra) đặt ngửa thanh thản trong lòng
        av.armLGroup.rotation.set(0.25, -0.10, 0.20);
        av.armRGroup.rotation.set(0.25, 0.10, -0.20);
        av.foreArmL.rotation.set(0.85, -0.25, -0.35);
        av.foreArmR.rotation.set(0.85, 0.25, 0.35);

        av.headGroup.rotation.set(0.06, 0, 0); // Đầu hơi cúi tĩnh lặng

        // Nhịp thở đan điền êm dịu
        const breathe = Math.sin(time * 1.5) * 0.02;
        av.chestGroup.scale.set(1 + breathe, 1 + breathe * 0.6, 1 + breathe);
        return;
      }

      // 3. ĐẢNH LỄ TAM BẢO 3 LẠY NGŨ THỂ ĐẦU ĐỊA (3 DEVOUT PROSTRATIONS)
      // Lạy Phật: Quỳ xuống và cúi gập người VỀ PHÍA TRƯỚC chạm trán xuống bồ đoàn!
      if (av.action === 'bow' || av.action === 'bow3Times') {
        const bowCycle = 2.4;
        const progress = (av.actionTimer % bowCycle) / bowCycle;

        let bowPhase = 0;
        if (progress < 0.40) {
          // Hạ người phủ phục về phía trước
          bowPhase = Math.sin((progress / 0.40) * (Math.PI / 2));
        } else if (progress < 0.62) {
          // Giữ trán chạm đất cung kính (ngũ thể đầu địa)
          bowPhase = 1.0;
        } else {
          // Từ từ đứng dậy trang nghiêm
          bowPhase = Math.cos(((progress - 0.62) / 0.38) * (Math.PI / 2));
        }
        bowPhase = Math.max(0, Math.min(1, bowPhase));

        // Hạ pelvis quỳ xuống sàn/bồ đoàn
        av.pelvis.position.y = 0.52 - bowPhase * 0.38;

        // Cúi gập thân người VỀ PHÍA TRƯỚC (rotation.x dương khi đầu nghiêng tới trước)
        av.spineGroup.rotation.x = bowPhase * 1.25;
        av.headGroup.rotation.x = bowPhase * 0.45; // Trán chúc xuống đất

        // Đầu gối quỳ gập
        av.legLGroup.rotation.x = -bowPhase * 1.20;
        av.legRGroup.rotation.x = -bowPhase * 1.20;

        // Hai tay từ chắp sen hạ xuống chạm đất mở lòng bàn tay đón nhận ơn Phật
        av.armLGroup.rotation.set(0.35 + bowPhase * 0.45, -0.15, 0.25);
        av.armRGroup.rotation.set(0.35 + bowPhase * 0.45, 0.15, -0.25);
        av.foreArmL.rotation.set(1.15 - bowPhase * 0.45, -0.35, -0.45);
        av.foreArmR.rotation.set(1.15 - bowPhase * 0.45, 0.35, 0.45);
        return;
      }

      // 4. GÕ MÕ TỤNG KINH LIÊN TỤC (RHYTHMIC WOODFISH STRIKING)
      if (av.action === 'strikeWoodfish') {
        av.pelvis.position.y = 0.52;
        av.pelvis.rotation.set(0, 0, 0);
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);
        av.spineGroup.rotation.set(0.05, 0, 0);

        // Tay trái chắp trước ngực niệm Phật
        av.armLGroup.rotation.set(0.35, -0.15, 0.25);
        av.foreArmL.rotation.set(1.15, -0.35, -0.45);

        // Tay phải cầm dùi gõ đều đặn nhịp nhàng xuống mõ gỗ phía trước
        const tapCycle = (av.actionTimer * 6.2) % (Math.PI * 2);
        const strike = Math.sin(tapCycle);
        av.armRGroup.rotation.set(0.20 + Math.max(0, strike) * 0.25, 0.12, -0.10);
        av.foreArmR.rotation.set(0.95 + Math.max(0, strike) * 0.35, 0.20, 0.15);
        av.headGroup.rotation.x = Math.max(0, strike) * 0.04;
        return;
      }

      // 5. THỈNH ĐẠI HỒNG CHUNG (STRIKE GREAT BELL)
      if (av.action === 'strikeBell') {
        av.pelvis.position.y = 0.52;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

        av.armLGroup.rotation.set(0.35, -0.15, 0.25);
        av.foreArmL.rotation.set(1.15, -0.35, -0.45);

        if (av.actionTimer < 1.0) {
          const windup = av.actionTimer / 1.0;
          av.spineGroup.rotation.set(0, -windup * 0.16, 0);
          av.armRGroup.rotation.set(0.15 - windup * 0.20, 0.15, 0.05);
          av.foreArmR.rotation.set(0.85 - windup * 0.25, 0, 0);
        } else if (av.actionTimer < 1.8) {
          const strikePhase = (av.actionTimer - 1.0) / 0.8;
          const thrust = Math.sin(strikePhase * Math.PI);
          av.spineGroup.rotation.set(0.08 * thrust, 0.10 * thrust, 0);
          av.armRGroup.rotation.set(0.15 + thrust * 0.55, -0.15, 0.05);
          av.foreArmR.rotation.set(0.85 + thrust * 0.45, 0, 0);
        }
        return;
      }

      // 6. THÀNH KÍNH DÂNG HƯƠNG (INCENSE RITUAL)
      if (av.action === 'incense' || av.action === 'plantIncense') {
        av.pelvis.position.y = 0.52;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

        if (av.actionTimer < 3.8) {
          // Thành kính chắp tay giữ 3 nén hương giơ ngang mày xá 3 xá
          const vPhase = Math.sin(av.actionTimer * 3.8);
          av.spineGroup.rotation.x = 0.06 + Math.max(0, vPhase) * 0.22;
          av.headGroup.rotation.x = Math.max(0, vPhase) * 0.12;
          av.armLGroup.rotation.set(0.55, -0.12, 0.20);
          av.armRGroup.rotation.set(0.55, 0.12, -0.20);
          av.foreArmL.rotation.set(1.25, -0.25, -0.30);
          av.foreArmR.rotation.set(1.25, 0.25, 0.30);
        } else if (av.actionTimer < 5.5) {
          // Nghiêng người cắm 3 nén hương vào lư đồng (+Z)
          const plantPhase = Math.sin(((av.actionTimer - 3.8) / 1.7) * Math.PI);
          av.spineGroup.rotation.x = plantPhase * 0.35;
          av.armLGroup.rotation.set(0.40 + plantPhase * 0.30, 0, 0.1);
          av.armRGroup.rotation.set(0.40 + plantPhase * 0.30, 0, -0.1);
          av.foreArmL.rotation.set(1.10 - plantPhase * 0.35, 0.15, 0.1);
          av.foreArmR.rotation.set(1.10 - plantPhase * 0.35, -0.15, -0.1);
        }
        return;
      }

      // 7. LẮC ỐNG XĂM XIN QUẺ
      if (av.action === 'shakeFortune') {
        av.pelvis.position.y = 0.52;
        const shake = Math.sin(av.actionTimer * 16) * 0.08;
        av.spineGroup.rotation.x = 0.10 + shake;
        av.armLGroup.rotation.set(0.45 + shake, -0.10, 0.15);
        av.armRGroup.rotation.set(0.45 + shake, 0.10, -0.15);
        av.foreArmL.rotation.set(1.15, -0.20, -0.25);
        av.foreArmR.rotation.set(1.15, 0.20, 0.25);
        return;
      }

      // 8. ĐỨNG NGHỈ / CHỜ (IDLE STANDING IN CHẤP TAY BÚP SEN)
      av.pelvis.position.y = 0.52;
      av.pelvis.rotation.set(0, 0, 0);
      av.legLGroup.rotation.set(0, 0, 0);
      av.legRGroup.rotation.set(0, 0, 0);

      // Nhịp thở an lạc
      const idleBreathe = Math.sin(time * 2.0) * 0.015;
      av.spineGroup.rotation.set(idleBreathe * 0.4, 0, 0);
      av.headGroup.rotation.set(idleBreathe * 0.3, 0, 0);

      // Hai tay chắp búp sen trang nghiêm an nhiên trước ngực
      av.armLGroup.rotation.set(0.35, -0.15, 0.25);
      av.armRGroup.rotation.set(0.35, 0.15, -0.25);
      av.foreArmL.rotation.set(1.15, -0.35, -0.45);
      av.foreArmR.rotation.set(1.15, 0.35, 0.45);
    });
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
