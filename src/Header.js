import tanya from "./Tanya.jpg"
import "./Header.css"
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
export default function Header(props) {
    return (
        <div className={"nav-component flex items-center"+(props.toggle?" bg-[#1D3557]":" bg-[#2C3333]")+" md:h-32 h-20 shadow-md justify-between px-8 md:px-12 font-montserrat"}>
            {/* <div className="">
                <img src={tanya} alt="image" className="rounded-full ml-12 h-16 w-16 md:h-28 md:w-28"></img>
            </div> */}
            <div className="">
                <span className="cursor-default text-xs md:text-2xl font-medium text-[#F1FAEE] ">Hi! My name is Tanya Arora</span>
            </div>
            <div className="flex text-[#F1FAEE]">
                <IconContext.Provider value={{ className: "react-icons" }}>
                    <a href="https://www.linkedin.com/in/tanya-arora-56aa82211/" target="_blank">
                        <FaLinkedin id="linkedin"/>
                    </a>
                    <a href="https://github.com/tanyaa-arora" target="_blank" className= {props.toggle ? "github":"github_dark"}>
                        <FaGithub/>
                    </a>
                    <a href="https://twitter.com/TanyaAr28" target="_blank" id="twitter">
                        <FaTwitter />
                    </a>
                </IconContext.Provider>
            </div>
        </div>
    )
}