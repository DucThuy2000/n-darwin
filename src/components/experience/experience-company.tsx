import Image from "next/image";

import { Experience } from "@/data/experience";

export const ExperienceCompany = ({ item }: { item: Experience }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex min-w-6 shrink-0 items-center">
        <Image
          src={item.logo}
          alt={item.company}
          quality={100}
          width={item.logoSize || 24}
          height={item.logoSize || 24}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h3 className="text-lg leading-snug font-medium">{item.company}</h3>

          {item.status === "online" && (
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-400 opacity-50"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-secondary">
            {item.startDate} - {item.endDate}
          </span>
        </div>
      </div>
    </div>
  );
};
