const StatusFilter = ({
    value,
    onChange,
}) => {

    return (

        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                h-12
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4
                text-sm
                outline-none
                transition
                focus:border-blue-600
                focus:ring-4
                focus:ring-blue-100
            "
        >

            <option value="all">
                All Status
            </option>

            <option value="published">
                Published
            </option>

            <option value="draft">
                Draft
            </option>

        </select>

    );

};

export default StatusFilter;