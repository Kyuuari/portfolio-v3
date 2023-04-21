import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { fragmentShader } from "./fragment";
import { vertexShader } from "./vertex";
import { Color, Mesh, ShaderMaterial, Vector2 } from "three";
import { useFrame } from "@react-three/fiber";

type Props = {};

export default function Wave({}: Props) {
  const materialRef = useRef<Mesh>(null!);
  const mousePosition = useRef({ x: 0, y: 0 });

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_colorA: { value: new Color("#ff5858") },
      u_colorB: { value: new Color("#7683d5") },
      u_colorC: { value: new Color("#e55eff") },
    }),
    []
  );

  const updateMousePosition = useCallback((e: MouseEvent) => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  useFrame((state, delta) => {
    // Update time uniform
    if (materialRef.current) {
      // Cast the material as ShaderMaterial to access the uniforms property
      (materialRef.current.material as ShaderMaterial).uniforms.u_time.value +=
        delta;

      (materialRef.current.material as ShaderMaterial).uniforms.u_mouse.value =
        new Vector2(
          mousePosition.current.x * 0.3,
          mousePosition.current.y * 0.3
        );
    }
  });

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  return (
    <mesh
      ref={materialRef}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[10, 10, 64, 64]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe
      />
    </mesh>
  );
}
