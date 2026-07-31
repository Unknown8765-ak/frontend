const CategoryFilter = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300
              ${
                selectedCategory === category
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-600"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilter;