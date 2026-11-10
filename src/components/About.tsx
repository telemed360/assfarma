import Image from "next/image";
import { HeartPulse, Users, Stethoscope, Star } from "lucide-react";
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
            <div className="relative mx-auto max-w-[36rem] lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2.75rem] bg-gradient-to-tr from-brand-100/80 to-brand-50/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] shadow-lift ring-1 ring-black/5">
                <Image
                  src="/images/hero-medico.jpg"
                  alt="Médico de jaleco e estetoscópio atendendo uma paciente por videochamada no notebook"
                  width={1760}
                  height={1120}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="h-auto w-full"
                />
              </div>

              {/* selo: avaliação (mantido do layout anterior) */}
              <div className="absolute -bottom-6 right-4 animate-float rounded-2xl bg-white/95 px-5 py-3.5 shadow-card ring-1 ring-brand-100 backdrop-blur sm:-right-5">
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-2xl font-extrabold leading-none text-brand-800">5,0</span>
                  <span className="flex gap-0.5" aria-hidden>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FFB020] text-[#FFB020]" />
                    ))}
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink-muted">Atendimento humano e acolhedor</p>
              </div>

              {/* selo: celular */}
              <div
                className="absolute -left-3 top-6 flex animate-float items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-card ring-1 ring-brand-100 backdrop-blur sm:-left-6"
                style={{ animationDelay: "-4s" }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Stethoscope className="h-[1.05rem] w-[1.05rem]" aria-hidden />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-ink">Time médico de verdade</p>
                  <p className="text-xs text-ink-muted">com registro ativo no CRM</p>
                </div>
              </div>
            </div>
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
