import Faqs from '@/app/components/Faq/Faqs';
import { Interior } from '@/app/components/Faq/Homedata';
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
          d="M3.375 15h17.25M5.625 15v1.5a2.25 2.25 0 01-2.25 2.25h-.75m18 0h-.75a2.25 2.25 0 01-2.25-2.25V15m-12-6h12l1.5 4.5H4.125L5.625 9zm3.75-3.75h6.75a.75.75 0 01.75.75v2.25H8.625V6a.75.75 0 01.75-.75z"
        />
      </svg>
    ),
    title: "Bringing Convenience and Cleanliness Straight to Your Doorstep",
    description: (
      <div style={{ whiteSpace: "pre-line" }}>
        <div style={{ marginBottom: "1rem" }}>
          Contact Touch & Shine Auto Detail to get the affordable Mobile Interior Detailing services brought directly to your door- serving Tracy, CA and outlying dependencies. A private owner spends a lot of time in a car, and we clean the trucks to such a degree that the car will be an enjoyable place to sit. Reach us and get a quote free of charge and we will assist you with choosing the right <Link
            href="/"
            className="text-[#2A82AD] font-semibold"
          >
            Auto Detailing in Tracy, CA
          </Link>{' '} bundle according to your car requirements.
        </div>

        <div style={{ marginBottom: "1rem" }}>
          Reasons that Clients Can Rely on Our cheap Interior detailing tracy:

        </div>

        {/* Arrow Bullet Points */}
        <ul className="list-none text-gray-300 mt-4 space-y-2">
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Prolongs the lifespan of your indoor materials
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Time saving convenient service
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            Professionally remove stains, odor and build ups
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-[#2A82AD]" />
            The finest products and ways of a thorough, permanent clean
          </li>
        </ul>
        <div style={{ marginTop: "1rem" }}>
          Show the interior of your vehicle the attention it requires- in the comfort you demand.

        </div>
      </div>
    ),
    imgSrc: "/images/interior-page.jpg",
  },
];

const ServiceDetailPage = () => {
  return (
    <>

      <div className="relative min-h-[60vh] bg-gradient-to-r from-blue-500 to-black bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-5xl font-bold text-center">
            Freshen Up Your Drive with Experienced
            <br /> Mobile Interior Detailing Tracy, CA
          </h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center mt-3">
              Home
              <FaLongArrowAltRight className="text-lg text-blue-600" />
              Interior Detailing
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
        ))}  <div className="flex justify-center ">
          <Faqs data={Interior}></Faqs>
        </div>
      </div>

    </>
  );
};

export default ServiceDetailPage;
