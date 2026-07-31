import BlogForm from "../../components/admin/blog/BlogForm";
import Blogs from "../../components/admin/blog/Blogs";

const AdminBlog = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-7xl space-y-10">

                <div>
                    <h1 className="mb-6 text-3xl font-bold">
                        Create Blog
                    </h1>

                    <BlogForm />
                </div>

                <div>
                    <h1 className="mb-6 text-3xl font-bold">
                        All Blogs
                    </h1>

                    <Blogs />
                </div>

            </div>

        </div>
    );
};

export default AdminBlog;