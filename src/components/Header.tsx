"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site, waLink } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-jmx flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[0.9375rem] font-medium text-ink-soft
                         transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={site.clinicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost btn-md"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Consultório virtual
          </a>
          <a href="#planos" className="btn-primary btn-md">
            Contratar agora
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.clinicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost h-11 px-3.5 text-sm"
          >
            <MessageCircle className="hidden h-4 w-4 min-[440px]:block" aria-hidden />
            Consultório<span className="hidden sm:inline"> virtual</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200
                       bg-white text-ink shadow-soft"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* menu mobile */}
      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`fixed inset-x-0 top-[4.5rem] z-40 origin-top border-b border-slate-200 bg-white
                      px-5 pb-8 pt-4 shadow-card transition-all duration-300 ${
                        open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                      }`}
        >
          <nav className="flex flex-col" aria-label="Navegação principal (mobile)">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3.5 text-base font-medium text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <a href="#planos" onClick={() => setOpen(false)} className="btn-primary btn-lg w-full">
              Contratar agora
            </a>
            <a
              href={waLink("Olá! Quero falar com um atendente da Assfarma.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-lg w-full"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Falar no WhatsApp
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-center text-sm text-ink-muted underline underline-offset-4"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
