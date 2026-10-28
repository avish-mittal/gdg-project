import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '../components/BrandIcons';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../ThemeContext';
import { socialLinks } from '../data';

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        duration: 4000,
        style: {
          background: isDark ? '#1a1a2e' : '#fff',
          color: isDark ? '#e4e4e7' : '#1a1a2e',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        },
        iconTheme: { primary: '#34A853', secondary: isDark ? '#1a1a2e' : '#fff' },
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Please fix the errors below.', {
        style: {
          background: isDark ? '#1a1a2e' : '#fff',
          color: isDark ? '#e4e4e7' : '#1a1a2e',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        },
        iconTheme: { primary: '#EA4335', secondary: isDark ? '#1a1a2e' : '#fff' },
      });
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const communityLinks = [
    { name: 'GDG Community', Icon: ExternalLink, href: socialLinks.chapter, desc: 'Official GDG Chapter Page', color: 'text-google-blue' },
    { name: 'GitHub', Icon: GithubIcon, href: socialLinks.github, desc: 'Open source repos', color: isDark ? 'text-white' : 'text-gray-800' },
    { name: 'Instagram', Icon: InstagramIcon, href: socialLinks.instagram, desc: '@gdg.poornima', color: 'text-pink-500' },
    { name: 'LinkedIn', Icon: LinkedinIcon, href: socialLinks.linkedin, desc: 'Professional updates', color: 'text-google-blue' },
  ];

  const inputClasses = (field) => `w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none ${
    isDark
      ? `bg-white/5 border ${errors[field] ? 'border-google-red/50' : 'border-white/10 focus:border-google-blue/50'} text-white placeholder-gray-500`
      : `bg-gray-50 border ${errors[field] ? 'border-google-red/50' : 'border-gray-200 focus:border-google-blue/50'} text-gray-900 placeholder-gray-400`
  }`;

  return (
    <div className="relative pt-24">
      <Toaster position="top-right" />
      <div className={`absolute inset-0 ${isDark ? 'grid-pattern' : 'grid-pattern-light'}`} />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-google-green/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium border border-google-green/30 bg-google-green/5 text-google-green">
              <Mail size={14} />
              Get in Touch
            </div>
            <h1 className={`text-4xl sm:text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Have questions, feedback, or collaboration ideas? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className={`p-8 rounded-2xl border ${
                isDark ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-white shadow-lg'
              }`}>
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Send us a Message
                </h2>

                {/* Name */}
                <div className="mb-5">
                  <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <User size={14} />
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={inputClasses('name')}
                    id="contact-name"
                  />
                  {errors.name && (
                    <p className="text-google-red text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Mail size={14} />
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputClasses('email')}
                    id="contact-email"
                  />
                  {errors.email && (
                    <p className="text-google-red text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <MessageSquare size={14} />
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${inputClasses('message')} resize-none`}
                    id="contact-message"
                  />
                  {errors.message && (
                    <p className="text-google-red text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-google-green to-emerald-600 text-white font-semibold hover:shadow-lg hover:shadow-google-green/25 transition-all duration-300"
                  id="contact-submit"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Community Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <div className={`p-8 rounded-2xl border ${
                isDark ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-white shadow-lg'
              }`}>
                <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Join Our Community
                </h2>
                <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Connect with us on our official platforms.
                </p>

                <div className="space-y-3">
                  {communityLinks.map((link, i) => {
                    const { Icon } = link;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                          isDark
                            ? 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                            : 'border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white hover:shadow-md'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                          <Icon size={20} className={link.color} />
                        </div>
                        <div>
                          <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {link.name}
                          </span>
                          <span className={`block text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            {link.desc}
                          </span>
                        </div>
                        <ExternalLink size={14} className={`ml-auto ${isDark ? 'text-gray-600' : 'text-gray-300'}`} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Official Chapter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl p-8 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-google-blue/20 via-google-red/10 to-google-green/20" />
                <div className={`absolute inset-0 ${isDark ? 'bg-dark-bg/60' : 'bg-white/60'}`} />
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className="relative z-10">
                  <CheckCircle size={40} className="text-google-green mx-auto mb-4" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Official GDG Chapter
                  </h3>
                  <p className={`text-sm mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Join our official Google Developer Group chapter page.
                  </p>
                  <a
                    href={socialLinks.chapter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-google-blue to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-google-blue/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Visit Chapter Page
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
