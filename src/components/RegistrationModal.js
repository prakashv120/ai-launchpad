"use client";

import { useState } from "react";
import { X, ExternalLink, Copy, Check, Sparkles, AlertCircle, Info, Rocket } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/src/config/campaignConfig";

export default function RegistrationModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(CAMPAIGN_CONFIG.REGISTRATION_URL);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleOpenLink = () => {
    window.open(CAMPAIGN_CONFIG.REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl p-[1px] bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-slate-800 shadow-2xl">
        <div className="bg-[#0B0F22] rounded-3xl p-6 sm:p-8 border border-indigo-900/40">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-[#0B0F22] rounded-[11px] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <h3 id="registration-modal-title" className="text-lg font-bold text-white">
                Workshop Registration
              </h3>
              <p className="text-xs text-indigo-300 font-medium">
                {CAMPAIGN_CONFIG.WORKSHOP_TITLE}
              </p>
            </div>
          </div>

          {/* Information Body */}
          <div className="space-y-4 my-6">
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/40">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-1.5">
                <Info className="w-4 h-4 shrink-0" />
                <span>Configurable Registration Routing</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                As required by the campaign architecture, the registration destination is dynamically loaded from a single configuration constant:
              </p>
              <div className="mt-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-300 break-all">
                {CAMPAIGN_CONFIG.REGISTRATION_URL}
              </div>
            </div>

            {CAMPAIGN_CONFIG.IS_PLACEHOLDER_URL && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                <div className="flex items-center gap-2 font-semibold mb-1 text-amber-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Demonstration Mode Active</span>
                </div>
                <p className="text-amber-200/90 leading-relaxed">
                  To connect your real Google Form, Typeform, or Luma event link, open <code className="text-white font-mono">src/config/campaignConfig.js</code> and update <code className="text-white font-mono">REGISTRATION_URL</code>.
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-surface-card hover:bg-slate-800 border border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Copy Form Link</span>
                </>
              )}
            </button>

            <button
              onClick={handleOpenLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-electric-blue hover:shadow-lg hover:shadow-indigo-600/30 transition-all active:scale-95"
            >
              <span>Open Registration URL</span>
              <ExternalLink className="w-4 h-4 text-cyan-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
