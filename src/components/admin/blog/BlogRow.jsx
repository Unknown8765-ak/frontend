import { Pencil, Trash2 } from "lucide-react";
import BlogStatusBadge from "./BlogStatusBadge";

const BlogRow = ({
    blog,
    onDelete,
}) => {

    return (

        <tr className="border-b last:border-none hover:bg-gray-50">

            <td className="px-6 py-4">

                <img
                    src={blog.featuredImage.url}
                    alt={blog.title}
                    className="h-16 w-20 rounded-lg object-cover"
                />

            </td>

            <td className="px-6 py-4">

                <h2 className="font-semibold">

                    {blog.title}

                </h2>

            </td>

            <td className="px-6 py-4">

                {blog.category}

            </td>

            <td className="px-6 py-4">

                <BlogStatusBadge
                    status={blog.status}
                />

            </td>

            <td className="px-6 py-4">

                {blog.views}

            </td>

            <td className="px-6 py-4">

                {

                    blog.publishedAt

                        ? new Date(blog.publishedAt).toLocaleDateString()

                        : "-"

                }

            </td>

            <td className="px-6 py-4">

                <div className="flex justify-center gap-3">

                    {/* <button
                        className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
                    >

                        <Pencil size={18} />

                    </button> */}

                    <button
                        onClick={() => onDelete(blog)}
                        className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200"
                    >
                        <Trash2 size={18} />
                    </button>

                </div>

            </td>

        </tr>

    );

};

export default BlogRow;