"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/galleria", label: "Galleria" },
  { href: "/prenota", label: "Prenota" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* mix-blend-difference makes this bar legible over any background,
          light or dark, without a scroll-triggered color swap */}
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 text-white md:px-10">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl italic tracking-wide md:text-3xl">
              DI.EM
            </span>
            <span className="eyebrow hidden text-white/80 sm:inline">
              Parrucchieri
            </span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "eyebrow relative pb-1 transition-opacity hover:opacity-70",
                  pathname === link.href ? "opacity-100" : "opacity-60"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-current" />
                )}
              </Link>
            ))}
            <a
              href="tel:0541224677"
              className="eyebrow flex items-center gap-2 rounded-full border border-white/60 px-4 py-2 transition-colors hover:border-white"
            >
              <Phone size={13} strokeWidth={1.75} />
              0541 24677
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 md:hidden"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* mobile overlay menu — solid panel, no blend trick here */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col justify-between bg-noir px-8 pt-28 pb-10 text-avorio transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col gap-1">
          {LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display border-b border-white/15 py-4 text-4xl italic"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3">
          <span className="eyebrow text-ottone">Viale Giacomo Matteotti 27, Rimini</span>
          <a href="tel:0541224677" className="font-display text-3xl italic">
            0541 24677
          </a>
        </div>
      </div>
    </>
  );
}
