"use client";

import { useState, useEffect } from "react";
import { Share2, Copy, Check, MessageCircle, Linkedin, MessageSquare, Sparkles } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/src/config/campaignConfig";

export default function ShareMessageGenerator({ prefilledProjectName }) {
  const [platform, setPlatform] = useState("whatsapp"); // "whatsapp" | "linkedin" | "discord"
  const [projectName, setProjectName] = useState(prefilledProjectName || "AI Study Sprint Planner");
  const [copied, setCopied] = useState(false);
  const [siteUrl, setSiteUrl] = useState("https://ai-launchpad-growth.vercel.app");

  // Sync if parent updates prefilled project
  useEffect(() => {
    if (prefilledProjectName) {
      setProjectName(prefilledProjectName);
    }
  }, [prefilledProjectName]);

  // Sync actual location if running in browser
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.origin) {
      setSiteUrl(window.location.origin);
    }
  }, []);

  // Format message dynamically
  const generateMessage = () => {
    const link = siteUrl;
    if (platform === "whatsapp") {
      return `I found an AI project idea that matches my interests: *${projectName}*! 🚀\n\nJoin the free "Build Your First AI Project in 60 Minutes" workshop and discover what you can build. No prior AI experience needed.\n\n👉 Register here: ${link}`;
    } else if (platform === "linkedin") {
      return `Excited to kick off my journey into applied AI! Just discovered my match for the "${projectName}" through the AI LaunchPad recommender.\n\nIf you're a fellow final-year engineering student looking to build a concrete AI project for your portfolio, join the free online workshop: "Build Your First AI Project in 60 Minutes".\n\nReserve your free spot: ${link}\n\n#ArtificialIntelligence #EngineeringStudents #GrowthCampaign #NxtWave #CollegeProjects`;
    } else {
      return `Hey team! Found an awesome project blueprint for **${projectName}** on AI LaunchPad.\nThey're running a free 60-minute practical workshop: "Build Your First AI Project in 60 Minutes".\nCheck your project match and register: ${link}`;
    }
  };

  const messageText = generateMessage();

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(messageText);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = messageText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleDirectShare = () => {
    if (platform === "whatsapp") {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(messageText)}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`, "_blank");
    } else {
      handleCopy();
    }
  };

  return (
    <section id="share-generator" className="py-20 relative scroll-mt-20 border-t border-slate-900 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-3">
            <Share2 className="w-4 h-4" />
            <span>Peer Virality Generator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Share-Message Generator
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Generate an instant, peer-tested invitation to share with your college batchmates on WhatsApp, LinkedIn, or Discord.
          </p>
        </div>

        {/* Generator Card */}
        <div className="max-w-3xl mx-auto bg-surface-card border border-indigo-950/90 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Controls: Target Platform & Project Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Sharing Platform
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPlatform("whatsapp")}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    platform === "whatsapp"
                      ? "bg-emerald-950/70 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-500/20"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform("linkedin")}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    platform === "linkedin"
                      ? "bg-blue-950/70 border-blue-500 text-blue-300 shadow-md shadow-blue-500/20"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform("discord")}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    platform === "discord"
                      ? "bg-indigo-950/70 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-500/20"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discord</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Referenced Project Title
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="e.g. AI Resume Bullet Coach"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Generated Message Preview Area */}
          <div className="relative mb-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 text-slate-200 text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-line shadow-inner">
              {messageText}
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>Placeholder link: <code className="text-cyan-400">{siteUrl}</code></span>
              <span>Ready for batch groups</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={handleCopy}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all ${
                copied
                  ? "bg-emerald-600 text-white border-emerald-500"
                  : "bg-surface-card hover:bg-slate-800 text-slate-200 border-slate-700"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Copy Message</span>
                </>
              )}
            </button>

            <button
              onClick={handleDirectShare}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-electric-blue hover:shadow-lg hover:shadow-indigo-600/30 transition-all active:scale-[0.98]"
            >
              <Share2 className="w-4 h-4 text-cyan-300" />
              <span>
                {platform === "whatsapp"
                  ? "Open in WhatsApp"
                  : platform === "linkedin"
                  ? "Share on LinkedIn"
                  : "Copy for Discord"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
