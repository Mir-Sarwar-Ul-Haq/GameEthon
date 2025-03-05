import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import getCroppedImageUrl from "../services/image-url";

function GameCard({ game }) {
   const  theme = useTheme()
  return (
    <Card sx={{ maxWidth: 380, borderRadius: "20px", backgroundColor: theme.palette.background.card }}>
      <CardMedia
        sx={{ height: 240 }}
        image={getCroppedImageUrl(game.background_image)}
        title={game.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Stack>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default GameCard;
