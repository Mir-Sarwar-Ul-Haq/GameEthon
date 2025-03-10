import { createTheme } from "@mui/material/styles";
import { grey, green, yellow  } from "@mui/material/colors";


export const getDesignTokens = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: { main: grey[900] },
            secondary: { main: grey[700] },
            divider: grey[500],
            background: {
              default: grey[900],
              paper: grey[800],
              card: grey[900],
              button: grey[800]
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
            score: {
              primary: green[200],
              secondary: yellow[200]
            },
            button: {
              primary: grey[800],
            }
          }
        : {
            primary: { main: grey[100] }, // A vibrant yet balanced blue
            secondary: { main: grey[400] }, // Slightly lighter blue for contrast
            divider: grey[300],
            background: {
              default: "#f5f5f5", // Softer than pure white for better comfort
              paper: grey[200], // Clean white for paper surfaces
              card: grey[100], // Light grey for subtle contrast in cards
              button: grey[200]
            },
            text: {
              primary: grey[900], // Dark text for readability
              secondary: grey[700], // Softer grey for secondary text
            },
            score: {
              primary: green[600],
              secondary: yellow[600]
            },
            button: {
              primary: grey[300],
            }
          }),
    },
  });

export default getDesignTokens;
