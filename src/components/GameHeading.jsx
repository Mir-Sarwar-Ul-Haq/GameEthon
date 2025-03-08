import { Typography } from "@mui/material";
import React from "react";

function GameHeading({ gameQuery }) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <Typography variant="h4" px={3} pt={2}  >{heading}</Typography>;
}

export default GameHeading;
