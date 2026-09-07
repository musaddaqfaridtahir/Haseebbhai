'use client';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function HaseebBirthday() {
  useEffect(() => {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
  }, []);

  const triggerConfetti = () => {
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center shadow-2xl">
        <div className="text-6xl mb-4 animate-bounce">🎂</div>
        
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-full">
          8th September Special
        </span>

        <h1 className="text-3xl font-extrabold mt-4 text-white">
          Happy Birthday, <br />
          <span className="text-emerald-400">Haseeb Bhai!</span>
        </h1>

        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
          Allah Tala aap ki zindagi mein lambi umar, be-shumar barkatein, sehat aur be-panah kamyabiyan ata farmaye.
        </p>

        <div className="my-6 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-left">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-mono">// Dua go:</p>
          <div className="font-semibold text-slate-200 space-y-1 text-sm">
            <p className="text-emerald-300 font-bold">Tahir Brothers</p>
            <p>• Mudassar Farid</p>
            <p>• Mubashar Farid</p>
            <p>• Musaddaq Farid</p>
          </div>
        </div>

        <button
          onClick={triggerConfetti}
          className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
        >
          Celebrate Haseeb Bhai 🎈
        </button>
      </div>
    </main>
  );
}
