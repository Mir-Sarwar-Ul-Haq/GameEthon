import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "../css/GameGrid.css";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = Array.from(new Array(12));

  if (error)
    return <Typography textAlign={"center"}>{error.message}</Typography>;
  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      className="hide-scrollbar"
      dataLength={fetchGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p={2}
        >
          <CircularProgress color="" />
        </Box>
      }
    >
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
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
          </React.Fragment>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}

export default GameGrid;
