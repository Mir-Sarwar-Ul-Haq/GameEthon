import { Box, CssBaseline, Grid } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { useThemeContext } from "./theme/ThemeContextProvider";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ backgroundColor: "blue"}}>
          <Navbar />
        </Grid>
        <Grid
          item
          xs={false}
          md={3}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <GenreList onSelectGenre={(genre)=> setSelectedGenre(genre)}/>
        </Grid>
        <Grid item xs={12} md={9}>
          <GameGrid selectedGenre={selectedGenre}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
