import toast from "react-hot-toast";
import { createBlog } from "../../../services/blog/blogService";
import { useEffect } from "react";
import { useState } from "react";
import BlogImageUpload from "./BlogImageUpload";
import CategorySelect from "./CategorySelect";
import TagInput from "./TagInput";
import PublishOptions from "./PublishOptions";
import BlogMetaFields from "./BlogMetaFields";
import BlogPreview from "./BlogPreview";
import BlogActions from "./BlogActions";

const BlogForm = () => {

        const [formData, setFormData] = useState({
        title: "",
        excerpt: "",
        content: "",
        featuredImage: null,
        category: "",
        tags: [],
        status: "draft",
        metaTitle: "",
        metaDescription: "",
    });

        const [loading, setLoading] = useState(false);
        const [errors, setErrors] = useState({});


        const handleChange = (e) => {
            const { name, value } = e.target;

            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));

            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        };

        const handleImageChange = (file) => {

    if (!file) return;
    const preview = URL.createObjectURL(file);

    setFormData((prev) => {

        // Purani preview remove karo
        if (prev.imagePreview) {
            URL.revokeObjectURL(prev.imagePreview);
        }

        return {
            ...prev,
            featuredImage: file,
            imagePreview: preview,
        };

    });

};

        const handleTagsChange = (tags) => {

            setFormData((prev) => ({
                ...prev,
                tags,
            }));

        };

useEffect(() => {

    return () => {

        if (formData.imagePreview) {
            URL.revokeObjectURL(formData.imagePreview);
        }

    };

}, [formData.imagePreview]);
        
const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
        newErrors.title = "Blog title is required.";
    }

    if (!formData.excerpt.trim()) {
        newErrors.excerpt = "Excerpt is required.";
    }

    if (!formData.content.trim()) {
        newErrors.content = "Content is required.";
    }

    if (!formData.category.trim()) {
    newErrors.category = "Category is required.";
}

    if (!formData.featuredImage) {
        newErrors.featuredImage = "Featured image is required.";
    }

    if (
        formData.metaTitle &&
        formData.metaTitle.length > 60
    ) {
        newErrors.metaTitle =
            "Meta title cannot exceed 60 characters.";
    }

    if (
        formData.metaDescription &&
        formData.metaDescription.length > 160
    ) {
        newErrors.metaDescription =
            "Meta description cannot exceed 160 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
    e.preventDefault();
     if (!validateForm()) return;

    try {
        setLoading(true);

        const data = new FormData();

        data.append("title", formData.title);
        data.append("excerpt", formData.excerpt);
        data.append("content", formData.content);
        data.append("category", formData.category.trim());
        data.append("tags", formData.tags.join(","));
        data.append("status", formData.status);
        data.append("metaTitle", formData.metaTitle);
        data.append("metaDescription", formData.metaDescription);
        data.append("featuredImage", formData.featuredImage);

        const response = await createBlog(data);

        console.log(response);

        toast.success("Blog Created Successfully");
        setFormData({
            title: "",
            excerpt: "",
            content: "",
            featuredImage: null,
            imagePreview: "",
            category: "",
            tags: [],
            status: "draft",
            metaTitle: "",
            metaDescription: "",
        });

    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};

        ;

        return (

           <form
                onSubmit={handleSubmit}
                className="space-y-8 rounded-2xl bg-white p-8 shadow"
            >

                <BlogImageUpload
                    image={formData.featuredImage}
                    onChange={handleImageChange}
                />
                {errors.featuredImage && (
                    <p className="text-sm text-red-500">
                        {errors.featuredImage}
                    </p>
                )}


                <div>

                    <label className="mb-2 block font-semibold">
                        Blog Title
                    </label>

                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter blog title"
                        className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                    />

                </div>


                <div>

                    <label className="mb-2 block font-semibold">
                        Excerpt
                    </label>

                    <textarea
                        rows={4}
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        placeholder="Short description"
                        className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                    />

                </div>

                {/* Content */}

                <div>

                    <label className="mb-2 block font-semibold">
                        Content
                    </label>

                    <textarea
                        rows={12}
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Write full article..."
                        className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                    />

                </div>

                <CategorySelect
                    value={formData.category}
                    onChange={handleChange}
                />

                <TagInput
                    tags={formData.tags}
                    onChange={handleTagsChange}
                />

            <PublishOptions
                status={formData.status}
                setStatus={(value) =>
                    setFormData((prev) => ({
                        ...prev,
                        status: value,
                    }))
                }
            />

                <BlogMetaFields
                    values={formData}
                    onChange={handleChange}
                />

                <BlogPreview
    formData={formData}
/>

                <BlogActions
                    loading={loading}
                />

            </form>

        );

    };

    export default BlogForm;