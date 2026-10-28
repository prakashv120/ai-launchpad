"use client";

import { useState } from "react";
import {
  TrendingUp,
  Target,
  Users,
  MessageSquare,
  Share2,
  Send,
  Bell,
  Wallet,
  Calendar,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  ChevronRight
} from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/src/config/campaignConfig";

export default function GrowthPlan() {
  const [activeTab, setActiveTab] = useState("channels"); // "channels" | "budget" | "timeline"

  const getChannelIcon = (iconName) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-5 h-5 text-indigo-400" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-violet-400" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-cyan-400" />;
      case "Send":
        return <Send className="w-5 h-5 text-emerald-400" />;
      case "Bell":
        return <Bell className="w-5 h-5 text-amber-400" />;
      default:
        return <Target className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="growth-plan" className="py-20 relative scroll-mt-20 border-t border-slate-900">
      {/* Background glow meshes */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-blue/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-violet-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-semibold mb-3">
            <TrendingUp className="w-4 h-4" />
            <span>Growth Intern Assignment Proposal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Campaign Growth Plan:{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              500 Registrations in 7 Days
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A hyper-lean, student-led distribution playbook built within a strict ₹2,000 budget constraint.
          </p>

          {/* Prototype Disclosure Banner */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              <strong>Note:</strong> All figures represent proposed strategic targets for this growth assignment prototype, not real analytics.
            </span>
          </div>
        </div>

        {/* Campaign Metrics Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-surface-card border border-indigo-900/40 text-center">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Target Registrations
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              500
            </div>
            <div className="text-[11px] text-cyan-400 mt-1 font-medium">
              Proposed Target Goal
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-card border border-indigo-900/40 text-center">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Campaign Budget
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
              ₹2,000
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-medium">
              Total Budget Cap
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-card border border-indigo-900/40 text-center">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Sprint Duration
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-violet-400">
              7 Days
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-medium">
              Time to Execution
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-card border border-indigo-900/40 text-center">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Target CPA
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
              ₹4.00
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-medium">
              Cost Per Acquisition
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("channels")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "channels"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-surface-card text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Target Channels (500 Total)
          </button>
          <button
            onClick={() => setActiveTab("budget")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "budget"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-surface-card text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            ₹2,000 Budget Breakdown
          </button>
          <button
            onClick={() => setActiveTab("timeline")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "timeline"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-surface-card text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            7-Day Execution Timeline
          </button>
        </div>

        {/* Tab 1: Channels Breakdown */}
        {activeTab === "channels" && (
          <div className="space-y-4 max-w-4xl mx-auto animate-fade-in">
            {CAMPAIGN_CONFIG.CHANNEL_TARGETS.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-surface-card border border-indigo-950/80 hover:border-indigo-500/30 transition-all shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                      {getChannelIcon(item.icon)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.channel}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:text-right shrink-0">
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-cyan-400">
                        {item.target}
                      </div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                        Registrations ({item.percentage}%)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress bar representing target share */}
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mb-3">
                  <div
                    className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <div className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                  <strong className="text-indigo-300">Tactical execution:</strong> {item.tactics}
                </div>
              </div>
            ))}

            {/* Total Summary */}
            <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-indigo-300 mb-1">
                  Cumulative Campaign Planning Target
                </div>
                <div className="text-sm text-slate-300">
                  Calculated to achieve minimum critical density across targeted college batches.
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-white">500</span>
                <span className="text-xs text-cyan-400 ml-1 font-semibold uppercase">Target Students</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Budget Breakdown */}
        {activeTab === "budget" && (
          <div className="max-w-4xl mx-auto space-y-4 animate-fade-in">
            <div className="p-6 rounded-2xl bg-surface-card border border-indigo-950/80 mb-6">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-emerald-400" />
                <span>₹2,000 Micro-Budget Allocation Strategy</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                With an ultra-lean ₹2,000 budget, traditional paid ads would be cost-prohibitive. Instead, 60% is directed towards motivating peer student leaders who have direct trust and reach in college WhatsApp groups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CAMPAIGN_CONFIG.BUDGET_BREAKDOWN.map((budget) => (
                <div
                  key={budget.category}
                  className="p-5 rounded-2xl bg-surface-card border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {budget.category}
                    </div>
                    <div className="text-2xl font-black text-emerald-400 mb-1">
                      ₹{budget.allocatedINR.toLocaleString("en-IN")}
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-3">
                      {budget.percentage}% of Total
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {budget.purpose}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Total Planned Expenditure: <strong className="text-white">₹2,000</strong></span>
              <span>Projected Cost Per Registration: <strong className="text-emerald-400">₹4.00</strong></span>
            </div>
          </div>
        )}

        {/* Tab 3: Timeline */}
        {activeTab === "timeline" && (
          <div className="max-w-4xl mx-auto space-y-4 animate-fade-in">
            {CAMPAIGN_CONFIG.TIMELINE_PLAN.map((item, idx) => (
              <div
                key={item.day}
                className="p-5 sm:p-6 rounded-2xl bg-surface-card border border-slate-800 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="sm:w-28 shrink-0">
                  <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold font-mono bg-indigo-500/10 text-cyan-300 border border-indigo-500/30">
                    {item.day}
                  </span>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {item.targetMilestone}
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-base font-bold text-white mb-1">
                    {item.phase}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.actions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
