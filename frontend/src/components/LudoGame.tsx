import React, { useState, useEffect, useRef } from 'react';
import { playSound, triggerConfetti } from '../utils/effects';

interface LudoGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info', msg: string) => void;
}

type Team = 'red' | 'green' | 'yellow' | 'blue';

interface Horse {
  id: number;
  team: Team;
  horseNum: number; // 1, 2, 3, 4
  pos: number; // -1: trong chuồng, 0..51: đường đua chính, 52..57: đường về đích 1..6, 58: đã vào tim đích
}

// 52 vị trí chuẩn quốc tế trên lưới 15x15
const TRACK_GRID: [number, number][] = [
  // Red side (start index 0)
  [1, 6], [2, 6], [3, 6], [4, 6], [5, 6],
  [6, 5], [6, 4], [6, 3], [6, 2], [6, 1], [6, 0],
  [7, 0], // Peak
  [8, 0],
  // Green side (start index 13)
  [8, 1], [8, 2], [8, 3], [8, 4], [8, 5],
  [9, 6], [10, 6], [11, 6], [12, 6], [13, 6], [14, 6],
  [14, 7], // Right peak
  [14, 8],
  // Yellow side (start index 26)
  [13, 8], [12, 8], [11, 8], [10, 8], [9, 8],
  [8, 9], [8, 10], [8, 11], [8, 12], [8, 13], [8, 14],
  [7, 14], // Bottom peak
  [6, 14],
  // Blue side (start index 39)
  [6, 13], [6, 12], [6, 11], [6, 10], [6, 9],
  [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8],
  [0, 7], // Left peak
  [0, 6]
];

const START_INDEX: Record<Team, number> = {
  red: 0,
  green: 13,
  yellow: 26,
  blue: 39
};

// Tọa độ 6 bậc chuồng đích (1 đến 6)
const HOME_STAIRS: Record<Team, [number, number][]> = {
  red: [[1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]],
  green: [[7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6]],
  yellow: [[13, 7], [12, 7], [11, 7], [10, 7], [9, 7], [8, 7]],
  blue: [[7, 13], [7, 12], [7, 11], [7, 10], [7, 9], [7, 8]]
};

// 4 Vị trí cắm ngựa trong chuồng (tọa độ pixel trong SVG 600x600)
const STALL_POSITIONS: Record<Team, { x: number; y: number }[]> = {
  red: [
    { x: 75, y: 75 },
    { x: 165, y: 75 },
    { x: 75, y: 165 },
    { x: 165, y: 165 }
  ],
  green: [
    { x: 435, y: 75 },
    { x: 525, y: 75 },
    { x: 435, y: 165 },
    { x: 525, y: 165 }
  ],
  yellow: [
    { x: 435, y: 435 },
    { x: 525, y: 435 },
    { x: 435, y: 525 },
    { x: 525, y: 525 }
  ],
  blue: [
    { x: 75, y: 435 },
    { x: 165, y: 435 },
    { x: 75, y: 525 },
    { x: 165, y: 525 }
  ]
};

const TEAM_CONFIG: Record<
  Team,
  { name: string; label: string; primary: string; secondary: string; dark: string; light: string; icon: string }
> = {
  red: { name: 'Đỏ', label: 'Đội Đỏ (Bạn)', primary: '#dc2626', secondary: '#ef4444', dark: '#991b1b', light: '#fee2e2', icon: '🔴' },
  green: { name: 'Lá', label: 'Máy Lá', primary: '#16a34a', secondary: '#22c55e', dark: '#14532d', light: '#dcfce7', icon: '🟢' },
  yellow: { name: 'Vàng', label: 'Máy Vàng', primary: '#ca8a04', secondary: '#eab308', dark: '#854d0e', light: '#fef9c3', icon: '🟡' },
  blue: { name: 'Xanh', label: 'Máy Lam', primary: '#2563eb', secondary: '#3b82f6', dark: '#1e3a8a', light: '#dbeafe', icon: '🔵' }
};

