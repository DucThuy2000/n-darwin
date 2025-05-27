import { About } from "@/components/about";
import { Contacts } from "@/components/contacts";
import { Overview } from "@/components/overview";
import { Stacks } from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col space-y-16 md:space-y-28">
      <Overview />
      <About />
      <Stacks />
      <Contacts />
    </div>
  );
}
