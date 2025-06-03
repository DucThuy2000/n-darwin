import { About } from "@/components/about";
import { Contacts } from "@/components/contacts";
import { PageLayout } from "@/components/layout";
import { Overview } from "@/components/overview";
import { Projects } from "@/components/projects";
import { Stacks } from "@/components/tech-stack";
import { getPageJsonLd } from "@/lib/scripts/schema";

export default function Home() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPageJsonLd()) }}
      />

      <div className="flex flex-col space-y-16 md:space-y-28">
        <Overview />

        <About />

        <Stacks />

        <Projects />

        <Contacts />
      </div>
    </PageLayout>
  );
}
