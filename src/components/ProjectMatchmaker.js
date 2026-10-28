"use client";

import { useState } from "react";
import {
  Sparkles,
  BookOpen,
  Briefcase,
  Building2,
  BarChart3,
  CheckCircle2,
  Code2,
  Layers,
  ArrowRight,
  Share2,
  RefreshCw,
  Info,
  Laptop
} from "lucide-react";
import {
  INTEREST_OPTIONS,
  EXPERIENCE_OPTIONS,
  LANGUAGE_OPTIONS,
  getRecommendedProject
} from "@/src/data/projectsData";

export default function ProjectMatchmaker({ onSelectProjectForShare, onOpenRegister }) {
  // State for questionnaire selections
  const [selectedInterest, setSelectedInterest] = useState("Productivity and studying");
  const [selectedExperience, setSelectedExperience] = useState("Beginner");
  const [selectedLanguage, setSelectedLanguage] = useState("Python");

  // State for generated recommendation
  const [recommendation, setRecommendation] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Icon mapping helper
  const getInterestIcon = (iconName) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-indigo-400" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-violet-400" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  const handleFindProject = () => {
    setIsGenerating(true);
    // 400ms smooth simulation for responsive UX feel
    setTimeout(() => {
      const result = getRecommendedProject({
        interest: selectedInterest,
        experience: selectedExperience,
        language: selectedLanguage
      });
      setRecommendation(result);
      setIsGenerating(false);

      // Auto scroll slightly to result on mobile
      const resultEl = document.getElementById("recommendation-result");
      if (resultEl) {
        resultEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 450);
  };

  const handleShareClick = () => {
    if (recommendation && onSelectProjectForShare) {
      onSelectProjectForShare(recommendation.name);
      const shareEl = document.getElementById("share-generator");
      if (shareEl) {
        shareEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="project-matchmaker" className="py-20 relative scroll-mt-20">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Interactive Matchmaker</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Find Your Match:{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Which AI Project Should You Build?
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Answer 3 quick questions about your domain interests, coding background, and preferred language to receive a tailored 60-minute project blueprint.
          </p>
        </div>

        {/* Questionnaire Form Grid */}
        <div className="max-w-4xl mx-auto bg-surface/90 border border-indigo-900/40 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {/* Step 1: Interest */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs border border-indigo-500/30">
                1
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Select your engineering domain interest:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INTEREST_OPTIONS.map((item) => {
                const isSelected = selectedInterest === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedInterest(item.id)}
                    className={`flex items-start gap-3.5 p-4 rounded-2xl text-left border transition-all ${
                      isSelected
                        ? "bg-indigo-950/60 border-indigo-500/80 shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500"
                        : "bg-surface-card/60 border-slate-800 hover:border-slate-700 hover:bg-surface-card"
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 shrink-0">
                      {getInterestIcon(item.icon)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-white">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {item.subtext}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Experience Level */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs border border-indigo-500/30">
                2
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Select your current experience level:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EXPERIENCE_OPTIONS.map((item) => {
                const isSelected = selectedExperience === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedExperience(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      isSelected
                        ? "bg-indigo-950/60 border-indigo-500/80 shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500"
                        : "bg-surface-card/60 border-slate-800 hover:border-slate-700 hover:bg-surface-card"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold text-sm sm:text-base text-white">
                        {item.label}
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      {item.subtext}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Preferred Language */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs border border-indigo-500/30">
                3
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Select your preferred programming language:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {LANGUAGE_OPTIONS.map((item) => {
                const isSelected = selectedLanguage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedLanguage(item.id)}
                    className={`p-4 rounded-2xl text-center border transition-all ${
                      isSelected
                        ? "bg-indigo-950/60 border-indigo-500/80 shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500"
                        : "bg-surface-card/60 border-slate-800 hover:border-slate-700 hover:bg-surface-card"
                    }`}
                  >
                    <div className="font-semibold text-sm sm:text-base text-white mb-1">
                      {item.label}
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Info className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Personalized matching runs instantly on client-side logic</span>
            </div>

            <button
              onClick={handleFindProject}
              disabled={isGenerating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-electric-blue rounded-xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-75"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 text-cyan-300 animate-spin" />
                  <span>Matching Project...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-cyan-300" />
                  <span>Find My Project</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Personalized Recommendation Output */}
        {recommendation && (
          <div id="recommendation-result" className="max-w-4xl mx-auto mt-10 animate-fade-in">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-violet-600 shadow-2xl shadow-indigo-950/60">
              <div className="bg-[#0B0F24] rounded-3xl p-6 sm:p-10 border border-indigo-900/50">
                {/* Result Tag Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Recommended Match
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
                      Domain: {recommendation.selectedInterest}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
                      Language: {recommendation.selectedLanguage}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    Prototype — demo suggestion (rule-based matching)
                  </span>
                </div>

                {/* Project Title and Description */}
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                  {recommendation.name}
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  {recommendation.shortDescription}
                </p>

                {/* Why it suits you */}
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Why This Project Suits Your Profile</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {recommendation.whyItSuits}
                  </p>
                  <p className="text-xs text-indigo-300/80 mt-2 italic">
                    Level Note: {recommendation.difficultyNote}
                  </p>
                </div>

                {/* 3 Achievable Project Milestones */}
                <div className="mb-8">
                  <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>3 Achievable Milestones You Will Master in 60 Minutes</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recommendation.milestones.map((ms) => (
                      <div
                        key={ms.step}
                        className="p-4 rounded-xl bg-surface-card border border-slate-800/80 flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center mb-3 border border-indigo-500/30">
                            0{ms.step}
                          </div>
                          <div className="text-sm font-semibold text-white mb-1.5">
                            {ms.title}
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {ms.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suggested Tech Stack */}
                <div className="p-4 rounded-2xl bg-surface-card border border-slate-800 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <Code2 className="w-4 h-4 text-indigo-400" />
                    <span>Suggested Technology Stack</span>
                  </div>
                  <div className="text-sm font-mono text-cyan-300 font-medium">
                    {recommendation.suggestedTech}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Sample Use Case: {recommendation.sampleUseCase}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
                  <button
                    onClick={handleShareClick}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
                  >
                    <Share2 className="w-4 h-4 text-cyan-400" />
                    <span>Share My Project with Friends</span>
                  </button>

                  <button
                    onClick={onOpenRegister}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-electric-blue text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Register to Build This Project</span>
                    <ArrowRight className="w-4 h-4 text-cyan-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
