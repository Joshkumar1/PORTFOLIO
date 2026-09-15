import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Cpu, Heart, Sparkles } from 'lucide-react';
import { DIFFERENTIATORS } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Target,
  TrendingUp,
  Cpu,
  Heart,
};

export const Differentiation: React.FC = () => {
  return (
    <section id="differentiation" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="see-through-button text-xs font-mono text-cyan-300 border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING MINDSET & VALUE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            Distinctive <span className="text-cyan-400">Approach</span>
          </h2>
        </div>
        <p className="text-white/60 text-sm max-w-md font-light">
          Core engineering values that drive every architectural decision, line of code, and user interface I craft.
        </p>
      </div>

      {/* Grid of Differentiator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DIFFERENTIATORS.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || Target;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-[#141414] p-8 rounded-[25px] border border-white/10 hover:border-white/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-xl bg-white/5 text-cyan-400 group-hover:bg-white group-hover:text-black transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-white/40 font-bold">PILLAR 0{idx + 1}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/80 font-light text-base leading-relaxed">
                  "{item.description}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/60 leading-relaxed font-sans">
                <span className="text-cyan-400 font-mono font-bold block mb-1 uppercase tracking-wider">
                  Execution Standard
                </span>
                {item.detail}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
