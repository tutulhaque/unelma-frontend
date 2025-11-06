import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1503264116251-35a269479413"; // change if you want

  const title = "Contact Us";

  return (
    <div className="w-full">
      {/* Banner Section */}
      <section
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#3780B2cc] via-[#008081cc] to-black/60"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[100px] blur-3xl opacity-50 bg-gradient-to-t from-[#008081] to-transparent"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold z-10 drop-shadow-lg">
          {title}
        </h1>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Have questions, ideas, or want to collaborate with us? Reach out —
              we’d love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[#3780B2]" />
                <p className="text-gray-700">
                  Unelma Platforms OÜ, Tallinn, Estonia region 10111, Estonia.
                  <br />
                  Company Registry code: 16069962
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#3780B2]" />
                <p className="text-gray-700">+358(0) 44 9889771</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#3780B2]" />
                <p className="text-gray-700">info@unelmaplatforms.com</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3780B2]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3780B2]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+358..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3780B2]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3780B2]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3780B2] to-[#008081] text-white py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.863517957828!2d24.753574316010707!3d59.43701198168875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929484c6d7a3b3%3A0x400f0b6c5f1c930!2sTallinn%2C%20Estonia!5e0!3m2!1sen!2sfi!4v1697028282520!5m2!1sen!2sfi"
          className="w-full h-full rounded-t-3xl"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <div className="absolute inset-0 bg-gradient-to-t from-[#008081]/30 to-transparent pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Contact;
