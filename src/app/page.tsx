import { Contacts } from "@/components/contacts";
import { Overview } from "@/components/overview";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="flex flex-col space-y-16 md:space-y-28">
      <Overview />
      <Contacts />
    </div>
  );
}
