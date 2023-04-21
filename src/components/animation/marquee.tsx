"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
  repeat?: number;
} & Record<string, any>;

export default function Marquee({ children, repeat = 2, ...props }: Props) {
  const marquee = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .to(marquee.current.children, {
          xPercent: -100,
          repeat: -1,
          duration: 10,
          ease: "linear",
        })
        .totalProgress(0.5);

      gsap.set(".marquee__inner", { xPercent: -50 });

      //   //clean up animations
      return () => ctx.revert();
    });
  }, []);

  //TODO: Make Reusable
  return (
    <div className="relative overflow-hidden">
      <div
        ref={marquee}
        className="flex flex-row flex-auto w-fit marquee__inner"
      >
        {new Array(repeat).fill(children).map((_, i) => (
          <div
            key={i}
            className={"marquee__part whitespace-nowrap text-center"}
          >
            {children}
          </div>
        ))}
        {/* <TypographyH1 className="marquee__part whitespace-nowrap text-center">
          Not all those who wander are lost
        </TypographyH1>
        <TypographyH1 className="marquee__part whitespace-nowrap">
          Not all those who wander are lost
        </TypographyH1>
        <TypographyH1 className="marquee__part whitespace-nowrap">
          Not all those who wander are lost
        </TypographyH1>
        <TypographyH1 className="marquee__part whitespace-nowrap">
          Not all those who wander are lost
        </TypographyH1>
        <TypographyH1 className="marquee__part whitespace-nowrap">
          Not all those who wander are lost
        </TypographyH1>
        <TypographyH1 className="marquee__part whitespace-nowrap">
          Not all those who wander are lost
        </TypographyH1> */}
      </div>
    </div>
  );
}
