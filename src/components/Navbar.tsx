"use client";

// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useState } from 'react';

const Navbar = () => {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const navLinks = [
		{ href: "/", label: "home" },
		{ href: "/writings", label: "writings" },
		{ href: "/projects", label: "projects" },
		{ href: "/experience", label: "experience" },
	];

	return (
		<nav className="sm:px-6 lg:mt-8 lg:px-0 lg:pt-4">
			<div className="flex items-center justify-between space-x-10">
				{/* Logo */}
				<Link href="/">
					<h1 className="text-5xl font-extralight">Aman</h1>
					{/* <Image
                src="/logo.svg"
                alt="Digital Space Logo"
                width={34}
                height={34}
                className="w-8 h-8"
                priority
              /> */}
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:block">
					<div className="flex items-center space-x-4 lg:space-x-4">
						{navLinks.map((link) => {
							const isActive = pathname === link.href;
							return (
								<Link
									key={link.label}
									href={link.href}
									className={`px-1 lg:px-1 py-2 text-lg transition-colors ${
										isActive
											? "text-neutral-100 font-medium"
											: "text-neutral-400 hover:text-neutral-200"
									}`}
								>
									{link.label}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
