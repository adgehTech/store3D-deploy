import { Box, Typography } from "@mui/material";
import React from "react";

export default function ModelFoot() {
  return (
    <Box sx={{ ml: { sm: 5 } }}>
      <Box
        sx={{ display: "flex", justifyContent: { xs: "center", sm: "left" } }}
      >
        <Typography>SPLY</Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: { xs: "center", sm: "left" } }}
      >
        <Typography>Regular price €92,95</Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: { xs: "center", sm: "left" } }}
      >
        <Typography>DELIVERY WITHIN 4 WEEKS</Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: { xs: "center", sm: "left" } }}
      >
        <Typography>SIZE 1 </Typography>
        <Typography color="darkgray"> 2 3 SIZE GUIDE</Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: { xs: "center", sm: "left" } }}
      >
        <Typography>ORDER </Typography>
      </Box>
    </Box>
  );
}
