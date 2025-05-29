import { SITE_INFO } from "@/const/config";
import { MetadataRoute } from "next";

export default function sitemaps(): MetadataRoute.Sitemap {
  // TODO: loops blog page routes when blog is implemented
  //....

  const routes = ["", "/blog"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
