import React from "react";
import { Box } from "@mui/material";
import Pants from "./pants/Pant";
import ModelFoot from "../components/ModelFoot";

export default function PantIndex() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Box
          sx={{ backgroundColor: "gainsboro", height: "73vh", width: "50%" }}
        >
          <Pants />
        </Box>
      </Box>
      <ModelFoot sx={{ height: "20vh" }} />
    </>
  );
}
