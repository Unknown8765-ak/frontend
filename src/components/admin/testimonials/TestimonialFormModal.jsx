import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";

import {
  createTestimonial,
  updateTestimonial,
} from "../../../services/testimonial/testimonialService";

const TestimonialFormModal = ({
  isOpen,
  onClose,
  initialData,
  refreshTestimonials,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      designation: "",
      company: "",
      review: "",
      rating: 5,
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setValue("name", initialData.name);
      setValue("designation", initialData.designation);
      setValue("company", initialData.company);
      setValue("review", initialData.review);
      setValue("rating", initialData.rating);
    } else {
      reset({
        name: "",
        designation: "",
        company: "",
        review: "",
        rating: 5,
      });
    }
  }, [initialData, setValue, reset]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("company", data.company);
      formData.append("review", data.review);
      formData.append("rating", data.rating);

      if (data.image?.length > 0) {
        formData.append("image", data.image[0]);
      }

      if (initialData) {
        await updateTestimonial(initialData._id, formData);
      } else {
        await createTestimonial(formData);
      }

      await refreshTestimonials();

      reset();

      onClose();
    } catch (error) {
      console.log(error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-5">
      <div className="bg-white rounded-2xl w-full max-w-2xl">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">
          <h2 className="text-2xl font-bold">
            {initialData ? "Edit Testimonial" : "Add Testimonial"}
          </h2>

          <button onClick={onClose}>
            <FaTimes size={22} />
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 space-y-5"
        >
          <input
            placeholder="Client Name"
            className="w-full border rounded-lg px-4 py-3"
            {...register("name", { required: true })}
          />

          <input
            placeholder="Designation"
            className="w-full border rounded-lg px-4 py-3"
            {...register("designation", { required: true })}
          />

          <input
            placeholder="Company Name"
            className="w-full border rounded-lg px-4 py-3"
            {...register("company", { required: true })}
          />

          <textarea
            rows="4"
            placeholder="Review"
            className="w-full border rounded-lg px-4 py-3"
            {...register("review", { required: true })}
          />

          <select
            className="w-full border rounded-lg px-4 py-3"
            {...register("rating")}
          >
            <option value="5">5 Star</option>
            <option value="4">4 Star</option>
            <option value="3">3 Star</option>
            <option value="2">2 Star</option>
            <option value="1">1 Star</option>
          </select>

          <input
            type="file"
            accept="image/*"
            className="w-full border rounded-lg px-4 py-3"
            {...register("image")}
          />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="border px-6 py-3 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default TestimonialFormModal;