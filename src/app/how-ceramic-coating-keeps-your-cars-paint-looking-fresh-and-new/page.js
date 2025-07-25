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
    heading: "Why Paint Protection Matters",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Your car faces a battle against nature. The sun beats down. Rain
              pours. Dust settles. Therefore, this exposure dulls the paint.
              This makes your car look old. That’s where{" "}
              <a
                className="text-blue-600 font-bold"
                href="https://www.touchandshinedetail.com/services/paint-correction"
              >
                paint correction helps.
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
    heading: "Advanced Car Care Solution",
    sections: [
      {
        subheading: "Long-Lasting Protection",
        paragraph:
          "Unlike wax, which wears off fast, ceramic coating lasts. As a result, your car maintains its shine. It also stays protected from damage.",
      },
    ],
  },
  ,
  {
    heading: "",
    sections: [
      {
        subheading: "Effortless Maintenance",
        paragraph: (
          <div>
            <p>
              With{" "}
              <a
                className="text-blue-500 font-bold"
                href="https://www.touchandshinedetail.com/services/ceramic-coating"
              >
                ceramic coating
              </a>
              , dirt does not stick. Therefore, this means fewer washes. It
              also means less scrubbing.
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
        subheading: "UV Ray Defense",
        paragraph:
          "The sun’s rays fade car paint. On the other hand, ceramic coating shields it. It keeps the color vibrant.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Weather Resistance",
        paragraph:
          "Rain and extreme temperatures harm cars. Besides, the ceramic coating provides a barrier. This protects against harsh weather",

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
              Road salts and bird droppings ruin the paint. Even though they are
              harmful, the ceramic coating prevents damage
            </p>
            <p className="mt-2">
              Waxing and polishing are tiring. With ceramic coating,{" "}
              <strong>car care is easy</strong>. Ultimately, this formula lasts
              longer. One use keeps your car shining. It also cuts the need for
              touch-ups.
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
        subheading: "Deep Gloss and Shine",
        paragraph:
          "It not only protects the paint but also enhances it. For example, the gloss adds a mirror-like effect. This makes your car look sleek. Ceramic coating gives any vehicle a showroom look.",

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
    heading: "",
    sections: [
      {
        subheading: "Protection from Scratches and Stains",
        paragraph: (
          <div>
            <p>
              Scratches damage your car’s appearance look. However, the ceramic
              coating helps. It doesn’t make your car scratch-proof. But it
              absorbs small abrasions. Bird droppings, tree sap, and bug
              splatters are stubborn. Then, these stains eat at the paint,
              leaving marks. But with a ceramic coating, they sit on the surface
              and wipe away fast.
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
        subheading: "Prevents Chemical and Environmental Damage",
        paragraph: (
          <div>
            <p>
              Your car faces pollution and acid rain. Because these corrode the
              paint, they cause damage. The ceramic coating acts as a shield. It
              prevents harmful elements from penetrating. Furthermore, it stops
              oxidation. It keeps the paint intact. It also prevents costly
              damage.
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
        subheading: "Saves Time and Money on Maintenance",
        paragraph: (
          <div>
            <p>
              Car maintenance takes effort. Although waxing needs redoing often,
              polishing requires skill. Ceramic coating is a smart investment.
              Next, it cuts the need for detailing. This saves time and cash.
              You’ll spend less on washes. You’ll enjoy your ride more.
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
        subheading: "Enhances the Car’s Gloss and Aesthetic Appeal",
        paragraph: (
          <div>
            <p>
              Who doesn’t love a car that looks new? In fact, ceramic coating
              enhances your car. It adds a glossy finish. It makes the paint
              look richer. Unlike wax, which fades fast, this coating keeps its
              shine. Besides, your car always looks polished. This applies even
              after long trips.
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
              If you sell your car later, ceramic coating is a great choice. On
              the other hand, a well-kept car with clean paint attracts buyers
              and sells at a better price. A car with protected paint shows less
              wear. This makes it more appealing. Ultimately, with ceramic
              coating, you enjoy a stunning ride. But you also get a better
              return
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
              Washing cars wastes water. For example, with ceramic coating, your
              car stays clean longer. This cuts the need for frequent washing.
              Since dirt doesn’t stick, a rinse is enough. Therefore, this saves
              water. It also reduces your carbon footprint. This makes it a
              smart choice.
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
              Your vehicle merits the finest. Provide enduring protection and
              unmatched luster with ceramic coating. Bid farewell to regular
              waxing and frequent cleanings. Take delight in a smooth, shiny
              surface that endures over time. Protect your paint from grime,
              sunlight, and severe weather conditions.
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
              "How Ceramic Coating Keeps Your Car’s Paint Looking Fresh and New"}
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
            src="/images/ceramic-coating-keeps-your-cars.jpg"
            alt="Christmas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Ever wished your car could keep that fresh-off-the-lot shine? Well,
            there’s good news! Ceramic coating makes that dream real. This
            shield protects your car's paint. It gives an appearance like new.
            Ceramic coating bonds to the paint. It forms a tough, invisible
            layer. This keeps dirt, water, and sun rays away. Therefore, the
            result is a stunning shine. It also provides a shield that makes
            heads turn.
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
