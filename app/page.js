import Image from "next/image";
// Removed unused react-icons import to keep it dependency-free and "minimal" as requested.
// Note: I will need to check if react-icons is installed. If not, I will use text or SVGs. 
// Standardizing on text/svgs to avoid dependency issues for now if I can't check package.json easily (I can, but let's stick to safe bets or install it).
// Actually, I'll assume standard SVG icons for a "humanly made" feel without extra heavy libs if possible, OR I can just install react-icons which is standard.
// Let's try to stick to SVGs for zero-dependency if possible, or just use lucide-react if available? 
// The package.json dimport Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-[1000px] min-h-[1400px] paper-sheet p-8 md:p-12 text-zinc-800 relative shadow-2xl skew-x-[0.2deg] rotate-[0.5deg] animate-land duration-700">
      {/* Top Tape - Static anchor points */}
      <div className="tape w-32 h-10 -top-4 left-1/2 -translate-x-1/2 rotate-[-1deg] opacity-90"></div>
      <div className="tape w-32 h-10 -top-4 left-1/4 -translate-x-1/2 rotate-[2deg] opacity-90"></div>
      <div className="tape w-32 h-10 -top-4 right-1/4 translate-x-1/2 rotate-[-3deg] opacity-90"></div>

      {/* HEADER SECTION */}
      <header className="flex flex-col md:flex-row gap-8 mb-16 relative">

        {/* Photo Area */}
        <div className="relative group rotate-[-2deg] hover:rotate-[1deg] transition-all duration-500 animate-land delay-100 ease-out z-[5]">
          {/* Paperclip */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-16 z-20 pointer-events-none drop-shadow-md">
            <svg viewBox="0 0 50 100" fill="none" stroke="silver" strokeWidth="5" className="w-full h-full">
              <path d="M15 10 L15 70 A 15 15 0 0 0 45 70 L45 20 A 10 10 0 0 0 25 20 L25 60" strokeLinecap="round" />
            </svg>
          </div>

          <div className="p-1 bg-white shadow-xl w-[200px] h-[200px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-zinc-100 overflow-hidden relative grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500">
              {/* Placeholder for Profile Image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-200/50 text-zinc-400">
                <span className="text-4xl mb-2 opacity-50">📷</span>
                <span className="text-xs font-mono uppercase tracking-widest text-center px-4">Place Photo Here</span>
              </div>
              {/* If user provides an image, we replace this */}
              <Image src="/vercel.svg" width={200} height={200} alt="Profile" className="opacity-0" />
            </div>
          </div>
        </div>

        {/* Name and Basic Info */}
        <div className="flex-1 pt-4 animate-land delay-200">
          <div className="relative inline-block mb-4">
            <h1 className="text-6xl md:text-8xl headline-text tracking-tighter uppercase relative z-10 transition-colors duration-300 group hover:text-pink-600 cursor-default">
              Abhishek
            </h1>
            {/* Yellow Highlighter Effect */}
            <svg className="absolute -bottom-2 -left-2 w-[110%] h-[40%] -z-0 opacity-70" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q50,0 100,10" fill="yellow" stroke="none" />
            </svg>
          </div>

          <p className="type-text text-lg max-w-md leading-relaxed mb-6 text-zinc-700">
            i do <span className="font-bold border-b-2 border-black/20 decoration-wavy">creative motion graphics</span> from scratch designing to animation assets through script and storyboarding
          </p>

          {/* Contact Card with Washi Tape */}
          <div className="interactive-card border-2 border-dashed border-zinc-700 p-4 md:p-5 rotate-[0.5deg] max-w-lg bg-zinc-50 relative group">
            {/* Tiny tape on corners */}
            <div className="tape w-8 h-6 -top-3 -left-3 rotate-[-45deg] opacity-70"></div>
            <div className="tape w-8 h-6 -bottom-3 -right-3 rotate-[-45deg] opacity-70"></div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-mono leading-relaxed relative z-10">
              <div className="font-bold border-b border-zinc-300 pb-1 hover:text-pink-600 transition-colors cursor-pointer">DOB 15.02.2001</div>
              <div className="font-bold border-b border-zinc-300 pb-1 hover:text-pink-600 transition-colors cursor-pointer">LOC Pratapgarh</div>

              <div className="col-span-2 mt-1 flex items-center gap-3 group/item">
                <span className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-xs transition-transform group-hover/item:rotate-12">📞</span>
                <span className="group-hover/item:underline decoration-pink-400 decoration-2">+91 9326980392</span>
              </div>
              <div className="col-span-2 flex items-center gap-3 group/item">
                <span className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-xs transition-transform group-hover/item:rotate-12">✉️</span>
                <span className="group-hover/item:underline decoration-pink-400 decoration-2">abhishekrampur592@gmail.com</span>
              </div>
              <div className="col-span-2 flex items-center gap-3 group/item">
                <span className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-xs transition-transform group-hover/item:rotate-12">🔗</span>
                <span className="group-hover/item:underline decoration-pink-400 decoration-2">linkedin.com/in/abhibrother</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-zinc-800 flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
              <span>Lang: <span className="text-black">Hindi (Native)</span></span>
              <span>English (Beginner)</span>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

        {/* LEFT COLUMN (Timeline) */}
        <div className="md:col-span-7 space-y-16 animate-land delay-300">

          {/* Work Experience */}
          <section className="relative">
            <h2 className="text-3xl font-bold marker-text text-pink-600 mb-10 rotate-[-1deg] inline-block relative group cursor-default">
              Work Experiences
              {/* Animated Underline */}
              <svg className="absolute bottom-0 left-0 w-full h-2 overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" fill="none" stroke="#f472b6" strokeWidth="4" className="path-draw" />
              </svg>
            </h2>

            <div className="relative border-l-2 border-dashed border-zinc-300 pl-8 ml-2 space-y-12">

              <div className="relative interactive-card p-2 -ml-2 rounded-lg hover:bg-white/50 transition-colors">
                {/* Timeline Dot */}
                <div className="absolute -left-[45px] top-6 w-4 h-4 bg-white border-[3px] border-pink-500 rounded-full z-10"></div>

                <span className="type-text text-xs font-bold bg-pink-100 text-pink-700 px-2 py-1 rounded inline-block mb-2 shadow-sm">
                  2020 - Present . 5 yr
                </span>
                <h3 className="headline-text text-3xl tracking-wide mb-1 text-zinc-900">Teaching & Management</h3>
                <div className="font-bold text-sm uppercase tracking-wider text-zinc-600 mb-2 flex flex-wrap items-center gap-2">
                  Alpha Computer Institute (ACI)
                  <span className="bg-green-200 px-2 py-0.5 text-[10px] rounded-full border border-green-300 text-green-900 font-bold">Full-time</span>
                </div>
                <p className="type-text text-sm text-zinc-500">
                  📍 Narangpur Patti Pratapgarh, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="relative">
            <h2 className="text-3xl font-bold marker-text text-purple-600 mb-10 rotate-[1deg] inline-block relative cursor-default">
              Education
              {/* Hand-drawn Circle */}
              <svg className="absolute -top-4 -left-4 w-[120%] h-[150%] -z-10 opacity-20 rotate-[-5deg]" viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M5,25 Q25,5 50,5 T95,25 T50,45 T5,25" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </h2>

            <div className="relative border-l-2 border-dashed border-zinc-300 pl-8 ml-2 space-y-12">

              {/* Item 1 */}
              <div className="relative interactive-card p-2 -ml-2 rounded-lg hover:bg-white/50">
                <div className="absolute -left-[45px] top-6 w-4 h-4 bg-white border-[3px] border-purple-500 rounded-full z-10"></div>
                <span className="font-mono text-xs text-zinc-400 mb-1 block">2016 - 2024</span>
                <h3 className="headline-text text-xl">YOUTUBE & Self-Study</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-300 p-3 my-2 text-sm italic text-zinc-600 type-text">
                  &quot;I acquired most of my computer skills through youtube&quot;
                </div>
                <ul className="mt-3 text-sm flex flex-wrap gap-2 font-mono text-zinc-700">
                  {['Graphic Designing', 'Hacking', '3D Animation', 'Video Editing', 'Troubleshooting', 'PC Assembly'].map(skill => (
                    <li key={skill} className="bg-zinc-100 px-2 py-1 rounded border border-zinc-200 text-xs hover:bg-zinc-200 transition-colors cursor-default">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Item 2 */}
              <div className="relative interactive-card p-2 -ml-2 rounded-lg hover:bg-white/50">
                <div className="absolute -left-[45px] top-6 w-4 h-4 bg-white border-[3px] border-purple-500 rounded-full z-10"></div>
                <span className="font-mono text-xs text-zinc-400 mb-1 block">2021 - 2023</span>
                <h3 className="headline-text text-xl border-b-2 border-black/10 inline-block pb-1">T.S.N.C.P.S.M.B.S.S</h3>
                <p className="font-bold text-sm mt-2 flex items-center gap-2">M.A Final Sociology <span className="bg-green-100 text-green-800 border border-green-200 px-1 text-xs rounded">Pct 58%</span></p>
                <p className="type-text text-xs text-zinc-400 mt-1">Sultanpur, Uttar Pradesh, India</p>
              </div>

              {/* Item 3 */}
              <div className="relative interactive-card p-2 -ml-2 rounded-lg hover:bg-white/50">
                <div className="absolute -left-[45px] top-6 w-4 h-4 bg-white border-[3px] border-purple-500 rounded-full z-10"></div>
                <span className="font-mono text-xs text-zinc-400 mb-1 block">2015 - 2016</span>
                <h3 className="headline-text text-xl border-b-2 border-black/10 inline-block pb-1">B.D.C.R.I.C.R.P.B.P.PBH</h3>
                <p className="font-bold text-sm mt-2 flex items-center gap-2">SECONDARY SCHOOL OF EDUCATION <span className="bg-green-100 text-green-800 border border-green-200 px-1 text-xs rounded">Pct 68%</span></p>
                <p className="type-text text-xs text-zinc-400 mt-1">Pratapgarh, Uttar Pradesh, India</p>
              </div>

            </div>
          </section>

        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-5 space-y-20 animate-land delay-500">

          {/* Handwritten Note */}
          <div className="relative p-6 rotate-2 group cursor-pointer hover:rotate-1 transition-transform">
            {/* Arrow doodle */}
            <svg className="absolute -left-8 top-10 w-12 h-12 text-red-500 rotate-[-45deg] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>

            <div className="hand-text text-2xl text-red-600 leading-snug drop-shadow-sm transform group-hover:scale-105 transition-transform duration-300">
              Please don&apos;t hesitate to reach me if this resume doesn&apos;t provide enough clarification
              <span className="inline-block ml-3 text-4xl rotate-90 align-middle">⤵</span>
            </div>
            <div className="mt-4 hand-text font-bold text-2xl text-red-700 bg-red-50 p-2 inline-block rounded rotate-[-2deg] border border-red-100 shadow-sm">
              +91 9326980392
            </div>
          </div>

          {/* Area of Expertise */}
          <section className="relative">
            <h2 className="text-2xl font-bold marker-text text-pink-600 mb-10 rotate-[-1deg] text-center">
              Area of Expertise
            </h2>

            <div className="flex flex-col gap-8 items-center">

              {/* Sticky Note 1 */}
              <div className="sticky-note w-64 p-6 text-center pb-8 bg-[#ffffd1]">
                <div className="tape w-24 h-8 -top-4 left-1/2 -translate-x-1/2 opacity-80"></div>
                <h3 className="headline-text text-3xl text-pink-600 mb-2 leading-none">AD DESIGN</h3>
                <div className="w-full h-0.5 bg-pink-200 my-2"></div>
                <h3 className="headline-text text-3xl text-pink-500 leading-none">POSTER DESIGN</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full px-2">
                <div className="interactive-card bg-orange-100 p-3 shadow-md rotate-[-3deg] text-center border-2 border-white ring-1 ring-orange-200 hover:rotate-0 hover:z-20">
                  <div className="tape w-12 h-4 -top-3 left-1/2 -translate-x-1/2 opacity-70"></div>
                  <span className="headline-text text-secondary text-sm block text-amber-900 font-bold leading-tight">WEDDING VIDEO EDITING</span>
                </div>

                <div className="interactive-card bg-yellow-200 p-3 shadow-md rotate-[2deg] text-center border-2 border-white ring-1 ring-yellow-300 hover:rotate-0 hover:z-20">
                  <div className="tape w-12 h-4 -top-3 left-1/2 -translate-x-1/2 opacity-70"></div>
                  <span className="headline-text text-sm block text-yellow-900 font-bold leading-tight">MOTION GRAPHICS</span>
                </div>

                <div className="interactive-card bg-sky-200 p-3 shadow-md rotate-[1deg] text-center border-2 border-white ring-1 ring-sky-300 col-span-2 w-3/4 mx-auto hover:rotate-0 hover:z-20">
                  <div className="tape w-12 h-4 -top-3 left-1/2 -translate-x-1/2 opacity-70"></div>
                  <span className="headline-text text-sm block text-sky-900 font-bold">PROMOTIONAL DESIGN</span>
                </div>
              </div>

            </div>
          </section>

          {/* Software Skills */}
          <section>
            <h2 className="text-2xl font-bold marker-text text-fuchsia-700 mb-8 rotate-[2deg] text-center">
              Software Skills
            </h2>

            <div className="grid grid-cols-4 gap-4 p-6 bg-white/40 rounded-xl border-2 border-dashed border-zinc-300 relative">
              {/* Background scribble */}
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 Q50,50 100,100 M100,0 Q50,50 0,100" stroke="black" strokeWidth="0.5" />
              </svg>

              {/* We will mock the icons with colorful blocks + Initials since we don;t have images */}
              <SkillBlock color="bg-[#001e36]" text="Ps" name="Photoshop" />
              <SkillBlock color="bg-[#330000]" text="Ai" name="Illustrator" />
              <SkillBlock color="bg-[#00005b]" text="Ae" name="After Effects" />
              <SkillBlock color="bg-[#0a2540]" text="Lr" name="Lightroom" />

              <SkillBlock color="bg-[#2a001e]" text="Id" name="InDesign" />
              <SkillBlock color="bg-[#1e002a]" text="Pr" name="Premiere Pro" />
              <SkillBlock color="bg-[#ff9900]" text="Bl" name="Blender" />
              <SkillBlock color="bg-[#00cc66]" text="Cdr" name="CorelDraw" />

              <SkillBlock color="bg-[#005c99]" text="W" name="Word" />
              <SkillBlock color="bg-[#00802b]" text="X" name="Excel" />
              <SkillBlock color="bg-[#d24726]" text="P" name="PowerPoint" />
              <SkillBlock color="bg-[#00k]" text="F" name="Filmora" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

function SkillBlock({ color, text, name }) {
  return (
    <div className="flex flex-col items-center gap-1 group cursor-pointer">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl relative overflow-hidden`}>
        <span className="relative z-10">{text}</span>
        {/* Shine effect */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700"></div>
      </div>
      {/* Loading/Progress Bar Mockup */}
      <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="h-full bg-green-400 w-[85%] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
      </div>
      <span className="text-[9px] font-mono text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4 bg-white/90 px-1 rounded shadow-sm whitespace-nowrap z-50 pointer-events-none">
        {name}
      </span>
    </div>
  )
}
