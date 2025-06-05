import { CodeXml } from "lucide-react";

import { CompanyProject } from "@/data/experience";

import { Markdown } from "../markdown";
import { ProjectExternalLink } from "../project-external-link";
import { StackTag } from "../tech-stack/stack-tag";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
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
            <div className="flex items-center gap-1 text-[15px] decoration-ring underline-offset-4 hover:underline">
              {project.name}

              <ProjectExternalLink url={project.url} />
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
