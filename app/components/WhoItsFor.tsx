const audiences = [
  {
    title: "AI-first developers",
    description: "Using AI coding tools every day. You need AI that actually understands your project — not just the file you opened.",
  },
  {
    title: "Startups building with AI",
    description: "Moving fast with large repos and LLM-assisted development. Token costs add up. Architecture breaks down. Codara fixes both.",
  },
  {
    title: "Engineering teams",
    description: "Working on large codebases with multiple developers. Keep AI aligned with your architecture across the whole team.",
  },
  {
    title: "Companies reducing AI costs",
    description: "Every query burns tokens. Codara reduces them by 99%. You pay for insights — not for rereading code that hasn't changed.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">
          Who it&apos;s for
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-6 max-w-xl">
          Built for developers who use AI every day
        </h2>

        <p className="text-lg text-gray-700 mb-14 max-w-2xl leading-relaxed">
          If you use AI to write or modify code — Codara will make it smarter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {audiences.map((a) => (
            <div key={a.title} className="bg-[#f7f7f7] rounded-2xl p-7">
              <h3 className="text-base font-semibold text-[#0a0a0a] mb-2">{a.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
