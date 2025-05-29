import type { Metadata } from "next";
import "./globals.css";
import { geistSans, jetBrainsMono } from "@/lib/font";
import { AppProvider } from "@/providers/app.provider";
import { SITE_INFO } from "@/const/config";

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
