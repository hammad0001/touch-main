"use client";
import React from 'react';
import { FaStar, FaGem, FaHome, FaUserShield, FaCommentDots } from 'react-icons/fa';

const ChooseUsU = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-4 inset-0 bg-black opacity-90"
      style={{ backgroundImage: "url('/images/3.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Section Title */}
        <h4 className="text-sm  text-[#2A82AD]  uppercase mb-2 font-bold">Benefits</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-200 mb-10">
        At Eyez on the Prize Auto Spa, we take vehicle detailing to the next level. Our expert group is dedicated to creating the shine of your vehicle, interior and exterior, through the use of excellent products and the latest techniques. We know how important your vehicle is to you, so we customized our services to meet your unique wishes, ensuring an ideal finish each time. From deep indoor cleaning to perfect outdoor polishing, we guarantee your vehicle’s look will be outstanding. Choose Eyez on the Prize Auto Spa for our passion, attention to detail, and commitment to making every customer smile. Let us deliver the best to your vehicle!
        </p>

        {/* Benefits Grid with Custom Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {/* Top Row - Three Cards */}
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#2A82AD] text-2xl mr-4 w-8 flex-shrink-0">
              <FaStar />
            </div>
            <p className="font-semibold text-left">5-Star Reviews (100+)</p>
          </div>
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#2A82AD] text-2xl mr-4 w-8 flex-shrink-0">
              <FaGem />
            </div>
            <p className="font-semibold text-left">Exclusive Products</p>
          </div>
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#2A82AD] text-2xl mr-4 w-8 flex-shrink-0">
              <FaHome />
            </div>
            <p className="font-semibold text-left">We Come to You</p>
          </div>
        </div>

        {/* Centered Bottom Row - Two Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#2A82AD] text-2xl mr-4 w-8 flex-shrink-0">
              <FaUserShield />
            </div>
            <p className="font-semibold text-left">Insured Specialists</p>
          </div>
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#2A82AD] text-2xl mr-4 w-8 flex-shrink-0">
              <FaCommentDots />
            </div>
            <p className="font-semibold text-left">Car Care Advice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsU;
