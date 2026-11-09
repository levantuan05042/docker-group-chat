// Player State Machine for Authentic Buddhist Temple Rituals
export const PlayerState = {
  IDLE: 'IDLE',
  WALKING: 'WALKING',
  NAVIGATING_TO_CUSHION: 'NAVIGATING_TO_CUSHION',
  MEDITATING: 'MEDITATING',
  BOWING_3_TIMES: 'BOWING_3_TIMES',
  NAVIGATING_TO_WOODFISH: 'NAVIGATING_TO_WOODFISH',
  STRIKING_WOODFISH: 'STRIKING_WOODFISH',
  NAVIGATING_TO_BELL: 'NAVIGATING_TO_BELL',
  STRIKING_BELL: 'STRIKING_BELL',
  INCENSE_FETCH: 'INCENSE_FETCH',
  INCENSE_LIGHT_CANDLE: 'INCENSE_LIGHT_CANDLE',
  INCENSE_PLANT: 'INCENSE_PLANT',
  INCENSE_BOWING: 'INCENSE_BOWING',
  FORTUNE_WALK: 'FORTUNE_WALK',
  FORTUNE_SHAKE: 'FORTUNE_SHAKE',
  FORTUNE_DROP: 'FORTUNE_DROP'
};

export class RitualStateMachine {
  constructor(app) {
    this.app = app;
    this.currentState = PlayerState.IDLE;
    this.stateTimer = 0;
    this.bowCount = 0;
    this.woodfishInterval = null;
    this.targetPoint = null;
    this.targetRotY = Math.PI;
    this.onArriveCallback = null;
  }

  getState() {
    return this.currentState;
  }

  isBusyWithRitual() {
    return [
      PlayerState.NAVIGATING_TO_CUSHION,
      PlayerState.MEDITATING,
      PlayerState.BOWING_3_TIMES,
      PlayerState.NAVIGATING_TO_WOODFISH,
      PlayerState.STRIKING_WOODFISH,
      PlayerState.NAVIGATING_TO_BELL,
      PlayerState.STRIKING_BELL,
      PlayerState.INCENSE_FETCH,
      PlayerState.INCENSE_LIGHT_CANDLE,
      PlayerState.INCENSE_PLANT,
      PlayerState.INCENSE_BOWING,
      PlayerState.FORTUNE_WALK,
      PlayerState.FORTUNE_SHAKE,
      PlayerState.FORTUNE_DROP
    ].includes(this.currentState);
  }

  // Cancel any ritual and return to manual control
  cancelRitual() {
    this.clearTimers();
    this.targetPoint = null;
    this.onArriveCallback = null;
    this.currentState = PlayerState.IDLE;
    if (this.app.avatarManager && this.app.myId) {
      this.app.avatarManager.setAction(this.app.myId, 'stand');
    }
    if (this.app.socket) {
      this.app.socket.emit('action', { action: 'stand' });
    }
    this.app.updateActionButtonsUI('stand');
    if (this.app.hideRitualStatus) {
      this.app.hideRitualStatus();
    }
  }

  clearTimers() {
    if (this.woodfishInterval) {
      clearInterval(this.woodfishInterval);
      this.woodfishInterval = null;
    }
  }

  // 1. NGỒI THIỀN (Cushion Meditation)
  startMeditation() {
    if (this.currentState === PlayerState.MEDITATING) {
      this.cancelRitual();
      this.app.showToast('Đã xuất thiền, đứng dậy trang nghiêm 🙏');
      return;
    }

    this.clearTimers();
    const px = this.app.controller.position.x;
    const pz = this.app.controller.position.z;
    const cushion = this.app.temple.findNearestCushion(px, pz);

    this.currentState = PlayerState.NAVIGATING_TO_CUSHION;
    this.stateTimer = 0;
    this.app.showToast('Đang bước lại bồ đoàn tọa thiền...');
    this.app.updateActionButtonsUI('sit');
    if (this.app.showRitualStatus) {
      this.app.showRitualStatus('🧘', 'Đang bước lại bồ đoàn tọa thiền...', true);
    }

    this.navigateTo(cushion.x, cushion.z, Math.PI, () => {
      this.currentState = PlayerState.MEDITATING;
      this.stateTimer = 0;
      this.app.avatarManager.setAction(this.app.myId, 'sit');
      if (this.app.socket) this.app.socket.emit('action', { action: 'sit' });
      this.app.showToast('Đã an tọa thiền định kiết già trên bồ đoàn 🙏');
      this.app.showFloatingMerit('+1 Thiền Định', this.app.controller.position);
      if (this.app.showRitualStatus) {
        this.app.showRitualStatus('🧘', 'Đang an tọa thiền định kiết già (Bấm di chuyển hoặc Dừng để xuất thiền)', true);
      }
    });
  }

