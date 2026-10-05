# Project Title: tamil_website 

Dependencies used in this project: 
   - **@astrojs/markdoc** : `^2.0.9`
   - **@astrojs/markdown-satteri** : `^0.4.2`
   - **@astrojs/react** : `^7.0.0`
   - **@astrojs/sitemap** : `^3.7.4`
   - **@tailwindcss/vite** : `^4.3.3`
   - **@types/react** : `^19.3.0`
   - **@types/react-dom** : `^19.3.0`
   - **astro** : `^7.3.5`
   - **lucide-react** : `^1.46.0`
   - **motion** : `^13.3.0`
   - **react** : `^19.3.0`
   - **react-dom** : `^19.3.0`
   - **tailwindcss** : `^4.3.3`

Dev dependencies used in this project: 
   - **@biomejs/biome** : `^2.5.1`
   - **babel-plugin-react-compiler** : `^0.0.0-experimental-a1856f3-20260507`
   - **oxc-transform-react** : `^0.151.0`

#### Project Version: 0.0.1 


---

## Project File Structure & PEG Graph

```
📁 
├── README.md
├── astro.config.mjs
├── biome.json
├── firebase.json
├── package-lock.json
├── package.json
├── public/
│   ├── Digital_Tamizh_OgImg.jpg
│   ├── Digital_Tamizh_OgImg.png
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── Home.tsx
│   │   ├── Markdown/
│   │   │   └── HuggingFace.md
│   │   ├── Welcome.astro
│   │   └── pages/
│   │       ├── HuggingFaceDataset.tsx
│   │       └── TamilOCR.tsx
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── hugging-face/
│   │   │   └── Tamil-Digital-Heritage-Corpus.astro
│   │   ├── index.astro
│   │   └── tamil-simple-ocr.astro
│   └── styles/
│       └── global.css
├── summary.md
├── tsconfig.json
└── urai.config.jsonc
```

### Module Dependency Graph

```mermaid
graph LR;
```

---

## React Component Architecture & Explanations

### React Component Breakdown: `<UpcomingNode>` 

- **Props**: Receives no explicit props (or uses `children` only).
- **State**: Stateless component.
- **Rendered JSX Tree**: `<div>, <h3>, <p>` 

### React Component Breakdown: `<CustomGithubIcon>` 

- **Props**:
  - `className` (type: `any`) [optional]
- **State**: Stateless component.
- **Rendered JSX Tree**: `<svg>, <path>` 

### React Component Breakdown: `<InteractiveInstallation>` 

- **Props**: Receives no explicit props (or uses `children` only).
- **State Management**:
  - Manages state `os` via setter `setOs`.
  - Manages state `copiedId` via setter `setCopiedId`.
- **Hooks**: Uses `useState` (Total Side-Effects: 0).
- **Rendered JSX Tree**: `<div>, <h2>, <p>, <button>, <Activity>, <Apple>, <TerminalSquare>, <Monitor>, <span>, <AnimatePresence>, <h4>, <pre>, <Check>, <Copy>` 

### React Component Breakdown: `<RoadmapTimeline>` 

- **Props**: Receives no explicit props (or uses `children` only).
- **State**: Stateless component.
- **Rendered JSX Tree**: `<div>, <Milestone>, <span>, <h2>, <p>, <h3>, <CheckCircle>, <ul>, <li>, <Clock>, <strong>, <Rocket>` 

### React Component Breakdown: `<MotherboardVisualizer>` 

- **Props**: Receives no explicit props (or uses `children` only).
- **State Management**:
  - Manages state `activeCycle` via setter `setActiveCycle`.
- **Hooks**: Uses `useState, useEffect` (Total Side-Effects: 1).
- **Rendered JSX Tree**: `<div>, <span>, <h2>, <p>, <svg>, <path>, <HardDrive>, <Cpu>, <AnimatePresence>, <BrainCircuit>` 

---

## AST-Pruned Source Code Repository

> Note: Tailwind classNames and static styles have been pruned according to mode to maximize token efficiency.

### File: `astro.config.mjs`

```javascript
import { defineConfig, fontProviders, svgoOptimizer } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
export default defineConfig({
    site: "https://digital-tamizh.web.app",
    integrations: [
        react({
            compiler: true
        }),
        markdoc(),
        sitemap()
    ],
    server: {
        port: 8083,
        host: true
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "viewport"
    },
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    markdown: {
        processor: satteri({
            features: {
                directive: true
            }
        })
    },
    experimental: {
        clientPrerender: true,
        svgOptimizer: svgoOptimizer()
    },
    redirects: {
        "/instagram": "https://www.instagram.com/tamil.ai.llm",
        "/insta": "https://www.instagram.com/tamil.ai.llm",
        "/youtube": "https://www.youtube.com/@tamizh-ai"
    }
});

```

### File: `src/components/Home.tsx`

