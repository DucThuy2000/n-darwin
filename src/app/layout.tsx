import type { Metadata } from "next";
import "./globals.css";
import { geistSans, jetBrainsMono } from "@/lib/font";
import { AppProvider } from "@/providers/app.provider";
import { PageLayout } from "@/components/layout";

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
        <AppProvider>
          <PageLayout>{children}</PageLayout>
        </AppProvider>
      </body>
    </html>
  );
}
