const sources = [
  { label: 'PDFs', icon: '📄' },
  { label: 'Notes', icon: '📝' },
  { label: 'Videos', icon: '🎥' },
  { label: 'Websites', icon: '🌐' },
];

const TrustStrip = () => (
  <section
    className="rounded-[2.5rem] border border-violet-500/10 bg-slate-950/80 p-6 shadow-[0_35px_95px_rgba(15,23,42,0.2)]"
    id="about"
  >
    <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300/90">
          Unified knowledge sources
        </p>
        <p className="mt-2 text-xl font-semibold text-white">
          Bring every document, note, and clip into one connected AI system.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {sources.map((source) => (
          <div
            key={source.label}
            className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-900/75 px-4 py-2 text-sm text-slate-200 shadow-[0_15px_40px_rgba(15,23,42,0.15)]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 text-xs text-white">
              {source.icon}
            </span>
            {source.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
