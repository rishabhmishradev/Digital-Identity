import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const Support = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    form.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm("service_aztije9", "template_b9m45un", form.current, "gAdau_gAMszN0t71t")
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
    <SEO title="Support & Contact" description="Get in touch with Webstrom Tech. Contact us for custom web development, SaaS platforms, AI automation, and digital solutions." />
    <motion.div
      className="py-12 flex justify-center items-center px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center text-sm text-slate-800 w-full max-w-lg"
      >
        <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
          Contact Us
        </p>
        <h1 className="text-4xl font-bold py-4 text-center">Let’s Get In Touch.</h1>
        <p className="text-gray-500 pb-10 text-center">
          Or reach us at{" "}
          <a href="mailto:team.digitalidentity@gmail.com" className="text-indigo-600 hover:underline">
            team.digitalidentity@gmail.com
          </a>
        </p>

        <div className="w-full">
          {/* Full Name */}
          <label className="font-medium">Full Name</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-300 transition">
            <input
              type="text"
              name="user_name"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <label className="font-medium">Email Address</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-300 transition">
            <input
              type="email"
              name="user_email"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Mobile Number */}
          <label className="font-medium">Mobile Number</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-300 transition">
            <input
              type="tel"
              name="user_mobile"
              pattern="[6-9]{1}[0-9]{9}"
              title="Enter a valid 10-digit Indian mobile number"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Message */}
          <label className="font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full mt-2 p-2 border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-indigo-300 transition"
            placeholder="Enter your message"
            required
          ></textarea>

          {/* Hidden Timestamp */}
          <input type="hidden" name="time" />

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition"
          >
            Submit Form
          </motion.button>
        </div>
      </form>
    </motion.div>
    </>
  );
};

export default Support;
