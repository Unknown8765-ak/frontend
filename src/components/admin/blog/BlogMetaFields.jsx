const BlogMetaFields = ({
    values,
    onChange,
}) => {

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">
                SEO Settings
            </h2>

            <div>

                <label className="mb-2 block font-medium">
                    Meta Title
                </label>

                <input
                    type="text"
                    name="metaTitle"
                    value={values.metaTitle}
                    onChange={onChange}
                    placeholder="Meta Title"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        p-4
                        outline-none
                        focus:border-blue-600
                    "
                />

            </div>

            <div>

                <label className="mb-2 block font-medium">
                    Meta Description
                </label>

                <textarea
                    rows={4}
                    name="metaDescription"
                    value={values.metaDescription}
                    onChange={onChange}
                    placeholder="Meta Description"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        p-4
                        outline-none
                        focus:border-blue-600
                    "
                />

            </div>

        </div>

    );

};

export default BlogMetaFields;