  // 2. LẠY PHẬT (3 Full Devout Prostrations)
  startBowing() {
    this.clearTimers();
    this.currentState = PlayerState.BOWING_3_TIMES;
    this.stateTimer = 0;
    this.bowCount = 1;
    this.app.controller.rotationY = Math.PI;

    this.app.avatarManager.setAction(this.app.myId, 'bow3Times');
    if (this.app.socket) this.app.socket.emit('action', { action: 'bow3Times' });
    this.app.updateActionButtonsUI('bow');

    this.app.showToast('Thành tâm chắp tay đảnh lễ Tam Bảo: Lạy 1/3 🙏');
    this.app.playTempleChime();
    if (this.app.showRitualStatus) {
      this.app.showRitualStatus('🙇', 'Thành tâm đảnh lễ Phật: Lạy 1/3 🙏', false);
    }

    // Bowing sequence: 3 bows (2.4s per bow = 7.2s total)
    setTimeout(() => {
      if (this.currentState !== PlayerState.BOWING_3_TIMES) return;
      this.bowCount = 2;
      this.app.showToast('Thành tâm đảnh lễ Chánh Pháp: Lạy 2/3 🙏');
      this.app.playTempleChime();
      if (this.app.showRitualStatus) {
        this.app.showRitualStatus('🙇', 'Thành tâm đảnh lễ Pháp: Lạy 2/3 🙏', false);
      }
    }, 2400);

    setTimeout(() => {
      if (this.currentState !== PlayerState.BOWING_3_TIMES) return;
      this.bowCount = 3;
      this.app.showToast('Thành tâm đảnh lễ Tăng Bảo: Lạy 3/3 🙏');
      this.app.playTempleChime();
      if (this.app.showRitualStatus) {
        this.app.showRitualStatus('🙇', 'Thành tâm đảnh lễ Tăng: Lạy 3/3 🙏', false);
      }
    }, 4800);

    setTimeout(() => {
      if (this.currentState !== PlayerState.BOWING_3_TIMES) return;
      this.currentState = PlayerState.IDLE;
      this.app.avatarManager.setAction(this.app.myId, 'stand');
      if (this.app.socket) this.app.socket.emit('action', { action: 'stand' });
      this.app.updateActionButtonsUI('stand');
      this.app.showToast('Tam bái viên mãn, công đức vô lượng! 🙏');
      this.app.showFloatingMerit('+3 Lễ Phật', this.app.controller.position);
      if (this.app.hideRitualStatus) {
        this.app.hideRitualStatus();
      }
    }, 7200);
  }

  // 3. GÕ MÕ LIÊN TỤC (Continuous Woodfish until moved)
  startWoodfish() {
    if (this.currentState === PlayerState.STRIKING_WOODFISH) {
      this.cancelRitual();
      this.app.showToast('Đã dừng gõ mõ 🙏');
      return;
    }

    this.clearTimers();
    const st = this.app.temple.interactiveStations.woodfish;

    this.currentState = PlayerState.NAVIGATING_TO_WOODFISH;
    this.stateTimer = 0;
    this.app.showToast('Đang bước lại kệ Mõ Gỗ Bát Nhã...');
    this.app.updateActionButtonsUI('woodfish');
    if (this.app.showRitualStatus) {
      this.app.showRitualStatus('🪵', 'Đang bước lại kệ Mõ Gỗ Bát Nhã...', true);
    }

    this.navigateTo(st.x, st.z, st.rotY, () => {
      this.currentState = PlayerState.STRIKING_WOODFISH;
      this.stateTimer = 0;
      this.app.avatarManager.setAction(this.app.myId, 'strikeWoodfish');
      if (this.app.socket) this.app.socket.emit('action', { action: 'strikeWoodfish' });
      this.app.showToast('Đang gõ mõ tụng kinh liên tục... (Bấm di chuyển để dừng)');
      if (this.app.showRitualStatus) {
        this.app.showRitualStatus('🪵', 'Đang gõ mõ tụng kinh liên tục (+1 Công đức) • Bấm di chuyển để dừng', true);
      }

      // Tap immediately then loop ~1050ms
      this.executeWoodfishStrike();
      this.woodfishInterval = setInterval(() => {
        if (this.currentState !== PlayerState.STRIKING_WOODFISH) {
          this.clearTimers();
          return;
        }
        this.executeWoodfishStrike();
      }, 1050);
    });
  }

