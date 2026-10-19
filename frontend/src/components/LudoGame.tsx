import React, { useState, useEffect, useRef } from 'react';
import { playSound, triggerConfetti } from '../utils/effects';

interface LudoGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info' | 'warning', msg: string) => void;
}

type Team = 'red' | 'green' | 'yellow' | 'blue';

interface Pawn {
  id: number;
  team: Team;
  pawnIndex: number; // 0, 1, 2, 3
  pos: number; // -1: in base yard, 0..50: on main track, 51..56: in home column, 57: home finish
}

// 52 tọa độ ô chuẩn Ludo King trên lưới 15x15 (Bắt đầu từ Red Start)
// Red (Bottom-Left), Green (Top-Left), Yellow (Top-Right), Blue (Bottom-Right)
const TRACK_COORDS: [number, number][] = [
  // 0: Red Start (1, 8)
  [1, 8], [2, 8], [3, 8], [4, 8], [5, 8],
  // 5..10: Bottom arm going down
  [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14],
  // 11: Bottom tip
  [7, 14],
  // 12: Blue start entry
  [8, 14],
  // 13: Blue Start (8, 13)
  [8, 13], [8, 12], [8, 11], [8, 10], [8, 9],
  // 18..23: Right arm going right
  [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8],
  // 24: Right tip
  [14, 7],
  // 25: Yellow start entry
  [14, 6],
  // 26: Yellow Start (13, 6)
  [13, 6], [12, 6], [11, 6], [10, 6], [9, 6],
  // 31..36: Top arm going up
  [8, 5], [8, 4], [8, 3], [8, 2], [8, 1], [8, 0],
  // 37: Top tip
  [7, 0],
  // 38: Green start entry
  [6, 0],
  // 39: Green Start (6, 1)
  [6, 1], [6, 2], [6, 3], [6, 4], [6, 5],
  // 44..49: Left arm going left
  [5, 6], [4, 6], [3, 6], [2, 6], [1, 6], [0, 6],
  // 50: Left tip
  [0, 7],
  // 51: Entry to Red Home Column
  [0, 8]
];

// Chỉ số xuất phát của 4 màu trên vòng đua 52 ô
const START_OFFSETS: Record<Team, number> = {
  red: 0,       // [1, 8]
  blue: 13,     // [8, 13]
  yellow: 26,   // [13, 6]
  green: 39     // [6, 1]
};

// 8 ô an toàn có ngôi sao (Safe Star Squares) chuẩn Ludo King
const SAFE_STAR_INDICES = [0, 8, 13, 21, 26, 34, 39, 47];

// 5 ô đường về nhà (Home Column) + 1 ô tim đích cho từng màu
const HOME_COLUMNS: Record<Team, [number, number][]> = {
  red: [[1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]],
  blue: [[7, 13], [7, 12], [7, 11], [7, 10], [7, 9], [7, 8]],
  yellow: [[13, 7], [12, 7], [11, 7], [10, 7], [9, 7], [8, 7]],
  green: [[7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6]]
};

// 4 Vị trí đế cắm quân cờ trong Chuồng (Home Base Yards)
const BASE_POCKETS: Record<Team, { cx: number; cy: number }[]> = {
  red: [
    { cx: 70, cy: 430 },
    { cx: 170, cy: 430 },
    { cx: 70, cy: 530 },
    { cx: 170, cy: 530 }
  ],
  green: [
    { cx: 70, cy: 70 },
    { cx: 170, cy: 70 },
    { cx: 70, cy: 170 },
    { cx: 170, cy: 170 }
  ],
  yellow: [
    { cx: 430, cy: 70 },
    { cx: 530, cy: 70 },
    { cx: 430, cy: 170 },
    { cx: 530, cy: 170 }
  ],
  blue: [
    { cx: 430, cy: 430 },
    { cx: 530, cy: 430 },
    { cx: 430, cy: 530 },
    { cx: 530, cy: 530 }
  ]
};

const TEAM_CONFIG: Record<
  Team,
  { name: string; label: string; primary: string; secondary: string; dark: string; light: string; avatar: string }
