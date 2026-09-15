import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Mail, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenCommandPalette,
}) => {
  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Achievements', href: '#awards' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          />

          {/* Right Slide-out Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-lg bg-[#0a0a0c] border-l border-white/10 p-8 md:p-12 flex flex-col justify-between overflow-y-auto shadow-2xl"
          >
            {/* Header / Close Button */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-cyan-400/50 p-0.5 overflow-hidden shadow-lg">
                  <img
                    src="/josh-kumar-profile.jpg"
                    alt="G. Josh Kumar"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">{PERSONAL_INFO.name}</h4>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                    SOFTWARE ENGINEER
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 group"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="my-auto py-8">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <button
                      onClick={() => handleLinkClick(item.href)}
                      className="group flex items-center justify-between w-full text-left font-display text-3xl md:text-4xl font-bold text-white/80 hover:text-white transition-all py-1"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
                        <span className="text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          0{idx + 1}
                        </span>
                        {item.label}
                      </span>
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-cyan-400" />
                    </button>
                  </motion.div>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenResume();
                  }}
                  className="see-through-button hover:bg-white hover:text-black font-semibold px-4 py-2 text-xs flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  View Interactive Resume
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCommandPalette();
                  }}
                  className="see-through-button hover:bg-cyan-500 hover:text-black hover:border-cyan-500 font-semibold px-4 py-2 text-xs flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Command Palette (⌘K)
                </button>
              </div>
            </div>

            {/* Footer / Contact Details */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Direct Contact</p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
                <span className="text-xs text-white/40 font-mono">© 2026 {PERSONAL_INFO.name}</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
