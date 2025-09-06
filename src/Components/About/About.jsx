import React from "react";

const defaultData = {
  heading: "About Our Project",
  subheading: "AI-powered non-invasive anemia screening using Eye, Nail, and Skin detection.",
  cards: [
    {
      id: "eye",
      title: "Conjunctiva (Eye) Analysis",
      icon: "👁️",
      description:
        "AI examines the palpebral conjunctiva for pallor, reduced coloration, and vascular visibility to identify anemia signs."
    },
    {
      id: "nail",
      title: "Nail Bed Examination",
      icon: "💅",
      description:
        "The system detects nail bed pallor and structural changes such as koilonychia (spoon-shaped nails), both linked to anemia."
    },
    {
      id: "skin",
      title: "Skin & Lip Color Assessment",
      icon: "🩸",
      description:
        "Advanced color analysis evaluates skin and lip pallor, providing key indicators of hemoglobin deficiency."
    }
  ]
};

export default function Simple({ data }) {
  const { heading, subheading, cards } = data ?? defaultData;

  return (
    <section className="w-full py-16 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            {heading}
          </h2>
          <p className="mt-3 text-gray-900 max-w-3xl mx-auto">{subheading}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="relative rounded-2xl p-6 bg-white border border-slate-200 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-md text-2xl">
                    {card.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/learn-more"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            Learn more about our approach
          </a>
        </div>
      </div>
    </section>
  );
}
