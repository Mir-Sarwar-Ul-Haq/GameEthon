import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "./theme/ThemeContextProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <SpeedInsights /> */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeContextProvider>
  </StrictMode>
);
