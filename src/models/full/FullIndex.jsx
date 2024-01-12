import React from "react";
import { Box } from "@mui/material";
import Full from "./Full";
import ModelFoot from "../../components/ModelFoot";

export default function FullIndex() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Box
          sx={{ backgroundColor: "gainsboro", height: "73vh", width: "50%" }}
        >
          <Full />
        </Box>
      </Box>
      <ModelFoot sx={{ height: "20vh" }} />
    </>
  );
}
