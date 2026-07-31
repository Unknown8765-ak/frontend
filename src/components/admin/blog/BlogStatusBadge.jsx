const BlogStatusBadge = ({
    status,
}) => {

    const published =
        status === "published";

    return (

        <span
            className={`rounded-full px-4 py-2 text-sm font-semibold
            ${
                published
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
            }`}
        >

            {published ? "Published" : "Draft"}

        </span>

    );

};

export default BlogStatusBadge;