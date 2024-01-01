/* eslint-disable react/no-unescaped-entities */
export default function ClearChatModal({ toggleClear, setToggleClear, handleClear }) {
    return (
        <>
            <div className="fixed w-screen h-screen top-0 left-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.35)]">
                <div className="flex flex-col w-[80%] md:w-[450px] top-[50%] left-[50%] translate-[-50%,-50%] rounded-xl z-10 bg-gray-200 dark:bg-slate-600 right-3">

                    <CloseButton toggleClear={toggleClear} setToggleClear={setToggleClear} />

                    <svg xmlns="http://www.w3.org/2000/svg" className="relative left-1/2 -translate-x-1/2" height="75" width="75" viewBox="0 0 512 512">
                        <path className="fill-gray-400 dark:fill-gray-200" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                    </svg>

                    <h1 className="m-3 mx-5 text-lg text-center font-bold tracking-wide text-gray-800 dark:text-gray-50">Confirm Clear</h1>
                    <p className="mx-5 mb-7 text-center text-gray-800 dark:text-gray-50">Are you sure you want to clear this chat history?</p>

                    <span className="w-full h-[1.5px] bg-gray-300 dark:bg-slate-500"></span>
                    <div className="flex m-5 my-3 gap-3 items-center justify-end">
                        <button
                            onClick={() => handleClear()}
                            className="bg-amber-600 focus:bg-amber-700 dark:focus:bg-amber-500 rounded-lg text-sm px-5 py-2.5">Yes, I'm sure</button>
                        <button onClick={() => setToggleClear(!toggleClear)} className="
                        ring-2 ring-gray-300 dark:ring-gray-200 ring-inset focus:ring-0
                        text-gray-800 
                        focus:bg-gray-300 
                        dark:focus:bg-slate-500 
                        dark:text-gray-50
                        rounded-lg text-sm px-5 py-2.5">No, cancel</button>
                    </div>
                </div>
            </div >
        </>
    )
}

function CloseButton({ toggleClear, setToggleClear }) {
    return (
        <div>
            <button onClick={() => setToggleClear(!toggleClear)} type="button" className="float-right p-5">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    )
}