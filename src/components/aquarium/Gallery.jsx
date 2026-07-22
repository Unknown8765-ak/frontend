import useWebsiteContent from "../../services/websiteContent/useWebsiteContent";

const Gallery = () => {

  const { content, loading } = useWebsiteContent("aquarium");

  if (loading) {
    return <p>Loading...</p>;
  }

  const gallery = content?.sections?.gallery || [];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h1 className="text-cyan-600 text-2xl uppercase tracking-widest font-bold">
            Our Projects
          </h1>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Explore Our Aquarium Creations
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Discover some of our premium aquarium installations
            designed for homes, offices, hotels, and commercial
            spaces.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {gallery.map((item) => (

            <div
              key={item._id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              <div className="h-72 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>

              </div>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;