import { StaticImport } from "next/dist/shared/lib/get-img-props";

import DailyDev from "@/public/images/dailydev.webp";
import Angular from "@/public/svg/angular.svg";
import Antd from "@/public/svg/antd.svg";
import AWS from "@/public/svg/aws.svg";
import ChatGPT from "@/public/svg/chatgpt.svg";
import Css from "@/public/svg/css.svg";
import Discord from "@/public/svg/discord.svg";
import Docker from "@/public/svg/docker.svg";
import EmailIcon from "@/public/svg/email.svg";
import Github from "@/public/svg/github.svg";
import Graphql from "@/public/svg/graphql.svg";
import HTML from "@/public/svg/html.svg";
import JS from "@/public/svg/js.svg";
import Laravel from "@/public/svg/laravel.svg";
import Linkedin from "@/public/svg/linkedin.svg";
import Mongoose from "@/public/svg/mongodb.svg";
import Moodle from "@/public/svg/moodle.svg";
import NestIcon from "@/public/svg/nestjs.svg";
import NextIcon from "@/public/svg/nextjs.svg";
import Ngrx from "@/public/svg/ngrx.svg";
import Nodejs from "@/public/svg/nodejs.svg";
import PhoneIcon from "@/public/svg/phone.svg";
import PHP from "@/public/svg/php.svg";
import Pug from "@/public/svg/pug.svg";
import ReactIcon from "@/public/svg/react.svg";
import ReactQuery from "@/public/svg/react-query.svg";
import ReactRouter from "@/public/svg/react-router.svg";
import Redux from "@/public/svg/redux.svg";
import Sass from "@/public/svg/sass.svg";
import Shadcn from "@/public/svg/shadcn.svg";
import Tailwind from "@/public/svg/tailwindcss.svg";
import TelegramIcon from "@/public/svg/telegram.svg";
import TS from "@/public/svg/ts.svg";
import ZaloIcon from "@/public/svg/zalo.svg";

export const PROFILE = {
  firstName: "Đức Thuỷ",
  lastName: "Nguyễn",
  fullName: "Nguyễn Đức Thuỷ",
  logoText: "darwin",
  shortName: "ndthuy",
  jobTitle: "Fullstack Developer",
  bio: "A passionate FE with a keen eye for detail and a love for crafting beautiful.",
  keywords: ["ndarwin", "Đức Thuỷ", "fe developer"],
  about: `Hello! I’m Đức Thuỷ (you can also call me Darwin)! \n\n 
A passionate Fullstack Developer with over 3 years of hands-on experience building robust, scalable, and user-centric web applications. I specialize in crafting seamless digital experiences from frontend to backend, leveraging modern technologies and best practices.\n\n
Throughout my career, I have collaborated with diverse teams and clients, delivering solutions that not only meet technical requirements but also drive business value. Whether it’s designing intuitive user interfaces or architecting efficient server-side logic, I take pride in delivering clean, maintainable code and staying up-to-date with the latest industry trends.\n\n
I thrive in dynamic environments, am quick to adapt, and am always eager to tackle new challenges. Let’s build something amazing together!`,
};

export interface ContactItem {
  name: string;
  value: string;
  link: string;
  icon: string | StaticImport;
}

export const CONTACTS = [
  {
    name: "phone",
    value: "0982782923",
    link: "tel:0982782923",
    icon: PhoneIcon,
  },
  {
    name: "email",
    value: "ducthuy1705@gmail.com",
    link: "mailto:ducthuy1705@gmail.com",
    icon: EmailIcon,
  },
  {
    name: "telegram",
    value: "@ndarwin17",
    link: "https://t.me/ndarwin17",
    icon: TelegramIcon,
  },
  {
    name: "zalo",
    value: "Đức Thuỷ",
    link: "https://zalo.me/0982782923",
    icon: ZaloIcon,
  },
];

export const SOCIALS = [
  {
    name: "github",
    value: "@darwin",
    link: "https://github.com/DucThuy2000",
    icon: Github,
  },
  {
    name: "linkedin",
    value: "Đức Thuỷ",
    link: "https://www.linkedin.com/in/%C4%91%E1%BB%A9c-thu%E1%BB%B7-878912191/",
    icon: Linkedin,
  },
  {
    name: "facebook",
    value: "#ducthuy1705",
    link: "https://discord.com/invite/X6YHxGzP",
    icon: Discord,
  },
  {
    name: "daily.dev",
    value: "@ndarwin",
    link: "https://app.daily.dev/ndarwin",
    icon: DailyDev,
  },
];

export const STACKS = [
  {
    key: "js",
    title: "Javascript",
    icon: JS,
  },
  {
    key: "ts",
    title: "Typescript",
    icon: TS,
  },
  {
    key: "angular",
    title: "Angular",
    icon: Angular,
  },
  {
    key: "ngrx",
    title: "NgRx",
    icon: Ngrx,
  },
  {
    key: "react",
    title: "React",
    icon: ReactIcon,
  },
  {
    key: "redux",
    title: "Redux",
    icon: Redux,
  },
  {
    key: "react-query",
    title: "React Query",
    icon: ReactQuery,
  },
  {
    key: "react-router",
    title: "React Router",
    icon: ReactRouter,
  },
  {
    key: "nextjs",
    title: "NextJS",
    icon: NextIcon,
  },
  {
    key: "nestjs",
    title: "NestJS",
    icon: NestIcon,
  },
  {
    key: "nodejs",
    title: "NodeJS",
    icon: Nodejs,
  },
  {
    key: "docker",
    title: "Docker",
    icon: Docker,
  },
  {
    key: "antd",
    title: "Ant Design",
    icon: Antd,
  },
  {
    key: "shadcn",
    title: "Shadcn UI",
    icon: Shadcn,
  },
  {
    key: "pug",
    title: "Pug",
    icon: Pug,
  },
  {
    key: "sass",
    title: "Sass",
    icon: Sass,
  },
  {
    key: "css",
    title: "CSS",
    icon: Css,
  },
  {
    key: "php",
    title: "PHP",
    icon: PHP,
  },
  {
    key: "moodle",
    title: "Moodle",
    icon: Moodle,
  },
  {
    key: "laravel",
    title: "Laravel",
    icon: Laravel,
  },
  {
    key: "html",
    title: "HTML",
    icon: HTML,
  },
  {
    key: "graphql",
    title: "GraphQL",
    icon: Graphql,
  },
  {
    key: "tailwind",
    title: "Tailwind CSS",
    icon: Tailwind,
  },
  {
    key: "mongoose",
    title: "Mongoose",
    icon: Mongoose,
  },
  {
    key: "aws",
    title: "AWS Lambda",
    icon: AWS,
  },
  {
    key: "github",
    title: "GitHub",
    icon: Github,
  },
  {
    key: "chatgpt",
    title: "ChatGPT",
    icon: ChatGPT,
  },
];
