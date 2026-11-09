import * as THREE from 'three';

export class PlayerController {
  constructor(camera, domElement, onMoveCallback, templeScene, app) {
    this.camera = camera;
    this.domElement = domElement;
    this.onMoveCallback = onMoveCallback;
    this.temple = templeScene;
    this.app = app;

    // Movement state - Đứng trang nghiêm trước Phật điện
    this.position = new THREE.Vector3(0, 0, 4.5);
    this.rotationY = Math.PI; // Face Buddha (-Z) into the temple
    this.moveSpeed = 4.5;
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };

    // Smooth Orbit Camera parameters with Damping (Góc nhìn thoáng đãng, nhân vật ở tiền cảnh, không che lấp Phật điện)
    this.camDistance = 7.0;
    this.targetCamDistance = 7.0;
    this.camHeight = 2.6;
    this.targetCamHeight = 2.6;
    this.camPitch = 0.26; // Góc nhìn Chánh Điện ngắm trọn vẹn Phật tượng, Bồ Tát & 18 La Hán
    this.targetCamPitch = 0.26;
    this.camYaw = 0; // Hướng camera thẳng về phía Phật điện (-Z)
    this.targetCamYaw = 0;

    // Mouse & Touch Pointer drag / tap handling
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.lastPointer = { x: 0, y: 0 };
    this.dragStartTime = 0;
    this.dragMoved = 0;

    // Click to move target
    this.targetMovePoint = null;
    this.targetRotYArrival = Math.PI;
    this.onArriveCallback = null;
    this.onCancelCallback = null;
    this.raycaster = new THREE.Raycaster();
    this.mouseVec = new THREE.Vector2();

    this.lastSentTime = 0;
    this.sendInterval = 1000 / 30; // 30Hz network update

