import "./Header.css"
export default function Cards(props) {
    return (
        <div className="bg-[#eee2dc] px-4 py-4 lg:w-80 lg:h-96 md:w-72 md:h-80 w-min-xs w-40 h-48 flex  flex-col rounded-2xl md:m-8 m-4 shadow-lg" >
            <span className="font-bold md:text-xl text-xs text-rose-700 pb-4 text-center ">{props.title}</span>
            <span className="font-medium md:text-lg text-xs text-blue-800 overflow-auto">{props.content}</span>
        </div>
    )
}