import { EXPERIENCES } from "@/data/experience";

import { TitleSection } from "../ui/title-section";
import { ExperienceItem } from "./experience-item";

export const Experience = () => {
  return (
    <section id="experience">
      <TitleSection title="experience" />
      <div className="flex flex-col gap-4">
        {EXPERIENCES.map((item) => (
          <ExperienceItem key={item.company} item={item} />
        ))}
      </div>
    </section>
  );
};
