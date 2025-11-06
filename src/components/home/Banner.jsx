import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Innovative Software Platforms",
    desc: "We design scalable platforms that transform your business vision into digital reality.",
    color: "#3780B2",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png",
  },
  {
    image: "https://images.unsplash.com/photo-1556767576-cfba9fdacb9e",
    title: "Empowering Digital Growth",
    desc: "From idea to implementation, we deliver technology that accelerates growth.",
    color: "#008081",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721261.png",
  },
  {
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    title: "Cloud-Based Future",
    desc: "Harness the power of modern infrastructure with our secure cloud solutions.",
    color: "#3780B2",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png",
  },
];

const Banner = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperRef.current.swiper;

    const animateSlide = () => {
      gsap.fromTo(
        ".swiper-slide-active .slide-content",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.25, ease: "power3.out" }
      );
    };

    animateSlide();

    swiperEl.on("slideChangeTransitionStart", () => {
      gsap.set(".slide-content", { opacity: 0, y: 40 });
    });

    swiperEl.on("slideChangeTransitionEnd", animateSlide);
  }, []);

  return (
    <section className="relative w-full h-[90vh] text-white overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center relative"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${slide.color}cc, rgba(0,0,0,0.65)), url(${slide.image})`,
              }}
            >
              <div className="slide-content space-y-4">
                {/* 🌟 Logo / Icon above title */}
                <div className="flex justify-center mb-3">
                  <img
                    src={slide.icon}
                    alt="slide icon"
                    className="w-24 h-24 object-contain drop-shadow-lg animate-fadeIn"
                  />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto px-4 opacity-90">
                  {slide.desc}
                </p>
                <button
                  className="px-8 py-3 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: slide.color,
                    boxShadow: `0 4px 15px ${slide.color}55`,
                  }}
                >
                  Get Started
                </button>
              </div>

              {/* Decorative Gradient Blur */}
              <div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[120px] blur-3xl opacity-60"
                style={{
                  background: `radial-gradient(circle at center, ${slide.color}, transparent)`,
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
