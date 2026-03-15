"use client";

import { useState, useEffect, useRef } from "react";

interface Command {
  command: string;
  group: string;
  description: string;
  example: string;
  keywords: string[];
}

const GROUP_COLORS: Record<string, { bg: string; text: string }> = {
  EVERYDAY:     { bg: "bg-emerald-50",  text: "text-emerald-700" },
  ARCHITECTURE: { bg: "bg-blue-50",     text: "text-blue-700"    },
  "CI/CD":      { bg: "bg-amber-50",    text: "text-amber-700"   },
  PRO:          { bg: "bg-purple-50",   text: "text-purple-700"  },
};

function search(query: string, commands: Command[]): Command[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return commands
    .filter(
      (c) =>
        c.command.includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.keywords.some((k) => k.includes(q))
    )
    .slice(0, 5);
}

function groupCommands(commands: Command[]): Record<string, Command[]> {
  return commands.reduce<Record<string, Command[]>>((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = [];
    acc[cmd.group].push(cmd);
    return acc;
  }, {});
}

const GROUP_ORDER = ["EVERYDAY", "ARCHITECTURE", "CI/CD", "PRO"];

export default function CommandSearch() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Command[]>([]);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/commands.json")
      .then((r) => r.json())
      .then((data: Command[]) => setCommands(data))
      .catch(() => {/* silently fail if unavailable */});
  }, []);

  useEffect(() => {
    setResults(search(query, commands));
  }, [query, commands]);

  const grouped = groupCommands(commands);
  const showResults = query.trim().length > 0;

  return (
    <section id="commands" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">
          Command Reference
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-5 max-w-xl"
          style={{ textWrap: "balance" }}
        >
          Find the right command for any task
        </h2>
        <p className="text-base text-gray-600 mb-10 leading-relaxed">
          Describe what you want to do and Kodara will find the command.
        </p>

        {/* Search input */}
        <div className="relative mb-8">
          <div
            className={`flex items-center gap-3 border rounded-2xl px-5 py-4 transition-colors ${
              focused
                ? "border-[#0a0a0a] shadow-sm"
                : "border-gray-200 hover:border-gray-400"
            } bg-white`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="flex-shrink-0 text-gray-400"
            >
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="What do you want to do? e.g. 'what breaks if I change this file'"
              className="flex-1 text-base text-[#0a0a0a] placeholder-gray-400 bg-transparent outline-none leading-snug"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                aria-label="Clear search"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Search results */}
        {showResults && (
          <div>
            {results.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-3 opacity-40">
                  <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M21 21L28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p className="text-sm font-medium">No commands found for &ldquo;{query}&rdquo;</p>
                <p className="text-sm mt-1">Try different keywords like &ldquo;change&rdquo;, &ldquo;history&rdquo;, or &ldquo;CI&rdquo;</p>
              </div>
            ) : (
              <div className="space-y-3">
                {results.map((cmd) => (
                  <CommandCard key={cmd.command} cmd={cmd} highlight={query} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* All commands grouped — shown when search is empty */}
        {!showResults && commands.length > 0 && (
          <div className="space-y-10">
            {GROUP_ORDER.map((group) => {
              const cmds = grouped[group];
              if (!cmds) return null;
              const color = GROUP_COLORS[group] ?? { bg: "bg-gray-50", text: "text-gray-700" };
              return (
                <div key={group}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase ${color.bg} ${color.text}`}
                    >
                      {group}
                    </span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    {cmds.map((cmd) => (
                      <CommandCard key={cmd.command} cmd={cmd} highlight="" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

function CommandCard({ cmd, highlight }: { cmd: Command; highlight: string }) {
  const color = GROUP_COLORS[cmd.group] ?? { bg: "bg-gray-50", text: "text-gray-700" };

  function highlightText(text: string, q: string): React.ReactNode {
    if (!q.trim()) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-yellow-100 text-[#0a0a0a] rounded px-0.5 not-italic font-medium">
          {text.slice(idx, idx + q.length)}
        </mark>
        {text.slice(idx + q.length)}
      </>
    );
  }

  return (
    <div className="group border border-gray-200 rounded-2xl p-5 hover:border-gray-400 transition-colors bg-white">
      <div className="flex flex-wrap items-start gap-3 mb-2">
        <code className="text-sm font-semibold font-mono text-[#0a0a0a] bg-[#f7f7f7] px-2.5 py-1 rounded-lg">
          {highlightText(cmd.command, highlight)}
        </code>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase ${color.bg} ${color.text}`}
        >
          {cmd.group}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        {highlightText(cmd.description, highlight)}
      </p>
      <div className="flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-300 flex-shrink-0">
          <rect x="1" y="2" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M3.5 5.5l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <code className="text-xs font-mono text-gray-400">{cmd.example}</code>
      </div>
    </div>
  );
}