```typescript
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const lettersY1 = useTransform(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "200%"
    ]);
    const lettersY2 = useTransform(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "-100%"
    ]);
    const lettersY3 = useTransform(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "150%"
    ]);
    const centerScale = useTransform(scrollYProgress, [
        0,
        0.5
    ], [
        1,
        2
    ]);
    const centerOpacity = useTransform(scrollYProgress, [
        0,
        0.5
    ], [
        1,
        0
    ]);
    const tamilTextScale = useTransform(scrollYProgress, [
        0.3,
        0.6
    ], [
        0.5,
        1.0
    ]);
    const tamilTextOpacity = useTransform(scrollYProgress, [
        0.3,
        0.6
    ], [
        0,
        1
    ]);
    return (<div className="/* UI: Container with relative positioning and minimum height of 200 viewport height */" ref={containerRef}>
			<UpcomingNode/>

			<div className="/* UI: Full-screen centered layout with sticky header and vertical stacking. */">
				<div className="/* UI: Centered, transparent, invisible overlay used for interaction protection. */">
					<motion.div style={{
        y: lettersY1
    }} className="/* UI: Pulses animating large serif text positioned on screen. */">
						A
					</motion.div>
					<motion.div style={{
        y: lettersY2
    }} className="/* UI: Large pulse-animating serif text positioned in the upper right corner */">
						漢
					</motion.div>
					<motion.div style={{
        y: lettersY3
    }} className="/* UI: Large animated serif text positioned absolutely on the page. */">
						あ
					</motion.div>
					<motion.div style={{
        y: lettersY1
    }} className="/* UI: Large serif text animated and positioned absolutely in the bottom-right. */">
						අ
					</motion.div>
					<motion.div style={{
        y: lettersY2
    }} className="/* UI: Large serif text pulse effect positioned absolutely in the center. */">
						א
					</motion.div>
					<motion.div style={{
        y: lettersY3
    }} className="/* UI: Pulsating large serif text positioned absolutely on the upper right. */">
						Ω
					</motion.div>
					<motion.div style={{
        y: lettersY1
    }} className="/* UI: Pulsating serif text positioned absolutely on the page. */">
						어
					</motion.div>
					<motion.div style={{
        y: lettersY2
    }} className="/* UI: Large serif text floating in the upper right corner, pulsing slightly. */">
						ゑ
					</motion.div>
				</div>

				<motion.div style={{
        scale: centerScale,
        opacity: centerOpacity
    }} className="/* UI: Staked container with centered column layout. */">
					<motion.div animate={{
        rotateZ: [
            0,
            10,
            -10,
            0
        ],
        y: [
            0,
            -20,
            0
        ]
    }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
    }} className="/* UI: Very large orange serif text with a large drop shadow. */">
						அ
					</motion.div>

					<div className="/* UI: Center-aligned flex layout with spacing and top margin */">
						<div className="/* UI: Thin orange colored square element */"></div>
						<span className="/* UI: Small uppercase text centered with subtle bounce animation. */">
							யாதும் ஊரே யாவரும் கேளிர்
						</span>
						<div className="/* UI: Thin orange colored square element */"></div>
					</div>

					<p className="/* UI: Top margin with small, wide-tracked, faded, mono-spaced uppercase text. */">
						To us, all towns are one, all men our kin
					</p>
				</motion.div>

				<motion.div style={{
        scale: tamilTextScale,
        opacity: tamilTextOpacity,
        y: useTransform(scrollYProgress, [
            0.3,
            0.6
        ], [
            50,
            -50
        ])
    }} className="/* UI: Positioned absolutely with high layer stacking context */">
					<h1 className="/* UI: Ultra bold gradient text with strong drop shadow and tight tracking. */">
						தமிழ்
					</h1>
				</motion.div>
			</div>

			<div className="/* UI: Subtle dark background, blurred overlay, oversized rounded container. */">
				<div className="/* UI: Blurry absolute background element with conditional size and orange tint. */"></div>
				<div className="/* UI: Full-sized circular blue blur background element for layout placement. */"></div>
				<div className="/* UI: Centered container with responsive padding for desktop and mobile viewports */">
					<div className="/* UI: Responsive grid layout transitioning from single column to three columns. */">
						<a href="/hugging-face/Tamil-Digital-Heritage-Corpus" className="/* UI: /* Style: 1 classes */ */">
							<motion.div initial={{
        opacity: 0,
        y: 30
    }} whileInView={{
        opacity: 1,
        y: 0
    }} viewport={{
        once: true
    }} className="/* UI: Card component with blurred background, rounded borders, and hover effects. */">
								<div className="/* UI: Flexible container with spaced items and bottom margin */">
									<span className="/* UI: Small orange-themed alert box with rounded corners. */">
										Hugging Face
									</span>
									<span className="/* UI: Small monospaced text that is semi-transparent */">01/03</span>
								</div>
								<h3 className="/* UI: Large medium font text with some space below */">
									Digital Heritage Corpus
								</h3>
								<p className="/* UI: Small, semi-transparent, narrow block with relaxed spacing and growth capability */">
									A massive curated dataset of ancient manuscripts and
									contemporary literature.
								</p>
								<div className="/* UI: Full-width semi-transparent white background with a hidden content overflow. */">
									<div className="/* UI: Orange full-height block occupying two-thirds width */"></div>
								</div>
							</motion.div>
						</a>

						<a target="__blank" href="https://github.com/digital-tamil/thiruppugazh-sandhi-rs" className="/* UI: /* Style: 1 classes */ */">
							<motion.div initial={{
        opacity: 0,
        y: 30
    }} whileInView={{
        opacity: 1,
        y: 0
    }} viewport={{
        once: true
    }} transition={{
        delay: 0.1
    }} className="/* UI: Card component with blurred background, rounded borders, and hover effects. */">
								<div className="/* UI: Flexible container with spaced items and bottom margin */">
									<span className="/* UI: Small rounded blue background button with blue border and text. */">
										GitHub
									</span>
									<span className="/* UI: Small monospaced text that is semi-transparent */">02/03</span>
								</div>
								<h3 className="/* UI: Large medium font text with some space below */">
									Thiruppugazh Sandhi
								</h3>
								<p className="/* UI: Small, semi-transparent, narrow block with relaxed spacing and growth capability */">
									Sophisticated rule-based sandhi decomposition tool for Tamil
									poetry.
								</p>
								<div className="/* UI: Flex container with spaced items and vertical centering */">
									<span className="/* UI: Small round green indicator dot. */"></span>
									<span className="/* UI: Small uppercase text with wide tracking and reduced opacity. */">
										Active Build
									</span>
								</div>
							</motion.div>
						</a>

						<a href="/tamil-simple-ocr" className="/* UI: /* Style: 1 classes */ */">
							<motion.div initial={{
        opacity: 0,
        y: 30
    }} whileInView={{
        opacity: 1,
        y: 0
    }} viewport={{
        once: true
    }} transition={{
        delay: 0.2
    }} className="/* UI: Card component with blurred background, rounded borders, and hover effects. */">
								<div className="/* UI: Flexible container with spaced items and bottom margin */">
									<span className="/* UI: Small purple-themed pill button with thin border. */">
										GitHub
									</span>
									<span className="/* UI: Small monospaced text that is semi-transparent */">03/03</span>
								</div>
								<h3 className="/* UI: Large medium font text with some space below */">Tamil Simple OCR</h3>
								<p className="/* UI: Small, semi-transparent, narrow block with relaxed spacing and growth capability */">
									Minimalist, high-accuracy optical character recognition for
									Tamil scripts.
								</p>
								<div className="/* UI: Small monochrome text with low opacity */">
									97.3% Accuracy
								</div>
							</motion.div>
						</a>
					</div>
				</div>
			</div>
		</div>);
}
function UpcomingNode() {
    return (<motion.div initial={{
        opacity: 0,
        scale: 0.9,
        y: -30
    }} whileInView={{
        opacity: 1,
        scale: 1,
        y: 0
    }} viewport={{
        once: true
    }} transition={{
        duration: 1.2,
        type: "spring"
    }} className="/* UI: Full width centered flex container with padding and bottom margin. */">
			<div className="/* UI: Card layout with orange glow, shadow, and transition hover effect. */">
				<motion.div className="/* UI: Full-screen gradient overlay from transparent to orange. */" animate={{
        x: [
            "-100%",
            "200%"
        ]
    }} transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear"
    }}/>
				<div className="/* UI: Centered flex container with space between items and elevated layer. */">
					<div className="/* UI: Centered flexible container with relative positioning */">
						<div className="/* UI: Small orange circle icon or avatar */"/>
						<div className="/* UI: Small animated orange ping circle positioned absolutely */"/>
					</div>
					<div>
						<h3 className="/* UI: Small bold uppercase text with orange color and shadow drop. */">
							Something Big is Coming Soon
						</h3>
						<p className="/* UI: Small semi-transparent monochrome text block with margin top */">
							Finetuning LLM for தமிழ்
						</p>
					</div>
				</div>
			</div>
			<div className="/* UI: Narrow vertical gradient bar with margin top */"/>
		</motion.div>);
    '/* "Renders an animated feature notification card announcing an upcoming LLM finetuning for Tamil." */';
}

```

