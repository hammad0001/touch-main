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
    heading: "Why Car Cleaning Is Good",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
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
        subheading: " Makes Your Car Shine",
        paragraph: (
          <div>
            <p>
              Cars get full of dust and dirt. This makes them dull. Cleaning
              removes all that and makes your ride shine. Shops use great stuff
              to keep paint bright. The products they use help keep the paint
              fresh. A bright car looks newer than a dull one.
            </p>
            <p className="mt-2">
              Cleaning gets the tiny spots a wash misses. A neat ride looks
              better and feels great. It helps stop dirt from sticking again.
              When a car looks clean, it feels fresh. A shiny car makes driving
              more fun
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2">.</p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Paint Lasts Longer",
        paragraph: (
          <div>
            <p>
              Your car’s paint gets hit by the sun, rain, and dirt. This can
              scratch and fade it. Detailing services keep a shield on the paint
              to stop harm. This keeps your ride safe. A clean car lasts much
              longer. Dirt and grime weaken the paint over time.
            </p>
            <p className="mt-2">
              If dirt stays, stains form. Things like bird mess can wreck paint.
              Cleaning stops harm before it starts. Once stains set in, they are
              hard to remove. A clean car avoids these ugly marks. Waxing helps
              the paint stay smooth for a long time.
            </p>
          </div>
        ),
      },
    ],
  },
  ,
  {
    heading: "",
    sections: [
      {
        subheading: " Stops Weather From Ruining Paint",
        paragraph: (
          <div>
            <p>
              Bad air and dirt can hurt your car. Rain, heat, and grime wear
              down paint. Cleaning takes off this grime and adds a shield. Wax
              helps keep the paint fresh. A good coat keeps rain from sticking.
            </p>
            <p className="mt-2">
              Scratches form from small dirt. A clay bar pulls off dirt, keeping
              paint safe. The bar removes tiny bits of grime that washing
              misses. These steps make the car shine like new. Keeping dirt off
              helps the car look fresh longer.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Steps to Clean Your Car",
    sections: [
      {
        subheading: "Wash the Car",
        paragraph:
          "The first step is a deep clean. This removes all dirt. Shops use two pails of water so the paint does not get scratched. They also wear soft clothes and good soap. These keep dirt from rubbing into the paint.Soft clothes and good soap get rid of dirt fast. This step gets the car ready. A deep clean clears dust from small spaces. It washes away the grime that sticks. A good wash makes the next steps work better.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Clay Bar Wash",
        paragraph:
          "Some grime does not wash off. A clay bar pulls off small dirt like brake dust. This step makes the paint smooth and clean. It removes bits stuck deep in the paint. These can scratch the car over time.Skipping this makes small marks on the paint. A smooth ride looks much better. Clay helps wax stick better. This means the car stays clean longer. A smooth surface makes future washes easier.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Buffing Paint",
        paragraph: (
          <div>
            <p>
              Over time, your car gets marks. Buffing clears them out and brings
              back shine. Wax adds smooth, glossy paint. Buffing also removes
              swirl marks. This step makes the car look fresh and bright.
            </p>
            <p className="mt-2">
              Shops use tools to buff and shine paint. This makes cars look
              fresh and new. The right polish makes a big change. It can make
              dull paint glow again. Buffing makes old cars look newer.
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
        subheading: "Waxing and Paint Care",
        paragraph: (
          <div>
            <p>
              Waxing is a must for car protection. It adds a shield to stop
              grime and rain. Some use seal coats for extra shine. These help
              keep the car clean longer. A good wax job makes washing easier.
            </p>
            <p className="mt-2">
              Waxing makes dirt easy to wipe off. It also keeps paint from
              fading. Wax stops damage from the sun. It also keeps water from
              sticking. Regular waxing keeps the paint fresh.
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
        subheading: "Wheels, Tires, and Glass",
        paragraph: (
          <div>
            <p>
              Cleaning is not just for paint. Wheels, tires, and glass need
              care. Tire shine makes wheels look fresh. Glass care helps you see
              better. Clear windows make driving safer. Dirty glass makes it
              hard to see
            </p>
            <p className="mt-2">
              Shiny trim also stops old parts from dulling. Clean parts make the
              ride look great. Cleaning keeps the car looking neat. A full clean
              keeps every part bright. Wheels and trim shine better with care.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Why You Should Clean Often",
    sections: [
      {
        subheading: "Keeps Value High",
        paragraph: (
          <div>
            <p>
              A fresh, clean car keeps its price high. Scratched or dull paint
              lowers value. Cleaning helps keep the top price. A well-kept car
              sells for more. Buyers want cars that look fresh and new. A neat
              ride sells quickly. A fresh look shows care and good upkeep. A car
              that shines gets noticed. Clean cars stand out from dull ones.
              Keeping it clean helps in the long run.
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
        subheading: "Saves Money",
        paragraph: (
          <div>
            <p>
              Cleaning stops harm that costs a lot to fix. Paint care means no
              need for repainting. Good upkeep avoids big repair bills. Fixing
              damaged paint costs much more than cleaning. A seal coat saves
              cash by stopping the need for wax. Waxing lasts longer with a
              coat. Keeping dirt off saves time and effort. Clean cars need less
              work later. A small cleaning saves big money over time.
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
    heading: "Safe to Drive",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Clean lights, glass, and mirrors help you drive safely. Over time,
              lights turn dull and foggy. A good clean makes them bright. Clear
              glass makes night driving easy. A good wash keeps all parts
              working right. A clean windshield helps you see better. Foggy
              lights make driving hard. Keeping them clean helps avoid danger. A
              bright car is safer to drive. Keeping it clean makes trips
              smoother.
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
        subheading: "Feels Good to Drive",
        paragraph: (
          <div>
            <p>
              A clean ride makes driving fun. It also shows you care for your
              stuff. People like clean cars, and they look great. A shiny car
              gets compliments. A clean space feels fresh inside. Driving a
              dirty car feels bad. Clean cars smell better, too. A neat car
              makes trips better. A good clean lifts your mood. It also makes
              car trips more fun
            </p>
            <p className="mt-2">
              Read More:{" "}
              <a href="https://www.touchandshinedetail.com/top-7-interior-detailing-hacks-for-a-fresh-and-clean-vehicle">
                7 Interior Detailing Hacks for a Fresh and Clean Vehicle
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
    heading: "Should You Do It or Hire a Shop?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
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
        subheading: "Pros Do It Right",
        paragraph: (
          <div>
            <p>
              Many people pick cleaning pros since they have the best gear. They
              use tools like polishers and wax coats for top shine. Shops know
              the best ways to clean cars. Their gear gives better results.
            </p>
            <p className="mt-2">
              Shops know what works best for paint and give top care. They fix
              small marks and scratches. Their wax jobs last longer. Pros use
              strong products that last. They clean cars inside and out.
            </p>
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
        subheading: "Clean It Yourself",
        paragraph: (
          <div>
            <p>
              If you love cars, you may want to clean them. But you need to use
              safe steps. Good tools and care are needed to make sure no harm
              comes to the paint. Doing it yourself saves cash. It also helps
              you learn car care. Careful cleaning keeps cars fresh. Safe
              washing avoids damage. Cleaning at home can be fun. It also keeps
              your car in top shape.
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
    heading: "How Often Should You Clean?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              This depends on dirt, roads, and how much you drive. Most say to
              clean every 3 to 6 months. If you live in a rough area, clean
              more. More dirt means more cleaning. A regular clean stops damage.
              If you drive often, clean more. A little care goes a long way.
              More cleaning means longer-lasting paint.
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
    heading: "Get Help from Our Pros",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Want to keep your ride fresh? Our pros exterior detailing and
              shield your paint. We use top wax and tools to keep your car
              bright. Don’t let dirt ruin your ride. Call us now for a shine!
              Our pros keep cars looking new.
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
    heading: "Wrap Up",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Exterior detailing is key to keeping your ride fresh. It stops
              damage and helps keep its price up. Whether you clean it or get
              pros, keeping up with care helps. Clean cars last long and look
              great. A good clean makes every ride better. That is why you
              should never skip your car cleaning appointment.
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
              "Why Exterior Detailing Should Be Part of Your Regular Car Care Routine"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem icon={<FaCalendarAlt />} text={date || "Feb 2, 2025"} />
            <InfoItem icon={<FaClock />} text={time || "11:19 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#2A82AD] p-2 inline-block">
          <img
            src="/images/car-care-routine.jpg"
            alt="Christmas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Keeping your car clean is key for a long life of it.
            <a
              href="https://www.touchandshinedetail.com/services/exterior-detailing"
              className="text-blue-500 font-bold"
            >
              Car Exterior detailing
            </a>{" "}
            is a great way to keep it nice. It helps the paint last. It also
            stops rust and makes it shine. Cleaning stops dirt and dust from
            hurting your ride. It keeps the car looking great. A clean car is
            more fun to drive.
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
          <h2 className="text-2xl font-bold text-black"></h2>
          <p className="text-md text-black mt-2">
          
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
