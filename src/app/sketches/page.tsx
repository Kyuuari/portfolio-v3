import {
  TypographyDisplay,
  TypographyH1,
  TypographyP,
} from "@/components/typography";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="h-screen flex flex-1 flex-col items-center justify-center">
      <article className="px-10">
        <TypographyDisplay>Work In Progress</TypographyDisplay>
        <TypographyH1>* Sketches *</TypographyH1>
        <TypographyP>
          This section is will be dedicated to my works in <b>WebGL</b>,{" "}
          <b>Graphic Design</b>, and <b>Motion Design </b>
          as I work on building my portfoio up please check out my Github and
          other socials to keep up with my growth and progress!
        </TypographyP>
      </article>
    </main>
  );
}
