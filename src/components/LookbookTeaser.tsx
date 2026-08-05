import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LOOKBOOK_ITEMS } from "@/lib/lookbook";
import Reveal from "@/components/Reveal";

export default function LookbookTeaser() {
  const [first, second, third] = LOOKBOOK_ITEMS;

  return (
    <section className="relative overflow-hidden bg-avorio-2 px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 md:grid-cols-2">
        <Reveal>
          <span className="eyebrow text-ottone-2">La lookbook</span>
          <h2 className="font-display mt-4 text-4xl italic leading-[1.05] md:text-6xl">
            Il risultato,
            <br />
            raccontato per immagini.
          </h2>
          <p className="mt-6 max-w-md text-noir/70 md:text-lg">
            Una selezione dei nostri lavori: tagli, colore e styling, dallo
            scatto naturale a quello più editoriale. Scorri la galleria
            completa in orizzontale, come un servizio fotografico.
          </p>
          <Link
            href="/galleria"
            className="group mt-8 inline-flex items-center gap-2 border border-noir/20 px-8 py-4 text-sm font-medium tracking-wide text-noir transition-colors hover:border-noir"
          >
            Guarda la lookbook completa
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="relative h-[26rem] md:h-[34rem]">
          <div className="absolute left-0 top-0 h-[70%] w-[55%] overflow-hidden shadow-xl">
            <Image
              src={first.src}
              alt={first.alt}
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[60%] w-[50%] overflow-hidden shadow-xl">
            <Image
              src={second.src}
              alt={second.alt}
              fill
              sizes="35vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-[6%] top-[4%] h-[38%] w-[32%] overflow-hidden border-4 border-avorio-2 shadow-xl">
            <Image
              src={third.src}
              alt={third.alt}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
