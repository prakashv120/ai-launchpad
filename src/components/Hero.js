"use client";

import { Sparkles, Compass, Clock, CheckCircle2, Terminal, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero({ onOpenRegister, onScrollToMatchmaker }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Background glow meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-cyan-500/10 blur-[110px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-electric-cyan/10 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Campaign Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-inner shadow-indigo-500/10 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold text-cyan-300">NxtWave Growth Initiative</span>
            <span className="text-slate-500">•</span>
            <span>Online Engineering Student Workshop</span>
          </div>

          {/* Headline (exact required copy) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
            Your first AI project.{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Built in 60 minutes.
            </span>
          </h1>

          {/* Supporting text (exact required copy) */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover what you can build with AI, even if you are just getting started. Join a free, beginner-friendly online workshop designed for engineering students.
          </p>

          {/* Core Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-xs sm:text-sm font-medium">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-card/80 border border-slate-800 text-slate-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free online workshop</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-card/80 border border-slate-800 text-slate-200 shadow-sm">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>60-minute session</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-card/80 border border-slate-800 text-slate-200 shadow-sm">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Beginner-friendly</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onScrollToMatchmaker}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-electric-blue rounded-xl shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Compass className="w-5 h-5 text-cyan-300" />
              <span>Find My AI Project</span>
            </button>

            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-200 bg-surface-card hover:bg-slate-800/80 border border-slate-700/80 rounded-xl hover:text-white hover:border-slate-600 transition-all active:scale-[0.98]"
            >
              <span>Register for Free</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Interactive Workshop Preview Card */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent shadow-2xl shadow-indigo-950/50">
            <div className="bg-[#0B0F20]/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-800/70">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-slate-400 hidden sm:inline">workshop-blueprint.ai</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-[11px]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Hands-on Engineering Track</span>
                </div>
              </div>

              {/* Blueprint Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
                <div className="p-4 rounded-xl bg-surface-card/60 border border-indigo-900/30">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                    Phase 01 • Minutes 00-15
                  </div>
                  <h2 className="text-sm font-semibold text-white mb-1.5">Unpack the AI Architecture</h2>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Understand how LLMs, prompt schemas, and APIs connect to clean web interfaces without complex math.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-card/60 border border-indigo-900/30">
                  <div className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">
                    Phase 02 • Minutes 15-45
                  </div>
                  <h2 className="text-sm font-semibold text-white mb-1.5">Build Core Intelligence</h2>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Wire up your chosen project logic — whether parsing resumes, analyzing study sprints, or handling campus FAQs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-card/60 border border-indigo-900/30">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                    Phase 03 • Minutes 45-60
                  </div>
                  <h2 className="text-sm font-semibold text-white mb-1.5">Launch & Share Demo</h2>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Turn your project into a working web prototype ready to showcase on your engineering resume and LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
