'use client';

import Link from "next/link";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 }
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	}
};

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<motion.main
				initial="initial"
				animate="animate"
				variants={stagger}
				key="home"
			>
				<motion.div 
					className="flex items-center justify-between mb-10"
					variants={fadeIn}
				>
					<h1 className="text-4xl font-extralight">Present</h1>
					<motion.a
						href="https://drive.google.com/file/d/13J9epYZ-rZJ55sgDQTtms7o1fVHhiGjp/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center space-x-2 px-4 py-2 border border-neutral-700 rounded-lg text-neutral-200 hover:bg-neutral-800/50 transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
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
					</motion.a>
				</motion.div>
				<motion.p 
					className="text-lg font-light text-zinc-400"
					variants={fadeIn}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
					qui voluptates optio aliquam nihil, quia cum veritatis,
					voluptatibus autem beatae harum itaque doloribus. Quam autem.
				</motion.p>
				<motion.p 
					className="text-lg font-light text-zinc-400"
					variants={fadeIn}
				>
					you can find me on{" "}
					<motion.span
						whileHover={{ scale: 1.05 }}
						style={{ display: 'inline-block' }}
					>
						<Link
							href={"https://www.linkedin.com/in/amanaswal/"}
							target="_blank"
							className="underline text-neutral-200 hover:text-blue-300"
						>
							Linkedin
						</Link>
					</motion.span>
					,{" "}
					<motion.span
						whileHover={{ scale: 1.05 }}
						style={{ display: 'inline-block' }}
					>
						<Link
							href={"https://github.com/amanaswal"}
							target="_blank"
							className="underline text-neutral-200 hover:text-yellow-200"
						>
							Github
						</Link>
					</motion.span>
					,{" "}
					<motion.span
						whileHover={{ scale: 1.05 }}
						style={{ display: 'inline-block' }}
					>
						<Link
							href={"https://www.instagram.com/amanaswa1/"}
							target="_blank"
							className="underline text-neutral-200 hover:text-pink-300"
						>
							Instagram
						</Link>
					</motion.span>{" "}
					or{" "}
					<motion.span
						whileHover={{ scale: 1.05 }}
						style={{ display: 'inline-block' }}
					>
						<Link
							href={
								"https://www.youtube.com/channel/UCrcW8omN6QT9gNmzc-LLQRw"
							}
							target="_blank"
							className="underline text-neutral-200 hover:text-red-400"
						>
							Youtube
						</Link>
					</motion.span>
				</motion.p>
			</motion.main>
			<Skills />
			{/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<h1>footer</h1>
			</footer> */}
		</div>
	);
}
