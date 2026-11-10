import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-4">
      <div className="container-jmx">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-navy-800 via-brand-900 to-brand-800 px-7 py-14 text-center shadow-lift sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-navy-500/40 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-2xl">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCta;
