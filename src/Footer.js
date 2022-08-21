import { useState } from "react"
export default function Footer(props){
    const toggleClass = 'transform translate-x-6'
    return(
        <div className="w-full md:h-20 md:h-8 px-8 md:px-12 flex items-center" >
            <span className={"md:text-xl font-semibold font-courgette "+(props.toggle? null: "text-[#C0E1E7]")}>You can view my website in dark theme as well!!</span>
            <div className={"md:w-14 md:h-7 w-12 h-6 flex items-center "+(props.toggle ?"bg-gray-300":"bg-blue-600")+" rounded-full p-1 cursor-pointer m-4"} onClick={props.func} >
                <div className={"bg-white h-6 w-6 rounded-full shadow-md transform duration-50 ease-in-out "+(props.toggle? null: toggleClass)}></div>
            </div>
        </div>
    )
}