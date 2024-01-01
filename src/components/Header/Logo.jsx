import openAiLogo from "../../assets/openai.svg";

export default function Logo() {
    return (
        <div className="flex items-center gap-2 px-5 md:px-3">
            <div className="flex items-center justify-center bg-gray-200 rounded-full w-9 h-9">
                <img src={openAiLogo} alt="OpenAI" className="w-8/12 animate-spin" />
            </div>
            <p className="text-xl font-bold tracking-wide">
                React-OpenAI
            </p>
        </div>
    )
}