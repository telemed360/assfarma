import { Check, Sparkles, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { plans, waLink } from "@/lib/site";

export function Plans() {
  return (
    <section id="planos" className="section relative overflow-hidden bg-brand-50/50">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

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
              Assinatura 100% digital, sem taxa de contratação e sem carência.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 80} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-[1.75rem] p-7 transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-b from-navy-800 to-navy-900 text-white shadow-lift ring-1 ring-brand-400/40 md:-translate-y-2"
                    : "border border-slate-200/80 bg-white shadow-soft hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white shadow-glow">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    {plan.badge}
                  </span>
                )}

                <h3 className={`font-display text-lg font-bold ${plan.featured ? "text-white" : "text-ink"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1.5 text-sm ${plan.featured ? "text-brand-100/80" : "text-ink-muted"}`}>
                  {plan.summary}
                </p>

                <p className="mt-6 flex items-end gap-1">
                  <span
                    className={`font-display font-extrabold leading-none ${
                      plan.price.startsWith("R$") ? "text-[2.35rem]" : "text-[1.85rem]"
                    } ${plan.featured ? "text-brand-300" : "text-gradient-brand"}`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`pb-1 text-sm font-medium ${plan.featured ? "text-brand-100/70" : "text-ink-muted"}`}>
                      {plan.period}
                    </span>
                  )}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[0.9375rem] leading-snug">
                      <Check
                        className={`mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 ${
                          plan.featured ? "text-brand-300" : "text-brand-500"
                        }`}
                        aria-hidden
                      />
                      <span className={plan.featured ? "text-brand-50/90" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={
                    plan.checkoutUrl
                      ? plan.checkoutUrl
                      : waLink(
                          plan.id === "empresa"
                            ? "Olá! Quero falar com um consultor sobre o Plano Empresa da Assfarma."
                            : `Olá! Quero assinar o ${plan.name} da Assfarma.`,
                        )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-lg mt-8 w-full ${plan.featured ? "btn-primary" : "btn-dark"}`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
            Assfarma é um serviço de assinatura de teleconsultas e{" "}
            <strong className="font-semibold text-ink-soft">não é um plano de saúde</strong> nem
            substitui atendimento de urgência e emergência presencial. Em caso de emergência, ligue 192.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Plans;
