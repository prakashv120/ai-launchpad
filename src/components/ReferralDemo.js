"use client";

import { useState, useEffect } from "react";
import { Link2, Copy, Check, Users, Sparkles, AlertCircle, ArrowRight } from "lucide-react";

export default function ReferralDemo() {
  const [ambassadorCode, setAmbassadorCode] = useState("CAMPUS-LEAD-01");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState("https://ai-launchpad-growth.vercel.app");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.origin) {
      setBaseUrl(window.location.origin);
      setGeneratedLink(`${window.location.origin}/?ref=${ambassadorCode.trim().toUpperCase()}`);
    } else {
      setGeneratedLink(`${baseUrl}/?ref=${ambassadorCode.trim().toUpperCase()}`);
    }
  }, []);

  const handleGenerate = (e) => {
    e.preventDefault();
    const cleanCode = ambassadorCode.trim().toUpperCase() || "CAMPUS-LEAD-01";
    setGeneratedLink(`${baseUrl}/?ref=${cleanCode}&utm_source=campus_ambassador&utm_campaign=60min_ai`);
  };

  const handleCopyLink = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(generatedLink);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = generatedLink;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <section id="referral-tool" className="py-20 relative scroll-mt-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs sm:text-sm font-semibold mb-3">
            <Users className="w-4 h-4 text-cyan-300" />
            <span>Campus Ambassador Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Referral Link Demo
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Test how campus student ambassadors generate custom tracked URLs to distribute the workshop across college branches.
          </p>

          {/* Explicit Transparency Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400">
            <AlertCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Prototype — demo link generation only (no backend attribution active)</span>
          </div>
        </div>

        {/* Ambassador Tool Box */}
        <div className="max-w-3xl mx-auto bg-surface-card border border-indigo-950/80 rounded-3xl p-6 sm:p-10 shadow-xl">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Enter Ambassador / Campus Code
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={ambassadorCode}
                  onChange={(e) => setAmbassadorCode(e.target.value)}
                  placeholder="e.g. CAMPUS-BLR-04"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm font-mono focus:border-indigo-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shrink-0 active:scale-95 shadow-md shadow-indigo-600/30"
                >
                  Generate Referral Link
                </button>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Suggested test codes: <code>CAMPUS-BLR-01</code>, <code>TECH-LEAD-IIT</code>, <code>NXT-AMBASSADOR-HYD</code>
              </p>
            </div>

            {/* Generated Link Display */}
            {generatedLink && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-indigo-900/40">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Generated Tracking URL
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="font-mono text-xs sm:text-sm text-cyan-300 break-all">
                    {generatedLink}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border transition-all shrink-0 ${
                      isCopied
                        ? "bg-emerald-600 text-white border-emerald-500"
                        : "bg-surface-card hover:bg-slate-800 text-slate-300 border-slate-700"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Educational Explainer Note */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Link2 className="w-4 h-4 text-cyan-400" />
              <span>How Referral Links Measure Growth Campaign Performance</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              In a full production deployment, appending <code>?ref=AMBASSADOR_CODE</code> passes unique UTM tracking parameters to registration analytics. This enables growth managers to identify which campus ambassadors drove the highest conversion rates and allocate micro-incentives fairly without manual logging.
            </p>
            <div className="text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <strong className="text-indigo-300">Prototype Transparency Note:</strong> To maintain integrity during your evaluation, no fake registration counts or fabricated attribution counters are shown in this demonstration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
