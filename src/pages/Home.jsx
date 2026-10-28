import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, ChevronRight, Zap } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { stats, socialLinks } from '../data';

/* ── Animated Counter ── */
function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

/* ── Terminal Component ── */
function TerminalCard({ isDark }) {
  const lines = [
    { prompt: '~$', text: 'gdg init --campus poornima-university', delay: 0 },
    { prompt: '', text: '✓ Chapter initialized at Jaipur, Rajasthan', delay: 0.5, color: 'text-google-green' },
    { prompt: '', text: '✓ Loading domains: AI/ML, Cloud, Web3, Security', delay: 1.0, color: 'text-google-green' },
    { prompt: '', text: '✓ 350+ developers connected', delay: 1.5, color: 'text-google-green' },
    { prompt: '~$', text: 'gdg events --upcoming', delay: 2.0 },
    { prompt: '', text: '→ Solution Challenge 2025 — Ongoing Global Track', delay: 2.5, color: 'text-google-blue' },
    { prompt: '', text: '→ Build With AI 2.0 Workshop — Upcoming', delay: 3.0, color: 'text-google-yellow' },
    { prompt: '~$', text: '█', delay: 3.5, cursor: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={`relative rounded-2xl overflow-hidden ${isDark ? 'glass' : 'glass-light shadow-xl'}`}
    >
      {/* Terminal Header */}
      <div className={`flex items-center gap-2 px-4 py-3 border-b ${
        isDark ? 'border-white/5 bg-white/[0.02]' : 'border-gray-200 bg-gray-50'
      }`}>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-google-red/80" />
          <div className="w-3 h-3 rounded-full bg-google-yellow/80" />
          <div className="w-3 h-3 rounded-full bg-google-green/80" />
        </div>
        <span className={`text-xs font-mono ml-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          gdg-terminal — zsh
        </span>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-sm space-y-1.5 min-h-[250px]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay, duration: 0.3 }}
            className="flex gap-2"
          >
            {line.prompt && (
              <span className="text-google-blue font-semibold">{line.prompt}</span>
            )}
            <span className={line.color || (isDark ? 'text-gray-300' : 'text-gray-700')}>
              {line.cursor ? (
                <span className="animate-blink">█</span>
              ) : (
                line.text
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Home Page ── */
export default function Home() {
  const { isDark } = useTheme();

  return (
    <div className="relative">
      {/* Background effects */}
      <div className={`absolute inset-0 ${isDark ? 'grid-pattern' : 'grid-pattern-light'}`} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-google-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-google-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-google-green/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium border border-google-blue/30 bg-google-blue/5 text-google-blue"
              >
                <Sparkles size={14} />
                Google Developer Groups on Campus
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Empowering{' '}
                <span className="gradient-text">Student Developers</span>
                {' '}at Poornima University
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-xl ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Learn, build, and grow with a vibrant community of developers. 
                From AI workshops to hackathons — we turn ideas into impact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={socialLinks.chapter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-google-blue to-blue-600 text-white font-semibold text-base hover:shadow-xl hover:shadow-google-blue/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Zap size={18} />
                  Join Chapter
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/events"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base border transition-all duration-300 hover:-translate-y-0.5 ${
                    isDark
                      ? 'border-white/10 text-white hover:bg-white/5 hover:border-white/20'
                      : 'border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  Explore Events
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right - Terminal */}
            <TerminalCard isDark={isDark} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 sm:p-12 ${
              isDark ? 'glass' : 'glass-light shadow-xl'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 gradient-text`}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              From hands-on workshops to hackathons, we provide everything you need to grow as a developer.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Workshops & Study Jams', desc: 'Hands-on sessions on Google technologies — Cloud, AI, Flutter, and more.', color: 'google-blue', icon: '🎓' },
              { title: 'Hackathons', desc: '36-hour coding marathons with real prizes, mentors, and industry exposure.', color: 'google-red', icon: '🚀' },
              { title: 'Speaker Sessions', desc: 'Industry leaders and Google Developer Experts sharing real-world insights.', color: 'google-green', icon: '🎤' },
              { title: 'Open Source', desc: 'Contribute to open-source projects, participate in GSoC, and build your portfolio.', color: 'google-yellow', icon: '💻' },
              { title: 'Project Showcases', desc: 'Demo your projects, get feedback, and collaborate with fellow developers.', color: 'google-blue', icon: '✨' },
              { title: 'Community & Networking', desc: 'Connect with 350+ student developers and build lasting professional relationships.', color: 'google-green', icon: '🤝' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${feature.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden p-12 sm:p-16 text-center"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-google-blue/20 via-google-red/10 to-google-green/20" />
            <div className={`absolute inset-0 ${isDark ? 'bg-dark-bg/60' : 'bg-white/60'}`} />
            <div className="absolute inset-0 backdrop-blur-sm" />

            <div className="relative z-10">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ready to Start Building?
              </h2>
              <p className={`text-lg mb-8 max-w-xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Join GDG on Campus — Poornima University and become part of a global developer community.
              </p>
              <a
                href={socialLinks.chapter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-google-blue to-blue-600 text-white font-semibold text-lg hover:shadow-xl hover:shadow-google-blue/25 transition-all duration-300 hover:-translate-y-1"
              >
                Join the Chapter
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
