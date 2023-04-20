"use client";
import {
  TypographyDisplay,
  TypographyH1,
  TypographyH4,
  TypographyP,
} from "@/components/typography";

export default function Home() {
  return (
    <main className="h-screen flex flex-1 flex-col items-center justify-center">
      <article className="px-10">
        <TypographyH1>* About *</TypographyH1>
        <TypographyP>
          This project is a design system and component library I am currently
          working on to be used for my projects. Under the hood it utilizes
          Next.js, Tailwind, and Radix. This is based of the shadcn/ui
          components and is an exploration in quickly building and iterating ui,
          using bleedin edge solutions.
        </TypographyP>
      </article>
    </main>
  );
}
