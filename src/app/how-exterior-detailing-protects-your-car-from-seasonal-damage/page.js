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
    heading: "Understanding Seasonal Maintenance for Your Car",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Seasonal maintenance means preparing your vehicle for changing
              weather to avoid costly repairs. Regular care protects your car's
              paint and prevents harmful elements from ruining its finish. It
              includes steps like{" "}
              <Link
                href="https://www.touchandshinedetail.com/services/paint-correction"
                style={{ color: "#cc3366", fontWeight: "bold" }}
              >
                washing and car waxing.
              </Link>{" "}
              washing and car waxing. Also, make sure to inspect for potential
              surface damage
            </p>
            <p className="mt-2">
              Without seasonal maintenance, your car might suffer from rust and
              scratches or even fading paint. These problems decrease resale
              value and require expensive professional repair services later.
              Neglecting care during seasonal changes increases long-term damage
              and affects your car’s performance.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Spring: Defend Against Pollen and Rain Damage",
    sections: [
      {
        paragraph:
          "Spring weather introduces pollen, rain, and tree sap, which stick to your car's surface. Detailing ensures these harmful residues do not cause stains or weaken your car's paint. Car waxing creates a protective layer. Thus making it harder for dirt to cling to surfaces.Regular washing combined with waxing is essential for maintaining your car's original shine. Spring preparation includes inspecting surfaces and applying high-quality products for added protection. Preventative measures during spring help avoid stains, scratches, and surface deterioration entirely.",
      },
    ],
  },
  ,
  {
    heading: "Summer: Guard Against Heat and UV Rays",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Intense heat and sunlight can fade paint and cause cracks in
              unprotected areas.{" "}
              <Link
                href="https://www.touchandshinedetail.com/services/exterior-detailing"
                style={{ color: "#cc3366", fontWeight: "bold" }}
              >
                Exterior detailing with car waxing
              </Link>{" "}
              shields your vehicle from UV rays and extreme heat. A high-quality
              wax reflects sunlight, reducing the risk of heat-related paint
              damage.
            </p>
            <p className="mt-2">
              Frequent cleaning removes grime, which can intensify sun exposure
              when left unchecked. Summer is the perfect time to prioritize
              detailing for a sleek and shiny finish. Parking in shaded areas
              combined with waxing offers the best protection against sun
              damage.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Autumn: Combat Leaves and Moisture Build-Up",
    sections: [
      {
        paragraph:
          "Falling leaves contain acids that can stain your car’s paint if left unaddressed. Moisture from dew and rain increases the risk of rust, especially on older vehicles. Waxing your car forms a water-resistant layer. It helps prevent moisture from seeping through.Protection tips include parking under cover and washing your car weekly during autumn. Quick action ensures your car remains free from seasonal harm and corrosion problems. Inspecting your car’s undercarriage during autumn prevents rust from spreading beyond surface levels.",

        image: "",
      },
    ],
  },
  {
    heading: "Winter: Prevent Salt and Snow from Corroding Surfaces",
    sections: [
      {
        paragraph:
          "Winter brings road salt, snow, and ice that damage your car's paint and undercarriage.Detailing before winter creates a barrier against salt, reducing corrosion and rust risks.Car waxing acts as a shield, ensuring snow and ice slide off more easily when melted.Wash your car often to remove salt deposits and preserve its original surface look.These protection tips will help maintain your car’s value during the harsh winter season.Applying an extra layer of wax ensures added protection against cold-weather damage effectively.",

        image: "",
      },
    ],
  },
  {
    heading: "Protection Tips for Year-Round Exterior Detailing",
    sections: [
      {
        paragraph:
          "Consistent care and attention keep your car looking new and performing efficiently.Use professional-grade wax to ensure better protection against weather-induced surface damage. Wash your car after every two weeks. This way, you can eliminate dirt, grime and all the harmful chemical deposits.Inspect your car's exterior regularly for chips, cracks, or any signs of rust formation. Follow these seasonal maintenance steps to enjoy a spotless, protected car all year long. Protective detailing products help extend your vehicle's lifespan and retain its original beauty.",

        image: "",
      },
    ],
  },
  {
    heading: "Benefits of Exterior Detailing for Long-Term Savings",
    sections: [
      {
        paragraph:
          "Exterior detailing ensures your car remains in excellent condition with minimal repair needs.The cost of detailing is much less than expensive repainting or rust removal services. Car waxing enhances the look of your vehicle while protecting it from severe damage. Proper seasonal maintenance increases your car’s resale value by maintaining its original appeal.Protecting your car through detailing saves money and boosts long-term performance reliability. Attention to detail prevents costly surprises and preserves your car’s premium condition longer.",

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
              "How Exterior Detailing Protects Your Car from Seasonal Damage"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 23, 2024  "}
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
            src="/images/Exterior-blog.jpg"
            alt="Smoke Odor"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Every car owner must focus on seasonal maintenance for their car's
            long-term health. Seasonal changes bring many risks that can harm
            your vehicle's exterior quality. Exterior detailing can prevent
            damage caused by harsh weather debris or sunlight exposure. Simple
            steps like car waxing and cleaning save money while maintaining your
            car's shine. In this blog, we explore why{" "}
            <Link
              href="https://www.touchandshinedetail.com/"
              style={{ color: "#cc3366", fontWeight: "bold" }}
            >
              car seasonal maintenance
            </Link>{" "}
            matters and how it helps.
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
          <h2 className="text-2xl font-bold text-black">
            Conclusion: Protect Your Car Through Seasonal Maintenance
          </h2>
          <p className="text-md text-black mt-2">
            Exterior detailing combined with seasonal maintenance protects your
            car from every weather hazard. Steps like car waxing and regular
            washing maintain your vehicle’s look and value efficiently. Follow
            these tips to shield your car from rain, snow, heat, and falling
            debris. Your car deserves the best care to stay beautiful and
            functional for many years ahead.
          </p>
          <p className="=mt-2">
            Start seasonal maintenance today and enjoy a durable, protected car
            through every season. If you need the best results, that means you
            need the best professionals. Our seasonal maintenance ensures your
            car remains a valuable asset, no matter the weather conditions.
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
