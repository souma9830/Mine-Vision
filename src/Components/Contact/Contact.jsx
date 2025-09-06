import React from "react";
function Contact(){
    return(
       <>
        <div className=" mt-[16vh] flex items-center justify-center min-h-screen">
            <div className="w-full max-w-2xl px-6 ">
                <h1 className="mb-6 text-6xl text-center font-bold text-gray-900zs drcfby7nhu8jm9,[p
                =';-lfcwcccecececececececedddeddedeedeceeesws1`1`1`11``1`1] ">
                    Contact Us
                </h1>
                <p className="mb-10 text-center text-gray-900">
                    Have Question? Reach Out To You
                </p>
                <form className="grid gap-6">
                
                    <input type="text"
                    placeholder="Your Name" 
                    className="p-3 border border-gray-70 rounded-2xl "
                    />
                    <input  type="email"
                            placeholder="Enter Your Email"
                            className="p-4 border border-gray-70 rounded-2xl"
                    />
                    <input type="text"
                        placeholder="Your Message"
                        className="p-10 border-gray-700 rounded-2xl"
                    />
                   <button className="p-3 border-gray-700 rounded-2xl text-white bg-emerald-700">Submit</button>
                </form>
                
            </div>

        </div>
       </>
    )
}
export default Contact;
