import { useState } from 'react';

interface PromptPreset {
  id: string;
  label: string;
  query: string;
  response: string;
  sources: string[];
  latency: string;
}

const presets: PromptPreset[] = [
  {
    id: 'meeting',
    label: '📋 Summarize Q3 Strategy',
    query: 'What were the core decisions from our Q3 Product Roadmap sync?',
    response:
      'The team prioritized 3 initiatives: 1) Sub-second vector retrieval indexing, 2) Direct Obsidian & Notion bi-directional sync, and 3) End-to-end encrypted local embeddings.',
    sources: ['Meeting_Notes_Aug10.md', 'Q3_Roadmap.pdf'],
    latency: '0.018s',
  },
  {
    id: 'code',
    label: '⚡ Find Auth Token Helper',
    query: 'Where is the refresh token rotation logic implemented?',
    response:
      'Token rotation logic is located in `authService.ts` within `handleTokenRefresh()`. It uses HMAC-SHA256 with a 15-minute sliding session window.',
    sources: ['authService.ts:42', 'jwtConfig.json'],
    latency: '0.012s',
  },
  {
    id: 'research',
    label: '🧠 Connect PDF & Notion',
    query: 'Cross-reference my AI agent paper with my Notion architecture ideas',
    response:
      'Connected 4 related nodes: The memory retrieval pipeline matches your multi-agent architecture diagram in Notion with 94.6% semantic similarity.',
    sources: ['Agent_Survey_2026.pdf', 'Notion: Systems Architecture'],
    latency: '0.024s',
  },
];

export const HeroPromptDemo = () => {
  const [selectedPreset, setSelectedPreset] = useState<PromptPreset>(presets[0]);
  const [isAnswering, setIsAnswering] = useState(false);

  const handleSelect = (preset: PromptPreset) => {
    setIsAnswering(true);
    setSelectedPreset(preset);
    setTimeout(() => {
      setIsAnswering(false);
    }, 350);
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-purple-500/25 bg-[#0e0928]/85 p-4 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(168,85,247,0.15)] transition duration-300 hover:border-purple-400/40">
      {/* Top Interactive Prompt Pills */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <span className="text-xs font-semibold text-purple-300 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          Interactive Second Brain Query
        </span>
        <span className="text-[11px] font-mono text-purple-400/80">
          ⚡ Latency: {selectedPreset.latency}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => handleSelect(preset)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
              selectedPreset.id === preset.id
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] scale-[1.02]'
                : 'border border-white/10 bg-[#160f38]/70 text-slate-300 hover:border-purple-400/40 hover:text-white'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Query Bar */}
      <div className="mt-3 rounded-xl border border-purple-500/20 bg-black/40 px-3.5 py-2.5 flex items-center gap-3">
        <span className="text-purple-400 text-sm">🔍</span>
        <span className="text-xs sm:text-sm font-medium text-slate-200 truncate">
          {selectedPreset.query}
        </span>
      </div>

      {/* Simulated Instant AI Response Box */}
      <div className="mt-3 rounded-xl border border-purple-500/15 bg-[#120a32]/60 p-3.5">
        <div className="flex items-center justify-between text-[11px] text-purple-300/80 pb-1.5">
          <span className="font-semibold text-white flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-md bg-purple-500/30 text-[10px]">
              ✨
            </span>
            MemoryMind AI Synthesis
          </span>
          <span className="rounded bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 font-mono text-[10px] font-bold">
            99.8% Match
          </span>
        </div>

        <p
          className={`mt-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed transition-opacity duration-300 ${isAnswering ? 'opacity-30' : 'opacity-100'}`}
        >
          {selectedPreset.response}
        </p>

        {/* Citations & Sources */}
        <div className="mt-2.5 flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
          <span className="text-[10px] font-medium text-slate-400">Sources:</span>
          {selectedPreset.sources.map((src, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 rounded-md border border-purple-400/20 bg-purple-500/10 px-2 py-0.5 text-[10px] font-mono text-purple-200"
            >
              📄 {src}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPromptDemo;
