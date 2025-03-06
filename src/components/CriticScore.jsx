import { useTheme } from "@emotion/react";
import { Paper, Typography } from "@mui/material";
import React from "react";

function CriticScore({ score }) {
  const theme = useTheme();
  let color = score > 75 ? theme.palette.score.primary : score > 60 ? theme.palette.score.secondary : "";
  return (
    <Paper
      sx={{ backgroundColor: theme.palette.background.paper }}
      elevation={0}
    >
      <Typography fontWeight={"bolder"} mx={1} sx={{ color: { color } }}>
        {score}
      </Typography>
    </Paper>
  );
}

export default CriticScore;
