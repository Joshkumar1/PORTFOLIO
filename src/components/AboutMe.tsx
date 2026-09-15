import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Terminal, Code2, Brain, BookOpen, Layers, Eye, Target, CheckCircle2 } from 'lucide-react';
import { ABOUT_STORY } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  const [activeStory, setActiveStory] = useState<keyof typeof ABOUT_STORY>('curiosity');

  const storyItems = [
    { key: 'curiosity', title: 'Curiosity for Tech', icon: Compass },
    { key: 'passion', title: 'Software Passion', icon: Code2 },
    { key: 'problemSolving', title: 'Solving Problems', icon: Target },
    { key: 'aiInterest', title: 'Interest in AI', icon: Brain },
    { key: 'continuousLearning', title: 'Continuous Growth', icon: BookOpen },
    { key: 'cleanArchitecture', title: 'Clean Architecture', icon: Layers },
    { key: 'uiuxDetail', title: 'UI/UX Craftsmanship', icon: Eye },
    { key: 'practicalImpact', title: 'Practical Impact', icon: CheckCircle2 },
  ];

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="see-through-button text-xs font-mono text-cyan-300 border-cyan-500/30">
            <Terminal className="w-3.5 h-3.5" />
            <span>PHILOSOPHY & MINDSET</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            Engineering <span className="text-cyan-400">Philosophy</span>
          </h2>
        </div>
        <p className="text-white/60 text-sm max-w-md font-light">
          An authentic look at how I break down complex problems, craft clean software architectures, and continuously evolve.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Story Pills */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
            CORE PRINCIPLES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {storyItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeStory === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setActiveStory(item.key as keyof typeof ABOUT_STORY)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-black font-bold shadow-xl border border-white'
                      : 'bg-[#141414] text-white/80 border border-white/10 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-cyan-400'}`} />
                    <span className="text-sm font-semibold tracking-wide">{item.title}</span>
                  </div>
                  <span className={`text-xs font-mono ${isActive ? 'text-black' : 'text-white/40'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Detail Card */}
        <div className="lg:col-span-7">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="h-full bg-[#141414] p-8 sm:p-10 rounded-[25px] border border-white/15 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  DEEP DIVE
                </span>
                <span className="text-xs font-mono text-white/40">ENGINEERING VALUE</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                {ABOUT_STORY[activeStory].title}
              </h3>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light">
                {ABOUT_STORY[activeStory].content}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
              <span>PRINCIPLE #{storyItems.findIndex((s) => s.key === activeStory) + 1}</span>
              <span>100% CRAFTSMANSHIP</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
