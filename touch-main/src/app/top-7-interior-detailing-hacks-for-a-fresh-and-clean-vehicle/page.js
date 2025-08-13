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
    heading: "Why Interior Detailing Matters",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A clean car interior is more than just eye-pleasing! It impacts
              your health and comfort as well as the car’s value. Over time,
              dirt and smells can build up, affecting your driving experience.
              <Link
                href="https://www.touchandshinedetail.com/"
                style={{ color: "#cc3366", fontWeight: "bold" }}
              >
                Regular detailing provides
              </Link>{" "}
              several benefits:
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Enhances air quality inside the car.",
          "Prevents upholstery wear and tear.",
          "Boosts resale value.",
          "Improves driving comfort.",
        ],
      },
    ],
  },
  {
    heading: "Essential Tools for Interior Detailing",
    sections: [
      {
        paragraph:
          "Before starting, gather the tools and products you’ll need for effective cleaning. Having the right items ensures quicker and better results",
      },
    ],
  },
  ,
  {
    heading: "",
    sections: [
      {
        subheading: "Basic Cleaning Tools",
        paragraph: "",
        listItems: [
          "Microfiber cloths",
          "Soft-bristle brush.",
          "Vacuum with attachments",
          "Spray bottle",
          ,
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Recommended Cleaning Products",
        paragraph: "",
        listItems: [
          "All-purpose cleaner",
          "Stain remover",
          "Glass cleaner",
          "Fabric protector",
        ],
        image: "",
      },
    ],
  },
  {
    heading: "Top 7 Interior Detailing Hacks",
    sections: [
      {
        paragraph:
          "These simple cleaning tips will help you tackle everything from crumbs to stubborn stains with ease.",

        image: "",
      },
    ],
  },
  {
    heading: "Vacuum First, Always",
    sections: [
      {
        paragraph:
          "Vacuuming removes loose dirt and debris. This makes the rest of the process easier. Focus on seats, carpets and under the mats.",
        listItems: [
          "Start with seats and work your way down.",
          "Use a narrow attachment for tight spaces.",
          "Clean under and around the seats thoroughly.",
        ],
        image: "",
      },
    ],
  },
  {
    heading: "Use Baking Soda for Bad Smells",
    sections: [
      {
        paragraph:
          "Baking soda is like a natural deodorizer. It can absorb various unpleasant odors. And greatly refresh your vehicle. ",
        listItems: [
          "Put some on the carpets and the upholstery.",
          "Leave it there for about 15 minutes.",
          "Vacuum thoroughly to remove any residues.",
        ],
        image: "",
      },
    ],
  },
  {
    heading: " Remove Stains with a DIY Solution",
    sections: [
      {
        paragraph:
          "A basic blend of vinegar and water does many amazing things for most car stains.",
        listItems: [
          "Add half vinegar and half water in a spray bottle.",
          "Spray it on the stained area",
          "Blot with a clean microfiber cloth, avoiding rubbing.",
        ],
        image: "",
      },
    ],
  },
  {
    heading: " Clean Vents for Fresh Air",
    sections: [
      {
        paragraph:
          "Dusty air vents can accumulate allergens and bad smells within. It is essential to use a gentle brush to clean them periodically.",
        listItems: [
          "Brush away the dust on the vents gently.",
          "Use a vacuum to remove any debris.",
          "Spray lightly with a disinfectant for added car freshness.",
        ],
        image: "",
      },
    ],
  },
  {
    heading: " Polish Leather Surfaces",
    sections: [
      {
        paragraph:
          "Leather surfaces require special care to maintain their softness and shine",
        listItems: [
          "Clean leather with a specific cleaner.",
          "Wipe gently with a microfiber cloth.",
          "Finish with conditioner to prevent cracks and wear.",
        ],
        image: "",
      },
    ],
  },
  {
    heading: " Refresh Windows with a Streak-Free Cleaner",
    sections: [
      {
        paragraph:
          "Clean, streak-free windows improve visibility and elevate your car’s overall look.",
        listItems: [
          "Spray glass cleaner directly on the surface.",
          "Wipe in circular motions with a microfiber cloth.",
          "Pay extra attention to corners for a spotless finish.",
        ],
        image: "",
      },
    ],
  },
  {
    heading: "  Use Dryer Sheets for Dust Control",
    sections: [
      {
        paragraph:
          "Dryer sheets repel dust and are perfect for dashboards and panels.",
        listItems: [
          "Gently wipe surfaces with a dryer sheet..",
          "Replace as needed to maintain a dust-free interior.",
          "Enjoy a fresh scent while cleaning..",
        ],
        image: "",
      },
    ],
  },
  {
    heading: "  Additional Tips for Long-Lasting Cleanliness",
    sections: [
      {
        paragraph:
          "Consistency is key to keeping your car clean. These extra tips will help maintain a spotless interior:",
        listItems: [
          "Always keep a trash bag in the car for any immediate waste.",
          "Use seat covers and floor mats to protect the upholstery.",
          "Avoid eating inside the car to keep away crumbs and spills.",
        ],
        image: "",
      },
    ],
  },
  {
    heading: " The Final Touch: Add a Fresh Scent",
    sections: [
      {
        paragraph:
          "A pleasant scent enhances the driving experience. Choose one of these methods to keep your car smelling great:",
        listItems: [
          "Use an essential oil diffuser.",
          "Place scented gel fresheners in hidden spots.",
          "Create some sachets with dried lavender or baking soda.",
        ],
        image: "",
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
              "Top 7 Interior Detailing Hacks for a Fresh and Clean Vehicle"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "January 4, 2025 "}
            />
            <InfoItem icon={<FaClock />} text={time || "12:01 am"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#2A82AD] p-2 inline-block">
          <img
            src="/images/interior-blog.png"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Keeping a tidy car interior may seem difficult at first, but soon it
            will not be. Using the appropriate methods and equipment, you can
            maintain your car perfectly and fragrant. If you're facing tough
            stains, annoying smells, or regular grime, these{" "}
            <Link
              href="https://www.touchandshinedetail.com/services/interior-detailing"
              style={{ color: "#cc3366", fontWeight: "bold" }}
            >
              interior detailing hacks
            </Link>{" "}
            will help your car appear and feel like it's fresh off the lot.
            Let's discover these transformative tips
          </p>
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
            A clean car interior doesn’t only just look good, you know. It feels
            special, too. These interior detailing hacks are simple yet
            effective, helping you maintain a fresh and inviting vehicle. Start
            with basic vacuuming, address specific issues like stains and odors,
            and finish with protective steps to enjoy lasting results.
          </p>
          <p className="text-md text-black mt-2">
            {" "}
            Take charge of your car’s cleanliness today. We can elevate your
            driving experience to a new level of comfort and style. Leave it to
            us to make sure that your ride is clean and beautiful.
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
