import GalleryCard from "./GalleryCard";
import UploadModal from "./UploadModal";
import ImagePreview from "./ImagePreview";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

import {
  getAllGalleryImages,
  deleteGalleryImage,
} from "../../../services/gallery/galleryService";

const GalleryGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);


  const fetchGallery = async () => {
  try {
    setLoading(true);

    const response = await getAllGalleryImages();

    setImages(response.data);
  } catch (error) {
    console.log(error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this image?"
  );

  if (!confirmDelete) return;

  try {
    await deleteGalleryImage(id);

    fetchGallery();
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

useEffect(() => {
  fetchGallery();
}, []);

  return (
    <>
      {/* Top Bar */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Gallery Images
          </h2>

          <p className="text-gray-500">
            Total Images : {images.length}
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          <FaPlus />

          Upload Image
        </button>

      </div>

 {loading && (
      <h2 className="text-center text-xl font-semibold mb-6">
        Loading Gallery...
      </h2>
    )}

      {/* Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {images.map((item) => (
          <GalleryCard
    key={item._id}
    image={item}
    onPreview={() => setPreviewImage(item)}
    onDelete={() => handleDelete(item._id)}
/>
        ))}

      </div>

      {/* Upload Modal */}

      {showUploadModal && (
       <UploadModal
    onClose={() => setShowUploadModal(false)}
    refreshGallery={fetchGallery}
/>
      )}

      {/* Preview */}

      {previewImage && (
        <ImagePreview
          image={previewImage}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </>
  );
};

export default GalleryGrid;