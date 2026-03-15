export default function Hero() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-sm font-medium text-gray-600 tracking-wide">Early access — join the waitlist</span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-center text-6xl sm:text-7xl lg:text-[88px] font-semibold tracking-tight leading-[1.04] text-[#0a0a0a] mb-8"
          style={{ textWrap: "balance" }}
        >
          AI that actually<br />knows your codebase
        </h1>

        {/* Subheadline */}
        <p className="text-center text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
          Every AI request rereads your entire project from scratch.<br className="hidden sm:block" />
          Codara builds architectural memory — and sends only what matters.
        </p>

        {/* Visual proof — token comparison */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <div className="flex flex-col items-center bg-red-50 border border-red-200 rounded-2xl px-10 py-6 min-w-[180px]">
            <span className="text-4xl font-bold text-red-500 font-mono tabular-nums">136k</span>
            <span className="text-sm font-medium text-red-400 mt-1.5">tokens without Codara</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <div className="hidden sm:block w-8 h-px bg-gray-300" />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-400 rotate-90 sm:rotate-0">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="hidden sm:block w-8 h-px bg-gray-300" />
          </div>

          <div className="flex flex-col items-center bg-emerald-50 border border-emerald-200 rounded-2xl px-10 py-6 min-w-[180px]">
            <span className="text-4xl font-bold text-emerald-600 font-mono tabular-nums">~1,100</span>
            <span className="text-sm font-medium text-emerald-500 mt-1.5">tokens with Codara</span>
          </div>
        </div>

        {/* Proof line */}
        <p className="text-center text-base text-gray-500 mb-10">
          <span className="font-semibold text-[#0a0a0a]">99% fewer tokens.</span>{" "}
          Up to 147× compression. Measured on a real repository — 59 files.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20">
          <a
            href="#cta"
            className="w-full sm:w-auto text-base font-semibold bg-[#0a0a0a] text-white px-9 py-4 rounded-full hover:bg-gray-800 transition-colors text-center"
          >
            Join the waitlist
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto text-base font-medium text-gray-700 px-9 py-4 rounded-full border border-gray-300 hover:border-gray-600 hover:text-[#0a0a0a] transition-colors text-center"
          >
            See how it works
          </a>
        </div>

        {/* Demo video */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glow */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent pointer-events-none" />

          {/* Outer frame */}
          <div className="relative rounded-2xl border border-gray-200 bg-[#0a0a0a] overflow-hidden shadow-2xl shadow-black/10">

            {/* Fake browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="flex-1 mx-4">
                <div className="mx-auto w-48 h-5 rounded-md bg-white/5 flex items-center justify-center">
                  <span className="text-[10px] text-white/30 font-mono tracking-wide">kodara — flask demo</span>
                </div>
              </div>
            </div>

            {/* Video */}
            <video
              src="/Запись экрана 3 (online-video-cutter.com) (1).mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
