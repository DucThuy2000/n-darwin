import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Project } from "@/data/project";

import { Markdown } from "../markdown";
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
            <h3 className="font-heading flex items-center gap-1 text-base leading-snug text-balance decoration-ring underline-offset-4 hover:underline">
              {item.name}

              {item.url && (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className="flex size-5 shrink-0 items-center justify-center text-secondary"
                >
                  <ArrowUpRightIcon className="pointer-events-none" />
                  <span className="sr-only">Open</span>
                </Link>
              )}
            </h3>
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
