import { MetadataRoute } from "next";

import { SITE_INFO } from "@/const/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: `${SITE_INFO.url}/sitemap.ts`,
  };
}
