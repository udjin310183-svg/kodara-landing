"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate submission — replace with real API call
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section id="cta" className="py-28 px-6 bg-[#f7f7f7]">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#0a0a0a] mb-5 leading-[1.1]">
          Stop wasting tokens.
          <br />Let AI remember your code.
        </h2>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Codara is in early access. Join the waitlist and be the first to try it.
        </p>

        {/* CLI preview block */}
        <div className="bg-[#0a0a0a] rounded-2xl p-6 mb-10 text-left max-w-md mx-auto">
          <p className="text-xs text-gray-400 font-semibold mb-3 tracking-widest uppercase">Quick Start</p>
          <div className="space-y-2 font-mono text-sm">
            <p>
              <span className="text-gray-500">$</span>
              <span className="text-white ml-2">pip install codara</span>
            </p>
            <p>
              <span className="text-gray-500">$</span>
              <span className="text-emerald-400 ml-2">codara index ./my-project</span>
            </p>
            <p>
              <span className="text-gray-500">$</span>
              <span className="text-blue-400 ml-2">codara ask &quot;How does auth work?&quot;</span>
            </p>
          </div>
        </div>

        {/* Waitlist form */}
        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl px-8 py-5">
            <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <p className="text-base font-semibold text-emerald-800">You&apos;re on the list — we&apos;ll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-base px-5 py-4 rounded-full border border-gray-300 bg-white text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="text-base font-semibold bg-[#0a0a0a] text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {loading ? "Joining…" : "Join waitlist"}
            </button>
          </form>
        )}

        <p className="text-sm text-gray-400 mt-5">No spam. Early access only.</p>

      </div>
    </section>
  );
}
