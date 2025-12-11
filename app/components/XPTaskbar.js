export default function XPTaskbar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-8 bg-[#245DDA] border-t-2 border-[#3F80E9] flex items-center shadow-2xl z-50">
            {/* Start Button */}
            <div className="h-full">
                <button className="h-full px-2 flex items-center gap-1 bg-gradient-to-b from-[#3E8539] to-[#3E8539] via-[#5CB758] rounded-r-xl shadow-md border-2 border-[#76C948]/50 hover:brightness-105 active:brightness-95 transition-all">
                    <div className="w-5 h-5 bg-white rounded-full italic font-bold text-[#E54D16] flex items-center justify-center shadow-sm relative overflow-hidden border border-black/10">
                        <span className="absolute top-[2px] left-[3px] w-2 h-2 bg-[#E54D16]"></span>
                        <span className="absolute top-[2px] right-[3px] w-2 h-2 bg-[#00A529]"></span>
                        <span className="absolute bottom-[2px] left-[3px] w-2 h-2 bg-[#2D66D6]"></span>
                        <span className="absolute bottom-[2px] right-[3px] w-2 h-2 bg-[#FFC500]"></span>
                    </div>
                    <span className="font-bold text-white italic text-shadow pr-2">start</span>
                </button>
            </div>

            {/* Task Area */}
            <div className="flex-1 flex gap-1 px-2">
                <div className="h-6 w-36 bg-[#3C81F3] hover:bg-[#2052b0] shadow flex items-center px-2 gap-2 rounded-[2px] active:bg-[#194090] active:shadow-inner cursor-pointer transition-colors">
                    <div className="w-4 h-4 bg-black/20 rounded-sm"></div>
                    <span className="text-white text-xs truncate">me@info:~</span>
                </div>
                <div className="h-6 w-36 bg-[#3C81F3] hover:bg-[#2052b0] shadow flex items-center px-2 gap-2 rounded-[2px] active:bg-[#194090] active:shadow-inner cursor-pointer transition-colors">
                    <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                    <span className="text-white text-xs truncate">Work Experience.txt</span>
                </div>
            </div>

            {/* System Tray */}
            <div className="h-full bg-[#0B75D7] px-3 flex items-center gap-2 border-l border-[#13499F] shadow-inner text-white text-xs">
                <span>🔊</span>
                <span className="items-center justify-center hidden sm:flex">12:57 PM</span>
            </div>
        </div>
    );
}
