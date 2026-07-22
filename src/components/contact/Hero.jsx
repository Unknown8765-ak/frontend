import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

  <div className="w-full">  

    <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
  Contact Sun & Shadow Group
</span>

<h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
  Let's Build Something
  <br />
  <span className="text-blue-600">
    Extraordinary Together
  </span>
</h1>

<p className="mt-8 text-lg text-gray-600 leading-8 max-w-3xl">
  Whether you're planning a solar energy project, looking for a
  premium aquarium solution, or aiming to grow your business with
  digital marketing, our team is here to guide you every step of the
  way. Get in touch today and let's create solutions tailored to your
  goals.
</p>

    <div className="flex flex-wrap gap-5 mt-12">

      <Link
        to="/about"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
      >
        Learn More
        <FaArrowRight />
      </Link>

      {/* <Link
        to="/blog"
        className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
      >
        Visit Blog
      </Link> */}

    </div>

  </div>

</div>
    </section>
  );
};

export default Hero;