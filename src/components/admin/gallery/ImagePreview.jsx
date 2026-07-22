import { FaTimes } from "react-icons/fa";

const ImagePreview = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full relative">

        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
        >
          <FaTimes />
        </button>

        {/* Image */}

        <img
          src={image.image}
          alt={image.title}
          className="w-full h-125 object-cover"
        />

        {/* Details */}

        <div className="p-6">

          <h2 className="text-2xl font-bold">
            {image.title}
          </h2>

          <p className="text-gray-500 mt-2">
            Category : {image.category}
          </p>

        </div>

      </div>

    </div>
  );
};

export default ImagePreview;