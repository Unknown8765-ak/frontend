import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import FeaturedPost from "./FeaturedPost";
import BlogList from "./BlogList";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import Hero from "./Hero";

import {
    fetchBlogs,
    searchBlogs,
    filterBlogsByCategory,
    filterBlogsByTag,
    paginateBlogs,
} from "./blogData";

const POSTS_PER_PAGE = 6;

const BlogSection = () => {

    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [popularBlogs, setPopularBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);


    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const [loading, setLoading] = useState(true);

    const [searchParams] = useSearchParams();
    const selectedTag = searchParams.get("tag") || "";
    useEffect(() => {
    setCurrentPage(1);
}, [search, category, selectedTag]);


    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            const data = await fetchBlogs();

            setBlogs(data.blogs);
            setFeaturedBlog(data.featuredBlog);
            setRecentBlogs(data.recentBlogs);
            setPopularBlogs(data.popularBlogs);
            setCategories(data.categories);
            setTags(data.tags);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    const searchedBlogs = useMemo(() => {
        return searchBlogs(blogs, search);
    }, [blogs, search]);


    const filteredBlogs = useMemo(() => {

        let result = filterBlogsByCategory(
            searchedBlogs,
            category
        );

        result = filterBlogsByTag(
            result,
            selectedTag
        );

        return result;

    }, [
        searchedBlogs,
        category,
        selectedTag,
    ]);

    // Pagination
    const currentBlogs = useMemo(() => {
        return paginateBlogs(
            filteredBlogs,
            currentPage,
            POSTS_PER_PAGE
        );
    }, [
        filteredBlogs,
        currentPage,
    ]);

    const totalPages = Math.ceil(
        filteredBlogs.length / POSTS_PER_PAGE
    );

    if (loading) {
        return (
            <h1 className="py-20 text-center text-xl font-semibold">
                Loading...
            </h1>
        );
    }

    return (
        <section>

        <Hero
        blogs={blogs}
        />
            
<div className="mx-auto mt-10 grid max-w-7xl gap-10 px-6 lg:grid-cols-3">


    {/* Featured Article */}

    <div className="lg:col-span-2">

        <FeaturedPost
            blog={featuredBlog}
        />

    </div>


    {/* Sidebar */}

    <Sidebar
        recentPosts={recentBlogs}
        popularPosts={popularBlogs}
        // tags={tags}
    />


</div>
        <SearchBar
                value={search}
                onChange={(value) => {
                    setSearch(value);
                    setCurrentPage(1);
                }}
            />

            <CategoryFilter
                categories={categories}
                selectedCategory={category}
                onCategoryChange={(value) => {
                    setCategory(value);
                    setCurrentPage(1);
                }}
            />



{/* Latest Articles */}

<div className="mx-auto mt-16 max-w-7xl px-6">


    <section id="articles">
        <BlogList blogs={currentBlogs} />
    </section>


    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
    />

</div>

        </section>
    );
};

export default BlogSection;