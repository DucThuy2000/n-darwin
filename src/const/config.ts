import { PROFILE } from "./user.const";

export const SITE_INFO = {
  url: process.env.NEXT_PUBLIC_ROOT_URL || "http://localhost:3000",
  name: PROFILE.firstName,
  description: PROFILE.bio,
  keywords: PROFILE.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#4D4D4D",
};
