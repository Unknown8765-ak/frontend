import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

import { changePassword } from "../../../services/profile/profileService";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const newPassword = watch("newPassword");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await changePassword({
        oldPassword: data.currentPassword,
        newPassword: data.newPassword,
      });
      console.log(response);
      alert("Password Updated Successfully");

      reset();

    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-blue-100 p-3 rounded-full">
          <FaLock className="text-blue-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Change Password
          </h2>

          <p className="text-gray-500">
            Update your account password securely.
          </p>
        </div>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        {/* Current Password */}

        <div>

          <label className="block mb-2 font-medium">
            Current Password
          </label>

          <div className="relative">

            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Enter current password"
              className="w-full border rounded-lg px-4 py-3 pr-12"
              {...register("currentPassword", {
                required: "Current password is required",
              })}
            />

            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showCurrent ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.currentPassword.message}
            </p>
          )}

        </div>

        {/* New Password */}

        <div>

          <label className="block mb-2 font-medium">
            New Password
          </label>

          <div className="relative">

            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full border rounded-lg px-4 py-3 pr-12"
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.newPassword.message}
            </p>
          )}

        </div>

        {/* Confirm Password */}

        <div>

          <label className="block mb-2 font-medium">
            Confirm Password
          </label>

          <div className="relative">

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full border rounded-lg px-4 py-3 pr-12"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.confirmPassword.message}
            </p>
          )}

        </div>

        <div className="flex justify-end">

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>

        </div> 

      </form>

    </div>
  );
};

export default ChangePassword;