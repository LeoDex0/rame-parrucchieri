const ADDRESS = "Viale Giacomo Matteotti 27, 47921 Rimini RN";

export default function MapEmbed() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden md:h-[520px]">
      <iframe
        title="DI.EM Parrucchieri su Google Maps"
        src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
        className="h-full w-full grayscale-[35%] contrast-[1.05]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
