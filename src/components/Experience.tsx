"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Beer, ChefHat, Sparkles, Tag } from "lucide-react";

// 1. COMPONENTE DE VÍDEO INTELIGENTE (LAZY VIDEO)
// Ele pausa sozinho quando sai da tela para economizar memória e bateria
function LazyVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Se o vídeo entrou na tela (visível), dá play
            video.play().catch(() => {
              // Silencia erros caso o navegador bloqueie autoplay excepcionalmente
            });
          } else {
            // Se saiu da tela, pausa o vídeo
            video.pause();
          }
        });
      },
      { threshold: 0.1 } // Dispara quando 10% do vídeo aparecer na tela
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted // Obrigatório para autoplay
      playsInline
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

type ExperienceCard = {
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: "image" | "video";
  imageNote: string;
  className: string;
  mediaClassName?: string;
  badge?: string;
};

// 2. CONFIGURAÇÃO DOS CARDS
const CARDS: ExperienceCard[] = [
  {
    title: "Palitos de queijo",
    description:
      "Uma caneca com 4 Palitos de Queijos empanados e fritos, e ainda acompanha um potinho de doce de leite, que é uma combinação clássica mineira.",
    mediaUrl: "/palitos_queijo.jpg",
    mediaType: "image",
    imageNote: "FOTO REAL: palitos de queijo com doce de leite.",
    className: "md:col-span-4 min-h-[400px]",
  },
  {
    title: "Torresmo no mel",
    description:
      "São 3 Torresmos no Rolo com um toque especial de mel, que dá um contraste perfeito no sabor.",
    mediaUrl: "/torresmo_mel.jpg",
    mediaType: "image",
    imageNote: "FOTO REAL: porção de torresmo no mel.",
    className: "md:col-span-2 min-h-[400px]",
    mediaClassName: "brightness-150",
  },
  {
    title: "Ambiente industrial",
    description:
      "Aço, madeira, cadeiras vermelhas e luzes de varal. O clima descontraído de quem leva o sabor a sério.",
    mediaUrl: "/ambiente.mp4", // Coloque o nome do seu arquivo MP4 aqui
    mediaType: "video", // Alterado para renderizar o vídeo
    imageNote: "VÍDEO REAL: salão da Turco vertical.",
    // Aumentamos a altura mínima para o vídeo vertical ficar bem imponente,
    // e o items-start vai permitir que ele fique desalinhado com o do Chopp sem quebrar o layout
    className: "md:col-span-3 min-h-[500px]", 
    mediaClassName: "brightness-150"
  },
  {
    title: "Chopp Brahma",
    description:
      "Estupidamente gelado. O par perfeito da chapa quente para acompanhar a noite.",
    mediaUrl:
      "/chop.jpg",
    mediaType: "image",
    imageNote: "FOTO REAL: chopp Brahma servido no balcão da casa.",
    // MUDANÇA: Mais largo e adicionado o badge da promoção
    className: "md:col-span-3 min-h-[500px]", 
    badge: "50% OFF Quartas e Sábados",
    mediaClassName: "brightness-150",
  },
];

export default function Experience() {
  return (
    <section id="sobre" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <Sparkles className="h-4 w-4" />
              A experiência Turco
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Não é só o burger. É a noite inteira.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-stone-300">
            Complementos autorais, chopp estupidamente gelado e um salão industrial iluminado como letreiro de rua —
            sofisticado sem perder a alma de esquina.
          </p>
        </div>

        {/* Bento Box Grid - Adicionado "items-start" para desalinhar as alturas */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 items-start">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] ${card.className}`}
            >
              {card.mediaType === "image" ? (
                <Image
                  src={card.mediaUrl}
                  alt={card.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-photo-hint={card.imageNote}
                  className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
                    card.mediaClassName || ""
                  }`}
                />
              ) : (
                <LazyVideo
                  src={card.mediaUrl}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    card.mediaClassName || ""
                  }`}
                />
              )}
              {card.badge && (
                <div className="absolute top-5 right-5 z-20 animate-pulse rounded-full bg-red-600 px-3 py-1.5 flex items-center gap-1.5 shadow-lg shadow-red-900/50">
                  <Tag className="h-3.5 w-3.5 text-white" />
                  <span className="font-display text-[11px] font-bold uppercase tracking-wider text-white">
                    {card.badge}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-6 sm:p-8 text-shadow-sm">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-zinc-300">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Bar */}
        <div className="mt-8 overflow-hidden border-x border-b border-white/10 bg-zinc-900">
  <div className="h-[2px] bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
  <div className="flex flex-col sm:flex-row">
    <div className="flex flex-1 items-center gap-4 border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 text-gold">
        <ChefHat className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <p className="text-sm leading-relaxed text-zinc-300">
        Selagem na manteiga de leite e de bacon
      </p>
    </div>
    <div className="flex flex-1 items-center gap-4 px-6 py-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 text-gold">
        <Beer className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <p className="text-sm leading-relaxed text-zinc-300">
        Chopp Brahma direto da chopeira, sempre gelado
      </p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}