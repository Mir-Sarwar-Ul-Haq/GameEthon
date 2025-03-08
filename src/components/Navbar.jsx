import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.png";
import { FormControlLabel, FormGroup, Stack } from "@mui/material";
import { useThemeContext } from "../theme/ThemeContextProvider";
import Search from "./Search";
import ModeSwitch from "./ModeSwitch"; // Import the separated ModeSwitch component

export default function SearchAppBar({onSearch}) {
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
          <Box sx={{ display: "flex", gap: "10px", alignItems:"center", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                sx={{
                  color: theme.palette.text.primary,
                  display: { md: "none", sm: "block" },
                }}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Box
                component="img"
                src={Logo}
                alt="logo"
                sx={{
                  height: 50,
                  marginRight: 2,
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
            <Search onSearch={onSearch}/>
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
