type PortraitProps = {
  /** Área do "vídeo" onde a pessoa aparece */
  x: number;
  y: number;
  w: number;
  h: number;
  rx?: number;
  id: string;
  skin?: string;
  skinShade?: string;
  hair?: string;
  hairBack?: string;
  clothes?: string;
  clothesShade?: string;
  collar?: string;
  bg?: [string, string];
  stethoscope?: boolean;
  longHair?: boolean;
  /** desloca a pessoa dentro do quadro */
  scale?: number;
};

/**
 * Retrato vetorial estilizado usado nas telas de consulta.
 * Tudo é desenhado em SVG; nenhuma imagem externa é carregada.
 */
export function Portrait({
  x, y, w, h, rx = 20, id,
  skin = "#F3C7A8", skinShade = "#E2AC89",
  hair = "#2E2033", hairBack = "#241926",
  clothes = "#FFFFFF", clothesShade = "#E6EEF2",
  collar = "#3E8254",
  bg = ["#E6F3E9", "#B8DBC1"],
  stethoscope = true,
  longHair = false,
  scale = 1,
}: PortraitProps) {
  const cx = x + w / 2;
  // referência: cabeça a ~46% da altura do quadro
  const headCy = y + h * 0.44;
  const s = (w / 204) * scale;

  const headRx = 26 * s;
  const headRy = 29 * s;
  const shoulderY = headCy + headRy + 22 * s;

  return (
    <g>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={bg[0]} />
          <stop offset="1" stopColor={bg[1]} />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect x={x} y={y} width={w} height={h} rx={rx} />
        </clipPath>
      </defs>

      <rect x={x} y={y} width={w} height={h} rx={rx} fill={`url(#${id}-bg)`} />

      <g clipPath={`url(#${id}-clip)`}>
        {/* halo suave atrás da pessoa */}
        <circle cx={cx} cy={headCy + 12 * s} r={w * 0.42} fill="#FFFFFF" opacity="0.42" />

        {/* cabelo de trás (cabelo longo) */}
        {longHair && (
          <path
            d={`M ${cx - headRx - 6 * s} ${headCy - 4 * s}
                C ${cx - headRx - 12 * s} ${headCy + 46 * s}, ${cx - headRx - 4 * s} ${shoulderY + 26 * s}, ${cx - headRx + 4 * s} ${shoulderY + 34 * s}
                L ${cx + headRx - 4 * s} ${shoulderY + 34 * s}
                C ${cx + headRx + 4 * s} ${shoulderY + 26 * s}, ${cx + headRx + 12 * s} ${headCy + 46 * s}, ${cx + headRx + 6 * s} ${headCy - 4 * s}
                C ${cx + headRx + 8 * s} ${headCy - 40 * s}, ${cx - headRx - 8 * s} ${headCy - 40 * s}, ${cx - headRx - 6 * s} ${headCy - 4 * s} Z`}
            fill={hairBack}
          />
        )}

        {/* ombros / jaleco */}
        <path
          d={`M ${cx - 62 * s} ${y + h + 4}
              C ${cx - 60 * s} ${shoulderY + 6 * s}, ${cx - 40 * s} ${shoulderY - 12 * s}, ${cx - 20 * s} ${shoulderY - 18 * s}
              L ${cx + 20 * s} ${shoulderY - 18 * s}
              C ${cx + 40 * s} ${shoulderY - 12 * s}, ${cx + 60 * s} ${shoulderY + 6 * s}, ${cx + 62 * s} ${y + h + 4} Z`}
          fill={clothes}
        />
        {/* gola em V com a cor da marca */}
        <path
          d={`M ${cx - 19 * s} ${shoulderY - 18 * s}
              L ${cx} ${shoulderY + 20 * s}
              L ${cx + 19 * s} ${shoulderY - 18 * s}
              C ${cx + 10 * s} ${shoulderY - 22 * s}, ${cx - 10 * s} ${shoulderY - 22 * s}, ${cx - 19 * s} ${shoulderY - 18 * s} Z`}
          fill={collar}
        />
        <path
          d={`M ${cx - 19 * s} ${shoulderY - 18 * s} L ${cx} ${shoulderY + 20 * s} L ${cx - 6 * s} ${y + h + 4} L ${cx - 26 * s} ${y + h + 4} Z`}
          fill={clothesShade}
          opacity="0.55"
        />

        {/* pescoço */}
        <path
          d={`M ${cx - 11 * s} ${headCy + headRy - 8 * s} h ${22 * s} v ${20 * s}
              a ${11 * s} ${11 * s} 0 0 1 ${-22 * s} 0 Z`}
          fill={skinShade}
        />

        {/* cabeça */}
        <ellipse cx={cx} cy={headCy} rx={headRx} ry={headRy} fill={skin} />
        {/* orelhas */}
        <circle cx={cx - headRx} cy={headCy + 3 * s} r={4.6 * s} fill={skinShade} />
        <circle cx={cx + headRx} cy={headCy + 3 * s} r={4.6 * s} fill={skinShade} />

        {/* cabelo da frente */}
        <path
          d={`M ${cx - headRx - 1 * s} ${headCy + 2 * s}
              C ${cx - headRx - 4 * s} ${headCy - 26 * s}, ${cx - 16 * s} ${headCy - 36 * s}, ${cx} ${headCy - 35 * s}
              C ${cx + 16 * s} ${headCy - 36 * s}, ${cx + headRx + 4 * s} ${headCy - 26 * s}, ${cx + headRx + 1 * s} ${headCy + 2 * s}
              C ${cx + headRx - 1 * s} ${headCy - 6 * s}, ${cx + 20 * s} ${headCy - 14 * s}, ${cx + 12 * s} ${headCy - 17 * s}
              C ${cx + 4 * s} ${headCy - 12 * s}, ${cx - 8 * s} ${headCy - 12 * s}, ${cx - 16 * s} ${headCy - 14 * s}
              C ${cx - 21 * s} ${headCy - 10 * s}, ${cx - headRx + 2 * s} ${headCy - 4 * s}, ${cx - headRx - 1 * s} ${headCy + 2 * s} Z`}
          fill={hair}
        />

        {/* olhos e sorriso */}
        <ellipse cx={cx - 9 * s} cy={headCy + 3 * s} rx={2.5 * s} ry={3.1 * s} fill="#22323F" />
        <ellipse cx={cx + 9 * s} cy={headCy + 3 * s} rx={2.5 * s} ry={3.1 * s} fill="#22323F" />
        <path
          d={`M ${cx - 7 * s} ${headCy + 14 * s} q ${7 * s} ${6 * s} ${14 * s} 0`}
          stroke="#B3705A" strokeWidth={2 * s} strokeLinecap="round" fill="none"
        />

        {/* estetoscópio */}
        {stethoscope && (
          <g stroke="#1F4434" strokeWidth={2.6 * s} fill="none" strokeLinecap="round">
            <path
              d={`M ${cx - 15 * s} ${shoulderY - 16 * s}
                  C ${cx - 30 * s} ${shoulderY + 6 * s}, ${cx - 26 * s} ${shoulderY + 32 * s}, ${cx - 6 * s} ${shoulderY + 36 * s}`}
            />
            <path
              d={`M ${cx + 15 * s} ${shoulderY - 16 * s}
                  C ${cx + 30 * s} ${shoulderY + 8 * s}, ${cx + 26 * s} ${shoulderY + 40 * s}, ${cx + 12 * s} ${shoulderY + 46 * s}`}
            />
            <circle cx={cx + 11 * s} cy={shoulderY + 50 * s} r={5.4 * s} fill="#1F4434" stroke="none" />
          </g>
        )}
      </g>

      <rect
        x={x} y={y} width={w} height={h} rx={rx}
        fill="none" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.5"
      />
    </g>
  );
}

export default Portrait;
