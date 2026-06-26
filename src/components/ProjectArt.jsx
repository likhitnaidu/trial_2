// Original abstract SVG illustrations themed to each project, built to
// match the portfolio's dark / orange design system rather than using
// borrowed screenshots or stock UI kits.

export function RecylytixArt() {
  return (
    <svg viewBox="0 0 400 240" className="project-art" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="recy-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#151512" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </linearGradient>
        <linearGradient id="recy-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb8a3c" />
          <stop offset="100%" stopColor="#c2570f" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#recy-bg)" />
      {/* recycling arrows */}
      <g transform="translate(60,60)" opacity="0.9">
        <path d="M0 30 A30 30 0 0 1 30 0 L30 -10 L48 8 L30 26 L30 14 A18 18 0 0 0 12 30 Z" fill="#f97316" />
        <path d="M30 60 A30 30 0 0 1 0 30 L-10 30 L8 12 L26 30 L14 30 A18 18 0 0 0 30 48 Z" fill="#f97316" opacity="0.7" transform="rotate(120 15 30)" />
        <path d="M30 60 A30 30 0 0 1 0 30 L-10 30 L8 12 L26 30 L14 30 A18 18 0 0 0 30 48 Z" fill="#f97316" opacity="0.45" transform="rotate(240 15 30)" />
      </g>
      {/* bar chart insight panel */}
      <g transform="translate(190,170)">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={i * 32}
            y={-[40, 70, 50, 90, 60][i]}
            width="20"
            height={[40, 70, 50, 90, 60][i]}
            rx="3"
            fill="url(#recy-bar)"
            opacity={0.5 + i * 0.1}
          />
        ))}
      </g>
      <line x1="40" y1="200" x2="360" y2="200" stroke="#1f1f23" strokeWidth="1" />
      <circle cx="340" cy="50" r="3" fill="#f97316" />
      <circle cx="320" cy="80" r="2" fill="#f97316" opacity="0.6" />
    </svg>
  );
}

export function MapNavigatorArt() {
  return (
    <svg viewBox="0 0 400 240" className="project-art" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="map-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#13131a" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#map-bg)" />
      {/* grid roads */}
      <g stroke="#23232a" strokeWidth="1.5">
        <line x1="0" y1="60" x2="400" y2="60" />
        <line x1="0" y1="130" x2="400" y2="130" />
        <line x1="0" y1="190" x2="400" y2="190" />
        <line x1="80" y1="0" x2="80" y2="240" />
        <line x1="180" y1="0" x2="180" y2="240" />
        <line x1="300" y1="0" x2="300" y2="240" />
      </g>
      {/* route path */}
      <path
        d="M40 200 L80 200 L80 130 L180 130 L180 60 L300 60 L300 30 L360 30"
        fill="none"
        stroke="#f97316"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 10"
      />
      <circle cx="40" cy="200" r="6" fill="#f97316" />
      <circle cx="360" cy="30" r="8" fill="none" stroke="#f97316" strokeWidth="2" />
      <circle cx="360" cy="30" r="3" fill="#f97316" />
      {/* pulse rings */}
      <circle cx="180" cy="130" r="14" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.5" />
      <circle cx="180" cy="130" r="5" fill="#fb8a3c" />
    </svg>
  );
}

export function ManabiArt() {
  return (
    <svg viewBox="0 0 400 240" className="project-art" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="man-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#151210" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#man-bg)" />
      {/* stacked cards / flashcards motif */}
      <g transform="translate(120,40)">
        <rect x="40" y="40" width="170" height="120" rx="10" fill="#15151a" stroke="#23232a" />
        <rect x="20" y="20" width="170" height="120" rx="10" fill="#111113" stroke="#1f1f23" />
        <rect x="0" y="0" width="170" height="120" rx="10" fill="#1a1a1d" stroke="#f97316" strokeWidth="1.5" />
        <text x="18" y="38" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#f97316">問</text>
        <line x1="18" y1="56" x2="140" y2="56" stroke="#2a2a30" strokeWidth="2" />
        <line x1="18" y1="72" x2="110" y2="72" stroke="#2a2a30" strokeWidth="2" />
        <line x1="18" y1="88" x2="125" y2="88" stroke="#2a2a30" strokeWidth="2" />
      </g>
      <circle cx="330" cy="60" r="3" fill="#f97316" opacity="0.7" />
      <circle cx="350" cy="90" r="2" fill="#fb8a3c" opacity="0.5" />
    </svg>
  );
}

export function QrioArt() {
  return (
    <svg viewBox="0 0 400 240" className="project-art" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="qrio-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#121316" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#qrio-bg)" />
      {/* multiplayer node graph motif */}
      <g stroke="#2a2a30" strokeWidth="1.5">
        <line x1="200" y1="120" x2="100" y2="60" />
        <line x1="200" y1="120" x2="300" y2="60" />
        <line x1="200" y1="120" x2="100" y2="180" />
        <line x1="200" y1="120" x2="300" y2="180" />
      </g>
      <circle cx="200" cy="120" r="16" fill="#f97316" />
      <text x="200" y="125" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="#0a0a0b" textAnchor="middle">?</text>
      {[
        [100, 60],
        [300, 60],
        [100, 180],
        [300, 180],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="10" fill="#1a1a1d" stroke="#fb8a3c" strokeWidth="1.5" />
      ))}
    </svg>
  );
}
