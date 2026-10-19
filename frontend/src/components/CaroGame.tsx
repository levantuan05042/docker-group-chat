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

  // Phân tích toàn diện các mẫu hình Gomoku theo chuẩn thi đấu quốc tế
  const evaluatePatternsAt = (
    b: (string | null)[][],
    r: number,
    c: number,
    player: string
  ): {
    wins: number;
    open4: number;
    closed4: number;
    open3: number;
    closed3: number;
    open2: number;
    score: number;
  } => {
    const directions = [
      [0, 1],   // Ngang
      [1, 0],   // Dọc
      [1, 1],   // Chéo chính
      [1, -1]   // Chéo phụ
    ];

    let wins = 0;
    let open4 = 0;
    let closed4 = 0;
    let open3 = 0;
    let closed3 = 0;
    let open2 = 0;

    // Tạm thời đặt quân tại (r, c) để quét
    const prevVal = b[r][c];
    b[r][c] = player;

    for (const [dr, dc] of directions) {
      // Trích xuất chuỗi 9 ô đối xứng qua (r, c): từ step -4 đến +4 (tâm là vị trí 4)
      const line: (string | null)[] = [];
      for (let step = -4; step <= 4; step++) {
        const nr = r + dr * step;
        const nc = c + dc * step;
        if (nr < 0 || nr >= BOARD_SIZE || nc < 0 || nc >= BOARD_SIZE) {
          line.push('WALL');
        } else {
          line.push(b[nr][nc]);
        }
      }

      // Đếm số quân liên tiếp chứa tâm (vị trí 4)
      let consecutive = 1;
      let left = 3;
      while (left >= 0 && line[left] === player) {
        consecutive++;
        left--;
      }
      let right = 5;
      while (right <= 8 && line[right] === player) {
        consecutive++;
        right++;
      }

      const leftOpen = left >= 0 && line[left] === null;
      const rightOpen = right <= 8 && line[right] === null;

      if (consecutive >= 5) {
        wins++;
      } else if (consecutive === 4) {
        if (leftOpen && rightOpen) {
          open4++;
        } else if (leftOpen || rightOpen) {
          closed4++;
        }
      } else if (consecutive === 3) {
        if (leftOpen && rightOpen) {
          // Kiểm tra xem có thể mở rộng thành 4 mở không
          const leftExtendedOpen = left > 0 && line[left - 1] === null;
          const rightExtendedOpen = right < 8 && line[right + 1] === null;
          if (leftExtendedOpen || rightExtendedOpen) {
            open3++;
          } else {
            closed3++;
          }
        } else if (leftOpen || rightOpen) {
          closed3++;
        }
      } else if (consecutive === 2) {
        if (leftOpen && rightOpen) {
          open2++;
        }
      }

      // Quét các mẫu hình có lỗ hổng (Broken 4: X.XXX, XX.XX, XXX.X)
      // Quét tất cả cửa sổ 5 ô chứa tâm (vị trí 4)
      for (let start = 0; start <= 4; start++) {
        let pCount = 0;
        let emptyCount = 0;
        let hasOpponent = false;

        for (let i = 0; i < 5; i++) {
          const val = line[start + i];
          if (val === player) pCount++;
          else if (val === null) emptyCount++;
          else hasOpponent = true;
        }

        if (!hasOpponent && pCount === 4 && emptyCount === 1) {
          // Tứ cúc có lỗ hổng đe dọa thành 5 ở nước sau
          if (consecutive < 4) {
            closed4++;
          }
        }
      }
    }

    // Hoàn trả giá trị ô cờ
    b[r][c] = prevVal;

    // Tính điểm tổng hợp cho mẫu hình
    let score = 0;
    score += wins * 50000000;
    score += open4 * 6000000;
    score += closed4 * 500000;
    score += open3 * 120000;
    score += closed3 * 12000;
    score += open2 * 2000;

    // Đòn vồ đôi (Forks: Đôi 3 mở, 4-3, Đôi 4) -> Thế trận chắc thắng không thể đỡ
    const total4 = open4 + closed4;
    if (open3 >= 2 || (open3 >= 1 && total4 >= 1) || total4 >= 2) {
      score += 2500000;
    }

    return { wins, open4, closed4, open3, closed3, open2, score };
  };

  // Tính điểm vị trí tổng hợp cho nước đi (r, c)
  const evaluateCell = (b: (string | null)[][], r: number, c: number, diff: Difficulty): number => {
    const patO = evaluatePatternsAt(b, r, c, 'O');
    const patX = evaluatePatternsAt(b, r, c, 'X');

    // Ưu tiên chiếm giữ trung tâm
    const distCenter = Math.abs(r - 7) + Math.abs(c - 7);
    const centerBonus = Math.max(0, 15 - distCenter) * 25;

    if (diff === 'normal') {
      const noise = Math.floor(Math.random() * 40);
      return patO.score * 1.0 + patX.score * 0.9 + centerBonus + noise;
    }

    if (diff === 'hard') {
      // Khó: Đề cao phòng ngự tuyệt đối, chặn đứng mọi đợt tấn công của người chơi
      return patO.score * 1.05 + patX.score * 1.35 + centerBonus;
    }

    // Siêu khó (Nightmare): Tấn công hung hãn và phòng thủ bóp nghẹt đối thủ
    return patO.score * 1.15 + patX.score * 1.55 + centerBonus;
  };

  // Thuật toán AI thông minh theo 3 cấp độ
  const handleAIMove = (currentBoard: (string | null)[][]) => {
    // 1. Quét tìm tất cả các ô trống có quân xung quanh (bán kính 2 ô)
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

    // Nếu bàn cờ trống, đánh luôn tâm (7, 7)
    if (!hasAnyMove) {
      makeAIMoveTo(7, 7, currentBoard);
      return;
    }

    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (!currentBoard[r][c]) {
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

    // ============================================================
    // HỆ THỐNG PHÂN CẤP CHIẾN THUẬT BẤT KHẢ CHIẾN BẠI (THREAT LADDER)
    // ============================================================

    // 1. TẤT SÁT: Nếu Máy (O) có nước thắng ngay (5 quân liên tiếp) -> ĐÁNH NGAY!
    for (const cand of candidates) {
      currentBoard[cand.r][cand.c] = 'O';
      const isWin = checkWin(currentBoard, cand.r, cand.c, 'O') !== null;
      currentBoard[cand.r][cand.c] = null;
      if (isWin) {
        makeAIMoveTo(cand.r, cand.c, currentBoard);
        return;
      }
    }

    // 2. CỨU NGUY TUYỆT ĐỐI: Nếu Người chơi (X) có ô thắng ở nước sau (4 liền hoặc 4 hở) -> PHẢI CHẶN NGAY!
    const playerWinThreats: { r: number; c: number; score: number }[] = [];
    for (const cand of candidates) {
      currentBoard[cand.r][cand.c] = 'X';
      const playerCanWin = checkWin(currentBoard, cand.r, cand.c, 'X') !== null;
      currentBoard[cand.r][cand.c] = null;
      if (playerCanWin) {
        playerWinThreats.push(cand);
      }
    }
    if (playerWinThreats.length > 0) {
      playerWinThreats.sort((a, b) => b.score - a.score);
      makeAIMoveTo(playerWinThreats[0].r, playerWinThreats[0].c, currentBoard);
      return;
    }

    // 3. TẤN CÔNG THƯỢNG THỪA: Máy tạo Tứ cúc mở (. O O O O .) hoặc vồ đôi -> Không thể cản phá!
    for (const cand of candidates) {
      const pat = evaluatePatternsAt(currentBoard, cand.r, cand.c, 'O');
      const total4 = pat.open4 + pat.closed4;
      if (pat.open4 > 0 || (pat.open3 > 0 && total4 >= 1) || total4 >= 2) {
        makeAIMoveTo(cand.r, cand.c, currentBoard);
        return;
      }
    }

    // 4. PHÒNG THỦ TUYỆT ĐỐI: Chặn đứng Người chơi tạo Tứ cúc mở hoặc vồ đôi (3-3, 4-3)
    const forkThreats: { r: number; c: number; score: number }[] = [];
    for (const cand of candidates) {
      const pat = evaluatePatternsAt(currentBoard, cand.r, cand.c, 'X');
      const total4 = pat.open4 + pat.closed4;
      if (pat.open4 > 0 || pat.open3 >= 2 || (pat.open3 >= 1 && total4 >= 1)) {
        forkThreats.push(cand);
      }
    }
    if (forkThreats.length > 0) {
      forkThreats.sort((a, b) => b.score - a.score);
      makeAIMoveTo(forkThreats[0].r, forkThreats[0].c, currentBoard);
      return;
    }

    // Sắp xếp các nước đi giảm dần theo điểm số vị trí
    candidates.sort((a, b) => b.score - a.score);
    let chosen = candidates[0];

    if (difficulty === 'normal') {
      // Bình thường: 75% chọn nước tối ưu, 25% chọn nước thứ 2 hoặc 3
      if (candidates.length > 2 && Math.random() < 0.25) {
        chosen = candidates[Math.floor(Math.random() * Math.min(3, candidates.length))];
      }
    } else if (difficulty === 'nightmare') {
      // SIÊU KHÓ 🔥: Minimax 2 bước đầy đủ (Lookahead 2-ply) cho Top 8 nước đi tốt nhất
      let bestScore = -Infinity;
      const topCandidates = candidates.slice(0, 8);

      for (const cand of topCandidates) {
        currentBoard[cand.r][cand.c] = 'O';

        // Tìm nước phản công mạnh nhất của Người chơi X
        let maxPlayerReply = 0;
        for (let r = 0; r < BOARD_SIZE; r++) {
          for (let c = 0; c < BOARD_SIZE; c++) {
            if (!currentBoard[r][c]) {
              const pPat = evaluatePatternsAt(currentBoard, r, c, 'X');
              if (pPat.score > maxPlayerReply) {
                maxPlayerReply = pPat.score;
              }
            }
          }
        }

        currentBoard[cand.r][cand.c] = null;

        // Điểm đánh giá Minimax = Điểm nước đi của Máy - Nước phản đòn lớn nhất của Người chơi
        const evalScore = cand.score - maxPlayerReply * 1.15;
        if (evalScore > bestScore) {
          bestScore = evalScore;
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
