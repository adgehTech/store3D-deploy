import React from "react";
import Pants from "./pants/Pant";
import { Box } from "@mui/material";
import ModelFoot from "../components/ModelFoot";
import ModelSide from "../components/ModelSide";

export default function Model() {
  return (
    <Box sx={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          flex={1}
          sx={{
            display: { lg: "block", sm: "none", xs: "none" },
            minWidth: "20%",
          }}
        >
          <ModelSide />
        </Box>
        <Box flex={3}>
          <Pants />
        </Box>
      </Box>
      <Box flex={1} sx={{ display: { lg: "none", sm: "block" } }}>
        <ModelFoot />
      </Box>
    </Box>
  );
}
