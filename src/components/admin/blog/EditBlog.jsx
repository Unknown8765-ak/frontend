import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getBlogBySlug } from "../../services/blog/blogService";

import BlogForm from "../../components/admin/blog/BlogForm";

const EditBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadBlog();
    }, []);

    const loadBlog = async () => {

        try {
            const response = await getBlogBySlug(id);
            setBlog(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-7xl">

                <h1 className="mb-8 text-3xl font-bold">

                    Edit Blog

                </h1>

                <BlogForm
                    editMode={true}
                    initialData={blog}
                />

            </div>

        </div>

    );

};

export default EditBlog;