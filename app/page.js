"use client";

import { useState } from "react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import HowItWorks from "@/src/components/HowItWorks";
import ProjectMatchmaker from "@/src/components/ProjectMatchmaker";
import Benefits from "@/src/components/Benefits";
import GrowthPlan from "@/src/components/GrowthPlan";
import ShareMessageGenerator from "@/src/components/ShareMessageGenerator";
import ReferralDemo from "@/src/components/ReferralDemo";
import RegistrationCTA from "@/src/components/RegistrationCTA";
import RegistrationModal from "@/src/components/RegistrationModal";
import Footer from "@/src/components/Footer";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [prefilledProject, setPrefilledProject] = useState("AI Study Sprint Planner");

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  const handleScrollToMatchmaker = () => {
    const el = document.getElementById("project-matchmaker");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectProjectForShare = (projectName) => {
    setPrefilledProject(projectName);
  };

  return (
    <main className="min-h-screen bg-[#070913] text-slate-100 flex flex-col selection:bg-indigo-600/30 selection:text-indigo-200">
      {/* Top Navbar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Hero Section */}
      <Hero
        onOpenRegister={handleOpenRegister}
        onScrollToMatchmaker={handleScrollToMatchmaker}
      />

      {/* How It Works Section */}
      <HowItWorks onScrollToMatchmaker={handleScrollToMatchmaker} />

      {/* Project Matchmaker Section (Core Interactive Recommender) */}
      <ProjectMatchmaker
        onSelectProjectForShare={handleSelectProjectForShare}
        onOpenRegister={handleOpenRegister}
      />

      {/* Workshop Benefits Section */}
      <Benefits onOpenRegister={handleOpenRegister} />

      {/* Growth Campaign Strategy Plan */}
      <GrowthPlan />

      {/* Share Message Generator */}
      <ShareMessageGenerator prefilledProjectName={prefilledProject} />

      {/* Campus Ambassador Referral Demo */}
      <ReferralDemo />

      {/* Final Call to Action */}
      <RegistrationCTA onOpenRegister={handleOpenRegister} />

      {/* Footer */}
      <Footer onOpenRegister={handleOpenRegister} />

      {/* Registration Routing Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
      />
    </main>
  );
}
