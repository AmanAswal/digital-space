import dynamic from "next/dynamic";

// Load Skills component dynamically
const Skills = dynamic(() => import("@/components/Skills"), {
	ssr: true,
	loading: () => (
		<div className="py-12 animate-pulse">
			<div className="h-8 w-48 bg-neutral-800 rounded mb-8"></div>
			<div className="space-y-4">
				<div className="h-24 bg-neutral-800 rounded"></div>
				<div className="h-24 bg-neutral-800 rounded"></div>
			</div>
		</div>
	),
});

// Separate client component for animations
const AnimatedLink = dynamic(() => import("@/components/AnimatedLink"), {
	ssr: true,
});

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<div>
				<div className="flex items-center justify-between mb-10">
					<h1 className="text-4xl font-extralight">Present</h1>
					<a
						href="https://drive.google.com/file/d/13J9epYZ-rZJ55sgDQTtms7o1fVHhiGjp/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center space-x-2 px-4 py-2 border border-neutral-700 rounded-lg text-neutral-200 hover:bg-neutral-800/50 transition-colors"
					>
						<span>View Resume</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-4 h-4"
						>
							<path
								fillRule="evenodd"
								d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
								clipRule="evenodd"
							/>
							<path
								fillRule="evenodd"
								d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
				<p className="text-lg font-light text-zinc-400">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
					qui voluptates optio aliquam nihil, quia cum veritatis,
					voluptatibus autem beatae harum itaque doloribus. Quam autem.
				</p>
				<p className="text-lg font-light text-zinc-400">
					you can find me on{" "}
					<AnimatedLink
						href="https://www.linkedin.com/in/amanaswal/"
						label="Linkedin"
						className="text-neutral-200 hover:text-blue-300"
					/>
					,{" "}
					<AnimatedLink
						href="https://github.com/amanaswal"
						label="Github"
						className="text-neutral-200 hover:text-yellow-200"
					/>
					,{" "}
					<AnimatedLink
						href="https://www.instagram.com/amanaswa1/"
						label="Instagram"
						className="text-neutral-200 hover:text-pink-300"
					/>{" "}
					or{" "}
					<AnimatedLink
						href="https://www.youtube.com/channel/UCrcW8omN6QT9gNmzc-LLQRw"
						label="Youtube"
						className="text-neutral-200 hover:text-red-400"
					/>
				</p>
			</div>
			<Skills />
		</div>
	);
}
