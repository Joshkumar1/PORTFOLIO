import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code, Layout, Layers, Server, Zap, Brain, Sparkles, GitCommit 
} from 'lucide-react';
import { JOURNEY_STEPS } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Code,
  Layout,
  Layers,
  Server,
  Zap,
  Brain,
  Sparkles,
};

export const EngineeringJourney: React.FC = () => {
  return (
    <section id="journey" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="see-through-button text-xs font-mono text-cyan-300 border-cyan-500/30">
            <GitCommit className="w-3.5 h-3.5" />
            <span>PROGRESSION & TIMELINE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            Engineering <span className="text-cyan-400">Journey</span>
          </h2>
        </div>
        <p className="text-white/60 text-sm max-w-md font-light">
          A continuous timeline of learning, skill evolution, architectural mastery, and project milestones.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {JOURNEY_STEPS.map((step, idx) => {
          const IconComponent = iconMap[step.icon] || Code;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="bg-[#141414] p-6 sm:p-8 rounded-[24px] border border-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 text-cyan-400 group-hover:bg-white group-hover:text-black transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                      {step.tag}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="see-through-button text-xs font-mono font-bold self-start md:self-auto">
                  {step.year}
                </div>
              </div>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light pl-0 md:pl-14">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
