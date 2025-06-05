import Image from "next/image";

import { Project } from "@/data/project";

import { Markdown } from "../markdown";
import { ProjectExternalLink } from "../project-external-link";
import { StackTag } from "../tech-stack/stack-tag";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Prose } from "../ui/typography";

export const ProjectAccordion = ({ item }: { item: Project }) => {
  return (
    <div className="flex items-center gap-6 border-b">
      <Image src={item.icon} alt={item.name} width={22} height={22} />

      <AccordionItem value={item.name} className="w-full">
        <AccordionTrigger>
          <div className="flex flex-col gap-1">
            <div className="font-heading flex items-center gap-1 text-base leading-snug text-balance decoration-ring underline-offset-4 hover:underline">
              {item.name}

              <ProjectExternalLink url={item.url} />
            </div>
            <span className="text-secondary">
              {item.startDate} - {item.endDate}
            </span>
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <Prose className="text-sm">
            <Markdown>{item.description}</Markdown>
          </Prose>

          <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
            {item.stacks.map((stack) => (
              <StackTag stack={stack} key={stack} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};
