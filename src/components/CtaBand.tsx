import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CtaBand({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-noir px-6 py-24 text-avorio md:px-10 md:py-36">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl italic leading-[1.05] md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-avorio/60 md:text-lg">{subtitle}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <Link
            href="/prenota"
            className="group inline-flex items-center justify-center gap-2 bg-ottone px-8 py-4 text-sm font-medium tracking-wide text-noir transition-colors hover:bg-avorio"
          >
            Richiedi un preventivo
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <a
            href="tel:0541255210"
            className="inline-flex items-center justify-center gap-2 border border-avorio/30 px-8 py-4 text-sm font-medium tracking-wide text-avorio transition-colors hover:border-avorio"
          >
            <Phone size={15} strokeWidth={1.75} />
            0541 55210
          </a>
        </Reveal>
      </div>
    </section>
  );
}
