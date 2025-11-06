import React from "react";
import Banner from "../components/home/Banner";
import SlidingText from "../components/home/slidingTexts";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Testimonial from "../components/home/Testimonial";
import WorkProcess from "../components/home/WorkProcess";
import Blog from "../components/home/Blog";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SlidingText></SlidingText>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <WorkProcess></WorkProcess>
      <Blog></Blog>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
