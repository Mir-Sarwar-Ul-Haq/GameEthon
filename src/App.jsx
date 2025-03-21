import { Stack, CssBaseline, Grid } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { useThemeContext } from "./theme/ThemeContextProvider";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";


function App() {
  // const [selectedGenre, setSelectedGenre] = useState(null);
  // const [selectedPlatform, setSelectedPlatform] = useState(null);
  // const [gameQuery, setGameQuery] = useState({});
  const { theme } = useThemeContext();
  const asideWidth = 240;
  const navbarHeight = 0;
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
          md={2}
          sx={{
            width: { xs: 0, md: asideWidth },
            display: { xs: "none", md: "block" },
            position: "sticky",
            top: navbarHeight,
            height: `calc(100vh - ${navbarHeight}px)`,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <GenreList />
        </Grid>
        <Grid item xs={12} md={10}>
          <GameHeading />
          <Stack
            spacing={1}
            direction={{ xs: "column", sm: "row" }}
            px={3}
            pt={3}
            pb={1}
          >
            <PlatformSelector />
            <SortSelector/>
          </Stack>
          <GameGrid/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
