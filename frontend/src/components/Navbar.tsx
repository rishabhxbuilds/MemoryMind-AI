import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/ui/Logo';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <Logo />
          <span className="text-xl font-bold tracking-tight text-white transition group-hover:text-purple-300">
            MemoryMind AI
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-10 text-[15px] font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition duration-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/login"
            className="rounded-full border border-white/15 bg-[#141029]/80 px-6 py-2 text-sm font-medium text-white backdrop-blur-md transition duration-200 hover:border-purple-400/50 hover:bg-[#1f1940]"
          >
            Login
          </Link>
          <Link
            to="/dashboard"
            className="rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] px-6 py-2 text-sm font-medium text-white shadow-[0_0_25px_rgba(139,92,246,0.6)] transition duration-200 hover:opacity-95 hover:shadow-[0_0_35px_rgba(168,85,247,0.85)] hover:scale-[1.02]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#120f26] text-white transition hover:bg-[#1a1638] md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open ? (
        <div className="border-b border-purple-500/20 bg-[#090618]/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl py-2.5 text-base font-medium text-slate-200 hover:bg-purple-900/20 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 pt-3 border-t border-white/10">
              <Link
                to="/login"
                className="rounded-full border border-white/15 bg-[#141029] py-2.5 text-sm font-semibold text-white text-center"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/dashboard"
                className="rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] text-center"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
