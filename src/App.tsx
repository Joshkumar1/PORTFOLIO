import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { OffCanvasMenu } from './components/OffCanvasMenu';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { EngineeringJourney } from './components/EngineeringJourney';
import { Differentiation } from './components/Differentiation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Header Navigation Bar */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenOffCanvasMenu={() => setIsOffCanvasOpen(true)}
      />

      {/* Off-Canvas Slide-out Drawer (Matching I1.html slide-out-widget-area) */}
      <OffCanvasMenu
        isOpen={isOffCanvasOpen}
        onClose={() => setIsOffCanvasOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Page Layout (Ordered like I1.html: Hero -> Work -> Achievements -> About -> Skills -> Journey -> Differentiation -> Contact) */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <Projects />
        <Achievements />
        <AboutMe />
        <Skills />
        <EngineeringJourney />
        <Differentiation />
        <Contact />
      </main>

      {/* Footer (Giant © — 2026 Display) */}
      <Footer />

      {/* Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
