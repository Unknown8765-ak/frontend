import HeroImageCard from "../../components/admin/WebsiteContent/HeroImageCard"
import GalleryManager from "../../components/admin/WebsiteContent/GalleryManager";
import ProjectManager from "../../components/admin/WebsiteContent/ProjectManager";

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
      <GalleryManager />

      <HeroImageCard
        page="agency"
        title="Agency Hero Image"
      />
    <ProjectManager />

    </div>
  );
};

export default WebsiteContent;