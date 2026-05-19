import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function Navigation() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const [isTop, setIsTop] = useState(true);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious() ?? 0;
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
		setIsTop(latest <= 50);
	});

	return (
		<div className=" min-h-96 bg-[#080808] text-[#e0e0e0] font-sans selection:bg-orange-500/30">
			<motion.nav
				variants={{
					visible: { y: 0 },
					hidden: { y: "-100%" },
				}}
				animate={hidden ? "hidden" : "visible"}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
					isTop
						? "bg-transparent"
						: "bg-[#080808]/80 backdrop-blur-md border-b border-white/5"
				}`}
			>
				<div className="max-w-7xl mx-auto px-12 py-8 flex items-center justify-between">
					<a href="/" className="flex flex-col group">
						<span className="text-xs uppercase tracking-[0.4em] opacity-50 mb-1 group-hover:opacity-100 transition-opacity">
							Project
						</span>
						<span className="text-lg font-light tracking-widest">
							DIGITAL TAMIL{" "}
							<span className="text-orange-500 group-hover:rotate-12 transition-transform inline-block">
								.
							</span>
						</span>
					</a>
				</div>
			</motion.nav>
		</div>
	);
}
