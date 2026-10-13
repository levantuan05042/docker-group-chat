import React, { useState, useEffect } from 'react';
import type { GameRoom, User } from '../types';
import { playSound, triggerConfetti } from '../utils/effects';

interface ChessGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info' | 'warning', msg: string) => void;
  room?: GameRoom | null;
  currentUser?: User | null;
  onSyncState?: (gameState: string) => void;
}

type PieceColor = 'w' | 'b';
type PieceType = 'p' | 'r' | 'n' | 'b' | 'q' | 'k';
type Difficulty = 'normal' | 'hard' | 'nightmare';

interface Piece {
  type: PieceType;
  color: PieceColor;
}

type ChessBoard = (Piece | null)[][];

const INITIAL_BOARD: ChessBoard = [
  [
    { type: 'r', color: 'b' }, { type: 'n', color: 'b' }, { type: 'b', color: 'b' }, { type: 'q', color: 'b' },
    { type: 'k', color: 'b' }, { type: 'b', color: 'b' }, { type: 'n', color: 'b' }, { type: 'r', color: 'b' }
  ],
  Array(8).fill(null).map(() => ({ type: 'p', color: 'b' })),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null).map(() => ({ type: 'p', color: 'w' })),
  [
    { type: 'r', color: 'w' }, { type: 'n', color: 'w' }, { type: 'b', color: 'w' }, { type: 'q', color: 'w' },
    { type: 'k', color: 'w' }, { type: 'b', color: 'w' }, { type: 'n', color: 'w' }, { type: 'r', color: 'w' }
  ]
];

