import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 👈 Import motion
import SEO from '../components/SEO';

const Pricing = () => {
  return (
    <>
    <SEO title="Pricing & Plans" description="Affordable and customized web development pricing plans. From basic portfolios to custom SaaS platforms." />
    <motion.div
      className="flex flex-wrap items-center justify-center gap-6 py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatedCard
        title="Basic"
        subtitle="Basic portfolio for individual"
        badge="Popular"
        price="₹349"
        features={[
          '1-Page Responsive Portfolio',
          'Mobile-Friendly Design',
          'Section for About, Work & Contact',
          'Free Hosting Setup Guidance',
          'Delivered within 2-3 days',
        ]}
        buttonText="Schedule a call"
      />

      <AnimatedCard
        title="Your Custom Website"
        subtitle={[
          'Custom solutions for organizations',
          '/startups &,',
          'individuals',
        ]}
        badge="Custom"
        price="Contact Us"
        features={[
          'Fully Customized Design (based on your vision)',
          'Dynamic Functionality (Blog, CMS, etc.)',
          'Advanced Animations & Interactions',
          'Admin Panel (if required)',
          'SEO Optimized Code',
          '1-on-1 Consultation + Full Support',
        ]}
        buttonText="Schedule a call"
      />

      <AnimatedCard
        title="Pro"
        subtitle="Advanced features for professionals"
        badge="Recommended"
        price="₹649"
        features={[
          'Multi-Page React Portfolio',
          'Modern UI with Animations',
          'Contact Form Integration (with EmailJS or similar)',
          'Live Preview & GitHub Deployment',
          'SEO Optimized Code',
        ]}
        buttonText="Schedule a call"
      />
    </motion.div>
    </>
  );
};

const AnimatedCard = ({ title, subtitle, badge, price, features, buttonText }) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-lg border-2 border-gray-800 w-80 shadow-lg"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500 mt-1">
            {Array.isArray(subtitle) ? subtitle.join(' ') : subtitle}
          </p>
        </div>
        <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-gray-100">
          {badge}
        </span>
      </div>

      <div className="mt-6 flex items-baseline">
        <span className="text-2xl font-semibold">{price}</span>
      </div>

      <ul className="mt-6 space-y-1 text-gray-500 text-sm">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <svg
              className="h-5 w-5 text-green-500 mr-2 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/support"
        className="mt-8 block text-center w-full py-2.5 px-4 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition-colors"
      >
        {buttonText}
      </Link>
    </motion.div>
  );
};

export default Pricing;
