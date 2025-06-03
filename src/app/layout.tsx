import "@/styles/globals.css";

import type { Metadata } from "next";

import { SITE_INFO } from "@/const/config";
import { geistSans, jetBrainsMono } from "@/lib/font";
import { AppProvider } from "@/providers/app.provider";

export const metadata: Metadata = {
  title: "n-darwin",
  description: "n-darwin's world",
  alternates: {
    canonical: SITE_INFO.url,
  },
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
