import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { faq, site } from "@/lib/site";

export function Faq() {
  return (
    <section id="duvidas" className="section">
      <div className="container-jmx">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal><span className="eyebrow">Dúvidas frequentes</span></Reveal>
            <Reveal delay={70}>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                Tudo o que você precisa saber antes de assinar
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mt-5">
                Não encontrou a sua pergunta? Escreva para{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 hover:text-brand-700"
                >
                  {site.email}
                </a>{" "}
                que a nossa equipe responde.
              </p>
            </Reveal>
          </div>

          <div className="space-y-3">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <details className="group card overflow-hidden p-0 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 text-left">
                    <h3 className="text-[1.0625rem] font-bold leading-snug transition-colors group-open:text-brand-700">
                      {item.q}
                    </h3>
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50
                                 text-brand-600 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-[0.9375rem] leading-relaxed text-ink-soft">{item.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
