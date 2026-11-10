import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { specialties } from "@/lib/site";

export function Specialties() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-navy-600/50 blur-3xl" />
      </div>

      <div className="container-jmx relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow-dark">Especialidades</span></Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Mais de 30 especialidades, incluídas no seu plano
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-lg leading-relaxed text-brand-100/85">
              Consultas ilimitadas e sem custos adicionais. Seu clínico é seu guia, ele identifica a melhor especialidade para cada situação, economizando seu tempo e focando no que realmente importa.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ul className="mt-12 flex flex-wrap justify-center gap-2.5">
            {specialties.map((s) => (
              <li
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07]
                           px-4 py-2.5 text-[0.9375rem] font-medium text-brand-50 backdrop-blur
                           transition-colors hover:border-brand-300/40 hover:bg-white/[0.13]"
              >
                <Check className="h-4 w-4 text-brand-300" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Specialties;
