import HeroImageCard from "../../components/admin/WebsiteContent/HeroImageCard"
import ProjectManager from "../../components/admin/WebsiteContent/ProjectManager";
import CompanyImageManager from "../../components/admin/WebsiteContent/CompanyImageManager";

const WebsiteContent = () => {
  return (
    <div className="space-y-8">

      <HeroImageCard
        page="home"
        title="Home Hero Image"
      />

      <HeroImageCard
        page="solar"
        title="Solar Hero Image"
      />

      <HeroImageCard
        page="aquarium"
        title="Aquarium Hero Image"
      />

      <HeroImageCard
        page="agency"
        title="Agency Hero Image"
      />

      <CompanyImageManager
        page="home"
        title="Home Company Image"
      />

      <CompanyImageManager
        page="about"
        title="About Company Image"
      />
    <ProjectManager />

    </div>
  );
};

export default WebsiteContent;