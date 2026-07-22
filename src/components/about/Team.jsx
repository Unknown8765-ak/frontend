const team = [
  {
    id: 1,
    name: "John Doe",
    designation: "Founder & CEO",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Operations Manager",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "Project Engineer",
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Our Team
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Meet Our Professionals
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our experienced team is committed to delivering innovative,
            reliable, and customer-focused solutions.
          </p>

        </div>

        {/* Team Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {team.map((member) => (

            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Dummy Image */}

              <div className="h-80 bg-gray-300 flex items-center justify-center">

                <span className="text-xl font-semibold text-gray-500">
                  Dummy Image
                </span>

              </div>

              {/* Content */}

              <div className="p-8 text-center">

                <h3 className="text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-3 text-blue-600 font-semibold">
                  {member.designation}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Team;