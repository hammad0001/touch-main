"use client";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-8 md:p-16 pb-32 relative bg-white">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        {/* Decorative Circles */}
        <div
          className="absolute 
            bottom-[-40px] left-[45px] w-[250px] h-[250px] 
            sm:bottom-[-50px] sm:left-[-40px] sm:w-[300px] sm:h-[300px] 
            md:bottom-[-60px] md:left-[-60px] md:w-[350px] md:h-[350px] 
            lg:bottom-[-70px] lg:left-[-70px] lg:w-[400px] lg:h-[400px] 
            rounded-full bg-[#2A82AD] opacity-80"
        ></div>

        {/* Main Image */}
        <div
          className="
            w-40 h-48 
            sm:w-48 sm:h-56 
            md:w-56 md:h-64 
            lg:w-64 lg:h-72 
            
            rounded-lg overflow-hidden shadow-lg relative"
        >
          <img
            src="/images/owner.png"
            alt="Gabriel Hernandez"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h4 className="text-sm font-semibold text-[#2A82AD] uppercase mb-2 mt-3 md:mt-0">
          MEET THE OWNER
        </h4>
        <h2 className="text-1xl md:text-2xl font-bold text-gray-900  mb-4">
          GABRIEL'S STORY
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Strategic, multidisciplinary auto detailer with an eye for perfection.
          Gabriel Hernandez started his auto detailing journey over 20 years ago
          at an auto auction in hayward, ca. It is there he was exposed to the
          art of auto detailing and understanding of vehicle surface care.
          Gabriel learned many techniques – from leather seat protection to
          mastering the imperfections in the paint. In 1997, Gabriel Hernandez,
          joined the Anderson Lexus team, in Fremont, CA. Gabriel’s detailing
          experience expanded and his passion for the business flourished. A car
          was no longer a car but a canvas. His goal wasn’t just to maintain a
          good looking car but to take care of the vehicles vital aspect in the
          longevity of its interior and exterior. After 2 years with Anderson
          Lexus and the change of ownership to Magnussen Lexus, Gabriel was
          given the opportunity to manage the detail department. Gabriel gained
          his extensive detailing knowledge while working for Magnussen Lexus.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
