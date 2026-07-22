import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import useWebsiteContent from "../../services/websiteContent/useWebsiteContent";


const Hero = () => {
      const { content, loading } = useWebsiteContent("agency");

  return (
    <section className="bg-linear-to-br from-indigo-50 via-white to-purple-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Digital Growth Partner
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Transform Your Business
              <br />
              With
              <span className="text-indigo-600">
                {" "}Digital Solutions
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              We help businesses establish a powerful online presence
              through modern websites, digital marketing, SEO, and
              creative branding solutions.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-indigo-600" />
                <span>Website Development</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-indigo-600" />
                <span>SEO Optimization</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-indigo-600" />
                <span>Digital Marketing</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-indigo-600" />
                <span>Brand Identity</span>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                to="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
              >
                Get Started
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

          {/* Right Side */}

          <div className="relative">

            {/* Dummy Image */}

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

              <h3 className="text-3xl font-bold text-indigo-600">
                150+
              </h3>

              <p className="text-gray-600 mt-2">
                Successful Digital Projects
              </p>

            </div> */}

            {/* Floating Badge */}

            <div className="absolute top-8 -right-6 bg-indigo-600 text-white rounded-2xl px-6 py-4 shadow-xl">

              <h4 className="text-2xl font-bold">
                5★
              </h4>

              <p>Client Satisfaction</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;