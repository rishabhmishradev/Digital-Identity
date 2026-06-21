import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
    <SEO title="Digital Identity Agency" description="Unlock potential with tailored strategies designed for success. Simplify challenges, maximize results with Webstrom Tech." />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <main className="px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse md:flex-row items-center justify-between md:gap-12 gap-6 py-16 grow">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xs text-gray-500 flex items-center justify-center md:justify-start gap-1 mb-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path
                fill="#6B7280"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 1 1 0-2h1V1a1 1 0 0 1 1-1ZM3 10a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1ZM10 0a1 1 0 0 1 .967.744l1.179 4.455L15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.179 4.455a1 1 0 0 1-1.934 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0Z"
              />
            </svg>
            AN AGENCY FOR YOUR HIGH GROWTH.
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            We make your
            <br />
            Digital{' '}
            <span className="inline-block bg-orange-400 text-white px-3 -mb-1 border-b-2 border-indigo-700">
              Identity
            </span>
          </h1>

          <p className="text-gray-600 text-sm mb-6">
            Unlock potential with tailored strategies designed for success.
            <br />Simplify challenges, maximize results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-y-3 gap-x-4 justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border border-gray-200 rounded-md"
            >
              <Link
                to="/Support"
                className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-md block hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border border-gray-200 rounded-md"
            >
              <Link
                to="/Catalogue"
                className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-md block hover:bg-blue-700 transition"
              >
                View Catalogue
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="pt-1"
            >
              <Link to="/features" className="text-sm flex items-center gap-1 hover:underline">
                <span>Learn more</span>
                <svg width="15" height="11" fill="none" viewBox="0 0 15 11">
                  <path
                    d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Video */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <video
            src="https://res.cloudinary.com/deqvf8cwi/video/upload/v1750491434/Online_resume_n21clp.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full rounded-lg md:rounded-xl max-w-full"
          />
        </div>
      </main>
    </motion.div>
    </>
  );
};

export default HomePage;
