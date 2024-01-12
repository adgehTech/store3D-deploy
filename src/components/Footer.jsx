import {
  ColorLensTwoTone,
  FacebookTwoTone,
  GiteTwoTone,
} from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "ButtonShadow",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 5, pb: 0 }}>
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = [
              "primary",
              "neutral",
              "danger",
              "success",
              "warning",
            ];

            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensTwoTone fontSize="small" />
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <FacebookTwoTone />
        </IconButton>
        <IconButton variant="plain">
          <GiteTwoTone />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 5,
        }}
      >
        &copy; All Right Received.
      </Box>
    </Box>
  );
}
