import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  getProfile,
  updateProfile,
} from "../../../services/profile/profileService";

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();

      reset({
        name: response.data.name,
        email: response.data.email,
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);

      await updateProfile(formData);

      alert("Profile Updated Successfully");

      fetchProfile();
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
          Personal Information
        </h2>

        <p className="text-gray-500 mt-1">
          Update your account information.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        {/* Name */}

        <div>
          <label className="block font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            className="w-full border rounded-lg px-4 py-3"
            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="block font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            className="w-full border rounded-lg px-4 py-3"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default ProfileForm;