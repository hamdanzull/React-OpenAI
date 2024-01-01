import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function UserChat({ text, timestamp }) {
    return (
        <div className="bubble-left relative text-gray-800 dark:text-gray-50 bg-gray-300 dark:bg-slate-600 rounded-xl dark:after:border-t-slate-600 rounded-tl-none px-4 py-2 min-w-[50%] max-w-[85%] md:min-w-[30%] md:max-w-[60%]">
            <Markdown className="ai overflow-x-auto prose dark:prose-invert  prose-a:decoration-transparent prose-a:text-indigo-500 prose-headings:text-gray-700 dark:prose-headings:text-gray-300 prose-strong:text-gray-700 dark:prose-strong:text-gray-300 prose-li:marker:text-gray-700 dark:prose-li:marker:text-gray-300 prose-pre:bg-gray-500 dark:prose-pre:bg-slate-700 prose-blockquote:border-slate-500 dark:prose-blockquote:border-slate-500 prose-hr:border-[1.5px] prose-hr:border-gray-400 dark:prose-hr:border-slate-500 prose-table:text-center prose-th:py-2 prose-td:py-2 prose-th:bg-gray-400 dark:prose-th:bg-slate-500 prose-tr:border-b-2 prose-tr:border-gray-400 dark:prose-tr:border-slate-500" remarkPlugins={[remarkGfm]}>{text}</Markdown>
            <span className="float-right -mr-1 mt-1 text-xs">
                {timestamp}
            </span>
        </div>
    )
}
