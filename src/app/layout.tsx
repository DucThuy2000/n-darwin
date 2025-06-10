import "@/styles/globals.css";

import type { Metadata } from "next";

import { SITE_INFO } from "@/const/config";
import { PROFILE } from "@/const/user.const";
import { geistSans, jetBrainsMono } from "@/lib/font";
import { AppProvider } from "@/providers/app.provider";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_INFO.name}`,
    default: `${SITE_INFO.name} - ${PROFILE.jobTitle}`,
  },
  description: SITE_INFO.description,
  alternates: {
    // de-duplicate the canonical URL
    canonical: SITE_INFO.url,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
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
