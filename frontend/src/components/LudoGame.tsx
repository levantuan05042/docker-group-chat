import React, { useState } from 'react';
import { playSound, triggerConfetti } from '../utils/effects';

interface LudoGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info', msg: string) => void;
}

type Team = 'red' | 'blue' | 'green' | 'yellow';

interface Horse {
  id: number;
  team: Team;
  step: number; // -1: trong chuồng, 0..51: trên đường đua, 52..56: về đích
}


const TEAM_NAMES: Record<Team, { name: string; color: string; icon: string }> = {
  red: { name: 'Đội Đỏ', color: '#ef4444', icon: '🔴' },
  blue: { name: 'Đội Xanh', color: '#3b82f6', icon: '🔵' },
  green: { name: 'Đội Lá', color: '#10b981', icon: '🟢' },
  yellow: { name: 'Đội Vàng', color: '#f59e0b', icon: '🟡' }
};

export const LudoGame: React.FC<LudoGameProps> = ({ onWin, showToast }) => {
  const [dice, setDice] = useState<number>(6);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [currentTurn, setCurrentTurn] = useState<Team>('red');
  const [canRoll, setCanRoll] = useState<boolean>(true);
  const [hasRolled, setHasRolled] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

  // 2 quân ngựa cho mỗi đội (đơn giản, nhanh, vui nhộn)
  const [horses, setHorses] = useState<Horse[]>([
    { id: 1, team: 'red', step: -1 },
    { id: 2, team: 'red', step: -1 },
    { id: 3, team: 'blue', step: -1 },
    { id: 4, team: 'blue', step: -1 },
    { id: 5, team: 'green', step: -1 },
    { id: 6, team: 'green', step: -1 },
    { id: 7, team: 'yellow', step: -1 },
    { id: 8, team: 'yellow', step: -1 },
  ]);

  const teams: Team[] = ['red', 'blue', 'green', 'yellow'];

  const rollDice = () => {
    if (!canRoll || isRolling || winner) return;

    setIsRolling(true);
    playSound('dice');

    let rolls = 0;
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 6) + 1;
      setDice(rand);
      rolls++;
      if (rolls > 8) {
        clearInterval(interval);
        const finalVal = Math.floor(Math.random() * 6) + 1;
        setDice(finalVal);
        setIsRolling(false);
        setCanRoll(false);
        setHasRolled(true);

        // Kiểm tra xem đội hiện tại có nước đi hợp lệ nào không
        const currentHorses = horses.filter(h => h.team === currentTurn);
        const canDeploy = finalVal === 6 || finalVal === 1;
        const hasMovableHorse = currentHorses.some(h => (h.step === -1 && canDeploy) || (h.step >= 0 && h.step < 56));

        if (!hasMovableHorse) {
          showToast('info', `${TEAM_NAMES[currentTurn].name} không có nước đi phù hợp! Chuyển lượt.`);
          setTimeout(nextTurn, 1000);
        }
      }
    }, 60);
  };

  const moveHorse = (horse: Horse) => {
    if (!hasRolled || horse.team !== currentTurn || winner) return;

    const canDeploy = dice === 6 || dice === 1;

    // Xuất chuồng
    if (horse.step === -1) {
      if (!canDeploy) {
        playSound('error');
        showToast('error', 'Cần lắc được 1 hoặc 6 để xuất chuồng!');
        return;
      }
      const updated = horses.map(h => h.id === horse.id ? { ...h, step: 0 } : h);
      setHorses(updated);
      playSound('move');
      showToast('success', `${TEAM_NAMES[currentTurn].name} đã xuất chuồng một chú ngựa chiến! 🐎`);
      finishMove(dice === 6);
      return;
    }

    // Di chuyển trên đường đua
    const nextStep = horse.step + dice;
    if (nextStep > 56) {
      playSound('error');
      showToast('error', 'Số bước vượt quá đích! Không thể đi.');
      return;
    }

    // Kiểm tra đá ngựa đối thủ
    let kickedOpponent = false;
    const updated = horses.map(h => {
      if (h.id === horse.id) {
        return { ...h, step: nextStep };
      }
      // Nếu ô trùng và khác đội -> đá về chuồng
      if (h.team !== horse.team && h.step === nextStep && nextStep < 52) {
        kickedOpponent = true;
        return { ...h, step: -1 };
      }
      return h;
    });

    setHorses(updated);

    if (kickedOpponent) {
      playSound('capture');
      showToast('success', `💥 Tuyệt vời! ${TEAM_NAMES[currentTurn].name} đã ĐÁ NGỰA đối thủ văng về chuồng!`);
    } else {
      playSound('move');
    }

    // Kiểm tra về đích
    if (nextStep >= 56) {
      const myFinished = updated.filter(h => h.team === currentTurn && h.step >= 56);
      if (myFinished.length >= 2) {
        setWinner(TEAM_NAMES[currentTurn].name);
        playSound('win');
        triggerConfetti();
        showToast('success', `🎉 VÔ ĐỊCH! ${TEAM_NAMES[currentTurn].name} đã đưa toàn bộ ngựa về đích an toàn!`);
        onWin('Cờ Cá Ngựa', 60);
        return;
      }
    }

    finishMove(dice === 6);
  };

  const finishMove = (bonusRoll: boolean) => {
    if (bonusRoll) {
      showToast('info', 'Lắc được 6! Bạn được thêm 1 lượt lắc tiếp theo! 🎲');
      setCanRoll(true);
      setHasRolled(false);
    } else {
      nextTurn();
    }
  };

  const nextTurn = () => {
    const curIdx = teams.indexOf(currentTurn);
    const nxt = teams[(curIdx + 1) % teams.length];
    setCurrentTurn(nxt);
    setCanRoll(true);
    setHasRolled(false);
  };

  const resetGame = () => {
    setHorses([
      { id: 1, team: 'red', step: -1 },
      { id: 2, team: 'red', step: -1 },
      { id: 3, team: 'blue', step: -1 },
      { id: 4, team: 'blue', step: -1 },
      { id: 5, team: 'green', step: -1 },
      { id: 6, team: 'green', step: -1 },
      { id: 7, team: 'yellow', step: -1 },
      { id: 8, team: 'yellow', step: -1 },
    ]);
    setCurrentTurn('red');
    setCanRoll(true);
    setHasRolled(false);
    setWinner(null);
    playSound('click');
  };

  return (
    <div className="game-wrapper ludo-container">
      <div className="game-top-bar">
        <div className="game-status-badge">
          {winner ? (
            <span className="win-announce">🏆 Đội Chiến Thắng: <strong>{winner}</strong></span>
          ) : (
            <span>Đang đến lượt: <strong style={{ color: TEAM_NAMES[currentTurn].color }}>{TEAM_NAMES[currentTurn].name} {TEAM_NAMES[currentTurn].icon}</strong></span>
          )}
        </div>

        <div className="game-actions">
          <button className="reset-btn" onClick={resetGame}>🔄 Ván mới</button>
        </div>
      </div>

      {/* Control Lắc Xúc Xắc */}
      <div className="ludo-control-box">
        <button
          className={`dice-btn ${isRolling ? 'rolling' : ''}`}
          onClick={rollDice}
          disabled={!canRoll || isRolling || !!winner}
        >
          <span className="dice-val">🎲 {dice}</span>
          <span className="dice-lbl">{canRoll ? 'Nhấn để Lắc Xúc Xắc' : 'Hãy chọn một quân ngựa để di chuyển'}</span>
        </button>
      </div>

      {/* 4 Chuồng Ngựa */}
      <div className="ludo-stables-grid">
        {teams.map(t => {
          const tInfo = TEAM_NAMES[t];
          const teamHorses = horses.filter(h => h.team === t);
          const isTurn = currentTurn === t;

          return (
            <div key={t} className={`stable-card stable-${t} ${isTurn ? 'turn-active' : ''}`}>
              <div className="stable-header">
                <h4>{tInfo.icon} {tInfo.name}</h4>
                {isTurn && <span className="turn-tag">ĐANG ĐẾN LƯỢT</span>}
              </div>

              <div className="horses-row">
                {teamHorses.map(h => (
                  <button
                    key={h.id}
                    className={`horse-btn ${h.step === -1 ? 'in-stable' : h.step >= 56 ? 'finished' : 'racing'} ${hasRolled && isTurn ? 'clickable' : ''}`}
                    onClick={() => moveHorse(h)}
                    disabled={!hasRolled || !isTurn}
                  >
                    <span className="horse-icon">🐎</span>
                    <span className="horse-pos">
                      {h.step === -1 ? 'Trong Chuồng' : h.step >= 56 ? 'Đã Về Đích 🏁' : `Ô ${h.step}/56`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
