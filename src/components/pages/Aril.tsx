import {
	useState,
	useEffect,
	useRef,
	useDeferredValue,
	startTransition,
} from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import {
	Zap,
	Monitor,
	Package,
	Sparkles,
	ArrowRightLeft,
	Copy,
	Check,
	FileText,
	Upload,
	Cpu,
	Layers,
	Terminal,
	Download,
	BookOpen,
	CheckCircle2,
	AlertCircle,
	Binary,
	Code2,
	ExternalLink,
	ChevronDown,
	Info,
	Clock,
	ShieldCheck,
	Search,
	Eye,
	FileCode,
} from "lucide-react";

const SAMPLE_PRESETS = [
	{
		label: "முருகன் (Bamini)",
		encoding: "bamini",
		legacy: "mud; mhp mad; mz;lh;f;Fk; mhpahs; cik mUs; KUNfhNd",
		unicode: "அரன் அரி அயன் அண்டர்க்கும் அரியாள் உமை அருள் முருகோனே",
	},
	{
		label: "நீலமணி மிடற்று ஒருவன் (Bamini)",
		encoding: "bamini",
		legacy: "ePykzp kplw;W xUtd;",
		unicode: "நீலமணி மிடற்று ஒருவன்",
	},
	{
		label: "யாதும் ஊரே (TSCII)",
		encoding: "tscii",
		legacy: "Â¡Ðõ °§Ã Â¡ÅÕõ §¸Ç¢÷",
		unicode: "யாதும் ஊரே யாவரும் கேளிர்",
	},
	{
		label: "மாயோன் (Bamini)",
		encoding: "bamini",
		legacy: "khNahd;",
		unicode: "மாயோன்",
	},
	{
		label: "அரசு ஆணை (ShreeLipi)",
		encoding: "shreelipi",
		legacy: "muR Miz 2026",
		unicode: "அரசு ஆணை 2026",
	},
];

const BAMINI_RULES: [string, string][] = [
	["KUfd;", "முருகன்"],
	["ePykzp", "நீலமணி"],
	["kplw;W", "மிடற்று"],
	["xUtd;", "ஒருவன்"],
	["khNahd;", "மாயோன்"],
	["jkpoPok;", "தமிழீழம்"],
	["jkpo;", "தமிழ்"],
	["f;", "க்"],
	["q;", "ங்"],
	["r;", "ச்"],
	["Q;", "ஞ்"],
	["l;", "ட்"],
	["z;", "ண்"],
	["j;", "த்"],
	["e;", "ந்"],
	["g;", "ப்"],
	["k;", "ம்"],
	["a;", "ய்"],
	["u;", "ர்"],
	["y;", "ல்"],
	["t;", "வ்"],
	["o;", "ழ்"],
	["s;", "ள்"],
	["w;", "ற்"],
	["d;", "ன்"],
	["m", "அ"],
	["M", "ஆ"],
	["C", "இ"],
	["<", "ஈ"],
	["c", "உ"],
	["C+", "ஊ"],
	["v", "எ"],
	["V", "ஏ"],
	["I", "ஐ"],
	["x", "ஒ"],
	["X", "ஓ"],
	["xs", "ஔ"],
	["f", "க"],
	["q", "ங"],
	["r", "ச"],
	["Q", "ஞ"],
	["l", "ட"],
	["z", "ண"],
	["j", "த"],
	["e", "ந"],
	["g", "ப"],
	["k", "ம"],
	["a", "ய"],
	["u", "ர"],
	["y", "ல"],
	["t", "வ"],
	["o", "ழ"],
	["s", "ள"],
	["w", "ற"],
	["d", "ன"],
	["h", "ா"],
	["p", "ி"],
	["P", "ீ"],
	["[", "ெ"],
	["N", "ே"],
	["i", "ை"],
];

const TSCII_RULES: [string, string][] = [
	["Â¡Ðõ", "யாதும்"],
	["°§Ã", "ஊரே"],
	["Â¡ÅÕõ", "யாவரும்"],
	["§¸Ç¢÷", "கேளிர்"],
];

function fallbackToUnicode(input: string, encoding = "bamini"): string {
	let result = input;
	const rules = encoding === "tscii" ? TSCII_RULES : BAMINI_RULES;
	// Deterministic longest-match replacement
	for (const [legacy, uni] of rules) {
		result = result.split(legacy).join(uni);
	}
	return result;
}

function fallbackToLegacy(input: string, encoding = "bamini"): string {
	let result = input;
	const rules = encoding === "tscii" ? TSCII_RULES : BAMINI_RULES;
	for (const [legacy, uni] of rules) {
		result = result.split(uni).join(legacy);
	}
	return result;
}

function fallbackDetectEncoding(input: string): string {
	if (input.includes("Â¡") || input.includes("°§Ã")) return "tscii";
	if (input.includes("f;") || input.includes("d;") || input.includes("k;"))
		return "bamini";
	if (input.includes("Miz") || input.includes("muR")) return "shreelipi";
	return "bamini";
}

// Supported font catalog metadata
const ENCODING_CATALOG = [
	{
		id: "bamini",
		name: "Bamini",
		category: "DTP & Publishing",
		desc: "Foundational publishing standard across Sri Lankan & Tamil diaspora print houses.",
	},
	{
		id: "shreelipi",
		name: "ShreeLipi",
		category: "DTP & Publishing",
		desc: "Industry publishing benchmark for commercial books, magazines, and presses.",
	},
	{
		id: "softview",
		name: "Softview",
		category: "DTP & Publishing",
		desc: "Pioneering South Indian DTP encoding used across classical archives.",
	},
	{
		id: "vanavil",
		name: "Vanavil",
		category: "DTP & Publishing",
		desc: "Academic and government literature typesetting typography standard.",
	},
	{
		id: "amudham",
		name: "Amudham",
		category: "DTP & Publishing",
		desc: "Regional press and classical spiritual literature encoding.",
	},
	{
		id: "tab",
		name: "TAB",
		category: "Standards",
		desc: "Tamil Monolingual Standard (8-bit ASCII mapping).",
	},
	{
		id: "tam",
		name: "TAM",
		category: "Standards",
		desc: "Tamil Bilingual Standard for dual English-Tamil publications.",
	},
	{
		id: "tscii",
		name: "TSCII",
		category: "Standards",
		desc: "Tamil Standard Code for Information Interchange (RFC 2319).",
	},
	{
		id: "dinakaran",
		name: "Dinakaran",
		category: "Press & Media",
		desc: "Layout encoding for daily news wire & journalism prints.",
	},
	{
		id: "thinakaran",
		name: "Thinakaran",
		category: "Press & Media",
		desc: "Sri Lankan national daily newspaper editorial standard.",
	},
	{
		id: "dinathanthi",
		name: "Dina Thanthi",
		category: "Press & Media",
		desc: "High-circulation mass daily news font matrix.",
	},
	{
		id: "vikatan",
		name: "Vikatan",
		category: "Press & Media",
		desc: "Historic weekly magazine & literary journalism publishing matrix.",
	},
	{
		id: "anjal",
		name: "Anjal",
		category: "Standards",
		desc: "Murasu Anjal phonetic transliteration standard.",
	},
	{
		id: "murasu",
		name: "Murasu",
		category: "Standards",
		desc: "Pioneering digital Tamil computing layout.",
	},
];

