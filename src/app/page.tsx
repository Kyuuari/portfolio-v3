"use client";
import { TypographyDisplay, TypographyH1 } from "@/components/typography";

export default function Home() {
  return (
    <main className="">
      <section className="h-screen flex flex-1 flex-col items-center justify-center">
        <TypographyH1 className="">黒</TypographyH1>
        <TypographyDisplay>KURO.UI</TypographyDisplay>
        <TypographyH1>ブラック</TypographyH1>
      </section>
    </main>
  );
}
