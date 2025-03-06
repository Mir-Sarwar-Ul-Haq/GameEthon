import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from "@mui/material";

const GenreListSkeleton = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Skeleton variant="circular" width={40} height={40} />
        </ListItemAvatar>
        <ListItemText primary={<Skeleton variant="text" width="80%" />} />
      </ListItem>
    </>
  );
};

export default GenreListSkeleton;
