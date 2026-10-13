import React, { useState } from 'react';
import { playSound, triggerConfetti } from '../utils/effects';

interface CaroGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info', msg: string) => void;
}

const BOARD_SIZE = 15;

export const CaroGame: React.FC<CaroGameProps> = ({ onWin, showToast }) => {
  const [board, setBoard] = useState<(string | null)[][]>(() =>
    Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null))
  );
  const [turn, setTurn] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<string | null>(null);
  const [winLine, setWinLine] = useState<[number, number][]>([]);
  const [vsAI, setVsAI] = useState<boolean>(true);
  const [lastMove, setLastMove] = useState<[number, number] | null>(null);

  const checkWin = (b: (string | null)[][], r: number, c: number, p: string): [number, number][] | null => {
    const directions = [
      [[0, 1], [0, -1]], // Ngang
      [[1, 0], [-1, 0]], // Dọc
      [[1, 1], [-1, -1]], // Chéo chính
      [[1, -1], [-1, 1]]  // Chéo phụ
    ];

    for (const dir of directions) {
      const line: [number, number][] = [[r, c]];
      for (const [dr, dc] of dir) {
        let nr = r + dr;
        let nc = c + dc;
        while (nr >= 0 && nr < BOARD_SIZE && nc >= 0 && nc < BOARD_SIZE && b[nr][nc] === p) {
          line.push([nr, nc]);
          nr += dr;
          nc += dc;
        }
      }
      if (line.length >= 5) return line;
    }
    return null;
  };

  const handleAIMove = (currentBoard: (string | null)[][]) => {
    // Simple heuristic AI
    let bestScore = -1;
    let bestMove: [number, number] = [7, 7];

    const evaluatePos = (r: number, c: number): number => {
      let score = 0;
      const dirs = [[0, 1], [1, 0], [1, 1], [1, -1]];
      for (const [dr, dc] of dirs) {
        let oCount = 0;
        let xCount = 0;
        for (let i = -4; i <= 4; i++) {
          const nr = r + dr * i;
          const nc = c + dc * i;
          if (nr >= 0 && nr < BOARD_SIZE && nc >= 0 && nc < BOARD_SIZE) {
            if (currentBoard[nr][nc] === 'O') oCount++;
            if (currentBoard[nr][nc] === 'X') xCount++;
          }
        }
        score += oCount * 12 + xCount * 10;
      }
      return score + Math.floor(Math.random() * 5);
    };

    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (!currentBoard[r][c]) {
          const s = evaluatePos(r, c);
          if (s > bestScore) {
            bestScore = s;
            bestMove = [r, c];
          }
        }
      }
    }

    const [ar, ac] = bestMove;
    const newBoard = currentBoard.map(row => [...row]);
    newBoard[ar][ac] = 'O';
    setBoard(newBoard);
    setLastMove([ar, ac]);
    playSound('move');

    const winningLine = checkWin(newBoard, ar, ac, 'O');
    if (winningLine) {
      setWinner('O (Máy)');
      setWinLine(winningLine);
      playSound('error');
      showToast('error', 'Máy (O) đã chiến thắng! Hãy thử lại ván mới.');
    } else {
      setTurn('X');
    }
  };

  const handleClick = (r: number, c: number) => {
    if (board[r][c] || winner) return;

    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = turn;
    setBoard(newBoard);
    setLastMove([r, c]);
    playSound('move');

    const winningLine = checkWin(newBoard, r, c, turn);
    if (winningLine) {
      setWinner(turn);
      setWinLine(winningLine);
      playSound('win');
      triggerConfetti();
      showToast('success', `🎉 Chúc mừng! Người chơi ${turn} đã chiến thắng 5 ô liên tiếp!`);
      if (turn === 'X' || !vsAI) {
        onWin('Cờ Ca-ro', 30);
      }
      return;
    }

    if (vsAI && turn === 'X') {
      setTurn('O');
      setTimeout(() => handleAIMove(newBoard), 300);
    } else {
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null)));
    setTurn('X');
    setWinner(null);
    setWinLine([]);
    setLastMove(null);
    playSound('click');
  };

  return (
    <div className="game-wrapper caro-container">
      <div className="game-top-bar">
        <div className="game-status-badge">
          {winner ? (
            <span className="win-announce">🏆 Người thắng: <strong>{winner}</strong></span>
          ) : (
            <span>Lượt đi: <strong style={{ color: turn === 'X' ? '#38bdf8' : '#f87171' }}>{turn}</strong> {vsAI && turn === 'O' && '(Máy đang suy nghĩ...)'}</span>
          )}
        </div>

        <div className="game-actions">
          <button className={`mode-toggle ${vsAI ? 'active' : ''}`} onClick={() => { setVsAI(!vsAI); resetGame(); }}>
            {vsAI ? '🤖 Đấu với Máy' : '👥 Đấu 2 Người'}
          </button>
          <button className="reset-btn" onClick={resetGame}>🔄 Ván mới</button>
        </div>
      </div>

      <div className="caro-board-wood">
        <div className="caro-grid">
          {board.map((row, r) => (
            <div key={r} className="caro-row">
              {row.map((cell, c) => {
                const isWinCell = winLine.some(([wr, wc]) => wr === r && wc === c);
                const isLast = lastMove && lastMove[0] === r && lastMove[1] === c;
                return (
                  <button
                    key={c}
                    className={`caro-cell ${cell ? 'filled' : ''} ${isWinCell ? 'win-cell' : ''} ${isLast ? 'last-move' : ''}`}
                    onClick={() => handleClick(r, c)}
                    disabled={!!cell || !!winner || (vsAI && turn === 'O')}
                  >
                    {cell && (
                      <span className={`mark mark-${cell.toLowerCase()}`}>
                        {cell}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
