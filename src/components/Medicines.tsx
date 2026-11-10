import Image from "next/image";
import { ArrowRight, BadgeCheck, Check, FileText, MapPin, MessageCircle, Pill, ShieldCheck, Sparkles, Stethoscope, Store, Wallet } from "lucide-react";
import Reveal from "./Reveal";
import { planGroups, waLink } from "@/lib/site";

/**
 * Seção "Plano de Medicamentos (PBM)": crédito mensal exclusivo para medicamentos.
 * Layout centralizado (diferente do hero), com os 3 níveis de crédito em formato de cartão.
 * Fonte: apresentação PBM e tabela de planos da Assfarma.
 */
const levels = [1, 2, 3] as const;

const byLevel = (level: number, id: string) =>
  planGroups.find((g) => g.id === id)?.tiers.find((t) => t.level === level)?.credit ?? "";

const short = (v: string) => v.replace(",00", "");

const perks = [
  { icon: FileText, text: "Receita digital válida em todo o Brasil" },
  { icon: ShieldCheck, text: "Sem carência e sem fidelidade" },
  { icon: BadgeCheck, text: "Marca, genéricos e similares" },
  { icon: Wallet, text: "Sem pagar do bolso, dentro do crédito" },
];

const steps = [
  { icon: Sparkles, title: "Escolha o plano e o crédito", desc: "Individual, casal ou família." },
  { icon: Check, title: "Contrate", desc: "O benefício é liberado na hora, sem carência." },
  { icon: Stethoscope, title: "Consulte e receba a receita", desc: "A receita digital vai direto para o app." },
  { icon: Pill, title: "Retire na farmácia", desc: "Use o saldo do mês no medicamento." },
];

const cardStyles = [
  "bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 md:-rotate-3 md:translate-y-4",
  "bg-gradient-to-br from-accent-500 via-accent-600 to-accent-800 md:-translate-y-2 md:scale-[1.04]",
  "bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 md:rotate-3 md:translate-y-4",
];

export function Medicines() {
  const ask = waLink("Olá! Vim pelo site e quero saber do plano com crédito para medicamentos (PBM).");

  return (
    <section id="medicamentos" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* fundo quente, para separar visualmente do hero */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-50 via-[#FFF8F4] to-white" />
        <div className="absolute left-1/2 top-0 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-200 to-transparent" />
      </div>

      <div className="container-jmx">
        {/* ------------------------------------------------ cabeçalho centralizado */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-glow">
              <Pill className="h-3.5 w-3.5" aria-hidden />
              Plano de Medicamentos (PBM)
            </span>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-6 text-[2.15rem] font-extrabold leading-[1.12] sm:text-5xl lg:text-[3.4rem]">
              Da consulta ao medicamento,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
                  100% coberto
                </span>
                <svg viewBox="0 0 300 18" preserveAspectRatio="none" className="absolute -bottom-1.5 left-0 h-2.5 w-full text-accent-300/70" aria-hidden>
                  <path d="M3 13 C 80 3, 200 3, 297 11" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              pelo seu crédito
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="lead mx-auto mt-6 max-w-2xl">
              Todo plano Assfarma vem com um <strong className="font-semibold text-ink">crédito mensal exclusivo
              para medicamentos</strong>. O médico receita e você compra o medicamento na farmácia sem tirar
              dinheiro do bolso, dentro do saldo do mês.
            </p>
          </Reveal>
        </div>

        {/* ------------------------------------------------ 3 cartões de crédito */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:mt-16 md:grid-cols-3 md:gap-5" aria-label="Níveis de crédito mensal para medicamentos">
          {levels.map((level, i) => {
            const ind = byLevel(level, "individual");
            const cas = byLevel(level, "casal");
            const fam = byLevel(level, "familia");
            return (
              <Reveal key={level} delay={i * 90}>
                <div
                  className={`relative aspect-[1.586] overflow-hidden rounded-[1.6rem] p-5 text-white shadow-lift ring-1 ring-white/10 transition-transform duration-500 hover:rotate-0 hover:translate-y-0 sm:p-6 ${cardStyles[i]}`}
                >
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.6rem] [clip-path:inset(0_round_1.6rem)]">
                    <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
                    <Image src="/brand/logo-mark-white.png" alt="" width={512} height={512} className="absolute -bottom-12 -right-8 w-48 max-w-none opacity-[0.1]" />
                  </div>

                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <Image
                        src={i === 1 ? "/brand/logo-horizontal-allwhite.png" : "/brand/logo-horizontal-white.png"}
                        alt=""
                        width={1522}
                        height={345}
                        className="h-11 w-auto max-w-[60%] object-contain object-left md:h-8 md:max-w-none"
                      />
                      <span className="rounded-full bg-white/15 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wider ring-1 ring-white/25">
                        Crédito {String(level).padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-white/70">Crédito mensal individual</p>
                      <p className="mt-0.5 font-display text-[2.6rem] font-extrabold leading-none">
                        <span className="mr-1 align-top text-lg text-white/80">R$</span>
                        {short(ind)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-[0.75rem] font-semibold text-white/85">
                      <span>Casal R$ {short(cas)}</span>
                      <span className="h-1 w-1 rounded-full bg-white/50" />
                      <span>Família R$ {short(fam)}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ------------------------------------------------ rede credenciada */}
        <Reveal delay={60}>
          <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-5 rounded-3xl border-2 border-accent-200 bg-white p-6 text-center shadow-card sm:flex-row sm:p-7 sm:text-left">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-glow">
              <Store className="h-7 w-7" aria-hidden />
            </span>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-600">Rede credenciada</p>
              <p className="mt-1 font-display text-2xl font-extrabold leading-tight text-ink sm:text-[1.75rem]">
                Mais de 25 mil farmácias credenciadas
              </p>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                Use o seu crédito para comprar o medicamento receitado nas farmácias da rede credenciada,
                em todo o Brasil. É só se identificar no balcão e apresentar a receita.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700 ring-1 ring-brand-100">
              <MapPin className="h-4 w-4" aria-hidden />
              Todo o Brasil
            </span>
          </div>
        </Reveal>

        {/* ------------------------------------------------ faixa de vantagens */}
        <Reveal delay={80}>
          <ul className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-accent-100 bg-accent-100 shadow-soft lg:grid-cols-4">
            {perks.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 bg-white px-4 py-4 sm:px-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <Icon className="h-[1.05rem] w-[1.05rem]" aria-hidden />
                </span>
                <span className="text-sm font-semibold leading-snug text-ink-soft">{text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ------------------------------------------------ como funciona (compacto) */}
        <div className="mx-auto mt-14 max-w-5xl">
          <Reveal>
            <h3 className="text-center text-lg font-extrabold sm:text-xl">Da contratação ao uso, em 4 passos</h3>
          </Reveal>

          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <Reveal as="li" key={title} delay={i * 60}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft">
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 text-white">
                    <Icon className="h-4 w-4" aria-hidden />
                    <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[0.5625rem] font-bold text-white ring-2 ring-white">
                      {i + 1}
                    </span>
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-snug text-ink">{title}</p>
                    <p className="mt-0.5 text-[0.8125rem] leading-snug text-ink-muted">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ------------------------------------------------ chamadas */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#planos" className="btn-primary btn-lg">
              Ver planos com crédito
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href={ask} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-lg">
              <MessageCircle className="h-4 w-4" aria-hidden />
              Tirar dúvida no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Medicines;
