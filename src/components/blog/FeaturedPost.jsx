import {
    ArrowRight,
    CalendarDays,
    Eye,
    Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";


const FeaturedPost = ({ blog }) => {

    if (!blog) return null;


    return (

        <section className="mx-auto max-w-7xl">

            <div
                className="
                    group
                    overflow-hidden
                    rounded-[2.5rem]
                    border
                    border-slate-200
                    bg-white
                    shadow-lg
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                "
            >

                <div className="grid lg:grid-cols-2">


                    {/* Image Section */}

                    <div className="relative overflow-hidden">


                        <img
                            src={blog.featuredImage?.url}
                            alt={blog.title}
                            className="
                                h-87.5
                                w-full
                                object-cover
                                transition
                                duration-700
                                group-hover:scale-110
                                lg:h-full
                            "
                        />


                        {/* Gradient */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/60
                                via-black/10
                                to-transparent
                            "
                        />


                        {/* Badge */}

                        <div
                            className="
                                absolute
                                left-6
                                top-6
                                flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white/90
                                px-5
                                py-2
                                text-sm
                                font-semibold
                                text-blue-700
                                shadow-md
                                backdrop-blur
                                transition
                                group-hover:scale-105
                            "
                        >

                            <Sparkles size={16}/>

                            Featured Story

                        </div>



                        {/* Image Bottom Text */}

                        <div
                            className="
                                absolute
                                bottom-6
                                left-6
                                right-6
                                text-white
                            "
                        >

                            <p className="text-sm font-medium opacity-90">
                                {blog.category}
                            </p>


                            <p className="mt-2 text-xl font-bold lg:hidden">
                                {blog.title}
                            </p>


                        </div>


                    </div>





                    {/* Content Section */}


                    <div
                        className="
                            flex
                            flex-col
                            justify-center
                            p-8
                            lg:p-12
                        "
                    >



                        {/* Category */}


                        <span
                            className="
                                w-fit
                                rounded-full
                                bg-blue-100
                                px-5
                                py-2
                                text-sm
                                font-semibold
                                text-blue-700
                                transition
                                hover:bg-blue-200
                            "
                        >
                            {blog.category}
                        </span>





                        {/* Title */}


                        <h2
                            className="
                                mt-6
                                text-3xl
                                font-extrabold
                                leading-tight
                                text-slate-900
                                transition
                                duration-300
                                group-hover:text-blue-700
                                lg:text-4xl
                            "
                        >

                            {blog.title}

                        </h2>





                        {/* Description */}


                        <p
                            className="
                                mt-5
                                text-base
                                leading-8
                                text-slate-600
                                lg:text-lg
                            "
                        >

                            {blog.excerpt}

                        </p>





                        {/* Meta */}


                        <div
                            className="
                                mt-8
                                flex
                                flex-wrap
                                gap-6
                                text-sm
                                text-slate-500
                            "
                        >


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >

                                <CalendarDays size={18}/>


                                {new Date(
                                    blog.publishedAt
                                ).toLocaleDateString(
                                    "en-IN",
                                    {
                                        day:"numeric",
                                        month:"long",
                                        year:"numeric"
                                    }
                                )}

                            </div>





                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >

                                <Eye size={18}/>

                                {(blog.views || 0).toLocaleString()} Views

                            </div>


                        </div>







                        {/* Button */}


                        <Link
                            to={`/blog/${blog.slug}`}
                            className="
                                group/button
                                mt-10
                                flex
                                w-fit
                                items-center
                                gap-3
                                rounded-2xl
                                bg-blue-600
                                px-7
                                py-4
                                font-semibold
                                text-white
                                shadow-md
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-blue-700
                                hover:shadow-xl
                            "
                        >

                            Read Full Article


                            <ArrowRight
                                size={20}
                                className="
                                    transition
                                    duration-300
                                    group-hover/button:translate-x-2
                                "
                            />


                        </Link>




                    </div>


                </div>


            </div>


        </section>

    );
};


export default FeaturedPost;