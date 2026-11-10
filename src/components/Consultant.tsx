import Image from "next/image";
import { ArrowRight, MapPin, Repeat, HeartPulse, Handshake, TrendingUp, Check } from "lucide-react";
import Reveal from "./Reveal";
import { waLink } from "@/lib/site";

/**
 * Seção "Seja um consultor": banner de recrutamento de consultores regionais.
 * ⚠️ CONFIRMAR com o cliente os benefícios listados abaixo antes de publicar.
 */
const perks = [
  { icon: Repeat, title: "Renda recorrente", desc: "Seus clientes ativos geram renda todo mês." },
  { icon: MapPin, title: "Na sua região", desc: "Você representa a Assfarma onde já tem contatos." },
  { icon: HeartPulse, title: "Produto que todos precisam", desc: "Saúde acessível para pessoas, famílias e empresas." },
  { icon: Handshake, title: "Suporte da equipe", desc: "Material e acompanhamento para você começar." },
];

// Ilustrativo: só os planos e quem cada um cobre, sem números de clientes.
const wallet = [
  { plan: "Plano Vida Individual", people: "Titular" },
  { plan: "Plano Vida Casal", people: "Titular + cônjuge" },
  { plan: "Plano Vida Familiar", people: "Titular + 3 dependentes" },
  { plan: "Plano Empresarial", people: "Colaboradores da empresa" },
];

export function Consultant() {
  const cta = waLink("Olá! Vim pelo site e quero ser um consultor Assfarma na minha região.");

  return (
    <section id="consultor" className="relative py-20 sm:py-24">
      <div className="container-jmx">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-6 py-14 shadow-lift sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            {/* decoração: brilhos e a marca em marca-d'água (clip-path por causa do Safari) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem] [clip-path:inset(0_round_2.5rem)]">
              <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-accent-500/25 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand-400/25 blur-3xl" />
              <Image
                src="/brand/logo-mark-white.png"
                alt=""
                width={512}
                height={512}
                className="absolute -bottom-24 -right-16 w-[26rem] max-w-none opacity-[0.07] sm:w-[34rem]"
                aria-hidden
              />
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
            </div>

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* texto */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-glow">
                  <TrendingUp className="h-3.5 w-3.5" aria-hidden />
                  Seja um consultor
                </span>

                <h2 className="mt-6 text-3xl font-extrabold leading-[1.1] text-white sm:text-[2.6rem] lg:text-[3rem]">
                  Leve saúde para a sua região e{" "}
                  <span className="text-accent-300">construa uma renda recorrente vitalícia</span>
                </h2>

                <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-brand-100/85">
                  Seja um consultor Assfarma na sua região: apresente nossos planos de telemedicina para
                  pessoas, famílias e empresas da sua cidade e conquiste uma renda recorrente vitalícia.
                </p>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {perks.map(({ icon: Icon, title, desc }) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-300 ring-1 ring-white/15">
                        <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
                      </span>
                      <div>
                        <p className="text-[0.9375rem] font-bold text-white">{title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-brand-100/70">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={cta} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
                    Quero ser consultor
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                  <p className="text-sm text-brand-100/65 sm:ml-2">
                    Fale com a nossa equipe pelo WhatsApp.
                  </p>
                </div>
              </div>

              {/* visual: carteira do consultor */}
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none" aria-hidden>
                <div className="rounded-3xl bg-white p-6 shadow-card">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Sua carteira</p>
                    <p className="mt-1 font-display text-xl font-extrabold text-brand-800">Clientes ativos</p>
                  </div>

                  {/* barras crescendo */}
                  <div className="mt-6 flex h-28 items-end gap-2.5">
                    {[28, 38, 46, 58, 66, 80, 100].map((h, i, a) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-lg ${
                          i === a.length - 1
                            ? "bg-gradient-to-t from-accent-600 to-accent-400"
                            : "bg-gradient-to-t from-brand-200 to-brand-100"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[0.6875rem] font-medium text-ink-muted">
                    <span>Mês 1</span>
                    <span>Hoje</span>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {wallet.map((w) => (
                      <li key={w.plan} className="flex items-center gap-3 rounded-2xl bg-brand-50 px-3.5 py-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-700 text-white">
                          <Check className="h-4 w-4" />
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-ink">{w.plan}</p>
                          <p className="text-xs text-ink-muted">{w.people}</p>
                        </div>
                        <span className="rounded-full bg-white px-2.5 py-1 text-[0.6875rem] font-bold text-brand-700 ring-1 ring-brand-100">
                          Ativo
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* selo flutuante */}
                <div className="absolute -right-3 -top-6 animate-float rounded-2xl bg-accent-500 px-4 py-3 text-white shadow-lift sm:-right-6">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-white/80">Renda</p>
                  <p className="font-display text-lg font-extrabold leading-none">Recorrente</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Consultant;
