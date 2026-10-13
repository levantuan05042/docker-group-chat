import React, { useState } from 'react';
import { playSound, triggerConfetti } from '../utils/effects';

interface ChessGameProps {
  onWin: (gameName: string, score: number) => void;
  showToast: (type: 'success' | 'error' | 'info', msg: string) => void;
}

type PieceColor = 'w' | 'b';
type PieceType = 'p' | 'r' | 'n' | 'b' | 'q' | 'k';

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

export const ChessGame: React.FC<ChessGameProps> = ({ onWin, showToast }) => {
  const [board, setBoard] = useState<ChessBoard>(() => INITIAL_BOARD.map(r => [...r]));
  const [turn, setTurn] = useState<PieceColor>('w');
  const [selectedPos, setSelectedPos] = useState<[number, number] | null>(null);
  const [validMoves, setValidMoves] = useState<[number, number][]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [vsAI, setVsAI] = useState<boolean>(true);
  const [capturedWhite, setCapturedWhite] = useState<Piece[]>([]);
  const [capturedBlack, setCapturedBlack] = useState<Piece[]>([]);

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
      return false; // Bị cản
    };

    if (p.type === 'p') {
      const dir = color === 'w' ? -1 : 1;
      const startRow = color === 'w' ? 6 : 1;
      if (r + dir >= 0 && r + dir < 8 && !currentBoard[r + dir][c]) {
        moves.push([r + dir, c]);
        if (r === startRow && !currentBoard[r + dir * 2][c]) {
          moves.push([r + dir * 2, c]);
        }
      }
      // Ăn chéo
      [-1, 1].forEach(dc => {
        const nr = r + dir, nc = c + dc;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          const t = currentBoard[nr][nc];
          if (t && t.color !== color) moves.push([nr, nc]);
        }
      });
    } else if (p.type === 'n') {
      const nDirs = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
      nDirs.forEach(([dr, dc]) => addMove(r + dr, c + dc));
    } else if (p.type === 'b' || p.type === 'r' || p.type === 'q') {
      const dirs: [number, number][] = [];
      if (p.type === 'r' || p.type === 'q') dirs.push([0, 1], [0, -1], [1, 0], [-1, 0]);
      if (p.type === 'b' || p.type === 'q') dirs.push([1, 1], [1, -1], [-1, 1], [-1, -1]);
      dirs.forEach(([dr, dc]) => {
        let nr = r + dr, nc = c + dc;
        while (addMove(nr, nc)) {
          nr += dr;
          nc += dc;
        }
      });
    } else if (p.type === 'k') {
      const kDirs = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
      kDirs.forEach(([dr, dc]) => addMove(r + dr, c + dc));
    }

    return moves;
  };

  const handleCellClick = (r: number, c: number) => {
    if (winner) return;
    if (vsAI && turn === 'b') return;

    if (selectedPos) {
      const [sr, sc] = selectedPos;
      const isMoveValid = validMoves.some(([vr, vc]) => vr === r && vc === c);

      if (isMoveValid) {
        executeMove(sr, sc, r, c);
        setSelectedPos(null);
        setValidMoves([]);
        return;
      }
    }

    // Chọn quân mới
    const piece = board[r][c];
    if (piece && piece.color === turn) {
      setSelectedPos([r, c]);
      const moves = getMoves(r, c, board);
      setValidMoves(moves);
      playSound('click');
    } else {
      setSelectedPos(null);
      setValidMoves([]);
    }
  };

  const executeMove = (sr: number, sc: number, tr: number, tc: number) => {
    const p = board[sr][sc];
    if (!p) return;

    const target = board[tr][tc];
    const newBoard = board.map(row => [...row]);
    newBoard[tr][tc] = p;
    newBoard[sr][sc] = null;

    // Phong cấp tốt lên Hậu nếu chạm đáy
    if (p.type === 'p') {
      if ((p.color === 'w' && tr === 0) || (p.color === 'b' && tr === 7)) {
        newBoard[tr][tc] = { type: 'q', color: p.color };
      }
    }

    setBoard(newBoard);

    if (target) {
      playSound('capture');
      if (target.color === 'w') setCapturedWhite(prev => [...prev, target]);
      else setCapturedBlack(prev => [...prev, target]);

      if (target.type === 'k') {
        const winTeam = p.color === 'w' ? 'Trắng' : 'Đen';
        setWinner(winTeam);
        playSound('win');
        triggerConfetti();
        showToast('success', `🎉 Vua đối phương đã bị bắt! Phe ${winTeam} giành chiến thắng!`);
        if (p.color === 'w' || !vsAI) onWin('Cờ Vua', 50);
        return;
      }
    } else {
      playSound('move');
    }

    const nextTurn = turn === 'w' ? 'b' : 'w';
    setTurn(nextTurn);

    if (vsAI && nextTurn === 'b') {
      setTimeout(() => makeAIMove(newBoard), 400);
    }
  };

  const makeAIMove = (currentBoard: ChessBoard) => {
    const allMoves: { sr: number; sc: number; tr: number; tc: number; score: number }[] = [];

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = currentBoard[r][c];
        if (piece && piece.color === 'b') {
          const moves = getMoves(r, c, currentBoard);
          moves.forEach(([tr, tc]) => {
            const target = currentBoard[tr][tc];
            let score = 0;
            if (target) {
              if (target.type === 'k') score = 1000;
              else if (target.type === 'q') score = 90;
              else if (target.type === 'r') score = 50;
              else if (target.type === 'b' || target.type === 'n') score = 30;
              else score = 10;
            }
            score += (tr - r); // Tiến quân xuống
            allMoves.push({ sr: r, sc: c, tr, tc, score });
          });
        }
      }
    }

    if (allMoves.length === 0) {
      setWinner('Trắng (Hòa/Thắng)');
      return;
    }

    allMoves.sort((a, b) => b.score - a.score);
    const chosen = allMoves[0];

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
        setWinner('Đen (Máy)');
        playSound('error');
        showToast('error', 'Máy đã chiếu tướng bắt Vua! Bạn đã thua.');
        return;
      }
    } else {
      playSound('move');
    }

    setTurn('w');
  };

  const resetGame = () => {
    setBoard(INITIAL_BOARD.map(r => [...r]));
    setTurn('w');
    setSelectedPos(null);
    setValidMoves([]);
    setWinner(null);
    setCapturedWhite([]);
    setCapturedBlack([]);
    playSound('click');
  };

  return (
    <div className="game-wrapper chess-container">
      <div className="game-top-bar">
        <div className="game-status-badge">
          {winner ? (
            <span className="win-announce">🏆 Thắng cuộc: <strong>{winner}</strong></span>
          ) : (
            <span>Lượt đi: <strong style={{ color: turn === 'w' ? '#f8fafc' : '#fb923c' }}>{turn === 'w' ? 'Quân Trắng ♔' : 'Quân Đen ♚'}</strong> {vsAI && turn === 'b' && '(AI suy nghĩ...)'}</span>
          )}
        </div>

        <div className="game-actions">
          <button className={`mode-toggle ${vsAI ? 'active' : ''}`} onClick={() => { setVsAI(!vsAI); resetGame(); }}>
            {vsAI ? '🤖 Đấu với AI' : '👥 Đấu 2 Người'}
          </button>
          <button className="reset-btn" onClick={resetGame}>🔄 Ván mới</button>
        </div>
      </div>

      <div className="chess-layout">
        {/* Quân Đen ăn được */}
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

        {/* Quân Trắng ăn được */}
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
