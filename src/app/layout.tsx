import "./globals.scss";
import { cn } from "@/lib/utils";
import { bebas, chivo, playfair, spectral } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import { Suspense } from "react";
import { LenisProvider } from "@/components/lenis-provider";
import { Analytics } from "@/components/analytics-provider";

export const metadata = {
  title: "Kyuuari Project",
  description:
    "Chester Cari (@Kyuuari) - Exploring the intersection of design and technology with The Kyuuari Project, a collection of web applications, UI/UX, and digital art projects. This showcase combines my passion for design and technology into fun and creative works",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            bebas.variable,
            spectral.variable,
            playfair.variable,
            chivo.variable,
            "min-h-screen bg-background font-sans antialiased"
          )}
        >
          <LenisProvider>
            <Suspense fallback={"Loading..."}>
              <ThemeProvider attribute="class" defaultTheme="dark">
                <SiteHeader />
                {children}
              </ThemeProvider>
            </Suspense>
          </LenisProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
