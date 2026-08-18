import Button from '@/ui/Button';

const FinalCTA = () => (
  <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-violet-500/10 via-slate-950/80 to-sky-400/10 p-10 text-center shadow-[0_35px_90px_rgba(15,23,42,0.28)]">
    <div className="mx-auto max-w-3xl space-y-6">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
        Build your second brain.
      </p>
      <h2 className="text-4xl font-semibold text-white sm:text-5xl">
        Turn scattered information into knowledge you can actually use.
      </h2>
      <Button className="mx-auto mt-4 text-base font-semibold">
        Get Started with MemoryMind AI
      </Button>
    </div>
  </section>
);

export default FinalCTA;
