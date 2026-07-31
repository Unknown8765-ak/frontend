import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";

import {
  getWebsiteContent,
  addProject,
  deleteProject,
} from "../../../services/websiteContent/websiteContentService";
import toast from "react-hot-toast";

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);



  const fetchProjects = async () => {
    try {
      const response = await getWebsiteContent("agency");

      setProjects(response.data.sections.projects || []);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await deleteProject(id);

      fetchProjects();

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          Agency Projects
        </h2>

        <div className="space-y-4 mb-8">


          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Add Project
          </button>

        </div>

        {projects.length === 0 ? (

          <div className="text-center py-10 text-gray-500 text-lg">
            No Projects Found
          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {projects.map((project) => (

              <ProjectCard
                key={project._id}
                project={project}
                onDelete={() => handleDelete(project._id)}
              />

            ))}

          </div>

        )}

      </div>
      <ProjectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        loading={loading}
        onSubmit={async (formData) => {

          try {

            setLoading(true);
            await addProject(formData);
            fetchProjects();
            setShowModal(false);
          } catch (error) {
            toast.error(error.message);
          } finally {
            setLoading(false);
          }

        }}
      />
    </>
  );

};

export default ProjectManager;