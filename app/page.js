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

      <div className="w-full max-w-[1600px] min-h-screen paper-sheet mx-auto p-12 lg:p-24 text-zinc-900 relative shadow-2xl animate-land duration-1000 my-12 bg-[#fdfbf7]">

        {/* OPEN HEADER - Editorial Style */}
        <header className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-end mb-32 relative">

          {/* Left: Name & Intro */}
          <div className="flex-1 relative z-10">
            <div className="relative inline-block">
              <h1 className="editorial-text text-8xl md:text-[10rem] text-black leading-[0.85] mb-6">
                Abhi<br />shek
              </h1>
              {/* Artistic Scribble */}
              <svg className="absolute -top-10 -left-10 w-32 h-32 opacity-20 text-yellow-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <path d="M20,50 Q50,0 80,50 T140,50" strokeWidth="2" />
              </svg>
            </div>

            <p className="text-xl md:text-2xl font-sans font-light max-w-xl leading-relaxed text-zinc-600 mt-4">
              Creating <span className="highlighter-yellow font-medium text-black">digital experiences</span> that feel human. <br />
              Motion Graphics. UI Design. Visual Storytelling.
            </p>

            <div className="mt-12 flex items-center gap-8">
              <a href="#contact" className="group flex items-center gap-3 text-lg font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-pink-600 hover:border-pink-600 transition-all">
                Get in Touch <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
              <a href="#projects" className="text-zinc-400 hover:text-black transition-colors font-mono text-sm underline decoration-dotted underline-offset-4">
                View Selected Works
              </a>
            </div>
          </div>

          {/* Right: Modern Portrait */}
          <div className="relative shrink-0 w-full md:w-[400px]">
            <div className="aspect-[4/5] bg-zinc-100 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out shadow-lg group">
              {/* Photo Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-200">
                <span className="text-6xl opacity-20">👤</span>
              </div>

              {/* Tape Accent */}
              <div className="tape-minimal w-32 h-8 absolute -top-3 left-1/2 -translate-x-1/2 z-10"></div>
            </div>
            <div className="mt-4 flex justify-between font-mono text-xs text-zinc-400 uppercase tracking-widest">
              <span>Based in Pratapgarh</span>
              <span>Exp. 5 Years</span>
            </div>
          </div>
        </header>


        {/* WIDE GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24 gap-x-12 relative">

          {/* SPINDLE - Vertical Line Element */}
          <div className="hidden lg:block absolute top-0 left-[33%] w-px h-full bg-zinc-200 -z-0"></div>

          {/* LEFT SIDE: Context (Experience & Skills) */}
          <div className="lg:col-span-4 space-y-24 relative z-10">

            {/* Skills Minimal */}
            <section>
              <h2 className="editorial-text text-3xl mb-8 opacity-40">Toolbox</h2>
              <div className="grid grid-cols-2 gap-4">
                {['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'Figma', 'Blender'].map(s => (
                  <div key={s} className="minimal-card p-4 flex items-center justify-center text-center font-bold text-sm bg-white border border-zinc-100 h-24 hover:bg-zinc-50">
                    {s}
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Minimal */}
            <section>
              <h2 className="editorial-text text-3xl mb-8 opacity-40">Timeline</h2>
              <div className="space-y-12 border-l border-black pl-8 ml-4">
                <div className="relative">
                  <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-black border-4 border-white"></div>
                  <span className="font-mono text-xs text-zinc-400 mb-2 block">2022 — Present</span>
                  <h3 className="text-xl font-bold">Motion Designer</h3>
                  <p className="text-zinc-500 text-sm">Alpha Computer Institute</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-white border-4 border-zinc-300"></div>
                  <span className="font-mono text-xs text-zinc-400 mb-2 block">2022</span>
                  <h3 className="text-xl font-bold">Freelance Animator</h3>
                  <p className="text-zinc-500 text-sm">Remote</p>
                </div>
              </div>
            </section>

            {/* Note */}
            <div className="p-8 bg-yellow-50 rotate-1 border border-yellow-100 rounded-sm">
              <p className="hand-text text-lg text-zinc-600">
                I believe design is intelligence made visible.
              </p>
            </div>

          </div>


          {/* RIGHT SIDE: The Gallery (Projects) */}
          <div className="lg:col-span-8 space-y-32">

            {/* Project 1 - Hero */}
            <div className="group cursor-pointer">
              <h3 className="editorial-text text-5xl mb-4 group-hover:text-pink-600 transition-colors">Brand Motion Reel</h3>
              <div className="project-minimal aspect-video bg-zinc-900 w-full mb-4 shadow-2xl relative">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xl font-mono">VIDEO / REEL</div>
              </div>
              <div className="flex justify-between items-start border-t border-zinc-200 pt-4">
                <p className="text-lg text-zinc-600 max-w-md">Comprehensive motion language and kinetic typography system for a fintech startup.</p>
                <span className="font-mono text-xs border border-black px-2 py-1 rounded-full uppercase">Case Study</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <h3 className="editorial-text text-5xl mb-4 group-hover:text-pink-600 transition-colors">Explain It Simple</h3>
              <div className="project-minimal aspect-video bg-zinc-800 w-full mb-4 shadow-xl relative">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xl font-mono">2D ANIMATION</div>
              </div>
              <div className="flex justify-between items-start border-t border-zinc-200 pt-4">
                <p className="text-lg text-zinc-600 max-w-md">Educational series explaining complex crypto concepts through friendly 2D characters.</p>
                <span className="font-mono text-xs border border-black px-2 py-1 rounded-full uppercase">Watch</span>
              </div>
            </div>

            {/* Expertise Grid */}
            <section>
              <h2 className="editorial-text text-8xl opacity-10 mb-8 select-none">Expertise</h2>
              <div className="flex flex-wrap gap-4">
                {['UI/UX Design', 'Motion Graphics', 'Video Editing', 'Brand Identity', 'Social Media'].map(tag => (
                  <span key={tag} className="text-2xl md:text-4xl font-light hover:font-serif transition-all cursor-default hover:text-pink-600">
                    {tag} <span className="opacity-20 mx-2">/</span>
                  </span>
                ))}
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

