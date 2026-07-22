import { useEffect, useRef, useState } from "react";
import GalleryCard from "./GalleryCard";

import {
  getWebsiteContent,
  addGalleryImage,
  deleteGalleryImage,
} from "../../../services/websiteContent/websiteContentService";

const GalleryManager = () => {
  const [gallery, setGallery] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const fileRef = useRef(null);

  const fetchGallery = async () => {
    try {
      const response = await getWebsiteContent("aquarium");

      setGallery(response.data.sections?.gallery || []);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) {
      return alert("Please select an image");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", image);

      await addGalleryImage(formData);

      alert("Image Uploaded Successfully");

      setImage(null);
      setPreview("");

      if (fileRef.current) {
        fileRef.current.value = "";
      }

      fetchGallery();
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Delete this image?"
    );

    if (!confirm) return;

    try {
      await deleteGalleryImage(id);

      fetchGallery();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Aquarium Gallery
      </h2>

      {/* Upload */}

      <div className="flex flex-col md:flex-row gap-5 mb-8">

        <div className="flex-1">

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg"
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>

      </div>

      {/* Preview */}

      {preview && (
        <div className="mb-8">

          <h3 className="font-semibold mb-3">
            Preview
          </h3>

          <img
            src={preview}
            alt="Preview"
            className="w-64 h-64 object-cover rounded-xl border"
          />

        </div>
      )}

      {/* Gallery */}

      {gallery.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No Gallery Images Found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {gallery.map((item) => (
          <GalleryCard
            key={item._id}
            image={item}
            onDelete={() => handleDelete(item._id)}
          />
        ))}

</div>
      )}

    </div>
  );
};

export default GalleryManager;