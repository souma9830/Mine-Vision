function Footer(){
    return(
        <footer className="w-full px-4 py-4 bg-[#DAEBA7] flex justify-between items-center rounded-t-lg">
            <div className="text-sm text-gray-700">
                © {new Date().getFullYear()} Mine Vision AI
            </div>
            <button className="px-4 py-1 text-sm font-semibold text-white transition-colors bg-black rounded-lg hover:bg-gray-800">
                Contact
            </button>
        </footer>
    )
}

export default Footer;