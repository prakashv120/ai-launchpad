"use client";

import { Sparkles, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/src/config/campaignConfig";

export default function RegistrationCTA({ onOpenRegister }) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070913] via-[#0E142C] to-[#070913] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 shadow-2xl shadow-indigo-950/80">
          <div className="bg-[#0B0F24]/95 rounded-3xl p-8 sm:p-14 text-center border border-indigo-900/40">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Free Engineering Student Workshop</span>
            </div>

            {/* Headline (exact required copy) */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to build your first AI project?
            </h2>

            {/* Supporting description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join fellow final-year engineering students for a focused, 60-minute practical session. Learn how to turn project ideas into working AI prototypes.
            </p>

            {/* Highlights pill row */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300 mb-9">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Free Access
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                60-Minute Session
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-violet-400" />
                Beginner-Friendly
              </span>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-base font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-electric-blue rounded-xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Register for Free</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </button>
            </div>

            {/* Transparency Note */}
            <div className="mt-8 text-xs text-slate-400 max-w-md mx-auto">
              Registration destination is configurable via <code className="text-indigo-300">src/config/campaignConfig.js</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
