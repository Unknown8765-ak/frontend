const CategorySelect = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="mb-2 block font-semibold">
        Category
      </label>

      <input
        type="text"
        name="category"
        value={value}
        onChange={onChange}
        placeholder="e.g. Solar, Aquarium, Digital Marketing"
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          p-4
          outline-none
          transition
          focus:border-blue-600
          focus:ring-2
          focus:ring-blue-100
        "
      />
    </div>
  );
};

export default CategorySelect;