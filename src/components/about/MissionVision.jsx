import React from "react";

const MissionVision = () => {
  return (
    <section className="w-full">
      {/* Mission Row */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Text Left */}
        <div className="flex flex-col justify-center p-10 bg-gradient-to-r from-[#E0F7F4] to-[#bfddd9] text-gray-800">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-[#3780B2]">Mission</span>
          </h2>
          <p className="text-lg leading-relaxed">
            To deliver best-in-class digital platforms that empower our clients
            to innovate, scale, and transform their businesses in a rapidly
            evolving digital world. We strive to merge creativity with
            technology to create lasting impact.
          </p>
        </div>
        {/* Image Right */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
            alt="Our Mission"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Vision Row */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Left */}
        <div>
          <img
            src="http://localhost:1337/uploads/blog_1_9f0922de66.avif?auto=format&fit=crop&q=80&w=1200"
            alt="Our Vision"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Right */}
        <div className="flex flex-col justify-center p-10 bg-gray-100 text-gray-800">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-[#3780B2]">Vission</span>
          </h2>
          <p className="text-lg leading-relaxed">
            To become the trusted global technology partner, leading innovation
            through sustainable solutions and empowering businesses to thrive in
            the digital era with efficiency, creativity, and integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
