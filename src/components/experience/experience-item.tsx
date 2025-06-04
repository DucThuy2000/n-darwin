import { Experience } from "@/data/experience";

import { Accordion } from "../ui/accordion";
import { ExperienceCompany } from "./experience-company";
import { ExperienceProjects } from "./experience-projects";

export const ExperienceItem = ({ item }: { item: Experience }) => {
  return (
    <div className="flex flex-col gap-4 border-b pb-4">
      <ExperienceCompany item={item} />

      <Accordion
        type="multiple"
        className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border"
        defaultValue={[item.projects[0].name]}
      >
        {item.projects.map((project) => (
          <ExperienceProjects key={project.name} project={project} />
        ))}
      </Accordion>
    </div>
  );
};
