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
  // TẠO HÌNH NHÂN VẬT SƯ THẦY / PHẬT TỬ CHUẨN XÁC TỈ LỆ NGƯỜI THẬT
  // Gương mặt từ bi, sống mũi, mắt phượng, 6 chấm giới điệp trên trán,
  // Chuỗi tràng hạt bồ đề 108 hạt gỗ đàn hương, y cà sa vắt chéo cài khoen ngọc,
  // Ống tay áo thụng rộng, giày vải tu sĩ, cử chỉ chắp tay hoa sen trang nghiêm
  // =========================================================================
  createAvatar(data) {
    const group = new THREE.Group();
    group.position.set(data.x || 0, data.y || 0, data.z || 0);
    if (typeof data.rotY === 'number') {
      group.rotation.y = data.rotY;
    }

    const robeSashColorHex = parseInt((data.robeColor || '#f5a623').replace('#', '0x'), 16);

    // CHẤT LIỆU VẢI VÀ DA NGƯỜI CHUẨN PBR
    const innerRobeMat = new THREE.MeshStandardMaterial({
      color: 0x4a5d6e, // Áo tràng màu lam thanh tịnh
      roughness: 0.72,
      metalness: 0.04
    });

    const collarMat = new THREE.MeshStandardMaterial({
      color: 0x37474f, // Nẹp cổ áo giao lĩnh vạt chéo
      roughness: 0.65
    });

    const sashRobeMat = new THREE.MeshStandardMaterial({
      color: robeSashColorHex, // Sắc y cà sa vàng cam rực rỡ
      roughness: 0.55,
      metalness: 0.08
    });

    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xfad1b0, // Làn da sáng hồng mịn màng phúc hậu
      roughness: 0.42,
      metalness: 0.0
    });

    const scalpMat = new THREE.MeshStandardMaterial({
      color: 0x8a9ba8, // Bóng xanh da đầu cạo trọc của tu sĩ thanh tịnh
      roughness: 0.65
    });

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x4a2411, roughness: 0.4 });
    const beadMat = new THREE.MeshStandardMaterial({ color: 0x542813, roughness: 0.32, metalness: 0.1 });
    const goldBroochMat = new THREE.MeshStandardMaterial({ color: 0xf5ba2a, metalness: 0.88, roughness: 0.2 });
    const sockMat = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.6 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x2e1d14, roughness: 0.75 });

    // 1. PELVIS & PLEATED SKIRT (HÔNG & TÀ ÁO TRÀNG DẬP LY)
    const pelvis = new THREE.Group();
    pelvis.position.y = 0.68;
    group.add(pelvis);

    // Tà áo tràng xòe nhẹ phủ qua đầu gối
    const skirtGeo = new THREE.CylinderGeometry(0.3, 0.44, 0.58, 20);
    const skirt = new THREE.Mesh(skirtGeo, innerRobeMat);
    skirt.position.y = -0.16;
    skirt.castShadow = true;
    pelvis.add(skirt);

    // Vạt cà sa rủ xéo qua hông phải
    const kesaHem = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.54, 0.06), sashRobeMat);
    kesaHem.position.set(-0.12, -0.14, 0.2);
    kesaHem.rotation.z = -0.12;
    pelvis.add(kesaHem);

    // 2. LEGS, SOCKS & MONK SHOES (CHÂN, TẤT TRẮNG & GIÀY VẢI TU SĨ)
    const legGeo = new THREE.CylinderGeometry(0.085, 0.08, 0.45, 14);
    const shoeGeo = new THREE.BoxGeometry(0.12, 0.08, 0.24);

    const legLGroup = new THREE.Group();
    legLGroup.position.set(-0.13, -0.22, 0);
    const legLMesh = new THREE.Mesh(legGeo, sockMat); // Tất trắng tu sĩ
    legLMesh.position.y = -0.18;
    const footL = new THREE.Mesh(shoeGeo, shoeMat);
    footL.position.set(0, -0.4, 0.04);
    legLGroup.add(legLMesh, footL);

    const legRGroup = new THREE.Group();
    legRGroup.position.set(0.13, -0.22, 0);
    const legRMesh = new THREE.Mesh(legGeo, sockMat);
    legRMesh.position.y = -0.18;
    const footR = new THREE.Mesh(shoeGeo, shoeMat);
    footR.position.set(0, -0.4, 0.04);
    legRGroup.add(legRMesh, footR);

    pelvis.add(legLGroup, legRGroup);

    // 3. SPINE & TORSO (THÂN TRÊN VỚI ÁO CÀ SA & CỔ GIAO LĨNH)
    const spineGroup = new THREE.Group();
    spineGroup.position.y = 0.1;
    pelvis.add(spineGroup);

    // Thân áo tràng bên trong
    const torsoGeo = new THREE.CylinderGeometry(0.26, 0.3, 0.54, 20);
    const torsoMesh = new THREE.Mesh(torsoGeo, innerRobeMat);
    torsoMesh.position.y = 0.27;
    torsoMesh.castShadow = true;
    spineGroup.add(torsoMesh);

    // Cổ áo giao lĩnh vạt chéo truyền thống của nhà chùa
    const collarL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.32, 0.03), collarMat);
    collarL.rotation.z = -Math.PI / 4.5;
    collarL.position.set(-0.06, 0.42, 0.27);
    const collarR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.32, 0.03), collarMat);
    collarR.rotation.z = Math.PI / 4.5;
    collarR.position.set(0.06, 0.42, 0.27);
    spineGroup.add(collarL, collarR);

    // Y CÀ SA VẮT CHÉO TỪ VAI TRÁI QUA HÔNG PHẢI (ÔM SÁT NGỰC VÀ LƯNG, TRANG NGHIÊM THANH THOÁT)
    const kesaSashGroup = new THREE.Group();
    // Vạt cà sa trước ngực vắt chéo
    const sashFront = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.56, 0.04), sashRobeMat);
    sashFront.position.set(-0.04, 0.28, 0.25);
    sashFront.rotation.z = -0.52;
    sashFront.rotation.y = 0.05;
    // Vạt cà sa sau lưng
    const sashBack = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.56, 0.04), sashRobeMat);
    sashBack.position.set(-0.04, 0.28, -0.25);
    sashBack.rotation.z = -0.52;
    sashBack.rotation.y = -0.05;
    // Cầu vai vắt qua vai trái
    const sashShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.52), sashRobeMat);
    sashShoulder.position.set(-0.20, 0.52, 0);

    kesaSashGroup.add(sashFront, sashBack, sashShoulder);
    spineGroup.add(kesaSashGroup);

    // Khoen ngọc cài vai dát vàng (Jade Brooch Ring on shoulder)
    const brooch = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.015, 8, 16), goldBroochMat);
    brooch.position.set(-0.20, 0.48, 0.26);
    spineGroup.add(brooch);

    // Dải lụa cà sa rủ dọc từ khoen ngọc xuống
    const kesaRibbon = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.42, 0.02), sashRobeMat);
    kesaRibbon.position.set(-0.20, 0.26, 0.27);
    spineGroup.add(kesaRibbon);

    // CHUỖI TRÀNG HẠT BỒ ĐỀ 108 HẠT GỖ ĐÀN HƯƠNG ĐEO QUANH CỔ
    const rosaryGroup = new THREE.Group();
    rosaryGroup.position.set(0, 0.46, 0.12);
    for (let b = 0; b < 24; b++) {
      const bAng = (b / 24) * Math.PI * 2;
      const bead = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), beadMat);
      bead.position.set(Math.cos(bAng) * 0.19, -Math.sin(bAng) * 0.25, Math.sin(bAng) * 0.08);
      rosaryGroup.add(bead);
    }
    // Hạt hồ lô & dây cát tường đỏ rủ trước ngực
    const gourd = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), goldBroochMat);
    gourd.position.set(0, -0.26, 0.12);
    const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.02, 0.14, 6), new THREE.MeshBasicMaterial({ color: 0xaa1818 }));
    tassel.position.set(0, -0.34, 0.12);
    rosaryGroup.add(gourd, tassel);
    spineGroup.add(rosaryGroup);

    const chestGroup = new THREE.Group();
    chestGroup.position.y = 0.5;
    spineGroup.add(chestGroup);

    // 4. ĐẦU SƯ THẦY / PHẬT TỬ TỪ BI TỈ LỆ NGƯỜI THẬT
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.24;
    chestGroup.add(headGroup);

    // Hộp sọ & gương mặt trái xoan phúc tướng
    const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.28, 26, 26), skinMat);
    cranium.scale.set(0.92, 1.04, 0.96);
    cranium.position.y = 0.16;
    cranium.castShadow = true;
    headGroup.add(cranium);

    // Vòm da đầu cạo trọc xanh lam mờ (Shaved monk scalp tone)
    const scalpCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.282, 22, 22, 0, Math.PI * 2, 0, Math.PI / 1.7),
      scalpMat
    );
    scalpCap.scale.set(0.92, 1.04, 0.96);
    scalpCap.position.y = 0.16;
    headGroup.add(scalpCap);

    // 6 CHẤM GIỚI ĐIỆP ĐỎ SON TRÊN ĐỈNH ĐẦU (SIX MONASTIC ORDINATION DOTS - ÔM SÁT VÒM ĐẦU)
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xcc2222 });
    const dotCoords = [
      { y: 0.31, z: 0.226, rx: 0.52 },
      { y: 0.36, z: 0.192, rx: 0.78 },
      { y: 0.41, z: 0.133, rx: 1.05 }
    ];
    [-0.038, 0.038].forEach(dx => {
      dotCoords.forEach(c => {
        const dot = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.006, 8), dotMat);
        dot.position.set(dx, c.y, c.z);
        dot.rotation.x = c.rx;
        headGroup.add(dot);
      });
    });

    // SỐNG MŨI THANH TÚ & ĐẦU MŨI TRÒN NHỎ
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.16, 6), skinMat);
    nose.rotation.x = -0.22;
    nose.position.set(0, 0.14, 0.285);
    headGroup.add(nose);

    // ĐÔI MẮT PHƯỢNG TỪ BI KHÉP HỜ TĨNH LẶNG
    const eyeBrowMat = new THREE.MeshBasicMaterial({ color: 0x3d271d });
    [-0.09, 0.09].forEach(ex => {
      // Cung mày cong thanh tú
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.018, 0.02), eyeBrowMat);
      brow.rotation.z = ex > 0 ? -0.15 : 0.15;
      brow.position.set(ex, 0.22, 0.27);

      // Mí mắt khép hờ nhìn xuống
      const eyeLid = new THREE.Mesh(new THREE.TorusGeometry(0.038, 0.012, 6, 12, Math.PI), eyeBrowMat);
      eyeLid.rotation.z = Math.PI;
      eyeLid.position.set(ex, 0.17, 0.275);

      headGroup.add(brow, eyeLid);
    });

    // MÔI SON TỪ BI MỈM CƯỜI HOAN HỶ
    const lipMat = new THREE.MeshStandardMaterial({ color: 0xc45e5e, roughness: 0.4 });
    const lips = new THREE.Mesh(new THREE.TorusGeometry(0.038, 0.011, 6, 12, Math.PI * 0.85), lipMat);
    lips.rotation.x = Math.PI / 2.3;
    lips.rotation.z = Math.PI;
    lips.position.set(0, 0.065, 0.28);
    headGroup.add(lips);

    // ĐÔI TAI PHẬT DÁI TAI DÀY PHÚC HẬU
    [-0.27, 0.27].forEach(earX => {
      const earGroup = new THREE.Group();
      earGroup.position.set(earX, 0.14, 0);

      const earUpper = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), skinMat);
      earUpper.scale.set(0.4, 1.0, 0.7);

      const earLobe = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.12, 8), skinMat);
      earLobe.position.set(0, -0.07, 0);

      earGroup.add(earUpper, earLobe);
      headGroup.add(earGroup);
    });

    // 5. HAI TAY VỚI ỐNG TAY ÁO THỤNG RỘNG & BÀN TAY 5 NGÓN CHUẨN XÁC
    const sleeveUpperGeo = new THREE.CylinderGeometry(0.12, 0.15, 0.26, 14);
    const sleeveLowerGeo = new THREE.CylinderGeometry(0.11, 0.16, 0.24, 14);

    const createHandRealistic = (isLeft) => {
      const handG = new THREE.Group();
      // Lòng bàn tay (hướng xuống theo trục cẳng tay)
      const palm = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.08, 0.03), skinMat);
      palm.position.set(0, -0.04, 0);
      handG.add(palm);

      // 4 ngón tay thon dài duỗi tự nhiên theo chiều dài cánh tay (-Y)
      for (let f = 0; f < 4; f++) {
        const finger = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.006, 0.075, 6), skinMat);
        finger.position.set(-0.024 + f * 0.016, -0.115, 0);
        handG.add(finger);
      }
      // Ngón cái khép nhẹ hướng vào phía trong cơ thể
      const thumb = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.007, 0.055, 6), skinMat);
      thumb.position.set(isLeft ? 0.038 : -0.038, -0.045, 0.012);
      thumb.rotation.z = isLeft ? -0.42 : 0.42;
      handG.add(thumb);

      handG.scale.set(0.9, 0.9, 0.9);
      return handG;
    };

    const armLGroup = new THREE.Group();
    armLGroup.position.set(-0.25, 0.05, 0);
    const upperArmL = new THREE.Mesh(sleeveUpperGeo, sashRobeMat);
    upperArmL.position.set(0, -0.13, 0);
    const foreArmL = new THREE.Group();
    foreArmL.position.set(0, -0.26, 0);
    const sleeveL = new THREE.Mesh(sleeveLowerGeo, sashRobeMat);
    sleeveL.position.set(0, -0.12, 0);
    const handL = createHandRealistic(true);
    handL.position.set(0, -0.24, 0);
    foreArmL.add(sleeveL, handL);
    armLGroup.add(upperArmL, foreArmL);

    const armRGroup = new THREE.Group();
    armRGroup.position.set(0.25, 0.05, 0);
    const upperArmR = new THREE.Mesh(sleeveUpperGeo, innerRobeMat);
    upperArmR.position.set(0, -0.13, 0);
    const foreArmR = new THREE.Group();
    foreArmR.position.set(0, -0.26, 0);
    const sleeveR = new THREE.Mesh(sleeveLowerGeo, innerRobeMat);
    sleeveR.position.set(0, -0.12, 0);
    const handR = createHandRealistic(false);
    handR.position.set(0, -0.24, 0);
    foreArmR.add(sleeveR, handR);
    armRGroup.add(upperArmR, foreArmR);

    chestGroup.add(armLGroup, armRGroup);

    // =========================================================================
    // PROPS GẮN TAY (DÙI MÕ, CHÀY CHUÔNG, 3 NÉN HƯƠNG, ỐNG XĂM)
    // =========================================================================
    // Dùi gõ mõ cầm chắc chắn trên tay phải hướng về phía trước gõ xuống mõ
    const malletProp = new THREE.Group();
    const mStick = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.02, 0.48, 10), woodMat);
    mStick.rotation.x = Math.PI / 2.3;
    mStick.position.set(0, -0.20, 0.18);
    const mHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.065, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x9b1b1b, roughness: 0.35 })
    );
    mHead.position.set(0, -0.24, 0.38);
    malletProp.add(mStick, mHead);
    malletProp.visible = false;
    foreArmR.add(malletProp);

    // Chày thỉnh chuông cầm ngang tay phải hướng về đại hồng chung
    const bellStrikerProp = new THREE.Group();
    const bWood = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.04, 0.75, 12), woodMat);
    bWood.rotation.x = Math.PI / 2;
    bWood.position.set(0, -0.22, 0.32);
    bellStrikerProp.add(bWood);
    bellStrikerProp.visible = false;
    foreArmR.add(bellStrikerProp);

    // 3 nén hương bén lửa
    const incenseProp = new THREE.Group();
    incenseProp.position.set(0, 0.22, 0.28);
    for (let s = -1; s <= 1; s++) {
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.52), new THREE.MeshBasicMaterial({ color: 0xaa2211 }));
      stick.position.set(s * 0.035, 0.18, 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff4500 }));
      tip.position.set(s * 0.035, 0.44, 0);
      incenseProp.add(stick, tip);
    }
    incenseProp.visible = false;
    chestGroup.add(incenseProp);

    // Ống xăm tre
    const fortuneProp = new THREE.Group();
    fortuneProp.position.set(0, 0.10, 0.30);
    const fTube = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.11, 0.48, 14), new THREE.MeshStandardMaterial({ color: 0xa1773a, roughness: 0.5 }));
    fortuneProp.add(fTube);
    for (let k = 0; k < 6; k++) {
      const fs = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.54), new THREE.MeshStandardMaterial({ color: 0xd4b07b }));
      fs.position.set((Math.random() - 0.5) * 0.12, 0.18, (Math.random() - 0.5) * 0.12);
      fortuneProp.add(fs);
    }
    fortuneProp.visible = false;
    chestGroup.add(fortuneProp);
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

      // 1. BƯỚC ĐI THIỀN HÀNH AN NHIÊN (MINDFUL WALKING GAIT)
      if (av.isMoving) {
        av.walkCycle += delta * 9.5;
        const cycle = av.walkCycle;

        // Chân bước dồn trọng tâm tự nhiên (âm = bước tới trước +Z, dương = lùi sau -Z)
        const legSwing = Math.sin(cycle) * 0.48;
        av.legLGroup.rotation.x = -legSwing;
        av.legRGroup.rotation.x = legSwing;

        // Nhấc chân và nhún gối nhẹ
        av.pelvis.position.y = 0.68 + Math.abs(Math.sin(cycle)) * 0.035;
        av.pelvis.rotation.y = Math.sin(cycle) * 0.05;
        av.pelvis.rotation.z = Math.cos(cycle) * 0.02;

        av.spineGroup.rotation.y = -Math.sin(cycle) * 0.05;
        av.spineGroup.rotation.x = -0.03;

        // Hai tay giữ trang nghiêm trong tư thế chắp búp sen trước ngực (+Z)
        av.armLGroup.rotation.set(-0.62, 0.14, -0.24);
        av.armRGroup.rotation.set(-0.62, -0.14, 0.24);
        av.foreArmL.rotation.set(-1.45, 1.48, 0.18);
        av.foreArmR.rotation.set(-1.45, -1.48, -0.18);

        av.headGroup.rotation.x = -Math.sin(cycle * 2) * 0.025;
        av.headGroup.rotation.y = Math.sin(cycle) * 0.02;
        return;
      }

      // 2. NGỒI THIỀN KIẾT GIÀ TRÊN BỒ ĐOÀN (LOTUS MEDITATION)
      if (av.action === 'sit') {
        av.pelvis.position.y = 0.26;
        av.pelvis.rotation.set(0, 0, 0);

        // Chân xếp bằng kiết già
        av.legLGroup.rotation.set(-Math.PI / 2.3, 0.38, -0.22);
        av.legRGroup.rotation.set(-Math.PI / 2.3, -0.38, 0.22);

        av.spineGroup.rotation.set(0, 0, 0);

        // Hai tay kết Thiền Định Ấn (Dhyana Mudra) đặt ngửa thanh thản trong lòng
        av.armLGroup.rotation.set(-0.42, 0.08, -0.24);
        av.armRGroup.rotation.set(-0.42, -0.08, 0.24);
        av.foreArmL.rotation.set(-0.88, 0.45, 0.15);
        av.foreArmR.rotation.set(-0.88, -0.45, -0.15);

        av.headGroup.rotation.set(-0.05, 0, 0);

        const breathe = Math.sin(time * 1.5) * 0.022;
        av.chestGroup.scale.set(1 + breathe, 1 + breathe * 0.7, 1 + breathe);
        return;
      }

      // 3. ĐẢNH LỄ TAM BẢO 3 LẠY NGŨ THỂ ĐẦU ĐỊA (3 DEVOUT PROSTRATIONS)
      if (av.action === 'bow' || av.action === 'bow3Times') {
        const bowCycleDuration = 2.4;
        const cycleProgress = (av.actionTimer % bowCycleDuration) / bowCycleDuration;
        const bowPhase = Math.sin(cycleProgress * Math.PI);

        // Hạ người quỳ gối ngũ thể đầu địa
        av.pelvis.position.y = 0.68 - bowPhase * 0.48;
        av.spineGroup.rotation.x = -bowPhase * 1.15;
        av.headGroup.rotation.x = -bowPhase * 0.45;

        av.legLGroup.rotation.x = bowPhase * 0.65;
        av.legRGroup.rotation.x = bowPhase * 0.65;

        // Hai tay từ chắp sen dâng lên rồi phủ phục chạm sàn ngửa lòng bàn tay
        av.armLGroup.rotation.set(-0.62 - bowPhase * 0.55, 0.14, -0.26 - bowPhase * 0.2);
        av.armRGroup.rotation.set(-0.62 - bowPhase * 0.55, -0.14, 0.26 + bowPhase * 0.2);
        av.foreArmL.rotation.set(-1.45 + bowPhase * 0.75, 1.48 - bowPhase * 0.6, 0.18);
        av.foreArmR.rotation.set(-1.45 + bowPhase * 0.75, -1.48 + bowPhase * 0.6, -0.18);
        return;
      }

      // 4. GÕ MÕ TỤNG KINH LIÊN TỤC (RHYTHMIC WOODFISH STRIKING)
      if (av.action === 'strikeWoodfish') {
        av.pelvis.position.y = 0.68;
        av.pelvis.rotation.set(0, 0, 0);
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);
        av.spineGroup.rotation.set(-0.06, 0, 0);

        // Tay trái giữ chuỗi tràng hạt trước ngực niệm Phật
        av.armLGroup.rotation.set(-0.62, 0.14, -0.24);
        av.foreArmL.rotation.set(-1.35, 1.25, 0.18);

        // Tay phải cầm dùi gõ đều đặn nhịp nhàng xuống mõ gỗ phía trước (+Z)
        const tapCycle = (av.actionTimer * 6.2) % (Math.PI * 2);
        const strike = Math.sin(tapCycle);
        av.armRGroup.rotation.set(-0.68 - Math.max(0, strike) * 0.22, -0.12, 0.08);
        av.foreArmR.rotation.set(-0.75 - Math.max(0, strike) * 0.38, -0.15, 0);
        av.headGroup.rotation.x = -Math.max(0, strike) * 0.04;
        return;
      }

      // 5. THỈNH ĐẠI HỒNG CHUNG (STRIKE GREAT BELL)
      if (av.action === 'strikeBell') {
        av.pelvis.position.y = 0.68;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

        av.armLGroup.rotation.set(-0.62, 0.14, -0.24);
        av.foreArmL.rotation.set(-1.35, 1.25, 0.18);

        if (av.actionTimer < 1.0) {
          const windup = av.actionTimer / 1.0;
          av.spineGroup.rotation.set(0, windup * 0.18, 0);
          av.armRGroup.rotation.set(-0.45 + windup * 0.25, 0.15, 0.05);
          av.foreArmR.rotation.set(-0.65 + windup * 0.25, 0, 0);
        } else if (av.actionTimer < 1.8) {
          const strikePhase = (av.actionTimer - 1.0) / 0.8;
          const thrust = Math.sin(strikePhase * Math.PI);
          av.spineGroup.rotation.set(-0.10 * thrust, -0.12 * thrust, 0);
          av.armRGroup.rotation.set(-0.45 - thrust * 0.55, -0.15, 0.05);
          av.foreArmR.rotation.set(-0.65 - thrust * 0.45, 0, 0);
        }
        return;
      }

      // 6. THÀNH KÍNH DÂNG HƯƠNG (INCENSE RITUAL)
      if (av.action === 'incense' || av.action === 'plantIncense') {
        av.pelvis.position.y = 0.68;
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);

        if (av.actionTimer < 3.8) {
          // Thành kính chắp tay giữ 3 nén hương giơ ngang mày xá 3 xá
          const vPhase = Math.sin(av.actionTimer * 3.8);
          av.spineGroup.rotation.x = -0.10 - Math.max(0, vPhase) * 0.28;
          av.headGroup.rotation.x = -Math.max(0, vPhase) * 0.16;
          av.armLGroup.rotation.set(-0.72, 0.12, -0.22);
          av.armRGroup.rotation.set(-0.72, -0.12, 0.22);
          av.foreArmL.rotation.set(-1.55, 1.25, 0.18);
          av.foreArmR.rotation.set(-1.55, -1.25, -0.18);
        } else if (av.actionTimer < 5.5) {
          // Nghiêng người vươn tay cắm 3 nén hương vào lư đồng (+Z)
          const plantPhase = Math.sin(((av.actionTimer - 3.8) / 1.7) * Math.PI);
          av.spineGroup.rotation.x = -plantPhase * 0.38;
          av.armLGroup.rotation.set(-0.72 - plantPhase * 0.25, 0, -0.1);
          av.armRGroup.rotation.set(-0.72 - plantPhase * 0.25, 0, 0.1);
          av.foreArmL.rotation.set(-1.55 + plantPhase * 0.75, 0.35, 0.1);
          av.foreArmR.rotation.set(-1.55 + plantPhase * 0.75, -0.35, -0.1);
        }
        return;
      }

      // 7. XIN XĂM QUÁN ÂM (SHAKE FORTUNE TUBE)
      if (av.action === 'shakeFortune') {
        av.pelvis.position.y = 0.68;
        av.spineGroup.rotation.set(-0.06, 0, 0);

        const rattle = Math.sin(av.actionTimer * 18);
        av.armLGroup.rotation.set(-0.65 - rattle * 0.12, 0.12, -0.22);
        av.armRGroup.rotation.set(-0.65 - rattle * 0.12, -0.12, 0.22);
        av.foreArmL.rotation.set(-1.42 - rattle * 0.16, 1.25, 0.18);
        av.foreArmR.rotation.set(-1.42 - rattle * 0.16, -1.25, -0.18);
        av.headGroup.rotation.x = -0.06 - Math.abs(rattle) * 0.04;
        return;
      }

      // 8. TƯ THẾ ĐỨNG CHẮP TAY HOA SEN AN NHIÊN (DEVOUT ANJALI MUDRA IDLE)
      av.pelvis.position.y = 0.68;
      av.pelvis.rotation.set(0, 0, 0);
      av.legLGroup.rotation.set(0, 0, 0);
      av.legRGroup.rotation.set(0, 0, 0);
      av.spineGroup.rotation.set(0, 0, 0);

      // Hai bàn tay chắp thành hình búp sen thanh tịnh ngay trước ngực (+Z)
      av.armLGroup.rotation.set(-0.62, 0.14, -0.24);
      av.armRGroup.rotation.set(-0.62, -0.14, 0.24);
      av.foreArmL.rotation.set(-1.45, 1.48, 0.18);
      av.foreArmR.rotation.set(-1.45, -1.48, -0.18);

      const idleBreathe = Math.sin(time * 1.6) * 0.018;
      av.chestGroup.scale.set(1 + idleBreathe, 1 + idleBreathe * 0.6, 1 + idleBreathe);
      av.headGroup.rotation.x = -Math.sin(time * 1.1) * 0.02;
      av.headGroup.rotation.y = Math.sin(time * 0.7) * 0.02;
      av.headGroup.rotation.y = Math.sin(time * 0.8) * 0.025;
    });
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
