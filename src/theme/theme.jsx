import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: { main: grey[900] },
            secondary: { main: grey[500] },
            divider: grey[500],
            background: {
              default: grey[900],
              paper: grey[400],
              card: grey[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }
        : {
            primary: { main: grey[100] }, // A vibrant yet balanced blue
            secondary: { main: grey[600] }, // Slightly lighter blue for contrast
            divider: grey[300],
            background: {
              default: "#f5f5f5", // Softer than pure white for better comfort
              paper: grey[300], // Clean white for paper surfaces
              card: grey[100], // Light grey for subtle contrast in cards
            },
            text: {
              primary: grey[900], // Dark text for readability
              secondary: grey[700], // Softer grey for secondary text
            },
          }),
    },
  });

export default getDesignTokens;
