import { photo } from "@/lib/photos";
import type { LookbookItem } from "@/components/HorizontalLookbook";

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: "impatto",
    src: photo("flyingHair", 1600),
    alt: "Chioma rosa in movimento, colore creativo",
    index: "01",
    tag: "Colore d'impatto",
    caption: "Un colore che si muove con te.",
  },
  {
    id: "movimento",
    src: photo("handsInHair", 1600),
    alt: "Capelli mossi, taglio su misura",
    index: "02",
    tag: "Movimento naturale",
    caption: "Onde morbide, taglio su misura.",
  },
  {
    id: "texture",
    src: photo("afroPortrait", 1600),
    alt: "Ritratto con texture e volume naturale",
    index: "03",
    tag: "Texture & volume",
    caption: "Ogni texture ha la sua tecnica.",
  },
  {
    id: "creativo",
    src: photo("rainbowHair", 1600),
    alt: "Capelli lunghi con colore arcobaleno",
    index: "04",
    tag: "Colore creativo",
    caption: "Colore su misura, senza compromessi.",
  },
  {
    id: "uomo",
    src: photo("barberColor", 1600),
    alt: "Taglio e colore uomo in lavorazione",
    index: "05",
    tag: "Taglio uomo",
    caption: "Precisione anche nel dettaglio più piccolo.",
  },
  {
    id: "serale",
    src: photo("curlingIron", 1600),
    alt: "Styling con arricciacapelli per un'acconciatura da sera",
    index: "06",
    tag: "Styling da sera",
    caption: "Styling su misura per le occasioni che contano.",
  },
  {
    id: "piega",
    src: photo("stylistBlowDry", 1600),
    alt: "Messa in piega professionale in salone",
    index: "07",
    tag: "Piega",
    caption: "La piega che tiene tutta la settimana.",
  },
  {
    id: "finitura",
    src: photo("roundBrush", 1600),
    alt: "Dettaglio della finitura con spazzola tonda",
    index: "08",
    tag: "Finitura",
    caption: "La cura è nel dettaglio finale.",
  },
];
