import SEO from "../components/common/SEO";

import Hero from "../components/aquarium/Hero";
import Services from "../components/aquarium/Services";
import Gallery from "../components/aquarium/Gallery";
import Process from "../components/aquarium/Process";
import CTA from "../components/aquarium/CTA";

const Aquarium = () => {
  return (
    <>
      <SEO
        title="Premium Aquarium Solutions"
        description="Sun & Shadow Group designs and installs premium aquariums for homes, offices, hotels, and commercial spaces with customized maintenance solutions."
        keywords="Aquarium Design, Aquarium Installation, Custom Aquarium, Aquarium Maintenance, Aquarium Services, Sun & Shadow Group"
        url="https://sunandshadow.in/aquarium"
      />

      <Hero />
      <Services />
      <Gallery />
      <Process />
      {/* <CTA /> */}
    </>
  );
};

export default Aquarium;