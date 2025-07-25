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
    heading: "Why Black Friday is the Best Time for Auto Detailing",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Black Friday is synonymous with huge discounts, special offers,
              and big savings. It’s the ideal time to invest in your vehicle,
              whether for yourself or as a gift. At Touch and Shine Auto Detail,
              we offer some of our best deals during this time. Here’s why Black
              Friday is the best time for auto detailing:
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Affordable Prices: Our Black Friday discounts help make premium detailing services more accessible.",
          "Year-Round Protection: A full detail can protect your car for the entire year ahead.",
          "Gift Ideas: Give the gift of a shiny, clean car to your loved ones this season.",
          "Pre-Holiday Preparation: Prepare your car for the busy holiday travel season with a professional clean.",
        ],
      },
    ],
  },
  {
    heading: "The Benefits of Regular Auto Detailing for Your Car",
    sections: [
      {
        paragraph:
          "Auto detailing is more than just a surface clean; it’s about maintaining the value of your vehicle. With our expert detailing services, we ensure your car stays in top condition. Regular detailing extends the life of your vehicle and keeps it looking pristine.",
        listItems: [
          "Preserves Paintwork: Detailing protects your car’s paint from damage caused by dirt and debris.",
          "Protects the Interior: Professional cleaning removes stains, dirt, and odors from your upholstery.",
          "Increases Vehicle Value: A well-maintained car holds more value when it comes time to sell.",
          "Improves Your Driving Experience: A clean car provides a more pleasant driving experience for everyone.",
          "This Black Friday, take advantage of our detailing packages to keep your vehicle in top shape. Your car deserves the best care."
        ],
      },
    ],
  },
  ,
  {
    heading: "Touch and Shine Auto Detail: Our Services and Packages",
    sections: [
      {
        paragraph:
          "At Touch and Shine Auto Detail, we offer a variety of services tailored to your needs. Whether you need an exterior wash, a deep clean, or full protection, we’ve got you covered. Our services include:",
        listItems: [
          "Exterior Detailing: A full wash, wax, and shine to make your car’s exterior gleam.",
          "Interior Detailing: Vacuuming, upholstery cleaning, and odor removal for a fresh interior.",
          "Paint Correction: Remove scratches and imperfections, restoring the look of your vehicle.",
          "Ceramic Coating: Protect your car’s paint with a long-lasting, water-repellent layer.",
          "Headlight Restoration: Restore clarity and brightness to your headlights for safer driving."
        ],
      },
    ],
  },
  {
    heading: "How Black Friday at Touch and Shine Auto Detail Works",
    sections: [
      {
        paragraph:
          "Black Friday at Touch and Shine Auto Detail is all about providing the best deals on our services. We understand that everyone is looking for value during this shopping season. That’s why we offer exclusive discounts, special packages, and bundled deals.",
        listItems: [
            "Exclusive Black Friday Packages: Choose from specially curated packages at discounted rates, available only on Black Friday.",
            "Limited-Time Offers: Act fast! Our Black Friday deals are available for a limited time only.",
            "Online Booking: Reserve your spot online for easy scheduling and quicker service.",
            "Gift Cards: Give the gift of a clean, detailed car with our gift cards.",
            "Don’t miss out on these incredible deals. Visit us this Black Friday to secure your spot."
        ],
        image: "",
      },
    ],
  },
  {
    heading: "Why Choose Touch and Shine Auto Detail?",
    sections: [
      {
        paragraph:
          "When it comes to auto detailing, you want a company you can trust. At Touch and Shine Auto Detail, we pride ourselves on offering high-quality service and customer satisfaction. Here’s why we are the top choice for auto detailing:",
        listItems: [
            "Experienced Technicians: Our team of professionals is trained in the latest detailing techniques.",
            "High-Quality Products: We only use premium products to ensure a superior finish and long-lasting results.",
            "Attention to Detail: We go the extra mile to ensure every corner of your car is spotless.",
            "Customer Satisfaction: We value our customers and strive to exceed expectations with every service.",
            "This Black Friday, we invite you to experience the Touch and Shine difference. Our commitment to quality is what keeps our customers coming back."
        ],
        image: "",
      },
    ],
  },
  {
    heading: "The Importance of Exterior Detailing Before Winter",
    sections: [
      {
        paragraph:
          "As winter approaches, it’s important to take extra care of your car’s exterior. Snow, salt, and road grime can wreak havoc on your vehicle’s paint and body. Exterior detailing before winter ensures that your car is well-protected against these harsh conditions.",
        listItems: [
            "Paint Protection: A wax or ceramic coating creates a barrier against snow and ice.",
            "Removes Contaminants: Regular cleaning removes contaminants like tar, road salt, and dirt.",
            "Prevents Rust: Detailing helps prevent rust by eliminating moisture and debris from the car’s surface.",
            "Maintains Shine: A clean, shiny car looks great and feels better to drive.",
            "Before the winter season hits, make sure your car’s exterior is ready to handle the elements. Let Touch and Shine Auto Detail prepare your vehicle for the cold months ahead."
        ],
        image: "",
      },
    ],
  },
  {
    heading: "The Best Black Friday Deals for Your Car",
    sections: [
      {
        paragraph:
          "This Black Friday, we’re offering deals that will make it easy to keep your car looking great. Whether you’re treating yourself or looking for the perfect gift, our Black Friday deals are the best in town.",
        listItems: [
            "Complete Detail Package: Get a full interior and exterior detail at a special Black Friday rate.",
            "Ceramic Coating Special: Enjoy a discounted price on our long-lasting paint protection service.",
            "Headlight Restoration Discount: Keep your headlights clear and bright with our limited-time offer.",
            "Free Add-Ons: Book any detailing service and receive a free add-on, such as an air freshener.",
            "Our Black Friday deals are designed to help you save money while getting the best auto detailing services available. Book early to secure your spot and enjoy your sparkling clean car."
        ],
        image: "",
      },
    ],
  },
  {
    heading: "Preparing for Holiday Road Trips with a Clean Car",
    sections: [
      {
        paragraph:
          "Thanksgiving, Christmas, and New Year’s are all times for travel. Whether you’re hitting the road for family visits or a holiday getaway, make sure your car is ready. A professional detail will not only enhance your car’s appearance, but it will also make your road trips more comfortable.",
        listItems: [
            "Cleaner Interiors: Enjoy a fresh, clean interior with vacuuming, upholstery cleaning, and more.",
            "Smudge-Free Windows: Clear, clean windows provide better visibility for safer driving.",
            "Organized Storage: A detailed car interior helps you stay organized during long trips.",
            "Fresh Air: Air fresheners and odor removal services ensure your car smells pleasant.",
            "Get your car road-trip ready this Black Friday. Our detailing services will make your journey more enjoyable and stress-free."
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
              "Touch and Shine Auto Detail: Get Ready for Black Friday Deals"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 28, 2024"}
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
            src="/images/b-fri.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Black Friday is just around the corner, and it’s the perfect time to
            treat your car. At Touch and Shine Auto Detail, we know that your
            vehicle deserves a little love. Whether you’re preparing for road
            trips, daily commutes, or simply want to keep your car looking
            fresh, Black Friday offers the perfect opportunity. This year, take
            advantage of our special deals and promotions that will leave your
            car looking brand new.
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
            Final Thoughts: Don’t Miss Out on Black Friday at Touch and Shine
            Auto Detail
          </h2>
          <p className="text-md text-black mt-2">
            This Black Friday, treat yourself and your car to the best auto
            detailing services in town. At Touch and Shine Auto Detail, we offer
            unbeatable prices, exclusive packages, and expert care. Whether you
            need an exterior clean, interior detailing, or paint protection,
            we’ve got the services you need to keep your car looking its best.
          </p>
          <p className="text-md text-black mt-2">
            {" "}
            Black Friday is the perfect time to show your car some love. Don’t
            miss out on these incredible deals. We look forward to seeing you
            this Black Friday!
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
