export default function ProfileHeader() {
    return (
        <div className="relative w-full max-w-2xl bg-[#fdfbf7] p-4 rounded-sm border-2 border-gray-200 shadow-sm rotate-[-1deg] mb-12">
            {/* Paper Clip (CSS Only) */}
            <div className="absolute -top-4 -left-2 w-8 h-12 border-4 border-gray-400 rounded-full z-20" style={{ clipPath: "inset(0 0 50% 0)" }}></div>
            <div className="absolute -top-4 -left-2 w-8 h-12 border-4 border-gray-400 rounded-full z-20 rotate-180" style={{ top: "-10px", left: "0px", clipPath: "inset(50% 0 0 0)" }}></div>

            {/* Tape effect on top corner */}
            <div className="absolute -top-3 right-10 w-32 h-8 bg-white/40 rotate-2 backdrop-blur-sm border border-white/20 shadow-sm z-10 transform skew-x-12"></div>

            <div className="flex flex-col md:flex-row gap-6 relative z-10">
                {/* Photo Area */}
                <div className="relative w-48 h-56 bg-[#e6e600] p-2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] shrink-0 rotate-1">
                    <div className="w-full h-full bg-zinc-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-300">
                        {/* Placeholder for Profile Image if user hasn't uploaded one yet, we use a generic person or empty state */}
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                            <span className="text-4xl text-center font-bold opacity-30">Your<br />Photo</span>
                        </div>
                    </div>
                </div>

                {/* Info Area */}
                <div className="flex-1 pt-2 font-mono text-sm space-y-4 text-black">
                    <div>
                        <h1 className="text-4xl font-bold font-sans tracking-tight mb-2 text-black">Aravindh A</h1>
                        <p className="text-gray-900 leading-tight max-w-sm font-medium">
                            I do creative motion graphics from scratch designing to animation assets through script and storyboarding
                        </p>
                    </div>

                    <div className="border-2 border-dashed border-black p-2 relative bg-white/50">
                        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs mb-2 border-b border-black pb-2">
                            <span className="font-bold bg-black text-white px-1">DOB</span>
                            <span className="font-bold text-black">23.01.2001</span>
                            <span className="font-bold bg-black text-white px-1">LOC</span>
                            <span className="font-bold text-black">Thanjavur</span>
                        </div>            </div>

                    <div className="flex justify-between items-end">
                        <div className="space-y-1 text-xs font-bold">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-black rounded-full text-white flex items-center justify-center text-[8px]">@</span>
                                <span>+91 7904692069</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-black rounded-full text-white flex items-center justify-center text-[8px]">@</span>
                                <span>yuviz0403@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-black rounded-full text-white flex items-center justify-center text-[8px]">Be</span>
                                <span className="border-b border-black">behance.net/Aravindh_A</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-16 h-16 bg-black p-1">
                                <div className="w-full h-full bg-white flex items-center justify-center">
                                    {/* Mock QR Code */}
                                    <div className="w-12 h-12 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Portfolio')] bg-cover"></div>
                                </div>
                            </div>
                            <div className="absolute -left-4 top-1/2 -rotate-90 text-[10px] tracking-widest text-red-500 font-hand">
                                portfolio
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 border-t border-black pt-1 flex justify-between text-[10px] uppercase font-bold tracking-wider text-black">
                        <div>Lang <span className="font-normal normal-case ml-1">Tamil (Native)</span></div>
                        <div>English <span className="font-normal normal-case ml-1">(Beginner)</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
