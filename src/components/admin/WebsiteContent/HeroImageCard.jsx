import { useEffect, useState } from "react";
import {
  getWebsiteContent,
  updateHeroImage,
} from "../../../services/websiteContent/websiteContentService";

const HeroImageCard = ({ page, title }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchContent = async () => {
    try {
      const response = await getWebsiteContent(page);

      const heroImage =
        response.data.sections?.hero?.image || "";

      setPreview(heroImage);
      setImage(null);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [page]);

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

      await updateHeroImage(page, formData);

      alert("Hero image updated successfully");

      fetchContent();
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="text-gray-500">
            Change hero banner of {page} page
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        <div>

          {preview ? (
            <img
              src={preview}
              alt={title}
              className="w-full h-72 rounded-xl border object-cover"
            />
          ) : (
            <div className="h-72 border rounded-xl flex justify-center items-center text-gray-500">
              No Hero Image
            </div>
          )}

        </div>

        <div className="flex flex-col justify-center space-y-5">

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg"
          >
            {loading
              ? "Uploading..."
              : "Update Hero Image"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default HeroImageCard;