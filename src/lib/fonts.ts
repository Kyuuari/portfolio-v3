import { Bebas_Neue, Inconsolata, Merriweather, Playfair_Display, Source_Sans_Pro, Space_Grotesk, Spectral_SC, } from "next/font/google";

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const spectral = Spectral_SC({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
  variable: "--font-sub",
});

export const playfair = Merriweather({
  subsets: ["latin"],
  weight: ["400", "900"],
  style: ["normal"],
  variable: "--font-body",
});

export const chivo = Inconsolata({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-accent",
});