import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVIZI } from "@/lib/servizi";
import Reveal from "@/components/Reveal";

// Asymmetric editorial grid — deliberately uneven spans instead of a
// uniform card grid, echoing a magazine double-page spread.
const SPANS = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

export default function ServicesHighlight() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <span className="eyebrow text-ottone-2">I nostri servizi</span>
          <h2 className="font-display mt-4 max-w-xl text-4xl italic leading-tight md:text-6xl">
            Quattro competenze, un unico standard.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/servizi"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-noir/70 hover:text-noir"
          >
            Tutti i servizi
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </div>

      <div className="grid gap-5 md:grid-cols-12 md:grid-rows-2">
        {SERVIZI.map((servizio, i) => (
          <Reveal key={servizio.id} delay={i * 0.08} className={SPANS[i]}>
            <Link
              href={`/servizi#${servizio.id}`}
              className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden bg-noir"
            >
              <Image
                src={servizio.image}
                alt={servizio.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/30 to-transparent" />
              <div className="relative flex items-end justify-between p-7 md:p-9">
                <div>
                  <span className="eyebrow text-ottone">{servizio.numero}</span>
                  <h3 className="font-display mt-2 text-3xl italic text-avorio md:text-4xl">
                    {servizio.nome}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm text-avorio/70">
                    {servizio.sintesi}
                  </p>
                </div>
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.5}
                  className="shrink-0 text-avorio/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ottone"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
