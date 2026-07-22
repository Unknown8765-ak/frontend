import Hero from "../components/about/Hero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import Team from "../components/about/Team";
import CTA from "../components/about/CTA";

const About = () => {
  return (
    <>
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