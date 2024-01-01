export default function UserChat({ text, timestamp }) {
    return (
        <div className="bubble-right relative text-gray-800 dark:text-gray-50 bg-amber-500 dark:bg-amber-600 dark:after:border-t-amber-600 rounded-xl rounded-tr-none px-4 py-2 min-w-[50%] max-w-[85%] md:min-w-[30%] md:max-w-[60%]">
            <p>{text}</p>
            <span className="float-right -mr-1 mt-1 text-xs">
                {timestamp}
            </span>
        </div>
    )
}
