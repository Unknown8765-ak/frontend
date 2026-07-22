import { processSteps } from "./aquariumData";

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="text-cyan-600 uppercase tracking-widest font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            From Concept to a Living Masterpiece
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We follow a structured process to ensure every aquarium is
            beautiful, healthy, and easy to maintain for years to come.
          </p>

        </div>

        {/* Timeline */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {processSteps.map((step, index) => (

            <div
              key={index}
              className="relative bg-slate-50 border rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >

              {/* Step Number */}

              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">

                {index + 1}

              </div>

              {/* Step Title */}

              <h3 className="mt-6 text-2xl font-bold text-slate-900">

                {step}

              </h3>

              {/* Description */}

              <p className="mt-4 text-gray-600 leading-7">

                Our experts carefully complete this stage using
                industry best practices to ensure outstanding
                quality and long-term success.

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;