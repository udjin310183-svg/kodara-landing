const problems = [
  { label: "Rereads files", desc: "Every request loads large parts of the repo from scratch" },
  { label: "Wastes tokens", desc: "Hundreds of thousands of tokens on context that didn't change" },
  { label: "Loses architecture", desc: "AI forgets module relationships between sessions" },
  { label: "Duplicates code", desc: "Without memory, AI suggests conflicting or repeated logic" },
];

export default function Problem() {
  return (
    <section className="py-28 px-6 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">
          The Problem
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-5 max-w-xl" style={{ textWrap: 'balance' }}>
          AI coding tools have a context problem
        </h2>

        <p className="text-lg text-gray-700 mb-14 max-w-2xl leading-relaxed">
          Every time you ask AI to modify your project, it rereads everything.
          No memory. No architecture awareness. Just brute-force context loading.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((p) => (
            <div
              key={p.label}
              className="bg-white border border-gray-200 rounded-2xl p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-4 h-4 rounded-full border-2 border-red-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#0a0a0a] mb-1.5 text-base">{p.label}</p>
                  <p className="text-base text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-base text-gray-700 leading-relaxed">
            <span className="font-semibold text-[#0a0a0a]">The result:</span>{" "}
            Developers spend hundreds of dollars per month on tokens that should never have been used —
            while AI still breaks the architecture it was never taught to understand.
          </p>
        </div>

      </div>
    </section>
  );
}
