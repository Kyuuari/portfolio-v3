"use client";
import React, { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
};

export default function FadeUp({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          // markers: true,
        },
      });

      tl.fromTo(
        ref.current,
        {
          y: 30,
          //   yPercent: 20,
          opacity: 0,
          duration: 1.5,
        },
        {
          y: 0,
          //   yPercent: 0,
          opacity: 1,
          duration: 1,
        }
      );
    });

    // Return a cleanup function to unobserve the element
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="font-display scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-8xl"
    >
      {children}
    </div>
  );
}
