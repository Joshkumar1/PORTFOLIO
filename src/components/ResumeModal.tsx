import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Printer, Copy, Check, Eye, Code } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'visual' | 'plainText'>('visual');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generatePlainTextATS = () => {
    const { header, summary, skills, projects, experience, education, achievements } = RESUME_DATA;

    let text = `${header.name}\n`;
    text += `${header.title}\n`;
    text += `${header.location} | ${header.email} | ${header.phone} | ${header.linkedin} | ${header.github} | ${header.portfolio}\n\n`;
    text += `================================================================================\n`;
    text += `PROFESSIONAL SUMMARY\n`;
    text += `================================================================================\n`;
    text += `${summary}\n\n`;

    text += `================================================================================\n`;
    text += `TECHNICAL SKILLS\n`;
    text += `================================================================================\n`;
    skills.forEach(cat => {
      text += `${cat.category}: ${cat.skills.join(', ')}\n`;
    });
    text += `\n`;

    text += `================================================================================\n`;
    text += `FEATURED SOFTWARE PROJECTS\n`;
    text += `================================================================================\n`;
    projects.forEach(proj => {
      text += `${proj.title} -- ${proj.category}\n`;
      text += `Technologies: ${proj.technologies.join(', ')}\n`;
      proj.bullets.forEach(bullet => {
        text += ` - ${bullet}\n`;
      });
      text += `\n`;
    });

    text += `================================================================================\n`;
    text += `EXPERIENCE & TECHNICAL LEADERSHIP\n`;
    text += `================================================================================\n`;
    experience.forEach(exp => {
      text += `${exp.role} | ${exp.organization} (${exp.period})\n`;
      exp.bullets.forEach(b => {
        text += ` - ${b}\n`;
      });
      text += `\n`;
    });

    text += `================================================================================\n`;
    text += `EDUCATION\n`;
    text += `================================================================================\n`;
    education.forEach(edu => {
      text += `${edu.degree}\n`;
      text += `${edu.institution} | ${edu.period} | ${edu.location}\n`;
      text += `${edu.details}\n\n`;
    });

    text += `================================================================================\n`;
    text += `ACHIEVEMENTS & HIGHLIGHTS\n`;
    text += `================================================================================\n`;
    achievements.forEach(ach => {
      text += ` - ${ach.title}: ${ach.description}\n`;
    });

    return text;
  };

  const handleCopyATS = () => {
    const plainText = generatePlainTextATS();
    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl print:p-0 print:bg-white print:static print:inset-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="glass-card max-w-4xl w-full max-h-[94vh] rounded-2xl border border-white/15 overflow-hidden flex flex-col shadow-2xl bg-[#0B132B] text-slate-100 print:max-w-none print:w-full print:max-h-none print:shadow-none print:border-none print:rounded-none print:bg-white print:text-black"
      >
        {/* Modal Header Control Bar (Hidden during print) */}
        <div className="px-4 py-3.5 sm:px-6 sm:py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#070D1E] print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#3A86FF]/15 text-[#3A86FF] border border-[#3A86FF]/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">G. Josh Kumar — Resume</h3>
              <p className="text-[11px] text-slate-400 font-mono">Calm Power Design · ATS & Recruiter Ready</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-slate-900/80 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('visual')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'visual'
                    ? 'bg-[#3A86FF] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Visual Sheet</span>
              </button>
              <button
                onClick={() => setViewMode('plainText')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'plainText'
                    ? 'bg-[#3A86FF] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Plain ATS Text</span>
              </button>
            </div>

            {/* Copy ATS Text Button */}
            <button
              onClick={handleCopyATS}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/10"
              title="Copy plain ATS format to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-300" />}
              <span className="hidden md:inline">{copied ? 'Copied ATS Text!' : 'Copy ATS'}</span>
            </button>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white text-xs font-semibold shadow-lg shadow-[#3A86FF]/25 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Canvas Container */}
        <div className="overflow-y-auto flex-1 bg-[#0F172A] p-3 sm:p-6 print:p-0 print:bg-white print:overflow-visible">
          <AnimatePresence mode="wait">
            {viewMode === 'visual' ? (
              <motion.div
                key="visual-view"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                id="printable-resume-document"
                className="max-w-3xl mx-auto bg-[#F8FAFC] text-[#111827] rounded-xl shadow-xl border border-slate-200 overflow-hidden font-sans text-xs print:shadow-none print:border-none print:rounded-none print:max-w-none print:w-full print:bg-white"
              >
                {/* Subtle Personal Identity Multi-Color Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0B132B] via-[#3A86FF] via-[#F97316] to-[#D4A72C]" />

                <div className="p-6 sm:p-9 space-y-6">
                  {/* HEADER SECTION */}
                  <div className="border-b border-slate-200 pb-5 space-y-2">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
                        {RESUME_DATA.header.name}
                      </h1>
                      <span className="text-[11px] font-semibold text-[#3A86FF] bg-[#3A86FF]/10 px-2.5 py-0.5 rounded border border-[#3A86FF]/20 print:border-none print:bg-transparent">
                        Software Engineer
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-[#3A86FF]">
                      {RESUME_DATA.header.title}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-slate-600 font-medium pt-1">
                      <span>📍 {RESUME_DATA.header.location}</span>
                      <span>✉️ <a href={`mailto:${RESUME_DATA.header.email}`} className="hover:underline text-slate-700">{RESUME_DATA.header.email}</a></span>
                      <span>📱 {RESUME_DATA.header.phone}</span>
                      <span>🔗 <a href={`https://${RESUME_DATA.header.linkedin}`} target="_blank" rel="noreferrer" className="text-[#3A86FF] hover:underline">{RESUME_DATA.header.linkedin}</a></span>
                      <span>💻 <a href={`https://${RESUME_DATA.header.github}`} target="_blank" rel="noreferrer" className="text-[#3A86FF] hover:underline">{RESUME_DATA.header.github}</a></span>
                      <span>🌐 <a href={`https://${RESUME_DATA.header.portfolio}`} target="_blank" rel="noreferrer" className="text-[#3A86FF] hover:underline">{RESUME_DATA.header.portfolio}</a></span>
                    </div>
                  </div>

                  {/* PROFESSIONAL SUMMARY */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 border-b border-[#0B132B]/15 pb-1">
                      <span className="w-2 h-2 rounded-sm bg-[#3A86FF] rotate-45 shrink-0" />
                      <h2 className="text-xs font-bold tracking-wider text-[#0B132B] uppercase">
                        Professional Summary
                      </h2>
                    </div>
                    <p className="text-slate-700 text-[11.5px] leading-relaxed font-normal">
                      {RESUME_DATA.summary}
                    </p>
                  </div>

                  {/* TECHNICAL SKILLS */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 border-b border-[#0B132B]/15 pb-1">
                      <span className="w-2 h-2 rounded-sm bg-[#3A86FF] rotate-45 shrink-0" />
                      <h2 className="text-xs font-bold tracking-wider text-[#0B132B] uppercase">
                        Technical Skills
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[11px]">
                      {RESUME_DATA.skills.map((skillGroup, idx) => (
                        <div key={idx} className="flex gap-2">
                          <strong className="text-[#0B132B] font-semibold min-w-[130px] shrink-0">
                            {skillGroup.category}:
                          </strong>
                          <span className="text-slate-700 font-normal">
                            {skillGroup.skills.join(', ')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FEATURED SOFTWARE PROJECTS */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-[#0B132B]/15 pb-1">
                      <span className="w-2 h-2 rounded-sm bg-[#3A86FF] rotate-45 shrink-0" />
                      <h2 className="text-xs font-bold tracking-wider text-[#0B132B] uppercase">
                        Featured Software Projects
                      </h2>
                    </div>

                    <div className="space-y-3.5">
                      {RESUME_DATA.projects.map((proj, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-[12.5px] font-bold text-[#0B132B]">
                                {proj.title}
                              </h3>
                              <span className="text-[11px] text-slate-500 font-medium">
                                ({proj.category})
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {proj.technologies.slice(0, 4).map((tech, i) => (
                                <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-800 border border-slate-300/50">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <p className="text-[11px] italic text-slate-600 font-medium">
                            {proj.subtitle}
                          </p>

                          <ul className="space-y-1 pt-0.5 text-[11px] text-slate-700">
                            {proj.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 leading-tight">
                                <span className="text-[#3A86FF] font-bold shrink-0 mt-[3px]">▸</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* EXPERIENCE & LEADERSHIP */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 border-b border-[#0B132B]/15 pb-1">
                      <span className="w-2 h-2 rounded-sm bg-[#3A86FF] rotate-45 shrink-0" />
                      <h2 className="text-xs font-bold tracking-wider text-[#0B132B] uppercase">
                        Experience & Technical Leadership
                      </h2>
                    </div>

                    {RESUME_DATA.experience.map((exp, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-baseline flex-wrap text-[12px]">
                          <strong className="font-bold text-[#0B132B]">{exp.role}</strong>
                          <span className="text-[11px] font-semibold text-[#3A86FF]">{exp.period}</span>
                        </div>
                        <div className="text-[11px] text-slate-600 font-medium flex justify-between">
                          <span>{exp.organization}</span>
                          <span>{exp.location}</span>
                        </div>
                        <ul className="space-y-1 pt-1 text-[11px] text-slate-700">
                          {exp.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 leading-tight">
                              <span className="text-[#3A86FF] font-bold shrink-0 mt-[3px]">▸</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* EDUCATION */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 border-b border-[#0B132B]/15 pb-1">
                      <span className="w-2 h-2 rounded-sm bg-[#3A86FF] rotate-45 shrink-0" />
                      <h2 className="text-xs font-bold tracking-wider text-[#0B132B] uppercase">
                        Education
                      </h2>
                    </div>

                    {RESUME_DATA.education.map((edu, idx) => (
                      <div key={idx} className="space-y-1 text-[11px]">
                        <div className="flex justify-between items-baseline flex-wrap">
                          <strong className="text-[12px] font-bold text-[#0B132B]">{edu.degree}</strong>
                          <span className="font-semibold text-[#F97316]">{edu.period}</span>
                        </div>
                        <div className="text-slate-600 font-medium flex justify-between">
                          <span>{edu.institution}</span>
                          <span>{edu.location}</span>
                        </div>
                        <p className="text-slate-600 text-[10.5px]">
                          {edu.details}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* ACHIEVEMENTS & HIGHLIGHTS */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 border-b border-[#0B132B]/15 pb-1">
                      <span className="w-2 h-2 rounded-sm bg-[#F97316] rotate-45 shrink-0" />
                      <h2 className="text-xs font-bold tracking-wider text-[#0B132B] uppercase">
                        Achievements & Technical Highlights
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                      {RESUME_DATA.achievements.map((ach, idx) => (
                        <div key={idx} className="p-2 rounded bg-slate-100/80 border border-slate-200 flex gap-2 items-start">
                          <span className="text-[#F97316] font-bold text-xs shrink-0 mt-0.5">★</span>
                          <div>
                            <strong className="text-[#0B132B] font-bold block">{ach.title}</strong>
                            <span className="text-slate-600 text-[10.5px] leading-tight block">{ach.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ) : (
              <motion.div
                key="plain-view"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="max-w-3xl mx-auto bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-6 font-mono text-xs text-slate-300 overflow-x-auto shadow-inner"
              >
                <div className="flex justify-between items-center pb-3 mb-3 border-b border-slate-800 text-xs">
                  <span className="text-cyan-400 font-bold">Standard ASCII ATS Plain-Text Stream</span>
                  <button
                    onClick={handleCopyATS}
                    className="px-2.5 py-1 rounded bg-[#3A86FF]/20 text-[#3A86FF] hover:bg-[#3A86FF]/30 font-sans font-semibold transition-colors flex items-center gap-1.5"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied!' : 'Copy Entire Text'}
                  </button>
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed select-all">
                  {generatePlainTextATS()}
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Footer (Hidden during print) */}
        <div className="px-4 py-3 sm:px-6 border-t border-white/10 bg-[#070D1E] flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px]">Subtle Personal Identity • Quiet Confidence & Capability</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="text-[#3A86FF] hover:underline font-medium text-[11px]"
            >
              Export PDF / Print Sheet
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
