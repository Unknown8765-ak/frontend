import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "info@company.com",
      phone: "+91 9876543210",
      whatsapp: "+91 9876543210",
      address: "Lucknow, Uttar Pradesh, India",
      mapLink: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    /*
      Future Backend

      await updateContact(data)

      toast.success("Contact information updated")
    */
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          Contact Information
        </h2>

        <p className="text-gray-500 mt-1">
          Update your company contact details.
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-5"
      >

        {/* Email */}

        <div>

          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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

        {/* Phone */}

        <div>

          <label className="block mb-2 font-medium">
            Phone
          </label>

          <input
            type="text"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phone")}
          />

        </div>

        {/* WhatsApp */}

        <div>

          <label className="block mb-2 font-medium">
            WhatsApp
          </label>

          <input
            type="text"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("whatsapp")}
          />

        </div>

        {/* Address */}

        <div>

          <label className="block mb-2 font-medium">
            Address
          </label>

          <input
            type="text"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("address")}
          />

        </div>

        {/* Google Map */}

        <div className="md:col-span-2">

          <label className="block mb-2 font-medium">
            Google Map Link
          </label>

          <input
            type="text"
            placeholder="https://maps.google.com/..."
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("mapLink")}
          />

        </div>

        <div className="md:col-span-2 flex justify-end">

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Save Changes
          </button>

        </div>

      </form>

    </div>
  );
};

export default ContactForm;