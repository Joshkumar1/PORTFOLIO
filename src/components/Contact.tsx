import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [activationNeeded, setActivationNeeded] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Josh,\n\n${formData.message || 'I would like to connect with you regarding an opportunity.'}\n\nBest regards,\n${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not provided'}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage(null);
    setActivationNeeded(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(PERSONAL_INFO.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name} - ${formData.subject || 'General Inquiry'}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === 'true' || result.success === true || response.status === 200)) {
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#ffffff', '#8b5cf6'],
        });
      } else if (result.message && (result.message.toLowerCase().includes('activation') || result.message.toLowerCase().includes('activate'))) {
        setActivationNeeded(true);
        setErrorMessage(result.message);
        window.open(getMailtoLink(), '_self');
      } else {
        setErrorMessage(result.message || 'Unable to transmit message automatically. You can send it directly via your mail client below.');
      }
    } catch {
      setErrorMessage('Network or transmission issue. You can click below to send directly via your mail client.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="see-through-button text-xs font-mono text-cyan-300 border-cyan-500/30">
            <Mail className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
        </div>
        <p className="text-white/60 text-sm max-w-md font-light">
          Whether you have a technical inquiry, project proposal, or software engineering role—my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] p-6 sm:p-8 rounded-[25px] border border-white/10 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/5 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white uppercase">Direct Email</h3>
                <p className="text-xs text-white/50">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black border border-white/10 font-mono text-xs text-white/90">
              <span className="truncate">{PERSONAL_INFO.email}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="see-through-button text-[10px] py-1 px-3"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full see-through-button justify-center py-2.5 text-xs font-semibold uppercase hover:bg-cyan-400 hover:text-black hover:border-cyan-400 flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Compose In Mail App</span>
            </a>
          </motion.div>

          {/* Location & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#141414] p-6 sm:p-8 rounded-[25px] border border-white/10 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/5 text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white uppercase">Location & Status</h3>
                <p className="text-xs text-white/50">{PERSONAL_INFO.location} • Remote & Global Relocation</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 see-through-button justify-center py-2.5 text-xs font-semibold uppercase hover:bg-white hover:text-black"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 see-through-button justify-center py-2.5 text-xs font-semibold uppercase hover:bg-white hover:text-black"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] p-6 sm:p-10 rounded-[25px] border border-white/10 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Message Transmitted</h3>
                <p className="text-white/70 text-sm max-w-md mx-auto">
                  Thank you for reaching out! Your message has been sent successfully to {PERSONAL_INFO.name}. I will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage(null);
                    setActivationNeeded(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="see-through-button hover:bg-white hover:text-black text-xs uppercase font-semibold px-6 py-2.5 mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wider text-white/50">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-white/50">Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-mono uppercase tracking-wider text-white/50">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Engineering Role / Project Proposal"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-wider text-white/50">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                {activationNeeded ? (
                  <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-200 space-y-3">
                    <p className="font-semibold text-cyan-300">
                      ⚡ One-time Activation Required
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      FormSubmit requires a one-time email confirmation. An activation link was dispatched to <strong className="text-white">{PERSONAL_INFO.email}</strong>. Once confirmed, submissions deliver automatically.
                    </p>
                    <div className="pt-1 flex flex-wrap gap-2">
                      <a
                        href={getMailtoLink()}
                        className="see-through-button text-[11px] py-1.5 px-3 bg-cyan-500 text-black border-cyan-400 hover:bg-white hover:text-black font-bold uppercase"
                      >
                        Send via Mail App Now
                      </a>
                    </div>
                  </div>
                ) : errorMessage ? (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-300 space-y-3">
                    <p>{errorMessage}</p>
                    <div>
                      <a
                        href={getMailtoLink()}
                        className="see-through-button text-[11px] py-1.5 px-3 bg-white/10 hover:bg-white hover:text-black font-bold uppercase"
                      >
                        Send via Mail Client Instead
                      </a>
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:flex-1 see-through-button justify-center py-4 bg-white text-black border-white hover:bg-cyan-400 hover:border-cyan-400 text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Transmitting Message...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message Now
                      </span>
                    )}
                  </button>

                  <a
                    href={getMailtoLink()}
                    className="w-full sm:w-auto see-through-button justify-center py-4 px-5 text-xs font-semibold uppercase hover:bg-white/10 text-white/80"
                    title="Send using your default mail app"
                  >
                    Open In Mail App
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
