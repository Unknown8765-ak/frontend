import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          {/* Small Heading */}

          <span className="text-yellow-500 uppercase tracking-widest font-semibold">
            Let's Build the Future Together
          </span>

          {/* Main Heading */}

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-5 leading-tight">
            Ready to Power Your Vision?
          </h2>

          {/* Description */}

          <p className="text-gray-300 text-lg leading-8 mt-8">
            Whether you're looking for clean energy solutions,
            premium aquarium installations, or digital marketing
            strategies, Sun & Shadow Group is here to help you
            achieve sustainable growth with innovative solutions.
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg transition duration-300"
            >
              Contact Us
            </Link>

            <Link
              to="/about"
              className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg transition duration-300"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;