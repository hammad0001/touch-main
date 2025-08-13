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
    title: "Comprehensive Exterior Detailing Services in Manteca, CA",
    description: (
      <div style={{ whiteSpace: "pre-line" }}>
        <div style={{ marginBottom: "1rem" }}>
          Give your vehicle the attention it deserves with our professional exterior detailing services in Manteca, California. 
          Touch & Shine Auto Detail specializes in comprehensive exterior cleaning, paint protection, and restoration that 
          brings back the showroom shine. Our mobile service ensures convenience without compromising quality.
        </div>

        <div style={{ marginBottom: "1rem" }}>
          Why Choose Our Exterior Detailing in Manteca?
        </div>

        {/* Arrow Bullet Points */}
        <ul className="list-none text-gray-300 mt-4 space-y-2">
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Professional-grade equipment and eco-friendly products
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Comprehensive exterior cleaning and protection
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Experienced technicians with attention to detail
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Mobile service throughout Manteca and surrounding areas
          </li>
        </ul>

        <div style={{ marginTop: "1rem" }}>
          Restore your vehicle's exterior beauty with our professional detailing service.
        </div>
      </div>
    ),
    imgSrc: "/images/exterior-detailing.png",
  },
];

const ServiceDetailPage = () => {
  return (
    <>
      <div className="relative min-h-[60vh] bg-gradient-to-r from-blue-500 to-black bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-5xl font-bold">
            Exterior Detailing Services in Manteca, CA
          </h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center mt-3">
              Home
              <FaLongArrowAltRight className="text-lg text-blue-600" />
              Service Areas
              <FaLongArrowAltRight className="text-lg text-blue-600" />
              Manteca, CA
              <FaLongArrowAltRight className="text-lg text-blue-600" />
              Exterior Detailing
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

        {/* Exterior Services Section */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Exterior Detailing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete exterior care and protection for your vehicle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Hand Washing',
                description: 'Gentle hand washing with premium car wash products',
                icon: '🚿'
              },
              {
                title: 'Clay Bar Treatment',
                description: 'Remove embedded contaminants from paint surface',
                icon: '🧱'
              },
              {
                title: 'Paint Decontamination',
                description: 'Eliminate iron deposits and water spots',
                icon: '🧪'
              },
              {
                title: 'Waxing & Sealing',
                description: 'Protective wax and sealant application',
                icon: '🛡️'
              },
              {
                title: 'Tire & Wheel Care',
                description: 'Deep cleaning and dressing of tires and wheels',
                icon: '🛞'
              },
              {
                title: 'Glass Treatment',
                description: 'Streak-free glass cleaning and protection',
                icon: '🪟'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Exterior Detailing Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic approach for optimal results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Pre-Wash',
                description: 'Rinse off loose dirt and debris',
                icon: '💧'
              },
              {
                step: '2',
                title: 'Hand Wash',
                description: 'Gentle cleaning with premium products',
                icon: '🧽'
              },
              {
                step: '3',
                title: 'Decontamination',
                description: 'Remove embedded contaminants',
                icon: '🧪'
              },
              {
                step: '4',
                title: 'Protection',
                description: 'Apply wax, sealant, or ceramic coating',
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

        {/* Why Choose Us Section */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Exterior Detailing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the Touch & Shine difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Professional Equipment',
                description: 'We use industry-leading tools and products for superior results',
                icon: '⚙️'
              },
              {
                title: 'Eco-Friendly Products',
                description: 'Safe for your vehicle and the environment',
                icon: '🌱'
              },
              {
                title: 'Mobile Convenience',
                description: 'We come to you, saving you time and hassle',
                icon: '🚗'
              },
              {
                title: 'Satisfaction Guarantee',
                description: 'We stand behind our work with a satisfaction guarantee',
                icon: '✅'
              }
            ].map((reason, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 flex items-start gap-4 hover:bg-gray-700 transition-colors">
                <div className="text-4xl">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-300 text-sm">{reason.description}</p>
                </div>
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
