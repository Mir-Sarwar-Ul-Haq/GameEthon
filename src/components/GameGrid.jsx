import React from "react";
import { Grid, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Typography>{error}</Typography>}
      <Grid container spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Grid item xs={12} md={6} lg={4}>
              <GameCardSkeleton key={skeleton} />
            </Grid>
          ))}
        {games.map((game) => (
          <Grid item xs={12} md={6} lg={4}>
            <GameCard key={game.id} game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default GameGrid;
