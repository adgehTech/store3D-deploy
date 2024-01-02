import React from "react";

import { useGLTF } from "@react-three/drei";

export function Model (props) {
    const model = useGLTF("/assets/shorts/shorts.glb");
    return (
        <mesh>
            <primitive object={model.scene}/>
        </mesh>
    )
}