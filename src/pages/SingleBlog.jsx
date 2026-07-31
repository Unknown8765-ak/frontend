import {
    CalendarDays,
    Clock,
    Eye,
    ArrowLeft,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogBySlug } from "../services/blog/blogService";
import SEO from "../components/common/SEO";

const SingleBlog = () => {
    const { slug } = useParams();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await getBlogBySlug(slug);
                setBlog(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-xl font-semibold">
                    Loading...
                </h1>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-2xl font-bold">
                    Blog Not Found
                </h1>
            </div>
        );
    }

    const readTime = Math.max(
        1,
        Math.ceil(blog.content.split(" ").length / 200)
    );

    return (
        <>
        <SEO
                title={blog.metaTitle || blog.title}
                description={blog.metaDescription || blog.excerpt}
                keywords={
                    blog.tags?.join(", ") ||
                    `${blog.category}, Sun & Shadow Group`
                }
                image={
                    blog.featuredImage?.url ||
                    "https://sunandshadow.in/favicon.png"
                }
                url={`https://sunandshadow.in/blog/${blog.slug}`}
                />
        <section className="bg-slate-50 py-14">
            <div className="mx-auto max-w-5xl px-6">


                <div className="mb-8 flex items-center gap-6">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
                    >
                        <ArrowLeft size={18} />
                        Back to Blogs
                    </Link>

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        {blog.category}
                    </span>
                </div>
             

                <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
                    {blog.title}
                </h1>

                
                <p className="mt-5 text-xl leading-8 text-slate-600">
                    {blog.excerpt}
                </p>

         

                <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-500">

                    <div className="flex items-center gap-2">
                        <CalendarDays size={18} />
                        <span>
                            {new Date(
                                blog.publishedAt
                            ).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock size={18} />
                        <span>{readTime} min read</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Eye size={18} />
                        <span>{blog.views} Views</span>
                    </div>

                </div>

             

                <div className="mt-12 overflow-hidden rounded-3xl shadow-xl">

                    <img
                        src={
                            blog.featuredImage?.url ||
                            "/images/blog-placeholder.jpg"
                        }
                        alt={blog.title}
                        className="h-125 w-full object-cover"
                    />

                </div>

                {/* Content */}

                <article className="prose prose-lg mt-14 max-w-none rounded-3xl bg-white p-10 shadow-lg">

                    <p className="whitespace-pre-line leading-9 text-slate-700">
                        {blog.content}
                    </p>

                </article>

            </div>
        </section>
        </>
    );
};

export default SingleBlog;