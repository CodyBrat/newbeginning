"use client";
import { useState } from 'react';

export default function XPWindow({ title, children, icon = "computer", className = "", initialPosition = { x: 0, y: 0 }, width = "w-[500px]" }) {
    const [isMinimized, setIsMinimized] = useState(false);

    if (isMinimized) {
        return (
            <div className="fixed bottom-0 left-0 hidden"></div> // Hidden when minimized, logic could be handled by parent state for taskbar
        )
    }

    return (
        <div className={`flex flex-col bg-[#ECE9D8] rounded-t-lg shadow-xl border border-[#0055EA] overflow-hidden ${width} ${className} transition-all duration-200`}>
            {/* Title Bar */}
            <div className="bg-gradient-to-b from-[#245DDA] to-[#245DDA] via-[#225AD7] h-8 flex items-center justify-between px-2 select-none">
                <div className="flex items-center gap-2 text-white font-bold text-shadow-sm text-sm">
                    {/* Simple Icon Placeholder */}
                    <div className="w-4 h-4 bg-transparent border border-white/20 rounded-sm"></div>
                    <span className="drop-shadow-md font-sans">{title}</span>
                </div>

                <div className="flex gap-1">
                    {/* Minimize */}
                    <button
                        onClick={() => setIsMinimized(true)}
                        className="w-5 h-5 bg-[#245DDA] text-white flex items-center justify-center rounded-[3px] hover:brightness-110 active:brightness-90 border-2 border-white/30 shadow-inner"
                        title="Minimize"
                    >
                        <div className="w-2 h-[2px] bg-white align-bottom mb-1"></div>
                    </button>

                    {/* Maximize */}
                    <button className="w-5 h-5 bg-[#245DDA] text-white flex items-center justify-center rounded-[3px] hover:brightness-110 active:brightness-90 border-2 border-white/30 shadow-inner opacity-50 cursor-default">
                        <div className="w-2 h-2 border-[1.5px] border-white"></div>
                    </button>

                    {/* Close */}
                    <button
                        onClick={() => setIsMinimized(true)} // Just minimize for now
                        className="w-5 h-5 bg-[#DA3610] text-white flex items-center justify-center rounded-[3px] hover:brightness-110 active:brightness-90 border-1 border-white/40 shadow-inner ml-0.5"
                        title="Close"
                    >
                        <span className="text-sm font-bold leading-none mb-0.5 ml-[1px]">×</span>
                    </button>
                </div>
            </div>

            {/* Menu Bar (Optional, generic) */}
            <div className="bg-[#ECE9D8] border-b border-[#D6D3CE] px-1 py-0.5 flex text-xs gap-3 text-black">
                <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">File</span>
                <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">Edit</span>
                <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">View</span>
                <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">Help</span>
            </div>

            {/* Content Area */}
            <div className="p-1 bg-[#ECE9D8] h-full">
                <div className="bg-white border border-[#7F9DB9] h-full p-2 overflow-auto text-black">
                    {children}
                </div>
            </div>
        </div>
    );
}
