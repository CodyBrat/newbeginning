import XPWindow from './XPWindow';

export default function TerminalProfile() {
    return (
        <XPWindow title="cmd.exe" icon="console" className="w-full max-w-2xl mx-auto mb-8 bg-black text-[#0f0] font-mono shadow-2xl">
            <div className="p-2 text-sm md:text-base selection:bg-white selection:text-black leading-relaxed font-mono">
                <p>Microsoft Windows XP [Version 5.1.2600]</p>
                <p className="mb-4">(C) Copyright 1985-2001 Microsoft Corp.</p>

                <p className="mb-2">C:\Users\Aravindh&gt; <span className="text-white">whoami</span></p>
                <div className="pl-4 mb-4 text-[#cccccc]">
                    <h1 className="text-4xl font-bold font-sans tracking-tight mb-2 text-white/90 uppercase text-shadow">Aravindh.A</h1>
                    <p className="mb-2">Creative Motion Graphics & UI Designer</p>
                    <div className="flex flex-col gap-1 text-xs md:text-sm opacity-80">
                        <p>DOB: 23.01.2001</p>
                        <p>LOC: Thanjavur, India</p>
                        <p>LANG: Tamil (Native), English (Beginner)</p>
                    </div>
                </div>

                <p className="mb-2">C:\Users\Aravindh&gt; <span className="text-white">cat contact_info.json</span></p>
                <div className="pl-4 mb-4 text-[#ffff00]">
                    <p>&#123;</p>
                    <p className="pl-4">"phone": "+91 7904692069",</p>
                    <p className="pl-4">"email": "yuviz0403@gmail.com",</p>
                    <p className="pl-4">"linkedin": "linkedin.com/in/aravindh-a",</p>
                    <p className="pl-4">"behance": "behance.net/Aravindh_A"</p>
                    <p>&#125;</p>
                </div>

                <p className="mb-2">C:\Users\Aravindh&gt; <span className="text-white">display_qr.exe</span></p>
                <div className="pl-4 mb-4">
                    <div className="w-24 h-24 bg-white p-1">
                        <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Portfolio')] bg-cover image-pixelated"></div>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <span>C:\Users\Aravindh&gt;</span>
                    <span className="w-2 h-4 bg-[#0f0] animate-pulse"></span>
                </div>
            </div>
        </XPWindow>
    );
}
