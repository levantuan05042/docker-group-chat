import React, { useState, useEffect, useCallback } from 'react';
import { playSound, triggerConfetti } from '../utils/effects';

interface Game2048Props {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info', msg: string) => void;
}

export const Game2048: React.FC<Game2048Props> = ({ onWin, showToast }) => {
  const [board, setBoard] = useState<number[][]>(() => initBoard());
  const [score, setScore] = useState<number>(0);
  const [won, setWon] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  function initBoard(): number[][] {
    const b = Array(4).fill(0).map(() => Array(4).fill(0));
    addRandom(b);
    addRandom(b);
    return b;
  }

  function addRandom(b: number[][]) {
    const empty: [number, number][] = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (b[r][c] === 0) empty.push([r, c]);
      }
    }
    if (empty.length > 0) {
      const [r, c] = empty[Math.floor(Math.random() * empty.length)];
      b[r][c] = Math.random() < 0.9 ? 2 : 4;
    }
  }

  const slideRow = (row: number[]): { newRow: number[]; addedScore: number } => {
    const filtered = row.filter(x => x !== 0);
    const res: number[] = [];
    let addedScore = 0;

    for (let i = 0; i < filtered.length; i++) {
      if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
        const merged = filtered[i] * 2;
        res.push(merged);
        addedScore += merged;
        i++;
      } else {
        res.push(filtered[i]);
      }
    }

    while (res.length < 4) res.push(0);
    return { newRow: res, addedScore };
  };

  const move = useCallback((direction: 'left' | 'right' | 'up' | 'down') => {
    if (gameOver) return;

    let changed = false;
    let earned = 0;
    const newBoard = board.map(row => [...row]);

    if (direction === 'left') {
      for (let r = 0; r < 4; r++) {
        const { newRow, addedScore } = slideRow(newBoard[r]);
        if (newRow.some((v, c) => v !== newBoard[r][c])) changed = true;
        newBoard[r] = newRow;
        earned += addedScore;
      }
    } else if (direction === 'right') {
      for (let r = 0; r < 4; r++) {
        const rev = [...newBoard[r]].reverse();
        const { newRow, addedScore } = slideRow(rev);
        const normal = newRow.reverse();
        if (normal.some((v, c) => v !== newBoard[r][c])) changed = true;
        newBoard[r] = normal;
        earned += addedScore;
      }
    } else if (direction === 'up') {
      for (let c = 0; c < 4; c++) {
        const col = [newBoard[0][c], newBoard[1][c], newBoard[2][c], newBoard[3][c]];
        const { newRow, addedScore } = slideRow(col);
        for (let r = 0; r < 4; r++) {
          if (newBoard[r][c] !== newRow[r]) changed = true;
          newBoard[r][c] = newRow[r];
        }
        earned += addedScore;
      }
    } else if (direction === 'down') {
      for (let c = 0; c < 4; c++) {
        const col = [newBoard[3][c], newBoard[2][c], newBoard[1][c], newBoard[0][c]];
        const { newRow, addedScore } = slideRow(col);
        newRow.reverse();
        for (let r = 0; r < 4; r++) {
          if (newBoard[r][c] !== newRow[r]) changed = true;
          newBoard[r][c] = newRow[r];
        }
        earned += addedScore;
      }
    }

    if (changed) {
      addRandom(newBoard);
      setBoard(newBoard);
      setScore(prev => prev + earned);
      playSound('move');

      // Kiểm tra 2048
      if (!won && newBoard.some(row => row.some(cell => cell >= 2048))) {
        setWon(true);
        playSound('win');
        triggerConfetti();
        showToast('success', '🏆 XUẤT SẮC! Bạn đã ghép thành công ô 2048!');
        onWin('2048 Arcade', 100);
      }
    }
  }, [board, gameOver, won, onWin, showToast]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) { e.preventDefault(); move('up'); }
      if (['ArrowDown', 'KeyS'].includes(e.code)) { e.preventDefault(); move('down'); }
      if (['ArrowLeft', 'KeyA'].includes(e.code)) { e.preventDefault(); move('left'); }
      if (['ArrowRight', 'KeyD'].includes(e.code)) { e.preventDefault(); move('right'); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [move]);

  const resetGame = () => {
    setBoard(initBoard());
    setScore(0);
    setWon(false);
    setGameOver(false);
    playSound('click');
  };

  return (
    <div className="game-wrapper game2048-container">
      <div className="game-top-bar">
        <div className="game-status-badge">
          <span>Điểm số: <strong style={{ color: '#f59e0b', fontSize: '18px' }}>{score}</strong></span>
        </div>

        <div className="game-actions">
          <button className="reset-btn" onClick={resetGame}>🔄 Chơi lại</button>
        </div>
      </div>

      <div className="grid-2048">
        {board.map((row, r) => (
          <div key={r} className="row-2048">
            {row.map((cell, c) => (
              <div key={c} className={`cell-2048 tile-${cell}`}>
                {cell > 0 ? cell : ''}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Điều khiển trên màn hình cho Mobile / Chuột */}
      <div className="controls-2048">
        <button className="arrow-btn" onClick={() => move('up')}>⬆️</button>
        <div className="arrow-h">
          <button className="arrow-btn" onClick={() => move('left')}>⬅️</button>
          <button className="arrow-btn" onClick={() => move('down')}>⬇️</button>
          <button className="arrow-btn" onClick={() => move('right')}>➡️</button>
        </div>
        <p className="hint-text">Dùng các phím Mũi tên (hoặc W, A, S, D) để trượt số</p>
      </div>
    </div>
  );
};
