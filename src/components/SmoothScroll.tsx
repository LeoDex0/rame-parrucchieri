"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GsapBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [smooth] = useState(() =>
    typeof window === "undefined"
      ? true
      : !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  if (!smooth) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.1,
        duration: 1.15,
        wheelMultiplier: 1,
        anchors: true,
      }}
    >
      <GsapBridge />
      {children}
    </ReactLenis>
  );
}
