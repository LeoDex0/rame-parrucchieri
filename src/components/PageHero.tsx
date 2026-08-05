import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
      <Reveal>
        <span className="eyebrow text-ottone-2">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="font-display mt-6 max-w-4xl text-6xl italic leading-[1.02] md:text-8xl">
          {title}
        </h1>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-lg text-noir/70 md:text-xl">{lead}</p>
        </Reveal>
      )}
    </section>
  );
}
