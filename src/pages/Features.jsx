import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const features = [
  {
    title: "Custom Web & Portfolio Design",
    desc: "Tailored portfolios and websites that match your brand, goals, and profession.",
    icon: "🎨",
  },
  {
    title: "Mobile & Web Applications",
    desc: "Fast, scalable, and responsive apps tailored for your business needs.",
    icon: "📱",
  },
  {
    title: "Startup MVP Development",
    desc: "Rapidly build and launch your Minimum Viable Product to test and scale.",
    icon: "🚀",
  },
  {
    title: "AI & Automation Solutions",
    desc: "Streamline workflows and enhance capabilities with intelligent AI integrations.",
    icon: "🤖",
  },
  {
    title: "Dedicated Tech Partnership",
    desc: "Act as your dedicated technical partner for long-term growth and success.",
    icon: "🤝",
  },
  {
    title: "Custom Software & IT Outsourcing",
    desc: "Comprehensive IT outsourcing and tailored software development services.",
    icon: "💻",
  },
  {
    title: "Product Maintenance & Scaling",
    desc: "Continuous support to maintain, optimize, and scale your digital products.",
    icon: "📈",
  },
  {
    title: "SEO & Digital Marketing",
    desc: "Boost your visibility and reach with data-driven SEO and marketing strategies.",
    icon: "🎯",
  },
];

const cardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: (i) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <>
    <SEO title="Key Features" description="Custom Portfolio Design, Mobile & SEO Optimized, One-Click Sharing. Discover the key features we offer at Webstrom Tech." />
    <motion.div
      initial={{ opacity: 0, y: 20 }}       // starting
      animate={{ opacity: 1, y: 0 }}        // after mount
      exit={{ opacity: 0, y: -20 }}         // on unmount
      transition={{ duration: 0.4 }}        // smooth transition
    >
    <section className="min-h-screen bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Key Features We Offer
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-4">{item.icon || "🚧"}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.desc || "Feature coming soon..."}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
   </motion.div>
   </>
  );
};

export default Features;
