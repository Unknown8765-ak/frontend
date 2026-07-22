import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What services does Sun & Shadow Group provide?",
    answer:
      "Sun & Shadow Group operates across three business verticals: renewable energy solutions (solar & wind), premium aquarium design and maintenance, and digital marketing services for businesses.",
  },
  {
    id: 2,
    question: "Do you provide solar installation for both homes and businesses?",
    answer:
      "Yes. We design and install customized solar power systems for residential, commercial, and industrial properties with complete consultation and after-sales support.",
  },
  {
    id: 3,
    question: "What aquarium services do you offer?",
    answer:
      "Our aquarium division provides custom aquarium design, aquascaping, installation, regular maintenance, water quality management, and premium aquatic accessories.",
  },
  {
    id: 4,
    question: "What digital marketing services are available?",
    answer:
      "Our digital agency offers SEO, social media marketing, Google Ads, Meta Ads, website development, branding, content creation, and lead generation solutions.",
  },
  {
    id: 5,
    question: "Can I request services from multiple business units?",
    answer:
      "Absolutely. You can combine services from our renewable energy, aquarium, and digital agency divisions based on your requirements.",
  },
  {
    id: 6,
    question: "How can I get a quotation?",
    answer:
      "Simply contact us through our Contact page or submit your inquiry online. Our team will review your requirements and provide a customized quotation.",
  },
];

const FAQs = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-bold text-2xl uppercase tracking-wider">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Everything You Need to Know
          </h2>

          <p className="text-gray-600 mt-4">
            Find answers to the most commonly asked questions about our
            business divisions and services.
          </p>
        </div>

       <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`
                group
                overflow-hidden
                rounded-3xl
                border
                bg-white
                transition-all
                duration-500
                ${
                  active === faq.id
                    ? "border-yellow-400 shadow-[0_20px_50px_rgba(234,179,8,0.15)]"
                    : "border-slate-200 hover:border-yellow-300 hover:shadow-xl"
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <div className="flex items-center gap-5">

                  {/* Number */}

                  <div
                    className={`
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      font-bold
                      transition-all
                      duration-500
                      ${
                        active === faq.id
                          ? "bg-yellow-500 text-white"
                          : "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white"
                      }
                    `}
                  >
                    {String(faq.id).padStart(2, "0")}
                  </div>

                  <span
                    className={`
                      text-lg
                      font-semibold
                      transition-colors
                      duration-300
                      ${
                        active === faq.id
                          ? "text-yellow-500"
                          : "text-slate-900 group-hover:text-yellow-500"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                </div>

                {/* Plus Minus */}

                <div
                  className={`
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    text-2xl
                    font-bold
                    transition-all
                    duration-500
                    ${
                      active === faq.id
                        ? "rotate-180 bg-yellow-500 text-white"
                        : "bg-slate-100 text-slate-700 group-hover:bg-yellow-500 group-hover:text-white"
                    }
                  `}
                >
                  {active === faq.id ? "−" : "+"}
                </div>
              </button>

              {/* Answer */}

              <div
                className={`
                  grid
                  transition-all
                  duration-500
                  ${
                    active === faq.id
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <div className="px-8 pb-7 text-slate-600 leading-8">
                    {faq.answer}
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}

              <div
                className={`
                  h-1
                  bg-linear-to-r
                  from-yellow-400
                  to-yellow-600
                  transition-all
                  duration-500
                  ${
                    active === faq.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              ></div>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default FAQs;