import Image from "next/image";
import Link from "next/link";

import { ContactItem } from "@/const/user.const";
import { cn } from "@/lib/utils";

export const ContactList = ({
  label,
  list,
  className = "",
}: {
  label: string;
  list: ContactItem[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex h-fit w-full flex-col gap-4 border p-4 md:w-fit",
        className
      )}
    >
      <span>{label}</span>

      <div className="flex flex-col gap-2">
        {list.map((contact) => (
          <Link
            href={contact.link}
            key={contact.name}
            target="_blank"
            className="flex items-center gap-2 text-sm text-secondary decoration-white hover:underline"
          >
            <Image
              src={contact.icon}
              alt={contact.name}
              width={24}
              height={24}
            />
            {contact.value}
          </Link>
        ))}
      </div>
    </div>
  );
};
