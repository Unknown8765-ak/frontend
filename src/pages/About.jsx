import SEO from "../components/common/SEO";

import Hero from "../components/about/Hero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import Team from "../components/about/Team";
import CTA from "../components/about/CTA";

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Sun & Shadow Group, our mission, vision, and commitment to delivering innovative solar, aquarium, and digital marketing solutions."
        keywords="About Sun & Shadow Group, Company Profile, Solar Company, Aquarium Experts, Digital Marketing Agency"
        url="https://sunandshadow.in/about"
      />

      <Hero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      {/* <Team /> */}
      <CTA />
    </>
  );
};

export default About;