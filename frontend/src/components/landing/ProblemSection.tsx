const resources = [
  { title: 'PDF Library', label: 'PDFs', color: 'from-violet-600 to-purple-500' },
  { title: 'Research Vault', label: 'Research', color: 'from-sky-500 to-cyan-400' },
  { title: 'Note Collection', label: 'Notes', color: 'from-fuchsia-500 to-pink-400' },
  { title: 'Video Clips', label: 'Video', color: 'from-indigo-500 to-slate-500' },
  { title: 'Browser Clips', label: 'Websites', color: 'from-emerald-500 to-teal-400' },
];

const ProblemSection = () => (
  <section id="problem" className="space-y-8">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
          Your knowledge is everywhere.
        </p>
        <h2 className="max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
          Too much information. Too little organization.
        </h2>
        <p className="max-w-xl text-base leading-8 text-slate-300">
          Resources are scattered across files, notes, videos and research. MemoryMind
          AI brings clarity with a single intelligent layer that understands your
          knowledge.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {resources.map((item) => (
          <div
            key={item.title}
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.22)]"
          >
            <div
              className={`mb-4 inline-flex rounded-3xl bg-gradient-to-r ${item.color} px-3 py-2 text-sm font-semibold text-white/90`}
            >
              {item.label}
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Scattered sources cause friction when you need fast insight.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
