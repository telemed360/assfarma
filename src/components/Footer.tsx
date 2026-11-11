import { Mail, Clock, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { site, waLink } from "@/lib/site";

const menu = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
];

const acessos = [
  { label: "Sou paciente", href: "#planos" },
  { label: "Para empresas", href: "#planos" },
  { label: "Seja parceiro", href: `mailto:${site.email}?subject=Quero%20ser%20parceiro` },
  { label: "Sou profissional de saúde", href: `mailto:${site.email}?subject=Sou%20profissional%20de%20sa%C3%BAde` },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100/80">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-700/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-navy-700/30 blur-3xl" />
      </div>

      <div className="container-jmx relative pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.5fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed">
              Saúde de qualidade, humana e acessível, onde você estiver.
            </p>
            <a
              href={waLink("Olá! Vim pelo site da Assfarma.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light btn-md mt-6"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Falar no WhatsApp
            </a>
          </div>

          <nav aria-labelledby="footer-menu">
            <h2 id="footer-menu" className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Menu
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {menu.map((m) => (
                <li key={m.label}>
                  <a href={m.href} className="transition-colors hover:text-brand-300">{m.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-acesso">
            <h2 id="footer-acesso" className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Acesso
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {acessos.map((m) => (
                <li key={m.label}>
                  <a href={m.href} className="transition-colors hover:text-brand-300">{m.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Atendimento
            </h2>
            <ul className="mt-5 space-y-4 text-[0.9375rem]">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-brand-400" aria-hidden />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-brand-300 [overflow-wrap:anywhere]">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-brand-400" aria-hidden />
                <span>
                  {site.hours.urgencia}
                  <br />
                  <span className="text-brand-100/60">{site.hours.administrativo}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-brand-400" aria-hidden />
                <a
                  href={waLink("Olá! Vim pelo site da Assfarma.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-300"
                >
                  <span className="font-semibold text-white">WhatsApp:</span> {site.whatsappLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 space-y-1.5 border-t border-white/10 pt-8 text-[0.8125rem] leading-relaxed text-brand-100/55">
          <p>
            Serviço de telemedicina prestado conforme a
            Resolução CFM nº 2.314/2022. Não substitui atendimento de urgência ou emergência
            presencial. Em caso de emergência, ligue 192 (SAMU).
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.shortName}. Todos os direitos reservados.{" "}
              {[
                site.legal.razaoSocial,
                site.legal.cnpj && `CNPJ ${site.legal.cnpj}`,
                site.legal.projeto,
                site.legal.responsavelTecnico && `Responsável Técnico: ${site.legal.responsavelTecnico}`,
              ]
                .filter(Boolean)
                .join(" • ")}
            </p>
            <p className="text-brand-100/45">{site.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
