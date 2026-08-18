const nodes = [
  { label: 'Artificial Intelligence', top: '10%', left: '40%' },
  { label: 'Machine Learning', top: '35%', left: '20%' },
  { label: 'Deep Learning', top: '38%', left: '60%' },
  { label: 'NLP', top: '60%', left: '75%' },
  { label: 'Computer Vision', top: '70%', left: '35%' },
  { label: 'CNN', top: '58%', left: '47%' },
];

const KnowledgeGraphPreview = () => (
  <section id="graph" className="space-y-8">
    <div className="space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Concept map</p>
      <h2 className="text-4xl font-semibold text-white sm:text-5xl">
        See how your ideas connect.
      </h2>
    </div>
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.25)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.16),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_18%)]" />
      <div className="relative h-[420px]">
        {nodes.map((node) => (
          <div
            key={node.label}
            className="absolute flex h-20 w-40 items-center justify-center rounded-3xl bg-slate-900/95 border border-white/10 p-4 text-center text-sm font-semibold text-white shadow-[0_20px_60px_rgba(15,23,42,0.3)]"
            style={{ top: node.top, left: node.left }}
          >
            {node.label}
          </div>
        ))}
        <svg
          className="absolute inset-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="50"
            y1="14"
            x2="25"
            y2="38"
            stroke="rgba(99,102,241,0.35)"
            strokeWidth="1.2"
          />
          <line
            x1="50"
            y1="14"
            x2="75"
            y2="40"
            stroke="rgba(56,189,248,0.35)"
            strokeWidth="1.2"
          />
          <line
            x1="25"
            y1="38"
            x2="35"
            y2="60"
            stroke="rgba(139,92,246,0.35)"
            strokeWidth="1.2"
          />
          <line
            x1="75"
            y1="40"
            x2="89"
            y2="63"
            stroke="rgba(56,189,248,0.35)"
            strokeWidth="1.2"
          />
          <line
            x1="35"
            y1="60"
            x2="47"
            y2="56"
            stroke="rgba(139,92,246,0.35)"
            strokeWidth="1.2"
          />
          <line
            x1="35"
            y1="60"
            x2="38"
            y2="78"
            stroke="rgba(56,189,248,0.35)"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </div>
  </section>
);

export default KnowledgeGraphPreview;
