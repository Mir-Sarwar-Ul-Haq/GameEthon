import { useMemo, useState } from "react";
import getDesignTokens from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = useState("dark");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));

  const modifiedTheme = useMemo(() => getDesignTokens(mode), [mode]);

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
