import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import { Stack } from "@mui/material";
import { useTheme } from "@emotion/react";

function GameCardSkeleton() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: 380,
        borderRadius: "20px",
        backgroundColor: theme.palette.background.card,
      }}
    >
      {/* Skeleton for the image */}
      <Skeleton variant="rectangular" height={240} />

      <CardContent>
        {/* Skeleton for the game title */}
        <Skeleton variant="text" height={40} width="80%" />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          {/* Skeleton for platform icons (example: circular) */}
          <Stack direction="row" spacing={1}>
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton variant="circular" width={30} height={30} />
          </Stack>

          {/* Skeleton for critic score */}
          <Skeleton variant="text" width={50} />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default GameCardSkeleton;
