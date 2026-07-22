const GalleryCard = ({
  image,
  onDelete,
}) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm bg-white">

      <img
        src={image.image}
        alt="Gallery"
        className="w-full h-60 object-cover"
      />

      <div className="p-4">

        <button
          onClick={onDelete}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
        >
          Delete Image
        </button>

      </div>

    </div>
  );
};

export default GalleryCard;