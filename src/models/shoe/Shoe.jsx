import { Canvas } from "@react-three/fiber";
import React, { Component } from "react"; 
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

export class Shoe extends Component {
  render() {
    return ( 
      <div className="canva">
      <Canvas  camera={{ position: [2, 0, 15] }}>
        <Model />
        <Environment preset="sunset" />
        <OrbitControls   
          enableZoom={true}
          zoomSpeed={0.5} 
          />
      </Canvas>
    </div> 
    );
  }
}

export default Shoe; 