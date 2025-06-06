import { CONTACTS, SOCIALS } from "@/const/user.const";

import { TitleSection } from "../ui/title-section";
import { ContactList } from "./contact-list";

export const Contacts = () => {
  return (
    <section id="contacts">
      <TitleSection title="contacts" />
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-secondary md:max-w-[500px]">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <ContactList label="Contact me here" list={CONTACTS} />
        </div>

        <ContactList
          label="Connect me here"
          list={SOCIALS}
          className="min-w-60"
        />
      </div>
    </section>
  );
};
