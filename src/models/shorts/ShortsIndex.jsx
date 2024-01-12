import React from "react";
import Shorts from "./Shorts";
import { Box } from "@mui/material";
import ModelFoot from "../../components/ModelFoot";

export default function ShortsIndex() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ backgroundColor: "gainsboro", height: "73vh", width: "50%" }}
        >
          <Shorts />
        </Box>
      </Box>
      <ModelFoot sx={{ height: "20vh" }} />
    </>
  );
}
