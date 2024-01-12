import { Canvas } from "@react-three/fiber";
import React, { Component } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { Box } from "@mui/material";

export class Pants extends Component {
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
        <Canvas camera={{ position: [2, 0, 15] }}>
          <Model />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={true} zoomSpeed={0.5} />
        </Canvas>
      </Box>
    );
  }
}

export default Pants;
