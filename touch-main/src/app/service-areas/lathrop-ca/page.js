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
    title: "Professional Auto Detailing Services in Lathrop, CA",
    description: (
      <div style={{ whiteSpace: "pre-line" }}>
        <div style={{ marginBottom: "1rem" }}>
          Looking for reliable auto detailing services in Lathrop, California? Touch & Shine Auto Detail is your premier 
          <Link
            href="/"
            className="text-[#2A82AD] font-semibold"
          >
            mobile car detailing
          </Link>{' '} 
          service with over a decade of experience. We specialize in ceramic coating, paint correction, and comprehensive 
          detailing that protects your vehicle and keeps it looking pristine for years to come.
        </div>

        <div style={{ marginBottom: "1rem" }}>
          Why Choose Touch & Shine Auto Detail in Lathrop?
        </div>

        {/* Arrow Bullet Points */}
        <ul className="list-none text-gray-300 mt-4 space-y-2">
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Mobile service - we come to your location in Lathrop
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Professional-grade equipment and eco-friendly products
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Experienced technicians with attention to detail
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Competitive pricing and satisfaction guarantee
          </li>
        </ul>

        <div style={{ marginTop: "1rem" }}>
          Experience the Touch & Shine difference in Lathrop, CA.
        </div>
      </div>
    ),
    imgSrc: "/images/1.jpg",
  },
];

const ServiceDetailPage = () => {
  return (
    <>
      <div className="relative min-h-[60vh] bg-gradient-to-r from-blue-500 to-black bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-5xl font-bold">
            AUTO DETAILING SERVICES IN LATHROP, CA
          </h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center mt-3">
              Home
              <FaLongArrowAltRight className="text-lg text-blue-600" />
              Service Areas
              <FaLongArrowAltRight className="text-lg text-blue-600" />
              Lathrop, CA
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

        {/* Services Grid */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services in Lathrop, CA
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive auto detailing services to keep your vehicle looking its best
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Ceramic Coating',
                href: '/service-areas/lathrop-ca/ceramic-coating',
                image: '/images/ceramic.jpg',
                description: 'Long-lasting protection for your vehicle\'s paint'
              },
              {
                title: 'Paint Correction',
                href: '/service-areas/lathrop-ca/paint-correction',
                image: '/images/paint.jpg',
                description: 'Restore your vehicle\'s paint to showroom condition'
              },
              {
                title: 'Interior Detailing',
                href: '/service-areas/lathrop-ca/interior-detailing',
                image: '/images/interior.jpg',
                description: 'Deep clean and sanitize your vehicle\'s interior'
              },
              {
                title: 'Exterior Detailing',
                href: '/service-areas/lathrop-ca/exterior-detailing',
                image: '/images/exterior.jpg',
                description: 'Complete exterior cleaning and protection'
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2A82AD] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
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
