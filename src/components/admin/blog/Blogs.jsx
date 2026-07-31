import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    fetchBlogs,
    removeBlog,
} from "../../blog/blogData";

import BlogTable from "./BlogTable";
import AdminSearchBar from "./AdminSearchBar";
import StatusFilter from "./StatusFilter";

const Blogs = () => {

    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");

    const [deleteBlog, setDeleteBlog] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        loadBlogs();
    }, []);

    const filteredBlogs = useMemo(() => {

        return blogs.filter((blog) => {

            const matchesSearch =
                blog.title
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                status === "all"
                    ? true
                    : blog.status === status;

            return matchesSearch && matchesStatus;

        });

    }, [blogs, search, status]);

    const loadBlogs = async () => {

        try {

            setLoading(true);

            const data = await fetchBlogs();

            setBlogs(data.blogs);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const handleDelete = async () => {

        if (!deleteBlog) return;

        try {

            setDeleteLoading(true);
            await removeBlog(deleteBlog._id);
            setBlogs((prev) =>
                prev.filter(
                    (blog) =>
                        blog._id !== deleteBlog._id
                )
            );
            setDeleteBlog(null);
        } catch (error) {
            console.error(error);
        } finally {

            setDeleteLoading(false);

        }

    };

    // const handleEdit = (blog) => {

    //     navigate(`/admin/blog/edit/${blog._id}`);

    // };

    if (loading) {

        return (
            <h1 className="py-20 text-center text-xl font-semibold">
                Loading...
            </h1>
        );

    }

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-7xl">

                <h1 className="mb-8 text-3xl font-bold">
                    All Blogs
                </h1>

                <div className="mb-8 flex flex-col gap-4 md:flex-row">

                    <div className="flex-1">

                        <AdminSearchBar
                            value={search}
                            onChange={setSearch}
                        />

                    </div>

                    <StatusFilter
                        value={status}
                        onChange={setStatus}
                    />

                </div>

                <BlogTable
                    blogs={filteredBlogs}
                    // onEdit={handleEdit}
                    onDelete={setDeleteBlog}
                />

                <DeleteModal
                    open={!!deleteBlog}
                    loading={deleteLoading}
                    onClose={() => setDeleteBlog(null)}
                    onDelete={handleDelete}
                />

            </div>

        </div>

    );

};

export default Blogs;