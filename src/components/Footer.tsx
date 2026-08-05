import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-noir text-avorio">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <p className="font-display text-4xl italic md:text-5xl">DI.EM</p>
            <p className="eyebrow mt-2 text-avorio/60">Parrucchieri &mdash; Rimini</p>
            <p className="font-accent mt-8 max-w-xs text-xl italic text-avorio/80">
              Taglio, colore e cura del capello, con la precisione di un
              atelier e l&rsquo;attenzione di un salone di quartiere.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-ottone">Il salone</p>
            <ul className="flex flex-col gap-3 text-sm text-avorio/80">
              <li>
                <Link href="/" className="hover:text-avorio">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="hover:text-avorio">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/galleria" className="hover:text-avorio">
                  Galleria
                </Link>
              </li>
              <li>
                <Link href="/prenota" className="hover:text-avorio">
                  Prenota
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-ottone">Valutazione</p>
            <div className="flex items-center gap-1 text-ottone">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-2 text-sm text-avorio/80">4,8 su Google</p>
            <p className="text-sm text-avorio/50">87 recensioni</p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-ottone">Contatti</p>
            <a
              href="https://maps.google.com/?q=Viale+Giacomo+Matteotti+27,+Rimini"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 text-sm text-avorio/80 hover:text-avorio"
            >
              <MapPin size={16} className="mt-0.5 shrink-0" strokeWidth={1.5} />
              Viale Giacomo Matteotti 27, Rimini
            </a>
            <a
              href="tel:0541224677"
              className="mt-3 flex items-center gap-2 text-sm text-avorio/80 hover:text-avorio"
            >
              <Phone size={16} strokeWidth={1.5} />
              0541 24677
            </a>
            <p className="mt-3 text-xs text-avorio/40">
              Solo telefono &mdash; su appuntamento.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-avorio/10 pt-6 text-xs text-avorio/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} DI.EM Parrucchieri. Tutti i diritti riservati.</p>
          <p>Viale Giacomo Matteotti 27, 47921 Rimini (RN)</p>
        </div>
      </div>
    </footer>
  );
}
