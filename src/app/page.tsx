"use client";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
MouseFollower.registerGSAP(gsap);
import {
  TypographyBlockquote,
  TypographyDisplay,
  TypographyH1,
  TypographyH2,
  TypographyLarge,
  TypographyLead,
  TypographyP,
  TypographySmall,
} from "@/components/typography";

gsap.registerPlugin(ScrollTrigger);

import FadeUp from "@/components/animation/fade-up";
import Marquee from "@/components/animation/marquee";
import WebGL from "@/components/webgl";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const cursor = new MouseFollower({});
    return () => {
      cursor.destroy();
    };
  }, []);

  return (
    <main>
      <article className="h-screen flex flex-1 flex-col items-center justify-center">
        <WebGL />
      </article>

      <article className="h-[80vh] flex flex-col justify-evenly">
        <div className="justify-start overflow-hidden">
          <Marquee repeat={7}>
            <TypographyH1>
              Not all those who wander are lost &nbsp;
            </TypographyH1>
          </Marquee>
        </div>

        <div className="h-full grid place-items-center container">
          <div data-cursor-text="👋 HI" className="text-center">
            <FadeUp>
              <TypographyDisplay>WHO AM I?</TypographyDisplay>
            </FadeUp>
            <TypographyH2>Hi 👋, My name is Chester</TypographyH2>
            <TypographyP>
              I believe in exploration and experimentation. <br />
              Merging my passions for <b>creativity</b> and <b>technology</b>, I
              specialize in <b>designing</b> and
              <b> developing</b> things for the web.
            </TypographyP>
            <br />
            <TypographySmall>
              &quot;Not all those who wander are lost&quot; - J.R.R. Tolkien,
              The Fellowship of the Ring
            </TypographySmall>
          </div>
        </div>

        <div className="justify-end overflow-hidden">
          <Marquee repeat={7}>
            <TypographyH1>
              Not all those who wander are lost &nbsp;
            </TypographyH1>
          </Marquee>
        </div>
      </article>

      <article className="h-full py-12 flex flex-col gap-4 container">
        <section data-cursor-text="🤔 I BUILD STUFF?" className="">
          <FadeUp>
            <TypographyDisplay>WHAT I DO?</TypographyDisplay>
          </FadeUp>
          <TypographyH2>I like to build and design stuff</TypographyH2>
          <TypographyP>
            Graduating from a computer science program, I learned a lot about
            <b> building applications</b> and the various parts of development.
            I found a love for front-end and
            <b> developing unique and creative user experiences.</b>
            <br />
            <br />I like to <b>push the boundaries </b> and <b>explore </b> new
            tech. Currently I am building projects using <b>WebGL</b> and
            looking at a variety
            <b> animation </b> libaries.
            <br />
            <br />
            When I&apos;m not coding, you can find me pursuing my other creative
            passions, including <b>drawing</b>, <b>3D modeling</b>, and
            <b> motion design</b>. I also enjoy playing video games and staying
            up-to-date on the latest industry trends and innovations.
          </TypographyP>
        </section>
      </article>

      <article className="h-full py-12 flex flex-col gap-4 md:grid md:grid-cols-8 container">
        <FadeUp className="col-start-7 md:self-end">
          <TypographyDisplay>Kyuuari</TypographyDisplay>
        </FadeUp>

        <section
          data-cursor-text="🔥🔥🔥"
          className="col-span-full md:col-start-1 md:col-span-7"
        >
          <TypographyH2>What&apos;s the Kyuuari Project?</TypographyH2>
          <TypographyP>
            The Kyuuari Project is a collection of
            <b> web applications </b>, <b>UI/UX</b>, and <b>digital art</b>{" "}
            projects built by myself and is a hub for me to explore and post my
            work.
          </TypographyP>
        </section>
      </article>
    </main>
  );
}
