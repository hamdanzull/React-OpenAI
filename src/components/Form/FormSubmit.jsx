import paperPlane from "../../assets/paper-plane.svg";

export default function FormSubmit({ waitingResponse }) {
    return (
        <button
            type="submit"
            className={`bg-amber-500 dark:bg-amber-600 rounded-full w-10 h-10 active:bg-amber-600 dark:active:bg-amber-700 active:ring-2 active:ring-amber-500 dark:active:ring-amber-600 flex items-center justify-center ${waitingResponse ? "cursor-not-allowed" : ""}`}
            disabled={waitingResponse}
        >
            <img src={paperPlane} alt="Send" className="w-[45%]" />
        </button>
    )
}