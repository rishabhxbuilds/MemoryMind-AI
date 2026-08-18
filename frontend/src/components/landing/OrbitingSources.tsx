interface OrbitNode {
  name: string;
  icon: string;
  status: string;
  className: string;
}

const orbitNodes: OrbitNode[] = [
  { name: 'Notion', icon: '📝', status: 'Sync Active', className: 'animate-orbit-1' },
  { name: 'GitHub', icon: '🐙', status: '48 Repos', className: 'animate-orbit-2' },
  { name: 'PDF Docs', icon: '📑', status: '120 Files', className: 'animate-orbit-3' },
];

export const OrbitingSources = () => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {orbitNodes.map((node) => (
        <div
          key={node.name}
          className={`pointer-events-auto absolute flex items-center justify-center rounded-2xl border border-purple-400/40 bg-[#0e0a26]/90 p-2.5 shadow-[0_0_20px_rgba(168,85,247,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-125 hover:border-purple-300 hover:shadow-[0_0_30px_rgba(192,132,252,0.8)] cursor-pointer group ${node.className}`}
        >
          <span className="text-base select-none">{node.icon}</span>

          {/* Hover Tooltip */}
          <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-purple-500/30 bg-[#090518]/95 px-2 py-0.5 text-[10px] font-semibold text-purple-200 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            {node.name} • {node.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrbitingSources;
