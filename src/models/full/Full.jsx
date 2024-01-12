import { Canvas } from "@react-three/fiber";
import React, { Component } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { Box } from "@mui/material";

export class Full extends Component {
  render() {
    return (
      <Box
        sx={{
          height: "70vh",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <Canvas camera={{ position: [1, 0, 16] }}>
          <ambientLight intensity={0.5} />
          <Model />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={true} zoomSpeed={0.5} />
        </Canvas>
      </Box>
    );
  }
}

export default Full;
