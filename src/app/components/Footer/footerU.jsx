import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaGoogle,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const FooterU = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 ">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col sm:items-start items-center space-y-4 md:w-1/3">
          <div className="flex flex-col sm:items-start items-center">
           <a href="/">
            <img
              src="/images/logo.png" // Replace with the actual path to your logo
              alt="Touch and Shine"
              className="w-32 h-auto" // Adjust width and height as needed
            /></a>
          </div>

          <div className="flex space-x-6 text-white text-xl ">
          <a
              href="https://www.facebook.com/gyhernandez73"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2A82AD]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/touchandshine73/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2A82AD]"
            >
              <FaInstagram />
            </a>
           
          </div>
        </div>

        {/* Pages, Services, and Business Info Sections */}
        <div className="flex flex-col sm:flex-row items-start justify-between w-full md:w-2/3 space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col sm:items-start  space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wide pb-1 border-b border-dotted border-[#2A82AD]">
              Pages
            </h4>
            <a href="/" className="hover:text-[#2A82AD]">
              Home
            </a>
            <a href="/about-us" className="hover:text-[#2A82AD]">
              About
            </a>
            <a href="/services" className="hover:text-[#2A82AD]">
              Services
            </a>
          
            <a href="/gallery" className="hover:text-[#2A82AD]">
              Gallery
            </a>
            <a href="/contact-us" className="hover:text-[#2A82AD]">
              Contact
            </a>
          
          </div>

          <div className="flex flex-col items-start sm:items-start  space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wide pb-1 border-b border-dotted border-[#2A82AD]">
              Services
            </h4>
          
          
            <a href="/services/exterior-detailing" className="hover:text-[#2A82AD]">
              Exterior Detailing
            </a>
            <a href="/services/interior-detailing" className="hover:text-[#2A82AD]">
              Interior Detailing
            </a>
            <a href="/services/ceramic-coating" className="hover:text-[#2A82AD]">
              Ceramic Coating
            </a>
          
          
         
            <a href="/services/paint-correction" className="hover:text-[#2A82AD]">
              Paint Correction
            </a>
           
          </div>

          <div className="flex flex-col sm:items-start items-start  space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wide pb-1 border-b border-dotted border-[#2A82AD]">
              Business Info
            </h4>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#2A82AD]" />
              <a href="tel:+12099149052">
              <span>(209) 914-9052</span></a>
            </div>
            <div className="flex items-center space-x-2">
              
              <FaEnvelope className="text-[#2A82AD]" />
              <a href="mailto:touchandshine73@gmail.com">
              <span>touchandshine73@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Centered Purple Line */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-[#2A82AD] pt-4 text-center text-sm text-gray-400">
        <p> © Touch and Shine Auto Detail 2024</p>
      </div>
    </footer>
  );
};

export default FooterU;
