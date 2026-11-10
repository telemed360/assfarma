import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { waLink } from "@/lib/site";

/** Banner final de ponta a ponta. */
export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-navy-800 via-brand-900 to-brand-800 py-20 text-center sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand-400/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-accent-500/20 blur-3xl" />
        <Image
          src="/brand/logo-mark-white.png"
          alt=""
          width={512}
          height={512}
          className="absolute -bottom-32 -right-20 w-[30rem] max-w-none opacity-[0.06] sm:w-[38rem]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="container-jmx">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <span className="eyebrow-dark">Comece hoje</span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-[2.75rem]">
              A sua saúde a um clique de distância
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-100/85">
              Sem burocracia, sem carência e sem fila de espera. Assine agora e fale com um médico
              em poucos minutos, de onde você estiver.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#planos" className="btn-primary btn-lg w-full sm:w-auto">
                Quero cuidar da minha saúde
                <ArrowRight className="h-[1.05rem] w-[1.05rem]" aria-hidden />
              </a>
              <a
                href={waLink("Olá! Quero tirar uma dúvida sobre os planos da Assfarma.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light btn-lg w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Tirar uma dúvida
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCta;
