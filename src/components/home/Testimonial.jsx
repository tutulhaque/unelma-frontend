import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Turner",
    message:
      "The team was exceptional! They delivered beyond our expectations and created a product that our users love.",
    from: "Product Manager, FinEdge",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "James Miller",
    message:
      "Their attention to detail and design thinking approach set them apart. Our website now feels premium and fast.",
    from: "CEO, BrightPath Agency",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Amelia Clark",
    message:
      "Smooth communication and on-time delivery — highly recommended for anyone who values quality and reliability.",
    from: "Marketing Head, FlowTech",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 4,
    name: "Ethan Brooks",
    message:
      "Fantastic experience! They understood our vision perfectly and transformed it into an elegant, functional platform.",
    from: "Founder, UrbanSpace Studio",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 5,
    name: "Olivia White",
    message:
      "From start to finish, the process was seamless. The end result was even better than we imagined!",
    from: "CTO, HealthNova",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 6,
    name: "Sophia Turner",
    message:
      "The team was exceptional! They delivered beyond our expectations and created a product that our users love.",
    from: "Product Manager, FinEdge",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 768 ? 1 : 2
  );

  // Detect window resize to adjust slide count
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 5s
  useEffect(() => {
    const totalSlides = Math.ceil(testimonials.length / slidesPerView);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesPerView]);

  // Prepare slide groups
  const slides = [];
  for (let i = 0; i < testimonials.length; i += slidesPerView) {
    slides.push(testimonials.slice(i, i + slidesPerView));
  }

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What Our <span className="text-[#3780B2]">Clients Say</span>
        </h2>

        <div className="relative overflow-hidden">
          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(.22,.9,.35,1)]"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${index * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((group, slideIndex) => (
              <div
                key={slideIndex}
                className="flex justify-center gap-8 w-full flex-shrink-0"
                style={{
                  width: `${100 / slides.length}%`,
                  flexWrap: slidesPerView === 1 ? "wrap" : "nowrap",
                }}
              >
                {group.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white shadow-lg rounded-2xl p-8 flex-1 transition-transform hover:-translate-y-2"
                    style={{
                      minWidth: slidesPerView === 2 ? "48%" : "100%",
                      maxWidth: slidesPerView === 2 ? "48%" : "100%",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#008081]"
                      />
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {t.name}
                        </h3>
                        <p className="text-sm text-gray-500">{t.from}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-left leading-relaxed italic">
                      “{t.message}”
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-[#3780B2] w-6" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
