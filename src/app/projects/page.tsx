import {
  TypographyDisplay,
  TypographyH1,
  TypographyP,
} from "@/components/typography";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="container">
      <article className="pt-20">
        <TypographyH1>* Projects *</TypographyH1>
        <TypographyP>
          This section is still a work in progress however as I find a more
          elegant and creative solution for presenting my work please check out
          some things I&apos;ve been working on!
        </TypographyP>
      </article>

      <article className="pt-20">
        <Link
          className="hover:opacity-20"
          href={"https://r3f-experience-lab.vercel.app/"}
        >
          <TypographyDisplay>Experience Lab</TypographyDisplay>
          {/* <TypographyP>Small Lab Project</TypographyP> */}
        </Link>
        <hr className="py-10" />
        <Link
          className="hover:opacity-20 hover:bg-"
          href={"https://r3f-shader-lab.vercel.app/"}
        >
          <TypographyDisplay>Shader Lab</TypographyDisplay>
          {/* <TypographyP>Small Lab Project</TypographyP> */}
        </Link>
        <hr className="py-10" />
        <Link
          className="hover:opacity-20 hover:bg-"
          href={" https://kuro-ui.vercel.app/"}
        >
          <TypographyDisplay>Kuro.UI</TypographyDisplay>
          {/* <TypographyP>Small Lab Project</TypographyP> */}
        </Link>
        <hr className="py-10" />
      </article>
    </main>
  );
}
