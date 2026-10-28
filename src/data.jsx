import {
  Brain, Cloud, Shield, Globe, Code2, Cpu,
} from 'lucide-react';

// ── Chapter Official Links ──
export const socialLinks = {
  discord: 'https://discord.gg/gdgpoornima',
  github: 'https://github.com/gdg-poornima',
  instagram: 'https://instagram.com/gdg.poornima',
  linkedin: 'https://linkedin.com/company/gdg-poornima',
  twitter: 'https://twitter.com/gdg_poornima',
  chapter: 'https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/',
};

// Base URL helper for GitHub Pages compatibility
const base = import.meta.env.BASE_URL || '/';

// ── Official GDGoC Organizers (From Official GDG on Campus Poornima University Page) ──
export const teamMembers = [
  {
    name: 'Raghav Arora',
    role: 'GDGoC Organizer',
    affiliation: 'Poornima University',
    bio: 'GDGoC Organizer at Poornima University. Passionate about empowering student developers, orchestrating hackathons, and scaling the tech community.',
    gradient: 'from-google-blue to-blue-600',
    color: 'google-blue',
    image: `${base}team/raghav.png?v=2`,
    profileUrl: 'https://gdg.community.dev/u/raghav57/',
    github: 'https://github.com/gdg-poornima',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Keshav Verma',
    role: 'GDGoC Organizer',
    affiliation: 'Google Developer Groups on Campus – Poornima University',
    bio: 'GDGoC Organizer at Google Developer Groups on Campus – Poornima University. Focused on technical innovation, workshops, and developer tracks.',
    gradient: 'from-google-red to-rose-600',
    color: 'google-red',
    image: `${base}team/keshav.png?v=2`,
    profileUrl: 'https://gdg.community.dev/u/mj8qcn/',
    github: 'https://github.com/gdg-poornima',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Devika Kanoongo',
    role: 'GDGoC Organizer',
    affiliation: 'Poornima University',
    bio: 'GDGoC Organizer at Poornima University. Leading student engagement, inclusive developer culture, and hands-on technical bootcamps on campus.',
    gradient: 'from-google-yellow to-amber-500',
    color: 'google-yellow',
    image: `${base}team/devika.png?v=2`,
    profileUrl: 'https://gdg.community.dev/u/devika17/',
    github: 'https://github.com/gdg-poornima',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
];

// ── Exact Events Data (Direct links to official event pages on gdg.community.dev) ──
export const events = [
  {
    id: 1,
    title: 'Google Solution Challenge Kick-off and Workshop',
    date: 'Mar 18, 2026',
    time: '10:00 AM - 1:00 PM',
    speaker: 'GDGoC Organizers & Mentors',
    venue: 'Poornima University Campus, Jaipur',
    mode: 'Offline',
    rsvp: 'open',
    category: 'upcoming',
    link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-poornima-university-jaipur-india-presents-google-solution-challenge-kick-off-and-workshop/',
    tags: ['Solution Challenge', 'UN SDGs', 'Google', 'Workshop'],
    description: 'The Google Solution Challenge invites university students to develop solutions for local and global community problems using Google technologies. Join our kick-off and hands-on ideation workshop.',
  },
  {
    id: 2,
    title: "Build with AI Workshop: Let's Hack It!",
    date: 'Jan 22, 2026',
    time: '10:00 AM - 4:00 PM',
    speaker: 'Technical Team & AI Mentors',
    venue: 'Seminar Hall, Ground Floor, Poornima University',
    mode: 'Offline',
    rsvp: 'open',
    category: 'upcoming',
    link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-poornima-university-jaipur-india-presents-build-with-ai-workshop-lets-hack-it/',
    tags: ['Build with AI', 'Gemini API', 'Hackathon', 'Hands-on'],
    description: 'Dive into generative AI application development with hands-on mentoring on Google Gemini API, Vertex AI, and live hackathon challenges.',
  },
  {
    id: 3,
    title: 'GDG India Hackathon Briefing Session',
    date: 'Dec 24, 2025',
    time: '5:00 PM - 6:30 PM',
    speaker: 'GDG India Team & Campus Leads',
    venue: 'Virtual Meet & Google Meet',
    mode: 'Online',
    rsvp: 'closed',
    category: 'past',
    link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-poornima-university-jaipur-india-presents-gdg-india-hackathon-briefing-session/',
    tags: ['Hackathon', 'Briefing', 'National Challenge', 'Virtual'],
    description: 'Official briefing session detailing themes, submission guidelines, evaluation criteria, and prizes for the nationwide GDG India Hackathon.',
  },
  {
    id: 4,
    title: 'Step into a World of Innovation – Orientation 2025-26',
    date: 'Oct 6, 2025',
    time: '11:00 AM - 1:30 PM',
    speaker: 'Raghav Arora, Keshav Verma & Devika Kanoongo',
    venue: 'Main Auditorium, Poornima University, Jaipur',
    mode: 'Offline',
    rsvp: 'closed',
    category: 'past',
    link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-poornima-university-jaipur-india-presents-step-into-a-world-of-innovation-orientation-2025-26/',
    tags: ['Orientation', 'Innovation', 'Networking', 'Community Launch'],
    description: 'Welcoming students into Google Developer Groups on Campus Poornima University. Discover our tech domains, upcoming hackathons, and leadership opportunities.',
  },
];

// ── Projects Data ──
export const projects = [
  {
    title: 'CampusConnect',
    description: 'A full-stack platform for students to discover events, clubs, and collaborate on projects within Poornima University.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    color: 'google-blue',
    github: 'https://github.com/gdg-poornima',
    demo: 'https://gdgoncampus-pu.vercel.app',
  },
  {
    title: 'PU Certificate Verification Portal',
    description: 'Official verification and instant certificate generation portal built for GDG On Campus Poornima University attendees.',
    tech: ['React', 'Google Apps Script', 'Google Drive API'],
    color: 'google-green',
    github: 'https://github.com/gdg-poornima',
    demo: 'https://gdgoncampus-pu.vercel.app/certify',
  },
  {
    title: 'EcoTrack - SDG 13 Climate Action',
    description: 'Carbon footprint tracker aligned with UN SDGs, built for Google Solution Challenge using Flutter and Firebase.',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    color: 'google-yellow',
    github: 'https://github.com/gdg-poornima',
    demo: 'https://gdg.community.dev/events/details/google-gdg-on-campus-poornima-university-jaipur-india-presents-google-solution-challenge-kick-off-and-workshop/',
  },
  {
    title: 'GenAI Study Jam Leaderboard',
    description: 'Live leaderboard and analytics dashboard tracking student progression and badge completion across cohorts.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Cloud Functions'],
    color: 'google-red',
    github: 'https://github.com/gdg-poornima',
    demo: 'https://gdgoncampus-pu.vercel.app/leaderboard',
  },
  {
    title: 'CloudDeploy CLI',
    description: 'Open-source CLI tool for automated zero-downtime deployment to Google Cloud Run, crafted by the Cloud team.',
    tech: ['Go', 'Docker', 'GCP', 'Cloud Run'],
    color: 'google-blue',
    github: 'https://github.com/gdg-poornima',
    demo: 'https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/',
  },
  {
    title: 'SecureVault',
    description: 'Student password manager with zero-knowledge AES-256 client encryption, developed during CyberSec bootcamp.',
    tech: ['React', 'Rust', 'WebAssembly', 'Crypto API'],
    color: 'google-green',
    github: 'https://github.com/gdg-poornima',
    demo: 'https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/',
  },
];

