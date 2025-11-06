import React from "react";
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

const Services = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We Build <span className="text-[#3780B2]">Digital Platforms</span>
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

        {/* Right Column - Scrolls with page */}
        <div className="lg:w-[55%] flex flex-col gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleLearnMore(service.title)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#008081] to-[#3780B2] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-[#008081] font-semibold">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
