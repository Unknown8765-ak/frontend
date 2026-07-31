import {
    CalendarDays,
    Clock,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {

    const readTime = Math.max(
        1,
        Math.ceil((blog.content?.split(" ").length || 0) / 200)
    );


    return (

        <article
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
            "
        >


            <div className="relative overflow-hidden">

                <img
                    src={
                        blog.featuredImage?.url ||
                        "/images/blog-placeholder.jpg"
                    }
                    alt={blog.title}
                    className="
                        h-64
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                />


                {/* Image Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-linear-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                    "
                />


                {/* Category */}

                <span
                    className="
                        absolute
                        left-5
                        top-5
                        rounded-full
                        border
                        border-white/30
                        bg-white/90
                        px-4
                        py-2
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-blue-600
                        shadow-lg
                        backdrop-blur
                    "
                >
                    {blog.category}
                </span>


            </div>




            {/* Content */}


            <div className="p-7">


                {/* Meta */}

                <div
                    className="
                        flex
                        items-center
                        gap-5
                        text-sm
                        text-gray-500
                    "
                >

                    <span className="flex items-center gap-2">

                        <CalendarDays size={16}/>

                        {new Date(
                            blog.publishedAt
                        ).toLocaleDateString(
                            "en-IN",
                            {
                                day:"numeric",
                                month:"short",
                                year:"numeric"
                            }
                        )}

                    </span>


                    <span className="flex items-center gap-2">

                        <Clock size={16}/>

                        {readTime} min read

                    </span>


                </div>




                <h3
                    className="
                        mt-5
                        line-clamp-2
                        text-2xl
                        font-bold
                        leading-snug
                        text-gray-900
                        transition
                        duration-300
                        group-hover:text-blue-600
                    "
                >
                    {blog.title}
                </h3>




                <p
                    className="
                        mt-4
                        line-clamp-3
                        leading-7
                        text-gray-600
                    "
                >
                    {blog.excerpt}
                </p>




                <Link
                    to={`/blog/${blog.slug}`}
                    className="
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-gray-900
                        px-5
                        py-3
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-blue-600
                        group-hover:gap-4
                    "
                >

                    Read Article

                    <ArrowRight
                        size={18}
                    />

                </Link>


            </div>



            {/* Bottom Hover Line */}

            <div
                className=" absolute bottom-0 right-0 h-1 w-0 bg-linear-to-r from-cyan-400 via-purple-500 to-blue-500 transition-all duration-700 group-hover:w-full"
            />


        </article>

    );

};


export default BlogCard;