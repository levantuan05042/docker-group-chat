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
  const vsAI = !room;
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

// Bảng điểm vị trí chuẩn (Piece-Square Tables) cho quân Đen
const PST_PAWN: number[][] = [
  [0,   0,   0,   0,   0,   0,   0,   0],
  [15, 15,  15, -15, -15,  15,  15,  15],
  [10,  5,   5,  20,  20,   5,   5,  10],
  [10, 10,  25,  35,  35,  25,  10,  10],
  [20, 20,  30,  45,  45,  30,  20,  20],
  [40, 40,  50,  65,  65,  50,  40,  40],
  [85, 85,  95, 110, 110,  95,  85,  85], // Sát đích phong Hậu
  [0,   0,   0,   0,   0,   0,   0,   0]
];

const PST_KNIGHT: number[][] = [
  [-40, -30, -20, -20, -20, -20, -30, -40],
  [-30, -10,   5,  10,  10,   5, -10, -30],
  [-20,   5,  20,  30,  30,  20,   5, -20],
  [-20,  10,  30,  40,  40,  30,  10, -20],
  [-20,  10,  30,  40,  40,  30,  10, -20],
  [-20,   5,  20,  30,  30,  20,   5, -20],
  [-30, -10,   5,  10,  10,   5, -10, -30],
  [-40, -30, -20, -20, -20, -20, -30, -40]
];

const PST_BISHOP: number[][] = [
  [-20, -10, -10, -10, -10, -10, -10, -20],
  [-10,   5,   0,   0,   0,   0,   5, -10],
  [-10,  10,  15,  20,  20,  15,  10, -10],
  [-10,   5,  20,  25,  25,  20,   5, -10],
  [-10,   5,  20,  25,  25,  20,   5, -10],
  [-10,  10,  15,  20,  20,  15,  10, -10],
  [-10,   5,   0,   0,   0,   0,   5, -10],
  [-20, -10, -10, -10, -10, -10, -10, -20]
];

const PST_ROOK: number[][] = [
  [0,   0,   0,   5,   5,   0,   0,   0],
  [-5,  0,   0,   0,   0,   0,   0,  -5],
  [-5,  0,   0,   0,   0,   0,   0,  -5],
  [-5,  0,   0,   0,   0,   0,   0,  -5],
  [-5,  0,   0,   0,   0,   0,   0,  -5],
  [-5,  0,   0,   0,   0,   0,   0,  -5],
  [20, 25,  25,  25,  25,  25,  25,  20],
  [0,   0,   0,   5,   5,   0,   0,   0]
];

