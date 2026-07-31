import SEO from "../components/common/SEO";
import BlogSection from "../components/blog/BlogSection";

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog"
        description="Explore the latest articles, industry insights, and expert guides on solar energy, aquarium solutions, digital marketing, and technology."
        keywords="Sun & Shadow Blog, Solar Blog, Aquarium Blog, Digital Marketing Blog, Business Insights"
        url="https://sunandshadow.in/blog"
      />

      <BlogSection />
    </>
  );
};

export default Blog;