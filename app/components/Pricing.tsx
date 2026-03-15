export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">
          Pricing
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-16">
          Simple pricing.<br />Immediate ROI.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Free */}
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col">
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500 mb-3">Free</p>
              <p className="text-4xl font-bold tracking-tight text-[#0a0a0a]">$0</p>
              <p className="text-sm text-gray-400 mt-1">forever</p>
            </div>
            <div className="h-px bg-gray-100 mb-4" />
            <ul className="space-y-2.5 flex-1">
              {[
                "Up to 200 files per project",
                "All core commands",
                "Local storage only",
                "Unlimited queries",
                "Local snapshots",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-sm bg-emerald-400 flex-shrink-0 mt-1" />
                  {f}
                </li>
              ))}
              <li className="flex items-start gap-2.5 bg-emerald-50 rounded-xl p-3 mt-2">
                <span className="w-2 h-2 rounded-sm bg-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-[#0a0a0a]">kodara stats — free bonus</p>
                  <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wider font-mono">See your exact token & money savings</p>
                </div>
              </li>
            </ul>
            <a
              href="https://tally.so/r/5BkybP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full text-center text-sm font-semibold border border-[#0a0a0a] text-[#0a0a0a] py-3 rounded-full hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              Start Free
            </a>
          </div>

          {/* Pro */}
          <div className="border border-[#0a0a0a] rounded-2xl p-6 flex flex-col bg-[#0a0a0a]">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-400">Pro</p>
                <div className="flex gap-2">
                  <span className="text-xs font-mono bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full">Most Popular</span>
                  <span className="text-xs font-mono bg-orange-400/20 text-orange-300 px-2 py-0.5 rounded-full">Soon</span>
                </div>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white">$19</p>
              <p className="text-sm text-gray-500 mt-1">per month · 1 developer</p>
            </div>
            <div className="h-px bg-white/10 mb-4" />
            <ul className="space-y-2.5 flex-1">
              {[
                "Everything in Free",
                "Unlimited project size",
                "Cloud backup of .kodara/",
                "Full snapshot history",
                "ROI: saves $147–$295/month avg",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <span className="w-2 h-2 rounded-sm bg-emerald-400 flex-shrink-0 mt-1" />
                  {f}
                </li>
              ))}
              <li className="flex items-start gap-2.5 bg-white/5 rounded-xl p-3 mt-2">
                <span className="w-2 h-2 rounded-sm bg-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-white">$20 plan performs like $100.</p>
                  <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider font-mono">Every month.</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 w-full text-center text-sm font-semibold border border-white/20 text-white/40 py-3 rounded-full cursor-not-allowed">
              Coming Soon
            </div>
          </div>

          {/* Team */}
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-500">Team</p>
                <span className="text-xs font-mono bg-orange-50 text-orange-400 border border-orange-200 px-2 py-0.5 rounded-full">Soon</span>
              </div>
              <p className="text-4xl font-bold tracking-tight text-[#0a0a0a]">$25</p>
              <p className="text-sm text-gray-400 mt-1">per user / month · 3–20 devs</p>
            </div>
            <div className="h-px bg-gray-100 mb-4" />
            <ul className="space-y-2.5 flex-1">
              {[
                "Everything in Pro",
                "Shared memory & notes",
                "Web dashboard",
                "Team onboarding",
                "10 devs → saves $6,385/month",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-sm bg-emerald-400 flex-shrink-0 mt-1" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 w-full text-center text-sm font-semibold border border-gray-200 text-gray-300 py-3 rounded-full cursor-not-allowed">
              Coming Soon
            </div>
          </div>

          {/* Enterprise */}
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-500">Enterprise</p>
                <span className="text-xs font-mono bg-orange-50 text-orange-400 border border-orange-200 px-2 py-0.5 rounded-full">Soon</span>
              </div>
              <p className="text-3xl font-bold tracking-tight text-[#0a0a0a] pt-1">Custom</p>
              <p className="text-sm text-gray-400 mt-1">annual contract</p>
            </div>
            <div className="h-px bg-gray-100 mb-4" />
            <ul className="space-y-2.5 flex-1">
              {[
                "Everything in Team",
                "20+ developers",
                "SSO / SAML",
                "On-premise deployment",
                "SLA + dedicated support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-sm bg-emerald-400 flex-shrink-0 mt-1" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 w-full text-center text-sm font-semibold border border-gray-200 text-gray-300 py-3 rounded-full cursor-not-allowed">
              Coming Soon
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
