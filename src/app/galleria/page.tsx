import type { Metadata } from "next";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import PageHero from "@/components/PageHero";
import HorizontalLookbook from "@/components/HorizontalLookbook";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { LOOKBOOK_ITEMS } from "@/lib/lookbook";
import { photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Galleria — DI.EM Parrucchieri",
  description:
    "La lookbook di DI.EM Parrucchieri: tagli, colore e styling realizzati nel nostro salone di Rimini.",
};

const ALTRI_MOMENTI = [
  {
    id: "salone",
    src: photo("salonInterior", 1200),
    alt: "Interno del salone, postazioni e specchi",
    span: "md:col-span-7",
  },
  {
    id: "moody",
    src: photo("moodySalon", 1200),
    alt: "Atmosfera del salone in penombra",
    span: "md:col-span-5",
  },
  {
    id: "ritratto",
    src: photo("brunettePortrait", 1200),
    alt: "Ritratto sorridente dopo il trattamento",
    span: "md:col-span-5",
  },
  {
    id: "lavaggio",
    src: photo("hairWash", 1200),
    alt: "Trattamento e lavaggio in salone",
    span: "md:col-span-7",
  },
];

export default function GalleriaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Le nostre realizzazioni"
        title="Lookbook"
        lead="Otto scatti, un unico filo conduttore: tecnica precisa e risultato che si vede subito. Scorrete in orizzontale, come le pagine di un servizio fotografico."
      />

      <Reveal className="mx-auto mb-8 flex max-w-[1600px] items-center gap-3 px-6 text-noir/50 md:px-10">
        <MoveHorizontal size={16} strokeWidth={1.5} />
        <span className="eyebrow">Scorri per esplorare la lookbook</span>
      </Reveal>

      <HorizontalLookbook items={LOOKBOOK_ITEMS} />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <Reveal className="mb-14">
          <span className="eyebrow text-ottone-2">Altri momenti</span>
          <h2 className="font-display mt-4 max-w-xl text-4xl italic leading-tight md:text-6xl">
            Uno sguardo dentro il salone.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-12">
          {ALTRI_MOMENTI.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.08}
              className={`relative h-72 overflow-hidden md:h-96 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Vi piace quello che vedete?"
        subtitle="Portateci un'ispirazione, una foto o solo un'idea: la trasformiamo in un piano di taglio e colore su misura."
      />
    </main>
  );
}
