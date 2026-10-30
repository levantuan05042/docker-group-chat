import React, { useState } from "react";
import { Lock, User, ShieldCheck, X, ArrowRight, AlertCircle } from "lucide-react";
import AgribankLogo from "./AgribankLogo";

export default function AdminLoginModal({ isOpen, onClose, onSuccess, targetMode = "HOST" }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password })
      });
      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem("agribank_admin_token", data.token);
        sessionStorage.setItem("agribank_admin_user", JSON.stringify(data.user));
        onSuccess();
      } else {
        setErrorMsg(data.message || "Tên đăng nhập hoặc mật khẩu không chính xác!");
      }
    } catch (err) {
      setErrorMsg("Không thể kết nối máy chủ xác thực!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-gradient-to-b from-slate-900 to-red-950 border-2 border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-950/80 relative text-white">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <AgribankLogo size="md" showSlogan={false} />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-300 border border-red-500/30 text-xs font-bold mb-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            XÁC THỰC QUẢN TRÒ (HOST)
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Khu vực bảo mật dành cho Ban tổ chức / Quản trị viên
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-1.5">
              Tên tài khoản Quản trị
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập tên tài khoản..."
                required
                autoFocus
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white font-medium text-sm focus:outline-none focus:border-red-400 placeholder-slate-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-1.5">
              Mật khẩu
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu..."
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white font-medium text-sm focus:outline-none focus:border-red-400 placeholder-slate-600"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-4 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-amber-300 hover:to-yellow-200 shadow-xl shadow-amber-500/20 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Đang xác thực..." : "ĐĂNG NHẬP"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
