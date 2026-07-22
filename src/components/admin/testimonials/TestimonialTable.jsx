import { useEffect, useState } from "react";
import TestimonialRow from "./TestimonialRow";
import TestimonialFormModal from "./TestimonialFormModal";

import {
  getAllTestimonials,
  deleteTestimonial,
} from "../../../services/testimonial/testimonialService";

const TestimonialTable = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);

      const response = await getAllTestimonials();

      setTestimonials(response.data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleEdit = (testimonial) => {
    setSelected(testimonial);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this testimonial?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTestimonial(id);

      fetchTestimonials();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md p-6">

        {/* Header */}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Testimonials
          </h2>

          <button
            onClick={() => {
              setSelected(null);
              setOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
          >
            + Add Testimonial
          </button>
        </div>

        {loading && (
          <h2 className="text-center text-lg font-semibold mb-4">
            Loading Testimonials...
          </h2>
        )}

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Client</th>
                <th className="p-4 text-left">Rating</th>
                <th className="p-4 text-left">Review</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {testimonials.map((testimonial) => (
                <TestimonialRow
                  key={testimonial._id}
                  testimonial={testimonial}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>

          </table>
        </div>

      </div>

      <TestimonialFormModal
        isOpen={open}
        onClose={() => {
          setOpen(false);
          setSelected(null);
        }}
        initialData={selected}
        refreshTestimonials={fetchTestimonials}
      />
    </>
  );
};

export default TestimonialTable;