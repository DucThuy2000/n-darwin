import { StaticImport } from "next/dist/shared/lib/get-img-props";

import StudyLogo from "@/public/images/1study.png";
import DehaVietNam from "@/public/images/deha.png";
import Freelancer from "@/public/svg/freelancer.svg";

import { Project } from "./project";

export type CompanyProject = Pick<
  Project,
  "url" | "name" | "description" | "stacks" | "startDate" | "endDate"
> & {
  staffType: "full-time" | "part-time" | "maintainer";
  position: string;
  teamSize: number;
};

export interface Experience {
  company: string;
  logo: string | StaticImport;
  status: "online" | "offline";
  startDate?: string;
  endDate?: string;
  projects: CompanyProject[];
  logoSize: number;
}

export const EXPERIENCES: Experience[] = [
  {
    company: "1Study",
    logo: StudyLogo,
    logoSize: 18,
    status: "online",
    startDate: "10.2023",
    endDate: "present",
    projects: [
      {
        staffType: "full-time",
        teamSize: 10,
        startDate: "10.2023",
        endDate: "present",
        name: "1Study LMS",
        position: "frontend developer",
        stacks: ["Moodle", "PHP", "Github", "Tencent"],
        description:
          "- All in 1 online learning system. \n - Manage courses, customers, teachers, staffs, tutors, students, sales. \n - Calculate teachers' salaries based on the classes taught and the status of those classes  \n - Connect online courses with tencent. \n - Run cronjob to track class status. \n - eye-catching, easy to use, intuitive, responsive interface.",
      },
      {
        staffType: "full-time",
        teamSize: 10,
        startDate: "10.2023",
        endDate: "present",
        name: "1Study Teacher",
        position: "frontend developer",
        stacks: [
          "React",
          "React Router",
          "React Query",
          "REST Api",
          "Tailwind CSS",
          "Github",
        ],
        description:
          "- The old system for teacher management. \n - Teacher chooses subject, grade level and must pass interview round before officially joining. \n - Allows teachers to sign electronic contracts. \n - Manage teacher's teaching schedule (busy, free).",
      },
      {
        staffType: "full-time",
        teamSize: 10,
        startDate: "10.2023",
        endDate: "present",
        name: "1Study Club",
        position: "frontend developer",
        stacks: [
          "React",
          "React Router",
          "React Query",
          "REST Api",
          "Tailwind CSS",
          "Github",
        ],
        description:
          "- The old system for business management. \n - Manage customers, sales, staffs, financial, tutors, courses. \n - Create courses for students and invite teacher to accept it.\n - Interview teachers and manage their schedule. - Manage formal, trail courses and students' progress.\n - Manage teachers' salary based on the classes taught and the status of those classes.",
      },
      {
        staffType: "maintainer",
        teamSize: 10,
        startDate: "10.2023",
        endDate: "present",
        name: "1Study Microservice",
        position: "backend developer",
        stacks: [
          "NestJS",
          "MongoDB",
          "Firebase",
          "GCP Console",
          "Serverless",
          "GRPC",
          "Pubsub",
          "Github",
          "Jenkins",
          "Docker",
        ],
        description:
          "- Split services and connect them together.\n - Run cronjobs to manage courses and teachers' salaries.\n - Use grpc to communicate services.\n - Build scalable and maintainable server-side applications.",
      },
      {
        staffType: "full-time",
        teamSize: 10,
        startDate: "10.2023",
        endDate: "present",
        name: "1Study CRM",
        position: "fullstack developer",
        stacks: [
          "NextJS",
          "React",
          "Typescript",
          "NestJS",
          "Prisma",
          "MySQL",
          "React Query",
          "TanStack Table",
          "Zustand",
          "Tailwind CSS",
          "Next Intl",
          "Meta Graph API",
          "Moodle",
        ],
        description:
          "- Build an internal CRM for education sales, tutor operations, and customer care.\n - Manage leads with Kanban stages, distribution, duplicate detection, comments, audit logs, and role-based access.\n - Manage customers, students, orders, courses, handover flows, and dashboards for funnel, conversion, and team performance.\n - Integrate Meta marketing data, lead forms, ad insights, Moodle/LMS sync jobs, and background cron workflows.",
      },
      {
        staffType: "full-time",
        teamSize: 10,
        startDate: "10.2023",
        endDate: "present",
        name: "1Study Exams",
        position: "fullstack developer",
        stacks: [
          "NextJS",
          "React",
          "Typescript",
          "Prisma",
          "MySQL",
          "BullMQ",
          "OpenAI",
          "Google GenAI",
          "React Query",
          "Zustand",
          "Tailwind CSS",
          "Shadcn UI",
          "Docker",
        ],
        description:
          "- Build an exam platform for placement tests, practice tests, and assessment workflows.\n - Support admin exam creation, publishing, sections, question banks, media uploads, Excel import/export, and role-based permissions.\n - Support student attempts, timers, retries, grading states, review/report workflows, dashboards, and Moodle user sync.\n - Integrate AI extraction and grading for language/math questions with background workers and retry handling.",
      },
      {
        staffType: "maintainer",
        teamSize: 10,
        startDate: "10.2023",
        endDate: "present",
        name: "1Study AI",
        position: "backend developer",
        stacks: [
          "Python",
          "OpenAI",
          "AWS S3",
          "MoviePy",
          "MySQL",
          "Requests",
          "Cronjob",
        ],
        description:
          "- Build automation jobs for online class recording transcription and lesson summary generation.\n - Download recordings from source URLs or S3, convert media to audio, submit speech-to-text jobs, and poll transcription status.\n - Generate parent-facing Vietnamese JSON summaries with OpenAI and write transcripts/summaries back to Moodle database tables.\n - Add retry limits, job locking, cleanup, and failure statuses for reliable scheduled processing.",
      },
    ],
  },
  {
    company: "Deha Vietnam",
    logo: DehaVietNam,
    logoSize: 32,
    status: "offline",
    startDate: "09.2021",
    endDate: "09.2023",
    projects: [
      {
        staffType: "full-time",
        teamSize: 10,
        startDate: "09.2021",
        endDate: "09.2023",
        name: "Jinya Connect",
        position: "frontend developer",
        url: "https://free.jinya-connect.com/",
        stacks: ["Angular", "Lambda", "GraphQL", "WSS", "Serverless", "Github"],
        description:
          "- A hotel booking website tailored for Japanese customers. \n - Users can search for hotels, view details, and book rooms. \n - Users can book or cancel hotel rooms by date and location, featuring an integrated drag-and-drop interface. \n - View booking history, costs, and check-in/check-out dates. \n - Direct chat with the kitchen for food orders. \n - Intuitive, user-friendly interface suitable for all customer types.",
      },
    ],
  },
  {
    company: "Freelancer",
    logo: Freelancer,
    logoSize: 24,
    status: "online",
    startDate: "06.2021",
    endDate: "present",
    projects: [
      {
        staffType: "part-time",
        teamSize: 1,
        startDate: "06.2021",
        endDate: "present",
        name: "Personal Projects",
        position: "fullstack developer",
        stacks: [
          "NextJS",
          "React",
          "TailwindCSS",
          "Angular",
          "NestJS",
          "Github",
          "Firebase",
          "Docker",
          "MongoDB",
          "NGINX",
          "Laravel",
        ],
        description:
          "- Build website and ensure features are completed according to customer requirements. \n - English to communicate, take care of customers on platforms such as trello, jira, slack \n - Building personal projects to enhance skills and showcase capabilities. \n - Focus on creating user-friendly, responsive, and visually appealing web applications.",
      },
    ],
  },
];
