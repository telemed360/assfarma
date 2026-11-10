import Portrait from "./Portrait";

/**
 * Ilustração principal do hero: celular com uma teleconsulta em andamento,
 * cercado por cartões flutuantes. 100% vetorial e local.
 */
export function PhoneConsult({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 660"
      overflow="visible"
      className={className}
      role="img"
      aria-label="Celular exibindo uma consulta médica por vídeo com uma médica"
    >
      <defs>
        <linearGradient id="pcPhone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EBF4ED" />
        </linearGradient>
        <linearGradient id="pcScreen" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#F7FBF8" />
          <stop offset="1" stopColor="#EBF4ED" />
        </linearGradient>
        <linearGradient id="pcBtn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2F6941" />
          <stop offset="1" stopColor="#6DB582" />
        </linearGradient>
        <linearGradient id="pcBlob1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A6CFB0" />
          <stop offset="1" stopColor="#3E8254" />
        </linearGradient>
        <filter id="pcShadow" x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="0" dy="26" stdDeviation="26" floodColor="#233F2B" floodOpacity="0.20" />
        </filter>
        <filter id="pcCardShadow" x="-40%" y="-40%" width="180%" height="190%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#233F2B" floodOpacity="0.16" />
        </filter>
        <filter id="pcBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="34" />
        </filter>
      </defs>

      {/* formas decorativas de fundo */}
      <g filter="url(#pcBlur)" opacity="0.55">
        <circle cx="452" cy="150" r="120" fill="url(#pcBlob1)" />
        <circle cx="140" cy="470" r="118" fill="#BBDAC3" />
      </g>
      <circle cx="300" cy="330" r="252" fill="none" stroke="#3E8254" strokeOpacity="0.16" strokeDasharray="4 10" />

      {/* ------------------------------------------------ celular */}
      <g filter="url(#pcShadow)">
        <rect x="185" y="42" width="260" height="536" rx="42" fill="url(#pcPhone)" />
        <rect x="185" y="42" width="260" height="536" rx="42" fill="none" stroke="#D7E6DB" strokeWidth="1.5" />
        <rect x="196" y="53" width="238" height="514" rx="33" fill="url(#pcScreen)" />
      </g>

      {/* notch */}
      <rect x="279" y="63" width="72" height="15" rx="7.5" fill="#0B1B2B" opacity="0.85" />

      {/* barra de topo do app */}
      <g>
        <rect x="214" y="96" width="26" height="26" rx="9" fill="#E2F0E5" />
        <path d="M231 103 l-6 6 6 6" stroke="#2B4F35" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="250" y="101" width="104" height="8" rx="4" fill="#D7E6DB" />
        <rect x="250" y="114" width="64" height="6" rx="3" fill="#E3EEE6" />
        <circle cx="404" cy="109" r="10" fill="#E2F0E5" />
        <circle cx="404" cy="109" r="3" fill="#2F6941" />
      </g>

      {/* vídeo da médica */}
      <Portrait id="pcDoc" x={214} y={136} w={202} h={196} rx={22} longHair />

      {/* chip "ao vivo" */}
      <g>
        <rect x="226" y="148" width="70" height="24" rx="12" fill="#0B1B2B" opacity="0.55" />
        <circle cx="240" cy="160" r="4.4" fill="#FF5A5F">
          <animate attributeName="opacity" values="1;0.25;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="250" y="164" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-sans, sans-serif)" fontWeight="600">
          AO VIVO
        </text>
      </g>

      {/* auto-visualização do paciente */}
      <g>
        <Portrait
          id="pcPat" x={352} y={258} w={58} h={62} rx={12}
          skin="#C98A5E" skinShade="#B3764C" hair="#191118" hairBack="#120C10"
          clothes="#3E8254" clothesShade="#2F6941" collar="#233F2B"
          bg={["#DCEEE0", "#B3D8BC"]} stethoscope={false} scale={0.92}
        />
      </g>

      {/* nome e especialidade */}
      <g>
        <rect x="214" y="346" width="150" height="11" rx="5.5" fill="#C0DCC7" />
        <rect x="214" y="365" width="96" height="8" rx="4" fill="#DAE8DE" />
        <rect x="376" y="344" width="40" height="16" rx="8" fill="#DFF7DE" />
        <circle cx="386" cy="352" r="3.2" fill="#2FA84F" />
        <rect x="393" y="349" width="16" height="6" rx="3" fill="#8FCF9C" />
      </g>

      {/* card de sinais vitais dentro da tela */}
      <g>
        <rect x="214" y="392" width="202" height="70" rx="18" fill="#FFFFFF" stroke="#DFECE2" />
        <rect x="228" y="406" width="60" height="7" rx="3.5" fill="#D7E6DB" />
        <rect x="228" y="421" width="38" height="12" rx="6" fill="#3E8254" opacity="0.18" />
        <path
          d="M300 438 h16 l6 -18 l9 30 l8 -20 l7 8 h48"
          fill="none" stroke="#3E8254" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"
        />
        <rect x="228" y="440" width="52" height="7" rx="3.5" fill="#E6EFE8" />
      </g>

      {/* controles da chamada */}
      <g>
        <circle cx="252" cy="506" r="22" fill="#EBF4ED" stroke="#DAE8DE" />
        <path d="M252 498 a5 5 0 0 1 5 5 v3 a5 5 0 0 1 -10 0 v-3 a5 5 0 0 1 5 -5 z" fill="#2B4F35" />
        <path d="M244 507 a8 8 0 0 0 16 0 M252 515 v4" stroke="#2B4F35" strokeWidth="2" fill="none" strokeLinecap="round" />

        <circle cx="315" cy="506" r="22" fill="#EBF4ED" stroke="#DAE8DE" />
        <rect x="304" y="499" width="16" height="14" rx="4" fill="#2B4F35" />
        <path d="M322 502 l6 -4 v18 l-6 -4 z" fill="#2B4F35" />

        <circle cx="378" cy="506" r="22" fill="#FF5A5F" />
        <path
          d="M369 509 c6 -6 18 -6 24 0 l2 -4 c-7 -8 -21 -8 -28 0 z"
          fill="#FFFFFF" transform="rotate(134 378 506)"
        />
      </g>

      {/* home indicator */}
      <rect x="285" y="548" width="60" height="5" rx="2.5" fill="#D7E6DB" />

      {/* ------------------------------------------- cartões flutuantes */}
      <g filter="url(#pcCardShadow)" className="animate-float" style={{ animationDelay: "-1.5s" }}>
        <rect x="14" y="176" width="196" height="74" rx="20" fill="#FFFFFF" />
        <rect x="30" y="196" width="36" height="36" rx="12" fill="#E4F9F0" />
        <path d="M40 214 l5 5 l10 -11" stroke="#1FA971" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="78" y="199" width="112" height="9" rx="4.5" fill="#0B1B2B" opacity="0.72" />
        <rect x="78" y="215" width="76" height="7" rx="3.5" fill="#0B1B2B" opacity="0.28" />
      </g>

      <g filter="url(#pcCardShadow)" className="animate-float" style={{ animationDelay: "-4s" }}>
        <rect x="398" y="352" width="190" height="86" rx="20" fill="#FFFFFF" />
        <rect x="414" y="370" width="88" height="9" rx="4.5" fill="#0B1B2B" opacity="0.72" />
        <path
          d="M414 412 h14 l6 -16 l9 28 l8 -20 l6 8 h33"
          fill="none" stroke="#FF5A5F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
        />
        <path d="M556 384 c0 -7 -10 -9 -12 -2 c-2 -7 -12 -5 -12 2 c0 8 12 14 12 14 s12 -6 12 -14 z" fill="#FF5A5F" opacity="0.9" />
      </g>

      <g filter="url(#pcCardShadow)" className="animate-float" style={{ animationDelay: "-2.8s" }}>
        <rect x="26" y="452" width="176" height="70" rx="20" fill="#FFFFFF" />
        <circle cx="60" cy="487" r="18" fill="#E7F3EA" />
        <circle cx="60" cy="487" r="11" fill="none" stroke="#2F6941" strokeWidth="2.4" />
        <path d="M60 480 v7 l5 3" stroke="#2F6941" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="88" y="475" width="94" height="9" rx="4.5" fill="#0B1B2B" opacity="0.72" />
        <rect x="88" y="492" width="60" height="7" rx="3.5" fill="#0B1B2B" opacity="0.28" />
      </g>
    </svg>
  );
}

export default PhoneConsult;
