import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  getSettings,
  updateSettings,
} from "../../../services/settings/settingsService";

const SEOForm = () => {
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  defaultValues: {
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    robots: "index,follow",
  },
});

const [loading, setLoading] = useState(false);

const fetchSettings = async () => {
  try {
    const response = await getSettings();

    reset({
      metaTitle: response.data.seo?.metaTitle || "",
      metaDescription:
        response.data.seo?.metaDescription || "",
      keywords: response.data.seo?.keywords || "",
      robots:
        response.data.seo?.robots || "index,follow",
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

    formData.append("metaTitle", data.metaTitle);
    formData.append(
      "metaDescription",
      data.metaDescription
    );
    formData.append("keywords", data.keywords);
    formData.append("robots", data.robots);

    await updateSettings(formData);

    alert("SEO Settings Updated Successfully");

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

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-gray-800">
          SEO Settings
        </h2>

        <p className="text-gray-500 mt-2">
          Configure default SEO information for your website.
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        {/* Meta Title */}

        <div>

          <label className="block mb-2 font-medium">
            Meta Title
          </label>

          <input
            type="text"
            placeholder="Enter Meta Title"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("metaTitle", {
              required: "Meta title is required",
            })}
          />

          {errors.metaTitle && (
            <p className="text-red-500 text-sm mt-2">
              {errors.metaTitle.message}
            </p>
          )}

        </div>

        {/* Meta Description */}

        <div>

          <label className="block mb-2 font-medium">
            Meta Description
          </label>

          <textarea
            rows={5}
            placeholder="Enter Meta Description"
            className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
            {...register("metaDescription", {
              required: "Meta description is required",
            })}
          />

          {errors.metaDescription && (
            <p className="text-red-500 text-sm mt-2">
              {errors.metaDescription.message}
            </p>
          )}

        </div>

        {/* Keywords */}

        <div>

          <label className="block mb-2 font-medium">
            SEO Keywords
          </label>

          <input
            type="text"
            placeholder="solar, aquarium, digital agency"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("keywords")}
          />

          <p className="text-sm text-gray-500 mt-2">
            Separate keywords using commas.
          </p>

        </div>

        {/* Robots */}

        <div>

          <label className="block mb-2 font-medium">
            Robots
          </label>

         <select
  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
  {...register("robots")}
>
  <option value="index,follow">
    index,follow
  </option>

  <option value="noindex,follow">
    noindex,follow
  </option>

  <option value="index,nofollow">
    index,nofollow
  </option>

  <option value="noindex,nofollow">
    noindex,nofollow
  </option>
</select>

        </div>

        {/* Button */}

        <div className="flex justify-end">

          <button
  type="submit"
  disabled={loading}
  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition"
>
  {loading ? "Saving..." : "Save SEO Settings"}
</button>
        </div>

      </form>

    </div>
  );
};

export default SEOForm;