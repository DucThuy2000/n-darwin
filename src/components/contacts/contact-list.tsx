import { CONTACTS } from "@/const/user.const";
import Image from "next/image";
import Link from "next/link";

export const ContactList = () => {
  return (
    <div className="p-4 border border-secondary flex flex-col gap-4">
      <span>Contact me here</span>
      <div className="flex flex-col gap-2">
        {CONTACTS.map((contact) => (
          <Link
            href={contact.link}
            key={contact.name}
            className="hover:underline decoration-white flex gap-2 items-center text-secondary text-sm"
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
