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
    heading: "Why Choose Touch and Shine Auto Detail?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              At Touch and Shine Auto Detail, we specialize in giving your
              vehicle the care it deserves. We understand that your car is more
              than just a mode of transportation; it’s an investment, a part of
              your daily life, and a reflection of your personal style. Our team
              is dedicated to making sure your car shines like new this
              Christmas season, so you can enjoy the holidays with confidence.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Here’s why we stand out:",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Expert Auto Detailing We use the latest techniques and equipment
              to provide a thorough and professional clean. Our team is trained
              to treat every type of vehicle with care, from everyday sedans to
              luxury cars and SUVs. We go beyond a basic wash to deliver
              superior results.
            </p>
            <p className="mt-2">
              Attention to Detail Our motto is "touching every corner." This
              means that no spot gets overlooked. From the interior upholstery
              to the exterior finish, we clean and detail every inch of your
              vehicle, ensuring that it’s holiday-ready. Whether it’s vacuuming
              the carpets or polishing the paint, we leave no stone unturned.
            </p>
            <p className="mt-2">
              Winter Protection Our service doesn’t just clean your vehicle – it
              also protects it. We offer specialized wax treatments and
              protective coatings that shield your car’s paint from the harsh
              winter elements. This helps to prevent road salt and grime from
              sticking to your car and makes it easier to wash away in the
              future.
            </p>
            <p className="mt-2">
              Convenience and Flexibility Life during the holidays is hectic.
              That’s why we offer flexible scheduling options to suit your
              needs. Whether you need us to come to your home or visit our
              location, we’ll work around your schedule to make your holiday
              preparations as stress-free as possible.
            </p>
            <p className="mt-2">
              Affordable Packages We believe that keeping your car looking great
              should be easy and affordable. We offer a range of detailing
              packages, so you can choose the best option for your car and your
              budget. Plus, we often offer holiday specials, so be sure to ask
              about discounts when you book your appointment.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: " What’s Included in Our Holiday-Ready Detailing Service?",
    sections: [
      {
        paragraph:
          "When you trust Touch and Shine Auto Detail to get your vehicle ready for the holidays, you can expect a comprehensive service that includes the following:",
      },
    ],
  },
  ,
  {
    heading: "Exterior Wash and Wax",
    sections: [
      {
        paragraph:
          "We start with a full exterior wash to remove all dirt, road salt, and grime. Afterward, we apply a high-quality wax to create a protective barrier that will keep your car’s paint shiny and protected from the elements.",
      },
    ],
  },
  {
    heading: "Wheel and Tire Cleaning",
    sections: [
      {
        paragraph:
          "Wheels can accumulate a lot of brake dust, dirt, and salt during the winter months. We make sure your wheels are spotless and your tires are looking fresh, providing you with a smooth, safe ride.",

        image: "",
      },
    ],
  },
  {
    heading: "Headlight and Taillight Restoration",
    sections: [
      {
        paragraph:
          "Foggy, yellowed headlights and taillights can compromise your visibility, especially during the dark winter months. Our team will restore these lights, ensuring they’re clear and bright, helping you stay safe while driving.",

        image: "",
      },
    ],
  },
  {
    heading: "Interior Cleaning and Upholstery Care",
    sections: [
      {
        paragraph:
          "The interior of your car is just as important as the exterior. We vacuum and shampoo your carpets, wipe down all surfaces, and clean your seats – whether they’re fabric or leather. We’ll make your car’s interior feel cozy and fresh for those holiday road trips.",

        image: "",
      },
    ],
  },
  {
    heading: "Window and Mirror Cleaning",
    sections: [
      {
        paragraph:
          "Clean windows and mirrors are essential for safe driving, particularly when visibility is low due to rain or snow. We clean every glass surface to ensure your view is crystal-clear.",

        image: "",
      },
    ],
  },
  {
    heading: "Odor Elimination",
    sections: [
      {
        paragraph:
          "Holiday travel can sometimes leave your car with unwanted smells. Our detailing process includes air fresheners and odor elimination treatments, so your vehicle smells fresh and inviting for all your holiday adventures.",

        image: "",
      },
    ],
  },
  {
    heading: "Here’s why we stand out:",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              This Christmas, we're offering exclusive holiday deals that make
              getting your car ready for the season more affordable than ever.
              Whether you choose our full detailing package or a customized
              service, you can rest assured that you’ll receive the best value
              and care for your vehicle.
            </p>
            <p className="mt-2">
              Holiday Wash & Wax Special: Give your car a gleaming finish with
              our wash and wax package, perfect for the holiday season.
            </p>
            <p className="mt-2">
              Interior Refresh: Keep your car's interior fresh with our deep
              cleaning and upholstery care services.
            </p>
            <p className="mt-2">
              Winter Protection Package: Protect your car’s exterior with our
              winterization service, including wax and sealant applications.
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
            {title ||
              "Get Your Ride Holiday-Ready with Touch and Shine Auto Detail This Christmas"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 18, 2024"}
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
            src="/images/touch-chris.jpg"
            alt="Christmas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            The holiday season is finally here! The air is crisp, the lights are
            twinkling, and there’s excitement in the air as families and friends
            gather to celebrate Christmas. Along with all the joy and
            festivities, one thing that shouldn’t be overlooked is preparing
            your car for the season. Whether you're planning a road trip to
            visit family, heading to holiday parties, or simply taking in the
            beautiful winter scenery, you want your vehicle to look its absolute
            best. That’s where Touch and Shine Auto Detail comes in – we’re here
            to make sure your car shines as brightly as your Christmas spirit.
          </p>
          <h2 className="mt-6 text-lg text-blue-600">
            Why Should You Get Your Car Holiday-Ready?
          </h2>
          <p className="mt-6">
            Christmas is a time for celebration, but it’s also a busy time.
            Between shopping for gifts, attending parties, and possibly taking
            long road trips to see loved ones, your car may be the last thing on
            your mind. However, maintaining a clean and well-maintained vehicle
            not only improves its appearance but also its performance. Here’s
            why getting your car holiday-ready is so important:
          </p>
          <p className="mt-6">
            Impress Your Guests and Family Your car is the first thing people
            see when they come to visit for Christmas gatherings. A clean, shiny
            vehicle sets the tone for the holidays and shows that you’re ready
            for the festive season.
          </p>
          <p className="mt-6">
            A Cleaner Ride Means a More Comfortable Drive After months of road
            salt, dirt, and grime, your car might be looking a little worse for
            wear. Not only does this affect the aesthetic appeal of your ride,
            but dirt and stains can make the interior feel less comfortable. A
            professional auto detailing can refresh your car and make it feel
            more like a luxurious, cozy space for the long winter drives ahead.
          </p>
          <p className="mt-6">
            Prevent Long-Term Damage Winter weather conditions like snow, rain,
            and sleet can wreak havoc on your car’s exterior. Salt from the
            roads can cause rust and corrosion if not properly cleaned. A deep
            cleaning and waxing protect your vehicle from long-term damage and
            ensure it stays in pristine condition.
          </p>
          <p className="mt-6">
            Improve Visibility and Safety Dirty windows, fogged-up mirrors, and
            headlights covered in grime can hinder your visibility while driving
            at night, which is especially important during the dark winter
            months. Cleaning these areas ensures you're driving safely and
            responsibly.
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
            Book Now and Get Your Car Holiday-Ready!
          </h2>
          <p className="text-md text-black mt-2">
            The holidays are fast approaching, so why wait? Let Touch and Shine
            Auto Detail make sure your car looks great and is protected for the
            busy season ahead. Our professional detailing services are the
            perfect way to treat your vehicle (and yourself) to a little extra
            holiday cheer.
          </p>
          <p className="text-md text-black mt-2">
            Give us a call or visit our website to book your appointment today!
            We look forward to making your car sparkle this Christmas!
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
