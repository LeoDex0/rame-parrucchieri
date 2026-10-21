import Image from "next/image";
import Hero from "@/components/Hero";
import ServicesHighlight from "@/components/ServicesHighlight";
import LookbookTeaser from "@/components/LookbookTeaser";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { photo } from "@/lib/photos";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:grid-cols-12 md:gap-6 md:px-10 md:py-36">
        <Reveal className="md:col-span-5">
          <span className="font-display block text-8xl italic text-ottone/40 md:text-9xl">
            01
          </span>
          <h2 className="font-display -mt-4 text-3xl italic leading-tight md:text-5xl">
            Il salone
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-4">
          <p className="font-accent text-xl italic leading-relaxed text-noir/80 md:text-2xl">
            &ldquo;Un salone pensato per chi cerca un taglio vero, non solo un
            appuntamento veloce.&rdquo;
          </p>
          <p className="mt-6 text-noir/70">
            Il nostro team lavora ogni giorno su taglio, colore e trattamenti
            con un approccio artigianale: prima si ascolta, poi si taglia.
            Tecniche aggiornate, prodotti professionali e la cura di un
            salone di quartiere.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="relative h-72 md:col-span-3 md:h-auto">
          <Image
            src={photo("salonInterior", 1000)}
            alt="Interno del salone Rame Parrucchieri"
            fill
            sizes="(min-width: 768px) 25vw, 90vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <ServicesHighlight />
      <LookbookTeaser />

      <CtaBand
        title="Il vostro prossimo taglio inizia con una chiamata."
        subtitle="Raccontateci cosa avete in mente: rispondiamo con un preventivo su misura, senza sorprese."
      />
    </main>
  );
}
