export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-base font-semibold tracking-tight text-[#0a0a0a]">
          Codara
        </span>
        <div className="flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-[#0a0a0a] transition-colors hidden sm:block">
            How it works
          </a>
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-[#0a0a0a] transition-colors hidden sm:block">
            Features
          </a>
          <a
            href="#cta"
            className="text-sm font-semibold bg-[#0a0a0a] text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
