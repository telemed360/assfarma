import { ShieldCheck, Zap, CreditCard, ArrowRight, Play, Pill } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import { heroHighlights, lowestPrice } from "@/lib/site";

const badges = [
  { icon: Zap, label: "100% digital" },
  { icon: ShieldCheck, label: "Sem carência" },
  { icon: CreditCard, label: "Sem taxa de adesão" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[6.5rem] lg:pt-32" id="inicio">
      {/* fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/90 via-white to-white" />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-200/45 blur-3xl" />
        <div className="absolute -left-32 top-40 h-[26rem] w-[26rem] rounded-full bg-brand-100/70 blur-3xl" />
      </div>

      <div className="container-jmx">
        <div className="grid items-center gap-10 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-10">
          {/* coluna de texto */}
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="eyebrow">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-pulseRing" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                  </span>
                  Telemedicina regulamentada pelo CFM
                </span>
                <a
                  href="#medicamentos"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 px-3.5 py-1.5
                             text-xs font-bold uppercase tracking-[0.12em] text-white shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  <Pill className="h-3.5 w-3.5" aria-hidden />
                  Com crédito para medicamentos (PBM)
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-5 text-[2.4rem] font-extrabold leading-[1.06] sm:text-5xl lg:text-[3.4rem]">
                Cuide da sua saúde{" "}
                <span className="text-gradient-brand">quantas vezes precisar</span>, sem sair de casa
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="lead mt-5 max-w-xl">
                Pronto atendimento 24 horas, mais de 30 especialidades, saúde mental e nutrição,
                tudo pelo celular, tablet ou computador. Você assina hoje e já consulta hoje.
              </p>
            </Reveal>

            <Reveal delay={190}>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                {badges.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft">
                    <Icon className="h-[1.05rem] w-[1.05rem] text-brand-500" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#planos" className="btn-primary btn-lg">
                  Ver planos e preços
                  <ArrowRight className="h-[1.05rem] w-[1.05rem]" aria-hidden />
                </a>
                <a href="#como-funciona" className="btn-ghost btn-lg">
                  <Play className="h-4 w-4" aria-hidden />
                  Como funciona
                </a>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <p className="mt-6 text-sm font-semibold text-brand-700">
                Planos a partir de{" "}
                <span className="text-xl font-extrabold text-brand-600">R$ {lowestPrice}</span>
                <span className="font-medium text-ink-muted">/mês, com crédito para medicamentos</span>
              </p>
            </Reveal>
          </div>

          {/* foto */}
          <Reveal delay={160} className="relative">
            <div className="relative mx-auto max-w-[36rem] lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2.75rem] bg-gradient-to-br from-brand-200/70 via-brand-100/40 to-accent-200/50 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] shadow-lift ring-1 ring-black/5">
                <Image
                  src="/images/hero-medica.jpg"
                  alt="Médica sorrindo, de jaleco e estetoscópio, segurando um tablet"
                  width={1752}
                  height={1536}
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="aspect-[4/5] h-auto w-full object-cover object-[40%_center] sm:aspect-[0.92]"
                />
              </div>

              {/* selo: médico online */}
              <div className="absolute flex animate-float items-center rounded-2xl bg-white/95 shadow-card ring-1 ring-brand-100 backdrop-blur -bottom-5 left-2 gap-2 px-3 py-2 md:-left-6 md:bottom-auto md:top-8 md:gap-2.5 md:px-4 md:py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-pulseRing" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-ink md:text-sm">Médico online agora</p>
                  <p className="hidden text-xs text-ink-muted md:block">Pronto atendimento 24h</p>
                </div>
              </div>

              {/* selo: receita */}
              <div
                className="absolute flex animate-float items-center rounded-2xl bg-white/95 shadow-card ring-1 ring-brand-100 backdrop-blur -bottom-5 right-2 gap-2 px-3 py-2 md:-right-5 md:gap-2.5 md:px-4 md:py-3"
                style={{ animationDelay: "-3.5s" }}
              >
                <span className="hidden h-9 w-9 items-center justify-center rounded-xl bg-accent-50 text-accent-600 md:flex">
                  <Pill className="h-3.5 w-3.5 md:h-[1.05rem] md:w-[1.05rem]" aria-hidden />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-ink md:text-sm">Receita + Medicamentos</p>
                  <p className="hidden text-xs text-ink-muted md:block">na rede credenciada</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* faixa de destaques */}
      <div className="relative border-y border-slate-200/80 bg-white/70 backdrop-blur">
        <div className="overflow-hidden py-4">
          <div className="flex w-max animate-marquee gap-10 pr-10">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-10" aria-hidden={dup === 1}>
                {heroHighlights.map((h) => (
                  <span key={h} className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                    {h}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
