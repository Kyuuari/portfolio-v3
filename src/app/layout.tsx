import "./globals.css";
import { cn } from "@/lib/utils";
import { bebas, chivo, playfair, spectral } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import MainNav from "@/components/main-nav";
import SiteHeader from "@/components/site-header";

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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