> = {
  red: { name: 'Đỏ', label: 'Bạn (Đỏ)', primary: '#ed1c24', secondary: '#f87171', dark: '#991b1b', light: '#fee2e2', avatar: '👑' },
  green: { name: 'Lá', label: 'Bot Xanh Lá', primary: '#00a859', secondary: '#4ade80', dark: '#14532d', light: '#dcfce7', avatar: '🤖' },
  yellow: { name: 'Vàng', label: 'Bot Vàng', primary: '#fdb813', secondary: '#fef08a', dark: '#854d0e', light: '#fef9c3', avatar: '🦊' },
  blue: { name: 'Lam', label: 'Bot Lam', primary: '#0072bc', secondary: '#60a5fa', dark: '#1e3a8a', light: '#dbeafe', avatar: '🦁' }
};

export const LudoGame: React.FC<LudoGameProps> = ({ onWin, showToast }) => {
  const [dice, setDice] = useState<number>(6);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [currentTurn, setCurrentTurn] = useState<Team>('red');
  const [hasRolled, setHasRolled] = useState<boolean>(false);
  const [sixCount, setSixCount] = useState<number>(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [animatingPawnId, setAnimatingPawnId] = useState<number | null>(null);

  // 16 Quân Cờ Ludo King chuẩn (mỗi màu 4 quân)
  const [pawns, setPawns] = useState<Pawn[]>([
    { id: 1, team: 'red', pawnIndex: 0, pos: -1 },
    { id: 2, team: 'red', pawnIndex: 1, pos: -1 },
    { id: 3, team: 'red', pawnIndex: 2, pos: -1 },
    { id: 4, team: 'red', pawnIndex: 3, pos: -1 },

    { id: 5, team: 'green', pawnIndex: 0, pos: -1 },
    { id: 6, team: 'green', pawnIndex: 1, pos: -1 },
    { id: 7, team: 'green', pawnIndex: 2, pos: -1 },
    { id: 8, team: 'green', pawnIndex: 3, pos: -1 },

    { id: 9, team: 'yellow', pawnIndex: 0, pos: -1 },
    { id: 10, team: 'yellow', pawnIndex: 1, pos: -1 },
    { id: 11, team: 'yellow', pawnIndex: 2, pos: -1 },
    { id: 12, team: 'yellow', pawnIndex: 3, pos: -1 },

    { id: 13, team: 'blue', pawnIndex: 0, pos: -1 },
    { id: 14, team: 'blue', pawnIndex: 1, pos: -1 },
    { id: 15, team: 'blue', pawnIndex: 2, pos: -1 },
    { id: 16, team: 'blue', pawnIndex: 3, pos: -1 }
  ]);

  const teams: Team[] = ['red', 'green', 'yellow', 'blue'];
  const botTimerRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (botTimerRef.current) clearTimeout(botTimerRef.current);
    };
  }, []);

  // Tự động hóa lượt chơi cho Bot (Green -> Yellow -> Blue)
  useEffect(() => {
    if (winner || animatingPawnId !== null) return;

    if (currentTurn !== 'red') {
      botTimerRef.current = setTimeout(() => {
        handleBotRoll();
      }, 700);
    }
  }, [currentTurn, winner, animatingPawnId]);

  // Bot lắc xúc xắc
  const handleBotRoll = () => {
    if (winner || animatingPawnId !== null) return;
    setIsRolling(true);
    playSound('dice');

    let count = 0;
    const interval = setInterval(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
      count++;
      if (count > 7) {
        clearInterval(interval);
        const finalVal = Math.floor(Math.random() * 6) + 1;
        setDice(finalVal);
        setIsRolling(false);
        setHasRolled(true);

        setTimeout(() => {
          handleBotMove(finalVal);
        }, 500);
      }
    }, 45);
  };

  // Bot tính toán nước đi thông minh
  const handleBotMove = (rollVal: number) => {
    const myPawns = pawns.filter(p => p.team === currentTurn);

    // Tìm tất cả quân cờ có thể đi được
    const movableList: { pawn: Pawn; priority: number }[] = [];

    for (const p of myPawns) {
      if (p.pos === -1) {
        // Chỉ xuất quân khi lắc được 6 (chuẩn Ludo King)
        if (rollVal === 6) {
          const startSquare = START_OFFSETS[p.team];
          // Kiểm tra xem có đá được ai ở ô xuất phát không
          const victim = pawns.find(
            other =>
              other.team !== p.team &&
              other.pos >= 0 &&
              other.pos <= 50 &&
              (START_OFFSETS[other.team] + other.pos) % 52 === startSquare
          );
          movableList.push({ pawn: p, priority: victim ? 120 : 60 });
        }
      } else if (p.pos >= 0 && p.pos + rollVal <= 56) {
        const nextPos = p.pos + rollVal;
        let prio = 20 + nextPos;

        if (nextPos <= 50) {
          const myRealSquare = (START_OFFSETS[p.team] + nextPos) % 52;
          const isSafe = SAFE_STAR_INDICES.includes(myRealSquare);
          if (!isSafe) {
            // Kiểm tra có đá được đối phương không
            const victim = pawns.find(
              other =>
                other.team !== p.team &&
                other.pos >= 0 &&
                other.pos <= 50 &&
                (START_OFFSETS[other.team] + other.pos) % 52 === myRealSquare
            );
            if (victim) {
              prio += 100; // Ưu tiên đá đối phương cao nhất
            }
          }
        } else if (nextPos === 56) {
          prio += 80; // Về đích
        }

        movableList.push({ pawn: p, priority: prio });
      }
    }

    if (movableList.length === 0) {
      // Không có nước đi
      showToast('info', `${TEAM_CONFIG[currentTurn].label} không có nước đi!`);
      setTimeout(nextTurn, 800);
      return;
    }

    movableList.sort((a, b) => b.priority - a.priority);
    executePawnMove(movableList[0].pawn, rollVal);
  };

  // Người chơi lắc xúc xắc
  const rollDice = () => {
    if (hasRolled || isRolling || winner || currentTurn !== 'red' || animatingPawnId !== null) return;

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

        const myPawns = pawns.filter(p => p.team === 'red');
        const canMoveAny = myPawns.some(p => (p.pos === -1 && finalVal === 6) || (p.pos >= 0 && p.pos + finalVal <= 56));

        if (!canMoveAny) {
          showToast('info', `Lắc ra [${finalVal}] nhưng không có quân cờ nào đi được. Chuyển lượt!`);
          setTimeout(nextTurn, 1000);
        } else {
          if (finalVal === 6) {
            playSound('win');
            showToast('success', '🎉 LẮC RA 6! Bạn có thể xuất quân hoặc đi tiếp và ĐƯỢC THÊM LƯỢT!');
          }
        }
      }
    }, 45);
  };

  // Kiểm tra quân cờ có đi được không
  const canPawnMove = (p: Pawn): boolean => {
    if (!hasRolled || p.team !== currentTurn || winner || animatingPawnId !== null) return false;
    if (p.pos === -1) {
      return dice === 6; // Ludo King chuẩn: CHỈ 6 MỚI ĐƯỢC XUẤT QUÂN
    }
    return p.pos + dice <= 56;
  };

  // Di chuyển quân cờ từng bước mượt mà
  const executePawnMove = (pawn: Pawn, rollVal: number) => {
    setAnimatingPawnId(pawn.id);

    // 1. Xuất quân khỏi chuồng
    if (pawn.pos === -1) {
      const startSquare = START_OFFSETS[pawn.team];
      let didKick = false;

      const nextPawns = pawns.map(p => {
        if (p.id === pawn.id) return { ...p, pos: 0 };
        // Kiểm tra xem có đá quân đối phương ở ô xuất phát không (ngoại trừ ô sao an toàn)
        if (p.team !== pawn.team && p.pos >= 0 && p.pos <= 50) {
          const otherTrackSquare = (START_OFFSETS[p.team] + p.pos) % 52;
          if (otherTrackSquare === startSquare && !SAFE_STAR_INDICES.includes(startSquare)) {
            didKick = true;
            return { ...p, pos: -1 };
          }
        }
        return p;
      });

      setPawns(nextPawns);
      playSound('move');
      setAnimatingPawnId(null);

      if (didKick) {
        playSound('capture');
        triggerConfetti();
        showToast('success', `💥 ĐÁ QUÂN! ${TEAM_CONFIG[pawn.team].label} xuất quân và đá văng đối thủ về chuồng!`);
        finishAction(true); // Thưởng lượt khi đá quân
      } else {
        finishAction(rollVal === 6);
      }
      return;
    }

    // 2. Đi trên đường đua: bước từng bước 1
    const startPos = pawn.pos;
    const targetPos = startPos + rollVal;

    let currentStep = startPos;
    const stepInterval = setInterval(() => {
      currentStep++;
      setPawns(prev => prev.map(p => p.id === pawn.id ? { ...p, pos: currentStep } : p));
      playSound('move');

      if (currentStep >= targetPos) {
        clearInterval(stepInterval);
        setAnimatingPawnId(null);

        // Kiểm tra đá quân ở ô đáp xuống
        let didKick = false;
        let reachedHome = false;

        const finalPawns = pawns.map(p => {
          if (p.id === pawn.id) {
            if (targetPos === 56) reachedHome = true;
            return { ...p, pos: targetPos };
          }

          if (p.team !== pawn.team && targetPos <= 50 && p.pos >= 0 && p.pos <= 50) {
            const mySquare = (START_OFFSETS[pawn.team] + targetPos) % 52;
            const otherSquare = (START_OFFSETS[p.team] + p.pos) % 52;
            const isSafe = SAFE_STAR_INDICES.includes(mySquare);

            if (mySquare === otherSquare && !isSafe) {
              didKick = true;
              return { ...p, pos: -1 }; // Bị đá về chuồng
            }
          }
          return p;
        });

        setPawns(finalPawns);

        if (didKick) {
          playSound('capture');
          triggerConfetti();
          showToast('success', `💥 ĐÁ QUÂN! ${TEAM_CONFIG[pawn.team].label} đá văng đối thủ về chuồng!`);
        }

        if (reachedHome) {
          playSound('win');
          showToast('success', `🎉 VÀO ĐÍCH! ${TEAM_CONFIG[pawn.team].label} đưa 1 quân cờ về đích an toàn!`);
        }

        // Kiểm tra chiến thắng (Đội đầu tiên có đủ 4 quân về đích pos 56)
        const finishedCount = finalPawns.filter(p => p.team === currentTurn && p.pos === 56).length;
        if (finishedCount === 4) {
          setWinner(TEAM_CONFIG[currentTurn].label);
          playSound('win');
          triggerConfetti();
          showToast('success', `🏆 VÔ ĐỊCH! ${TEAM_CONFIG[currentTurn].label} ĐÃ CHIẾN THẮNG TRẬN ĐẤU LUDO KING!`);
          if (currentTurn === 'red') {
            onWin('Cờ Cá Ngựa (Ludo King)', 150);
          }
          return;
        }

        // Thưởng thêm lượt nếu: đổ được 6 HOẶC đá được quân HOẶC vào đích
        const getsBonusTurn = rollVal === 6 || didKick || reachedHome;
        finishAction(getsBonusTurn);
      }
    }, 110);
  };

  const finishAction = (bonus: boolean) => {
    if (bonus) {
      if (dice === 6) {
        const nextSix = sixCount + 1;
        if (nextSix === 3) {
          // Ludo King rule: 3 con 6 liên tiếp sẽ bị phạt mất lượt
          showToast('warning', '⚠️ Đổ 3 lần 6 liên tiếp! Phạt mất lượt theo luật Ludo King.');
          setSixCount(0);
          nextTurn();
          return;
        }
        setSixCount(nextSix);
      }
      showToast('info', `✨ ${TEAM_CONFIG[currentTurn].label} được thưởng thêm 1 lượt lắc xúc xắc!`);
      setHasRolled(false);
      if (currentTurn !== 'red') {
        setTimeout(handleBotRoll, 600);
      }
    } else {
      setSixCount(0);
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
    setPawns([
      { id: 1, team: 'red', pawnIndex: 0, pos: -1 },
      { id: 2, team: 'red', pawnIndex: 1, pos: -1 },
      { id: 3, team: 'red', pawnIndex: 2, pos: -1 },
      { id: 4, team: 'red', pawnIndex: 3, pos: -1 },

      { id: 5, team: 'green', pawnIndex: 0, pos: -1 },
      { id: 6, team: 'green', pawnIndex: 1, pos: -1 },
      { id: 7, team: 'green', pawnIndex: 2, pos: -1 },
      { id: 8, team: 'green', pawnIndex: 3, pos: -1 },

      { id: 9, team: 'yellow', pawnIndex: 0, pos: -1 },
      { id: 10, team: 'yellow', pawnIndex: 1, pos: -1 },
      { id: 11, team: 'yellow', pawnIndex: 2, pos: -1 },
      { id: 12, team: 'yellow', pawnIndex: 3, pos: -1 },

      { id: 13, team: 'blue', pawnIndex: 0, pos: -1 },
      { id: 14, team: 'blue', pawnIndex: 1, pos: -1 },
      { id: 15, team: 'blue', pawnIndex: 2, pos: -1 },
      { id: 16, team: 'blue', pawnIndex: 3, pos: -1 }
    ]);
    setCurrentTurn('red');
    setHasRolled(false);
    setSixCount(0);
    setWinner(null);
    setAnimatingPawnId(null);
    playSound('click');
    showToast('info', 'Đã bắt đầu ván đấu Ludo King mới!');
  };

  // Lấy tọa độ hiển thị (pixel cx, cy trên SVG 600x600)
  const getPawnPixelCoords = (pawn: Pawn): { cx: number; cy: number } => {
    if (pawn.pos === -1) {
      return BASE_POCKETS[pawn.team][pawn.pawnIndex];
    }

    if (pawn.pos <= 50) {
      const squareIdx = (START_OFFSETS[pawn.team] + pawn.pos) % 52;
      const [gx, gy] = TRACK_COORDS[squareIdx];
      return { cx: gx * 40 + 20, cy: gy * 40 + 20 };
    }

    if (pawn.pos <= 55) {
      const stepIdx = pawn.pos - 51;
      const [gx, gy] = HOME_COLUMNS[pawn.team][stepIdx];
      return { cx: gx * 40 + 20, cy: gy * 40 + 20 };
    }

    // Đã vào tim đích (pos 56 / 57)
    const centerSlots: Record<Team, { cx: number; cy: number }[]> = {
      red: [{ cx: 280, cy: 300 }, { cx: 270, cy: 290 }, { cx: 270, cy: 310 }, { cx: 260, cy: 300 }],
      green: [{ cx: 300, cy: 280 }, { cx: 290, cy: 270 }, { cx: 310, cy: 270 }, { cx: 300, cy: 260 }],
      yellow: [{ cx: 320, cy: 300 }, { cx: 330, cy: 290 }, { cx: 330, cy: 310 }, { cx: 340, cy: 300 }],
      blue: [{ cx: 300, cy: 320 }, { cx: 290, cy: 330 }, { cx: 310, cy: 330 }, { cx: 300, cy: 340 }]
    };
    return centerSlots[pawn.team][pawn.pawnIndex];
  };

  return (
    <div className="game-wrapper ludo-king-container">
      {/* 4 BẢNG ĐIỀU KHIỂN GÓC CHO 4 NGƯỜI CHƠI CHUẨN LUDO KING */}
      <div className="ludo-corner-hud hud-top-left">
        <div className={`ludo-player-card ${currentTurn === 'green' ? 'active-player-glow' : ''}`}>
          <div className="avatar-frame" style={{ borderColor: TEAM_CONFIG.green.primary }}>
            <span>{TEAM_CONFIG.green.avatar}</span>
          </div>
          <div className="player-meta-box">
            <span className="p-title">Bot Xanh Lá</span>
            <span className="p-pawns-count">Về đích: {pawns.filter(p => p.team === 'green' && p.pos === 56).length}/4</span>
          </div>
          {currentTurn === 'green' && (
            <div className={`hud-mini-die ${isRolling ? 'die-shake' : ''}`}>
              <span className={`die-face-mini pip-val-${dice}`}>{dice}</span>
            </div>
          )}
        </div>
      </div>

      <div className="ludo-corner-hud hud-top-right">
        <div className={`ludo-player-card ${currentTurn === 'yellow' ? 'active-player-glow' : ''}`}>
          <div className="avatar-frame" style={{ borderColor: TEAM_CONFIG.yellow.primary }}>
            <span>{TEAM_CONFIG.yellow.avatar}</span>
          </div>
          <div className="player-meta-box">
            <span className="p-title">Bot Vàng</span>
            <span className="p-pawns-count">Về đích: {pawns.filter(p => p.team === 'yellow' && p.pos === 56).length}/4</span>
          </div>
          {currentTurn === 'yellow' && (
            <div className={`hud-mini-die ${isRolling ? 'die-shake' : ''}`}>
              <span className={`die-face-mini pip-val-${dice}`}>{dice}</span>
            </div>
          )}
        </div>
      </div>

      <div className="ludo-corner-hud hud-bottom-right">
        <div className={`ludo-player-card ${currentTurn === 'blue' ? 'active-player-glow' : ''}`}>
          <div className="avatar-frame" style={{ borderColor: TEAM_CONFIG.blue.primary }}>
            <span>{TEAM_CONFIG.blue.avatar}</span>
          </div>
          <div className="player-meta-box">
            <span className="p-title">Bot Lam</span>
            <span className="p-pawns-count">Về đích: {pawns.filter(p => p.team === 'blue' && p.pos === 56).length}/4</span>
          </div>
          {currentTurn === 'blue' && (
            <div className={`hud-mini-die ${isRolling ? 'die-shake' : ''}`}>
              <span className={`die-face-mini pip-val-${dice}`}>{dice}</span>
            </div>
          )}
        </div>
      </div>

      <div className="ludo-corner-hud hud-bottom-left">
        <div className={`ludo-player-card ${currentTurn === 'red' ? 'active-player-glow' : ''}`}>
          <div className="avatar-frame" style={{ borderColor: TEAM_CONFIG.red.primary }}>
            <span>{TEAM_CONFIG.red.avatar}</span>
          </div>
          <div className="player-meta-box">
            <span className="p-title" style={{ color: '#ed1c24', fontWeight: 800 }}>Bạn (Đỏ)</span>
            <span className="p-pawns-count">Về đích: {pawns.filter(p => p.team === 'red' && p.pos === 56).length}/4</span>
          </div>
          {currentTurn === 'red' && (
            <button
              className={`hud-main-dice-btn ${!hasRolled ? 'ready-to-roll' : ''} ${isRolling ? 'die-shake' : ''}`}
              onClick={rollDice}
              disabled={hasRolled || isRolling || !!winner}
              title="Nhấp để lắc xúc xắc"
            >
              <div className="dice-pips-cube">
                {dice === 1 && <span className="p-dot p-center p-red-big" />}
                {dice === 2 && <><span className="p-dot p-tl" /><span className="p-dot p-br" /></>}
                {dice === 3 && <><span className="p-dot p-tl" /><span className="p-dot p-center p-red" /><span className="p-dot p-br" /></>}
                {dice === 4 && <><span className="p-dot p-tl p-red" /><span className="p-dot p-tr p-red" /><span className="p-dot p-bl p-red" /><span className="p-dot p-br p-red" /></>}
                {dice === 5 && <><span className="p-dot p-tl" /><span className="p-dot p-tr" /><span className="p-dot p-center p-red" /><span className="p-dot p-bl" /><span className="p-dot p-br" /></>}
                {dice === 6 && <><span className="p-dot p-tl" /><span className="p-dot p-tr" /><span className="p-dot p-ml" /><span className="p-dot p-mr" /><span className="p-dot p-bl" /><span className="p-dot p-br" /></>}
              </div>
              {!hasRolled && <span className="roll-label-badge">LẮC</span>}
            </button>
          )}
        </div>
      </div>

      {/* KHUNG BÀN CỜ LUDO KING SVG ĐỐI XỨNG TUYỆT HẢO */}
      <div className="ludo-board-stage">
        <svg className="ludo-king-svg" viewBox="0 0 600 600">
          <defs>
            <filter id="ludoCardShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.3" />
            </filter>
            <filter id="pawnGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#facc15" floodOpacity="0.8" />
            </filter>
            <filter id="pawnBaseShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* NỀN BÀN CỜ GỖ TƯƠI SÁNG */}
          <rect x="0" y="0" width="600" height="600" rx="14" fill="#ffffff" stroke="#1e293b" strokeWidth="6" />

          {/* 1. 4 CHUỒNG LỚN (YARDS) CHUẨN LUDO KING */}
          {/* Green (Top-Left) */}
          <rect x="0" y="0" width="240" height="240" fill="#00a859" stroke="#1e293b" strokeWidth="4" />
          <rect x="30" y="30" width="180" height="180" rx="16" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          {BASE_POCKETS.green.map((b, i) => (
            <circle key={i} cx={b.cx} cy={b.cy} r="22" fill="#00a859" stroke="#14532d" strokeWidth="3" />
          ))}

          {/* Yellow (Top-Right) */}
          <rect x="360" y="0" width="240" height="240" fill="#fdb813" stroke="#1e293b" strokeWidth="4" />
          <rect x="390" y="30" width="180" height="180" rx="16" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          {BASE_POCKETS.yellow.map((b, i) => (
            <circle key={i} cx={b.cx} cy={b.cy} r="22" fill="#fdb813" stroke="#854d0e" strokeWidth="3" />
          ))}

          {/* Red (Bottom-Left) */}
          <rect x="0" y="360" width="240" height="240" fill="#ed1c24" stroke="#1e293b" strokeWidth="4" />
          <rect x="30" y="390" width="180" height="180" rx="16" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          {BASE_POCKETS.red.map((b, i) => (
            <circle key={i} cx={b.cx} cy={b.cy} r="22" fill="#ed1c24" stroke="#991b1b" strokeWidth="3" />
          ))}

          {/* Blue (Bottom-Right) */}
          <rect x="360" y="360" width="240" height="240" fill="#0072bc" stroke="#1e293b" strokeWidth="4" />
          <rect x="390" y="390" width="180" height="180" rx="16" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          {BASE_POCKETS.blue.map((b, i) => (
            <circle key={i} cx={b.cx} cy={b.cy} r="22" fill="#0072bc" stroke="#1e3a8a" strokeWidth="3" />
          ))}

          {/* 2. CÁC Ô TRÊN ĐƯỜNG ĐUA 52 Ô CHUẨN (TRACK GRIDS) */}
          {TRACK_COORDS.map(([gx, gy], idx) => {
            const x = gx * 40;
            const y = gy * 40;

            const isRedStart = idx === 0;
            const isBlueStart = idx === 13;
            const isYellowStart = idx === 26;
            const isGreenStart = idx === 39;
            const isStar = SAFE_STAR_INDICES.includes(idx);

            let bg = '#ffffff';
            let arrowText = '';

            if (isRedStart) { bg = '#ed1c24'; arrowText = '➜'; }
            else if (isBlueStart) { bg = '#0072bc'; arrowText = '⬆'; }
            else if (isYellowStart) { bg = '#fdb813'; arrowText = '⬅'; }
            else if (isGreenStart) { bg = '#00a859'; arrowText = '⬇'; }

            return (
              <g key={idx} className="track-grid-cell">
                <rect x={x} y={y} width="40" height="40" fill={bg} stroke="#1e293b" strokeWidth="1.5" />
                {isStar && !isRedStart && !isBlueStart && !isYellowStart && !isGreenStart && (
                  <text x={x + 20} y={y + 26} fontSize="18" textAnchor="middle" fill="#eab308">⭐</text>
                )}
                {arrowText && (
                  <text x={x + 20} y={y + 27} fontSize="20" fontWeight="900" textAnchor="middle" fill="#ffffff">
                    {arrowText}
                  </text>
                )}
              </g>
            );
          })}

          {/* 3. ĐƯỜNG VỀ NHÀ (HOME COLUMNS) */}
          {/* Red Home Lane (gx = 1..5, gy = 7) */}
          {HOME_COLUMNS.red.slice(0, 5).map(([gx, gy], i) => (
            <rect key={`rh-${i}`} x={gx * 40} y={gy * 40} width="40" height="40" fill="#ed1c24" stroke="#1e293b" strokeWidth="1.5" />
          ))}

          {/* Green Home Lane (gx = 7, gy = 1..5) */}
          {HOME_COLUMNS.green.slice(0, 5).map(([gx, gy], i) => (
            <rect key={`gh-${i}`} x={gx * 40} y={gy * 40} width="40" height="40" fill="#00a859" stroke="#1e293b" strokeWidth="1.5" />
          ))}

          {/* Yellow Home Lane (gx = 9..13, gy = 7) */}
          {HOME_COLUMNS.yellow.slice(0, 5).map(([gx, gy], i) => (
            <rect key={`yh-${i}`} x={gx * 40} y={gy * 40} width="40" height="40" fill="#fdb813" stroke="#1e293b" strokeWidth="1.5" />
          ))}

          {/* Blue Home Lane (gx = 7, gy = 9..13) */}
          {HOME_COLUMNS.blue.slice(0, 5).map(([gx, gy], i) => (
            <rect key={`bh-${i}`} x={gx * 40} y={gy * 40} width="40" height="40" fill="#0072bc" stroke="#1e293b" strokeWidth="1.5" />
          ))}

          {/* 4. TIM ĐÍCH TRUNG TÂM (4 TAM GIÁC CHỤM LẠI) */}
          <polygon points="240,240 240,360 300,300" fill="#ed1c24" stroke="#1e293b" strokeWidth="2" />
          <polygon points="240,240 360,240 300,300" fill="#00a859" stroke="#1e293b" strokeWidth="2" />
          <polygon points="360,240 360,360 300,300" fill="#fdb813" stroke="#1e293b" strokeWidth="2" />
          <polygon points="240,360 360,360 300,300" fill="#0072bc" stroke="#1e293b" strokeWidth="2" />

          {/* Ngôi sao chiến thắng ở tâm tim đích */}
          <circle cx="300" cy="300" r="18" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          <text x="300" y="306" fontSize="16" textAnchor="middle">🏆</text>

          {/* 5. QUÂN CỜ NÓN LUDO KING 3D ĐỘC QUYỀN */}
          {pawns.map(p => {
            const { cx, cy } = getPawnPixelCoords(p);
            const cfg = TEAM_CONFIG[p.team];
            const isClickable = canPawnMove(p);
            const isBouncing = isClickable && animatingPawnId === null;

            return (
              <g
                key={p.id}
                className={`ludo-pawn-3d ${isBouncing ? 'pawn-active-bounce' : ''}`}
                onClick={() => isClickable && executePawnMove(p, dice)}
                style={{ cursor: isClickable ? 'pointer' : 'default' }}
                filter={isClickable ? 'url(#pawnGlow)' : 'url(#pawnBaseShadow)'}
              >
                {/* Vòng hào quang sáng khi quân đi được */}
                {isClickable && (
                  <circle cx={cx} cy={cy + 8} r="18" fill="none" stroke="#facc15" strokeWidth="3" className="halo-ring" />
                )}

                {/* Đế quân cờ nón */}
                <ellipse cx={cx} cy={cy + 10} rx="14" ry="6" fill="#1e293b" opacity="0.3" />
                <ellipse cx={cx} cy={cy + 8} rx="12" ry="5" fill={cfg.dark} />

                {/* Thân nón quân cờ (Peg cone body) */}
                <path
                  d={`M ${cx - 9} ${cy + 8} L ${cx - 5} ${cy - 4} L ${cx + 5} ${cy - 4} L ${cx + 9} ${cy + 8} Z`}
                  fill={cfg.primary}
                />

                {/* Đầu tròn ngọc bích bóng loáng (Round sphere head) */}
                <circle cx={cx} cy={cy - 6} r="8.5" fill={cfg.primary} stroke="#ffffff" strokeWidth="1.5" />
                <circle cx={cx - 2.5} cy={cy - 8.5} r="2.5" fill="#ffffff" opacity="0.8" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* THANH ĐIỀU KHIỂN & BẬT TẮT THAO TÁC */}
      <div className="ludo-bottom-bar">
        <div className="ludo-rules-reminder">
          <span>🎲 <strong>Luật Ludo King:</strong> Chỉ khi đổ được <strong>6</strong> mới được xuất quân ra bàn cờ. Đổ 6 hoặc Đá quân được thưởng thêm 1 lượt!</span>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={resetGame}>
          🔄 Ván Mới
        </button>
      </div>
    </div>
  );
};
