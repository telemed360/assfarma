import Portrait from "./Portrait";

/** Ilustração da seção "Quem somos": janela de teleconsulta no computador. */
export function ConsultScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 560"
      overflow="visible"
      className={className}
      role="img"
      aria-label="Tela de computador com uma teleconsulta e o prontuário do paciente"
    >
      <defs>
        <linearGradient id="csWin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F2F8F3" />
        </linearGradient>
        <linearGradient id="csAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2F6941" />
          <stop offset="1" stopColor="#6DB582" />
        </linearGradient>
        <filter id="csShadow" x="-25%" y="-25%" width="150%" height="160%">
          <feDropShadow dx="0" dy="24" stdDeviation="24" floodColor="#233F2B" floodOpacity="0.18" />
        </filter>
        <filter id="csCard" x="-40%" y="-40%" width="180%" height="190%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#233F2B" floodOpacity="0.16" />
        </filter>
        <filter id="csBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="38" />
        </filter>
      </defs>

      <g filter="url(#csBlur)" opacity="0.5">
        <circle cx="118" cy="120" r="104" fill="#BBDAC3" />
        <circle cx="546" cy="418" r="112" fill="#8FC09D" />
      </g>

      {/* janela */}
      <g filter="url(#csShadow)">
        <rect x="56" y="44" width="528" height="366" rx="26" fill="url(#csWin)" />
        <rect x="56" y="44" width="528" height="366" rx="26" fill="none" stroke="#DAE8DE" strokeWidth="1.5" />
        <path d="M56 70 a26 26 0 0 1 26 -26 h476 a26 26 0 0 1 26 26 v14 H56 z" fill="#EBF4ED" />
        <circle cx="86" cy="64" r="5" fill="#FF6B6B" />
        <circle cx="104" cy="64" r="5" fill="#FFC93C" />
        <circle cx="122" cy="64" r="5" fill="#4CD97B" />
        <rect x="250" y="59" width="140" height="10" rx="5" fill="#D7E6DB" />
      </g>

      {/* vídeo principal */}
      <Portrait id="csDoc" x={80} y={104} w={330} h={282} rx={20} longHair />

      <g>
        <rect x="96" y="120" width="76" height="26" rx="13" fill="#0B1B2B" opacity="0.5" />
        <circle cx="111" cy="133" r="4.6" fill="#FF5A5F">
          <animate attributeName="opacity" values="1;0.2;1" dur="1.9s" repeatCount="indefinite" />
        </circle>
        <text x="122" y="137" fill="#FFFFFF" fontSize="11.5" fontWeight="600" fontFamily="var(--font-sans, sans-serif)">
          AO VIVO
        </text>
      </g>

      {/* auto-visualização */}
      <Portrait
        id="csPat" x={330} y={306} w={72} h={70} rx={14}
        skin="#8D5A3B" skinShade="#77492E" hair="#140D12" hairBack="#0E090C"
        clothes="#3E8254" clothesShade="#2F6941" collar="#1C3223"
        bg={["#DCEEE0", "#B3D8BC"]} stethoscope={false} scale={0.9}
      />

      {/* painel lateral: prontuário */}
      <g>
        <rect x="426" y="104" width="132" height="282" rx="18" fill="#FFFFFF" stroke="#E0EDE3" />
        <rect x="442" y="122" width="72" height="9" rx="4.5" fill="#0B1B2B" opacity="0.6" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(0 ${i * 52})`}>
            <rect x="442" y="146" width="100" height="40" rx="12" fill="#F3F8F4" />
            <circle cx="458" cy="166" r="7" fill="url(#csAccent)" opacity={0.85 - i * 0.16} />
            <rect x="472" y="158" width="58" height="7" rx="3.5" fill="#CDE1D2" />
            <rect x="472" y="170" width="36" height="6" rx="3" fill="#E0EDE3" />
          </g>
        ))}
        <rect x="442" y="356" width="100" height="16" rx="8" fill="url(#csAccent)" opacity="0.9" />
      </g>

      {/* cartão: receita digital */}
      <g filter="url(#csCard)" className="animate-float" style={{ animationDelay: "-2s" }}>
        <rect x="24" y="380" width="228" height="94" rx="22" fill="#FFFFFF" />
        <rect x="46" y="404" width="46" height="46" rx="15" fill="#E9F8F1" />
        <path d="M62 424 h14 M69 417 v14" stroke="#1FA971" strokeWidth="3.4" strokeLinecap="round" />
        <rect x="108" y="410" width="118" height="10" rx="5" fill="#0B1B2B" opacity="0.72" />
        <rect x="108" y="428" width="86" height="8" rx="4" fill="#0B1B2B" opacity="0.26" />
      </g>

      {/* cartão: avaliação */}
      <g filter="url(#csCard)" className="animate-float" style={{ animationDelay: "-5s" }}>
        <rect x="380" y="418" width="222" height="92" rx="22" fill="#FFFFFF" />
        <text x="404" y="466" fontSize="34" fontWeight="800" fill="#2B4F35" fontFamily="var(--font-display, sans-serif)">
          5,0
        </text>
        <rect x="404" y="478" width="86" height="7" rx="3.5" fill="#0B1B2B" opacity="0.26" />
        <g transform="translate(468 436)">
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              transform={`translate(${i * 26} 0)`}
              d="M11 0 l3.4 6.9 7.6 1.1 -5.5 5.4 1.3 7.6 -6.8 -3.6 -6.8 3.6 1.3 -7.6 -5.5 -5.4 7.6 -1.1 z"
              fill="#FFB020"
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

export default ConsultScene;
