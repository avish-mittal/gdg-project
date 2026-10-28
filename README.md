<div align="center">
  <img src="public/gdg-logo.svg" alt="GDG Logo" width="80" height="80" />
  <h1>GDG on Campus — Poornima University</h1>
  <p>The official website for Google Developer Groups on Campus at Poornima University, Jaipur.</p>

  <p>
    <a href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"><strong>Official Chapter</strong></a> •
    <a href="https://github.com/avish-mittal/gdg-project/issues"><strong>Report Bug</strong></a> •
    <a href="https://github.com/avish-mittal/gdg-project/pulls"><strong>Request Feature</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer_Motion-Smooth_UI-black?style=flat-square&logo=framer" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
  </p>
</div>

---

## 📌 About The Project

This is the community web portal for **GDG on Campus – Poornima University (Jaipur, India)**. Built for student developers to stay in the loop with upcoming workshops, hackathons, open-source projects, and chapter announcements.

Designed with a developer-focused dark/light aesthetic, Google brand accents, glassmorphic cards, and an interactive CLI widget.

### 🌟 Key Highlights
- **Live Events Hub**: Filter upcoming vs. past events, hackathons, and jump straight to official RSVP registration on `gdg.community.dev`.
- **Core Team Directory**: Meet our chapter organizers (Raghav Arora, Keshav Verma, Devika Kanoongo) with direct links to their community profiles.
- **Projects Showcase**: Highlights student-built projects across AI/ML, Cloud, Web, and Mobile.
- **Interactive Terminal**: An in-browser terminal widget simulating GDG CLI commands right on the hero section.
- **Dark & Light Mode**: Seamless theme switching with persistent state and custom scrollbars.
- **100% Mobile Responsive**: Fluid layouts from mobile drawers to large screens.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Brand SVGs
- **Routing**: [React Router](https://reactrouter.com/) (HashRouter for universal hosting support)

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm / yarn

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/avish-mittal/gdg-project.git
   cd gdg-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   The production-ready assets will be generated in the `dist/` directory.

---

## 📁 Project Structure

```text
gdg/
├── public/                # Static assets (logos, team photos, redirects)
│   ├── team/              # Organizer portrait images
│   ├── gdg-logo.svg       # Official GDG icon
│   └── _redirects         # SPA fallback for Netlify
├── src/
│   ├── assets/            # Project SVGs & media
│   ├── components/        # Reusable UI components
│   │   ├── BrandIcons.jsx # Clean SVG brand icons
│   │   ├── Navbar.jsx     # Navigation bar & theme toggle
│   │   └── Footer.jsx     # Footer links & copyright
│   ├── pages/             # Route views
│   │   ├── Home.jsx       # Hero, stats, terminal & highlights
│   │   ├── About.jsx      # Chapter mission, values & tech tracks
│   │   ├── Events.jsx     # Filterable events with live RSVP links
│   │   ├── Team.jsx       # Organizers showcase & profiles
│   │   ├── Projects.jsx   # Student projects directory
│   │   └── Contact.jsx    # Inquiry form & campus location
│   ├── data.jsx           # Chapter events, organizers & social data
│   ├── ThemeContext.jsx   # Dark / light theme provider
│   ├── App.jsx            # Main app shell & routing
│   ├── index.css          # Tailwind theme & custom utilities
│   └── main.jsx           # App entry point
├── vercel.json            # SPA routing rules for Vercel
├── vite.config.js         # Vite bundler configuration
└── package.json           # Dependencies & build scripts
```

---

## 👥 Chapter Organizers

| Organizer | Role | Campus / Organization | Profile |
| :--- | :--- | :--- | :--- |
| **Raghav Arora** | GDGoC Organizer | Poornima University | [Profile](https://gdg.community.dev/u/raghav57/) |
| **Keshav Verma** | GDGoC Organizer | Google Developer Groups on Campus – PU | [Profile](https://gdg.community.dev/u/mj8qcn/) |
| **Devika Kanoongo** | GDGoC Organizer | Poornima University | [Profile](https://gdg.community.dev/u/devika17/) |

---

## 🌐 Community Links

- **Official Chapter**: [gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/](https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/)
- **Instagram**: [@gdg.poornima](https://instagram.com/gdg.poornima)
- **GitHub**: [github.com/gdg-poornima](https://github.com/gdg-poornima)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

