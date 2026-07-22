import { services } from "./solarData";

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <h1 className="text-yellow-500 text-2xl uppercase tracking-widest font-bold">
            Our Services
          </h1>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Complete Solar Energy Solutions
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            From consultation to installation and maintenance, we
            deliver complete solar solutions for homes and businesses.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
  {services.map((service) => {
    const Icon = service.icon;

    return (
      <div
        key={service.id}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-yellow-100
          bg-linear-to-br
          from-yellow-50
          via-orange-50
          to-white
          p-8
          shadow-md
          transition-all
          duration-500
          hover:-translate-y-3
          hover:border-yellow-400
          hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)]
        "
      >
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

        {/* Top Accent */}
        <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full"></div>

        {/* Icon */}
        <div
          className="
            relative z-10
            flex h-16 w-16 items-center justify-center
            rounded-2xl
            bg-linear-to-br
            from-yellow-100
            to-orange-100
            shadow-sm
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
            group-hover:from-yellow-200
            group-hover:to-orange-500
          "
        >
          <Icon
            className="
              text-3xl
              text-yellow-600
              transition-all
              duration-500
              group-hover:text-white
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
            mt-7
            text-2xl
            font-bold
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-yellow-600
          "
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-600">
          {service.description}
        </p>

        {/* Bottom Line */}
        <div className="mt-8 h-1 w-14 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full"></div>
      </div>
    );
  })}
</div>


      </div>
    </section>
  );
};

export default Services;