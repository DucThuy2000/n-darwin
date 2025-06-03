import { ProjectName, PROJECTS } from "@/data/project";
import { Accordion } from "../ui/accordion";
import { TitleSection } from "../ui/title-section";
import { CollapseList } from "../collapse-list";
import { ProjectAccordion } from "./project-accordion";

export const Projects = () => {
  return (
    <section id="projects">
      <TitleSection title="projects" />

      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={[ProjectName.ASK_EDTECH, ProjectName.BEAUTY_FONT]}
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
