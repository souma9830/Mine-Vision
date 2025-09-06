import { FaArrowRight } from "react-icons/fa";

function Hero(){
    return(
        <>
            <main className="w-full h-screen mt-[14vh] flex flex-col items-center px-2  gap-[2rem] text-center">
                <h1 className="text-4xl sm:text-6xl md:text-8xl mt-[8rem]">AI Anemia Detection</h1>
                <h2 className="text-2xl tracking-wide text-gray-700 sm:text-4xl md:text-5xl">Fast, affordable, and camera-based anemia screening.</h2>

                <div className="flex gap-5 mt-3">
                    <button className='flex items-center gap-2 px-6 py-2 font-semibold text-gray-900 transition-all bg-blue-400 rounded-2xl hover:bg-blue-600 ease group'>
                            Watch Demo
                            <span className='transition-transform duration-300 group-hover:translate-x-3'>
                                    <FaArrowRight />
                            </span>
                    </button>
                    <button className='flex items-center gap-2 px-6 py-2 font-semibold text-blue-500 transition-all bg-transparent border-2 border-blue-400 hover:text-blue-600 rounded-2xl hover:border-blue-600 ease group'>
                            Dashboard
                            <span className='transition-transform duration-300 group-hover:translate-x-3'>
                                <FaArrowRight />
                            </span>
                    </button>
                </div>
            </main>
        </>
    )
}
export default Hero;