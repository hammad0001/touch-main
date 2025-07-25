"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Services Data with Correct Slugs
const services = [
  {
    title: "Paint Correction",
    description:
      "Paint correction is the process of removing imperfections from your vehicle’s paint, such as swirl",
    image: "/images/paint-correction-page.jpg",
    slug: "paint-correction", // Correct slug
  },
  {
    title: "Ceramic Coating",
    description:
      "Are you Looking for an experienced and meticulous ceramic coating installer in the Tracy",
    image: "/images/ceramic-page.jpg",
    slug: "ceramic-coating", // Correct slug
  },
  {
    title: "Exterior Detailing",
    description:
      "Discover the unparalleled auto detailing services offered at Touch & Shine Auto Detail in Tracy, CA",
    image: "/images/s51.jpg",
    slug: "exterior-detailing",
  },
  {
    title: "Interior Detailing",
    description:
      "Discover the unparalleled auto detailing services offered at Touch & Shine Auto Detail in Tracy, CA. ",
    image: "/images/interior-page.jpg",
    slug: "interior-detailing",
  },
];

const ServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl lg:text-6xl font-bold leading-tight uppercase text-[#2A82AD]">
        Our Services
      </h1>
      <h2 className="font-semibold text-white mt-4 text-2xl lg:text-3xl">
        What We Offer
      </h2>
      <p className="text-white mt-2 mb-8 text-1xl lg:text-2xl">
        TRUSTED AUTO DETAILING SERVICES IN TRACY, CA
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <Link
                href={`/services/${service.slug}`}
                className="flex shrink-0 aspect-w-4 aspect-h-3"
              >
                <Image
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                />
              </Link>
              <div className="flex-1 px-4 py-5 sm:p-6">
                <Link href={`/services/${service.slug}`}>
                  <p className="text-lg font-bold text-gray-900">
                    {service.title}
                  </p>
                  <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    {service.description}
                  </p>
                </Link>
              </div>
              <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#2A82AD]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">
                    <Link href={`/services/${service.slug}`}>Read More</Link>
                  </p>
                  <Link href={`/services/${service.slug}`} role="button">
                    <svg
                      className="w-5 h-5 text-white transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
