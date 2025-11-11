import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const slidingTexts = [
  "Branding +++",
  "Marketing +++",
  "UX Research +++",
  "Mock Up +++",
  "Development +++",
  "Website +++",
  "Cloud +++",
  "Email Marketing +++",
];

const SlidingText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const totalWidth = container.scrollWidth / 2;
    const duration = 25; // slower, smoother

    gsap.to(container, {
      x: -totalWidth,
      repeat: -1,
      ease: "linear",
      duration,
    });

    gsap.to(".sliding-item", {
      opacity: 0.6,
      scale: 0.95,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden h-[70px] flex items-center"
      style={{
        background: "linear-gradient(90deg, #3780B2, #008081)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

      <div
        ref={containerRef}
        className="flex whitespace-nowrap space-x-8 text-white text-lg md:text-xl font-semibold items-center h-full"
      >
        {slidingTexts.concat(slidingTexts).map((text, i) => (
          <span
            key={i}
            className="sliding-item drop-shadow-lg tracking-wide transition-all duration-500"
          >
            {text}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SlidingText;

