import {
  FaSolarPanel,
  FaLeaf,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaSolarPanel,
    title: "Multi-Vertical Expertise",
    description:
      "From renewable energy to aquarium solutions and digital marketing, we provide complete business solutions under one trusted brand.",
  },
  {
    id: 2,
    icon: FaLeaf,
    title: "Innovation & Sustainability",
    description:
      "We combine modern technology with sustainable practices to deliver efficient, future-ready solutions.",
  },
  {
    id: 3,
    icon: FaUsers,
    title: "Customer-Centric Approach",
    description:
      "Every project is planned according to the client's goals, ensuring transparency, quality, and long-term support.",
  },
  {
    id: 4,
    icon: FaChartLine,
    title: "Results That Matter",
    description:
      "Whether reducing energy costs, creating premium aquatic spaces, or growing brands online, our focus is measurable results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 text-2xl uppercase font-bold tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            Built for Growth.
            <br />
            Designed for Excellence.
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            At Sun & Shadow Group, we believe every solution should
            create long-term value. Our integrated approach helps
            businesses and individuals grow with confidence.
          </p>

        </div>

        {/* Cards */}

        {/* Cards */}

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

  {features.map((feature) => {
    const Icon = feature.icon;

    return (
      <div
        key={feature.id}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border border-slate-200
          bg-white
          p-8
          shadow-md
          transition-all
          duration-500
          hover:-translate-y-3
          hover:border-yellow-400
          hover:shadow-[0_20px_60px_rgba(234,179,8,0.15)]
        "
      >

        {/* Glow Effect */}

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

        {/* Top Accent */}

        <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-yellow-400 to-yellow-600 transition-all duration-500 group-hover:w-full"></div>

        {/* Icon */}

        <div
          className="
            relative z-10
            flex h-16 w-16 items-center justify-center
            rounded-2xl
            bg-linear-to-br
            from-yellow-100
            to-yellow-200
            shadow-sm
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          <Icon className="text-3xl text-yellow-600" />
        </div>

        {/* Title */}

        <h3
          className="
            mt-8
            text-2xl
            font-bold
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-yellow-500
          "
        >
          {feature.title}
        </h3>

        {/* Description */}

        <p className="mt-5 leading-7 text-slate-600">
          {feature.description}
        </p>

        {/* Bottom Line */}

        <div className="mt-8 h-1 w-12 rounded-full bg-yellow-500 transition-all duration-500 group-hover:w-full"></div>

      </div>
    );
  })}

</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;