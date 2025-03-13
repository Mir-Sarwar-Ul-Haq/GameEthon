import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList({ setOpen = () => {} }) {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from(new Array(12));
  const theme = useTheme();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  return (
    <>
      <Typography variant="h5" pl={2}>
        Genres
      </Typography>
      <List>
        {isLoading &&
          skeletons.map((_, index) => <GenreListSkeleton key={index} />)}
        {data?.results.map((genre) => (
          <ListItemButton
            key={genre.id}
            onClick={() => {
              setSelectedGenreId(genre.id);
              setOpen(false);
            }}
            sx={{
              backgroundColor: `${
                genre.id === selectedGenreId
                  ? theme.palette.secondary.main
                  : "inherit"
              }`,
              // color: `${genre.id === selectedGenre?.id ? "white" : "inherit"}`,
            }}
          >
            <ListItemAvatar>
              <Avatar src={getCroppedImageUrl(genre.image_background)} />
            </ListItemAvatar>
            <ListItemText primary={genre.name} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

export default GenreList;
