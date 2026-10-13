import React, { useState } from 'react';
import { playSound, triggerConfetti } from '../utils/effects';

interface LudoGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info', msg: string) => void;
}

type Team = 'red' | 'green' | 'yellow' | 'blue';

interface Horse {
  id: number;
  team: Team;
  pos: number; // -1: trong chuồng, 0..51: đường đua chính, 52..57: đường về đích, 58: đã về đích
}

// 52 vị trí tọa độ (r, c) trên lưới 15x15 của bàn cờ Cá Ngựa chuẩn thế giới
const MAIN_TRACK_COORDS: [number, number][] = [
  // Nhánh trái đi lên (Red xuất phát ở ô 1: (6, 1))
  [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5],
  [5, 6], [4, 6], [3, 6], [2, 6], [1, 6], [0, 6],
  [0, 7], // Đỉnh
  [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], // Nhánh trên đi xuống
  [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], // Nhánh phải (Green xuất phát ở ô 14: (8, 13))
  [7, 14], // Phải cùng
  [8, 14], [8, 13], [8, 12], [8, 11], [8, 10], [8, 9], // Nhánh phải đi vào
  [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8], // Nhánh dưới đi xuống (Yellow xuất phát)
  [14, 7], // Đáy
  [14, 6], [13, 6], [12, 6], [11, 6], [10, 6], [9, 6], // Nhánh dưới đi lên
  [8, 5], [8, 4], [8, 3], [8, 2], [8, 1], [8, 0], // Nhánh trái (Blue xuất phát)
  [7, 0] // Trái cùng
];

// Điểm xuất chuồng (start index trên MAIN_TRACK_COORDS)
const START_INDEX: Record<Team, number> = {
  red: 1,
  green: 14,
  yellow: 27,
  blue: 40
};

// Tọa độ đường lên đích (chuồng đích từ 1 đến 6) cho 4 đội
const HOME_STAIRS_COORDS: Record<Team, [number, number][]> = {
  red: [[7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6]],
  green: [[1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]],
  yellow: [[7, 13], [7, 12], [7, 11], [7, 10], [7, 9], [7, 8]],
  blue: [[13, 7], [12, 7], [11, 7], [10, 7], [9, 7], [8, 7]]
};

const TEAM_CONFIG: Record<Team, { name: string; color: string; bg: string; icon: string }> = {
  red: { name: 'Đỏ', color: '#ef4444', bg: '#f87171', icon: '🔴' },
  green: { name: 'Lá', color: '#10b981', bg: '#34d399', icon: '🟢' },
  yellow: { name: 'Vàng', color: '#f59e0b', bg: '#fbbf24', icon: '🟡' },
  blue: { name: 'Xanh', color: '#3b82f6', bg: '#60a5fa', icon: '🔵' }
};

