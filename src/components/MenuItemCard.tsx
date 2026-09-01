// components/MenuItemCard.tsx
import { Plus } from "lucide-react";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import type { MenuItem } from "./data/menu";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-gold/30 hover:bg-white/10">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h4 className="font-display text-lg font-bold text-white group-hover:text-gold transition-colors">
            {item.name}
          </h4>
          <span className="shrink-0 font-display text-lg font-bold text-gold">
            R$ {item.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
        
        {item.description && (
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-3">
            {item.description}
          </p>
        )}
      </div>

      <a
        href={getWhatsAppUrl(item.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-gold hover:text-zinc-950"
      >
        <Plus className="h-4 w-4" />
        Adicionar
      </a>
    </article>
  );
}