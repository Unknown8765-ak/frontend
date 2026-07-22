import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { uploadGalleryImage } from "../../../services/gallery/galleryService";

const UploadModal = ({ onClose, refreshGallery }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const image = watch("image");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("category", data.category);
      formData.append("image", data.image[0]);

      const response = await uploadGalleryImage(formData);

      alert(response.message);

      reset();

      refreshGallery();

      onClose();

    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-5">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-5">

          <h2 className="text-2xl font-bold">
            Upload Image
          </h2>

          <button onClick={onClose}>
            <FaTimes size={22} />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 space-y-5"
        >

          {/* Title */}

          <div>

            <label className="font-medium">
              Title
            </label>

            <input
              type="text"
              placeholder="Enter title"
              className="w-full border rounded-lg px-4 py-3 mt-2"
              {...register("title", {
                required: "Title is required",
              })}
            />

            <p className="text-red-500 text-sm">
              {errors.title?.message}
            </p>

          </div>

          {/* Category */}

          <div>

            <label className="font-medium">
              Category
            </label>

            <select
              className="w-full border rounded-lg px-4 py-3 mt-2"
              {...register("category", {
                required: "Category is required",
              })}
            >

              <option value="">Select</option>

              <option value="Solar">
                Solar
              </option>

              <option value="Aquarium">
                Aquarium
              </option>

              <option value="Agency">
                Agency
              </option>

            </select>

            <p className="text-red-500 text-sm">
              {errors.category?.message}
            </p>

          </div>

          {/* Image */}

          <div>

            <label className="font-medium">
              Image
            </label>

            <input
              type="file"
              accept="image/*"
              className="w-full mt-2"
              {...register("image", {
                required: "Image is required",
              })}
            />

            <p className="text-red-500 text-sm">
              {errors.image?.message}
            </p>

          </div>

          {/* Preview */}

          {image && image.length > 0 && (

            <img
              src={URL.createObjectURL(image[0])}
              alt="Preview"
              className="h-52 w-full object-cover rounded-lg"
            />

          )}

          {/* Button */}

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default UploadModal;