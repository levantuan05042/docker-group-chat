import React, { useState, useEffect } from 'react';
import type { GameRoom, User } from '../types';
import { playSound, triggerConfetti } from '../utils/effects';

interface CaroGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info', msg: string) => void;
  room?: GameRoom | null;
  currentUser?: User | null;
  onSyncState?: (gameState: string) => void;
}

const BOARD_SIZE = 15;

export const CaroGame: React.FC<CaroGameProps> = ({
  onWin,
  showToast,
  room,
  currentUser,
  onSyncState
}) => {
  const [board, setBoard] = useState<(string | null)[][]>(() =>
    Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null))
  );
  const [turn, setTurn] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<string | null>(null);
  const [winLine, setWinLine] = useState<[number, number][]>([]);
  const [vsAI, setVsAI] = useState<boolean>(!room);
  const [lastMove, setLastMove] = useState<[number, number] | null>(null);

  const isOnline = !!room;
  const isHost = isOnline && currentUser && room.hostUserId === currentUser.id;
  const myRole: 'X' | 'O' = isHost ? 'X' : 'O';
  const opponentName = isOnline
    ? (isHost ? (room.guestFullName || 'Đang chờ khách...') : room.hostFullName)
    : 'Máy (AI)';

  const isMyTurn = !isOnline || (turn === myRole && (isHost ? !!room?.guestUserId : true));

  // Đồng bộ trạng thái từ Server khi chơi Online
  useEffect(() => {
    if (!room?.gameState) return;
    try {
      const state = JSON.parse(room.gameState);
      if (state.board) setBoard(state.board);
      if (state.turn) setTurn(state.turn);
      if (state.lastMove) setLastMove(state.lastMove);
      if (state.winLine) setWinLine(state.winLine);
      if (state.winner) setWinner(state.winner);
    } catch (e) {
      console.error('Lỗi phân tích gameState phòng:', e);
    }
  }, [room?.gameState]);

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

    if (isOnline) {
      if (!room.guestUserId) {
        showToast('info', '⏳ Đang chờ người chơi khác vào phòng! Bạn chưa thể đánh cờ.');
        return;
      }
      if (!isMyTurn) {
        showToast('info', `⏳ Chưa đến lượt bạn! Hãy đợi đối thủ (${opponentName}) đi nước cờ.`);
        return;
      }
    }

    const currentMark = isOnline ? myRole : turn;
    const nextMark = currentMark === 'X' ? 'O' : 'X';

    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = currentMark;
    setBoard(newBoard);
    setLastMove([r, c]);
    playSound('move');

    const winningLine = checkWin(newBoard, r, c, currentMark);
    let winResult: string | null = null;

    if (winningLine) {
      winResult = currentMark;
      setWinner(winResult);
      setWinLine(winningLine);
      playSound('win');
      triggerConfetti();
      showToast('success', `🎉 Chúc mừng! Người chơi [${currentMark}] đã chiến thắng ván cờ!`);
      onWin('Cờ Ca-ro', 40);
    } else {
      setTurn(nextMark);
    }

    // Gửi đồng bộ lên máy đối thủ qua Server
    if (isOnline && onSyncState) {
      onSyncState(
        JSON.stringify({
          board: newBoard,
          turn: winResult ? currentMark : nextMark,
          lastMove: [r, c],
          winLine: winningLine || [],
          winner: winResult
        })
      );
      return;
    }

    // Nếu chơi solo offline với AI
    if (!isOnline && vsAI && currentMark === 'X' && !winningLine) {
      setTurn('O');
      setTimeout(() => handleAIMove(newBoard), 300);
    }
  };

  const resetGame = () => {
    const emptyBoard = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));
    setBoard(emptyBoard);
    setTurn('X');
    setWinner(null);
    setWinLine([]);
    setLastMove(null);
    playSound('click');

    if (isOnline && onSyncState) {
      onSyncState(
        JSON.stringify({
          board: emptyBoard,
          turn: 'X',
          lastMove: null,
          winLine: [],
          winner: null
        })
      );
    }
  };

  return (
    <div className="game-wrapper caro-container">
      {/* THANH TRẠNG THÁI RÕ RÀNG */}
      <div className="game-top-bar">
        <div className="game-status-badge">
          {winner ? (
            <span className="win-announce">🏆 Thắng cuộc: <strong>{winner}</strong></span>
          ) : isOnline ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>
                Bạn: <strong style={{ color: myRole === 'X' ? '#38bdf8' : '#f87171' }}>{myRole === 'X' ? 'Quân X (Đi trước)' : 'Quân O (Đi sau)'}</strong>
              </span>
              <span className={`turn-pill ${isMyTurn ? 'turn-mine' : 'turn-wait'}`}>
                {isMyTurn ? '🎯 LƯỢT CỦA BẠN' : `⏳ ĐỐI THỦ ĐANG NGHĨ...`}
              </span>
            </div>
          ) : (
            <span>
              Lượt đi: <strong style={{ color: turn === 'X' ? '#38bdf8' : '#f87171' }}>{turn}</strong>{' '}
              {vsAI && turn === 'O' && '(Máy đang suy nghĩ...)'}
            </span>
          )}
        </div>

        <div className="game-actions">
          {!isOnline && (
            <button className={`mode-toggle ${vsAI ? 'active' : ''}`} onClick={() => { setVsAI(!vsAI); resetGame(); }}>
              {vsAI ? '🤖 Đấu với Máy' : '👥 Đấu 2 Người'}
            </button>
          )}
          <button className="reset-btn" onClick={resetGame}>🔄 Ván mới</button>
        </div>
      </div>

      {/* THÔNG BÁO HƯỚNG DẪN KHI CHƠI ONLINE */}
      {isOnline && !room?.guestUserId && (
        <div className="online-wait-alert">
          📢 <strong>Phòng đấu đang mở!</strong> Đang chờ đối thủ vào phòng... Hãy chia sẻ mã <code>{room.roomCode}</code> hoặc bấm <strong>"Mời Vào Chat"</strong> để bắt đầu trận đấu!
        </div>
      )}

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
                    disabled={!!cell || !!winner || (isOnline ? !isMyTurn : (vsAI && turn === 'O'))}
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
