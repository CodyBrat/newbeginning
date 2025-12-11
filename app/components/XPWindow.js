export default function XPWindow({ title, children, className = "" }) {
    return (
        <div className={`flex flex-col bg-[#ece9d8] border-[3px] border-[#0055ea] rounded-t-lg rounded-b-none shadow-2xl overflow-hidden ${className}`}>
            {/* Title Bar */}
            <div className="bg-gradient-to-r from-[#0058ee] via-[#3593ff] to-[#288eff] px-3 py-2 flex justify-between items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] select-none">
                <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-white text-shadow-sm italic text-sm md:text-base tracking-wide flex items-center gap-2">
                        {/* Win XP Icon placeholder */}
                        <div className="w-4 h-4 rounded-sm bg-white/20 border border-white/40 skew-y-6"></div>
                        {title}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <button className="w-5 h-5 md:w-6 md:h-6 bg-[#288eff] border border-white/60 rounded-[3px] shadow-[inset_0_0_2px_rgba(255,255,255,0.5)] flex items-center justify-center hover:brightness-110 active:brightness-95 group">
                        <div className="w-2 h-0.5 bg-white shadow-[0_1px_0_rgba(0,0,0,0.3)]"></div>
                    </button>
                    <button className="w-5 h-5 md:w-6 md:h-6 bg-[#288eff] border border-white/60 rounded-[3px] shadow-[inset_0_0_2px_rgba(255,255,255,0.5)] flex items-center justify-center hover:brightness-110 active:brightness-95">
                        <div className="w-2 h-2 border-[1.5px] border-white shadow-[0_1px_0_rgba(0,0,0,0.3)]"></div>
                    </button>
                    <button className="w-5 h-5 md:w-6 md:h-6 bg-[#e04238] border border-white/60 rounded-[3px] shadow-[inset_0_0_2px_rgba(255,255,255,0.5)] flex items-center justify-center hover:brightness-110 active:brightness-95">
                        <span className="text-white font-bold leading-none text-xs shadow-[0_1px_0_rgba(0,0,0,0.3)]">✕</span>
                    </button>
                </div>
            </div>

            {/* Menu Bar (Optional, keeps it authentic) */}
            <div className="bg-[#ece9d8] border-b border-[#d1cfc0] px-3 py-1 flex items-center gap-4 text-xs font-sans text-black">
                <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 cursor-pointer">File</span>
                <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 cursor-pointer">Edit</span>
                <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 cursor-pointer">View</span>
                <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 cursor-pointer">Favorites</span>
                <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 cursor-pointer">Tools</span>
                <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 cursor-pointer">Help</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white relative overflow-hidden">
                {children}
            </div>

            {/* Status Bar */}
            <div className="bg-[#ece9d8] border-t border-[#d1cfc0] px-3 py-1 flex justify-between items-center text-[10px] md:text-xs text-black font-sans shadow-[inset_0_1px_0_white]">
                <span>Done</span>
                <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    My Computer
                </span>
            </div>
        </div>
    );
}
