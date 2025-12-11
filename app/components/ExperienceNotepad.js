import XPWindow from './XPWindow';

export default function ExperienceNotepad() {
    return (
        <XPWindow title="Work Experiences.txt - Notepad" icon="notepad" className="w-full max-w-xl bg-white shadow-xl">
            <div className="font-mono text-sm text-black whitespace-pre-wrap leading-6 p-1">
                <p className="mb-6 font-bold text-center border-b border-gray-300 pb-2">*** WORK EXPERIENCE LOG ***</p>

                <div className="mb-8">
                    <p className="font-bold text-blue-800">[Sep 2022 - Present] Insnap Technologies Pvt Ltd</p>
                    <p className="pl-4 text-gray-700">&gt; Role: Motion Graphic & Ui Designer (Full-time)</p>
                    <p className="pl-4 text-gray-500 italic">@ Bengaluru, Karnataka, India</p>
                    <p className="pl-4 mt-1 text-gray-800">- Creating motion graphics from scratch.</p>
                    <p className="pl-4 text-gray-800">- Designing UI animations and assets.</p>
                </div>

                <div className="mb-8">
                    <p className="font-bold text-blue-800">[Jun 2022 - Aug 2022] RDS Digital</p>
                    <p className="pl-4 text-gray-700">&gt; Role: Motion Graphic & Ui Designer (Full-time)</p>
                    <p className="pl-4 text-gray-500 italic">@ Bengaluru, Karnataka, India</p>
                </div>

                <div className="mb-8">
                    <p className="font-bold text-blue-800">[Jan 2022 - May 2022] Everything Design</p>
                    <p className="pl-4 text-gray-700">&gt; Role: Motion Graphic & Ui Designer (Internship)</p>
                    <p className="pl-4 text-gray-500 italic">@ Bengaluru, Karnataka, India</p>
                </div>

                <p className="text-gray-400 text-xs mt-10">--- End of file ---</p>
            </div>
        </XPWindow>
    );
}
