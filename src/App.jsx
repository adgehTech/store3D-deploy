import { Canvas } from "@react-three/fiber";
import React, { Component } from "react"; 
import { Model } from "./models/Model";
import { Environment, OrbitControls } from "@react-three/drei";

export class App extends Component {
  render() {
    return (
      <>
      <div className="canva">
        <Canvas>
          <Model />
          <Environment preset="sunset" />
          <OrbitControls />
        </Canvas>
      </div> 
      {/* other */}
      </>
    );
  }
}

export default App;
