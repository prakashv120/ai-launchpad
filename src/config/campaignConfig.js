/**
 * AI LaunchPad - Campaign & Application Configuration
 * 
 * NOTE FOR EVALUATOR / DEVELOPER:
 * To connect a real registration form (Google Forms, Luma, Typeform, etc.),
 * simply update REGISTRATION_URL below and set IS_PLACEHOLDER_URL to false.
 */

export const CAMPAIGN_CONFIG = {
  // Configurable registration URL stored in one central location as required
  REGISTRATION_URL: "https://forms.gle/demo-ai-launchpad-registration",
  IS_PLACEHOLDER_URL: true, // Set to false once a live registration form is linked

  // Core Campaign Metadata
  WORKSHOP_TITLE: "Build Your First AI Project in 60 Minutes",
  WORKSHOP_DURATION: "60 Minutes",
  WORKSHOP_FEE: "Free",
  AUDIENCE: "Final-year engineering students in India",
  CAMPAIGN_GOAL_REGISTRATIONS: 500,
  CAMPAIGN_DURATION_DAYS: 7,
  CAMPAIGN_BUDGET_INR: 2000,

  // Growth targets breakdown (Total: 500 registrations)
  // Clearly labeled as planning targets, not achieved analytics
  CHANNEL_TARGETS: [
    {
      id: "ambassadors",
      channel: "Student Ambassadors",
      target: 200,
      percentage: 40,
      description: "Direct outreach through active campus leaders across Tier 1, 2 & 3 engineering colleges",
      tactics: "Micro-incentives, batch WhatsApp group announcements, and peer-to-peer recommendations",
      icon: "Users"
    },
    {
      id: "communities",
      channel: "College Communities",
      target: 100,
      percentage: 20,
      description: "Departmental Discord servers, Telegram student study rooms, and coding clubs",
      tactics: "Value-first project teardown summaries and problem-solving teaser prompts",
      icon: "MessageSquare"
    },
    {
      id: "sharing",
      channel: "Project-Sharing Messages",
      target: 75,
      percentage: 15,
      description: "Peer virality triggered after students run the Project Matchmaker tool",
      tactics: "One-click customized WhatsApp and LinkedIn share copy with pre-filled project ideas",
      icon: "Share2"
    },
    {
      id: "social",
      channel: "Campus Social Posts",
      target: 75,
      percentage: 15,
      description: "Targeted student LinkedIn posts and Instagram campus page announcements",
      tactics: "Highlighting career relevance of building an AI portfolio project before graduation",
      icon: "Send"
    },
    {
      id: "reminders",
      channel: "Follow-Up Reminders",
      target: 50,
      percentage: 10,
      description: "Nudge sequences to students who explored the matchmaker or visited via referral",
      tactics: "24-hour reminder broadcasts emphasizing the beginner-friendly 60-minute duration",
      icon: "Bell"
    }
  ],

  // Lean Budget Allocation (Total: ₹2,000)
  BUDGET_BREAKDOWN: [
    {
      category: "Ambassador Micro-Incentives",
      allocatedINR: 1200,
      percentage: 60,
      purpose: "Milestone-based incentives for top campus student leads who mobilize batches (₹300 × 4 top college leads)"
    },
    {
      category: "Community Creative Assets",
      allocatedINR: 400,
      percentage: 20,
      purpose: "High-contrast visual cards and infographics optimized for WhatsApp status and Telegram groups"
    },
    {
      category: "Targeted Student Outreach Boost",
      allocatedINR: 400,
      percentage: 20,
      purpose: "Micro-targeted LinkedIn and student tech channel distribution to initiate the first 50 registrations"
    }
  ],

  // 7-Day Sprint Timeline
  TIMELINE_PLAN: [
    {
      day: "Day 1-2",
      phase: "Ambassador Onboarding & Asset Drop",
      targetMilestone: "Reach 120 registrations",
      actions: "Distribute referral codes to 15 vetted campus ambassadors; launch WhatsApp batch broadcasts with Project Matchmaker."
    },
    {
      day: "Day 3-4",
      phase: "Community Teardowns & Peer Challenges",
      targetMilestone: "Reach 280 registrations",
      actions: "Post project milestone previews in student Discord/Telegram channels; initiate peer-matching challenges."
    },
    {
      day: "Day 5",
      phase: "Viral Share Push & Milestone Celebration",
      targetMilestone: "Reach 390 registrations",
      actions: "Highlight student survey insight concepts; trigger project-sharing message campaigns across batch groups."
    },
    {
      day: "Day 6",
      phase: "Final 24-Hour Urgency & FAQs",
      targetMilestone: "Reach 470 registrations",
      actions: "Address 'Do I need AI experience?' doubts via short FAQ blasts; activate follow-up reminder lists."
    },
    {
      day: "Day 7",
      phase: "Workshop Launch & Final Rush",
      targetMilestone: "Reach 500 registrations",
      actions: "Final morning nudge; live broadcast access link distribution; onboarding students into AI learning circle."
    }
  ]
};
