import React from "react";
import Pants from "./pants/Pant";
import { Box } from "@mui/material";
import ModelFoot from "../components/ModelFoot";

export default function Model() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ backgroundColor: "gainsboro", height: "73vh", width: "50%" }}
        >
          <Pants />
        </Box>
      </Box>
      <ModelFoot sx={{height: '20vh'}}/>
    </>
  );
}
