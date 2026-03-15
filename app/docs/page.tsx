import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kodara Docs — Memory Layer for AI Development",
  description:
    "Complete documentation for Kodara CLI. Install, configure, and use all commands — Free, Pro, Team, and Enterprise.",
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 h-16 flex items-center justify-between px-6">
        <Link href="/" className="text-base font-semibold tracking-tight text-[#0a0a0a]">
          Kodara
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors hidden sm:block">
            Home
          </Link>
          <Link href="/#pricing" className="text-sm font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors hidden sm:block">
            Pricing
          </Link>
          <Link
            href="https://tally.so/r/5BkybP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-[#0a0a0a] text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Get started
          </Link>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-100 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto py-8">
          <nav className="px-6 space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">Getting Started</p>
              <div className="space-y-1">
                <a href="#why" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">Why Kodara</a>
                <a href="#installation" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">Installation</a>
                <a href="#quickstart" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">Quick Start</a>
                <a href="#tiers" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">Plan Overview</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">Free Commands</p>
              <div className="space-y-1">
                <a href="#cmd-init" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara init</a>
                <a href="#cmd-ask" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara ask</a>
                <a href="#cmd-status" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara status</a>
                <a href="#cmd-history" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara history</a>
                <a href="#cmd-note" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara note</a>
                <a href="#cmd-snapshot" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara snapshot</a>
                <a href="#cmd-stats" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara stats</a>
                <a href="#cmd-hook" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara install-hook</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">Pro Commands</p>
              <div className="space-y-1">
                <a href="#cmd-impact" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara impact</a>
                <a href="#cmd-context" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara context</a>
                <a href="#cmd-review" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara review</a>
                <a href="#cmd-why" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara why</a>
                <a href="#cmd-simulate" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara simulate-change</a>
                <a href="#cmd-heatmap" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara heatmap</a>
                <a href="#cmd-dna" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara dna</a>
                <a href="#cmd-scan" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara scan</a>
                <a href="#cmd-mcp" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara mcp</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">Team Commands</p>
              <div className="space-y-1">
                <a href="#cmd-onboard" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara onboard</a>
                <a href="#cmd-busfactor" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara bus-factor</a>
                <a href="#cmd-debt" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara debt</a>
                <a href="#cmd-arch" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">kodara arch-init</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">Use Cases</p>
              <div className="space-y-1">
                <a href="#usecase-ask" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">AI context workflow</a>
                <a href="#usecase-refactor" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">Before a refactor</a>
                <a href="#usecase-onboard" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">New team member</a>
                <a href="#usecase-mcp" className="block text-sm text-gray-600 hover:text-[#0a0a0a] py-1 transition-colors">MCP integration</a>
              </div>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 px-8 lg:px-16 py-12 max-w-3xl">

          {/* Intro */}
          <section id="intro" className="mb-16 pb-16 border-b border-gray-100">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-3">Documentation</p>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Kodara Docs</h1>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Kodara builds architectural memory for your codebase — so your AI gets surgical context instead of re-reading everything every time.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 border border-gray-200 text-xs font-mono px-3 py-1 rounded-full text-gray-600">v0.2.5</span>
              <span className="inline-flex items-center gap-1.5 border border-gray-200 text-xs font-mono px-3 py-1 rounded-full text-gray-600">Python 3.10+</span>
              <span className="inline-flex items-center gap-1.5 border border-gray-200 text-xs font-mono px-3 py-1 rounded-full text-gray-600">Windows / macOS / Linux</span>
              <span className="inline-flex items-center gap-1.5 border border-gray-200 text-xs font-mono px-3 py-1 rounded-full text-gray-600">Any AI tool</span>
            </div>
          </section>

          {/* Why */}
          <section id="why" className="mb-16 pb-16 border-b border-gray-100">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-3">Getting Started</p>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Why Kodara</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every time you ask an AI about your code, it reads the entire codebase. That&apos;s expensive. Kodara fixes this by giving your AI only the 2–8 files that actually matter.
            </p>
            <CodeBlock>{`# Without Kodara — GPT-4o ($2.50/1M input tokens)
1 query  = 41,160 tokens = $0.10
20 queries/day = ~$2.06/day = ~$45/month per dev

# With Kodara — same queries
1 query  = 1,840 tokens  = $0.005
20 queries/day = ~$0.09/day = ~$2/month per dev

# Savings: 94% — ~$43/month per dev`}</CodeBlock>
            <Note>
              <strong>The quality isn&apos;t in the model. It&apos;s in the context.</strong> A free model with Kodara context outperforms a paid model reading your entire codebase blindly.
            </Note>
          </section>

          {/* Installation */}
          <section id="installation" className="mb-16 pb-16 border-b border-gray-100">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Installation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Requires Python 3.10+. No API keys, no configuration.
            </p>
            <CodeBlock>{`pip install kodara`}</CodeBlock>
            <p className="text-gray-600 leading-relaxed mb-4">Verify the installation:</p>
            <CodeBlock>{`kodara --version
# kodara, version 0.2.5`}</CodeBlock>
          </section>

          {/* Quick Start */}
          <section id="quickstart" className="mb-16 pb-16 border-b border-gray-100">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Quick Start</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Three commands to get up and running in under 60 seconds.</p>
            <div className="space-y-8">
              <Step num={1} title="Navigate to your project">
                <CodeBlock>{`cd your-project`}</CodeBlock>
              </Step>
              <Step num={2} title="Build project memory">
                <p className="text-sm text-gray-600 mb-2">Scans your codebase, builds a dependency graph, and stores memory in <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">.kodara/</code></p>
                <CodeBlock>{`kodara init`}</CodeBlock>
                <CodeBlock>{`  Kodara — Initialising my-project
  Files:    83
  Languages: {'python': 83}
  Edges:    208
  Git:      main - 522 commits
  Done in:  0.8s

  Quick wins:
    Hub file: auth/middleware.py (18 modules depend on it)
    Try: kodara simulate-change auth/middleware.py`}</CodeBlock>
              </Step>
              <Step num={3} title="Ask anything about your codebase">
                <p className="text-sm text-gray-600 mb-2">Copy the output and paste into Claude, ChatGPT, Cursor, or any AI tool.</p>
                <CodeBlock>{`kodara ask "How does authentication work?"`}</CodeBlock>
                <CodeBlock>{`# Context: How does authentication work?

## auth/middleware.py
Defines AuthMiddleware. Exports: verify_token, require_auth.
Depends on: jwt_service.py, models/user.py

## auth/jwt_service.py
Defines JWTService. Exports: encode, decode, refresh.

[3/83 modules · ~1,840 tokens · 94% reduction]`}</CodeBlock>
              </Step>
            </div>
            <Note>
              <strong>That&apos;s it.</strong> Paste the output into your AI tool as context before asking your question. Your AI now knows exactly which parts of the codebase are relevant.
            </Note>
          </section>

          {/* Plan Overview */}
          <section id="tiers" className="mb-16 pb-16 border-b border-gray-100">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Plan Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Every tier includes everything from the previous one.</p>
            <div className="space-y-4">
              <TierCard
                tier="FREE"
                price="$0 forever"
                limit="Up to 200 files. Everything local."
                commands="init, ask, status, watch, stats, history, note, snapshot, install-hook, repos"
              />
              <TierCard
                tier="PRO"
                price="$19/month"
                limit="Unlimited files. Cloud backup. MCP integration."
                commands="impact, context, review, diff, why, simulate-change, heatmap, dna, learn, evolve, compare, drift, clone-pattern, scan, mcp, backup, restore, login, logout"
              />
              <TierCard
                tier="TEAM"
                price="$25/user/month"
                limit="Shared memory. One person indexes — whole team benefits."
                commands="onboard, bus-factor, debt, arch-init, check-architecture, team"
              />
              <TierCard
                tier="ENTERPRISE"
                price="Custom"
                limit="CI/CD integration. Architecture enforcement."
                commands="ci-check, init-ci"
              />
            </div>
          </section>

          {/* FREE COMMANDS */}
          <SectionLabel>Free Commands</SectionLabel>

          <CmdSection id="cmd-init" title="kodara init">
            <p className="text-gray-600 leading-relaxed mb-4">
              Scans your project, builds a dependency graph, generates summaries, and stores everything in <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">.kodara/</code>. Run once per project, re-run after major changes.
            </p>
            <CodeBlock>{`kodara init
kodara init --full          # Force full re-index
kodara init --no-summaries  # Skip summaries (faster)`}</CodeBlock>
            <Note><strong>Incremental by default.</strong> Re-running only processes changed files. Cached summaries are reused.</Note>
          </CmdSection>

          <CmdSection id="cmd-ask" title="kodara ask">
            <p className="text-gray-600 leading-relaxed mb-4">
              Returns the most relevant modules for your query using IDF-weighted semantic search + dependency graph expansion. Paste the output into any AI tool.
            </p>
            <CodeBlock>{`kodara ask "How does routing work?"
kodara ask "Where is payment handled?"
kodara ask "What happens when a user logs in?"`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-status" title="kodara status">
            <p className="text-gray-600 leading-relaxed mb-4">Shows the current state of the index — file count, last updated, memory location.</p>
            <CodeBlock>{`kodara status`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-history" title="kodara history">
            <p className="text-gray-600 leading-relaxed mb-4">Shows git history for a file — commit count, last author, top contributors.</p>
            <CodeBlock>{`kodara history auth/middleware.py
kodara history               # Auto-selects most committed file`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-note" title="kodara note">
            <p className="text-gray-600 leading-relaxed mb-4">
              Annotate files with the WHY — decisions, context, warnings that code alone can&apos;t explain.
            </p>
            <CodeBlock>{`kodara note auth/jwt.py "Using RS256 not HS256 — security audit requirement"
kodara note --list
kodara note auth/jwt.py --list`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-snapshot" title="kodara snapshot">
            <p className="text-gray-600 leading-relaxed mb-4">Save a snapshot of the current project memory state. Useful before major refactors.</p>
            <CodeBlock>{`kodara snapshot
kodara snapshot list`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-stats" title="kodara stats">
            <p className="text-gray-600 leading-relaxed mb-4">Shows how many tokens and money you&apos;ve saved using Kodara.</p>
            <CodeBlock>{`kodara stats`}</CodeBlock>
            <CodeBlock>{`Kodara Stats — my-project

  Today
    Queries:      12
    Tokens saved: 487,320  (97% reduction)
    Money saved:  $7.31

  All time
    Tokens saved: 2,341,880
    Money saved:  $35.13`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-hook" title="kodara install-hook">
            <p className="text-gray-600 leading-relaxed mb-4">
              Installs a git post-commit hook that automatically updates the Kodara index after every commit. Keeps your memory always fresh.
            </p>
            <CodeBlock>{`kodara install-hook     # Install
kodara uninstall-hook   # Remove`}</CodeBlock>
            <Note><strong>Recommended.</strong> Install this once and never think about keeping the index up to date again.</Note>
          </CmdSection>

          {/* PRO COMMANDS */}
          <SectionLabel>Pro Commands</SectionLabel>

          <CmdSection id="cmd-impact" title="kodara impact">
            <p className="text-gray-600 leading-relaxed mb-4">
              Shows what breaks if a file changes. BFS traversal through the reverse dependency graph surfaces all affected modules, ranked by depth and risk.
            </p>
            <CodeBlock>{`kodara impact auth/middleware.py
kodara impact                    # Auto-selects most critical file`}</CodeBlock>
            <CodeBlock>{`Impact Analysis — auth.middleware
Risk: HIGH  Affects 23 modules (28% of codebase)

Direct dependents (8) — will break immediately:
  api/routes.py
  api/v2/routes.py

Indirect dependents (15) — affected through the chain:
  services/user.py (depth 2)`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-context" title="kodara context">
            <p className="text-gray-600 leading-relaxed mb-4">
              Generates an <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">ARCHITECTURE.md</code> file in your project root — a human-readable overview of your codebase structure.
            </p>
            <CodeBlock>{`kodara context`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-review" title="kodara review">
            <p className="text-gray-600 leading-relaxed mb-4">Analyzes your uncommitted changes and shows what they impact across the codebase.</p>
            <CodeBlock>{`kodara review`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-why" title="kodara why">
            <p className="text-gray-600 leading-relaxed mb-4">
              Explains why a file exists and how it fits into the architecture. Combines git history, notes, and dependency data. With a Pro session — adds an AI narrative.
            </p>
            <CodeBlock>{`kodara why auth/middleware.py`}</CodeBlock>
            <CodeBlock>{`Why: auth/middleware.py

  Summary: Handles JWT token validation and request authentication
  Git:     47 commits · last: "Add refresh token support" · top: alice (31)
  Role:    18 modules depend on this file

  AI: This file is the authentication gateway for the entire API.
      Every request passes through verify_token() before reaching
      any business logic. Changes here affect 72% of all endpoints.

  Tip: run 'kodara simulate-change auth/middleware.py' to see full risk`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-simulate" title="kodara simulate-change">
            <p className="text-gray-600 leading-relaxed mb-4">
              Calculates the full downstream cost of changing a file — risk score, affected modules, estimated dev-hours.
            </p>
            <CodeBlock>{`kodara simulate-change auth/middleware.py
kodara simulate-change auth/middleware.py --hours 6  # custom hours per fix`}</CodeBlock>
            <CodeBlock>{`Simulate Change — auth/middleware.py

  Risk:      CRITICAL (score: 89)
  Direct:    8 modules broken immediately
  Indirect:  20 modules affected downstream
  Cost:      ~56 dev-hours
             (28 modules x 2h avg per fix · adjust: --hours N)

  Critical paths:
    auth.middleware -> api.routes -> client_sdk`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-heatmap" title="kodara heatmap">
            <p className="text-gray-600 leading-relaxed mb-4">
              Shows which files carry the most risk — combining change frequency, dependency count, and contributor concentration.
            </p>
            <CodeBlock>{`kodara heatmap`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-dna" title="kodara dna">
            <p className="text-gray-600 leading-relaxed mb-4">
              Fingerprints your project architecture — detects patterns (Auth, Routing, DB, Cache, Queue), compares similarity to known frameworks.
            </p>
            <CodeBlock>{`kodara dna        # fingerprint current state
kodara learn      # save pattern to personal library
kodara evolve     # show how DNA changed over time
kodara compare flask starlette  # compare two repos`}</CodeBlock>
            <CodeBlock>{`Project DNA — my-saas

  Auth:       JWT + middleware (Flask pattern)
  Routing:    Decorator-based
  DB:         Repository pattern
  Similarity: 73% FastAPI, 21% Flask, 6% unique`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-scan" title="kodara scan">
            <p className="text-gray-600 leading-relaxed mb-4">
              Scans any public GitHub repository without cloning. Extracts architecture and stores it in your local pattern library.
            </p>
            <CodeBlock>{`kodara scan github.com/tiangolo/fastapi
kodara scan github.com/pallets/flask`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-mcp" title="kodara mcp">
            <p className="text-gray-600 leading-relaxed mb-4">
              Starts a Model Context Protocol server — Claude, Cursor, and VS Code can query your codebase automatically without copy-pasting.
            </p>
            <CodeBlock>{`kodara mcp                        # start stdio MCP server
kodara mcp --path ./my-project    # specify project path
kodara mcp --setup                # auto-configure all editors`}</CodeBlock>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Auto-setup</strong> writes MCP config to Claude Desktop, Cursor, and VS Code in one command.
            </p>
            <CodeBlock>{`# After kodara mcp --setup, restart your editor.
# Kodara tools appear automatically:
#   kodara_ask     — query the codebase
#   kodara_impact  — impact analysis
#   kodara_context — architecture overview
#   kodara_search  — search modules
#   kodara_status  — index status`}</CodeBlock>
            <Note>
              <strong>Zero friction.</strong> Once configured, your AI editor queries Kodara automatically — no copy-pasting context ever again.
            </Note>
          </CmdSection>

          {/* TEAM COMMANDS */}
          <SectionLabel>Team Commands</SectionLabel>

          <CmdSection id="cmd-onboard" title="kodara onboard">
            <p className="text-gray-600 leading-relaxed mb-4">
              Generates a structured reading guide for a new developer. Based on dependency layers and git activity — no LLM needed.
            </p>
            <CodeBlock>{`kodara onboard`}</CodeBlock>
            <CodeBlock>{`Onboarding Guide — my-project

  Start here:
    01  main.py              entry point
    02  api/server.py        core hub (14 dependents)
    03  auth/middleware.py   every request passes through here
    04  models/user.py       central data model
    ...

  New developer productive in hours, not days.`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-busfactor" title="kodara bus-factor">
            <p className="text-gray-600 leading-relaxed mb-4">
              Identifies files known only by one person in the team. Single points of failure — if that person leaves, knowledge is lost.
            </p>
            <CodeBlock>{`kodara bus-factor`}</CodeBlock>
            <CodeBlock>{`Bus Factor Analysis

  HIGH RISK — single-author files:
    auth/session.py      alice (47 commits, 0 other contributors)
    payments/processor.py  bob (31 commits, 0 other contributors)

  Recommendation: pair-program or document these modules immediately.`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-debt" title="kodara debt">
            <p className="text-gray-600 leading-relaxed mb-4">
              Technical debt heatmap. Files with maximum change frequency + maximum dependencies = the most dangerous places in the codebase.
            </p>
            <CodeBlock>{`kodara debt`}</CodeBlock>
          </CmdSection>

          <CmdSection id="cmd-arch" title="kodara arch-init / check-architecture">
            <p className="text-gray-600 leading-relaxed mb-4">
              Define architectural rules once. Kodara enforces them on every check — prevents layer violations before they accumulate into debt.
            </p>
            <CodeBlock>{`kodara arch-init ./my-project    # generate .kodara/architecture.yml
kodara check-architecture        # validate current state`}</CodeBlock>
            <CodeBlock>{`# .kodara/architecture.yml
architecture:
  api:
    can_import: [service]
  service:
    can_import: [repository]
  repository:
    can_import: []`}</CodeBlock>
            <CodeBlock>{`# kodara check-architecture output:
Architecture Violation Detected
  Module:    api/user_routes.py
  Violation: imports repository layer directly
  Expected:  api -> service -> repository`}</CodeBlock>
            <Note>Use <code className="text-xs font-mono">kodara init-ci</code> to add architecture checks to your CI/CD pipeline automatically.</Note>
          </CmdSection>

          {/* USE CASES */}
          <SectionLabel>Use Cases</SectionLabel>

          <CmdSection id="usecase-ask" title="AI context workflow">
            <p className="text-gray-600 leading-relaxed mb-4">The core workflow — use Kodara to get surgical context, then paste it into your AI tool.</p>
            <CodeBlock>{`# 1. Get context for your question
kodara ask "How does the payment flow work?"

# 2. Copy the output
# 3. Paste into Claude / ChatGPT / Cursor as context
# 4. Ask your question

# Result: AI answers with full architectural awareness
# instead of guessing from scratch`}</CodeBlock>
          </CmdSection>

          <CmdSection id="usecase-refactor" title="Before a refactor">
            <p className="text-gray-600 leading-relaxed mb-4">Always run impact analysis before changing a critical file.</p>
            <CodeBlock>{`# Before touching auth/middleware.py
kodara impact auth/middleware.py
# or for a full cost estimate:
kodara simulate-change auth/middleware.py

# See exactly what breaks, at what depth, at what cost
# Make an informed decision before writing a single line`}</CodeBlock>
          </CmdSection>

          <CmdSection id="usecase-onboard" title="New team member">
            <p className="text-gray-600 leading-relaxed mb-4">Generate a reading guide for anyone joining the project.</p>
            <CodeBlock>{`kodara onboard

# Output: ordered reading list
# 01 -> main.py             (entry point)
# 02 -> api/server.py       (core hub)
# 03 -> auth/middleware.py  (foundation)

# New developer is productive in hours, not days`}</CodeBlock>
          </CmdSection>

          <CmdSection id="usecase-mcp" title="MCP integration (Pro)">
            <p className="text-gray-600 leading-relaxed mb-4">
              Connect Kodara to Claude Desktop, Cursor, or VS Code — your AI editor queries your codebase automatically.
            </p>
            <CodeBlock>{`# One-time setup
cd your-project
kodara init
kodara mcp --setup

# Restart your editor.
# Now just ask Claude or Cursor:
# "What would break if I change auth/middleware.py?"
# Kodara answers automatically — no copy-paste needed.`}</CodeBlock>
            <Note>
              <strong>This changes the category.</strong> Instead of a context tool you use manually, Kodara becomes invisible infrastructure — your AI always knows your codebase.
            </Note>
          </CmdSection>

        </main>
      </div>
    </div>
  );
}

/* ── Components ── */

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-[#0a0a0a] text-green-400 font-mono text-xs leading-relaxed p-5 rounded-lg overflow-x-auto my-4 whitespace-pre">
      {children}
    </pre>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-green-400 bg-green-50 px-4 py-3 my-4 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  );
}

function Step({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="w-7 h-7 bg-[#0a0a0a] text-white text-xs font-mono flex items-center justify-center flex-shrink-0 rounded">
        {num}
      </div>
      <div className="flex-1">
        <h3 className="text-base font-semibold mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function TierCard({ tier, price, limit, commands }: { tier: string; price: string; limit: string; commands: string }) {
  const colors: Record<string, string> = {
    FREE: "bg-gray-50 border-gray-200",
    PRO: "bg-blue-50 border-blue-200",
    TEAM: "bg-purple-50 border-purple-200",
    ENTERPRISE: "bg-orange-50 border-orange-200",
  };
  return (
    <div className={`border rounded-lg p-5 ${colors[tier] ?? "bg-gray-50 border-gray-200"}`}>
      <div className="flex items-baseline gap-3 mb-1">
        <span className="font-mono text-xs font-bold tracking-widest text-gray-500">{tier}</span>
        <span className="text-sm font-semibold text-[#0a0a0a]">{price}</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{limit}</p>
      <p className="text-xs font-mono text-gray-500">{commands}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mt-16 mb-8">
      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">{children}</p>
      <div className="h-px bg-gray-100 mt-3" />
    </div>
  );
}

function CmdSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-14 pb-14 border-b border-gray-100 last:border-0">
      <h2 className="text-xl font-bold tracking-tight font-mono mb-4 text-[#0a0a0a]">{title}</h2>
      {children}
    </section>
  );
}
