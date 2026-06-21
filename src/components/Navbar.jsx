import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Catalogue", to: "/catalogue" },
  { name: "Pricing", to: "/pricing" },
  { name: "Features", to: "/features" },
  { name: "Support", to: "/support" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex justify-between items-center shadow bg-white z-50 relative">

      {/* Logo */}
      <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
        <img className="h-12 md:h-14" src={Logo} alt="Logo" />
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Webstrom Tech</h1>
      </Link>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-600 text-2xl focus:outline-none"
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Nav Links */}
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row absolute md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow md:shadow-none md:items-center md:space-x-8 text-gray-600 text-base z-50`}
      >
        {navLinks.map((link, index) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="mb-2 md:mb-0"
          >
            <Link
              to={link.to}
              onClick={handleLinkClick}
              className="relative px-1 hover:text-gray-900 transition"
            >
              <span className="relative z-10">{link.name}</span>
              <motion.span
                className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-800 origin-left scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
