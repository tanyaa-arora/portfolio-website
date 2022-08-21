import "./Header.css"
export default function Cards(props) {
    return (
        <div className={( props.toggle?"md:bg-[#E63946]": "md:bg-[#496e73]")+ " px-4 py-4 lg:w-80 lg:h-96 md:w-72 md:h-80 w-min-xs w-40 h-48 flex  flex-col rounded-2xl md:m-8 m-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-indigo-500"}>
            <span className="font-semibold md:text-2xl text-xs pb-4 text-center text-[#F1FAEE] font-inder">{props.title}</span>
            <span className="font-normal md:text-lg text-xs text-[#F1FAEE] overflow-auto font-montserrat">{props.content}</span>
        </div>
    )
}