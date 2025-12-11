import XPWindow from "./components/XPWindow";
import ProfileHeader from "./components/ProfileHeader";
import HandwrittenNote from "./components/HandwrittenNote";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import ExpertiseCollage from "./components/ExpertiseCollage";
import SoftwareSkills from "./components/SoftwareSkills";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden relative font-sans select-none">
      {/* Windows XP Bliss Wallpaper */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('/textures/bliss.png')`,
        }}
      ></div>

      {/* Desktop Icons Grid (Just for vibes) */}
      <div className="absolute top-4 left-4 z-10 grid gap-6 pointer-events-none md:pointer-events-auto">
        <div className="flex flex-col items-center gap-1 group w-20 cursor-pointer">
          <div className="w-10 h-10 bg-blue-500 border border-white/50 shadow-md rounded flex items-center justify-center text-white font-bold text-xs">My PC</div>
          <span className="text-white text-xs drop-shadow-[0_1px_1px_rgba(0,0,0,1)] bg-[#0055ea]/0 px-1 rounded group-hover:bg-[#0055ea]/50">My Computer</span>
        </div>
        <div className="flex flex-col items-center gap-1 group w-20 cursor-pointer">
          <div className="w-10 h-10 bg-yellow-400 border border-white/50 shadow-md rounded flex items-center justify-center text-white font-bold text-xs skew-x-[-10deg]">Docs</div>
          <span className="text-white text-xs drop-shadow-[0_1px_1px_rgba(0,0,0,1)] bg-[#0055ea]/0 px-1 rounded group-hover:bg-[#0055ea]/50">My Documents</span>
        </div>
        <div className="flex flex-col items-center gap-1 group w-20 cursor-pointer">
          <div className="w-10 h-10 bg-white border border-gray-400 shadow-md flex items-center justify-center text-black font-bold text-xs rotate-3">
            <div className="w-1 h-3 bg-red-500 absolute rotate-45"></div>
          </div>
          <span className="text-white text-xs drop-shadow-[0_1px_1px_rgba(0,0,0,1)] bg-[#0055ea]/0 px-1 rounded group-hover:bg-[#0055ea]/50">Recycle Bin</span>
        </div>
      </div>

      {/* Main Window */}
      <div className="absolute inset-4 md:inset-12 z-20 flex justify-center items-center">
        <XPWindow title="Aravindh_Portfolio.pdf - Microsoft Internet Explorer" className="w-full h-full max-w-6xl shadow-2xl">
          {/* Scrollable Content Area */}
          <div className="w-full h-full overflow-y-auto bg-[#808080] p-4 md:p-8 scroll-smooth">

            {/* The "Paper" Resume Page Container */}
            <div className="max-w-4xl mx-auto bg-[#fdfbf7] min-h-[150vh] shadow-xl relative overflow-hidden text-[#1a1a1a] mb-8">
              {/* Paper Texture Overlay */}
              <div
                className="absolute inset-0 opacity-60 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: `url('/textures/paper.png')`, backgroundSize: '600px' }}
              ></div>
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              </div>

              <div className="relative z-10 p-6 md:p-16 space-y-24">

                {/* Section 1: Header */}
                <section id="header" className="relative scroll-mt-8">
                  <ProfileHeader />
                  <HandwrittenNote />
                </section>

                {/* Section 2: Experience */}
                <section id="experience" className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 scroll-mt-20">
                  <div className="relative">
                    <h2 className="text-3xl font-bold bg-yellow-300 inline-block px-2 transform -rotate-1 border-b-2 border-black sticky top-4">Work<br />Experiences</h2>
                  </div>
                  <WorkExperience />
                </section>

                {/* Section 3: Expertsie */}
                <section id="expertise" className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 scroll-mt-20">
                  <div className="relative">
                    <h2 className="text-3xl font-bold bg-yellow-300 inline-block px-2 transform rotate-1 border-b-2 border-black sticky top-4">Area of<br />Expertise</h2>
                  </div>
                  <div className="min-h-[300px]">
                    <ExpertiseCollage />
                  </div>
                </section>

                {/* Section 4: Skills */}
                <section id="skills" className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 scroll-mt-20">
                  <div className="relative">
                    <h2 className="text-3xl font-bold bg-yellow-300 inline-block px-2 transform -rotate-1 border-b-2 border-black sticky top-4">Software<br />Skills</h2>
                  </div>
                  <SoftwareSkills />
                </section>

                {/* Section 5: Education */}
                <section id="education" className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 scroll-mt-20">
                  <div className="relative">
                    <h2 className="text-3xl font-bold bg-yellow-300 inline-block px-2 transform rotate-1 border-b-2 border-black sticky top-4">Education</h2>
                  </div>
                  <Education />
                </section>

              </div>
            </div>

            <div className="text-center text-white/50 text-xs pb-4 font-sans drop-shadow-md">
              Designed with ❤️ by Antigravity in React & Tailwind
            </div>

          </div>
        </XPWindow>
      </div>

    </main>
  );
}
