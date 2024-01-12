import React from "react";
import Pants from "./pants/Pant";
import { Box, Grid } from "@mui/material";
import ModelFoot from "../components/ModelFoot";
import ModelSide from "../components/ModelSide";

export default function Model() {
  return (
    <Box sx={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} 
          flex={1}
          sx={{
            display: { lg: "block", sm: "none", xs: "none" },
          }}
        >
          <ModelSide />
        </Grid>
        <Grid  item xs={12} sm={8} >
          <Pants />
        </Grid>
      </Grid>
      <Box flex={1} sx={{ display: { lg: "none", sm: "block" } }}>
        <ModelFoot />
      </Box>
    </Box>
  );
}
