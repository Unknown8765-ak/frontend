import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import {
  getSettings,
  updateSettings,
} from "../../../services/settings/settingsService";

const CompanyForm = () => {
 const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  defaultValues: {
    companyName: "",
    email: "",
    phone: "",
    address: "",
  },
});

const [loading, setLoading] = useState(false);

const fetchSettings = async () => {
  try {
    const response = await getSettings();

    reset({
      companyName: response.data.companyName,
      email: response.data.email,
      phone: response.data.phone,
      address: response.data.address,
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

    formData.append("companyName", data.companyName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);

    await updateSettings(formData);

    alert("Settings Updated Successfully");

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
          Company Information
        </h2>

        <p className="text-gray-500 mt-1">
          Update your company details.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Company Name */}

        <div>

          <label className="block mb-2 font-medium">
            Company Name
          </label>

          <input
            type="text"
            placeholder="Company Name"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("companyName", {
              required: "Company name is required",
            })}
          />

          {errors.companyName && (
            <p className="text-red-500 text-sm mt-2">
              {errors.companyName.message}
            </p>
          )}

        </div>

        {/* Tagline */}

        <div>

          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email")}
          />

        </div>

        {/* phone */}

        <div>

          <label className="block mb-2 font-medium">
            phone
          </label>

         <input
            type="phone"
            placeholder="phone"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phone")}
          />


        </div>
        <div>

          <label className="block mb-2 font-medium">
            address
          </label>

         <input
            type="text"
            placeholder="address"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("address")}
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

export default CompanyForm;