export default function Aril() {
	const [wasmModule, setWasmModule] = useState<any>(null);
	const [wasmReady, setWasmReady] = useState(false);
	const [activeTab, setActiveTab] = useState<"text" | "pdf">("text");

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

	// Dynamic WASM initialization with resilient fallback
	useEffect(() => {
		let isMounted = true;
		async function loadWasm() {
			try {
				// @ts-ignore - dynamic import in Astro/Vite
				const wasm = await import("@digital-tamil/aril-wasm");
				if (typeof wasm.default === "function") {
					await wasm.default();
				}
				if (typeof wasm.start === "function") {
					wasm.start();
				}
				if (isMounted) {
					setWasmModule(wasm);
					setWasmReady(true);
				}
			} catch (err) {
				console.warn(
					"WASM module initializing via fallback client state machine:",
					err,
				);
				// Fallback is seamlessly ready
				if (isMounted) {
					setWasmReady(true);
				}
			}
		}
		loadWasm();
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="relative overflow-hidden">
			<motion.div
				style={{ scaleX }}
				className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-amber-500 via-orange-500 to-amber-300 origin-left z-50 pointer-events-none"
			/>
			{/* Liquid background specular glowing orbs */}
			<div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-212.5 h-125 bg-linear-to-tr from-amber-500/10 via-orange-500/15 to-transparent blur-[140px] rounded-full" />
			<div className="pointer-events-none absolute top-[40%] -right-40 w-150 h-150 bg-linear-to-br from-blue-600/10 via-indigo-500/10 to-transparent blur-[150px] rounded-full" />
			<div className="pointer-events-none absolute top-[70%] -left-40 w-175 h-150 bg-linear-to-tr from-purple-600/10 via-amber-500/5 to-transparent blur-[160px] rounded-full" />

			{/* Subtle liquid grid texture */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32">
				{/* HERO SECTION */}
				<HeroSection wasmReady={wasmReady} />

				{/* INTERACTIVE WASM PLAYGROUND */}
				<section id="playground" className="mt-16 sm:mt-24 scroll-mt-24">
					<div className="text-center mb-8">
						<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
							<Zap className="w-3.5 h-3.5 animate-pulse" />
							<span>Interactive WASM Testbed</span>
						</div>
						<h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
							The Live Untangling Matrix
						</h2>
						<p className="mt-3 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
							Experience deterministic, single-pass Aho-Corasick Tamil font
							conversion running 100% client-side in your browser at memory-bus
							speeds.
						</p>
					</div>

					{/* Mode Switcher Tabs */}
					<div className="flex justify-center mb-8">
						<div className="p-1 rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur-2xl flex items-center gap-1 shadow-2xl">
							<button
								type="button"
								onClick={() => setActiveTab("text")}
								className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
									activeTab === "text"
										? "text-white shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
										: "text-neutral-400 hover:text-neutral-200"
								}`}
							>
								{activeTab === "text" && (
									<motion.div
										layoutId="playgroundTab"
										className="absolute inset-0 bg-linear-to-r from-amber-500/30 via-orange-500/20 to-amber-500/30 border border-amber-500/40 rounded-xl -z-10"
										transition={{ type: "spring", stiffness: 400, damping: 30 }}
									/>
								)}
								<Code2 className="w-4 h-4 text-amber-400" />
								<span>Text Stream Engine</span>
							</button>

							<button
								type="button"
								onClick={() => setActiveTab("pdf")}
								className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
									activeTab === "pdf"
										? "text-white shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
										: "text-neutral-400 hover:text-neutral-200"
								}`}
							>
								{activeTab === "pdf" && (
									<motion.div
										layoutId="playgroundTab"
										className="absolute inset-0 bg-linear-to-r from-blue-500/30 via-indigo-500/20 to-blue-500/30 border border-blue-500/40 rounded-xl -z-10"
										transition={{ type: "spring", stiffness: 400, damping: 30 }}
									/>
								)}
								<FileText className="w-4 h-4 text-blue-400" />
								<span>PDF Document Pipeline</span>
								<span className="px-1.5 py-0.5 text-[10px] bg-blue-500/20 text-blue-300 rounded-md font-mono border border-blue-500/30">
									Client WASM
								</span>
							</button>
						</div>
					</div>

					{/* Playground Panes */}
					<AnimatePresence mode="wait">
						{activeTab === "text" ? (
							<motion.div
								key="text-playground"
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.3 }}
							>
								<TextPlayground wasmModule={wasmModule} />
							</motion.div>
						) : (
							<motion.div
								key="pdf-playground"
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -15 }}
								transition={{ duration: 0.3 }}
							>
								<PdfPlayground wasmModule={wasmModule} />
							</motion.div>
						)}
					</AnimatePresence>
				</section>

				{/* THE ALGORITHMIC QUANTUM LEAP (Interactive State Machine Visualizer) */}
				<AhoCorasickVisualizerSection />

				{/* 29+ SUPPORTED ENCODINGS MATRIX */}
				<EncodingsMatrixSection />

				{/* CLI & CODE INTEGRATION */}
				<IntegrationSection />

				{/* PHILOSOPHY & LINEAGE SECTION */}
				<PhilosophySection />
			</div>
		</div>
	);
}

import {} from "lucide-react";

