const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#workflow' },
  { label: 'Technology', href: '#technology' },
  { label: 'Future Scope', href: '#learning' },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950/95 py-10 text-slate-300">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-3 text-center lg:text-left">
        <p className="text-2xl font-semibold text-white">MemoryMind AI</p>
        <p className="max-w-md text-sm text-slate-400">
          Remember Everything. Forget Nothing.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="transition hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </div>
    <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
      © 2026 MemoryMind AI
    </div>
  </footer>
);

export default Footer;
