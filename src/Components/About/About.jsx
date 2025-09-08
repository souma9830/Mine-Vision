import Card from "./Card";
function About() {

  return (
    <section className="w-full py-16 bg-[EBE1E1] flex justify-center">
      <div className="w-[90vw] h-[100vh] bg-slate-200 border-30rem">
      <div className="max-w-6xl px-6 mx-auto lg:px-8">
        
        <Card />

        <div className="flex justify-center mt-10">
          <button
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-400 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            Learn more about our approach
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;