import Logo from '../../assets/anemia.png'
function Footter(){
    const date=new Date();
    return(
        <>
            <footer className="w-full px-8 py-10 bg-white/20 backdrop-blur-md border-t border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col items-center sm:flex-row sm:justify-between rounded-t-2xl">
  
            <div className="mb-6 h-[15rem] w-[15rem] sm:mb-0">
                <img src={Logo} alt="Logo" className="object-contain w-full h-full drop-shadow-md" />
            </div>


                <div className="text-center sm:text-left">
                    <h1 className="mb-3 text-2xl font-extrabold text-emerald-600">Supports :</h1>
                    <ul className="flex flex-col gap-2 font-medium text-gray-700">
                        <li>✔ Check eyes, lips & nails</li>
                        <li>✔ Fingertip video Hb estimate</li>
                        <li>✔ Instant AI-powered report</li>
                    </ul>
                    <h1 className="mt-4 text-sm font-semibold text-gray-600">
                        Ⓒ {date.getFullYear()} <span className="text-gray-900">Anemia Detector</span>. All rights reserved.
                    </h1>
                </div>

                
                <button className="px-6 py-2 mt-6 font-semibold text-white transition-all duration-300 shadow-md sm:mt-0 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-xl hover:shadow-lg hover:scale-105">
                    Contact Us
                </button>
            </footer>

        </>
    )
}

export default Footter;