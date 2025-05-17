"use client";
import { ThemeProvider as Provider } from "next-themes";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider
      storageKey="n-darwin-theme"
      attribute="class"
      disableTransitionOnChange
      defaultTheme="system"
    >
      {children}
    </Provider>
  );
};
