import React from "react";

export default function AgribankLogo({ size = "md", showSlogan = true, lightMode = false }) {
  const iconSizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-11 h-11 text-sm",
    lg: "w-16 h-16 text-lg"
  };

  return (
    <div className="flex items-center gap-3">
      {/* Stylized Agribank Diamond / Wheat Grain Logo */}
      <div
        className={`${iconSizes[size] || iconSizes.md} rounded-2xl bg-gradient-to-br from-red-700 via-red-800 to-red-950 border-2 border-amber-400/80 flex items-center justify-center font-black shadow-lg shadow-red-900/40 relative overflow-hidden flex-shrink-0`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-400/30 to-transparent pointer-events-none" />
        {/* Wheat ear & letter A */}
        <span className="font-serif font-black text-amber-300 tracking-tighter drop-shadow-md text-xl">
          🌾
        </span>
      </div>

      <div className="text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-black text-2xl tracking-wider text-red-500 font-sans">
            AGRI<span className="text-emerald-500">BANK</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-red-600/20 text-red-300 border border-red-500/30">
            LIVE QUIZ
          </span>
        </div>
        {showSlogan && (
          <p className="text-[11px] font-medium text-amber-200/90 tracking-wide mt-1">
            Mang phồn thịnh đến khách hàng
          </p>
        )}
      </div>
    </div>
  );
}
