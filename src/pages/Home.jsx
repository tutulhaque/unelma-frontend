import React, { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import SlidingText from "../components/home/SlidingTexts";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Testimonial from "../components/home/Testimonial";
import WorkProcess from "../components/home/WorkProcess";
import Blog from "../components/home/Blog";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/home?populate=*");
        const data = await res.json();

        // Check if data has 'attributes' or use it directly
        if (data.data) {
          setHomeData(data.data.attributes); // for standard Strapi REST API
        } else {
          setHomeData(data); // your current setup
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching home data:", err);
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!homeData) return <p>No data found.</p>;
  return (
    <div>
      <Banner></Banner>
      <SlidingText slidingTexts={homeData.SlidingText} />
      <Services
        services_title={homeData.services_title}
        services_description={homeData.services_description}
        services_image={homeData.services_image}
        HomeServices={homeData.HomeServices}
      />

      <Portfolio
        title={homeData.portfolio_title}
        description={homeData.portfolio_description}
        portfolioItems={homeData.HomePortfolio}
      />
      <Testimonial
        title={homeData.testimonialTitle}
        testimonials={homeData.HomeTestimonial}
      />
      <WorkProcess
        title={homeData.workprocessTitle}
        workProcesses={homeData.HomeWorkProcess}
      />
      <Blog title={homeData.blogTitle} blogs={homeData.homeBlog} />
      <ContactSection
        title={homeData.contact_title}
        description={homeData.contact_description}
      />
    </div>
  );
};

export default Home;
