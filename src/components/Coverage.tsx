import BrazilMap from "./illustrations/BrazilMap";
import { Pill, FlaskConical, Building2, BriefcaseBusiness, Store, Sparkles, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { network, waLink } from "@/lib/site";

const icons = [Pill, FlaskConical, Building2, BriefcaseBusiness, Store, Sparkles];

export function Coverage() {
  return (
    <section id="cobertura" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-50 blur-3xl" />

      <div className="container-jmx relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative mx-auto max-w-md pb-16">
              <BrazilMap className="h-auto w-full" />
              <div className="absolute bottom-0 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-brand-100 bg-white/95 p-4 text-center shadow-card backdrop-blur">
                <p className="font-display text-2xl font-extrabold text-gradient-brand">27 estados</p>
                <p className="mt-0.5 text-sm text-ink-muted">Atendimento online em todo o território nacional</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal><span className="eyebrow">Cobertura</span></Reveal>
            <Reveal delay={70}>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">
                Uma rede que cuida de você por todo o Brasil
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mt-5">
                Além da consulta online, mantemos parcerias com farmácias e drogarias
                credenciadas em todas as regiões, para que o cuidado continue quando o caso
                pedir medicamento ou suporte próximo de você.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {network.map((n, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <Reveal key={n.title} delay={140 + i * 60}>
                    {(() => {
                      const featured = Boolean(n.whatsappMsg);
                      const body = (
                        <>
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                              featured ? "bg-white/10 text-white ring-1 ring-white/15" : "bg-brand-50 text-brand-600"
                            }`}
                          >
                            <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
                          </span>
                          <div>
                            <h3
                              className={`text-[0.9375rem] font-bold leading-snug ${featured ? "text-white" : ""}`}
                            >
                              {n.title}
                            </h3>
                            <p
                              className={`mt-1 text-sm leading-relaxed ${
                                featured ? "text-brand-100/85" : "text-ink-muted"
                              }`}
                            >
                              {n.desc}
                            </p>
                            {featured && (
                              <span className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300">
                                Conversar no WhatsApp
                                <ArrowRight
                                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                                  aria-hidden
                                />
                              </span>
                            )}
                          </div>
                        </>
                      );
                      return featured ? (
                        <a
                          href={waLink(n.whatsappMsg!)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-full items-start gap-3.5 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-800 p-5
                                     shadow-lift ring-1 ring-brand-700/40 transition-all duration-300 hover:-translate-y-1
                                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                        >
                          {body}
                        </a>
                      ) : (
                        <div className="card card-hover flex h-full items-start gap-3.5 p-5">{body}</div>
                      );
                    })()}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coverage;
