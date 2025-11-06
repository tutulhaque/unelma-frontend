import React from "react";
import { Mail, Send, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#EAF4F4] to-[#F9FAFB] text-gray-700 pt-16 pb-8 px-6 md:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1️⃣ Brand Column */}
        <div>
          <h2 className="text-2xl font-bold text-[#3780B2] mb-3">
            Unelma Platform
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Building digital experiences that connect people and ideas — from
            design to deployment, with passion and precision.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 hover:bg-[#008081] hover:text-white transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 hover:bg-[#FF8A73] hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 hover:bg-[#3780B2] hover:text-white transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#about"
                className="hover:text-[#008081] transition-colors"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-[#FF8A73] transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#3780B2] transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#008081] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Resources */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Resources
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#blog"
                className="hover:text-[#FF8A73] transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008081] transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#3780B2] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF8A73] transition-colors">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 mb-4">
            Get the latest insights, design inspiration, and updates directly to
            your inbox.
          </p>
          <form className="flex items-center bg-white rounded-full shadow-md overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-[#008081] transition-all">
            <Mail className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-3 outline-none text-gray-700"
            />
            <button
              type="submit"
              className="bg-[#3780B2] text-white px-4 py-3 rounded-r-full hover:scale-105 transition-transform flex items-center gap-1"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} UnelmaPlatforms. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
