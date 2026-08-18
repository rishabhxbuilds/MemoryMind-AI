const LearningSection = () => (
  <section id="learning" className="space-y-8">
    <div className="space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
        Do not just store knowledge. Learn from it.
      </p>
      <h2 className="text-4xl font-semibold text-white sm:text-5xl">
        Intelligent learning designed for retention.
      </h2>
    </div>
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.25)]">
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { title: 'Flashcards', label: 'Generate smart review cards.' },
            { title: 'Quiz Builder', label: 'Test what matters most.' },
            { title: 'Revision Plan', label: 'Focused review schedules.' },
            { title: 'Progress', label: 'Track learning momentum.' },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.18)]"
            >
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.25)]">
        <div className="rounded-[2rem] bg-slate-900/90 p-6 text-white shadow-[0_20px_50px_rgba(15,23,42,0.2)]">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-300/80">
            Learning Dashboard
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-slate-950/90 p-4">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Retention score</span>
                <span className="text-white">82%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-4">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Next review</span>
                <span className="text-white">Tomorrow</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Review your top concepts before the next session.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-4">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Active topics</span>
                <span className="text-white">6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LearningSection;
