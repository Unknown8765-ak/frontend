import { processSteps } from "./aquariumData";

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

         <h1 className="text-cyan-600 text-2xl uppercase tracking-widest font-bold">
            Installation Process
          </h1>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            From Concept to a Living Masterpiece
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We follow a structured process to ensure every aquarium is
            beautiful, healthy, and easy to maintain for years to come.
          </p>

        </div>

        {/* Timeline */}

       <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {processSteps.map((step, index) => (
    <div
      key={index}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-100
        bg-linear-to-br
        from-cyan-50
        via-sky-50
        to-white
        p-8
        pt-16
        shadow-md
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-400
        hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]
      "
    >
     
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

      {/* Top Accent */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-cyan-400 to-sky-500 transition-all duration-500 group-hover:w-full"></div>

      {/* Step Number */}
      <div
        className="
          absolute
          top-6
          left-8
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          bg-linear-to-br
          from-cyan-500
          to-sky-600
          text-lg
          font-bold
          text-white
          shadow-lg
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        {String(index + 1).padStart(2, "0")}
      </div>


      {/* Title */}
      <h3
        className="
          mt-5
          text-3xl
          font-bold
          leading-snug
          text-slate-900
          transition-colors
          duration-300
          group-hover:text-cyan-600
        "
      >
        {step}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600">
        Our experts carefully complete this stage using industry best
        practices to ensure outstanding quality and long-term success.
      </p>

      {/* Bottom Line */}
      <div className="mt-8 h-1 w-14 rounded-full bg-linear-to-r from-cyan-400 to-sky-500 transition-all duration-500 group-hover:w-full"></div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Process;