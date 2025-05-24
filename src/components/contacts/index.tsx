import { TitleSection } from "../ui/title-section";
import { ContactList } from "./contact-list";

export const Contacts = () => {
  return (
    <section id="contacts">
      <TitleSection title="contacts" />
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <p className="text-secondary md:max-w-[500px]">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <ContactList />
      </div>
    </section>
  );
};
