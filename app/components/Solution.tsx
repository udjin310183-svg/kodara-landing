export default function Solution() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">
          The Solution
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-5 max-w-2xl" style={{ textWrap: 'balance' }}>
          Codara turns your codebase into structured AI memory
        </h2>

        <p className="text-lg text-gray-700 mb-16 max-w-2xl leading-relaxed">
          Instead of sending the entire repository to the AI, Codara analyzes
          your project architecture, indexes code relationships, and sends only
          what the model actually needs.
        </p>

        {/* Flow diagram */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-16">

          {/* Before */}
          <div className="flex-1 max-w-xs mx-auto sm:mx-0">
            <div className="bg-[#f7f7f7] border border-gray-200 rounded-2xl p-6 text-center h-full">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Without Codara</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 border border-gray-200">Developer query</div>
                <div className="text-gray-400 text-lg py-1">↓</div>
                <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2.5">
                  <p className="text-sm font-medium text-red-600">Entire repository</p>
                  <p className="text-xs font-semibold text-red-500 mt-0.5">136k+ tokens</p>
                </div>
                <div className="text-gray-400 text-lg py-1">↓</div>
                <div className="bg-white rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 border border-gray-200">LLM response</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 text-2xl text-gray-300 font-light select-none">
            →
          </div>

          {/* After */}
          <div className="flex-1 max-w-xs mx-auto sm:mx-0">
            <div className="bg-[#0a0a0a] rounded-2xl p-6 text-center h-full">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">With Codara</p>
              <div className="space-y-2">
                <div className="bg-white/10 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-200">Developer query</div>
                <div className="text-gray-600 text-lg py-1">↓</div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5">
                  <p className="text-sm font-semibold text-white">Codara Context Engine</p>
                  <p className="text-xs text-gray-400 mt-0.5">architecture · dependencies · summaries</p>
                </div>
                <div className="text-gray-600 text-lg py-1">↓</div>
                <div className="bg-emerald-950/60 border border-emerald-700/40 rounded-lg px-3 py-2.5">
                  <p className="text-sm font-medium text-emerald-300">Minimal context</p>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">~1,100 tokens</p>
                </div>
                <div className="text-gray-600 text-lg py-1">↓</div>
                <div className="bg-white/10 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-200">LLM response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Result callout */}
        <div className="bg-[#f7f7f7] border border-gray-200 rounded-2xl p-8 text-center">
          <p className="text-base text-gray-600 mb-3">The AI receives exactly what it needs — nothing more.</p>
          <p className="text-5xl font-semibold text-[#0a0a0a]">up to 147×</p>
          <p className="text-base text-gray-600 mt-2">fewer tokens. Measured on a real repository.</p>
        </div>

      </div>
    </section>
  );
}