  executeWoodfishStrike() {
    this.app.audio.playWoodfish();
    if (this.app.socket) this.app.socket.emit('strikeWoodfish');
    this.app.temple.spawnClickRipple(5.6, -1.8);
    this.app.showFloatingMerit('+1 Công Đức', this.app.controller.position);
  }

  // 4. THỈNH CHUÔNG (Strike Great Bell Once)
  startBell() {
    this.clearTimers();
    const st = this.app.temple.interactiveStations.bell;

    this.currentState = PlayerState.NAVIGATING_TO_BELL;
    this.stateTimer = 0;
    this.app.showToast('Đang bước lại Đại Hồng Chung...');
    this.app.updateActionButtonsUI('bell');
    if (this.app.showRitualStatus) {
      this.app.showRitualStatus('🔔', 'Đang bước lại Đại Hồng Chung...', true);
    }

    this.navigateTo(st.x, st.z, st.rotY, () => {
      this.currentState = PlayerState.STRIKING_BELL;
      this.stateTimer = 0;
      this.app.avatarManager.setAction(this.app.myId, 'strikeBell');
      if (this.app.socket) this.app.socket.emit('action', { action: 'strikeBell' });
      if (this.app.showRitualStatus) {
        this.app.showRitualStatus('🔔', 'Đang cầm dây lắc thỉnh Đại Hồng Chung...', false);
      }
      if (this.app.temple && this.app.temple.ringBell) {
        this.app.temple.ringBell();
      }

      // After 0.9s shaking the rope, sound the bell!
      setTimeout(() => {
        if (this.currentState !== PlayerState.STRIKING_BELL) return;
        this.app.audio.playBell();
        this.app.temple.spawnClickRipple(-5.6, -1.8);
        if (this.app.socket) this.app.socket.emit('strikeBell');
        this.app.showToast('Đại Hồng Chung ngân vang rền mười phương! 🙏 (+5 Công đức)');
        this.app.showFloatingMerit('+5 Thỉnh Chuông', this.app.controller.position);
        if (this.app.showRitualStatus) {
          this.app.showRitualStatus('🔔', 'Đại Hồng Chung ngân vang rền mười phương! 🙏 (+5 Công đức)', false);
        }

        setTimeout(() => {
          if (this.currentState === PlayerState.STRIKING_BELL) {
            this.currentState = PlayerState.IDLE;
            this.app.avatarManager.setAction(this.app.myId, 'stand');
            if (this.app.socket) this.app.socket.emit('action', { action: 'stand' });
            this.app.updateActionButtonsUI('stand');
            if (this.app.hideRitualStatus) {
              this.app.hideRitualStatus();
            }
          }
        }, 1500);
      }, 900);
    });
  }

