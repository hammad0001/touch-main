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
    heading: "What Makes Mobile Auto Detailing a Smarter Choice?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The current convenient auto mobile service makes life convenient since you will not need to drive to a shop and wait there. Be it in your driveway or in the workplace, detailers come in with powerful mobile auto detailing equipment offering the same degree of care as the care you would give at a full-service garage. An exemplary carwash usually consists of a comprehensive exterior car wash, elimination of scratch and swirl removal, waxing and interior detailing. Other additional features are also popular such as engine bay clean, odor removal, and leather treatment. The most important things that differentiate the best providers are the details, flexibility and the desire to please customers.
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
        subheading: "Why Ceramic Coating is the Top Choice for Vehicle Protection",
        paragraph: (
          <div>
            <p>
              Once you get a taste of the gloss and shine associated with ceramic coating, you can never get the same back again. Other than glowing your surface, the{" "} 
              <a
                className="text-blue-600 font-bold"
                href="https://www.touchandshinedetail.com/services/ceramic-coating"
              >
                best Ceramic Coating in Tracy, CA
              </a> provides a whole-year protection against UV rays, road salts, acid rains, and birds. The hydrophobicity maintains a longer clean cycle of your car and thereby less maintenance which results in less washing of your car.
              The re-sale value is also going to be enhanced with the help of ceramic coating because it will maintain the paint and remove small damages. It is an excellent long-term fix, particularly to drivers who prefer such a looked-after appearance to last.
              Together with professional scratch and swirl removal, a ceramic coating seals the perfect finish. And when employed by qualified experts with modern high-tech instruments the outcomes are self-explaining.
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
        subheading: "Interior Detailing That Matches Exterior Perfection",
        paragraph: (
          <div>
            <p>
              Attentively maintained interiors do not only appear well; they are also nicer to the touch. Companies such as{" "}
              <a
                className="text-blue-600 font-bold"
                href="https://www.touchandshinedetail.com/services/ceramic-coating"
              >
                Interior mobile car detailing near Tracy
              </a>{" "}
              allow sanitization and revitalization of the cabin of your car without having to leave your drive. Intense vacuuming, shampooing of the carpets, treating of leather, shining the dashboard, and also cleaning of the headliners. To families, rideshare drivers or any other person who spends a lot of time at the wheel, interior detailing can give comfort, hygiene, and pride of ownership.
              Full-service detailing is more efficient and less costly to do as exterior work is often packaged with interior services. Trust detailing pros Tracy counts on to make all of your vehicle feel brand new.
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
            {title ||
              "Where to Find Quality Mobile Auto Detailing and Ceramic Coating in California"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "gabriel.maestro"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "July 29, 2025"} />
            <InfoItem icon={<FaClock />} text={time || "10:29 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#2A82AD] p-2 inline-block">
          <img
            src="/images/Where-to-Find-Quality-Mobile-Auto-Detailing-and-Ceramic-Coating-in-California.png"
            alt="Where to Find Quality Mobile Auto Detailing and Ceramic Coating in California"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            In California, do you want {" "}
            <a
              className="text-blue-600 font-bold"
              href="https://www.touchandshinedetail.com/"
            >
              mobile auto detailing near me?
            </a> It is not just you. In the pursuit of convenience and high level of care, the detailing professionals Tracy can now bring supreme level of services and treatments to you, without even getting out of your door. Mobile detailing helps here because whether in the city or in neighboring cities, your car will receive professional care as mobile detailing professionals will be at your service without you having to disrupt your busy schedules in order to take your car to the workshop. As an increasing number of people use auto spa services instead of the common car wash, the need for high-quality detailing services on the spot has been over the roof. Basic cleaning days are long gone as today we have a range of services including paint correction, and full interior restoration. However what are the tips to selecting the correct local auto detailers? And why is ceramic coating a buzz in the California market? That is what we are going to discuss in today's write up.
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

