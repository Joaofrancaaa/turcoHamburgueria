"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Beer, ChefHat, Sparkles } from "lucide-react";

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
    className: "md:col-span-3 min-h-[550px]", 
    mediaClassName: "brightness-150"
  },
  {
    title: "Chopp Brahma",
    description:
      "O par perfeito da chapa quente. Estupidamente gelado com 50% OFF às quartas e sábados.",
    mediaUrl:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    imageNote: "FOTO REAL: chopp Brahma servido no balcão da casa.",
    className: "md:col-span-3 min-h-[300px]", // Este ficará mais curto que o vídeo ao lado
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
        <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 text-sm text-stone-200">
          <span className="inline-flex items-center gap-2">
            <ChefHat className="h-5 w-5 text-gold" />
            Selagem na manteiga de leite e de bacon
          </span>
          <span className="inline-flex items-center gap-2">
            <Beer className="h-5 w-5 text-gold" />
            Chopp Brahma direto da chopeira
          </span>
        </div>
      </div>
    </section>
  );
}