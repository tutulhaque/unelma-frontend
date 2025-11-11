import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  BarChart,
  Palette,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";

const Services = () => {
  const [currentText, setCurrentText] = useState("Platforms");
  const words = [
    "Platforms",
    "Web Services",
    "Mobile Apps",
    "Cloud Solutions",
    "UI/UX Designs",
  ];

  const textRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const el = textRef.current;

    const animateText = () => {
      gsap.to(el, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power1.inOut",
        onComplete: () => {
          index = (index + 1) % words.length;
          setCurrentText(words[index]);

          gsap.fromTo(
            el,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power1.inOut" }
          );
        },
      });
    };

    const interval = setInterval(animateText, 2500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies, ensuring scalability and performance for your business needs.",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android devices.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Comprehensive security audits and compliance solutions to protect your data and meet industry standards.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed up your applications with advanced optimization techniques and best practices implementation.",
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description:
        "Data-driven solutions to help you understand user behavior and make informed business decisions.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed to engage users and enhance your brand identity.",
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation strategies to modernize your business and stay competitive.",
    },
  ];

  const handleLearnMore = (title) => {
    alert(`Learn more about: ${title}`);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#F9FAFB] to-[#EAF4F4]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14">
        {/* Left Column */}
        <div className="lg:w-[45%] lg:sticky lg:top-24 self-start space-y-6">
          <h2 className="font-bold text-gray-900 leading-tight">
            <span className="text-3xl md:text-4xl">We Build </span>
            <span
              ref={textRef}
              className="text-[#3780B2] inline-block text-4xl md:text-5xl"
            >
              {currentText}
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Our team crafts scalable, innovative, and high-performing digital
            solutions — from design to deployment. Whether you're launching a
            new platform or improving an existing one, we help you every step of
            the way.
          </p>

          {/* Decorative Image */}
          <div className="relative mt-10">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF8A73] to-[#008081] blur-2xl opacity-20 rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
              alt="Software development team"
              className="rounded-2xl shadow-lg relative z-10 w-full"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-[55%] flex flex-col gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden hover:-translate-y-1"
                onClick={() => handleLearnMore(service.title)}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#008081]/20 to-[#3780B2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                <div className="relative flex items-start mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#008081] to-[#3780B2] flex items-center justify-center mr-5 transition-all duration-500 group-hover:scale-110 group-hover:from-[#3780B2] group-hover:to-[#008081] shadow-lg">
                    <Icon className="w-8 h-8 text-white transition-transform duration-500 group-hover:rotate-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#008081] transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-[#008081] font-semibold relative z-10 mt-3 group-hover:text-[#3780B2] transition-colors duration-500">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


