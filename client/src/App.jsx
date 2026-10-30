import React, { useState, useEffect } from "react";
import HostView from "./components/HostView";
import PlayerView from "./components/PlayerView";
import QuizEditor from "./components/QuizEditor";
import AgribankLogo from "./components/AgribankLogo";
import AdminLoginModal from "./components/AdminLoginModal";
import {
  Sparkles,
  Users,
  Award,
  Play,
  ShieldCheck,
  Smartphone,
  Zap,
  Edit3,
  Lock,
  Building2,
  CheckCircle2
} from "lucide-react";

export default function App() {
  const [mode, setMode] = useState("HOME"); // "HOME", "HOST", "PLAYER", "EDITOR"
  const [initialPin, setInitialPin] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingMode, setPendingMode] = useState(null);

  useEffect(() => {
    // Check if user came from a shared link or QR code with ?pin=123456
    const urlParams = new URLSearchParams(window.location.search);
    const pin = urlParams.get("pin");
    if (pin) {
      setInitialPin(pin);
      setMode("PLAYER");
    }
  }, []);

  const handleProtectedAction = (target) => {
    const token = sessionStorage.getItem("agribank_admin_token");
    if (token) {
      setMode(target);
    } else {
      setPendingMode(target);
      setShowLoginModal(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    if (pendingMode) {
      setMode(pendingMode);
      setPendingMode(null);
    }
  };

  if (mode === "HOST") {
    return (
      <HostView
        onExit={() => setMode("HOME")}
        onOpenEditor={() => handleProtectedAction("EDITOR")}
      />
    );
  }

  if (mode === "PLAYER") {
    return <PlayerView initialPin={initialPin} onExit={() => setMode("HOME")} />;
  }

  if (mode === "EDITOR") {
    return <QuizEditor onBack={() => setMode("HOME")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-slate-950 to-emerald-950 text-white flex flex-col justify-between select-none relative overflow-hidden font-sans">
      {/* Decorative Brand Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Navbar */}
      <header className="px-6 py-5 max-w-7xl mx-auto w-full flex items-center justify-between z-10 border-b border-red-500/20 bg-slate-950/40 backdrop-blur-md">
        <AgribankLogo size="md" showSlogan={true} />

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleProtectedAction("EDITOR")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-red-900/40 hover:bg-red-900/60 text-amber-300 border border-amber-400/30 transition cursor-pointer"
          >
            <Edit3 className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Quản Lý & Soạn Câu Hỏi</span>
            <span className="sm:hidden">Soạn câu</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto w-full px-6 py-8 flex-1 flex flex-col items-center justify-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 text-amber-300 border border-amber-400/40 text-xs font-bold mb-6 animate-pulse-subtle">
          <Sparkles className="w-4 h-4 text-amber-400" />
          HỘI THI TRỰC TUYẾN TOÀN HỆ THỐNG AGRIBANK
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4 max-w-3xl">
          Đấu Trường Tri Thức{" "}
          <span className="bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
            Agribank Live
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-medium">
          Hệ thống thi trắc nghiệm tương tác thời gian thực dành cho <strong>150 – 200 thí sinh</strong>, gồm <strong>2 phần thi (20 câu hỏi)</strong>, thang điểm phân rã 5s và vinh danh trực tiếp.
        </p>

        {/* Action Cards: Host vs Player */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-xl mb-6">
          {/* Host Card (Protected) */}
          <button
            onClick={() => handleProtectedAction("HOST")}
            className="group relative bg-gradient-to-b from-red-900/70 to-slate-900/90 hover:to-red-900/50 border-2 border-red-500/60 hover:border-amber-400 rounded-3xl p-6 text-left shadow-2xl shadow-red-950/60 transition-all duration-300 active:scale-95 cursor-pointer flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-red-600/30 border border-amber-400/50 flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                  <Play className="w-6 h-6 text-amber-300 fill-current" />
                </div>
                <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-500/20 text-amber-300 border border-red-500/30">
                  <Lock className="w-3 h-3" /> Cần tài khoản Host
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-1">Dành Cho Quản Trò (Host)</h3>
              <p className="text-xs text-slate-300">
                Tạo phòng thi, phát mã QR trên máy chiếu, điều khiển vòng thi và xuất file Excel kết quả.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 group-hover:text-amber-200">
              Đăng nhập & Bắt đầu phòng thi →
            </div>
          </button>

          {/* Player Card (Open for all) */}
          <button
            onClick={() => setMode("PLAYER")}
            className="group relative bg-gradient-to-b from-emerald-950/70 to-slate-900/90 hover:to-emerald-950/50 border-2 border-emerald-500/60 hover:border-emerald-400 rounded-3xl p-6 text-left shadow-2xl shadow-emerald-950/60 transition-all duration-300 active:scale-95 cursor-pointer flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                  <Smartphone className="w-6 h-6 text-emerald-300" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Vào tự do
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-1">Dành Cho Thí Sinh</h3>
              <p className="text-xs text-slate-300">
                Nhập Game PIN hoặc quét mã QR trên điện thoại di động để tham gia trả lời 20 câu hỏi.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 group-hover:text-emerald-200">
              Vào phòng thi ngay →
            </div>
          </button>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
          <div className="bg-slate-900/70 border border-red-500/20 rounded-2xl p-3 flex items-center gap-2.5 text-left">
            <Users className="w-5 h-5 text-red-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">150 – 200 Thí sinh</div>
              <div className="text-[10px] text-slate-400">Đồng thời, cực mượt</div>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-emerald-500/20 rounded-2xl p-3 flex items-center gap-2.5 text-left">
            <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">2 Phần thi</div>
              <div className="text-[10px] text-slate-400">20 câu hỏi chuẩn hóa</div>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-amber-500/20 rounded-2xl p-3 flex items-center gap-2.5 text-left">
            <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">Phân rã 5 giây</div>
              <div className="text-[10px] text-slate-400">100% → 50% → 25%</div>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-red-500/20 rounded-2xl p-3 flex items-center gap-2.5 text-left">
            <ShieldCheck className="w-5 h-5 text-amber-300 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">Bảo mật Quản trò</div>
              <div className="text-[10px] text-slate-400">Fix cứng tài khoản</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-slate-400 border-t border-red-500/20 z-10 bg-slate-950/50">
        © Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank) • Hệ thống Hội thi Trực tuyến
      </footer>

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleLoginSuccess}
        targetMode={pendingMode}
      />
    </div>
  );
}
