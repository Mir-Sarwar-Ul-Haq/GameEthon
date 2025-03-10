import { Typography } from "@mui/material";
import React from "react";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

function GameHeading({ gameQuery }) {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Typography variant="h4" px={3} pt={2}>
      {heading}
    </Typography>
  );
}

export default GameHeading;
