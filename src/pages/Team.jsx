import { motion } from 'framer-motion';
import { Users, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/BrandIcons';
import { useTheme } from '../ThemeContext';
import { teamMembers, socialLinks } from '../data';

function TeamCard({ member, index, isDark }) {
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group relative p-8 rounded-3xl border flex flex-col justify-between text-center transition-all duration-300 ${
        isDark
          ? 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
          : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-2xl'
      }`}
    >
      {/* Gradient top accent */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div>
        {/* Circular Avatar matching official GDG design */}
        <div className="relative mx-auto mb-6 w-36 h-36">
          <div className="w-36 h-36 rounded-full overflow-hidden mx-auto shadow-xl border-4 border-white/10 group-hover:border-google-blue/40 transition-colors duration-300">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }
                }}
              />
            ) : null}
            <div
              className={`w-full h-full bg-gradient-to-br ${member.gradient} ${member.image ? 'hidden' : 'flex'} items-center justify-center text-white text-3xl font-bold`}
            >
              {initials}
            </div>
          </div>
        </div>

        {/* Info */}
        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {member.name}
        </h3>
        
        {/* Official Role */}
        <p className="text-sm font-semibold text-google-blue mt-1.5">
          {member.role}
        </p>

        {/* Affiliation / Campus */}
        {member.affiliation && (
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {member.affiliation}
          </p>
        )}

        {/* Bio */}
        <p className={`text-xs mt-3 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {member.bio}
        </p>
      </div>

      {/* Profile & Social Action Links */}
      <div className="mt-6 pt-5 border-t border-white/5 flex flex-col gap-3">
        {member.profileUrl && (
          <a
            href={member.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-google-blue to-blue-600 hover:shadow-lg hover:shadow-google-blue/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>View Profile</span>
            <ExternalLink size={14} />
          </a>
        )}

        <div className="flex items-center justify-center gap-3">
          {[
            { Icon: GithubIcon, href: member.github || socialLinks.github, label: 'GitHub' },
            { Icon: LinkedinIcon, href: member.linkedin || socialLinks.linkedin, label: 'LinkedIn' },
            { Icon: TwitterIcon, href: member.twitter || socialLinks.twitter, label: 'Twitter' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900'
              }`}
              aria-label={label}
              title={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const { isDark } = useTheme();

  return (
    <div className="relative pt-24">
      <div className={`absolute inset-0 ${isDark ? 'grid-pattern' : 'grid-pattern-light'}`} />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-google-red/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium border border-google-red/30 bg-google-red/5 text-google-red">
              <Users size={14} />
              Google Developer Groups on Campus
            </div>
            <h1 className={`text-4xl sm:text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Organizers
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Meet the official GDGoC Organizers leading Google Developer Groups on Campus at Poornima University.
            </p>
          </motion.div>

          {/* Organizers Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} isDark={isDark} />
            ))}
          </div>

          {/* Join Chapter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mt-20 text-center p-8 sm:p-12 rounded-2xl border max-w-4xl mx-auto ${
              isDark ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-white shadow-lg'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Be a Part of GDG on Campus Poornima University
            </h3>
            <p className={`mb-6 max-w-lg mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Connect with fellow developers, attend hands-on workshops, participate in hackathons, and build impactful projects together.
            </p>
            <a
              href={socialLinks.chapter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-google-red to-rose-600 text-white font-semibold hover:shadow-lg hover:shadow-google-red/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Join Official Chapter</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
