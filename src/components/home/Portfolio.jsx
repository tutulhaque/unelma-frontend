import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const portfolios = [
  {
    id: 1,
    title: "E-Commerce Website",
    desc: "Modern e-commerce platform.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Restaurant Web App",
    desc: "Reservations + delivery UX.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Portfolio Showcase",
    desc: "Personal portfolio to highlight work.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    desc: "Data visualizations for decisions.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Mobile Banking App",
    desc: "Secure mobile banking experience.",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Travel Booking System",
    desc: "Interactive booking platform.",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Vape E-Commerce",
    desc: "Storefront with CMS integration.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Event Management App",
    desc: "Create and manage events easily.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
];

const Portfolio = () => {
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = navPrevRef.current;
      swiperRef.current.params.navigation.nextEl = navNextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const handleViewProject = (title) => {
    alert(`Opening project: ${title}`);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#F9FAFB] to-[#EAF4F4]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-[#3780B2]">Portfolio</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Explore our latest digital creations — crafted with precision,
              creativity, and performance in mind.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              ref={navPrevRef}
              className="p-3 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-[#008081]"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              ref={navNextRef}
              className="p-3 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-[#008081]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            speed={900}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="py-10"
          >
            {portfolios.map((p, idx) => (
              <SwiperSlide
                key={p.id}
                style={{ width: idx % 2 === 0 ? 440 : 360 }}
                className="!flex !justify-center"
              >
                <div className="relative group rounded-2xl overflow-hidden shadow-lg w-full transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-2">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ height: 420 }}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-all duration-700"></div>

                  {/* Info panel */}
                  <div className="absolute left-0 right-0 bottom-0 p-6 bg-white/10 backdrop-blur-md border-t border-white/20">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{p.desc}</p>

                    {/* Clickable button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent Swiper drag
                        handleViewProject(p.title);
                      }}
                      className="relative z-20 mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#008081] to-[#3780B2] text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-[#3780B2] hover:to-[#008081] transition-all duration-500 group-hover:shadow-lg group-hover:scale-105"
                      style={{ pointerEvents: "auto" }}
                    >
                      View Project <ExternalLink size={14} />
                    </button>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-tr from-[#00b3b3] to-[#3780B2] blur-2xl transition-opacity duration-700"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom CSS for active/next/prev sizing */}
      <style>{`
        .swiper-slide-active .group img { height: 520px !important; }
        .swiper-slide-next .group img,
        .swiper-slide-prev .group img { height: 400px !important; transform: scale(0.97); opacity: 0.9; }
        .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-next):not(.swiper-slide-prev) .group img {
          height: 300px !important;
          opacity: 0.8;
          transform: scale(0.95);
        }
        .swiper-wrapper { align-items: center; }
      `}</style>
    </section>
  );
};

export default Portfolio;