### File: `src/components/pages/HuggingFaceDataset.tsx`

```typescript
import { motion } from "motion/react";
import { Database, Search, Library, FileText, Globe } from "lucide-react";
export default function DatasetDetails() {
    return (<div className="/* UI: Large centered content block with generous padding and relative positioning. */">
			<div className="/* UI: Large blurred orange background blob positioned absolutely in the center. */"></div>

			<motion.div initial={{
        opacity: 0,
        y: 20
    }} animate={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.5
    }}>
				<div className="/* UI: Centered flex container with spacing and margin below */">
					<div className="/* UI: Small orange background card with wide tracking and rounded borders */">
						Hugging Face Dataset
					</div>
					<div>
						<h1 className="/* UI: Large bold tracking text in white, scaling up on medium screens. */">
							Digital Heritage Corpus
						</h1>
						<p className="/* UI: Small uppercase text with medium weight, spaced out and slightly transparent. */">
							by Sanjaiyan
						</p>
					</div>
				</div>

				<div className="/* UI: Large content block with orange accent and ample bottom margin */">
					<p className="/* UI: Large readable text with a slightly transparent appearance */">
						We’re on a journey to advance and democratize artificial
						intelligence through open source and open science. This dataset
						forms the crucial foundation for building robust, culturally-aware
						Large Language Models (LLMs) for the Tamil language.
					</p>
				</div>

				<h2 className="/* UI: Small uppercase text with orange left border and padding. */">
					Corpus Structure
				</h2>
				<div className="/* UI: Single-column layout that switches to two columns on medium screens. */">
					{[
        {
            icon: Globe,
            title: "General Knowledge & Academics",
            text: "Articles, educational resources, and modern science."
        },
        {
            icon: Library,
            title: "Literature",
            text: "Classical texts like Pathinenkeelkanakku."
        },
        {
            icon: Search,
            title: "History",
            text: "Historical records, archaeology, and historical essays."
        },
        {
            icon: FileText,
            title: "Songs & Hymns",
            text: "Bhaktic literature, pathigams, and lyrical archives."
        }
    ].map((item, i)=>(<motion.div key={i} initial={{
            opacity: 0,
            scale: 0.95
        }} whileInView={{
            opacity: 1,
            scale: 1
        }} viewport={{
            once: true
        }} transition={{
            delay: i * 0.1
        }} className="/* UI: Card layout with blurred background, borders, and smooth hover transition. */">
							<div className="/* UI: Full-width flex layout distributing items evenly and centrally. */">
								<item.icon className="/* UI: Small semi-transparent orange icon or indicator. */"/>
								<span className="/* UI: Small monochrome, semi-transparent monospace text. */">
									0{i + 1}/04
								</span>
							</div>
							<div>
								<h3 className="/* UI: Large medium text with bottom margin */">{item.title}</h3>
								<p className="/* UI: Small, semi-transparent text with relaxed line spacing */">
									{item.text}
								</p>
							</div>
						</motion.div>))}
				</div>

				<h2 className="/* UI: Small uppercase text with orange left border and padding. */">
					Data Pipeline Workflow
				</h2>
				<div className="/* UI: Semi-transparent white blurred background with padding and rounded overflow. */">
					<div className="/* UI: Invisible background overlay for a centered element */">
						<span className="/* UI: Large serif text with tight leading */">தரவு</span>
					</div>

					<div className="/* UI: Relative layout with flexible alignment, transitioning from vertical to horizontal on medium screens. */">
						<motion.div whileHover={{
        scale: 1.05
    }} className="/* UI: Full width column layout with centered items and vertical spacing */">
							<div className="/* UI: Small white circular icon with a subtle border and centered content */">
								<Library className="/* UI: Small, semi-transparent square icon or indicator. */"/>
							</div>
							<div>
								<h4 className="/* UI: Small uppercase tracking-widest orange text */">
									Raw Sourcing
								</h4>
								<p className="/* UI: Small uppercase text with medium weight and slight opacity. */">
									Legacy texts scraping
								</p>
							</div>
						</motion.div>

						<motion.div initial={{
        rotate: 0
    }} animate={{
        rotate: 360
    }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
    }} className="/* UI: Small circular profile avatar with a thick orange top border. */"/>

						<motion.div whileHover={{
        scale: 1.05
    }} className="/* UI: Full width column layout with centered items and vertical spacing */">
							<div className="/* UI: Small white circular icon with a subtle border and centered content */">
								<FileText className="/* UI: Small, semi-transparent square icon or indicator. */"/>
							</div>
							<div>
								<h4 className="/* UI: Small uppercase tracking-widest orange text */">
									Normalization
								</h4>
								<p className="/* UI: Small uppercase text with medium weight and slight opacity. */">
									OCR errors & Unicode
								</p>
							</div>
						</motion.div>

						<motion.div initial={{
        rotate: 0
    }} animate={{
        rotate: 360
    }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
    }} className="/* UI: Small circular profile avatar with a thick orange top border. */"/>

						<motion.div whileHover={{
        scale: 1.05
    }} className="/* UI: Full width column layout with centered items and vertical spacing */">
							<div className="/* UI: Small white circular icon with a subtle border and centered content */">
								<Database className="/* UI: Small, semi-transparent square icon or indicator. */"/>
							</div>
							<div>
								<h4 className="/* UI: Small uppercase tracking-widest orange text */">
									Hugging Face API
								</h4>
								<p className="/* UI: Small uppercase text with medium weight and slight opacity. */">
									Dataset release
								</p>
							</div>
						</motion.div>
					</div>
				</div>

				<div className="/* UI: Top margin with centered flex layout */">
					<a href="https://huggingface.co/datasets/Sanjaiyan/Tamil-Digital-Heritage-Corpus" target="_blank" rel="noreferrer" className="/* UI: Orange-themed rounded interactive button with text styling and padding. */">
						Access on Hugging Face
						<Globe className="/* UI: /* Style: 2 classes */ */"/>
					</a>
				</div>
			</motion.div>
		</div>);
}

```

### File: `src/components/pages/TamilOCR.tsx`

