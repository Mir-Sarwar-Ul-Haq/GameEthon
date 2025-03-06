import React from "react";
import useGenres from "../hooks/useGenres";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList({onSelectGenre}) {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from(new Array(12));
  
  if (error) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItemButton key={genre.id} onClick={()=>onSelectGenre(genre)}>
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
