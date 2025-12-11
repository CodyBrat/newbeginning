import XPWindow from './XPWindow';
import SoftwareSkills from './SoftwareSkills';

export default function SkillsExplorer() {
    return (
        <XPWindow title="My Skills" icon="folder" className="w-full max-w-2xl bg-white shadow-xl">
            {/* Explorer Bar simulation */}
            <div className="flex items-center gap-2 border-b border-[#D6D3CE] pb-1 mb-2 text-sm text-gray-600">
                <span className="text-gray-400">Address</span>
                <div className="flex-1 bg-white border border-[#7F9DB9] px-1 py-0.5 text-black flex items-center gap-1">
                    <span className="text-yellow-500">📁</span>
                    <span>C:\My Computer\Skills\Adobe Suite</span>
                    <span className="ml-auto text-gray-400">▼</span>
                </div>
                <button className="px-2 bg-gray-100 border border-gray-400 rounded-sm hover:brightness-105">Go</button>
            </div>

            <div className="flex h-[300px]">
                {/* Sidebar */}
                <div className="w-48 bg-[#6b79de] bg-gradient-to-b from-[#748AFF] to-[#4057D3] p-3 text-white hidden sm:block">
                    <div className="mb-4">
                        <h4 className="font-bold text-sm mb-1">Skill Details</h4>
                        <div className="h-[1px] bg-white/30 mb-2"></div>
                        <p className="text-xs leading-tight opacity-90">
                            Selected items represent current proficiency levels in various software and design disciplines.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-1">See Also</h4>
                        <div className="h-[1px] bg-white/30 mb-2"></div>
                        <ul className="text-xs space-y-1 cursor-pointer">
                            <li className="hover:underline flex gap-1"><span>↗</span> My Network Places</li>
                            <li className="hover:underline flex gap-1"><span>↗</span> My Documents</li>
                            <li className="hover:underline flex gap-1"><span>↗</span> Control Panel</li>
                        </ul>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-4 overflow-y-auto">
                    <h3 className="font-bold text-gray-700 mb-4 border-b border-gray-200 pb-1">Creative Suite</h3>
                    {/* Reuse existing component but maybe needs tweaks if styled too specifically? It was grid based, should be fine */}
                    <SoftwareSkills />

                    <h3 className="font-bold text-gray-700 mt-8 mb-4 border-b border-gray-200 pb-1">Specializations</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold text-center">
                        <div className="group cursor-pointer">
                            <div className="w-12 h-12 mx-auto bg-amber-200 border-2 border-amber-400 rounded-lg flex items-center justify-center text-xl shadow-sm group-hover:bg-amber-100">🎺</div>
                            <span className="block mt-1 group-hover:bg-[#316AC5] group-hover:text-white rounded px-1">Promotional</span>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="w-12 h-12 mx-auto bg-green-200 border-2 border-green-400 rounded-lg flex items-center justify-center text-xl shadow-sm group-hover:bg-green-100">📖</div>
                            <span className="block mt-1 group-hover:bg-[#316AC5] group-hover:text-white rounded px-1">Editorial</span>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="w-12 h-12 mx-auto bg-blue-200 border-2 border-blue-400 rounded-lg flex items-center justify-center text-xl shadow-sm group-hover:bg-blue-100">🎬</div>
                            <span className="block mt-1 group-hover:bg-[#316AC5] group-hover:text-white rounded px-1">Motion</span>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="w-12 h-12 mx-auto bg-red-200 border-2 border-red-400 rounded-lg flex items-center justify-center text-xl shadow-sm group-hover:bg-red-100">🎨</div>
                            <span className="block mt-1 group-hover:bg-[#316AC5] group-hover:text-white rounded px-1">UI Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </XPWindow>
    );
}
