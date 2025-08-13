import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaComment,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

// Updated Data Structure
const defaultData = [
  {
    heading: "Understanding the Effects of Heat and Dust on Your Car",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The UV rays have the ability to oxidize the paint of your car hence the car will appear dull and lifeless. Being constantly exposed to direct sunlight fades the paint, whereas the dust which is in the air may serve as a rough material, just like a sandpaper, leaving small scratches, but after a small period of time, the number of these scratches grows enormously. Even when the dirt is not too clean, it can etch the clear coat too hence permanent blemishes that require paint correction for cars.
              It is not all about the beauty, clogging of the vents and filters with dust may affect your car performance. It is not only sensible but also mandatory to keep your car out of the reach of extreme weather.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        image: "/images/ceramic-coating-keeps-your-cars-2.jpg",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Essential Exterior Care: What Your Car Needs in Harsh Climates",
        paragraph: (
          <div>
            <p>
              You should fight all these things by beginning with regular washings to get rid of abrasive dust particles. Swirl marks can be avoided by use of microfiber cloths. There is one or more coats of ceramic or wax that may protect the paint against the UV and pollutants.
              <strong> Paint correction for cars </strong> should be used when there is already visible damage, whether it is hazing, swirl marks or light scratches. It incorporates the procedure of machine polishing where imperfection is evened out safely and mirror-perfect mirror-shine is achieved.
              To have easy safeguarding and reparation, search the option of{" "} 
              <a
                className="text-blue-600 font-bold"
                href="https://www.touchandshinedetail.com/services/exterior-detailing"
              >
                Mobile Exterior Detailing near me.
              </a>{" "}
              These services mean that the professional gear is delivered to your door, and there is no time wasted, as well as your vehicle is taken care of. Here are few of the most common car issues in this regard that we treat with complete peace of mind like Swirl marks and scratches that are commonly formed due to inappropriate cleaning, or abrasive dust. We also treat Cloudy paint finish that is caused by oxidized layers of paint or by automatic car wash residues. Sometimes UV rays and hot temperatures may destroy dashboard plastics, as well as jumpstart temperature-sensitive engine parts.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Long-Term Protection Strategies for Car Enthusiasts",
        paragraph: (
          <div>
            <p>
              Besides the routine washes and detailing, you might want to have car detailing Tracy CA services done 4-6 weeks throughout the peak of summer. This does not only keep your car fresh but also avoids long-term damage. It is advisable to always leave the car in shade, install sunshades, and UV-protectant interior surfaces.
              Paint damage is when nothing can be done other than calling on Paint Correction Services in Tracy, CA at the point when only washing can no longer be used. The service has the capability to make your automobile look as good as new and preserve the life of your paint.
              Want the correct professionals to do it all?{" "}
              <a
                className="text-blue-600 font-bold"
                href="https://www.touchandshinedetail.com/"
              >
                Touch and shine Auto Detail
              </a>{" "}
              is a highly experienced car care service firm that removes scratches, corrects swirls and even offers heat protection measures. Make your reservation now so you may see the difference it makes to have a professional detailer!
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Final Thoughts: Make the Right Choice for Your Vehicle",
        paragraph: (
          <div>
            <p>
              To inhabitants of Tracy and surrounding areas, the Touch and Shine auto detail brings high-quality services to you. Whether it is mobile auto detailing near me or perfection in Ceramic Coating in Tracy, CA, their services will exceed your expectations about its quality and convenience. Book now with Touch and Shine Auto Detail where your car gets detailed like it deserves.
            </p>
          </div>
        ),
      },
    ],
  },
];

const faqsData = [
  {
    question: "What's the difference between interior mobile car detailing and regular car cleaning?",
    answer:
      "Best Interior mobile car detailing near me includes deep cleaning, shampooing, steam cleaning, and UV protection, whereas regular cleaning often just involves a basic vacuum and wipe-down.",
  },
  {
    question: "Is auto detailing worth it?",
    answer:
      "Absolutely. With detailing professionals Tracy using premium products, you get long-lasting protection, enhanced aesthetics, and higher resale value—making it a worthy investment.",
  },
  {
    question: "What services are included in mobile auto detailing near me?",
    answer:
      "Mobile auto detailing near me typically includes washing, waxing, interior shampooing, scratch and swirl removal, and optional ceramic coating.",
  },
  {
    question: "How much does mobile auto detailing cost in the Tracy, CA area?",
    answer:
      "Pricing varies depending on the package, but local auto detailers in Tracy offer services ranging from $80 to $300+ based on vehicle size and detailing depth.",
  },
  {
    question: "How long does ceramic coating last and is Touch and Shine Auto Detail worth the investment?",
    answer:
      "Ceramic coatings can last 2–5 years. With Touch and Shine Auto Detail, you receive high-grade materials and expert application, ensuring long-term benefits and great value.",
  },
];

const Blog1 = ({ data = defaultData, title, date, author, time, comments }) => {
  return (
    <>
      {/* Header Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-r from-[#2A82AD] to-black bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-cover opacity-[0.26]"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-3xl md:text-5xl font-bold">
            {title || "Complete Car Care Guide for Hot Climate Areas and Dust Protection"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "gabriel.maestro"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "July 29, 2025"} />
            <InfoItem icon={<FaClock />} text={time || "10:39 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#2A82AD] p-2 inline-block">
          <img
            src="/images/complete-car-care-guide-for-hot-climate-areas-and-dust-protection.png"
            alt="Complete Car Care Guide for Hot Climate Areas and Dust Protection"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Hot and dusty weather can pose a severe effect towards the outside of your car. Whether it is buying a car with sun-damaged paint, to ground-in mud cars, they need special treatment to not lose shine and market values. That is where the{" "}
            <a
              className="text-blue-600 font-bold"
              href="https://www.touchandshinedetail.com/services/paint-correction"
            >
              Best Paint Correction Services in Tracy, CA
            </a>{" "}
            come into play. Such services can re-install the finish of your car as well as make it ready to deal with environmental wear and tear that is typical to hot areas.
          </p>
        </div>

        {data.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-blue-600">{item.heading}</h2>

            {item.sections.map((section, secIndex) => (
              <div key={secIndex} className="mt-4">
                {section.subheading && (
                  <h3 className="text-xl font-semibold text-black mt-2">
                    {section.subheading}
                  </h3>
                )}

                {section.paragraph && (
                  <div className="text-md text-black mt-2">{section.paragraph}</div>
                )}

                {section.image && (
                  <div className="my-4">
                    <img
                      src={section.image}
                      alt={section.subheading || item.heading}
                      className="w-3/4 max-w-md h-auto rounded-lg"
                    />
                  </div>
                )}

                {section.listItems && (
                  <ul className="list-disc list-inside text-black mt-2">
                    {section.listItems.map((listItem, liIndex) => (
                      <li key={liIndex} className="ml-4">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="mt-8">
          <Link href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-[#2A82AD] hover:bg-black hover:text-[#2A82AD] transition-all duration-300">
              Booking
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

// InfoItem Component for Header Icons
const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 w-1/2 sm:w-1/4 md:w-auto mt-2 sm:mt-0">
    {icon}
    <span>{text}</span>
  </div>
);

export default Blog1;
