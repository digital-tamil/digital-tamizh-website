export function playHapticSound(type: "click" | "success" | "ancient-bell") {
	if (typeof window === "undefined") return;
	try {
		const ctx = new (
			window.AudioContext || (window as any).webkitAudioContext
		)();
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();

		osc.connect(gain);
		gain.connect(ctx.destination);

		if (type === "click") {
			osc.type = "sine";
			osc.frequency.setValueAtTime(800, ctx.currentTime);
			osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);
			gain.gain.setValueAtTime(0.08, ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
			osc.start();
			osc.stop(ctx.currentTime + 0.04);
		} else if (type === "ancient-bell") {
			// Harmonic resonance inspired by temple bells
			osc.type = "triangle";
			osc.frequency.setValueAtTime(528, ctx.currentTime); // Solfeggio frequency
			gain.gain.setValueAtTime(0.12, ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
			osc.start();
			osc.stop(ctx.currentTime + 1.2);
		} else if (type === "success") {
			osc.type = "sine";
			osc.frequency.setValueAtTime(440, ctx.currentTime);
			osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08);
			gain.gain.setValueAtTime(0.06, ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
			osc.start();
			osc.stop(ctx.currentTime + 0.25);
		}
	} catch (_) {}
}
