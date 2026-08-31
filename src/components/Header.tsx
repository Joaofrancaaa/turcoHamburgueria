"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { TurcoLogo } from "@/components/TurcoLogo";
import { getWhatsAppUrl } from "@/utils/whatsapp";

const NAV_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#inicio"
          className="group block h-[4.25rem] w-[4.25rem] shrink-0 transition-all duration-300 hover:scale-105 sm:h-[4.75rem] sm:w-[4.75rem]"
          aria-label="Turco — início"
        >
          <TurcoLogo className="h-full w-full" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-stone-300 transition-all duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full bg-gold px-5 py-2.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-zinc-950 shadow-[0_0_20px_rgba(245,197,24,0.25)] transition-all duration-300 hover:scale-105 hover:bg-gold-soft hover:shadow-[0_0_28px_rgba(245,197,24,0.5)] sm:inline-flex"
          >
            Fazer Pedido
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gold transition-all duration-300 hover:scale-105 hover:border-gold/60 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-zinc-800/50 bg-black/80 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-stone-200 transition-all duration-300 hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] text-zinc-950 transition-all duration-300 hover:scale-105 hover:bg-gold-soft"
          >
            Fazer Pedido
          </a>
        </nav>
      </div>
    </header>
  );
}
