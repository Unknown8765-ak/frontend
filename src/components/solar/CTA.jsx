import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-linear-to-r from-yellow-500 to-yellow-400 rounded-3xl p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}

            <div>

              <span className="uppercase tracking-widest text-sm font-semibold text-slate-900">
                Let's Build a Greener Tomorrow
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Ready to Switch
                <br />
                to Solar Energy?
              </h2>

              <p className="mt-6 text-lg text-slate-800 leading-8">
                Whether you're planning a residential rooftop system
                or a large commercial installation, our experts are
                ready to guide you with the best solar solution.
              </p>

            </div>

            {/* Right Buttons */}

            <div className="flex flex-col sm:flex-row lg:justify-end gap-5">

              <Link
                to="/contact"
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-black transition"
              >
                Get Free Quote
                <FaArrowRight />
              </Link>

              <Link
                to="/about"
                className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-900 hover:text-white transition text-center"
              >
                Learn More
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;