import { HeartPulse, Users, Stethoscope } from "lucide-react";
import ConsultScene from "./illustrations/ConsultScene";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { stats } from "@/lib/site";

const pillars = [
  {
    icon: Stethoscope,
    title: "Time médico de verdade",
    desc: "Profissionais com registro ativo no CRM, atendendo dentro das normas do Conselho Federal de Medicina.",
  },
  {
    icon: HeartPulse,
    title: "Cuidado contínuo",
    desc: "Histórico das consultas, acompanhamento preventivo e retorno com o mesmo profissional quando você quiser.",
  },
  {
    icon: Users,
    title: "Para pessoas e empresas",
    desc: "Do plano individual ao benefício corporativo, com implantação e relatórios para o RH.",
  },
];

export function About() {
  return (
    <section id="quem-somos" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-50 blur-3xl" />

      <div className="container-jmx">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <ConsultScene className="w-full" />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">Quem somos</span>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">
                Telemedicina moderna para cuidar de você e da sua família
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mt-5">
                A Assfarma conecta pacientes a profissionais de saúde por meio de consultas online
                seguras, ágeis e acessíveis. Reunimos teleorientação, teleconsulta e acompanhamento
                preventivo em uma plataforma simples, para pessoas, famílias e empresas.
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={160 + i * 70}>
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <p.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[1.0625rem] font-bold">{p.title}</h3>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* números */}
        <Reveal delay={120}>
          <dl className="mt-16 grid gap-5 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="card card-hover p-7">
                <dt className="font-display text-4xl font-extrabold text-gradient-brand sm:text-[2.75rem]">
                  <CountUp to={s.value} prefix={"prefix" in s ? (s.prefix as string) : ""} suffix={"suffix" in s ? (s.suffix as string) : ""} />
                </dt>
                <dd className="mt-2">
                  <span className="block text-base font-bold text-ink">{s.label}</span>
                  <span className="mt-1 block text-sm text-ink-muted">{s.hint}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
