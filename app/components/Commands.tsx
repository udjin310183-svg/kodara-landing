const groups = [
  {
    label: "Core",
    color: "bg-emerald-400",
    commands: [
      { name: "kodara init",       desc: "Scan project, build memory" },
      { name: 'kodara ask "..."',  desc: "Query project memory" },
      { name: "kodara context",    desc: "Generate ARCHITECTURE.md" },
      { name: "kodara status",     desc: "Index health & stats" },
    ],
  },
  {
    label: "Intelligence",
    color: "bg-orange-400",
    commands: [
      { name: "kodara impact <file>",   desc: "What breaks if I change this?" },
      { name: "kodara onboard",         desc: "Reading guide for new devs" },
      { name: "kodara review",          desc: "Impact of uncommitted changes" },
      { name: "kodara diff <base>",     desc: "Changes vs branch or commit" },
    ],
  },
  {
    label: "Memory",
    color: "bg-amber-400",
    commands: [
      { name: "kodara history <file>",  desc: "Git evolution & authors" },
      { name: "kodara note add ...",    desc: "Annotate files with WHY" },
      { name: "kodara snapshot",        desc: "Save memory state" },
      { name: "kodara stats",           desc: "Token savings report" },
    ],
  },
];

export default function Commands() {
  return (
    <section id="commands" className="py-28 px-6 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">
          CLI
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-16">
          Every command<br />you need
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.label} className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-sm ${g.color}`} />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{g.label}</span>
              </div>
              <div className="space-y-4">
                {g.commands.map((c) => (
                  <div key={c.name} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-mono font-semibold text-[#0a0a0a]">{c.name}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-gray-400">
          Full reference →{" "}
          <a href="/docs" className="text-[#0a0a0a] underline underline-offset-2 hover:no-underline">
            docs
          </a>
        </p>

      </div>
    </section>
  );
}
