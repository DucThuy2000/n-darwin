import type { Metadata } from "next";
import "./globals.css";
import { geistSans, jetBrainsMono } from "@/lib/font";
import { AppProvider } from "@/providers/app.provider";

export const metadata: Metadata = {
  title: "n-darwin",
  description: "n-darwin's world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
