import React from "react";
import { Box } from "@mui/material";
import ModelFoot from "../../components/ModelFoot";
import Shoe from "./Shoe";

export default function ShoeIndex() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ backgroundColor: "gainsboro", height: "73vh", width: "50%" }}
        >
          <Shoe />
        </Box>
      </Box>
      <ModelFoot sx={{ height: "20vh" }} />
    </>
  );
}
