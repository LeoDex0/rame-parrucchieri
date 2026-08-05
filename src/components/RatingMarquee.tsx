import { Star } from "lucide-react";

const ITEM = (
  <span className="mx-6 inline-flex items-center gap-3 md:mx-8">
    <span className="flex items-center gap-1 text-ottone">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
    <span className="font-display text-lg italic md:text-xl">
      4,8 su Google &mdash; 87 recensioni
    </span>
    <span className="text-avorio/30">&mdash;</span>
    <span className="eyebrow text-avorio/60">Viale Giacomo Matteotti 27, Rimini</span>
  </span>
);

export default function RatingMarquee() {
  return (
    <div className="overflow-hidden border-y border-avorio/10 bg-noir py-4 text-avorio">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {ITEM}
        {ITEM}
        {ITEM}
        {ITEM}
      </div>
    </div>
  );
}
