import { PROFILE } from "@/const/user.const";

export const getPageJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date("2025-05-25").toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: PROFILE.firstName,
      identifier: PROFILE.fullName,
      description: PROFILE.about,
      image:
        "https://photos.google.com/photo/AF1QipPs6Sz6458FPv2hGO1iTHyZu-ZHeh5rc6LSDlq3",
    },
  };
};
