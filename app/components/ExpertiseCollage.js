export default function ExpertiseCollage() {
    return (
        <div className="relative h-64 w-full">
            {/* Collage elements */}
            <div className="absolute top-0 right-10 bg-[#e3cdab] p-2 rotate-[-5deg] shadow-lg w-48 text-center font-hand font-bold border-b-4 border-black/20 transform hover:scale-105 transition-transform cursor-pointer group">
                {/* Paper tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 tape-sm rotate-2"></div>
                <div className="text-xl mb-1 group-hover:rotate-12 transition-transform">📣</div>
                <div className="text-lg leading-none pb-2">PROMOTIONAL DESIGN</div>
            </div>

            <div className="absolute top-20 left-4 md:left-10 bg-[#98fb98] p-4 rotate-[12deg] shadow-md w-40 h-40 flex items-center justify-center font-hand font-bold text-center border border-green-600 transform hover:scale-105 transition-transform cursor-pointer sticky-note">
                <div className="text-xl">EDITORIAL<br />DESIGN</div>
            </div>

            <div className="absolute top-32 right-0 bg-[#add8e6] w-32 h-32 rounded-full flex items-center justify-center font-hand font-bold text-center shadow-lg border-2 border-dashed border-blue-400 rotate-[-10deg] transform hover:scale-105 transition-transform cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-blue-300 opacity-20 rotate-45 transform scale-150"></div>
                <span className="relative z-10">MOTION<br />GRAPHICS</span>
            </div>

            <div className="absolute top-40 left-1/3 bg-[#ff6b6b] clip-path-triangle p-8 pt-12 rotate-[5deg] shadow-lg text-white font-bold text-center w-36 h-36 flex items-center justify-center transform hover:scale-105 transition-transform cursor-pointer">
                <span className="mt-4">UI<br />DESIGN</span>
            </div>
        </div>
    );
}
