import React from "react";
import InputType from "./InputType";
import { h1Arr, h1Style,inputArr } from "./constants";
function Contact(){
    return(
       <>
        <div className=" mt-[16vh] flex items-center justify-center min-h-screen">
            <div className="w-full max-w-2xl px-6 ">
                <h1 className="mb-6 text-6xl text-center font-bold text-gray-900 ">
                    Contact Us
                </h1>
                <p className="mb-10 text-center text-gray-900">
                    Have Question? Reach Out To You
                </p>
                <form className="grid gap-6">

                    {inputArr.map((ele)=>{
                        return(
                            <InputType key={ele.placeholder} type={ele.type} placeholder={ele.placeholder} />
                        )
                    })}

                   <button className="p-3 border-gray-700 rounded-2xl text-white bg-emerald-700">Submit</button>
                </form>
                
            </div>
        </div>
        <div className="flex justify-center ">
            <div className="w-[70vw] h-[30vh] bg-emerald-700 flex justify-around">
            {h1Arr.map((ele)=>{
                    return(
                        <h1 key={ele} className={h1Style}>{ele}</h1>
                    )
            })}
            </div>
        </div>
       </>
    )
}
export default Contact;
