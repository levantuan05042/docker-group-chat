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

  createAvatar(data) {
    const group = new THREE.Group();
    group.position.set(data.x || 0, data.y || 0, data.z || 0);
    if (typeof data.rotY === 'number') {
      group.rotation.y = data.rotY;
    }

    const robeSashColorHex = parseInt((data.robeColor || '#E69500').replace('#', '0x'), 16);

    // ========================================================
    // MATERIALS MATCHING THE MEME DISCIPLES EXACTLY:
    // Inner tunic: Soft Slate Grey / Off-white (#d5d5db)
    // Saffron stole/sash: Vibrant yellow / gold draped over left shoulder
    // Skin: Warm smooth matte peach (#ffdfbe)
    // ========================================================
    const innerRobeMat = new THREE.MeshStandardMaterial({
      color: 0xdedee4,
      roughness: 0.7,
      metalness: 0.05
    });

    const sashRobeMat = new THREE.MeshStandardMaterial({
      color: robeSashColorHex,
      roughness: 0.55,
      metalness: 0.1
    });

    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xffdfbe,
      roughness: 0.42,
      metalness: 0.0
    });

    const darkMat = new THREE.MeshStandardMaterial({ color: 0x22150c, roughness: 0.8 });

    // PELVIS HIERARCHY
    const pelvis = new THREE.Group();
    pelvis.position.y = 0.65;
    group.add(pelvis);

    // Lower Robe Skirt (Vạt áo lam/xám)
    const skirtGeo = new THREE.CylinderGeometry(0.32, 0.44, 0.55, 16);
    const skirt = new THREE.Mesh(skirtGeo, innerRobeMat);
    skirt.position.y = -0.15;
    pelvis.add(skirt);

    // Saffron sash hanging at the back/waist
    const sashHanger = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.45, 0.08), sashRobeMat);
    sashHanger.position.set(-0.1, -0.1, -0.22);
    pelvis.add(sashHanger);

    // LEGS & FEET
    const legGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.45, 12);
    const footGeo = new THREE.BoxGeometry(0.12, 0.08, 0.22);

    const legLGroup = new THREE.Group();
    legLGroup.position.set(-0.14, -0.2, 0);
    const legLMesh = new THREE.Mesh(legGeo, innerRobeMat);
    legLMesh.position.y = -0.18;
    const footL = new THREE.Mesh(footGeo, darkMat);
    footL.position.set(0, -0.4, 0.04);
    legLGroup.add(legLMesh, footL);

    const legRGroup = new THREE.Group();
    legRGroup.position.set(0.14, -0.2, 0);
    const legRMesh = new THREE.Mesh(legGeo, innerRobeMat);
    legRMesh.position.y = -0.18;
    const footR = new THREE.Mesh(footGeo, darkMat);
    footR.position.set(0, -0.4, 0.04);
    legRGroup.add(legRMesh, footR);

    pelvis.add(legLGroup, legRGroup);

    // TORSO & SASH DRAPERY
    const spineGroup = new THREE.Group();
    spineGroup.position.y = 0.08;
    pelvis.add(spineGroup);

    // Inner grey tunic body
    const torsoGeo = new THREE.CylinderGeometry(0.28, 0.32, 0.52, 16);
    const torsoMesh = new THREE.Mesh(torsoGeo, innerRobeMat);
    torsoMesh.position.y = 0.26;
    torsoMesh.castShadow = true;
    spineGroup.add(torsoMesh);

    // Saffron Kasaya stole draped diagonally across chest & left shoulder (as seen in photo!)
    const stoleGeo = new THREE.TorusGeometry(0.34, 0.08, 8, 20, Math.PI * 1.2);
    const stole = new THREE.Mesh(stoleGeo, sashRobeMat);
    stole.rotation.z = -Math.PI / 3.2;
    stole.rotation.y = Math.PI / 12;
    stole.position.set(0.04, 0.32, 0.06);
    spineGroup.add(stole);

    // Back stole drape
    const backStole = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.42, 0.06), sashRobeMat);
    backStole.position.set(-0.12, 0.28, -0.18);
    spineGroup.add(backStole);

    const chestGroup = new THREE.Group();
    chestGroup.position.y = 0.48;
    spineGroup.add(chestGroup);

    // HEAD GROUP (SHAVEN BALD MONK HEAD AS IN PHOTO)
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.22;
    chestGroup.add(headGroup);

    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.33, 24, 24), skinMat);
    headMesh.position.y = 0.18;
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Gentle smiling eyes & peaceful expression
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x24150c });
    const eyeL = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.01, 6, 12, Math.PI), eyeMat);
    eyeL.rotation.z = Math.PI;
    eyeL.position.set(-0.1, 0.19, 0.31);

    const eyeR = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.01, 6, 12, Math.PI), eyeMat);
    eyeR.rotation.z = Math.PI;
    eyeR.position.set(0.1, 0.19, 0.31);
    headGroup.add(eyeL, eyeR);

    // ARMS
    const armGeo = new THREE.CylinderGeometry(0.09, 0.13, 0.4, 12);
    const handMesh = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 10), skinMat);

    const armLGroup = new THREE.Group();
    armLGroup.position.set(-0.32, 0.1, 0);
    const upperArmL = new THREE.Mesh(armGeo, sashRobeMat);
    upperArmL.position.set(0, -0.16, 0);
    const foreArmL = new THREE.Group();
    foreArmL.position.set(0, -0.32, 0);
    const handL = handMesh.clone();
    handL.position.set(0.08, -0.05, 0.14);
    foreArmL.add(handL);
    armLGroup.add(upperArmL, foreArmL);

    const armRGroup = new THREE.Group();
    armRGroup.position.set(0.32, 0.1, 0);
    const upperArmR = new THREE.Mesh(armGeo, innerRobeMat);
    upperArmR.position.set(0, -0.16, 0);
    const foreArmR = new THREE.Group();
    foreArmR.position.set(0, -0.32, 0);
    const handR = handMesh.clone();
    handR.position.set(-0.08, -0.05, 0.14);
    foreArmR.add(handR);
    armRGroup.add(upperArmR, foreArmR);

    chestGroup.add(armLGroup, armRGroup);

    // Individual dark cushion attached when sitting
    const cushion = new THREE.Mesh(
      new THREE.BoxGeometry(0.92, 0.12, 0.92),
      new THREE.MeshStandardMaterial({ color: 0x3d3d42, roughness: 0.85 })
    );
    cushion.position.y = 0.06;
    cushion.visible = false;
    group.add(cushion);

    // ========================================================
    // CSS2D UI: AUTHENTIC OVERHEAD TEXT DIRECTLY LIKE THE MEME
    // In the meme: Bold white text floating cleanly with dark shadow!
    // ========================================================
    const uiContainer = document.createElement('div');
    uiContainer.className = 'avatar-ui-container';

    // Speech Bubble
    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'avatar-speech-bubble hidden';
    bubbleEl.innerHTML = `<div class="bubble-text"></div><div class="bubble-tail"></div>`;

    // Meme-style Overhead Name (như trong ảnh gốc)
    const tagEl = document.createElement('div');
    tagEl.className = 'avatar-nametag meme-style' + (data.id === this.localPlayerId ? ' is-me' : '');
    tagEl.innerHTML = `
      <span class="nametag-text">${this.escapeHtml(data.name || 'Thích thì nhích')}</span>
    `;

    uiContainer.appendChild(bubbleEl);
    uiContainer.appendChild(tagEl);

    const css2dObject = new CSS2DObject(uiContainer);
    css2dObject.position.set(0, 1.85, 0); // Positioned directly over the bald head
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
      walkCycle: Math.random() * 10,
      isMoving: false,
      merit: data.merit || 0
    };

    this.avatars.set(data.id, avatarInstance);

    if (data.currentBubble && data.currentBubble.text) {
      this.showBubble(data.id, data.currentBubble.text, 5000);
    }

    return avatarInstance;
  }

  updateAvatarData(id, coords) {
    const av = this.avatars.get(id);
    if (!av) return;
    av.targetX = coords.x;
    av.targetZ = coords.z;
    if (typeof coords.rotY === 'number') {
      av.targetRotY = coords.rotY;
    }
  }

  setAction(id, action) {
    const av = this.avatars.get(id);
    if (!av) return;
    av.action = action;

    if (action === 'sit') {
      av.cushion.visible = true;
    } else {
      av.cushion.visible = false;
    }
  }

  showBubble(id, text, duration = 6000) {
    const av = this.avatars.get(id);
    if (!av) return;

    const bubbleEl = av.bubbleEl;
    const textEl = bubbleEl.querySelector('.bubble-text');
    textEl.textContent = text;

    bubbleEl.classList.remove('hidden');
    bubbleEl.classList.remove('pop-out');
    bubbleEl.classList.add('pop-in');

    if (av.bubbleTimeout) clearTimeout(av.bubbleTimeout);

    av.bubbleTimeout = setTimeout(() => {
      bubbleEl.classList.remove('pop-in');
      bubbleEl.classList.add('pop-out');
      setTimeout(() => {
        bubbleEl.classList.add('hidden');
        bubbleEl.classList.remove('pop-out');
      }, 300);
    }, duration);
  }

  updateMerit(id, merit) {
    const av = this.avatars.get(id);
    if (!av) return;
    av.merit = merit;
  }

  removeAvatar(id) {
    const av = this.avatars.get(id);
    if (!av) return;
    if (av.bubbleTimeout) clearTimeout(av.bubbleTimeout);
    this.scene.remove(av.group);
    this.avatars.delete(id);
  }

  update(delta) {
    const time = Date.now() * 0.003;

    this.avatars.forEach(av => {
      const dx = av.targetX - av.group.position.x;
      const dz = av.targetZ - av.group.position.z;
      const dist = Math.hypot(dx, dz);

      if (dist > 0.015) {
        av.isMoving = true;
        av.group.position.x += dx * 0.22;
        av.group.position.z += dz * 0.22;

        if (av.action === 'sit') {
          av.action = 'stand';
          av.cushion.visible = false;
        }
      } else {
        av.isMoving = false;
      }

      let diffRot = av.targetRotY - av.group.rotation.y;
      while (diffRot < -Math.PI) diffRot += Math.PI * 2;
      while (diffRot > Math.PI) diffRot -= Math.PI * 2;
      av.group.rotation.y += diffRot * 0.25;

      // 1. WALKING GAIT
      if (av.isMoving) {
        av.walkCycle += delta * 11;
        const cycle = av.walkCycle;

        const legSwing = Math.sin(cycle) * 0.55;
        av.legLGroup.rotation.x = legSwing;
        av.legRGroup.rotation.x = -legSwing;

        av.pelvis.position.y = 0.62 + Math.abs(Math.sin(cycle)) * 0.05;
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

      // 2. SITTING MEDITATION (NGỒI BỒ ĐOÀN KIẾT GIÀ NHƯ ẢNH GỐC)
      if (av.action === 'sit') {
        av.pelvis.position.y = 0.26;
        av.pelvis.rotation.set(0, 0, 0);

        av.legLGroup.rotation.set(Math.PI / 2.3, 0.35, -0.2);
        av.legRGroup.rotation.set(Math.PI / 2.3, -0.35, 0.2);

        av.spineGroup.rotation.set(0, 0, 0);

        av.armLGroup.rotation.set(0.4, 0, -0.3);
        av.armRGroup.rotation.set(0.4, 0, 0.3);
        av.foreArmL.rotation.set(0.7, 0.4, 0);
        av.foreArmR.rotation.set(0.7, -0.4, 0);

        av.headGroup.rotation.set(0.06, 0, 0);

        const breathe = Math.sin(time * 1.6) * 0.025;
        av.chestGroup.scale.set(1 + breathe, 1 + breathe * 0.8, 1 + breathe);
        return;
      }

      // 3. BOWING (LẠY PHẬT)
      if (av.action === 'bow') {
        av.pelvis.position.y = 0.62;
        av.pelvis.rotation.set(0, 0, 0);

        const bowPhase = (Math.sin(time * 2.5) + 1) * 0.5;
        const bowAngle = bowPhase * 0.72;

        av.spineGroup.rotation.x = bowAngle;
        av.headGroup.rotation.x = bowPhase * 0.25;

        av.legLGroup.rotation.x = -bowPhase * 0.12;
        av.legRGroup.rotation.x = -bowPhase * 0.12;

        av.armLGroup.rotation.set(0.65, 0, -0.45);
        av.armRGroup.rotation.set(0.65, 0, 0.45);
        av.foreArmL.rotation.set(0.9, 0.55, 0);
        av.foreArmR.rotation.set(0.9, -0.55, 0);
        return;
      }

      // 4. STRIKING WOODFISH
      if (av.action === 'strikeWoodfish') {
        av.pelvis.position.y = 0.65;
        av.pelvis.rotation.set(0, 0, 0);
        av.legLGroup.rotation.set(0, 0, 0);
        av.legRGroup.rotation.set(0, 0, 0);
        av.spineGroup.rotation.set(0.08, 0, 0);

        av.armLGroup.rotation.set(0.5, 0, -0.2);
        av.foreArmL.rotation.set(0.6, 0.2, 0);

        const tap = Math.sin(time * 8);
        av.armRGroup.rotation.set(0.7 + tap * 0.18, 0, 0.1);
        av.foreArmR.rotation.set(0.8 + Math.max(0, tap) * 0.25, 0, 0);
        av.headGroup.rotation.x = Math.max(0, tap) * 0.06;
        return;
      }

      // 5. STANDING IDLE
      av.pelvis.position.y = 0.65;
      av.pelvis.rotation.set(0, 0, 0);
      av.legLGroup.rotation.set(0, 0, 0);
      av.legRGroup.rotation.set(0, 0, 0);
      av.spineGroup.rotation.set(0, 0, 0);

      av.armLGroup.rotation.set(0.55, 0, -0.4);
      av.armRGroup.rotation.set(0.55, 0, 0.4);
      av.foreArmL.rotation.set(0.8, 0.5, 0);
      av.foreArmR.rotation.set(0.8, -0.5, 0);

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
