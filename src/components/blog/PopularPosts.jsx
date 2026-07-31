import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const PopularPosts = ({ posts = [] }) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Popular Posts
      </h2>

      <div className="space-y-6">

        {posts.map((post, index) => (
          <Link
              key={post._id}
              to={`/blog/${post.slug}`}
              className="group flex items-start gap-4"
          >
        <span className="text-3xl font-bold text-blue-600">
            {String(index + 1).padStart(2, "0")}
        </span>
        <div>
            <h3 className="line-clamp-2 font-semibold transition group-hover:text-blue-600">
                {post.title}
            </h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <Eye size={16} />
                {(post.views || 0).toLocaleString()} Views
            </div>

        </div>

    </Link>

))}

      </div>

    </div>
  );
};

export default PopularPosts;