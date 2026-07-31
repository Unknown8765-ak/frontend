import SEO from "../components/common/SEO";

import Hero from "../components/agency/Hero";
import Services from "../components/agency/Services";
import Portfolio from "../components/agency/Portfolio";
import Process from "../components/agency/Process";
import CTA from "../components/agency/CTA";

const Agency = () => {
  return (
    <>
      <SEO
        title="Digital Marketing Agency"
        description="Grow your business with Sun & Shadow Group's professional digital marketing, branding, website development, and performance marketing services."
        keywords="Digital Marketing Agency, Website Development, SEO Services, Branding, Social Media Marketing, Sun & Shadow Group"
        url="https://sunandshadow.in/agency"
      />

      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <CTA />
    </>
  );
};

export default Agency;