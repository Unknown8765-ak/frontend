import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const businessUnits = [
  {
    id: 1,
    title: "SUN",
    subtitle: "Sun & Shadow Enertech",
    description:
      "Transition to clean, independent power with residential and commercial solar solutions.",
    button: "Explore Solar & Wind",
    link: "/solar",
    bg: "from-yellow-50 to-yellow-100",
    accent: "bg-yellow-500",
  },
  {
    id: 2,
    title: "AQUA",
    subtitle: "Fish World Aquarium",
    description:
      "Premium aquascaping, aquarium engineering and hassle-free maintenance services.",
    button: "Explore Aquatics",
    link: "/aquarium",
    bg: "from-cyan-50 to-cyan-100",
    accent: "bg-cyan-500",
  },
 {
  id: 3,
  title: "SHADOW",
  subtitle: "Shadow Digital Agency",
  description:
    "Performance marketing solutions built to scale brands and generate quality leads.",
  button: "Explore Agency",
  link: "/agency",
  bg: "from-indigo-50 to-indigo-100",
  accent: "bg-indigo-600",
},
];

const BusinessUnits = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Our Business Units
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Three Brands.
            <br />
            One Vision.
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Building sustainable businesses across renewable energy,
            aquatics and digital transformation.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {businessUnits.map((unit) => (

            <div
              key={unit.id}
              className={`group relative overflow-hidden rounded-4xl
              bg-linear-to-br ${unit.bg}
              p-10
              transition-all duration-500
              hover:-translate-y-3
              hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]`}
            >

              {/* Background Text */}

              <h1 className="absolute right-6 top-4 text-8xl font-black text-white/40 select-none transition duration-500 group-hover:scale-110">
                {unit.title}
              </h1>

              {/* Glow */}

              <div className="absolute -right-24 -bottom-24 w-56 h-56 rounded-full bg-white/40 blur-3xl"></div>

              {/* Badge */}

              <span
                className={`${unit.accent} text-white text-sm font-semibold px-5 py-2 rounded-full inline-block`}
              >
                {unit.title}
              </span>

              {/* Heading */}

              <h3 className="mt-8 text-3xl font-bold text-slate-900 leading-tight">
                {unit.subtitle}
              </h3>

              {/* Description */}

              <p className="mt-5 text-slate-700 leading-8">
                {unit.description}
              </p>

              {/* Button */}

              <Link
                to={unit.link}
                className="mt-10 inline-flex items-center gap-3
                rounded-full bg-white px-6 py-3
                font-semibold text-slate-900
                shadow-md transition-all
                group-hover:gap-5"
              >
                {unit.button}

                <ArrowUpRight size={20} />
              </Link>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default BusinessUnits;