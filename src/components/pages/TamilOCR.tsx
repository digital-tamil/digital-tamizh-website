import React, { useState, useEffect, useRef, Activity } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
	useSpring,
} from "motion/react";
import {
	Terminal,
	Cpu,
	BrainCircuit,
	CheckCircle2,
	Layers,
	Sparkles,
	Apple,
	Monitor,
	TerminalSquare,
	Copy,
	Check,
	HardDrive,
	MemoryStick,
	FlaskConical,
	Milestone,
	CheckCircle,
	Clock,
	Rocket,
	ArrowRight,
	GitCompareArrowsIcon,
} from "lucide-react";

// --- Mock Data ---
const TERMINAL_LOGS = [
	"Starting OCR process...",
	"Initializing Pdfium... bound to system library.",
	"Opening PDF document: siddhar_manuscript.pdf",
	"Rayon thread pool built (2 threads for Ollama calls).",
	"Processing batch: pages 1 to 10 of 100...",
	"Tesseract (tam) locked. Binarizing and extracting raw OCR...",
	"Running Ollama correction on batch with a concurrency of 2...",
	"[Gemma 4] Context-aware token repair engaged.",
	"Writing corrected batch to tamil_pdf_extracted_text.txt...",
];

const INSTALL_STEPS = {
	mac: [
		{
			id: 1,
			title: "Install Dependencies",
			cmd: "brew install pdfium tesseract tesseract-lang",
		},
		{ id: 2, title: "Setup Local Edge AI", cmd: "ollama run gemma" },
		{
			id: 3,
			title: "Clone & Compile Engine",
			cmd: "git clone https://github.com/digital-tamil/tamil-simple-ocr.git\ncd tamil-simple-ocr\ncargo build --release",
		},
	],
	linux: [
		{
			id: 1,
			title: "Install Dependencies",
			cmd: "sudo apt-get install libpdfium-dev tesseract-ocr tesseract-ocr-tam",
		},
		{
			id: 2,
			title: "Setup Local Edge AI",
			cmd: "curl -fsSL https://ollama.com/install.sh | sh\nollama run gemma",
		},
		{
			id: 3,
			title: "Clone & Compile Engine",
			cmd: "git clone https://github.com/digital-tamil/tamil-simple-ocr.git\ncd tamil-simple-ocr\ncargo build --release",
		},
	],
	windows: [
		{
			id: 1,
			title: "Install Dependencies",
			cmd: "winget install tesseract\n# Download pdfium.dll and place in root",
		},
		{
			id: 2,
			title: "Setup Local Edge AI",
			cmd: "winget install ollama\nollama run gemma",
		},
		{
			id: 3,
			title: "Clone & Compile Engine",
			cmd: "git clone https://github.com/digital-tamil/tamil-simple-ocr.git\ncd tamil-simple-ocr\ncargo build --release",
		},
	],
};

const CustomGithubIcon = ({ className = "w-5 h-5" }) => (
	<svg
		viewBox="0 0 24 24"
		fill="currentColor"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
	</svg>
);

// --- Sub-Components ---

