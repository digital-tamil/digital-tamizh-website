# Project Technical Context & LLM Prompt

## Project File Structure & PEG Graph

```
📁 src
├── assets/
│   ├── astro.svg
│   └── background.svg
├── components/
│   ├── Home.tsx
│   ├── Markdown/
│   │   └── HuggingFace.md
│   ├── Welcome.astro
│   └── pages/
│       ├── HuggingFaceDataset.tsx
│       └── TamilOCR.tsx
├── layouts/
│   ├── Layout.astro
│   └── Navbar.jsx
├── pages/
│   ├── hugging-face/
│   │   └── Tamil-Digital-Heritage-Corpus.astro
│   ├── index.astro
│   └── tamil-simple-ocr.astro
└── styles/
    └── global.css
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

### File: `components/Home.tsx`

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
    return (<div ref={containerRef}>
			<UpcomingNode/>

			<div>
				<div>
					<motion.div style={{
        y: lettersY1
    }}>
						A
					</motion.div>
					<motion.div style={{
        y: lettersY2
    }}>
						漢
					</motion.div>
					<motion.div style={{
        y: lettersY3
    }}>
						あ
					</motion.div>
					<motion.div style={{
        y: lettersY1
    }}>
						අ
					</motion.div>
					<motion.div style={{
        y: lettersY2
    }}>
						א
					</motion.div>
					<motion.div style={{
        y: lettersY3
    }}>
						Ω
					</motion.div>
					<motion.div style={{
        y: lettersY1
    }}>
						어
					</motion.div>
					<motion.div style={{
        y: lettersY2
    }}>
						ゑ
					</motion.div>
				</div>

				<motion.div style={{
        scale: centerScale,
        opacity: centerOpacity
    }}>
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
    }}>
						அ
					</motion.div>

					<div>
						<div></div>
						<span>
							யாதும் ஊரே யாவரும் கேளிர்
						</span>
						<div></div>
					</div>

					<p>
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
    }}>
					<h1>
						தமிழ்
					</h1>
				</motion.div>
			</div>

			<div>
				<div></div>
				<div></div>
				<div>
					<div>
						<a href="/hugging-face/Tamil-Digital-Heritage-Corpus">
							<motion.div initial={{
        opacity: 0,
        y: 30
    }} whileInView={{
        opacity: 1,
        y: 0
    }} viewport={{
        once: true
    }}>
								<div>
									<span>
										Hugging Face
									</span>
									<span>01/03</span>
								</div>
								<h3>
									Digital Heritage Corpus
								</h3>
								<p>
									A massive curated dataset of ancient manuscripts and
									contemporary literature.
								</p>
								<div>
									<div></div>
								</div>
							</motion.div>
						</a>

						<a target="__blank" href="https://github.com/digital-tamil/thiruppugazh-sandhi-rs">
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
    }}>
								<div>
									<span>
										GitHub
									</span>
									<span>02/03</span>
								</div>
								<h3>
									Thiruppugazh Sandhi
								</h3>
								<p>
									Sophisticated rule-based sandhi decomposition tool for Tamil
									poetry.
								</p>
								<div>
									<span></span>
									<span>
										Active Build
									</span>
								</div>
							</motion.div>
						</a>

						<a href="/tamil-simple-ocr">
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
    }}>
								<div>
									<span>
										GitHub
									</span>
									<span>03/03</span>
								</div>
								<h3>Tamil Simple OCR</h3>
								<p>
									Minimalist, high-accuracy optical character recognition for
									Tamil scripts.
								</p>
								<div>
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
    }}>
			<div>
				<motion.div animate={{
        x: [
            "-100%",
            "200%"
        ]
    }} transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear"
    }}/>
				<div>
					<div>
						<div/>
						<div/>
					</div>
					<div>
						<h3>
							Something Big is Coming Soon
						</h3>
						<p>
							Finetuning LLM for தமிழ்
						</p>
					</div>
				</div>
			</div>
			<div/>
		</motion.div>);
    '/* "Executes logic for function UpcomingNode" */';
}

```

### File: `components/pages/HuggingFaceDataset.tsx`

