import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function ContinuousSlider({ state, setState }) {
  return (
    <Box sx={{ width: 200 }}>
      <Stack
        // spacing={2}
        direction="row"
        alignItems="center"
        justifyContent={"center"}
        margin={0}
      >
        <VolumeDown />
        <Slider
          color="error"
          aria-label="Volume"
          max={100}
          min={0}
          step={1}
          value={state}
          valueLabelDisplay="auto"
          onChange={(e) => setState(e.target.value)}
        />
        <VolumeUp />
      </Stack>
    </Box>
  );
}
