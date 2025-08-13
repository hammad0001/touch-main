'use client';
import { motion } from 'framer-motion';
import React from 'react';

const HeroU = () => {
	const words = ['YOUR', 'TRUSTED', 'AUTO', 'DETAILING']; // Split heading into words

	// Variants for word animation
	const wordVariants = {
		hidden: { rotateX: 90, opacity: 0 },
		visible: (i) => ({
			rotateX: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				delay: i * 0.3, // Stagger animation for each word
				ease: 'easeOut',
			},
		}),
	};

	return (
		<div
			className="relative h-screen bg-cover bg-center"
			style={{ backgroundImage: 'url("/images/HERO-BG.jpg")' }}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black opacity-70"></div>

			{/* Text Content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
				<h1 className="text-4xl md:text-6xl font-bold flex flex-wrap justify-center">
					{words.map((word, i) => (
						<motion.span
							key={i}
							className="inline-block mx-2 text-[#2A82AD]"
							custom={i} // Pass index for staggered animation
							initial="hidden"
							animate="visible"
							variants={wordVariants}
						>
							{word}
						</motion.span>
					))}
				</h1>

				<p className="text-4xl md:text-6xl font-bold mt-4">
					SERVICES IN TRACY, CA
				</p>

				<a href="/about-us">
					<button className="mt-6 px-6 py-3 bg-[#2A82AD] text-white font-semibold rounded-md hover:bg-blue-600 transition">
						Learn More
					</button>
				</a>
			</div>
		</div>
	);
};

export default HeroU;
