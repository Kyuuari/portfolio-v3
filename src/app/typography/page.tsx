"use client";
import { AccordionDemo } from "@/components/accordion-demo";
import {
  TypographyBlockquote,
  TypographyDisplay,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "@/components/typography";

import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-background relative top-14">
      <article>
        <header>
          <TypographyH1>黒</TypographyH1>
          <TypographyDisplay>KURO.UI</TypographyDisplay>
          <TypographyH1>ブラック</TypographyH1>

          <section className="flex-1 w-full">
            <AccordionDemo />
          </section>
        </header>

        <section className="flex flex-col items-start md:flex-row md:items-center flex-1 w-full justify-evenly py-4">
          <div className="flex flex-col justify-start">
            <TypographyH1>Heading 1</TypographyH1>
            <TypographyH2>Heading 2</TypographyH2>
            <TypographyH3>Heading 3</TypographyH3>
            <TypographyH4>Heading 4</TypographyH4>
          </div>

          <TypographyP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            facilisis diam, sed viverra sapien. Sed et leo ac ex mollis mollis.
            Aliquam consequat congue convallis. Aenean ac vehicula justo. Morbi
            vulputate, ipsum eu porta imperdiet, neque sapien ullamcorper arcu,
            vel blandit metus quam ut tellus. Suspendisse sapien urna, tristique
            sit amet libero a, rutrum semper tellus. Donec pulvinar ipsum
            sapien, sed malesuada ligula consectetur in.
          </TypographyP>
        </section>

        <section className="flex gap-4 flex-col">
          <TypographyBlockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            facilisis diam, sed viverra sapien.
          </TypographyBlockquote>

          <TypographyLead>
            Lorem ipsum dolor sit amet, Sed et leo ac ex mollis mollis. Aliquam
            consequat congue convallis.
          </TypographyLead>

          <TypographyLarge>Lorem ipsum dolor sit amet,</TypographyLarge>
          <TypographySmall>Lorem ipsum dolor sit amet,</TypographySmall>
          <TypographyMuted>Lorem ipsum dolor sit amet,</TypographyMuted>
        </section>
      </article>
    </main>
  );
}
