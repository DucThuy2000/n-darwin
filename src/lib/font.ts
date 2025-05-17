import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

export const geistSans = Geist({
  display: "swap",
  variable: "--d-font-sans",
  subsets: ["latin"],
});

export const jetBrainsMono = JetBrains_Mono({
  variable: "--d-font-mono",
  subsets: ["latin"],
  display: "swap",
});
