"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Info, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { companyPlan, planFeatures, planGroups, waLink, type PlanGroup } from "@/lib/site";

/** Textos de cada card. */
const cardInfo: Record<
  PlanGroup["id"],
  { name: string; summary: string; people: string; lives: number; badge?: string; featured?: boolean }
> = {
  individual: {
    name: "Vida Individual",
    summary: "Para quem quer cuidar da própria saúde.",
    people: "Para 1 pessoa",
    lives: 1,
    badge: "Mais acessível",
    featured: true,
  },
  casal: {
    name: "Vida Casal",
    summary: "Para você e mais uma pessoa no mesmo plano.",
    people: "Para 2 pessoas",
    lives: 2,
    badge: "Mais equilibrado",
  },
  familia: {
    name: "Vida Familiar",
    summary: "Para o titular e mais 3 dependentes.",
    people: "Até 4 pessoas",
    lives: 4,
    badge: "Mais completo",
    featured: true,
  },
};

const toNumber = (v: string) => Number(v.replace(/\./g, "").replace(",", "."));
const brl = (n: number) => n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** Efeitos de fundo dos cards: sombreamento radial, brilhos, textura de pontos e marca-d'água. */
function CardFx({ tone }: { tone: "green" | "peach" }) {
  const glow = tone === "green" ? "bg-white/60" : "bg-white/55";
  const glow2 = tone === "green" ? "bg-brand-300/40" : "bg-accent-300/40";
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[1.75rem] [clip-path:inset(0_round_1.75rem)]" aria-hidden>
      {/* sombreamento radial: luz no alto à esquerda, sombra no canto de baixo à direita */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            tone === "green"
              ? "radial-gradient(110% 70% at 0% 0%, rgba(255,255,255,0.55), transparent 60%), radial-gradient(90% 70% at 100% 100%, rgba(35,63,43,0.28), transparent 65%), radial-gradient(60% 40% at 50% 115%, rgba(35,63,43,0.18), transparent 70%)"
              : "radial-gradient(110% 70% at 0% 0%, rgba(255,255,255,0.55), transparent 60%), radial-gradient(90% 70% at 100% 100%, rgba(182,59,23,0.22), transparent 65%), radial-gradient(60% 40% at 50% 115%, rgba(182,59,23,0.14), transparent 70%)",
        }}
      />
      <div
        className={`absolute inset-0 rounded-[1.75rem] ${
          tone === "green"
            ? "shadow-[inset_0_-50px_70px_-40px_rgba(35,63,43,0.35),inset_0_1px_0_rgba(255,255,255,0.7)]"
            : "shadow-[inset_0_-50px_70px_-40px_rgba(182,59,23,0.3),inset_0_1px_0_rgba(255,255,255,0.7)]"
        }`}
      />
      <div className={`absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl ${glow}`} />
      <div className={`absolute -bottom-24 -left-16 h-64 w-64 rounded-full blur-3xl ${glow2}`} />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,black,transparent_55%)]" />
      <Image
        src="/brand/logo-mark-allwhite.png"
        alt=""
        width={512}
        height={512}
        className="absolute -bottom-14 -right-14 w-44 max-w-none opacity-40"
      />
    </div>
  );
}

