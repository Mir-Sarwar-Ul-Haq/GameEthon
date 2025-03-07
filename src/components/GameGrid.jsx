import React from "react";
import { Grid, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid({ gameQuery }) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons= Array.from(new Array(12));

  return (
    <>
      {error && <Typography>{error}</Typography>}
      <Grid container spacing={2} pt={3}>
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
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
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
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default GameGrid;
