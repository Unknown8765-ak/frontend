import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-2xl text-blue-600 font-bold">
            Mission & Vision
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Driven by Purpose,
            Inspired by Innovation
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our mission and vision guide every decision we make and
            every solution we deliver for our clients.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

  {/* Mission */}

  <div
    className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-blue-100
      bg-linear-to-br
      from-blue-50
      via-sky-50
      to-white
      p-10
      shadow-md
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-blue-400
      hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
    "
  >

    {/* Glow */}
    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

    {/* Top Accent */}
    <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full"></div>

    {/* Icon */}
    <div
      className="
        relative z-10
        flex h-16 w-16 items-center justify-center
        rounded-2xl
        bg-linear-to-br
        from-blue-100
        to-sky-100
        shadow-sm
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:rotate-6
        group-hover:from-blue-500
        group-hover:to-sky-600
      "
    >
      <FaBullseye
        size={28}
        className="text-blue-600 transition-all duration-500 group-hover:text-white"
      />
    </div>

  

    <h3 className="mt-8 text-3xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
      Our Mission
    </h3>


    <p className="mt-6 text-slate-600 leading-8">
      Our mission content will be updated according to the client
      blueprint. This section is designed to present the company's
      purpose in a clear, professional and inspiring manner.
    </p>


    <div className="mt-8 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full"></div>

  </div>




  <div
    className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-blue-100
      bg-linear-to-br
      from-blue-50
      via-sky-50
      to-white
      p-10
      shadow-md
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-blue-400
      hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
    "
  >

    {/* Glow */}
    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

    {/* Top Accent */}
    <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full"></div>

    {/* Icon */}
    <div
      className="
        relative z-10
        flex h-16 w-16 items-center justify-center
        rounded-2xl
        bg-linear-to-br
        from-blue-100
        to-sky-100
        shadow-sm
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:rotate-6
        group-hover:from-blue-500
        group-hover:to-sky-600
      "
    >
      <FaEye
        size={28}
        className="text-blue-600 transition-all duration-500 group-hover:text-white"
      />
    </div>

    {/* Title */}

    <h3 className="mt-8 text-3xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
      Our Vision
    </h3>

    {/* Description */}

    <p className="mt-6 text-slate-600 leading-8">
      Our vision statement will be replaced with the exact content
      from the blueprint to maintain consistency across the entire
      website and future business growth.
    </p>

    {/* Bottom Line */}

    <div className="mt-8 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full"></div>

  </div>

</div>

      </div>
    </section>
  );
};

export default MissionVision;