import { Link } from "react-router-dom";

const RecentPosts = ({ posts = [] }) => {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-bold">
                Recent Posts
            </h2>

            <div className="space-y-5">

                {posts.map((post) => (

                    <Link
                        key={post._id}
                        to={`/blog/${post.slug}`}
                        className="group flex gap-4"
                    >

                        <div>

                            <h3 className="line-clamp-2 font-semibold transition group-hover:text-blue-600">
                                {post.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </p>

                        </div>

                    </Link>

                ))}

            </div>

        </div>
    );
};

export default RecentPosts;