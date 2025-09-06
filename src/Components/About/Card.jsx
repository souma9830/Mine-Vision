import { defaultData } from "./defaultData";
function Card(){
    const { heading, subheading, cards } =  defaultData;
    return(
        <>
            <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold tracking-wide text-gray-900 sm:text-6xl ">
            {heading}
          </h2>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-500">{subheading}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="
                relative p-6 transition cursor-pointer 
                bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 
                border border-white/30 
                rounded-2xl 
                backdrop-blur-md 
                shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
                hover:-translate-y-2 
                hover:shadow-[0_8px_32px_rgba(16,185,129,0.35)]
              "
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 ">
                    <img src={card.icon} alt="icon" className="w-full h-full rounded-[50%]" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-semibold leading-relaxed text-gray-600 text-md">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        </>
    )
}

export default Card;