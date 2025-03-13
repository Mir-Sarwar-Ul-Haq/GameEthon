import { Typography } from "@mui/material";
import React from "react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

function GameHeading() {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Typography variant="h4" px={3} pt={2}>
      {heading}
    </Typography>
  );
}

export default GameHeading;
