"use client";

import { useState } from "react";
import { ArrowRight, Building2, Check, Pill, Sparkles, User, Users, UsersRound } from "lucide-react";
import Reveal from "./Reveal";
import { companyPlan, planFeatures, planGroups, waLink, type PlanGroup } from "@/lib/site";

const tabIcons: Record<PlanGroup["id"], typeof User> = {
  individual: User,
  casal: Users,
  familia: UsersRound,
};

export function Plans() {
  const [active, setActive] = useState<PlanGroup["id"]>("individual");
  const group = planGroups.find((g) => g.id === active) ?? planGroups[0];

  return (
    <section id="planos" className="section relative overflow-hidden bg-brand-50/50">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <div className="container-jmx relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow">Planos e preços</span></Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">
              Telemedicina e crédito para medicamentos em um só plano
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-4">
              Escolha para quem é o plano e quanto de crédito mensal você quer para comprar
              remédios. Sem carência e sem fidelidade.
            </p>
          </Reveal>
        </div>

        {/* abas: tipo de plano */}
        <Reveal delay={160}>
          <div
            role="tablist"
            aria-label="Tipo de plano"
            className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-1.5 rounded-[1.4rem] border border-brand-100 bg-white p-1.5 shadow-soft"
          >
            {planGroups.map((g) => {
              const Icon = tabIcons[g.id];
              const on = g.id === active;
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="planos-cards"
                  onClick={() => setActive(g.id)}
                  className={`flex flex-col items-center gap-0.5 rounded-2xl px-2 py-2.5 transition-all duration-200 sm:flex-row sm:justify-center sm:gap-2 ${
                    on ? "bg-brand-700 text-white shadow-soft" : "text-ink-soft hover:bg-brand-50"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${on ? "text-accent-300" : "text-brand-500"}`} aria-hidden />
                  <span className="text-[0.9375rem] font-bold leading-tight">{g.name}</span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-center text-sm text-ink-muted">{group.who}</p>
        </Reveal>

        {/* cards: 3 níveis de crédito */}
        <div id="planos-cards" role="tabpanel" className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {group.tiers.map((t) => {
            const featured = t.level === 3;
            const href =
              t.checkoutUrl ??
              waLink(
                `Olá! Quero assinar o Plano ${group.name} da Assfarma com crédito de R$ ${t.credit} para medicamentos (${t.code}).`,
              );
            return (
              <article
                key={t.code}
                className={`relative flex h-full flex-col rounded-[1.75rem] p-7 transition-all duration-300 ${
                  featured
                    ? "bg-gradient-to-b from-brand-700 to-brand-900 text-white shadow-lift ring-1 ring-brand-400/40 md:-translate-y-2"
                    : "border border-slate-200/80 bg-white shadow-soft hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white shadow-glow">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Maior crédito
                  </span>
                )}

                <p className={`text-xs font-bold uppercase tracking-[0.14em] ${featured ? "text-brand-200" : "text-brand-600"}`}>
                  Crédito {String(t.level).padStart(2, "0")}
                </p>
                <h3 className={`mt-1 font-display text-lg font-bold ${featured ? "text-white" : "text-ink"}`}>
                  Plano {group.name}
                </h3>

                <p className="mt-5 flex items-end gap-1">
                  <span className={`pb-1 text-base font-bold ${featured ? "text-brand-200" : "text-brand-600"}`}>R$</span>
                  <span
                    className={`font-display text-[2.6rem] font-extrabold leading-none ${
                      featured ? "text-white" : "text-gradient-brand"
                    }`}
                  >
                    {t.price}
                  </span>
                  <span className={`pb-1 text-sm font-medium ${featured ? "text-brand-100/70" : "text-ink-muted"}`}>
                    /mês
                  </span>
                </p>

                {/* crédito */}
                <div
                  className={`mt-5 flex items-center gap-3 rounded-2xl px-4 py-3.5 ${
                    featured ? "bg-accent-500 text-white shadow-glow" : "bg-accent-50 text-accent-800 ring-1 ring-accent-100"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      featured ? "bg-white/20" : "bg-white text-accent-600"
                    }`}
                  >
                    <Pill className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                  </span>
                  <div className="leading-tight">
                    <p className="font-display text-xl font-extrabold">+ R$ {t.credit}</p>
                    <p className={`text-xs font-medium ${featured ? "text-white/85" : "text-accent-700"}`}>
                      por mês em medicamentos
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {[group.coverage, ...planFeatures].map((f) => (
                    <li key={f} className="flex gap-2.5 text-[0.9375rem] leading-snug">
                      <Check
                        className={`mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 ${featured ? "text-brand-300" : "text-brand-500"}`}
                        aria-hidden
                      />
                      <span className={featured ? "text-brand-50/90" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-lg mt-8 w-full ${featured ? "btn-primary" : "btn-dark"}`}
                >
                  Assinar este plano
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </article>
            );
          })}
        </div>

        {/* empresa */}
        <Reveal delay={100}>
          <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-6 rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-soft md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Building2 className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {companyPlan.name} <span className="ml-1 text-base font-semibold text-brand-600">· {companyPlan.price}</span>
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{companyPlan.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                  {companyPlan.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-sm text-ink-soft">
                      <Check className="h-4 w-4 text-brand-500" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href={waLink("Olá! Quero falar com um consultor sobre o Plano Empresa da Assfarma.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark btn-lg shrink-0"
            >
              {companyPlan.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
            Assfarma é um serviço de assinatura de teleconsultas com crédito para medicamentos e{" "}
            <strong className="font-semibold text-ink-soft">não é um plano de saúde</strong> nem
            substitui atendimento de urgência e emergência presencial. Em caso de emergência, ligue 192.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Plans;
