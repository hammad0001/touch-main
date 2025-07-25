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
    heading: "What Is Paint Correction?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The process of fixing imperfections on your car’s surface. These
              could be scratches, spots from water, or faded areas. Experts use
              tools and polish to smooth and shine the paint. In contrast to
              standard detailing that primarily cleans your vehicle, this
              process rejuvenates its aesthetic appeal. Although it requires
              careful attention and expertise, the end result is rewarding. When
              executed properly, your car will shine with a lustrous finish. It
              looks far better than ever before.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "How It Works",
        paragraph: (
          <div>
            <p>
              The first step is washing the car to remove dirt. Then, a clay bar
              picks up particles stuck to the paint. Next, experts inspect the
              surface for scratches and marks. They polish the paint to smooth
              flaws. Lastly, a coating protects the paint for a long time. Be
              careful at every step to ensure lasting results. This process
              transforms the car’s look completely.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2">.</p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Why Does Paint Fade?",
    sections: [
      {
        subheading: "",
        paragraph:
          "Car paint fades due to sunlight, dirt, and weather. The sun’s rays break down the paint over time. This makes it dull. Rain and dirt also wear out the surface. Bird droppings and sap cause stains and damage, too. Cleaning your car slows this fading. But if the paint looks bad already, vehicle restoration or correction can bring back its shine",
      },
    ],
  },
  ,
  {
    heading: "",
    sections: [
      {
        subheading: "Common Causes of Paint Damage",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Bright sunlight weakens and cracks the paint.",
          "Bird droppings and sap leave stains.",
          "Road salt makes the surface corrode.",
          "Pollution sticks to the paint and dulls its look.",
        ],
      },
    ],
  },
  {
    heading: "Advantages of Car Detailing",
    sections: [
      {
        subheading: "",
        paragraph:
          "Car exterior or interior detailing cleans and protects your car. It’s different from vehicle restoration, which repairs damage. Detailing keeps the paint bright and fresh. It stops dirt and sun from harming the surface. When done often, it keeps your car’s color and shine great. It is an easy way to make your car stand out. Plus, it helps protect the paint for years.",

        image: "",
      },
    ],
  },
  {
    heading: "Why Correction is Important",
    sections: [
      {
        subheading: "",
        paragraph:
          "A clean car makes a huge difference. It looks great and feels better to drive. Detailed cars look their best from windows to wheels. It is not about being perfect. It is about keeping the car in top shape. Detailing helps you take pride in your car and makes it last longer.",

        image: "",
      },
    ],
  },
  {
    heading: "DIY vs. Professional Paint Correction",
    sections: [
      {
        subheading: "Should You Try It Yourself?",
        paragraph: (
          <div>
            <p>
              Some people choose DIY kits because they cost less. These kits can
              fix small issues like scratches. But doing it yourself takes
              patience and practice. If you’re not careful, you might make the
              surface worse. DIY is okay for minor problems. But bigger jobs
              should go to professionals. Mistakes can cost more to fix later.
              Think carefully before trying.
            </p>
            <p className="mt-2"></p>
          </div>
        ),

        image: "/images/paint-22.jpg",
      },
    ],
  },
  {
    heading: "Why Professionals Are Better",
    sections: [
      {
        subheading: "",
        paragraph:
          "Professionals handle all kinds of paint problems. They use great tools and products for the job. They know how to protect your car while fixing its flaws. Hiring an expert is quicker and safer than doing it yourself. The results are better, and you avoid mistakes. If you want your car perfect, let the pros handle it.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Read Blog{" "}
              <a
                className="text-blue-500 font-bold"
                href="https://www.touchandshinedetail.com/ceramic-coating-keeps-car-paint-looking-fresh"
              >
                Ceramic Coating Car’s Paint{" "}
              </a>
            </p>
          </div>
        ),

        image: "",
      },
    ],
  },
  {
    heading: "The Science of Polishing",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Paint polishing removes thin layers of damaged paint. This reveals
              the smooth, shiny surface below. Experts use compounds to clear
              scratches, swirl marks, and oxidation. This process makes the
              paint look deep and rich in color. With the right tools and skill,
              polishing makes your car look new. It’s a precise skill that
              avoids overdoing it or causing harm.
            </p>
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
        subheading: "Types of Polish",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Cutting Polish: Clears heavy scratches and oxidation.",
          "Finishing Polish: Adds a smooth and shiny finish.",
          "All-in-One Polish: Cleans, fixes, and secures in a single step",
        ],
      },
    ],
  },
  {
    heading: "Why Your Car Deserves Professional Care",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Does your car look dull or scratched? It might be time for a
              makeover. Paint correction can restore your car’s beauty. It will
              make it look like new. Don’t settle for a car that looks worn out.
              Experts can bring back that showroom sparkle. Your car will look
              great and feel amazing when you drive it. Book your session now
              and see the difference yourself.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
];
const faqsData = [
  {
    question: "Can paint correction prevent future damage?",
    answer:
      "Adding a coating after correction helps protect your car from wear and tear.",
  },
  {
    question: "What tools do experts use?",
    answer:
      "They use polishers, pads, and compounds to fix issues with the paint.",
  },
  {
    question: "How often should paint correction be done?",
    answer:
      "With care, you only need it every few years. Cleaning keeps it fresh.",
  },
  {
    question: "Does it work on all car colors?",
    answer:
      "Yes, it works in all colors. Dark shades look deeper, and light shades get brighter.",
  },
  {
    question: "Is it safe for the environment?",
    answer:
      "When done by experts, it uses eco-friendly products and creates minimal waste.",
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
              "How Paint Correction Transforms Your Car’s Appearance"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "January 24, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "11:19 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#2A82AD] p-2 inline-block">
          <img
            src="/images/paint-correction-transforms.jpg"
            alt="Christmas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Have you ever looked at your car and thought it seemed dull or worn
            out? Maybe scratches or smudges make it lose its shine. Over time,
            all cars face wear and tear. But here’s great news.{" "}
            <a
              className="font-bold text-blue-500"
              href="https://www.touchandshinedetail.com/services/paint-correction"
            >
              Paint correction
            </a>
            Services fixes these problems. It makes your car look amazing again.
            This process smooths out flaws. It brings back that new car sparkle.
            It is not just about making your car look good. It’s about feeling
            proud each time you drive.
          </p>
          <h2 className="mt-6 text-lg text-blue-600"></h2>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
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
                  <div className="text-md text-black mt-2">
                    {section.paragraph}
                  </div>
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

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-black">Conclusion</h2>
          <p className="text-md text-black mt-2">
            Every car deserves to look its best. Paint correction fixes flaws
            and brings back the shine. A polished car isn’t just about looks.
            It’s about feeling proud every time you drive. Care for your car,
            and it will last longer. Do not wait. Give your car the attention it
            needs. Enjoy the thrill of driving a car that turns heads.
          </p>
          <p className="text-md text-black mt-2"></p>
        </div>
        {/* FAQs Section */}
       <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">FAQs</h2>
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-blue-600">
                {faq.question}
              </h3>
              <p className="text-md text-black mt-2">{faq.answer}</p>
            </div>
          ))}
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
