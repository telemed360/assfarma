"use client";

import { useEffect, useRef, useState } from "react";
import { BRAZIL_STATES } from "./brazilStates";

/**
 * Mapa do Brasil animado: os 27 estados chegam de fora e se encaixam,
 * formando o país; depois um pino cai em cada estado.
 * A animação começa quando o mapa entra na tela e respeita
 * "reduzir movimento" (nesse caso, já aparece montado).
 */

const CX = 306;
const CY = 320;
const STATE_STEP = 55; // ms entre um estado e o próximo
const STATE_DUR = 750;
const PIN_START = BRAZIL_STATES.length * STATE_STEP + STATE_DUR - 150;
const PIN_STEP = 45;

// deslocamento inicial de cada estado: para fora do centro do mapa
const pieces = BRAZIL_STATES.map((s, i) => {
  const [x, y] = s.pin;
  const dx = x - CX;
  const dy = y - CY;
  const len = Math.hypot(dx, dy) || 1;
  const push = 70 + (i % 3) * 18;
  return {
    ...s,
    fromX: Math.round((dx / len) * push),
    fromY: Math.round((dy / len) * push),
    rot: ((i * 37) % 13) - 6,
  };
});

export function BrazilMap({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="-10 -24 633 683"
      overflow="visible"
      className={`brazil-map ${on ? "is-on" : ""} ${className}`}
      role="img"
      aria-label="Mapa do Brasil com um pino em cada um dos 27 estados atendidos pela AssFarma"
    >
      <defs>
        <linearGradient id="bmFill" gradientUnits="userSpaceOnUse" x1="80" y1="0" x2="540" y2="640">
          <stop offset="0" stopColor="#DDEDE1" />
          <stop offset="0.55" stopColor="#A6CFB0" />
          <stop offset="1" stopColor="#5FA073" />
        </linearGradient>
        <filter id="bmShadow" x="-15%" y="-15%" width="130%" height="135%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#1C3223" floodOpacity="0.18" />
        </filter>
        <filter id="bmPinShadow" x="-60%" y="-40%" width="220%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.6" floodColor="#1C3223" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#bmShadow)" fill="url(#bmFill)" stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round">
        {pieces.map((s, i) => (
          <path
            key={s.uf}
            d={s.d}
            className="bm-state"
            style={
              {
                "--fx": `${s.fromX}px`,
                "--fy": `${s.fromY}px`,
                "--fr": `${s.rot}deg`,
                transitionDelay: `${i * STATE_STEP}ms`,
                transitionDuration: `${STATE_DUR}ms`,
              } as React.CSSProperties
            }
          >
            <title>{s.name}</title>
          </path>
        ))}
      </g>

      <g aria-hidden>
        {pieces.map((s, i) => {
          const delay = PIN_START + i * PIN_STEP;
          return (
            <g key={s.uf} transform={`translate(${s.pin[0]} ${s.pin[1]})`}>
              <ellipse
                className="bm-pulse"
                rx="9"
                ry="3.6"
                style={{ animationDelay: `${delay + 500}ms` }}
              />
              <g className="bm-pin" style={{ animationDelay: `${delay}ms` }} filter="url(#bmPinShadow)">
                <path
                  d="M0 0C-1.6-4.2-7.2-7.6-7.2-13.2a7.2 7.2 0 1 1 14.4 0C7.2-7.6 1.6-4.2 0 0Z"
                  fill="#F16536"
                  stroke="#FFFFFF"
                  strokeWidth="1.4"
                />
                <circle cy="-13.2" r="2.7" fill="#FFFFFF" />
              </g>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export default BrazilMap;
