import { Box, Typography } from "@mui/material";
import React from "react";

export default function ModelSide() {
  return (
    <Box sx={{ml: 2}}>
      <Typography>SPLY</Typography>
      <Typography>Regular price €92,95</Typography>
      <Typography>DELIVERY WITHIN 4 WEEKS</Typography>
      <Box sx={{ display: "flex", justifyContent: "left" }}>
        <Typography>SIZE 1 </Typography>
        <Typography color="darkgray"> 2 3 SIZE GUIDE</Typography>
      </Box>
      <Typography>ORDER </Typography>
    </Box>
  );
}
