import Hero from "../components/home/Hero";
import BusinessUnits from "../components/home/BusinessUnits";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import FAQs from "../components/home/FAQs";

const Home = () => {
  return (
    <>
      <Hero />
      <BusinessUnits />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
       <FAQs/>
      <CTA />
     
    </>
  );
};

export default Home;
