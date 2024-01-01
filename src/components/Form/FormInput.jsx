export default function FormInput({ input, setInput }) {
    return (
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-10 px-3 bg-gray-50 text-gray-800 caret-gray-500 rounded-full flex-grow mr-2 focus:outline-none"
            placeholder="Type here..."
            autoFocus
        />
    )
}