```typescript
import { motion } from "motion/react";
import { Database, Search, Library, FileText, Globe } from "lucide-react";
export default function DatasetDetails() {
    return (<div>
			<div></div>

			<motion.div initial={{
        opacity: 0,
        y: 20
    }} animate={{
        opacity: 1,
        y: 0
    }} transition={{
        duration: 0.5
    }}>
				<div>
					<div>
						Hugging Face Dataset
					</div>
					<div>
						<h1>
							Digital Heritage Corpus
						</h1>
						<p>
							by Sanjaiyan
						</p>
					</div>
				</div>

				<div>
					<p>
						We’re on a journey to advance and democratize artificial
						intelligence through open source and open science. This dataset
						forms the crucial foundation for building robust, culturally-aware
						Large Language Models (LLMs) for the Tamil language.
					</p>
				</div>

				<h2>
					Corpus Structure
				</h2>
				<div>
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
        }}>
							<div>
								<item.icon/>
								<span>
									0{i + 1}/04
								</span>
							</div>
							<div>
								<h3>{item.title}</h3>
								<p>
									{item.text}
								</p>
							</div>
						</motion.div>))}
				</div>

				<h2>
					Data Pipeline Workflow
				</h2>
				<div>
					<div>
						<span>தரவு</span>
					</div>

					<div>
						<motion.div whileHover={{
        scale: 1.05
    }}>
							<div>
								<Library/>
							</div>
							<div>
								<h4>
									Raw Sourcing
								</h4>
								<p>
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
    }}/>

						<motion.div whileHover={{
        scale: 1.05
    }}>
							<div>
								<FileText/>
							</div>
							<div>
								<h4>
									Normalization
								</h4>
								<p>
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
    }}/>

						<motion.div whileHover={{
        scale: 1.05
    }}>
							<div>
								<Database/>
							</div>
							<div>
								<h4>
									Hugging Face API
								</h4>
								<p>
									Dataset release
								</p>
							</div>
						</motion.div>
					</div>
				</div>

				<div>
					<a href="https://huggingface.co/datasets/Sanjaiyan/Tamil-Digital-Heritage-Corpus" target="_blank" rel="noreferrer">
						Access on Hugging Face
						<Globe/>
					</a>
				</div>
			</motion.div>
		</div>);
}

```

