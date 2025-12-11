export default function SoftwareSkills() {
    const skills = [
        { code: 'Ae', name: 'After effects', bg: 'bg-[#00005b]', text: 'text-[#00c8eb]' },
        { code: 'Pr', name: 'Premiere pro', bg: 'bg-[#00005b]', text: 'text-[#db60ce]' },
        { code: 'Ps', name: 'Photoshop', bg: 'bg-[#001e36]', text: 'text-[#31a8ff]' },
        { code: 'Ai', name: 'Illustrator', bg: 'bg-[#330000]', text: 'text-[#ff9a00]' },
        { code: 'Xd', name: 'Adobe xd', bg: 'bg-[#470137]', text: 'text-[#ff61f6]' },
        { code: 'Fi', name: 'Figma', bg: 'bg-[#1e1e1e]', text: 'text-[#0ace82]' },
        { code: 'Dn', name: 'Dimension', bg: 'bg-[#004a00]', text: 'text-[#4afb4a]' },
        { code: 'Ma', name: 'Maya', bg: 'bg-[#006060]', text: 'text-[#fff]' },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center group">
                    <div className={`w-14 h-14 rounded-xl shadow-md flex items-center justify-center text-2xl font-bold border border-white/10 transition-transform transform group-hover:-translate-y-1
                    ${skill.bg} ${skill.text}
                `}>
                        {skill.code}
                    </div>
                    <span className="text-[10px] mt-2 font-bold text-black uppercase tracking-tight">{skill.name}</span>
                    {/* Progress bar simulation */}
                    <div className="w-10 h-1 bg-gray-200 mt-1 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[80%]"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
