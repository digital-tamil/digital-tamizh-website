<div align="center">

  <br />

  <h1>Digital Tamizh | தமிழ்</h1>

  <p align="center">
    <strong>Crafting tools 💻 that make the Tamil language 📜 as sweet and accessible as nectar 🍯 in the digital landscape 💫</strong>
  </p>

  <p align="center">
    <a href="https://digital-tamizh.web.app"><strong>🌐 Explore the Web Platform »</strong></a>
    <br />
    <br />
    <a href="https://github.com/digital-tamil/digital-tamizh-website/issues">Report Bug</a>
    ·
    <a href="https://github.com/digital-tamil/digital-tamizh-website/issues">Request Feature</a>
    ·
    <a href="https://github.com/digital-tamil">GitHub Organization</a>
  </p>

  <!-- Badges -->
  <p align="center">
    <a href="https://digital-tamizh.web.app"><img src="https://img.shields.io/badge/Live-digital--tamizh.web.app-00C853?style=for-the-badge&logo=firebase&logoColor=white" alt="Live Website" /></a>
    <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" /></a>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://react.dev/learn/react-compiler"><img src="https://img.shields.io/badge/React_Compiler-Enabled-7C4DFF?style=for-the-badge&logo=react&logoColor=white" alt="React Compiler" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://github.com/digital-tamil"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" /></a>
  </p>

</div>

---

<div align="center">

<img src="https://digital-tamizh.web.app/Digital_Tamizh_OgImg.png" alt="digital-tamizh banner" width="100%" />

<br/>
</div>

---

## 📖 Overview

Welcome to the repository of the **Digital Tamizh Official Web Platform**.

**Digital Tamizh (தமிழ்)** is an open initiative dedicated to pioneering high-performance computational tools, natural language processing pipelines, open datasets, and digitization systems for Classical & Modern Tamil.

This repository powers our main landing page and interactive portal: **[digital-tamizh.web.app](https://digital-tamizh.web.app)**. It showcases our active software builds, machine learning tools, open-source corpora, and digitized literary heritage.

---

## 🏛️ Key Initiatives & Projects

Our ecosystem is structured around three foundational pillars:

<table align="center">
  <tr>
    <td width="33%" valign="top">
      <h3 align="center">01 / 03</h3>
      <h4 align="center">📜 Digital Heritage Corpus</h4>
      <p align="justify">
        A massive, curated open dataset converting ancient <b>palm-leaf manuscripts (ஓலைச்சுவடிகள்)</b> and early printed books into structured, machine-readable digital text corpora for researchers and AI models.
      </p>
    </td>
    <td width="33%" valign="top">
      <h3 align="center">02 / 03</h3>
      <h4 align="center">⚙️ Thiruppugazh Sandhi</h4>
      <p align="justify">
        High-performance rule-based engine and parallel corpus of 1,300+ Thiruppugazh (திருப்புகழ்) songs, splitting complex rhythmic Sandhi verses into readable <i>Padam Pirithal (பதம் பிரித்தது)</i>.
      </p>
    </td>
    <td width="33%" valign="top">
      <h3 align="center">03 / 03</h3>
      <h4 align="center">👁️ Tamil Simple OCR</h4>
      <p align="justify">
        A minimalist, ultra-fast Rust data pipeline for the mass-digitization of vintage Tamil literature with a high accuracy benchmark of <b>97.3%</b>.
      </p>
    </td>
  </tr>
</table>

---

## ⚡ Tech Stack & Architecture

Built with modern web standards to deliver maximum performance, near-zero JavaScript overhead, and smooth interactive experiences:

- **[Astro](https://astro.build/)**: Framework for island architecture, generating static HTML with zero-JS by default for lightning-fast initial loads.
- **[React 19](https://react.dev/)**: Used for dynamic UI islands (interactive tool runners, search components, live splitters).
- **[React Compiler](https://react.dev/learn/react-compiler)**: Automatically memoizes React components and hooks to eliminate manual `useMemo` / `useCallback` boilerplate and maximize runtime performance.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first styling for responsive design and custom typography optimized for Tamil fonts (e.g., Mukta Malar, Noto Sans Tamil).
- **[Firebase Hosting](https://firebase.google.com/)**: Fast and secure global CDN deployment for `digital-tamizh.web.app`.

---

## 📁 Repository Structure

```text
digital-tamizh-website/
├── public/                  # Static assets (fonts, icons, hero illustrations)
├── src/
│   ├── components/          # React components (React Compiler optimized)
│   │   ├── Header.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SandhiSplitter.tsx
│   ├── layouts/             # Astro Layout templates
│   │   └── BaseLayout.astro
│   ├── pages/               # Astro routes & SSG pages
│   │   ├── index.astro
│   │   ├── corpus.astro
│   │   └── tools.astro
│   └── styles/              # Global Tailwind styles & Tamil typography settings
├── astro.config.mjs         # Astro configuration with React integration
├── tailwind.config.mjs      # Tailwind CSS configuration
├── package.json
└── README.md
```

---

## 🛠️ Getting Started Locally

Follow these steps to set up the project locally on your machine.

### Prerequisites

- **Node.js**: `v18.x` or higher
- **Package Manager**: `pnpm` (recommended) or `npm` / `yarn`

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/digital-tamil/digital-tamizh-website.git
   cd digital-tamizh-website
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Start the Development Server**

   ```bash
   pnpm dev
   ```

   Open `http://localhost:4321` in your browser to view the site.

4. **Build for Production**
   ```bash
   pnpm build
   ```
   The static output will be generated inside the `dist/` directory.

---

## 🤝 Contributing

We welcome contributions from developers, linguists, Tamil scholars, and open-source enthusiasts!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git checkout -b feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

**Crafted with ❤️ for Tamil (தமிழ்)**

<sub>Built by <a href="https://github.com/digital-tamil">Digital Tamizh Community</a></sub>

</div>
