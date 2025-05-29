import { SITE_INFO } from "@/const/config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: `${SITE_INFO.url}/sitemap.ts`,
  };
}
