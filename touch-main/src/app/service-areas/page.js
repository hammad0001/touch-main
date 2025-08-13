import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  const serviceAreas = [
    {
      name: 'Lathrop, CA',
      href: '/service-areas/lathrop-ca',
      image: '/images/1.jpg',
      services: ['Ceramic Coating', 'Paint Correction', 'Interior Detailing', 'Exterior Detailing'],
      description: 'Professional auto detailing services in Lathrop, California. We bring our expertise and mobile detailing services right to your doorstep.'
    },
    {
      name: 'Manteca, CA',
      href: '/service-areas/manteca-ca',
      image: '/images/2.jpg',
      services: ['Ceramic Coating', 'Paint Correction', 'Interior Detailing', 'Exterior Detailing'],
      description: 'Premium auto detailing services in Manteca, California. Experience the Touch & Shine difference with our mobile detailing solutions.'
    }
  ];

  return (
    <div className='bg-gradient-to-r from-black via-black to-[#2A82AD]'>
      <div className="relative min-h-[60vh] bg-gradient-to-r from-[#2A82AD] to-black bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-5xl font-bold">
            AUTO DETAILING SERVICES IN SERVICE AREA
          </h1>
          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-[#2A82AD]" />
              Service Areas
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-black via-black to-[#2A82AD] pt-16 pb-32">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide professional mobile auto detailing services across multiple locations in California. 
              Our team brings expertise and quality service right to your location.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-3xl font-bold text-white">{area.name}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-300 mb-6 text-lg">
                    {area.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Available Services:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-[#2A82AD] rounded-full"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={area.href}
                    className="inline-block bg-[#2A82AD] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full text-center"
                  >
                    View Services in {area.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose Our Mobile Auto Detailing?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                <div>
                  <div className="w-12 h-12 bg-[#2A82AD] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Convenience</h4>
                  <p>We come to you, saving you time and hassle</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#2A82AD] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Quality</h4>
                  <p>Professional-grade equipment and expertise</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#2A82AD] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Efficiency</h4>
                  <p>Quick turnaround without compromising quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
