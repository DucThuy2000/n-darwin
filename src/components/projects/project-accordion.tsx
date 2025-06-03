import { Project, PROJECTS } from "@/data/project";
import { Markdown } from "../markdown";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";
import { Prose } from "../ui/typography";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

export const ProjectAccordion = ({ item }: { item: Project }) => {
  return (
    <div className="flex items-center border-b gap-6">
      <Image src={item.icon} alt={item.name} width={22} height={22} />
      <AccordionItem value={item.name} className="w-full">
        <AccordionTrigger>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-heading leading-snug text-balance decoration-ring underline-offset-4 hover:underline flex items-center gap-1">
              {item.name}

              <Link
                href={item.url}
                target="_blank"
                rel="noopener"
                className="flex size-5 shrink-0 items-center justify-center text-secondary"
              >
                <ArrowUpRightIcon className="pointer-events-none" />
                <span className="sr-only">Open</span>
              </Link>
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

          <div className="flex gap-2 mt-4 flex-wrap md:mt-6">
            {item.stacks.map((stack) => (
              <span
                key={stack}
                className="inline-block rounded-full px-2 py-1 text-xs font-medium text-secondary border border-primary/60"
              >
                {stack}
              </span>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};
