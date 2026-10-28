import { motion } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { domains } from '../data';

export default function About() {
  const { isDark } = useTheme();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="relative pt-24">
      <div className={`absolute inset-0 ${isDark ? 'grid-pattern' : 'grid-pattern-light'}`} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-google-green/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium border border-google-green/30 bg-google-green/5 text-google-green">
              <Rocket size={14} />
              About Our Chapter
            </div>
            <h1 className={`text-4xl sm:text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About <span className="gradient-text">GDG on Campus</span>
            </h1>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Google Developer Groups on Campus – Poornima University is a student-led community 
              backed by Google, dedicated to fostering a culture of innovation, collaboration, 
              and technical excellence among students.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className={`relative p-8 rounded-2xl border overflow-hidden ${
                isDark ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-white shadow-lg'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-google-blue to-google-green" />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-google-blue/10">
                  <Target className="text-google-blue" size={24} />
                </div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Our Mission
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                To bridge the gap between academic learning and industry demands by providing 
                hands-on experiences with cutting-edge Google technologies. We empower students 
                to become confident developers through workshops, mentorship, and real-world projects 
                that make a difference.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`relative p-8 rounded-2xl border overflow-hidden ${
                isDark ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-white shadow-lg'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-google-yellow to-google-red" />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-google-yellow/10">
                  <Eye className="text-google-yellow" size={24} />
                </div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Our Vision
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                To be the most impactful student developer community in Rajasthan — producing 
                innovators, open-source contributors, and tech leaders who drive positive change. 
                We envision every student at Poornima University having the opportunity to learn, 
                build, and grow with Google technologies.
              </p>
            </motion.div>
          </div>

          {/* Domains */}
          <motion.div {...fadeUp} className="mb-8">
            <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Domains We <span className="gradient-text">Cover</span>
            </h2>
            <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Six specialized tracks led by dedicated domain coordinators.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {domains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`group p-6 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                      : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg'
                  }`}
                >
                  <div className={`inline-flex p-3 rounded-xl ${domain.bg} mb-4`}>
                    <Icon className={domain.color} size={24} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {domain.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {domain.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Chapter Story */}
          <motion.div
            {...fadeUp}
            className={`relative rounded-2xl p-8 sm:p-12 border overflow-hidden ${
              isDark ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-white shadow-lg'
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-google-blue via-google-red via-google-yellow to-google-green" />
            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our Story
            </h2>
            <div className={`space-y-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>
                <strong className={isDark ? 'text-gray-200' : 'text-gray-800'}>GDG on Campus — Poornima University</strong> was 
                established in 2023 as part of Google's initiative to bring developer communities to college campuses across India. 
                Located in the vibrant city of Jaipur, Rajasthan, our chapter has quickly grown into one of the most active 
                GDG on Campus communities in the region.
              </p>
              <p>
                Starting with just 30 founding members, we've expanded to a community of <strong className={isDark ? 'text-gray-200' : 'text-gray-800'}>350+ passionate developers</strong> spanning 
                all engineering branches. Our journey has been marked by impactful events — from Google Cloud Study Jams 
                and Flutter workshops to our flagship annual hackathon, <strong className={isDark ? 'text-gray-200' : 'text-gray-800'}>HackFest</strong>.
              </p>
              <p>
                We've hosted over 45 workshops, mentored dozens of teams for the Google Solution Challenge, and seen our members 
                land internships at top tech companies. Our community is built on the belief that every student deserves access 
                to world-class developer education — and that peer learning is the most powerful catalyst for growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