    this.initEventListeners();
  }

  runToTarget(targetX, targetZ, targetRotY, onArrive) {
    this.targetMovePoint = new THREE.Vector3(targetX, 0, targetZ);
    this.targetRotYArrival = typeof targetRotY === 'number' ? targetRotY : Math.PI;
    this.onArriveCallback = onArrive || null;
  }

  cancelAutoMovement() {
    this.targetMovePoint = null;
    this.onArriveCallback = null;
    if (this.onCancelCallback) {
      this.onCancelCallback();
    }
  }

  resetToIconicView() {
    this.setCameraMainHall();
  }

  setCameraMainHall() {
    this.targetCamYaw = 0;
    this.targetCamPitch = 0.26;
    this.targetCamDistance = 7.2;
    this.targetCamHeight = 2.8;
  }

  setCameraBuddhaCloseUp() {
    this.targetCamYaw = 0;
    this.targetCamPitch = 0.12;
    this.targetCamDistance = 5.2;
    this.targetCamHeight = 2.2;
  }

  setCameraFollow() {
    this.targetCamYaw = 0;
    this.targetCamPitch = 0.30;
    this.targetCamDistance = 5.0;
    this.targetCamHeight = 2.4;
  }

  initEventListeners() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.handleKeyUp(e));

    this.domElement.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.interactive-ui') || e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) return;
      this.isDragging = true;
      this.dragStart = { x: e.clientX, y: e.clientY };
      this.lastPointer = { x: e.clientX, y: e.clientY };
      this.dragStartTime = Date.now();
      this.dragMoved = 0;
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastPointer.x;
      const dy = e.clientY - this.lastPointer.y;
      this.dragMoved += Math.hypot(dx, dy);

      // Only orbit if moved noticeably (> 10px)
      if (this.dragMoved > 10) {
        this.targetCamYaw -= dx * 0.005;
        this.targetCamPitch = Math.max(0.05, Math.min(Math.PI / 2.3, this.targetCamPitch + dy * 0.004));
      }
      this.lastPointer = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', (e) => {
      if (this.isDragging) {
        const elapsed = Date.now() - (this.dragStartTime || 0);
        // If quick tap (< 450ms) and moved < 25px: It is a CLICK TO MOVE / INTERACT!
        if (elapsed < 450 && this.dragMoved < 25) {
          this.handleFloorClick(e);
        }
        this.isDragging = false;
      }
    });

    this.domElement.addEventListener('wheel', (e) => {
      this.targetCamDistance = Math.max(2.6, Math.min(10.5, this.targetCamDistance + e.deltaY * 0.004));
    }, { passive: true });
  }

  initVirtualDpad() {
    const bindBtn = (id, key) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      const start = (e) => {
        e.preventDefault();
        this.keys[key] = true;
        this.cancelAutoMovement();
      };
      const end = (e) => {
        e.preventDefault();
        this.keys[key] = false;
      };
      btn.addEventListener('pointerdown', start);
      btn.addEventListener('pointerup', end);
      btn.addEventListener('pointerleave', end);
      btn.addEventListener('pointercancel', end);
    };

    bindBtn('dpad-up', 'forward');
    bindBtn('dpad-down', 'backward');
    bindBtn('dpad-left', 'left');
    bindBtn('dpad-right', 'right');

    const centerBtn = document.getElementById('dpad-center');
    if (centerBtn) {
      centerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.cancelAutoMovement();
        this.keys.forward = false;
        this.keys.backward = false;
        this.keys.left = false;
        this.keys.right = false;
      });
    }
  }

  handleKeyDown(e) {
    if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) return;

    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.forward = true;
        this.cancelAutoMovement();
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.backward = true;
        this.cancelAutoMovement();
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = true;
        this.cancelAutoMovement();
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = true;
        this.cancelAutoMovement();
        break;
    }
  }

  handleKeyUp(e) {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.forward = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.backward = false;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = false;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = false;
        break;
    }
  }

  handleFloorClick(e) {
    if (e.target.closest('.interactive-ui') || e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) return;

    const rect = this.domElement.getBoundingClientRect();
    this.mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouseVec, this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hitPoint = new THREE.Vector3();
    const result = this.raycaster.ray.intersectPlane(plane, hitPoint);

    if (result) {
      const stations = this.temple.interactiveStations;

      // 1. Clicked near Woodfish table:
      if (stations && stations.woodfish && Math.hypot(hitPoint.x - stations.woodfish.x, hitPoint.z - stations.woodfish.z) < 2.0) {
        if (this.app && this.app.fsm) {
          this.app.fsm.startWoodfish();
          return;
        }
      }

      // 2. Clicked near Great Bell:
      if (stations && stations.bell && Math.hypot(hitPoint.x - stations.bell.x, hitPoint.z - stations.bell.z) < 2.2) {
        if (this.app && this.app.fsm) {
          this.app.fsm.startBell();
          return;
        }
      }

      // 3. Clicked near Fortune table:
      if (stations && stations.fortuneTable && Math.hypot(hitPoint.x - stations.fortuneTable.x, hitPoint.z - stations.fortuneTable.z) < 2.0) {
        if (this.app && this.app.fsm) {
          this.app.fsm.startFortune();
          return;
        }
      }

      // 4. Clicked near Incense Burner / Altar table:
      if (stations && stations.incenseBurner && Math.hypot(hitPoint.x - stations.incenseBurner.x, hitPoint.z - stations.incenseBurner.z) < 2.0) {
        if (this.app && this.app.fsm) {
          this.app.fsm.startIncense();
          return;
        }
      }

      // 5. Clicked near Grand Buddha Altar (Bow 3 times):
      if (Math.hypot(hitPoint.x, hitPoint.z - (-3.8)) < 2.5) {
        if (this.app && this.app.fsm) {
          this.app.fsm.startBowing();
          return;
        }
      }

      // 6. Clicked near any cushion (Meditate):
      if (this.temple.cushionPositions) {
        for (const c of this.temple.cushionPositions) {
          if (Math.hypot(hitPoint.x - c.x, hitPoint.z - c.z) < 0.85) {
            if (this.app && this.app.fsm) {
              this.app.fsm.startMeditation();
              return;
            }
          }
        }
      }

      // 7. Otherwise: walk to target point on floor!
      this.cancelAutoMovement();
      const clampedX = Math.max(-9.5, Math.min(9.5, hitPoint.x));
      const clampedZ = Math.max(-2.5, Math.min(14.5, hitPoint.z));
      this.targetMovePoint = new THREE.Vector3(clampedX, 0, clampedZ);

      if (this.temple && this.temple.spawnClickRipple) {
        this.temple.spawnClickRipple(clampedX, clampedZ);
      }
    }
  }

  setPosition(x, y, z, rotY) {
    this.position.set(x, y, z);
    if (typeof rotY === 'number') {
      this.rotationY = rotY;
    }
  }

  update(delta, avatarManager, localId) {
    this.camYaw += (this.targetCamYaw - this.camYaw) * 0.15;
    this.camPitch += (this.targetCamPitch - this.camPitch) * 0.15;
    this.camDistance += (this.targetCamDistance - this.camDistance) * 0.15;
    this.camHeight += (this.targetCamHeight - this.camHeight) * 0.15;

    let moveX = 0;
    let moveZ = 0;

    const forwardVec = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.camYaw);
    const rightVec = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.camYaw);

    let isMoving = false;

    if (this.keys.forward) {
      moveX += forwardVec.x;
      moveZ += forwardVec.z;
      isMoving = true;
    }
    if (this.keys.backward) {
      moveX -= forwardVec.x;
      moveZ -= forwardVec.z;
      isMoving = true;
    }
    if (this.keys.left) {
      moveX -= rightVec.x;
      moveZ -= rightVec.z;
      isMoving = true;
    }
    if (this.keys.right) {
      moveX += rightVec.x;
      moveZ += rightVec.z;
      isMoving = true;
    }

    if (this.targetMovePoint && !isMoving) {
      const dx = this.targetMovePoint.x - this.position.x;
      const dz = this.targetMovePoint.z - this.position.z;
      const dist = Math.hypot(dx, dz);

      if (dist > 0.16) {
        moveX = dx / dist;
        moveZ = dz / dist;
        isMoving = true;
      } else {
        this.targetMovePoint = null;
        this.rotationY = this.targetRotYArrival || Math.PI;
        if (this.onArriveCallback) {
          const cb = this.onArriveCallback;
          this.onArriveCallback = null;
          cb();
        }
      }
    }

    if (isMoving) {
      const len = Math.hypot(moveX, moveZ);
      if (len > 0) {
        moveX /= len;
        moveZ /= len;

        const nextX = this.position.x + moveX * this.moveSpeed * delta;
        const nextZ = this.position.z + moveZ * this.moveSpeed * delta;

        this.position.x = Math.max(-9.5, Math.min(9.5, nextX));
        this.position.z = Math.max(-2.5, Math.min(14.5, nextZ));

        this.rotationY = Math.atan2(moveX, moveZ);
      }
    }

    if (localId && avatarManager) {
      avatarManager.updateAvatarData(localId, {
        x: this.position.x,
        y: this.position.y,
        z: this.position.z,
        rotY: this.rotationY
      });
    }

    const camOffset = new THREE.Vector3(
      Math.sin(this.camYaw) * Math.cos(this.camPitch) * this.camDistance,
      Math.sin(this.camPitch) * this.camDistance + this.camHeight,
      Math.cos(this.camYaw) * Math.cos(this.camPitch) * this.camDistance
    );

    this.camera.position.copy(this.position).add(camOffset);

    // Look slightly ahead towards the altar & up so avatar is framed in lower foreground,
    // leaving the Buddha statue, Bodhisattvas, and Arhats completely unobstructed (không bị lấp)!
    const lookTarget = new THREE.Vector3(
      this.position.x * 0.5,
      this.position.y + 1.85,
      this.position.z - 3.2
    );
    this.camera.lookAt(lookTarget);

    const now = Date.now();
    if (now - this.lastSentTime > this.sendInterval && isMoving) {
      this.lastSentTime = now;
      if (this.onMoveCallback) {
        this.onMoveCallback({
          x: parseFloat(this.position.x.toFixed(3)),
          y: parseFloat(this.position.y.toFixed(3)),
          z: parseFloat(this.position.z.toFixed(3)),
          rotY: parseFloat(this.rotationY.toFixed(3))
        });
      }
    }
  }
}
