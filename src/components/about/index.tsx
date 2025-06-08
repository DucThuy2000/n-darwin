import { PROFILE } from "@/const/user.const";

import { Markdown } from "../markdown";
import { TitleSection } from "../ui/title-section";
import { Prose } from "../ui/typography";

export const About = () => {
  return (
    <section id="about">
      <TitleSection title="about" />

      <Prose>
        <Markdown>{PROFILE.about}</Markdown>
      </Prose>
    </section>
  );
};
