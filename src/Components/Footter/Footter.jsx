import Logo from '../../assets/anemia.png'
function Footter(){
    const date=new Date();
    return(
        <>
            <footer className="w-full px-8 py-10 bg-white/20 backdrop-blur-md border-t border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col items-center sm:flex-row sm:justify-between rounded-t-2xl">
  
            <div className="mb-6 h-[15rem] w-[15rem] sm:mb-0">
                <img src={Logo} alt="Logo" className="object-contain w-[10vw] h-[10vh] drop-shadow-md" />
            </div>


                <button className="px-6 py-2 mt-6 font-semibold text-white transition-all duration-300 shadow-md sm:mt-0 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-xl hover:shadow-lg hover:scale-105">
                    Contact Us
                </button>
            </footer>

        </>
    )
}

export default Footter;