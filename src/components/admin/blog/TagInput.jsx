import { useState } from "react";
import { X } from "lucide-react";

const TagInput = ({
    tags = [],
    onChange,
}) => {

    const [input, setInput] = useState("");

    const addTag = (e) => {

        if (e.key !== "Enter") return;

        e.preventDefault();

        const value = input.trim().toLowerCase();

        if (!value) return;

        if (tags.includes(value)) {
            setInput("");
            return;
        }

        onChange([...tags, value]);

        setInput("");

    };

    const removeTag = (tag) => {

        onChange(
            tags.filter(
                item => item !== tag
            )
        );

    };

    return (

        <div>

            <label className="mb-2 block font-semibold">
                Tags
            </label>

            <input
                type="text"
                placeholder="Type tag and press Enter"
                value={input}
                onChange={(e) =>
                    setInput(e.target.value)
                }
                onKeyDown={addTag}
                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    p-4
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:ring-2
                    focus:ring-blue-100
                "
            />

            {

                tags.length > 0 && (

                    <div className="mt-4 flex flex-wrap gap-3">

                        {

                            tags.map((tag) => (

                                <div
                                    key={tag}
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-blue-100
                                        px-4
                                        py-2
                                        text-sm
                                        font-medium
                                        text-blue-700
                                    "
                                >

                                    #{tag}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeTag(tag)
                                        }
                                    >

                                        <X size={16} />

                                    </button>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

};

export default TagInput;