import { useEffect, useRef, useState } from "react";

import {
  getWebsiteContent,
  updateCompanyImage,
  deleteCompanyImage,
} from "../../../services/websiteContent/websiteContentService";
import toast from "react-hot-toast";

const CompanyImageManager = ({ page, title }) => {
  const [companyImage, setCompanyImage] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fileRef = useRef(null);

  const fetchCompanyImage = async () => {
    try {
      const response = await getWebsiteContent(page);

      setCompanyImage(
        response.data?.sections?.about?.image || ""
      );
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchCompanyImage();
  }, [page]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) {
      return toast.error("Please select an Image");

    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", image);

      await updateCompanyImage(page, formData);

        toast.success("Company Image Updated Successfully")

      setImage(null);
      setPreview("");

      if (fileRef.current) {
        fileRef.current.value = "";
      }

      fetchCompanyImage();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Delete this company image?"
    );

    if (!confirmDelete) return;

    try {
      setDeleting(true);

      await deleteCompanyImage(page);

      setCompanyImage("");

      toast.success("Company Image delete Updated Successfully")
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      setDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        {title}
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
          {loading ? "Uploading..." : "Update Image"}
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

      {/* Current Image */}

      {companyImage ? (
        <div className="border rounded-xl overflow-hidden shadow-sm">

          <img
            src={companyImage}
            alt={title}
            className="w-full max-w-md h-72 object-cover"
          />

          <div className="p-4">

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg"
            >
              {deleting ? "Deleting..." : "Delete Image"}
            </button>

          </div>

        </div>
      ) : (
        <div className="text-center py-10 text-gray-500 border rounded-xl">
          No Company Image Found
        </div>
      )}

    </div>
  );
};

export default CompanyImageManager;