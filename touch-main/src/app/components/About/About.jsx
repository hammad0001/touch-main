'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
const About = () => {
	const imageVariants = {
		hidden: { opacity: 0, x: '-100%' },
		visible: { opacity: 1, x: '0%', transition: { duration: 1 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, x: '-100%' },
		visible: {
			opacity: 1,
			x: '0%',
			transition: { duration: 1, delay: 1 }, // Delay the second card swipe
		},
	};

	return (
		<div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-8 md:p-16 pb-32 bg-white">
			{/* Image Section */}
			<div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
				{/* Main Image */}
				<motion.div
					className="w-56 h-64 md:w-64 md:h-72 rounded-lg overflow-hidden shadow-lg"
					initial="hidden"
					animate="visible"
					variants={imageVariants}
				>
					<img
						src="/images/3.jpg"
						alt="Car Detailing"
						className="w-full h-full object-cover rounded-lg"
					/>
				</motion.div>

				{/* Card Replacing the Second Image */}
				<motion.div
					className="w-56 h-56 md:w-64 md:h-64 rounded-lg shadow-lg -mt-[-10rem] -ml-[2rem] md:-mt-[-14rem] md:-ml-[5rem] flex items-center justify-center bg-[#2A82AD] text-white text-center p-4"
					initial="hidden"
					animate="visible"
					variants={cardVariants}
				>
					<div>
						<h3 className="text-xl font-bold mb-2">Our Mission</h3>
						<p className="text-sm leading-relaxed">
							We maintain your vehicle’s showroom shine, preserving that “just
							detailed” look by expert Paint Correction Contractors in Tracy,
							CA.
						</p>
					</div>
				</motion.div>
			</div>

			{/* Text Section */}
			<div className="w-full md:w-1/2 text-center md:text-left">
				<h4 className="text-sm font-semibold text-[#2A82AD] uppercase mb-2">
					About Us
				</h4>
				<h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-4">
					Enhance Your Vehicle’s Look by Excellent Car Detailing!
				</h2>
				<p className="text-gray-600 leading-relaxed mb-4">
					Are you looking for auto detailing services near tracy? Welcome to
					Touch and Shine Auto Detail where the enthusiasm of cars and
					commitment to remarkable services is successful in presenting an
					unmatched customer experience. The care and attention you should
					expect should be the best and that is what we are very proud of in
					making sure we give the best to your vehicle. Whether you want to
					refinish your car to restore its gleam or to build a protective
					finish, our expert staff would stop at nothing so that the results are
					excellent. The core of our activities is passion for excellence based
					on our expertise regarding automobiles and interest to surpass your
					expectations. Leave your pride in the hands of our expert team as they
					will treat your car like our own.
					<br /> <br /> We are the answer to your query: best auto detailing
					near me. Along with our detail work and service you get our{' '}
					<Link
						href="/services/ceramic-coating"
						className="text-[#2A82AD] font-semibold"
					>
						best ceramic coating for cars.
					</Link>{' '}
					Touch and Shine Auto Detail is a company with a vision that the car
					you love so much should not be washed, but it needs a skilled person
					to keep it clean and attractive in order to serve you many years to
					come. Coupled with our focus on quality, convenience and satisfaction
					to customers, we also ensure that car owners in Tracy and environs can
					also easily get the best in car care.
				</p>
			</div>
		</div>
	);
};

export default About;
