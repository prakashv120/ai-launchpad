"use client";

import { CheckCircle2, ShieldAlert, Sparkles, BookCheck, Terminal, Award, Briefcase, Zap } from "lucide-react";

export default function Benefits({ onOpenRegister }) {
  const benefits = [
    {
      title: "Beginner-Friendly Learning",
      description:
        "Designed ground-up for final-year engineering students who have not built AI systems before. We eliminate heavy mathematical jargon and start with intuitive logic.",
      icon: Zap,
      accent: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300"
    },
    {
      title: "Practical Project Ideas",
      description:
        "Instead of generic 'hello world' tutorials, you explore realistic tools that solve real college, placement, and productivity bottlenecks.",
      icon: Terminal,
      accent: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300"
    },
    {
      title: "A Guided Starting Point",
      description:
        "Break through analysis paralysis with clear 3-milestone architectures, recommended tech stacks, and step-by-step implementation blueprints.",
      icon: BookCheck,
      accent: "from-violet-500/20 to-indigo-500/20 border-violet-500/30 text-violet-300"
    },
    {
      title: "Career-Relevant Skills",
      description:
        "Learn prompt engineering, API integration, and user-facing AI workflows that recruiters increasingly look for on engineering resumes.",
      icon: Briefcase,
      accent: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300"
    },
    {
      title: "No Prior AI Expertise Required",
      description:
        "Whether you are comfortable with Python, JavaScript, or just standard college coding assignments, you can follow every minute of the session.",
      icon: CheckCircle2,
      accent: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-300"
    }
  ];

  return (
    <section id="benefits" className="py-20 relative scroll-mt-20 border-t border-slate-900 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Why Attend This Workshop</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Workshop Benefits
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything you need to kickstart your first practical AI build in 60 minutes — without fluff or false promises.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-6 sm:p-7 rounded-2xl bg-surface-card border border-indigo-950/80 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${benefit.accent} border flex items-center justify-center mb-5`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}

          {/* Honest Transparency Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-indigo-950/30 border border-indigo-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3">
                <ShieldAlert className="w-4 h-4 text-cyan-400" />
                <span>Honest Learning Commitment</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">
                Zero Gimmicks Policy
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                This workshop focuses strictly on foundational skill-building and tangible project kickstarts. We do not make exaggerated claims of guaranteed job placements, inflated metrics, or paid upsells.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-indigo-900/50">
              <span className="text-[11px] font-mono text-cyan-400 font-medium">
                100% Free • Open to all final-year engineering students
              </span>
            </div>
          </div>
        </div>

        {/* Action strip */}
        <div className="text-center">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] transition-all"
          >
            <span>Claim Your Free Workshop Spot</span>
          </button>
        </div>
      </div>
    </section>
  );
}
