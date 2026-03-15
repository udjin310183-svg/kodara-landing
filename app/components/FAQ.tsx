"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How is Codara different from vector search / RAG?",
    a: "Vector search finds text snippets that are semantically similar to your query. Codara understands architecture — module responsibilities, dependency graphs, and code relationships. It selects context structurally, not by text similarity. The result is far more precise and 99% smaller.",
  },
  {
    q: "What languages does Codara support?",
    a: "Python, JavaScript, TypeScript, Go, Rust, Java, C#, and PHP. More languages are being added. The core engine uses AST parsing, so support is deep — not regex-based.",
  },
  {
    q: "Does Codara send my code to any server?",
    a: "No. Codara runs entirely on your machine. The index lives at ~/.codara/ on your local disk. The only optional network call is if you enable AI-powered summaries via the Anthropic API — and that's opt-in.",
  },
  {
    q: "How does it integrate with my existing AI tools?",
    a: "Codara is a CLI tool. You run `codara ask` before feeding context to any LLM — Claude, GPT-4, Gemini, whatever you use. It outputs a compact context string ready to paste or pipe into any workflow.",
  },
  {
    q: "What happens when I change a file?",
    a: "Only that file is re-indexed. Codara reparses its AST, updates the graph edges, and regenerates its summary. Everything else stays untouched. No full re-scans.",
  },
  {
    q: "How long does indexing take?",
    a: "A few seconds for most projects. A 60-file repo indexes in under 3 seconds on a modern machine. Subsequent updates (single file changes) are under 200ms.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 bg-[#f7f7f7]">
      <div className="max-w-3xl mx-auto">

        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">
          FAQ
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-14 max-w-xl" style={{ textWrap: "balance" }}>
          Common questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-7 py-5 flex items-start justify-between gap-4 group"
              >
                <span className="text-base font-semibold text-[#0a0a0a] leading-snug">{faq.q}</span>
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 group-hover:border-gray-500 transition-colors">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                  >
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-base text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
