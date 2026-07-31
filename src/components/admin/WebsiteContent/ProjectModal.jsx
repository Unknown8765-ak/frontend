import { useState } from "react";
import toast from "react-hot-toast";

const ProjectModal = ({
  isOpen,
  onClose,
  onSubmit,
  loading,
}) => {

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [technologies, settechnologies] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  if (!isOpen) return null;

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);

    setPreview(URL.createObjectURL(file));

  };

  const handleSave = () => {

    if (!title || !description || !image) {
      return toast.error("All fields are required");
    }
    if (!window.confirm("project save")) return;

    const formData = new FormData();

    formData.append("title", title);
    formData.append("link", link);
    formData.append("technologies", technologies);
    formData.append("description", description);
    formData.append("image", image);

    onSubmit(formData);

    setTitle("");
    setLink("");
    settechnologies("")
    setDescription("");
    setImage(null);
    setPreview("");

  };

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Add New Project
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="text"
            placeholder="Project Link"
            value={link}
            onChange={(e)=>setLink(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          /><input
            type="text"
            placeholder="technologies"
            value={technologies}
            onChange={(e)=>settechnologies(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />

          <textarea
            rows={5}
            placeholder="Project Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {preview && (

            <img
              src={preview}
              alt=""
              className="w-full h-56 object-cover rounded-xl border"
            />

          )}

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="border px-6 py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            {loading ? "Saving..." : "Save Project"}
          </button>

        </div>

      </div>

    </div>

  );
};

export default ProjectModal;