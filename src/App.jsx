import { Stack, CssBaseline, Grid } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { useThemeContext } from "./theme/ThemeContextProvider";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  // const [selectedGenre, setSelectedGenre] = useState(null);
  // const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [gameQuery, setGameQuery] = useState({});
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ backgroundColor: "blue" }}>
          <Navbar />
        </Grid>
        <Grid
          item
          xs={false}
          md={3}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery((prevQuery) => ({ ...prevQuery, genre }))
            }
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack spacing={1} direction={"row"} px={1} pt={3} pb={1}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery((prevQuery) => ({ ...prevQuery, platform }))
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelecSordOrder={(sortOrder) =>
                setGameQuery((prevQuery) => ({ ...prevQuery, sortOrder }))
              }
            />
          </Stack>
          <GameGrid gameQuery={gameQuery} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
