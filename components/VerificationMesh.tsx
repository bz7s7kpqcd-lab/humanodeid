"use client";

const scattered: [number, number][] = [
  [40, 60], [90, 30], [150, 90], [210, 40], [260, 110], [310, 60],
  [40, 200], [80, 260], [140, 220], [200, 270], [250, 210], [300, 250],
  [20, 130], [330, 150], [170, 20], [170, 300],
];

const silhouette: [number, number][] = [
  [170, 40], [155, 60], [185, 60], [145, 90], [195, 90], [170, 100],
  [140, 130], [200, 130], [170, 150], [130, 190], [210, 190], [170, 210],
  [150, 250], [190, 250], [170, 270],
];

export function VerificationMesh() {
  return (
    <svg viewBox="0 0 340 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <circle cx="170" cy="150" r="150" fill="url(#glow)" />

      {scattered.map(([x, y], i) => (
        <circle
          key={`s-${i}`}
          cx={x}
          cy={y}
          r="2.2"
          fill="#475569"
          className="animate-drift"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}

      {silhouette.slice(1).map(([x, y], i) => {
        const [px, py] = silhouette[i];
        return (
          <line
            key={`l-${i}`}
            x1={px}
            y1={py}
            x2={x}
            y2={y}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            className="mesh-line"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        );
      })}

      {silhouette.map(([x, y], i) => (
        <circle
          key={`v-${i}`}
          cx={x}
          cy={y}
          r="3.4"
          fill="#60a5fa"
          className="animate-meshPulse"
          style={{ animationDelay: `${i * 0.15}s`, transformOrigin: "center" }}
        />
      ))}

      <style>{`
        .mesh-line {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: draw 2.4s ease forwards infinite alternate;
        }
        @keyframes draw {
          0% { stroke-dashoffset: 40; opacity: 0.1; }
          100% { stroke-dashoffset: 0; opacity: 0.8; }
        }
      `}</style>
    </svg>
  );
}
