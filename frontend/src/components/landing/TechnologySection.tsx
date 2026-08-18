const techCards = [
  {
    title: 'NLP',
    description: 'Understanding natural language across your notes.',
    icon: '🧩',
  },
  {
    title: 'Embeddings',
    description: 'Semantic representations for smarter search.',
    icon: '🧠',
  },
  {
    title: 'Semantic Search',
    description: 'Meaning-first retrieval across sources.',
    icon: '🔎',
  },
  {
    title: 'RAG',
    description: 'Context-aware responses from your own knowledge.',
    icon: '📡',
  },
  {
    title: 'Knowledge Graph',
    description: 'Relationships surfaced visually and intelligently.',
    icon: '🕸️',
  },
  {
    title: 'Large Language Models',
    description: 'Modern AI powers insights and summaries.',
    icon: '🚀',
  },
];

const TechnologySection = () => (
  <section id="technology" className="space-y-8">
    <div className="space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
        Powered by modern AI.
      </p>
      <h2 className="text-4xl font-semibold text-white sm:text-5xl">
        AI that understands relationships, not just documents.
      </h2>
      <p className="max-w-3xl mx-auto text-base leading-8 text-slate-300">
        AI does not just store your information — it understands the relationships
        between it and makes your knowledge genuinely useful.
      </p>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {techCards.map((card) => (
        <div
          key={card.title}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:border-white/20"
        >
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-2xl text-white shadow-[0_12px_30px_rgba(15,23,42,0.2)]">
            {card.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{card.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TechnologySection;
