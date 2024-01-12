import { Box, Typography } from "@mui/material";
import React from "react";

export default function ModelFoot() {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>SPLY</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Regular price €92,95</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>DELIVERY WITHIN 4 WEEKS</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>SIZE 1 </Typography><Typography color="darkgray"> 2 3 SIZE GUIDE</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>ORDER </Typography>
      </Box>
    </Box>
  );
}