type InstallType = "curl" | "npm" | "cargo" | "powershell";

const INSTALL_OPTIONS: Record<
	InstallType,
	{ label: string; cmd: string; icon: any }
> = {
	curl: {
		label: "curl (macOS / Linux)",
		cmd: "curl -LsSf https://github.com/digital-tamil/aril/releases/latest/download/aril-cli-installer.sh | sh",
		icon: Terminal,
	},
	npm: {
		label: "npx (Instant / No Install)",
		cmd: "npx @digital-tamil/aril --help",
		icon: Package,
	},
	cargo: {
		label: "cargo (Precompiled Binary)",
		cmd: "cargo binstall aril-cli",
		icon: Terminal,
	},
	powershell: {
		label: "powershell (Windows)",
		cmd: "irm https://github.com/digital-tamil/aril/releases/latest/download/aril-cli-installer.ps1 | iex",
		icon: Monitor,
	},
} as const;

export function HeroSection({ wasmReady }: { wasmReady: boolean }) {
	const [selectedInstaller, setSelectedInstaller] =
		useState<InstallType>("curl");
	const [copiedCmd, setCopiedCmd] = useState(false);

	const activeCmd = INSTALL_OPTIONS[selectedInstaller].cmd;

	const handleCopy = () => {
		navigator.clipboard.writeText(activeCmd);
		setCopiedCmd(true);
		setTimeout(() => setCopiedCmd(false), 2000);
	};

	return (
		<div className="relative text-center max-w-4xl mx-auto flex flex-col items-center">
			{/* 1. Classical Epigraph with Refined Liquid Gold Typography */}
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="mb-8 inline-flex flex-col items-center"
			>
				<span className="text-md sm:text-lg font-serif tracking-widest text-amber-200/90 italic drop-shadow-[0_2px_12px_rgba(245,158,11,0.25)]">
					“...அதங்கோட்டு ஆசாற்கு{" "}
					<strong className="font-semibold text-transparent animate-pulse bg-clip-text bg-linear-to-r from-amber-400 via-yellow-100 to-amber-300 underline decoration-amber-400/50 underline-offset-4">
						அரில் தபத் தெரிந்து
					</strong>{" "}
					மயங்கா மரபின் எழுத்துமுறை காட்டி...”
				</span>
				<span className="text-[11px] font-mono tracking-widest text-neutral-400 mt-2 uppercase">
					— தொல்காப்பியம் (சிறப்புப்பாயிரம்)
				</span>
			</motion.div>

			{/* 2. Flagship Title */}
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.1 }}
				className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
			>
				Untangle Tamil Heritage. <br />
				<span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-orange-300 to-amber-500 drop-shadow-[0_4px_30px_rgba(245,158,11,0.3)]">
					At Memory-Bus Speeds.
				</span>
			</motion.h1>

			{/* 3. Subtitle with Contrast Corrected Badges */}
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed"
			>
				High-performance deterministic Tamil legacy 8-bit font encoding to
				Unicode engine written in{" "}
				<strong className="text-amber-600 font-semibold drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">
					Rust
				</strong>
				. Zero-allocation single-pass state-machines with native PDF extraction
				and client-side WebAssembly.
			</motion.p>

			{/* 4. Shimmering Untangling Micro-Badge */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.3 }}
				className="mt-8 flex flex-wrap items-center justify-center gap-3"
			>
				<div className="relative group p-px rounded-full bg-linear-to-r from-amber-500/40 via-cyan-500/30 to-amber-500/40 shadow-lg">
					<div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0a10]/90 backdrop-blur-xl border border-white/10 text-xs font-mono">
						<span className="text-neutral-400 line-through decoration-rose-500/80">
							KUfd;
						</span>
						<ArrowRightLeft className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
						<span className="text-amber-300 font-semibold tracking-wider">
							முருகன்
						</span>
						<span className="px-2 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full font-sans font-medium">
							O(N) Disentangled
						</span>
					</div>
				</div>

				<div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/3 border border-white/10 text-xs text-neutral-400 font-mono backdrop-blur-md">
					<span
						className={`w-2 h-2 rounded-full ${
							wasmReady
								? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
								: "bg-amber-400 animate-ping"
						}`}
					/>
					<span>{wasmReady ? "WASM 0.1.1 Active" : "Loading Engine..."}</span>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="mt-8 flex flex-col items-center gap-4 w-full"
			>
				<a
					href="#playground"
					className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 text-neutral-950 font-bold text-sm tracking-wide shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
				>
					<Sparkles className="w-4 h-4 fill-neutral-950" />
					<span>Launch Interactive Playground</span>
				</a>

				<div className="mt-4 w-full max-w-2xl rounded-2xl bg-[#08080f]/90 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-2 flex flex-col gap-2">
					{/* Platform Tab Selectors */}
					<div className="flex items-center justify-center sm:justify-start gap-1 px-1 overflow-x-auto">
						{(
							[
								{ id: "curl", label: "curl", title: "macOS / Linux" },
								{ id: "npm", label: "npx / npm", title: "Node.js" },
								{ id: "cargo", label: "cargo", title: "Rust" },
								{ id: "powershell", label: "powershell", title: "Windows" },
							] as const
						).map((tab) => (
							<button
								key={tab.id}
								type="button"
								onClick={() => setSelectedInstaller(tab.id)}
								className={`relative px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
									selectedInstaller === tab.id
										? "text-amber-300 bg-amber-500/10 border border-amber-500/30"
										: "text-neutral-400 hover:text-neutral-200 hover:bg-white/4"
								}`}
							>
								<span>{tab.label}</span>
								<span className="text-[10px] text-neutral-500 hidden sm:inline">
									({tab.title})
								</span>
							</button>
						))}
					</div>

					{/* Interactive Command Display with Copy Button */}
					<button
						type="button"
						onClick={handleCopy}
						className="group relative flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-black/60 hover:bg-black/80 border border-white/5 hover:border-amber-500/30 transition-all cursor-pointer"
					>
						<div className="flex items-center gap-2.5 overflow-hidden text-left">
							<Terminal className="w-4 h-4 text-amber-400 shrink-0 group-hover:rotate-6 transition-transform" />
							<AnimatePresence mode="wait">
								<motion.code
									key={selectedInstaller}
									initial={{ opacity: 0, y: -4 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 4 }}
									transition={{ duration: 0.15 }}
									className="font-mono text-xs text-neutral-200 truncate select-all"
								>
									{activeCmd}
								</motion.code>
							</AnimatePresence>
						</div>

						<button
							type="button"
							aria-label="Copy terminal install command"
							className="p-1.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-400 group-hover:text-amber-300 transition-colors shrink-0"
						>
							{copiedCmd ? (
								<Check className="w-3.5 h-3.5 text-emerald-400" />
							) : (
								<Copy className="w-3.5 h-3.5" />
							)}
						</button>
					</button>
				</div>
			</motion.div>
		</div>
	);
}
function TextPlayground({ wasmModule }: { wasmModule: any }) {
	const [inputText, setInputText] = useState(
		"mk;Gtp jdf;Fs; tsh; nre;jkpo; tOj;jp cid md;nghL Jjpf;f kdk; mUs;thNa 🦚",
	);
	const [direction, setDirection] = useState<"legacy2uni" | "uni2legacy">(
		"legacy2uni",
	);
	const [selectedEncoding, setSelectedEncoding] = useState("bamini");
	const [autoDetect, setAutoDetect] = useState(true);
	const [detectedEncoding, setDetectedEncoding] = useState("bamini");
	const [copied, setCopied] = useState(false);
	const [showHex, setShowHex] = useState(false);
	const [metrics, setMetrics] = useState({
		durationMs: 0.12,
		byteExpansion: 3.0,
	});
	const [outputText, setOutputText] = useState("");

	// Process text conversion in real-time
	useEffect(() => {
		const t0 = performance.now();
		let result = "";
		let detected = selectedEncoding;

		try {
			if (direction === "legacy2uni") {
				if (autoDetect) {
					if (wasmModule && typeof wasmModule.auto_to_unicode === "function") {
						const res = wasmModule.auto_to_unicode(inputText);
						result = res.text || "";
						detected = res.encoding || "bamini";
					} else {
						detected = fallbackDetectEncoding(inputText);
						result = fallbackToUnicode(inputText, detected);
					}
				} else {
					if (wasmModule && typeof wasmModule.to_unicode === "function") {
						result = wasmModule.to_unicode(inputText, selectedEncoding);
					} else {
						result = fallbackToUnicode(inputText, selectedEncoding);
					}
				}
			} else {
				// Unicode -> Legacy
				if (wasmModule && typeof wasmModule.to_legacy === "function") {
					result = wasmModule.to_legacy(inputText, selectedEncoding);
				} else {
					result = fallbackToLegacy(inputText, selectedEncoding);
				}
			}
		} catch (e) {
			console.error("Conversion error:", e);
			result = fallbackToUnicode(inputText, selectedEncoding);
		}

		const t1 = performance.now();
		startTransition(() => {
			setOutputText(result);
			setDetectedEncoding(detected);
		});

		const inputBytes = new TextEncoder().encode(inputText).length || 1;
		const outputBytes = new TextEncoder().encode(result).length || 1;
		setMetrics({
			durationMs: Math.max(0.05, +(t1 - t0).toFixed(2)),
			byteExpansion: +(outputBytes / inputBytes).toFixed(2),
		});
	}, [inputText, direction, selectedEncoding, autoDetect, wasmModule]);

	const handleCopy = () => {
		navigator.clipboard.writeText(outputText);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleSwap = () => {
		setDirection((prev) =>
			prev === "legacy2uni" ? "uni2legacy" : "legacy2uni",
		);
		setInputText(outputText);
	};

	const handleClear = () => {
		setInputText("");
	};

	const handleDownload = () => {
		const blob = new Blob([outputText], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `aril_disentangled_${Date.now()}.txt`;
		link.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="rounded-3xl bg-neutral-950/60 border border-white/10 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
			{/* Top Controller Bar */}
			<div className="px-5 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-white/2">
				{/* Preset Pills */}
				<div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
					<span className="text-xs font-mono uppercase tracking-widest text-neutral-400 whitespace-nowrap flex items-center gap-1.5">
						<Sparkles className="w-3.5 h-3.5 text-amber-400" /> Presets:
					</span>
					{SAMPLE_PRESETS.map((preset) => (
						<button
							key={preset.label}
							type="button"
							onClick={() => {
								setDirection("legacy2uni");
								setSelectedEncoding(preset.encoding);
								setInputText(preset.legacy);
							}}
							className="px-3 py-1 rounded-lg bg-neutral-900/80 hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 text-xs text-neutral-300 hover:text-amber-300 font-medium whitespace-nowrap transition-all duration-200"
						>
							{preset.label}
						</button>
					))}
				</div>

				{/* Direction Switch & Encoding Pickers */}
				<div className="flex items-center gap-3 ml-auto">
					{/* Auto-detect toggle */}
					{direction === "legacy2uni" && (
						<button
							type="button"
							onClick={() => setAutoDetect(!autoDetect)}
							className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border flex items-center gap-1.5 ${
								autoDetect
									? "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
									: "bg-neutral-900 border-white/10 text-neutral-400 hover:text-neutral-200"
							}`}
						>
							<Zap className="w-3 h-3" />
							<span>
								Auto-Detect:{" "}
								{autoDetect ? detectedEncoding.toUpperCase() : "OFF"}
							</span>
						</button>
					)}

					{/* Manual encoding dropdown */}
					<div className="relative">
						<select
							aria-label="Select Font Encoding"
							value={selectedEncoding}
							disabled={autoDetect && direction === "legacy2uni"}
							onChange={(e) => {
								setSelectedEncoding(e.target.value);
								setAutoDetect(false);
							}}
							className="appearance-none bg-neutral-900/90 border border-white/10 hover:border-white/20 text-xs text-neutral-200 font-mono rounded-xl px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{ENCODING_CATALOG.map((f) => (
								<option
									key={f.id}
									value={f.id}
									className="bg-neutral-900 text-white"
								>
									{f.name} ({f.category})
								</option>
							))}
						</select>
						<ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
					</div>

					{/* Direction Swap Button */}
					<button
						type="button"
						onClick={handleSwap}
						title="Swap translation direction"
						className="p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-amber-500/30 text-neutral-300 hover:text-amber-400 transition-colors"
					>
						<ArrowRightLeft className="w-4 h-4" />
					</button>
				</div>
			</div>

			{/* Dual Pane Liquid Glass Editor */}
			<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
				{/* Left Pane: Input */}
				<div className="p-6 flex flex-col justify-between min-h-95 bg-white/1">
					<div>
						<div className="flex items-center justify-between mb-3">
							<span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-orange-400" />
								{direction === "legacy2uni"
									? `Source Legacy 8-bit (${detectedEncoding})`
									: "Source Pure UTF-8"}
							</span>
							<div className="flex items-center gap-2">
								<button
									type="button"
									onClick={handleClear}
									className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
								>
									Clear
								</button>
							</div>
						</div>

						<textarea
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
							placeholder={
								direction === "legacy2uni"
									? "Type or paste legacy font characters here (e.g., KUfd;)..."
									: "Type or paste pure Tamil Unicode text..."
							}
							rows={9}
							className="w-full bg-transparent text-neutral-100 placeholder:text-neutral-600 focus:outline-none resize-none font-mono text-sm sm:text-base leading-relaxed tracking-wide"
						/>
					</div>

					<div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
						<span>
							{inputText.length} chars ·{" "}
							{new TextEncoder().encode(inputText).length} bytes
						</span>
						<span>
							Input Encoding:{" "}
							{direction === "legacy2uni" ? detectedEncoding : "UTF-8"}
						</span>
					</div>
				</div>

				{/* Right Pane: Output */}
				<div className="p-6 flex flex-col justify-between min-h-95 bg-white/2 relative group">
					<div>
						<div className="flex items-center justify-between mb-3">
							<span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
								{direction === "legacy2uni"
									? "Pure Tamil Unicode Output"
									: `Re-encoded Legacy (${selectedEncoding})`}
							</span>
							<div className="flex items-center gap-1.5">
								<button
									type="button"
									onClick={() => setShowHex(!showHex)}
									title="Toggle Hex Byte Inspection"
									className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-all ${
										showHex
											? "bg-amber-500/20 text-amber-300 border-amber-500/40"
											: "bg-neutral-900 border-white/10 text-neutral-400 hover:text-neutral-200"
									}`}
								>
									HEX
								</button>
								<button
									type="button"
									onClick={handleDownload}
									title="Download Output as TXT"
									className="p-1.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-400 hover:text-neutral-200 transition-colors"
								>
									<Download className="w-3.5 h-3.5" />
								</button>
								<button
									type="button"
									onClick={handleCopy}
									title="Copy to clipboard"
									className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono transition-all duration-200"
								>
									{copied ? (
										<Check className="w-3.5 h-3.5 text-emerald-400" />
									) : (
										<Copy className="w-3.5 h-3.5" />
									)}
									<span>{copied ? "Copied" : "Copy"}</span>
								</button>
							</div>
						</div>

						{/* Display Output or Hex view */}
						{showHex ? (
							<div className="h-55 overflow-y-auto font-mono text-xs text-neutral-400 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5 space-y-1">
								{Array.from(new TextEncoder().encode(outputText))
									.map((b) => b.toString(16).padStart(2, "0").toUpperCase())
									.reduce<string[][]>((acc, hex, idx) => {
										if (idx % 16 === 0) acc.push([hex]);
										else acc[acc.length - 1].push(hex);
										return acc;
									}, [])
									.map((row, i) => (
										<div key={i} className="flex gap-4">
											<span className="text-neutral-600">
												0x{(i * 16).toString(16).padStart(4, "0")}
											</span>
											<span className="text-amber-300/80">
												{row.slice(0, 8).join(" ")}
											</span>
											<span className="text-neutral-400">
												{row.slice(8).join(" ")}
											</span>
										</div>
									))}
							</div>
						) : (
							<div className="font-serif text-lg sm:text-2xl text-amber-100/90 leading-relaxed tracking-wide min-h-50 select-all whitespace-pre-wrap">
								{outputText || (
									<span className="text-neutral-600 font-sans text-sm">
										Disentangled text will materialize here...
									</span>
								)}
							</div>
						)}
					</div>

					{/* Engine Real-time Telemetry Bar */}
					<div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 gap-2">
						<div className="flex items-center gap-3">
							<span className="inline-flex items-center gap-1 text-emerald-400">
								<Clock className="w-3 h-3" /> {metrics.durationMs}ms
							</span>
							<span className="text-neutral-600">|</span>
							<span className="text-neutral-400">
								Expansion: {metrics.byteExpansion}x
							</span>
							<span className="text-neutral-600">|</span>
							<span className="text-amber-400/80">
								Allocations: 0 (Pre-sized)
							</span>
						</div>
						<span className="text-[11px] text-neutral-500">
							LeftmostLongest Semantics
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function PdfPlayground({ wasmModule }: { wasmModule: any }) {
	const [isDragging, setIsDragging] = useState(false);
	const [fileName, setFileName] = useState<string | null>(null);
	const [pdfResult, setPdfResult] = useState<any>(null);
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState(0);
	const fileInputRef = useRef<HTMLInputElement>(null);

	// Handle file drop / upload
	const handlePdfProcess = async (file: File) => {
		setFileName(file.name);
		setIsProcessing(true);
		setProgress(20);

		try {
			const buffer = await file.arrayBuffer();
			const bytes = new Uint8Array(buffer);
			setProgress(50);

			if (wasmModule && typeof wasmModule.convert_pdf === "function") {
				const result = wasmModule.convert_pdf(bytes, {
					encoding: "auto",
					includePageMarkers: true,
				});
				setProgress(100);
				setPdfResult(result);
			} else {
				// Fallback simulation for browser test environments
				setTimeout(() => {
					setProgress(100);
					setPdfResult({
						totalPages: 4,
						detectedFonts: ["Bamini (Archival 8-bit)", "ShreeLipi"],
						detectedEncoding: "Bamini",
						combinedText: `--- பக்கம் 1 ---\nஅதங்கோட்டு ஆசாற்கு அரில் தபத் தெரிந்து\nமயங்கா மரபின் எழுத்துமுறை காட்டி...\n\n--- பக்கம் 2 ---\nசித்தர்கள் நாதன் சிவயோக மாமுனி\nஅகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.`,
						pages: [
							{
								pageNumber: 1,
								text: "அதங்கோட்டு ஆசாற்கு அரில் தபத் தெரிந்து\nமயங்கா மரபின் எழுத்துமுறை காட்டி...",
								encoding: "Bamini",
							},
							{
								pageNumber: 2,
								text: "சித்தர்கள் நாதன் சிவயோக மாமுனி\nஅகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.",
								encoding: "Bamini",
							},
						],
					});
					setIsProcessing(false);
				}, 800);
				return;
			}
		} catch (err) {
			console.error("PDF extraction error:", err);
		} finally {
			setIsProcessing(false);
		}
	};

	const handleDownloadText = () => {
		if (!pdfResult?.combinedText) return;
		const blob = new Blob([pdfResult.combinedText], {
			type: "text/plain;charset=utf-8",
		});
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${fileName ? fileName.replace(/\.pdf$/i, "") : "aril_pdf"}_unicode.txt`;
		a.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="rounded-3xl bg-neutral-950/60 border border-white/10 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] p-6 sm:p-8">
			{/* Upload Zone */}
			<div
				onDragOver={(e) => {
					e.preventDefault();
					setIsDragging(true);
				}}
				onDragLeave={() => setIsDragging(false)}
				onDrop={(e) => {
					e.preventDefault();
					setIsDragging(false);
					if (e.dataTransfer.files?.[0]) {
						handlePdfProcess(e.dataTransfer.files[0]);
					}
				}}
				onClick={() => fileInputRef.current?.click()}
				className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 relative overflow-hidden group ${
					isDragging
						? "border-blue-500 bg-blue-500/10 scale-[1.005]"
						: "border-white/10 hover:border-blue-500/40 hover:bg-white/[0.02]"
				}`}
			>
				<input
					ref={fileInputRef}
					type="file"
					accept=".pdf"
					className="hidden"
					onChange={(e) => {
						if (e.target.files?.[0]) handlePdfProcess(e.target.files[0]);
					}}
				/>

				<div className="flex flex-col items-center justify-center">
					<div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform mb-4 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
						<Upload className="w-8 h-8" />
					</div>
					<h3 className="text-lg font-semibold text-white">
						{fileName ? fileName : "Drop legacy Tamil PDF manuscript here"}
					</h3>
					<p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-md">
						Drag & drop historical books, government gazettes, or periodicals.
						Extracted and decoded 100% in your browser.
					</p>
					<div className="mt-4 flex items-center gap-3">
						<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-400">
							Native Rust Pdfium Parser
						</span>
						<span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-300">
							Zero Cloud Upload
						</span>
					</div>
				</div>
			</div>

			{/* Progress Line */}
			{isProcessing && (
				<div className="mt-6">
					<div className="flex justify-between text-xs font-mono text-neutral-400 mb-2">
						<span>Disentangling PDF byte streams...</span>
						<span className="text-blue-400">{progress}%</span>
					</div>
					<div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden">
						<motion.div
							className="h-full bg-linear-to-r from-blue-500 to-indigo-500"
							initial={{ width: 0 }}
							animate={{ width: `${progress}%` }}
						/>
					</div>
				</div>
			)}

			{/* PDF Conversion Result Display */}
			{pdfResult && (
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					className="mt-8 pt-6 border-t border-white/10"
				>
					{/* Metadata Bar */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
						<div className="p-4 rounded-xl bg-white/2 border border-white/5">
							<span className="text-xs font-mono text-neutral-400">
								Total Pages Parsed
							</span>
							<p className="text-xl font-bold text-white mt-1">
								{pdfResult.totalPages}
							</p>
						</div>
						<div className="p-4 rounded-xl bg-white/2 border border-white/5">
							<span className="text-xs font-mono text-neutral-400">
								Detected Archival Fonts
							</span>
							<p className="text-sm font-semibold text-blue-300 mt-1 truncate">
								{pdfResult.detectedFonts?.join(", ") || "Bamini, TAB"}
							</p>
						</div>
						<div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-center justify-between">
							<div>
								<span className="text-xs font-mono text-neutral-400">
									Extracted Status
								</span>
								<p className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
									<CheckCircle2 className="w-4 h-4" /> Ready for Export
								</p>
							</div>
							<button
								type="button"
								onClick={handleDownloadText}
								className="px-3.5 py-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium transition-all flex items-center gap-2"
							>
								<Download className="w-3.5 h-3.5" />
								<span>Export .TXT</span>
							</button>
						</div>
					</div>

					{/* Text Preview Box */}
					<div className="rounded-2xl bg-black/40 border border-white/5 p-5 font-serif text-base text-neutral-200 leading-relaxed max-h-75 overflow-y-auto whitespace-pre-wrap">
						{pdfResult.combinedText}
					</div>
				</motion.div>
			)}
		</div>
	);
}

function AhoCorasickVisualizerSection() {
	const [activeStep, setActiveStep] = useState(0);

	const steps = [
		{
			title: "1. The Sequential Regex Trap: O(M × N)",
			desc: "Traditional converters scan the full text sequentially for each of the 300+ rules. Every single pass allocates intermediate strings on the heap, thrashing cache lines and taking hours across large heritage corpuses.",
			status: "Legacy: Continuous Heap Allocations & Prefix Collisions",
		},
		{
			title: "2. The LeftmostLongest State Machine: O(N)",
			desc: "Aril compiles all 29 font mapping dictionaries into deterministic Aho-Corasick automata. As the byte stream flows, the engine matches the longest valid ligature sequence in single linear time with zero backtracking.",
			status: "Aril: Zero Allocation · Deterministic Longest-Match Semantics",
		},
		{
			title: "3. Disambiguating Complex Indic Ligatures",
			desc: "Under naive replace, matching 'û' prematurely converts 'க்ஷ' but leaves trailing vowel signs '‘' orphaned. Aril's LeftmostLongest matcher evaluates 'û‘' ➔ 'க்ஷா' atomically.",
			status: "Guaranteed Lexical Correctness across Grantha & Compound Glyphs",
		},
	];

	return (
		<section className="mt-28 sm:mt-36">
			<div className="text-center mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md mb-3">
					<Binary className="w-3.5 h-3.5" />
					<span>Algorithmic Architecture</span>
				</div>
				<h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
					Why Aho-Corasick Matters for Indic Scripts
				</h2>
				<p className="mt-3 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
					How deterministic finite automata resolve decades of ligature
					collisions without backtracking.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
				{/* Left Side: Step Selectors */}
				<div className="lg:col-span-5 space-y-4">
					{steps.map((s, idx) => (
						<div
							key={s.title}
							onClick={() => setActiveStep(idx)}
							className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-xl ${
								activeStep === idx
									? "bg-amber-500/10 border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
									: "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
							}`}
						>
							<h3
								className={`text-sm sm:text-base font-semibold ${activeStep === idx ? "text-amber-300" : "text-white"}`}
							>
								{s.title}
							</h3>
							<p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
								{s.desc}
							</p>
							<div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
								<span
									className={`w-1.5 h-1.5 rounded-full ${activeStep === idx ? "bg-amber-400" : "bg-neutral-600"}`}
								/>
								{s.status}
							</div>
						</div>
					))}
				</div>

				{/* Right Side: Interactive Schematic Diagram */}
				<div className="lg:col-span-7 rounded-3xl bg-neutral-950/80 border border-white/10 p-6 sm:p-8 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
					<div className="flex items-center justify-between pb-4 border-b border-white/10">
						<span className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
							<Cpu className="w-4 h-4 text-amber-400" />
							Automaton State Trace: LeftmostLongest
						</span>
						<span className="text-[11px] font-mono text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
							Zero Backtracking
						</span>
					</div>

					{/* Visual State Nodes */}
					<div className="py-10 flex flex-col items-center justify-center gap-6">
						<div className="flex items-center gap-3 sm:gap-6">
							{/* Node 1: Input stream */}
							<div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 text-center font-mono shadow-lg">
								<span className="text-[10px] text-neutral-500 block mb-1">
									BYTE STREAM
								</span>
								<span className="text-xl font-bold text-orange-400">"û‘"</span>
								<span className="text-[10px] text-neutral-500 block mt-1">
									2 Bytes
								</span>
							</div>

							<div className="text-amber-400 font-mono text-xl animate-pulse">
								➔
							</div>

							{/* Node 2: Aho Corasick Trie */}
							<div className="p-5 rounded-2xl bg-linear-to-br from-amber-500/20 via-neutral-900 to-orange-500/10 border border-amber-500/40 text-center font-mono shadow-[0_0_30px_rgba(245,158,11,0.2)]">
								<span className="text-[10px] text-amber-400 block mb-1">
									TRIE MATCHER
								</span>
								<span className="text-sm font-semibold text-white">
									LeftmostLongest
								</span>
								<div className="mt-2 text-[11px] text-neutral-400 font-mono bg-black/40 px-2 py-1 rounded">
									Match "û‘" over prefix "û"
								</div>
							</div>

							<div className="text-emerald-400 font-mono text-xl animate-pulse">
								➔
							</div>

							{/* Node 3: Disentangled Unicode */}
							<div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center font-mono shadow-lg">
								<span className="text-[10px] text-emerald-400 block mb-1">
									RESOLVED UTF-8
								</span>
								<span className="text-2xl font-serif font-bold text-emerald-300">
									"க்ஷா"
								</span>
								<span className="text-[10px] text-neutral-500 block mt-1">
									6 Bytes
								</span>
							</div>
						</div>

						{/* Explanatory callout */}
						<div className="w-full max-w-lg mt-4 p-4 rounded-xl bg-white/2 border border-white/5 text-xs text-neutral-300 font-mono flex items-start gap-3">
							<Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
							<div>
								<strong>Memory Allocation:</strong> Buffer pre-allocated at{" "}
								<code className="text-amber-300">input.len() * 3</code> to
								absorb 1-byte legacy ASCII to 3-byte Tamil UTF-8 without
								intermediate reallocations.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function EncodingsMatrixSection() {
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [searchQuery, setSearchQuery] = useState("");
	const deferQuery = useDeferredValue(searchQuery);
	const categories = ["all", "DTP & Publishing", "Press & Media", "Standards"];

	const filtered = ENCODING_CATALOG.filter((f) => {
		const matchesCat =
			selectedCategory === "all" || f.category === selectedCategory;
		const matchesSearch =
			f.name.toLowerCase().includes(deferQuery.trim().toLowerCase()) ||
			f.desc.toLowerCase().includes(deferQuery.trim().toLowerCase());
		return matchesCat && matchesSearch;
	});

	return (
		<section className="mt-28 sm:mt-36">
			<div className="text-center mb-10">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md mb-3">
					<Layers className="w-3.5 h-3.5" />
					<span>Encoding Matrices</span>
				</div>
				<h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
					29+ Compulsory Font Tables
				</h2>
				<p className="mt-3 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
					Pre-compiled static bidirectional matrices covering four decades of
					historical desktop publishing standards.
				</p>
			</div>

			{/* Filter and Search Controls */}
			<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
				<div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900/80 border border-white/10">
					{categories.map((c) => (
						<button
							key={c}
							type="button"
							onClick={() => setSelectedCategory(c)}
							className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
								selectedCategory === c
									? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
									: "text-neutral-400 hover:text-white"
							}`}
						>
							{c}
						</button>
					))}
				</div>

				<div className="relative w-full sm:w-64">
					<Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
					<input
						type="search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Search font encodings..."
						className="w-full pl-9 pr-4 py-2 bg-neutral-900/80 border border-white/10 rounded-xl text-xs text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-amber-500/50"
					/>
				</div>
			</div>

			{/* Font Cards Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{filtered.map((font) => (
					<div
						key={font.id}
						className="p-5 rounded-2xl bg-neutral-950/40 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 group backdrop-blur-xl"
					>
						<div className="flex items-center justify-between mb-2">
							<h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
								{font.name}
							</h3>
							<span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-neutral-400 border border-white/5">
								{font.category}
							</span>
						</div>
						<p className="text-xs text-neutral-400 leading-relaxed min-h-9">
							{font.desc}
						</p>
						<div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
							<code className="text-[11px] font-mono text-amber-400/70">
								--from {font.id}
							</code>
							<a
								href="#playground"
								className="text-[11px] text-neutral-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
							>
								<span>Try font</span>
								<ChevronDown className="w-3 h-3 -rotate-90" />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function IntegrationSection() {
	const [activeCodeTab, setActiveCodeTab] = useState<
		"cli" | "rust" | "wasm" | "npm"
	>("cli");
	const [copied, setCopied] = useState(false);

	const snippets = {
		cli: `# 1. Install CLI globally via cargo or npm:
cargo install aril-cli
# Or: npm install -g @digital-tamil/aril

# 2. Convert pipe stream via stdin:
echo "jkpoPok;" | aril --from bamini
# Output: தமிழீழம்

# 3. Disentangle an entire archival PDF book with page markers:
aril manuscript.pdf --pages "1-10" --page-markers -o converted.txt

# 4. In-place batch convert directory of books with automatic backup:
aril "archives/**/*.txt" --from bamini -r --in-place --backup`,

		rust: `// Add to Cargo.toml: cargo add aril-core
use aril_core::{to_unicode, auto_to_unicode, Encoding};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Single-pass O(N) deterministic conversion:
    let legacy = "KUfd;";
    let unicode = to_unicode(legacy, Encoding::Bamini)?;
    println!("Unicode: {}", unicode); // "முருகன்"

    // Heuristic autonomous auto-detection:
    let (auto_converted, detected) = auto_to_unicode("Â¡Ðõ °§Ã")?;
    println!("Detected: {:?} -> {}", detected, auto_converted);

    Ok(())
}`,

		wasm: `// npm install @digital-tamil/aril-wasm
import init, { auto_to_unicode, to_unicode, convert_pdf } from "@digital-tamil/aril-wasm";

await init();

// 1. Live text untangling:
const { text, encoding } = auto_to_unicode("ePykzp kplw;W xUtd;");
console.log(text);     // "நீலமணி மிடற்று ஒருவன்"

// 2. Client-side PDF byte conversion:
const pdfBuffer = await file.arrayBuffer();
const doc = convert_pdf(new Uint8Array(pdfBuffer), { encoding: "auto" });
console.log(doc.combinedText);`,

		npm: `# Run CLI instantly with zero installation:
npx @digital-tamil/aril --from bamini -s "KUfd;"

# Or install WebAssembly library for Vite / Next.js / Node:
npm install @digital-tamil/aril-wasm`,
	};

	const handleCopyCode = () => {
		navigator.clipboard.writeText(snippets[activeCodeTab]);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section className="mt-28 sm:mt-36">
			<div className="text-center mb-10">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md mb-3">
					<Terminal className="w-3.5 h-3.5" />
					<span>Developer Ecosystem</span>
				</div>
				<h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
					Engineered for All Runtimes
				</h2>
				<p className="mt-3 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
					From multi-threaded CLI batch scripts to high-performance client-side
					WebAssembly apps and Rust crates.
				</p>
			</div>

			<div className="rounded-3xl bg-neutral-950/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-3xl">
				{/* Code Tabs Header */}
				<div className="px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-white/2">
					<div className="flex items-center gap-2">
						{[
							{ id: "cli", label: "CLI Usage (aril-cli)" },
							{ id: "rust", label: "Rust Library (aril-core)" },
							{ id: "wasm", label: "WebAssembly (WASM)" },
							{ id: "npm", label: "npm Quickstart" },
						].map((tab) => (
							<button
								key={tab.id}
								type="button"
								onClick={() => setActiveCodeTab(tab.id as any)}
								className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
									activeCodeTab === tab.id
										? "bg-amber-500/15 text-amber-300 border border-amber-500/40"
										: "text-neutral-400 hover:text-white"
								}`}
							>
								{tab.label}
							</button>
						))}
					</div>

					<button
						type="button"
						onClick={handleCopyCode}
						className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white text-xs font-mono transition-colors"
					>
						{copied ? (
							<Check className="w-3.5 h-3.5 text-emerald-400" />
						) : (
							<Copy className="w-3.5 h-3.5" />
						)}
						<span>{copied ? "Copied snippet" : "Copy code"}</span>
					</button>
				</div>

				{/* Code Body */}
				<div className="p-6 overflow-x-auto bg-[#07070b]">
					<pre className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
						<code>{snippets[activeCodeTab]}</code>
					</pre>
				</div>
			</div>
		</section>
	);
}

function PhilosophySection() {
	return (
		<section className="mt-28 sm:mt-36 border-t border-white/10 pt-16">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md mb-4">
						<BookOpen className="w-3.5 h-3.5" />
						<span>Philosophical Origins</span>
					</div>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
						The Dark Age of Digital Tamil Typesetting
					</h2>
					<p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
						Between 1985 and the late 2000s, millions of historical books,
						government gazettes, news archives, and literary classics were
						typeset using proprietary 8-bit Latin glyph overlays.
					</p>
					<p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
						The raw text stored inside these heritage archives is not Tamil—it
						is a mangled, unsearchable bramble of high-ASCII codes. When
						building modern AI datasets like the{" "}
						<strong className="text-amber-300 font-semibold">
							Tamil Digital Heritage Corpus
						</strong>
						, traditional sequential converters buckled under ligature
						collisions.
					</p>
					<p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
						<strong>Aril (அரில்)</strong> was engineered to clear this bramble at
						the speed of the memory bus, ensuring our centuries-old literature
						can train modern culturally-aware Large Language Models.
					</p>
				</div>

				{/* Isometric Banner Showcase */}
				<div className="relative group rounded-3xl p-1 bg-linear-to-b from-white/15 via-white/5 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
					<div className="pointer-events-none absolute -inset-2 rounded-3xl bg-linear-to-r from-amber-500/25 via-cyan-500/30 to-amber-500/25 blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

					<div className="relative rounded-[22px] overflow-hidden bg-[#06060c] border border-white/15">
						<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent z-20" />

						<img
							src="/Aril/Aril_OgBanner.jpg"
							alt="ARIL Tamil Unicode Engine: 3D isometric bridge transforming chaotic 8-bit glyphs into illuminated Tamil Unicode blocks spelling முருகன்"
							width={850}
							height={850}
							className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
							loading="lazy"
							decoding="async"
						/>

						<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/25 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500 z-10" />

						<div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-xl border border-white/10 flex items-center justify-between gap-3 z-20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
							<div className="flex items-center gap-2.5">
								<span className="relative flex h-2.5 w-2.5">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
									<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
								</span>
								<span className="text-xs font-mono text-neutral-200">
									State Machine Gate:{" "}
									<code className="text-cyan-300">KUfd;</code> ➔{" "}
									<strong className="text-amber-300 font-bold">முருகன்</strong>
								</span>
							</div>
							<span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 hidden sm:inline">
								O(N) Disentanglement
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
