import { Box } from "@mui/material";
import React from "react";
import PantIndex from "./PantIndex";
import ShoeIndex from "./ShoeIndex";
import ShortsIndex from "./ShortsIndex";

export default function Models() {
  return (
    <Box>
      <PantIndex />
      <ShoeIndex />
      <ShortsIndex />
    </Box>
  );
}
