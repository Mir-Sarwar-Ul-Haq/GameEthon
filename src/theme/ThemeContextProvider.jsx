import { createContext, useContext } from "react";
import { useColorTheme } from "./use-color-theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

export const ThemeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
  theme: null, // Ensure it is not empty
});

export const ThemeContextProvider = ({ children }) => {
  const { theme, mode, toggleColorMode } = useColorTheme();

  if (!theme) return null; // Prevent rendering if theme is not ready

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
