import { Eye, Glasses, Percent, CalendarCheck } from "lucide-react";
import Reveal from "./Reveal";
import { waLink } from "@/lib/site";

const items = [
  { icon: Eye, title: "Teleorientação oftalmológica", desc: "Converse com um profissional sobre sintomas, prevenção e quando procurar um exame presencial." },
  { icon: Glasses, title: "Óculos e lentes com desconto", desc: "Condições especiais em óticas parceiras para armações, lentes de grau e lentes de contato." },
  { icon: Percent, title: "Exames com valor reduzido", desc: "Mapeamento de retina, tonometria e refração com preços negociados na rede credenciada." },
  { icon: CalendarCheck, title: "Acompanhamento periódico", desc: "Lembretes anuais de revisão da visão para você e para as crianças da casa." },
];

export function VisionHealth() {
  return (
    <section id="saude-visual" className="section relative overflow-hidden">
      <div className="container-jmx">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal><span className="eyebrow">Saúde Visual</span></Reveal>
            <Reveal delay={70}>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">
                Um benefício a mais para quem enxerga longe
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mt-5">
                O programa Saúde Visual da AssFarma reúne orientação especializada e descontos em
                óticas e exames, porque cuidar da visão também é cuidar da qualidade de vida.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {items.map((it, i) => (
                <Reveal key={it.title} delay={150 + i * 70}>
                  <div className="card card-hover h-full p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <it.icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-[0.9375rem] font-bold">{it.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{it.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={380}>
              <a
                href={waLink("Olá! Quero saber mais sobre o programa Saúde Visual da AssFarma.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg mt-9"
              >
                Quero saber mais
              </a>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-md
                           bg-[radial-gradient(circle_at_70%_25%,rgba(124,192,143,0.42),transparent_62%),radial-gradient(circle_at_22%_80%,rgba(187,218,195,0.55),transparent_60%)] blur-2xl"
                aria-hidden
              />
              <VisionArt className="mx-auto w-full max-w-[26rem] lg:max-w-lg" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function VisionArt({ className = "" }: { className?: string }) {
  const chart = ["E", "F P", "T O Z", "L P E D", "P E C F D"];
  return (
    <svg viewBox="62 18 398 424" overflow="visible" className={className} role="img" aria-label="Tabela de acuidade visual e óculos">
      <defs>
        <linearGradient id="vhBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F4F9F5" />
          <stop offset="1" stopColor="#E3F0E6" />
        </linearGradient>
        <linearGradient id="vhAcc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2F6941" />
          <stop offset="1" stopColor="#6DB582" />
        </linearGradient>
        <filter id="vhShadow" x="-25%" y="-25%" width="150%" height="160%">
          <feDropShadow dx="0" dy="20" stdDeviation="22" floodColor="#233F2B" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* tabela de Snellen */}
      <g filter="url(#vhShadow)">
        <rect x="96" y="34" width="290" height="330" rx="24" fill="url(#vhBg)" stroke="#D7E6DB" />
        <rect x="96" y="34" width="290" height="52" rx="24" fill="#FFFFFF" />
        <rect x="96" y="70" width="290" height="16" fill="#FFFFFF" />
        <rect x="128" y="54" width="112" height="10" rx="5" fill="#D7E6DB" />
        <circle cx="356" cy="59" r="7" fill="url(#vhAcc)" />
      </g>

      <g textAnchor="middle" fill="#2B4F35" fontFamily="var(--font-display, sans-serif)" fontWeight="700">
        {chart.map((row, i) => (
          <text key={row} x="241" y={132 + i * 46} fontSize={40 - i * 6} letterSpacing={7 - i}>
            {row}
          </text>
        ))}
      </g>

      {/* óculos */}
      <g transform="translate(258 336)" filter="url(#vhShadow)">
        <g stroke="url(#vhAcc)" strokeWidth="9" fill="#FFFFFF" fillOpacity="0.92">
          <circle cx="-74" cy="42" r="46" />
          <circle cx="74" cy="42" r="46" />
        </g>
        <path d="M-28 40 q28 -18 56 0" stroke="url(#vhAcc)" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M-120 42 q-34 -6 -48 -30" stroke="url(#vhAcc)" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M120 42 q34 -6 48 -30" stroke="url(#vhAcc)" strokeWidth="9" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default VisionHealth;