function PlanCard({ group, index }: { group: PlanGroup; index: number }) {
  const [level, setLevel] = useState<1 | 2 | 3>(1);
  const tier = group.tiers.find((t) => t.level === level) ?? group.tiers[0];
  const info = cardInfo[group.id];
  const featured = Boolean(info.featured);
  const perLife = brl(toNumber(tier.credit) / info.lives);

  const href =
    tier.checkoutUrl ??
    waLink(
      `Olá! Quero assinar o Plano ${info.name} da Assfarma com crédito de R$ ${tier.credit} para medicamentos (${tier.code}).`,
    );

  // cores: o Familiar é destacado (fundo verde musgo, como no layout anterior)
  const c = featured
    ? {
        // verde suave, no mesmo tom do pêssego (Individual e Familiar)
        card: "bg-gradient-to-b from-brand-100 to-brand-200 text-ink shadow-card ring-1 ring-brand-300",
        title: "text-brand-900",
        text: "text-ink-soft",
        pill: "bg-white/80 text-brand-700 ring-1 ring-brand-200",
        box: "border-white/60 bg-white/75",
        label: "text-brand-700/80",
        track: "border-brand-200 bg-white",
        on: "bg-brand-600 text-white shadow-soft",
        off: "text-ink-soft hover:bg-brand-50",
        boxText: "text-ink-soft",
        strong: "text-ink",
        price: "text-brand-900",
        muted: "text-ink-muted",
        btn: "btn bg-brand-700 text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-800",
        divider: "border-brand-300/60",
        check: "text-brand-600",
        item: "text-ink-soft",
      }
    : {
        // cards intercalados em pêssego/laranja suave (Casal e Empresarial)
        card: "bg-gradient-to-b from-accent-100 to-accent-200 text-ink shadow-card ring-1 ring-accent-300 hover:-translate-y-1 hover:shadow-card",
        title: "text-brand-900",
        text: "text-ink-soft",
        pill: "bg-white/80 text-accent-700 ring-1 ring-accent-200",
        box: "border-white/60 bg-white/75",
        label: "text-accent-700/80",
        track: "border-accent-200 bg-white",
        on: "bg-accent-500 text-white shadow-soft",
        off: "text-ink-soft hover:bg-accent-50",
        boxText: "text-ink-soft",
        strong: "text-ink",
        price: "text-brand-900",
        muted: "text-ink-muted",
        btn: "btn-primary",
        divider: "border-accent-300/60",
        check: "text-accent-600",
        item: "text-ink-soft",
      };

  return (
    <Reveal delay={index * 80} className="h-full">
      <article className={`group relative isolate flex h-full flex-col rounded-[1.75rem] p-7 transition-all duration-300 ${c.card}`}>
        <CardFx tone={featured ? "green" : "peach"} />
        {info.badge && (
          <span
            className={`absolute -top-3 left-7 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white ${
              featured
                ? "bg-gradient-to-r from-accent-600 to-accent-500 shadow-glow"
                : "bg-gradient-to-r from-brand-700 to-brand-600 shadow-soft"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {info.badge}
          </span>
        )}

        <h3 className={`font-display text-xl font-extrabold ${c.title}`}>{info.name}</h3>
        <p className={`mt-1.5 min-h-[2.75rem] text-sm leading-snug ${c.text}`}>{info.summary}</p>
        <span className={`mt-2 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ${c.pill}`}>{info.people}</span>

        {/* crédito */}
        <div className={`mt-6 rounded-2xl border p-4 ${c.box}`}>
          <p className={`text-[0.6875rem] font-bold uppercase tracking-[0.12em] ${c.label}`}>
            Crédito mensal para medicamentos
          </p>
          <div
            role="radiogroup"
            aria-label={`Crédito mensal do plano ${info.name}`}
            className={`mt-3 grid grid-cols-3 gap-1 rounded-full border p-1 ${c.track}`}
          >
            {group.tiers.map((t) => {
              const on = t.level === level;
              return (
                <button
                  key={t.code}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setLevel(t.level)}
                  className={`rounded-full px-1 py-2 text-sm font-bold transition-all duration-200 ${on ? c.on : c.off}`}
                >
                  {t.credit.replace(",00", "")}
                </button>
              );
            })}
          </div>
          <p className={`mt-3 min-h-[3.75rem] text-[0.8125rem] leading-snug ${c.boxText}`}>
            Crédito de <strong className={c.strong}>R$ {tier.credit}</strong> por mês para compra de medicamentos
            {info.lives > 1 && (
              <>
                , sendo <strong className={c.strong}>R$ {perLife}</strong> por vida
              </>
            )}
          </p>
        </div>

        <p className="mt-6 flex items-end gap-1.5">
          <span className={`pb-1.5 text-lg font-bold ${c.price}`}>R$</span>
          <span className={`font-display text-[2.9rem] font-extrabold leading-none ${c.price}`}>{tier.price}</span>
          <span className={`pb-1.5 text-sm font-medium ${c.muted}`}>/mês</span>
        </p>

        <a href={href} target="_blank" rel="noopener noreferrer" className={`btn-lg mt-5 w-full ${c.btn}`}>
          Contratar agora
        </a>

        <ul className={`mt-6 space-y-2.5 border-t pt-5 ${c.divider}`}>
          {[group.coverage, ...planFeatures].map((f) => (
            <li key={f} className="flex gap-2 text-sm leading-snug">
              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${c.check}`} aria-hidden />
              <span className={c.item}>{f}</span>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export function Plans() {
  return (
    <section id="planos" className="section relative overflow-hidden bg-brand-50/50">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      {/* brilho radial verde no alto, à direita */}
      <div
        className="pointer-events-none absolute -right-48 -top-40 h-[42rem] w-[42rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(95,160,115,0.38) 0%, rgba(143,192,157,0.22) 35%, transparent 68%)" }}
        aria-hidden
      />

      <div className="container-jmx relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow">Planos e preços</span></Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">
              Escolha o plano que combina com a sua vida
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-4">
              Telemedicina com crédito mensal para medicamentos. Sem taxa de contratação e sem carência.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {planGroups.map((g, i) => (
            <PlanCard key={g.id} group={g} index={i} />
          ))}

          {/* empresa (pêssego, intercalado) */}
          <Reveal delay={planGroups.length * 80} className="h-full">
            <article className="group relative isolate flex h-full flex-col rounded-[1.75rem] bg-gradient-to-b from-accent-100 to-accent-200 p-7 text-ink shadow-card ring-1 ring-accent-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <CardFx tone="peach" />
              <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-700 to-brand-600 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white shadow-soft">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Mais econômico
              </span>
              <h3 className="font-display text-xl font-extrabold text-brand-900">Vida Empresarial</h3>
              <p className="mt-1.5 min-h-[2.75rem] text-sm leading-snug text-ink-soft">{companyPlan.summary}</p>
              <span className="mt-2 inline-flex w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-accent-700 ring-1 ring-accent-200">
                Para colaboradores
              </span>

              <div className="mt-6 flex-1 rounded-2xl border border-white/60 bg-white/75 p-4">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-accent-700/80">O que inclui</p>
                <ul className="mt-3 space-y-2.5">
                  {companyPlan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm leading-snug">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                      <span className="text-ink-soft">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* destaque NR-1 */}
                <div className="mt-4 rounded-xl bg-gradient-to-br from-brand-700 to-brand-800 p-3.5 text-white shadow-soft">
                  <p className="flex items-center gap-2">
                    <span className="shrink-0 whitespace-nowrap rounded-md bg-accent-500 px-2 py-0.5 text-[0.6875rem] font-extrabold tracking-wider">NR-1</span>
                    <span className="text-[0.8125rem] font-bold leading-tight">Suporte Psicossocial Corporativo</span>
                  </p>
                  <p className="mt-2 flex gap-2 text-xs leading-snug text-brand-50/90">
                    <ShieldCheck className="mt-px h-3.5 w-3.5 shrink-0 text-accent-300" aria-hidden />
                    Saúde mental dos colaboradores alinhada às diretrizes da NR-1: prevenção, acolhimento e
                    monitoramento emocional, com gestão completa.
                  </p>
                </div>
              </div>

              <p className="mt-6 font-display text-[2.1rem] font-extrabold leading-none text-brand-900">{companyPlan.price}</p>

              <a
                href={waLink("Olá! Quero falar com um consultor sobre o Plano Vida Empresarial da Assfarma.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg mt-5 w-full"
              >
                {companyPlan.cta}
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div
            role="note"
            className="mx-auto mt-12 flex max-w-4xl items-start gap-4 rounded-2xl border border-brand-200 bg-white/90 px-5 py-4 text-left shadow-soft backdrop-blur sm:items-center sm:px-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Info className="h-5 w-5" aria-hidden />
            </span>
            <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
              <strong className="font-bold text-brand-800">Assfarma</strong> (Administração de Serviços de Saúde e
              Farmácia) é um serviço de assinatura de teleconsultas com crédito para aquisição de medicamentos e{" "}
              <strong className="font-bold text-brand-800">não é um plano de saúde</strong>, nem substitui atendimento
              de urgência ou emergência presencial.{" "}
              <strong className="font-bold text-red-600">Em caso de emergência, ligue 192 (SAMU).</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Plans;
