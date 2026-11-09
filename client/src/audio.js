// Buddhist Temple & Zen Music Engine (Warm, Soothing, Zero-Harshness)
class TempleAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentTrack = 'woodfish-chant'; // DEFAULT: Tiếng gõ mõ thiền tĩnh tâm
    this.volume = 0.55; // Gentle, relaxing volume

    // Master nodes
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.lowPassFilter = null;

    // Timers
    this.musicTimers = [];
    this.activeNodes = [];

    // Real audio stream element for authentic "Nam Mô A Di Đà Phật" recitation
    this.chantAudio = new Audio();
    this.chantAudio.loop = true;
    this.chantAudio.crossOrigin = 'anonymous';
    this.chantAudio.volume = this.volume;

    // Backup URLs for real chanting
    this.chantUrls = [
      'https://media.dieuphapam.net/data/1486/Luc%20Tu%20Di%20Da.mp3',
      'https://ph.tinhtong.vn/Audio/PhatHoc/NiemPhat/01_NamMoADiDaPhat_6Chu_Nhanh.mp3'
    ];
    this.currentUrlIdx = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master warm filter to completely eliminate harshness (loại bỏ tiếng chói tai)
      this.lowPassFilter = this.ctx.createBiquadFilter();
      this.lowPassFilter.type = 'lowpass';
      this.lowPassFilter.frequency.setValueAtTime(1200, this.ctx.currentTime); // Soft warm ceiling

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.75, this.ctx.currentTime);

      this.musicGain.connect(this.lowPassFilter);
      this.sfxGain.connect(this.lowPassFilter);
      this.lowPassFilter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
    if (this.chantAudio) {
      this.chantAudio.volume = this.volume;
    }
  }

  // Tiếng Mõ Gỗ Giòn Trầm (Wooden Fish - Mellow & Warm)
  playWoodfish() {
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(720, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.09);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.16);

    const click = ctx.createOscillator();
    const clickGain = ctx.createGain();
    click.type = 'triangle';
    click.frequency.setValueAtTime(1100, now);
    click.frequency.exponentialRampToValueAtTime(350, now + 0.02);
    clickGain.gain.setValueAtTime(0.35, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    click.connect(clickGain);
    clickGain.connect(this.sfxGain);
    click.start(now);
    click.stop(now + 0.03);
  }

  // Tiếng Chuông Bát Nhã Ngân Vang Trầm Ấm
  playBell() {
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const baseFreq = 216;

    const harmonics = [
      { ratio: 1.0, gain: 0.6, decay: 7.0 },
      { ratio: 1.414, gain: 0.35, decay: 5.5 },
      { ratio: 2.0, gain: 0.25, decay: 4.5 }
    ];

    harmonics.forEach(({ ratio, gain: gLevel, decay }) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.frequency.setValueAtTime(baseFreq * ratio, now);
      osc.type = 'sine';

      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(gLevel * 0.4, now + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(g);
      g.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + decay);
    });
  }

  // Tiếng đặt quân cờ gỗ/đá thanh thúy (Crisp chess piece placement click)
  playChessClack() {
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Transient click noise
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.045);

    gain.gain.setValueAtTime(0.55, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.055);

    // Subtle resonance of the hollow wooden board
    const boardOsc = ctx.createOscillator();
    const boardGain = ctx.createGain();
    boardOsc.type = 'triangle';
    boardOsc.frequency.setValueAtTime(220, now);
    boardGain.gain.setValueAtTime(0.25, now);
    boardGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    boardOsc.connect(boardGain);
    boardGain.connect(this.sfxGain);
    boardOsc.start(now);
    boardOsc.stop(now + 0.13);
  }

  // Tiếng nước vỗ bì bõm êm dịu khi thả cá / thả hoa đăng
  playWaterSplash() {
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Pinkish water splash bubbling noise
    const bufferSize = ctx.sampleRate * 0.25;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(350, now + 0.22);
    filter.Q.value = 2.5;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start(now);
    noise.stop(now + 0.26);

    // Warm water droplet ping
    const ping = ctx.createOscillator();
    const pingG = ctx.createGain();
    ping.type = 'sine';
    ping.frequency.setValueAtTime(540, now + 0.04);
    ping.frequency.exponentialRampToValueAtTime(860, now + 0.15);
    pingG.gain.setValueAtTime(0.001, now);
    pingG.gain.linearRampToValueAtTime(0.25, now + 0.05);
    pingG.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    ping.connect(pingG);
    pingG.connect(this.sfxGain);
    ping.start(now + 0.04);
    ping.stop(now + 0.24);
  }

  // Tiếng rót trà đàm đạo róc rách ấm áp
  playTeaPour() {
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;

    for (let i = 0; i < 4; i++) {
      const dropTime = now + i * 0.09;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800 + i * 150 + Math.random() * 50, dropTime);
      osc.frequency.exponentialRampToValueAtTime(1100 + i * 120, dropTime + 0.07);

      g.gain.setValueAtTime(0.18, dropTime);
      g.gain.exponentialRampToValueAtTime(0.001, dropTime + 0.075);

      osc.connect(g);
      g.connect(this.sfxGain);
      osc.start(dropTime);
      osc.stop(dropTime + 0.08);
    }
  }

  // Tiếng chuông khánh chúc mừng hoan hỷ khi thắng cờ hoặc tích đức lớn
  playFanfare() {
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Hợp âm ngũ cung thăng hoa)

    notes.forEach((freq, idx) => {
      const t = now + idx * 0.12;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      g.gain.setValueAtTime(0.001, t);
      g.gain.linearRampToValueAtTime(0.35, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

      osc.connect(g);
      g.connect(this.sfxGain);
      osc.start(t);
      osc.stop(t + 1.25);
    });
  }

  selectTrack(trackName) {
    this.currentTrack = trackName;
    if (this.isPlaying) {
      this.stopMusic();
      this.startMusic();
    }
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  startMusic() {
    this.init();
    this.stopMusic();
    this.isPlaying = true;

    if (this.musicGain) {
      this.musicGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.musicGain.gain.linearRampToValueAtTime(this.volume, this.ctx.currentTime + 1.2);
    }

    switch (this.currentTrack) {
      case 'woodfish-chant':
        this.startWoodfishChantTrack();
        break;
      case 'singing-bowl':
        this.startSingingBowlTrack();
        break;
      case 'temple-rain':
        this.startTempleRainTrack();
        break;
      case 'nam-mo-a-di-da-phat':
        this.startNamMoADiDaPhatTrack();
        break;
      default:
        this.startWoodfishChantTrack();
        break;
    }
  }

  // =========================================================================
  // 🪵 TIẾNG GÕ MÕ THIỀN ĐỊNH (CHUẨN CHÙA TRÚC LÂM - TRẦM ẤM, THANH TỊNH, AN NHIÊN)
  // Nhịp mõ gõ đều đặn trầm ấm khoảng 55 BPM, kết hợp tiếng chuông đồng ngân nga
  // =========================================================================
  startWoodfishChantTrack() {
    if (!this.isPlaying || !this.ctx) return;

    let beatCount = 0;
    const intervalMs = 1080; // Nhịp mõ thiền tĩnh tâm ~55 BPM

    const playRhythmicStrike = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      beatCount++;

      // 1. Tiếng Mõ Trầm (Deep Wooden Fish Body)
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const strikeVelocity = 0.85 + (Math.sin(beatCount * 1.5) * 0.08);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(680, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.11);

      gain.gain.setValueAtTime(0.68 * strikeVelocity, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

      osc.connect(gain);
      gain.connect(this.musicGain);
      osc.start(now);
      osc.stop(now + 0.17);

      // 2. Tiếng gõ lóc cóc của dùi gỗ chạm vỏ mõ (Wood click transient)
      const clickOsc = this.ctx.createOscillator();
      const clickGain = this.ctx.createGain();
      clickOsc.type = 'triangle';
      clickOsc.frequency.setValueAtTime(980, now);
      clickOsc.frequency.exponentialRampToValueAtTime(320, now + 0.025);

      clickGain.gain.setValueAtTime(0.32 * strikeVelocity, now);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      clickOsc.connect(clickGain);
      clickGain.connect(this.musicGain);
      clickOsc.start(now);
      clickOsc.stop(now + 0.04);

      // 3. Mỗi 8 nhịp mõ (chu kỳ 1 câu kinh), điểm thêm một tiếng chuông bát nhã ngân xa
      if (beatCount % 8 === 0) {
        this.playGentleBellAccent();
      }
    };

    // Strike immediately then loop
    playRhythmicStrike();
    const timer = setInterval(() => {
      playRhythmicStrike();
    }, intervalMs);

    this.musicTimers.push(timer);
  }

  playGentleBellAccent() {
    if (!this.ctx || !this.isPlaying) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const baseFreq = 220; // A3

    [1.0, 1.414, 2.76].forEach((ratio, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * ratio, now);

      const amp = (0.28 / (idx + 1));
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 6.5);

      osc.connect(gain);
      gain.connect(this.musicGain);
      osc.start(now);
      osc.stop(now + 6.6);
    });
  }

  stopMusic() {
    this.isPlaying = false;

    // Pause external chant audio
    if (this.chantAudio) {
      try {
        this.chantAudio.pause();
        this.chantAudio.currentTime = 0;
      } catch (e) {}
    }

    this.musicTimers.forEach(t => clearInterval(t));
    this.musicTimers = [];

    this.activeNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {}
    });
    this.activeNodes = [];
  }

  // =========================================================================
  // 📿 BÀI NIỆM: NAM MÔ A DI ĐÀ PHẬT (ÂM THANH TRẦM ẤM, DU DƯƠNG, KHÔNG CHÓI TAI)
  // Kết hợp Audio Stream thực tế + Nhạc điệu niệm Phật 6 chữ êm ái
  // =========================================================================
  startNamMoADiDaPhatTrack() {
    // 1. Cố gắng phát stream audio niệm Phật chân thực
    let streamLoaded = false;
    if (this.chantUrls[this.currentUrlIdx]) {
      this.chantAudio.src = this.chantUrls[this.currentUrlIdx];
      this.chantAudio.volume = this.volume;

      const playPromise = this.chantAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          streamLoaded = true;
        }).catch((err) => {
          // If network stream fails or is blocked, seamlessly use warm procedural chant
          this.playWarmChantSynth();
        });
      }
    } else {
      this.playWarmChantSynth();
    }

    // Safety fallback: after 3 seconds if stream isn't playing, start synth
    setTimeout(() => {
      if (this.isPlaying && this.chantAudio.paused) {
        this.playWarmChantSynth();
      }
    }, 2500);
  }

  // Bộ tổng hợp giai điệu 6 chữ Lục Tự Di Đà: Nam - Mô - A - Di - Đà - Phật
  // Sử dụng tần số trầm ấm, lọc qua Lowpass 650Hz để tuyệt đối không chói tai
  playWarmChantSynth() {
    const ctx = this.ctx;
    if (!this.isPlaying) return;

    // Dedicated soft vocal low-pass filter
    const vocalFilter = ctx.createBiquadFilter();
    vocalFilter.type = 'lowpass';
    vocalFilter.frequency.setValueAtTime(650, ctx.currentTime);
    vocalFilter.connect(this.musicGain);

    // Warm deep drone base (F2 - 87.31Hz, C3 - 130.81Hz)
    [87.31, 130.81].forEach((freq) => {
      const drone = ctx.createOscillator();
      const droneGain = ctx.createGain();
      drone.type = 'sine';
      drone.frequency.setValueAtTime(freq, ctx.currentTime);
      droneGain.gain.setValueAtTime(0.045, ctx.currentTime);

      drone.connect(droneGain);
      droneGain.connect(vocalFilter);
      drone.start();
      this.activeNodes.push(drone, droneGain);
    });

    // 6 Chữ Lục Tự Di Đà trên thang âm Ngũ Cung truyền thống:
    // Nam (F3) - Mô (G3) - A (Bb3) - Di (C4) - Đà (Bb3) - Phật (F3)
    const chantNotes = [
      { text: 'Nam', freq: 174.61, dur: 1.6 },
      { text: 'Mô', freq: 196.00, dur: 1.6 },
      { text: 'A', freq: 233.08, dur: 1.8 },
      { text: 'Di', freq: 261.63, dur: 1.8 },
      { text: 'Đà', freq: 233.08, dur: 2.0 },
      { text: 'Phật', freq: 174.61, dur: 2.4 }
    ];

    let noteIdx = 0;

    const playNextWord = () => {
      if (!this.isPlaying) return;
      const word = chantNotes[noteIdx];
      const now = ctx.currentTime;

      // Soft rounded sine wave with gentle breath
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(word.freq, now);

      // Very soft, smooth attack and long warm release
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.085, now + 0.4);
      gain.gain.setValueAtTime(0.08, now + word.dur - 0.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + word.dur);

      osc.connect(gain);
      gain.connect(vocalFilter);

      osc.start(now);
      osc.stop(now + word.dur);

      // Subtle temple bell accent on the word "Phật"
      if (word.text === 'Phật') {
        const bellOsc = ctx.createOscillator();
        const bellGain = ctx.createGain();
        bellOsc.type = 'sine';
        bellOsc.frequency.setValueAtTime(432, now);
        bellGain.gain.setValueAtTime(0.02, now);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

        bellOsc.connect(bellGain);
        bellGain.connect(vocalFilter);
        bellOsc.start(now);
        bellOsc.stop(now + 3.5);
      }

      noteIdx = (noteIdx + 1) % chantNotes.length;
    };

    playNextWord();
    const t = setInterval(playNextWord, 1950);
    this.musicTimers.push(t);
  }

  // =========================================================================
  // TRACK 2: CHUÔNG XOAY TÂY TẠNG 432Hz
  // =========================================================================
  startSingingBowlTrack() {
    const ctx = this.ctx;
    const baseFreq = 216; // A3 warm fundamental

    const strikeBowl = () => {
      if (!this.isPlaying) return;
      const now = ctx.currentTime;
      const overtones = [
        { mult: 1.0, gain: 0.12, decay: 8.5 },
        { mult: 2.0, gain: 0.06, decay: 6.0 }
      ];

      overtones.forEach(({ mult, gain: gVal, decay }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * mult, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(gVal * 0.7, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gain);
        gain.connect(this.musicGain);

        osc.start(now);
        osc.stop(now + decay);
      });
    };

    strikeBowl();
    const t = setInterval(strikeBowl, 7000);
    this.musicTimers.push(t);
  }

  // =========================================================================
  // TRACK 3: MƯA RƠI MÁI CHÙA & SUỐI REO (CALM TEMPLE RAIN)
  // =========================================================================
  startTempleRainTrack() {
    const ctx = this.ctx;
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 0.12;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(750, ctx.currentTime); // Soft gentle rain

    const rainGain = ctx.createGain();
    rainGain.gain.setValueAtTime(0.06, ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(rainGain);
    rainGain.connect(this.musicGain);

    whiteNoise.start();
    this.activeNodes.push(whiteNoise, filter, rainGain);
  }
}

export const templeAudio = new TempleAudio();
