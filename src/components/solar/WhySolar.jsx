import { whySolar } from "./solarData";

const WhySolar = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h1 className="text-yellow-500 text-2xl uppercase tracking-widest font-bold">
            Why Choose Solar
          </h1>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Invest Once. Save for Decades.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Solar is more than reducing electricity bills.
            It's a long-term investment in your future,
            your home, and the environment.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6 mt-16">

          {whySolar.map((item, index) => (

            <div
              key={item.id}
              className={`
                ${item.span}
                ${item.bg}
                group
                rounded-[36px]
                overflow-hidden
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                relative
              `}
            >

              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/40 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">

                <div>

                  <span className="inline-block px-5 py-2 rounded-full bg-white/70 backdrop-blur font-semibold text-slate-800">
                    {item.badge}
                  </span>

                  <h3 className="mt-6 text-3xl font-bold leading-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-slate-700 leading-7">
                    {item.description}
                  </p>

                </div>

                {/* Image */}

                <div className="mt-10 py-4">

                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
                      rounded-3xl
                      w-full
                      object-cover
                      transition-all
                      duration-500
                      group-hover:scale-105

                      ${
                        index === 0
                          ? "h-160"
                          : index === 1
                          ? "h-65"
                          : index === 2
                          ? "h-55"
                          : index === 3
                          ? "h-70"
                          : "h-55"
                      }
                    `}
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhySolar;