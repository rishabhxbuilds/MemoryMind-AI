import { useState, useRef } from 'react';
import HeroVisual from '@/components/landing/HeroVisual';
import NeuralConstellation from '@/components/landing/NeuralConstellation';

const heroStats = [
  {
    icon: 'file',
    title: '10+',
    subtitle: 'File Types',
  },
  {
    icon: 'brain',
    title: 'AI',
    subtitle: 'Powered',
  },
  {
    icon: 'shield',
    title: 'Secure',
    subtitle: '& Private',
  },
  {
    icon: 'lightning',
    title: 'Lightning',
    subtitle: 'Fast Search',
  },
];

const getStatIcon = (type: string) => {
  switch (type) {
    case 'file':
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-[#c084fc]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </svg>
      );
    case 'brain':
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-[#c084fc]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
          <circle cx="12" cy="7" r="1" fill="#c084fc" />
          <circle cx="12" cy="12" r="1" fill="#c084fc" />
          <circle cx="12" cy="17" r="1" fill="#c084fc" />
        </svg>
      );
    case 'shield':
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-[#c084fc]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case 'lightning':
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-[#c084fc]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return null;
  }
};

const LandingPage = () => {
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const heroRef = useRef<HTMLDivElement | null>(null);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleHeroMouseLeave = () => {
    setCursorPos({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative min-h-screen w-full overflow-hidden bg-[#06040f] text-white"
    >
      {/* Interactive Background Neural Constellation */}
      <NeuralConstellation />

      {/* Dynamic Cursor Spotlight Aura */}
      {cursorPos.x > 0 && (
        <div
          style={{
            transform: `translate(${cursorPos.x - 300}px, ${cursorPos.y - 300}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_closest-side,rgba(168,85,247,0.14),transparent_100%)] blur-[50px]"
        />
      )}

      {/* Ambient lighting & star mesh */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-violet-600/15 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-purple-700/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />

      {/* Hero Main Wrapper */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-8 pb-16 sm:px-10 lg:px-12 lg:pt-10 lg:pb-24">
        {/* 2-Column Hero Section */}
        <section className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Left Content Column */}
          <div className="flex flex-col items-start space-y-6 sm:space-y-8">
            {/* Badge: "Your Second Brain" */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-purple-500/35 bg-[#160f2e]/90 px-4 py-2 text-xs sm:text-sm font-medium text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.25)] backdrop-blur-md transition duration-300 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
              </span>
              <span className="tracking-wide">Your Second Brain</span>
            </div>

            {/* Main Hero Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl xl:text-[4.25rem] leading-[1.08]">
                Remember Everything.
              </h1>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl xl:text-[4.25rem] leading-[1.08] bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#d946ef] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.45)]">
                Forget Nothing.
              </h2>
            </div>

            {/* Subtitle Description */}
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
              MemoryMind AI helps you capture, organize, and understand all your
              knowledge using the power of AI.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#get-started"
                className="relative group overflow-hidden inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#9333ea] px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.5)] transition duration-300 hover:shadow-[0_0_45px_rgba(147,51,234,0.8)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-[#120f24]/90 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition duration-300 hover:border-purple-400/50 hover:bg-[#1b1636] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] active:scale-[0.98]"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* Right Hero Visual Column (Multi-Mode 3D Visualizer) */}
          <div className="relative flex items-center justify-center lg:sticky lg:top-24">
            <HeroVisual />
          </div>
        </section>

        {/* Bottom Feature Stats Card with Conic Glowing Border */}
        <div className="relative mt-14 sm:mt-20 overflow-hidden rounded-2xl p-[1px]">
          {/* Animated Conic Gradient Laser Border */}
          <div className="absolute -inset-[150%] animate-conic-spin bg-[conic-gradient(from_0deg,_transparent_0_300deg,_#a855f7_330deg,_#ec4899_360deg)] opacity-75" />

          {/* Card Inner Content */}
          <div className="relative rounded-2xl bg-[#0c0920]/90 p-5 sm:p-7 backdrop-blur-2xl">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
              {heroStats.map((stat, idx) => (
                <div
                  key={stat.title}
                  className={`group flex items-center gap-4 transition-transform duration-300 hover:translate-y-[-2px] ${
                    idx > 0 && idx % 2 === 0 ? 'pt-4 lg:pt-0' : ''
                  } ${idx > 1 ? 'pt-4 lg:pt-0' : ''} ${idx !== 0 ? 'lg:pl-8' : ''}`}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                    {getStatIcon(stat.icon)}
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors">
                      {stat.title}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-400">
                      {stat.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
