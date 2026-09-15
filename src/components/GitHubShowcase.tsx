import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, Flame, ExternalLink, Code2 } from 'lucide-react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';

export const GitHubShowcase: React.FC = () => {
  const weeks = 52;
  const daysPerWeek = 7;

  const generateGrid = () => {
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const rand = Math.random();
        let level = 0;
        if (rand > 0.45 && rand <= 0.7) level = 1;
        else if (rand > 0.7 && rand <= 0.88) level = 2;
        else if (rand > 0.88 && rand <= 0.96) level = 3;
        else if (rand > 0.96) level = 4;
        week.push(level);
      }
      grid.push(week);
    }
    return grid;
  };

  const [contributionGrid] = useState<number[][]>(generateGrid);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-cyan-950/80 border-cyan-800/50';
      case 2:
        return 'bg-cyan-700/80 border-cyan-600/50';
      case 3:
        return 'bg-cyan-400 border-cyan-300';
      case 4:
        return 'bg-white border-white shadow-sm shadow-white';
      default:
        return 'bg-white/5 border-white/5';
    }
  };

  return (
    <section id="github" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="see-through-button text-xs font-mono text-cyan-300 border-cyan-500/30">
            <Code2 className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & REPOSITORY ACTIVITY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            GitHub <span className="text-cyan-400">Showcase</span>
          </h2>
        </div>
        <p className="text-white/60 text-sm max-w-md font-light">
          Active code commits, repository breakdown, and open source development velocity.
        </p>
      </div>

      {/* Contribution Heatmap Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#141414] p-6 sm:p-8 rounded-[25px] border border-white/10 space-y-6 shadow-2xl mb-12"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 text-cyan-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">52-Week Commit Activity</h3>
              <p className="text-xs text-white/50 font-mono">Continuous commit frequency across public repositories</p>
            </div>
          </div>
          <div className="see-through-button text-xs font-mono font-bold">
            480+ COMMITS THIS YEAR
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1.5 min-w-[700px]">
            {contributionGrid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`w-3 h-3 rounded-[3px] border ${getCellColor(level)} transition-all duration-200 hover:scale-125`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-white/40 pt-2">
          <span>Less</span>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-[3px] bg-white/5 border border-white/5" />
            <span className="w-3 h-3 rounded-[3px] bg-cyan-950/80 border border-cyan-800/50" />
            <span className="w-3 h-3 rounded-[3px] bg-cyan-700/80 border border-cyan-600/50" />
            <span className="w-3 h-3 rounded-[3px] bg-cyan-400 border border-cyan-300" />
            <span className="w-3 h-3 rounded-[3px] bg-white border border-white" />
          </div>
          <span>More</span>
        </div>
      </motion.div>

      {/* Featured Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GITHUB_REPOS.map((repo, idx) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="bg-[#141414] p-6 rounded-[24px] border border-white/10 hover:border-white/30 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-mono text-sm font-bold group-hover:text-cyan-300 transition-colors">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>{repo.name}</span>
                </div>
                <a
                  href={`${PERSONAL_INFO.github}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white text-white hover:text-black transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                {repo.description}
              </p>

              <div className="flex items-center gap-2">
                <span className="see-through-button text-[10px] py-0.5 px-2 text-cyan-300 border-cyan-500/30">
                  Updated {repo.updated}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-white/60" />
                  {repo.forks}
                </span>
              </div>
              <span className="text-cyan-400 font-bold">{repo.language}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
