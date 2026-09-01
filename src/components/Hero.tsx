"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Flame, Sandwich, Volume2, VolumeX } from "lucide-react";
import { getWhatsAppUrl } from "@/utils/whatsapp";

function StringLights() {
  return (
    // Ajustado para top-4 no mobile para acompanhar a subida do conteúdo
    <div className="pointer-events-none absolute inset-x-0 top-4 z-10 sm:top-16" aria-hidden="true">
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="mx-auto flex max-w-5xl justify-between px-4 sm:px-6">
        {Array.from({ length: 13 }).map((_, index) => (
          <span
            key={index}
            className="mt-[-5px] h-2 w-2 rounded-full bg-gold animate-glow sm:h-2.5 sm:w-2.5"
            style={{ animationDelay: `${index * 0.14}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      id="inicio"
      // Reduzido de pt-24 para pt-16 no mobile para puxar o conteúdo para cima
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-16 pb-10 sm:pt-24 sm:pb-16"
    >
      <StringLights />

      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {/* Diminuído o padding, fonte e margem inferior no mobile */}
          <p className="mb-3 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 sm:px-3 sm:py-1.5 font-display text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-5">
            <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Hamburgueria artesanal · Goiânia
          </p>

          {/* Fonte reduzida para text-3xl no mobile */}
          <h1 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Selado na manteiga.
            <span className="mt-1 sm:mt-2 block text-gold">Feito para ficar na memória.</span>
          </h1>

          {/* Fonte reduzida para text-sm e margem superior ajustada no mobile */}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-300 sm:mt-6 sm:text-base lg:text-lg">
            Cada blend passa pela chapa com <strong className="font-semibold text-foreground">manteiga de leite</strong> e{" "}
            <strong className="font-semibold text-foreground">manteiga de bacon</strong> — crosta dourada, suco preso,
            sabor de casa cheia. O <strong className="text-gold">Burak Burger</strong> é o 23º melhor hambúrguer do
            Brasil.
          </p>

          {/* Botões menores no mobile (px-5 py-2.5 text-xs) e padrão no desktop */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a
              href={getWhatsAppUrl("Burak Burger")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-zinc-950 shadow-[0_0_28px_rgba(245,197,24,0.35)] transition-all duration-300 hover:scale-105 hover:bg-gold-soft hover:shadow-[0_0_36px_rgba(245,197,24,0.55)] sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Pedir o Burak
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:scale-105 hover:border-gold/40 hover:bg-gold/10 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              <Sandwich className="h-3.5 w-3.5 text-gold sm:h-4 sm:w-4" />
              Ver destaques
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md sm:max-w-none">
          <div className="absolute -inset-6 -z-10 rounded-full bg-gold/15 blur-3xl" />
          <figure className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl shadow-black/50 transition-all duration-500 hover:scale-[1.02] hover:border-gold/35">
            
            {/* VÍDEO DO PREPARO */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/aisha.mp4" type="video/mp4" />
            </video>

            <button
              type="button"
              onClick={toggleMute}
              aria-pressed={!isMuted}
              aria-label={isMuted ? "Ativar som do preparo" : "Desativar som"}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/50 hover:text-white"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>

            {/* Ignora cliques no gradiente/texto para não atrapalhar o botão */}
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 sm:p-6">
              <p className="font-display text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Preparo Artesanal
              </p>
              <p className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">Na Manteiga</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}