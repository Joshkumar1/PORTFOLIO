import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Layout, Palette, Wind, Smartphone, Sparkles, Server, Cpu, Network, ShieldCheck, 
  Database, Coffee, Terminal, Table, Binary, Brain, GitBranch, Laptop, Box, Send, FileCode2, Atom
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Atom,
  FileCode2,
  Code2,
  Layout,
  Palette,
  Wind,
  Smartphone,
  Sparkles,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Database,
  Coffee,
  Terminal,
  Table,
  Binary,
  Brain,
  GitBranch,
  Laptop,
  Box,
  Send,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_DATA.map((s) => s.category)];

  const filteredData = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="see-through-button text-xs font-mono text-cyan-300 border-cyan-500/30">
            <Code2 className="w-3.5 h-3.5" />
            <span>CORE TOOLKITS & PROFICIENCY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            Technical <span className="text-cyan-400">Capabilities</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`see-through-button text-xs font-medium uppercase tracking-wider ${
                activeCategory === cat ? 'active' : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Categories & Cards Grid */}
      <div className="space-y-12">
        {filteredData.map((catGroup) => (
          <div key={catGroup.category} className="space-y-6">
            <h3 className="font-display text-xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              {catGroup.category} Stack
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {catGroup.skills.map((skill, sIdx) => {
                const IconComponent = iconMap[skill.iconName] || Code2;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.04 }}
                    className="bg-[#141414] p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-white text-white group-hover:text-black transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="see-through-button text-[10px] py-0.5 px-2.5 text-white/70">
                          {skill.experience}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-3 border-t border-white/10">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-white/40">Proficiency</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
