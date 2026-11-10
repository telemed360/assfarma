import { MousePointerClick, Clock3, Siren, UserPlus, Video, FileCheck2 } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: MousePointerClick,
    title: "A um clique de distância",
    desc: "Consulte pela plataforma usando celular, computador ou tablet. Sem fila, sem deslocamento.",
  },
  {
    icon: Clock3,
    title: "A qualquer momento",
    desc: "Pronto Atendimento 24 horas por dia, 7 dias por semana, para que você tenha assistência sempre que precisar. Clínico Geral, Generalista, Médico da Família, Pediatra, Geriatra.",
  },
  {
    icon: Siren,
    title: "Cuidado essencial:",
    desc: "Psicologia orientativa e Nutrição orientativa - Segunda a Sexta de 09h às 23h, consulte quantas vezes forem necessárias.",
  },
];

const steps = [
  { icon: UserPlus, title: "Escolha o seu plano", desc: "Contratação 100% online em poucos minutos, sem burocracia e sem carência." },
  { icon: Video, title: "Solicite o atendimento", desc: "Entre na plataforma e faça sua consulta." },
  { icon: FileCheck2, title: "Receba receita e atestado", desc: "Documentos com assinatura digital certificada, válidos em farmácias e empresas de todo o país." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section relative overflow-hidden bg-brand-50/50">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <div className="container-jmx relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow">Como funciona</span></Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">
              Consulte onde estiver
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-4">Cuidar de você em todas as etapas da vida.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="card card-hover group h-full p-8">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                  <p.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* passo a passo */}
        <div className="mt-16 rounded-[2rem] border border-brand-100 bg-white p-7 shadow-soft sm:p-10">
          <Reveal>
            <h3 className="text-center text-xl font-bold sm:text-2xl">Do cadastro à receita em 3 passos</h3>
          </Reveal>
          <ol className="mt-9 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} as="li">
                <div className="relative h-full">
                  {i < steps.length - 1 && (
                    <span
                      className="absolute left-16 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-brand-200 to-transparent md:block"
                      aria-hidden
                    />
                  )}
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <s.icon className="h-5 w-5" aria-hidden />
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 font-display text-[0.65rem] font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h4 className="mt-5 text-[1.0625rem] font-bold">{s.title}</h4>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
