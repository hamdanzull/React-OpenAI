export default function FormWrapper({ handleSubmit, children }) {
    return (
        <form className="flex justify-center" onSubmit={handleSubmit}>
            <div className="fixed bottom-5 w-11/12 flex items-center justify-center md:w-[768px] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.3)]">
                {children}
            </div>
        </form>
    )
}