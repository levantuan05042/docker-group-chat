import React, { useState } from 'react';
import { playSound, triggerConfetti } from '../utils/effects';

interface XiangqiGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info', msg: string) => void;
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

export const XiangqiGame: React.FC<XiangqiGameProps> = ({ onWin, showToast }) => {
  const [board, setBoard] = useState<XBoard>(createInitialBoard);
  const [turn, setTurn] = useState<Side>('red');
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [validMoves, setValidMoves] = useState<[number, number][]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [vsAI, setVsAI] = useState<boolean>(true);
  const [lastMove, setLastMove] = useState<{ from: [number, number]; to: [number, number] } | null>(null);

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
    if (vsAI && turn === 'black') return;

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
    if (p && p.side === turn) {
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
    setLastMove({ from: [sr, sc], to: [tr, tc] });

    if (target) {
      playSound('capture');
      if (target.type === 'k') {
        const winSide = piece.side === 'red' ? 'Phe Đỏ' : 'Phe Đen';
        setWinner(winSide);
        playSound('win');
        triggerConfetti();
        showToast('success', `🎉 Tướng đối phương đã bị bắt! ${winSide} chiến thắng vang dội!`);
        if (piece.side === 'red' || !vsAI) onWin('Cờ Tướng', 60);
        return;
      }
    } else {
      playSound('move');
    }

    const nextSide: Side = turn === 'red' ? 'black' : 'red';
    setTurn(nextSide);

    if (vsAI && nextSide === 'black') {
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
    setBoard(createInitialBoard());
    setTurn('red');
    setSelected(null);
    setValidMoves([]);
    setWinner(null);
    setLastMove(null);
    playSound('click');
  };

  return (
    <div className="game-wrapper xiangqi-real-wrapper">
      <div className="game-top-bar">
        <div className="game-status-badge">
          {winner ? (
            <span className="win-announce">🏆 Thắng cuộc: <strong>{winner}</strong></span>
          ) : (
            <span>Lượt đi: <strong style={{ color: turn === 'red' ? '#ef4444' : '#cbd5e1' }}>{turn === 'red' ? 'Phe Đỏ (帥)' : 'Phe Đen (將)'}</strong> {vsAI && turn === 'black' && '(Máy suy nghĩ...)'}</span>
          )}
        </div>

        <div className="game-actions">
          <button className={`mode-toggle ${vsAI ? 'active' : ''}`} onClick={() => { setVsAI(!vsAI); resetGame(); }}>
            {vsAI ? '🤖 Đấu với AI' : '👥 Đấu 2 Người'}
          </button>
          <button className="reset-btn" onClick={resetGame}>🔄 Ván mới</button>
        </div>
      </div>

      {/* BÀN CỜ TƯỚNG CHUẨN THỰC TẾ GỖ MUN (10 HÀNG x 9 CỘT GIAO ĐIỂM) */}
      <div className="xiangqi-real-board-container">
        <div className="xiangqi-table-wood">
          {/* Lớp nền SVG vẽ bàn cờ chuẩn, dòng sông, cung tướng */}
          <svg className="xiangqi-svg-board" viewBox="0 0 540 600">
            {/* Viền ngoài bàn cờ */}
            <rect x="20" y="20" width="500" height="560" fill="#e7b579" stroke="#5c3818" strokeWidth="4" />
            <rect x="28" y="28" width="484" height="544" fill="none" stroke="#7c4a20" strokeWidth="1.5" />

            {/* 10 Đường ngang */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(r => (
              <line
                key={`h-${r}`}
                x1="35"
                y1={35 + r * 58.8}
                x2="505"
                y2={35 + r * 58.8}
                stroke="#683d16"
                strokeWidth="1.8"
              />
            ))}

            {/* 9 Đường dọc nửa trên (Hàng 0-4) */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(c => (
              <line
                key={`vt-${c}`}
                x1={35 + c * 58.75}
                y1="35"
                x2={35 + c * 58.75}
                y2={35 + 4 * 58.8}
                stroke="#683d16"
                strokeWidth="1.8"
              />
            ))}

            {/* 9 Đường dọc nửa dưới (Hàng 5-9) */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(c => (
              <line
                key={`vb-${c}`}
                x1={35 + c * 58.75}
                y1={35 + 5 * 58.8}
                x2={35 + c * 58.75}
                y2={35 + 9 * 58.8}
                stroke="#683d16"
                strokeWidth="1.8"
              />
            ))}

            {/* 2 Đường dọc biên chạy xuyên qua sông */}
            <line x1="35" y1="35" x2="35" y2="564.2" stroke="#683d16" strokeWidth="2" />
            <line x1="505" y1="35" x2="505" y2="564.2" stroke="#683d16" strokeWidth="2" />

            {/* Cung Tướng Đen (chữ X hàng 0-2, cột 3-5) */}
            <line x1={35 + 3 * 58.75} y1="35" x2={35 + 5 * 58.75} y2={35 + 2 * 58.8} stroke="#683d16" strokeWidth="1.5" />
            <line x1={35 + 5 * 58.75} y1="35" x2={35 + 3 * 58.75} y2={35 + 2 * 58.8} stroke="#683d16" strokeWidth="1.5" />

            {/* Cung Tướng Đỏ (chữ X hàng 7-9, cột 3-5) */}
            <line x1={35 + 3 * 58.75} y1={35 + 7 * 58.8} x2={35 + 5 * 58.75} y2={35 + 9 * 58.8} stroke="#683d16" strokeWidth="1.5" />
            <line x1={35 + 5 * 58.75} y1={35 + 7 * 58.8} x2={35 + 3 * 58.75} y2={35 + 9 * 58.8} stroke="#683d16" strokeWidth="1.5" />

            {/* Chữ Sông: Sở Hà - Hán Giới */}
            <text x="135" y="306" fill="#84481d" fontSize="22" fontWeight="bold" fontFamily="serif" textAnchor="middle">楚　河</text>
            <text x="405" y="306" fill="#84481d" fontSize="22" fontWeight="bold" fontFamily="serif" textAnchor="middle">漢　界</text>
          </svg>

          {/* Lớp điểm tương tác và quân cờ 3D đặt trực tiếp tại các giao điểm */}
          <div className="xiangqi-intersections-grid">
            {board.map((row, r) => (
              <div key={r} className="xiangqi-i-row">
                {row.map((cell, c) => {
                  const isSelected = selected && selected[0] === r && selected[1] === c;
                  const isValid = validMoves.some(([vr, vc]) => vr === r && vc === c);
                  const isFrom = lastMove && lastMove.from[0] === r && lastMove.from[1] === c;
                  const isTo = lastMove && lastMove.to[0] === r && lastMove.to[1] === c;

                  return (
                    <div
                      key={c}
                      className={`xiangqi-point ${isSelected ? 'point-selected' : ''} ${isValid ? 'point-valid' : ''} ${isFrom || isTo ? 'point-last' : ''}`}
                      onClick={() => handlePointClick(r, c)}
                    >
                      {/* Gợi ý nước đi nếu ô trống */}
                      {isValid && !cell && <div className="xiangqi-move-marker" />}

                      {/* Quân cờ 3D khắc gỗ */}
                      {cell && (
                        <div className={`real-xpiece real-xpiece-${cell.side} ${isSelected ? 'xpiece-active' : ''}`}>
                          <div className="xpiece-bevel">
                            <span className="xpiece-text">{cell.label}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
