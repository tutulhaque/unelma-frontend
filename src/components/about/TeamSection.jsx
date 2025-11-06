import React from "react";

const teamMembers = [
  {
    name: "Emma Wilson",
    role: "CEO & Founder",
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=500",
    bio: "With over 15 years of experience in digital innovation, Emma leads the company’s strategic vision and growth.",
  },
  {
    name: "Liam Brown",
    role: "Chief Technology Officer",
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=500",
    bio: "A passionate technologist driving innovation and ensuring scalable, cutting-edge solutions for our clients.",
  },
  {
    name: "Sophia Martinez",
    role: "Head of Design",
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=500",
    bio: "Sophia brings creativity and user-centric design thinking to craft seamless digital experiences.",
  },
  {
    name: "Ethan Johnson",
    role: "Project Manager",
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=500",
    bio: "Focused on delivering projects efficiently, Ethan bridges the gap between clients and development teams.",
  },
];

const TeamSection = () => (
  <section className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Meet <span className="text-[#3780B2]">the Team</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((m, idx) => (
          <div key={idx} className="text-center">
            <img
              src={m.photo}
              alt={m.name}
              className="w-full h-[300px] object-cover rounded-2xl mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-teal-600 mb-2">{m.role}</p>
            <p className="text-gray-600 text-sm">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
