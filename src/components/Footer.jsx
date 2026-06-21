import React from 'react';
import Logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-50 w-full text-gray-500/80 px-6 md:px-16 lg:px-24 xl:px-32 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <motion.div className="max-w-80" variants={fadeUp} custom={0}>
          <img src={Logo} alt="logo" className="mb-4 h-8 md:h-10" />
          <p className="text-sm">
            We make your digital identity stand out with tailored strategies designed for success. Simplify challenges, maximize results.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <p className="text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-800 transition">About</a></li>
            <li><a href="/support" className="hover:text-gray-800 transition">Careers</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Blog</a></li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <p className="text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/support" className="hover:text-gray-800 transition">Help Center</a></li>
            <li><a href="/support" className="hover:text-gray-800 transition">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div className="max-w-80" variants={fadeUp} custom={3}>
          <p className="text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for updates and offers.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />
            <button className="bg-black h-9 w-9 flex items-center justify-center rounded-r hover:bg-gray-900 transition">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.hr className="border-gray-300 mt-10" variants={fadeUp} custom={4} />

      <motion.div
        className="flex flex-col md:flex-row justify-between items-center pt-5 text-sm"
        variants={fadeUp}
        custom={5}
      >
        <p>© {new Date().getFullYear()} Webstrom Tech. All rights reserved.</p>
        <ul className="flex gap-4 mt-3 md:mt-0">
          <button
              onClick={() => {
                const pass = prompt("Enter Beta Password:");
                if (pass === "digital@beta") {
                  window.location.href = "https://betaa.vercel.app/";
                } else {
                  alert("❌ Incorrect password!");
                }
              }}
              className="hover:text-blue-600 hover:underline transition"
            >
              Beta user
            </button>
          <button
              onClick={() => {
                const pass = prompt("Enter Beta Password:");
                if (pass === "digital@beta") {
                  window.location.href = "https://myspace-kappa.vercel.app/";
                } else {
                  alert("❌ Incorrect password!");
                }
              }}
              className="hover:text-blue-600 hover:underline transition"
            >
              Devloper
            </button>
          <li><a href="coming.soon" className="hover:text-gray-800 transition">Affiliate</a></li>
        </ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
