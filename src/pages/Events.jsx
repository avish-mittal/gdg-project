import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Wifi, WifiOff, CalendarCheck, Tag, ExternalLink } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { events } from '../data';

const tabs = [
  { id: 'all', label: 'All Events' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'past', label: 'Past Events' },
  { id: 'hackathon', label: 'Hackathons' },
];

function EventCard({ event, isDark }) {
  const isOpen = event.rsvp === 'open';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
        isDark
          ? 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
          : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg'
      }`}
    >
      <div>
        {/* Top accent */}
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
          event.category === 'upcoming' ? 'via-google-blue' :
          event.category === 'hackathon' ? 'via-google-yellow' : 'via-google-green'
        } to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {/* Mode badge */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
              event.mode === 'Online'
                ? 'bg-google-blue/10 text-google-blue'
                : 'bg-google-green/10 text-google-green'
            }`}>
              {event.mode === 'Online' ? <Wifi size={12} /> : <WifiOff size={12} />}
              {event.mode}
            </span>
            {/* RSVP Status */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
              isOpen
                ? 'bg-green-500/10 text-green-500'
                : isDark ? 'bg-white/5 text-gray-500' : 'bg-gray-100 text-gray-400'
            }`}>
              <CalendarCheck size={12} />
              {isOpen ? 'RSVP Open' : 'Past Event'}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {event.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {event.description}
        </p>

        {/* Meta */}
        <div className={`space-y-2 mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-google-blue shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-google-yellow shrink-0" />
            <span>{event.time}</span>
          </div>
          {event.venue && (
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-google-green shrink-0" />
              <span>{event.venue}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <User size={14} className="text-google-red shrink-0" />
            <span>{event.speaker}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium ${
                isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <a
        href={event.link || 'https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/'}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
          isOpen
            ? 'bg-gradient-to-r from-google-blue to-blue-600 text-white shadow-md hover:shadow-lg hover:shadow-google-blue/25'
            : isDark
            ? 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
        }`}
      >
        <span>{isOpen ? 'Register on GDG Community' : 'View Event on GDG'}</span>
        <ExternalLink size={14} />
      </a>
    </motion.div>
  );
}

export default function Events() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('all');

  const filteredEvents = activeTab === 'all' 
    ? events 
    : activeTab === 'upcoming'
    ? events.filter(e => e.rsvp === 'open' || e.category === 'upcoming')
    : activeTab === 'past'
    ? events.filter(e => e.rsvp === 'closed' || e.category === 'past')
    : events.filter(e => e.category === 'hackathon' || e.tags.some(t => t.toLowerCase().includes('hackathon') || t.toLowerCase().includes('challenge')));

  return (
    <div className="relative pt-24">
      <div className={`absolute inset-0 ${isDark ? 'grid-pattern' : 'grid-pattern-light'}`} />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-google-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium border border-google-yellow/30 bg-google-yellow/5 text-google-yellow">
              <Calendar size={14} />
              Workshops, Talks & Hackathons
            </div>
            <h1 className={`text-4xl sm:text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our <span className="gradient-text">Events</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              From hands-on workshops to intense hackathons — discover what's happening at GDG Poornima.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? isDark
                      ? 'text-white'
                      : 'text-gray-900'
                    : isDark
                    ? 'text-gray-500 hover:text-gray-300'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="events-tab"
                    className={`absolute inset-0 rounded-xl ${
                      isDark ? 'bg-white/10' : 'bg-gray-100'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Events Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} isDark={isDark} />
              ))}
            </AnimatePresence>
          </div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center py-20 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
            >
              <Calendar size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">No events found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
