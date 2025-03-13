import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/logo.png";
import { FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import { useThemeContext } from "../theme/ThemeContextProvider";
import Search from "./Search";
import ModeSwitch from "./ModeSwitch"; // Import the separated ModeSwitch component
import GenreDrawer from "./GenreDrawer";

export default function SearchAppBar({}) {
  const theme = useTheme();
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Stack sx={{ flexGrow: 1, justifyContent: "center" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <GenreDrawer />
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
                mr={2}
                onClick={() => window.location.reload()}
              >
                <Box
                  component="img"
                  src={Logo}
                  alt="logo"
                  sx={{
                    height: 50,
                    display: { xs: "none", md: "block" },
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
            </Box>

            <Search />
          </Box>
          <FormGroup>
            <FormControlLabel
              sx={{ color: theme.palette.text.primary }}
              control={
                <ModeSwitch
                  sx={{ ml: 3 }}
                  defaultChecked
                  onClick={toggleColorMode}
                />
              }
              // label={`${mode.charAt(0).toUpperCase() + mode.slice(1)} mode `}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Stack>
  );
}
