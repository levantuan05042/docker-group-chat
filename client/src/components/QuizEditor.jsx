import React, { useState, useEffect } from "react";
import {
  Save,
  RotateCcw,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowLeft,
  Check
} from "lucide-react";

export default function QuizEditor({ onBack, onSaved }) {
  const [quiz, setQuiz] = useState(null);
  const [activePartIndex, setActivePartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedAlert, setSavedAlert] = useState(false);

  useEffect(() => {
    fetch("/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        setQuiz(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quiz", err);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quiz)
      });
      const data = await res.json();
      if (data.success) {
        setSavedAlert(true);
        setTimeout(() => setSavedAlert(false), 2500);
        onSaved?.(quiz);
      }
    } catch (err) {
      alert("Lỗi khi lưu bộ câu hỏi!");
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!confirm("Bạn có chắc chắn muốn khôi phục 20 câu hỏi mặc định ban đầu không?")) return;
    try {
      const res = await fetch("/api/quiz/reset", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setQuiz(data.quiz);
        setSavedAlert(true);
        setTimeout(() => setSavedAlert(false), 2000);
      }
    } catch (err) {
      alert("Lỗi khi khôi phục câu hỏi!");
    }
  };

  const updateQuestion = (qIndex, field, value) => {
    setQuiz((prev) => {
      const newParts = [...prev.parts];
      const targetPart = { ...newParts[activePartIndex] };
      const targetQuestions = [...targetPart.questions];
      targetQuestions[qIndex] = {
        ...targetQuestions[qIndex],
        [field]: value
      };
      targetPart.questions = targetQuestions;
      newParts[activePartIndex] = targetPart;
      return { ...prev, parts: newParts };
    });
  };

  const updateOption = (qIndex, optIndex, value) => {
    setQuiz((prev) => {
      const newParts = [...prev.parts];
      const targetPart = { ...newParts[activePartIndex] };
      const targetQuestions = [...targetPart.questions];
      const newOptions = [...targetQuestions[qIndex].options];
      newOptions[optIndex] = value;
      targetQuestions[qIndex] = {
        ...targetQuestions[qIndex],
        options: newOptions
      };
      targetPart.questions = targetQuestions;
      newParts[activePartIndex] = targetPart;
      return { ...prev, parts: newParts };
    });
  };

  const addQuestion = () => {
    setQuiz((prev) => {
      const newParts = [...prev.parts];
      const targetPart = { ...newParts[activePartIndex] };
      const newQ = {
        id: Date.now(),
        question: "Câu hỏi mới...",
        options: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        correctIndex: 0,
        timeLimit: 15,
        points: 100,
        explanation: "Giải thích đáp án đúng..."
      };
      targetPart.questions = [...targetPart.questions, newQ];
      newParts[activePartIndex] = targetPart;
      return { ...prev, parts: newParts };
    });
  };

  const removeQuestion = (qIndex) => {
    if (!confirm("Bạn có chắc chắn muốn xóa câu hỏi này?")) return;
    setQuiz((prev) => {
      const newParts = [...prev.parts];
      const targetPart = { ...newParts[activePartIndex] };
      targetPart.questions = targetPart.questions.filter((_, idx) => idx !== qIndex);
      newParts[activePartIndex] = targetPart;
      return { ...prev, parts: newParts };
    });
  };

  const applyTimeLimitToAll = (seconds) => {
    setQuiz((prev) => {
      const newParts = prev.parts.map((part) => ({
        ...part,
        questions: part.questions.map((q) => ({
          ...q,
          timeLimit: seconds
        }))
      }));
      return { ...prev, parts: newParts };
    });
    alert(`Đã áp dụng ${seconds} giây cho toàn bộ 20 câu hỏi! Hãy bấm 'Lưu bộ câu hỏi'.`);
  };

  if (loading || !quiz) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-slate-400 animate-pulse text-sm">Đang tải bộ câu hỏi...</div>
      </div>
    );
  }

  const currentPart = quiz.parts[activePartIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans select-none pb-12">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-black text-white flex items-center gap-2">
              Soạn & Quản Lý Câu Hỏi
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Wayground Admin
              </span>
            </h1>
            <p className="text-xs text-slate-400">Chỉnh sửa 2 phần thi, thời gian và đáp án chính xác</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {savedAlert && (
            <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
              <Check className="w-4 h-4" /> Đã lưu thành công!
            </span>
          )}

          <button
            onClick={handleReset}
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition flex items-center gap-1.5"
            title="Khôi phục lại 20 câu hỏi mặc định ban đầu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Khôi phục gốc
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:from-emerald-400 hover:to-teal-300 shadow-lg shadow-emerald-500/20 active:scale-95 transition flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            {saving ? "Đang lưu..." : "Lưu bộ câu hỏi"}
          </button>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-5xl mx-auto w-full px-6 py-6 flex-1 flex flex-col">
        {/* Title & Description of Quiz */}
        <div className="bg-slate-900/80 border border-purple-500/30 rounded-3xl p-6 backdrop-blur-md mb-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1">
                Tên cuộc thi
              </label>
              <input
                type="text"
                value={quiz.title}
                onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-bold text-sm focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1">
                Mô tả
              </label>
              <input
                type="text"
                value={quiz.description}
                onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-sm focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>

        {/* 2 Tabs: Part 1 vs Part 2 */}
        <div className="flex items-center gap-3 mb-6">
          {quiz.parts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActivePartIndex(idx)}
              className={`flex-1 py-3 px-5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                activePartIndex === idx
                  ? "bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 scale-[1.01]"
                  : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              {p.partTitle} ({p.questions.length} câu)
            </button>
          ))}
        </div>

        {/* Batch Time Control Bar */}
        <div className="bg-slate-900/60 border border-purple-500/30 rounded-2xl p-4 mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-purple-200">
              Cài đặt thời gian nhanh cho TOÀN BỘ 20 CÂU HỎI:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {[5, 10, 15, 20, 30, 45, 60, 90].map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => applyTimeLimitToAll(sec)}
                className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-950 hover:bg-purple-600 text-slate-300 hover:text-white border border-slate-800 transition cursor-pointer"
              >
                {sec}s
              </button>
            ))}
          </div>
        </div>

        {/* Part Title Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-black text-white">{currentPart.partTitle}</h2>
            <p className="text-xs text-slate-400 mt-0.5">{currentPart.partDescription}</p>
          </div>
          <button
            onClick={addQuestion}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Thêm câu hỏi mới
          </button>
        </div>

        {/* List of Questions in this Part */}
        <div className="space-y-6">
          {currentPart.questions.map((q, qIndex) => {
            const letters = ["A", "B", "C", "D"];
            const optionColors = [
              "border-rose-500/40 text-rose-400",
              "border-blue-500/40 text-blue-400",
              "border-amber-500/40 text-amber-400",
              "border-emerald-500/40 text-emerald-400"
            ];

            return (
              <div
                key={q.id || qIndex}
                className="bg-slate-900/90 border border-slate-800/80 hover:border-purple-500/40 rounded-3xl p-6 backdrop-blur-md shadow-xl transition"
              >
                {/* Question Top Row */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center font-black text-sm text-purple-300">
                      #{qIndex + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      Câu hỏi {qIndex + 1} của {currentPart.partTitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Time limit select */}
                    <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <select
                        value={q.timeLimit}
                        onChange={(e) => updateQuestion(qIndex, "timeLimit", Number(e.target.value))}
                        className="bg-transparent text-xs text-amber-300 font-bold focus:outline-none"
                      >
                        <option value={5}>5 giây</option>
                        <option value={10}>10 giây</option>
                        <option value={15}>15 giây</option>
                        <option value={20}>20 giây</option>
                        <option value={30}>30 giây</option>
                        <option value={45}>45 giây</option>
                        <option value={60}>60 giây</option>
                        <option value={90}>90 giây</option>
                        <option value={120}>120 giây (2 phút)</option>
                      </select>
                    </div>

                    <button
                      onClick={() => removeQuestion(qIndex)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                      title="Xóa câu hỏi này"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Textarea */}
                <div className="mb-5">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Nội dung câu hỏi:
                  </label>
                  <textarea
                    rows={2}
                    value={q.question}
                    onChange={(e) => updateQuestion(qIndex, "question", e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white font-semibold text-base focus:outline-none focus:border-purple-400"
                    placeholder="Nhập nội dung câu hỏi..."
                  />
                </div>

                {/* 4 Options Grid */}
                <div className="mb-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>4 Phương án trả lời:</span>
                    <span className="text-[11px] text-emerald-400 font-normal">
                      ● Tích chọn hình tròn để đặt làm ĐÁP ÁN ĐÚNG
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((opt, optIndex) => {
                      const isCorrect = q.correctIndex === optIndex;

                      return (
                        <div
                          key={optIndex}
                          className={`flex items-center gap-3 p-2.5 rounded-2xl border-2 transition ${
                            isCorrect
                              ? "bg-emerald-950/40 border-emerald-400 ring-2 ring-emerald-500/20"
                              : "bg-slate-950 border-slate-800"
                          }`}
                        >
                          {/* Radio / Correct Toggle */}
                          <button
                            type="button"
                            onClick={() => updateQuestion(qIndex, "correctIndex", optIndex)}
                            className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs transition cursor-pointer flex-shrink-0 ${
                              isCorrect
                                ? "bg-emerald-500 text-slate-950 shadow-md"
                                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                            }`}
                            title={isCorrect ? "Đáp án ĐÚNG" : "Bấm để chọn làm đáp án đúng"}
                          >
                            {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : letters[optIndex]}
                          </button>

                          <input
                            type="text"
                            value={opt}
                            onChange={(e) => updateOption(qIndex, optIndex, e.target.value)}
                            placeholder={`Phương án ${letters[optIndex]}...`}
                            className="flex-1 bg-transparent text-sm font-medium text-white focus:outline-none placeholder-slate-600"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Explanation */}
                <div>
                  <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">
                    Giải thích đáp án (Hiển thị sau khi thí sinh trả lời xong):
                  </label>
                  <input
                    type="text"
                    value={q.explanation || ""}
                    onChange={(e) => updateQuestion(qIndex, "explanation", e.target.value)}
                    placeholder="Giải thích ngắn gọn lý do vì sao đáp án này đúng..."
                    className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Save Bar */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-8 py-4 rounded-2xl font-black text-base bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:from-emerald-400 hover:to-teal-300 shadow-xl shadow-emerald-500/20 active:scale-95 transition flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-5 h-5" />
            {saving ? "Đang lưu..." : "LƯU TẤT CẢ THAY ĐỔI"}
          </button>
        </div>
      </main>
    </div>
  );
}
