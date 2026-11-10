import { waLink } from "@/lib/site";

/** Botão flutuante de WhatsApp, sempre visível, só com o ícone. */
export function WhatsAppFab() {
  return (
    <a
      href={waLink("Olá! Vim pelo site e quero saber mais sobre os planos da AssFarma.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]
                  text-white shadow-lift transition-all duration-300 hover:scale-105
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]
                  focus-visible:ring-offset-2 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulseRing" aria-hidden />
      <svg viewBox="0 0 32 32" className="relative h-8 w-8 sm:h-9 sm:w-9" fill="currentColor" aria-hidden>
        <path d="M16.02 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.6-1.72a12.75 12.75 0 0 0 6.21 1.58h.01c7.05 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.63-3.75-9.04a12.68 12.68 0 0 0-9.04-3.63zm0 23.2h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.56 10.56 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.6-10.63 10.6zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.68.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54l-.6-.01c-.21 0-.56.08-.85.4s-1.11 1.09-1.11 2.65 1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </a>
  );
}

export default WhatsAppFab;
