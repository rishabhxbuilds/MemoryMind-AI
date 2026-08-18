const features = [
  {
    title: 'AI Chat',
    description: 'Interact naturally with your own knowledge.',
    icon: '💬',
  },
  {
    title: 'Semantic Search',
    description: 'Search by meaning rather than exact keywords.',
    icon: '🔎',
  },
  {
    title: 'Smart Summaries',
    description: 'Understand lengthy resources quickly.',
    icon: '🧾',
  },
  {
    title: 'Knowledge Graph',
    description: 'Discover relationships between concepts.',
    icon: '🕸️',
  },
  {
    title: 'Flashcards & Quizzes',
    description: 'Turn knowledge into revision material.',
    icon: '🧠',
  },
  {
    title: 'Personalized Revision',
    description: 'Know what to revise next.',
    icon: '📈',
  },
];

const FeaturesSection = () => (
  <section id="features" className="space-y-8">
    <div className="space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
        Everything your knowledge needs.
      </p>
      <h2 className="text-4xl font-semibold text-white sm:text-5xl">
        A premium toolkit for your second brain.
      </h2>
    </div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-slate-900/90"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-70" />
          <div className="relative z-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-2xl text-white shadow-[0_15px_35px_rgba(99,102,241,0.18)]">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