export const LudoGame: React.FC<LudoGameProps> = ({ onWin, showToast }) => {
  const [dice, setDice] = useState<number>(6);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [currentTurn, setCurrentTurn] = useState<Team>('red');
  const [hasRolled, setHasRolled] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

  // Mỗi đội 2 ngựa chiến
  const [horses, setHorses] = useState<Horse[]>([
    { id: 1, team: 'red', pos: -1 },
    { id: 2, team: 'red', pos: -1 },
    { id: 3, team: 'green', pos: -1 },
    { id: 4, team: 'green', pos: -1 },
    { id: 5, team: 'yellow', pos: -1 },
    { id: 6, team: 'yellow', pos: -1 },
    { id: 7, team: 'blue', pos: -1 },
    { id: 8, team: 'blue', pos: -1 }
  ]);

  const teams: Team[] = ['red', 'green', 'yellow', 'blue'];

  const rollDice = () => {
    if (hasRolled || isRolling || winner) return;

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

        // Kiểm tra nước đi
        const myHorses = horses.filter(h => h.team === currentTurn);
        const canDeploy = finalVal === 6 || finalVal === 1;
        const canMoveAny = myHorses.some(h => (h.pos === -1 && canDeploy) || (h.pos >= 0 && h.pos + finalVal <= 58));

        if (!canMoveAny) {
          showToast('info', `Đội ${TEAM_CONFIG[currentTurn].name} không có nước đi! Chuyển lượt.`);
          setTimeout(nextTurn, 1000);
        }
      }
    }, 60);
  };

  const handleHorseClick = (horse: Horse) => {
    if (!hasRolled || horse.team !== currentTurn || winner) return;

    const canDeploy = dice === 6 || dice === 1;

    // 1. Xuất chuồng
    if (horse.pos === -1) {
      if (!canDeploy) {
        playSound('error');
        showToast('error', 'Cần lắc được 1 hoặc 6 để xuất quân khỏi chuồng!');
        return;
      }

      const updated = horses.map(h => h.id === horse.id ? { ...h, pos: 0 } : h);
      setHorses(updated);
      playSound('move');
      showToast('success', `Đội ${TEAM_CONFIG[currentTurn].name} đã xuất chuồng ngựa chiến! 🐎`);
      finishAction(dice === 6);
      return;
    }

    // 2. Di chuyển trên đường đua
    const nextPos = horse.pos + dice;
    if (nextPos > 58) {
      playSound('error');
      showToast('error', 'Số bước xúc xắc vượt quá đích!');
      return;
    }

    // Tính toán đá ngựa đối thủ trên vòng đua chính
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
          return { ...h, pos: -1 }; // Bị đá văng về chuồng!
        }
      }
      return h;
    });

    setHorses(updated);

    if (kicked) {
      playSound('capture');
      showToast('success', `💥 ĐÁ NGỰA! Đội ${TEAM_CONFIG[currentTurn].name} đã đá văng ngựa đối thủ về chuồng!`);
    } else {
      playSound('move');
    }

    // Kiểm tra vô địch (cả 2 ngựa về đích pos 58)
    const myFinished = updated.filter(h => h.team === currentTurn && h.pos >= 58);
    if (myFinished.length >= 2) {
      setWinner(TEAM_CONFIG[currentTurn].name);
      playSound('win');
      triggerConfetti();
      showToast('success', `🎉 VÔ ĐỊCH! Đội ${TEAM_CONFIG[currentTurn].name} đã đưa toàn bộ ngựa về đích an toàn!`);
      onWin('Cờ Cá Ngựa', 80);
      return;
    }

    finishAction(dice === 6);
  };

  const finishAction = (bonusRoll: boolean) => {
    if (bonusRoll) {
      showToast('info', 'Lắc được 6! Bạn được lắc thêm 1 lượt! 🎲');
      setHasRolled(false);
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
      { id: 1, team: 'red', pos: -1 },
      { id: 2, team: 'red', pos: -1 },
      { id: 3, team: 'green', pos: -1 },
      { id: 4, team: 'green', pos: -1 },
      { id: 5, team: 'yellow', pos: -1 },
      { id: 6, team: 'yellow', pos: -1 },
      { id: 7, team: 'blue', pos: -1 },
      { id: 8, team: 'blue', pos: -1 }
    ]);
    setCurrentTurn('red');
    setHasRolled(false);
    setWinner(null);
    playSound('click');
  };

  // Tìm ngựa tại ô tọa độ (r, c)
  const getHorseAt = (r: number, c: number): Horse | undefined => {
    return horses.find(h => {
      if (h.pos < 0) return false;
      if (h.pos < 52) {
        const realIdx = (START_INDEX[h.team] + h.pos) % 52;
        const [tr, tc] = MAIN_TRACK_COORDS[realIdx];
        return tr === r && tc === c;
      }
      if (h.pos >= 52 && h.pos <= 57) {
        const stairIdx = h.pos - 52;
        const [sr, sc] = HOME_STAIRS_COORDS[h.team][stairIdx];
        return sr === r && sc === c;
      }
      return false;
    });
  };

  return (
    <div className="game-wrapper ludo-real-wrapper">
      <div className="game-top-bar">
        <div className="game-status-badge">
          {winner ? (
            <span className="win-announce">🏆 Vô Địch: <strong>Đội {winner}</strong></span>
          ) : (
            <span>Lượt đi: <strong style={{ color: TEAM_CONFIG[currentTurn].color }}>Đội {TEAM_CONFIG[currentTurn].name} {TEAM_CONFIG[currentTurn].icon}</strong></span>
          )}
        </div>

        <div className="game-actions">
          <button className="reset-btn" onClick={resetGame}>🔄 Ván mới</button>
        </div>
      </div>

      <div className="ludo-main-arena">
        {/* BÀN CỜ CÁ NGỰA THỰC TẾ 15x15 CHUẨN QUỐC TẾ */}
        <div className="ludo-authentic-board">
          {/* 4 CHUỒNG NGỰA Ở 4 GÓC */}
          <div className="ludo-corner-yard yard-red">
            <span className="yard-title">🔴 Chuồng Đỏ</span>
            <div className="yard-horses">
              {horses.filter(h => h.team === 'red' && h.pos === -1).map(h => (
                <button
                  key={h.id}
                  className={`yard-horse-btn ${currentTurn === 'red' && hasRolled ? 'can-deploy' : ''}`}
                  onClick={() => handleHorseClick(h)}
                >
                  🐎
                </button>
              ))}
            </div>
          </div>

          <div className="ludo-corner-yard yard-green">
            <span className="yard-title">🟢 Chuồng Lá</span>
            <div className="yard-horses">
              {horses.filter(h => h.team === 'green' && h.pos === -1).map(h => (
                <button
                  key={h.id}
                  className={`yard-horse-btn ${currentTurn === 'green' && hasRolled ? 'can-deploy' : ''}`}
                  onClick={() => handleHorseClick(h)}
                >
                  🐎
                </button>
              ))}
            </div>
          </div>

          <div className="ludo-corner-yard yard-yellow">
            <span className="yard-title">🟡 Chuồng Vàng</span>
            <div className="yard-horses">
              {horses.filter(h => h.team === 'yellow' && h.pos === -1).map(h => (
                <button
                  key={h.id}
                  className={`yard-horse-btn ${currentTurn === 'yellow' && hasRolled ? 'can-deploy' : ''}`}
                  onClick={() => handleHorseClick(h)}
                >
                  🐎
                </button>
              ))}
            </div>
          </div>

          <div className="ludo-corner-yard yard-blue">
            <span className="yard-title">🔵 Chuồng Xanh</span>
            <div className="yard-horses">
              {horses.filter(h => h.team === 'blue' && h.pos === -1).map(h => (
                <button
                  key={h.id}
                  className={`yard-horse-btn ${currentTurn === 'blue' && hasRolled ? 'can-deploy' : ''}`}
                  onClick={() => handleHorseClick(h)}
                >
                  🐎
                </button>
              ))}
            </div>
          </div>

          {/* ĐÍCH ĐẾN Ở TÂM BÀN CỜ */}
          <div className="ludo-center-finish">
            <span>🏁 ĐÍCH</span>
          </div>

          {/* CÁC Ô TRÊN ĐƯỜNG ĐUA 15x15 */}
          {Array(15).fill(0).map((_, r) => (
            <div key={r} className="ludo-board-row">
              {Array(15).fill(0).map((_, c) => {
                // Kiểm tra xem ô có thuộc 4 góc chuồng không
                const isCorner =
                  (r < 6 && c < 6) ||
                  (r < 6 && c > 8) ||
                  (r > 8 && c < 6) ||
                  (r > 8 && c > 8) ||
                  (r >= 6 && r <= 8 && c >= 6 && c <= 8);

                if (isCorner) {
                  return <div key={c} className="ludo-cell cell-invisible" />;
                }

                const horseOnCell = getHorseAt(r, c);
                const isRedStart = r === 6 && c === 1;
                const isGreenStart = r === 1 && c === 8;
                const isYellowStart = r === 8 && c === 13;
                const isBlueStart = r === 13 && c === 6;

                const isRedStair = r === 7 && c >= 1 && c <= 5;
                const isGreenStair = c === 7 && r >= 1 && r <= 5;
                const isYellowStair = r === 7 && c >= 9 && c <= 13;
                const isBlueStair = c === 7 && r >= 9 && r <= 13;

                return (
                  <div
                    key={c}
                    className={`ludo-cell ${isRedStart || isRedStair ? 'track-red' : ''} ${isGreenStart || isGreenStair ? 'track-green' : ''} ${isYellowStart || isYellowStair ? 'track-yellow' : ''} ${isBlueStart || isBlueStair ? 'track-blue' : ''}`}
                  >
                    {horseOnCell && (
                      <button
                        className={`board-horse-piece piece-${horseOnCell.team} ${hasRolled && horseOnCell.team === currentTurn ? 'can-move' : ''}`}
                        onClick={() => handleHorseClick(horseOnCell)}
                      >
                        🐎
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* BẢNG ĐIỀU KHIỂN XÚC XẮC THỰC TẾ BÊN CẠNH */}
        <div className="ludo-side-control">
          <div className={`ludo-dice-3d ${isRolling ? 'rolling' : ''}`} onClick={rollDice}>
            <span className="dice-number">{dice}</span>
            <span className="dice-pips">{'🎲'.repeat(1)}</span>
          </div>

          <button
            className="btn btn-primary dice-action-btn"
            onClick={rollDice}
            disabled={hasRolled || isRolling || !!winner}
          >
            {hasRolled ? '👉 Nhấp quân ngựa để đi' : '🎲 Lắc Xúc Xắc'}
          </button>

          <div className="ludo-guide-card">
            <h4>Luật chơi:</h4>
            <ul>
              <li>🎲 Lắc ra <strong>1</strong> hoặc <strong>6</strong>: Được xuất chuồng.</li>
              <li>⚡ Lắc ra <strong>6</strong>: Được thêm 1 lượt lắc.</li>
              <li>💥 <strong>Đá ngựa:</strong> Đi vào ô đối thủ sẽ đá họ về chuồng!</li>
              <li>🏁 Cả 2 ngựa về đích: <strong>Vô Địch</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
