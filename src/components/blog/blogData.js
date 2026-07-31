
import {
    getAllBlogs,
    getBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog,
} from "../../services/blog/blogService";


export const fetchBlogs = async (query = {}) => {
    try {

        const response = await getAllBlogs(query);
        console.log(response)
        const blogs = response?.data?.blogs || [];  
        const featuredBlog = blogs.find(blog => blog.status === "published") || null;    
        const recentBlogs = [...blogs]
            .sort(
                (a, b) =>
                    new Date(b.publishedAt) -
                    new Date(a.publishedAt)
            )
            .slice(0, 5);  
            
        console.log("recentBlogs",recentBlogs)
        const popularBlogs = [...blogs]
            .sort((a, b) => b.views - a.views)
            .slice(0, 5); 
            
        console.log("popularBlogs",popularBlogs)
        const categories = [
            "All",
            ...new Set(
                blogs.map(blog => blog.category)
            )
        ];
        const tags = [
            ...new Set(
                blogs.flatMap(blog => blog.tags || [])
            )
        ];

        return {
            blogs,
            featuredBlog,
            recentBlogs,
            popularBlogs,
            categories,
            tags,
            pagination: response.data.pagination,
        };

    } catch (error) {
        throw error;
    }
};


export const fetchSingleBlog = async (slug) => {

    try {
        const response = await getBlogBySlug(slug);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }

};


export const searchBlogs = (
    blogs,
    keyword = ""
) => {
    if (!keyword.trim()) return blogs;

    return blogs.filter(blog =>

        blog.title
            .toLowerCase()
            .includes(keyword.toLowerCase())

        ||

        blog.excerpt
            .toLowerCase()
            .includes(keyword.toLowerCase())

        ||

        blog.content
            .toLowerCase()
            .includes(keyword.toLowerCase())

    );

};


export const filterBlogsByCategory = (
    blogs,
    category
) => {

    if (
        !category ||
        category === "All"
    ) {
        return blogs;
    }
    return blogs.filter(
        blog => blog.category === category
    );

};


export const filterBlogsByTag = (
    blogs,
    tag
) => {

    if (!tag) return blogs;
    return blogs.filter(blog =>
        blog.tags?.includes(tag)
    );

};


export const sortBlogs = (
    blogs,
    sortBy = "latest"
) => {

    switch (sortBy) {
        case "latest":
            return [...blogs].sort(
                (a, b) =>
                    new Date(b.publishedAt) -
                    new Date(a.publishedAt)

            );

        case "oldest":
            return [...blogs].sort(

                (a, b) =>
                    new Date(a.publishedAt) -
                    new Date(b.publishedAt)

            );

        case "popular":
            return [...blogs].sort(

                (a, b) => b.views - a.views
            );
        case "title":
            return [...blogs].sort(
                (a, b) =>
                    a.title.localeCompare(b.title)
            );
        default:
            return blogs;
    }

};


export const paginateBlogs = (
    blogs,
    page = 1,
    limit = 6
) => {

    const startIndex = (page - 1) * limit;
    return blogs.slice(
        startIndex,
        startIndex + limit

    );

};
export const getRelatedBlogs = (
    blogs,
    currentBlog,
    limit = 3
) => {

    return blogs

        .filter(

            blog =>
                blog._id !== currentBlog._id &&
                blog.category === currentBlog.category
        )
        .slice(0, limit);
};



export const getFeaturedBlog = (
    blogs
) => {
    return (

        blogs.find(
            blog => blog.status === "published"
        ) || null
    );
};


export const getRecentBlogs = (
    blogs,
    limit = 5
) => {

    return [...blogs]
    .sort(
            (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        )

        .slice(0, limit);
};

export const getPopularBlogs = (
    blogs,
    limit = 5
) => {
    return [...blogs]
        .sort(
            (a, b) => b.views -a.views
        )
        .slice(0, limit);

};

export const addBlog = async (formData) => {
    return await createBlog(formData);

};
export const editBlog = async (
    id,
    formData
) => {
    return await updateBlog(
        id,
        formData
    );

};
export const removeBlog = async (
    id
) => {
    return await deleteBlog(id);

};