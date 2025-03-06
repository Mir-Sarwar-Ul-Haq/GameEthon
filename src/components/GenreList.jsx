import React from "react";
import useGenres from "../hooks/useGenres";
import {
  Avatar,
  CircularProgress,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data, error, isLoading } = useGenres();

  return (
    <List>
      {isLoading && (
        <Box sx={{ display: "flex" }} px={2}>
          <CircularProgress sx={{color: "white"}} />
        </Box>
      )}
      {data.map((genre) => (
        <ListItemButton key={genre.id}>
          <ListItemAvatar>
            <Avatar src={getCroppedImageUrl(genre.image_background)} />
          </ListItemAvatar>
          <ListItemText primary={genre.name} />
        </ListItemButton>
      ))}
    </List>
  );
}

export default GenreList;
