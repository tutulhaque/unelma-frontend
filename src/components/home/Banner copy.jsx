import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { gsap } from "gsap";
import "../home/css/Banner.css";

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    title: "Empowering Ideas with Innovation",
    description: "We build digital products that make your vision a reality.",
    button: "Learn More",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Creative Solutions for Every Business",
    description: "Transform your online presence with modern technology.",
    button: "Get Started",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    title: "Design. Develop. Deliver.",
    description: "From idea to launch, we’re your digital growth partner.",
    button: "Explore Services",
  },
];

const Banner = () => {
  const bannerRef = useRef([]);

  useEffect(() => {
    // Animate on slide change
    bannerRef.current.forEach((el) => {
      gsap.fromTo(
        el.querySelector(".text-content"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    });
  }, []);

  return (
    <div className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide
            key={banner.id}
            ref={(el) => (bannerRef.current[index] = el)}
          >
            <div
              className="relative w-full h-full flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="text-content relative z-10 text-center max-w-2xl px-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
                  {banner.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">{banner.description}</p>
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-medium transition-all duration-300">
                  {banner.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