// ── Domain Data ──
export const domains = [
  { name: 'AI / ML', icon: Brain, color: 'text-google-blue', bg: 'bg-google-blue/10', description: 'Deep learning, NLP, computer vision, and responsible AI development.' },
  { name: 'Cloud Computing', icon: Cloud, color: 'text-google-red', bg: 'bg-google-red/10', description: 'Google Cloud Platform, serverless, Kubernetes, and cloud architecture.' },
  { name: 'Web & Tech', icon: Globe, color: 'text-google-yellow', bg: 'bg-google-yellow/10', description: 'Modern web architectures, responsive SPAs, and full-stack development.' },
  { name: 'Cyber Security', icon: Shield, color: 'text-google-green', bg: 'bg-google-green/10', description: 'Ethical hacking, security auditing, CTFs, and secure coding practices.' },
  { name: 'Open Source', icon: Code2, color: 'text-purple-400', bg: 'bg-purple-500/10', description: 'Contributing to open-source projects, GSoC prep, and community initiatives.' },
  { name: 'App Development', icon: Cpu, color: 'text-pink-400', bg: 'bg-pink-500/10', description: 'Flutter, Android, and cross-platform native mobile app development.' },
];

// ── Stats ──
export const stats = [
  { label: 'Community Members', value: 500, suffix: '+' },
  { label: 'Workshops & Events', value: 25, suffix: '+' },
  { label: 'Projects Built', value: 18, suffix: '+' },
  { label: 'Core Team Leads', value: 12, suffix: '+' },
];
