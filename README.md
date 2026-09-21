# Kumar Saurav — Portfolio

A high-performance personal portfolio website built with **Next.js (App Router)** and configured for **Static Site Generation (SSG)** (`output: 'export'`).

---

## 🚀 Features

- **Static Site Generation (SSG)**: Pre-rendered HTML export (`output: 'export'`) in `/out` for instant load times, zero server latency, and optimal SEO.
- **Modern Next.js App Router**: Built using Next.js App Router architecture (`src/app/`) with comprehensive OpenGraph and Twitter card metadata.
- **Interactive UI & Animations**: Smooth section transitions, intersection-observer fade-in effects, and dynamic navigation scroll spy.
- **Tech Stack & Telemetry Showcase**: Highlights enterprise experience at PhonePe and OLA, core skills, frameworks, and tooling.
- **Fully Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports with dark-mode aesthetic.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Export)
- **Library**: [React](https://react.dev/)
- **Styling**: Vanilla CSS Modules (Cyber Slate Theme)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & Official SVGs
- **Typography**: Google Fonts ([Inter](https://fonts.google.com/specimen/Inter))

---

## 📂 Project Structure

```text
ks-portfolio/
├── out/                    # Static exported production build (generated on build)
├── public/                 # Static assets (images, PDF resume, icons)
├── src/
│   ├── app/
│   │   ├── layout.jsx      # Root HTML layout with SEO metadata
│   │   └── page.jsx        # Main portfolio assembly page
│   ├── Components/         # Modular React UI components
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Fade.jsx        # Client-side IntersectionObserver animation wrapper
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx      # Navigation header with active scroll spy
│   │   ├── SkillCard.jsx
│   │   ├── SkillsSection.jsx
│   │   └── Styles/         # CSS Modules for components
│   └── index.css           # Design tokens, variables & global resets
├── next.config.mjs         # Next.js static export configuration
└── package.json            # Scripts & project dependencies
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ks-1007/ks-portfolio.git
cd ks-portfolio
npm install
```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles and generates static HTML export in the `out/` folder |
| `npm start` | Previews the static export production build locally |
| `npm run lint` | Runs Next.js ESLint checks |

---

## 🌐 Deployment

Because the project is configured with `output: 'export'`, the `out/` folder contains pure static HTML, CSS, JavaScript, and assets that can be hosted on any static hosting provider:

- **Vercel**: Connect the repository — Vercel detects Next.js automatically.
- **GitHub Pages**: Deploy the contents of the `out/` folder.
- **Netlify**: Set publish directory to `out`.
- **Cloudflare Pages**: Set build output directory to `out`.

---

## 📬 Contact

- **Email**: [krsaurav1007@gmail.com](mailto:krsaurav1007@gmail.com)
- **LinkedIn**: [linkedin.com/in/kumar-saurav-90a898179](https://www.linkedin.com/in/kumar-saurav-90a898179/)
- **GitHub**: [github.com/ks-1007](https://github.com/ks-1007)
