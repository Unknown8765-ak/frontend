const ProjectCard = ({ project, onDelete }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow bg-white">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <h3 className="text-xl font-bold">
          {project.title}
        </h3>
        <h3 className="text-xl font-bold">
          {project.link}
        </h3>
        <h3 className="text-xl font-bold">
          {project.technologies}
        </h3>

        <p className="text-gray-600 mt-2 line-clamp-3">
          {project.description}
        </p>

        <button
          onClick={onDelete}
          className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          Delete Project
        </button>

      </div>

    </div>
  );
};

export default ProjectCard;