export const LudoGame: React.FC<LudoGameProps> = ({ onWin, showToast }) => {
  const [dice, setDice] = useState<number>(6);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [currentTurn, setCurrentTurn] = useState<Team>('red');
  const [hasRolled, setHasRolled] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

  // 16 con ngựa chuẩn truyền thống (mỗi đội 4 ngựa)
  const [horses, setHorses] = useState<Horse[]>([
    { id: 1, team: 'red', horseNum: 1, pos: -1 },
    { id: 2, team: 'red', horseNum: 2, pos: -1 },
    { id: 3, team: 'red', horseNum: 3, pos: -1 },
    { id: 4, team: 'red', horseNum: 4, pos: -1 },

    { id: 5, team: 'green', horseNum: 1, pos: -1 },
    { id: 6, team: 'green', horseNum: 2, pos: -1 },
    { id: 7, team: 'green', horseNum: 3, pos: -1 },
    { id: 8, team: 'green', horseNum: 4, pos: -1 },

    { id: 9, team: 'yellow', horseNum: 1, pos: -1 },
    { id: 10, team: 'yellow', horseNum: 2, pos: -1 },
    { id: 11, team: 'yellow', horseNum: 3, pos: -1 },
    { id: 12, team: 'yellow', horseNum: 4, pos: -1 },

    { id: 13, team: 'blue', horseNum: 1, pos: -1 },
    { id: 14, team: 'blue', horseNum: 2, pos: -1 },
    { id: 15, team: 'blue', horseNum: 3, pos: -1 },
    { id: 16, team: 'blue', horseNum: 4, pos: -1 }
  ]);

  const teams: Team[] = ['red', 'green', 'yellow', 'blue'];
  const aiTimeoutRef = useRef<any>(null);

  // Dọn dẹp timer khi unmount
  useEffect(() => {
    return () => {
      if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current);
    };
  }, []);

  // Tự động hóa lượt chơi cho AI (Đội Lá, Vàng, Lam)
  useEffect(() => {
    if (winner) return;

    if (currentTurn !== 'red') {
      // AI Turn: Tự động lắc xúc xắc sau 600ms
      aiTimeoutRef.current = setTimeout(() => {
        handleAIRoll();
      }, 600);
    }
  }, [currentTurn, winner]);

  // AI Lắc xúc xắc
  const handleAIRoll = () => {
    if (winner) return;
    setIsRolling(true);
    playSound('dice');

    let count = 0;
    const interval = setInterval(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
      count++;
      if (count > 7) {
        clearInterval(interval);
        const finalDice = Math.floor(Math.random() * 6) + 1;
        setDice(finalDice);
        setIsRolling(false);
        setHasRolled(true);

        // AI suy nghĩ nước đi sau khi đổ xúc xắc
        setTimeout(() => {
          executeAIMove(finalDice);
        }, 500);
      }
    }, 50);
  };

  // AI thực hiện nước đi tối ưu
  const executeAIMove = (rollVal: number) => {
    const myHorses = horses.filter(h => h.team === currentTurn);
    const canDeploy = rollVal === 1 || rollVal === 6;

    // Tìm tất cả các nước đi hợp lệ của AI
    const validMoves: { horse: Horse; priority: number }[] = [];

    for (const h of myHorses) {
      if (h.pos === -1 && canDeploy) {
        // Có thể xuất chuồng: kiểm tra xem có đá được ai ở cửa chuồng không
        const startTrackIdx = START_INDEX[h.team];
        const victim = horses.find(other => other.team !== h.team && other.pos >= 0 && other.pos < 52 && (START_INDEX[other.team] + other.pos) % 52 === startTrackIdx);
        const prio = victim ? 100 : 50;
        validMoves.push({ horse: h, priority: prio });
      } else if (h.pos >= 0 && h.pos + rollVal <= 58) {
        const nextPos = h.pos + rollVal;
        let prio = 20 + nextPos; // Càng gần đích càng ưu tiên

        // Nếu đá được ngựa đối thủ
        if (nextPos < 52) {
          const myRealIdx = (START_INDEX[h.team] + nextPos) % 52;
          const victim = horses.find(other => other.team !== h.team && other.pos >= 0 && other.pos < 52 && (START_INDEX[other.team] + other.pos) % 52 === myRealIdx);
          if (victim) {
            prio += 80; // Ưu tiên đá ngựa cực cao!
          }
        } else if (nextPos >= 52) {
          prio += 60; // Ưu tiên vào chuồng đích
        }

        validMoves.push({ horse: h, priority: prio });
      }
    }

    if (validMoves.length === 0) {
      // Không có nước đi nào -> Chuyển lượt
      showToast('info', `Đội ${TEAM_CONFIG[currentTurn].name} không có nước đi!`);
      setTimeout(nextTurn, 800);
      return;
    }

    // Chọn nước đi có độ ưu tiên cao nhất
    validMoves.sort((a, b) => b.priority - a.priority);
    const chosen = validMoves[0].horse;
    handleHorseClick(chosen, rollVal);
  };

  // Người chơi lắc xúc xắc
  const rollDice = () => {
    if (hasRolled || isRolling || winner || currentTurn !== 'red') return;

    setIsRolling(true);
    playSound('dice');

    let count = 0;
    const interval = setInterval(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
      count++;
      if (count > 8) {
        clearInterval(interval);
        const finalVal = Math.floor(Math.random() * 6) + 1;
        setDice(finalVal);
        setIsRolling(false);
        setHasRolled(true);

        // Kiểm tra xem người chơi có nước đi nào không
        const myHorses = horses.filter(h => h.team === 'red');
        const canDeploy = finalVal === 1 || finalVal === 6;
        const canMoveAny = myHorses.some(h => (h.pos === -1 && canDeploy) || (h.pos >= 0 && h.pos + finalVal <= 58));

        if (!canMoveAny) {
          showToast('info', `Bạn không có nước đi nào hợp lệ với xúc xắc [${finalVal}]. Chuyển lượt!`);
          setTimeout(nextTurn, 1000);
        } else {
          showToast('success', `Lắc được [${finalVal}]! Hãy nhấp vào ngựa chiến để di chuyển.`);
        }
      }
    }, 50);
  };

  // Di chuyển quân ngựa
  const handleHorseClick = (horse: Horse, explicitDice?: number) => {
    const currentDice = explicitDice ?? dice;
    if (!hasRolled && explicitDice === undefined) return;
    if (horse.team !== currentTurn || winner) return;

    const canDeploy = currentDice === 1 || currentDice === 6;

    // 1. Xuất chuồng
    if (horse.pos === -1) {
      if (!canDeploy) {
        playSound('error');
        showToast('error', 'Cần lắc được 1 hoặc 6 để xuất quân khỏi chuồng!');
        return;
      }

      const startTrackIdx = START_INDEX[horse.team];

      // Kiểm tra đá ngựa ở ô xuất phát
      let kickedOpponent = false;
      const updated = horses.map(h => {
        if (h.id === horse.id) {
          return { ...h, pos: 0 };
        }
        if (h.team !== horse.team && h.pos >= 0 && h.pos < 52) {
          const otherTrackIdx = (START_INDEX[h.team] + h.pos) % 52;
          if (otherTrackIdx === startTrackIdx) {
            kickedOpponent = true;
            return { ...h, pos: -1 }; // Bị đá về chuồng
          }
        }
        return h;
      });

      setHorses(updated);
      playSound('move');
      if (kickedOpponent) {
        playSound('capture');
        showToast('success', `💥 ĐÁ VĂNG! Ngựa đội ${TEAM_CONFIG[horse.team].name} xuất chuồng và đá văng đối thủ!`);
      } else {
        showToast('success', `Đội ${TEAM_CONFIG[horse.team].name} xuất chuồng ngựa #${horse.horseNum}! 🐎`);
      }

      finishAction(currentDice === 6);
      return;
    }

    // 2. Di chuyển trên đường đua
    const nextPos = horse.pos + currentDice;
    if (nextPos > 58) {
      playSound('error');
      showToast('error', 'Số bước xúc xắc vượt quá đích!');
      return;
    }

    let kicked = false;
    const myRealTrackIndex = (START_INDEX[horse.team] + nextPos) % 52;

    const updated = horses.map(h => {
      if (h.id === horse.id) {
        return { ...h, pos: nextPos };
      }
      // Nếu ngựa khác đội ở cùng ô trên vòng đua chính (< 52)
      if (h.team !== horse.team && h.pos >= 0 && h.pos < 52 && nextPos < 52) {
        const otherRealIdx = (START_INDEX[h.team] + h.pos) % 52;
        if (otherRealIdx === myRealTrackIndex) {
          kicked = true;
          return { ...h, pos: -1 }; // Bị đá về chuồng!
        }
      }
      return h;
    });

    setHorses(updated);

    if (kicked) {
      playSound('capture');
      showToast('success', `💥 TUYỆT KỸ ĐÁ NGỰA! Đội ${TEAM_CONFIG[horse.team].name} đã đá ngựa đối thủ văng về chuồng!`);
    } else {
      playSound('move');
    }

    // Kiểm tra vô địch: nếu đội có 4 ngựa về đích (pos >= 57) hoặc 2 ngựa đầu tiên vào tim đích 58
    const myFinished = updated.filter(h => h.team === currentTurn && h.pos >= 57);
    if (myFinished.length >= 2) {
      setWinner(TEAM_CONFIG[currentTurn].name);
      playSound('win');
      triggerConfetti();
      showToast('success', `🎉 VÔ ĐỊCH! ${TEAM_CONFIG[currentTurn].label} đã dẫn đầu đàn ngựa về đích an toàn!`);
      if (currentTurn === 'red') {
        onWin('Cờ Cá Ngựa', 100);
      }
      return;
    }

    finishAction(currentDice === 6);
  };

  const finishAction = (bonusRoll: boolean) => {
    if (bonusRoll) {
      showToast('info', `Đội ${TEAM_CONFIG[currentTurn].name} đổ được 6! Được thưởng thêm 1 lượt lắc! 🎲`);
      setHasRolled(false);
      // Nếu là AI và được lắc tiếp
      if (currentTurn !== 'red') {
        setTimeout(handleAIRoll, 700);
      }
    } else {
      nextTurn();
    }
  };

  const nextTurn = () => {
    const curIdx = teams.indexOf(currentTurn);
    const nxt = teams[(curIdx + 1) % teams.length];
    setCurrentTurn(nxt);
    setHasRolled(false);
  };

  const resetGame = () => {
    setHorses([
      { id: 1, team: 'red', horseNum: 1, pos: -1 },
      { id: 2, team: 'red', horseNum: 2, pos: -1 },
      { id: 3, team: 'red', horseNum: 3, pos: -1 },
      { id: 4, team: 'red', horseNum: 4, pos: -1 },

      { id: 5, team: 'green', horseNum: 1, pos: -1 },
      { id: 6, team: 'green', horseNum: 2, pos: -1 },
      { id: 7, team: 'green', horseNum: 3, pos: -1 },
      { id: 8, team: 'green', horseNum: 4, pos: -1 },

      { id: 9, team: 'yellow', horseNum: 1, pos: -1 },
      { id: 10, team: 'yellow', horseNum: 2, pos: -1 },
      { id: 11, team: 'yellow', horseNum: 3, pos: -1 },
      { id: 12, team: 'yellow', horseNum: 4, pos: -1 },

      { id: 13, team: 'blue', horseNum: 1, pos: -1 },
      { id: 14, team: 'blue', horseNum: 2, pos: -1 },
      { id: 15, team: 'blue', horseNum: 3, pos: -1 },
      { id: 16, team: 'blue', horseNum: 4, pos: -1 }
    ]);
    setCurrentTurn('red');
    setHasRolled(false);
    setWinner(null);
    playSound('click');
    showToast('info', 'Đã bắt đầu ván mới!');
  };

  // Tính toán tọa độ hiển thị (pixel cx, cy trên SVG 600x600) của một con ngựa
  const getHorsePixelCoord = (h: Horse): { cx: number; cy: number } => {
    if (h.pos === -1) {
      // Trong chuồng: lấy theo stall tương ứng với horseNum (0..3)
      const stall = STALL_POSITIONS[h.team][h.horseNum - 1];
      return { cx: stall.x, cy: stall.y };
    }

    if (h.pos < 52) {
      // Trên đường đua chính 52 ô
      const trackIdx = (START_INDEX[h.team] + h.pos) % 52;
      const [gx, gy] = TRACK_GRID[trackIdx];
      return { cx: gx * 40 + 20, cy: gy * 40 + 20 };
    }

    if (h.pos >= 52 && h.pos <= 57) {
      // Đang leo bậc chuồng đích 1..6
      const stepIdx = h.pos - 52;
      const [gx, gy] = HOME_STAIRS[h.team][stepIdx];
      return { cx: gx * 40 + 20, cy: gy * 40 + 20 };
    }

    // Đã vào tim đích (pos 58)
    const centerOffsets: Record<Team, { cx: number; cy: number }> = {
      red: { cx: 280, cy: 280 },
      green: { cx: 320, cy: 280 },
      yellow: { cx: 320, cy: 320 },
      blue: { cx: 280, cy: 320 }
    };
    return centerOffsets[h.team];
  };

  // Kiểm tra xem ngựa có thể đi được ở lượt này không
  const canHorseMove = (h: Horse): boolean => {
    if (!hasRolled || h.team !== currentTurn || winner) return false;
    if (h.pos === -1) {
      return dice === 1 || dice === 6;
    }
    return h.pos + dice <= 58;
  };

  return (
    <div className="game-wrapper ludo-real-wrapper">
      {/* THANH ĐIỀU KHIỂN & TRẠNG THÁI TRẬN ĐẤU */}
      <div className="ludo-header-strip">
        <div className="ludo-turn-indicator">
          {winner ? (
            <span className="ludo-win-badge">👑 VÔ ĐỊCH: ĐỘI {winner.toUpperCase()}!</span>
          ) : (
            <div className="turn-banner" style={{ borderLeftColor: TEAM_CONFIG[currentTurn].primary }}>
              <span className="turn-dot" style={{ background: TEAM_CONFIG[currentTurn].primary }} />
              <span className="turn-title">Lượt Đi:</span>
              <strong className="turn-team" style={{ color: TEAM_CONFIG[currentTurn].primary }}>
                {TEAM_CONFIG[currentTurn].label}
              </strong>
              {currentTurn === 'red' && !hasRolled && (
                <span className="turn-hint">👉 Hãy lắc xúc xắc!</span>
              )}
            </div>
          )}
        </div>

        {/* BẢNG TIẾN ĐỘ 4 ĐỘI */}
        <div className="ludo-score-badges">
          {teams.map(t => {
            const finished = horses.filter(h => h.team === t && h.pos >= 57).length;
            const onTrack = horses.filter(h => h.team === t && h.pos >= 0 && h.pos < 57).length;
            const isCurrent = currentTurn === t;
            return (
              <div key={t} className={`team-badge-pill ${isCurrent ? 'active-pill' : ''}`} style={{ borderColor: isCurrent ? TEAM_CONFIG[t].primary : 'transparent' }}>
                <span className="t-icon">{TEAM_CONFIG[t].icon}</span>
                <span className="t-name">{TEAM_CONFIG[t].name}</span>
                <span className="t-progress" title={`${finished} ngựa về đích, ${onTrack} ngựa đang chạy`}>
                  🏆 {finished}/4
                </span>
              </div>
            );
          })}
        </div>

        <button className="btn btn-secondary btn-sm" onClick={resetGame} title="Ván Mới">
          🔄 Ván Mới
        </button>
      </div>

      {/* KHU VỰC THI ĐẤU CHÍNH */}
      <div className="ludo-arena-container">
        {/* BÀN CỜ CÁ NGỰA SVG CHÂN THỰC & SỐNG ĐỘNG (600x600) */}
        <div className="ludo-board-wrapper">
          <svg className="ludo-svg-board" viewBox="0 0 600 600">
            <defs>
              {/* Bóng đổ 3D cho các ô và quân cờ */}
              <filter id="tileShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
              </filter>
              <filter id="horseShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.45" />
              </filter>
              <filter id="boardBorderGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.35" />
              </filter>

              {/* Gradient cho 4 Chuồng lớn */}
              <radialGradient id="gradRedYard" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="80%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#991b1b" />
              </radialGradient>
              <radialGradient id="gradGreenYard" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="80%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#14532d" />
              </radialGradient>
              <radialGradient id="gradYellowYard" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="80%" stopColor="#ca8a04" />
                <stop offset="100%" stopColor="#854d0e" />
              </radialGradient>
              <radialGradient id="gradBlueYard" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="80%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </radialGradient>
            </defs>

            {/* KHUNG GỖ BÀN CỜ BẠCH DƯƠNG CAO CẤP */}
            <rect x="0" y="0" width="600" height="600" rx="16" fill="#f8fafc" stroke="#334155" strokeWidth="6" filter="url(#boardBorderGlow)" />

            {/* 1. BỐN GÓC CHUỒNG NGỰA RỰC RỠ */}
            {/* Chuồng Đỏ (Top-Left) */}
            <g className="yard-group yard-red">
              <rect x="0" y="0" width="240" height="240" rx="12" fill="url(#gradRedYard)" stroke="#b91c1c" strokeWidth="3" />
              <circle cx="120" cy="120" r="85" fill="#ffffff" opacity="0.95" filter="url(#tileShadow)" />
              <text x="120" y="52" fill="#ffffff" fontWeight="900" fontSize="16" textAnchor="middle" letterSpacing="1">🔴 CHUỒNG ĐỎ</text>
              {/* 4 Đài cắm ngựa */}
              {STALL_POSITIONS.red.map((st, idx) => (
                <circle key={idx} cx={st.x} cy={st.y} r="26" fill="#fee2e2" stroke="#dc2626" strokeWidth="3" filter="url(#tileShadow)" />
              ))}
            </g>

            {/* Chuồng Lá (Top-Right) */}
            <g className="yard-group yard-green">
              <rect x="360" y="0" width="240" height="240" rx="12" fill="url(#gradGreenYard)" stroke="#15803d" strokeWidth="3" />
              <circle cx="480" cy="120" r="85" fill="#ffffff" opacity="0.95" filter="url(#tileShadow)" />
              <text x="480" y="52" fill="#ffffff" fontWeight="900" fontSize="16" textAnchor="middle" letterSpacing="1">🟢 CHUỒNG LÁ</text>
              {STALL_POSITIONS.green.map((st, idx) => (
                <circle key={idx} cx={st.x} cy={st.y} r="26" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" filter="url(#tileShadow)" />
              ))}
            </g>

            {/* Chuồng Vàng (Bottom-Right) */}
            <g className="yard-group yard-yellow">
              <rect x="360" y="360" width="240" height="240" rx="12" fill="url(#gradYellowYard)" stroke="#a16207" strokeWidth="3" />
              <circle cx="480" cy="480" r="85" fill="#ffffff" opacity="0.95" filter="url(#tileShadow)" />
              <text x="480" y="412" fill="#ffffff" fontWeight="900" fontSize="16" textAnchor="middle" letterSpacing="1">🟡 CHUỒNG VÀNG</text>
              {STALL_POSITIONS.yellow.map((st, idx) => (
                <circle key={idx} cx={st.x} cy={st.y} r="26" fill="#fef9c3" stroke="#ca8a04" strokeWidth="3" filter="url(#tileShadow)" />
              ))}
            </g>

            {/* Chuồng Lam (Bottom-Left) */}
            <g className="yard-group yard-blue">
              <rect x="0" y="360" width="240" height="240" rx="12" fill="url(#gradBlueYard)" stroke="#1d4ed8" strokeWidth="3" />
              <circle cx="120" cy="480" r="85" fill="#ffffff" opacity="0.95" filter="url(#tileShadow)" />
              <text x="120" y="412" fill="#ffffff" fontWeight="900" fontSize="16" textAnchor="middle" letterSpacing="1">🔵 CHUỒNG LAM</text>
              {STALL_POSITIONS.blue.map((st, idx) => (
                <circle key={idx} cx={st.x} cy={st.y} r="26" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" filter="url(#tileShadow)" />
              ))}
            </g>

            {/* 2. TIM ĐÍCH TRUNG TÂM (4 TAM GIÁC MÀU HƯỚNG VÀO TÂM) */}
            <g className="finish-hub">
              {/* Tam giác Đỏ (Left) */}
              <polygon points="240,240 240,360 300,300" fill="#dc2626" opacity="0.9" stroke="#b91c1c" strokeWidth="2" />
              {/* Tam giác Lá (Top) */}
              <polygon points="240,240 360,240 300,300" fill="#16a34a" opacity="0.9" stroke="#15803d" strokeWidth="2" />
              {/* Tam giác Vàng (Right) */}
              <polygon points="360,240 360,360 300,300" fill="#ca8a04" opacity="0.9" stroke="#a16207" strokeWidth="2" />
              {/* Tam giác Lam (Bottom) */}
              <polygon points="240,360 360,360 300,300" fill="#2563eb" opacity="0.9" stroke="#1d4ed8" strokeWidth="2" />

              {/* Ngôi sao / Cúp trung tâm */}
              <circle cx="300" cy="300" r="28" fill="#facc15" stroke="#713f12" strokeWidth="3" filter="url(#tileShadow)" />
              <text x="300" y="307" fontSize="22" textAnchor="middle">🏆</text>
            </g>

            {/* 3. 52 Ô ĐƯỜNG ĐUA CHÍNH (TRACK CELLS) */}
            {TRACK_GRID.map(([gx, gy], idx) => {
              const cx = gx * 40 + 20;
              const cy = gy * 40 + 20;

              // Kiểm tra xem có phải ô xuất chuồng của 4 đội không
              const isRedStart = idx === START_INDEX.red;
              const isGreenStart = idx === START_INDEX.green;
              const isYellowStart = idx === START_INDEX.yellow;
              const isBlueStart = idx === START_INDEX.blue;

              let fillColor = '#ffffff';
              let strokeColor = '#cbd5e1';
              let badge = '';

              if (isRedStart) { fillColor = '#fee2e2'; strokeColor = '#dc2626'; badge = '⭐'; }
              else if (isGreenStart) { fillColor = '#dcfce7'; strokeColor = '#16a34a'; badge = '⭐'; }
              else if (isYellowStart) { fillColor = '#fef9c3'; strokeColor = '#ca8a04'; badge = '⭐'; }
              else if (isBlueStart) { fillColor = '#dbeafe'; strokeColor = '#2563eb'; badge = '⭐'; }

              return (
                <g key={idx} className="track-step-cell">
                  <circle cx={cx} cy={cy} r="17" fill={fillColor} stroke={strokeColor} strokeWidth="2.5" filter="url(#tileShadow)" />
                  {badge && (
                    <text x={cx} y={cy + 4} fontSize="12" textAnchor="middle" fill="#ca8a04">{badge}</text>
                  )}
                </g>
              );
            })}

            {/* 4. ĐƯỜNG VỀ ĐÍCH CỦA 4 ĐỘI (BẬC 1 ĐẾN 6) */}
            {teams.map(t => {
              const stairs = HOME_STAIRS[t];
              const cfg = TEAM_CONFIG[t];
              return stairs.map(([gx, gy], stepIdx) => {
                const cx = gx * 40 + 20;
                const cy = gy * 40 + 20;
                const stepNum = stepIdx + 1; // 1, 2, 3, 4, 5, 6
                return (
                  <g key={`${t}-step-${stepNum}`} className="home-stair-step">
                    <circle cx={cx} cy={cy} r="17" fill={cfg.light} stroke={cfg.primary} strokeWidth="3" filter="url(#tileShadow)" />
                    <text x={cx} y={cy + 5} fill={cfg.dark} fontWeight="900" fontSize="13" textAnchor="middle">
                      {stepNum}
                    </text>
                  </g>
                );
              });
            })}

            {/* 5. VẼ CÁC QUÂN CỜ CÁ NGỰA 3D CHÂN THỰC */}
            {horses.map(h => {
              const { cx, cy } = getHorsePixelCoord(h);
              const cfg = TEAM_CONFIG[h.team];
              const activeToMove = canHorseMove(h);

              return (
                <g
                  key={h.id}
                  className={`horse-token-group ${activeToMove ? 'horse-selectable' : ''}`}
                  onClick={() => handleHorseClick(h)}
                  style={{ cursor: activeToMove ? 'pointer' : 'default' }}
                >
                  {/* Vầng sáng vàng kim khi quân cờ có thể đi */}
                  {activeToMove && (
                    <circle cx={cx} cy={cy} r="22" fill="none" stroke="#facc15" strokeWidth="4" className="pulse-glow" />
                  )}

                  {/* Đế cờ 3D bóng bẩy */}
                  <circle cx={cx} cy={cy} r="16" fill={cfg.primary} stroke="#ffffff" strokeWidth="2.5" filter="url(#horseShadow)" />
                  <circle cx={cx} cy={cy} r="12" fill={cfg.secondary} opacity="0.9" />

                  {/* Biểu tượng Đầu Ngựa Chiến 3D */}
                  <text x={cx} y={cy + 5} fontSize="17" textAnchor="middle" style={{ userSelect: 'none', pointerEvents: 'none' }}>
                    🐎
                  </text>

                  {/* Số hiệu của ngựa (1..4) ở góc trên */}
                  <circle cx={cx + 10} cy={cy - 10} r="7" fill="#ffffff" stroke={cfg.dark} strokeWidth="1.5" />
                  <text x={cx + 10} y={cy - 7} fontSize="9" fontWeight="900" fill={cfg.dark} textAnchor="middle">
                    {h.horseNum}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* BẢNG ĐIỀU KHIỂN XÚC XẮC 3D & LUẬT CHƠI DÂN GIAN */}
        <div className="ludo-sidebar-panel">
          {/* QUÂN XÚC XẮC NGÀ VOI CHÂN THỰC (DIE WITH AUTHENTIC PIPS) */}
          <div className="die-card-wrapper">
            <span className="die-label">XÚC XẮC CHIẾN ĐẤU</span>

            <div
              className={`die-cube-3d die-face-${dice} ${isRolling ? 'die-rolling-anim' : ''} ${currentTurn === 'red' && !hasRolled ? 'die-clickable' : ''}`}
              onClick={rollDice}
              title="Nhấp để lắc xúc xắc"
            >
              {/* Mặt 1: Một chấm đỏ lớn ở tâm */}
              {dice === 1 && <span className="pip pip-center pip-red-large" />}

              {/* Mặt 2: 2 chấm chéo */}
              {dice === 2 && (
                <>
                  <span className="pip pip-top-left" />
                  <span className="pip pip-bottom-right" />
                </>
              )}

              {/* Mặt 3: 3 chấm chéo */}
              {dice === 3 && (
                <>
                  <span className="pip pip-top-left" />
                  <span className="pip pip-center pip-red" />
                  <span className="pip pip-bottom-right" />
                </>
              )}

              {/* Mặt 4: 4 chấm góc */}
              {dice === 4 && (
                <>
                  <span className="pip pip-top-left pip-red" />
                  <span className="pip pip-top-right pip-red" />
                  <span className="pip pip-bottom-left pip-red" />
                  <span className="pip pip-bottom-right pip-red" />
                </>
              )}

              {/* Mặt 5: 5 chấm hoa mai */}
              {dice === 5 && (
                <>
                  <span className="pip pip-top-left" />
                  <span className="pip pip-top-right" />
                  <span className="pip pip-center pip-red" />
                  <span className="pip pip-bottom-left" />
                  <span className="pip pip-bottom-right" />
                </>
              )}

              {/* Mặt 6: 6 chấm hai hàng */}
              {dice === 6 && (
                <>
                  <span className="pip pip-top-left" />
                  <span className="pip pip-top-right" />
                  <span className="pip pip-mid-left" />
                  <span className="pip pip-mid-right" />
                  <span className="pip pip-bottom-left" />
                  <span className="pip pip-bottom-right" />
                </>
              )}
            </div>

            <button
              className="btn btn-primary btn-block ludo-roll-btn"
              onClick={rollDice}
              disabled={hasRolled || isRolling || !!winner || currentTurn !== 'red'}
            >
              {isRolling ? '🎲 Đang Lắc...' : (hasRolled ? '👉 Chọn Ngựa Để Đi' : (currentTurn === 'red' ? '🎲 Lắc Xúc Xắc' : `⏳ ${TEAM_CONFIG[currentTurn].label} Đang Đi...`))}
            </button>
          </div>

          {/* HƯỚNG DẪN CỜ CÁ NGỰA TRUYỀN THỐNG */}
          <div className="ludo-rules-card">
            <h4>📖 LUẬT CỜ CÁ NGỰA CHUẨN:</h4>
            <ul>
              <li>🎲 <strong>Xuất chuồng:</strong> Đổ ra <strong>1</strong> hoặc <strong>6</strong> để mở 1 ngựa ra đường đua.</li>
              <li>⚡ <strong>Thưởng lượt:</strong> Đổ được <strong>6</strong> sẽ được lắc thêm 1 lượt!</li>
              <li>💥 <strong>Đá ngựa:</strong> Đi đúng vào ô ngựa đối phương sẽ <strong>đá văng họ về chuồng</strong>!</li>
              <li>🏁 <strong>Lên chuồng:</strong> Đi đủ 1 vòng để leo các bậc <strong>1 $\rightarrow$ 6</strong>. Đưa 2 ngựa đầu tiên vào đích để <strong>Vô Địch</strong>!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
