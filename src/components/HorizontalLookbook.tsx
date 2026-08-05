"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface LookbookItem {
  id: string;
  src: string;
  alt: string;
  index: string;
  tag: string;
  caption: string;
}

/**
 * Signature interaction of the site: a horizontal-scroll lookbook.
 *
 * Desktop/tablet (>=768px): classic GSAP ScrollTrigger horizontal-pin — the
 * section pins in place while vertical scroll drives the track sideways.
 *
 * Mobile (<768px): pinning a horizontal track while the browser chrome
 * resizes on scroll is unreliable, so we intentionally skip GSAP there and
 * fall back to a native CSS scroll-snap row the user swipes directly.
 */
export default function HorizontalLookbook({ items }: { items: LookbookItem[] }) {
  const container = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const trackEl = track.current;
        const containerEl = container.current;
        if (!trackEl || !containerEl) return;

        const getDistance = () => trackEl.scrollWidth - window.innerWidth;

        const tween = gsap.to(trackEl, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: containerEl,
            start: "top top",
            end: () => `+=${getDistance()}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative md:h-screen md:overflow-hidden">
      <div
        ref={track}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 md:h-full md:w-max md:snap-none md:gap-0 md:overflow-visible md:px-0 md:pb-0"
      >
        {items.map((item) => (
          <figure
            key={item.id}
            className="group relative h-[68vh] w-[82vw] shrink-0 snap-start overflow-hidden bg-noir md:h-full md:w-[56vw] lg:w-[44vw]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 50vw, 85vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority={item.index === "01" || item.index === "02"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/5 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-10">
              <div>
                <span className="eyebrow text-ottone">{item.tag}</span>
                <h3 className="font-display mt-2 max-w-sm text-2xl italic leading-tight text-avorio md:text-4xl">
                  {item.caption}
                </h3>
              </div>
              <span className="font-display hidden shrink-0 text-6xl italic text-avorio/20 lg:block">
                {item.index}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
