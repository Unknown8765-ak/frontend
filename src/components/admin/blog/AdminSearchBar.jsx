import { Search } from "lucide-react";

const AdminSearchBar = ({
    value,
    onChange,
}) => {

    return (

        <div className="relative w-full">

            <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="search"
                placeholder="Search blog by title..."
                autoComplete="off"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    pl-11
                    pr-4
                    text-sm
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                "
            />

        </div>

    );

};

export default AdminSearchBar;