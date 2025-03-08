import { Box, Drawer, IconButton, useTheme, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GenreList from "./GenreList";
import Logo from "../assets/logo.png";

function GenreDrawer({ onSelectGenre, selectedGenre }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        sx={{
          color: theme.palette.text.primary,
          display: { md: "none", sm: "block" },
        }}
        aria-label="menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: theme.palette.primary.main,
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            },
          },
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => window.location.reload()}
        >
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{
              height: 50,
            }}
          />
          <Typography
            sx={{
              background:
                "linear-gradient(to right, rgb(38, 140, 250) 33%, rgb(146, 109, 250) 50%, rgb(254, 77, 171) 67%)", // Half Blue, Half Pink
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.2rem",
            }}
            mt={2}
          >
            GameEthon
          </Typography>
        </Stack>
        <GenreList
          onSelectGenre={onSelectGenre}
          selectedGenre={selectedGenre}
          setOpen={() => setOpen(false)}
        />
      </Drawer>
    </>
  );
}

export default GenreDrawer;
