import { motion } from "motion/react";
import { Database, Search, Library, FileText, Globe } from "lucide-react";

export default function DatasetDetails() {
	return (
		<div className="py-20 px-12 max-w-6xl mx-auto relative">
			<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="flex items-center gap-6 mb-12">
					<div className="p-4 text-[10px] px-3 py-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded uppercase tracking-widest">
						Hugging Face Dataset
					</div>
					<div>
						<h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
							Digital Heritage Corpus
						</h1>
						<p className="text-xs uppercase tracking-[0.3em] opacity-40 mt-3 font-medium">
							by Sanjaiyan
						</p>
					</div>
				</div>

				<div className="prose prose-invert prose-orange max-w-none mb-20">
					<p className="text-lg leading-relaxed opacity-70">
						We’re on a journey to advance and democratize artificial
						intelligence through open source and open science. This dataset
						forms the crucial foundation for building robust, culturally-aware
						Large Language Models (LLMs) for the Tamil language.
					</p>
				</div>

				<h2 className="text-sm uppercase tracking-[0.4em] opacity-50 mb-8 border-l border-orange-500 pl-4 py-1">
					Corpus Structure
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
					{[
						{
							icon: Globe,
							title: "General Knowledge & Academics",
							text: "Articles, educational resources, and modern science.",
						},
						{
							icon: Library,
							title: "Literature",
							text: "Classical texts like Pathinenkeelkanakku.",
						},
						{
							icon: Search,
							title: "History",
							text: "Historical records, archaeology, and historical essays.",
						},
						{
							icon: FileText,
							title: "Songs & Hymns",
							text: "Bhaktic literature, pathigams, and lyrical archives.",
						},
					].map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4 group hover:border-orange-500/30 transition-colors"
						>
							<div className="flex justify-between items-center w-full">
								<item.icon className="w-5 h-5 opacity-60 text-orange-400" />
								<span className="text-[10px] font-mono opacity-30">
									0{i + 1}/04
								</span>
							</div>
							<div>
								<h3 className="text-xl font-medium mb-3">{item.title}</h3>
								<p className="text-xs opacity-50 leading-relaxed">
									{item.text}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				<h2 className="text-sm uppercase tracking-[0.4em] opacity-50 mb-8 border-l border-orange-500 pl-4 py-1">
					Data Pipeline Workflow
				</h2>
				<div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-16 backdrop-blur-md relative overflow-hidden">
					<div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
						<span className="text-[300px] font-serif leading-none">தரவு</span>
					</div>

					<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4"
						>
							<div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
								<Library className="w-6 h-6 opacity-60" />
							</div>
							<div>
								<h4 className="text-sm uppercase tracking-widest text-orange-400">
									Raw Sourcing
								</h4>
								<p className="text-[10px] uppercase opacity-40 mt-3 font-medium">
									Legacy texts scraping
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ rotate: 0 }}
							animate={{ rotate: 360 }}
							transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
							className="hidden md:block w-8 h-8 border border-t-orange-500 border-white/10 rounded-full flex-shrink-0"
						/>

						<motion.div
							whileHover={{ scale: 1.05 }}
							className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4"
						>
							<div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
								<FileText className="w-6 h-6 opacity-60" />
							</div>
							<div>
								<h4 className="text-sm uppercase tracking-widest text-orange-400">
									Normalization
								</h4>
								<p className="text-[10px] uppercase opacity-40 mt-3 font-medium">
									OCR errors & Unicode
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ rotate: 0 }}
							animate={{ rotate: 360 }}
							transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
							className="hidden md:block w-8 h-8 border border-t-orange-500 border-white/10 rounded-full flex-shrink-0"
						/>

						<motion.div
							whileHover={{ scale: 1.05 }}
							className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4"
						>
							<div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
								<Database className="w-6 h-6 opacity-60" />
							</div>
							<div>
								<h4 className="text-sm uppercase tracking-widest text-orange-400">
									Hugging Face API
								</h4>
								<p className="text-[10px] uppercase opacity-40 mt-3 font-medium">
									Dataset release
								</p>
							</div>
						</motion.div>
					</div>
				</div>

				<div className="mt-20 flex justify-center">
					<a
						href="https://huggingface.co/datasets/Sanjaiyan/Tamil-Digital-Heritage-Corpus"
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-3 px-8 py-4 border border-orange-500/50 rounded-full hover:bg-orange-500/10 text-orange-400 transition-all text-xs uppercase tracking-[0.2em]"
					>
						Access on Hugging Face
						<Globe className="w-4 h-4" />
					</a>
				</div>
			</motion.div>
		</div>
	);
}
