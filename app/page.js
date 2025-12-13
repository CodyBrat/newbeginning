import Image from "next/image";
// Removed unused react-icons import to keep it dependency-free and "minimal" as requested.
// Note: I will need to check if react-icons is installed. If not, I will use text or SVGs. 
// Standardizing on text/svgs to avoid dependency issues for now if I can't check package.json easily (I can, but let's stick to safe bets or install it).
// Actually, I'll assume standard SVG icons for a "humanly made" feel without extra heavy libs if possible, OR I can just install react-icons which is standard.
// Let's try to stick to SVGs for zero-dependency if possible, or just use lucimport Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-10 pb-20 relative">

      {/* NAVBAR (Fixed Top) */}
      <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center pt-2">
        {/* The Paper Strip */}
        <div className="pointer-events-auto bg-[#f8f5f2] px-8 py-3 shadow-md rotate-[-1deg] border-b-2 border-zinc-200 rounded-bl-3xl rounded-br-2xl max-w-2xl flex gap-8 items-center border-t border-white">
          <div className="tape w-24 h-6 -top-3 left-1/2 -translate-x-1/2 opacity-60"></div>

          <a href="#about" className="headline-text text-xl hover:text-pink-600 transition-colors nav-link">About</a>
          <a href="#projects" className="headline-text text-xl hover:text-pink-600 transition-colors nav-link">Work</a>
          <a href="#experience" className="headline-text text-xl hover:text-pink-600 transition-colors nav-link">Experience</a>
          <a href="#contact" className="headline-text text-xl hover:text-pink-600 transition-colors nav-link">Contact</a>
        </div>
      </nav>

      <div className="w-full max-w-[1200px] min-h-[1400px] paper-sheet p-8 md:p-12 text-zinc-900 relative shadow-2xl skew-x-[0.2deg] rotate-[0.5deg] animate-land duration-700 mt-12 mb-12">

        {/* ID CARD HEADER (The "Aravindh A" Look - REFINED) */}
        <header className="id-card w-full max-w-4xl mx-auto p-8 mb-24 relative bg-[#f1f1f1] border-zinc-500">
          {/* Realistic Paperclip */}
          <div className="paper-clip"></div>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Yellow Photo Box */}
            <div className="relative shrink-0 rotate-[-1deg] self-center md:self-start">
              <div className="w-[180px] h-[200px] bg-[#fbbf24] border-2 border-zinc-800 p-2 shadow-sm flex items-end justify-center overflow-hidden">
                {/* Better Placeholder */}
                <div className="w-full h-full bg-zinc-800/10 flex items-center justify-center border border-zinc-800/20">
                  <span className="text-6xl opacity-30">👤</span>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 w-full pt-2">
              <h1 className="text-6xl md:text-8xl font-sans font-black text-black tracking-tighter mb-4 uppercase scale-y-110">
                Abhishek
              </h1>
              <p className="text-zinc-700 font-mono text-base max-w-lg leading-relaxed mb-8 border-l-4 border-yellow-400 pl-4">
                Creative motion graphics designer. <br />From scratch designing to animation assets.
              </p>

              {/* Data Grid - Cleaner */}
              <div className="border-2 border-zinc-800 w-full max-w-md bg-white shadow-sm">
                <div className="flex border-b-2 border-zinc-800">
                  <div className="w-1/3 bg-zinc-100 p-2 text-xs font-bold border-r-2 border-zinc-800 uppercase tracking-wider text-zinc-500">DOB</div>
                  <div className="p-2 text-sm font-bold flex-1 font-mono">15.02.2001</div>
                </div>
                <div className="flex border-b-2 border-zinc-800">
                  <div className="w-1/3 bg-zinc-100 p-2 text-xs font-bold border-r-2 border-zinc-800 uppercase tracking-wider text-zinc-500">Phone</div>
                  <div className="p-2 text-sm font-bold flex-1 font-mono">+91 9326980392</div>
                </div>
                <div className="flex border-b-2 border-zinc-800">
                  <div className="w-1/3 bg-zinc-100 p-2 text-xs font-bold border-r-2 border-zinc-800 uppercase tracking-wider text-zinc-500">Location</div>
                  <div className="p-2 text-sm font-bold flex-1 font-mono">Pratapgarh, UP</div>
                </div>
                <div className="flex items-center p-2 bg-yellow-50">
                  <span className="text-xs font-bold mr-2 uppercase tracking-wider text-zinc-500">Portfolio:</span>
                  <span className="text-xs font-mono font-bold underline truncate text-blue-800">behance.net/abhibrother</span>
                </div>
              </div>
            </div>

            {/* Handwritten Note (Red) */}
            <div className="hidden lg:block w-56 rotate-[8deg] text-red-600 hand-text text-xl leading-7 absolute top-10 right-10 mix-blend-multiply opacity-90">
              <span className="text-3xl font-bold block mb-1">NB:</span>
              Please don&apos;t hesitate to <span className="border-2 border-red-600 rounded-[50%] px-3 py-1 inline-block rotate-[-2deg]">reach me</span> for any clarification!
              <div className="text-4xl text-right mt-2">➿</div>
            </div>
          </div>
        </header>


        {/* MAIN BODY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

          {/* LEFT COLUMN */}
          <div className="space-y-20">

            {/* Work Experience */}
            <section>
              <h2 className="text-4xl font-bold mb-10 font-sans tracking-tight text-zinc-800">
                <span className="highlighter-yellow px-1">Work Experiences</span>
              </h2>

              <div className="relative border-l-[3px] border-dotted border-zinc-300 pl-8 ml-4 space-y-12">
                {/* Item 1 */}
                <div className="relative group">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-black absolute -left-[41px] top-1.5 group-hover:scale-125 transition-transform"></div>
                  <div className="text-xs font-bold font-mono text-zinc-400 mb-1 uppercase tracking-widest">Sep 2022 - Present</div>
                  <h3 className="text-2xl font-bold leading-none mb-2 font-serif">Motion Graphic & UI Designer</h3>
                  <div className="text-zinc-600 text-sm font-medium">
                    Alpha Computer Institute <span className="align-middle ml-2 inline-block bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 border border-green-200 rounded uppercase tracking-wide">Full-time</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative group">
                  <div className="w-4 h-4 bg-white rounded-full border-2 border-black absolute -left-[41px] top-1.5 group-hover:scale-125 transition-transform"></div>
                  <div className="text-xs font-bold font-mono text-zinc-400 mb-1 uppercase tracking-widest">Jun 2022 - Aug 2022</div>
                  <h3 className="text-2xl font-bold leading-none mb-2 font-serif">Freelance Animator</h3>
                  <div className="text-zinc-600 text-sm font-medium">
                    Self Employed <span className="align-middle ml-2 inline-block bg-zinc-100 text-zinc-800 text-[10px] font-bold px-2 py-0.5 border border-zinc-200 rounded uppercase tracking-wide">Freelance</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-4xl font-bold mb-10 font-sans tracking-tight text-zinc-800">
                <span className="highlighter-yellow px-1">Education</span>
              </h2>

              <div className="relative border-l-[3px] border-dotted border-zinc-300 pl-8 ml-4 space-y-12">
                {/* Item 1 */}
                <div className="relative group">
                  <div className="w-4 h-4 bg-white rounded-full border-2 border-black absolute -left-[41px] top-1.5 group-hover:scale-125 transition-transform"></div>
                  <div className="text-xs font-bold font-mono text-zinc-400 mb-1 uppercase tracking-widest">2019 - 2022</div>
                  <h3 className="text-2xl font-bold leading-none mb-2 font-serif">YOUTUBE & Self-Study</h3>
                  <div className="text-zinc-600 text-sm font-medium">
                    Video Editing & Motion Graphics <span className="highlighter-green text-xs font-bold ml-2 px-1 rounded-sm border border-green-400">CGPA 9.0</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative group">
                  <div className="w-4 h-4 bg-white rounded-full border-2 border-black absolute -left-[41px] top-1.5 group-hover:scale-125 transition-transform"></div>
                  <div className="text-xs font-bold font-mono text-zinc-400 mb-1 uppercase tracking-widest">2017 - 2018</div>
                  <h3 className="text-2xl font-bold leading-none mb-2 font-serif">Secondary School</h3>
                  <div className="text-zinc-600 text-sm font-medium">
                    TSNC School <span className="highlighter-green text-xs font-bold ml-2 px-1 rounded-sm border border-green-400">98%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects (Simplified to fit style) */}
            <section>
              <h2 className="text-3xl font-bold mb-6">
                <span className="highlighter-yellow px-2">Selected Works</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800 h-32 rounded-lg flex items-center justify-center text-white/50 text-xs border-2 border-zinc-600 rotate-[-1deg] hover:rotate-0 transition-transform cursor-pointer shadow-md">
                  Project A (Reel)
                </div>
                <div className="bg-zinc-800 h-32 rounded-lg flex items-center justify-center text-white/50 text-xs border-2 border-zinc-600 rotate-[1deg] hover:rotate-0 transition-transform cursor-pointer shadow-md">
                  Project B (Case Study)
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-16">

            {/* Area of Expertise (Collage) */}
            <section>
              <h2 className="text-3xl font-bold mb-10 text-right md:text-left">
                <span className="highlighter-yellow px-2">Area of Expertise</span>
              </h2>

              <div className="relative h-64 w-full">
                {/* Tape Strip: Promotional Design */}
                <div className="absolute top-0 right-10 md:right-32 tape-strip w-48 h-12 rotate-[-5deg] shadow-md z-20 flex items-center justify-center">
                  <span className="font-marker font-bold text-amber-900 text-lg uppercase tracking-wide">Promotional Design</span>
                  <span className="absolute -left-2 text-2xl">📢</span>
                </div>

                {/* Red Triangle: UI Design */}
                <div className="absolute top-16 left-10 md:left-20 w-32 h-28 filter drop-shadow-lg z-10 animate-float delay-100">
                  <div className="shape-triangle w-full h-full flex flex-col items-center justify-end pb-2">
                    <span className="text-3xl border-2 border-black rounded-md px-1 mb-1">UI</span>
                    <span className="text-xs font-bold">DESIGN</span>
                  </div>
                </div>

                {/* Blue Circle: Motion Graphics */}
                <div className="absolute top-24 right-4 md:right-10 w-36 h-36 shape-circle bg-[#a5f3fc] rotate-6 z-0 animate-float delay-300">
                  <div className="flex flex-col items-center leading-none">
                    <div className="w-12 h-4 bg-black/10 mb-2 rotate-[-10deg] rounded-full"></div>
                    <span className="font-bold text-lg">MOTION</span>
                    <span className="font-bold text-lg">GRAPHICS</span>
                    <span className="text-xs opacity-60 mt-1">2D/3D</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Software Skills (App Icons) */}
            <section>
              <h2 className="text-3xl font-bold mb-8">
                <span className="highlighter-yellow px-2">Software Skills</span>
              </h2>

              <div className="grid grid-cols-3 gap-y-8 gap-x-4 place-items-center">
                {/* Adobe Suite & More */}
                <AppIcon color="#00005b" label="After Effects" short="Ae" />
                <AppIcon color="#330000" label="Premiere Pro" short="Pr" />
                <AppIcon color="#001e36" label="Photoshop" short="Ps" />

                <AppIcon color="#330000" label="Illustrator" short="Ai" />
                <AppIcon color="#2a001e" label="InDesign" short="Id" />
                <AppIcon color="#000" label="Figma" short="Fg" />

                <AppIcon color="#ff9900" label="Blender" short="Bl" />
                <AppIcon color="#00802b" label="Excel" short="X" />
                <AppIcon color="#0a2540" label="Lightroom" short="Lr" />
              </div>
            </section>

          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="w-full max-w-[1000px] mt-12 text-center pb-8 pt-8 opacity-80 hover:opacity-100 transition-opacity z-10 relative">
        <p className="hand-text text-xl mb-4 text-white/80">Thanks for stopping by my creative corner! 🚀</p>
        <div className="flex justify-center gap-6 text-3xl grayscale hover:grayscale-0 transition-all duration-500">
          <span className="cursor-pointer hover:scale-125 transition-transform">📸</span>
          <span className="cursor-pointer hover:scale-125 transition-transform">💼</span>
          <a href="https://twitter.com" className="cursor-pointer hover:scale-125 transition-transform">🐦</a>
        </div>
        <p className="type-text text-xs mt-6 text-zinc-500">© 2024 Abhishek. Hand-crafted with lots of coffee ☕</p>
      </footer>

    </div>
  );
}