const PST_QUEEN: number[][] = [
  [-20, -10, -10,  -5,  -5, -10, -10, -20],
  [-10,   0,   5,   0,   0,   0,   0, -10],
  [-10,   5,  10,  10,  10,  10,   5, -10],
  [-5,    0,  10,  15,  15,  10,   0,  -5],
  [-5,    0,  10,  15,  15,  10,   0,  -5],
  [-10,   5,  10,  10,  10,  10,   5, -10],
  [-10,   0,   0,   0,   0,   0,   0, -10],
  [-20, -10, -10,  -5,  -5, -10, -10, -20]
];

  // Đánh giá thế cờ tĩnh Cờ Vua sâu sắc kết hợp Giá trị quân và Bảng điểm vị trí
  const evaluateChessBoard = (b: ChessBoard): number => {
    let score = 0;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = b[r][c];
        if (p) {
          let pstVal = 0;
          const row = p.color === 'b' ? r : (7 - r);
          if (p.type === 'p') pstVal = PST_PAWN[row][c];
          else if (p.type === 'n') pstVal = PST_KNIGHT[row][c];
          else if (p.type === 'b') pstVal = PST_BISHOP[row][c];
          else if (p.type === 'r') pstVal = PST_ROOK[row][c];
          else if (p.type === 'q') pstVal = PST_QUEEN[row][c];

          const totalVal = PIECE_VAL[p.type] + pstVal;
          if (p.color === 'b') {
            score += totalVal;
          } else {
            score -= totalVal;
          }
        }
      }
    }
    return score;
  };

  // Kiểm tra xem ô (targetR, targetC) có đang bị phe `attackerColor` nhắm bắn không
  const isSquareAttacked = (targetR: number, targetC: number, attackerColor: PieceColor, b: ChessBoard): boolean => {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = b[r][c];
        if (p && p.color === attackerColor) {
          const moves = getMoves(r, c, b);
          if (moves.some(([mr, mc]) => mr === targetR && mc === targetC)) {
            return true;
          }
        }
      }
    }
    return false;
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

    // Tìm vị trí Vua Đen và kiểm tra xem Vua Đen có đang bị chiếu không
    let blackKingPos: [number, number] | null = null;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = currentBoard[r][c];
        if (p && p.color === 'b' && p.type === 'k') {
          blackKingPos = [r, c];
          break;
        }
      }
      if (blackKingPos) break;
    }

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = currentBoard[r][c];
        if (piece && piece.color === 'b') {
          const moves = getMoves(r, c, currentBoard);
          moves.forEach(([tr, tc]) => {
            const target = currentBoard[tr][tc];

            // 1. TẤT SÁT: Nếu bắt được Vua Trắng -> THẮNG NGAY!
            if (target && target.type === 'k') {
              allMoves.push({ sr: r, sc: c, tr, tc, score: 1000000 });
              return;
            }

            let moveScore = 0;

            // Thưởng điểm ăn quân đối phương
            if (target) {
              moveScore += PIECE_VAL[target.type] * 10;
              if (PIECE_VAL[target.type] >= PIECE_VAL[piece.type]) {
                moveScore += 300; // Đổi quân có lãi hoặc bằng giá trị
              }
            }

            // Kiểm tra an toàn: Nếu ô đến (tr, tc) bị Trắng bảo vệ/tấn công
            // Thử nước đi tạm thời trên bàn cờ
            currentBoard[tr][tc] = piece;
            currentBoard[r][c] = null;
            const destInDanger = isSquareAttacked(tr, tc, 'w', currentBoard);

            // Kiểm tra xem nước đi này có để Vua Đen bị bắt ở nước sau không (bị chiếu)
            const kingPos = piece.type === 'k' ? [tr, tc] : blackKingPos;
            let kingInDanger = false;
            if (kingPos) {
              kingInDanger = isSquareAttacked(kingPos[0], kingPos[1], 'w', currentBoard);
            }
            currentBoard[r][c] = piece;
            currentBoard[tr][tc] = target;

            // Tránh tuyệt đối nước đi khiến Vua bị bắt
            if (kingInDanger) {
              moveScore -= 50000;
            }

            // Phạt nặng nếu dâng quân có giá trị cao vào ô bị đối thủ bảo vệ
            if (destInDanger) {
              const targetVal = target ? PIECE_VAL[target.type] : 0;
              if (PIECE_VAL[piece.type] > targetVal) {
                moveScore -= (PIECE_VAL[piece.type] - targetVal) * 1.5;
              }
            }

            // Thưởng điểm nếu quân này đang bị đe dọa ở (r, c) và chạy thoát an toàn
            const currentlyAttacked = isSquareAttacked(r, c, 'w', currentBoard);
            if (currentlyAttacked && !destInDanger) {
              moveScore += PIECE_VAL[piece.type] * 1.2;
            }

            // Thưởng điểm vị trí (PST) và tiến quân
            let row = tr;
            if (piece.type === 'p') moveScore += PST_PAWN[row][tc];
            else if (piece.type === 'n') moveScore += PST_KNIGHT[row][tc];
            else if (piece.type === 'b') moveScore += PST_BISHOP[row][tc];
            else if (piece.type === 'r') moveScore += PST_ROOK[row][tc];
            else if (piece.type === 'q') moveScore += PST_QUEEN[row][tc];

            // Tốt tiến gần hàng cuối để phong Hậu
            if (piece.type === 'p' && tr >= 6) {
              moveScore += 400;
            }

            allMoves.push({ sr: r, sc: c, tr, tc, score: moveScore });
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
      // SIÊU KHÓ 🔥: Minimax 2 bước đầy đủ xem trước mọi nước phản công của Trắng
      let bestMinimax = -Infinity;
      const topMoves = allMoves.slice(0, 14);

      for (const m of topMoves) {
        const p = currentBoard[m.sr][m.sc]!;
        const target = currentBoard[m.tr][m.tc];

        if (target && target.type === 'k') {
          chosen = m;
          break;
        }

        currentBoard[m.tr][m.tc] = p;
        currentBoard[m.sr][m.sc] = null;

        // Tìm nước phản công mạnh nhất của Trắng
        let maxWhiteReply = -Infinity;
        for (let wr = 0; wr < 8; wr++) {
          for (let wc = 0; wc < 8; wc++) {
            const wPiece = currentBoard[wr][wc];
            if (wPiece && wPiece.color === 'w') {
              const wMoves = getMoves(wr, wc, currentBoard);
              for (const [wtr, wtc] of wMoves) {
                const wTarget = currentBoard[wtr][wtc];
                let rep = wTarget ? PIECE_VAL[wTarget.type] * 8 : 0;
                if (wTarget && wTarget.type === 'k') rep = 1000000;
                if (rep > maxWhiteReply) maxWhiteReply = rep;
              }
            }
          }
        }

        const total = evaluateChessBoard(currentBoard) + m.score - (maxWhiteReply === -Infinity ? 0 : maxWhiteReply * 1.1);

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
      {/* 1. THẺ ĐỐI THỦ PHÍA TRÊN */}
      <div className="player-strip opponent-strip">
        <div className="player-meta">
          <span className="player-avatar">{isOnline ? '👤' : '🤖'}</span>
          <div className="player-details">
            <span className="player-name">{opponentName}</span>
            <span className="player-role">
              {isOnline ? (isHost ? 'Quân Đen (♚)' : 'Quân Trắng (♔)') : `Quân Đen (♚) • ${difficulty === 'normal' ? '🟢 Bình thường' : difficulty === 'hard' ? '🟡 Khó' : '🔴 Siêu khó 🔥'}`}
            </span>
          </div>
        </div>

        <div className="player-status-badge">
          {winner ? (
            <span className="status-badge status-winner">VÁN ĐẤU KẾT THÚC</span>
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
          📢 <strong>Phòng cờ vua đang mở!</strong> Đang chờ đối thủ vào phòng... Hãy chia sẻ mã <code>{room.roomCode}</code> hoặc bấm <strong>"Mời Bạn"</strong> để bắt đầu trận đấu!
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

      {/* 3. THẺ BẠN PHÍA DƯỚI & ĐIỀU KHIỂN */}
      <div className="player-strip user-strip">
        <div className="player-meta">
          <span className="player-avatar">{currentUser?.avatar || '🎮'}</span>
          <div className="player-details">
            <span className="player-name">{currentUser?.fullName || currentUser?.username || 'Bạn'}</span>
            <span className="player-role">
              {isOnline ? (isHost ? 'Quân Trắng (♔)' : 'Quân Đen (♚)') : 'Quân Trắng (♔)'}
            </span>
          </div>
        </div>

        <div className="user-center-status">
          {winner ? (
            <span className="status-badge status-winner">👑 {winner}</span>
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
