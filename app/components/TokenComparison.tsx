const rows = [
  { task: "How does symbol extraction work?",    before: "136,801 tokens", after: "1,130 tokens", saving: "99.2%", ratio: "121×" },
  { task: "How does storage and indexing work?", before: "136,801 tokens", after: "1,022 tokens", saving: "99.3%", ratio: "134×" },
  { task: "How does search and retrieval work?", before: "136,801 tokens", after: "1,018 tokens", saving: "99.3%", ratio: "134×" },
  { task: "How does AI summarization work?",     before: "136,801 tokens", after: "926 tokens",   saving: "99.3%", ratio: "147×" },
];

export default function TokenComparison() {
  return (
    <section className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-5">
          Real benchmark
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4 max-w-xl" style={{ textWrap: 'balance' }}>
          These are real numbers
        </h2>

        <p className="text-lg text-gray-300 mb-3 max-w-xl leading-relaxed">
          Measured on a real repository: 59 files, 136k tokens to load everything naively.
        </p>
        <p className="text-base text-gray-500 mb-14">
          Codara is not vector search. It works with system structure — architecture, dependencies, module relationships.
        </p>

        {/* Table */}
        <div className="overflow-x-auto mb-14">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="pb-4 text-sm font-semibold text-gray-400 uppercase tracking-wide pr-8">Query</th>
                <th className="pb-4 text-sm font-semibold text-gray-400 uppercase tracking-wide pr-8">Without Codara</th>
                <th className="pb-4 text-sm font-semibold text-gray-400 uppercase tracking-wide pr-8">With Codara</th>
                <th className="pb-4 text-sm font-semibold text-gray-400 uppercase tracking-wide pr-6">Saving</th>
                <th className="pb-4 text-sm font-semibold text-gray-400 uppercase tracking-wide">Ratio</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-800">
                  <td className="py-5 text-base text-gray-200 pr-8">{row.task}</td>
                  <td className="py-5 text-base text-red-400 font-mono pr-8">{row.before}</td>
                  <td className="py-5 text-base text-emerald-400 font-mono pr-8">{row.after}</td>
                  <td className="py-5 pr-6">
                    <span className="text-sm font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-700/40 px-3 py-1 rounded-full">
                      -{row.saving}
                    </span>
                  </td>
                  <td className="py-5">
                    <span className="text-base font-bold text-white">{row.ratio}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: "99.2%",  label: "Average token reduction" },
            { value: "~1,100", label: "Tokens per query (avg)" },
            { value: "< 2ms",  label: "Context assembly time" },
          ].map((stat) => (
            <div key={stat.label} className="border border-gray-700 rounded-2xl p-6 text-center">
              <p className="text-4xl font-semibold text-white mb-2">{stat.value}</p>
              <p className="text-base text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-8 text-center">
          Benchmark on jcodemunch-mcp repository · 59 source files · 136,801 tokens naive load · measured locally
        </p>

      </div>
    </section>
  );
}
