"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Yvette Mateo",
    review:
      "Gabriel was very professional and very responsive. He's mobile which is very convenient. I had an oil leak and Gabriel made my engine look new again. I highly recommend his services.",
  },
  {
    name: "Calvin Levy",
    review:
      "Highly recommend. I bought a car that was owned by a family with kids who trashed every surface of the car. Have you ever found fruitloops years old? Gabriel cleaned the entire interior and it looked spotless, I no longer cringe getting into my car. Thanks Gabriel!",
  },
  {
    name: "J B",
    review:
      "Always does an amazing job on my car. Very convenient and works with my busy schedule. I recommend Touch and Shine to everyone I know.",
  },
];

const TestimonialsU = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Display three testimonials at a time
  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div
      className="relative bg-[#2A82AD] text-white py-16 px-4 overflow-hidden"
      style={{
        clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)",
      }}
    >
      <div className="max-w-6xl mx-auto relative flex flex-col items-center">
        {/* Section Title with Background Label */}
        <div className="text-left w-full max-w-[960px]">
          <div className="text-xs font-semibold tracking-widest uppercase bg-black bg-opacity-50 inline-block px-3 py-1 mb-4">
            Testimonials · 5 Star Rated
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 mb-10 text-left">
            Our clients are our pride, and their words mean the world to us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="flex justify-center space-x-4 mb-10">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 h-60 flex flex-col justify-between"
            >
              <div className="flex justify-left mb-2">
                <div className="text-[#2A82AD]">★★★★★</div>
              </div>
              <p className="text-gray-300 mb-4 overflow-hidden text-ellipsis">
                {testimonial.review}
              </p>
              <p className="font-semibold text-white">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Button */}
        <a
          href="https://www.google.com/maps/place/Touch+and+shine+auto+detail/@37.6837558,-121.3754412,10z/data=!4m6!3m5!1s0x80903d2ca1069a21:0x82a8b47560759cf0!8m2!3d37.6837558!4d-121.3754412!16s%2Fg%2F11f60ys1pj?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white text-[#2A82AD] font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105"
        >
          <img
            src="/images/google-icon.svg" // Replace with your Google logo path
            alt="Google Logo"
            className="w-6 h-6 mr-2"
          />
          Google Reviews
        </a>
      </div>
    </div>
  );
};

export default TestimonialsU;
