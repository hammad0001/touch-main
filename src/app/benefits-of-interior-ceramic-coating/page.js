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
    heading: "What is Ceramic Coating for Inside the Car?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Ceramic coating within the vehicle is a clear, defensive layer
              that bonds to surfaces. It forms a tough shield that guards
              against dirt, spills, and other messes. The coating prevents
              drinks from sticking to the seats or carpets and makes cleaning
              less complicated. It acts as an invisible barrier to protect
              against stains and marks. This is critical for maintaining the
              condition of your car interiors for longer periods. The process
              involves applying a liquid solution that hardens into a thin,
              long-lasting layer. With this extra layer, your car will remain
              spotless and delightful with minimal effort.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How Does Ceramic Coating Work on Car Interiors?",
    sections: [
      {
        paragraph:
          "The ceramic coating bonds directly to the interior surfaces of your car. It creates an effective barrier that repels dust, beverages, and stains. When you spill something, the liquid beads up and, maybe without difficulty, is wiped away. The coating additionally reduces the adhesion of dust, which prevents filth buildup through the years. It makes surfaces more resistant to wear, fading, and discoloration from UV rays. Additionally, it works on various surfaces like seats, dashboards, and door panels. This protective protection makes your car interiors much less difficult to maintain and keeps it looking new.",
      },
    ],
  },
  ,
  {
    heading: "Benefits of Ceramic Coating for Car Interiors",
    sections: [
      {
        paragraph:
          "Using ceramic coating on your car’s interiors brings many essential benefits. Firstly, it offers enduring defense against stress, upkeeping your seats and carpets. It protects your car's interior from dangerous UV rays, stopping fading and cracking. Third, the coating makes regular cleaning tasks faster and more effective. You won’t need to scrub or clean as often, saving time. Fourth, the protection helps maintain the value of your vehicle, which is important for resale. Finally, it reduces the amount of wear and tear, keeping your interior in top condition. Your car will always look great with minimal effort.",
      },
    ],
  },
  {
    heading: "How Do They Make a Ceramic Coating Last Longer?",
    sections: [
      {
        paragraph:
          "Proper care and preservation are important to extend the existence of your ceramic coating. Regularly wipe down surfaces to prevent dust and particles from being cleaned up. Avoid using harsh chemical substances that degrade the protective layer over the years. It is essential to observe the care commands provided by the producer. When you ease your car, use mild products to maintain the coating. Reapply the coating while vital to ensure it keeps its effectiveness. By following those easy steps, you may revel in the benefits of your ceramic coating for a long period. Regular maintenance is key to a long-lasting result.",

        image: "",
      },
    ],
  },
  {
    heading: "Why Choose Professional Ceramic Coating for Car Interiors?",
    sections: [
      {
        paragraph:
          "Choosing professional ceramic coating in your car’s interiors guarantees top-quality outcomes. Professionals are trained to apply the coating correctly for the best protection. They use high-grade products that bond well with various interior materials. A professional can coat hard-to-reach areas, providing thorough coverage for the entire car. Moreover, the results from professional applications tend to last longer than DIY kits. Professional ceramic coatings are regularly longer-lasting and more resistant to put on and tear. Ultimately, this enables you to save time and money. Knowing that professionals have handled your vehicle also gives you peace of mind.",

        image: "",
      },
    ],
  },
  {
    heading: "Keep Your Car Fresh with Ceramic Coating for Inside the Car",
    sections: [
      {
        paragraph:
          "Shield your vehicle's interior with our top-tier ceramic coating designed for the inside of your car. Our skilled group guarantees enduring defense against stains, dirt, and spills. Our service lets your car’s seats and surfaces stay cleaner for longer. Say goodbye to frequent cleaning and UV damage. Trust our professionals for a flawless finish that enhances your car’s look. Book your ceramic coating today and enjoy a fresh, clean interior. Contact us now to schedule your appointment and keep your car looking new!",

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
            {title || "Benefits of Interior Ceramic Coating"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "October 20, 2024"}
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
            src="/images/Interior-coating-benefits.png"
            alt="Interior-coating-benefits"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Your car’s interior merits equal attention to that of its outdoors.
            Ceramic coating for inside the car offers a long-lasting solution
            for car owners. Maintaining your car interiors is vital to keeping
            them looking smooth and sparkling. This coating now protects your
            car and enhances its ordinary look. With this safety, you will
            notice a huge difference in your car’s cleanliness. The defensive
            layer reduces the need for common cleaning and keeps dirt away. Over
            time, the interior will appear well-kept, as the coating prevents
            unwanted buildup
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
            Ceramic coating inside the vehicle offers various advantages that
            defend and maintain the interiors. It keeps your car looking new in
            the long term by preventing stains and UV damage. The coating
            reduces the want for common cleansing, saving time and effort. By
            following simple care methods, you can ultimately make the coating
            last longer. Choosing expert installation guarantees higher results
            and longer-lasting protection. Investing in ceramic coating is smart
            for everyone looking to preserve their car's interior. It will keep
            your car looking great and guarded for many years.
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
