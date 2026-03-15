const steps = [
  {
    number: "01",
    title: "Structural Memory",
    description:
      "Codara scans your codebase and builds an architectural graph — modules, dependencies, services, data flows. AI starts understanding the system structure, not just file text.",
  },
  {
    number: "02",
    title: "Semantic Memory",
    description:
      "Every module gets a semantic summary. Instead of hundreds of lines of code, AI receives: module name, responsibilities, dependencies. Context drops dramatically.",
    example: {
      module: "AuthService",
      desc: "Handles authentication logic",
      deps: "UserRepo, TokenService",
    },
  },
  {
    number: "03",
    title: "Context Engine",
    description:
      "When a developer asks a question, Codara selects only the relevant modules, traverses the dependency graph, and assembles the minimal context. Nothing irrelevant.",
  },
  {
    number: "04",
    title: "Incremental Memory",
    description:
      "When a file changes, Codara updates only that file — reparses the AST, updates graph edges, regenerates its summary. The rest of the project stays untouched.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">
          How it works
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-16 max-w-xl" style={{ textWrap: 'balance' }}>
          A memory layer built for architecture, not text
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <p className="text-sm font-mono font-medium text-gray-400 mb-4">{step.number}</p>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">{step.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">{step.description}</p>

              {step.example && (
                <div className="bg-[#f7f7f7] border border-gray-200 rounded-xl p-4 font-mono text-sm space-y-1.5">
                  <p className="text-gray-600">
                    <span className="text-[#0a0a0a] font-semibold">Module:</span> {step.example.module}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-[#0a0a0a] font-semibold">Handles:</span> {step.example.desc}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-[#0a0a0a] font-semibold">Depends on:</span> {step.example.deps}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
