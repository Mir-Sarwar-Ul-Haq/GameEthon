import React from "react";
import { Grid, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

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
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            </Grid>
          ))}
        {games.map((game) => (
          <Grid item xs={12} md={6} lg={4}>
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default GameGrid;