```typescript
import { useState, useEffect, useRef, Activity } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Terminal, Cpu, BrainCircuit, CheckCircle2, Layers, Sparkles, Apple, Monitor, TerminalSquare, Copy, Check, HardDrive, MemoryStick, FlaskConical, Milestone, CheckCircle, Clock, Rocket, ArrowRight, GitCompareArrowsIcon } from "lucide-react";
const TERMINAL_LOGS = [
    "Starting OCR process...",
    "Initializing Pdfium... bound to system library.",
    "Opening PDF document: siddhar_manuscript.pdf",
    "Rayon thread pool built (2 threads for Ollama calls).",
    "Processing batch: pages 1 to 10 of 100...",
    "Tesseract (tam) locked. Binarizing and extracting raw OCR...",
    "Running Ollama correction on batch with a concurrency of 2...",
    "[Gemma 4] Context-aware token repair engaged.",
    "Writing corrected batch to tamil_pdf_extracted_text.txt..."
];
const INSTALL_STEPS = {
    mac: [
        {
            id: 1,
            title: "Install Dependencies",
            cmd: "brew install pdfium tesseract tesseract-lang"
        },
        {
            id: 2,
            title: "Setup Local Edge AI",
            cmd: "ollama run gemma"
        },
        {
            id: 3,
            title: "Clone & Compile Engine",
            cmd: "git clone https://github.com/digital-tamil/tamil-simple-ocr.git\ncd tamil-simple-ocr\ncargo build --release"
        }
    ],
    linux: [
        {
            id: 1,
            title: "Install Dependencies",
            cmd: "sudo apt-get install libpdfium-dev tesseract-ocr tesseract-ocr-tam"
        },
        {
            id: 2,
            title: "Setup Local Edge AI",
            cmd: "curl -fsSL https://ollama.com/install.sh | sh\nollama run gemma"
        },
        {
            id: 3,
            title: "Clone & Compile Engine",
            cmd: "git clone https://github.com/digital-tamil/tamil-simple-ocr.git\ncd tamil-simple-ocr\ncargo build --release"
        }
    ],
    windows: [
        {
            id: 1,
            title: "Install Dependencies",
            cmd: "winget install tesseract\n# Download pdfium.dll and place in root"
        },
        {
            id: 2,
            title: "Setup Local Edge AI",
            cmd: "winget install ollama\nollama run gemma"
        },
        {
            id: 3,
            title: "Clone & Compile Engine",
            cmd: "git clone https://github.com/digital-tamil/tamil-simple-ocr.git\ncd tamil-simple-ocr\ncargo build --release"
        }
    ]
};
const CustomGithubIcon = ({ className = "w-5 h-5" })=>(<svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
		<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
	</svg>);
function InteractiveInstallation() {
    const handleCopy = (id: number, text: string)=>{
        setTimeout(()=>setCopiedId(null), 2000);
        '/* "Copies the provided text to the clipboard and sets a temporary state indicator for a duration of two seconds." */';
    };
    return (<div className="/* UI: Centered container with margin, padding, and relative stacking context. */">
			<div className="/* UI: Centered text with a large bottom margin */">
				<h2 className="/* UI: Large bold white text with margin for spacing */">
					Deploy in Minutes
				</h2>
				<p className="/* UI: Light gray text color */">
					100% offline. Zero data sent to the cloud.
				</p>
			</div>

			<div className="/* UI: Translucent dark background card with rounded borders, shadow, and responsive layout. */">
				<div className="/* UI: Flex container with responsive sizing, padding, border bottom, and right. */">
					{([
        "mac",
        "linux",
        "windows"
    ] as const).map((platform)=>(<button key={platform} onClick={()=>setOs(platform)} className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm
                ${os === platform ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" : "text-neutral-500 hover:text-neutral-300 hover:bg-white/5"}`}>
							<Activity mode={platform === "mac" ? "visible" : "hidden"}>
								<Apple className="/* UI: /* Style: 2 classes */ */"/>
							</Activity>
							<Activity mode={platform === "linux" ? "visible" : "hidden"}>
								<TerminalSquare className="/* UI: /* Style: 2 classes */ */"/>
							</Activity>
							<Activity mode={platform === "windows" ? "visible" : "hidden"}>
								<Monitor className="/* UI: /* Style: 2 classes */ */"/>
							</Activity>
							<span className="/* UI: Text is capitalized, hidden until medium screen size and up. */">{platform}</span>
						</button>))}
				</div>

				<div className="/* UI: Flexible container with padding and overflow control on medium screens. */">
					<AnimatePresence mode="wait">
						<motion.div key={os} initial={{
        opacity: 0,
        y: 10
    }} animate={{
        opacity: 1,
        y: 0
    }} exit={{
        opacity: 0,
        y: -10
    }} transition={{
        duration: 0.3
    }} className="/* UI: Vertical column layout with significant spacing between items */">
							{INSTALL_STEPS[os].map((step, idx)=>(<div key={step.id} className="/* UI: Enables relative positioning and adds interactive grouping functionality. */">
									<div className="/* UI: Horizontal layout with centered items and spacing below */">
										<div className="/* UI: Small circular icon with orange text and thin border */">
											{idx + 1}
										</div>
										<h4 className="/* UI: White small font text that is semibold */">
											{step.title}
										</h4>
									</div>
									<div className="/* UI: Left-aligned border indicator with hover effect and smooth transition */">
										<div className="/* UI: Dark rounded container with flexible layout and subtle hover border effect */">
											<pre className="/* UI: Small monospaced text with relaxed line spacing, suitable for code display. */">
												{step.cmd}
											</pre>
											<button onClick={()=>handleCopy(step.id, step.cmd)} className="/* UI: Neutral text with color transition on hover and light padding */">
												{copiedId === step.id ? (<Check className="/* UI: Small square icon with green color */"/>) : (<Copy className="/* UI: /* Style: 2 classes */ */"/>)}
											</button>
										</div>
									</div>
								</div>))}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>);
    '/* "--- Sub-Components ---" */';
}
function RoadmapTimeline() {
    return (<div className="/* UI: Full-width centered container with padding and elevated layering. */">
			<div className="/* UI: Centered text with a large margin below */">
				<div className="/* UI: Small rounded blue button with padding and subtle border. */">
					<Milestone className="/* UI: /* Style: 2 classes */ */"/>
					<span>Project Roadmap</span>
				</div>
				<h2 className="/* UI: Large bold white text with margin for spacing */">
					The Future Timeline
				</h2>
				<p className="/* UI: Centered text in a maximum wide box with a muted gray color. */">
					Currently in an experimental research phase for Siddhar manuscripts.
					Here is where the architecture is heading.
				</p>
			</div>

			<div className="/* UI: Subtle left border on mobile, transitioning to a clean layout on larger screens. */">
				<div className="/* UI: Semi-transparent gradient overlay with fixed center alignment. */"/>

				{}
				<div className="/* UI: Element positioned for medium screen, half width, right-aligned text. */">
					<div className="/* UI: Small green circle badge with shadow and specific positioning. */"/>
					<h3 className="/* UI: Bold white text element in a flex container, aligned to the right on medium screens. */">
						<CheckCircle className="/* UI: Small square icon with green text color */"/> Phase 1:
						Production Baseline
					</h3>
					<p className="/* UI: Small neutral text with relaxed line spacing and margin bottom */">
						Completed
					</p>
					<div className="/* UI: Dark semi-transparent background with white border and rounded padding. */">
						<ul className="/* UI: Small neutral text with vertical spacing between items */">
							<li>• LLVM optimized Rust Engine.</li>
							<li>• Rayon Work-Stealing Pool.</li>
							<li>• Core Tesseract Binarization mapping.</li>
						</ul>
					</div>
				</div>

				{}
				<div className="/* UI: Relative positioning with responsive sizing and margins for a container element */">
					<div className="/* UI: Small animated blue circle badge with a dark shadow border. */"/>
					<h3 className="/* UI: Bold white text in a flexible row with spacing */">
						<Clock className="/* UI: Small square icon with blue color */"/> Phase 2: Edge-AI
						Correction
					</h3>
					<p className="/* UI: Small neutral text with a semi-transparent blue accent and margin bottom. */">
						Active Development
					</p>
					<div className="/* UI: Semi-transparent dark background with blue inset shadow and rounded borders. */">
						<ul className="/* UI: Small neutral text with vertical spacing between items */">
							<li>• Local Inference via Ollama POST.</li>
							<li>• Gemma 4.5B Token Repair.</li>
							<li className="/* UI: Light orange text with a subtle top white border separation. */">
								<strong>Upcoming:</strong> Custom fine-tuned Gemma 4 QAT Model
								trained exclusively on Siddhar vocabulary.
							</li>
						</ul>
					</div>
				</div>

				{}
				<div className="/* UI: Positioned element, half-width on medium screens, right-aligned with spacing. */">
					<div className="/* UI: Small absolute positioning circle with neutral background and thick border. */"/>
					<h3 className="/* UI: Bold white text element in a flex container, aligned to the right on medium screens. */">
						<Rocket className="/* UI: Small square icon with light gray text */"/> Phase 3: Native
						Delivery
					</h3>
					<p className="/* UI: Small neutral text with relaxed line spacing and margin bottom */">
						Planned
					</p>
					<div className="/* UI: Dark transparent background card with subtle white border, fade effect. */">
						<ul className="/* UI: Small neutral text with vertical spacing between items */">
							<li>• Tauri v2 Core Backend Wrap.</li>
							<li>• HTML5/TS responsive Frontend GUI.</li>
							<li>• IPC Commands for seamless bridging.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>);
    '/* "2. Future Timeline & Experimental Roadmap" */';
}
function MotherboardVisualizer() {
    useEffect(()=>{
        '/* "Sets up an interval to increment a state variable every 1.5 seconds, cycling through four states." */';
    }, []);
    return (<div className="/* UI: Full width element with relative positioning and high stacking context padding */">
			<div className="/* UI: Centered text with a large bottom margin */">
				<div className="/* UI: Small rounded button with orange border and background for text display. */">
					<span className="/* UI: Pulsing orange circle indicator dot */"/>
					<span>ALU Cycles & Registers</span>
				</div>
				<h2 className="/* UI: Large bold white text with margin below */">
					Hardware Logic Schematic
				</h2>
				<p className="/* UI: Small text in the center within a constrained light-gray box. */">
					A real-time trace schematic of Rust Multi-threading passing state
					buffers into the AI co-processor.
				</p>
			</div>

			<div className="/* UI: Centered, blurred, shadow-heavy content container with a dark, rounded aesthetic. */">
				{}
				<div className="/* UI: Absolute overlay with fine gradient pattern for subtle background effect. */"/>

				{}
				<svg className="/* UI: Full-sized overlay with transparent pointer-event blocker. */">
					{}
					<path d="M 80 180 Q 200 120 280 140" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,6" className="/* UI: Pulsating dash animation effect */"/>
					{}
					<path d="M 440 180 L 520 220" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4" className="/* UI: Smooth dash animation with continuous movement */"/>
					{}
					<path d="M 640 220 Q 560 300 480 340" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="5,5" className="/* UI: Slow linear dash animation loop */"/>
				</svg>

				<div className="/* UI: Responsive grid layout with equal columns and centered items. */">
					{}
					<div className="/* UI: Translucent dark card with rounded corners, subtle border and blurred background. */">
						<div className="/* UI: Flex container distributing elements with centered alignment and spacing. */">
							<span className="/* UI: Small, monochrome, monospaced, wide-tracking text. */">
								INGRESS_BUS [0x7FF]
							</span>
							<HardDrive className="/* UI: Small neutral icon or indicator dot */"/>
						</div>
						<div className="/* UI: Vertical stack layout with uniform spacing between items */">
							<div className="/* UI: Flexible container with spacing and bottom margin */">
								<span className="/* UI: Small round green pixel indicator. */"/>
								<span className="/* UI: Small monospace green text */">
									STATUS: PIPELINE_READY
								</span>
							</div>
							<div className="/* UI: Small grid container with black translucent background and mono font. */">
								{glyphs.map((g, idx)=>(<motion.div key={idx} animate={activeCycle === idx ? {
            scale: 1.15,
            borderColor: "rgba(249,115,22,0.6)",
            backgroundColor: "rgba(249,115,22,0.1)"
        } : {
            scale: 1
        }} className="/* UI: Centered card layout with a thin neutral border and smooth transitions */">
										<span className="/* UI: Small gray text with margin below */">
											D{idx}
										</span>
										<span className="/* UI: Small bold serif text in an orange color. */">
											{g}
										</span>
									</motion.div>))}
							</div>
						</div>
						{}
						<div className="/* UI: Top margin, flex container with centered items and spacing */">
							<span className="/* UI: Small monospace text in neutral grey. */">
								TX LINE CLK: 12.4 GHZ
							</span>
						</div>
					</div>

					{}
					<div className="/* UI: Semi-transparent blurred background within a rounded container with a thin dark border. */">
						<div className="/* UI: Flex container distributing elements with centered alignment and spacing. */">
							<span className="/* UI: Small monospace uppercase text in orange with wide letter spacing */">
								RAYON_ALU_COMPLEX
							</span>
							<Cpu className="/* UI: Small orange icon or marker */"/>
						</div>

						<div className="/* UI: Two-column grid layout with narrow gap, small mono font, and bottom margin. */">
							{[
        0,
        1,
        2,
        3
    ].map((core)=>(<div key={core} className={`border p-3 rounded-xl flex flex-col gap-1 transition-all duration-500 relative overflow-hidden
                    ${activeCycle === core ? "border-orange-500 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]" : "border-neutral-800 bg-black/40"}`}>
									<div className="/* UI: Horizontal flex container aligning items evenly */">
										<span className="/* UI: Small neutral gray text */">
											CORE_{core}
										</span>
										<span className={`w-1.5 h-1.5 rounded-full ${activeCycle === core ? "bg-orange-500 animate-ping" : "bg-neutral-700"}`}/>
									</div>
									<span className="/* UI: Small neutral gray text font */">
										OP: TESS_BIN_LSTM
									</span>
									<div className="/* UI: Full-width rounded dark background component with a small top margin */">
										<motion.div className="/* UI: Full height orange background */" animate={activeCycle === core ? {
            width: "100%"
        } : {
            width: "10%"
        }} transition={{
            duration: 1.2
        }}/>
									</div>
								</div>))}
						</div>

						{}
						<AnimatePresence>
							<motion.div initial={{
        opacity: 0,
        scale: 0.5,
        x: -30
    }} animate={{
        opacity: 1,
        scale: 1,
        x: 0
    }} exit={{
        opacity: 0,
        scale: 0.5,
        x: 30
    }} key={activeCycle} className="/* UI: Small, rounded notification badge with an orange border and text. */">
								PKG_{activeCycle} SYNC_LOCK
							</motion.div>
						</AnimatePresence>
					</div>

					{}
					<div className="/* UI: Rounded dark card with a blurred translucent background and border. */">
						<div className="/* UI: Flex container distributing elements with centered alignment and spacing. */">
							<span className="/* UI: Small uppercase purple monospace text with wide tracking. */">
								GEMMA_COPROC_NPU
							</span>
							<BrainCircuit className="/* UI: Small purple icon or indicator element */"/>
						</div>

						<div className="/* UI: Vertical mono-spaced layout with spacing gaps and small text. */">
							<div className="/* UI: Dark semi-transparent card with rounded borders and vertical stacking elements. */">
								<div className="/* UI: Horizontal flex container aligning items evenly */">
									<span className="/* UI: Small neutral gray text */">
										CONTEXT_WINDOW
									</span>
									<span className="/* UI: Small purple text font style */">
										VRAM: 8.4 GB
									</span>
								</div>
								<div className="/* UI: Five-column grid layout with small spacing and tiny text. */">
									{Array.from({
        length: 15
    }).map((_, idx)=>(<motion.div key={idx} animate={activeCycle === idx % 4 ? {
            backgroundColor: "rgba(168,85,247,0.4)",
            borderColor: "rgba(168,85,247,0.8)"
        } : {
            backgroundColor: "rgba(255,255,255,0.02)"
        }} className="/* UI: Small rounded element with subtle neutral border and smooth transition */"/>))}
								</div>
							</div>
							<div className="/* UI: Flex layout with centered items, small neutral text. */">
								<span>INFERENCE RATE</span>
								<span className="/* UI: Bold purple text color */">148 T/S</span>
							</div>
						</div>
					</div>
				</div>

				{}
				<div className="/* UI: Top border separator displaying small monochromatic text in a flex layout */">
					<span>BOARD_REV: 0xDEADBEEF</span>
					<span>COMP_LEVEL: OPT_3_LTO_TRUE</span>
					<span>CLOCK: SYSTEM_REF_PCLK_12</span>
				</div>
			</div>
		</div>);
    '/* "3. Motherboard Internal Working Emulator (Extreme Modern Visualizer)" */';
}
export default function TamilOCR() {
    const [logIndex, setLogIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const pageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: pageRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    useEffect(()=>{
        '/* "Sets up an interval to increment the log index and progress indicator every 1.2 seconds until the maximum values are reached." */';
    }, []);
    return (<div ref={pageRef} className="/* UI: Full-screen dark background layout with overflow control and padding. */">
			{}
			<div className="/* UI: Full-width absolute background layer covering the viewport. */">
				<svg className="/* UI: Takes up the entire width and height of its container */" viewBox="0 0 1000 1000" preserveAspectRatio="none">
					{}
					<path d="M 500 0 L 500 50 C 500 100, 100 80, 100 180 L 100 320 C 100 400, 900 380, 900 480 L 900 620 C 900 700, 200 680, 200 780 L 200 850 C 200 900, 500 900, 500 950 L 500 1000" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3"/>
					{}
					<motion.path d="M 500 0 L 500 50 C 500 100, 100 80, 100 180 L 100 320 C 100 400, 900 380, 900 480 L 900 620 C 900 700, 200 680, 200 780 L 200 850 C 200 900, 500 900, 500 950 L 500 1000" fill="none" stroke="url(#global-schematic-gradient)" strokeWidth="3.5" style={{
        pathLength: smoothScrollProgress
    }} className="/* UI: Soft orange glowing shadow effect */"/>
					<defs>
						<linearGradient id="global-schematic-gradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#f97316"/> {}
							<stop offset="50%" stopColor="#3b82f6"/> {}
							<stop offset="100%" stopColor="#a855f7"/> {}
						</linearGradient>
					</defs>
				</svg>
			</div>

			{}
			<div className="/* UI: Full-screen blurred orange overlay positioned centered over the entire view. */"/>
			<div className="/* UI: Fixed full-size blurred blue circular overlay in the bottom-right corner */"/>
			<div className="/* UI: Full-screen background with fine subtle grid pattern. */"/>

			<main className="/* UI: Centered container with vertical layout, padding, and elevated positioning. */">
				{}
				<section className="/* UI: Centered vertical layout with ample spacing and top margin */">
					{}
					<motion.div initial={{
        opacity: 0,
        scale: 0.9
    }} animate={{
        opacity: 1,
        scale: 1
    }} transition={{
        duration: 0.8,
        ease: "easeOut"
    }} className="/* UI: Pill-shaped alert button with red border and subtle shadow. */">
						<FlaskConical className="/* UI: /* Style: 2 classes */ */"/>
						<span>Experimental Research Build</span>
					</motion.div>

					<motion.h1 initial={{
        opacity: 0,
        y: 20
    }} animate={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.8,
        delay: 0.2
    }} className="/* UI: Large bold tight text in white with tight line height */">
						Digitize Tamil with <br/>
						<span className="/* UI: Text gradient style with orange fade from light to dark */">
							Machine Precision.
						</span>
					</motion.h1>

					<motion.p initial={{
        opacity: 0
    }} animate={{
        opacity: 1
    }} transition={{
        duration: 0.8,
        delay: 0.4
    }} className="/* UI: Medium-sized light neutral text within a limited width. */">
						<span className="/* UI: Italic serif text in light orange with wide tracking */">
							"தேமதுரத் தமிழோசை உலகமெலாம் பரவும் வகை செய்தல் வேண்டும்"
						</span>
						<br/>
						<br/>
						Accelerate fine-tuning pipelines for classical Tamil literature and
						ancient Siddhar manuscripts using Rust parallelism and local
						Edge-AI.
					</motion.p>
					{}
					<motion.div initial={{
        opacity: 0,
        y: 15
    }} animate={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.8,
        delay: 0.5
    }} className="/* UI: /* Style: 1 classes */ */">
						<motion.a href="https://github.com/digital-tamil/tamil-simple-ocr/" target="_blank" rel="noopener noreferrer" className="/* UI: Dark, rounded, glassy component with internal structure and a vibrant hover glow. */" whileHover="hover" whileTap={{
        scale: 0.98
    }}>
							{}
							<motion.div className="/* UI: Full-height transparent to orange gradient overlay effect. */" initial={{
        left: "-100%"
    }} animate={{
        left: "100%"
    }} transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear"
    }}/>

							{}
							<svg className="/* UI: Full-size absolute background element that is non-interactive. */" preserveAspectRatio="none">
								<motion.rect x="0" y="0" width="100%" height="100%" rx="12" fill="none" stroke="#f97316" strokeWidth="1.5" initial={{
        pathLength: 0
    }} variants={{
        hover: {
            pathLength: 1
        }
    }} transition={{
        duration: 0.6,
        ease: "easeInOut"
    }}/>
							</svg>

							{}
							<motion.div variants={{
        hover: {
            rotate: [
                0,
                -12,
                12,
                -12,
                0
            ],
            scale: 1.1
        }
    }} transition={{
        duration: 0.5
    }}>
								<CustomGithubIcon className="/* UI: Small icon with neutral text that turns orange on hover */"/>
							</motion.div>

							<span className="/* UI: Monospace text with wide tracking, transitioning color on hover. */">
								digital-tamil / tamil-simple-ocr
							</span>

							{}
							<motion.div variants={{
        hover: {
            x: 4
        }
    }} transition={{
        duration: 0.3
    }}>
								<ArrowRight className="/* UI: Small icon with neutral color, changing to orange on hover */"/>
							</motion.div>
						</motion.a>
					</motion.div>
				</section>

				{}
				<section className="/* UI: Two-column responsive grid layout with vertical spacing and top margin */">
					{}
					<motion.div initial={{
        opacity: 0,
        x: -30
    }} whileInView={{
        opacity: 1,
        x: 0
    }} viewport={{
        once: true
    }} className="/* UI: Subtle frosted glass effect container with rounded borders and shadow. */">
						<div className="/* UI: Dark background card layout with padding and centered content. */">
							<div className="/* UI: /* Style: 2 classes */ */">
								<div className="/* UI: Small circular element with a semi-transparent red background */"/>
								<div className="/* UI: Small round yellow indicator dot */"/>
								<div className="/* UI: Small, rounded green background element */"/>
							</div>
							<p className="/* UI: Small text icon and label within a flex container. */">
								<Terminal className="/* UI: /* Style: 2 classes */ */"/> cargo run --release --
								--pdf-path ./siddhar.pdf
							</p>
						</div>
						<div className="/* UI: Resizable component with monospace text, vertical layout, and internal spacing. */">
							<div className="/* UI: Full-width semi-transparent gradient overlay banner positioned at the top. */"/>
							<AnimatePresence mode="popLayout">
								{TERMINAL_LOGS.slice(0, logIndex + 1).map((log, i)=>(<motion.div key={i} initial={{
            opacity: 0,
            x: -10
        }} animate={{
            opacity: 1,
            x: 0
        }} className={log.includes("Ollama") || log.includes("Gemma") ? "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" : log.includes("Error") || log.includes("Warning") ? "text-red-400" : "text-neutral-300"}>
										<span className="/* UI: Gray text with margin to the right */">
											[{new Date().toISOString().split("T")[1].slice(0, 8)}]
										</span>
										{log}
									</motion.div>))}
							</AnimatePresence>
						</div>

						{}
						<div className="/* UI: Padding around the content, especially on the top and bottom. */">
							<div className="/* UI: Small, spaced-out monochrome text in a flex layout with margin bottom */">
								<span>Batch processing...</span>
								<span className="/* UI: Orange colored text */">{progress}%</span>
							</div>
							<div className="/* UI: Full-width, semi-transparent white background with rounded edges. */">
								<motion.div className="/* UI: Orange background block with full height and relative positioning */" initial={{
        width: "0%"
    }} animate={{
        width: `${progress}%`
    }} transition={{
        ease: "easeInOut"
    }}>
									<div className="/* UI: Full-screen translucent pulsing overlay with absolute positioning */"/>
								</motion.div>
							</div>
						</div>
					</motion.div>

					{}
					<motion.div initial={{
        opacity: 0,
        x: 30
    }} whileInView={{
        opacity: 1,
        x: 0
    }} viewport={{
        once: true
    }} className="/* UI: Frosted glass card layout with rounded corners and shadow effect. */">
						<div className="/* UI: Centered flex container with spacing, followed by margin bottom */">
							<BrainCircuit className="/* UI: Small square icon with blue color */"/>
							<h3 className="/* UI: Small, bold, light neutral text. */">
								AI Context-Aware Repair
							</h3>
						</div>

						<div className="/* UI: Flex container that expands and stacks items vertically with spacing. */">
							{}
							<div className="/* UI: Enables relative positioning and adds interactive grouping functionality. */">
								<div className="/* UI: Faded red blur background hidden until hovered over. */"/>
								<div className="/* UI: Semi-transparent dark neutral background with rounded borders and red border outline. */">
									<span className="/* UI: Small red monochrome warning label with monospaced text. */">
										Raw OCR (Tesseract)
									</span>
									<p className="/* UI: Semi-transparent, soft-toned paragraph text with serif font and generous spacing. */">
										சித்தர்க ள் நாதன் சிவயோக மாமு னி . , <br/>
										அகர மு தல எழுத் தெல்லாம் ஆ தி...
									</p>
								</div>
							</div>

							{}
							<div className="/* UI: Centered content with vertical padding */">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="/* UI: Orange-colored text. */">
									<motion.path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{
        pathLength: 0,
        opacity: 0
    }} animate={{
        pathLength: 1,
        opacity: 1
    }} transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
    }}/>
								</svg>
							</div>

							{}
							<div className="/* UI: Positioning context for a flexible component element */">
								<div className="/* UI: Full screen blurred semi-transparent blue hoverable background effect */"/>
								<div className="/* UI: Container with rounded borders, semi-transparent dark background, and inset glow shadow. */">
									<span className="/* UI: Small absolute positioned blue label with monochrome background and flex layout */">
										<CheckCircle2 className="/* UI: /* Style: 2 classes */ */"/> Gemma 4 Corrected
									</span>
									<motion.p initial={{
        opacity: 0
    }} animate={{
        opacity: logIndex > 5 ? 1 : 0.2
    }} className="/* UI: Large serif text with wide tracking and a subtle drop shadow. */">
										சித்தர்கள் நாதன் சிவயோக மாமுனி
										<br/>
										அகர முதல எழுத்தெல்லாம் ஆதி...
									</motion.p>
								</div>
							</div>
						</div>
					</motion.div>
				</section>

				{}
				<RoadmapTimeline/>

				{}
				<InteractiveInstallation/>

				{}
				<MotherboardVisualizer/>
			</main>
		</div>);
}

