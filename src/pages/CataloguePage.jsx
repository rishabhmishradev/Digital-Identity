import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SEO from "../components/SEO";

const catalogueItems = [
  {
    image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750396539/Screenshot_2025-06-20_at_10.45.06_AM_nx4afi.png",
    link: "https://example.com/1",
    category: "Personal Website",
    title: "Portfolio Website"
  },
  {
    image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750401102/Screenshot_2025-06-20_at_11.59.40_AM_byhwys.png",
    category: "E-commerce",
    title: "Online Grocery Store"
  },
  {
    image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750401250/Screenshot_2025-06-20_at_12.03.53_PM_iizoyg.png",
    category: "SaaS",
    title: "SaaS Landing Page"
  },
  {
    image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750401128/Screenshot_2025-06-20_at_12.01.02_PM_hvprir.png",
    category: "SaaS",
    title: "Appointment Booking Site"
  },
  {
    image: "https://res.cloudinary.com/dtygfwn8b/image/upload/v1750400902/Screenshot_2025-06-20_at_11.57.25_AM_jg5ui1.png",
    category: "E-commerce",
    title: "Online Clothing Store"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 60,
    }
  })
};

const CataloguePage = () => {
  return (
    <>
    <SEO title="Our Catalogue" description="Explore our portfolio of custom websites, e-commerce stores, and SaaS landing pages built by Webstrom Tech." />
    <motion.div
      initial={{ opacity: 0, y: 20 }}       // starting
      animate={{ opacity: 1, y: 0 }}        // after mount
      exit={{ opacity: 0, y: -20 }}         // on unmount
      transition={{ duration: 0.4 }}        // smooth transition
    >
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-b from-white via-blue-50 to-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 underline decoration-blue-500 decoration-2 underline-offset-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📁 Our Catalogue
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {catalogueItems.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={false}>
              <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-lg" />
                </div>
                <h3 className="text-lg font-semibold mt-3 text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-blue-600 hover:underline text-sm"
                  >
                    Live Preview ↗
                  </a>
                ) : (
                  <p className="inline-block mt-2 text-gray-400 text-sm cursor-not-allowed">Coming Soon</p>
                )}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
   </motion.div>
   </>
  );
};

export default CataloguePage;
