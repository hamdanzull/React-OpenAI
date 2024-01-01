export default function Conversation({ children }) {
    return (
        <div className="flex-1 overflow-y-scroll pt-1 pb-20 leading-6">
            {children}
        </div>
    )
}