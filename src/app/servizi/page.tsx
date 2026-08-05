import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { SERVIZI } from "@/lib/servizi";

export const metadata: Metadata = {
  title: "Servizi — DI.EM Parrucchieri",
  description:
    "Taglio, colore, trattamenti ricostituenti e styling da DI.EM Parrucchieri a Rimini. Richiedi un preventivo su misura per la tua chioma.",
};

export default function ServiziPage() {
  return (
    <main>
      <PageHero
        eyebrow="Cosa facciamo"
        title="Servizi"
        lead="Il prezzo di ogni servizio varia in base a lunghezza, tecnica e condizione del capello: per questo non pubblichiamo un listino fisso. Raccontateci cosa desiderate e vi rispondiamo con un preventivo su misura."
      />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {SERVIZI.map((servizio, i) => (
          <section
            key={servizio.id}
            id={servizio.id}
            className="scroll-mt-28 border-t border-line py-16 md:py-24"
          >
            <div
              className={`grid gap-10 md:grid-cols-2 md:items-center md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="relative h-80 md:h-[30rem]">
                <Image
                  src={servizio.image}
                  alt={servizio.imageAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
                <span className="font-display absolute -left-2 -top-6 text-7xl italic text-ottone/30 md:-left-6 md:-top-10 md:text-9xl">
                  {servizio.numero}
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-display text-4xl italic md:text-6xl">
                  {servizio.nome}
                </h2>
                <p className="mt-6 max-w-lg text-lg text-noir/70">
                  {servizio.descrizione}
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {servizio.dettagli.map((dettaglio) => (
                    <li
                      key={dettaglio}
                      className="flex items-start gap-3 text-sm text-noir/70"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ottone" />
                      {dettaglio}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/prenota"
                  className="group mt-10 inline-flex items-center gap-2 bg-noir px-7 py-3.5 text-sm font-medium tracking-wide text-avorio transition-colors hover:bg-ottone hover:text-noir"
                >
                  Richiedi un preventivo
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.75}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CtaBand
        title="Non sai ancora cosa scegliere?"
        subtitle="Va benissimo: descriveteci il capello che avete e il risultato che immaginate. Pensiamo noi alla tecnica giusta."
      />
    </main>
  );
}
