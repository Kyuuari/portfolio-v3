"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import * as React from "react";

export function LenisProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const lenis = useLenis(({}) => {
    // called every scroll
    // lerp: 0.1,
    // smoothWheel: true,
  });

  //smooth scroll lenis
  // const lenis = new Lenis({
  //   lerp: 0.1,
  //   smoothWheel: true,
  // });
  // const scrollFn = () => {
  //   lenis.on("scroll", ScrollTrigger.update);

  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000);
  //   });
  // };
  // requestAnimationFrame(scrollFn);

  return (
    <ReactLenis root options={{}} {...props}>
      {children}
    </ReactLenis>
  );
}
