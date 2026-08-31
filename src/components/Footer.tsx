import { Clock, MapPin, Phone } from "lucide-react";
import { TurcoLogo } from "@/components/TurcoLogo";
import { SITE } from "@/utils/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="localizacao" className="scroll-mt-24 border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="h-24 w-24">
            <TurcoLogo className="h-full w-full" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-stone-400">
            Hamburgueria artesanal de Goiânia. Industrial, rústica e feita para a noite — com o 23º melhor hambúrguer
            do Brasil na chapa.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Turco"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gold transition-all duration-300 hover:scale-105 hover:border-gold/50 hover:bg-gold/10"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Turco"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gold transition-all duration-300 hover:scale-105 hover:border-gold/50 hover:bg-gold/10"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">Contato</h3>
          <ul className="space-y-3 text-sm text-stone-300">
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-gold"
              >
                <Phone className="h-4 w-4 text-brand" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition-colors duration-300 hover:text-gold"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{SITE.address}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Horário
          </h3>
          <ul className="space-y-3 text-sm text-stone-300">
            {SITE.hours.map((slot) => (
              <li key={slot.days} className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  <span className="block text-foreground">{slot.days}</span>
                  {slot.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">Pedido</h3>
          <p className="text-sm leading-relaxed text-stone-400">
            Sem fila digital. Chama no WhatsApp, escolhe o burger e a gente resolve o resto.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] text-zinc-950 transition-all duration-300 hover:scale-105 hover:bg-gold-soft hover:shadow-[0_0_24px_rgba(245,197,24,0.45)]"
          >
            Fazer Pedido
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-stone-500 sm:px-6 sm:text-left">
          © {new Date().getFullYear()} {SITE.fullName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
