export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">

          {/* Brand */}
          <div>
            <span className="text-base font-semibold tracking-tight text-[#0a0a0a]">Codara</span>
            <p className="text-sm text-gray-500 mt-1.5">Memory Layer for AI Development</p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Product</p>
              <div className="space-y-2">
                <a href="#how-it-works" className="block text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors">How it works</a>
                <a href="#features" className="block text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors">Features</a>
                <a href="#cta" className="block text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors">Waitlist</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Resources</p>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors">Documentation</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors">GitHub</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors">Changelog</a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Codara. All rights reserved.</p>
          <p className="text-sm text-gray-400">Built for developers who ship with AI.</p>
        </div>
      </div>
    </footer>
  );
}
