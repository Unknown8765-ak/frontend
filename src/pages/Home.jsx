import Hero from "../components/home/Hero";
import BusinessUnits from "../components/home/BusinessUnits";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import FAQs from "../components/home/FAQs";
import SEO from "../components/common/SEO";


const Home = () => {
  return (
    <>
    <SEO
  title="Solar, Aquarium & Digital Marketing Solutions"
  description="Sun & Shadow Group delivers professional solar installation, premium aquarium solutions, and result-driven digital marketing services for homes, businesses, and modern enterprises."
  keywords="Solar Company, Solar Installation, Aquarium Services, Digital Marketing Agency, Renewable Energy, Sun & Shadow Group"
  url="https://sunandshadow.in/"
/>
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
