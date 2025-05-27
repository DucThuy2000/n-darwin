import { ABOUT_MYSELF } from "@/const/user.const";
import { Markdown } from "../markdown";
import { TitleSection } from "../ui/title-section";
import { Prose } from "../ui/typography";
import { Stacks } from "../tech-stack";

export const About = () => {
  return (
    <section id="about">
      <TitleSection title="about" />
      <Prose>
        <Markdown>{ABOUT_MYSELF}</Markdown>
      </Prose>
      <Stacks />
    </section>
  );
};
