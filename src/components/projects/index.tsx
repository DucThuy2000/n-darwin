import { PROJECTS } from "@/data/project";

import { CollapseList } from "../collapse-list";
import { Accordion } from "../ui/accordion";
import { TitleSection } from "../ui/title-section";
import { ProjectAccordion } from "./project-accordion";

export const Projects = () => {
  return (
    <section id="projects">
      <TitleSection title="projects" />

      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={PROJECTS.slice(0, 2).map((item) => item.name)}
      >
        <CollapseList
          list={PROJECTS}
          max={4}
          renderItem={(item) => <ProjectAccordion item={item} />}
        />
      </Accordion>
    </section>
  );
};
