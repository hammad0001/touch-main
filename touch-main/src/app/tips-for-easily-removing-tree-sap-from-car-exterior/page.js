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
    heading: "Understanding Tree Sap and Its Effects",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Tree sap is a sticky fluid trees release to heal wounds or repel
              pests. It adheres firmly to the paint's surface when it lands on
              your car. Over time, sap hardens and becomes more challenging to
              remove. Moreover, chemicals in the sap can corrode clear coats,
              leading to discoloration and peeling. To avoid lasting damage,
              <Link
                href="https://www.touchandshinedetail.com/https://www.touchandshinedetail.com/"
                style={{ color: "#cc3366", fontWeight: "bold" }}
              >
                {" "}
                removing tree sap
              </Link>{" "}
              promptly is essential
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Why Removing Tree Sap Quickly Matters",
    sections: [
      {
        paragraph:
          "The longer tree sap sits on your car, the harder it is to remove safely. Exposure to sunlight accelerates sap’s hardening process, bonding tightly to the paint. Extended exposure could cause lasting damage, affecting the appearance of your vehicle. Taking prompt action will help you avoid unneeded costs and preserve the visual attractiveness of your car.",
      },
    ],
  },
  ,
  {
    heading: "Tools and Materials You Need",
    sections: [
      {
        paragraph:
          "To remove tree sap effectively, gather these items before starting:",
        listItems: [
          "Soft polyamide cloths for gentle wiping.",
          "Isopropyl or rubbing alcohol to break down the sap.",
          "A bucket of water and mild car wash soap.",
          " A clay bar for stubborn residues.",
          "Wax or car polish for post-removal protection.",
          "Having these essentials ready ensures smooth and damage-free sap removal.",
        ],
      },
    ],
  },
  {
    heading: "Wash the Area First",
    sections: [
      {
        paragraph:
          "Start by fully washing the affected area to remove dirt and dust. Use soap and water to clean the surface wisely. This step prevents scratching when you tackle the tree sap. Always dry the area completely with a soft microfiber towel before proceeding.",

        image: "",
      },
    ],
  },
  {
    heading: "Use Rubbing Alcohol",
    sections: [
      {
        paragraph:
          "Rub a small amount of alcohol on a clean, soft cloth. Press it against the sap spot, allowing it to sit for a few seconds. The alcohol dissolves the sap, making it easier to wipe off. Work carefully to avoid rubbing the sap into the paint, and rinse the area afterward.",

        image: "",
      },
    ],
  },
  {
    heading: "Try a Commercial Sap Remover",
    sections: [
      {
        paragraph:
          "For stubborn sap stains, consider using a commercial sap remover. Follow the product guidelines carefully to avoid overuse or damage. These products are designed to remove tree sap without affecting your car’s paint. Test a small area first to ensure compatibility.",

        image: "",
      },
    ],
  },
  {
    heading: "Clay Bar Treatment",
    sections: [
      {
        paragraph:
          "If residue remains, use a clay bar to restore smoothness. Oil the surface with clay bar oil or soapy water, then gently glide the clay bar over the sap spots. This process effectively removes embedded particles and leaves your car looking pristine.",

        image: "",
      },
    ],
  },
  {
    heading: "Finish with Wax or Polish",
    sections: [
      {
        paragraph:
          "Once the sap is removed, apply a car wax or polish layer to protect the paint. Waxing restores the car's shine. Additionally, it protects from potential sap accumulation. Frequent waxing improves the look of your vehicle and guarantees sustained protection",

        image: "",
      },
    ],
  },
  {
    heading: "Preventing Future Sap Buildup",
    sections: [
      {
        paragraph:
          "To minimize sap exposure, park your car away from trees whenever possible. If parking near trees is unavoidable, use a car cover for protection. Regular washing and waxing also create a protective barrier, making sap removal easier.",

        image: "",
      },
    ],
  },
  {
    heading: "Signs of Serious Paint Damage",
    sections: [
      {
        paragraph: "",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Discoloration on the Car Surface",
        paragraph:
          "Tree sap can stain your car’s paint, causing noticeable color changes in affected areas. If the sap is left untreated for a long time, it seeps into the clear coat over time. This leaves unsightly discoloration behind that does not fade with simple cleaning.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Etching in the Clear Coat",
        paragraph:
          "When sap hardens and reacts with sunlight, it causes chemical etching on the clear coat. Etching appears as small, uneven patches or depressions on the car's surface. This indicates permanent damage to the protective layer and requires careful attention.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Peeling Paint Layers",
        paragraph:
          "Prolonged sap exposure weakens the bond between the paint and the car’s body structure. Over time, this leads to peeling or flaking paint, exposing the surface to rust risks. Such damage compromises the car's durability and calls for urgent care.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "When to Seek Professional Help",
        paragraph:
          "See professional intervention if discoloration, etching, or peeling persists after sap removal. Experts assess the damage and use advanced restoration techniques, such as repainting or polishing.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "The Cost of Delaying Repairs",
        paragraph:
          "Ignoring damage can lead to worse issues, such as rust or costly repairs later. Early intervention ensures your car’s exterior stays protected and retains its long-term value.",

        image: "",
      },
    ],
  },
  {
    heading: "DIY vs Professional Services",
    sections: [
      {
        subheading: "",
        paragraph:
          "While DIY methods work for minor sap issues, professional exterior car detailing services provide superior results. Experts use specific gears and products to remove sap safely without risking further damage. Choosing professional care saves time and guarantees satisfaction.",

        image: "",
      },
    ],
  },
  {
    heading: "Expert Solutions for a Spotless, Damage-Free Exterior",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              We{" "}
              <Link
                href="https://www.touchandshinedetail.com/services/interior-detailing"
                style={{ color: "#cc3366", fontWeight: "bold" }}
              >specialize in removing tree sap</Link>{" "}
               from car exteriors. Our detailing
              experts use advanced techniques to eliminate sap without harming
              your car’s paint. You will receive top-notch care with us,
              ensuring your car stays pristine. Trust our team for unmatched
              quality and attention to detail.
            </p>
            <p className="mt-2">
              Don’t let tree sap damage your car’s beautiful finish! Book our
              exterior car detailing services today and let our professionals
              handle your hard work. Ensure your vehicle's security and relax,
              confident that professionals can handle it. Contact us immediately
              to book your appointment.
            </p>
          </div>
        ),
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
            {title || "Tips for Easily Removing Tree Sap from Car Exterior"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "October 10, 2024"}
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
            src="/images/tips.png"
            alt="Tips for Easily Removing Tree Sap from Car Exterior"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Removing tree sap is crucial to keeping your car’s exterior smooth
            and spotless. While seemingly harmless, tree sap can severely damage
            car paint over time. Ignoring it can result in costly repairs or
            paint jobs. Taking swift action saves you money and preserves your
            vehicle’s value. For a hassle-free solution, consider{" "}
            <Link
              href="https://www.touchandshinedetail.com/services/exterior-detailing"
              style={{ color: "#cc3366", fontWeight: "bold" }}
            >
              expert exterior car detailing services
            </Link>{" "}
            like ours for professional results.
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
          <h2 className="text-2xl font-bold text-black">Conclusions</h2>
          <p className="text-md text-black mt-2">
            Removing tree sap saves your car from harm and costly repairs later.
            Acting fast ensures sap does not ruin the paint or clear coat.
            Simple tools and steps make cleaning easy for anyone to do well.
            Regular washing, waxing, and smart parking stop sap from sticking
            again. If the damage seems serious, trust experts in car care to fix
            it quickly. Our team offers safe and skilled exterior detailing to
            help your car shine. Book now to keep your car looking its best and
            damage-free always!
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
