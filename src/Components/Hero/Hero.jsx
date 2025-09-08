import { FaArrowRight } from "react-icons/fa";

function Hero(){
    return(
        <>
            <main className="w-full h-screen mt-[24vh] flex flex-col items-center px-2 gap-[2rem] text-center">
               
                <div className="w-full max-w-6xl rounded-3xl bg-[#DAEBA7] p-8 md:p-12 flex flex-col items-center gap-8 top-8">
                    <h1 className="mt-8 text-4xl font-bold sm:text-6xl md:text-8xl">Mine Vision.<span className="text-green-400">AI</span></h1>
                    <h2 className="text-2xl font-semibold tracking-wide text-gray-700 sm:text-3xl">-Predeictive Intelligence For save Mines</h2>
                    <h2 className="text-3xl italic font-semibold">AI-Powered Rockfall prediction System For open Pit Minds <br /> Helping You Prevent risk before they become Disaster </h2>

                    <div className="flex gap-5 mt-3">
                        <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white transition-all bg-black rounded-2xl hover:bg-gray-700 ease group'>
                                Watch Demo
                               
                        </button>
                        <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white transition-all bg-transparent bg-black border-2 hover:text-blue-600 rounded-2xl hover:border-blue-600 ease group'>
                                Dashboard
                               
                        </button>
                    </div>
                </div>
                
               
            </main>
        </>
    )
}
export default Hero;