import {
	motion,
	useScroll,
	useMotionValueEvent,
	AnimatePresence,
} from "motion/react";
import { useState, useEffect } from "react";
import {
	Terminal as Github,
	Menu,
	X,
	ExternalLink,
	ArrowRight,
} from "lucide-react";

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
		badge: "1.43k Rows",
	},
	{
		name: "Simple OCR",
		href: "/tamil-simple-ocr",
		badge: "Rust",
	},
	{
		name: "Sandhi Engine",
		href: "https://github.com/digital-tamil/thiruppugazh-sandhi-rs",
		external: true,
	},
];

export default function Navigation() {
	const { scrollY } = useScroll();

	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [currentPath, setCurrentPath] = useState("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setCurrentPath(window.location.pathname);
		}
	}, []);

	useMotionValueEvent(scrollY, "change", (latest) => {
		setIsScrolled(latest > 20);
	});

	return (
		<>
			<motion.header className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
				<nav
					aria-label="Main Navigation"
					className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
						isScrolled
							? "bg-[#07070b]/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.65)]"
							: "bg-[#07070b]/40 backdrop-blur-md border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
					}`}
				>
					{/* Brand Identity / Home Anchor */}
					<a
						href="/"
						className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-full"
						aria-label="Digital Tamizh Home"
					>
						<div className="relative w-8 h-8 rounded-full bg-linear-to-tr from-orange-600 via-amber-500 to-yellow-400 p-px shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
							<div className="w-full h-full bg-[#08080d] rounded-full flex items-center justify-center">
								<span className="text-amber-400 font-bold text-sm select-none group-hover:scale-110 transition-transform">
									அ
								</span>
							</div>
						</div>
						<div className="flex flex-col">
							<span className="text-xs sm:text-[13px] font-semibold tracking-wider text-neutral-100 flex items-center gap-1.5 leading-tight">
								DIGITAL TAMIZH
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
							</span>
							<span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-neutral-400 uppercase leading-none">
								Rust · Parallel AI
							</span>
						</div>
					</a>

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex items-center gap-1 bg-white/3 p-1 rounded-full border border-white/6">
						{NAV_LINKS.map((item) => {
							const isActive = currentPath === item.href;
							return (
								<a
									key={item.name}
									href={item.href}
									target={item.external ? "_blank" : undefined}
									rel={item.external ? "noopener noreferrer" : undefined}
									className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
										isActive
											? "text-amber-300 bg-amber-500/10 border border-amber-500/30"
											: "text-neutral-400 hover:text-neutral-100 hover:bg-white/6"
									}`}
								>
									<span>{item.name}</span>
									{item.badge && (
										<span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-white/8 text-neutral-300">
											{item.badge}
										</span>
									)}
									{item.external && (
										<ExternalLink className="w-3 h-3 opacity-60" />
									)}
								</a>
							);
						})}
					</div>

					{/* Right Section: GitHub & Mobile Toggle */}
					<div className="flex items-center gap-2">
						<a
							href="https://github.com/digital-tamil"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-semibold shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
						>
							<Github className="w-3.5 h-3.5" />
							<span className="hidden sm:inline">GitHub</span>
						</a>

						{/* Mobile Hamburger Trigger */}
						<button
							onClick={() => setMobileMenuOpen((prev) => !prev)}
							aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={mobileMenuOpen}
							className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
						>
							{mobileMenuOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</button>
					</div>
				</nav>
			</motion.header>

			{/* Mobile Drawer Overlay */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -15, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -15, scale: 0.98 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="fixed top-20 inset-x-4 z-40 md:hidden pointer-events-auto"
					>
						<div className="p-5 rounded-2xl bg-[#09090f]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-2">
							<span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-3 pb-1">
								Ecosystem Navigation
							</span>

							{NAV_LINKS.map((item) => {
								const isActive = currentPath === item.href;
								return (
									<a
										key={item.name}
										href={item.href}
										target={item.external ? "_blank" : undefined}
										rel={item.external ? "noopener noreferrer" : undefined}
										onClick={() => setMobileMenuOpen(false)}
										className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors ${
											isActive
												? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
												: "text-neutral-300 hover:bg-white/5 hover:text-white"
										}`}
									>
										<div className="flex items-center gap-2">
											<span>{item.name}</span>
											{item.badge && (
												<span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/8 text-neutral-400">
													{item.badge}
												</span>
											)}
										</div>
										{item.external ? (
											<ExternalLink className="w-4 h-4 text-neutral-500" />
										) : (
											<ArrowRight className="w-4 h-4 text-neutral-500" />
										)}
									</a>
								);
							})}

							<div className="mt-2 pt-3 border-t border-white/5 flex items-center justify-between px-3 text-[11px] font-mono text-neutral-500">
								<span>Ecosystem Status</span>
								<span className="text-emerald-400 flex items-center gap-1.5">
									<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
									All Nodes Active
								</span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
