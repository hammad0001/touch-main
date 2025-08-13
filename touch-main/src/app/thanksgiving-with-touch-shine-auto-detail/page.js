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
    heading: "A Thankful Heart for a Shining Year",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Thanksgiving is a time for family, gratitude, and cherishing special moments together. It’s also an opportunity to pause, reflect, and celebrate accomplishments. At Touch & Shine Auto Detail, this season reminds us of our loyal customers who trust us to make their cars look their best.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
     
      },
    ],
  },
  {
    heading: "Prepping for Thanksgiving Travels",
    sections: [
      {
        paragraph:
          "Many hit the road to see family or friends over Thanksgiving. Before embarking on long trips, why not ensure your car looks and feels as great as your holiday spirit? Clean interiors and sparkling exteriors enhance your travel experience while showcasing your style.",
       
      },
    ],
  },
  ,
  {
    heading: "How Touch & Shine Prepares You for the Holidays",
    sections: [
      {
        paragraph:
          "Our ceramic coatings protect your car’s paint from holiday season wear, while detailed interior cleaning keeps the inside looking and smelling fresh for passengers. Whether it’s a quick polish or full detailing, we’ve got your Thanksgiving preparations covered!",
    
      },
    ],
  },
  {
    heading: "Thanksgiving Day and Your Family Car",
    sections: [
      {
        paragraph:
          "Your car is more than a mode of transport—it’s part of your memories. From Thanksgiving grocery hauls to post-dinner drives, keeping it spotless lets you enjoy the holidays even more. With Touch & Shine, your vehicle stays ready for all these moments.",
       
        image: "",
      },
    ],
  },
  {
    heading: "Gratitude in Every Detail",
    sections: [
      {
        paragraph:
          "Our team takes pride in serving Tracy, CA, and surrounding areas, offering convenience through mobile detailing services. We know how busy Thanksgiving can be, so we bring our expertise directly to your driveway.",
      
        image: "",
      },
    ],
  },
  {
    heading: "A Shiny Future Ahead",
    sections: [
      {
        paragraph:
          "This Thanksgiving, we look forward to continuing our mission of providing top-tier detailing services. Your satisfaction motivates us to deliver the best in paint correction, ceramic coating, and comprehensive car care.",
       
        image: "",
      },
    ],
  },
  {
    heading: "Celebrate the Season with Style",
    sections: [
      {
        paragraph:
          "With Touch & Shine Auto Detail, you can enter the holiday season with confidence. A professionally detailed vehicle adds elegance to any Thanksgiving celebration, whether you’re hosting or visiting loved ones.",
       
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
            {title || "Thanksgiving with Touch & Shine Auto Detail"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 27, 2024"}
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
            src="/images/thanks.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Welcome the holiday season with a touch of gratitude and gleaming
            vehicles! Touch & Shine Auto Detail, based in Tracy, CA, specializes
            in exceptional auto detailing services, including ceramic coatings,
            paint correction, and both interior and exterior detailing. Serving
            Northern California, their mission is to help car owners protect
            their vehicles’ like-new appearance while delivering unbeatable
            convenience and professionalis.
          </p>
          <p className="mt-6">
            Here’s a blog celebrating Thanksgiving, family, and polished rides
            to help you shine through the festivities!
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
       For More Details
          </h2>
          <p className="text-md text-black mt-2">
          For more information, contact Touch & Shine Auto Detail at (209) 914-9052. Let’s keep your car shining for the holidays and beyond!
          </p>
          <p className="text-md text-black mt-2">
            {" "}
         
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
