import React, { useState, useEffect } from 'react';
import type { GameRoom, User } from '../types';
import { playSound, triggerConfetti } from '../utils/effects';

interface XiangqiGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info', msg: string) => void;
  room?: GameRoom | null;
  currentUser?: User | null;
  onSyncState?: (gameState: string) => void;
}

type Side = 'red' | 'black';
type XPieceType = 'k' | 'a' | 'e' | 'r' | 'c' | 'h' | 'p';

interface XPiece {
  type: XPieceType;
  side: Side;
  label: string;
}

type XBoard = (XPiece | null)[][];

const createPiece = (type: XPieceType, side: Side): XPiece => {
  const redLabels: Record<XPieceType, string> = {
    k: '帥', a: '仕', e: '相', r: '俥', c: '炮', h: '傌', p: '兵'
  };
  const blackLabels: Record<XPieceType, string> = {
    k: '將', a: '士', e: '象', r: '車', c: '砲', h: '馬', p: '卒'
  };
  return {
    type,
    side,
    label: side === 'red' ? redLabels[type] : blackLabels[type]
  };
};

const createInitialBoard = (): XBoard => {
  const b: XBoard = Array(10).fill(null).map(() => Array(9).fill(null));

  // Black (Hàng 0-3)
  b[0][0] = createPiece('r', 'black');
  b[0][1] = createPiece('h', 'black');
  b[0][2] = createPiece('e', 'black');
  b[0][3] = createPiece('a', 'black');
  b[0][4] = createPiece('k', 'black');
  b[0][5] = createPiece('a', 'black');
  b[0][6] = createPiece('e', 'black');
  b[0][7] = createPiece('h', 'black');
  b[0][8] = createPiece('r', 'black');
  b[2][1] = createPiece('c', 'black');
  b[2][7] = createPiece('c', 'black');
  [0, 2, 4, 6, 8].forEach(col => { b[3][col] = createPiece('p', 'black'); });

  // Red (Hàng 6-9)
  [0, 2, 4, 6, 8].forEach(col => { b[6][col] = createPiece('p', 'red'); });
  b[7][1] = createPiece('c', 'red');
  b[7][7] = createPiece('c', 'red');
  b[9][0] = createPiece('r', 'red');
  b[9][1] = createPiece('h', 'red');
  b[9][2] = createPiece('e', 'red');
  b[9][3] = createPiece('a', 'red');
  b[9][4] = createPiece('k', 'red');
  b[9][5] = createPiece('a', 'red');
  b[9][6] = createPiece('e', 'red');
  b[9][7] = createPiece('h', 'red');
  b[9][8] = createPiece('r', 'red');

  return b;
};

// Tọa độ hình học chuẩn xác của bàn cờ 10 hàng x 9 cột trong SVG viewBox (0 0 540 600)
const X0 = 40;
const Y0 = 40;
const DX = 57.5;      // 40 + 8 * 57.5 = 500 (cột 0 đến cột 8)
const DY = 57.777778; // 40 + 9 * 57.777778 = 560 (hàng 0 đến hàng 9)

const colX = (c: number) => X0 + c * DX;
const rowY = (r: number) => Y0 + r * DY;

