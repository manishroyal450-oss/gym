import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsBanner } from './components/HighlightsBanner';
import { AboutSection } from './components/AboutSection';
import { TrainingPrograms } from './components/TrainingPrograms';
import { BlogsSection } from './components/BlogsSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { ProgramModal } from './components/ProgramModal';
import { BlogModal } from './components/BlogModal';
import { TrainingProgram, BlogPost, PricingPlan } from './types';
import { PRICING_PLANS } from './data';

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleOpenJoin = (plan?: PricingPlan) => {
    setSelectedPlan(plan || PRICING_PLANS[0]);
    setIsJoinOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgram = (prog: TrainingProgram) => {
    setSelectedProgram(prog);
  };

  const handleEnrollFromProgram = (prog: TrainingProgram) => {
    setSelectedProgram(null);
    handleOpenJoin(PRICING_PLANS[0]);
  };

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleStepAction = (_stepId: string) => {
    handleOpenJoin(PRICING_PLANS[0]);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111111] font-sans antialiased overflow-x-hidden selection:bg-[#FF3B00] selection:text-white">
      {/* Centered Top Navbar */}
      <Navbar 
        onOpenJoin={() => handleOpenJoin(PRICING_PLANS[0])}
        onNavigate={handleNavigate}
      />

      {/* Main Content (matches max-w-md mx-auto px-5 pb-20 space-y-16 from the requested template) */}
      <main className="w-full max-w-md mx-auto px-5 pb-20 space-y-16">
        {/* HERO SECTION */}
        <Hero onJoinClick={() => handleOpenJoin(PRICING_PLANS[0])} />

        {/* HIGHLIGHTS BANNER */}
        <HighlightsBanner />

        {/* ABOUT US SECTION */}
        <AboutSection onStartClick={() => handleOpenJoin(PRICING_PLANS[0])} />

        {/* TRAINING PROGRAMS CARDS */}
        <TrainingPrograms onSelectProgram={handleSelectProgram} />

        {/* BLOGS SECTION */}
        <BlogsSection onReadPost={handleReadPost} />

        {/* HOW IT WORKS (STEPS) */}
        <HowItWorks onStepAction={handleStepAction} />

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* PRICING SECTION */}
        <PricingSection onSelectPlan={(plan) => handleOpenJoin(plan)} />
      </main>

      {/* FOOTER */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenJoin={() => handleOpenJoin(PRICING_PLANS[0])}
      />

      {/* INTERACTIVE MODALS */}
      <JoinModal 
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
        selectedPlan={selectedPlan}
      />

      <ProgramModal 
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnroll={handleEnrollFromProgram}
      />

      <BlogModal 
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onStartProgram={() => {
          setSelectedPost(null);
          handleOpenJoin(PRICING_PLANS[0]);
        }}
      />
    </div>
  );
}
