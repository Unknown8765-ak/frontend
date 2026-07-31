import { CalendarDays, Eye } from "lucide-react";

const BlogContent = ({ blog }) => {

    if (!blog) return null;

    return (

        <article className="mx-auto max-w-5xl">

            {/* Hero Image */}

            <div className="relative overflow-hidden rounded-3xl shadow-xl">

                <img
                    src={
                        blog.featuredImage?.url ||
                        "/images/blog-placeholder.jpg"
                    }
                    alt={blog.metaTitle || blog.title}
                    onError={(e) => {
                        e.target.src =
                            "/images/blog-placeholder.jpg";
                    }}
                    className="h-125 w-full object-cover"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />


                <span
                    className="
                        absolute
                        left-8
                        top-8
                        rounded-full
                        bg-white/90
                        px-5
                        py-2
                        text-sm
                        font-semibold
                        text-blue-600
                        backdrop-blur-md
                    "
                >
                    {blog.category}
                </span>

            </div>

            <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm">

                <h1
                    className="
                        text-5xl
                        font-extrabold
                        leading-tight
                        text-gray-900
                    "
                >
                    {blog.title}
                </h1>
                <div
                    className="
                        mt-8
                        flex
                        flex-wrap
                        items-center
                        gap-6
                        border-b
                        border-gray-200
                        pb-8
                        text-gray-500
                    "
                >

                    <div className="flex items-center gap-2">

                        <CalendarDays size={18} />

                        <span>

                            {new Date(
                                blog.publishedAt
                            ).toLocaleDateString(
                                "en-IN",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}

                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <Eye size={18} />

                        <span>
                            {(blog.views || 0).toLocaleString()} Views
                        </span>

                    </div>

                </div>

                {/* Blog Content */}

                <div
                    className="
                        prose
                        prose-lg
                        mt-10
                        max-w-none
                        leading-8
                        text-gray-700
                    "
                >

                    {blog.content}

                </div>

            </div>

        </article>

    );

};

export default BlogContent;