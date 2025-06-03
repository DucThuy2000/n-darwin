import { StaticImport } from "next/dist/shared/lib/get-img-props";

import FontDep from "@/public/images/fonts99.png";
import AskEdtechIcon from "@/public/svg/askedtech.svg";

export interface Project {
  name: string;
  icon: string | StaticImport;
  stacks: string[];
  startDate: string;
  endDate: string;
  isPrivate?: boolean;
  description?: string;
  url: string;
}

export enum ProjectName {
  ASK_EDTECH = "AskEdtech",
  BEAUTY_FONT = "FontDep",
}

export const PROJECTS: Project[] = [
  {
    name: ProjectName.ASK_EDTECH,
    icon: AskEdtechIcon,
    stacks: [
      "NextJS",
      "Typescript",
      "TailwindCSS",
      "NestJS",
      "MongoDB",
      "S3",
      "EC2",
      "Nginx",
    ],
    isPrivate: true,
    startDate: "08.2024",
    endDate: "present",
    description:
      "AskEdtech is a technology forum primarily serving Korean customers, allowing everyone to discuss, post articles, and share knowledge on the website. Below are the main features: \n\n - Post articles, with the ability to insert media such as images and videos.\n - Users can share, save, and comment on articles.\n - A point system for users who actively interact on the platform.\n - Search Functionality: Users can search for articles and comments using keywords.\n - Admin Panel: Admins can manage users, products, articles, and comments.",
    url: "https://askedtech.com",
  },
  {
    name: ProjectName.BEAUTY_FONT,
    icon: FontDep,
    stacks: ["Laravel", "PHP", "Filamentphp", "Docker"],
    isPrivate: true,
    startDate: "04.2025",
    endDate: "06.2025",
    description:
      "FontDep is a website that offers a wide variety of fonts in different styles, suitable for all customers, from technical and business professionals to musicians. It is designed with a minimalist and user-friendly style, making it easy for users to find their favorite fonts.\n\n - Administrators upload fonts to the website.\n - Users can log in and purchase fonts.\n - Users can top up their accounts with different packages (basic, VIP, premium).\n - Financial statistics and management for users. \n - Purchase history and favorites page.\n - Online payment support.",
    url: "https://fontdep.vn/",
  },
];
