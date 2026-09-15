import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black pt-16 pb-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Giant Year & Name Heading (Matching I1.html line 3050 nectar-split-heading) */}
        <div className="border-b border-white/10 pb-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 block">
              PORTFOLIO EDITION
            </span>
            <h1 className="font-display font-extrabold text-6xl sm:text-8xl lg:text-[10vw] leading-none text-white tracking-tighter uppercase">
              © — 2026
            </h1>
          </div>

          <div className="space-y-4 max-w-md">
            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Software Engineer passionate about high-performance web systems, AI integration, and sleek digital experiences.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="see-through-button text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-black flex items-center gap-2"
              >
                <span>Back To Top</span>
                <ArrowUp className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Sub-row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>BUILT WITH REACT 19, TS, TAILWIND & FRAMER MOTION</span>
          </div>

          <div>
            <span>DESIGN BLUEPRINT: SALIENT LAYERED (I1.HTML)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
