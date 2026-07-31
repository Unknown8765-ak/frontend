const BlogPreview = ({ formData }) => {

    return (

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">
                Live Preview
            </h2>

            {
                formData.imagePreview && (
                    <img
                        src={formData.imagePreview}
                        alt="Preview"
                        className="mb-6 h-72 w-full rounded-xl object-cover"
                    />
                )
            }

            <h1 className="text-4xl font-bold">
                {
                    formData.title ||
                    "Blog Title"
                }
            </h1>

            <p className="mt-4 text-gray-600">
                {
                    formData.excerpt ||
                    "Blog excerpt..."
                }
            </p>

            <div className="mt-6 flex gap-3">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {
                        formData.category ||
                        "Category"
                    }
                </span>

            </div>

            <div className="mt-8 whitespace-pre-wrap text-gray-700">

                {
                    formData.content ||
                    "Blog content..."
                }

            </div>

        </div>

    );

};

export default BlogPreview;