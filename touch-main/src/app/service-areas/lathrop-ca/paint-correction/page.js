import Faqs from '@/app/components/Faq/Faqs';
import { Ceramic } from '@/app/components/Faq/Homedata';
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";

const sections = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-8 w-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 15h17.25M5.625 15v1.5a2.25 0 01-2.25 2.25h-.75m18 0h-.75a2.25 2.25 0 01-2.25-2.25V15m-12-6h12l1.5 4.5H4.125L5.625 9zm3.75-3.75h6.75a.75.75 0 01.75.75v2.25H8.625V6a.75.75 0 01.75-.75z"
        />
      </svg>
    ),
    title: "Expert Paint Correction Services in Lathrop, CA",
    description: (
      <div style={{ whiteSpace: "pre-line" }}>
        <div style={{ marginBottom: "1rem" }}>
          Transform your vehicle's appearance with our professional paint correction services in Lathrop, California. 
          Touch & Shine Auto Detail specializes in restoring damaged paint to showroom condition using advanced 
          techniques and professional-grade equipment. Our mobile service brings the expertise directly to your location.
        </div>

        <div style={{ marginBottom: "1rem" }}>
          Why Choose Our Paint Correction in Lathrop?
        </div>

        {/* Arrow Bullet Points */}
        <ul className="list-none text-gray-300 mt-4 space-y-2">
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Advanced paint correction techniques and equipment
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Experienced technicians with years of expertise
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Comprehensive paint restoration and enhancement
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Mobile service throughout Lathrop and surrounding areas
          </li>
        </ul>

        <div style={{ marginTop: "1rem" }}>
          Restore your vehicle's paint to its original glory with our expert paint correction service.
        </div>
      </div>
    ),
    imgSrc: "/images/paint-correction-page.jpg",
  },
];

const ServiceDetailPage = () => {
  return (
    <>
      <div className="relative min-h-[60vh] bg-gradient-to-r from-blue-500 to-black bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-5xl font-bold">
            Paint Correction Services in Lathrop, CA
          </h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center mt-3">
              Home
              <FaLongArrowAltRight className="text-lg text-blue-600" />
              Service Areas
              <FaLongArrowAltRight className="text-lg text-blue-600" />
              Lathrop, CA
              <FaLongArrowAltRight className="text-lg text-blue-600" />
              Paint Correction
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-black via-black to-[#2A82AD] pt-16 pb-32 space-y-24">
        {sections.map((section, idx) => (
          <div key={section.id} className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
              {/* Use Flexbox for equal height alignment */}
              <div className="flex flex-col lg:flex-row items-stretch lg:gap-12">
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-center px-6 lg:py-16">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A82AD]">
                    {section.icon}
                  </div>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 text-lg text-gray-300">
                    {section.description}
                  </div>
                  <div className="mt-6">
                    <a
                      href="tel:+12099149052"
                      className="mb-3 inline-flex rounded-lg bg-[#2A82AD] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple-600 hover:bg-purple-900 hover:ring-purple-900"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center">
                  <Image
                    src={section.imgSrc}
                    alt={section.title}
                    width={500}
                    height={375}
                    className="rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Process Section */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Paint Correction Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic approach to ensure the best results for your vehicle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Assessment',
                description: 'Thorough inspection of paint condition and damage evaluation',
                icon: '🔍'
              },
              {
                step: '2',
                title: 'Preparation',
                description: 'Proper washing, decontamination, and paint preparation',
                icon: '🧽'
              },
              {
                step: '3',
                title: 'Correction',
                description: 'Professional paint correction using advanced techniques',
                icon: '⚡'
              },
              {
                step: '4',
                title: 'Protection',
                description: 'Application of protective coatings and final detailing',
                icon: '🛡️'
              }
            ].map((process, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors">
                <div className="text-4xl mb-4">{process.icon}</div>
                <div className="bg-[#2A82AD] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common Issues Section */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Common Paint Issues We Fix
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our paint correction service addresses various types of paint damage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Swirl Marks',
                description: 'Remove circular scratches caused by improper washing',
                icon: '🌀'
              },
              {
                title: 'Oxidation',
                description: 'Restore faded and dull paint to vibrant condition',
                icon: '🌅'
              },
              {
                title: 'Water Spots',
                description: 'Eliminate mineral deposits and water spot damage',
                icon: '💧'
              },
              {
                title: 'Scratches',
                description: 'Repair light to moderate surface scratches',
                icon: '✂️'
              },
              {
                title: 'Holograms',
                description: 'Remove buffer trails and hologram effects',
                icon: '🌈'
              },
              {
                title: 'Paint Transfer',
                description: 'Clean paint transfer from other vehicles',
                icon: '🎨'
              }
            ].map((issue, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors">
                <div className="text-4xl mb-4">{issue.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{issue.title}</h3>
                <p className="text-gray-300 text-sm">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Faqs data={Ceramic}></Faqs>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
