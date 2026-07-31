import useWebsiteContent from "../../services/websiteContent/useWebsiteContent";


const CompanyStory = () => {
  const { content, loading } = useWebsiteContent("about");

  return (
    
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div>

  <div className="h-125 rounded-3xl overflow-hidden bg-gray-300 shadow-lg">

    {loading ? (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-gray-500">Loading...</span>
      </div>
    ) : content?.sections?.about?.image ? (
      <img
        src={content.sections.about.image}
        alt="Company"
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-500">
          Company Image Not Found
        </span>
      </div>
    )}

  </div>

</div>

          {/* Right Content */}

          <div>

            <span className="uppercase tracking-widest text-blue-600 font-semibold">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Building Trust Through
              Innovation & Excellence
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              This content will be replaced with the exact company
              story provided in the client blueprint. The layout is
              designed to accommodate long-form storytelling while
              maintaining readability and a premium appearance.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Our focus is to deliver reliable services, create
              meaningful customer relationships, and continuously
              innovate across every solution we provide.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-6 mt-10">

              

              <div className="bg-slate-50 rounded-2xl p-6 text-center">

                <h3 className="text-3xl font-bold text-blue-600">
                  100%
                </h3>

                <p className="mt-2 text-gray-600">
                  Client Satisfaction
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStory;