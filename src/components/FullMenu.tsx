// components/FullMenu.tsx
import { MENU_DATA } from "./data/menu";
import MenuItemCard from "./MenuItemCard";

export default function FullMenu() {
  return (
    <section id="cardapio-completo" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Nosso <span className="text-gold">Cardápio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-300">
            Da chapa direto para a sua mesa. Explore nossas opções artesanais e complementos exclusivos.
          </p>
        </div>

        {/* Renderização Dinâmica das Categorias */}
        <div className="flex flex-col gap-20">
          {MENU_DATA.map((category) => (
            <div key={category.id} className="scroll-mt-28" id={category.id}>
              
              <div className="mb-8 flex items-center gap-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                {category.items.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}