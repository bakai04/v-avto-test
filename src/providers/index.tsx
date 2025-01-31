"use client";

import { Provider } from "react-redux";
import { setupStore } from "@/shared/store/store";
import { ThemeProvider } from "@mui/system";
import { theme } from "@/shared/theme";
import { CssBaseline } from "@mui/material";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={setupStore}>
      <ThemeProvider theme={theme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}
