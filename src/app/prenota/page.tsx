import type { Metadata } from "next";
import { MapPin, Phone, Clock3 } from "lucide-react";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import MapEmbed from "@/components/MapEmbed";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Prenota — DI.EM Parrucchieri",
  description:
    "Prenota un appuntamento da DI.EM Parrucchieri, Viale Giacomo Matteotti 27, Rimini. Chiamaci allo 0541 24677 o compila il modulo di richiesta.",
};

export default function PrenotaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contatti & appuntamenti"
        title="Prenota"
        lead="Per fissare un appuntamento chiamateci direttamente, oppure lasciateci i vostri dati: vi ricontattiamo noi per confermare data e orario."
      />

      <section className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <Reveal className="flex flex-col gap-10">
            <div>
              <span className="eyebrow mb-4 block text-ottone-2">Indirizzo</span>
              <a
                href="https://maps.google.com/?q=Viale+Giacomo+Matteotti+27,+Rimini"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3"
              >
                <MapPin size={22} strokeWidth={1.5} className="mt-1 shrink-0 text-ottone" />
                <span className="font-display text-2xl italic leading-snug group-hover:underline">
                  Viale Giacomo Matteotti 27,
                  <br />
                  47921 Rimini (RN)
                </span>
              </a>
            </div>

            <div>
              <span className="eyebrow mb-4 block text-ottone-2">Telefono</span>
              <a href="tel:0541224677" className="group flex items-center gap-3">
                <Phone size={22} strokeWidth={1.5} className="shrink-0 text-ottone" />
                <span className="font-display text-3xl italic group-hover:underline">
                  0541 24677
                </span>
              </a>
              <p className="mt-3 max-w-xs text-sm text-noir/50">
                Rispondiamo volentieri alle vostre domande e vi aiutiamo a
                scegliere l&rsquo;appuntamento più adatto.
              </p>
            </div>

            <div>
              <span className="eyebrow mb-4 block text-ottone-2">Come lavoriamo</span>
              <div className="flex items-start gap-3">
                <Clock3 size={22} strokeWidth={1.5} className="mt-1 shrink-0 text-ottone" />
                <p className="max-w-xs text-noir/70">
                  Lavoriamo su appuntamento, per dedicare a ogni cliente il
                  tempo giusto. Chiamateci per conoscere la prima
                  disponibilità.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="border-t border-line pt-10 md:border-t-0 md:border-l md:pl-16 md:pt-0">
            <span className="eyebrow mb-6 block text-ottone-2">Richiedi un appuntamento</span>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <MapEmbed />
    </main>
  );
}
