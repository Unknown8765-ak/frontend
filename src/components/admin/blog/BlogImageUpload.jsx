
import toast from "react-hot-toast";
import { useRef, useState, useEffect } from "react";
import { UploadCloud, X } from "lucide-react";

const BlogImageUpload = ({
    image,
    onChange,
}) => {

    const inputRef = useRef(null);

    const [preview, setPreview] = useState("");

    useEffect(() => {

        if (!image) {
            setPreview("");
            return;
        }

        const objectUrl = URL.createObjectURL(image);

        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);

    }, [image]);

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            toast.success("Please upload an image");
            return;
        }

        onChange(file);

    };

    const removeImage = () => {

        onChange(null);

        if (inputRef.current) {
            inputRef.current.value = "";
        }

    };

    return (

        <div>

            <label className="mb-3 block text-lg font-semibold">
                Featured Image
            </label>

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleImage}
            />

            {
                !preview ? (

                    <div
                        onClick={() => inputRef.current.click()}
                        className="
                            flex
                            h-72
                            cursor-pointer
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                            border-2
                            border-dashed
                            border-gray-300
                            bg-gray-50
                            transition
                            hover:border-blue-600
                            hover:bg-blue-50
                        "
                    >

                        <UploadCloud
                            size={55}
                            className="text-blue-600"
                        />

                        <h3 className="mt-4 text-xl font-semibold">
                            Upload Featured Image
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            PNG, JPG, JPEG
                        </p>

                    </div>

                ) : (

                    <div className="relative overflow-hidden rounded-2xl">

                        <img
                            src={preview}
                            alt="Preview"
                            className="h-80 w-full rounded-2xl object-cover"
                        />

                        <button
                            type="button"
                            onClick={removeImage}
                            className="
                                absolute
                                right-4
                                top-4
                                rounded-full
                                bg-red-500
                                p-2
                                text-white
                                transition
                                hover:bg-red-600
                            "
                        >

                            <X size={18} />

                        </button>

                        <button
                            type="button"
                            onClick={() => inputRef.current.click()}
                            className="
                                absolute
                                bottom-4
                                right-4
                                rounded-xl
                                bg-black/80
                                px-5
                                py-2
                                text-white
                                transition
                                hover:bg-black
                            "
                        >

                            Change Image

                        </button>

                    </div>

                )

            }

        </div>

    );

};

export default BlogImageUpload;