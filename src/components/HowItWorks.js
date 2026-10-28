"use client";

import { Search, Compass, BookOpen, Rocket, ArrowRight } from "lucide-react";

export default function HowItWorks({ onScrollToMatchmaker }) {
  const steps = [
    {
      number: "01",
      title: "Discover a project that matches your interests.",
      description:
        "Select your engineering domain, current coding comfort, and favorite language. Our interactive matchmaker recommends a focused project idea aligned with what you actually care about.",
      icon: Compass,
      tag: "Interactive Match"
    },
    {
      number: "02",
      title: "Learn the basic approach in a guided workshop.",
      description:
        "Join the 60-minute live online session where we break down core AI concepts into clean, accessible building blocks. No complex theory or math prerequisites required.",
      icon: BookOpen,
      tag: "60-Minute Session"
    },
    {
      number: "03",
      title: "Leave with a practical starting point for your first AI project.",
      description:
        "Walk away with working code templates, milestone architectures, and a clear roadmap to finish your project and showcase it on your resume.",
      icon: Rocket,
      tag: "Working Code"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative scroll-mt-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-semibold mb-3">
            <span>Simple 3-Step Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From zero AI knowledge to a concrete project blueprint in three straightforward steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl p-6 sm:p-8 bg-surface-card border border-indigo-950/70 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
              >
                {/* Step indicator */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-indigo-500/30 group-hover:text-indigo-400/60 transition-colors font-mono">
                      {step.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center mb-5 group-hover:border-cyan-400/50 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx === 0 && (
                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={onScrollToMatchmaker}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Try the matchmaker now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
