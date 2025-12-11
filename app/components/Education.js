export default function Education() {
    return (
        <div className="p-4 border-l-2 border-dashed border-gray-400 space-y-8">
            <div className="relative pl-6">
                <div className="absolute -left-[21px] top-1 w-3 h-3 bg-white border border-black rounded-full"></div>
                <span className="text-sm font-mono text-gray-600 font-bold">2019 - 2022</span>
                <h3 className="text-xl font-bold text-black">Vellore Institute of Technology</h3>
                <p className="text-sm text-gray-900 font-medium">Bsc Multimedia & animation • <span className="bg-green-300 px-1 text-xs text-black border border-green-400">CGPA 8.57</span></p>
                <p className="text-xs text-gray-600 mt-1 font-bold">Vellore, Tamilnadu, India</p>
            </div>
            <div className="relative pl-6">
                <div className="absolute -left-[21px] top-1 w-3 h-3 bg-white border border-black rounded-full"></div>
                <span className="text-sm font-mono text-gray-600 font-bold">2017 - 2018</span>
                <h3 className="text-xl font-bold text-black">Sri Shanmuka Hr. Sec. School</h3>
                <p className="text-sm text-gray-900 font-medium">Sr.Secondary School of Education • <span className="bg-green-300 px-1 text-xs text-black border border-green-400">Pct 75 %</span></p>
                <p className="text-xs text-gray-600 mt-1 font-bold">Mannargudi, Tamilnadu, India</p>
            </div>
        </div>
    );
}
