import { FaEye, FaTrash } from "react-icons/fa";

const GalleryCard = ({ image, onPreview,onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">


      <div className="relative group">

        <img
          src={image.image}
          alt={image.title}
          className="w-full h-60 object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex justify-center items-center gap-4">

          <button
            onClick={onPreview}
            className="bg-white text-blue-600 p-3 rounded-full hover:scale-110 transition"
          >
            <FaEye />
          </button>

          <button
    onClick={onDelete}
    className="bg-white text-red-600 p-3 rounded-full hover:scale-110 transition"
>
    <FaTrash />
</button>

        </div>

      </div>

      {/* Content */}

      <div className="p-5">

        <h3 className="text-lg font-semibold text-gray-800">
          {image.title}
        </h3>

        <span className="inline-block mt-3 px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
          {image.category}
        </span>

      </div>

    </div>
  );
};

export default GalleryCard;