const citations = ['Deep Learning Notes', 'Computer Vision.pdf', 'Research Paper'];

const ChatPreview = () => (
  <section id="chat" className="space-y-8">
    <div className="space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
        AI Chat Preview
      </p>
      <h2 className="text-4xl font-semibold text-white sm:text-5xl">
        Ask your knowledge in natural language.
      </h2>
    </div>
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.25)]">
        <div className="rounded-[2rem] bg-slate-900/90 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.25)]">
          <div className="mb-4 text-sm uppercase tracking-[0.28em] text-slate-300/80">
            User
          </div>
          <p className="rounded-3xl bg-slate-800/80 p-5 text-lg leading-8 text-white">
            &quot;Explain CNN based on everything I&apos;ve studied.&quot;
          </p>
        </div>
        <div className="mt-6 rounded-[2rem] bg-slate-900/90 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.25)]">
          <div className="mb-4 text-sm uppercase tracking-[0.28em] text-slate-300/80">
            MemoryMind AI
          </div>
          <p className="text-lg leading-8 text-slate-100">
            CNN is a deep learning architecture commonly used for image-related tasks.
            It captures spatial features using convolutional layers, making it ideal for
            computer vision and visual recognition.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {citations.map((citation) => (
              <span
                key={citation}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {citation}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.25)]">
        <div className="flex flex-col gap-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">Reference Summary</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Answers are sourced from your knowledge bank, including lectures,
              articles, and research.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">
              Context-aware citations
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Cited resources help you verify where the answer came from.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ChatPreview;
