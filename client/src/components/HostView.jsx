import React, { useState, useEffect } from "react";
import { socket } from "../utils/socket";
import { sounds } from "../utils/sound";
import { QRCodeSVG } from "qrcode.react";
import confetti from "canvas-confetti";
import {
  Trophy,
  Users,
  Timer,
  Play,
  SkipForward,
  Download,
  Volume2,
  VolumeX,
  Sparkles,
  Bot,
  Flame,
  Award,
  CheckCircle2,
  Share2,
  Copy,
  Check,
  Clock
} from "lucide-react";

export default function HostView({ onExit }) {
  const [roomCode, setRoomCode] = useState("");
  const [quizMeta, setQuizMeta] = useState(null);
  const [status, setStatus] = useState("CREATING"); // CREATING, LOBBY, QUESTION, QUESTION_RESULT, LEADERBOARD, PART_SUMMARY, GAME_OVER
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [answerStat, setAnswerStat] = useState({ answeredCount: 0, totalPlayers: 0 });
  const [resultData, setResultData] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [partSummary, setPartSummary] = useState(null);
  const [gameOverData, setGameOverData] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isAddingBots, setIsAddingBots] = useState(false);
  const [selectedTimeLimit, setSelectedTimeLimit] = useState(15);

  useEffect(() => {
    // Create room when component mounts
    socket.emit("host:create_room", null, (res) => {
      if (res.success) {
        setRoomCode(res.roomCode);
        setQuizMeta(res.quizMeta);
        setStatus("LOBBY");
      }
    });

    socket.on("room:players_updated", (data) => {
      setPlayers(data.players || []);
    });

    socket.on("host:question_view", (q) => {
      setCurrentQuestion(q);
      setTimeLeft(q.timeLimit);
      setAnswerStat({ answeredCount: 0, totalPlayers: players.length });
      setStatus("QUESTION");
      sounds.playClick();
    });

    socket.on("host:answer_stat", (stat) => {
      setAnswerStat(stat);
    });

    socket.on("room:timer_tick", ({ timeLeft: tl }) => {
      setTimeLeft(tl);
      if (tl <= 5 && tl > 0) {
        sounds.playTick();
      }
    });

    socket.on("room:state", (data) => {
      if (data.status === "QUESTION_RESULT") {
        setStatus("QUESTION_RESULT");
        setResultData(data);
        sounds.playCorrect();
      } else if (data.status === "LEADERBOARD") {
        setStatus("LEADERBOARD");
        setLeaderboard(data.leaderboard);
      } else if (data.status === "PART_SUMMARY") {
        setStatus("PART_SUMMARY");
        setPartSummary(data);
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } else if (data.status === "GAME_OVER") {
        setStatus("GAME_OVER");
        setGameOverData(data);
        sounds.playVictory();
        triggerVictoryConfetti();
      }
    });

    return () => {
      socket.off("room:players_updated");
      socket.off("host:question_view");
      socket.off("host:answer_stat");
      socket.off("room:timer_tick");
      socket.off("room:state");
    };
  }, []);

  const triggerVictoryConfetti = () => {
    const end = Date.now() + 3000;
    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 }
      });
    }, 300);
  };

  const toggleSound = () => {
    const next = sounds.toggle();
    setSoundEnabled(next);
  };

  const copyJoinLink = () => {
    const link = `${window.location.origin}?pin=${roomCode}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addBots = (count) => {
    setIsAddingBots(true);
    socket.emit("host:add_bots", { roomCode, count }, (res) => {
      setIsAddingBots(false);
      sounds.playClick();
    });
  };

  const startQuiz = () => {
    socket.emit("host:start_quiz", { roomCode, overrideTimeLimit: selectedTimeLimit });
  };

  const nextQuestion = () => {
    socket.emit("host:next_question", { roomCode });
  };

  const showLeaderboard = () => {
    socket.emit("host:show_leaderboard", { roomCode });
  };

  const joinUrl = `${window.location.origin}?pin=${roomCode}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/60 to-slate-950 text-white flex flex-col font-sans select-none">
      {/* Top Navigation Bar */}
      <header className="h-16 border-b border-purple-500/20 bg-slate-950/60 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-black text-xl shadow-lg shadow-purple-500/30">
            W
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-wide bg-gradient-to-r from-purple-300 via-pink-200 to-amber-200 bg-clip-text text-transparent">
              WAYGROUND LIVE
            </span>
            <span className="ml-2 text-xs uppercase px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Host Mode
            </span>
          </div>
        </div>

        {/* Center: PIN Badge */}
        {roomCode && (
          <div className="flex items-center gap-2 bg-slate-900/90 border border-purple-500/40 px-4 py-1.5 rounded-full shadow-inner">
            <span className="text-xs text-purple-300 font-semibold uppercase">MÃ PIN:</span>
            <span className="font-mono font-black text-xl text-amber-400 tracking-widest">{roomCode}</span>
            <button
              onClick={copyJoinLink}
              className="ml-1 p-1 hover:text-purple-300 transition text-slate-400"
              title="Copy link tham gia"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Right tools */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
            title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-purple-400" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
          </button>
          <button
            onClick={onExit}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition"
          >
            Thoát phòng
          </button>
        </div>
      </header>

      {/* Main Content Areas */}
      <main className="flex-1 flex flex-col p-6 max-w-7xl mx-auto w-full">
        {/* 1. LOBBY SCREEN */}
        {status === "LOBBY" && (
          <div className="flex-1 flex flex-col lg:flex-row gap-8 items-stretch justify-center py-4">
            {/* Left: Join Box & QR */}
            <div className="flex-1 bg-slate-900/80 border border-purple-500/30 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-56 h-56 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Phòng chờ đang mở
                </div>
                <h1 className="text-3xl font-black text-white mb-2">
                  Quét mã hoặc vào link để tham gia
                </h1>
                <p className="text-slate-400 text-sm mb-6">
                  Thí sinh dùng điện thoại hoặc máy tính truy cập trang và nhập mã PIN dưới đây:
                </p>

                {/* Big Game PIN display */}
                <div className="bg-gradient-to-br from-purple-900/60 to-slate-950 border-2 border-purple-500/50 rounded-2xl p-6 text-center shadow-xl mb-6">
                  <div className="text-xs uppercase font-bold tracking-wider text-purple-300 mb-1">MÃ PHÒNG (GAME PIN)</div>
                  <div className="text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 font-mono py-1">
                    {roomCode}
                  </div>
                </div>

                {/* Join link & QR code */}
                <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-950/60 border border-slate-800 p-5 rounded-2xl">
                  <div className="bg-white p-3 rounded-xl shadow-md">
                    <QRCodeSVG value={joinUrl} size={130} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-xs text-slate-400 font-medium">Đường dẫn tham gia trực tiếp:</div>
                    <div className="text-sm font-mono text-purple-300 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 mt-1 mb-2 truncate max-w-xs sm:max-w-md">
                      {joinUrl}
                    </div>
                    <button
                      onClick={copyJoinLink}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {copied ? "Đã sao chép link!" : "Sao chép đường dẫn"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bot Simulation Buttons for Scale Testing */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs text-slate-300 font-medium">Thử nghiệm tải (200 người):</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    disabled={isAddingBots || players.length >= 200}
                    onClick={() => addBots(50)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 transition disabled:opacity-50"
                  >
                    +50 Thí sinh Test
                  </button>
                  <button
                    disabled={isAddingBots || players.length >= 200}
                    onClick={() => addBots(100)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 transition disabled:opacity-50"
                  >
                    +100 Thí sinh Test
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Player Roster & Start Button */}
            <div className="w-full lg:w-96 bg-slate-900/80 border border-purple-500/30 rounded-3xl p-6 flex flex-col backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <Users className="w-6 h-6 text-purple-400" />
                  <span className="font-bold text-lg text-white">Thí sinh đã vào</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-bold text-sm border border-purple-500/30">
                  {players.length} / 200
                </div>
              </div>

              {/* Players Grid / List */}
              <div className="flex-1 overflow-y-auto my-4 pr-1 space-y-2 max-h-[420px]">
                {players.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 py-16">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-3 animate-pulse">
                      <Users className="w-6 h-6 text-slate-400" />
                    </div>
                    <p className="text-sm">Đang chờ thí sinh tham gia...</p>
                    <p className="text-xs text-slate-600 mt-1">Hoặc bấm "+50 Thí sinh Test" để kiểm tra</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {players.map((p) => (
                      <div
                        key={p.id}
                        className="bg-slate-950/70 border border-slate-800/80 rounded-xl px-3 py-2 flex items-center gap-2 truncate text-left shadow-sm"
                      >
                        <span className="text-lg">{p.avatar}</span>
                        <span className="text-xs font-semibold text-slate-200 truncate">{p.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quiz Structure Info Badge */}
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs text-slate-400 mb-3 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Quy mô cuộc thi:</span>
                  <span className="text-purple-300 font-semibold">2 Phần • 20 Câu hỏi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phần 1:</span>
                  <span className="text-slate-300">Công Nghệ (10 câu)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phần 2:</span>
                  <span className="text-slate-300">Tư Duy & Tốc Độ (10 câu)</span>
                </div>
              </div>

              {/* Quick Time Limit Setup */}
              <div className="bg-slate-950/80 border border-purple-500/30 rounded-2xl p-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Thời gian mỗi câu:
                  </span>
                  <span className="text-xs font-mono font-black text-amber-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {selectedTimeLimit} giây
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[10, 15, 20, 30, 60].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTimeLimit(t)}
                      className={`py-1.5 text-xs font-bold rounded-lg transition cursor-pointer border ${
                        selectedTimeLimit === t
                          ? "bg-purple-600 text-white border-purple-400 shadow-md scale-105"
                          : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                      }`}
                    >
                      {t}s
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Button */}
              <button
                disabled={players.length === 0}
                onClick={startQuiz}
                className="w-full py-4 rounded-2xl font-black text-lg text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/20 active:scale-[0.98] transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-6 h-6 fill-current" />
                BẮT ĐẦU CUỘC THI ({players.length})
              </button>
            </div>
          </div>
        )}

        {/* 2. QUESTION SCREEN (LIVE PRESENTATION) */}
        {status === "QUESTION" && currentQuestion && (
          <div className="flex-1 flex flex-col justify-between max-w-5xl mx-auto w-full py-2">
            {/* Top Info Banner */}
            <div className="flex items-center justify-between bg-slate-900/80 border border-purple-500/30 rounded-2xl px-6 py-3.5 backdrop-blur-md mb-6 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  {currentQuestion.partTitle}
                </span>
                <span className="text-sm font-semibold text-slate-300">
                  Câu hỏi {currentQuestion.overallIndex} / {currentQuestion.totalQuestions}
                </span>
              </div>

              {/* Circular Countdown Timer */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-950/80 px-4 py-1.5 rounded-full border border-purple-500/40">
                  <Timer className="w-5 h-5 text-amber-400" />
                  <span className={`text-2xl font-black font-mono ${timeLeft <= 5 ? "text-rose-400 animate-pulse" : "text-amber-300"}`}>
                    {timeLeft}s
                  </span>
                </div>

                <div className="text-xs text-slate-400">
                  Đã trả lời:{" "}
                  <span className="text-purple-300 font-bold text-sm">
                    {answerStat.answeredCount} / {answerStat.totalPlayers || players.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Big Question Card */}
            <div className="bg-slate-900/90 border border-purple-500/40 rounded-3xl p-8 lg:p-12 text-center shadow-2xl backdrop-blur-md relative overflow-hidden mb-6 flex-1 flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-linear"
                  style={{ width: `${(timeLeft / currentQuestion.timeLimit) * 100}%` }}
                />
              </div>

              <h2 className="text-2xl lg:text-4xl font-extrabold text-white leading-relaxed max-w-4xl">
                {currentQuestion.question}
              </h2>
            </div>

            {/* 4 Colored Option Cards (Wayground classic style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {currentQuestion.options.map((opt, idx) => {
                const styles = [
                  "from-rose-600 to-red-700 border-red-500/40 text-white", // Red / Triangle
                  "from-blue-600 to-indigo-700 border-blue-500/40 text-white", // Blue / Diamond
                  "from-amber-500 to-orange-600 border-amber-500/40 text-white", // Yellow / Circle
                  "from-emerald-600 to-teal-700 border-emerald-500/40 text-white" // Green / Square
                ];
                const shapes = ["▲", "◆", "●", "■"];
                const letters = ["A", "B", "C", "D"];

                return (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${styles[idx]} border-2 rounded-2xl p-5 flex items-center gap-4 shadow-lg`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-black/25 flex items-center justify-center font-black text-xl flex-shrink-0 shadow-inner">
                      {letters[idx]}
                    </div>
                    <div className="text-lg lg:text-xl font-bold flex-1">{opt}</div>
                    <div className="text-sm opacity-50 font-mono">{shapes[idx]}</div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-slate-500">
                Thí sinh đang bấm trả lời trên thiết bị cá nhân...
              </div>
              <button
                onClick={() => {
                  setTimeLeft(0);
                  socket.emit("host:skip_timer", { roomCode });
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition"
              >
                <SkipForward className="w-4 h-4" />
                Hết giờ sớm
              </button>
            </div>
          </div>
        )}

        {/* 3. QUESTION RESULT (DISTRIBUTION & EXPLANATION) */}
        {status === "QUESTION_RESULT" && resultData && (
          <div className="flex-1 flex flex-col justify-between max-w-4xl mx-auto w-full py-4">
            <div className="bg-slate-900/90 border border-purple-500/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  KẾT QUẢ CÂU TRẢ LỜI
                </div>
                <div className="text-sm text-slate-400">
                  Tổng lượt nộp: <strong className="text-white">{resultData.totalAnswered}</strong> / {resultData.totalPlayers} thí sinh
                </div>
              </div>

              {/* Bars Chart of Answers */}
              <div className="space-y-3.5 mb-8">
                {currentQuestion?.options.map((opt, idx) => {
                  const count = resultData.distribution[idx] || 0;
                  const percent = resultData.totalAnswered > 0 ? Math.round((count / resultData.totalAnswered) * 100) : 0;
                  const isCorrect = idx === resultData.correctIndex;
                  const letters = ["A", "B", "C", "D"];

                  return (
                    <div
                      key={idx}
                      className={`relative rounded-2xl overflow-hidden border-2 transition-all p-4 ${
                        isCorrect
                          ? "bg-emerald-950/70 border-emerald-400 ring-4 ring-emerald-500/20"
                          : "bg-slate-950/60 border-slate-800"
                      }`}
                    >
                      {/* Bar fill behind */}
                      <div
                        className={`absolute top-0 bottom-0 left-0 transition-all duration-1000 ${
                          isCorrect ? "bg-emerald-500/25" : "bg-slate-700/20"
                        }`}
                        style={{ width: `${percent}%` }}
                      />

                      <div className="relative flex items-center justify-between z-10">
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm ${
                              isCorrect ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-300"
                            }`}
                          >
                            {letters[idx]}
                          </span>
                          <span className={`text-base font-bold ${isCorrect ? "text-emerald-200" : "text-slate-300"}`}>
                            {opt}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-slate-400">{count} người</span>
                          <span className={`font-mono font-black text-lg ${isCorrect ? "text-emerald-400" : "text-slate-400"}`}>
                            {percent}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation Card */}
              {resultData.explanation && (
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 text-left">
                  <div className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    GIẢI THÍCH ĐÁP ÁN:
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{resultData.explanation}</p>
                </div>
              )}
            </div>

            {/* Next Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={showLeaderboard}
                className="px-6 py-3.5 rounded-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-xl shadow-purple-600/30 active:scale-95 transition flex items-center gap-2 cursor-pointer"
              >
                <Trophy className="w-5 h-5 text-amber-300" />
                Xem Bảng Xếp Hạng
              </button>
              <button
                onClick={nextQuestion}
                className="px-6 py-3.5 rounded-2xl font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 active:scale-95 transition flex items-center gap-2 cursor-pointer"
              >
                Câu hỏi tiếp theo
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* 4. LEADERBOARD SCREEN */}
        {status === "LEADERBOARD" && (
          <div className="flex-1 flex flex-col justify-between max-w-4xl mx-auto w-full py-4">
            <div className="bg-slate-900/90 border border-purple-500/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white">BẢNG XẾP HẠNG TOP DẪN ĐẦU</h2>
                    <p className="text-xs text-slate-400">Được cập nhật tự động theo điểm số và tốc độ trả lời</p>
                  </div>
                </div>
                <div className="text-sm font-semibold px-4 py-1.5 rounded-full bg-slate-800 text-slate-300">
                  Top 10 trên {players.length} người
                </div>
              </div>

              {/* Leaderboard Table List */}
              <div className="mt-6 space-y-2.5">
                {leaderboard.map((player, idx) => {
                  const isTop3 = idx < 3;
                  const rankColors = [
                    "from-amber-400 to-yellow-600 text-slate-950 font-black", // 1st
                    "from-slate-200 to-slate-400 text-slate-950 font-black", // 2nd
                    "from-amber-700 to-orange-800 text-white font-black" // 3rd
                  ];

                  return (
                    <div
                      key={player.id}
                      className={`flex items-center justify-between px-5 py-3.5 rounded-2xl border transition ${
                        idx === 0
                          ? "bg-amber-500/10 border-amber-500/40 shadow-lg shadow-amber-500/10"
                          : "bg-slate-950/70 border-slate-800/80 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-md ${
                            isTop3 ? `bg-gradient-to-br ${rankColors[idx]}` : "bg-slate-800 text-slate-400 font-bold"
                          }`}
                        >
                          #{player.rank}
                        </div>
                        <span className="text-2xl">{player.avatar}</span>
                        <div>
                          <div className="font-bold text-white text-base flex items-center gap-2">
                            {player.name}
                            {player.streak >= 2 && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 inline-flex items-center gap-1">
                                <Flame className="w-3 h-3 fill-current" />
                                {player.streak} streak
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500">Đúng {player.correctCount} câu</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-mono font-black text-xl text-amber-400">
                          {player.score.toLocaleString()} đ
                        </div>
                        {player.lastPointsAwarded > 0 && (
                          <div className="text-xs text-emerald-400 font-semibold">
                            +{player.lastPointsAwarded}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={nextQuestion}
                className="px-8 py-4 rounded-2xl font-black text-lg bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-slate-950 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/20 active:scale-95 transition flex items-center gap-2 cursor-pointer"
              >
                Tiếp tục câu hỏi
                <SkipForward className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>
        )}

        {/* 5. PART SUMMARY SCREEN (TRANSITION BETWEEN PART 1 AND PART 2) */}
        {status === "PART_SUMMARY" && partSummary && (
          <div className="flex-1 flex flex-col justify-center items-center max-w-3xl mx-auto w-full py-8 text-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/40 animate-bounce">
              <Award className="w-10 h-10 text-white" />
            </div>

            <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 mb-3">
              GIẢI LAO & TỔNG KẾT GIAI ĐOẠN
            </span>

            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Chúc Mừng! Hoàn Thành Phần 1!
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed">
              Các thí sinh vừa xuất sắc vượt qua 10 câu hỏi Công Nghệ. Tiếp theo sẽ là{" "}
              <strong className="text-amber-300">Phần 2: 10 câu hỏi Thử Thách Logic & Tốc Độ!</strong>
            </p>

            {/* Quick podium for Part 1 */}
            <div className="w-full bg-slate-900/80 border border-purple-500/30 rounded-3xl p-6 backdrop-blur-xl mb-8">
              <div className="text-xs uppercase font-bold text-slate-400 mb-4">
                Top 5 Đang Tạm Dẫn Đầu Sau Phần 1:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {partSummary.leaderboard.slice(0, 5).map((p, idx) => (
                  <div key={p.id} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3">
                    <div className="text-2xl mb-1">{p.avatar}</div>
                    <div className="text-xs font-bold text-white truncate">{p.name}</div>
                    <div className="text-sm font-mono font-black text-amber-400 mt-1">{p.score}đ</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextQuestion}
              className="px-10 py-5 rounded-2xl font-black text-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 hover:from-amber-300 hover:to-yellow-200 shadow-2xl shadow-amber-500/30 active:scale-95 transition flex items-center gap-3 cursor-pointer"
            >
              <Play className="w-6 h-6 fill-current" />
              BẮT ĐẦU PHẦN 2 NGAY (CÂU 11 - 20)
            </button>
          </div>
        )}

        {/* 6. GAME OVER / FINAL PODIUM */}
        {status === "GAME_OVER" && gameOverData && (
          <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full py-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold mb-4">
              <Sparkles className="w-4 h-4" />
              CUỘC THI KẾT THÚC
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-2">
              VINH DANH NHÀ VÔ ĐỊCH!
            </h1>
            <p className="text-slate-400 text-sm mb-10">
              Tổng kết kết quả 20 câu hỏi của toàn bộ {gameOverData.totalPlayers} thí sinh tham gia
            </p>

            {/* 3D Olympic Podium */}
            <div className="flex items-end justify-center gap-4 sm:gap-6 mb-12 w-full max-w-2xl px-4">
              {/* 2nd Place */}
              {gameOverData.podium[1] && (
                <div className="flex-1 flex flex-col items-center">
                  <div className="text-4xl mb-2 animate-bounce">{gameOverData.podium[1].avatar}</div>
                  <div className="text-sm font-bold text-slate-200 truncate max-w-[120px]">
                    {gameOverData.podium[1].name}
                  </div>
                  <div className="text-xs font-mono text-amber-300 font-bold mb-3">
                    {gameOverData.podium[1].score} đ
                  </div>
                  <div className="w-full h-36 bg-gradient-to-t from-slate-700 to-slate-500 rounded-t-3xl border-t-4 border-slate-300 flex flex-col items-center justify-center shadow-2xl">
                    <span className="text-4xl font-black text-slate-900">2</span>
                    <span className="text-xs font-bold text-slate-950 uppercase">Á Quân</span>
                  </div>
                </div>
              )}

              {/* 1st Place */}
              {gameOverData.podium[0] && (
                <div className="flex-1 flex flex-col items-center">
                  <div className="text-5xl mb-2 animate-bounce">{gameOverData.podium[0].avatar}</div>
                  <div className="text-base font-black text-amber-300 truncate max-w-[140px]">
                    {gameOverData.podium[0].name}
                  </div>
                  <div className="text-sm font-mono text-amber-200 font-black mb-3">
                    {gameOverData.podium[0].score} đ
                  </div>
                  <div className="w-full h-52 bg-gradient-to-t from-amber-600 via-amber-500 to-yellow-400 rounded-t-3xl border-t-4 border-yellow-200 flex flex-col items-center justify-center shadow-2xl shadow-amber-500/30">
                    <Trophy className="w-10 h-10 text-slate-950 mb-1" />
                    <span className="text-5xl font-black text-slate-950">1</span>
                    <span className="text-xs font-black text-slate-950 uppercase tracking-widest">QUÁN QUÂN</span>
                  </div>
                </div>
              )}

              {/* 3rd Place */}
              {gameOverData.podium[2] && (
                <div className="flex-1 flex flex-col items-center">
                  <div className="text-4xl mb-2 animate-bounce">{gameOverData.podium[2].avatar}</div>
                  <div className="text-sm font-bold text-slate-200 truncate max-w-[120px]">
                    {gameOverData.podium[2].name}
                  </div>
                  <div className="text-xs font-mono text-amber-300 font-bold mb-3">
                    {gameOverData.podium[2].score} đ
                  </div>
                  <div className="w-full h-28 bg-gradient-to-t from-amber-900 to-amber-700 rounded-t-3xl border-t-4 border-amber-600 flex flex-col items-center justify-center shadow-2xl">
                    <span className="text-3xl font-black text-amber-200">3</span>
                    <span className="text-xs font-bold text-amber-200 uppercase">Hạng Ba</span>
                  </div>
                </div>
              )}
            </div>

            {/* Actions: Export Excel & Play Again */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`/api/room/${roomCode}/export`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-2xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/20 active:scale-95 transition flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Tải file Excel / CSV (Toàn bộ thí sinh)
              </a>
              <button
                onClick={onExit}
                className="px-6 py-3.5 rounded-2xl font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 active:scale-95 transition"
              >
                Tổ chức lượt thi mới
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