  // 5. THẮP HƯƠNG (4 Bước chính tông: Lấy hương ở bàn -> Đốt hương chỗ nến -> Cắm hương vào lư -> Lạy 3 lạy)
  startIncense() {
    this.clearTimers();
    const stTable = this.app.temple.interactiveStations.incenseTable;
    const stCandle = this.app.temple.interactiveStations.incenseCandle;
    const stBurner = this.app.temple.interactiveStations.incenseBurner;
    const stBow = this.app.temple.interactiveStations.incenseBow;

    this.currentState = PlayerState.INCENSE_FETCH;
    this.stateTimer = 0;
    this.app.showToast('Bước 1/4: Đang bước lại Bàn Thỉnh Hương lấy 3 nén hương trầm...');
    this.app.updateActionButtonsUI('incense');
    if (this.app.showRitualStatus) {
      this.app.showRitualStatus('🪔', 'Bước 1/4: Đang bước lại Bàn Thỉnh Hương...', true);
    }

    // BƯỚC 1: Bước tới Bàn Thỉnh Hương lấy hương
    this.navigateTo(stTable.x, stTable.z, stTable.rotY, () => {
      this.app.avatarManager.setAction(this.app.myId, 'takeIncense');
      if (this.app.socket) this.app.socket.emit('action', { action: 'takeIncense' });
      this.app.showToast('Đã thỉnh 3 nén hương trầm trên bàn lễ 🙏');
      if (this.app.showRitualStatus) {
        this.app.showRitualStatus('🪔', 'Bước 2/4: Đang bước lại cây nến đỏ để châm hương...', false);
      }

      setTimeout(() => {
        if (this.currentState !== PlayerState.INCENSE_FETCH) return;

        // BƯỚC 2: Bước tới ngọn nến đỏ châm lửa đốt hương
        this.currentState = PlayerState.INCENSE_LIGHT_CANDLE;
        this.navigateTo(stCandle.x, stCandle.z, stCandle.rotY, () => {
          this.app.avatarManager.setAction(this.app.myId, 'lightCandle');
          if (this.app.socket) this.app.socket.emit('action', { action: 'lightCandle' });
          this.app.showToast('Đang châm lửa bén 3 nén tâm hương từ ngọn nến thiêng... 🕯️');
          if (this.app.showRitualStatus) {
            this.app.showRitualStatus('🕯️', 'Đang châm lửa 3 nén hương bên ngọn nến...', false);
          }

          setTimeout(() => {
            if (this.currentState !== PlayerState.INCENSE_LIGHT_CANDLE) return;

            // BƯỚC 3: Bước tới Lư Hương Tam Bảo cắm hương
            this.currentState = PlayerState.INCENSE_PLANT;
            this.app.showToast('Hương đã bén lửa đỏ! Tiến đến Lư Hương dâng cắm...');
            if (this.app.showRitualStatus) {
              this.app.showRitualStatus('🪔', 'Bước 3/4: Đang bước lại Lư Đồng dâng và cắm hương...', false);
            }

            this.navigateTo(stBurner.x, stBurner.z, stBurner.rotY, () => {
              this.app.avatarManager.setAction(this.app.myId, 'plantIncense');
              if (this.app.socket) this.app.socket.emit('action', { action: 'plantIncense' });
              this.app.showToast('Dâng hương ngang trán và cắm vào Lư Đồng Tam Bảo 🙏');

              setTimeout(() => {
                if (this.currentState !== PlayerState.INCENSE_PLANT) return;
                this.app.temple.spawnClickRipple(0, -3.68);
                if (this.app.socket) this.app.socket.emit('lightIncense');

                // BƯỚC 4: Lùi lại thảm sen trước Phật điện thành tâm lạy 3 lạy
                this.currentState = PlayerState.INCENSE_BOWING;
                this.app.showToast('Đã cắm hương! Cung kính lùi lại đảnh lễ 3 lạy trước Phật Tổ 🙏');
                if (this.app.showRitualStatus) {
                  this.app.showRitualStatus('🙇', 'Bước 4/4: Đảnh lễ Tam Bảo: Lạy 1/3 🙏', false);
                }

                this.navigateTo(stBow.x, stBow.z, stBow.rotY, () => {
                  this.app.avatarManager.setAction(this.app.myId, 'bow3Times');
                  if (this.app.socket) this.app.socket.emit('action', { action: 'bow3Times' });
                  this.app.showToast('Thành tâm chắp tay đảnh lễ Phật Bảo: Lạy 1/3 🙏');
                  this.app.playTempleChime();

                  setTimeout(() => {
                    if (this.currentState !== PlayerState.INCENSE_BOWING) return;
                    this.app.showToast('Thành tâm chắp tay đảnh lễ Chánh Pháp: Lạy 2/3 🙏');
                    this.app.playTempleChime();
                    if (this.app.showRitualStatus) {
                      this.app.showRitualStatus('🙇', 'Bước 4/4: Đảnh lễ Tam Bảo: Lạy 2/3 🙏', false);
                    }
                  }, 2400);

                  setTimeout(() => {
                    if (this.currentState !== PlayerState.INCENSE_BOWING) return;
                    this.app.showToast('Thành tâm chắp tay đảnh lễ Tăng Bảo: Lạy 3/3 🙏');
                    this.app.playTempleChime();
                    if (this.app.showRitualStatus) {
                      this.app.showRitualStatus('🙇', 'Bước 4/4: Đảnh lễ Tam Bảo: Lạy 3/3 🙏', false);
                    }
                  }, 4800);

                  setTimeout(() => {
                    if (this.currentState !== PlayerState.INCENSE_BOWING) return;
                    this.currentState = PlayerState.IDLE;
                    this.app.avatarManager.setAction(this.app.myId, 'stand');
                    if (this.app.socket) this.app.socket.emit('action', { action: 'stand' });
                    this.app.updateActionButtonsUI('stand');
                    this.app.showToast('Thắp hương và đảnh lễ Tam Bảo viên mãn! Công đức vô lượng 🙏 (+5 Công đức)');
                    this.app.showFloatingMerit('+5 Thắp Hương & Đảnh Lễ', this.app.controller.position);
                    if (this.app.hideRitualStatus) {
                      this.app.hideRitualStatus();
                    }
                  }, 7200);
                });
              }, 2200);
            });
          }, 1800);
        });
      }, 1200);
    });
  }

