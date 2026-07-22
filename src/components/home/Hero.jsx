import { Link } from "react-router-dom";
import useWebsiteContent from "../../services/websiteContent/useWebsiteContent";



const Hero = () => {

    const { content, loading } = useWebsiteContent("home");


  return (
    <section className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div>

            <h1 className="inline-block text-yellow-500 text-2xl font-bold uppercase tracking-widest mb-4">
            Welcome to Sun & Shadow Group
            </h1>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">

              Empowering Energy,
              <br />
              Enhancing Spaces,
              <br />
              Elevating Brands.

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">

              Welcome to Sun & Shadow Group — a next-generation
              multi-vertical startup pushing structural boundaries
              across renewable clean energy, bespoke nature aquatics,
              and hyper-targeted digital marketing.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/about"
                className="bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 transition"
              >
                Discover Our Units
              </Link>

              <Link
                to="/contact"
                className="border border-slate-900 px-8 py-4 rounded-lg hover:bg-slate-900 hover:text-white transition"
              >
                Consult With Us
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-full max-w-md h-112.5 rounded-3xl overflow-hidden">
              <div className="w-full max-w-md h-112.5 rounded-3xl overflow-hidden bg-gray-300 flex items-center justify-center">
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
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;