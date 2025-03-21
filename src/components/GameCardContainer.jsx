import React from "react";
import {Card, useTheme } from "@mui/material";

function GameCardContainer({children}) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "95%",
        borderRadius: "20px",
        backgroundColor: theme.palette.background.card,
      }}
    >
        {children}
    </Card>
  );
}

export default GameCardContainer;