```

### File: `src/layouts/Navbar.tsx`

```typescript
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Terminal as Github, Menu, X, ExternalLink, ArrowRight } from "lucide-react";
interface NavLink {
    name: string;
    href: string;
    external?: boolean;
    badge?: string;
}
const NAV_LINKS: NavLink[] = [
    {
        name: "Corpus Dataset",
        href: "/hugging-face/Tamil-Digital-Heritage-Corpus",
        badge: "1.43k Rows"
    },
    {
        name: "Simple OCR",
        href: "/tamil-simple-ocr",
        badge: "Rust"
    },
    {
        name: "Sandhi Engine",
        href: "https://github.com/digital-tamil/thiruppugazh-sandhi-rs",
        external: true
    }
];
export default function Navigation() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
    useEffect(()=>{
        '/* "Captures and sets the current URL pathname within the component\'s state upon mounting, if running in a browser environment." */';
    }, []);
    useMotionValueEvent(scrollY, "change", (latest)=>{
        '/* "Executes logic for function anonymous_arrow" */';
    });
    return (<>
			<motion.header className="/* UI: Full-screen fixed overlay with centered content and responsive padding. */">
				<nav aria-label="Main Navigation" className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${isScrolled ? "bg-[#07070b]/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.65)]" : "bg-[#07070b]/40 backdrop-blur-md border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"}`}>
					{}
					<a href="/" className="/* UI: Flex container with focus ring and rounded styling. */" aria-label="Digital Tamizh Home">
						<div className="/* UI: Circular icon button with orange gradient, soft shadow, and hover effect. */">
							<div className="/* UI: Full-screen centered dark background circular container */">
								<span className="/* UI: Bold small amber text with hover scale transition effect. */">
									அ
								</span>
							</div>
						</div>
						<div className="/* UI: Vertical flex container for stacking items */">
							<span className="/* UI: Small text, flex layout with icons, bright font. */">
								DIGITAL TAMIZH
								<span className="/* UI: Small pulsing emerald circle indicator icon */"/>
							</span>
							<span className="/* UI: Small monospace uppercase text with wide tracking and subtle neutral color. */">
								Rust · Parallel AI
							</span>
						</div>
					</a>

					{}
					<div className="/* UI: Hidden on small screens, full-size flex container with subtle white border. */">
						{NAV_LINKS.map((item)=>{
        return (<a key={item.name} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${isActive ? "text-amber-300 bg-amber-500/10 border border-amber-500/30" : "text-neutral-400 hover:text-neutral-100 hover:bg-white/6"}`}>
									<span>{item.name}</span>
									{item.badge && (<span className="/* UI: Small rounded badge with translucent white background and monospace text. */">
											{item.badge}
										</span>)}
									{item.external && (<ExternalLink className="/* UI: Small semi-transparent square icon or indicator */"/>)}
								</a>);
        '/* "Renders a list of navigation links, applying specific styling and functionality based on whether the link is active, external, or contains a badge." */';
    })}
					</div>

					{}
					<div className="/* UI: Items aligned in a row with a small spacing between them */">
						<a href="https://github.com/digital-tamil" target="_blank" rel="noopener noreferrer" className="/* UI: Pill-shaped orange gradient button with hover effects and subtle shadow. */">
							<Github className="/* UI: /* Style: 2 classes */ */"/>
							<span className="/* UI: Hidden on small screens and larger, inline on medium screens up */">GitHub</span>
						</a>

						{}
						<button onClick={()=>setMobileMenuOpen((prev)=>!prev)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} className="/* UI: Hidden on medium screens; rounded indicator with hover transition and focus styling. */">
							{mobileMenuOpen ? (<X className="/* UI: /* Style: 2 classes */ */"/>) : (<Menu className="/* UI: /* Style: 2 classes */ */"/>)}
						</button>
					</div>
				</nav>
			</motion.header>

			{}
			<AnimatePresence>
				{mobileMenuOpen && (<motion.div initial={{
        opacity: 0,
        y: -15,
        scale: 0.98
    }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
    }} exit={{
        opacity: 0,
        y: -15,
        scale: 0.98
    }} transition={{
        duration: 0.2,
        ease: "easeOut"
    }} className="/* UI: Fixed overlay positioned below header, visible only on mobile devices. */">
						<div className="/* UI: Rounded dark modal with blur, strong shadow, and interior vertical spacing. */">
							<span className="/* UI: Small monospace uppercase text with tracking and padding. */">
								Ecosystem Navigation
							</span>

							{NAV_LINKS.map((item)=>{
        return (<a key={item.name} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} onClick={()=>setMobileMenuOpen(false)} className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors ${isActive ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" : "text-neutral-300 hover:bg-white/5 hover:text-white"}`}>
										<div className="/* UI: Items aligned in a row with a small spacing between them */">
											<span>{item.name}</span>
											{item.badge && (<span className="/* UI: Small rounded badge with neutral text and white semi-transparent background. */">
													{item.badge}
												</span>)}
										</div>
										{item.external ? (<ExternalLink className="/* UI: Small neutral icon or indicator */"/>) : (<ArrowRight className="/* UI: Small neutral icon or indicator */"/>)}
									</a>);
        '/* "Renders a list of navigation links, styling them based on whether the link matches the current path and indicating external links or internal navigation." */';
    })}

							<div className="/* UI: Small text timeline bar with bottom border and centered items. */">
								<span>Ecosystem Status</span>
								<span className="/* UI: Emerald text in a centered, spaced-out flex container */">
									<span className="/* UI: Small animated green circle element */"/>
									All Nodes Active
								</span>
							</div>
						</div>
					</motion.div>)}
			</AnimatePresence>
		</>);
}

```


