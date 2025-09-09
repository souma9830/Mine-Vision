const team = [
  {
    name: "Sajal Pakira",
    role: "Full Stack Developer",
    img: "https://via.placeholder.com/300x300.png?text=Sajal",
  },
  {
    name: "Soumadeep Shee",
    role: "Frontend Developer",
    img: "https://via.placeholder.com/300x300.png?text=Soumadeep",
  },
  {
    name: "Sarthak Dutta",
    role: "Designer",
    img: "https://via.placeholder.com/300x300.png?text=Sarthak",
  },
  {
    name: "Rajdeep Paul",
    role: "Data Analyst",
    img: "https://via.placeholder.com/300x300.png?text=Rajdeep",
  },
  {
    name: "Subhranil Mondal",
    role: "ML Developer",
    img: "https://via.placeholder.com/300x300.png?text=Subhranil",
  },
  {
    name: "Pracheta Betal",
    role: "Speaker & Designer",
    img: "https://via.placeholder.com/300x300.png?text=Pracheta",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-[#EBE1E1]">
      <div className="max-w-6xl px-6 mx-auto W-[90vw] h-[120vh] rounded-3xl bg-sky-100 text-center">
        <div className="inline-block px-4 py-1 mt-8 mb-4 text-sm text-gray-700 uppercase rounded-full mt-tracking-wide bg-white/80">
          Meet The Crew
        </div>

        <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
          Our Crew <span className="text-green-600">Our Strength</span>
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto mb-12 text-gray-600">
          Get to know the team building the future of safety.
        </p>

        {/* Team Members */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-6 transition bg-white shadow-lg bg-opacity-80 rounded-2xl hover:shadow-xl hover:bg-opacity-100"
            >
              <img
                src={member.img}
                alt={member.name}
                className="object-cover w-32 h-32 mx-auto mb-4 border-2 border-green-400 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;