import { PROFILE } from "./user.const";

export const SITE_INFO = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://n-darwin.vercel.app",
  name: PROFILE.displayName,
  description: PROFILE.bio,
  keywords: PROFILE.keywords,
};
