import React from "react";
import { Grid, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid({ gameQuery }) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from(new Array(12));

  if (error) return <Typography textAlign={"center"}>{error}</Typography>
  return (
      <Grid container spacing={2} pt={3}>
        {isLoading &&
          skeletons.map((_, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              // xl={3}
              justifyItems={"center"}
            >
              <GameCardContainer>
                <GameCardSkeleton />
              </GameCardContainer>
            </Grid>
          ))}
        {data.map((game) => (
          <Grid
            key={game.id}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            // xl={3}
            justifyItems={"center"}
          >
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          </Grid>
        ))}
      </Grid>
  );
}

export default GameGrid;
