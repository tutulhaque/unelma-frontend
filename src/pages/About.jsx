import React from "react";
import AboutBanner from "../components/about/AboutBanner";
import MissionVision from "../components/about/MissionVision";
import AboutCompany from "../components/about/AboutCompany";
import TeamSection from "../components/about/TeamSection";
import SlidingText from "../components/home/slidingTexts";

const About = () => {
  return (
    <div>
      <AboutBanner
        title="About Our Company"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
      />
      <AboutCompany
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
        heading="Who We Are"
        text="We are a global software platform development company dedicated to delivering high-performing, scalable, and secure digital solutions. Our mission is to empower businesses through innovative technology, streamline operations, and drive sustainable growth by combining creativity, technical expertise, and a deep understanding of modern digital transformation."
      />
      <MissionVision />
      <TeamSection />
      {/* <AboutCTA /> */}
    </div>
  );
};

export default About;
