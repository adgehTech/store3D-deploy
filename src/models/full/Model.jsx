import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model() {
  const model = useGLTF("/assets/full/full.glb");

  // Use useFrame to perform updates on each frame
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const rotationSpeed = 0.5;

    // Rotate 360 degrees over time
    model.scene.rotation.y = elapsedTime * rotationSpeed;
  });

  return (
    <mesh position={[1.75, 0, 13.5]}>
      <primitive object={model.scene} />
    </mesh>
  );
}
