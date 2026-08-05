import { photo } from "@/lib/photos";

export interface Servizio {
  id: string;
  numero: string;
  nome: string;
  sintesi: string;
  descrizione: string;
  dettagli: string[];
  image: string;
  imageAlt: string;
}

export const SERVIZI: Servizio[] = [
  {
    id: "taglio",
    numero: "01",
    nome: "Taglio",
    sintesi: "Un taglio costruito sul viso, non sulla tendenza del momento.",
    descrizione:
      "Ogni taglio nasce da una consulenza vera: struttura del viso, texture del capello, tempo che avete a disposizione ogni mattina. Lavoriamo su donna, uomo e bambino con la stessa attenzione tecnica.",
    dettagli: [
      "Consulenza e analisi del capello inclusa",
      "Taglio donna, uomo e bambino",
      "Ritocco e styling di prova finale",
    ],
    image: photo("stylistBlowDry", 1400),
    imageAlt: "Taglio e messa in piega in salone",
  },
  {
    id: "colore",
    numero: "02",
    nome: "Colore",
    sintesi: "Dal biondo più naturale al colore più creativo.",
    descrizione:
      "Schiariture, balayage, tecniche di contouring colore o tinte creative a tutta chioma: usiamo prodotti professionali e un percorso di colore pensato per la salute del capello, non solo per il risultato del giorno.",
    dettagli: [
      "Balayage, meches e shatush",
      "Coloritura naturale e copertura capelli bianchi",
      "Colore creativo e fantasia",
    ],
    image: photo("rainbowHair", 1400),
    imageAlt: "Colore creativo su capelli lunghi",
  },
  {
    id: "trattamenti",
    numero: "03",
    nome: "Trattamenti ricostituenti",
    sintesi: "Per capelli stressati da colore, calore o semplicemente il tempo.",
    descrizione:
      "Protocolli ricostruenti e nutrienti su misura per capello danneggiato, sfibrato o disidratato: l'obiettivo è restituire corpo, lucentezza ed elasticità, non solo mascherare il problema per qualche giorno.",
    dettagli: [
      "Trattamento ricostruente in profondità",
      "Nutrizione e lucentezza per capelli colorati",
      "Percorsi personalizzati su più sedute",
    ],
    image: photo("hairWash", 1400),
    imageAlt: "Trattamento e lavaggio ricostituente in salone",
  },
  {
    id: "styling",
    numero: "04",
    nome: "Styling",
    sintesi: "Dalla piega di tutti i giorni all'acconciatura da evento.",
    descrizione:
      "Piega, styling quotidiano e acconciature per cerimonie ed eventi speciali: lavoriamo sulla tenuta oltre che sull'estetica, così il risultato regge davvero l'intera giornata.",
    dettagli: [
      "Piega e styling quotidiano",
      "Acconciature per cerimonie ed eventi",
      "Styling con ferro e finiture di precisione",
    ],
    image: photo("curlingIron", 1400),
    imageAlt: "Styling con ferro arricciacapelli",
  },
];
