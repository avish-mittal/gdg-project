import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import { useTheme } from '../ThemeContext';
import { socialLinks } from '../data';

export default function Footer() {
  const { isDark } = useTheme();

  const footerLinks = [
    { title: 'Navigate', links: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Events', path: '/events' },
      { name: 'Team', path: '/team' },
    ]},
    { title: 'Resources', links: [
      { name: 'Projects', path: '/projects' },
      { name: 'Contact', path: '/contact' },
      { name: 'GDG Community', path: socialLinks.chapter, external: true },
      { name: 'Google Developers', path: 'https://developers.google.com', external: true },
    ]},
  ];

  const socials = [
    { Icon: GithubIcon, href: socialLinks.github, label: 'GitHub' },
    { Icon: InstagramIcon, href: socialLinks.instagram, label: 'Instagram' },
    { Icon: LinkedinIcon, href: socialLinks.linkedin, label: 'LinkedIn' },
    { Icon: TwitterIcon, href: socialLinks.twitter, label: 'Twitter' },
  ];

  return (
    <footer className={`relative border-t ${
      isDark ? 'border-white/5 bg-dark-bg' : 'border-gray-200 bg-white'
    }`}>
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-google-blue to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-google-blue via-google-red to-google-green flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <div>
                <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  GDG on Campus
                </span>
                <span className={`text-sm block -mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Poornima University, Jaipur
                </span>
              </div>
            </div>
            <p className={`text-sm max-w-md mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Empowering student developers through hands-on workshops, hackathons, 
              and open-source contributions. Part of the global Google Developer Groups network.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl transition-all duration-200 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900'
                  }`}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className={`font-semibold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm flex items-center gap-1 transition-colors ${
                          isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        {link.name}
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className={`text-sm transition-colors ${
                          isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDark ? 'border-white/5' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2026 GDG on Campus – Poornima University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
