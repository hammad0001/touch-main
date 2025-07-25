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
    heading: "Why Paint Protection and Mobile Detailing Matter",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
                            Vehicles face constant exposure—UV rays, dirt, bird droppings, road grime, and pollutants. That exposure dulls your paint and ages your finish prematurely. Mobile detailing solves this by delivering services directly to you, saving time—and ceramic coating adds a durable layer of protection against all of that.{" "}
{" "}
              <a
                className="text-blue-600 font-bold"
                href="https://www.touchandshinedetail.com/services/paint-correction"
              >
                Imagine a hydrophobic coating that repels water and contaminants, minimizing scratches and fading effects caused by the sun. That’s where paint correction and ceramic coating together offer a smart solution.
              </a>
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
        subheading: "",
        paragraph: (
          <div>
            <p>
              Ceramic coating acts like armor. It blocks UV rays. This prevents
              the sun from fading your car’s color. In addition, it stops dirt
              from sticking. This keeps your car cleaner. A simple rinse removes
              the mess. This saves you effort.
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
    heading: "What to Look For in California Mobile Services",
    sections: [
      {
        subheading: "Extensive, Long‑Lasting Protection",
        paragraph:
          "Choose providers using professional ceramic coatings (typically SiO₂‑based). Unlike wax, which wears away in weeks or months, these coatings chemically bond to your paint, offering years of defense—from UV damage, road salts, and environmental fallout",
      },
    ],
  },
  ,
  {
    heading: "",
    sections: [
      {
        subheading: "Superb Convenience",
        paragraph: (
          <div>
            <p>
              Mobile teams travel to your location—home, office, or event—so you avoid the hassle of drop‑off or wait times. That means your car gets treated while you carry on with your day.
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
        subheading: "Outstanding Gloss and Shine",
        paragraph:
          "A top-quality coating gives a mirror-like depth and sparkle, often rivaling freshly polished paint. The fuller appearance and enhanced gloss elevate your car’s aesthetic instantly",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Hydrophobic Barrier",
        paragraph:
          "Ceramic’s water‑repellent surface causes water to bead and roll off, carrying dirt and grime with it. That keeps your car cleaner longer and makes washing easier",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Chemical Resistance",
        paragraph: (
          <div>
            <p>
              While not scratch‑proof, ceramic coatings absorb light abrasions, and stains—like bird droppings or tree sap—wipe off more easily without etching into the paint
            </p>
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
        subheading: "Maintenance Efficiency",
        paragraph:
          "Skilled pros often offer maintenance packages—periodic inspections, hydrophobic boosters, wash‑friendly detailing—to keep your coating in peak form and extend its lifespan",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "The Power of a Hydrophobic Surface",
        paragraph:
          "Imagine a car that repels water. Meanwhile, that’s what a hydrophobic surface does. Ceramic coating creates a slick barrier. It makes water roll off. Rain and spills won’t stain. Therefore, dirt won’t stick. Cleaning your car is easy. With a wipe or rinse, your car looks spotless.",

        image: "",
      },
    ],
  },
  {
    heading: "Choosing the Right Provider in California",
    sections: [
      {
        subheading: "Verify Professional Application",
        paragraph: (
          <div>
            <p>
              Seek services that include paint correction and surface decontamination (e.g. clay barring, polishing) before coating. A flawless surface ensures flawless results
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
        subheading: "Insist on Proper Curing Time",
        paragraph: (
          <div>
            <p>
              Ensure the technician allows the right curing window—usually several hours post-application in a controlled environment—to ensure maximum bonding and durability.
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
        subheading: "Use Recommended Maintenance Protocols",
        paragraph: (
          <div>
            <p>
              Premium detailing shops recommend following specific maintenance steps to preserve your vehicle’s finish. These include washing only with pH‑neutral shampoo, avoiding tunnel-style car washes that can cause damage, using proper drying towels to prevent scratching, and scheduling periodic evaluations or reapplications of protective coatings.
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
        subheading: "Benefits That Last",
        paragraph: (
          <div>
            <p>
              When mobile detailing is combined with ceramic coating and properly maintained, the results offer long-term advantages. It preserves the car’s brightness while preventing oxidation or fading, reduces the need for frequent washing or upkeep, maintains the paint’s integrity to boost resale value, and greatly enhances both the visual shine and ease of daily maintenance.
            </p>
            <p className="mt-2">
              Read Blog:
              <a
                className="text-blue-900 font-bold"
                href="https://www.touchandshinedetail.com/benefits-of-interior-ceramic-coating"
              >
                {" "}
                Benefits of Interior Ceramic Coating
              </a>
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Boosts Resale Value",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Thinking about selling your car in the future? Ceramic coating can increase its market appeal. A well-maintained exterior with protected paint shows fewer signs of aging—making it more attractive to potential buyers. Not only does your vehicle look stunning while you own it, but you also stand to gain a higher resale value when it’s time to sell.
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
    heading: "Eco-Friendly Solution for Car Owners",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Ceramic coating helps reduce water waste by keeping your car cleaner for longer. Since dirt and contaminants don’t stick easily, a simple rinse is often enough—cutting down the need for frequent, full washes. This eco-friendly advantage not only conserves water but also helps lower your environmental impact over time.
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
    heading: "Protect and Shine with Ceramic Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Give your car the ultimate finish with long-lasting protection and a high-gloss shine. Ceramic coating shields your paint from harsh UV rays, road grime, and extreme weather. Say goodbye to constant waxing and enjoy a slick, mirror-like surface that stays cleaner and looks better for longer.


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
              "Where to Find Quality Mobile Auto Detailing and Ceramic Coating in California"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "January 14, 2024"}
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
            src="/images/Where to Find Quality Mobile Auto Detailing and Ceramic Coating in California.webp"
            alt="Where to Find Quality Mobile Auto Detailing and Ceramic Coating in California"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Ever wanted that showroom‑fresh look for your car, no matter where in California you are? Good news: elite mobile auto detailing and ceramic coating services now bring the shine right to your driveway. These teams deliver a professional-grade finish that revives your paint and preserves its luster for miles to come.
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
            If you want the best protection for your car, let yourself know.
            Ceramic coating is the ideal choice. Since it offers protection, it
            reduces upkeep. It also maintains the freshness of your car. Bid
            farewell to waxing. Experience a durable luster. Put your money into
            ceramic coating today. Savor a breathtaking journey!
          </p>
          <p className="text-md text-black mt-2"></p>
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
