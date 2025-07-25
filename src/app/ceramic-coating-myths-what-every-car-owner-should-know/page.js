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
    heading: "Myth 1: Ceramic Coating Makes Cars Scratch-Proof ",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One big myth is that ceramic coatings completely stop scratches.
              This is untrue. Coatings are resistant to light scratches but not
              deep or hard ones. They enhance paint by forming a protective
              barrier but cannot work like bulletproof armor. Regular car
              maintenance remains vital to keep your car’s paint flawless.
              Cleaning it gently and avoiding rough objects protects the coating
              effectively. Recognizing this limitation assists in establishing
              realistic expectations for vehicle owners.
            </p>
            <p className="mt-2">
              Scratches frequently happen due to incorrect washing methods or
              unintentional contact with rough surfaces. These risks persist
              even when a ceramic coating is applied. To minimize the risk of
              scratches, always utilize microfiber cloths and pH-neutral
              detergents. These items provide gentle cleaning, maintaining both
              the finish and your vehicle's paint.{" "}
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Myth 2: You Never Need to Wash Your Car Again  ",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Another false claim is that ceramic coatings make washing
              unnecessary. Dirt still sticks. The coating reduces how much grime
              sticks but does not eliminate the need for cleaning. Regular
              washing remains essential for preserving the shine and health of
              your car’s surface. Always use gentle soaps that support{" "}
              <Link
                href="https://www.touchandshinedetail.com/services/paint-correction"
                style={{ color: "#cc3366", fontWeight: "bold" }}
              >
                paint care and protect the coating
              </Link>{" "}
              . Failing to wash regularly can result in the accumulation of
              dirt, diminishing your car's look as time passes.
            </p>
            <p className="mt-2">
              Regular cleaning stops substances such as bird droppings or tree
              sap from penetrating the coating. These substances are acidic and
              can compromise the protective layer if left untreated. Washing
              your car weekly or as needed ensures the long-lasting shine and
              effectiveness of the coating.
            </p>
          </div>
        ),
      },
    ],
  },
  ,
  {
    heading: "Myth 3: Ceramic Coating Works Forever ",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Nothing lasts forever, including ceramic coatings. They offer
              excellent durability but eventually fade. Environmental factors
              like sunlight, rain, and pollution gradually wear them down.
              Following proper car maintenance routines extends their life.
              Waxing over the coating or using recommended sealants can improve
              protection. Consistent upkeep ensures your investment remains
              worthwhile
            </p>
            <p className="mt-2">
              Ceramic coatings normally last between two to five years,
              depending on usage and care. Applying a maintenance spray designed
              for ceramic coatings can further enhance durability and
              performance.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Myth 4: All Ceramic Coatings Are the Same ",
    sections: [
      {
        paragraph:
          "Not all coatings offer the same quality or durability. Some products deliver superior results, while others may fail. Researching trusted brands and professional applications ensures your investment works effectively. Choose wisely and follow expert guidance to maintain the coating. High-quality products often include warranties, providing peace of mind for car owners.Cheap or subpar coatings may initially seem cost-effective but often fail under harsh conditions. Investing in a premium product and professional service ensures optimal protection and longevity. Reviews and testimonials from other people can guide you toward the best choices.",

        image: "",
      },
    ],
  },
  {
    heading: "Myth 5: DIY Ceramic Coating Is Just as Good ",
    sections: [
      {
        paragraph:
          "Many believe DIY kits match professional application results. But professionals offer precision. Incorrect application risks uneven layers or peeling, leaving your paint unprotected. Skilled applicators provide reliable coating facts, ensuring long-lasting benefits. Trusting professionals helps avoid costly mistakes and ensures quality. DIY attempts often lack the tools and expertise needed for flawless results.Professionals use specialized equipment to clean and prepare the surface before application. This preparation ensures the coating bonds effectively, providing maximum durability. Attempting to skip these steps in a DIY project can lead to poor adhesion and a reduced lifespan for the coating.",

        image: "",
      },
    ],
  },
  {
    heading: "Why Understanding Coating Facts Matters",
    sections: [
      {
        paragraph:
          "Understanding Coating Facts helps debunk these myths and guides better decisions. Ceramic coatings significantly improve paint and simplify maintenance. However, knowing their limits prevents unrealistic expectations. Awareness also ensures you care for your car properly, avoiding unnecessary damage. Proper education about ceramic coatings ensures better results and satisfaction for car owners.Many car enthusiasts rely on marketing claims, which can be misleading. Taking the time to learn about ceramic coatings from trusted sources empowers car owners to make informed choices. This knowledge also helps avoid scams or substandard products in the market.",

        image: "",
      },
    ],
  },
  {
    heading: "Benefits Beyond the Myths",
    sections: [
      {
        paragraph: "",

        image: "",
        listItems: [
          "Improved UV protection that preserves paint from fading or sun damage.",
          "Enhanced gloss that gives your car a showroom-like shine.",
          "Resistance to chemicals, reducing damage from environmental contaminants.",
          "Easier cleaning due to the hydrophobic nature of ceramic coatings.",
          "Long-lasting results when combined with routine car maintenance practices.",
          "Protection against minor scratches and swirl marks with proper care techniques.",
          "Cost-effectiveness over time compared to regular waxing and polishing services.",
        ],
      },
    ],
  },
  {
    heading: "Take the Next Step for Flawless Car Paint",
    sections: [
      {
        paragraph:
          "Ready to experience the best ceramic coating services? Contact us today for expert assistance! Our team ensures quality applications and answers all your questions. Protect your car’s paint with professional care and long-lasting results!",

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
            {title || "Ceramic Coating Myths: What Every Car Owner Should Know"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 28, 2024 "}
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
            src="/images/Ceramic-Coating-Myths.jpg"
            alt="Ceramic-Coating-Myths"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Ceramic coating has appeared as a favored option for vehicle owners
            seeking enhanced protection. Anyway, not all the information you
            receive is accurate; numerous myths mislead individuals regarding
            it. Let’s clarify frequent misconceptions about
            <Link
              href="https://www.touchandshinedetail.com/"
              style={{ color: "#cc3366", fontWeight: "bold" }}
            >
              ceramic coating myths for car owners
            </Link>{" "}
            and eliminate any confusion on this subject. We will additionally
            cover pertinent facts related to coating, emphasizing paint
            protection and appropriate vehicle maintenance.
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
          <h2 className="text-2xl font-bold text-black">Final Thoughts</h2>
          <p className="text-md text-black mt-2">
            Ceramic coatings are great for protecting and improving your
            vehicle's paint. Disproving these ceramic coating myths for car
            owners provides a better grasp of their advantages and limitations.
            Understanding key facts for coating guarantees, you make informed
            investments while emphasizing proper maintenance of paint.
            Consistently adhere to suggested care for cars and guidelines to
            ensure your vehicle remains in excellent condition for years
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
