export default function HandwrittenNote() {
    return (
        <div className="absolute top-0 right-0 max-w-[280px] p-4 hidden lg:block rotate-2">
            <p className="font-hand text-red-500 text-lg leading-relaxed relative">
                Please don't hesitate to <span className="inline-block border-2 border-red-500 rounded-[50%] px-2 py-1 rotate-[-2deg]">reach me</span> if this resume doesn't provide enough clarification
                <span className="absolute -bottom-2 right-10 transform scale-150 rotate-12">curl</span>
            </p>
            <div className="mt-4 space-y-1 font-hand text-red-400 text-sm pl-4">
                <div className="flex items-center gap-2">
                    <span className="block transform -scale-x-100">📞</span>
                    <span>+91 7904692069</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">in</span>
                    <div className="border border-black px-2 py-1 rotate-1 bg-transparent transform skew-x-[-10deg]">
                        linkedin.com/in/aravindh-a
                    </div>
                </div>
            </div>
        </div>
    )
}
