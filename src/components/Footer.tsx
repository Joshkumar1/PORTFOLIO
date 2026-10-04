import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, MapPin, Clock, FileText, Send, Copy, Check, Globe, Code2, Sparkles, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setLocalTime(formatter.format(now));
      } catch {
        setLocalTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Featured Projects', href: '#projects' },
    { label: 'Technical Skills', href: '#skills' },
    { label: 'Engineering Journey', href: '#journey' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'About & Philosophy', href: '#about' },
    { label: 'Get in Touch', href: '#contact' },
  ];

  const coreTags = [
    'React 19 & Next.js',
    'TypeScript',
    'Node.js & Express',
    'MongoDB & Aggregations',
    'AI & LLM Integration',
    'Data Structures & Algorithms',
    'Clean Architecture',
    'Tailwind CSS',
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0a0a0c] pt-20 pb-12 px-6 sm:px-10 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative">
        {/* Top Feature Banner: Call to Action & Status */}
        <div className="p-8 sm:p-12 rounded-[28px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 relative overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold tracking-wide">AVAILABLE FOR NEW OPPORTUNITIES</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
                Let's Build Something <span className="text-cyan-400">Extraordinary</span>
              </h2>

              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                Looking for a dedicated software engineer who bridges high-performance architecture, modern UI craft, and intelligent AI systems? Let's connect.
              </p>
            </div>

            {/* Quick Action Buttons & Real-Time Card */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="flex-1 sm:flex-none see-through-button py-3.5 px-6 bg-white text-black border-white hover:bg-cyan-400 hover:text-black hover:border-cyan-400 text-xs font-bold uppercase tracking-wider justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Start Conversation</span>
                </a>

                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="flex-1 sm:flex-none see-through-button py-3.5 px-5 text-xs font-semibold uppercase hover:bg-white hover:text-black justify-center"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Resume</span>
                  </button>
                )}
              </div>

              {/* Timezone & Location Indicator */}
              <div className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>IST (UTC+5:30)</span>
                </div>
                <span className="font-bold text-white tracking-wider">{localTime || 'Loading...'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Informative Navigation & Details Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-4">
          {/* Column 1: Engineering Identity & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                <Code2 className="w-4 h-4" />
                <span>Software Engineer</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
                {PERSONAL_INFO.name}
              </h3>
            </div>

            <p className="text-white/60 text-sm font-light leading-relaxed max-w-md">
              Computer Science engineer specialized in high-performance web applications, scalable backend services, and AI integration. Driven by first-principles problem solving and clean craftsmanship.
            </p>

            <div className="space-y-2 pt-1 font-mono text-xs text-white/50">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location} • Open to Remote & Global Relocation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>Working across international time zones</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 group text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tech Specialties & Focus (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
                Core Stack & Focus
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70 text-[11px] font-mono hover:border-cyan-400/40 hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Direct Connect & Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
              Connect
            </h4>
            <div className="space-y-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="see-through-button w-full justify-start py-2 px-3 text-xs uppercase hover:bg-white hover:text-black flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="see-through-button w-full justify-start py-2 px-3 text-xs uppercase hover:bg-white hover:text-black flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="see-through-button w-full justify-between py-2 px-3 text-xs font-mono hover:bg-white hover:text-black flex items-center"
                title="Copy email to clipboard"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Email</span>
                </span>
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60" />}
              </button>
            </div>

            <p className="text-[11px] font-mono text-white/40 pt-1">
              ⚡ Typical response time: under 24 hours.
            </p>
          </div>
        </div>

        {/* Bottom Sub-row: Copyright, Stack Badge, Back to Top */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed & Engineered with precision.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline-block text-white/30">
              React 19 • TypeScript • Tailwind CSS • Framer Motion
            </span>

            <button
              onClick={scrollToTop}
              className="see-through-button text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-black flex items-center gap-2 py-1.5 px-3.5"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
