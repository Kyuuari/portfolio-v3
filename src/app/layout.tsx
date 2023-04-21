import "./globals.scss";
import { cn } from "@/lib/utils";
import { bebas, chivo, playfair, spectral } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import { Suspense } from "react";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { LenisProvider } from "@/components/lenis-provider";

export const metadata = {
  title: "Kyuuari Project",
  description:
    "Chester Cari (@Kyuuari) - Exploring the intersection of design and technology with The Kyuuari Project, a collection of web applications, UI/UX, and digital art projects. This showcase combines my passion for design and technology into fun and creative works",
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
