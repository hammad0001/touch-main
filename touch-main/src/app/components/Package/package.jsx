"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Package = () => {
  const packages = [
    {
      title: "Exterior Package",
      price: "$199 - $249",
      features: [
        "Foam Cannon Hand Wash",
        "Claybar Paint Decontamination",
        "Synthetic Wax/Sealant Applied",
        "Tire Shine & Glass Cleaned",
        "Price may vary depending on the condition/size of your vehicle.",
      ],
    },
    {
      title: "Interior Package",
      price: "$199 - $249",
      features: [
        "Vacuum & Dusting",
        "Air Purge Cracks & Crevices",
        "Wipe Down All Plastics",
        "Glass Cleaning",
        "Add Shampoo / Stain Removal (Get A Quote)",
        "Price may vary depending on the condition/size of your vehicle.",
      ],
    },
    {
      title: "CERAMIC COATING",
      price: "$350 - $1,200",
      features: [
        "Foam Cannon Hand Wash",
        "Claybar Paint Decontamination",
        "One or Two Step Paint Correction",
        "Full Exterior Detail Package",
        "1 Year or 3-4 Year Ceramic Coating Applied to All Painted Surfaces",
        "Price may vary depending on the amount of paint correction required, size of your vehicle and whether you choose our 1 year or 3-4 year package.",
      ],
    },
    {
      title: "Paint Correction ",
      price: "$400 - $899",
      features: [
        "Foam Cannon Hand Wash",
        "Claybar Paint Decontamination",
        "One or Two Step Paint Correction",
        "Full Exterior Detail Package",
        "Steam Cleaning Treatment",
        "Price may vary depending on the condition & size of your vehicle. No two vehicles are the same so please request a custom quote.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <section className="py-16 bg-white text-[white]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold uppercase mb-4 text-[#2A82AD]">
          Our Packages
        </h2>
        <p className="text-xl mb-8 text-black">
          Experience the best with our tailored packages!
        </p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`bg-[#2A82AD] rounded-lg p-8 shadow-lg relative group perspective transition-transform duration-500 ${
                hoveredCardIndex === index ? "scale-105 z-10" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              style={{
                height:
                  hoveredCardIndex === index
                    ? "auto" // Allow height to adjust dynamically for the hovered card
                    : "300px", // Default height for all other cards
              }}
            >
              <div
                className={`w-full h-full transform ${
                  hoveredCardIndex === index ? "rotate-y-180" : ""
                } transition-transform duration-700`}
              >
                {hoveredCardIndex !== index ? (
                  <div className="text-center flex items-center justify-center h-full">
                    <h3 className="text-2xl font-bold uppercase">
                      {pkg.title}
                    </h3>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold uppercase mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-4xl font-extrabold mb-4">
                      {pkg.price}{" "}
                      {/* <span className="text-lg font-normal">/Starting at</span> */}
                    </p>
                    <hr className="border-t border-white/30 my-4" />
                    <div className="grid grid-cols-2 gap-4">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <FaCheckCircle className="text-white w-full h-full" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact-us">
                      <button className="inline-block border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-black transition mt-5">
                        Book Now
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Package;