// 1. Interactive Installation UI
function InteractiveInstallation() {
	const [os, setOs] = useState<"mac" | "linux" | "windows">("mac");
	const [copiedId, setCopiedId] = useState<number | null>(null);

	const handleCopy = (id: number, text: string) => {
		navigator.clipboard.writeText(text);
		setCopiedId(id);
		setTimeout(() => setCopiedId(null), 2000);
	};

	return (
		<div className="max-w-4xl mx-auto py-20 w-full relative z-10 mt-10">
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
					Deploy in Minutes
				</h2>
				<p className="text-neutral-400">
					100% offline. Zero data sent to the cloud.
				</p>
			</div>

			<div className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-2 flex flex-col md:flex-row shadow-2xl">
				<div className="flex md:flex-col gap-2 p-4 md:w-48 border-b md:border-b-0 md:border-r border-white/5">
					{(["mac", "linux", "windows"] as const).map((platform) => (
						<button
							key={platform}
							onClick={() => setOs(platform)}
							className={`flex-1 md:flex-none flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm
                ${os === platform ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" : "text-neutral-500 hover:text-neutral-300 hover:bg-white/5"}`}
						>
							<Activity mode={platform === "mac" ? "visible" : "hidden"}>
								<Apple className="w-4 h-4" />
							</Activity>
							<Activity mode={platform === "linux" ? "visible" : "hidden"}>
								<TerminalSquare className="w-4 h-4" />
							</Activity>
							<Activity mode={platform === "windows" ? "visible" : "hidden"}>
								<Monitor className="w-4 h-4" />
							</Activity>
							<span className="capitalize hidden md:block">{platform}</span>
						</button>
					))}
				</div>

				<div className="flex-1 p-4 md:p-8 overflow-hidden relative">
					<AnimatePresence mode="wait">
						<motion.div
							key={os}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
							className="flex flex-col gap-6"
						>
							{INSTALL_STEPS[os].map((step, idx) => (
								<div key={step.id} className="relative group">
									<div className="flex items-center gap-4 mb-3">
										<div className="w-6 h-6 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs text-orange-400 font-mono">
											{idx + 1}
										</div>
										<h4 className="text-white text-sm font-semibold">
											{step.title}
										</h4>
									</div>
									<div className="relative ml-3 pl-7 border-l border-white/10 group-hover:border-orange-500/30 transition-colors">
										<div className="bg-neutral-950/80 border border-white/5 rounded-xl p-4 flex justify-between items-start gap-4 hover:border-white/10 transition-colors">
											<pre className="text-neutral-300 font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">
												{step.cmd}
											</pre>
											<button
												onClick={() => handleCopy(step.id, step.cmd)}
												className="text-neutral-500 hover:text-orange-400 transition-colors p-1"
											>
												{copiedId === step.id ? (
													<Check className="w-4 h-4 text-green-400" />
												) : (
													<Copy className="w-4 h-4" />
												)}
											</button>
										</div>
									</div>
								</div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

// 2. Future Timeline & Experimental Roadmap
function RoadmapTimeline() {
	return (
		<div className="max-w-4xl mx-auto py-20 w-full relative z-10">
			<div className="text-center mb-16">
				<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-4 font-mono">
					<Milestone className="w-4 h-4" />
					<span>Project Roadmap</span>
				</div>
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
					The Future Timeline
				</h2>
				<p className="text-neutral-400 max-w-2xl mx-auto">
					Currently in an experimental research phase for Siddhar manuscripts.
					Here is where the architecture is heading.
				</p>
			</div>

			<div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:border-l-0 md:pl-0 pl-6 space-y-12 md:space-y-0">
				<div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-orange-500 via-blue-500 to-transparent -translate-x-1/2 opacity-20" />

				{/* Phase 1 */}
				<div className="relative md:w-1/2 md:pr-12 md:ml-0 md:text-right group">
					<div className="absolute top-0 -left-[35px] md:-right-[7px] md:left-auto w-4 h-4 rounded-full bg-green-500 border-[3px] border-neutral-950 shadow-[0_0_15px_rgba(34,197,94,0.5)] z-10" />
					<h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 md:justify-end">
						<CheckCircle className="w-5 h-5 text-green-400" /> Phase 1:
						Production Baseline
					</h3>
					<p className="text-neutral-400 text-sm leading-relaxed mb-3">
						Completed
					</p>
					<div className="bg-neutral-900/40 border border-white/5 p-4 rounded-xl inline-block text-left">
						<ul className="text-sm text-neutral-300 space-y-2">
							<li>• LLVM optimized Rust Engine.</li>
							<li>• Rayon Work-Stealing Pool.</li>
							<li>• Core Tesseract Binarization mapping.</li>
						</ul>
					</div>
				</div>

				{/* Phase 2 */}
				<div className="relative md:w-1/2 md:pl-12 md:ml-auto md:mt-12 group">
					<div className="absolute top-0 -left-[35px] md:-left-[7px] w-4 h-4 rounded-full bg-blue-500 border-[3px] border-neutral-950 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 animate-pulse" />
					<h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
						<Clock className="w-5 h-5 text-blue-400" /> Phase 2: Edge-AI
						Correction
					</h3>
					<p className="text-neutral-400 text-sm leading-relaxed mb-3 text-blue-300/80">
						Active Development
					</p>
					<div className="bg-neutral-900/40 border border-blue-500/20 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)] p-4 rounded-xl inline-block text-left">
						<ul className="text-sm text-neutral-300 space-y-2">
							<li>• Local Inference via Ollama POST.</li>
							<li>• Gemma 4.5B Token Repair.</li>
							<li className="text-orange-300 border-t border-white/5 pt-2 mt-2">
								<strong>Upcoming:</strong> Custom fine-tuned Gemma 4 QAT Model
								trained exclusively on Siddhar vocabulary.
							</li>
						</ul>
					</div>
				</div>

				{/* Phase 3 */}
				<div className="relative md:w-1/2 md:pr-12 md:ml-0 md:mt-12 md:text-right group">
					<div className="absolute top-0 -left-[35px] md:-right-[7px] md:left-auto w-4 h-4 rounded-full bg-neutral-600 border-[3px] border-neutral-950 z-10" />
					<h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 md:justify-end">
						<Rocket className="w-5 h-5 text-neutral-400" /> Phase 3: Native
						Delivery
					</h3>
					<p className="text-neutral-400 text-sm leading-relaxed mb-3">
						Planned
					</p>
					<div className="bg-neutral-900/40 border border-white/5 p-4 rounded-xl inline-block text-left opacity-60 hover:opacity-100 transition-opacity">
						<ul className="text-sm text-neutral-300 space-y-2">
							<li>• Tauri v2 Core Backend Wrap.</li>
							<li>• HTML5/TS responsive Frontend GUI.</li>
							<li>• IPC Commands for seamless bridging.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

// 3. Motherboard Internal Working Emulator (Extreme Modern Visualizer)
function MotherboardVisualizer() {
	const [activeCycle, setActiveCycle] = useState(0);

	// Cycle states mimicking CPU ALU instruction phases
	useEffect(() => {
		const timer = setInterval(() => {
			setActiveCycle((prev) => (prev + 1) % 4);
		}, 1500);
		return () => clearInterval(timer);
	}, []);

	const glyphs = ["சி", "த்", "த", "ர்"];

	return (
		<div className="w-full relative z-10 py-16">
			<div className="text-center mb-12">
				<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-mono mb-3">
					<span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
					<span>ALU Cycles & Registers</span>
				</div>
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
					Hardware Logic Schematic
				</h2>
				<p className="text-neutral-400 max-w-lg mx-auto text-sm">
					A real-time trace schematic of Rust Multi-threading passing state
					buffers into the AI co-processor.
				</p>
			</div>

			<div className="max-w-4xl mx-auto bg-black/60 border border-neutral-800 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl backdrop-blur-md">
				{/* Motherboard Grid Traces */}
				<div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,transparent_49%,#3b82f6_50%,#3b82f6_51%,transparent_52%),linear-gradient(transparent_49%,#3b82f6_50%,#3b82f6_51%,transparent_52%)] bg-[size:30px_30px] pointer-events-none" />

				{/* Live Trace Wires with moving signals */}
				<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
					{/* Wire 1: Ingress Buffer to CPU Cores */}
					<path
						d="M 80 180 Q 200 120 280 140"
						fill="none"
						stroke="#f97316"
						strokeWidth="2"
						strokeDasharray="6,6"
						className="animate-[dash_10s_linear_infinite]"
					/>
					{/* Wire 2: CPU Cores to L1 Buffer */}
					<path
						d="M 440 180 L 520 220"
						fill="none"
						stroke="#3b82f6"
						strokeWidth="2"
						strokeDasharray="4,4"
						className="animate-[dash_6s_linear_infinite]"
					/>
					{/* Wire 3: L1 Buffer to NPU Co-processor */}
					<path
						d="M 640 220 Q 560 300 480 340"
						fill="none"
						stroke="#a855f7"
						strokeWidth="2"
						strokeDasharray="5,5"
						className="animate-[dash_8s_linear_infinite]"
					/>
				</svg>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-center">
					{/* Step A: Instruction Queue / PDF Buffer */}
					<div className="border border-neutral-800/80 bg-neutral-900/30 rounded-2xl p-5 relative overflow-hidden backdrop-blur-sm">
						<div className="flex justify-between items-center mb-4">
							<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
								INGRESS_BUS [0x7FF]
							</span>
							<HardDrive className="w-4 h-4 text-neutral-400" />
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex gap-2 mb-2">
								<span className="w-1.5 h-1.5 rounded-full bg-green-500" />
								<span className="text-[10px] font-mono text-green-400">
									STATUS: PIPELINE_READY
								</span>
							</div>
							<div className="grid grid-cols-4 gap-2 bg-black/60 p-3 rounded-lg border border-neutral-900 font-mono text-xs">
								{glyphs.map((g, idx) => (
									<motion.div
										key={idx}
										animate={
											activeCycle === idx
												? {
														scale: 1.15,
														borderColor: "rgba(249,115,22,0.6)",
														backgroundColor: "rgba(249,115,22,0.1)",
													}
												: { scale: 1 }
										}
										className="border border-neutral-800/80 p-2 rounded flex flex-col items-center justify-center transition-all"
									>
										<span className="text-[10px] text-neutral-500 mb-1">
											D{idx}
										</span>
										<span className="text-orange-400 font-serif font-bold text-sm">
											{g}
										</span>
									</motion.div>
								))}
							</div>
						</div>
						{/* Pulsing data line output */}
						<div className="mt-4 flex items-center gap-2">
							<span className="text-[9px] font-mono text-neutral-600">
								TX LINE CLK: 12.4 GHZ
							</span>
						</div>
					</div>

					{/* Step B: Rust Multi-Thread Core (Rayon ALU Complex) */}
					<div className="border border-neutral-800/80 bg-orange-950/10 rounded-2xl p-5 relative overflow-hidden backdrop-blur-sm">
						<div className="flex justify-between items-center mb-4">
							<span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
								RAYON_ALU_COMPLEX
							</span>
							<Cpu className="w-4 h-4 text-orange-500" />
						</div>

						<div className="grid grid-cols-2 gap-3 font-mono text-xs mb-4">
							{[0, 1, 2, 3].map((core) => (
								<div
									key={core}
									className={`border p-3 rounded-xl flex flex-col gap-1 transition-all duration-500 relative overflow-hidden
                    ${activeCycle === core ? "border-orange-500 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]" : "border-neutral-800 bg-black/40"}`}
								>
									<div className="flex justify-between items-center">
										<span className="text-[10px] text-neutral-400">
											CORE_{core}
										</span>
										<span
											className={`w-1.5 h-1.5 rounded-full ${activeCycle === core ? "bg-orange-500 animate-ping" : "bg-neutral-700"}`}
										/>
									</div>
									<span className="text-[9px] text-neutral-500">
										OP: TESS_BIN_LSTM
									</span>
									<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden mt-1">
										<motion.div
											className="bg-orange-500 h-full"
											animate={
												activeCycle === core
													? { width: "100%" }
													: { width: "10%" }
											}
											transition={{ duration: 1.2 }}
										/>
									</div>
								</div>
							))}
						</div>

						{/* Interactive Data Packet Flying */}
						<AnimatePresence>
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: -30 }}
								animate={{ opacity: 1, scale: 1, x: 0 }}
								exit={{ opacity: 0, scale: 0.5, x: 30 }}
								key={activeCycle}
								className="absolute top-2 right-2 bg-orange-500/10 text-orange-400 border border-orange-500/30 text-[9px] px-1.5 py-0.5 rounded font-mono"
							>
								PKG_{activeCycle} SYNC_LOCK
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Step C: Local NPU Co-Processor (AI Context Engine) */}
					<div className="border border-neutral-800/80 bg-purple-950/5 rounded-2xl p-5 relative overflow-hidden backdrop-blur-sm">
						<div className="flex justify-between items-center mb-4">
							<span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
								GEMMA_COPROC_NPU
							</span>
							<BrainCircuit className="w-4 h-4 text-purple-400" />
						</div>

						<div className="flex flex-col gap-3 font-mono text-xs">
							<div className="bg-black/60 p-3 rounded-xl border border-neutral-900 flex flex-col gap-2">
								<div className="flex justify-between items-center">
									<span className="text-[10px] text-neutral-400">
										CONTEXT_WINDOW
									</span>
									<span className="text-[9px] text-purple-300">
										VRAM: 8.4 GB
									</span>
								</div>
								<div className="grid grid-cols-5 gap-1 text-[9px]">
									{Array.from({ length: 15 }).map((_, idx) => (
										<motion.div
											key={idx}
											animate={
												activeCycle === idx % 4
													? {
															backgroundColor: "rgba(168,85,247,0.4)",
															borderColor: "rgba(168,85,247,0.8)",
														}
													: { backgroundColor: "rgba(255,255,255,0.02)" }
											}
											className="h-3 rounded-sm border border-neutral-800 transition-all duration-300"
										/>
									))}
								</div>
							</div>
							<div className="flex justify-between items-center text-[10px] text-neutral-400">
								<span>INFERENCE RATE</span>
								<span className="text-purple-400 font-bold">148 T/S</span>
							</div>
						</div>
					</div>
				</div>

				{/* Global PCB Bottom Markings */}
				<div className="mt-8 pt-4 border-t border-neutral-900 flex flex-wrap justify-between items-center gap-4 text-[9px] font-mono text-neutral-500">
					<span>BOARD_REV: 0xDEADBEEF</span>
					<span>COMP_LEVEL: OPT_3_LTO_TRUE</span>
					<span>CLOCK: SYSTEM_REF_PCLK_12</span>
				</div>
			</div>
		</div>
	);
}

// --- Main Export Component ---
export default function TamilOCR() {
	const [logIndex, setLogIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const pageRef = useRef<HTMLDivElement>(null);

	// Global Page Scroll Tracker
	const { scrollYProgress } = useScroll({
		target: pageRef,
		offset: ["start start", "end end"],
	});

	const smoothScrollProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	// Simulate Terminal Logs and Progress
	useEffect(() => {
		const interval = setInterval(() => {
			setLogIndex((prev) => {
				if (prev < TERMINAL_LOGS.length - 1) return prev + 1;
				return prev;
			});
			setProgress((prev) => (prev < 100 ? prev + 12 : 100));
		}, 1200);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			ref={pageRef}
			className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-orange-500/30 overflow-x-hidden relative pb-10"
		>
			{/* 4. FULL-PAGE SCROLL-PATH SVG CONNECTING SPINE */}
			<div className="absolute inset-y-0 left-0 w-full pointer-events-none z-0">
				<svg
					className="w-full h-full"
					viewBox="0 0 1000 1000"
					preserveAspectRatio="none"
				>
					{/* Underlay Circuit Trace */}
					<path
						d="M 500 0 L 500 50 C 500 100, 100 80, 100 180 L 100 320 C 100 400, 900 380, 900 480 L 900 620 C 900 700, 200 680, 200 780 L 200 850 C 200 900, 500 900, 500 950 L 500 1000"
						fill="none"
						stroke="rgba(255,255,255,0.03)"
						strokeWidth="3"
					/>
					{/* Scroll-Drawn Active Trace */}
					<motion.path
						d="M 500 0 L 500 50 C 500 100, 100 80, 100 180 L 100 320 C 100 400, 900 380, 900 480 L 900 620 C 900 700, 200 680, 200 780 L 200 850 C 200 900, 500 900, 500 950 L 500 1000"
						fill="none"
						stroke="url(#global-schematic-gradient)"
						strokeWidth="3.5"
						style={{ pathLength: smoothScrollProgress }}
						className="drop-shadow-[0_0_15px_rgba(249,115,22,0.9)]"
					/>
					<defs>
						<linearGradient
							id="global-schematic-gradient"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop offset="0%" stopColor="#f97316" /> {/* Orange */}
							<stop offset="50%" stopColor="#3b82f6" /> {/* Electric Blue */}
							<stop offset="100%" stopColor="#a855f7" /> {/* Neon Violet */}
						</linearGradient>
					</defs>
				</svg>
			</div>

			{/* Background Ambient Glows */}
			<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
			<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
			<div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

			<main className="max-w-6xl mx-auto px-6 py-20 relative z-10 flex flex-col gap-10">
				{/* HERO SECTION */}
				<section className="flex flex-col items-center text-center space-y-8 mt-10">
					{/* EXPERIMENTAL BADGE */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md text-xs font-semibold tracking-wide text-red-400 mb-2 uppercase shadow-[0_0_20px_rgba(239,68,68,0.15)]"
					>
						<FlaskConical className="w-4 h-4" />
						<span>Experimental Research Build</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
					>
						Digitize Tamil with <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
							Machine Precision.
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light"
					>
						<span className="italic text-orange-200/80 tracking-wide font-serif">
							"தேமதுரத் தமிழோசை உலகமெலாம் பரவும் வகை செய்தல் வேண்டும்"
						</span>
						<br />
						<br />
						Accelerate fine-tuning pipelines for classical Tamil literature and
						ancient Siddhar manuscripts using Rust parallelism and local
						Edge-AI.
					</motion.p>
					{/* DYNAMIC GITHUB BUTTON WITH MICRO-ANIMATIONS */}
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="pt-4"
					>
						<motion.a
							href="https://github.com/digital-tamil/tamil-simple-ocr/"
							target="_blank"
							rel="noopener noreferrer"
							className="relative group inline-flex items-center gap-3.5 px-6 py-4 rounded-xl bg-neutral-900/80 border border-white/10 text-white font-medium text-sm overflow-hidden backdrop-blur-sm transition-all shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
							whileHover="hover"
							whileTap={{ scale: 0.98 }}
						>
							{/* Internal Scanning Flare Effect */}
							<motion.div
								className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-orange-500/10 to-transparent pointer-events-none"
								initial={{ left: "-100%" }}
								animate={{ left: "100%" }}
								transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
							/>

							{/* Glowing Outline Vector (Draws itself on hover) */}
							<svg
								className="absolute inset-0 w-full h-full pointer-events-none"
								preserveAspectRatio="none"
							>
								<motion.rect
									x="0"
									y="0"
									width="100%"
									height="100%"
									rx="12"
									fill="none"
									stroke="#f97316"
									strokeWidth="1.5"
									initial={{ pathLength: 0 }}
									variants={{
										hover: { pathLength: 1 },
									}}
									transition={{ duration: 0.6, ease: "easeInOut" }}
								/>
							</svg>

							{/* GitHub Icon with Hover wiggle */}
							<motion.div
								variants={{
									hover: { rotate: [0, -12, 12, -12, 0], scale: 1.1 },
								}}
								transition={{ duration: 0.5 }}
							>
								<CustomGithubIcon className="w-5 h-5 text-neutral-300 group-hover:text-orange-400 transition-colors" />
							</motion.div>

							<span className="font-mono tracking-wide text-neutral-200 group-hover:text-white transition-colors">
								digital-tamil / tamil-simple-ocr
							</span>

							{/* Translation arrow */}
							<motion.div
								variants={{
									hover: { x: 4 },
								}}
								transition={{ duration: 0.3 }}
							>
								<ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 transition-colors" />
							</motion.div>
						</motion.a>
					</motion.div>
				</section>

				{/* THE "WOW" UI - LIVE PROCESSING DASHBOARD */}
				<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-16">
					{/* Left: Glassmorphic Terminal */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl overflow-hidden flex flex-col shadow-2xl shadow-black/50"
					>
						<div className="bg-neutral-950/80 border-b border-white/5 px-4 py-3 flex items-center gap-2">
							<div className="flex gap-1.5">
								<div className="w-3 h-3 rounded-full bg-red-500/80" />
								<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
								<div className="w-3 h-3 rounded-full bg-green-500/80" />
							</div>
							<p className="ml-4 text-xs font-mono text-neutral-500 flex items-center gap-2">
								<Terminal className="w-3 h-3" /> cargo run --release --
								--pdf-path ./siddhar.pdf
							</p>
						</div>
						<div className="p-6 font-mono text-sm flex-1 flex flex-col gap-2 relative h-[300px] overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-neutral-900/50 to-transparent pointer-events-none z-10" />
							<AnimatePresence mode="popLayout">
								{TERMINAL_LOGS.slice(0, logIndex + 1).map((log, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										className={
											log.includes("Ollama") || log.includes("Gemma")
												? "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
												: log.includes("Error") || log.includes("Warning")
													? "text-red-400"
													: "text-neutral-300"
										}
									>
										<span className="text-neutral-600 mr-2">
											[{new Date().toISOString().split("T")[1].slice(0, 8)}]
										</span>
										{log}
									</motion.div>
								))}
							</AnimatePresence>
						</div>

						{/* REQUESTED PROGRESS BAR */}
						<div className="px-6 pb-6 pt-2">
							<div className="flex justify-between text-xs font-mono text-neutral-400 mb-2">
								<span>Batch processing...</span>
								<span className="text-orange-400">{progress}%</span>
							</div>
							<div className="w-full bg-white/5 h-1.5 overflow-hidden rounded-full">
								<motion.div
									className="bg-orange-500 h-full relative"
									initial={{ width: "0%" }}
									animate={{ width: `${progress}%` }}
									transition={{ ease: "easeInOut" }}
								>
									<div className="absolute inset-0 bg-white/20 animate-pulse" />
								</motion.div>
							</div>
						</div>
					</motion.div>

					{/* Right: Real-time Correction Diff Visualizer */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl p-6 flex flex-col shadow-2xl shadow-black/50"
					>
						<div className="flex items-center gap-2 mb-6">
							<BrainCircuit className="w-5 h-5 text-blue-400" />
							<h3 className="text-sm font-semibold text-neutral-200">
								AI Context-Aware Repair
							</h3>
						</div>

						<div className="flex-1 flex flex-col gap-4">
							{/* Noisy Tesseract Output */}
							<div className="relative group">
								<div className="absolute inset-0 bg-red-500/5 blur-md rounded-xl transition-opacity opacity-0 group-hover:opacity-100" />
								<div className="relative p-4 rounded-xl border border-red-500/20 bg-neutral-950/50">
									<span className="absolute -top-3 left-4 bg-neutral-900 px-2 text-[10px] uppercase tracking-wider text-red-400 font-mono">
										Raw OCR (Tesseract)
									</span>
									<p className="text-neutral-400 text-lg leading-relaxed font-serif tracking-wide pt-2 opacity-80 blur-[0.5px]">
										சித்தர்க ள் நாதன் சிவயோக மாமு னி . , <br />
										அகர மு தல எழுத் தெல்லாம் ஆ தி...
									</p>
								</div>
							</div>

							{/* Animated SVG Arrow */}
							<div className="flex justify-center py-2">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									className="text-orange-500"
								>
									<motion.path
										d="M12 4V20M12 20L6 14M12 20L18 14"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										initial={{ pathLength: 0, opacity: 0 }}
										animate={{ pathLength: 1, opacity: 1 }}
										transition={{
											duration: 1.5,
											repeat: Infinity,
											ease: "linear",
										}}
									/>
								</svg>
							</div>

							{/* Clean Ollama Output */}
							<div className="relative group flex-1">
								<div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-xl transition-opacity opacity-50 group-hover:opacity-100" />
								<div className="relative h-full p-4 rounded-xl border border-blue-500/30 bg-neutral-950/80 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]">
									<span className="absolute -top-3 left-4 bg-neutral-900 px-2 text-[10px] uppercase tracking-wider text-blue-400 font-mono flex items-center gap-1">
										<CheckCircle2 className="w-3 h-3" /> Gemma 4 Corrected
									</span>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: logIndex > 5 ? 1 : 0.2 }}
										className="text-neutral-100 text-lg leading-relaxed font-serif tracking-wide pt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
									>
										சித்தர்கள் நாதன் சிவயோக மாமுனி
										<br />
										அகர முதல எழுத்தெல்லாம் ஆதி...
									</motion.p>
								</div>
							</div>
						</div>
					</motion.div>
				</section>

				{/* ROADMAP TIMELINE SECTION */}
				<RoadmapTimeline />

				{/* INTERACTIVE INSTALLATION SECTION */}
				<InteractiveInstallation />

				{/* SCROLL TRIGGERED HARDWARE MOTHERBOARD SCHEMATIC */}
				<MotherboardVisualizer />
			</main>
		</div>
	);
}
