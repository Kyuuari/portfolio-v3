"use client";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
MouseFollower.registerGSAP(gsap);
import {
  TypographyDisplay,
  TypographyH1,
  TypographyH2,
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
    <main className="container">
      <article className="h-screen flex flex-1 flex-col items-center justify-center">
        <WebGL />
      </article>

      <article className="h-[80vh] flex flex-col justify-evenly">
        <div className="justify-start overflow-hidden">
          <Marquee repeat={5}>
            <TypographyH1>
              Not all those who wander are lost &nbsp;
            </TypographyH1>
          </Marquee>
        </div>

        <div className="h-full grid place-items-center">
          <div data-cursor-text="👋 HI" className="text-center">
            <FadeUp>
              <TypographyDisplay>WHO AM I?</TypographyDisplay>
            </FadeUp>
            <TypographyH2>Hi 👋, My name is Chester</TypographyH2>
            {/* <TypographySmall>Chester Cari @Kyuuari</TypographySmall> */}
            <TypographyP>
              I love merging <b>creativity</b> with <b>technology</b>. I
              specialize in designing and developing things for the web.
            </TypographyP>
          </div>
        </div>

        <div className="justify-end overflow-hidden">
          <Marquee repeat={5}>
            <TypographyH1>Not all those who wander are lost</TypographyH1>
          </Marquee>
        </div>
      </article>

      <article className="h-full py-12 flex flex-col gap-4">
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
            <b> animation libaries</b>.
            <br />
            <br />
            When I&apos;m not coding, you can find me pursuing my other creative
            passions, including drawing, 3D modeling, and motion design. I also
            enjoy playing video games and staying up-to-date on the latest
            industry trends and innovations.
          </TypographyP>
        </section>
      </article>

      <article className="h-full py-12 flex flex-col gap-4 md:grid md:grid-cols-8">
        <TypographyDisplay className="col-start-7 md:self-end">
          kyuuari
        </TypographyDisplay>
        <section
          data-cursor-text="🔥🔥🔥"
          className="col-span-full md:col-start-1 md:col-span-7"
        >
          <TypographyH2>What&apos;s the Kyuuari Project?</TypographyH2>
          <TypographyP>
            The Kyuuari Project is a collection of
            <b> web applications </b>, <b>UI/UX</b>, and <b>digital art</b>{" "}
            projects built by meself and is a hub for me to explore and post my
            work
          </TypographyP>
        </section>
      </article>
    </main>
  );
}
