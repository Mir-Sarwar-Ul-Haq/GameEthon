import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { Stack } from "@mui/material";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

function GameCard({ game }) {
  return (
    <>
      <CardMedia
        sx={{ height: 240 }}
        image={getCroppedImageUrl(game.background_image)}
        title={game.name}
      />
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-between"} mb={1}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Stack>
        <Typography gutterBottom variant="h5" component="div" fontSize={18}>
          {game.name} 
        </Typography>
        <Emoji rating={game.rating_top}/>
      </CardContent>  
    </>
  );
}

export default GameCard;
