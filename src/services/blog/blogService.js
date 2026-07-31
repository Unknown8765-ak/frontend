const BASE_URL = `${import.meta.env.VITE_API_URL}/blogs`;

export const createBlog = async (formData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            credentials: "include",
            body: formData,
        });

        let data = {};

        try {
            data = await response.json();
        } catch (error) {
            data = {};
        }

        if (!response.ok) {
            throw new Error(data?.message || "Failed to create blog.");
        }

        return data;
    } catch (error) {
        console.error("Create Blog Error:", error);
        throw new Error(error.message || "Something went wrong while creating the blog.");
    }
};

export const getAllBlogs = async (query = {}) => {
    try {
        const queryString = new URLSearchParams(query).toString();

        const response = await fetch(`${BASE_URL}?${queryString}`, {
            method: "GET",
            credentials: "include",
        });

        let data = {};

        try {
            data = await response.json();
        } catch (error) {
            data = {};
        }

        if (!response.ok) {
            throw new Error(data?.message || "Failed to fetch blogs.");
        }

        return data;
    } catch (error) {
        console.error("Get Blogs Error:", error);
        throw new Error(error.message || "Something went wrong while fetching blogs.");
    }
};

export const getBlogBySlug = async (slug) => {
    try {
        const response = await fetch(`${BASE_URL}/${slug}`, {
            method: "GET",
            credentials: "include",
        });

        let data = {};

        try {
            data = await response.json();
        } catch (error) {
            data = {};
        }

        if (!response.ok) {
            throw new Error(data?.message || "Failed to fetch blog.");
        }

        return data;
    } catch (error) {
        console.error("Get Blog Error:", error);
        throw new Error(error.message || "Something went wrong while fetching the blog.");
    }
};

export const updateBlog = async (id, formData) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            credentials: "include",
            body: formData,
        });

        let data = {};

        try {
            data = await response.json();
        } catch (error) {
            data = {};
        }

        if (!response.ok) {
            throw new Error(data?.message || "Failed to update blog.");
        }

        return data;
    } catch (error) {
        console.error("Update Blog Error:", error);
        throw new Error(error.message || "Something went wrong while updating the blog.");
    }
};


export const deleteBlog = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
            credentials: "include",
        });

       let data = {};

        try {
            data = await response.json();
        } catch (error) {
            data = {};
        }

        if (!response.ok) {
            throw new Error(data?.message || "Failed to delete blog.");
        }

        return data;
    } catch (error) {
        console.error("Delete Blog Error:", error);
        throw new Error(error.message || "Something went wrong while deleting the blog.");
    }
};