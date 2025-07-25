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
    heading: "Understanding Smoke Odor",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Smoke smell develops due to cigarette use inside a car. When
              someone smokes in a car, smoke debris settles into the seats,
              carpets, and air. These particles create an unsightly and chronic
              smell that can be tough to dispose of. The odor can stick to
              fabric and hard surfaces alike. If you do not act quickly, the
              smell can become worse over time. Smoke can cling to the windows
              and the headliner, making removing it hard. Each time you enter,
              the odor can hit you hard. Understanding this can help you focus
              on how to clean it well.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How to Remove Cigarette Odor from Car",
    sections: [
      {
        paragraph: "",
        listItems: [
          "Begin by removing any trash or old items from the car.",
          "This will make a big change in how the car feels.",
          "Cleaning out items makes the interior feel more open and clean.",
          "Take out old cups, food bags, and any trash you find.",
          "Next, vacuum the entire interior thoroughly to remove dust and debris.",
          "Focus on getting into crevices to reach hidden dirt and bits.",
          "Pay special attention to under the seats and in the corners.",
          "Removing all loose dirt will help your next steps work better.",
        ],
      },
    ],
  },
  ,
  {
    heading: "Cleaning Surfaces to Remove Smoke Odor",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Consider using an upholstery cleaner particularly designed to
              <Link
                href="https://www.touchandshinedetail.com/services/exterior-detailing"
                style={{ color: "#cc3366", fontWeight: "bold" }}
              >
                remove smoke odor from cars
              </Link>{" "}
              . Spray the cleanser on the affected regions and scrub lightly
              with a smooth brush. Ensure you do not soak the cloth too much,
              which could damage it. Use a clean cloth to spot and absorb any
              excess cleaner you use. Steam cleaning can effectively eliminate
              smoke particles trapped deep in fibers, providing deep cleaning
              benefits. This method also helps to remove germs and dirt. Follow
              the cleaner’s instructions closely for the best results.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Utilizing Air Fresheners and Odor Remover",
    sections: [
      {
        paragraph:
          "Activated charcoal works well to absorb smoke odors in your car. Place bags of charcoal in various spots inside your vehicle for the best results. These bags can trap odors and keep the air fresh for weeks. You can also use baking soda as a simple alternative. Additionally, you can use essential oil diffusers for a pleasant scent. Choose scents like lavender or citrus to freshen up the air inside. This small step can make a vast difference in how your car smells.",

        image: "",
      },
    ],
  },
  {
    heading: "Replacing Cabin Air Filters",
    sections: [
      {
        paragraph:
          "Your cabin air filter can trap smoke odor over time. Check and replace it regularly to ensure better air quality. A fresh filter can help maintain a clean environment inside your car. This is often a simple task that anyone can do with a guide. Good air quality is important for your health and comfort while driving. A clean filter can also improve your car's overall airflow. It will ensure that you breathe easier while on the road.",

        image: "",
      },
    ],
  },
  {
    heading: "Final Tips for Smoke Odor Car Removal",
    sections: [
      {
        paragraph: "",

        image: "",
        listItems: [
          "Regular cleaning can prevent future odors from forming in your car.",
          "Always vacuum and wipe surfaces each week to keep odors away.",
          "Make it a habit to check your car after each drive.",
          "Consider pro detailing services for a more thorough odor removal.",
          "They have tools and products that remove stubborn smells well.",
          "These pros can often restore your car's look to like-new.",
          "A full clean can bring back the fresh air you need.",
          " Always ask for a clear quote before you agree to their help.",
        ],
      },
    ],
  },
  {
    heading: "Revive Your Ride!",
    sections: [
      {
        paragraph:
          "Transform your car's interior with our incomparable detailing service. Our team removes dirt, dust, and stains for a fresh feel. We use safe, eco-friendly products to ensure your comfort. Enjoy a clean and healthy space every time you drive. Do not wait any longer! Book your appointment now and see the difference. Treat your car to the care it deserves today. Experience the joy of driving in a spotless interior again. Your ride will thank you!",

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
              "How to Remove Smoke Odor from Car and Restore Fresh Air Inside?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 10, 2024"}
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
            src="/images/Smoke-Odor.png"
            alt="Smoke Odor"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Many people experience smoke odor in their cars. The smell can
            linger and create an uncomfortable driving experience. You must
            learn how to remove cigarette odor from car interiors effectively. A
            clean and fresh environment makes driving enjoyable and healthier
            for all. With some time and effort, you can bring back that fresh
            air.
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
            Removing smoke odor from cars is essential for a pleasant driving
            experience. By following these steps, you can restore fresh air
            inside your vehicle. Take action today for a cleaner and healthier
            environment on the road. With a bit of work, you can have a car that
            smells good again. Enjoy driving in your fresh and clean car once
            more
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
