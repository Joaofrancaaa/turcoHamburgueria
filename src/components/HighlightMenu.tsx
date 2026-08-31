import Image from "next/image";
import { ArrowUpRight, Award, Sandwich } from "lucide-react";
import { getWhatsAppUrl } from "@/utils/whatsapp";

type BurgerHighlight = {
  name: string;
  badge?: string;
  description: string;
  ingredients: string[];
  image: string;
  imageNote: string;
  featured?: boolean;
};

const HIGHLIGHTS: BurgerHighlight[] = [
  {
    name: "Burak Burger",
    badge: "23º melhor hambúrguer do Brasil",
    featured: true,
    description:
      "O grande nome da casa. Queijo coalho chapeado e lambuzado no mel, fatias de banana da terra frita e bacon crocante — com a maionese de mel exclusiva da Turco.",
    ingredients: ["Queijo coalho no mel", "Banana da terra frita", "Bacon", "Maionese de mel"],
    image: "/Burak.jpg",
    imageNote: "Burak Burger — foto oficial da casa.",
  },
  {
    name: "Req. Moreno",
    description:
      "Requeijão moreno derretido na carne, bacon Palatti lambuzado no mel e a maionese de mel da casa. Escasso, intenso e viciante.",
    ingredients: ["Requeijão moreno", "Bacon no mel", "Maionese de mel"],
    image: "/Req_Moreno.jpg",
    imageNote: "FOTO REAL: Req. Moreno — requeijão moreno e bacon no mel.",
  },
  {
    name: "Uai Hermanos",
    description:
      "O encontro de Minas com o México na chapa da Turco: blend smash, cheddar defumado, guacamole da casa, jalapeños e bacon crocante.",
    ingredients: ["Doce de Leite com Carne", "Queijo provolone", "Bacon picado"],
    image: "/uai_hermanos.jpg",
    imageNote: "Uai Hermanos — smash com guacamole e jalapeño.",
  },
];

export default function HighlightMenu() {
  const featured = HIGHLIGHTS.find((item) => item.featured) ?? HIGHLIGHTS[0];
  const others = HIGHLIGHTS.filter((item) => item !== featured);

  return (
    <section id="menu" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <Sandwich className="h-4 w-4" />
            Cardápio de impacto
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Os destaques que enchem a casa.
          </h2>
          <p className="mt-4 text-stone-300">
            Combinações ousadas, selagem na manteiga e aquele ponto de mel que virou assinatura da Turco.
          </p>
        </div>

        {/* MUDANÇA: Trocado lg:items-stretch por lg:items-center para evitar que a imagem estique com o texto */}
        <article className="group mb-6 overflow-hidden rounded-3xl border border-white/10 bg-surface transition-all duration-300 hover:scale-[1.01] hover:border-gold/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:grid lg:grid-cols-2 lg:items-center">
          
          {/* MUDANÇA: Adicionado h-64 e lg:h-[400px] para fixar o tamanho e evitar o super zoom */}
          <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[400px]">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              data-photo-hint={featured.imageNote}
              className="object-cover object-center"
            />
            {featured.badge ? (
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-wider text-zinc-950">
                <Award className="h-3.5 w-3.5" />
                {featured.badge}
              </span>
            ) : null}
          </div>
          
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <h3 className="font-display text-3xl font-extrabold text-gold">{featured.name}</h3>
            <p className="mt-4 text-stone-300 leading-relaxed">{featured.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {featured.ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-stone-200"
                >
                  {ingredient}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppUrl(featured.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] text-zinc-950 transition-all duration-300 hover:scale-105 hover:bg-gold-soft hover:shadow-[0_0_24px_rgba(245,197,24,0.45)]"
            >
              Pedir o {featured.name}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-2">
          {others.map((burger) => (
            <article
              key={burger.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-surface transition-all duration-300 hover:scale-[1.02] hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              {/* MUDANÇA: Adicionado sm:aspect-video sm:h-auto para manter a proporção correta no desktop */}
              <div className="relative h-56 w-full overflow-hidden sm:aspect-video sm:h-auto">
                <Image
                  src={burger.image}
                  alt={burger.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-photo-hint={burger.imageNote}
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{burger.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-300">{burger.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {burger.ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-stone-300"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppUrl(burger.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-gold transition-all duration-300 hover:gap-3 hover:text-gold-soft"
                >
                  Pedir no WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}