export const XiangqiGame: React.FC<XiangqiGameProps> = ({
  onWin,
  showToast,
  room,
  currentUser,
  onSyncState
}) => {
  const [board, setBoard] = useState<XBoard>(createInitialBoard);
  const [turn, setTurn] = useState<Side>('red');
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [validMoves, setValidMoves] = useState<[number, number][]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [vsAI, setVsAI] = useState<boolean>(!room);
  const [lastMove, setLastMove] = useState<{ from: [number, number]; to: [number, number] } | null>(null);

  const isOnline = !!room;
  const isHost = isOnline && currentUser && room.hostUserId === currentUser.id;
  const mySide: Side = isHost ? 'red' : 'black';
  const opponentName = isOnline
    ? (isHost ? (room.guestFullName || 'Đang chờ khách...') : room.hostFullName)
    : 'Máy (AI)';

  const isMyTurn = !isOnline || (turn === mySide && (isHost ? !!room?.guestUserId : true));

  // Đồng bộ trạng thái online từ máy đối thủ qua Server
  useEffect(() => {
    if (!room?.gameState) return;
    try {
      const state = JSON.parse(room.gameState);
      if (state.board) setBoard(state.board);
      if (state.turn) setTurn(state.turn);
      if (state.lastMove) setLastMove(state.lastMove);
      if (state.winner) setWinner(state.winner);
    } catch (e) {
      console.error('Lỗi parse gameState Cờ Tướng:', e);
    }
  }, [room?.gameState]);

  const inBoard = (nr: number, nc: number) => nr >= 0 && nr <= 9 && nc >= 0 && nc <= 8;

  const getValidMoves = (r: number, c: number, b: XBoard): [number, number][] => {
    const piece = b[r][c];
    if (!piece) return [];
    const moves: [number, number][] = [];
    const side = piece.side;

    if (piece.type === 'r') {
      const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      dirs.forEach(([dr, dc]) => {
        let nr = r + dr, nc = c + dc;
        while (inBoard(nr, nc)) {
          if (!b[nr][nc]) {
            moves.push([nr, nc]);
          } else {
            if (b[nr][nc]?.side !== side) moves.push([nr, nc]);
            break;
          }
          nr += dr; nc += dc;
        }
      });
    } else if (piece.type === 'c') {
      const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      dirs.forEach(([dr, dc]) => {
        let nr = r + dr, nc = c + dc;
        let jumped = false;
        while (inBoard(nr, nc)) {
          if (!jumped) {
            if (!b[nr][nc]) moves.push([nr, nc]);
            else jumped = true;
          } else {
            if (b[nr][nc]) {
              if (b[nr][nc]?.side !== side) moves.push([nr, nc]);
              break;
            }
          }
          nr += dr; nc += dc;
        }
      });
    } else if (piece.type === 'h') {
      const hMoves = [
        { dr: -2, dc: -1, br: -1, bc: 0 },
        { dr: -2, dc: 1, br: -1, bc: 0 },
        { dr: 2, dc: -1, br: 1, bc: 0 },
        { dr: 2, dc: 1, br: 1, bc: 0 },
        { dr: -1, dc: -2, br: 0, bc: -1 },
        { dr: 1, dc: -2, br: 0, bc: -1 },
        { dr: -1, dc: 2, br: 0, bc: 1 },
        { dr: 1, dc: 2, br: 0, bc: 1 }
      ];
      hMoves.forEach(m => {
        const nr = r + m.dr, nc = c + m.dc;
        const blockR = r + m.br, blockC = c + m.bc;
        if (inBoard(nr, nc) && !b[blockR][blockC]) {
          if (!b[nr][nc] || b[nr][nc]?.side !== side) moves.push([nr, nc]);
        }
      });
    } else if (piece.type === 'p') {
      const fDir = side === 'red' ? -1 : 1;
      const crossedRiver = side === 'red' ? r <= 4 : r >= 5;
      if (inBoard(r + fDir, c) && (!b[r + fDir][c] || b[r + fDir][c]?.side !== side)) {
        moves.push([r + fDir, c]);
      }
      if (crossedRiver) {
        [-1, 1].forEach(dc => {
          if (inBoard(r, c + dc) && (!b[r][c + dc] || b[r][c + dc]?.side !== side)) {
            moves.push([r, c + dc]);
          }
        });
      }
    } else if (piece.type === 'k' || piece.type === 'a') {
      const minR = side === 'red' ? 7 : 0;
      const maxR = side === 'red' ? 9 : 2;
      const dirs = piece.type === 'k' ? [[0, 1], [0, -1], [1, 0], [-1, 0]] : [[1, 1], [1, -1], [-1, 1], [-1, -1]];
      dirs.forEach(([dr, dc]) => {
        const nr = r + dr, nc = c + dc;
        if (nr >= minR && nr <= maxR && nc >= 3 && nc <= 5) {
          if (!b[nr][nc] || b[nr][nc]?.side !== side) moves.push([nr, nc]);
        }
      });
    } else if (piece.type === 'e') {
      const minR = side === 'red' ? 5 : 0;
      const maxR = side === 'red' ? 9 : 4;
      const eMoves = [[2, 2], [2, -2], [-2, 2], [-2, -2]];
      eMoves.forEach(([dr, dc]) => {
        const nr = r + dr, nc = c + dc;
        const eyeR = r + dr / 2, eyeC = c + dc / 2;
        if (nr >= minR && nr <= maxR && inBoard(nr, nc) && !b[eyeR][eyeC]) {
          if (!b[nr][nc] || b[nr][nc]?.side !== side) moves.push([nr, nc]);
        }
      });
    }

    return moves;
  };

  const handlePointClick = (r: number, c: number) => {
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
      if (vsAI && turn === 'black') return;
    }

    const currentTurnSide = isOnline ? mySide : turn;

    if (selected) {
      const [sr, sc] = selected;
      const isOk = validMoves.some(([vr, vc]) => vr === r && vc === c);
      if (isOk) {
        movePiece(sr, sc, r, c);
        setSelected(null);
        setValidMoves([]);
        return;
      }
    }

    const p = board[r][c];
    if (p && p.side === currentTurnSide) {
      setSelected([r, c]);
      setValidMoves(getValidMoves(r, c, board));
      playSound('click');
    } else {
      setSelected(null);
      setValidMoves([]);
    }
  };

  const movePiece = (sr: number, sc: number, tr: number, tc: number) => {
    const piece = board[sr][sc]!;
    const target = board[tr][tc];
    const newBoard = board.map(row => [...row]);
    newBoard[tr][tc] = piece;
    newBoard[sr][sc] = null;
    setBoard(newBoard);
    const newLastMove = { from: [sr, sc] as [number, number], to: [tr, tc] as [number, number] };
    setLastMove(newLastMove);

    let winSide: string | null = null;
    if (target) {
      playSound('capture');
      if (target.type === 'k') {
        winSide = piece.side === 'red' ? 'Phe Đỏ' : 'Phe Đen';
        setWinner(winSide);
        playSound('win');
        triggerConfetti();
        showToast('success', `🎉 Tướng đối phương đã bị bắt! ${winSide} chiến thắng vang dội!`);
        onWin('Cờ Tướng', 60);
      }
    } else {
      playSound('move');
    }

    const nextSide: Side = turn === 'red' ? 'black' : 'red';
    setTurn(nextSide);

    // Đồng bộ sang máy đối thủ
    if (isOnline && onSyncState) {
      onSyncState(
        JSON.stringify({
          board: newBoard,
          turn: winSide ? piece.side : nextSide,
          lastMove: newLastMove,
          winner: winSide
        })
      );
      return;
    }

    // Nếu chơi với AI
    if (!isOnline && vsAI && nextSide === 'black' && !winSide) {
      setTimeout(() => aiMove(newBoard), 400);
    }
  };

  const aiMove = (currentBoard: XBoard) => {
    const list: { sr: number; sc: number; tr: number; tc: number; score: number }[] = [];

    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 9; c++) {
        const p = currentBoard[r][c];
        if (p && p.side === 'black') {
          const moves = getValidMoves(r, c, currentBoard);
          moves.forEach(([tr, tc]) => {
            const target = currentBoard[tr][tc];
            let score = 0;
            if (target) {
              if (target.type === 'k') score = 2000;
              else if (target.type === 'r') score = 90;
              else if (target.type === 'c') score = 50;
              else if (target.type === 'h') score = 40;
              else score = 15;
            }
            score += tr;
            list.push({ sr: r, sc: c, tr, tc, score });
          });
        }
      }
    }

    if (list.length === 0) {
      setWinner('Phe Đỏ (Thắng)');
      return;
    }

    list.sort((a, b) => b.score - a.score);
    const chosen = list[0];

    const piece = currentBoard[chosen.sr][chosen.sc]!;
    const target = currentBoard[chosen.tr][chosen.tc];
    const newBoard = currentBoard.map(row => [...row]);
    newBoard[chosen.tr][chosen.tc] = piece;
    newBoard[chosen.sr][chosen.sc] = null;
    setBoard(newBoard);
    setLastMove({ from: [chosen.sr, chosen.sc], to: [chosen.tr, chosen.tc] });

    if (target) {
      playSound('capture');
      if (target.type === 'k') {
        setWinner('Phe Đen (Máy)');
        playSound('error');
        showToast('error', 'Máy đã chiếu bí bắt Tướng của bạn!');
        return;
      }
    } else {
      playSound('move');
    }

    setTurn('red');
  };

  const resetGame = () => {
    const initial = createInitialBoard();
    setBoard(initial);
    setTurn('red');
    setSelected(null);
    setValidMoves([]);
    setWinner(null);
    setLastMove(null);
    playSound('click');

    if (isOnline && onSyncState) {
      onSyncState(
        JSON.stringify({
          board: initial,
          turn: 'red',
          lastMove: null,
          winner: null
        })
      );
    }
  };

  // Vẽ hoa thị (góc chữ thập) chuẩn cờ tướng
  const renderCrossMark = (cx: number, cy: number, hasLeft = true, hasRight = true) => {
    const d = 4.5;
    const len = 7;
    const stroke = '#784318';
    const sw = 1.2;
    return (
      <g stroke={stroke} strokeWidth={sw}>
        {hasLeft && (
          <>
            <line x1={cx - d} y1={cy - d} x2={cx - d - len} y2={cy - d} />
            <line x1={cx - d} y1={cy - d} x2={cx - d} y2={cy - d - len} />
            <line x1={cx - d} y1={cy + d} x2={cx - d - len} y2={cy + d} />
            <line x1={cx - d} y1={cy + d} x2={cx - d} y2={cy + d + len} />
          </>
        )}
        {hasRight && (
          <>
            <line x1={cx + d} y1={cy - d} x2={cx + d + len} y2={cy - d} />
            <line x1={cx + d} y1={cy - d} x2={cx + d} y2={cy - d - len} />
            <line x1={cx + d} y1={cy + d} x2={cx + d + len} y2={cy + d} />
            <line x1={cx + d} y1={cy + d} x2={cx + d} y2={cy + d + len} />
          </>
        )}
      </g>
    );
  };

  return (
    <div className="game-wrapper xiangqi-real-wrapper">
      {/* THANH TRẠNG THÁI RÕ RÀNG */}
      <div className="game-top-bar">
        <div className="game-status-badge">
          {winner ? (
            <span className="win-announce">🏆 Thắng cuộc: <strong>{winner}</strong></span>
          ) : isOnline ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>
                Bạn: <strong style={{ color: mySide === 'red' ? '#ef4444' : '#cbd5e1' }}>{mySide === 'red' ? 'Phe Đỏ (帥 - Đi trước)' : 'Phe Đen (將 - Đi sau)'}</strong>
              </span>
              <span className={`turn-pill ${isMyTurn ? 'turn-mine' : 'turn-wait'}`}>
                {isMyTurn ? '🎯 LƯỢT CỦA BẠN' : `⏳ ĐỐI THỦ ĐANG NGHĨ...`}
              </span>
            </div>
          ) : (
            <span>
              Lượt đi: <strong style={{ color: turn === 'red' ? '#ef4444' : '#cbd5e1' }}>{turn === 'red' ? 'Phe Đỏ (帥)' : 'Phe Đen (將)'}</strong>{' '}
              {vsAI && turn === 'black' && '(Máy suy nghĩ...)'}
            </span>
          )}
        </div>

        <div className="game-actions">
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
          📢 <strong>Phòng cờ tướng đang mở!</strong> Đang chờ đối thủ vào phòng... Hãy gửi mã <code>{room.roomCode}</code> hoặc bấm <strong>"Mời Vào Chat"</strong> để cùng so tài!
        </div>
      )}

      {/* BÀN CỜ TƯỚNG CHUẨN THỰC TẾ: TẤT CẢ VẼ CHÍNH XÁC 100% TRÊN SVG NGUYÊN BẢN */}
      <div className="xiangqi-real-board-container">
        <div className="xiangqi-table-wood">
          <svg className="xiangqi-svg-board" viewBox="0 0 540 600">
            <defs>
              <filter id="pieceShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#000000" floodOpacity="0.55" />
              </filter>
              <filter id="glowGold" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#f59e0b" floodOpacity="0.85" />
              </filter>

              <radialGradient id="redPieceWood" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#fffaf0" />
                <stop offset="45%" stopColor="#fed7aa" />
                <stop offset="85%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </radialGradient>

              <radialGradient id="blackPieceWood" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="45%" stopColor="#e2e8f0" />
                <stop offset="85%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </radialGradient>

              <linearGradient id="boardWoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f3c68f" />
                <stop offset="50%" stopColor="#e5ad6d" />
                <stop offset="100%" stopColor="#d29555" />
              </linearGradient>
            </defs>

            {/* 1. KHUNG VÀ NỀN BÀN CỜ GỖ */}
            <rect x="10" y="10" width="520" height="580" rx="12" fill="url(#boardWoodGrad)" stroke="#4a2810" strokeWidth="6" />
            <rect x="22" y="22" width="496" height="556" rx="6" fill="none" stroke="#7a421b" strokeWidth="2" />

            {/* 2. CÁC ĐƯỜNG KẺ NGANG (10 hàng: r = 0..9) */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(r => (
              <line
                key={`line-h-${r}`}
                x1={colX(0)}
                y1={rowY(r)}
                x2={colX(8)}
                y2={rowY(r)}
                stroke="#633815"
                strokeWidth="1.8"
              />
            ))}

            {/* 3. CÁC ĐƯỜNG KẺ DỌC NỬA TRÊN (Hàng 0-4) */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(c => (
              <line
                key={`line-vt-${c}`}
                x1={colX(c)}
                y1={rowY(0)}
                x2={colX(c)}
                y2={rowY(4)}
                stroke="#633815"
                strokeWidth="1.8"
              />
            ))}

            {/* 4. CÁC ĐƯỜNG KẺ DỌC NỬA DƯỚI (Hàng 5-9) */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(c => (
              <line
                key={`line-vb-${c}`}
                x1={colX(c)}
                y1={rowY(5)}
                x2={colX(c)}
                y2={rowY(9)}
                stroke="#633815"
                strokeWidth="1.8"
              />
            ))}

            {/* Hai đường dọc biên chạy xuyên qua sông */}
            <line x1={colX(0)} y1={rowY(4)} x2={colX(0)} y2={rowY(5)} stroke="#633815" strokeWidth="2" />
            <line x1={colX(8)} y1={rowY(4)} x2={colX(8)} y2={rowY(5)} stroke="#633815" strokeWidth="2" />

            {/* 5. CUNG TƯỚNG (CỬU CUNG) NỬA TRÊN (Phe Đen: hàng 0-2, cột 3-5) */}
            <line x1={colX(3)} y1={rowY(0)} x2={colX(5)} y2={rowY(2)} stroke="#633815" strokeWidth="1.6" />
            <line x1={colX(5)} y1={rowY(0)} x2={colX(3)} y2={rowY(2)} stroke="#633815" strokeWidth="1.6" />

            {/* 6. CUNG TƯỚNG (CỬU CUNG) NỬA DƯỚI (Phe Đỏ: hàng 7-9, cột 3-5) */}
            <line x1={colX(3)} y1={rowY(7)} x2={colX(5)} y2={rowY(9)} stroke="#633815" strokeWidth="1.6" />
            <line x1={colX(5)} y1={rowY(7)} x2={colX(3)} y2={rowY(9)} stroke="#633815" strokeWidth="1.6" />

            {/* 7. HOA THỊ (DẤU CHỮ THẬP CHUẨN CỜ TƯỚNG) TẠI VỊ TRÍ PHÁO & TỐT */}
            {renderCrossMark(colX(1), rowY(2))}
            {renderCrossMark(colX(7), rowY(2))}
            {renderCrossMark(colX(0), rowY(3), false, true)}
            {renderCrossMark(colX(2), rowY(3))}
            {renderCrossMark(colX(4), rowY(3))}
            {renderCrossMark(colX(6), rowY(3))}
            {renderCrossMark(colX(8), rowY(3), true, false)}
            {renderCrossMark(colX(0), rowY(6), false, true)}
            {renderCrossMark(colX(2), rowY(6))}
            {renderCrossMark(colX(4), rowY(6))}
            {renderCrossMark(colX(6), rowY(6))}
            {renderCrossMark(colX(8), rowY(6), true, false)}
            {renderCrossMark(colX(1), rowY(7))}
            {renderCrossMark(colX(7), rowY(7))}

            {/* 8. SÔNG SỞ HÀ - HÁN GIỚI NẰM CHÍNH GIỮA */}
            <text x={colX(2)} y="307" fill="#753e16" fontSize="23" fontWeight="bold" fontFamily="serif" textAnchor="middle">楚　河</text>
            <text x={colX(6)} y="307" fill="#753e16" fontSize="23" fontWeight="bold" fontFamily="serif" textAnchor="middle">漢　界</text>

            {/* 9. LỚP QUÂN CỜ & TƯƠNG TÁC TẠI CÁC GIAO ĐIỂM */}
            {board.map((row, r) =>
              row.map((cell, c) => {
                const cx = colX(c);
                const cy = rowY(r);
                const isSelected = selected && selected[0] === r && selected[1] === c;
                const isValid = validMoves.some(([vr, vc]) => vr === r && vc === c);
                const isLastFrom = lastMove && lastMove.from[0] === r && lastMove.from[1] === c;
                const isLastTo = lastMove && lastMove.to[0] === r && lastMove.to[1] === c;

                return (
                  <g
                    key={`point-${r}-${c}`}
                    onClick={() => handlePointClick(r, c)}
                    style={{ cursor: (cell || isValid) && (isOnline ? isMyTurn : true) ? 'pointer' : 'default' }}
                  >
                    <circle cx={cx} cy={cy} r="25" fill="transparent" />

                    {(isLastFrom || isLastTo) && (
                      <rect
                        x={cx - 16}
                        y={cy - 16}
                        width="32"
                        height="32"
                        rx="6"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2.5"
                        strokeDasharray="4 3"
                        opacity="0.85"
                      />
                    )}

                    {isSelected && (
                      <g filter="url(#glowGold)">
                        <circle cx={cx} cy={cy} r="26.5" fill="rgba(245, 158, 11, 0.25)" />
                        <circle cx={cx} cy={cy} r="26.5" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 3" />
                      </g>
                    )}

                    {isValid && !cell && (
                      <g>
                        <circle cx={cx} cy={cy} r="16" fill="rgba(16, 185, 129, 0.2)" />
                        <circle cx={cx} cy={cy} r="7.5" fill="#10b981" stroke="#ecfdf5" strokeWidth="2.5" />
                      </g>
                    )}

                    {isValid && cell && (
                      <circle cx={cx} cy={cy} r="26" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" strokeWidth="3" strokeDasharray="5 3" />
                    )}

                    {cell && (
                      <g filter="url(#pieceShadow)">
                        <circle
                          cx={cx}
                          cy={cy}
                          r="22.5"
                          fill={cell.side === 'red' ? 'url(#redPieceWood)' : 'url(#blackPieceWood)'}
                          stroke={cell.side === 'red' ? '#9a3412' : '#334155'}
                          strokeWidth="2"
                        />
                        <circle
                          cx={cx}
                          cy={cy}
                          r="18.5"
                          fill="none"
                          stroke={cell.side === 'red' ? 'rgba(154, 52, 18, 0.35)' : 'rgba(51, 65, 85, 0.35)'}
                          strokeWidth="1"
                          strokeDasharray="3 2"
                        />
                        <circle
                          cx={cx}
                          cy={cy - 1}
                          r="20.5"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.55)"
                          strokeWidth="1"
                        />
                        <text
                          x={cx}
                          y={cy + 7.5}
                          textAnchor="middle"
                          fill={cell.side === 'red' ? '#dc2626' : '#0f172a'}
                          fontSize="21"
                          fontWeight="bold"
                          fontFamily="'Noto Serif SC', 'KaiTi', 'STKaiti', serif"
                          style={{ userSelect: 'none', pointerEvents: 'none' }}
                        >
                          {cell.label}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};
