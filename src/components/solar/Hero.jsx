// components/solar/Hero.jsx

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import useWebsiteContent from "../../services/websiteContent/useWebsiteContent";


const Hero = () => {
      const { content, loading } = useWebsiteContent("home");

  return (
    <section className="bg-linear-to-br from-slate-50 to-yellow-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Renewable Energy Solutions
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Power Your Future
              <br />
              With Smart
              <span className="text-yellow-500"> Solar Energy</span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Reduce electricity costs, increase energy independence,
              and contribute towards a sustainable future with our
              residential, commercial, and industrial solar solutions.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Residential Solar</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Commercial Solar</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Industrial Projects</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Maintenance & Support</span>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
              >
                Get Free Consultation
                <FaArrowRight />
              </Link>

              <Link
                to="/about"
                className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Learn More
              </Link>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative">

            {/* Main Image */}

            <div className="h-130 rounded-3xl bg-gray-300 flex items-center justify-center shadow-xl">

             {loading ? (
                    <p>Loading...</p>
                  ) : content?.sections?.hero?.image ? (
                    <img
                      src={content.sections.hero.image}
                      alt="Hero"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <p className="text-gray-600 font-semibold">
                      Hero Image
                    </p>
                  )}
            </div>

            {/* Floating Card */}

            {/* <div className="absolute -bottom-8 -left-6 bg-white shadow-2xl rounded-2xl p-6 w-64">

              <h3 className="text-3xl font-bold text-yellow-500">
                25+
              </h3>

              <p className="text-gray-600 mt-2">
                Years of Solar Panel Performance
              </p>

            </div> */}

            {/* Floating Badge */}

            <div className="absolute top-8 -right-6 bg-yellow-500 text-white rounded-2xl px-6 py-4 shadow-xl">

              <h4 className="text-2xl font-bold">
                Save
              </h4>

              <p>Up to 80% Electricity Bill</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;