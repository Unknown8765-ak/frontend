import { FaEdit, FaTrash } from "react-icons/fa";

const TestimonialRow = ({
  testimonial,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">

      {/* Client */}

      <td className="p-4">
        <div className="flex items-center gap-3">

          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>

            <h3 className="font-semibold">
              {testimonial.name}
            </h3>

            <p className="text-sm text-gray-500">
              {testimonial.company}
            </p>

          </div>

        </div>
      </td>

      {/* Rating */}

      <td className="p-4">

        <div className="flex">

          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span
              key={index}
              className="text-yellow-500 text-lg"
            >
              ★
            </span>
          ))}

        </div>

      </td>

      {/* Review */}

      <td className="p-4 max-w-sm truncate">
        {testimonial.review}
      </td>

      {/* Actions */}

      <td className="p-4">

        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(testimonial)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
          >
            <FaEdit />
          </button>

          <button
            onClick={() => onDelete(testimonial._id)}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
          >
            <FaTrash />
          </button>

        </div>

      </td>

    </tr>
  );
};

export default TestimonialRow;