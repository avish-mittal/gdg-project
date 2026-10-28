import { motion } from 'framer-motion';
import { ExternalLink, Boxes, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { useTheme } from '../ThemeContext';
import { projects } from '../data';

function ProjectCard({ project, index, isDark }) {
  const colorMap = {
    'google-blue': { border: 'border-google-blue/20', bg: 'bg-google-blue/10', text: 'text-google-blue', gradient: 'from-google-blue to-blue-600' },
    'google-red': { border: 'border-google-red/20', bg: 'bg-google-red/10', text: 'text-google-red', gradient: 'from-google-red to-rose-600' },
    'google-yellow': { border: 'border-google-yellow/20', bg: 'bg-google-yellow/10', text: 'text-google-yellow', gradient: 'from-google-yellow to-amber-500' },
    'google-green': { border: 'border-google-green/20', bg: 'bg-google-green/10', text: 'text-google-green', gradient: 'from-google-green to-emerald-600' },
  };

  const c = colorMap[project.color] || colorMap['google-blue'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
        isDark
          ? 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
          : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-xl'
      }`}
    >
      {/* Project Visual Header */}
      <div className={`relative h-40 bg-gradient-to-br ${c.gradient} p-6 flex items-end`}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 160">
            <defs>
              <pattern id={`grid-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="160" fill={`url(#grid-${index})`} />
          </svg>
        </div>
        <div className="relative z-10">
          <Code2 className="text-white/40 mb-2" size={28} />
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? 'border-white/10 text-white hover:bg-white/5'
                : 'border-gray-200 text-gray-900 hover:bg-gray-50'
            }`}
          >
            <GithubIcon size={16} />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r ${c.gradient} text-white hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}
          >
            <ExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <div className="relative pt-24">
      <div className={`absolute inset-0 ${isDark ? 'grid-pattern' : 'grid-pattern-light'}`} />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-google-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium border border-google-blue/30 bg-google-blue/5 text-google-blue">
              <Boxes size={14} />
              Built by Students, for the World
            </div>
            <h1 className={`text-4xl sm:text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Project <span className="gradient-text">Showcase</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Real projects built by our community members during hackathons, workshops, and Solution Challenges.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
