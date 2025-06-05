import { ArrowUpRightIcon, CodeXml, Lock } from "lucide-react";
import Link from "next/link";

import { CompanyProject } from "@/data/experience";

import { Markdown } from "../markdown";
import { StackTag } from "../tech-stack/stack-tag";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Prose } from "../ui/typography";

export const ExperienceProjects = ({
  project,
}: {
  project: CompanyProject;
}) => {
  return (
    <AccordionItem
      value={project.name}
      className="relative w-full border-none last:before:absolute last:before:left-3 last:before:h-full last:before:w-px last:before:bg-background"
    >
      <AccordionTrigger className="py-0">
        <div className="relative z-1 flex items-start gap-4">
          <div className="flex shrink-0 rounded-full border bg-background p-1 text-secondary">
            <CodeXml size={16} />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[15px] decoration-ring underline-offset-4 hover:underline">
              {project.name}

              {project.url ? (
                <Link
                  href={project.url}
                  rel="noopener nofollow"
                  target="_blank"
                  className="inline-flex size-5 shrink-0 items-center justify-center text-secondary"
                >
                  <ArrowUpRightIcon className="pointer-events-none" />
                  <span className="sr-only">Open</span>
                </Link>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Lock className="size-3 text-secondary" />
                  </TooltipTrigger>
                  <TooltipContent>Contact for more details.</TooltipContent>
                </Tooltip>
              )}
            </div>
            <span className="text-[13px] text-secondary">
              {project.staffType} | {project.position}
            </span>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="overflow-hidden pl-9">
        <Prose className="text-sm">
          <Markdown>{project.description}</Markdown>
        </Prose>

        <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
          {project.stacks.map((stack) => (
            <StackTag stack={stack} key={stack} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
