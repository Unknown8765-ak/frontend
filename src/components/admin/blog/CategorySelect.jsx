const CategorySelect = ({
    value,
    onChange,
}) => {

    const categories = [
        "Solar",
        "CCTV",
        "Electrical",
    ];

    return (

        <div>

            <label className="mb-2 block font-semibold">
                Category
            </label>

            <select
                name="category"
                value={value}
                onChange={onChange}
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
            >

                <option value="">
                    Select Category
                </option>

                {categories.map((category) => (

                    <option
                        key={category}
                        value={category}
                    >
                        {category}
                    </option>

                ))}

            </select>

        </div>

    );

};

export default CategorySelect;