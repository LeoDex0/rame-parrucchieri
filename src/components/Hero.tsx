"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { photo } from "@/lib/photos";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-noir">
      <motion.div style={{ scale: imageScale, y: imageY }} className="absolute inset-0">
        <Image
          src={photo("flyingHair", 2000)}
          alt="Chioma in movimento, colore vivo — DI.EM Parrucchieri"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_30%] opacity-80"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/70 via-transparent to-transparent" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-ottone"
        >
          DI.EM Parrucchieri &mdash; Viale Giacomo Matteotti 27, Rimini
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 max-w-3xl text-6xl italic leading-[0.98] text-avorio sm:text-7xl md:text-[6.5rem]"
        >
          L&rsquo;arte del
          <br />
          taglio, a Rimini.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-md text-lg text-avorio/70"
        >
          Taglio, colore e trattamenti pensati capello per capello, in un
          salone che unisce precisione tecnica e cura autentica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/prenota"
            className="group inline-flex items-center gap-2 bg-ottone px-8 py-4 text-sm font-medium tracking-wide text-noir transition-colors hover:bg-avorio"
          >
            Richiedi un preventivo
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href="/servizi"
            className="inline-flex items-center gap-2 border border-avorio/30 px-8 py-4 text-sm font-medium tracking-wide text-avorio transition-colors hover:border-avorio"
          >
            Scopri i servizi
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 right-6 hidden flex-col items-center gap-2 text-avorio/60 md:right-10 md:flex"
      >
        <span className="eyebrow [writing-mode:vertical-rl]">Scorri</span>
        <ArrowDown size={16} strokeWidth={1.5} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
