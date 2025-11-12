import React from "react";

const teamMembers = [
  {
    name: "Saif",
    role: "CEO",
    photo:
      "https://i.ibb.co/35vD1vbq/saif.jpg?auto=format&fit=crop&q=80&w=400",
    bio: "With over 15 years of experience in digital innovation, Saif leads the company’s strategic vision and growth.",
  },
  {
    name: "Tanmay",
    role: "CTO",
    photo:
      "https://i.ibb.co/8pc7Skf/tanmay.jpg?auto=format&fit=crop&q=80&w=400",
    bio: "A passionate technologist driving innovation and ensuring scalable, cutting-edge solutions for our clients.",
  },
  {
    name: "Daniel",
    role: "Head of Design",
    photo:
      "https://i.ibb.co/whbBtP3x/daniel.png?auto=format&fit=crop&q=80&w=400",
    bio: "Daniel brings creativity and user-centric design thinking to craft seamless digital experiences.",
  },
  {
    name: "Isaac",
    role: "Project Manager",
    photo:
      "https://i.ibb.co/zHmW7H0j/isaac.png?auto=format&fit=crop&q=80&w=400",
    bio: "Focused on delivering projects efficiently, Isaac bridges the gap between clients and development teams.",
  },
  {
    name: "Chinedu",
    role: "CFO",
    photo:
      "https://i.ibb.co/gM76ks6C/chinedu.png?auto=format&fit=crop&q=80&w=400",
    bio: "Dedicated to financial excellence, Chinedu steers the company’s fiscal strategy and long-term profitability.",
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
