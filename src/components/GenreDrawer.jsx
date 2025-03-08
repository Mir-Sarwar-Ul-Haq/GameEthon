import { Box, Drawer, IconButton, useTheme } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GenreList from "./GenreList";
import logo from "../assets/logo.png";

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
        <Box component="img" width={60} src={logo} alt="logo" pl={2} py={2}/>
        <GenreList
          onSelectGenre={onSelectGenre}
          selectedGenre={selectedGenre}
          setOpen={()=>setOpen(false)}
        />
      </Drawer>
    </>
  );
}

export default GenreDrawer;
