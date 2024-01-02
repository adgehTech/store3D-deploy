import { Canvas } from "@react-three/fiber";
import React, { Component } from "react"; 
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

export class Shoe extends Component {
  render() {
    return ( 
      <div className="canva">
        <Canvas>
          <Model />
          <Environment preset="sunset" />
          <OrbitControls />
        </Canvas>
      </div>   
    );
  }
}

export default Shoe;
