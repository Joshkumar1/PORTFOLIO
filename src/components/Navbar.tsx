import React, { useState, useEffect } from 'react';
import { Command, Menu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
  onOpenOffCanvasMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenOffCanvasMenu,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#work' },
    { name: 'Awards', href: '#awards' },
    { name: 'Philosophy', href: '#about' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo - Avatar + Name */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-sm font-semibold tracking-wider text-white focus:outline-none uppercase"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 p-[1px] overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img
              src="/josh-kumar-profile.jpg"
              alt="G. Josh Kumar"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <span>{PERSONAL_INFO.name}</span>
        </a>

        {/* Centered Minimal Nav Links (Matches User Screenshot Navbar) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-white/80 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Controls (Neon Contact Me Button matching user screenshot) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 hover:bg-white/10 border border-white/15 rounded-full transition-all"
            title="Search (Cmd+K)"
          >
            <Command className="w-3.5 h-3.5 text-white/90" />
            <span className="font-mono text-[10px]">⌘K</span>
          </button>

          {/* Neon Contact Me Button from Screenshot */}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-[#ccff00] text-black font-semibold text-xs tracking-wide hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ccff00]/20"
          >
            Contact Me
          </a>

          {/* Off-Canvas Drawer Menu Trigger */}
          <button
            onClick={onOpenOffCanvasMenu}
            className="p-2 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