// Helper for App Icon Style
function AppIcon({ color, label, short }) {
  return (
    <div className="flex flex-col items-center gap-1 group cursor-default">
      <div className="app-icon transition-transform group-hover:scale-110" style={{ backgroundColor: color }}>
        <span className="text-2xl z-10 font-bold tracking-tight">{short}</span>
      </div>
      {/* Progress Bar Style */}
      <div className="w-16 h-1.5 bg-zinc-200 rounded-full overflow-hidden mt-1">
        <div className="h-full bg-green-500 w-[80%]"></div>
      </div>
      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">{label}</span>
    </div>
  );
}

function SkillBlock({ color, text, name }) {
  return (
    <div className="flex flex-col items-center gap-1 group cursor-pointer p-1">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white font-bold text-lg shadow-sm border-2 border-zinc-700 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] relative overflow-hidden`}>
        <span className="relative z-10 hand-text">{text}</span>
      </div>
      {/* Loading/Progress Bar Mockup */}
      <div className="w-full h-2 bg-white border border-black rounded-full overflow-hidden mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="h-full bg-green-400 w-[85%] rounded-full border-r border-black"></div>
      </div>
      <span className="text-[10px] hand-text font-bold text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 bg-white px-2 py-0.5 border border-black rounded shadow-sm z-50 pointer-events-none whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

