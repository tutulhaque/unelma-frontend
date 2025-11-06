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
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to transform your digital presence
            and drive business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleLearnMore(service.title)}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <div className="flex items-center text-teal-600 font-semibold">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
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
