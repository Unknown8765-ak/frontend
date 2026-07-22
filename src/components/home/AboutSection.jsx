import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="text-yellow-500 text-2xl uppercase font-bold tracking-widest">
              About Sun & Shadow Group
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Innovation, Balance,
              <br />
              and Performance.
            </h2>

            <p className="text-gray-600 mt-8 leading-8 text-lg">
              Sun & Shadow Group is a progressive innovation startup
              built at the intersection of efficiency,
              sustainability, and market acceleration.
            </p>

            <p className="text-gray-600 mt-6 leading-8">
              We bridge the gap between three modern operational
              spaces:
              <span className="font-semibold text-yellow-500">
                {" "}Sun
              </span>{" "}
              (Clean Tech & Renewable Energy),
              <span className="font-semibold text-cyan-500">
                {" "}Aqua
              </span>{" "}
              (Indoor Nature & Aquarium Solutions), and
              <span className="font-semibold text-slate-900">
                {" "}Shadow
              </span>{" "}
              (Digital Growth & Marketing).
            </p>

            <p className="text-gray-600 mt-6 leading-8">
              Operating with a technology-first mindset, we build
              scalable solutions that deliver measurable results for
              homeowners, businesses, and modern enterprises.
            </p>

            <Link
              to="/about"
              className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg transition"
            >
              Learn More
            </Link>

          </div>

          {/* Right Side */}

          <div>

            <div className="h-125 rounded-3xl bg-slate-200 flex items-center justify-center">

              <span className="text-gray-500 text-xl">
                Company Image
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;