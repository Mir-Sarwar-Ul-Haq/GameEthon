import React from "react";
import { 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Skeleton 
} from "@mui/material";

const GenreListSkeleton = () => {
  const skeletonItems = Array.from(new Array(6));

  return (
    <List>
      {skeletonItems.map((_, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Skeleton variant="circular" width={40} height={40} />
          </ListItemAvatar>
          <ListItemText
            primary={<Skeleton variant="text" width="80%" />}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