### File: `components/pages/TamilOCR.tsx`

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
        '/* "Executes logic for function handleCopy" */';
    };
    return (<div>
			<div>
				<h2>
					Deploy in Minutes
				</h2>
				<p>
					100% offline. Zero data sent to the cloud.
				</p>
			</div>

			<div>
				<div>
					{([
        "mac",
        "linux",
        "windows"
    ] as const).map((platform)=>(<button key={platform} onClick={()=>setOs(platform)} className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm
                ${os === platform ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" : "text-neutral-500 hover:text-neutral-300 hover:bg-white/5"}`}>
							<Activity mode={platform === "mac" ? "visible" : "hidden"}>
								<Apple/>
							</Activity>
							<Activity mode={platform === "linux" ? "visible" : "hidden"}>
								<TerminalSquare/>
							</Activity>
							<Activity mode={platform === "windows" ? "visible" : "hidden"}>
								<Monitor/>
							</Activity>
							<span>{platform}</span>
						</button>))}
				</div>

				<div>
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
    }}>
							{INSTALL_STEPS[os].map((step, idx)=>(<div key={step.id}>
									<div>
										<div>
											{idx + 1}
										</div>
										<h4>
											{step.title}
										</h4>
									</div>
									<div>
										<div>
											<pre>
												{step.cmd}
											</pre>
											<button onClick={()=>handleCopy(step.id, step.cmd)}>
												{copiedId === step.id ? (<Check/>) : (<Copy/>)}
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
    return (<div>
			<div>
				<div>
					<Milestone/>
					<span>Project Roadmap</span>
				</div>
				<h2>
					The Future Timeline
				</h2>
				<p>
					Currently in an experimental research phase for Siddhar manuscripts.
					Here is where the architecture is heading.
				</p>
			</div>

			<div>
				<div/>

				{}
				<div>
					<div/>
					<h3>
						<CheckCircle/> Phase 1:
						Production Baseline
					</h3>
					<p>
						Completed
					</p>
					<div>
						<ul>
							<li>• LLVM optimized Rust Engine.</li>
							<li>• Rayon Work-Stealing Pool.</li>
							<li>• Core Tesseract Binarization mapping.</li>
						</ul>
					</div>
				</div>

				{}
				<div>
					<div/>
					<h3>
						<Clock/> Phase 2: Edge-AI
						Correction
					</h3>
					<p>
						Active Development
					</p>
					<div>
						<ul>
							<li>• Local Inference via Ollama POST.</li>
							<li>• Gemma 4.5B Token Repair.</li>
							<li>
								<strong>Upcoming:</strong> Custom fine-tuned Gemma 4 QAT Model
								trained exclusively on Siddhar vocabulary.
							</li>
						</ul>
					</div>
				</div>

				{}
				<div>
					<div/>
					<h3>
						<Rocket/> Phase 3: Native
						Delivery
					</h3>
					<p>
						Planned
					</p>
					<div>
						<ul>
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
        '/* "Executes logic for function anonymous_arrow" */';
    }, []);
    return (<div>
			<div>
				<div>
					<span/>
					<span>ALU Cycles & Registers</span>
				</div>
				<h2>
					Hardware Logic Schematic
				</h2>
				<p>
					A real-time trace schematic of Rust Multi-threading passing state
					buffers into the AI co-processor.
				</p>
			</div>

			<div>
				{}
				<div/>

				{}
				<svg>
					{}
					<path d="M 80 180 Q 200 120 280 140" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,6"/>
					{}
					<path d="M 440 180 L 520 220" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4"/>
					{}
					<path d="M 640 220 Q 560 300 480 340" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="5,5"/>
				</svg>

				<div>
					{}
					<div>
						<div>
							<span>
								INGRESS_BUS [0x7FF]
							</span>
							<HardDrive/>
						</div>
						<div>
							<div>
								<span/>
								<span>
									STATUS: PIPELINE_READY
								</span>
							</div>
							<div>
								{glyphs.map((g, idx)=>(<motion.div key={idx} animate={activeCycle === idx ? {
            scale: 1.15,
            borderColor: "rgba(249,115,22,0.6)",
            backgroundColor: "rgba(249,115,22,0.1)"
        } : {
            scale: 1
        }}>
										<span>
											D{idx}
										</span>
										<span>
											{g}
										</span>
									</motion.div>))}
							</div>
						</div>
						{}
						<div>
							<span>
								TX LINE CLK: 12.4 GHZ
							</span>
						</div>
					</div>

					{}
					<div>
						<div>
							<span>
								RAYON_ALU_COMPLEX
							</span>
							<Cpu/>
						</div>

						<div>
							{[
        0,
        1,
        2,
        3
    ].map((core)=>(<div key={core} className={`border p-3 rounded-xl flex flex-col gap-1 transition-all duration-500 relative overflow-hidden
                    ${activeCycle === core ? "border-orange-500 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]" : "border-neutral-800 bg-black/40"}`}>
									<div>
										<span>
											CORE_{core}
										</span>
										<span className={`w-1.5 h-1.5 rounded-full ${activeCycle === core ? "bg-orange-500 animate-ping" : "bg-neutral-700"}`}/>
									</div>
									<span>
										OP: TESS_BIN_LSTM
									</span>
									<div>
										<motion.div animate={activeCycle === core ? {
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
    }} key={activeCycle}>
								PKG_{activeCycle} SYNC_LOCK
							</motion.div>
						</AnimatePresence>
					</div>

					{}
					<div>
						<div>
							<span>
								GEMMA_COPROC_NPU
							</span>
							<BrainCircuit/>
						</div>

						<div>
							<div>
								<div>
									<span>
										CONTEXT_WINDOW
									</span>
									<span>
										VRAM: 8.4 GB
									</span>
								</div>
								<div>
									{Array.from({
        length: 15
    }).map((_, idx)=>(<motion.div key={idx} animate={activeCycle === idx % 4 ? {
            backgroundColor: "rgba(168,85,247,0.4)",
            borderColor: "rgba(168,85,247,0.8)"
        } : {
            backgroundColor: "rgba(255,255,255,0.02)"
        }}/>))}
								</div>
							</div>
							<div>
								<span>INFERENCE RATE</span>
								<span>148 T/S</span>
							</div>
						</div>
					</div>
				</div>

				{}
				<div>
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
        '/* "Executes logic for function anonymous_arrow" */';
    }, []);
    return (<div ref={pageRef}>
			{}
			<div>
				<svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
					{}
					<path d="M 500 0 L 500 50 C 500 100, 100 80, 100 180 L 100 320 C 100 400, 900 380, 900 480 L 900 620 C 900 700, 200 680, 200 780 L 200 850 C 200 900, 500 900, 500 950 L 500 1000" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3"/>
					{}
					<motion.path d="M 500 0 L 500 50 C 500 100, 100 80, 100 180 L 100 320 C 100 400, 900 380, 900 480 L 900 620 C 900 700, 200 680, 200 780 L 200 850 C 200 900, 500 900, 500 950 L 500 1000" fill="none" stroke="url(#global-schematic-gradient)" strokeWidth="3.5" style={{
        pathLength: smoothScrollProgress
    }}/>
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
			<div/>
			<div/>
			<div/>

			<main>
				{}
				<section>
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
    }}>
						<FlaskConical/>
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
    }}>
						Digitize Tamil with <br/>
						<span>
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
    }}>
						<span>
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
    }}>
						<motion.a href="https://github.com/digital-tamil/tamil-simple-ocr/" target="_blank" rel="noopener noreferrer" whileHover="hover" whileTap={{
        scale: 0.98
    }}>
							{}
							<motion.div initial={{
        left: "-100%"
    }} animate={{
        left: "100%"
    }} transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear"
    }}/>

							{}
							<svg preserveAspectRatio="none">
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
								<CustomGithubIcon/>
							</motion.div>

							<span>
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
								<ArrowRight/>
							</motion.div>
						</motion.a>
					</motion.div>
				</section>

				{}
				<section>
					{}
					<motion.div initial={{
        opacity: 0,
        x: -30
    }} whileInView={{
        opacity: 1,
        x: 0
    }} viewport={{
        once: true
    }}>
						<div>
							<div>
								<div/>
								<div/>
								<div/>
							</div>
							<p>
								<Terminal/> cargo run --release --
								--pdf-path ./siddhar.pdf
							</p>
						</div>
						<div>
							<div/>
							<AnimatePresence mode="popLayout">
								{TERMINAL_LOGS.slice(0, logIndex + 1).map((log, i)=>(<motion.div key={i} initial={{
            opacity: 0,
            x: -10
        }} animate={{
            opacity: 1,
            x: 0
        }} className={log.includes("Ollama") || log.includes("Gemma") ? "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" : log.includes("Error") || log.includes("Warning") ? "text-red-400" : "text-neutral-300"}>
										<span>
											[{new Date().toISOString().split("T")[1].slice(0, 8)}]
										</span>
										{log}
									</motion.div>))}
							</AnimatePresence>
						</div>

						{}
						<div>
							<div>
								<span>Batch processing...</span>
								<span>{progress}%</span>
							</div>
							<div>
								<motion.div initial={{
        width: "0%"
    }} animate={{
        width: `${progress}%`
    }} transition={{
        ease: "easeInOut"
    }}>
									<div/>
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
    }}>
						<div>
							<BrainCircuit/>
							<h3>
								AI Context-Aware Repair
							</h3>
						</div>

						<div>
							{}
							<div>
								<div/>
								<div>
									<span>
										Raw OCR (Tesseract)
									</span>
									<p>
										சித்தர்க ள் நாதன் சிவயோக மாமு னி . , <br/>
										அகர மு தல எழுத் தெல்லாம் ஆ தி...
									</p>
								</div>
							</div>

							{}
							<div>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
							<div>
								<div/>
								<div>
									<span>
										<CheckCircle2/> Gemma 4 Corrected
									</span>
									<motion.p initial={{
        opacity: 0
    }} animate={{
        opacity: logIndex > 5 ? 1 : 0.2
    }}>
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

### File: `layouts/Navbar.jsx`

```jsx
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
export default function Navigation() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isTop, setIsTop] = useState(true);
    useMotionValueEvent(scrollY, "change", (latest)=>{
        '/* "Executes logic for function anonymous_arrow" */';
    });
    return (<div>
			<motion.nav variants={{
        visible: {
            y: 0
        },
        hidden: {
            y: "-100%"
        }
    }} animate={hidden ? "hidden" : "visible"} transition={{
        duration: 0.35,
        ease: "easeInOut"
    }} className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${isTop ? "bg-transparent" : "bg-[#080808]/80 backdrop-blur-md border-b border-white/5"}`}>
				<div>
					<a href="/">
						<span>
							Project
						</span>
						<span>
							DIGITAL TAMIL{" "}
							<span>
								.
							</span>
						</span>
					</a>
				</div>
			</motion.nav>
		</div>);
}

```


