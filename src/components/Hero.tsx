import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, ArrowRight, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-12 bg-black text-white overflow-hidden"
    >
      {/* Background High-Contrast Portrait (Salient Layer Aesthetic) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* User portrait background */}
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center sm:bg-[center_top_-15%] opacity-40 filter grayscale contrast-125 transition-transform duration-1000 scale-100"
          style={{
            backgroundImage: `url('/josh-kumar-profile.jpg')`,
          }}
        />
        {/* Soft Radial Vignette Overlay (Smooth blend to pure #000000) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,1) 95%), linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,1) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Top Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="see-through-button text-xs font-mono lowercase tracking-wider text-cyan-300 border-cyan-500/30"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Available for Engineering Roles</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-3 text-xs text-white/50 font-mono"
        >
          <span>LOCATION: INDIA</span>
          <span>•</span>
          <span>FULL-STACK & AI SPECIALIST</span>
        </motion.div>
      </div>

      {/* Hero Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Title & Auto-typing Banner */}
          <div className="lg:col-span-8 space-y-5">
            {/* Auto-typing Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs font-bold"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{displayedText}</span>
              <span className="animate-pulse text-white">|</span>
            </motion.div>

            {/* Crisp High-Fashion Editorial Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-serif italic font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[120px] leading-[0.88] tracking-tight text-white drop-shadow-2xl">
                G. Josh
              </h1>
              <h1 className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[120px] leading-[0.88] tracking-tight uppercase text-white drop-shadow-2xl">
                Kumar
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl text-base sm:text-lg text-white/80 font-sans leading-relaxed font-light"
            >
              Building scalable web architecture, intelligent AI workflows, and responsive digital tools centered on deep problem solving.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#work"
                className="see-through-button hover:bg-white hover:text-black text-xs uppercase font-bold px-6 py-3 flex items-center gap-2"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="see-through-button hover:bg-cyan-400 hover:text-black hover:border-cyan-400 text-xs uppercase font-bold px-6 py-3 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Resume
              </button>
            </motion.div>
          </div>

          {/* Right Highlight Portrait Glass Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group w-full max-w-xs"
            >
              {/* Subtle ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-white/10 rounded-[26px] blur-xl opacity-40 group-hover:opacity-80 transition duration-500" />

              {/* Photo Frame Container */}
              <div className="relative rounded-[24px] bg-[#141414] border border-white/15 overflow-hidden shadow-2xl p-2">
                <div className="relative h-72 sm:h-80 rounded-[18px] overflow-hidden">
                  <img
                    src="/josh-kumar-profile.jpg"
                    alt="G. Josh Kumar Portrait"
                    className="w-full h-full object-cover object-top filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />

                  {/* Floating card badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/10">
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                        G. JOSH KUMAR
                      </span>
                      <span className="text-[10px] text-white/60 font-mono">Software Engineer</span>
                    </div>
                    <span className="see-through-button text-[10px] py-1 px-2">
                      <Code2 className="w-3 h-3 text-cyan-400" />
                      Full Stack
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row with Next Section Arrow */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between pt-6 border-t border-white/10">
        <div className="hidden sm:flex items-center gap-8 text-xs font-mono text-white/40">
          <div>
            <span className="text-white font-bold">4+</span> FEATURED PROJECTS
          </div>
          <div>
            <span className="text-white font-bold">100%</span> TYPE-SAFE TS
          </div>
          <div>
            <span className="text-white font-bold">FULL-STACK</span> REACT & NODE
          </div>
        </div>

        {/* Minimal Scroll Down Arrow (from I1.html) */}
        <div className="ml-auto">
          <a
            href="#work"
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
            aria-label="Scroll down to work"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Scroll Down
            </span>
            <div className="w-10 h-14 rounded-full border border-white/20 flex items-center justify-center p-2 group-hover:border-white/50 transition-colors">
              <svg className="w-4 h-8 nectar-next-section-arrow" viewBox="0 0 40 50">
                <path stroke="currentColor" strokeWidth="2" fill="none" d="M 20 0 L 20 40" />
                <polyline stroke="currentColor" strokeWidth="2" fill="none" points="12, 34 20, 42 28, 34" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
