"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** atraso em ms */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Anima o elemento quando ele entra na viewport (sem dependências externas).
 * Também revela o conteúdo se o usuário rolar rápido demais e o elemento
 * passar direto; a animação nunca pode esconder informação.
 */
export function Reveal({ children, className = "", delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      io.disconnect();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        // visível agora, ou já passou pelo topo da tela (rolagem rápida)
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight * 0.92) {
          reveal();
        }
      },
      { threshold: [0, 0.1], rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(el);

    // rede de segurança: nada fica invisível por mais de 2,5s
    const safety = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) reveal();
    }, 2500);

    return () => {
      window.clearTimeout(safety);
      io.disconnect();
    };
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