  // 6. XIN XĂM (Walk -> Shake Cylinder -> Stick Drops -> Reveal Fortune)
  startFortune() {
    this.clearTimers();
    const st = this.app.temple.interactiveStations.fortuneTable;

    this.currentState = PlayerState.FORTUNE_WALK;
    this.stateTimer = 0;
    this.app.showToast('Bước đến bàn xin xăm Quán Thế Âm...');
    this.app.updateActionButtonsUI('fortune');
    if (this.app.showRitualStatus) {
      this.app.showRitualStatus('🎋', 'Bước đến bàn xin xăm Quán Thế Âm...', true);
    }

    this.navigateTo(st.x, st.z, st.rotY, () => {
      this.currentState = PlayerState.FORTUNE_SHAKE;
      this.app.avatarManager.setAction(this.app.myId, 'shakeFortune');
      if (this.app.socket) this.app.socket.emit('action', { action: 'shakeFortune' });
      this.app.showToast('Thành tâm nâng ống xăm... Lắc xóc đều tay...');
      this.app.playFortuneRattleAudio();
      if (this.app.showRitualStatus) {
        this.app.showRitualStatus('🎋', 'Thành tâm nâng ống xăm... Lắc xóc đều tay...', false);
      }

      setTimeout(() => {
        if (this.currentState !== PlayerState.FORTUNE_SHAKE) return;
        this.currentState = PlayerState.FORTUNE_DROP;
        if (this.app.showRitualStatus) {
          this.app.showRitualStatus('🎋', 'Que xăm linh ứng đang rơi xuống sàn...', false);
        }

        // Stick physically shoots out and lands on table/floor
        this.app.temple.spawnDroppingFortuneStick(st.x, st.z - 0.8, () => {
          // ONLY WHEN STICK DROPS: Request fortune from server and reveal modal!
          this.app.audio.playWoodfish();
          if (this.app.socket) this.app.socket.emit('drawFortune');
          this.app.showFloatingMerit('+2 Gieo Quẻ', this.app.controller.position);
          if (this.app.showRitualStatus) {
            this.app.showRitualStatus('📜', 'Quẻ xăm đã rơi! Đang mở thông điệp...', false);
          }

          this.currentState = PlayerState.IDLE;
          this.app.avatarManager.setAction(this.app.myId, 'stand');
          if (this.app.socket) this.app.socket.emit('action', { action: 'stand' });
          this.app.updateActionButtonsUI('stand');
          setTimeout(() => {
            if (this.app.hideRitualStatus) {
              this.app.hideRitualStatus();
            }
          }, 1200);
        });
      }, 2600);
    });
  }

  // Pathfinding helper
  navigateTo(targetX, targetZ, targetRotY, onArrive) {
    this.targetPoint = { x: targetX, z: targetZ };
    this.targetRotY = targetRotY;
    this.onArriveCallback = onArrive;
  }

  // Called every frame
  update(delta) {
    this.stateTimer += delta;

    // Handle automated navigation
    if (this.targetPoint) {
      const pos = this.app.controller.position;
      const dx = this.targetPoint.x - pos.x;
      const dz = this.targetPoint.z - pos.z;
      const dist = Math.hypot(dx, dz);

      if (dist > 0.12) {
        const speed = 4.8;
        const moveDist = Math.min(dist, speed * delta);
        pos.x += (dx / dist) * moveDist;
        pos.z += (dz / dist) * moveDist;
        this.app.controller.rotationY = Math.atan2(dx, dz);

        // Tell network about movement
        this.app.sendLocalPosition();
      } else {
        // Arrived at exact spot
        pos.x = this.targetPoint.x;
        pos.z = this.targetPoint.z;
        this.app.controller.rotationY = this.targetRotY;
        this.app.sendLocalPosition();

        const cb = this.onArriveCallback;
        this.targetPoint = null;
        this.onArriveCallback = null;
        if (cb) cb();
      }
    }
  }
}
