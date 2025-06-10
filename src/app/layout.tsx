import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";

import { META_THEME_COLORS, SITE_INFO } from "@/const/config";
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
  creator: PROFILE.shortName,
  authors: [
    {
      name: PROFILE.fullName,
      url: SITE_INFO.url,
    },
  ],
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    firstName: PROFILE.firstName,
    lastName: PROFILE.lastName,
    gender: PROFILE.gender,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.dark,
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
