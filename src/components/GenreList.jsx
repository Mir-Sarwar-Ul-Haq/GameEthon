import React from "react";
import useGenres from "../hooks/useGenres";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
  useTheme,
} from "@mui/material";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList({ onSelectGenre, selectedGenre, setOpen }) {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from(new Array(12));
  const theme = useTheme();

  if (error) return null;
  return (
    <>
      <Typography variant="h5" pl={2}>
          Genres
      </Typography>
      <List>
        {isLoading &&
          skeletons.map((_, index) => <GenreListSkeleton key={index} />)}
        {data.map((genre) => (
          <ListItemButton
            key={genre.id}
            onClick={() => {
              onSelectGenre(genre)
              setOpen(false)
            }}
            sx={{
              backgroundColor: `${
                genre.id === selectedGenre?.id
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
