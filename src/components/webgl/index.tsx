"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Html, Loader } from "@react-three/drei";
import FadeUp from "../animation/fade-up";
import { TypographyDisplay } from "../typography";
import Wave from "./shader/wave";

type Props = {};

export default function WebGL({}: Props) {
  return (
    <>
      <Canvas camera={{ position: [3, 3, 3] }} className="-z-10">
        <Experience />
        <Content />
        <Loader />
      </Canvas>
    </>
  );
}

const Experience = (props: Props) => {
  //   const { scale } = useControls({ scale: -2 });
  return (
    <>
      {/* <Perf position={"top-left"} /> */}
      {/* <OrbitControls /> */}
      {/* <Grid cellColor="white" args={[10, 10]} /> */}
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
      </mesh> */}
      <Wave />
    </>
  );
};

const Content = () => {
  return (
    <Html center className="">
      <article className="grid h-full w-full grow place-items-center">
        <FadeUp>
          <TypographyDisplay>
            Creative <br /> Developer
          </TypographyDisplay>
        </FadeUp>
      </article>
    </Html>
  );
};
