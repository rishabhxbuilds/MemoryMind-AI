const steps = [
  {
    title: 'Upload',
    description: 'Bring documents, notes, and media into one place.',
    icon: '📤',
  },
  {
    title: 'Process',
    description: 'AI ingests and understands your content.',
    icon: '⚙️',
  },
  {
    title: 'Understand',
    description: 'Find meaning and context across sources.',
    icon: '🧠',
  },
  {
    title: 'Connect',
    description: 'Link ideas and concepts automatically.',
    icon: '🔗',
  },
  {
    title: 'Search',
    description: 'Ask anything and get relevant answers.',
    icon: '🔎',
  },
  { title: 'Learn', description: 'Turn insight into retained knowledge.', icon: '📚' },
];

const WorkflowSection = () => (
  <section id="workflow" className="space-y-8">
    <div className="space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
        From information to intelligence.
      </p>
      <h2 className="text-4xl font-semibold text-white sm:text-5xl">
        A seamless workflow for knowledge growth.
      </h2>
    </div>
    <div className="grid gap-4 lg:grid-cols-6">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-5 text-center shadow-[0_20px_50px_rgba(15,23,42,0.2)]"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-2xl text-white shadow-[0_12px_30px_rgba(15,23,42,0.25)]">
            {step.icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
          {index < steps.length - 1 ? <div className="mt-4 h-px bg-white/10" /> : null}
        </div>
      ))}
    </div>
  </section>
);

export default WorkflowSection;
