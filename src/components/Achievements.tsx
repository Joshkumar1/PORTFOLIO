import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="awards" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header (Matching I1.html line 2662 Professional Achievements) */}
      <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="see-through-button text-xs font-mono text-cyan-300 border-cyan-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>RECOGNITION & VERIFIED MILESTONES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            Professional <span className="text-cyan-400">Achievements</span>
          </h2>
        </div>
        <p className="text-white/60 text-sm max-w-md font-light">
          Real engineering milestones, technical craftsmanship awards, open-source contributions, and verified metrics.
        </p>
      </div>

      {/* Horizontal List Items Layout (Matching I1.html .nectar-hor-list-item) */}
      <div className="space-y-1">
        {/* Table Column Headers */}
        <div className="hidden md:grid grid-cols-12 pb-4 text-xs font-mono uppercase tracking-widest text-white/40 px-4">
          <div className="col-span-5">Milestone / Title</div>
          <div className="col-span-3">Category / Domain</div>
          <div className="col-span-3">Recognition</div>
          <div className="col-span-1 text-right">Year</div>
        </div>

        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="nectar-hor-list-item group"
          >
            {/* Column 1: Title & Organization */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-cyan-400 font-bold opacity-70 group-hover:opacity-100">
                0{idx + 1}
              </span>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/50 md:hidden mt-1">{item.subtitle}</p>
              </div>
            </div>

            {/* Column 2: Domain / Category */}
            <div className="text-sm font-mono text-white/70">
              <span className="see-through-button text-[10px] py-1 px-3">
                {item.badge}
              </span>
            </div>

            {/* Column 3: Recognition / Details */}
            <div className="text-sm text-white/80 font-sans font-light hidden md:block">
              <h4>{item.subtitle}</h4>
            </div>

            {/* Column 4: Year */}
            <div className="text-right font-mono text-sm font-bold text-white/60 group-hover:text-white transition-colors flex items-center justify-end gap-1">
              <span>2024</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
