'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Install react-icons if you don't have it

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false); // NEW for mobile toggle
	const [serviceAreasOpen, setServiceAreasOpen] = useState(false); // NEW for service areas toggle
	const [lathropOpen, setLathropOpen] = useState(false); // NEW for Lathrop sub-menu
	const [mantecaOpen, setMantecaOpen] = useState(false); // NEW for Manteca sub-menu

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '/about-us' },
		{ label: 'Services', href: '/services', isServices: true }, // mark it
		{ label: 'Service Areas', href: '#', isServiceAreas: true }, // NEW service areas
		{ label: 'Gallery', href: '/gallery' },
		{ label: 'Blog', href: '/blogs' },
	];

	const servicesDropdown = [
		{ label: 'Ceramic Coating', href: '/services/ceramic-coating' },
		{ label: 'Paint Correction', href: '/services/paint-correction' },
		{ label: 'Interior Detailing', href: '/services/interior-detailing' },
		{ label: 'Exterior Detailing', href: '/services/exterior-detailing' },
	];

	const serviceAreasDropdown = [
		{
			label: 'Lathrop, CA',
			href: '/service-areas/lathrop-ca',
			services: [
				{ label: 'Ceramic Coating', href: '/service-areas/lathrop-ca/ceramic-coating' },
				{ label: 'Paint Correction', href: '/service-areas/lathrop-ca/paint-correction' },
				{ label: 'Interior Detailing', href: '/service-areas/lathrop-ca/interior-detailing' },
				{ label: 'Exterior Detailing', href: '/service-areas/lathrop-ca/exterior-detailing' },
			]
		},
		{
			label: 'Manteca, CA',
			href: '/service-areas/manteca-ca',
			services: [
				{ label: 'Ceramic Coating', href: '/service-areas/manteca-ca/ceramic-coating' },
				{ label: 'Paint Correction', href: '/service-areas/manteca-ca/paint-correction' },
				{ label: 'Interior Detailing', href: '/service-areas/manteca-ca/interior-detailing' },
				{ label: 'Exterior Detailing', href: '/service-areas/manteca-ca/exterior-detailing' },
			]
		}
	];

	return (
		<div className="absolute top-4 left-0 w-full flex justify-center z-50">
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="text-black shadow-lg border border-gray-700 rounded-lg max-w-5xl w-full mx-auto"
				style={{
					background: 'linear-gradient(to bottom, #2A82AD, black)',
				}}
			>
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto">
					{/* Logo */}
					<a href="/" className="flex items-center">
						<img
							src="/images/logo.png"
							alt="Logo"
							className="h-20 object-contain"
						/>
					</a>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-[#2A82AD] md:hidden focus:outline-none p-2 w-10 h-10 rounded-lg hover:bg-gray-700"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>

					{/* Menu Items */}
					<div
						className={`${
							isOpen ? 'block' : 'hidden'
						} w-full md:block md:w-auto mt-4 md:mt-0`}
						id="navbar-default"
					>
						<ul className="flex flex-col md:flex-row md:space-x-8 font-medium bg-gray-800 md:bg-transparent p-4 md:p-0 border md:border-0 border-gray-700 rounded-lg md:rounded-none">
							{navItems.map((item, index) => {
								if (item.isServices) {
									return (
										<li key="services" className="relative group">
											{/* Services parent */}
											<div
												className="flex items-center justify-between py-2 px-3 text-white cursor-pointer md:p-0 md:block"
												onClick={() => setServicesOpen(!servicesOpen)}
											>
												<a
													href={item.href}
													className="hover:text-[#2A82AD] md:hover:bg-transparent group"
													onClick={() => setIsOpen(false)}
												>
													{item.label}
												</a>
												<FaChevronDown
													className={`ml-2 transition-transform duration-200 md:hidden ${
														servicesOpen ? 'rotate-180' : ''
													}`}
												/>
											</div>

											{/* Desktop hover */}
											<ul className="bg-gray-800 border border-gray-700 rounded-lg mt-2 w-48 text-left z-50 md:group-hover:block md:absolute md:left-0 md:top-3.5 hidden">
												{servicesDropdown.map((subItem, idx) => (
													<li key={idx}>
														<a
															href={subItem.href}
															className="block px-4 py-2 text-white hover:bg-gray-700"
															onClick={() => setIsOpen(false)}
														>
															{subItem.label}
														</a>
													</li>
												))}
											</ul>

											{/* Mobile toggle */}
											{servicesOpen && (
												<ul className="md:hidden mt-2 bg-gray-700 rounded-lg">
													{servicesDropdown.map((subItem, idx) => (
														<li key={idx}>
															<a
																href={subItem.href}
																className="block px-4 py-2 text-white hover:bg-gray-600"
																onClick={() => {
																	setIsOpen(false);
																	setServicesOpen(false);
																}}
															>
																{subItem.label}
															</a>
														</li>
													))}
												</ul>
											)}
										</li>
									);
								}

								if (item.isServiceAreas) {
									return (
										<li key="serviceAreas" className="relative group">
											{/* Service Areas parent */}
											<div
												className="flex items-center justify-between py-2 px-3 text-white cursor-pointer md:p-0 md:block"
												onClick={() => setServiceAreasOpen(!serviceAreasOpen)}
											>
												<a
													href={item.href}
													className="hover:text-[#2A82AD] md:hover:bg-transparent group"
													onClick={() => setIsOpen(false)}
												>
													{item.label}
												</a>
												<FaChevronDown
													className={`ml-2 transition-transform duration-200 md:hidden ${
														serviceAreasOpen ? 'rotate-180' : ''
													}`}
												/>
											</div>

											{/* Desktop hover - Nested dropdown */}
											<ul className="bg-gray-800 border border-gray-700 rounded-lg mt-2 w-64 text-left z-50 md:group-hover:block md:absolute md:left-0 md:top-3.5 hidden">
												{serviceAreasDropdown.map((cityItem, cityIdx) => (
													<li key={cityIdx}>
														<div className="px-4 py-2 text-white hover:bg-gray-700">
															<a
																href={cityItem.href}
																className="block font-medium"
																onClick={() => setIsOpen(false)}
															>
																{cityItem.label}
															</a>
															
															{/* City services directly below each city */}
															<ul className="mt-1 ml-4">
																{cityItem.services.map((serviceItem, serviceIdx) => (
																	<li key={serviceIdx}>
																		<a
																			href={serviceItem.href}
																			className="block px-2 py-1 text-sm text-gray-300 hover:text-white hover:bg-gray-600 rounded"
																			onClick={() => setIsOpen(false)}
																		>
																			{serviceItem.label}
																		</a>
																	</li>
																))}
															</ul>
														</div>
													</li>
												))}
											</ul>

											{/* Mobile toggle - Nested structure */}
											{serviceAreasOpen && (
												<ul className="md:hidden mt-2 bg-gray-700 rounded-lg">
													{serviceAreasDropdown.map((cityItem, cityIdx) => (
														<li key={cityIdx}>
															<div
																className="flex items-center justify-between px-4 py-2 text-white hover:bg-gray-600 cursor-pointer"
																onClick={() => {
																	if (cityItem.label === 'Lathrop, CA') {
																		setLathropOpen(!lathropOpen);
																	} else if (cityItem.label === 'Manteca, CA') {
																		setMantecaOpen(!mantecaOpen);
																	}
																}}
															>
																<a
																	href={cityItem.href}
																	className="flex-1"
																	onClick={(e) => e.stopPropagation()}
																>
																	{cityItem.label}
																</a>
																<FaChevronDown
																	className={`ml-2 transition-transform duration-200 ${
																		(cityItem.label === 'Lathrop, CA' && lathropOpen) ||
																		(cityItem.label === 'Manteca, CA' && mantecaOpen)
																			? 'rotate-180'
																			: ''
																	}`}
																/>
															</div>
															
															{/* City services sub-menu for mobile */}
															{((cityItem.label === 'Lathrop, CA' && lathropOpen) ||
															  (cityItem.label === 'Manteca, CA' && mantecaOpen)) && (
																<ul className="bg-gray-600 rounded-lg ml-4">
																	{cityItem.services.map((serviceItem, serviceIdx) => (
																		<li key={serviceIdx}>
																			<a
																				href={serviceItem.href}
																				className="block px-4 py-2 text-white hover:bg-gray-500"
																				onClick={() => {
																					setIsOpen(false);
																					setServiceAreasOpen(false);
																					setLathropOpen(false);
																					setMantecaOpen(false);
																				}}
																			>
																				{serviceItem.label}
																			</a>
																		</li>
																	))}
																</ul>
															)}
														</li>
													))}
												</ul>
											)}
										</li>
									);
								}

								return (
									<li key={index}>
										<a
											href={item.href}
											className="block py-2 px-3 text-white hover:text-[#2A82AD] rounded md:hover:bg-transparent md:p-0"
											onClick={() => setIsOpen(false)}
										>
											{item.label}
										</a>
									</li>
								);
							})}
						</ul>
					</div>

					{/* Contact Us Button */}
					<a
						href="/contact-us"
						className="hidden md:inline-block bg-[#2A82AD] text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition-colors"
					>
						Contact Us
					</a>
				</div>
			</motion.nav>
		</div>
	);
}
