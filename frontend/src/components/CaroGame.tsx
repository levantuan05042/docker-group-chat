import React, { useState, useEffect } from 'react';
import type { GameRoom, User } from '../types';
import { playSound, triggerConfetti } from '../utils/effects';

interface CaroGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info' | 'warning', msg: string) => void;
  room?: GameRoom | null;
  currentUser?: User | null;
  onSyncState?: (gameState: string) => void;
}

type Difficulty = 'normal' | 'hard' | 'nightmare';

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
  const vsAI = !room;
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  const [lastMove, setLastMove] = useState<[number, number] | null>(null);

  const isOnline = !!room;
  const isHost = isOnline && currentUser && room.hostUserId === currentUser.id;
  const myRole: 'X' | 'O' = isHost ? 'X' : 'O';
  const opponentName = isOnline
    ? (isHost ? (room.guestFullName || 'Đang chờ khách...') : room.hostFullName)
    : `Máy AI (${difficulty === 'normal' ? 'Bình Thường' : difficulty === 'hard' ? 'Khó' : 'Siêu Khó 🔥'})`;

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

  // Đánh giá thế cờ tại ô (r, c) cho bên 'player' (X hoặc O)
  const scoreLinePattern = (b: (string | null)[][], r: number, c: number, player: string) => {
    const directions = [
      [0, 1],  // Ngang
      [1, 0],  // Dọc
      [1, 1],  // Chéo xuống
      [1, -1]  // Chéo lên
    ];

    let totalScore = 0;
    let open3Count = 0;
    let fourCount = 0;

    for (const [dr, dc] of directions) {
      let count = 1; // Quân đặt tại (r, c)
      let openEnds = 0;

      // Hướng thuận
      let step = 1;
      while (step <= 4) {
        const nr = r + dr * step;
        const nc = c + dc * step;
        if (nr < 0 || nr >= BOARD_SIZE || nc < 0 || nc >= BOARD_SIZE) break;
        if (b[nr][nc] === player) {
          count++;
          step++;
        } else if (b[nr][nc] === null) {
          openEnds++;
          break;
        } else {
          break; // Bị chặn bởi đối thủ
        }
      }

      // Hướng nghịch
      step = 1;
      while (step <= 4) {
        const nr = r - dr * step;
        const nc = c - dc * step;
        if (nr < 0 || nr >= BOARD_SIZE || nc < 0 || nc >= BOARD_SIZE) break;
        if (b[nr][nc] === player) {
          count++;
          step++;
        } else if (b[nr][nc] === null) {
          openEnds++;
          break;
        } else {
          break; // Bị chặn bởi đối thủ
        }
      }

      // Điểm số theo mẫu hình chuẩn quốc tế
      if (count >= 5) {
        totalScore += 10000000; // Thắng ngay lập tức
      } else if (count === 4) {
        if (openEnds === 2) {
          totalScore += 2500000; // 4 mở 2 đầu (chắc chắn thắng)
          fourCount++;
        } else if (openEnds === 1) {
          totalScore += 200000;  // 4 chặn 1 đầu
          fourCount++;
        }
      } else if (count === 3) {
        if (openEnds === 2) {
          totalScore += 80000;   // Tam cúc mở (rất nguy hiểm)
          open3Count++;
        } else if (openEnds === 1) {
          totalScore += 4000;    // 3 chặn 1 đầu
        }
      } else if (count === 2) {
        if (openEnds === 2) {
          totalScore += 1500;
        } else if (openEnds === 1) {
          totalScore += 250;
        }
      }
    }

    // Đòn vồ đôi (Tạo 2 tam cúc mở hoặc 1 tam cúc + 1 tứ cúc) -> thế cờ tất sát
    if (open3Count >= 2 || (open3Count >= 1 && fourCount >= 1)) {
      totalScore += 1500000;
    }

    return totalScore;
  };

  // Tính điểm tổng hợp cho nước đi (r, c)
  const evaluateCell = (b: (string | null)[][], r: number, c: number, diff: Difficulty): number => {
    // 1. Điểm tấn công của Máy (O)
    b[r][c] = 'O';
    const attackScore = scoreLinePattern(b, r, c, 'O');
    b[r][c] = null;

    // 2. Điểm phòng thủ (chặn người chơi X)
    b[r][c] = 'X';
    const defenseScore = scoreLinePattern(b, r, c, 'X');
    b[r][c] = null;

    // Điểm vị trí trung tâm bàn cờ
    const distCenter = Math.abs(r - 7) + Math.abs(c - 7);
    const centerBonus = Math.max(0, 15 - distCenter) * 20;

    if (diff === 'normal') {
      // Bình thường: Tấn công vừa phải, phòng thủ cơ bản, ngẫu nhiên nhẹ
      const noise = Math.floor(Math.random() * 50);
      return attackScore * 0.9 + defenseScore * 0.8 + centerBonus + noise;
    }

    if (diff === 'hard') {
      // Khó: Đề cao phòng thủ, không bao giờ bỏ sót 4 hay 3 mở, chặn vồ đôi
      return attackScore * 1.0 + defenseScore * 1.15 + centerBonus;
    }

    // Siêu khó (Nightmare): Tấn công hung hãn, phòng thủ chặt chẽ
    return attackScore * 1.05 + defenseScore * 1.35 + centerBonus;
  };

  // Thuật toán AI theo 3 cấp độ
  const handleAIMove = (currentBoard: (string | null)[][]) => {
    // Tìm các ô trống có quân xung quanh (bán kính 2 ô) để tối ưu hiệu năng
    const candidates: { r: number; c: number; score: number }[] = [];

    let hasAnyMove = false;
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (currentBoard[r][c]) {
          hasAnyMove = true;
          break;
        }
      }
      if (hasAnyMove) break;
    }

    // Nếu bàn cờ trống, đánh luôn giữa bàn (7, 7)
    if (!hasAnyMove) {
      makeAIMoveTo(7, 7, currentBoard);
      return;
    }

    // Quét các ô lân cận các quân đã đánh
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (!currentBoard[r][c]) {
          // Kiểm tra xem có quân trong phạm vi 2 ô không
          let near = false;
          for (let dr = -2; dr <= 2 && !near; dr++) {
            for (let dc = -2; dc <= 2 && !near; dc++) {
              const nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < BOARD_SIZE && nc >= 0 && nc < BOARD_SIZE && currentBoard[nr][nc]) {
                near = true;
              }
            }
          }
          if (near) {
            const score = evaluateCell(currentBoard, r, c, difficulty);
            candidates.push({ r, c, score });
          }
        }
      }
    }

    if (candidates.length === 0) {
      makeAIMoveTo(7, 7, currentBoard);
      return;
    }

    // Sắp xếp các nước đi tốt nhất giảm dần
    candidates.sort((a, b) => b.score - a.score);

    // Xử lý theo từng cấp độ
    let chosen = candidates[0];

    if (difficulty === 'normal') {
      // Bình thường: 75% chọn nước tốt nhất, 25% chọn nước thứ 2 hoặc 3 để người chơi dễ thở
      if (candidates.length > 2 && Math.random() < 0.25) {
        chosen = candidates[Math.floor(Math.random() * Math.min(3, candidates.length))];
      }
    } else if (difficulty === 'nightmare') {
      // SIÊU KHÓ: Minimax 2 bước (Lookahead 2-ply) cho top 6 nước đi xuất sắc nhất
      let bestMinimaxScore = -Infinity;
      const topCandidates = candidates.slice(0, 6);

      for (const cand of topCandidates) {
        // Thử AI đi ô này
        currentBoard[cand.r][cand.c] = 'O';

        // Nếu nước này AI thắng luôn -> chọn ngay lập tức
        if (checkWin(currentBoard, cand.r, cand.c, 'O')) {
          currentBoard[cand.r][cand.c] = null;
          chosen = cand;
          break;
        }

        // Tìm nước đáp trả mạnh nhất của người chơi X
        let playerBestReply = 0;
        for (let r = 0; r < BOARD_SIZE; r++) {
          for (let c = 0; c < BOARD_SIZE; c++) {
            if (!currentBoard[r][c]) {
              currentBoard[r][c] = 'X';
              const pScore = scoreLinePattern(currentBoard, r, c, 'X');
              currentBoard[r][c] = null;
              if (pScore > playerBestReply) playerBestReply = pScore;
            }
          }
        }

        currentBoard[cand.r][cand.c] = null;

        // Điểm Minimax = Điểm của AI - Nước phản công nguy hiểm nhất của đối thủ
        const minimaxScore = cand.score - playerBestReply * 0.9;
        if (minimaxScore > bestMinimaxScore) {
          bestMinimaxScore = minimaxScore;
          chosen = cand;
        }
      }
    }

    makeAIMoveTo(chosen.r, chosen.c, currentBoard);
  };

  const makeAIMoveTo = (ar: number, ac: number, currentBoard: (string | null)[][]) => {
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
      showToast('error', `Máy (${difficulty.toUpperCase()}) đã chiến thắng! Hãy cố gắng ở ván sau! 💪`);
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
      const bonusScore = difficulty === 'nightmare' ? 80 : difficulty === 'hard' ? 50 : 30;
      showToast('success', `🎉 Chúc mừng! Người chơi [${currentMark}] đã chiến thắng ván cờ! (+${bonusScore} điểm)`);
      onWin('Cờ Ca-ro', bonusScore);
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
      const thinkTime = difficulty === 'nightmare' ? 450 : difficulty === 'hard' ? 300 : 200;
      setTimeout(() => handleAIMove(newBoard), thinkTime);
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
      {/* 1. THẺ ĐỐI THỦ PHÍA TRÊN */}
      <div className="player-strip opponent-strip">
        <div className="player-meta">
          <span className="player-avatar">{isOnline ? '👤' : '🤖'}</span>
          <div className="player-details">
            <span className="player-name">{opponentName}</span>
            <span className="player-role">
              {isOnline ? (isHost ? 'Quân O (Đi sau)' : 'Quân X (Đi trước)') : `Quân O • ${difficulty === 'normal' ? '🟢 Bình thường' : difficulty === 'hard' ? '🟡 Khó' : '🔴 Siêu khó 🔥'}`}
            </span>
          </div>
        </div>

        <div className="player-status-badge">
          {winner ? (
            winner === (isHost ? 'O' : 'X') ? (
              <span className="status-badge status-winner">👑 CHIẾN THẮNG</span>
            ) : (
              <span className="status-badge status-loser">THUA CUỘC</span>
            )
          ) : (
            <span className={`status-badge ${!isMyTurn ? 'status-active' : 'status-waiting'}`}>
              {!isMyTurn ? '🎯 LƯỢT ĐI' : '⏳ ĐANG ĐỢI'}
            </span>
          )}
        </div>
      </div>

      {/* THÔNG BÁO HƯỚNG DẪN KHI CHƠI ONLINE */}
      {isOnline && !room?.guestUserId && (
        <div className="online-wait-alert">
          📢 <strong>Phòng đấu đang mở!</strong> Đang chờ đối thủ vào phòng... Hãy chia sẻ mã <code>{room.roomCode}</code> hoặc bấm <strong>"Mời Bạn"</strong> để bắt đầu trận đấu!
        </div>
      )}

      <div className="caro-board-wood">
        <div className="caro-grid">
          {board.map((row, r) => (
            <div key={r} className="caro-row">
              {row.map((cell, c) => {
                const isWinCell = winLine.some(([wr, wc]) => wr === r && wc === c);
                const isLast = lastMove && lastMove[0] === r && lastMove[1] === c;
                const isStar = (r === 3 && c === 3) || (r === 3 && c === 11) || (r === 7 && c === 7) || (r === 11 && c === 3) || (r === 11 && c === 11);
                return (
                  <button
                    key={c}
                    className={`caro-cell ${cell ? 'filled' : ''} ${isWinCell ? 'win-cell' : ''} ${isLast ? 'last-move' : ''}`}
                    onClick={() => handleClick(r, c)}
                    disabled={!!cell || !!winner || (isOnline ? !isMyTurn : (vsAI && turn === 'O'))}
                  >
                    {isStar && !cell && <span className="caro-star-point" />}
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

      {/* 3. THẺ BẠN PHÍA DƯỚI & ĐIỀU KHIỂN */}
      <div className="player-strip user-strip">
        <div className="player-meta">
          <span className="player-avatar">{currentUser?.avatar || '🎮'}</span>
          <div className="player-details">
            <span className="player-name">{currentUser?.fullName || currentUser?.username || 'Bạn'}</span>
            <span className="player-role">
              {isOnline ? (isHost ? 'Quân X (Đi trước)' : 'Quân O (Đi sau)') : 'Quân X (Đi trước)'}
            </span>
          </div>
        </div>

        <div className="user-center-status">
          {winner ? (
            winner === (isHost ? 'X' : 'O') ? (
              <span className="status-badge status-winner">👑 BẠN THẮNG!</span>
            ) : (
              <span className="status-badge status-loser">BẠN THUA</span>
            )
          ) : (
            <span className={`status-badge ${isMyTurn ? 'status-active' : 'status-waiting'}`}>
              {isMyTurn ? '🎯 LƯỢT CỦA BẠN' : '⏳ CHỜ ĐỐI THỦ...'}
            </span>
          )}
        </div>

        <div className="strip-controls">
          {!isOnline && vsAI && (
            <div className="difficulty-segmented">
              <button
                className={`diff-btn diff-normal ${difficulty === 'normal' ? 'active' : ''}`}
                onClick={() => { setDifficulty('normal'); showToast('info', 'Đã chọn: 🟢 Bình thường'); }}
                title="Bình thường"
              >
                Bình thường
              </button>
              <button
                className={`diff-btn diff-hard ${difficulty === 'hard' ? 'active' : ''}`}
                onClick={() => { setDifficulty('hard'); showToast('info', 'Đã chọn: 🟡 Khó'); }}
                title="Khó"
              >
                Khó
              </button>
              <button
                className={`diff-btn diff-nightmare ${difficulty === 'nightmare' ? 'active' : ''}`}
                onClick={() => { setDifficulty('nightmare'); showToast('warning', 'Đã chọn: 🔴 Siêu khó 🔥'); }}
                title="Siêu khó 🔥"
              >
                Siêu khó 🔥
              </button>
            </div>
          )}

          <button className="btn btn-primary btn-sm" onClick={resetGame} title="Ván mới">
            🔄 Ván Mới
          </button>
        </div>
      </div>
    </div>
  );
};
