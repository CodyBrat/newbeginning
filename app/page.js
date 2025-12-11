import TerminalProfile from "./components/TerminalProfile";
import ExperienceNotepad from "./components/ExperienceNotepad";
import SkillsExplorer from "./components/SkillsExplorer";
import XPTaskbar from "./components/XPTaskbar";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#225AD7] font-sans selection:bg-[#0055EA] selection:text-white">
      {/* Bliss Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url('/textures/bliss.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Desktop Grid Container */}
      <div className="relative z-10 w-full min-h-[calc(100vh-32px)] p-4 pb-20 md:p-10 flex flex-col gap-8 md:gap-12">

        {/* Row 1: Profile (Terminal) - positioned slightly random or centered */}
        <div className="flex justify-center md:justify-start md:ml-20">
          <TerminalProfile />
        </div>

        {/* Row 2: Experience (Notepad) - Offset */}
        <div className="flex justify-center md:justify-end md:mr-32">
          <ExperienceNotepad />
        </div>

        {/* Row 3: Skills (Explorer) - Offset again */}
        <div className="flex justify-center md:justify-start md:ml-10">
          <SkillsExplorer />
        </div>

        {/* Mobile-only spacer for taskbar */}
        <div className="h-12 md:hidden"></div>
      </div>

      <XPTaskbar />
    </main>
  );
}
