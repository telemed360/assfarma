import { Store } from "lucide-react";
import Reveal from "./Reveal";
import { pharmacyChains } from "@/lib/site";

/** Carrossel com as principais redes de farmácias da rede credenciada (nomes em uma cor só). */
export function PharmacyBrands() {
  return (
    <section id="rede-credenciada" className="relative overflow-hidden pb-20 pt-6 sm:pt-10">
      <div className="container-jmx">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <Store className="h-3.5 w-3.5" aria-hidden />
              Rede credenciada
            </span>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
              Compre seus medicamentos nas principais redes de farmácias
            </h2>
            <p className="mt-3 text-[0.9375rem] text-ink-muted">
              São mais de 25 mil farmácias credenciadas em todo o Brasil.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10 border-y border-slate-200/80 bg-white/70 py-6">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-6 pr-6 [animation-duration:45s] hover:[animation-play-state:paused]">
            {[0, 1].map((dup) => (
              <ul key={dup} className="flex shrink-0 items-center gap-6" aria-hidden={dup === 1}>
                {pharmacyChains.map((name) => (
                  <li
                    key={name}
                    className="flex h-16 min-w-[11rem] items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 shadow-soft"
                  >
                    <span className="whitespace-nowrap font-display text-xl font-extrabold uppercase tracking-wide text-brand-800/75">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PharmacyBrands;
