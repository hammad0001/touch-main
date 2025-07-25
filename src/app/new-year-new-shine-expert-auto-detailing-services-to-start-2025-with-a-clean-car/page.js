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
    heading: "A Fresh Start for the New Year",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Just like you might do a deep clean in your home or office at the
              start of the year, your car deserves a fresh start too. After
              months of winter weather, road trips, and holiday travels, your
              vehicle could be showing signs of wear. A full detailing removes
              dirt, grime, and the hidden buildup that regular car washes might
              miss, giving your car a fresh, clean slate for the year ahead..
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: " Increased Resale Value",
    sections: [
      {
        paragraph:
          "A clean and well-maintained vehicle retains its value much better than one that’s dirty and neglected. Regular detailing helps protect your car’s paint, upholstery, and interior from wear and tear, keeping it looking newer for longer. If you’re planning to sell or trade in your car, a detailed vehicle can significantly increase its resale value.",
      },
    ],
  },
  ,
  {
    heading: "Protect Your Investment",
    sections: [
      {
        paragraph:
          "Your car is a significant investment, and regular detailing is an essential part of maintaining it. By removing contaminants like dirt, salt, bird droppings, and tree sap, detailing protects your vehicle’s paint and finish, preventing premature deterioration. A well-maintained car is also less likely to have issues with rust, stains, or other long-term damage.",
      },
    ],
  },
  {
    heading: "Improved Driving Experience",
    sections: [
      {
        paragraph:
          "Driving a clean, fresh vehicle isn’t just about looks—it’s also about comfort. A detailed car feels better to drive, with a fresh interior free of dust, dirt, and odors. Plus, the sparkling exterior and clean windows ensure that you have better visibility and enjoy the open road with pride.",

        image: "",
      },
    ],
  },
  {
    heading: "Boost Your Mood & Confidence",
    sections: [
      {
        paragraph:
          "There’s something special about driving a shiny, well-maintained vehicle. It gives you a sense of pride, and whether you're commuting to work, running errands, or going on a road trip, you'll feel more confident behind the wheel when your car looks its best.",

        image: "",
      },
    ],
  },
  {
    heading: "How Touch and Shine Auto Detail Cavan Help You Shine in 2025",
    sections: [
      {
        paragraph:
          "At Touch and Shine Auto Detail, we offer a comprehensive range of auto detailing services that go beyond the typical car wash. Our skilled professionals use top-quality products and techniques to ensure that your vehicle receives the attention it deserves. Whether you're looking for a simple wash or a full interior and exterior detail, we’re here to provide the best care for your car.",

        image: "",
      },
    ],
  },
  {
    heading: "Exterior Detailing",
    sections: [
      {
        paragraph:
          "Your car’s exterior is the first thing people see, and it’s constantly exposed to the elements. Our exterior detailing services are designed to restore and protect your vehicle’s finish, making it look like new again. We offer:",

        image: "",
        listItems: [
          "	Hand Wash & Dry: We hand wash your vehicle to ensure that all dirt, grime, and debris are removed carefully without damaging the paint",
          "Clay Bar Treatment: We use a clay bar to remove embedded contaminants like road tar, tree sap, and industrial fallout that can affect the smoothness of your car’s paint.",
          "Paint Correction: For cars with swirl marks, scratches, or oxidation, our paint correction service restores the paint to its original condition, leaving a smooth, glossy finish.",
          "Waxing & Sealing: After cleaning and polishing, we apply a protective wax or sealant that creates a protective barrier against the elements, helping your car maintain its shine and resist dirt, water, and UV damage.",
          "Tire & Wheel Detailing: We clean and shine your tires and wheels, restoring their original look and protecting them from dirt and brake dust.",
        ],
      },
    ],
  },
  {
    heading: "Interior Detailing",
    sections: [
      {
        paragraph:
          "The interior of your car is where you spend a lot of time, and a clean, fresh interior can greatly improve your driving experience. Our interior detailing service includes:",

        image: "",
        listItems: [
          "Vacuuming & Carpet Cleaning: We thoroughly vacuum the carpets, floor mats, and upholstery to remove dirt, crumbs, and debris. For deeper cleaning, we offer shampooing and steam cleaning services to remove stains and refresh your interior.",
          "Leather & Upholstery Care: Whether you have leather seats or fabric upholstery, we’ll clean and condition the materials to prevent cracking, fading, and wear. We treat each type of material with the care it needs.",
          "Dashboard & Console Cleaning: We dust, clean, and shine the dashboard, console, and all interior surfaces, restoring them to their original condition. We also sanitize the areas you touch most, like the steering wheel and gear shifter.",
          "Odor Removal: We use specialized techniques to eliminate odors caused by food, pets, smoke, or mold, leaving your car smelling fresh and clean.",
        ],
      },
    ],
  },
  {
    heading: "Comprehensive Detailing Packages",
    sections: [
      {
        paragraph:
          "If you're looking for a complete car transformation, our detailing packages are the way to go. We offer a variety of packages that combine interior and exterior detailing to give your vehicle a full, comprehensive clean. Our packages can be customized to suit your needs and budget, ensuring you get the right level of service for your car.",

        image: "",
      },
    ],
  },
  {
    heading: "Specialized Detailing for Seasonal Care",
    sections: [
      {
        paragraph:
          "We know that the changing seasons can take a toll on your car, especially with salt and grime from winter roads or pollen and tree sap in the spring. To help your car stay in great shape year-round, we offer seasonal detailing services such as:",

        image: "",
        listItems: [
          "Winter Detailing: After the cold months, we’ll remove salt stains, clean your undercarriage, and ensure your vehicle is ready for the warmer months.",
          "Spring Cleaning: After the snow melts and the flowers bloom, we’ll remove any dirt and debris from the winter months and prepare your car for the sunny days ahead.",
        ],
      },
    ],
  },
  {
    heading: "Why Choose Touch and Shine Auto Detail?",
    sections: [
      {
        paragraph: "",

        image: "",
        listItems: [
          "Experienced & Professional: Our team has years of experience and is highly skilled in all aspects of auto detailing. We treat every vehicle as if it were our own, providing the best care possible.",
          "Top-Quality Products: We use only the best products on the market, ensuring that your car receives the highest level of care and protection.",
          "Customer Satisfaction Guaranteed: Our goal is to make sure you’re 100% satisfied with our services. If you’re not happy with any part of your detailing service, we’ll make it right.",
          "Convenient & Affordable: We offer competitive pricing and flexible scheduling to make auto detailing as convenient as possible. We provide top-tier service at a price that won’t break the bank.",
        ],
      },
    ],
  },
];
// const faqsData = [
//   {
//     question: "What Causes Swirl Marks on Cars?",
//     answer:
//       "Swirls are generally due to flawed washing and drying techniques. Abrasive substances, inclusive of difficult sponges or towels, and automated car washes with grimy brushes also contribute to these marks. Additionally, washing the auto in direct daylight or the usage of low-excellent products can exacerbate the trouble.",
//   },
//   {
//     question: "How to Remove Swirl Marks from Car",
//     answer:
//       "To dispose of stains, use a mark remover or a sharpening compound. Apply the product with a clean microfiber fabric or polisher, working in small sections. For severe scratches, remember a clay bar remedy or expert detailing to restore your vehicle’s end efficaciously.",
//   },
//   {
//     question: "Is It Possible to Avoid Swirl Marks?",
//     answer:
//       "Yes, minimizing stains is feasible with proper care. Use notable washing products, smooth equipment, and tender clothes. Avoid washing in direct daylight and choose hand washing as opposed to automatic car washes. Regular preservation and cautious washing techniques assist prevent stains",
//   },
//   {
//     question: "Can I Remove Swirl Marks by Hand?",
//     answer:
//       "Yes, removing swirls by using a hand is possible with a mark remover and a microfiber fabric. This approach requires greater effort and endurance as compared to machine polishing. Apply the remover in small sections, lightly work it into the paint, and buff the location until clean.",
//   },
//   {
//     question: "How to Buff Without Swirl Marks?",
//     answer:
//       "To buff without growing marks, use a smooth, tender microfiber cloth or a buffing pad. Apply light, and even pressure, and use an again-and-forth or side-to-side motion instead of circular moves. Ensure the floor is clean and avoid excessive stress to save you new blemishes.",
//   },
// ];
const Blog1 = ({ data = defaultData, title, date, author, time, comments }) => {
  return (
    <>
      {/* Header Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-r from-[#2A82AD] to-black bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-cover opacity-[0.26]"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-3xl md:text-5xl font-bold">
            {title ||
              "New Year, New Shine: Expert Auto Detailing Services to Start 2025 with a Clean Car"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 18, 2024"}
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
            src="/images/touch-new-year.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            As we embrace the start of 2025, it's the perfect time to give your
            vehicle the love and attention it deserves. Whether you’ve been on
            the road a lot during the holiday season or your car simply needs a
            fresh start, Touch and Shine Auto Detail is here to make sure you
            drive into the New Year with a shine. Let us help you kick off 2025
            with a sparkling, well-maintained vehicle that looks as good as it
            drives..
          </p>
          <h2 className="mt-6 text-lg text-blue-600">
            Why a Clean, Detailed Car is the Perfect Start to 2025
          </h2>
          <p className="mt-6">
            A clean car isn’t just about aesthetics—it’s about taking pride in
            your vehicle, improving its longevity, and starting the year on the
            right note. Here are a few reasons why 2025 is the year to treat
            your car to a thorough detailing:
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
          <h2 className="text-2xl font-bold text-black">
            Start 2025 with a Sparkle!
          </h2>
          <p className="text-md text-black mt-2">
            This year, let Touch and Shine Auto Detail help you get your vehicle
            looking its best. Whether you need a quick clean-up or a full,
            comprehensive detail, we’ve got you covered. With our expert
            services and commitment to quality, we’ll ensure your car is ready
            to shine all year long.
          </p>
          <p className="text-md text-black mt-2">
            Contact us today to schedule your detailing appointment and start
            2025 with a vehicle that looks as good as it drives.{" "}
          </p>
          <p className="text-md text-black mt-2">
          Wishing you a sparkling, successful, and shining new year from Touch and Shine Auto Detail! 🚗✨
          </p>
        </div>
        {/* FAQs Section */}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">FAQs</h2>
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-yellow-600">
                {faq.question}
              </h3>
              <p className="text-md text-white mt-2">{faq.answer}</p>
            </div>
          ))}
        </div> */}
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
