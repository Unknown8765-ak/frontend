import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  getSettings,
  updateSettings,
} from "../../../services/settings/settingsService";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const SocialLinksForm = () => {
  const {
  register,
  handleSubmit,
  reset,
} = useForm({
  defaultValues: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
});

const [loading, setLoading] = useState(false);

const fetchSettings = async () => {
  try {
    const response = await getSettings();

    reset({
      facebook: response.data.socialLinks?.facebook || "",
      instagram: response.data.socialLinks?.instagram || "",
      linkedin: response.data.socialLinks?.linkedin || "",
      youtube: response.data.socialLinks?.youtube || "",
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

useEffect(() => {
  fetchSettings();
}, []);
const onSubmit = async (data) => {
  try {
    setLoading(true);

    const formData = new FormData();

    formData.append("facebook", data.facebook);
    formData.append("instagram", data.instagram);
    formData.append("linkedin", data.linkedin);
    formData.append("youtube", data.youtube);

    await updateSettings(formData);

    alert("Social Links Updated Successfully");

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
          Social Media Links
        </h2>

        <p className="text-gray-500 mt-1">
          Manage your company social media profiles.
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Facebook */}

        <div>

          <label className="flex items-center gap-2 mb-2 font-medium">
            <FaFacebook className="text-blue-600" />
            Facebook
          </label>

          <input
            type="url"
            placeholder="https://facebook.com/..."
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("facebook")}
          />

        </div>

        {/* Instagram */}

        <div>

          <label className="flex items-center gap-2 mb-2 font-medium">
            <FaInstagram className="text-pink-600" />
            Instagram
          </label>

          <input
            type="url"
            placeholder="https://instagram.com/..."
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
            {...register("instagram")}
          />

        </div>

        {/* LinkedIn */}

        <div>

          <label className="flex items-center gap-2 mb-2 font-medium">
            <FaLinkedin className="text-blue-700" />
            LinkedIn
          </label>

          <input
            type="url"
            placeholder="https://linkedin.com/company/..."
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            {...register("linkedin")}
          />

        </div>

        {/* YouTube */}

        <div>

          <label className="flex items-center gap-2 mb-2 font-medium">
            <FaYoutube className="text-red-600" />
            YouTube
          </label>

          <input
            type="url"
            placeholder="https://youtube.com/..."
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
            {...register("youtube")}
          />

        </div>

        <div className="flex justify-end">

          <button
  type="submit"
  disabled={loading}
  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg"
>
  {loading ? "Saving..." : "Save Changes"}
</button>

        </div>

      </form>

    </div>
  );
};

export default SocialLinksForm;