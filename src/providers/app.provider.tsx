import React from "react";

import { ThemeProvider } from "./theme.provider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