const PIECE_SYMBOLS: Record<PieceColor, Record<PieceType, string>> = {
  w: { k: '♔', q: '♕', r: '♖', b: '♗', n: '♘', p: '♙' },
  b: { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' }
};

const PIECE_VAL: Record<PieceType, number> = {
  k: 20000,
  q: 950,
  r: 510,
  b: 335,
  n: 325,
  p: 100
};

export const ChessGame: React.FC<ChessGameProps> = ({
  onWin,
  showToast,
  room,
  currentUser,
  onSyncState
}) => {
  const [board, setBoard] = useState<ChessBoard>(() => INITIAL_BOARD.map(r => [...r]));
  const [turn, setTurn] = useState<PieceColor>('w');
  const [selectedPos, setSelectedPos] = useState<[number, number] | null>(null);
  const [validMoves, setValidMoves] = useState<[number, number][]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [vsAI, setVsAI] = useState<boolean>(!room);
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  const [capturedWhite, setCapturedWhite] = useState<Piece[]>([]);
  const [capturedBlack, setCapturedBlack] = useState<Piece[]>([]);

  const isOnline = !!room;
  const isHost = isOnline && currentUser && room.hostUserId === currentUser.id;
  const myColor: PieceColor = isHost ? 'w' : 'b';
  const opponentName = isOnline
    ? (isHost ? (room.guestFullName || 'Đang chờ khách...') : room.hostFullName)
    : `Máy AI (${difficulty === 'normal' ? 'Bình thường' : difficulty === 'hard' ? 'Khó' : 'Siêu khó 🔥'})`;

  const isMyTurn = !isOnline || (turn === myColor && (isHost ? !!room?.guestUserId : true));

  // Đồng bộ trạng thái từ Server
  useEffect(() => {
    if (!room?.gameState) return;
    try {
      const state = JSON.parse(room.gameState);
      if (state.board) setBoard(state.board);
      if (state.turn) setTurn(state.turn);
      if (state.capturedWhite) setCapturedWhite(state.capturedWhite);
      if (state.capturedBlack) setCapturedBlack(state.capturedBlack);
      if (state.winner) setWinner(state.winner);
    } catch (e) {
      console.error('Lỗi phân tích gameState Cờ Vua:', e);
    }
  }, [room?.gameState]);

  const getMoves = (r: number, c: number, currentBoard: ChessBoard): [number, number][] => {
    const p = currentBoard[r][c];
    if (!p) return [];
    const moves: [number, number][] = [];
    const color = p.color;

    const addMove = (nr: number, nc: number) => {
      if (nr < 0 || nr >= 8 || nc < 0 || nc >= 8) return false;
      const target = currentBoard[nr][nc];
      if (!target) {
        moves.push([nr, nc]);
        return true;
      }
      if (target.color !== color) {
        moves.push([nr, nc]);
      }
      return false;
    };

    if (p.type === 'p') {
      const dir = color === 'w' ? -1 : 1;
      const startRow = color === 'w' ? 6 : 1;
      if (r + dir >= 0 && r + dir < 8 && !currentBoard[r + dir][c]) {
        moves.push([r + dir, c]);
        if (r === startRow && !currentBoard[r + 2 * dir][c]) {
          moves.push([r + 2 * dir, c]);
        }
      }
      [-1, 1].forEach(dc => {
        const nr = r + dir, nc = c + dc;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          const target = currentBoard[nr][nc];
          if (target && target.color !== color) moves.push([nr, nc]);
        }
      });
    } else if (p.type === 'n') {
      const jumps = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
      ];
      jumps.forEach(([dr, dc]) => addMove(r + dr, c + dc));
    } else if (p.type === 'b') {
      const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
      dirs.forEach(([dr, dc]) => {
        let nr = r + dr, nc = c + dc;
        while (addMove(nr, nc)) { nr += dr; nc += dc; }
      });
    } else if (p.type === 'r') {
      const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      dirs.forEach(([dr, dc]) => {
        let nr = r + dr, nc = c + dc;
        while (addMove(nr, nc)) { nr += dr; nc += dc; }
      });
    } else if (p.type === 'q') {
      const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1], [-1, 0], [1, 0], [0, -1], [0, 1]];
      dirs.forEach(([dr, dc]) => {
        let nr = r + dr, nc = c + dc;
        while (addMove(nr, nc)) { nr += dr; nc += dc; }
      });
    } else if (p.type === 'k') {
      const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1], [-1, 0], [1, 0], [0, -1], [0, 1]];
      dirs.forEach(([dr, dc]) => addMove(r + dr, c + dc));
    }

    return moves;
  };

  const handleCellClick = (r: number, c: number) => {
    if (winner) return;

    if (isOnline) {
      if (!room.guestUserId) {
        showToast('info', '⏳ Đang chờ người chơi khác vào phòng! Bạn chưa thể đánh cờ.');
        return;
      }
      if (!isMyTurn) {
        showToast('info', `⏳ Chưa đến lượt bạn! Hãy đợi đối thủ (${opponentName}) đi nước cờ.`);
        return;
      }
    } else {
      if (vsAI && turn === 'b') return;
    }

    const currentTurnColor = isOnline ? myColor : turn;

    if (selectedPos) {
      const [sr, sc] = selectedPos;
      const isValid = validMoves.some(([vr, vc]) => vr === r && vc === c);
      if (isValid) {
        movePiece(sr, sc, r, c);
        setSelectedPos(null);
        setValidMoves([]);
        return;
      }
    }

    const clickedPiece = board[r][c];
    if (clickedPiece && clickedPiece.color === currentTurnColor) {
      setSelectedPos([r, c]);
      setValidMoves(getMoves(r, c, board));
      playSound('click');
    } else {
      setSelectedPos(null);
      setValidMoves([]);
    }
  };

  const movePiece = (sr: number, sc: number, tr: number, tc: number) => {
    const p = board[sr][sc]!;
    const target = board[tr][tc];
    const newBoard = board.map(row => [...row]);
    newBoard[tr][tc] = p;
    newBoard[sr][sc] = null;

    // Phong cấp tốt lên Hậu
    if (p.type === 'p') {
      if ((p.color === 'w' && tr === 0) || (p.color === 'b' && tr === 7)) {
        newBoard[tr][tc] = { type: 'q', color: p.color };
      }
    }

    setBoard(newBoard);

    let newCapW = [...capturedWhite];
    let newCapB = [...capturedBlack];
    let winSide: string | null = null;

    if (target) {
      playSound('capture');
      if (target.color === 'w') {
        newCapW.push(target);
        setCapturedWhite(newCapW);
      } else {
        newCapB.push(target);
        setCapturedBlack(newCapB);
      }

      if (target.type === 'k') {
        winSide = p.color === 'w' ? 'Phe Trắng' : 'Phe Đen';
        setWinner(winSide);
        playSound('win');
        triggerConfetti();
        const bonusScore = difficulty === 'nightmare' ? 90 : difficulty === 'hard' ? 60 : 40;
        showToast('success', `🎉 Vua đối phương đã bị bắt! ${winSide} giành chiến thắng! (+${bonusScore} điểm)`);
        onWin('Cờ Vua', bonusScore);
      }
    } else {
      playSound('move');
    }

    const nextTurn: PieceColor = turn === 'w' ? 'b' : 'w';
    setTurn(nextTurn);

    // Đồng bộ sang đối thủ
    if (isOnline && onSyncState) {
      onSyncState(
        JSON.stringify({
          board: newBoard,
          turn: winSide ? p.color : nextTurn,
          capturedWhite: newCapW,
          capturedBlack: newCapB,
          winner: winSide
        })
      );
      return;
    }

    // Đấu với AI
    if (!isOnline && vsAI && nextTurn === 'b' && !winSide) {
      const thinkTime = difficulty === 'nightmare' ? 450 : difficulty === 'hard' ? 300 : 200;
      setTimeout(() => makeAIMove(newBoard), thinkTime);
    }
  };

  // Đánh giá thế cờ tĩnh Cờ Vua cho quân Đen
  const evaluateChessBoard = (b: ChessBoard): number => {
    let score = 0;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = b[r][c];
        if (p) {
          const val = PIECE_VAL[p.type];
          // Thưởng điểm kiểm soát trung tâm (hàng 3, 4, cột 3, 4)
          const centerDist = Math.abs(r - 3.5) + Math.abs(c - 3.5);
          const posBonus = Math.max(0, 7 - centerDist) * 8;

          if (p.color === 'b') {
            score += val + posBonus;
          } else {
            score -= (val + posBonus);
          }
        }
      }
    }
    return score;
  };

  const makeAIMove = (currentBoard: ChessBoard) => {
    interface MoveCandidate {
      sr: number;
      sc: number;
      tr: number;
      tc: number;
      score: number;
    }

    const allMoves: MoveCandidate[] = [];

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = currentBoard[r][c];
        if (piece && piece.color === 'b') {
          const moves = getMoves(r, c, currentBoard);
          moves.forEach(([tr, tc]) => {
            const target = currentBoard[tr][tc];
            let immediate = 0;
            if (target) {
              immediate += PIECE_VAL[target.type] * 8;
              if (PIECE_VAL[target.type] >= PIECE_VAL[piece.type]) immediate += 200;
            }
            // Thưởng điểm tiến quân về trung tâm
            immediate += (tr - r) * 10;
            allMoves.push({ sr: r, sc: c, tr, tc, score: immediate });
          });
        }
      }
    }

    if (allMoves.length === 0) {
      setWinner('Phe Trắng (Thắng)');
      return;
    }

    allMoves.sort((a, b) => b.score - a.score);
    let chosen = allMoves[0];

    if (difficulty === 'normal') {
      if (allMoves.length > 2 && Math.random() < 0.25) {
        chosen = allMoves[Math.floor(Math.random() * Math.min(3, allMoves.length))];
      }
    } else if (difficulty === 'hard') {
      let bestEval = -Infinity;
      const topMoves = allMoves.slice(0, 10);
      for (const m of topMoves) {
        const p = currentBoard[m.sr][m.sc]!;
        const target = currentBoard[m.tr][m.tc];
        currentBoard[m.tr][m.tc] = p;
        currentBoard[m.sr][m.sc] = null;

        const boardScore = evaluateChessBoard(currentBoard) + m.score;

        currentBoard[m.sr][m.sc] = p;
        currentBoard[m.tr][m.tc] = target;

        if (boardScore > bestEval) {
          bestEval = boardScore;
          chosen = m;
        }
      }
    } else if (difficulty === 'nightmare') {
      // SIÊU KHÓ 🔥: Minimax 2 bước xem trước phản công của Trắng
      let bestMinimax = -Infinity;
      const topMoves = allMoves.slice(0, 12);

      for (const m of topMoves) {
        const p = currentBoard[m.sr][m.sc]!;
        const target = currentBoard[m.tr][m.tc];

        if (target && target.type === 'k') {
          chosen = m;
          break;
        }

        currentBoard[m.tr][m.tc] = p;
        currentBoard[m.sr][m.sc] = null;

        let maxWhiteReply = -Infinity;
        for (let wr = 0; wr < 8; wr++) {
          for (let wc = 0; wc < 8; wc++) {
            const wPiece = currentBoard[wr][wc];
            if (wPiece && wPiece.color === 'w') {
              const wMoves = getMoves(wr, wc, currentBoard);
              for (const [wtr, wtc] of wMoves) {
                const wTarget = currentBoard[wtr][wtc];
                let rep = wTarget ? PIECE_VAL[wTarget.type] * 7 : 0;
                if (rep > maxWhiteReply) maxWhiteReply = rep;
              }
            }
          }
        }

        const total = evaluateChessBoard(currentBoard) + m.score - (maxWhiteReply === -Infinity ? 0 : maxWhiteReply);

        currentBoard[m.sr][m.sc] = p;
        currentBoard[m.tr][m.tc] = target;

        if (total > bestMinimax) {
          bestMinimax = total;
          chosen = m;
        }
      }
    }

    const p = currentBoard[chosen.sr][chosen.sc]!;
    const target = currentBoard[chosen.tr][chosen.tc];
    const newBoard = currentBoard.map(row => [...row]);
    newBoard[chosen.tr][chosen.tc] = p;
    newBoard[chosen.sr][chosen.sc] = null;

    if (p.type === 'p' && chosen.tr === 7) {
      newBoard[chosen.tr][chosen.tc] = { type: 'q', color: 'b' };
    }

    setBoard(newBoard);

    if (target) {
      playSound('capture');
      setCapturedWhite(prev => [...prev, target]);
      if (target.type === 'k') {
        setWinner('Phe Đen (Máy)');
        playSound('error');
        showToast('error', `Máy (${difficulty.toUpperCase()}) đã bắt Vua của bạn!`);
        return;
      }
    } else {
      playSound('move');
    }

    setTurn('w');
  };

  const resetGame = () => {
    const init = INITIAL_BOARD.map(r => [...r]);
    setBoard(init);
    setTurn('w');
    setSelectedPos(null);
    setValidMoves([]);
    setWinner(null);
    setCapturedWhite([]);
    setCapturedBlack([]);
    playSound('click');

    if (isOnline && onSyncState) {
      onSyncState(
        JSON.stringify({
          board: init,
          turn: 'w',
          capturedWhite: [],
          capturedBlack: [],
          winner: null
        })
      );
    }
  };

  return (
    <div className="game-wrapper chess-container">
      {/* THANH TRẠNG THÁI RÕ RÀNG */}
      <div className="game-top-bar">
        <div className="game-status-badge">
          {winner ? (
            <span className="win-announce">🏆 Thắng cuộc: <strong>{winner}</strong></span>
          ) : isOnline ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>
                Bạn: <strong style={{ color: myColor === 'w' ? '#f8fafc' : '#94a3b8' }}>{myColor === 'w' ? 'Quân Trắng (Đi trước)' : 'Quân Đen (Đi sau)'}</strong>
              </span>
              <span className={`turn-pill ${isMyTurn ? 'turn-mine' : 'turn-wait'}`}>
                {isMyTurn ? '🎯 LƯỢT CỦA BẠN' : `⏳ ĐỐI THỦ ĐANG NGHĨ...`}
              </span>
            </div>
          ) : (
            <span>
              Lượt đi: <strong style={{ color: turn === 'w' ? '#f8fafc' : '#94a3b8' }}>{turn === 'w' ? 'Quân Trắng' : 'Quân Đen'}</strong>{' '}
              {vsAI && turn === 'b' && `(Máy [${difficulty === 'normal' ? 'Bình thường' : difficulty === 'hard' ? 'Khó' : 'Siêu khó 🔥'}] đang tính...)`}
            </span>
          )}
        </div>

        <div className="game-actions">
          {/* LỰA CHỌN ĐỘ KHÓ KHI ĐẤU VỚI MÁY (AI) */}
          {!isOnline && vsAI && (
            <div className="difficulty-segmented">
              <button
                className={`diff-btn diff-normal ${difficulty === 'normal' ? 'active' : ''}`}
                onClick={() => { setDifficulty('normal'); showToast('info', 'Đã chuyển độ khó: 🟢 Bình thường (Mặc định)'); }}
                title="Dễ chơi, phù hợp giải trí"
              >
                🟢 Bình thường
              </button>
              <button
                className={`diff-btn diff-hard ${difficulty === 'hard' ? 'active' : ''}`}
                onClick={() => { setDifficulty('hard'); showToast('info', 'Đã chuyển độ khó: 🟡 Khó (AI biết giữ quân)'); }}
                title="Thử thách, AI tính toán kỹ"
              >
                🟡 Khó
              </button>
              <button
                className={`diff-btn diff-nightmare ${difficulty === 'nightmare' ? 'active' : ''}`}
                onClick={() => { setDifficulty('nightmare'); showToast('warning', 'Đã bật: 🔴 SIÊU KHÓ 🔥 (AI tính toán sâu, cực kỳ khó thắng!)'); }}
                title="Cực khó! Toát mồ hôi hột mới thắng được"
              >
                🔴 Siêu khó 🔥
              </button>
            </div>
          )}

          {!isOnline && (
            <button className={`mode-toggle ${vsAI ? 'active' : ''}`} onClick={() => { setVsAI(!vsAI); resetGame(); }}>
              {vsAI ? '🤖 Đấu với AI' : '👥 Đấu 2 Người'}
            </button>
          )}
          <button className="reset-btn" onClick={resetGame}>🔄 Ván mới</button>
        </div>
      </div>

      {/* THÔNG BÁO HƯỚNG DẪN KHI CHƠI ONLINE */}
      {isOnline && !room?.guestUserId && (
        <div className="online-wait-alert">
          📢 <strong>Phòng cờ vua đang mở!</strong> Đang chờ đối thủ vào phòng... Hãy chia sẻ mã <code>{room.roomCode}</code> hoặc bấm <strong>"Mời Vào Chat"</strong> để bắt đầu trận đấu!
        </div>
      )}

      <div className="chess-layout">
        {/* Quân Trắng bị ăn */}
        <div className="captured-panel">
          <span className="cap-label">Trắng bị ăn:</span>
          <div className="captured-pieces">
            {capturedWhite.map((p, i) => <span key={i} className="cap-piece">{PIECE_SYMBOLS.w[p.type]}</span>)}
          </div>
        </div>

        {/* Bàn Cờ Vua */}
        <div className="chess-board-frame">
          <div className="chess-grid">
            {board.map((row, r) => (
              <div key={r} className="chess-row">
                {row.map((cell, c) => {
                  const isLight = (r + c) % 2 === 0;
                  const isSelected = selectedPos && selectedPos[0] === r && selectedPos[1] === c;
                  const isValidDest = validMoves.some(([vr, vc]) => vr === r && vc === c);

                  return (
                    <div
                      key={c}
                      className={`chess-cell ${isLight ? 'light' : 'dark'} ${isSelected ? 'selected' : ''} ${isValidDest ? 'valid-dest' : ''}`}
                      onClick={() => handleCellClick(r, c)}
                    >
                      {cell && (
                        <span className={`chess-piece piece-${cell.color}`}>
                          {PIECE_SYMBOLS[cell.color][cell.type]}
                        </span>
                      )}
                      {isValidDest && !cell && <div className="move-dot" />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Quân Đen bị ăn */}
        <div className="captured-panel">
          <span className="cap-label">Đen bị ăn:</span>
          <div className="captured-pieces">
            {capturedBlack.map((p, i) => <span key={i} className="cap-piece">{PIECE_SYMBOLS.b[p.type]}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};
