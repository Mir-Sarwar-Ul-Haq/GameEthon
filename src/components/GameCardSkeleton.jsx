import React from "react";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import { Stack } from "@mui/material";

function GameCardSkeleton() {
  return (
    <>
      {/* Skeleton for the image */}
      <Skeleton variant="rectangular" height={240} />

      <CardContent>
        {/* Skeleton for the game title */}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 1, mb: 1 }}
        >
          {/* Skeleton for platform icons (example: circular) */}
          <Stack direction="row" spacing={1} >
            <Skeleton variant="circular" width={30} height={30} />
            <Skeleton variant="circular" width={30} height={30} />
            <Skeleton variant="circular" width={30} height={30} />
            <Skeleton variant="circular" width={30} height={30} />
          </Stack>

          {/* Skeleton for critic score */}
          <Skeleton variant="text" width={40} height={45} />
        </Stack>
        <Skeleton variant="text" height={40} width="80%" />
      </CardContent>
    </>
  );
}

export default GameCardSkeleton;
