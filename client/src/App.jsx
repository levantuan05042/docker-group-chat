import React, { useState, useEffect } from "react";
import HostView from "./components/HostView";
import PlayerView from "./components/PlayerView";
import QuizEditor from "./components/QuizEditor";
import { Sparkles, Users, Award, Play, ShieldCheck, Smartphone, Zap, Edit3, Settings } from "lucide-react";

export default function App() {
  const [mode, setMode] = useState("HOME"); // "HOME", "HOST", "PLAYER", "EDITOR"
  const [initialPin, setInitialPin] = useState("");

  useEffect(() => {
    // Check if user came from a shared link or QR code with ?pin=123456
    const urlParams = new URLSearchParams(window.location.search);
    const pin = urlParams.get("pin");
    if (pin) {
      setInitialPin(pin);
      setMode("PLAYER");
    }
  }, []);

  if (mode === "HOST") {
    return <HostView onExit={() => setMode("HOME")} onOpenEditor={() => setMode("EDITOR")} />;
  }

  if (mode === "PLAYER") {
    return <PlayerView initialPin={initialPin} onExit={() => setMode("HOME")} />;
  }

  if (mode === "EDITOR") {
    return <QuizEditor onBack={() => setMode("HOME")} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between select-none relative overflow-hidden font-sans">
      {/* Decorative gradient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Navbar */}
      <header className="px-6 py-5 max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 flex items-center justify-center font-black text-2xl shadow-lg shadow-purple-500/30">
            W
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-wide bg-gradient-to-r from-purple-300 via-pink-200 to-amber-200 bg-clip-text text-transparent">
              WAYGROUND
            </span>
            <span className="ml-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">LIVE</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMode("EDITOR")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 transition cursor-pointer"
          >
            <Edit3 className="w-4 h-4 text-amber-300" />
            Soạn & Sửa Câu Hỏi
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto w-full px-6 py-8 flex-1 flex flex-col items-center justify-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-semibold mb-6 animate-pulse-subtle">
          <Sparkles className="w-4 h-4 text-amber-300" />
          Hệ thống thi trắc nghiệm tương tác thời gian thực
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4 max-w-3xl">
          Đấu Trường Trắc Nghiệm Trực Tuyến{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
            200 Người Chơi
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          Bộ câu hỏi gồm <strong>2 phần (mỗi phần 10 câu)</strong>, tính điểm theo tốc độ, bảng xếp hạng trực tiếp và xuất báo cáo kết quả tức thì.
        </p>

        {/* Action Buttons: Host vs Player */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-xl mb-6">
          {/* Host Card */}
          <button
            onClick={() => setMode("HOST")}
            className="group relative bg-gradient-to-b from-purple-900/60 to-slate-900/80 hover:to-purple-900/40 border-2 border-purple-500/50 hover:border-purple-400 rounded-3xl p-6 text-left shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                <Play className="w-6 h-6 text-purple-300 fill-current" />
              </div>
              <h3 className="text-xl font-black text-white mb-1">Dành Cho Quản Trò (Host)</h3>
              <p className="text-xs text-slate-400">
                Tạo phòng, phát mã QR trên máy chiếu, điều khiển vòng thi và xuất file Excel kết quả.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300 group-hover:text-purple-200">
              Tạo phòng thi ngay →
            </div>
          </button>

          {/* Player Card */}
          <button
            onClick={() => setMode("PLAYER")}
            className="group relative bg-gradient-to-b from-emerald-950/60 to-slate-900/80 hover:to-emerald-950/40 border-2 border-emerald-500/50 hover:border-emerald-400 rounded-3xl p-6 text-left shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                <Smartphone className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-black text-white mb-1">Dành Cho Thí Sinh</h3>
              <p className="text-xs text-slate-400">
                Nhập Game PIN hoặc quét QR trên điện thoại di động để bắt đầu trả lời 20 câu hỏi.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 group-hover:text-emerald-200">
              Tham gia trả lời →
            </div>
          </button>
        </div>

        {/* Question Editor Shortcut Button */}
        <div className="mb-10 w-full max-w-xl">
          <button
            onClick={() => setMode("EDITOR")}
            className="w-full py-3.5 px-6 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-purple-500/30 text-slate-300 hover:text-white transition flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <Edit3 className="w-5 h-5 text-purple-400 group-hover:text-amber-300 transition" />
              <div className="text-left">
                <div className="text-xs font-bold text-white">Quản Lý & Soạn Câu Hỏi (2 Phần • 20 câu)</div>
                <div className="text-[11px] text-slate-400">Chỉnh sửa nội dung, 4 đáp án A/B/C/D và thời gian trả lời</div>
              </div>
            </div>
            <span className="text-xs font-semibold text-purple-400 group-hover:text-purple-300">
              Chỉnh sửa →
            </span>
          </button>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 flex items-center gap-2.5 text-left">
            <Users className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">200 Thí sinh</div>
              <div className="text-[10px] text-slate-500">Đồng thời, không lag</div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 flex items-center gap-2.5 text-left">
            <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">2 Phần thi</div>
              <div className="text-[10px] text-slate-500">Mỗi phần 10 câu</div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 flex items-center gap-2.5 text-left">
            <Zap className="w-5 h-5 text-pink-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">Thời gian thực</div>
              <div className="text-[10px] text-slate-500">WebSocket siêu tốc</div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 flex items-center gap-2.5 text-left">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">Docker Ready</div>
              <div className="text-[10px] text-slate-500">Chạy ngay 1 lệnh</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-slate-600 border-t border-slate-900 z-10">
        Wayground / Quizizz Live Interactive Quiz Platform • Xây dựng theo yêu cầu
      </footer>
    </div>
  );
}
