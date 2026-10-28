"use client";

import { Rocket, Sparkles, Heart } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/src/config/campaignConfig";

export default function Footer({ onOpenRegister }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-indigo-950/80 bg-[#050711] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#050711] rounded-[7px] flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                AI LaunchPad
              </span>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              A student-focused growth initiative for the free online engineering workshop:
              <br />
              <strong className="text-white font-medium">“{CAMPAIGN_CONFIG.WORKSHOP_TITLE}”</strong>
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>NxtWave Growth Intern Assignment Prototype</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Campaign Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleNavClick(e, "#how-it-works")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#project-matchmaker"
                  onClick={(e) => handleNavClick(e, "#project-matchmaker")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Project Matchmaker
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  onClick={(e) => handleNavClick(e, "#benefits")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Workshop Benefits
                </a>
              </li>
              <li>
                <a
                  href="#growth-plan"
                  onClick={(e) => handleNavClick(e, "#growth-plan")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Growth Plan & Budget
                </a>
              </li>
              <li>
                <a
                  href="#share-generator"
                  onClick={(e) => handleNavClick(e, "#share-generator")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Share-Message Generator
                </a>
              </li>
              <li>
                <a
                  href="#referral-tool"
                  onClick={(e) => handleNavClick(e, "#referral-tool")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Referral Link Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Action & Configuration */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Take Action
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Free 60-minute session for final-year engineering students across India.
            </p>
            <button
              onClick={onOpenRegister}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-indigo-600/30 transition-all text-center"
            >
              Register for Free
            </button>
          </div>
        </div>

        {/* Evaluation Disclaimer & Transparency Notes */}
        <div className="pt-8 border-t border-slate-900 text-xs text-slate-300 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-300">Assignment Disclosure:</strong> Student growth campaign prototype built for NxtWave Growth Intern assignment. Campaign figures (500 registrations, ₹2,000 budget, channel breakdown) represent proposed strategic planning targets rather than active commercial metrics.
          </p>
          <p className="leading-relaxed">
            Project recommendations and referral generation tools are demonstrative frontend features designed without requiring paid third-party AI tokens or active registration databases.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 text-[11px] text-slate-400 gap-2">
            <div>
              © {currentYear} AI LaunchPad. Built with Next.js, React & Tailwind CSS.
            </div>
            <div className="flex items-center gap-1">
              Crafted for Growth Engineering Evaluation
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
