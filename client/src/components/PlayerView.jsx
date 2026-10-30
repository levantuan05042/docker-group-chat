import React, { useState, useEffect } from "react";
import { socket } from "../utils/socket";
import { sounds } from "../utils/sound";
import confetti from "canvas-confetti";
import {
  Trophy,
  Timer,
  CheckCircle,
  XCircle,
  Flame,
  Sparkles,
  ArrowRight,
  LogOut,
  Award,
  Zap
} from "lucide-react";

const AVATARS = ["🚀", "🦊", "🐯", "🐼", "🦄", "⚡", "🔥", "🎯", "🌟", "🦁", "🐙", "🐬"];

export default function PlayerView({ initialPin = "", onExit }) {
  const [roomCode, setRoomCode] = useState(initialPin);
  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("🚀");
  const [joined, setJoined] = useState(false);
  const [player, setPlayer] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Game state
  const [gameStatus, setGameStatus] = useState("LOBBY"); // LOBBY, QUESTION, QUESTION_RESULT, LEADERBOARD, PART_SUMMARY, GAME_OVER
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [answerResult, setAnswerResult] = useState(null);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [partSummary, setPartSummary] = useState(null);
  const [finalResult, setFinalResult] = useState(null);

  useEffect(() => {
    // If URL has pin query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const pin = urlParams.get("pin");
    if (pin && !roomCode) setRoomCode(pin);

    socket.on("room:state", (data) => {
      if (data.status === "QUESTION") {
        setCurrentQuestion(data.question);
        setTimeLeft(data.question.timeLimit);
        setSelectedOption(null);
        setAnswerSubmitted(false);
        setAnswerResult(null);
        setCorrectOptionIndex(null);
        setGameStatus("QUESTION");
        sounds.playClick();
      } else if (data.status === "QUESTION_RESULT") {
        setGameStatus("QUESTION_RESULT");
        setCorrectOptionIndex(data.correctIndex);
        setExplanation(data.explanation);

        // Nhận điểm và kết quả ĐƯỢC TÍNH KHI HẾT THỜI GIAN
        const myResult = data.playerResults?.[socket.id];
        if (myResult) {
          setAnswerResult(myResult);
          setPlayer((prev) => ({
            ...prev,
            score: myResult.currentScore,
            streak: myResult.streak
          }));
          if (myResult.isCorrect) {
            sounds.playCorrect();
          } else {
            sounds.playIncorrect();
          }
        }
      } else if (data.status === "LEADERBOARD") {
        setGameStatus("LEADERBOARD");
      } else if (data.status === "PART_SUMMARY") {
        setGameStatus("PART_SUMMARY");
        setPartSummary(data);
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
      } else if (data.status === "GAME_OVER") {
        setGameStatus("GAME_OVER");
        setFinalResult(data);
        sounds.playVictory();
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }
    });

    socket.on("room:timer_tick", ({ timeLeft: tl }) => {
      setTimeLeft(tl);
      if (tl <= 5 && tl > 0 && !answerSubmitted) {
        sounds.playTick();
      }
    });

    return () => {
      socket.off("room:state");
      socket.off("room:timer_tick");
    };
  }, [answerSubmitted, roomCode]);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!roomCode.trim() || !name.trim()) {
      setErrorMsg("Vui lòng nhập đầy đủ Mã PIN và Tên!");
      return;
    }

    setErrorMsg("");
    socket.emit(
      "player:join",
      {
        roomCode: roomCode.trim(),
        name: name.trim(),
        avatar: selectedAvatar
      },
      (res) => {
        if (res.success) {
          setJoined(true);
          setPlayer(res.player);
          setGameStatus(res.currentStatus || "LOBBY");
          sounds.playCorrect();
        } else {
          setErrorMsg(res.message || "Không thể tham gia phòng!");
          sounds.playIncorrect();
        }
      }
    );
  };

  const handleSelectOption = (idx) => {
    if (answerSubmitted || gameStatus !== "QUESTION") return;

    setSelectedOption(idx);
    setAnswerSubmitted(true);
    sounds.playClick();

    socket.emit("player:submit_answer", {
      roomCode,
      questionId: currentQuestion.id,
      optionIndex: idx,
      timeRemaining: timeLeft
    });
  };

  // 1. JOIN SCREEN
  if (!joined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/70 to-slate-950 text-white flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 flex items-center justify-center font-black text-3xl mx-auto mb-3 shadow-lg shadow-purple-500/30">
              W
            </div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-300 via-pink-200 to-amber-200 bg-clip-text text-transparent">
              WAYGROUND LIVE
            </h1>
            <p className="text-xs text-slate-400 mt-1">Đấu trường trắc nghiệm trực tuyến</p>
          </div>

          <form onSubmit={handleJoin} className="space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs text-center font-semibold">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                Mã Game PIN (6 số)
              </label>
              <input
                type="text"
                placeholder="VD: 639201"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                maxLength={6}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-purple-500/40 text-center font-mono font-black text-2xl text-amber-300 placeholder-slate-700 focus:outline-none focus:border-amber-400 shadow-inner"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                Họ và tên thí sinh
              </label>
              <input
                type="text"
                placeholder="Nhập tên của bạn..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={24}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-purple-500/40 text-white placeholder-slate-600 focus:outline-none focus:border-purple-400 text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                Chọn Avatar
              </label>
              <div className="grid grid-cols-6 gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                {AVATARS.map((av) => (
                  <button
                    type="button"
                    key={av}
                    onClick={() => setSelectedAvatar(av)}
                    className={`h-10 text-xl rounded-lg flex items-center justify-center transition ${
                      selectedAvatar === av
                        ? "bg-purple-600 ring-2 ring-purple-400 scale-110 shadow-md"
                        : "hover:bg-slate-800"
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-4 rounded-xl font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/20 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              VÀO THI NGAY
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <button
            onClick={onExit}
            className="w-full mt-4 text-xs text-slate-500 hover:text-slate-400 text-center"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    );
  }

  // 2. PLAYER LOBBY
  if (gameStatus === "LOBBY") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/60 to-slate-950 text-white flex flex-col justify-center items-center p-6 text-center">
        <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-purple-500/50 flex items-center justify-center text-5xl mb-6 shadow-2xl animate-bounce">
          {player?.avatar}
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          ĐÃ VÀO PHÒNG #{roomCode}
        </div>
        <h1 className="text-3xl font-black text-white mb-2">Xin chào, {player?.name}!</h1>
        <p className="text-slate-400 text-sm max-w-sm mb-8">
          Bạn đã sẵn sàng! Cuộc thi gồm <strong>2 Phần (20 câu hỏi)</strong> sẽ bắt đầu khi Quản trò (Host) bấm nút.
        </p>

        <div className="bg-slate-900/80 border border-purple-500/30 rounded-2xl p-4 max-w-xs w-full backdrop-blur-md">
          <div className="text-xs text-purple-300 font-semibold uppercase mb-1">Mẹo thi đấu:</div>
          <p className="text-xs text-slate-400">
            Trả lời vừa đúng vừa nhanh để nhận điểm thưởng tốc độ và nhân đôi streak!
          </p>
        </div>
      </div>
    );
  }

  // 3. LIVE QUESTION SCREEN
  if (gameStatus === "QUESTION" && currentQuestion) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-4 sm:p-6 max-w-2xl mx-auto w-full select-none">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{player?.avatar}</span>
            <div>
              <div className="text-xs text-slate-400 font-medium">{player?.name}</div>
              <div className="text-sm font-bold text-amber-300 font-mono">{player?.score || 0} đ</div>
            </div>
          </div>

          {/* Timer Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/40">
            <Timer className="w-4 h-4 text-amber-400" />
            <span className={`font-mono font-black text-base ${timeLeft <= 5 ? "text-rose-400 animate-pulse" : "text-amber-300"}`}>
              {timeLeft}s
            </span>
          </div>

          <div className="text-right">
            <div className="text-xs text-purple-400 font-bold uppercase">
              Phần {currentQuestion.partNumber}
            </div>
            <div className="text-xs text-slate-400">
              Câu {currentQuestion.overallIndex}/{currentQuestion.totalQuestions}
            </div>
          </div>
        </div>

        {/* Question Text */}
        <div className="my-6 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
            {currentQuestion.question}
          </h2>
        </div>

        {/* 4 Colored Option Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
          {currentQuestion.options.map((opt, idx) => {
            const styles = [
              "bg-gradient-to-br from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 border-red-500/40",
              "bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 border-blue-500/40",
              "bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 border-amber-500/40",
              "bg-gradient-to-br from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 border-emerald-500/40"
            ];
            const shapes = ["▲", "◆", "●", "■"];
            const isSelected = selectedOption === idx;

            return (
              <button
                key={idx}
                disabled={answerSubmitted}
                onClick={() => handleSelectOption(idx)}
                className={`${styles[idx]} border-2 rounded-2xl p-5 text-left font-bold text-lg text-white shadow-lg active:scale-95 transition-all flex items-center justify-between cursor-pointer ${
                  isSelected ? "ring-4 ring-white scale-[1.02] shadow-2xl" : ""
                } ${answerSubmitted && !isSelected ? "opacity-40" : ""}`}
              >
                <span className="flex-1 pr-2">{opt}</span>
                <span className="w-8 h-8 rounded-lg bg-black/30 flex items-center justify-center text-sm font-mono flex-shrink-0">
                  {shapes[idx]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status text */}
        <div className="text-center py-2 text-xs text-slate-500">
          {answerSubmitted ? "✓ Đã gửi câu trả lời! Đang đợi hết giờ..." : "Chạm vào ô đáp án để chọn"}
        </div>
      </div>
    );
  }

  // 4. QUESTION RESULT SCREEN
  if (gameStatus === "QUESTION_RESULT") {
    const isCorrect = answerResult?.isCorrect;

    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center p-6 text-center max-w-md mx-auto w-full">
        {isCorrect ? (
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mb-4 text-emerald-400 shadow-xl shadow-emerald-500/20 animate-bounce">
            <CheckCircle className="w-12 h-12" />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full bg-rose-500/20 border-2 border-rose-400 flex items-center justify-center mb-4 text-rose-400 shadow-xl shadow-rose-500/20">
            <XCircle className="w-12 h-12" />
          </div>
        )}

        <h1 className="text-3xl font-black mb-2">
          {answerResult?.notAnswered
            ? "HẾT GIỜ! Chưa kịp trả lời ⏳"
            : isCorrect
            ? "CHÍNH XÁC! 🎉"
            : "CHƯA ĐÚNG! 😢"}
        </h1>

        {isCorrect && (
          <div className="space-y-1 mb-3">
            <div className="text-3xl font-mono font-black text-amber-300">
              +{answerResult?.pointsAwarded} ĐIỂM
            </div>
            {answerResult?.tierPercent !== undefined && (
              <div className="text-xs font-semibold text-purple-300 bg-purple-900/40 border border-purple-500/30 px-3 py-1 rounded-full inline-block">
                ⚡ Trả lời lúc {answerResult?.timeSpent}s ({answerResult?.tierPercent}% điểm)
              </div>
            )}
          </div>
        )}

        {player?.streak >= 2 && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 text-xs font-bold mb-6">
            <Flame className="w-4 h-4 fill-current" />
            Chuỗi {player.streak} câu đúng liên tiếp!
          </div>
        )}

        <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-left my-4">
          <div className="text-xs text-purple-300 font-bold uppercase mb-1">Giải thích đáp án:</div>
          <p className="text-xs text-slate-300 leading-relaxed">{explanation}</p>
        </div>

        <p className="text-xs text-slate-500 mt-2">
          Quản trò đang chuẩn bị chuyển câu tiếp theo...
        </p>
      </div>
    );
  }

  // 5. PART SUMMARY (MID-GAME BREAK)
  if (gameStatus === "PART_SUMMARY") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center p-6 text-center max-w-md mx-auto w-full">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/30">
          <Award className="w-10 h-10 text-white" />
        </div>
        <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 mb-2">
          NGHỈ GIẢI LAO
        </span>
        <h1 className="text-3xl font-black text-white mb-2">Hoàn Thành Phần 1!</h1>
        <p className="text-slate-400 text-sm mb-6">
          Bạn đang có <strong className="text-amber-300 font-mono text-base">{player?.score || 0} điểm</strong>.
          Hãy chuẩn bị sẵn sàng cho <strong>Phần 2 (Tư duy & Tốc độ)</strong> nhé!
        </p>
        <div className="text-xs text-slate-500">Đang chờ quản trò bắt đầu Phần 2...</div>
      </div>
    );
  }

  // 6. GAME OVER (FINAL RESULT)
  if (gameStatus === "GAME_OVER") {
    const myId = socket.id;
    const myRank = finalResult?.leaderboard?.findIndex((p) => p.id === myId) + 1 || 1;
    const isTop3 = myRank <= 3;

    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center p-6 text-center max-w-md mx-auto w-full">
        <div className="text-6xl mb-4 animate-bounce">{player?.avatar}</div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40 text-xs font-bold mb-3">
          <Trophy className="w-4 h-4" />
          KẾT QUẢ CHUNG CUỘC
        </div>
        <h1 className="text-3xl font-black text-white mb-1">
          {isTop3 ? "XUẤT SẮC! BẠN VÀO TOP 3! 🏆" : "CHÚC MỪNG BẠN! 👏"}
        </h1>
        <p className="text-slate-400 text-sm mb-6">{player?.name}</p>

        {/* Stats card */}
        <div className="w-full bg-slate-900 border border-purple-500/30 rounded-3xl p-6 shadow-2xl mb-6 space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-slate-800">
            <span className="text-slate-400 text-sm">Thứ hạng:</span>
            <span className="text-xl font-black text-amber-300">
              #{myRank} / {finalResult?.totalPlayers || 200}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-800">
            <span className="text-slate-400 text-sm">Tổng điểm số:</span>
            <span className="text-xl font-mono font-black text-white">
              {(player?.score || 0).toLocaleString()} đ
            </span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-slate-400 text-sm">Số câu trả lời:</span>
            <span className="text-sm font-bold text-slate-300">20 / 20 câu</span>
          </div>
        </div>

        <button
          onClick={onExit}
          className="w-full py-4 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition"
        >
          Trở về màn hình chính
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-slate-400 text-sm animate-pulse">Đang đồng bộ dữ liệu cuộc thi...</div>
    </div>
  );
}
