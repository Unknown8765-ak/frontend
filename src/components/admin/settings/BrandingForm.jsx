import { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

import {
  getSettings,
  updateSettings,
} from "../../../services/settings/settingsService";

const BrandingForm = () => {
  const [logoPreview, setLogoPreview] = useState("");
  const [faviconPreview, setFaviconPreview] = useState("");

  const [logoFile, setLogoFile] = useState(null);
  const [faviconFile, setFaviconFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchSettings = async () => {
    try {
      const response = await getSettings();

      setLogoPreview(response.data.logo || "");
      setFaviconPreview(response.data.favicon || "");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleFaviconChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFaviconFile(file);
    setFaviconPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      if (logoFile) {
        formData.append("logo", logoFile);
      }

      if (faviconFile) {
        formData.append("favicon", faviconFile);
      }

      await updateSettings(formData);

      alert("Branding Updated Successfully");

      fetchSettings();
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">

      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Branding
        </h2>

        <p className="text-gray-500 mt-1">
          Upload your company logo and favicon.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-8"
      >

        {/* Logo */}

        <div>

          <label className="block font-medium mb-3">
            Company Logo
          </label>

          <img
            src={
              logoPreview ||
              "https://placehold.co/200x200?text=Logo"
            }
            alt="Logo"
            className="w-40 h-40 object-cover rounded-xl border mb-4"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
          />

        </div>

        {/* Favicon */}

        <div>

          <label className="block font-medium mb-3">
            Favicon
          </label>

          <img
            src={
              faviconPreview ||
              "https://placehold.co/64x64?text=Icon"
            }
            alt="Favicon"
            className="w-20 h-20 object-cover rounded-xl border mb-4"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleFaviconChange}
          />

        </div>

        <div className="md:col-span-2 flex justify-end">

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg flex items-center gap-2"
          >
            <FaCloudUploadAlt />

            {loading
              ? "Uploading..."
              : "Update Branding"}
          </button>

        </div>

      </form>

    </div>
  );
};

export default BrandingForm;