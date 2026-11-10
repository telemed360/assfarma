import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/site";

const initials = (name: string) =>
  name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]).join("").toUpperCase();

export function Testimonials() {
  return (
    <section className="section relative overflow-hidden bg-brand-50/50">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <div className="container-jmx relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow">Depoimentos</span></Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">
              O que os nossos pacientes dizem
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-brand-100 bg-white px-5 py-2.5 shadow-soft">
              <span className="flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FFB020] text-[#FFB020]" />
                ))}
              </span>
              <span className="text-sm font-semibold text-ink">
                4,9/5 <span className="font-normal text-ink-muted">em mais de 50 mil consultas</span>
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="h-full">
              <figure className="card card-hover flex h-full flex-col p-7">
                <Quote className="h-8 w-8 text-brand-200" aria-hidden />
                <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br
                               from-brand-600 to-brand-300 font-display text-sm font-bold text-white"
                    aria-hidden
                  >
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-[0.9375rem] font-bold text-ink">{t.name}</span>
                    <span className="block text-sm text-ink-muted">{t.city}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
