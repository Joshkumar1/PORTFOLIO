import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Layers, Cpu, CheckCircle2, AlertCircle, Wrench, GraduationCap, X, ChevronRight 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectDemoPreview } from './ProjectDemos';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'AI & Data', 'Frontend', 'Systems'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => {
        if (activeFilter === 'Full Stack') return p.category.includes('Full Stack') || p.category.includes('Web') || p.category.includes('Crypto') || p.techStack.includes('Node.js');
        if (activeFilter === 'AI & Data') return p.category.includes('AI') || p.category.includes('Data') || p.category.includes('Intelligence') || p.category.includes('Quantitative');
        if (activeFilter === 'Frontend') return p.category.includes('Frontend') || p.category.includes('React');
        if (activeFilter === 'Systems') return p.category.includes('Systems') || p.category.includes('Tool') || p.category.includes('Terminal');
        return true;
      });

  return (
    <section id="work" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
        <div className="space-y-3">
          <div className="see-through-button text-xs font-mono text-cyan-300 border-cyan-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>SELECTED WORK & CASE STUDIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`see-through-button text-xs font-medium uppercase tracking-wider ${
                activeFilter === cat ? 'active' : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Showcase Stacked Cards Grid */}
      <div className="space-y-16">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-[25px] bg-[#141414] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[480px]">
                {/* Visual Interactive Preview Box */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-10 bg-black/60 border-b lg:border-b-0 ${
                    isEven ? 'lg:border-r lg:order-1' : 'lg:border-l lg:order-2'
                  } border-white/10 flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Category Pill & Index */}
                  <div className="flex items-center justify-between mb-6 z-10">
                    <span className="see-through-button text-xs font-mono text-cyan-300">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-white/40 font-bold">PROJECT 0{index + 1}</span>
                  </div>

                  {/* Interactive UI Mockup Demo Canvas */}
                  <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
                    <ProjectDemoPreview demoType={project.demoType} />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-6 z-10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 see-through-button justify-center py-3 text-xs font-semibold uppercase hover:bg-white hover:text-black"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>Source Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 see-through-button justify-center py-3 text-xs font-semibold uppercase bg-cyan-500 text-black border-cyan-500 hover:bg-white hover:border-white"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Technical Overview & Details */}
                <div
                  className={`lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-white/40">ENGINEERED SOLUTION</div>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-xs font-mono border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                      Key Capabilities
                    </div>
                    <ul className="space-y-2 text-xs text-white/80">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deep Dive Action Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full see-through-button justify-between py-3.5 px-5 text-xs font-semibold uppercase hover:bg-white hover:text-black group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400 group-hover/btn:text-black" />
                      Architecture & Decisions
                    </span>
                    <ChevronRight className="w-4 h-4 text-cyan-400 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Deep Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0a0a0c] max-w-4xl w-full max-h-[90vh] rounded-[24px] border border-white/20 overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase">{selectedProject.category}</span>
                  <h3 className="font-display text-2xl font-bold text-white">{selectedProject.title} Architecture</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                    Detailed Overview
                  </h4>
                  <p className="text-white/80 leading-relaxed text-base">{selectedProject.longDescription}</p>
                </div>

                {/* Architecture Decisions */}
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase font-mono">
                    <GraduationCap className="w-4 h-4" />
                    Key Architectural Decisions
                  </div>
                  <ul className="space-y-2 text-xs text-white/80">
                    {selectedProject.engineeringDecisions.map((decision, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Challenges & Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase font-mono">
                      <AlertCircle className="w-4 h-4" />
                      Technical Challenges Overcome
                    </div>
                    <ul className="space-y-1.5 text-xs text-white/70">
                      {selectedProject.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase font-mono">
                      <Wrench className="w-4 h-4" />
                      Key Takeaways & Growth
                    </div>
                    <ul className="space-y-1.5 text-xs text-white/70">
                      {selectedProject.whatILearned.map((l, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-400 font-bold">•</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer Links */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="see-through-button hover:bg-white hover:text-black font-semibold text-xs"
                    >
                      View GitHub Repository
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="see-through-button bg-cyan-500 text-black border-cyan-500 hover:bg-white hover:border-white font-semibold text-xs"
                      >
                        Launch Application
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-mono text-white/50 hover:text-white"
                  >
                    Close Window [ESC]
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
