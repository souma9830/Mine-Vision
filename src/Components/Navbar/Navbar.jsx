import { useState } from 'react';
import Logo from '../../assets/anemia.png'
import { FaArrowRight } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import FromPopUp from '../Form/FormPopUp';
function Navbar(){
    const [isOpen,setIsOpen] = useState(false);
    const [isPoped,setIspoped]=useState(false);
    return(
        <>
            <nav 
                className="fixed left-1/2 top-4 -translate-x-1/2 w-[86%] h-[13vh] z-40
                rounded-[2.5rem] 
                bg-white/20 
                backdrop-blur-xl 
                border border-white/40 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] 
                flex items-center justify-between md:px-8 px-2">
                <div className='w-[7rem] h-[7rem]'>
                    <img src={Logo} alt="Logo"  className='w-full h-full' />
                </div>
                <ul className='hidden text-xl font-semibold gap-7 md:flex justify-evenly'>
                    <li className='transition-all cursor-pointer hover:text-blue-400 ease'>Home</li>
                    <li className='transition-all cursor-pointer hover:text-blue-400 ease'>About</li>
                    <li className='transition-all cursor-pointer hover:text-blue-400 ease'>Conatct</li>
                </ul>

                <button onClick={()=>setIspoped(!isPoped)} className='items-center hidden gap-2 px-6 py-2 font-semibold text-gray-900 transition-all bg-blue-400 md:flex rounded-2xl hover:bg-blue-600 ease group'>
                    SignUp/SignIn 
                    <span className='transition-transform duration-300 group-hover:translate-x-3'>
                        <FaArrowRight />
                    </span>
                </button>

                <button onClick={()=>setIsOpen(true)}  className='relative mr-4 text-4xl md:hidden'>{isOpen?<RxCross1 />:<RiMenu3Fill />}</button>

                <ul className={`absolute top-[14vh] transition-all ease duration-[0.5s] right-0 ${isOpen?"w-[15rem] opacity-100":"w-0 opacity-0"}  bg-white/20 
                backdrop-blur-xl 
                border border-white/40 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] z-40 rounded-2xl h-[80vh] flex flex-col gap-5 items-center `}>
                    <li className='mt-5 transition-all cursor-pointer hover:text-blue-400 ease'>Home</li>
                    <li className='transition-all cursor-pointer hover:text-blue-400 ease'>About</li>
                    <li className='transition-all cursor-pointer hover:text-blue-400 ease'>Conatct</li>
                    <button onClick={()=>setIspoped(true)} className='flex items-center gap-2 px-6 py-2 font-semibold text-gray-900 transition-all bg-blue-400 rounded-2xl hover:bg-blue-600 ease group'>
                        SignUp/SignIn 
                        <span className='transition-transform duration-300 group-hover:translate-x-3'>
                            <FaArrowRight />
                        </span>
                    </button>
                </ul>
            </nav>
            {isPoped && <>
                <FromPopUp isOpen={isPoped} setIsOpen={setIspoped} />
            </>}
        </>
    )
}
export default Navbar;