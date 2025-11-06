import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#FFF9F7] to-[#F0FFFC]">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-[#3780B2]">
            Touch
          </span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, ideas, or opportunities? Drop your message below and
          let’s connect!
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-8 md:p-10 border border-white/40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              id="fullName"
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-800 focus:outline-none focus:border-[#3780B2]"
              placeholder=" "
              required
            />
            <label
              htmlFor="fullName"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#3780B2]"
            >
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-800 focus:outline-none focus:border-[#3780B2]"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#3780B2]"
            >
              Email
            </label>
          </div>

          {/* Phone */}
          <div className="relative md:col-span-2">
            <input
              type="tel"
              id="phone"
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-800 focus:outline-none focus:border-[#3780B2]"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#3780B2]"
            >
              Phone
            </label>
          </div>

          {/* Message */}
          <div className="relative md:col-span-2">
            <textarea
              id="message"
              rows="5"
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-800 focus:outline-none focus:border-[#3780B2]"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#3780B2]"
            >
              Message
            </label>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3780B2] text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg flex items-center gap-2 font-semibold"
          >
            Send Message <Send className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactSection;
