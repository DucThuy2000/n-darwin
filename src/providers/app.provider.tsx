import React from "react";

import { CursorShadow } from "@/components/cursor-shadow";

import { ThemeProvider } from "./theme.provider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <CursorShadow />
      {children}
    </ThemeProvider>
  );
};
