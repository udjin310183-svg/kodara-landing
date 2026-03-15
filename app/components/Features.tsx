const features = [
  {
    title: "Context Compression",
    description: "Reduces context from hundreds of thousands of tokens to a minimal working set. AI gets exactly what it needs.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Architecture Awareness",
    description: "AI suggestions respect the existing project structure. No more duplicate logic or broken module boundaries.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="7" y="12" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 8v2.5c0 .83.67 1.5 1.5 1.5H10M15 8v2.5c0 .83-.67 1.5-1.5 1.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Architecture Lens",
    description: "Visualize your project as an interactive dependency graph. Spot architectural hotspots before they become problems.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="3" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="3" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4.5 4.5L7.5 7.5M12.5 7.5L15.5 4.5M4.5 15.5L7.5 12.5M12.5 12.5L15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Incremental Memory",
    description: "Only changed files are re-indexed. Instant memory updates. No full re-scans. Live awareness of your project.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 4v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3.5 9A6.5 6.5 0 1 1 5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3.5 5v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Context Shield",
    description: "Protects AI workflows from unnecessary context loading. Token waste is eliminated at the source.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L4 5v5c0 3.55 2.6 6.74 6 7.5C13.4 16.74 16 13.55 16 10V5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "CLI + API",
    description: "Simple commands: codara index, codara ask, codara graph. Plus a local REST API for integration with any tool.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 9l2.5 2L6 13M10.5 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">
          Features
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-16 max-w-xl">
          Everything AI needs to understand your project
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-[#f7f7f7] flex items-center justify-center text-gray-600 mb-5 group-hover:bg-[#0a0a0a] group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-[#0a0a0a] mb-2">{f.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
