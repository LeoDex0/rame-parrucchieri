import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rame Parrucchieri — Rimini",
  description:
    "Rame Parrucchieri, Rimini. Taglio, colore, trattamenti ricostituenti e styling. 4,7★ su Google con 64 recensioni. Richiedi un preventivo.",
  metadataBase: new URL("https://rame-parrucchieri.vercel.app"),
  openGraph: {
    title: "Rame Parrucchieri — Rimini",
    description:
      "Taglio, colore, trattamenti ricostituenti e styling a Rimini. Richiedi un preventivo su misura.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${playfair.variable} ${cormorant.variable} ${workSans.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-avorio text-noir" suppressHydrationWarning>
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
