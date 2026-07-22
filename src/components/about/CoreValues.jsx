import {
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";

const values = [
  {
    id: 1,
    icon: FaAward,
    title: "Quality",
    description:
      "We deliver high-quality solutions that exceed client expectations and industry standards.",
  },
  {
    id: 2,
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We continuously embrace new ideas and technologies to create modern solutions.",
  },
  {
    id: 3,
    icon: FaHandshake,
    title: "Integrity",
    description:
      "Honesty, transparency, and trust form the foundation of every client relationship.",
  },
  {
    id: 4,
    icon: FaHeart,
    title: "Customer Satisfaction",
    description:
      "Every decision we make is focused on delivering maximum value to our customers.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-blue-600 text-2xl font-bold">
            Our Core Values
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Values That Define Us
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            These values guide every project, every decision, and every
            relationship we build with our clients.
          </p>

        </div>

      

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
  {values.map((value) => {
    const Icon = value.icon;

    return (
      <div
        key={value.id}
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
          p-8
          text-center
          shadow-md
          transition-all
          duration-500
          hover:-translate-y-3
          hover:border-blue-400
          hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
        "
      >
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

        {/* Top Accent */}
        <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full"></div>

        {/* Icon */}
        <div
          className="
            relative z-10
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
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
          <Icon
            size={30}
            className="text-blue-600 transition-all duration-500 group-hover:text-white"
          />
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
            group-hover:text-blue-600
          "
        >
          {value.title}
        </h3>

        {/* Description */}
        <p className="mt-5 leading-7 text-slate-600">
          {value.description}
        </p>

        {/* Bottom Line */}
        <div className="mx-auto mt-8 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full"></div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default CoreValues;