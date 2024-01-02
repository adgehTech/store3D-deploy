// import React from "react";

// import { useGLTF } from "@react-three/drei";

// export function Model (props) {
//     const model = useGLTF("/assets/pants/pants.glb");
//     return (
//         <mesh position={[1, -6, 0]}>
//             <primitive object={model.scene}/>
//         </mesh>
//     )
// }

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const model = useGLTF("/assets/pants/pants.glb");

  // Use useFrame to perform updates on each frame
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const rotationSpeed = 0.5; 

    // Rotate 360 degrees over time
    model.scene.rotation.y = elapsedTime * rotationSpeed;
  });

  return <mesh position={[1, -2, 0]}>
              <primitive object={model.scene}/>
          </mesh>
}
