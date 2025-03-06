import React from "react";
import { Grid, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Typography>{error}</Typography>}
      <Grid container spacing={2}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              // xl={3}
              justifyItems={"center"}
            >
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            </Grid>
          ))}
        {data.map((game) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            // xl={3}
            justifyItems={"center"}
          >
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
