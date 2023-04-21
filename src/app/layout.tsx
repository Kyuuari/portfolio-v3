import "./globals.scss";
import { cn } from "@/lib/utils";
import { bebas, chivo, playfair, spectral } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import { Suspense } from "react";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { LenisProvider } from "@/components/lenis-provider";

export const metadata = {
  title: "Kuro.ui",
  description:
    "Kuro.ui is a compnent libary and exploration for my own design system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        bebas.variable,
        spectral.variable,
        playfair.variable,
        chivo.variable
      )}
      suppressHydrationWarning
    >
      <head />
      <body>
        <LenisProvider>
          <Suspense fallback={"Loading..."}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <SiteHeader />
              {children}
            </ThemeProvider>
          </Suspense>
        </LenisProvider>
      </body>
    </html>
  );
}
