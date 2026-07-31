import BlogRow from "./BlogRow";

const BlogTable = ({
    blogs = [],
    onDelete
}) => {

    if (!blogs.length) {
        return (
            <div className="rounded-2xl bg-white p-10 text-center shadow">
                No Blogs Found
            </div>
        );

    }

    return (

        <div className="overflow-hidden rounded-2xl bg-white shadow">

            <table className="min-w-full">

            <thead className="bg-gray-100">
                <tr>
                    <th className="px-6 py-4 text-left">
                        Image
                    </th>
                    <th className="px-6 py-4 text-left">
                        Title
                    </th>
                    <th className="px-6 py-4 text-left">
                        Category
                    </th>
                    <th className="px-6 py-4 text-left">
                        Status
                    </th>
                    <th className="px-6 py-4 text-left">
                        Views
                    </th>
                    <th className="px-6 py-4 text-left">
                        Published
                    </th>
                    <th className="px-6 py-4 text-center">
                        Action
                    </th>
                    </tr>

                </thead>

                <tbody>

                    {

                    blogs.map((blog) => (
                        <BlogRow
                            key={blog._id}
                            blog={blog}
                            onDelete={onDelete}
                        />
                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default BlogTable;