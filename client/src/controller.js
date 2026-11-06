import * as THREE from 'three';

export class PlayerController {
  constructor(camera, domElement, onMoveCallback, templeScene) {
    this.camera = camera;
    this.domElement = domElement;
    this.onMoveCallback = onMoveCallback;
    this.temple = templeScene;

    // Movement state - Bắt đầu từ Cửa Chùa (Entrance)
    this.position = new THREE.Vector3(0, 0, 18.2);
    this.rotationY = Math.PI; // Face Buddha (-Z) into the temple
    this.moveSpeed = 5.2;
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };

    // Smooth Orbit Camera parameters with Damping
    this.camDistance = 6.2;
    this.targetCamDistance = 6.2;
    this.camHeight = 2.3;
    this.camPitch = 0.32; // Iconic elevated angle looking down at Buddha & disciples
    this.targetCamPitch = 0.32;
    this.camYaw = Math.PI; // Look straight towards Buddha (-Z)
    this.targetCamYaw = Math.PI;

    // Mouse drag
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
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
    this.targetCamYaw = Math.PI;
    this.targetCamPitch = 0.32;
    this.targetCamDistance = 6.2;
  }

  initEventListeners() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.handleKeyUp(e));

    this.domElement.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.interactive-ui') || e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) return;
      this.isDragging = true;
      this.dragStart = { x: e.clientX, y: e.clientY };
      this.dragMoved = 0;
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.dragStart.x;
      const deltaY = e.clientY - this.dragStart.y;
      this.dragMoved += Math.hypot(deltaX, deltaY);

      this.targetCamYaw -= deltaX * 0.005;
      this.targetCamPitch = Math.max(0.08, Math.min(Math.PI / 2.3, this.targetCamPitch + deltaY * 0.004));

      this.dragStart = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', (e) => {
      if (this.isDragging) {
        if (this.dragMoved < 8) {
          this.handleFloorClick(e);
        }
        this.isDragging = false;
      }
    });

    this.domElement.addEventListener('wheel', (e) => {
      this.targetCamDistance = Math.max(2.6, Math.min(10.5, this.targetCamDistance + e.deltaY * 0.004));
    }, { passive: true });
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
    const intersection = new THREE.Vector3();
    const result = this.raycaster.ray.intersectPlane(plane, intersection);

    if (result) {
      const clampedX = Math.max(-15, Math.min(15, intersection.x));
      const clampedZ = Math.max(-6, Math.min(18, intersection.z));
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

        this.position.x = Math.max(-15.5, Math.min(15.5, nextX));
        this.position.z = Math.max(-6.2, Math.min(19.2, nextZ));

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
    this.camera.lookAt(this.position.x, this.position.y + 1.25, this.position.z);

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
