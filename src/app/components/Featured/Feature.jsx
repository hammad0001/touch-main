"use client";

import React, { useEffect, useRef } from "react";

const Featured = () => {
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    // Create an intersection observer to check when the video is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const video = entry.target;
          if (video && video.paused) {
            video.muted = true; // Mute the video to comply with autoplay policies
            video.play().catch((error) => {
              console.error("Video playback failed:", error);
            }); // Attempt to play the video
          }
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is in view
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div
      className="relative bg-[#2A82AD] text-white p-8 md:p-16 overflow-hidden"
      style={{
        clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)",
      }}
    >
      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2 lg:w-[61%] mb-8 md:mb-0 md:pr-8">
          <div className="text-xs font-semibold tracking-widest uppercase bg-black bg-opacity-50 inline-block px-3 py-1 mb-4 mt-8 sm:mt-0">
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mustang GT 2019 – Black Fury
          </h2>
          <blockquote className="italic mb-4 text-lg text-gray-300">
            "It looks even better than the day I drove it off the dealership
            lot"
          </blockquote>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            That’s what Michael – the proud owner of this stunning 2019 Mustang
            GT, Black Beast, shared after we completed the Ceramic Coating
            package. Many car owners don’t realize that even brand-new vehicles
            can have paint imperfections straight from the dealership.
          </p>
          <a href="/gallery">
            <button className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-[#2A82AD] transition">
              View Portfolio
            </button>
          </a>
        </div>

        {/* Video Section */}
        <div className="md:w-1/2 lg:w-5/12 flex justify-center md:justify-end">
          <div className="relative sm:w-4/5 md:w-[300px] lg:w-[300px] xl:w-[300px] h-72 md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg mx-auto mb-8">
            <video
              ref={videoRef} // Assign the video reference
              src="/images/mustang.mp4"
              className="w-full h-full object-cover rounded-lg"
              playsInline // Ensures compatibility with mobile devices
              muted // Mute the video for autoplay to work
              loop // Optional: Loop the video
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
