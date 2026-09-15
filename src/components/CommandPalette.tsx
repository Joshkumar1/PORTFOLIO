import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Code2, User, Layers, GitCommit, Mail, Sparkles, X, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ActionItem {
  id: string;
  label: string;
  icon: React.ElementType;
  type: string;
  href?: string;
  action?: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');

  // Keyboard hotkey trigger (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions: ActionItem[] = [
    { id: 'about', label: 'Go to About Me', icon: User, type: 'navigation', href: '#about' },
    { id: 'skills', label: 'Explore Engineering Stack', icon: Code2, type: 'navigation', href: '#skills' },
    { id: 'projects', label: 'View Featured Projects', icon: Layers, type: 'navigation', href: '#projects' },
    { id: 'journey', label: 'View Engineering Timeline', icon: GitCommit, type: 'navigation', href: '#journey' },
    { id: 'contact', label: 'Contact G. Josh Kumar', icon: Mail, type: 'navigation', href: '#contact' },
    { id: 'resume', label: 'Open Resume Viewer', icon: FileText, type: 'action', action: onOpenResume },
  ];

  const projectItems: ActionItem[] = PROJECTS_DATA.map((p) => ({
    id: p.id,
    label: `Project: ${p.title} (${p.category})`,
    icon: Sparkles,
    type: 'navigation',
    href: '#projects',
  }));

  const allItems = [...actions, ...projectItems];

  const filteredItems = allItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: ActionItem) => {
    onClose();
    if (item.type === 'action' && item.action) {
      item.action();
    } else if (item.href) {
      window.location.href = item.href;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="glass-card max-w-xl w-full rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-[#0c0d14]"
      >
        {/* Search Input Field */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search sections (e.g. Projects, Skills, Resume)..."
            className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-slate-500 font-sans"
          />
          <button onClick={onClose} className="p-1 rounded bg-white/5 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Items List */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1 font-sans">
          {filteredItems.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500 font-mono">
              No matching commands or projects found.
            </div>
          ) : (
            filteredItems.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-cyan-500/10 text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 text-cyan-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-400 border border-white/10">ESC to close</kbd>
        </div>
      </motion.div>
    </div>
  );
};
