import SEO from "../components/common/SEO";

import Hero from "../components/solar/Hero";
import Services from "../components/solar/Services";
import WhySolar from "../components/solar/WhySolar";
import Process from "../components/solar/Process";
import CTA from "../components/solar/CTA";

const Solar = () => {
  return (
    <>
      <SEO
        title="Solar Energy Solutions"
        description="Sun & Shadow Group provides reliable solar installation, rooftop solar systems, and renewable energy solutions for homes and businesses."
        keywords="Solar Installation, Rooftop Solar, Solar Company, Renewable Energy, Solar Panels, Sun & Shadow Group"
        url="https://sunandshadow.in/solar"
      />

      <Hero />
      <Services />
      <WhySolar />
      <Process />
      <CTA />
    </>
  );
};

export default Solar;