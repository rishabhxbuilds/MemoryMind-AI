const nodes = ['Understand', 'Connect', 'Search', 'Remember', 'Learn'];

const SolutionSection = () => (
  <section id="solution" className="space-y-10">
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
          Meet your Second Brain.
        </p>
        <h2 className="max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
          MemoryMind AI brings your scattered knowledge together and makes it instantly
          accessible.
        </h2>
        <p className="max-w-xl text-base leading-8 text-slate-300">
          The system understands what you have, connects related ideas, and surfaces
          answers from across your personal knowledge base.
        </p>
      </div>
      <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_100px_rgba(15,23,42,0.25)]">
        <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-violet-400/30 via-transparent to-cyan-400/30" />
        <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-violet-500/20 to-sky-500/10 text-center text-sm text-slate-100 shadow-[0_25px_60px_rgba(15,23,42,0.2)]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">Core</p>
            <p className="mt-2 text-2xl font-semibold text-white">MemoryMind</p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {nodes.map((node, index) => (
            <div
              key={node}
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] ${index % 2 === 0 ? 'before:absolute before:-left-6 before:top-1/2 before:h-px before:w-16 before:bg-gradient-to-r before:from-violet-400/50 before:to-transparent' : 'before:absolute before:-right-6 before:top-1/2 before:h-px before:w-16 before:bg-gradient-to-l before:from-cyan-400/50 before:to-transparent'}`}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-slate-300/80">
                {node}
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {node} knowledge with AI
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
