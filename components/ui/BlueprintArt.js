// Technical line drawings in a drafting style. Used as considered visual
// placeholders until real project/engineering photography is supplied.
// Purely decorative — always rendered with aria-hidden.

const A = '#f57e16'; // amber accent

function Dim({ x1, y1, x2, y2, label }) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const vertical = x1 === x2;
  const tick = (x, y) =>
    vertical ? <line x1={x - 4} y1={y} x2={x + 4} y2={y} /> : <line x1={x} y1={y - 4} x2={x} y2={y + 4} />;
  return (
    <g opacity="0.55" strokeWidth="0.75">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {tick(x1, y1)}
      {tick(x2, y2)}
      {label && (
        <text x={mx} y={my - 6} fontSize="8" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="monospace">
          {label}
        </text>
      )}
    </g>
  );
}

const drawings = {
  hvac: (
    <>
      <rect x="40" y="70" width="110" height="70" />
      <circle cx="78" cy="105" r="22" />
      <path d="M78 83 L78 127 M56 105 L100 105 M63 90 L93 120 M93 90 L63 120" opacity="0.5" />
      <rect x="112" y="85" width="26" height="40" opacity="0.6" />
      <path d="M150 95 H420 M150 115 H400" />
      <path d="M220 115 V200 M240 115 V200 M330 115 V250 M350 115 V250 M400 115 V95" />
      {[{ x: 210, y: 200 }, { x: 320, y: 250 }].map((d) => (
        <g key={d.x}>
          <rect x={d.x} y={d.y} width="40" height="22" />
          <path d={`M${d.x} ${d.y} L${d.x + 40} ${d.y + 22} M${d.x + 40} ${d.y} L${d.x} ${d.y + 22}`} opacity="0.5" />
        </g>
      ))}
      <g stroke={A} strokeWidth="1.5">
        <path d="M180 75 H215 M209 70 L215 75 L209 80" />
        <path d="M300 75 H335 M329 70 L335 75 L329 80" />
        <path d="M230 232 V262 M225 256 L230 262 L235 256" />
        <path d="M340 282 V312 M335 306 L340 312 L345 306" />
      </g>
      <Dim x1={150} y1={50} x2={420} y2={50} label="SUPPLY DUCT RUN" />
    </>
  ),
  fire: (
    <>
      <circle cx="70" cy="270" r="26" />
      <circle cx="70" cy="270" r="8" />
      <path d="M96 270 H140" />
      <path d="M140 262 L156 278 M140 278 L156 262 M140 262 V278 M156 262 V278" stroke={A} strokeWidth="1.5" />
      <path d="M156 270 H190 V60" strokeWidth="2" />
      <path d="M190 90 H440 M190 190 H440" strokeWidth="1.6" />
      {[230, 280, 330, 380, 430].map((x) => (
        <g key={x}>
          <path d={`M${x} 90 V125 M${x} 190 V225`} />
          {[125, 225].map((y) => (
            <g key={y} stroke={A} strokeWidth="1.4">
              <circle cx={x} cy={y + 6} r="6" />
              <path d={`M${x - 9} ${y + 16} L${x + 9} ${y + 16}`} />
            </g>
          ))}
        </g>
      ))}
      <rect x="200" y="290" width="70" height="40" />
      <path d="M210 310 H260" opacity="0.5" />
      <Dim x1={190} y1={60} x2={440} y2={60} label="SPRINKLER MAIN" />
    </>
  ),
  alarm: (
    <>
      <rect x="30" y="40" width="420" height="280" opacity="0.6" />
      <path d="M180 40 V170 M180 210 V320 M30 180 H130 M170 180 H450" opacity="0.4" />
      <rect x="50" y="230" width="60" height="70" strokeWidth="1.6" />
      <path d="M60 248 H100 M60 260 H90 M60 272 H95" opacity="0.6" />
      <circle cx="96" cy="288" r="4" fill={A} stroke="none" />
      <path d="M110 250 H140 V110 H420 V270 H220 V290 H110" strokeDasharray="5 4" stroke={A} strokeWidth="1.3" />
      {[
        [140, 110], [230, 110], [320, 110], [420, 110], [420, 190], [420, 270], [320, 270],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="11" fill="white" fillOpacity="0" />
          <circle cx={x} cy={y} r="11" />
          <circle cx={x} cy={y} r="4" />
        </g>
      ))}
      <rect x="212" y="281" width="16" height="16" />
      <path d="M215 284 L225 294" />
    </>
  ),
  mep: (
    <>
      <path d="M30 110 H450" strokeWidth="2" />
      <path d="M30 128 H450" strokeWidth="0.75" />
      <path d="M30 200 C 150 200, 180 160, 260 160 S 380 230, 450 230" strokeDasharray="10 5" />
      <path d="M120 40 V330" strokeDasharray="2 4" strokeWidth="1.5" />
      <path d="M330 40 V330" strokeDasharray="14 4 2 4" />
      <path d="M30 280 H450" strokeDasharray="6 3" />
      <g stroke={A} strokeWidth="1.6">
        <circle cx="330" cy="119" r="20" />
        <path d="M344 105 L370 79 H420" />
      </g>
      <text x="374" y="74" fontSize="9" fill={A} stroke="none" fontFamily="monospace">CLASH 01</text>
      <g opacity="0.6" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">
        <text x="34" y="104">DUCT</text>
        <text x="34" y="195">CHW</text>
        <text x="124" y="52">CABLE TRAY</text>
        <text x="34" y="274">DRAIN</text>
      </g>
    </>
  ),
  civil: (
    <>
      <path d="M40 60 V320 M120 60 V320" strokeWidth="1.6" />
      {Array.from({ length: 13 }).map((_, i) => (
        <path key={i} d={`M40 ${70 + i * 20} L120 ${50 + i * 20}`} opacity="0.35" />
      ))}
      <rect x="40" y="140" width="80" height="50" fill="white" fillOpacity="0" />
      <path d="M40 140 H120 V190 H40 Z" stroke={A} strokeWidth="1.6" />
      <path d="M10 165 H170" strokeDasharray="8 4" />
      <path d="M200 280 H440 V320 H200 Z" />
      {Array.from({ length: 12 }).map((_, i) => (
        <path key={i} d={`M${205 + i * 20} 320 L${225 + i * 20} 280`} opacity="0.35" />
      ))}
      <rect x="250" y="200" width="140" height="80" strokeWidth="1.6" />
      <circle cx="320" cy="240" r="24" />
      <path d="M250 280 L240 300 M390 280 L400 300" opacity="0.5" />
      <Dim x1={200} y1={340} x2={440} y2={340} label="PLINTH" />
      <Dim x1={40} y1={40} x2={120} y2={40} label="OPENING" />
    </>
  ),
  interiors: (
    <>
      <path d="M30 40 H450 V320 H260 M200 320 H30 Z" strokeWidth="1.8" />
      <path d="M200 320 A60 60 0 0 1 260 320" opacity="0.6" strokeDasharray="3 3" />
      <rect x="60" y="70" width="150" height="20" />
      <rect x="270" y="70" width="150" height="20" />
      <rect x="60" y="150" width="110" height="60" />
      <rect x="250" y="150" width="110" height="60" />
      <path d="M380 140 H450 M380 140 V240 M380 240 H450" opacity="0.6" />
      <text x="392" y="196" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace" opacity="0.6">BOH</text>
      {[[110, 125], [210, 125], [310, 125], [110, 255], [210, 255], [310, 255]].map(([x, y]) => (
        <g key={`${x}-${y}`} stroke={A} strokeWidth="1.3">
          <rect x={x - 9} y={y - 9} width="18" height="18" />
          <path d={`M${x - 9} ${y - 9} L${x + 9} ${y + 9} M${x + 9} ${y - 9} L${x - 9} ${y + 9}`} />
        </g>
      ))}
    </>
  ),
  maintenance: (
    <>
      <circle cx="150" cy="180" r="100" />
      <circle cx="150" cy="180" r="84" opacity="0.4" />
      {Array.from({ length: 11 }).map((_, i) => {
        const a = (Math.PI * (0.8 + (i * 1.4) / 10));
        const x1 = 150 + Math.cos(a) * 84;
        const y1 = 180 + Math.sin(a) * 84;
        const x2 = 150 + Math.cos(a) * 72;
        const y2 = 180 + Math.sin(a) * 72;
        return <line key={i} x1={x1.toFixed(1)} y1={y1.toFixed(1)} x2={x2.toFixed(1)} y2={y2.toFixed(1)} />;
      })}
      <path d="M150 180 L205 130" stroke={A} strokeWidth="2.2" />
      <circle cx="150" cy="180" r="7" />
      {[90, 145, 200, 255].map((y, i) => (
        <g key={y}>
          <rect x="300" y={y - 10} width="20" height="20" />
          {i < 3 && <path d={`M304 ${y} L309 ${y + 5} L317 ${y - 6}`} stroke={A} strokeWidth="1.6" />}
          <path d={`M334 ${y} H440`} opacity="0.6" />
          <path d={`M334 ${y + 9} H400`} opacity="0.3" />
        </g>
      ))}
    </>
  ),
  consult: (
    <>
      <path d="M30 40 H450 V320 H30 Z" strokeWidth="1.6" />
      <path d="M190 40 V200 M190 240 V320 M30 160 H120 M160 160 H190 M300 40 V120 M300 160 V320" opacity="0.6" />
      <g stroke={A} strokeWidth="1.6">
        <path d="M100 250 H170 V220 H250 V120 H330 V80" />
        <path d="M322 90 L330 80 L338 90" />
        <path d="M360 260 H420 M412 252 L420 260 L412 268" />
      </g>
      {[[70, 80], [240, 280], [400, 160]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 6} y={y - 14} width="12" height="26" rx="4" />
          <path d={`M${x - 3} ${y - 18} H${x + 3}`} />
        </g>
      ))}
      <rect x="380" y="60" width="50" height="30" opacity="0.6" />
      <text x="388" y="79" fontSize="9" fill="currentColor" stroke="none" fontFamily="monospace">EXIT</text>
    </>
  ),
  execution: (
    <>
      <path d="M60 50 V320 H450" strokeWidth="1.4" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${110 + i * 60} 50 V320`} opacity="0.15" />
      ))}
      {[
        [70, 120, 'DESIGN'],
        [150, 130, 'COORD'],
        [210, 150, 'INSTALL'],
        [300, 90, 'TEST'],
        [360, 70, 'HANDOVER'],
      ].map(([x, w, label], i) => (
        <g key={label}>
          <rect x={x} y={80 + i * 46} width={w} height="18" stroke={i === 4 ? A : 'currentColor'} strokeWidth={i === 4 ? 1.6 : 1.1} />
          <text x="70" y={74 + i * 46} fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace" opacity="0.6">{label}</text>
        </g>
      ))}
      <path d="M390 298 L402 310 L426 286" stroke={A} strokeWidth="2" />
    </>
  ),
  building: (
    <>
      <path d="M60 330 H440" strokeWidth="1.8" />
      <rect x="110" y="70" width="230" height="260" strokeWidth="1.5" />
      {[120, 170, 220, 270].map((y) => (
        <path key={y} d={`M110 ${y} H340`} opacity="0.5" />
      ))}
      {[140, 180, 220, 260, 300].map((x) =>
        [80, 130, 180, 230].map((y) => (
          <rect key={`${x}-${y}`} x={x - 10} y={y + 10} width="20" height="24" opacity="0.35" />
        ))
      )}
      <rect x="200" y="285" width="50" height="45" />
      <path d="M340 160 H400 V330" opacity="0.6" />
      <path d="M130 60 V330" stroke={A} strokeWidth="1.6" strokeDasharray="6 4" />
      <path d="M322 60 V330" stroke="#2f74d6" strokeWidth="1.6" strokeDasharray="2 4" />
      <rect x="150" y="40" width="70" height="30" />
      <circle cx="185" cy="55" r="9" />
      <Dim x1={360} y1={70} x2={360} y2={330} />
    </>
  ),
};

export default function BlueprintArt({ variant = 'building', className = '' }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      {drawings[variant] || drawings.building}
    </svg>
  );
}
