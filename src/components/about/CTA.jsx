import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}

            <div>

              <span className="uppercase tracking-widest text-sm font-semibold text-blue-100">
                Let's Build Something Great
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Work
                <br />
                With Our Team?
              </h2>

              <p className="mt-6 text-lg text-blue-100 leading-8">
                Whether you're looking for solar solutions, premium
                aquarium services, or digital business growth, we're
                here to turn your ideas into reality with innovation,
                quality, and professionalism.
              </p>

            </div>

            {/* Right Buttons */}

            <div className="flex flex-col sm:flex-row lg:justify-end gap-5">

              <Link
                to="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-slate-100 transition"
              >
                Contact Us
                <FaArrowRight />
              </Link>

              <Link
                to="/solar"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition text-center"
              >
                Explore Services
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;